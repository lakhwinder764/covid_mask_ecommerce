import React,{useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/SearchSharp';
import {Radio,Box,Divider,IconButton} from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {FormControl,Typography,Input,InputAdornment} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { useSelector,useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
const Listo=({onChange,onChange1})=>{
const [search,setsearch]=useState(false); 
const click=()=>{
  setsearch(true);
} 
const search1=()=>{
  let filter=document.getElementById("search_radio").value.toUpperCase();
  var a=document.getElementById("Boxes");
   var b=a.getElementsByClassName("MuiFormControlLabel-root");
 for(var i=0;i<b.length;i++){
     let value=b[i].getElementsByTagName('p')[0].innerHTML.toUpperCase();
     if(value){
         if(value.indexOf(filter)>-1){
          console.log("finded")
          b[i].style.display=""   
         }
         else{
            b[i].style.display="none"
         }
     }
 }
}
const handleSearch=()=>{
   setsearch(false);
}
  return (
   <Box display="flex" flexDirection="column">
     <Box px="10px" py="10px">
     <FormControl >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="male"
        name="radio-buttons-group"
        onChange={onChange}
        
      >
        <FormControlLabel value="female" className="MuiRadio" control={<Radio size="small" sx={{
          '&.MuiSvgIcon-root': {
            fontSize: 18,
          },
          '&.Mui-checked':{
          color:"#ff3f6c"
          }
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>Female</Typography>} />
        <FormControlLabel sx={{
          '&.MuiFormControlLabel-root':{
            height:"15px"
          }
        }}value="male" control={<Radio size="small" sx={{
         '&.Mui-checked':{
          color:"#ff3f6c"
          },
          
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>Male</Typography>} />
      </RadioGroup>
    </FormControl>
    </Box>
    <Divider/>
    <Box px="10px" py="10px">
    <FormControl  >
      {!search? 
      <Box display="flex" flexGrow={1}>
      <Typography sx={{fontWeight:"500",fontSize:"14px",textTransform:"uppercase",color:"#282c3f",fontFamily:"sans-serif"}}>categories</Typography>
      <IconButton disableRipple sx={{paddingTop:"0px"}} onClick={click}>
      <SearchIcon sx={{backgroundColor:"#D3D3D3",borderRadius:"8px",height:"20px",width:"20px"}}/>
      </IconButton>
      </Box>:
      <Input
         
          disableUnderline
              id="search_radio" onKeyUp={search1} placeholder='Categories' sx={{color:"#696e79",outline:"0",border:"1px solid #f5f5f6",borderRadius:"2px",background:"#f5f5f6",height:"20px",width:"120px"}}
          endAdornment={
            <InputAdornment position="end">
              <IconButton disableRipple onClick={handleSearch} sx={{width:"10px",height:"10px"}}>
              <CloseIcon sx={{width:"15px",height:"15px"}} />
              </IconButton>
            </InputAdornment>
          }
        />
}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="N95"
        name="radio-buttons-group"
        onChange={onChange1}
        id="Boxes"
       
      >
        <FormControlLabel sx={{
          '&.MuiFormControlLabel-root':{
            height:"25px"
          }
          
        }}
         value="normal" control={<Radio size="small" sx={{
         
          '&.Mui-checked':{
          color:"#ff3f6c"
          }
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>Normal</Typography>} />
        <FormControlLabel sx={{
          '&.MuiFormControlLabel-root':{
            height:"25px"
          }
        }} value="Nike" control={<Radio size="small" sx={{
         
          '&.Mui-checked':{
          color:"#ff3f6c"
          }
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>Nike</Typography>}/>
        <FormControlLabel sx={{
          '&.MuiFormControlLabel-root':{
            height:"25px"
          }
        }} value="Adidas" control={<Radio size="small" sx={{
         
          '&.Mui-checked':{
          color:"#ff3f6c"
          }
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>Adidas</Typography>} />
        <FormControlLabel sx={{
          '&.MuiFormControlLabel-root':{
            height:"25px"
          }
        }} value="Clinical" control={<Radio size="small" sx={{
         
          '&.Mui-checked':{
          color:"#ff3f6c"
          }
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>Clinical</Typography>} />
        <FormControlLabel sx={{
          '&.MuiFormControlLabel-root':{
            height:"25px"
          }
        }} value="N95" control={<Radio size="small" sx={{
         
          '&.Mui-checked':{
          color:"#ff3f6c"
          }
          }}/>} label={<Typography sx={{fontSize:"13px",fontWeight:"bold"}}>N95</Typography>} />
      </RadioGroup>
    </FormControl>
    </Box>
    </Box>
  );
}
export default Listo;