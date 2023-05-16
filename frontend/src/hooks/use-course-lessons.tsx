import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { CourseLesson } from 'src/models/course';

export const useCourseLessons = () => {
  const { user } = useAuth();
  const [nextKey, setNextKey] = useState<any>(undefined);
  const [lessons, setLessons] = useState<CourseLesson[]>([]);
  const [loadingLessons, setLoadingLessons] = useState<boolean>(false);
  const [loadingMoreLessons, setLoadingMoreLessons] = useState<boolean>(false);

  const updateLesson = async (
    patchAttr: Partial<CourseLesson>,
    courseId: string,
    lessonId: string
  ) => {
    const lesson = lessons.find((lesson) => lesson.id === lessonId);
    const resp = await axios.patch<Partial<CourseLesson>>(
      `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/lessons/${lessonId}`,
      { patchAttr, lastUpdatedAt: lesson.updatedAt }
    );
    const newLessons = lessons.map((lesson) => {
      if (lesson.id === lessonId) {
        return { ...lesson, ...resp.data };
      }
      return lesson;
    });
    setLessons(newLessons);
  };

  const getCourseLessons = async (courseId: string) => {
    try {
      setLoadingLessons(true);
      const resp = await axios.post<{ lessons: CourseLesson[]; nextKey: any }>(
        `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/lessons/get`
      );
      setLessons(resp.data.lessons);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error('We ran into an error while loading the course content.');
    } finally {
      setLoadingLessons(false);
    }
  };

  const getMoreCourseLessons = async (courseId: string) => {
    try {
      setLoadingMoreLessons(true);
      const resp = await axios.post<{ lessons: CourseLesson[]; nextKey: any }>(
        `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/lessons/get`
      );
      setLessons([...lessons, ...resp.data.lessons]);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error('We ran into an error while loading the course content.');
    } finally {
      setLoadingMoreLessons(false);
    }
  };

  const deleteLesson = async (lessonId: string) => {
    const lesson = lessons.find((lesson) => lesson.id === lessonId);
    await axios.delete(
      `/api/institutes/${user?.currentInstitute.id}/courses/${lesson.courseId}/lessons/${lessonId}`
    );
    setLessons((prev) => prev.filter((lesson) => lesson.id !== lessonId));
  };

  return {
    getCourseLessons,
    getMoreCourseLessons,
    hasMore: !!nextKey,
    lessons,
    loadingLessons,
    loadingMoreLessons,
    updateLesson,
    deleteLesson
  };
};
