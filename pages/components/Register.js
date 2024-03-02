import React,{useState} from 'react'
import {Box,Typography,TextField,Button,Select,FormControl,MenuItem,InputLabel,FormHelperText} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {addUser} from "../../user/user.actions";
import { useDispatch} from "react-redux";
import CustomizedSnackbars from '../components/Snackbar';
import { useSelector} from "react-redux";
const Login = () => {
    const [gender, setgender] =useState('');
    const dispatch=useDispatch();
    const [open,setOpen]=useState(false);
    const user = useSelector((state) => state.user.user);
    const handleChange = (event) => {
      formikForm.setFieldValue('Gender',event.target.value)
    };
    const handleClick = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    const formValidationSchema = Yup.object({
		
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        Email: Yup.string().email('Invalid email format').required('Required'),
        Date:Yup.string().required('Required'),
        Gender:Yup.string().required('Required'),
  Password: Yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.'),
  confirmPassword:Yup
    .string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('Password')], 'Your passwords do not match.')

	});

	const formikForm = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
            Email:'',
            Password:'',
            confirmPassword:'',
            Date:'',
            Gender:'', 

		},
		validationSchema: formValidationSchema,

		onSubmit: () => {
      const payload={
        firstName: formikForm.values.firstName,
        lastName: formikForm.values.lastName,
              Email:formikForm.values.Email,
              Password:formikForm.values.Password,
              confirmPassword:formikForm.values.confirmPassword,
              Date:formikForm.values.Date,
              Gender:formikForm.values.Gender,
              }
        user.map((item)=>{
          if(formikForm.values.Email===item.Email){
            console.log("Email already exists");
          }
          else if(formikForm.values.Email!==item.Email){
            handleClick()
            dispatch(addUser(payload))
          }
        })
    },
	});
  return (
     
      <Box display="flex" justifyContent="center" flexGrow="1" alignItems="center" ml={9} mr={5} mt={5} mb={5}>
           {open && <CustomizedSnackbars open={open} onClose={handleClose} severity="success" message="User Registered Successfully"/>}
      <Box display="flex" flexDirection="column" sx={{width:"500px",height:"650px",boxShadow:"0 0  10px #000000"}} mt={9}  border="1px solid black" >
            <Box display="flex" justifyContent="center" mt={2}>
            <Image src="/company.jpg" width={80} height={60} alt="none"/>
           </Box>
           <Box mt={2}>
           <Typography variant="h4" align="center">Sign Up</Typography>
          </Box>
          <Box mt={3} display="flex" justifyContent="space-evenly">
            <Box mx={3} ml={6}>
           <TextField 
            variant='outlined'
            label="First Name" 
            placeholder='First Name'
            sx={{width:"200px"}}
            {...formikForm.getFieldProps('firstName')}
            helperText={
                formikForm?.errors?.firstName
                    && formikForm?.touched?.firstName
                    ? formikForm.errors.firstName
                    : null
            }
            error={
                Boolean(formikForm?.errors?.firstName) && formikForm?.touched?.firstName
            }
             />
             </Box>
             <Box mx={3}>
           <TextField 
              variant='outlined' 
              label="Last Name" 
              placeholder='Last Name' 
              sx={{width:"200px"}}
              {...formikForm.getFieldProps('lastName')}
              helperText={
                formikForm?.errors?.lastName
                    && formikForm?.touched?.lastName
                    ? formikForm.errors.lastName
                    : null
                }
              error={
                Boolean(formikForm?.errors?.lastName) && formikForm?.touched?.lastName
                }
              />
              </Box>
           </Box>
           <Box  mt={3} display="flex" justifyContent="space-evenly">
           <Box mx={3} ml={6}>
           <TextField 
              type="email"
              variant='outlined' 
              label="email" 
              placeholder='enter email' 
              sx={{width:"200px"}}
              {...formikForm.getFieldProps('Email')}
              helperText={
              formikForm?.errors?.Email
                  && formikForm?.touched?.Email
                  ? formikForm.errors.Email
                  : null
              }
            error={
              Boolean(formikForm?.errors?.Email) && formikForm?.touched?.Email
              }
            />
            </Box>
            <Box mx={3}>
           <TextField 
               type="password"
               variant='outlined'
               label="password" 
               placeholder='enter password' 
               sx={{width:"200px"}}
               {...formikForm.getFieldProps('Password')}
               helperText={
               formikForm?.errors?.Password
                   && formikForm?.touched?.Password
                   ? formikForm.errors.Password
                   : null
               }
             error={
               Boolean(formikForm?.errors?.Password) && formikForm?.touched?.Password
               }
             />
             </Box>
         </Box>
           <Box  mt={3} display="flex" justifyContent="space-evenly">
           <Box mx={3} ml={6}>
           <TextField 
           type="password"
            variant='outlined'
             label="confirm password"
              placeholder='enter confirm password'
               sx={{width:"200px"}}
               {...formikForm.getFieldProps('confirmPassword')}
               helperText={
               formikForm?.errors?.confirmPassword
                   && formikForm?.touched?.confirmPassword
                   ? formikForm.errors.confirmPassword
                   : null
               }
             error={
               Boolean(formikForm?.errors?.confirmPassword) && formikForm?.touched?.confirmPassword
               }
               />
               </Box>
               <Box mx={3}>
           <TextField 
           type="date" 
           variant="outlined" 
           label={null} 
           placeholder='enter your birth date' 
           sx={{width:"200px"}}
           {...formikForm.getFieldProps('Date')}
               helperText={
               formikForm?.errors?.Date
                   && formikForm?.touched?.Date
                   ? formikForm.errors.Date
                   : null
               }
             error={
               Boolean(formikForm?.errors?.Date) && formikForm?.touched?.Date
               }
           />
           </Box>
         </Box>
           <Box  mt={3} display="flex" justifyContent="flex-start">
           <Box ml={5} >
           <FormControl sx={{minWidth: 120 }} size="small" error={Boolean(formikForm?.errors?.Gender
                   && formikForm?.touched?.Gender
                   ? formikForm.errors.Gender
                   : null)}>
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        id="demo-select-small"
        value={formikForm.values.Gender}
        label="Gender"
        onChange={handleChange}
      >
     <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
      <FormHelperText type="invalid">{formikForm?.errors?.Gender
                   && formikForm?.touched?.Gender
                   ? formikForm.errors.Gender
                   : null}
    </FormHelperText>
    </FormControl>
    </Box>
         </Box>
         <Box  mt={3} display="flex" justifyContent="center">
         <Button variant="contained" color="primary" sx={{width:"250px"}} onClick={formikForm.handleSubmit}>Sign Up</Button>
         </Box>
         <Box  mt={3} display="flex" justifyContent="center">
         <Typography>Already have an account <Link href="./Login"><a style={{textDecoration:"none"}}>Log In</a></Link></Typography>
         </Box>
      </Box>
      </Box>
  )
}

export default Login