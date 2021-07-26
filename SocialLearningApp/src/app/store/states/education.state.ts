import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from 'rxjs/operators';

import { Educations } from "src/app/shared/educations.model";
import { EducationsService } from "src/app/shared/educations.service";
import { GetEducations } from "../actions/education.actions";

export interface EducationModel {
    educations: Educations[];
  
  }
@State<EducationModel>({
  name: 'Education',
  defaults: {
    educations: []
   
  }
})

@Injectable()
export class EducationState {
  constructor(private service: EducationsService) {}

  @Selector() 
  static getAllEducations(state: EducationModel) {
    return state.educations;
  }

  
  @Action(GetEducations)
  getAllQuestionByEducationId(ctx: StateContext<EducationModel>, action: GetEducations) {
    return this.service.getAllQuestions()
    .pipe(
        tap(educations => {
            ctx.patchState({ educations });
        }))
  }
}