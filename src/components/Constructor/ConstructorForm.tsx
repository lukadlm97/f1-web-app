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
import {CountryState} from '../../types/CountryTypes'
import {ConstructorState} from '../../types/ConstructorType'
import {createConstuctor,updateConstuctor} from '../../redux/actions/ConstructorAction'

interface IConstructorForm{
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

export default function ConstructorForm(props:IConstructorForm){
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()

    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const isLoadingCreation= useSelector((state:AppState)=>state.constructorReducer.isLoadingCreation)
    const isLoadingRemove= useSelector((state:AppState)=>state.constructorReducer.isLoadingRemove)
    const isLoadingUpdate= useSelector((state:AppState)=>state.constructorReducer.isLoadingUpdate)
    const isCreated= useSelector((state:AppState)=>state.constructorReducer.isSuccessfullyDoneCreation)
    const isRemoved= useSelector((state:AppState)=>state.constructorReducer.isSuccessfullyDoneRemove)
    const isUpdate= useSelector((state:AppState)=>state.constructorReducer.isSuccessfullyDoneUpdate)
    const isErrorOccuredOnCreation= useSelector((state:AppState)=>state.constructorReducer.isErrorOccuredOnCreation)
    const isErrorOccuredOnDelete= useSelector((state:AppState)=>state.constructorReducer.isErrorOccuredOnRemove)
    const isErrorOccuredOnUpdate= useSelector((state:AppState)=>state.constructorReducer.isSuccessfullyDoneUpdate)



    const [shortNameValue, setShortNameValue] = React.useState<string>(selectedConstructor!=null?selectedConstructor.shortName:'');
    const onShortNameChange = (e: any) => setShortNameValue(e.target.value);
    const handleShortNameSubmit = () => console.log(shortNameValue);
    const handleShortNameReset = () => setShortNameValue("");

    const [fullNameValue, setFullNameValue] = React.useState<string>(selectedConstructor!=null?selectedConstructor.fullName:'');
    const onFullNameChange = (e: any) => setFullNameValue(e.target.value);
    const handleFullNameSubmit = () => console.log(fullNameValue);
    const handleFullNameReset = () => setFullNameValue("");

    const [websiteValue, setWebsiteValue] = React.useState<string>(selectedConstructor!=null?selectedConstructor.website:'');
    const onWebsiteChange = (e: any) => setWebsiteValue(e.target.value);
    const handleWebsiteSubmit = () => console.log(websiteValue);
    const handleWebsiteReset = () => setWebsiteValue("");

    const [firstEntryValue, setFirstEntryValue] = React.useState<string>(selectedConstructor!=null?selectedConstructor.firstEntry:'');
    const onFirstEntryChange = (e: any) => setFirstEntryValue(e.target.value);
    const handleFirstEntrySubmit = () => console.log(websiteValue);
    const handleFirstEntryReset = () => setFirstEntryValue("");

    const [lastEntryValue, setLastEntryValue] = React.useState<string>(selectedConstructor!=null?selectedConstructor.lastEntry:'');
    const onLastEntryChange = (e: any) => setLastEntryValue(e.target.value);
    const handleLastEntrySubmit = () => console.log(websiteValue);
    const handleLastEntryReset = () => setLastEntryValue("");

    const [baseValue, setBaseValue] = React.useState<string>(selectedConstructor!=null?selectedConstructor.base:'');
    const onBaseChange = (e: any) => setBaseValue(e.target.value);
    const handleBaseSubmit = () => console.log(baseValue);
    const handleBaseReset = () => setBaseValue("");
 

      const [countryValue, setCountryValue] = React.useState<CountryState>(selectedConstructor!=null?countries.find(x=>x.id==selectedConstructor.countryId)||countries[0]:countries[0]);
      const handleCountrySubmit = () => console.log(countryValue);
      const handleCountryReset = () => setCountryValue(countries[0]);


      const onSubmitConstructor=()=>{

        if(selectedConstructor == null){
            const newConstructor:ConstructorState =  
            {
                id:0,
                shortName:shortNameValue,
                fullName:fullNameValue,
                firstEntry:firstEntryValue,
                lastEntry:lastEntryValue,
                base:baseValue,
                website:websiteValue,
                isActive:true,
                countryId:countryValue==null?3:countryValue.id
            };
                  
            dispatch(createConstuctor(newConstructor))
        }else{

            var constructorId = selectedConstructor.id;
            const updatedDriver:ConstructorState =  
            {
                id:constructorId,
                shortName:shortNameValue,
                fullName:fullNameValue,
                firstEntry:firstEntryValue,
                lastEntry:lastEntryValue,
                base:baseValue,
                website:websiteValue,
                isActive:true,
                countryId:countryValue==null?3:countryValue.id
            };
            dispatch(updateConstuctor(updatedDriver))
        }


        setSubmitFired(true)
        handleBaseSubmit()
        handleShortNameSubmit()
        handleFullNameSubmit()
        handleLastEntrySubmit()
        handleFirstEntrySubmit()
        handleCountrySubmit()

    }

      
    const onResetConstructor=()=>{
        handleShortNameReset()
        handleFullNameReset()
        handleWebsiteReset()
        handleFirstEntryReset()
        handleLastEntryReset()
        handleBaseReset()
        handleCountryReset()
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
                 <h2>Create new constructor</h2>
                 </Typography>
             </Grid>
             <Grid  >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter constructor fullname:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={fullNameValue}
                     onChange={onFullNameChange}
                     />
             </Grid>
             <Grid >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter constructor short name:
                     </Typography>
                     <TextField
                         style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                         required
                         id="outlined-required"
                         label="Required"
                         defaultValue="Hello World"
                         size='small'
                         value={shortNameValue}
                         onChange={onShortNameChange}
                         />
             </Grid>
           
             <Grid  >
 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                 Constructor base:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={baseValue}
                     onChange={onBaseChange}
                     />
             </Grid>
    
             <Grid  >
 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                     Constructor first entry:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={firstEntryValue}
                     onChange={onFirstEntryChange}
                     />
             </Grid>
             <Grid  >
 
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                    Constructor last entry:
                </Typography>
                <TextField
                    style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={lastEntryValue}
                    onChange={onLastEntryChange}
                />
            </Grid>
             <Grid >
                 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter constructor country:
                 </Typography>
                 <Autocomplete
                     style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                     size='small'
                     disablePortal
                     options={countries}
                     getOptionLabel={option => option.name}
                     value={countryValue}
                     sx={{ width: 200 }}
                     renderInput={(params) => <TextField {...params} label="Country" />}
                     onChange={(_, newValue) => {
                         setCountryValue(newValue==null?countries[0]:newValue)
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
 
                 <Button variant="contained" style={{ display: 'inline-flex',color:'white', background:'green', width: 150,padding:2, height: 50,fontSize:14,marginLeft:20}} onClick={()=>onSubmitConstructor()}>
                    <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                     Save Constructor
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