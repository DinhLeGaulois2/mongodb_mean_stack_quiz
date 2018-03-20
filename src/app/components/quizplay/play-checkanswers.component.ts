import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PlayService } from '../../services/quizplay.service';

import { QAPlay } from '../../models/quiz.qaplay.model';

@Component({
  selector: 'quiz-play-check',
  templateUrl: `./play-checkanswers.component.html`,
})
export class QuizCheckAnswersComponent implements OnInit {
  qa: QAPlay;
  isMore: boolean = true;

  @Output() stateChange: EventEmitter<any> = new EventEmitter();

  constructor(private _playservice: PlayService, private router: Router) { }

  ngOnInit() {
    var t_qa:QAPlay = this._playservice.getPlayingQuestion();

    // !!!!!!! Copying a object is more complicated than "obj1 = obj2". Nested JSON (or other) 
    // structure, should be done with specific method .....
    this.qa = {
            subject:t_qa.subject,
            question:t_qa.question,
            refs:t_qa.refs,
            propAnswers:t_qa.propAnswers
        
      };
  }

  quizStopPlaying(): void {
    this._playservice.setInit();
    this.router.navigateByUrl('/');
  }

  playAgain():void{
    this.stateChange.emit();
  }

  isDefinedQA(): boolean {
    return typeof (this.qa) !== "undefined";
  }
}
