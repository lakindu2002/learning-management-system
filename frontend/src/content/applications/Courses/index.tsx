import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import Courses from './Courses';
import { useState } from 'react';
import CustomModal from 'src/components/CustomModal';
import AddEditCourse from './AddEditCourse';
import StudenCourcseMap from './StudenCourseMap';

function ApplicationsCourses() {
  const [openCreate, setOpenCreate] = useState(false);
  const [isOpenAssignStudents, setIsOpenAssignStudents] = useState(false);

  return (
    <>
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader openModal={() => setOpenCreate(true)} setIsOpenAssignStudents={()=> setIsOpenAssignStudents(true)}/>
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
            <Courses />
          </Grid>
        </Grid>
      </Container>

      <Footer />
      <CustomModal open={openCreate}>
        <AddEditCourse setOpen={setOpenCreate} />
      </CustomModal>
      <CustomModal open={isOpenAssignStudents}>
        <StudenCourcseMap setOpen={setIsOpenAssignStudents} />
      </CustomModal>
    </>
  );
}

export default ApplicationsCourses;
