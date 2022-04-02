import * as React from 'react';
import {useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { DriverState } from '../../types/DriverTypes';
import { DriverRoleState } from '../../types/DriverRoleTypes';
import {ContractState} from '../../types/ContractTypes';

import {startNewContract} from '../../redux/actions/ContactAction';
import {AppState} from '../../types/AppState'

interface IContractForm{
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
export default function ContractForm(props:IContractForm) {
    const selectedConstructor= useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const driverRoles= useSelector((state:AppState)=>state.driverRoleReducer.driverRoles)
    const drivers= useSelector((state:AppState)=>state.driverReducer.drivers)

    const isLoadingStartContract= useSelector((state:AppState)=>state.contractReducer.isLoadingStartContract)
    const isCreated= useSelector((state:AppState)=>state.contractReducer.isLoadingStartContract)
    const isErrorOccured= useSelector((state:AppState)=>state.contractReducer.isErrorOnContractStart)
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()
   
    const [estaminateYearsValue, setEstaminateYearsValue] = React.useState<number>(0);
    const onEstaminateYearsChange = (e: any) => {
        setEstaminateYearsValue(parseInt(e.target.value))
    }
    const handleEstaminateYearsSubmit = () => console.log(estaminateYearsValue);
    const handleEstaminateYearsReset = () => setEstaminateYearsValue(0);

    const [estaminateValueValue, setEstaminateValueValue] = React.useState<number>(0);
    const onEstaminateValueChange = (e: any) => {
        setEstaminateValueValue(parseInt(e.target.value))
    }
    const handleEstaminateValueSubmit = () => console.log(estaminateValueValue);
    const handleEstaminateValueReset = () => setEstaminateValueValue(0);

    const [driverRoleValue, setDriverRoleValue] = 
      React.useState<DriverRoleState>(driverRoles[0]);
      const handleDriverRoleSubmit = () => console.log(driverRoleValue);
      const handleDriverRoleReset = () => setDriverRoleValue(driverRoles[0]);

    const [driverValue, setDriverValue] = 
      React.useState<DriverState>(drivers[0]);
      const handleDriverSubmit = () => console.log(driverValue);
      const handleDriverReset = () => setDriverValue(drivers[0]);

      const onResetContractForm=()=>{
        handleDriverReset()
        handleDriverRoleReset()
        handleEstaminateValueReset()
        handleEstaminateYearsReset()
    }

    const onCloseForm=()=>{
        onResetContractForm()
        props.closeForm()
    }
      const onSubmitContract=()=>{
          
        const newContract:ContractState =  
        {
            id:0,
            constructorId:selectedConstructor!=null?selectedConstructor.id:0,
            driverId:driverValue.id,
            driverRolesId:driverRoleValue.id,
            estaminateValue:estaminateValueValue,
            estaminateYears:estaminateYearsValue
        };

        dispatch(startNewContract(newContract))
            
        setSubmitFired(true)
        handleDriverSubmit()
        handleDriverRoleSubmit()
        handleEstaminateValueSubmit()
        handleEstaminateYearsSubmit()

    }
   return (
       <div>
           
        {!submitFired? 
    <Box sx={style}>
        <Grid>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                <h2>Register new contract</h2>
                </Typography>
            </Grid>
            <Grid > 
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Select driver:
                </Typography>
                <Autocomplete
                    style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                    size='small'
                    disablePortal
                    options={drivers}
                    getOptionLabel={option => option.forename+" "+option.surname}
                    value={driverValue}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Driver" />}
                    onChange={(_, newValue) => {
                        setDriverValue(newValue==null?drivers[0]:newValue)
                    }}
                    />
            </Grid>  
            <Grid > 
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Select drivers role:
                </Typography>
                <Autocomplete
                    style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                    size='small'
                    disablePortal
                    options={driverRoles}
                    getOptionLabel={option => option.roleName}
                    value={driverRoleValue}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Drivers role" />}
                    onChange={(_, newValue) => {
                        setDriverRoleValue(newValue==null?driverRoles[0]:newValue)
                    }}
                    />
            </Grid>  
            
            <Grid  >
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                   Contract length estaminate:
                </Typography>
                <TextField
                    style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={estaminateYearsValue}
                    onChange={onEstaminateYearsChange}
                    />
            </Grid>
            <Grid  >
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                   Contract value estaminate:
                </Typography>
                <TextField
                    style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={estaminateValueValue}
                    onChange={onEstaminateValueChange}
                    />
            </Grid> 
            <Grid >
                <Button variant="outlined" style={{ display: 'inline-flex', color:'#545454', background:'red', width: 150,padding:2, height: 50,fontSize:14}} onClick={()=>onCloseForm()} >
                    <CancelIcon fontSize='large' style={{marginRight:10}}/>
                    Close Form
                </Button>

                <Button  variant="outlined" style={{ display: 'inline-flex',color:'red', background:'#545454',padding:2, width: 150, height: 50,fontSize:14,marginLeft:20 }} onClick={()=>onResetContractForm()} >
                    <RestartAltIcon fontSize='large' style={{marginRight:10}} />
                    Reset Form
                </Button>

                <Button variant="contained" style={{ display: 'inline-flex',color:'white', background:'green', width: 150,padding:2, height: 50,fontSize:14,marginLeft:20}} onClick={()=>onSubmitContract()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Start Contract
                </Button>

            </Grid>
            </Box>
        :
        <Box sx={style}>
        {isLoadingStartContract &&
       <Grid >
           Loading
       </Grid>
        }
         {isCreated &&
        <Grid style={{fontSize:14}}>
           Contract started
           <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
               <CancelIcon fontSize='large' style={{marginRight:10}}/>
               Close Form
           </Button>
       </Grid>
        }
         {isErrorOccured &&
       <Grid style={{fontSize:14}}>
           Contract not started. 
           <Button variant="outlined" style={{float: 'right',display: 'inline-flex',color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
               <CancelIcon fontSize='large' style={{marginRight:10}}/>
               Close Form
           </Button>
       </Grid>
        }
    </Box>  
        }
        </div>
    );
}