import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Card, Container } from '@mui/material';
import { ResetPassword } from 'src/content/auth/ResetPassword';

interface ResetPasswordPageProps { }

const ResetPasswordPage: FC<ResetPasswordPageProps> = () => {
  return (
    <>
      <Box sx={{
        overflow: 'auto',
        flex: 1,
        overflowX: 'hidden',
        aligIitems: 'center',
      }}>
        <Helmet>
          <title>Reset Password | MyLMS</title>
        </Helmet>
        <Container maxWidth="sm">
          <Card sx={{ my: 10 }}>
            <ResetPassword />
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ResetPasswordPage;
