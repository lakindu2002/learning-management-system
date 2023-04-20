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

export interface CourseLesson {
  id: string;
  courseId: string;
  instituteId: string;
  title: string;
  files?: { url: string, type: string, name: string }[];
  description?: string;
  createdAt: number,
  updatedAt: number,
  visibility: LessonVisbility,
  courseIdInstituteId: string,
}
