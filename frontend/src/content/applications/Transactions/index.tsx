import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from './RecentOrders';
import { useState } from 'react';
import CustomModal from 'src/components/CustomModal';
import AddEditCourse from './AddEditCourse';

function ApplicationsTransactions() {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <>
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader openModal={() => setOpenCreate(true)} />
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
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>

      <Footer />
      <CustomModal open={openCreate}>
        <AddEditCourse setOpen={setOpenCreate} />
      </CustomModal>
    </>
  );
}

export default ApplicationsTransactions;
