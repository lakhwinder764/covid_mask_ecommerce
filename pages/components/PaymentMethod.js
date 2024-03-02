import React,{useState} from 'react'
import {
    TextField,Button,Card,Box,Typography
   } from '@mui/material';
import CustomizedSnackbars from '../components/Snackbar';
const PaymentMethod = ({paymentMethod}) => {
  const [open,setOpen]=useState(false);
  const handleClick = () => {
      setOpen(true);
    };
     const handleClose = () => {
      setOpen(false);
    };
  return (
    (paymentMethod==="Gpay" || paymentMethod==="Upi") &&
    <Box ml={6} >
        {open && <CustomizedSnackbars open={open} onClose={handleClose} severity="error" message="Service not available yet!"/>}
    <Card sx={{width:"700px",height:"300px",paddingTop:"20px",paddingLeft:"20px"}}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column">
         <Typography variant="caption">ENTER UPI ID</Typography>   
        <TextField variant="standard" sx={{width:"300px"}} label="Upi id" id="fullWidth" />
       </Box>
      <Box mt={4}>
      <Button color="primary" variant="contained" sx={{width:"150px"}} onClick={handleClick}>Pay Now</Button>
        </Box>
        </Box>
    
    </Card>
    </Box>
  )
}

export default PaymentMethod