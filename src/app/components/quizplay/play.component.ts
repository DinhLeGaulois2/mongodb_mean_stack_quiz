import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlayService } from '../../services/quizplay.service';

import { QAPlay } from '../../models/quiz.qaplay.model';
import { QuizStructPlay } from '../../models/quiz.structplay.model';

@Component({
  // moduleId: module.id,
  selector: 'quiz-play',
  templateUrl: `./play.component.html`,
})
export class QuizPlayComponent implements OnInit {
  isQuestion: boolean = true;
  isDone: boolean = false;

  qa: QAPlay;
  quizName: string = "name";
  quizSubject: string = "subject";

  // this will not be used directly, just the middle-man to get
  // the quiz from "Promise" (quizplay.service.ts)
  quiz: QuizStructPlay;

  constructor(private _playservice: PlayService) { }

  ngOnInit(): void {
    this._playservice.promiseQuizStruct.then(val => {
      this.quiz = val;
      this._playservice.setRandomArray(val.q_a.length);

      this.quizName = val.name;
      this.quizSubject = val.subject;
    });
  }

  goCheckAnswers(): void {
    this.isQuestion = false;
    // Update the question (selected proposed answers)
    this._playservice.setQuestion(this.qa);
  }

  setNewQuestion(): void { this.isQuestion = true; }
}
