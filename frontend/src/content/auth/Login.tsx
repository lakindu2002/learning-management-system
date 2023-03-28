import { FC } from 'react';
import *  as Yup from 'yup';
import Logo from 'src/components/LogoSign';
import { Container, Grid, TextField, Typography, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAuth } from 'src/contexts/AuthContext';
import { useFormik } from 'formik';
import { LoginRequest } from 'src/models/requests';
import { toast } from 'react-hot-toast';

interface LoginProps { }

export const Login: FC<LoginProps> = () => {

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter a valid email address').required('Email address is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (values) => {
      const signInRequest: LoginRequest = {
        email: values.email,
        password: values.password
      }
      try {
        await login(signInRequest);
      } catch (err) {
        toast.error('Invalid email or password. Please try again.');
      }
    }
  })

  return (
    <>
      <Grid
        spacing={4}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={12} lg={12} mx="auto">
          <Typography sx={{ my: 3 }} variant="h1">
            <Logo />
          </Typography>
          <Typography
            variant="h1"
            color="text.primary"
            textAlign="center"
          >
            Log In
          </Typography>
          <Typography
            sx={{ mt: 3 }}
            variant="body2"
            color="text.secondary"
            textAlign="center"
          >
            Sign in to MyLMS
          </Typography>
        </Grid>

        <Grid item md={12} lg={12} mx="auto">

          <Container
            maxWidth="md"
          >
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
                label="Email Address"
              />
              <TextField
                fullWidth
                sx={{ mt: 3 }}
                type="password"
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.password && formik.errors.password}
                error={Boolean(formik.touched.password && formik.errors.password)}
              />
              <Box sx={{ my: 3 }}>
                <LoadingButton
                  fullWidth
                  variant="contained"
                  type="submit"
                  loading={formik.isSubmitting}
                >
                  Log In
                </LoadingButton>
              </Box>
            </form>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
