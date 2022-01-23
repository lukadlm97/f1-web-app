import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RacingDetailsForm from './RacingDetailsForm'
import InitRacingDetails from './InitRacingDetailsForm'
import Grid from '@mui/material/Grid'
import StartIcon from '@mui/icons-material/Start';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Margin } from '@mui/icons-material';
import { margin } from '@mui/system';

import { useDispatch, useSelector } from 'react-redux'
import {setConstructorRacingRecords} from '../../redux/actions/ConstructorRacingRecordAction'
import { DriverState } from '../../types/DriverTypes';

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

export default function CreateRacingDetails() {
  const [open, setOpen] = React.useState(false);
  const [openInit, setOpenInit] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () =>{
   // dispatch(setConstructorRacingRecords(null));
    setOpen(true);
  } 

  const handleOpenInit = () =>{
    // dispatch(setConstructorRacingRecords(null));
    setOpenInit(true);
   } 
  const handleClose = () => setOpen(false);
  const handleCloseInit = () => setOpenInit(false);


  return (
    <div> 
      <Grid style={{marginTop:20,marginBottom:20,display:'flex'}}>
        <Button onClick={handleOpen} variant='contained' 
        style={{display: 'inline-flex', width:250,height:40,fontSize:14,background:'#98DDCA',color:'black'}}>
          <PlayCircleFilledWhiteIcon fontSize='large' style={{marginRight:10}}/>
            Create racing details
        </Button>

        <Button onClick={handleOpenInit} variant='contained' 
        style={{display: 'inline-flex', width:280,height:40,fontSize:14,background:'#f2ddc1',color:'black',marginLeft:20}}>
          <StartIcon fontSize='large' style={{marginRight:10}}/>
            Create INIT racing details
        </Button>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
      >
        <RacingDetailsForm closeForm={handleClose}/>
      </Modal>
      <Modal
        open={openInit}
        onClose={handleCloseInit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
      >
        <InitRacingDetails closeForm={handleCloseInit}/>
      </Modal>
    </div>
  );
}