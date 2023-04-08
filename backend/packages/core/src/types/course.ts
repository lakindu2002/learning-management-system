export interface CourseUser {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  name: string;
  lecturer: CourseUser;
  instituteId: string
  lecturerId: string;
}

export interface StudentCourse {
  id: string;
  courseId: string;
  instituteId: string;
  studentId: string;
  student: CourseUser;
  createdAt: number,
  updatedAt: number
}
