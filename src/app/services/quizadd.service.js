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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AddService = (function () {
    function AddService(_http) {
        this._http = _http;
        this.newQuiz = {
            name: "",
            subject: "",
            q_a: []
        };
    }
    AddService.prototype.setQuizInfo = function (qi) {
        this.newQuiz.name = qi.name;
        this.newQuiz.subject = qi.subject;
    };
    AddService.prototype.addOneQuestion = function (oneqa) {
        this.newQuiz.q_a.push(oneqa);
    };
    AddService.prototype.saveQuiz = function (oneqa) {
        this.newQuiz.q_a.push(oneqa);
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("services - quizadd - newQuiz: " + JSON.stringify(this.newQuiz, null, 5));
        this._http.post("/api/quiz/add", this.newQuiz).subscribe(function (val) { return console.log(val); });
    };
    return AddService;
}());
AddService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AddService);
exports.AddService = AddService;
//# sourceMappingURL=quizadd.service.js.map