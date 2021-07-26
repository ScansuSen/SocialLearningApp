export class GetLessonsByEducationId {
    static readonly type='[Lessons] Get Lessons By Education ID';
    
    constructor(public educationId: number){}

}
