import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import CancelIcon from '@mui/icons-material/Cancel';


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
                        <Grid xs={6}>
                            <Grid style={{display:'flex'}}>
                                <Typography variant="body2" color="black" style={{fontSize:14}}>
                                Constructor championships:
                                {selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.constructorChampionships:"not supplied"}
                                    </Typography>
                                </Grid>
                                <Grid style={{display:'flex'}}>
                                <Typography variant="body2" color="black" style={{fontSize:14}}>
                                    Driver championships:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.driverChampionships:"not supplied"}
                                    </Typography>
                                </Grid>
                            
                        </Grid>
                        <Grid xs={6}>
                            <Grid style={{display:'flex'}}>
                            <Typography variant="body2" color="black" style={{fontSize:14}}>
                                Fastes laps: {selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.fastesLaps:"not supplied"}
                                </Typography>
                            </Grid>
                            <Grid style={{display:'flex'}}>
                            <Typography variant="body2" color="black" style={{fontSize:14}}>
                                Race victories:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.raceVictories:"not supplied"}
                                </Typography>
                            </Grid>
                            <Grid style={{display:'flex'}}>
                                <Typography variant="body2" color="black" style={{fontSize:14}}>
                                    Total podiums:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.podiums:"not supplied"}
                                </Typography>
                            </Grid>
                            <Grid style={{display:'flex'}}>
                                <Typography variant="body2" color="black" style={{fontSize:14}}>
                                    Pol positions:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.polPositions:"not supplied"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{display:'flex',marginTop:20,marginLeft:20}} >
                        <Button variant="outlined"
                             style={{ display: 'inline-flex', color:'black', background:'#D1D9D9', width: 150,padding:2, height: 50,fontSize:14}} 
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