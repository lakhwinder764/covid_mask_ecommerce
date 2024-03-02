import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import {Typography,Box,Divider,Grid} from '@mui/material'
import Image from "next/image"
import makeStyles from '@mui/styles/makeStyles';
const useStyles=makeStyles((theme)=>({
    divider:{
        color:theme.palette.primary.main,
    }
}))
const Footer = () => {
    const classes=useStyles();
    return (
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor:"#FAFBFC",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"0px -2px 3px rgba(50,50,50,0.15)" 
  }}>
    <Box display="flex">
    <Image src="/company.jpg" width={50} height={30} alt="none"/>
    </Box>
   <Box display="flex">
      <p style={{fontSize:"12px"}}>abc</p>
      <CopyrightIcon fontSize="small"/>
       <p style={{fontSize:"12px"}}>2022</p>  
       </Box>
  </Box>
      //   <Grid container sx={{
      //       display:"flex",
      //       position: "fixed",
      //       left: 0,
      //       bottom: 0,
      //       width: "100%",
            // backgroundColor:"#FAFBFC",
      //       color:"black",
      //       justifyContent:"center",
      //       alignItems:"center",
      //       boxShadow:"0px -4px 12px rgb(0 0 0 / 5%)" 
      // }}>
      // <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      // <Box mb={1}>
      //   <Typography varaint="h6" sx={{textTransform:"uppercase",}}>Onine shopping</Typography> 
      //   </Box>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Women</Typography>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Kids</Typography>
      // </Grid>
      // <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      // <Box mb={1}>
      //   <Typography varaint="h6">Items</Typography> 
      //   </Box>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      // <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      // </Grid>
      // </Grid>
 )
}

export default Footer