import {
  Typography,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Box
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

import { useAuth } from 'src/contexts/AuthContext';
import { useState } from 'react';
import { Course, CourseAssignment, CourseLesson } from 'src/models/course';
import { useNavigate, useParams } from 'react-router';
import AddEditLesson from './AddEditLesson';
import CustomModal from 'src/components/CustomModal';
import AddEditAssignment from './AddEditAssignment';
import { InstituteUserRole } from 'src/models/user';
import { toast } from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';
import { deleteCourse } from 'src/api/courseAPIs';

type PageHeaderProps = {
  course: Course;
  tab: number;
  createLesson: (lesson: Partial<CourseLesson>) => Promise<void>;
  createAssignment: (assignment: Partial<CourseAssignment>) => Promise<void>;
};

function PageHeader(props: PageHeaderProps) {
  const { course, tab, createLesson, createAssignment } = props;
  const navigate = useNavigate();
  const [isAddLessonModalOpen, setIsAddLessonModalOpen] = useState(false);
  const [isAddAsgModalOpen, setIsAddAsgModalOpen] = useState(false);
  const [deletingCourse, setDeletingCourse] = useState(false);

  const { user } = useAuth();
  const { id } = useParams();

  const handleCourseDelete = async () => {
    setDeletingCourse(true);
    try {
      await deleteCourse(user?.currentInstitute.id, course.id);
      toast.success('The course was deleted successfully');
      navigate('/app/management/courses');
    } catch (err) {
      toast.error(
        'We ran into an error while removing the course. Please try again'
      );
    } finally {
      setDeletingCourse(false);
    }
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Box display="flex">
          <Tooltip arrow placement="top" title="Go back">
            <IconButton
              color="primary"
              sx={{ p: 2, mr: 2 }}
              onClick={() => navigate('/app/management/courses')}
            >
              <ArrowBackTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {course.name}
            </Typography>
            <Typography variant="subtitle2">
              Lecturer: {course.lecturer.name}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item sx={{ display: 'flex', gap: 1.5 }}>
        {user?.currentInstitute.role !== InstituteUserRole.STUDENT &&
          user?.currentInstitute.role !== InstituteUserRole.LECTURER && (
            <LoadingButton
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="outlined"
              color="error"
              loading={deletingCourse}
              startIcon={<DeleteIcon fontSize="small" />}
              onClick={handleCourseDelete}
            >
              Delete
            </LoadingButton>
          )}
        {user?.currentInstitute.role !== InstituteUserRole.STUDENT &&
        tab === 0 ? (
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            color="primary"
            startIcon={<AddTwoToneIcon fontSize="small" />}
            onClick={() => setIsAddLessonModalOpen(true)}
          >
            Add Lesson
          </Button>
        ) : (
          user?.currentInstitute.role !== InstituteUserRole.STUDENT && (
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              color="primary"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => setIsAddAsgModalOpen(true)}
            >
              Add Assignment
            </Button>
          )
        )}
      </Grid>
      <CustomModal open={isAddLessonModalOpen}>
        <AddEditLesson
          setOpen={setIsAddLessonModalOpen}
          courseId={id}
          createLesson={createLesson}
        />
      </CustomModal>

      <CustomModal open={isAddAsgModalOpen}>
        <AddEditAssignment
          setOpen={setIsAddAsgModalOpen}
          courseId={id}
          createAssignment={createAssignment}
        />
      </CustomModal>
    </Grid>
  );
}

export default PageHeader;
