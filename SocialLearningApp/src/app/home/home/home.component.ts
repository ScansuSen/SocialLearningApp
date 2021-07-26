import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Answers } from 'src/app/shared/answers.model';
import { Questions } from 'src/app/shared/questions.model';
import { GetAnswerByQuestionId } from 'src/app/store/actions/answers.actions';
import { GetAllQuestionsByEducationId } from 'src/app/store/actions/questions.actions';

import { AnswerState } from 'src/app/store/states/answer.state';
import { QuestionState } from 'src/app/store/states/questions.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lessonAndEducationId!: number;
 educationId!: number;
 lessonId!: number;
 answer!:Answers[];
  tasks!: Questions[];

  @Select( QuestionState.getAllQuestionByCategoryId) questions$!: Observable<Questions[]>;
@Select(AnswerState.getAnswerByCategoryId) answers$!: Observable<Answers[]>;

  constructor(private store: Store,private route: ActivatedRoute)
   {
    const routeParams = this.route.snapshot.paramMap;
    this.lessonAndEducationId = Number(routeParams.get('id'));
    console.log("route params => " + this.lessonAndEducationId);
    }

  ngOnInit(): void {

    this.store.dispatch(new GetAllQuestionsByEducationId(3,1));
    this.questions$.subscribe((t) => {
      console.log(t);
      this.tasks = t;
      
      console.log(this.tasks);

      

    });
    console.log("cevap")
    this.store.dispatch(new GetAnswerByQuestionId(2));
    this.answers$.subscribe((t) => {
      console.log(t);
      this.answer = t;
      console.log(this.answer);
    
    });
   
  }
}
