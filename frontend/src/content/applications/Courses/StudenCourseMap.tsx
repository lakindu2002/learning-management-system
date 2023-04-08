import { useFormik } from 'formik';
import {
  Typography,
  Button,
  TextField,
  Box,
  MenuItem,
  Autocomplete
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { Course } from 'src/models/course';
import { StudentCourse, Student } from 'src/models/studentCourse';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { InstituteUserRole } from 'src/models/user';
import { useInstituteUsers } from 'src/hooks/use-users';

type Props = {
  setOpen: Function;
};

export default function AddEditCourse(props: Props) {
  const { setOpen } = props;
  const { user } = useAuth();
  const { getInstituteUsers, users: students, isLoading } = useInstituteUsers();

  useEffect(() => {
    getInstituteUsers('initial', InstituteUserRole.STUDENT);
  }, []);

  const { data } = useQuery({
    queryKey: ['courses'],
    retry: false,
    queryFn: () =>
      axios
        .get<{ courses: Course[] }>(
          `/api/institutes/${user.currentInstitute.id}/courses`
        )
        .then((res) => res.data.courses)
        .catch((error) => console.log(error))
  });

  const createStudentCourse = useMutation({
    mutationFn: (studentCourse: StudentCourse) => {
      return axios.post(
        `/api/institutes/${user?.currentInstitute.id}/courses/${studentCourse.courseId}/students`,
        {
          courseId: studentCourse.courseId,
          students: studentCourse.studentObj
        }
      );
    }
  });

  const formik = useFormik({
    initialValues: {
      courseId: '',
      students: []
    },

    onSubmit: (values) => {
      const studentsArr = values.students.map((s) => {
        const stu: Student = {
          id: s.id,
          name: s.name
        };
        return stu;
      });

      const studentCourse: StudentCourse = {
        courseId: values.courseId,
        studentObj: studentsArr,
        courseObj: {
          cid: values.courseId,
          cname:
            data && data.find((course) => course.id === values.courseId).name
        }
      };

      createStudentCourse.mutate(studentCourse);
    }
  });

  useEffect(() => {
    if (createStudentCourse.isSuccess) setOpen(false);
  }, [createStudentCourse.isSuccess]);

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
            Assign Students to Course
          </Typography>
        </Box>

        <TextField
          fullWidth
          id="courseId"
          name="courseId"
          label="Course"
          value={formik.values.courseId}
          onChange={formik.handleChange}
          sx={{ marginBottom: 4 }}
          select
          variant="outlined"
        >
          {data &&
            data.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
        </TextField>

        <Autocomplete
          multiple
          options={students}
          getOptionLabel={(option) => option.name}
          value={formik.values.students}
          loading={isLoading}
          loadingText="We are fetching students in your institute."
          disableCloseOnSelect
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_event, value) => formik.setFieldValue('students', value)}
          filterSelectedOptions
          renderInput={(params) => <TextField {...params} label="Students" />}
        />

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
            loading={createStudentCourse.isLoading}
          >
            Submit
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
