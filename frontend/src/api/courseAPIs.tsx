import axios from 'src/lib/axios';
import { Course } from 'src/models/course';

export async function fetchCourse(instituteId: string, courseId: string) {
  const response = await axios.get<{ course: Course }>(
    `/api/institutes/${instituteId}/courses/${courseId}`
  );
  return response.data.course;
}
