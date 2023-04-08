export interface Student{
    id: string; 
    name: string;
}

export interface StudentCourse {
    id?: string;
    courseId:string;
    studentObj: Student[];
    courseObj:{ cid: string; cname: string };
  }
  