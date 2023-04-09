export interface Course {
  id?: string;
  name: string;
  lecturer: { id: string; name: string };
  instituteId?: string;
}

export interface Lesson {
  title: string;
  lecVideo?: string;
  files?: string[];
  editorContent?: string;
  additionalEditorContent?: string;
  additionalFiles?: string[];
}

export interface LessonCourse {
  id?: string;
  courseId: string;
  instituteId?: string;
  lessonObj: Lesson;
}
