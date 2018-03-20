import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { QAPlay } from '../models/quiz.qaplay.model';
import { QA } from '../models/quiz.qa.model';
import { QuizStructPlay } from '../models/quiz.structplay.model';
import { PropAnsPlay } from '../models/quiz.propansplay.model';
import { PropAns } from '../models/quiz.propans.model';

@Injectable()
export class PlayService {
    public promiseQuizStruct: Promise<QuizStructPlay>;
    private playingPosition: number = 0;
    private randomList: number[] = [];
    private playingQuestion: QAPlay;

    constructor(private _http: Http) {
        this.promiseQuizStruct = this.getPromiseQuizPlay();
    }

    // update too ...
    setQuestion(newQ: QAPlay): void {
        // !!!!!!! Copying a object is more complicated than "obj1 = obj2". Nested JSON (or other) 
        // structure, should be done with specific method .....
        this.playingQuestion = {
            subject: newQ.subject,
            question: newQ.question,
            refs: newQ.refs,
            propAnswers: newQ.propAnswers
        };
    }

    setInit(): void {
        this.playingQuestion = null;
        this.playingPosition = 0;
        this.setRandomArray(this.randomList.length);

    }

    getPlayingQuestion(): QAPlay { return this.playingQuestion; }

    getPosition(): number { return this.playingPosition; }

    getRandomIndexQA(): number {
        var num: number = this.playingPosition;
        this.playingPosition = (this.playingPosition + 1) % this.randomList.length;
        return this.randomList[num];
    }

    getRandomList(): number[] {
        return this.randomList;
    }

    getPromiseQuizPlay(): Promise<QuizStructPlay> {
        this.promiseQuizStruct = null;
        var quizStructTemp: QuizStructPlay;
        return this._http.get("/api/quiz/play").map(res => res.json()).toPromise().then(
            val =>
                quizStructTemp = {
                    name: val[0].name,
                    subject: val[0].subject,
                    q_a: this.buildQAPlay(val[0].q_a),
                }
        );
    }

    buildQAPlay(q_a: QA[]): QAPlay[] {
        let tqa: QAPlay[] = [];
        // One Question with its Proposed Answers
        for (let i = 0; i < q_a.length; i++) {
            // variables MUST be initialized first!!!!!!!!!!!!!
            tqa[i] = {
                subject: "",
                refs: "",
                question: null,
                propAnswers: []

            };
            tqa[i].subject = q_a[i].subject;
            tqa[i].refs = q_a[i].refs;
            tqa[i].question = {
                txt: q_a[i].question.txt,
                img: q_a[i].question.img
            }

            // Add modified proposed answers
            for (let j = 0; j < q_a[i].propAnswers.length; j++)
                tqa[i].propAnswers[j] = this.buildOnePAPlay(q_a[i].propAnswers[j]);
        }
        return tqa;
    }

    // "pa" is not "PropAns" because the structure from the SERVER is different, hence, we have "pa:any"
    // We need to define "models" for FRONTEND and BACKEND accordingly to avoir such a problem!!!!!!
    buildOnePAPlay(pa: any): PropAnsPlay {
        // variables MUST be initialized first!!!!!!!!!!!!!
        var t: PropAnsPlay = {
            data: { txt: "", img: "" },
            isSelected: false,
            isCorrect: false
        };
        t.data = {
            txt: pa.txt,
            img: pa.img,
        };
        t.isCorrect = pa.isCorrect;
        return t;
    }

    setRandomArray(len: number): void {
        var isTaken: boolean[] = [];
        var num: number = 0;
        var length: number = len;

        for (let i = 0; i < length; i++) { isTaken[i] = false; }

        for (let i: number = 0; i < length; i++) {
            let count: number = 0;
            num = Math.floor(Math.random() * length);
            while (count < length) {
                if (!isTaken[num % length]) {
                    this.randomList[i] = num % length;
                    isTaken[num % length] = true;
                    break;
                }
                else
                    num++;
                count++;
            }
        }
    }
}