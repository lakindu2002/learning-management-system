import { FC } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Logo from 'src/components/LogoSign';
import { useAuth } from 'src/contexts/AuthContext';
import { VerifyCodeRequest } from 'src/models/requests';
import { useNavigate } from 'react-router';

interface VerifyCodeProps { }

export const VerifyCode: FC<VerifyCodeProps> = () => {
  const { verifySignUpCode } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      code: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Please enter a valid email address').required('Email address is required'),
      code: Yup.string().required('Code is required').min(6, 'Code must be 6 characters').max(6, 'Code must be 6 characters')
    }),
    onSubmit: async (values) => {
      const verifyCodeRequest: VerifyCodeRequest = {
        email: values.email,
        code: values.code
      }
      try {
        await verifySignUpCode(verifyCodeRequest);
        navigate('/login');
        toast.success('Your account was created successfully. Please log in to access your account');
      } catch (err) {
        toast.error(err?.message || 'We could not verify your code at the moment. Please try again.');
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
            Verify Confirmation Code
          </Typography>
          <Typography
            sx={{ mt: 3 }}
            variant="body2"
            color="text.secondary"
            textAlign="center"
          >
            Enter the code that was emailed to your email address to confirm your account.
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
                type="code"
                id="code"
                name="code"
                label="Verification Code"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.code && formik.errors.code}
                error={Boolean(formik.touched.code && formik.errors.code)}
              />
              <Box sx={{ my: 3 }}>
                <LoadingButton
                  fullWidth
                  variant="contained"
                  type="submit"
                  loading={formik.isSubmitting}
                >
                  Confirm Account
                </LoadingButton>
              </Box>
            </form>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
