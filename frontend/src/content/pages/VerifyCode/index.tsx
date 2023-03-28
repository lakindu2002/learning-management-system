import { Box, Container, Card } from '@mui/material';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { VerifyCode } from 'src/content/auth/VerifyCode';

interface VerifySignUpCodeProps {}

const VerifySignUpCodePage: FC<VerifySignUpCodeProps> = () => {
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
          <title>Verify Sign Up Code | MyLMS</title>
        </Helmet>
        <Container maxWidth="sm">
          <Card sx={{ my: 10 }}>
            <VerifyCode />
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default VerifySignUpCodePage;
