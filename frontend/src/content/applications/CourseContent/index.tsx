import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, CircularProgress, Box, Alert } from '@mui/material';
import Footer from 'src/components/Footer';

import { Fragment, FunctionComponent, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchCourse } from 'src/api/courseAPIs';
import { useAuth } from 'src/contexts/AuthContext';
import { useCourseLessons } from 'src/hooks/use-course-lessons';
import { Lesson } from './Lesson';
import { LoadingButton } from '@mui/lab';

function CourseContent() {
  const { user } = useAuth();
  const { id } = useParams();
  const {
    getCourseLessons,
    getMoreCourseLessons,
    hasMore,
    loadingLessons,
    loadingMoreLessons,
    lessons
  } = useCourseLessons();

  useEffect(() => {
    getCourseLessons(id);
  }, []);

  const {
    isLoading,
    isError,
    data: course
  } = useQuery({
    queryKey: ['courses', id],
    queryFn: () => fetchCourse(user?.currentInstitute.id, id)
  });

  return (
    <>
      <Helmet>
        <title>Course Content</title>
      </Helmet>

      <PageTitleWrapper>
        {course && <PageHeader course={course} />}
        {isLoading && <CircularProgress />}
        {isError && <Alert color="error">Failed to load course header</Alert>}
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {loadingLessons ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 15 }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                {lessons.length === 0 && (
                  <Alert>There are no lessons available in this course.</Alert>
                )}
                {lessons.map((lesson) => (
                  <Box sx={{ my: 2 }} key={lesson.id}>
                    <Lesson lesson={lesson} />
                  </Box>
                ))}
              </>
            )}
          </Grid>
          {hasMore && (
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <LoadingButton
                  variant="contained"
                  loading={loadingMoreLessons}
                  onClick={() => getMoreCourseLessons(id)}
                >
                  Load More
                </LoadingButton>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default CourseContent as FunctionComponent;
