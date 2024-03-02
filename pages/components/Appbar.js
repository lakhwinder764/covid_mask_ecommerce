import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Grid,
  Box,
  Divider,
  Input,
  InputAdornment,
} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import { Button, Typography, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchSharp';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
const Appbar = ({ position }) => {
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const cartcount = useSelector((state) => state.cart.count);
  const wishlistcount = useSelector((state) => state.wishlist.count);
  const usermail = useSelector((state) => state.profile);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorE2(null);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };
  const handleClk = () => {
    router.push('/components/Register');
  };
  const handleClk1 = () => {
    router.push('/components/Login');
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const search = () => {
    let filter = document.getElementById('search_input').value.toUpperCase();
    let mycard = document.getElementsByClassName('MuiCard-root');
    for (var i = 0; i < mycard.length; i++) {
      let value = mycard[i].outerText.toUpperCase();
      if (value) {
        if (value.indexOf(filter) > -1) {
          console.log('finded');
          mycard[i].style.display = '';
        } else {
          mycard[i].style.display = 'none';
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      setwidth(window.innerWidth);
      setheight(window.innerHeight);
    });
  }, []);
  useEffect(() => {
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  }, []);
  return (
    <Box
      boxShadow="0 4px 12px 0 rgb(0 0 0 / 5%)"
      zIndex="20"
      position={position}
    >
      <Grid container>
        <Grid item xs={8}>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorE2}
            open={open1}
            onClose={handleClose1}
          >
            <MenuItem>
              <Box display="flex" flexDirection="column">
                <AccountCircleSharpIcon fontSize="large" />
                <Box mt={1}>
                  <Typography
                    nowrap
                    sx={{
                      overflow: 'hidden',
                      width: '120px',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {usermail.email}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClk}>
              <Box display="flex" justifyContent="space-between" flexGrow="1">
                <Box>
                  <Typography>Register</Typography>
                </Box>
                <Box>
                  <LoginIcon />
                </Box>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleClk1}>
              <Box display="flex" justifyContent="space-between" flexGrow="1">
                <Box>Logout</Box>
                <Box>
                  <LogoutIcon />
                </Box>
              </Box>
            </MenuItem>
          </Menu>
          {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorE3}
        open={open3}
        onClose={handleClose3}
       sx={{'& .MuiMenu-paper':{
         backgroundColor:"pink",
       },
      opacity:"0.96"
       
      }}
      > */}
          {/* <Box width="586px" height="350px" backgroundColor="pink" sx={{opacity:"0.7"}}>
      <Grid container sx={{display:"flex"}}>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      <Grid item xs={3} sx={{display:'flex',flexDirection:"column",marginLeft:"16px",marginTop:"6px"}}>
      <Box mb={1}>
        <Typography varaint="h6">Items</Typography> 
        </Box>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      <Typography variant="p" sx={{fontSize:"11px",fontWeight:"bold"}}>Men</Typography>
      </Grid>
      
      
      
          </Grid>
          </Box> */}
          {/* </Menu> */}

          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              width: '500px',
              marginLeft: '10px',
            }}
          >
            <MenuItem>
              <Box display="flex" flexDirection="column">
                <AccountCircleSharpIcon fontSize="large" />
                <Box mt={1}>
                  <Typography
                    nowrap
                    sx={{
                      overflow: 'hidden',
                      width: '120px',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {usermail.email}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                router.push('/components/Register');
              }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Register</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push('/components/Login');
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Log out</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push('/components/Wishlist');
              }}
            >
              <ListItemIcon>
                <FavoriteSharpIcon sx={{ color: 'red' }} />
              </ListItemIcon>
              <ListItemText>Wishlist</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push('/components/Bag');
              }}
            >
              <ListItemIcon>
                <ShoppingBagSharpIcon style={{ Homecolor: 'black' }} />
              </ListItemIcon>
              <ListItemText>Cart</ListItemText>
            </MenuItem>
          </Menu>
          <Box display="flex">
            <Box pt={1}>
              <Image src="/company.jpg" width={80} height={40} alt="none" />
            </Box>
            {/* <Box display="flex">
             <Box mt={2} ml={3} onClick={handleClick3} sx={{'&:hover':{
                   borderBottom:"2px solid red",
                   cursor:"pointer"
             }}}>
               <Typography variant="h6" sx={{textTransform:"uppercase",fontSize:"15px"}}>Men</Typography>
               </Box>
               <Box mt={2} ml={3} onClick={handleClick3}  sx={{'&:hover':{
                   borderBottom:"2px solid blue",
                   cursor:"pointer"
             }}}>
                 <Typography variant="h6" sx={{textTransform:"uppercase",fontSize:"15px"}}>Women</Typography>
               </Box>
             </Box> */}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <Box
              display="flex"
              sx={{ background: '#f5f5f6', marginTop: '9px' }}
            >
              {/* <input id="search_input" onKeyUp={search} placeholder='Search for products' style={{"fontSize": "14px",height: "30px",width:"300px",color:"#696e79",outline:"0",border:"1px solid #f5f5f6",borderRadius:"0 4px 4px 0",background:"#f5f5f6",overflow: "hidden",textOverflow: "ellipsis",whiteSpace:"nowrap"}}/> */}
              <Input
                sx={{
                  '& .MuiInputAdornment-root': {
                    marginLeft: '8px',
                  },
                }}
                disableUnderline
                fullWidth
                id="search_input"
                onKeyUp={search}
                placeholder="Search for products"
                style={{
                  width: '1100px',
                  color: '#696e79',
                  outline: '0',
                  border: '1px solid #f5f5f6',
                  borderRadius: '8px',
                  background: '#f5f5f6',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          {width > '880' ? (
            <>
              <Box display="flex" justifyContent="flex-end" ml={3} mt="4px">
                <IconButton onClick={handleClick1}>
                  <AccountCircleSharpIcon
                    id="basic-button"
                    style={{ color: 'black' }}
                  />
                </IconButton>

                <BootstrapTooltip title="Wishlist">
                  <IconButton
                    onClick={() => {
                      router.push('/components/Wishlist');
                    }}
                  >
                    <Badge badgeContent={wishlistcount} color="primary">
                      <FavoriteSharpIcon style={{ color: 'red' }} />
                    </Badge>
                  </IconButton>
                </BootstrapTooltip>
                <BootstrapTooltip title="Bag">
                  <IconButton>
                    <Badge badgeContent={cartcount} color="primary">
                      <ShoppingBagSharpIcon
                        //TODO:
                        style={{ color: 'black' }}
                        onClick={() => {
                          router.push('/components/Bag');
                        }}
                      />
                    </Badge>
                  </IconButton>
                </BootstrapTooltip>
              </Box>
            </>
          ) : (
            <Box display="flex" justifyContent="flex-end" ml={3}>
              {/* FIXME: */}
              <IconButton onClick={handleClick}>
                {/* FIXME: */}
                <MenuIcon id="basic-button" style={{ color: 'black' }} />
              </IconButton>
              {/* TODO: */}
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appbar;
