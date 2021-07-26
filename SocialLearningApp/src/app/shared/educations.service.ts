import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educations } from './educations.model';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor (private http : HttpClient ) { }
 readonly baseURL='https://localhost:5001/api/Educations'
 getAllQuestions(){
  return this.http.get<Educations[]>(this.baseURL+'/all');
}


}
