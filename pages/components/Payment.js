import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Tabs from "./Tabs";
import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
  Box,
  Grid
} from '@mui/material';
import Image from "next/image";
import PaymentMethod from "./PaymentMethod";
import PaymentMethodPaytm from "./PaymentMethodPaytm";
export default function Payment() {
  
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedValuePaytm, setSelectedValuePaytm] = React.useState(false);
  const [selectedValueGpay, setSelectedValueGpay] = React.useState(false);
  const [selectedValueUpi, setSelectedValueUpi] = React.useState(false);
  const [selectedValueCredit, setSelectedValueCredit] = React.useState(false);
  console.log(paymentMethod)
  const handleChangePaytm = (event) => {
   
    setSelectedValuePaytm(true);
    setSelectedValueGpay(false);
    setSelectedValueUpi(false);
    setSelectedValueCredit(false);
    setPaymentMethod(event.target.value)
  };
  const handleChangeGpay=(event)=>{
    setSelectedValuePaytm(false);
    setSelectedValueGpay(true);
    setSelectedValueUpi(false);
    setSelectedValueCredit(false);
    setPaymentMethod(event.target.value)
  }
  const handleChangeUpi=(event)=>{
    setSelectedValuePaytm(false);
    setSelectedValueGpay(false);
    setSelectedValueUpi(true);
    setSelectedValueCredit(false);
    setPaymentMethod(event.target.value)
  }
  const handleChangeCredit=(event)=>{
    setSelectedValuePaytm(false);
    setSelectedValueGpay(false);
    setSelectedValueUpi(false);
    setSelectedValueCredit(true);
    setPaymentMethod(event.target.value)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
    <Box mr={2} ml={2}>
      <Typography variant="h5" align="center">Payment Method</Typography>
    <Box display="flex" mt={8} sx={{justifyContent:"center"}}>
    <Box display="flex" mr={4} sx={{border:"1px solid black",width:"150px",borderRadius:"8px", boxShadow:"0 0  10px #000000"}}>
        <Radio
        checked={selectedValuePaytm}
        onChange={handleChangePaytm}
        value="Paytm"
        name="radio-buttons"
      />
      <Box sx={{width:"100px",height:"100px"}}>
      <Image src="/paytm.jpg" width="130" height="130" alt="none"/>  
      </Box> 
    </Box>
     <Box display="flex" mr={4} sx={{border:"1px solid black",width:"150px",borderRadius:"8px", boxShadow:"0 0  10px #000000"}}>
     <Radio
     checked={selectedValueGpay}
     onChange={handleChangeGpay}
     value="Gpay"
     name="radio-buttons"
     // inputProps={{ 'aria-label': 'A' }}
   />
   <Box mt={2}  sx={{width:"100px",height:"100px"}}>
   <Image src="/gpay.jpg" width="280" height="230" alt="none"/>  
   </Box> 
 </Box>
 <Box display="flex" mr={4} sx={{border:"1px solid black",width:"150px",borderRadius:"8px", boxShadow:"0 0  10px #000000"}}>
     <Radio
     checked={selectedValueUpi}
     onChange={handleChangeUpi}
     value="Upi"
     name="radio-buttons"
     // inputProps={{ 'aria-label': 'A' }}
   />
   <Box mt={2}  sx={{width:"100px",height:"100px"}}>
   <Image src="/Upi.jpg" width="280" height="230" alt="none"/>  
   </Box> 
 </Box>
 <Box display="flex" mr={4} sx={{border:"1px solid black",width:"150px",borderRadius:"8px",boxShadow:"0 0  10px #000000"}}>
     <Radio
     checked={selectedValueCredit}
     onChange={handleChangeCredit}
     value="Credit"
     name="radio-buttons"
     // inputProps={{ 'aria-label': 'A' }}
   />
   <Box mt={2}  sx={{width:"100px",height:"100px"}}>
   <Image src="/Credit.jpg" width="280" height="230" alt="none"/>  
   </Box> 
 </Box>
 </Box>
 <Box mt={4} ml={4}>
 <Tabs val={paymentMethod}/>
 <PaymentMethod paymentMethod={paymentMethod}/>
 <PaymentMethodPaytm paymentMethod={paymentMethod}/>
 </Box>
 </Box>
 </Grid>
 </Grid>    
  );
}