import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PowerSupplierForm from './PowerUnitSupplierForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreatePowerUnitSupplier() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () =>{
    setOpen(true);
  } 


  const handleClose = () => setOpen(false);


  return (
    <div> 
      <Grid style={{marginTop:20,marginBottom:20}}>
        <Button onClick={handleOpen} variant='contained' style={{display: 'inline-flex', width:300,height:40,fontSize:14,background:'#444444'}}>
          <AddCircleOutlineIcon fontSize='large' style={{marginRight:20}}/>
         
          Create new manufacturer
        </Button>

      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
      >
      <PowerSupplierForm closeForm={handleClose}/>
      </Modal>
    </div>
  );
}