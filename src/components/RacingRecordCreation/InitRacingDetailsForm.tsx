import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Autocomplete from '@mui/material/Autocomplete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';


import { useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'
import {CompetitionState} from '../../types/CompetitionTypes'
import {ConstructorsRacingRecordState} from '../../types/ConstructorRacingRecordTypes'
import {createConstructorsRacingRecords,updateConstructorsRacingRecords} from '../../redux/actions/ConstructorRacingRecordAction'

interface IRacingDetailsForm{
    closeForm:()=>void
}

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

export default function InitRacingDetailsForm(props:IRacingDetailsForm){
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()

    const competitions= useSelector((state:AppState)=>state.competitionReducer.competitions)
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const isLoadingCreation= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isLoadingCreation)
   const isCreated= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isSuccessfullyDoneCreation)
   const isErrorOccuredOnCreation= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isErrorOccuredOnCreation)
   

      const [competitionValue, setCompetitionValue] = React.useState<CompetitionState>(competitions[0]);
      const handleCompetitionSubmit = () => console.log(competitionValue);
      const handleCompetitionReset = () => setCompetitionValue(competitions[0]);


      const onSubmitConstructorRacingDetails=()=>{

            const newConstructorRacingDetails:ConstructorsRacingRecordState=
            {
                id:0,
                constructorChampionships:0,
                driverChampionships:0,
                fastesLaps:0,
                podiums:0,
                polPositions:0,
                raceVictories:0,
                competitionId:competitionValue==null?4:competitionValue.id,
                constructorId:selectedConstructor==null?17:selectedConstructor.id
            };

            dispatch(createConstructorsRacingRecords(newConstructorRacingDetails,true))
            
       
            
           

    }

      
    const onResetConstructor=()=>{

    }

    const onCloseForm=()=>{
        onResetConstructor()

        props.closeForm()
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        {!submitFired? 
         <Box sx={style}>
          <Grid>
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                 <h2>crete constructor init racing details</h2>
                 </Typography>
             </Grid>
            

             <Grid >
                 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Select competion:
                 </Typography>
                 <Autocomplete
                     style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                     size='small'
                     disablePortal
                     options={competitions}
                     getOptionLabel={option => option.championshipNameShort}
                     value={competitionValue}
                     sx={{ width: 200 }}
                     renderInput={(params) => <TextField {...params} label="Championship" />}
                     onChange={(_, newValue) => {
                         setCompetitionValue(newValue==null?competitions[0]:newValue)
                     }}
                     />
             </Grid>
        
             <Grid >
                 <Button variant="outlined" style={{ display: 'inline-flex', color:'#545454', background:'red', width: 150,padding:2, height: 50,fontSize:14}} onClick={()=>onCloseForm()} >
                     <CancelIcon fontSize='large' style={{marginRight:10}}/>
                     Close Form
                 </Button>
 
                 <Button variant="outlined" disabled={selectedConstructor!=null} style={{ display: 'inline-flex',color:'red', background:'#545454',padding:2, width: 150, height: 50,fontSize:14,marginLeft:20 }} onClick={()=>onResetConstructor()} >
                     <RestartAltIcon fontSize='large' style={{marginRight:10}} />
                     Reset Form
                 </Button>
 
                 <Button variant="contained" style={{ display: 'inline-flex',color:'white', background:'green', width: 150,padding:2, height: 50,fontSize:14,marginLeft:20}} onClick={()=>onSubmitConstructorRacingDetails()}>
                    <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                     Save Racing Records
                 </Button>
 
             </Grid>
            
         </Box>
            :
              <Box sx={style}>
                  {isLoadingCreation  &&
                 <Grid >
                     Loading
                 </Grid>
                  }
                   {isCreated &&
                  <Grid style={{fontSize:14}}>
                     Constructor created
                     <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                         <CancelIcon fontSize='large' style={{marginRight:10}}/>
                         Close Form
                     </Button>
                 </Grid>
                  }
                 
                   {isErrorOccuredOnCreation &&
                 <Grid style={{fontSize:14}}>
                     Constructor not created.
                     <Button variant="outlined" style={{float: 'right',display: 'inline-flex',color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                         <CancelIcon fontSize='large' style={{marginRight:10}}/>
                         Close Form
                     </Button>
                 </Grid>
                  }
                   
              </Box>  
         }
         </LocalizationProvider>
    );
}