import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizHomeComponent } from './components/quizhome/home.component';
import { QuizAddComponent } from './components/quizadd/add.component';
import { QuizPlayComponent } from './components/quizplay/play.component';

const appRoutes: Routes = [
    {
        path: '',
        component: QuizHomeComponent, 
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: QuizAddComponent
    },
    {
        path: 'play',
        component: QuizPlayComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);