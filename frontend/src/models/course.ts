export interface Course {
  id?: string;
  name: string;
  lecturer: { id: string; name: string };
  instituteId?: string;
}

export enum LessonVisbility {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
}

export interface LessonFile {
  url: string, type: string, name: string
}

export interface CourseLesson {
  id: string;
  courseId: string;
  instituteId: string;
  title: string;
  files?: LessonFile[]
  description?: string;
  createdAt: number,
  updatedAt: number,
  visibility: LessonVisbility,
  courseIdInstituteId: string,
}
