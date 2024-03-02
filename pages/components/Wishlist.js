import React from 'react'
import Image from "next/image"
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import Card from "../../pages/components/Card";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import {Grid,Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Wishlist = () => {
  const router = useRouter();
  const wishlists = useSelector((state) => state.wishlist.products);
  console.log("wishlists",wishlists)
       return (
         wishlists.length!==0?
         <div>
           <Button variant="text" color="primary" onClick={()=>{router.push("./Home")}}>
		       <ArrowBackIcon/>
           </Button>
         <Typography variant="h5" sx={{marginLeft:"15px",marginTop:"15px"}}>My Wishlist</Typography>
          <br/>
          <br/>
          <Grid container xs={12} sx={{paddingLeft:"12px"}}>
         {
           wishlists.map((
             wishlist)=>{
             return(
              <Grid item xs={6}>
               <Card key={wishlist.id} id={wishlist.id} name={wishlist.name} image={wishlist.image} description={wishlist.description} price={wishlist.price} wishlist={true} image1={wishlist.image1} image2={wishlist.image2} rating={wishlist.rating} views={wishlist.views}/>
              </Grid>
             )
            })
         }
         </Grid>
         <Footer/>
         </div>
         :
         <div>
          <Button variant="text" color="primary" onClick={()=>{router.push("./Home")}}>
		       <ArrowBackIcon/>
           </Button>  
        <div style={{"maxWidth": "980px","margin":"230px auto 180px",textAlign:"center","marginTop":"4rem"}}>
        <div style={{"fontSize":"20px","fontWeight":"600","color":"#282c3f"}}>YOUR WISHLIST IS EMPTY</div>
      <div style={{"fontSize":"18px","color":"#94989f","maxWidth":"380px","margin":"20px auto 0"}}>Add items that you like to your wishlist.Review them anytime and easily move them to the bag</div>
      <br/>
        <Image src="/shopo.jpg" width="200" height="200" alt="none"/>   
        <br/> 
       <br/>
        <Button variant="outlined" onClick={()=>{router.push("./Home")}}>CONTINUE SHOPPING</Button>
        </div>
        <Footer/>
        </div>
       
    )
}

export default Wishlist
