import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedSnackbars from '../components/Snackbar';
import {
    TextField,Button,Card
   } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function VerticalTabs({val}) {
  const [value, setValue] = React.useState(0);
  const [open,setOpen]=useState(false);
  const handleClick = () => {
      setOpen(true);
    };
     const handleClose = () => {
      setOpen(false);
    };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      val==="Credit" &&
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
       {open && <CustomizedSnackbars open={open} onClose={handleClose} severity="error" message="Service not available yet!"/>}
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Credit Card"/>
        <Tab label="Debit Card" />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Card sx={{width:"700px",height:"300px",paddingTop:"20px",paddingLeft:"20px"}}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column">
         <Typography variant="caption">ENTER CREDIT CARD NUMBER</Typography>   
        <TextField variant="standard" sx={{width:"300px"}} label="fullWidth" id="fullWidth" />
       </Box>
       <Box display="flex" flexDirection="row">
       <Box mt={4} display="flex" flexDirection="column">
       <Typography variant="caption">EXPIRY DATE</Typography> 
        <TextField
        variant='standard'
        type="date"
        sx={{width:"300px"}}
      />
      </Box>
      <Box mt={4} ml={4} display="flex" flexDirection="column">
      <Typography variant="caption">CVV</Typography> 
        <TextField
        variant='standard'
        type="number"
        InputProps={{inputProps:{min:0}}}
        sx={{width:"50px"}}
      />
      </Box>
      </Box>
      <Box mt={4}>
      <Button color="primary" variant="contained" sx={{width:"150px"}} onClick={handleClick}>Pay Now</Button>
        </Box>
        </Box>
    
    </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card sx={{width:"700px",height:"300px",paddingTop:"20px",paddingLeft:"20px"}}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column">
         <Typography variant="caption">ENTER DEBIT CARD NUMBER</Typography>   
        <TextField variant="standard" sx={{width:"300px"}} label="fullWidth" id="fullWidth" />
       </Box>
       <Box display="flex" flexDirection="row">
       <Box mt={4} display="flex" flexDirection="column">
       <Typography variant="caption">EXPIRY DATE</Typography> 
        <TextField
        variant='standard'
        type="date"
        sx={{width:"300px"}}
      />
      </Box>
      <Box mt={4} ml={4} display="flex" flexDirection="column">
      <Typography variant="caption">CVV</Typography> 
        <TextField
        variant='standard'
        type="number"
        InputProps={{inputProps:{min:0}}}
        sx={{width:"50px"}}
      />
      </Box>
      </Box>
      <Box mt={4}>
      <Button color="primary" variant="contained" sx={{width:"150px"}} onClick={handleClick}>Pay Now</Button>
        </Box>
        </Box>
    
    </Card>
      </TabPanel>
     
     
    </Box>
    
  );
}
