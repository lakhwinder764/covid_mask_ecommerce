import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import CustomizedSnackbars from '../components/Snackbar';
import { useDispatch } from 'react-redux';
import { loginuser } from '../../profile/profile.actions';
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setemail] = useState();
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const formValidationSchema = Yup.object({
    Email: Yup.string().required('Required'),
    Password: Yup.string().required('Required'),
  });

  const formikForm = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: formValidationSchema,

    onSubmit: () => {
      user.map((item) => {
        if (
          formikForm.values.Email === item.Email &&
          formikForm.values.Password === item.Password
        ) {
          handleClick();
          dispatch(
            loginuser({
              email: formikForm.values.Email,
              password: formikForm.values.Password,
            })
          );
          router.push('./Home');
        }
      });
    },
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexGrow="1"
      alignItems="center"
    >
      {open && (
        <CustomizedSnackbars
          open={open}
          onClose={handleClose}
          severity="success"
          message="LogIn Successfully"
        />
      )}
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: '400px', height: '450px', boxShadow: '0 0  10px #000000' }}
        mt={9}
      >
        <Box display="flex" justifyContent="center" mt={2}>
          <Image src="/company.jpg" width={80} height={60} alt="none" />
        </Box>
        <Box mt={2}>
          <Typography variant="h4" align="center">
            Log In
          </Typography>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <TextField
            type="email"
            variant="outlined"
            label="email"
            placeholder="enter email"
            sx={{ width: '250px' }}
            {...formikForm.getFieldProps('Email')}
            helperText={
              formikForm?.errors?.Email && formikForm?.touched?.Email
                ? formikForm.errors.Email
                : null
            }
            error={
              Boolean(formikForm?.errors?.Email) && formikForm?.touched?.Email
            }
          />
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <TextField
            type="password"
            variant="outlined"
            label="password"
            placeholder="enter password"
            sx={{ width: '250px' }}
            {...formikForm.getFieldProps('Password')}
            helperText={
              formikForm?.errors?.Password && formikForm?.touched?.Password
                ? formikForm.errors.Password
                : null
            }
            error={
              Boolean(formikForm?.errors?.Password) &&
              formikForm?.touched?.Password
            }
          />
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '250px' }}
            onClick={formikForm.handleSubmit}
          >
            Log In
          </Button>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Typography>
            Don't have an account{' '}
            <Link href="../components/Register">
              <a style={{ textDecoration: 'none' }}>Sign Up</a>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
