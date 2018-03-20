"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var quizadd_service_1 = require("../../services/quizadd.service");
var QuizAddComponent = (function () {
    function QuizAddComponent(_addservice) {
        this._addservice = _addservice;
        this.state = "general";
        this.statenumber = 0;
    }
    QuizAddComponent.prototype.onNofity = function (message) {
        this.state = "questionsanswers";
    };
    QuizAddComponent.prototype.addOneQuestion = function () {
        var qa;
        qa.question = this.question;
        this.question.txt = "";
        this.question.img = "";
        qa.refs = this.qrefs;
        this.qrefs = "";
        qa.subject = this.questionSubj;
        this.questionSubj = "";
        qa.propAnswers = this.propAnswer;
        this.propAnswer = [];
    };
    return QuizAddComponent;
}());
QuizAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'quiz-add',
        templateUrl: "add.component.html",
    }),
    __metadata("design:paramtypes", [quizadd_service_1.AddService])
], QuizAddComponent);
exports.QuizAddComponent = QuizAddComponent;
//# sourceMappingURL=add.component.js.map