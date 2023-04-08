import { Card } from '@mui/material';
import CourseTable from './CourseTable';
import { subDays } from 'date-fns';
import { Course } from 'src/models/course';
import axios from 'src/lib/axios';
import { useAuth } from 'src/contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';

function Courses() {
  const { user, logout } = useAuth();
  
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

  return <Card>{data && <CourseTable courses={data} />}</Card>;
}

export default Courses;
