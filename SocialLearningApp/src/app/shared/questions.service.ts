import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor (private http : HttpClient ) { }
 readonly baseURL='https://localhost:5001/api/Questions'
 
getAllQuestions():Observable<any[]>{
  return this.http.get<any>(this.baseURL+'/all');

}
addQuestion(val:any){
  return this.http.post(this.baseURL,val);
}


updateQuestion(val:any){
  return this.http.put(this.baseURL,val);

}
deleteQuestion(val:any){
  return this.http.delete(this.baseURL,val);

}
getAllQuestionByCategory(educationId:number, lessonId: number){
  return this.http.get<Questions[]>(`${this.baseURL}/questionbyEducationId/${educationId}/${lessonId}`);
}

}
