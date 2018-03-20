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
var router_1 = require("@angular/router");
var QuestionInfo = (function () {
    function QuestionInfo(_addService, router) {
        this._addService = _addService;
        this.router = router;
        this.q_a = {
            subject: "",
            question: { txt: "", img: "" },
            refs: "",
            propAnswers: []
        };
        this.stateChange = new core_1.EventEmitter();
    }
    QuestionInfo.prototype.createPA = function (event) {
        if (this.numProposedAnswers > 0)
            this.q_a.propAnswers = [];
        for (var i = 0; i < this.numProposedAnswers; i++) {
            var onePA = { data: { txt: "", img: "" }, isCorrect: false };
            this.q_a.propAnswers.push(onePA);
        }
    };
    QuestionInfo.prototype.quizDone = function () {
        this._addService.saveQuiz(this.q_a);
        this.router.navigateByUrl('/');
    };
    QuestionInfo.prototype.setNewQuestion = function () {
        this._addService.addOneQuestion(this.q_a);
        this.q_a = {
            subject: "",
            question: { txt: "", img: "" },
            refs: "",
            propAnswers: []
        };
        this.createPA(this.numProposedAnswers);
        this.stateChange.emit("general");
    };
    return QuestionInfo;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], QuestionInfo.prototype, "stateChange", void 0);
QuestionInfo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'questionanswer',
        templateUrl: "add.questionsanswers.component.html",
    }),
    __metadata("design:paramtypes", [quizadd_service_1.AddService, router_1.Router])
], QuestionInfo);
exports.QuestionInfo = QuestionInfo;
//# sourceMappingURL=add.questionsanswers.component.js.map