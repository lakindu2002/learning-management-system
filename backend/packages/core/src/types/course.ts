export interface CourseUser {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  name: string;
  lecturer: CourseUser;
  instituteId: string;
  lecturerId: string;
}

export interface StudentCourse {
  id: string;
  courseId: string;
  instituteId: string;
  studentId: string;
  student: CourseUser;
  createdAt: number;
  updatedAt: number;
}

export enum LessonVisbility {
  VISIBLE = "visible",
  HIDDEN = "hidden",
}

export interface CourseLesson {
  id: string;
  courseId: string;
  instituteId: string;
  title: string;
  files?: { url: string; type: string; name: string }[];
  description?: string;
  createdAt: number;
  updatedAt: number;
  visibility: LessonVisbility;
  courseIdInstituteId: string;
}

export interface CourseAssignment {
  id: string;
  courseId: string;
  instituteId: string;
  title: string;
  files?: { url: string; type: string; name: string }[];
  description?: string;
  createdAt: number;
  updatedAt: number;
  visibility: LessonVisbility;
  courseIdInstituteId: string;
  submissionDate: string;
  weightage: number;
}
