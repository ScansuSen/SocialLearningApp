import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { pipe } from "rxjs";
import { tap } from 'rxjs/operators';
import { Questions } from "src/app/shared/questions.model";
import { QuestionsService } from "src/app/shared/questions.service";
import { GetAllQuestionsByEducationId } from "../actions/questions.actions";
export interface QuestionModel {
    questions: Questions[];
  
  }
@State<QuestionModel>({
  name: 'Questions',
  defaults: {
    questions: []
   
  }
})

@Injectable()
export class QuestionState {
  constructor(private service: QuestionsService) {}

  @Selector() 
  static getAllQuestionByCategoryId(state: QuestionModel) {
    return state.questions;
  }

  
 

  @Action(GetAllQuestionsByEducationId)
  getAllQuestionByEducationId(ctx: StateContext<QuestionModel>, action: GetAllQuestionsByEducationId) {
    return this.service.getAllQuestionByCategory(action.educationId, action.lessonId)
    .pipe(
        tap(questions => {
            ctx.patchState({ questions });
        }))
  }

  
}