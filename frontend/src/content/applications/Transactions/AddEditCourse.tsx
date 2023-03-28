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

// Temp Data
const lecturers = [
  { label: 'John Doe', value: '12313ewr34d34' },
  { label: 'Peter Smith', value: '4231jkwr34d34' }
];

type Props = {
  setOpen: Function;
};

const validationSchema = yup.object({
  courseCode: yup.string().required('Code is required'),
  title: yup.string().required('Title is required')
});

export default function AddEditCourse(props: Props) {
  const { setOpen } = props;
  const formik = useFormik({
    initialValues: {
      courseCode: '',
      title: '',
      lecturerId: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
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
            <MenuItem key={lecturer.value} value={lecturer.value}>
              {lecturer.label}
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
          >
            Submit
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
