import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { useAuth } from 'src/contexts/AuthContext';
import {
  LessonVisbility,
  CourseAssignment,
  CourseSubmissionStudent
} from 'src/models/course';
import { InstituteUserRole } from 'src/models/user';
import { LessonManagePopper } from './LessonManagePopper';
import { LessonFileViewer } from './LessonFileViewer';
import FileUpload from './FileUpload';
import { uploadFile } from 'src/hooks/use-storage';
import { useAssignmentSubmissions } from 'src/hooks/use-assignment-submissions';
import { sub } from 'date-fns';
import CustomModal from 'src/components/CustomModal';
import Submission from './Submission';

interface AssignmentProps {
  assignment: CourseAssignment;
  onUpdate: (patchAttr: Partial<CourseAssignment>) => Promise<void>;
  onEdit: () => void;
  onDelete: () => Promise<void>;
}
export const Assignment: FC<AssignmentProps> = ({
  assignment,
  onUpdate,
  onEdit,
  onDelete
}) => {
  const { user } = useAuth();
  const {
    getAssignmentSubmissions,
    getMoreAssignmentSubmissions,
    createAssignmentSubmission,
    updateAssignmentSubmission,
    submissions,
    loadingSubmissions
  } = useAssignmentSubmissions();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string>();

  const handleToggleVisibility = async () => {
    await onUpdate({
      visibility:
        assignment.visibility === LessonVisbility.VISIBLE
          ? LessonVisbility.HIDDEN
          : LessonVisbility.VISIBLE
    });
  };

  const handleEditAssignment = () => {
    onEdit();
  };

  const handleDelete = async () => {
    await onDelete();
  };

  useEffect(() => {
    getAssignmentSubmissions(assignment.id, assignment.courseId, user.id);
  }, []);

  const handleUpdateSubmission = async (
    patchAttr: Partial<CourseSubmissionStudent>,
    submission: CourseSubmissionStudent
  ) => {
    await updateAssignmentSubmission(
      patchAttr,
      submission.courseId,
      submission.assignmentId,
      submission.id
    );
  };

  const submissionToUpdate = submissions.find(
    (sub) => sub.id === selectedSubmissionId
  );

  const createSubmission = async (file) => {
    const resp = await uploadFile(file, 'course-assignments-submissions');
    const uploadedFile = {
      url: resp.url,
      name: file.name,
      type: resp.type
    };

    if (submissions?.length > 0 && submissions[0]) {
      const submission = {
        graded: submissions[0].graded,
        feedback: submissions[0].feedback,
        marks: submissions[0].marks,
        file: uploadedFile
      };
      try {
        await handleUpdateSubmission(submission, submissions[0]);
        toast.success('Uploaded edited submission successfully');
      } catch (error) {
        toast.error('Failed to edit submission!');
        console.log(error);
      }
    } else {
      const submission = {
        weightage: assignment.weightage,
        courseId: assignment.courseId,
        student: { id: user.id, name: user.name },
        studentId: user.id,
        assignmentId: assignment.id,
        graded: false,
        feedback: '',
        file: uploadedFile
      };
      try {
        await createAssignmentSubmission(
          submission,
          assignment.courseId,
          assignment.id
        );
        toast.success('Uploaded submission successfully');
      } catch (error) {
        toast.error('Failed to submit!');
        console.log(error);
      }
    }
  };

  const givenDate = new Date(assignment.createdAt);

  // Style for the border
  const style = {
    border: '1px solid grey',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    backgroundColor: '#33334d'
  };

  // Header component
  const Header = () => (
    <Grid container alignItems="center" style={style}>
      <Grid item xs={2}>
        <Typography variant="h6">
          <b>Student ID</b>{' '}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">
          <b>Student Name</b>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">
          <b>Submission</b>
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">
          <b>Marks</b>
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">
          <b>Action </b>
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h2">
              {assignment.title} - Given on{' '}
              {givenDate.toLocaleDateString('en-GB')}
            </Typography>
            <Box
              sx={{ ml: 'auto', display: 'flex', gap: 1, alignItems: 'center' }}
            >
              {assignment.visibility === LessonVisbility.HIDDEN && (
                <Chip
                  label="Hidden from students"
                  color="warning"
                  sx={{ ml: 'auto' }}
                />
              )}
              {user?.currentInstitute.role !== InstituteUserRole.STUDENT && (
                <LessonManagePopper
                  lesson={assignment}
                  onEditClick={handleEditAssignment}
                  onToggleVisibility={handleToggleVisibility}
                  isAssignmentMode
                  onDelete={handleDelete}
                />
              )}
            </Box>
          </Box>
        }
        subheader={assignment.description}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Box>
              <Typography
                variant="h4"
                sx={{ marginRight: 2, color: '#8C7CF0' }}
              >
                Assignment Weight:{' '}
              </Typography>
              <Typography sx={{ marginRight: 2, color: '#8C7CF0' }}>
                {assignment.weightage} marks
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                padding: 2,
                color:
                  Date.parse(assignment.submissionDate) > Date.now()
                    ? '#00b300'
                    : '#ff3333',
                border: `1px solid ${
                  Date.parse(assignment.submissionDate) > Date.now()
                    ? '#00b300'
                    : '#ff3333'
                }`,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="h4">
                Due Date: {assignment.submissionDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="h4">Detailed Instructions</Typography>
        <Divider sx={{ my: 2 }} />
        {assignment.files?.map((file) => (
          <Box sx={{ my: 2 }} key={file.url}>
            <LessonFileViewer file={file} />
          </Box>
        ))}
        {assignment.files?.length === 0 && (
          <Alert severity="info">
            There are no detailed instructions material available for this
            assignment
          </Alert>
        )}

        <Divider sx={{ my: 2 }} />
        {user?.currentInstitute.role !== InstituteUserRole.STUDENT && (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h3"> Student Submissions</Typography>
            </Box>
            <Header />
            {loadingSubmissions && (
              <CircularProgress size={32} disableShrink thickness={3} />
            )}
            {submissions &&
              submissions.map((submission) => {
                return (
                  <Grid
                    container
                    alignItems="center"
                    key={submission.id}
                    style={style}
                  >
                    <Grid item xs={2}>
                      <Box>{submission.student.id}</Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>{submission.student.name}</Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <LessonFileViewer file={submission.file} />
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        {submission.marks ? submission.marks : 'N/A'} /{' '}
                        {submission.weightage}
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setSelectedSubmissionId(submission.id);
                          setIsModalOpen(true);
                        }}
                      >
                        Grade
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
          </>
        )}

        {user?.currentInstitute.role === InstituteUserRole.STUDENT && (
          <>
            <FileUpload
              onSubmit={createSubmission}
              initialFile={
                submissions?.length === 1 ? submissions[0].file : null
              }
              isLoading={loadingSubmissions}
            />
            <Box mt={4}>
              <Typography variant="h3">Grading and Feedback</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="h4" sx={{ marginRight: 2 }}>
                Final marks:{' '}
              </Typography>
              <Box sx={{ marginRight: 2, mt: 1 }}>
                <Alert variant="outlined" sx={{ color: 'white' }}>
                  {submissions[0]?.marks} / {assignment.weightage} marks
                </Alert>
              </Box>
            </Box>

            <Box mt={2}>
              <Typography variant="h4" sx={{ marginRight: 2 }}>
                Feedback:{' '}
              </Typography>
              <Box sx={{ marginRight: 2, mt: 1 }}>
                <Alert variant="outlined" sx={{ color: 'white' }}>
                  {' '}
                  {submissions[0]?.feedback}
                </Alert>
              </Box>
            </Box>
          </>
        )}
      </CardContent>
      {isModalOpen && (
        <CustomModal open={isModalOpen}>
          <Submission
            setOpen={setIsModalOpen}
            onUpdate={(patchAttr) =>
              handleUpdateSubmission(patchAttr, submissionToUpdate)
            }
            initialValues={submissionToUpdate}
          />
        </CustomModal>
      )}
    </Card>
  );
};
