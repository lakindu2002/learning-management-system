export interface Student{
    sid: string; 
    sname: string;
}

export interface StudentCourse {
    id?: string;
    courseId:string;
    studentObj: Student[];
    courseObj:{ cid: string; cname: string };
  }
  