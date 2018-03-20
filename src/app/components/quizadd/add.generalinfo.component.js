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
var GeneralInfo = (function () {
    function GeneralInfo(_addService) {
        this._addService = _addService;
        this.quizInfo = {
            name: "",
            subject: ""
        };
        this.stateChange = new core_1.EventEmitter();
    }
    GeneralInfo.prototype.changeStateAtParent = function () {
        this._addService.setQuizInfo(this.quizInfo);
        this.stateChange.emit("questionsanswers");
    };
    return GeneralInfo;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], GeneralInfo.prototype, "stateChange", void 0);
GeneralInfo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'generalinfo',
        templateUrl: "add.generalinfo.component.html",
    }),
    __metadata("design:paramtypes", [quizadd_service_1.AddService])
], GeneralInfo);
exports.GeneralInfo = GeneralInfo;
//# sourceMappingURL=add.generalinfo.component.js.map