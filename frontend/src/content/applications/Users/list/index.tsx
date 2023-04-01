import { Container, Grid } from '@mui/material';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { UserList } from './UserList';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';

interface UserListPageProps { }

const UserListPage: FC<UserListPageProps> = () => {
  return (
    <>
      <Helmet>
        <title>Users | MyLMS</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
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
            <UserList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default UserListPage;
