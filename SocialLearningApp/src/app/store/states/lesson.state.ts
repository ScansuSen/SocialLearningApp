import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { pipe } from "rxjs";
import { tap } from 'rxjs/operators';
import { Lessons } from "src/app/shared/lessons.model";
import { LessonsService } from "src/app/shared/lessons.service";
import { GetLessonsByEducationId } from "../actions/lesson.actions";

export interface LessonModel {
lessons: Lessons[];
  
  }
@State<LessonModel>({
  name: 'Lessons',
  defaults: {
   lessons: []
   
  }
})

@Injectable()
export class LessonState {
  constructor(private service: LessonsService) {}

  @Selector() 
  static GetLessonsByEducationId(state: LessonModel) {
    return state.lessons;
  }

  
 

  @Action(GetLessonsByEducationId)
  GetLessonsByEducationId(ctx: StateContext<LessonModel>, action:GetLessonsByEducationId) {
    return this.service.GetLessonsByCategory(action.educationId)
    .pipe(
        tap(lessons => {
            ctx.patchState({ lessons });
        }))
  }

  
}
