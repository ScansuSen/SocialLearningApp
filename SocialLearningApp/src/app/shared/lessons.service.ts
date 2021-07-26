import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lessons } from './lessons.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http : HttpClient) { }
  readonly baseURL='https://localhost:5001/api/Lessons'

 GetLessonsByCategory(educationId:number){
    return this.http.get<Lessons[]>(`${this.baseURL}/GetLessonsByEducationId/{educationId}`);
  }
  
  }


  
