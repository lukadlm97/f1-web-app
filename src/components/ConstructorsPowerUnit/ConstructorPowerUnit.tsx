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


export default function ConstructorPowerUnit(){
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
        
        <Card style={{marginBottom:10,background:"#D3E4CD",padding:10}}>
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