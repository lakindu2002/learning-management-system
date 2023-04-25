import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Grid,
  Container,
  CircularProgress,
  Box,
  Alert,
  Tabs,
  Tab
} from '@mui/material';
import Footer from 'src/components/Footer';

import { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { fetchCourse } from 'src/api/courseAPIs';
import { useAuth } from 'src/contexts/AuthContext';
import { useCourseLessons } from 'src/hooks/use-course-lessons';
import { Lesson } from './Lesson';
import { LoadingButton } from '@mui/lab';
import { CourseAssignment, CourseLesson } from 'src/models/course';
import AddEditLesson from './AddEditLesson';
import CustomModal from 'src/components/CustomModal';
import AddEditAssignment from './AddEditAssignment';
import { useCourseAssignments } from 'src/hooks/use-course-assignment';
import { Assessment } from '@mui/icons-material';
import { Assignment } from './Assignment';

function CourseContent() {
  const { user } = useAuth();
  const { id } = useParams();

  const [tabIndex, setTabIndex] = useState(0);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [asgEditModalOpen, setAsgEditModalOpen] = useState<boolean>(false);
  const [updatingLessonId, setUpdatingLessonId] = useState<string | undefined>(
    undefined
  );
  const [updatingAssignmentId, setUpdatingAssignmentId] = useState<
    string | undefined
  >(undefined);
  const [updatingAsgId, setUpdatingAsgId] = useState<string | undefined>(
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

  const {
    getCourseAssignments,
    getMoreCourseAssignments,
    hasMore: hasMoreAssignments,
    loadingAssignments,
    loadingMoreAssignments,
    assignments,
    updateAssignment
  } = useCourseAssignments();

  const {
    isLoading,
    isError,
    data: course,
    refetch
  } = useQuery({
    queryKey: ['', id],
    queryFn: () => fetchCourse(user?.currentInstitute.id, id),
    enabled: false
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (!editModalOpen) {
      getCourseLessons(id);
    }
  }, [editModalOpen]);

  useEffect(() => {
    if (!asgEditModalOpen) {
      getCourseAssignments(id);
    }
  }, [asgEditModalOpen]);

  const handleUpdate = async (
    patchAttr: Partial<CourseLesson>,
    lesson: CourseLesson
  ) => {
    await updateLesson(patchAttr, lesson.courseId, lesson.id);
  };

  const handleAssignmentUpdate = async (
    patchAttr: Partial<CourseAssignment>,
    assignment: CourseAssignment
  ) => {
    await updateAssignment(patchAttr, assignment.courseId, assignment.id);
  };

  const lessonToUpdate = lessons.find(
    (lesson) => lesson.id === updatingLessonId
  );

  const asgToUpdate = assignments.find(
    (asg) => asg.id === updatingAssignmentId
  );

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <>
      <Helmet>
        <title>Course Content</title>
      </Helmet>

      <PageTitleWrapper>
        {course && <PageHeader course={course} tab={tabIndex} />}
        {isLoading && <CircularProgress />}
        {isError && <Alert color="error">Failed to load course header</Alert>}
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Lessons" />
          <Tab label="Assignments" />
        </Tabs>
        {tabIndex === 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {loadingLessons ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 15 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {lessons.length === 0 && (
                    <Alert>
                      There are no lessons available in this course.
                    </Alert>
                  )}
                  {lessons.map((lesson) => (
                    <Box sx={{ my: 2 }} key={lesson.id}>
                      <Lesson
                        lesson={lesson}
                        onEdit={() => {
                          setUpdatingLessonId(lesson.id);
                          setEditModalOpen(true);
                        }}
                        onUpdate={(patchAttr) =>
                          handleUpdate(patchAttr, lesson)
                        }
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
        )}

        {tabIndex === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {loadingAssignments ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 15 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {assignments.length === 0 && (
                    <Alert>
                      There are no assigments given for this course yet.
                    </Alert>
                  )}
                  {assignments.map((assigment) => (
                    <Box sx={{ my: 2 }} key={assigment.id}>
                      <Assignment
                        assignment={assigment}
                        onEdit={() => {
                          console.log('edit a', asgEditModalOpen);
                          setUpdatingAssignmentId(assigment.id);
                          setAsgEditModalOpen(true);
                        }}
                        onUpdate={(patchAttr) =>
                          handleAssignmentUpdate(patchAttr, assigment)
                        }
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
                    loading={loadingMoreAssignments}
                    onClick={() => getMoreCourseAssignments(id)}
                  >
                    Load More
                  </LoadingButton>
                </Box>
              </Grid>
            )}
          </Grid>
        )}
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
      {asgEditModalOpen && (
        <CustomModal open={asgEditModalOpen}>
          <AddEditAssignment
            courseId={id}
            setOpen={setAsgEditModalOpen}
            mode="edit"
            onUpdate={(patchAttr) =>
              handleAssignmentUpdate(patchAttr, asgToUpdate)
            }
            initialValues={asgToUpdate}
          />
        </CustomModal>
      )}
      <Footer />
    </>
  );
}

export default CourseContent as FunctionComponent;
