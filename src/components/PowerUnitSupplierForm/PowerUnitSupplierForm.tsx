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
import {PowerUnitSupplierState} from '../../types/PowerUnitSupplierTypes'
import {addNewPowerUnitSuppliers} from '../../redux/actions/PowerUnitSupplierAction'

interface IStaffForm{
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

export default function PowerSupplierForm(props:IStaffForm){
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()

    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const isLoadingCreation= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isLoadingCreation)
    const isLoadingRemove= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isLoadingDelete)
    const isCreated= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isSuccessfullyDoneCreation)
    const isRemoved= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isSuccessfullyDoneDelete)
    const isErrorOccuredOnCreation= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isErrorOccured)
    const isErrorOccuredOnDelete= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isErrorOccuredOnDelete)



    const [supplierNameValue, setSupplierNameValue] = React.useState<string>('');
    const onSupplierNameChange = (e: any) => setSupplierNameValue(e.target.value);
    const handleSupplierNameSubmit = () => console.log(supplierNameValue);
    const handleSupplierNameReset = () => setSupplierNameValue("");

   

      const [countryValue, setCountryValue] = React.useState<CountryState>(countries[0]);
      const handleCountrySubmit = () => console.log(countryValue);
      const handleCountryReset = () => setCountryValue(countries[0]);


      const onSubmitSupplier=()=>{
            const newPowerUnit:PowerUnitSupplierState =  
            {
                id:0,
                supplierName:supplierNameValue,
                countryId:countryValue==null?3:countryValue.id
            };
        dispatch(addNewPowerUnitSuppliers(newPowerUnit))         
        setSubmitFired(true)
        handleCountrySubmit()
        handleSupplierNameSubmit()

    }

      
    const onResetSupplier=()=>{
        handleSupplierNameReset()
        handleCountryReset()
    }

    const onCloseForm=()=>{
        onResetSupplier()
        props.closeForm()
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        {!submitFired? 
         <Box sx={style}>
          <Grid>
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                 <h2>Register new manufacturer</h2>
                 </Typography>
             </Grid>
             <Grid  >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter supplier name:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={supplierNameValue}
                     onChange={onSupplierNameChange}
                     />
             </Grid>
             <Grid >
                 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter supplier nation:
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
 
                 <Button variant="outlined" style={{ display: 'inline-flex',color:'red', background:'#545454',padding:2, width: 150, height: 50,fontSize:14,marginLeft:20 }} onClick={()=>onResetSupplier()} >
                     <RestartAltIcon fontSize='large' style={{marginRight:10}} />
                     Reset Form
                 </Button>
 
                 <Button variant="contained" style={{ display: 'inline-flex',color:'white', background:'green', width: 150,padding:2, height: 50,fontSize:14,marginLeft:20}} onClick={()=>onSubmitSupplier()}>
                    <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                     Save Supplier
                 </Button>
 
             </Grid>
            
         </Box>
            :
              <Box sx={style}>
                  {isLoadingCreation &&
                 <Grid >
                     Loading
                 </Grid>
                  }
                   {isCreated &&
                  <Grid style={{fontSize:14}}>
                     Technical staff created
                     <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                         <CancelIcon fontSize='large' style={{marginRight:10}}/>
                         Close Form
                     </Button>
                 </Grid>
                  }
                 
                   {isErrorOccuredOnCreation &&
                 <Grid style={{fontSize:14}}>
                     Technical staff not created.
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