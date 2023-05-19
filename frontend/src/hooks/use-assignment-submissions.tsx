import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { CourseSubmissionStudent } from 'src/models/course';

export const useAssignmentSubmissions = () => {
  const { user } = useAuth();
  const [nextKey, setNextKey] = useState<any>(undefined);
  const [submissions, setSubmissions] = useState<CourseSubmissionStudent[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState<boolean>(false);
  const [loadingMoreSubmissions, setLoadingMoreSubmissions] =
    useState<boolean>(false);

  const getAssignmentSubmissions = async (
    assignmentId: string,
    courseId: string,
    studentId?: string
  ) => {
    try {
      setLoadingSubmissions(true);
      const resp = await axios.post<{
        submissions: CourseSubmissionStudent[];
        nextKey: any;
      }>(
        `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/assignments/${assignmentId}/submissions/get`,
        { studentId: studentId }
      );
      setSubmissions(resp.data.submissions);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error(
        'We ran into an error while loading the assignment submissions.'
      );
      console.log('loading submission error', err);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const getMoreAssignmentSubmissions = async (
    assignmentId: string,
    courseId: string
  ) => {
    try {
      setLoadingMoreSubmissions(true);
      const resp = await axios.post<{
        submissions: CourseSubmissionStudent[];
        nextKey: any;
      }>(
        `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/assignments/${assignmentId}/submissions/get`,
        { nextKey }
      );
      setSubmissions([...submissions, ...resp.data.submissions]);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error(
        'We ran into an error while loading the assignment submissions.'
      );
    } finally {
      setLoadingMoreSubmissions(false);
    }
  };

  const createAssignmentSubmission = async (
    submission: Partial<CourseSubmissionStudent>,
    courseId: string,
    assignmentId: string
  ) => {
    const resp = await axios.post<CourseSubmissionStudent>(
      `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/assignments/${assignmentId}/submissions`,
      submission
    );
    setSubmissions([resp.data, ...submissions]);
  };

  const updateAssignmentSubmission = async (
    patchAttr: Partial<CourseSubmissionStudent>,
    courseId: string,
    assignmentId: string,
    submissionId: string
  ) => {
    const submission = submissions.find((sub) => sub.id === submissionId);
    const resp = await axios.patch<Partial<CourseSubmissionStudent>>(
      `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/assignments/${assignmentId}/submissions/${submissionId}`,
      { patchAttr, lastUpdatedAt: submission.updatedAt }
    );
    const newSubmissions = submissions.map((sub) => {
      if (sub.id === submissionId) {
        return { ...sub, ...resp.data };
      }
      return sub;
    });
    setSubmissions(newSubmissions);
  };

  return {
    getAssignmentSubmissions,
    getMoreAssignmentSubmissions,
    hasMore: !!nextKey,
    submissions,
    loadingSubmissions,
    loadingMoreSubmissions,
    createAssignmentSubmission,
    updateAssignmentSubmission
  };
};
