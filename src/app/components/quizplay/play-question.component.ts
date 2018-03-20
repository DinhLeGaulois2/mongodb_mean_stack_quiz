import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { PlayService } from '../../services/quizplay.service';

import { QAPlay } from '../../models/quiz.qaplay.model';

@Component({
  selector: 'quiz-question-play',
  templateUrl: `./play-question.component.html`,
})
export class QuizQuestionComponent implements OnInit {
  qa: QAPlay;

  @Output() stateChange: EventEmitter<any> = new EventEmitter();


  constructor(private _playservice: PlayService) { }

  ngOnInit() {
    this.setThenGetOneQA();
  }

  isDefinedQA(): boolean {
    return typeof (this.qa) !== "undefined";
  }

  setThenGetOneQA(): void {
    this._playservice.promiseQuizStruct.then(res => {
      const t_qa: QAPlay = res.q_a[this._playservice.getRandomIndexQA()];
      
      // !!!!!!! Copying a object is more complicated than "obj1 = obj2". Nested JSON (or other) 
      // structure, should be done with specific method .....
      this.qa = {
        subject: t_qa.subject,
        question: t_qa.question,
        refs: t_qa.refs,
        propAnswers: t_qa.propAnswers

      };
      this._playservice.setQuestion(this.qa);
    });
  }

  goCheckAnswers() {
    this._playservice.setQuestion(this.qa);
    this.stateChange.emit();
  }
}