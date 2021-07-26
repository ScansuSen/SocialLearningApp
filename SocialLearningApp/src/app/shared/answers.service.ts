import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Answers } from './answers.model';
@Injectable({
  providedIn: 'root'
})
export class AnswersService {
 
  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:5001/api/Answers';
  getAnswers():Observable<any[]>{
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
  getAnswerByCategory(val:number){
    return this.http.get<Answers[]>(`${this.baseURL}/GetAnswersByQuestionId/${val}`);
  }

}
