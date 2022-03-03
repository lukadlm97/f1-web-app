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
import {ConstructorPowerUnitSupplierState} from '../../types/ConstructorPowerUnitSupplier'
import {PowerUnitSupplierState} from '../../types/PowerUnitSupplierTypes'
import {ConstructorState} from '../../types/ConstructorTypes'
import {startContractForPowerUnitSupplierLConstructor} from '../../redux/actions/ConstructorsPowerUnitSupplierAction'

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

export default function ConstructorPowerUnitSupplierContractForm(props:IStaffForm){
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()

    const constructors= useSelector((state:AppState)=>state.constructorReducer.constructors)
    const selectedConstructor= useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const powerUnitSuppliers= useSelector((state:AppState)=>state.powerUnitSupplierReducer.suppliers)
    const isLoadingCreation= useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isLoadingContractStart)
    const isLoadingRemove= useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isLoadingContractEnd)
    const isCreated= useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isSuccessfullyContractStarted)
    const isRemoved= useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isSuccessfullyContractEnded)
    const isErrorOccuredOnCreation= useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isErrorOccuredContractStart)
    const isErrorOccuredOnDelete= useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isErrorOccuredOnContractEnd)



    const [isFabricTeamValue, setIsFabricTeamValue] = React.useState<boolean>(false);
    const onIsFabricTeamChange = (e: any) => setIsFabricTeamValue(e.target.value);
    const handleIsFabricTeamSubmit = () => console.log(isFabricTeamValue);
    const handleIsFabricTeamReset = () => setIsFabricTeamValue(false);

      const [constructorValue, setConstructorValue] = React.useState<ConstructorState>(selectedConstructor);
      const handleConstructorSubmit = () => console.log(constructorValue);
      const handleConstructorReset = () => setConstructorValue(constructors[0]);

      const [powerUnitSupplierValue, setPowerUnitSupplierValue] = React.useState<PowerUnitSupplierState>(powerUnitSuppliers[0]);
      const handlePowerUnitSupplierSubmit = () => console.log(powerUnitSupplierValue);
      const handlePowerUnitSupplierReset = () => setPowerUnitSupplierValue(powerUnitSuppliers[0]);

      const [yearEstaminateValue, setYearEstaminateValue] = React.useState<number>(0);
      const onYearEstaminateValueChange = (e: any) => {
        setYearEstaminateValue(parseInt(e.target.value))
      }
      const handleYearEstaminateSubmit = () => console.log(yearEstaminateValue);
      const handleYearEstaminateReset = () => setYearEstaminateValue(0);

      const onSubmitSupplier=()=>{
            const newPowerUnit:ConstructorPowerUnitSupplierState =  
            {
                id:0,
               constructorId:  constructorValue==null?6:constructorValue.id,
               yearEstaminate:yearEstaminateValue,
               isFabricConnection:isFabricTeamValue,
               powerUnitSupplierId:powerUnitSupplierValue==null?2:powerUnitSupplierValue.id,
               endDate:new Date(),
               startDate:new Date()
            };
        dispatch(startContractForPowerUnitSupplierLConstructor(newPowerUnit))         
        setSubmitFired(true)
        handleConstructorSubmit()
        handleIsFabricTeamSubmit()
        handlePowerUnitSupplierSubmit()
        handleYearEstaminateSubmit()

    }

      
    const onResetSupplier=()=>{
        handleYearEstaminateSubmit()
        handleIsFabricTeamReset()
        handleConstructorReset()
        handlePowerUnitSupplierReset()
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
                 <h2>Register new contract</h2>
                 </Typography>
             </Grid>
             <Grid >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Select supplier:
                 </Typography>
                 <Autocomplete
                     style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                     size='small'
                     disablePortal
                     options={powerUnitSuppliers}
                     getOptionLabel={option => option.supplierName}
                     value={powerUnitSupplierValue}
                     sx={{ width: 200 }}
                     renderInput={(params) => <TextField {...params} label="Power unit supplier" />}
                     onChange={(_, newValue) => {
                         setPowerUnitSupplierValue(newValue==null?powerUnitSuppliers[0]:newValue)
                     }}
                     />
             </Grid>
             <Grid  >

                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                    Enter years estaminate:
                </Typography>
                <TextField
                    style={{ display: 'inline-block', width: 200,background:'#AAAAAA' }}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="not defined"
                    size='small'
                    value={yearEstaminateValue}
                    onChange={onYearEstaminateValueChange}
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
                     Save Contract
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