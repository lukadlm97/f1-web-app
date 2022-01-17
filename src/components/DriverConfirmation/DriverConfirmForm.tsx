import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import Autocomplete from '@mui/material/Autocomplete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';

import {useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'
import { CountryState } from '../../types/CountryTypes';
import { DriverState } from '../../types/DriverTypes';

import {removeDriver, selectForRemove,retairDriver} from '../../redux/actions/DriverAction'



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#999999',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IDriverForm{
    closeForm:()=>void
}



export default function DriverConfirmForm(props:IDriverForm){
    const driver= useSelector((state:AppState)=>state.driverReducer.selectedDriver)
    const isDriverRetirment = useSelector((state:AppState)=>state.driverReducer.isDriverRetirment)
    const isDriverRetirmentLoading = useSelector((state:AppState)=>state.driverReducer.isLoadingDriverRetirment)
    const onLoading= useSelector((state:AppState)=>state.driverReducer.isLoadingAddNewDriver)
    const isRemoveConfirmation = useSelector((state:AppState)=>state.driverReducer.isRemoveConfirmation)


    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
   //initialize dispatch
   const dispatch=useDispatch()

    const onSubmitDriver=()=>{
            setSubmitFired(true)
            if(isRemoveConfirmation){
                dispatch(removeDriver(driver!=null?driver.id:-1))
                props.closeForm()
            }else{
                dispatch(retairDriver(driver!=null?driver.id:-1))
            }
        
    }

    const onCloseForm=()=>{
        props.closeForm()
    }



    return(
        <>
        {!submitFired ?
            <Box sx={style}>
            <Grid>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                   {!isRemoveConfirmation?
                   <h2>Driver retirment confirmation form </h2>
                   :
                   <h2>Remove driver confirmation form </h2>
                    }
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="p" style={{ display: 'inline-block', width: 400, height: 80 }}>
                {!isRemoveConfirmation?
                 <p>Are you sure to retire {driver!=null?driver.forename:'not supplied'} {driver!=null?driver.surname:'not supplied'} ?
                 </p>
                     
                   :
                   <p>Are you sure to remove {driver!=null?driver.forename:'not supplied'} {driver!=null?driver.surname:'not supplied'} ?
                 </p>
                    }
                </Typography>
            </Grid>
            <Grid>
                <Button variant="outlined" style={{ display: 'inline-flex', color:'#545454',
                 background:'red', width: 150,padding:2, height: 50,fontSize:14}} onClick={()=>onCloseForm()} >
                    <CancelIcon fontSize='large' style={{marginRight:10}}/>
                    Cancel
                </Button>
                <Button variant="contained" style={{display: 'inline-flex',color:'white',
                     background:'green', width: 150,padding:2,
                    height: 50,fontSize:14,float:'right',marginRight:70}} 
                 onClick={()=>onSubmitDriver()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Yes, please
                </Button>

            </Grid>
        </Box>
            :
            <Box sx={style}>
            {onLoading || isDriverRetirmentLoading &&
           <Grid >
               Loading...
           </Grid>
            }
             {isDriverRetirment &&
            <Grid style={{fontSize:14}}>
               Driver successfully retired
               <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                   <CancelIcon fontSize='large' style={{marginRight:10}}/>
                   Close Form
               </Button>
           </Grid>
            }
             
            
        </Box>  
        }
        </>
        )
    }

    
    
    
    
    
    
    
    
    
    
    
