import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { QA } from '../models/quiz.qa.model';
import { QuizStruct } from '../models/quiz.struct.model';
import { PropAns } from '../models/quiz.propans.model';


@Injectable()
export class AddService {
    newQuiz: QuizStruct = {
        name: "",
        subject: "",
        q_a: []
    };

    constructor(private _http: Http) { }

    setQuizInfo(name: string, subject: string): void {
        this.newQuiz.name = name;
        this.newQuiz.subject = subject;
    }

    addOneQuestion(oneqa: QA): void {
        this.newQuiz.q_a.push(oneqa);
    }

    saveQuiz(oneqa: QA): void {
        this.newQuiz.q_a.push(oneqa);

        ////////////////////////////////////////////////////////////////////
        // Transform in to an object that could be save into the database //
        ////////////////////////////////////////////////////////////////////
        var correctForm: any = {
            name: this.newQuiz.name,
            subject: this.newQuiz.name,
            q_a: this.getTransformedQuestions(this.newQuiz.q_a)
        }

        this._http.post("/api/quiz/add", correctForm).subscribe();
    }

    // For Every Questions of one Quiz
    getTransformedQuestions(obj: QA[]): any[] {
        var tempo = [];
        // For Each Question
        for (let i = 0; i < obj.length; i++) {
            tempo[i] =
                {
                    subject: obj[i].subject,
                    question: obj[i].question,
                    propAnswers: this.getTransformedPA(obj[i].propAnswers)
                };
        }
        return tempo;
    }

    // Proposed Answers Need to be transformed to fit the MongoDB's model !!!!!!!!!
    getTransformedPA(obj: PropAns[]): any[] {
        var list = [];
        // Proposed Answer of One Question
        for (let j = 0; j < obj.length; j++) {
            list.push({
                txt: obj[j].data.txt,
                img: obj[j].data.img,
                isCorrect: obj[j].isCorrect
            });
        }
        return list;
    }
}