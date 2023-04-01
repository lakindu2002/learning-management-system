import { FC } from 'react';
import *  as Yup from 'yup';
import { useNavigate } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';
import Logo from 'src/components/LogoSign';
import { Grid, Typography, Container, TextField, Box, Divider } from '@mui/material';
import { useFormik } from 'formik';
import { useAuth } from 'src/contexts/AuthContext';
import { ResetDefaultPasswordRequest } from 'src/models/requests';

interface ResetPasswordProps { }

export const ResetPassword: FC<ResetPasswordProps> = () => {
  const { resetDefaultPassword } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const formik = useFormik({
    initialValues: {
      email: searchParams.get('email') || '',
      fullName: '',
      tempPassword: '',
      newPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter a valid email address').required('Email address is required'),
      fullName: Yup.string().required('Full name is required'),
      tempPassword: Yup.string().required('Temporary password is required'),
      newPassword: Yup.string().required('New password is required')
    }),
    onSubmit: async (values) => {
      try {
        const request: ResetDefaultPasswordRequest = {
          email: values.email,
          fullName: values.fullName,
          newPassword: values.newPassword,
          tempPassword: values.tempPassword
        }
        await resetDefaultPassword(request);
        toast.success('Password changed. Use the new password to log in to your account')
        navigate('/login');
      } catch (err) {
        toast.error('Could not reset password. Please try again. Please try again.');
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
        sx={{ my: 3 }}
      >
        <Grid item md={12} lg={12} mx="auto">
          <Typography variant="h1">
            <Logo />
          </Typography>
          <Typography
            variant="h1"
            color="text.primary"
            textAlign="center"
          >
            Reset Password
          </Typography>
          <Typography
            sx={{ mt: 3 }}
            variant="body2"
            color="text.secondary"
            textAlign="center"
          >
            Reset the auto generated password.
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
                type="fullName"
                id="fullName"
                name="fullName"
                label="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.fullName && formik.errors.fullName}
                error={Boolean(formik.touched.fullName && formik.errors.fullName)}
              />
              <TextField
                fullWidth
                sx={{ mt: 3 }}
                type="tempPassword"
                id="tempPassword"
                name="tempPassword"
                label="Temporary Password"
                value={formik.values.tempPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.tempPassword && formik.errors.tempPassword}
                error={Boolean(formik.touched.tempPassword && formik.errors.tempPassword)}
              />
              <TextField
                fullWidth
                sx={{ mt: 3 }}
                type="newPassword"
                id="newPassword"
                name="newPassword"
                label="New Password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.newPassword && formik.errors.newPassword}
                error={Boolean(formik.touched.newPassword && formik.errors.newPassword)}
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
            <Divider sx={{ my: 2 }} />
            <Link
              to="/sign-up"
              style={{
                textDecoration: 'none'
              }}
            >
              <Typography>
                Create a new account
              </Typography>
            </Link>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
