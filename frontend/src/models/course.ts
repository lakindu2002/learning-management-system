export interface Course {
  id?: string;
  name: string;
  lecturer: { id: string; name: string };
  instituteId?: string;
}

export enum LessonVisbility {
  VISIBLE = 'visible',
  HIDDEN = 'hidden'
}

export interface LessonFile {
  url: string;
  type: string;
  name: string;
}

export interface CourseUser {
  id: string;
  name: string;
}

export interface CourseLesson {
  id: string;
  courseId: string;
  instituteId: string;
  title: string;
  files?: LessonFile[];
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
  files?: LessonFile[];
  description?: string;
  createdAt: number;
  updatedAt: number;
  visibility: LessonVisbility;
  courseIdInstituteId: string;
  submissionDate: string;
  weightage: number;
}

export interface CourseSubmissionStudent {
  id: string;
  courseId: string;
  assignmentId: string;
  instituteId: string;
  studentId: string;
  student: CourseUser;
  marks?: number;
  weightage: number;
  graded: boolean;
  feedback: string;
  createdAt: number;
  updatedAt: number;
  courseIdInstituteIdAssignmentIdStudentId: string;
  courseIdInstituteIdAssignmentId: string;
  file: LessonFile;
}
