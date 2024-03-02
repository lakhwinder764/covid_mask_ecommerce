import React,{useState} from 'react'
import {
    TextField,Button,Card,Box,Typography
   } from '@mui/material';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import CustomizedSnackbars from '../components/Snackbar';
const PaymentMethodPaytm = ({paymentMethod}) => {
  const [value,setValue]=useState();
  const [phone,setPhone]=useState();
  const [open,setOpen]=useState(false);
  const handleClick = () => {
      setOpen(true);
    };
     const handleClose = () => {
      setOpen(false);
    };
  return (
    paymentMethod==="Paytm" &&
    <Box ml={6}>
       {open && <CustomizedSnackbars open={open} onClose={handleClose} severity="error" message="Service not available yet!"/>}
    <Card sx={{width:"700px",height:"300px",paddingTop:"20px",paddingLeft:"20px"}}>
      <Box display="flex" flexDirection="column">
          <Box mb={1}>
        <Typography >Enter Phone no</Typography>  
        </Box>
        <Box sx={{width:"50px",height:"50px"}}>
        <PhoneInput
         country={'us'}
        value={phone}
        // onChange={setPhone(event.target.value)}
/>  
       </Box>
      <Box mt={6}>
      <Button color="primary" variant="contained" sx={{width:"150px"}} onClick={handleClick}>Pay Now</Button>
        </Box>
        </Box>
    
    </Card>
    </Box>
  )
}

export default PaymentMethodPaytm