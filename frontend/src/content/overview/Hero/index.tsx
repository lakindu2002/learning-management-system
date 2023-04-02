import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Logo withTitle={false} />
          </Box>
          <TypographyH1 sx={{ my: 2 }} variant="h1">
            MyLMS
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Manage your institute better, regardless of your scale and improve the overall educational experience that you offer to your students.
          </TypographyH2>
          <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              to="/login"
              size="large"
              variant="contained"
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/sign-up"
              size="large"
            >
              Create an account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
}

export default Hero;
