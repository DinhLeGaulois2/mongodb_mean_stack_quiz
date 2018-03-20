import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuizHomeComponent } from './components/quizhome/home.component';
import { QuizAddComponent } from './components/quizadd/add.component';
import { GeneralInfo } from './components/quizadd/add.generalinfo.component';
import { QuestionInfo } from './components/quizadd/add.questionsanswers.component';

import { QuizPlayComponent } from './components/quizplay/play.component';
import { QuizQuestionComponent } from './components/quizplay/play-question.component';
import { QuizCheckAnswersComponent } from './components/quizplay/play-checkanswers.component';
import { QuizNavbarComponent } from './components/navbar/navbar.component';

import { AddService } from './services/quizadd.service';
import { PlayService } from './services/quizplay.service';


import { AppComponent } from './app.component';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule],
  declarations: [AppComponent,
    QuizHomeComponent,
    QuizAddComponent,
    QuizPlayComponent,
    QuizNavbarComponent,
    GeneralInfo,
    QuestionInfo,
    QuizQuestionComponent,
    QuizCheckAnswersComponent
  ],
  providers: [
    AddService,
    PlayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
