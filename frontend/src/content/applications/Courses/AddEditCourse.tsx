import * as yup from 'yup';
import { useFormik } from 'formik';

import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  MenuItem
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { Course } from 'src/models/course';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInstituteUsers } from 'src/hooks/use-users';
import { InstituteUserRole } from 'src/models/user';

// Temp Data
// const lecturers = [
//   { label: 'John Doe', value: 'L01' },
//   { label: 'Peter Smith', value: 'L02' }
// ];

type Props = {
  setOpen: Function;
};

const validationSchema = yup.object({
  courseCode: yup.string().required('Code is required'),
  title: yup.string().required('Title is required')
});

export default function AddEditCourse(props: Props) {
  const { setOpen } = props;
  const { user, logout } = useAuth();
  const {
    getInstituteUsers,
    users: lecturers,
    isLoading
  } = useInstituteUsers();

  //   const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    getInstituteUsers('initial', InstituteUserRole.LECTURER);
  }, []);

  const createCourse = useMutation({
    mutationFn: (course: Course) => {
      return axios.post(
        `/api/institutes/${user.institutes[0].id}/courses`,
        course
      );
    }
  });

  const formik = useFormik({
    initialValues: {
      courseCode: '',
      title: '',
      lecturerId: ''
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const course: Course = {
        name: values.title,
        lecturer: {
          id: values.lecturerId,
          name: lecturers.find((lecturer) => lecturer.id === values.lecturerId)
            .name
        }
      };
      console.log('course', course);
      createCourse.mutate(course);
    }
  }); // return resp.data.course;

  useEffect(() => {
    if (createCourse.isSuccess) setOpen(false);
  }, [createCourse.isSuccess]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box
          pb={4}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'left', md: 'center' }}
          justifyContent="center"
        >
          <Typography
            sx={{
              mb: 1,
              mt: 2
            }}
            variant="h2"
          >
            Create New Course
          </Typography>
        </Box>
        <TextField
          fullWidth
          id="courseCode"
          name="courseCode"
          label="Course Code"
          value={formik.values.courseCode}
          onChange={formik.handleChange}
          error={formik.touched.courseCode && Boolean(formik.errors.courseCode)}
          helperText={formik.touched.courseCode && formik.errors.courseCode}
          sx={{ marginBottom: 4 }}
        />

        <TextField
          fullWidth
          id="title"
          name="title"
          label="Course Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          sx={{ marginBottom: 4 }}
        />

        <TextField
          fullWidth
          id="lecturerId"
          name="lecturerId"
          label="Assign Lecturer"
          value={formik.values.lecturerId}
          onChange={formik.handleChange}
          sx={{ marginBottom: 4 }}
          select
          variant="outlined"
        >
          {lecturers.map((lecturer) => (
            <MenuItem key={lecturer.id} value={lecturer.id}>
              {lecturer.name}
            </MenuItem>
          ))}
        </TextField>
        <Box
          pt={4}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'left', md: 'center' }}
          justifyContent="center"
        >
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{ mr: 2 }}
            fullWidth
          >
            Cancel
          </Button>

          <LoadingButton
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            loading={createCourse.isLoading}
          >
            Submit
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
