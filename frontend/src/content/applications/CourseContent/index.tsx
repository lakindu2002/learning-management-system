import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

// import Courses from './Courses';
import { FunctionComponent, useState } from 'react';
import CustomModal from 'src/components/CustomModal';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchCourse } from 'src/api/courseAPIs';
import { useAuth } from 'src/contexts/AuthContext';

function CourseContent() {
  const [openCreate, setOpenCreate] = useState(false);
  const [isOpenAssignStudents, setIsOpenAssignStudents] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: course,
    error
  } = useQuery({
    queryKey: ['courses', id],
    queryFn: () => fetchCourse(user?.currentInstitute.id, id)
  });

  if (isLoading) return 'loading...';
  //@ts-ignore
  if (isError) return `Error: ${error.message}`;

  console.log(id);

  return (
    <>
      <Helmet>
        <title>Course Content</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader course={course} />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            {/* Map each lesson content here */}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default CourseContent as FunctionComponent;
