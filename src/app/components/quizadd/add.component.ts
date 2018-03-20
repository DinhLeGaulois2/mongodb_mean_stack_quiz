import { Component, OnInit } from '@angular/core';

import { QA } from '../../models/quiz.qa.model';
import { PropAns } from '../../models/quiz.propans.model';
import { TxtImg } from '../../models/quiz.txtimg.model';
import { QuizStruct } from '../../models/quiz.struct.model';

@Component({
  // moduleId: module.id,
  selector: 'quiz-add',
  templateUrl: `./add.component.html`,
})
export class QuizAddComponent {
  state: string="general";
  statenumber: number = 0;

  numProposedAnswers: number;
  quizName:string;
  quizSubject:string;

  q_a:QA[];
  questionSubj:string;
  question:TxtImg;
  qrefs:string;
  propAnswer:PropAns[];

  constructor() { }

  onNofity(message:string):void{
    this.state = message;
  }

  addOneQuestion():void{
    let qa:QA;
    qa.question = this.question;
    this.question.txt = "";    
    this.question.img = "";

    qa.refs = this.qrefs;
    this.qrefs = "";
    qa.subject = this.questionSubj;
    this.questionSubj = "";

    qa.propAnswers = this.propAnswer;
    this.propAnswer = [];
  }

}
