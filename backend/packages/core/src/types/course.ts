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

export interface Lesson {
  title: string;
  lecVideo?: string;
  files?: string[];
  editorContent?: string;
  additionalEditorContent?: string;
  additionalFiles?: string[];
  image?: string;
}

export interface LessonCourse {
  id?: string;
  courseId: string;
  instituteId: string;
  lessonObj: Lesson;
  createdAt: number;
  updatedAt: number;
}
