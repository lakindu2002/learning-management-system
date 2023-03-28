import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Card, Container } from '@mui/material';
import { Login } from 'src/content/auth/Login';

interface LoginPageProps { }

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <>
      <Box sx={{
        overflow: 'auto',
        flex: 1,
        overflowX: 'hidden',
        aligIitems: 'center',
      }}>
        <Helmet>
          <title>Login | MyLMS</title>
        </Helmet>
        <Container maxWidth="sm">
          <Card sx={{ my: 10 }}>
            <Login />
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
