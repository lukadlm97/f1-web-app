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

import {changeCitizenship} from '../../redux/actions/DriverAction'



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



export default function CitizenshipForm(props:IDriverForm){

    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const driver= useSelector((state:AppState)=>state.driverReducer.selectedDriver)
    const onLoading= useSelector((state:AppState)=>state.driverReducer.isLoadingChangeCitizenshipDriver)
    const isErrorOccured = useSelector((state:AppState)=>state.driverReducer.isErrorOccuredOnChangeCitizenship)
    const isModifiedCitizenship = useSelector((state:AppState)=>state.driverReducer.isCitizenshipChanged)

    const [countryValue, setCountryValue] = 
    React.useState<CountryState>(driver!=null?countries.find(x=>x.id==driver.countryId)||countries[0]:countries[0]);
    const handleCountrySubmit = () => console.log(countryValue);
    const handleCountryReset = () => setCountryValue(countries[0]);

    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
   //initialize dispatch
   const dispatch=useDispatch()

    const onSubmitDriver=()=>{
        
        if(driver===undefined){
            return;
        }
        else{
            var driverId = driver!=null?driver.id:-1;
            const updateDriver:DriverState ={
                id: driverId,
                countryId:countryValue==null?3:countryValue.id,
                number:0,
                code:'',
                dateOfBirth:new Date(),
                forename:'',
                isRetired:false,
                surname:''
            } 
            dispatch(changeCitizenship(updateDriver))

        }
        setSubmitFired(true)
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
                <h2>Change driver citizenship </h2>
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="p" style={{ display: 'inline-block', width: 400, height: 80 }}>
          {
              <p>{driver!=null?driver.forename:'not supplied'} {driver!=null?driver.surname:'not supplied'} 
              </p>
                
    
              
          }
            </Typography>
            </Grid>
            <Grid >
                
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Enter new driver citizenship:
                </Typography>
                <Autocomplete
                    style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                    size='small'
                    disablePortal
                    options={countries}
                    getOptionLabel={option => option.name}
                    value={countryValue}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    onChange={(_, newValue) => {
                        setCountryValue(newValue==null?countries[0]:newValue)
                    }}
                    />
            </Grid>
            <Grid>
                <Button variant="outlined" style={{ display: 'inline-flex', color:'#545454',
                 background:'red', width: 150,padding:2, height: 50,fontSize:14}} onClick={()=>onCloseForm()} >
                    <CancelIcon fontSize='large' style={{marginRight:10}}/>
                    Close Form
                </Button>
                <Button variant="contained" style={{display: 'inline-flex',color:'white',
                     background:'green', width: 150,padding:2,
                    height: 50,fontSize:14,float:'right',marginRight:70}} 
                 onClick={()=>onSubmitDriver()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Save Driver
                </Button>

            </Grid>
        </Box>
            :
            <Box sx={style}>
            {onLoading &&
           <Grid >
               Loading...
           </Grid>
            }
             {isModifiedCitizenship &&
            <Grid style={{fontSize:14}}>
               Drivers citizenship modified
               <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                   <CancelIcon fontSize='large' style={{marginRight:10}}/>
                   Close Form
               </Button>
           </Grid>
            }
              {isErrorOccured &&
            <Grid style={{fontSize:14}}>
               Problems occured on drivers citizenship changes
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

    
    
    
    
    
    
    
    
    
    
    
