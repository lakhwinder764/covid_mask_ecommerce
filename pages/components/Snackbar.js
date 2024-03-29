import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

// const handleClose=(event,reason)=>{
//   if(reason==='clickaway'){
//     return;
//   }
//   setOpen(false);
// }

  return (
              
     <Snackbar open={props.open} autoHideDuration={1000} onClose={props.onClose}>
        <Alert onClose={props.onClose} severity={props.severity} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
     
  
  );
}
