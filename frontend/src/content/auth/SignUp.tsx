import { FC } from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { Grid, Typography, Container, TextField, Box } from '@mui/material';
import { useAuth } from 'src/contexts/AuthContext';
import { SignUpRequest } from 'src/models/requests';
import Logo from 'src/components/LogoSign';
import { useNavigate } from 'react-router';

interface SignUpProps { }

export const SignUp: FC<SignUpProps> = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      instituteName: '',
      fullName: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email address is required'),
      password: Yup.string().required('Password is required').min(6, 'Password cannot be less than 6 characters'),
      instituteName: Yup.string().required('Institute name is required').max(255, 'Institute name cannot exceed 255 characters'),
      fullName: Yup.string().required('Name is required').max(255, 'Name cannot exceed 255 characters')
    }),
    onSubmit: async (values) => {
      const signUpRequest: SignUpRequest = {
        email: values.email,
        password: values.password,
        insituteName: values.instituteName,
        fullName: values.fullName,
      };
      try {
        await register(signUpRequest);
        navigate('/verify-code');
      } catch (err) {
        toast.error(err?.message || 'We could not create your account in this moment. Please try again.');
      }
    }
  });

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
            Sign Up
          </Typography>
          <Typography
            sx={{ mt: 3 }}
            variant="body2"
            color="text.secondary"
            textAlign="center"
          >
            Create an account to start managing your institute at MyLMS.
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
                id="fullName"
                name="fullName"
                sx={{ mt: 3 }}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.fullName && formik.errors.fullName}
                error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                label="Full Name"
              />
              <TextField
                fullWidth
                sx={{ mt: 3 }}
                id="instituteName"
                name="instituteName"
                label="Institute Name"
                value={formik.values.instituteName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.instituteName && formik.errors.instituteName}
                error={Boolean(formik.touched.instituteName && formik.errors.instituteName)}
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
                  Create My Account
                </LoadingButton>
              </Box>
            </form>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
