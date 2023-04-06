import * as yup from 'yup';
import { useFormik } from 'formik';

import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  MenuItem,
  Autocomplete
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { Course } from 'src/models/course';
import { StudentCourse, Student} from 'src/models/studentCourse';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { InstituteUserRole } from 'src/models/user';
import { useInstituteUsers } from 'src/hooks/use-users';
import { useQuery } from '@tanstack/react-query';
import { da } from 'date-fns/locale';


// Temp Data
const courses = [
  { label: 'Carpentry', value: 'C01' },
  { label: 'Artificial Intelligence', value: 'C02' },
  { label: 'Rapid Application Development', value: 'C03' }
];

type Props = {
  setOpen: Function;
};

// const validationSchema = yup.object({
//   courseCode: yup.string().required('Code is required'),
//   title: yup.string().required('Title is required')
// }); 

export default function AddEditCourse(props: Props) {

  const { setOpen } = props;
  const { user } = useAuth();
  const { getInstituteUsers, users: students, isLoading } = useInstituteUsers();

//   const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    getInstituteUsers('initial', InstituteUserRole.STUDENT);
  }, []);


  const { status, data, error } = useQuery({
    queryKey: ['courses'],
    retry: false,
    queryFn: () =>
      axios
        .get<{ courses: Course[] }>(
          `/api/institutes/${user.institutes[0].id}/courses`
        )
        .then((res) => res.data.courses)
        .catch((error) => console.log(error))
  });


//   const createCourse = useMutation({
//     mutationFn: (course: Course) => {
//       return axios.post(
//         `/api/institutes/${user.institutes[0].id}/courses`,
//         course
//       );
//     }
//   });


  const createStudentCourse = useMutation({
    mutationFn: (studentCourse: StudentCourse) => {
      return axios.post(
        `/api/institutes/${user.institutes[0].id}/studentCourse`,
        studentCourse
      );
    }
  });


  const formik = useFormik({
    initialValues: {
      courseId: '',
      students: []
    },

    // validationSchema: validationSchema,


    // institutes: activeInstitutes.map((institute) => ({
    //     id: institute.id,
    //     name: institute.name,
    //     role: (allInstitutesForUser as InstituteUser[]).find((instituteUser) => instituteUser.instituteId === institute.id)?.role
    //   }))

    onSubmit: (values) => {
        const studentsArr = values.students.map((s)=>{
          const stu: Student={
            sid: s.id,
            sname: s.name
          }
          return stu;
        });

      const studentCourse: StudentCourse = {
        courseId:values.courseId,
        studentObj:studentsArr,
        courseObj:{
            cid:values.courseId,
            cname: data && data.find(
                (course) => course.id === values.courseId
            ).name
        }
      };

      createStudentCourse.mutate(studentCourse);
    }
  }); // return resp.data.course;   

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
          {data && data.map((course) => (
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
          onChange={(event, value) => formik.setFieldValue("students", value)}
        //   onChange={(event, newStudents) => setSelectedUsers('studentIds',newStudents)}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Students"
            />
          )}
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
