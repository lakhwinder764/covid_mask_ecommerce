import React from 'react'
import { styled } from '@mui/material/styles';
import {Button,Grid,Typography} from '@mui/material';
import Image from "next/image"
import { pink } from '@mui/material/colors';
import { useRouter } from 'next/router'
import { useDispatch,useSelector} from "react-redux";
import Card from "../../pages/components/Card";
import Total from "../components/Total";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Store = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.products);
  const price=useSelector((state)=>state.cart.price);
      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
        '&:hover': {
          backgroundColor: pink[700],
        },
      }));
      
    return (
      cart.length!==0?
      <div>
      <Button variant="text" color="primary" onClick={()=>{router.push("./Wishlist")}}>
		       <ArrowBackIcon/>
           </Button>
    <Typography variant="h5" sx={{marginLeft:"15px",marginTop:"15px"}}>My Cart</Typography>
      <br/>
      <br/>
      <Grid container xs={12} alignItems="center" justifyContent="center">
     {
       cart.map((
         item)=>{
         return(
              <Grid item xs={2} sx={{marginRight:"25px",marginBottom:"25px",marginTop:"20px"}}>
           <Card key={item.id} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} cart={true} image1={item.image1} image2={item.image2} rating={item.rating} views={item.views}/>
             </Grid>
         )
        })
     }
     </Grid>
     <Total price={price}/>
     </div>:
     <div>
          <Button variant="text" sx={{color:"pink"}} onClick={()=>{router.push("./Wishlist")}}>
          <ArrowBackIcon/>
          </Button>
        <div style={{"maxWidth": "980px","margin":"230px auto 370px",textAlign:"center",marginTop:"4rem"}}>
        <br/>
        <Image src="/bag.jpg" width="200" height="200" alt="none"/>   
        <br/> 
        <div style={{"fontSize":"20px","fontWeight":"600","color":"#282c3f"}}>Hey,it feels so light!</div>

        <div style={{"fontSize":"18px","color":"#94989f","maxWidth":"380px","margin":"20px auto 0"}}>There is nothing in your bag lets add some items</div>
       <br/>
        <ColorButton variant="outlined" onClick={()=>{router.push("/components/Wishlist")}}>ADD ITEMS FROM WISHLIST</ColorButton>
   
        </div>
        </div>
    )
}

export default Store
