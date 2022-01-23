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

export default function ConstructorForm(props:IRacingDetailsForm){
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()

    const competitions= useSelector((state:AppState)=>state.competitionReducer.competitions)
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const selectedConstructorRacingDetails = useSelector((state:AppState)=>state.constructorRacingRecordsReducer.selectedConstructorRacingRecord)
    const isLoadingCreation= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isLoadingCreation)
    const isLoadingUpdate= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isLoadingUpdate)
    const isCreated= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isSuccessfullyDoneCreation)
    const isUpdate= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isSuccessfullyDoneUpdate)
    const isErrorOccuredOnCreation= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isErrorOccuredOnCreation)
    const isErrorOccuredOnUpdate= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isSuccessfullyDoneUpdate)



    const [constructorChampionshipsValue, setConstructorChampionshipsValue] = 
                        React.useState<number>(selectedConstructorRacingDetails!=null?selectedConstructorRacingDetails.constructorChampionships:0);
    const onConstructorChampionshipsChange = (e: any) => {
        setConstructorChampionshipsValue(parseInt(e.target.value))
    }
    const handleConstructorChampionshipsSubmit = () => console.log(constructorChampionshipsValue);
    const handleConstructorChampionshipsReset = () => setConstructorChampionshipsValue(0);

    const [driverChampionshipsValue, setDriverChampionshipsValue] = 
    React.useState<number>(selectedConstructorRacingDetails!=null?selectedConstructorRacingDetails.driverChampionships:0);
    const onDriverChampionshipsChange = (e: any) => {
        setDriverChampionshipsValue(parseInt(e.target.value))
    }
    const handleDriverChampionshipsSubmit = () => console.log(driverChampionshipsValue);
    const handleDriverChampionshipsReset = () => setDriverChampionshipsValue(0);


    const [raceVictoriesValue, setRaceVictoriesValue] = 
    React.useState<number>(selectedConstructorRacingDetails!=null?selectedConstructorRacingDetails.raceVictories:0);
    const onRaceVictoriesChange = (e: any) => {
        setRaceVictoriesValue(parseInt(e.target.value))
    }
    const handleRaceVictoriesSubmit = () => console.log(raceVictoriesValue);
    const handleRaceVictoriesReset = () => setRaceVictoriesValue(0);

    const [podiumsValue, setPodiumsValue] = 
    React.useState<number>(selectedConstructorRacingDetails!=null?selectedConstructorRacingDetails.podiums:0);
    const onPodiumsChange = (e: any) => {
        setPodiumsValue(parseInt(e.target.value))
    }
    const handlePodiumsSubmit = () => console.log(podiumsValue);
    const handlePodiumsReset = () => setPodiumsValue(0);

    const [polPositionsValue, setPolPositionsValue] = 
    React.useState<number>(selectedConstructorRacingDetails!=null?selectedConstructorRacingDetails.polPositions:0);
    const onPolPositionsChange = (e: any) => {
        setPolPositionsValue(parseInt(e.target.value))
    }
    const handlePolPositionsSubmit = () => console.log(polPositionsValue);
    const handlePolPositionsReset = () => setPolPositionsValue(0);

    const [fastesLapsValue, setFastesLapsValue] = 
    React.useState<number>(selectedConstructorRacingDetails!=null?selectedConstructorRacingDetails.fastesLaps:0);
    const onFastesLapsChange = (e: any) => {
        setFastesLapsValue(parseInt(e.target.value))
    }
    const handleFastesLapsSubmit = () => console.log(fastesLapsValue);
    const handleFastesLapsReset = () => setFastesLapsValue(0);

      const [competitionValue, setCompetitionValue] = React.useState<CompetitionState>(selectedConstructorRacingDetails!=null?
        competitions.find(x=>x.id==selectedConstructorRacingDetails.competitionId)||competitions[0]:competitions[0]);
      const handleCompetitionSubmit = () => console.log(competitionValue);
      const handleCompetitionReset = () => setCompetitionValue(competitions[0]);


      const onSubmitConstructorRacingDetails=()=>{

        if(selectedConstructorRacingDetails===null){
            console.log(selectedConstructor);
            
            const newConstructorRacingDetails:ConstructorsRacingRecordState=
            {
                id:0,
                constructorChampionships:constructorChampionshipsValue,
                driverChampionships:driverChampionshipsValue,
                fastesLaps:fastesLapsValue,
                podiums:podiumsValue,
                polPositions:polPositionsValue,
                raceVictories:raceVictoriesValue,
                competitionId:competitionValue==null?4:competitionValue.id,
                constructorId:selectedConstructor==null?17:selectedConstructor.id
            };

            dispatch(createConstructorsRacingRecords(newConstructorRacingDetails,false))
            
        }else{
            console.log(selectedConstructor);
            console.log(selectedConstructorRacingDetails);
            var selectedConstructorRacingDetailsId = selectedConstructorRacingDetails.id;
            const updateConstructorRacingDetails:ConstructorsRacingRecordState=
            {
                id:selectedConstructorRacingDetailsId,
                constructorChampionships:constructorChampionshipsValue,
                driverChampionships:driverChampionshipsValue,
                fastesLaps:fastesLapsValue,
                podiums:podiumsValue,
                polPositions:polPositionsValue,
                raceVictories:raceVictoriesValue,
                competitionId:competitionValue==null?4:competitionValue.id,
                constructorId:selectedConstructor==null?17:selectedConstructor.id
            };

            
            dispatch(updateConstructorsRacingRecords(updateConstructorRacingDetails))
        }

        setSubmitFired(true)
        handleConstructorChampionshipsSubmit()
        handleDriverChampionshipsSubmit()
        handleRaceVictoriesSubmit()
        handlePodiumsSubmit()
        handlePolPositionsSubmit()
        handleFastesLapsSubmit()
        handleCompetitionSubmit()

    }

      
    const onResetConstructor=()=>{
        handleConstructorChampionshipsReset()
        handleDriverChampionshipsReset()
        handleRaceVictoriesReset()
        handlePodiumsReset()
        handlePolPositionsReset()
        handleFastesLapsReset()
        handleCompetitionReset()
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
                 <h2>Upsert constructor racing details</h2>
                 </Typography>
             </Grid>
             <Grid  >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                  Constructor Championships:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={constructorChampionshipsValue}
                     onChange={onConstructorChampionshipsChange}
                     />
             </Grid>
             <Grid >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter Driver Championships:
                     </Typography>
                     <TextField
                         style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                         required
                         id="outlined-required"
                         label="Required"
                         defaultValue="Hello World"
                         size='small'
                         value={driverChampionshipsValue}
                         onChange={onDriverChampionshipsChange}
                         />
             </Grid>
           
             <Grid  >
 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                 Enter Race Victories:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={raceVictoriesValue}
                     onChange={onRaceVictoriesChange}
                     />
             </Grid>
    
             <Grid  >
 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                     Enter Podiums:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={podiumsValue}
                     onChange={onPodiumsChange}
                     />
             </Grid>
             <Grid  >
 
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                    Enter Pol Positions:
                </Typography>
                <TextField
                    style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={polPositionsValue}
                    onChange={onPolPositionsChange}
                />
            </Grid>
             <Grid >
                 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter Fastes Laps:
                 </Typography>
                 <TextField
                    style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={fastesLapsValue}
                    onChange={onFastesLapsChange}
                    />
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
                  {isLoadingCreation || isLoadingUpdate &&
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
                    {isUpdate &&
                  <Grid style={{fontSize:14}}>
                     Constructor updated
                     <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                         <CancelIcon fontSize='large' style={{marginRight:10}}/>
                         Close Form
                     </Button>
                 </Grid>
                  }
                 
                   {!isErrorOccuredOnUpdate &&
                 <Grid style={{fontSize:14}}>
                     Constructor not updated.
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