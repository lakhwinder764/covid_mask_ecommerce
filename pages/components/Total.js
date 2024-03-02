import React from 'react'
import Image from "next/image"
import CopyrightIcon from '@mui/icons-material/Copyright';
import {Typography,Grid,IconButton, Icon,Button,Tooltip,Box} from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router'
const Total = ({price}) => {
    const router = useRouter();
    return (
       
        <Grid container sx={{
            display:"flex",
            flexDirection:"row",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor:"white",
            color:"black",
            justifyContent:"center",
            paddingBottom:"15px",
            paddingLeft:"15px",
            boxShadow:"0px -2px 3px rgba(50,50,50,0.15)" 
      }}>
        
        <Grid item xs={11}>
            <Grid container sx={{display:"flex",marginTop:"8px"}} alignItems="center" >
            <CurrencyRupeeIcon/>
            <Typography variant="h6">{price}</Typography>
            </Grid>
            </Grid>
            <Grid item xs={1}>
                <Box mt={1}>
                <Tooltip title="Buy" arrow>
                <Button variant="contained" color="warning" onClick={()=>{router.push("./Payment")}}>
                <ShoppingCartIcon sx={{color:"black"}}/> 
                </Button>
                </Tooltip>
                </Box>
            </Grid>
    
      </Grid>
    )
}

export default Total