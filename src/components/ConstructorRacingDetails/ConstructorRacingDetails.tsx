import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import CancelIcon from '@mui/icons-material/Cancel';
import ConstructionIcon from '@mui/icons-material/Construction';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import CategoryIcon from '@mui/icons-material/Category';
import StartIcon from '@mui/icons-material/Start';

import {AppState} from '../../types/AppState'
import CreateRacingDetails from '../RacingRecordCreation/CreateRacingDetails'
import RacingDetailsForm from '../RacingRecordCreation/RacingDetailsForm'


import {fetchConstructorRacingRecords,setConstructorRacingRecords} from '../../redux/actions/ConstructorRacingRecordAction'

  export default function ConstructorRacingDetails() {
    const selectedConstructorRacingRecords= 
                    useSelector((state:AppState)=>state.constructorRacingRecordsReducer.selectedConstructorRacingRecord)
    const selectedConstructor= 
                    useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const isLoading = useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isLoadingSingleFetch)
    const isNotCreatedYet = useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isNotCreatedYet)
    const [openConfirmation, setOpenConfirmation] = React.useState(false);
    const handleConfirmationOpen = () => setOpenConfirmation(true);
    const handleConfirmationClose = () => setOpenConfirmation(false);

    const dispatch = useDispatch();

    React.useEffect(()=>{

        if(!isNotCreatedYet){
            dispatch(fetchConstructorRacingRecords(selectedConstructor!=null?selectedConstructor.id:17))
        }
    },[])


    const handleUpdateConstructorRacingDetails = () => 
    {
        
      if(selectedConstructor == null){
        //must pick
        console.log("Must pick constructor");
        
        return
      }
      
  
      dispatch(setConstructorRacingRecords(selectedConstructorRacingRecords));
      handleConfirmationOpen();
    };

    return(
        
        <Card style={{marginLeft:20,marginBottom:20,background:"#D3E4CD",padding:10}}>
        {isLoading?
        <div>
            LOADING ...
        </div>
        :
        <div>
        {isNotCreatedYet?
                <div>
                    <CreateRacingDetails />
                </div>
                :
                <Grid>

                <Grid style={{display:'flex'}}>
                        <Grid xs={6} style={{background:"#F0E68C",margin:15,padding:15}}>
                            <h3>Championship statistics</h3>
                            <Grid style={{display:'flex'}}>
                                <Grid>
                                    <Typography variant="body2" color="black" style={{fontSize:16,background: 'unset',marginLeft:100,marginTop:20}} >
                                            {selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.constructorChampionships:"not supplied"}
                                    </Typography>
                                    <Typography style={{fontFamily: 'Source Sans,Arial,sans-serif',fontWeight: 700,
                                                       fontSize: '.8125em', display: 'block'}}       >
                                    <ConstructionIcon/> constructor championships

                                    </Typography>
                                </Grid>
                            </Grid>
                                <Grid style={{display:'flex'}}>
                                    <Grid>
                                        <Typography variant="body2" color="black" style={{fontSize:16,background: 'unset',justifyContent:'center',
                                        marginLeft:100,marginTop:20}} >
                                        {selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.driverChampionships:"not supplied"}
                                        </Typography>
                                        <Typography style={{fontFamily: 'Source Sans,Arial,sans-serif',fontWeight: 700,
                                                        fontSize: '.8125em', display: 'block'}}       >
                                        <MilitaryTechIcon/> driver championships

                                        </Typography>
                                    </Grid>
                                </Grid>
                            
                        </Grid>
                        <Grid xs={6} style={{background:"#F0E68C",margin:15,padding:15}}>
                        <h3>Race statistics</h3>
                            <Grid style={{display:'flex'}}>
                                <Grid xs={6}>
                                            <Typography variant="body2" color="black" style={{fontSize:16,background: 'unset',
                                            justifyContent:'center',marginLeft:50,marginTop:20}} >
                                            {   selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.fastesLaps:"not supplied"}
                                            </Typography>
                                            <Typography style={{fontFamily: 'Source Sans,Arial,sans-serif',fontWeight: 700,
                                                            fontSize: '.8125em', display: 'block'}}       >
                                            <AccessTimeIcon/>  fastes laps

                                            </Typography>
                                </Grid>
                                <Grid xs={6}>
                                            <Typography variant="body2" color="black" style={{fontSize:16,background: 'unset',justifyContent:'center'
                                            ,marginLeft:50,marginTop:20}} >
                                            {   selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.raceVictories:"not supplied"}
                                            </Typography>
                                            <Typography style={{fontFamily: 'Source Sans,Arial,sans-serif',fontWeight: 700,
                                                            fontSize: '.8125em', display: 'block'}}       >
                                            <LooksOneIcon/>  race wins

                                            </Typography>
                                </Grid>
                            </Grid>
                            <Grid style={{display:'flex'}}>
                                <Grid xs={6}>
                                            <Typography variant="body2" color="black" style={{fontSize:16,background: 'unset',justifyContent:'center',
                                            marginLeft:50,marginTop:20}} >
                                            {   selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.podiums:"not supplied"}
                                            </Typography>
                                            <Typography style={{fontFamily: 'Source Sans,Arial,sans-serif',fontWeight: 700,
                                                            fontSize: '.8125em', display: 'block'}}       >
                                            <CategoryIcon/>   total podiums
                                            </Typography>
                                </Grid>
                           
                                <Grid  xs={6}>
                                            <Typography variant="body2" color="black" style={{fontSize:16,background: 'unset',justifyContent:'center',
                                            marginLeft:50,marginTop:20}} >
                                            {   selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.polPositions:"not supplied"}
                                            </Typography>
                                            <Typography style={{fontFamily: 'Source Sans,Arial,sans-serif',fontWeight: 700,
                                                            fontSize: '.8125em', display: 'block'}}       >
                                            <StartIcon/>   pol positions
                                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{display:'flex',marginTop:20,marginLeft:200}} >
                        <Button variant="outlined"
                             style={{ display: 'inline-flex', color:'black', background:'#D1D9D9', width: 180,padding:2, height: 40,fontSize:14}} 
                             onClick={()=>handleUpdateConstructorRacingDetails()} >
                            <CancelIcon fontSize='large' style={{marginRight:10}}/>
                            Update Form
                        </Button>
                </Grid>
                <Modal
                    open={openConfirmation}
                    onClose={handleConfirmationClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <RacingDetailsForm closeForm={handleConfirmationClose}/>
                </Modal>
        </Grid>
        }
        </div>
        }
       
        
        </Card>
    )




  }