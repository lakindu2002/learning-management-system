import { Box, Container, Card } from '@mui/material';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { SignUp } from 'src/content/auth/SignUp';

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = () => {
  return (
    <>
      <Box
        sx={{
          overflow: 'auto',
          flex: 1,
          overflowX: 'hidden',
          aligIitems: 'center'
        }}
      >
        <Helmet>
          <title>Sign Up | MyLMS</title>
        </Helmet>
        <Container maxWidth="sm">
          <Card sx={{ my: 10 }}>
            <SignUp />
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default SignUpPage;
