import { PropAnsPlay } from './quiz.propansplay.model';
import { TxtImg } from './quiz.txtimg.model';

export interface QAPlay {
    subject: string;
    question: TxtImg;
    refs:string;
    propAnswers:PropAnsPlay[];
}