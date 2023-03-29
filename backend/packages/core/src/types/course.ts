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
