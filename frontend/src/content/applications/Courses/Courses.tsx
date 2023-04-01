import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import CourseTable from './CourseTable';
import { subDays } from 'date-fns';
import { Course } from 'src/models/course';
import axios from 'src/lib/axios';
import { useAuth } from 'src/contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';

// function getC({ courseId }) {
//   const result = useQuery({
//     queryKey: ['courses', courseId],
//     queryFn: () => fetchCourseById(courseId),
//   })
// }

// function useCourses() {
//   const { user, logout } = useAuth();

//   axios.get<{ courses: { courses: Course[] } }>(
//     `api/institutes/${user.institutes[0].id}/courses`
//   );
//   console.log(data);
//   return data.courses;
// }

function Courses() {
  // const { status, data, error, isFetching } = useCourses();
  const { user, logout } = useAuth();
  const { status, data, error } = useQuery({
    queryKey: ['courses'],
    retry: false,
    queryFn: () =>
      axios
        .get<{ courses: { courses: Course[] } }>(
          `/api/institutes/${user.institutes[0].id}/courses`
        )
        .then((res) => res.data.courses)
        .catch((error) => console.log(error))
  });
  console.log(data);
  const courses: Course[] = [
    {
      id: 'a7bda4cb2ce6',
      name: 'Carpentry',
      lecturer: {
        name: 'Peter Smith',
        id: 'L02'
      }
    },
    {
      id: 'd1babdfb0e44',
      name: 'Artificial Intelligence',
      lecturer: {
        name: 'John Doe',
        id: 'L01'
      }
    }
  ];

  return (
    <Card>
      <CourseTable courses={courses} />
    </Card>
  );
}

export default Courses;
