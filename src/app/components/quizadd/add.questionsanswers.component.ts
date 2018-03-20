import { Component, EventEmitter, Output } from '@angular/core';
import { QA } from '../../models/quiz.qa.model';
import { TxtImg } from '../../models/quiz.txtimg.model';
import { PropAns } from '../../models/quiz.propans.model';

import { AddService } from '../../services/quizadd.service';

import { Router } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'questionanswer',
  templateUrl: `./add.questionsanswers.component.html`,
})
export class QuestionInfo {
  q_a: QA = {
    subject: "",
    question: { txt: "", img: "" },
    refs: "",
    propAnswers: []
  };

  numProposedAnswers: number;

  constructor(private _addService: AddService, private router: Router) { }

  @Output() stateChange: EventEmitter<string> = new EventEmitter<string>();

  createPA(event: number): void {
    if (this.numProposedAnswers > 0)
      this.q_a.propAnswers = [];
    for (let i = 0; i < this.numProposedAnswers; i++) {
      let onePA: PropAns = { data: { txt: "", img: "" }, isCorrect: false };
      this.q_a.propAnswers.push(onePA)
    }
  }

  quizDone(): void {
    this._addService.saveQuiz(this.q_a);
    this.router.navigateByUrl('/');
  }

  setNewQuestion(): void {
    this._addService.addOneQuestion(this.q_a);
    this.q_a = {
      subject: "",
      question: { txt: "", img: "" },
      refs: "",
      propAnswers: []
    };
    this.createPA(this.numProposedAnswers);
    this.stateChange.emit("general");
  }
}
