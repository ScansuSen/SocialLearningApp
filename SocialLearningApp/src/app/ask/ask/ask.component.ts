import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Educations } from 'src/app/shared/educations.model';
import { Lessons } from 'src/app/shared/lessons.model';
import { GetEducations } from 'src/app/store/actions/education.actions';

import { EducationState } from 'src/app/store/states/education.state';
import { LessonState } from 'src/app/store/states/lesson.state';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  educationId!: number;
  lessonId!: number;
  
  onchange(id:number){
    this.educationId = id;
    
    console.log("selected id " + id);

   
  }
 
  educationList! : Educations[]
  @Select( EducationState.getAllEducations) educations$!: Observable<Educations[]>;

  lessonList! : Lessons[]
  @Select( LessonState.GetLessonsByEducationId) lessons$!: Observable<Lessons[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetEducations());
    this.educations$.subscribe((d) => this.educationList = d);
   
  }

 

}
