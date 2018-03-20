import { Component, Input, EventEmitter, Output } from '@angular/core';

import { AddService } from '../../services/quizadd.service';

@Component({
  // moduleId: module.id,
  selector: 'generalinfo',
  templateUrl: `./add.generalinfo.component.html`,
})
export class GeneralInfo {
    name:string;
    subject:string;

  @Output() stateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _addService: AddService) { }

  changeStateAtParent() {
    this._addService.setQuizInfo(this.name, this.subject);
    this.stateChange.emit("questionsanswers");
  }
}
