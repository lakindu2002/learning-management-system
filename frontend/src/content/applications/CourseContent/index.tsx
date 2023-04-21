import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, CircularProgress, Box, Alert } from '@mui/material';
import Footer from 'src/components/Footer';

import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchCourse } from 'src/api/courseAPIs';
import { useAuth } from 'src/contexts/AuthContext';
import { useCourseLessons } from 'src/hooks/use-course-lessons';
import { Lesson } from './Lesson';
import { LoadingButton } from '@mui/lab';
import { CourseLesson } from 'src/models/course';
import AddEditLesson from './AddEditLesson';
import CustomModal from 'src/components/CustomModal';

function CourseContent() {
  const { user } = useAuth();
  const { id } = useParams();
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [updatingLessonId, setUpdatingLessonId] = useState<string | undefined>(
    undefined
  );
  const {
    getCourseLessons,
    getMoreCourseLessons,
    hasMore,
    loadingLessons,
    loadingMoreLessons,
    lessons,
    updateLesson
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

  const handleUpdate = async (
    patchAttr: Partial<CourseLesson>,
    lesson: CourseLesson
  ) => {
    await updateLesson(patchAttr, lesson.courseId, lesson.id);
  };

  const lessonToUpdate = lessons.find(
    (lesson) => lesson.id === updatingLessonId
  );

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
                    <Lesson
                      lesson={lesson}
                      onEdit={() => {
                        setUpdatingLessonId(lesson.id);
                        setEditModalOpen(true);
                      }}
                      onUpdate={(patchAttr) => handleUpdate(patchAttr, lesson)}
                    />
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
      {editModalOpen && (
        <CustomModal open={editModalOpen}>
          <AddEditLesson
            courseId={id}
            setOpen={setEditModalOpen}
            mode="edit"
            onUpdate={(patchAttr) => handleUpdate(patchAttr, lessonToUpdate)}
            initialValues={lessonToUpdate}
          />
        </CustomModal>
      )}
      <Footer />
    </>
  );
}

export default CourseContent as FunctionComponent;
