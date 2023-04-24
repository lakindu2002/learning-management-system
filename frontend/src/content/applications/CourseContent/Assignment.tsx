import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { FC } from 'react';
import { useAuth } from 'src/contexts/AuthContext';
import { LessonVisbility, CourseAssignment } from 'src/models/course';
import { InstituteUserRole } from 'src/models/user';
import { LessonManagePopper } from './LessonManagePopper';
import { LessonFileViewer } from './LessonFileViewer';

interface AssignmentProps {
  assignment: CourseAssignment;
  onUpdate: (patchAttr: Partial<CourseAssignment>) => Promise<void>;
  onEdit: () => void;
}
export const Assignment: FC<AssignmentProps> = ({
  assignment,
  onUpdate,
  onEdit
}) => {
  const { user } = useAuth();

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

  const givenDate = new Date(assignment.createdAt);
  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h4">
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
                sx={{ marginRight: 2, color: '#00ffff' }}
              >
                Assignment Weight:{' '}
              </Typography>
              <Typography sx={{ marginRight: 2, color: '#00ffff' }}>
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
                    ? '#53ff1a'
                    : '#ff3333',
                border: `1px solid ${
                  Date.parse(assignment.submissionDate) > Date.now()
                    ? '#53ff1a'
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

        <Button variant="contained">View Student Submissions</Button>
      </CardContent>
    </Card>
  );
};
