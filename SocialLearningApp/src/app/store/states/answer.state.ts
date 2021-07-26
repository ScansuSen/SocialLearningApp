
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { pipe } from "rxjs";
import { tap } from 'rxjs/operators';
import { Answers } from "src/app/shared/answers.model";
import { AnswersService } from "src/app/shared/answers.service";
import { GetAnswerByQuestionId } from "../actions/answers.actions";



export interface AnswerModel {
    answers: Answers[];
  
  }
@State<AnswerModel>({
  name: 'Answers',
  defaults: {
    answers: []
   
  }
})

@Injectable()
export class AnswerState {
  constructor(private service: AnswersService) {}

  @Selector() 
  static getAnswerByCategoryId(state: AnswerModel) {
    return state.answers;
  }

  
 

  @Action(GetAnswerByQuestionId)
  GetAnswerByQuestionId(ctx: StateContext<AnswerModel>, action:GetAnswerByQuestionId ) {
    return this.service.getAnswerByCategory(action.payload)
    .pipe(
        tap(answers => {
            ctx.patchState({ answers});
        }))
  }

  
}
