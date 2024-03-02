import React,{useEffect,useState} from 'react'
import {Card,Box,Divider} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch} from "react-redux";
import styles from "../../styles/Home.module.css"
import {addToCart,deleteToCart,addToPrice,deleteToPrice,addToCartProducts,deleteToCartProducts} from "../../Bag/Bag.action";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton,Tooltip } from '@mui/material';
import { Button,Grid} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {addToWishlistProducts,deleteToWishlistProducts,addToWishlist,deleteToWishlist} from "../../Wishlist/Wishlist.action"
import CustomizedSnackbars from '../components/Snackbar';
import Total from "../components/Total";
import Badge from '@mui/material/Badge';
import Image from "next/image";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Carousel } from 'react-responsive-carousel';
import StarIcon from '@mui/icons-material/Star';
const Cards = ({name,image,description,id,value,cart,product,wishlist,price,image1,image2,rating,views}) => {
  const [open,setOpen]=useState(false);
  const [open1,setOpen1]=useState(false);

  const dispatch=useDispatch();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClick1 = async() => {
    setOpen1(true);
  };
  

const handleClose=(event,reason)=>{
  if(reason==='clickaway'){
    return;
  }
  setOpen(false);
  setOpen1(false);
}
  
    return (
      <>
        <Box   sx={{width:"150px",position:"relative",border:" 1px solid #D3D3D3",'&:hover': {
             '& .MuiNewBox1':{
                 display:"block"
             },
             '& .MuiNewBox':{
                   display:"none"
             },
             '& .MuiNewBox3':{
              display:"flex"
            },
            
              boxShadow:"0 0  10px #000000"
            
        },}}>
          <Box display="flex" flexDirection="column" > 
           <Box className="MuiNewBox" sx={{position:"relative"}}>
          <Image src={image} width={250} height={300} alt="none" />
          <Box sx={{position:"absolute",display:"flex",top:"150px",backgroundColor:"white",height:"20px",width:"70px",marginLeft:"10px",opacity:"0.7"}}>
          <Typography sx={{marginLeft:"5px",paddingBottom:"2px",fontSize:"13px",fontWeight:"bold"}}>{rating}</Typography>
          <StarIcon sx={{color:"blue",height:"15px",width:"20px",marginTop:"2px"}}/>
         <Box sx={{border:"1px solid #D3D3D3",backgroundColor:"black",marginTop:"2px",marginBottom:"2px"}}/>
           
          <Typography sx={{paddingBottom:"2px",fontSize:"10px",fontWeight:"bold",marginLeft:"1px",marginTop:"2px"}}>{views}</Typography>
          </Box>
          </Box>
         <Box height="180px" sx={{display:"none"}} className="MuiNewBox1">
         
         <Carousel infiniteLoop={true} autoPlay={true}  showArrows={false} showThumbs={false} showStatus={false} >
            <div>
                <img src={image} className={styles.slider_container} alt="image1"/>
        </div>
            <div>
                
                <img src={image1} className={styles.slider_container}  alt="image2" />
               </div>
            <div>
                <img src={image2} className={styles.slider_container}  alt="image3"/>
               </div>
           
        </Carousel>
        </Box>
        <Box mx="10px" my={1}>
            <Typography variant="h3" sx={{fontSize:"16px",fontWeight:"500",lineHeight:"1",color:"#282c3f",marginBottom:"6px"}}>{name}</Typography>
            </Box>
        <Box mx="10px" my={1}>
         
        <Typography variant="h4" sx={{color:"#535766",fontSize:"14px",lineHeight:"1",fontWeight:"400"}}>
          Men 512 masks  
        </Typography>
 
      </Box>
      <Box mx="10px">
       
        <Typography sx={{fontWeight:"500",color:"#282c3f",fontSize:"14px"}}>
         Rs. {price}
        </Typography>
      </Box>
      </Box>
      {
     
        wishlist && 
        <>
        <Tooltip title="Delete" arrow>
        <IconButton aria-label="delete" size="large" color="primary" disableRipple onClick={()=>{
            dispatch(deleteToWishlist());
            dispatch(deleteToWishlistProducts(id));
           
          
           
          }}>
        <DeleteIcon />
       </IconButton>  
      </Tooltip>
      <Tooltip title="Add to Cart" arrow>
       <IconButton style={{"float":"right"}} aria-label="delete" size="large" color="primary" onClick={()=>{
         dispatch(addToCart());
         dispatch(addToCartProducts({name:name,image:image,description:description,id:id,price:price,image1:image1,image2:image2,rating:rating,views:views}))
         dispatch(addToPrice(price))
         handleClick();
        }
         
       }>
       <ShoppingCartSharpIcon/>
       </IconButton>
       </Tooltip>
       </> 
      } 
      {
        product && 
        <Box display="none" className="MuiNewBox3" border="1px solid #D3D3D3" m={0.5} height="30px" borderRadius="2px">
          
       <IconButton style={{"alignItems":"center"}} aria-label="delete" size="large" color="primary" disableRipple onClick={()=>
       {
         dispatch(addToWishlistProducts({name:name,image:image,description:description,id:id,price:price,image1:image1,image2:image2,rating:rating,views:views}));
         dispatch(addToWishlist());
          handleClick();
       }}>
         <FavoriteSharpIcon sx={{color:"#36454f"}} size="small"/>
        </IconButton>
        <Typography variant="button" sx={{marginTop:"3px"}} color="#848482">WISHLIST</Typography>
        </Box>
      }
      {
        cart &&
        <>
        <Tooltip title="Delete" arrow>
        <IconButton aria-label="delete" size="large" color="primary" disableRipple onClick={()=>{
         
          dispatch(deleteToCart()); 
          dispatch(deleteToCartProducts(id));
          dispatch(deleteToPrice(price))
               
        }
        }>
        <DeleteIcon />
       </IconButton>  
       </Tooltip>
      </>       
      } 
      
    </Box>
    {product && open && <CustomizedSnackbars open={open} onClose={handleClose} severity="success" message="Item added to Wishlist!"/>}
    {wishlist && open && <CustomizedSnackbars open={open} onClose={handleClose} severity="success" message="Item added to Cart!"/>}
    {cart && open && <CustomizedSnackbars open={open} onClose={handleClose} severity="success" message="Item added to Cart!"/>}
    {cart && open1 && <CustomizedSnackbars open={open1} onClose={handleClose} severity="error" message="Item deleted from Cart!"/>}
    {wishlist && open1 && <CustomizedSnackbars open={open1} onClose={handleClose} severity="error" message="Item deleted from wishlist!"/>}
    </>
    )
}

export default Cards