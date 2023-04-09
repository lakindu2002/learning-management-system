export interface Course {
  cid: string;
  cname: string;
}

export interface Student {
  sid: string;
  sname: string;
}

export interface StudentCourse {
  id?: string;
  courseId: string;
  instituteId: string;
  studentId: string;
  studentObj: Student;
  courseObj: Course;
}
