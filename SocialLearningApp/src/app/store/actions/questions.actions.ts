export class GetAllQuestionsByEducationId {
    static readonly type = '[Questions] Get All Questions By Id';
   
    constructor(public educationId: number, public lessonId: number){}
}
  
  