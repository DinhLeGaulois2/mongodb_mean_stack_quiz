import { TxtImg } from './quiz.txtimg.model';
import { PropAns } from './quiz.propans.model';

export interface QA {
    subject: string;
    question: TxtImg;
    refs:string;
    propAnswers:PropAns[];
}