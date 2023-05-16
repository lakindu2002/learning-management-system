import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { CourseAssignment } from 'src/models/course';

export const useCourseAssignments = () => {
  const { user } = useAuth();
  const [nextKey, setNextKey] = useState<any>(undefined);
  const [assignments, setAssignments] = useState<CourseAssignment[]>([]);
  const [loadingAssignments, setLoadingAssignments] = useState<boolean>(false);
  const [loadingMoreAssignments, setLoadingMoreAssignments] =
    useState<boolean>(false);

  const updateAssignment = async (
    patchAttr: Partial<CourseAssignment>,
    courseId: string,
    assignmentId: string
  ) => {
    const assignment = assignments.find((asg) => asg.id === assignmentId);
    const resp = await axios.patch<Partial<CourseAssignment>>(
      `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/assignments/${assignmentId}`,
      { patchAttr, lastUpdatedAt: assignment.updatedAt }
    );
    const newAssignments = assignments.map((asg) => {
      if (asg.id === assignmentId) {
        return { ...asg, ...resp.data };
      }
      return asg;
    });
    setAssignments(newAssignments);
  };

  const getCourseAssignments = async (assignmentId: string) => {
    try {
      setLoadingAssignments(true);
      const resp = await axios.post<{
        assignments: CourseAssignment[];
        nextKey: any;
      }>(
        `/api/institutes/${user?.currentInstitute.id}/courses/${assignmentId}/assignments/get`
      );
      setAssignments(resp.data.assignments);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error('We ran into an error while loading the course assignments.');
    } finally {
      setLoadingAssignments(false);
    }
  };

  const getMoreCourseAssignments = async (assignmentId: string) => {
    try {
      const assignment = assignments.find((asg) => asg.id === assignmentId);
      setLoadingMoreAssignments(true);
      const resp = await axios.post<{
        assignments: CourseAssignment[];
        nextKey: any;
      }>(
        `/api/institutes/${user?.currentInstitute.id}/courses/${assignment.courseId}/assignments/get`
      );
      setAssignments([...assignments, ...resp.data.assignments]);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error('We ran into an error while loading the course assignments.');
    } finally {
      setLoadingMoreAssignments(false);
    }
  };

  const deleteAssignment = async (assignmentId: string) => {
    const assignment = assignments.find((asg) => asg.id === assignmentId);
    await axios.delete(
      `/api/institutes/${user?.currentInstitute.id}/courses/${assignment.courseId}/assignments/${assignmentId}`
    );
    setAssignments((prev) =>
      prev.filter((assignment) => assignment.id !== assignmentId)
    );
  };

  return {
    getCourseAssignments,
    getMoreCourseAssignments,
    hasMore: !!nextKey,
    assignments,
    loadingAssignments,
    loadingMoreAssignments,
    updateAssignment,
    deleteAssignment
  };
};
