import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import Autocomplete from '@mui/material/Autocomplete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';

import { wait } from '@testing-library/user-event/dist/utils';

import {useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'
import { CountryState } from '../../types/CountryTypes';

import {endContract,fetchHistoryOfConstructorDrivers} from '../../redux/actions/ContactAction';



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

interface IContractForm{
    closeForm:()=>void
}



export default function EndContractConfirmation(props:IContractForm){

    const constructors= useSelector((state:AppState)=>state.constructorReducer.constructors)
    const drivers= useSelector((state:AppState)=>state.driverReducer.drivers)
    const driversRole= useSelector((state:AppState)=>state.driverRoleReducer.driverRoles)
    const selectedContract= useSelector((state:AppState)=>state.contractReducer.selectedContract)
    const onLoading= useSelector((state:AppState)=>state.contractReducer.isLoadingEndContract)
    const isDoneContract = useSelector((state:AppState)=>state.contractReducer.isSuccessfullyEndedContract)
    const isErrorOccured = useSelector((state:AppState)=>state.contractReducer.isErrorOnContractEnd)

    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
   //initialize dispatch
   const dispatch=useDispatch()

    const onSubmitRemove=async()=>{
        if(selectedContract==null){
                console.log("ERROR, not selected contract");
                
        }else{
            dispatch(endContract(selectedContract.id))
            await wait(3000)
            dispatch(fetchHistoryOfConstructorDrivers(selectedContract.constructorId))
            
        }
    }

    const handleDriverConversion = (driverId: number|undefined) => {

        if (driverId == undefined)
          return "Not supplied";
    
        const findedDriver = drivers.find(x => x.id == driverId);
        if (findedDriver != null)
          return findedDriver.forename+" "+findedDriver.surname;
    
        return "Not supplied";
      };

      const handleConstructorConversion = (constructorId: number|undefined) => {

        if (constructorId == undefined)
          return "Not supplied";
    
        const findedConstructor = constructors.find(x => x.id == constructorId);
        if (findedConstructor != null)
          return findedConstructor.shortName;
    
        return "Not supplied";
      };

      
      const handleDriverRoleConversion = (roleId: number|undefined) => {

        if (roleId == undefined)
          return "Not supplied";
    
        const findedRole= driversRole.find(x => x.id == roleId);
        if (findedRole != null)
          return findedRole.roleName;
    
        return "Not supplied";
      };

    const onCloseForm=()=>{
        props.closeForm()
    }



    return(
        <>
        {!submitFired ?
            <Box sx={style}>
            <Grid>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                   <h2>End contract form </h2>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="p" style={{ display: 'inline-block', width: 400, height: 80 }}>
                
                   <p>Are you sure to end contract between {selectedContract!=null?handleDriverConversion(selectedContract.driverId):'not supplied'} and  {selectedContract!=null?handleConstructorConversion(selectedContract.constructorId):'not supplied'}  on role {selectedContract!=null?handleDriverRoleConversion(selectedContract.driverRolesId):'not supplied'}
                 </p>
                    
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
                 onClick={()=>onSubmitRemove()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Yes, please
                </Button>

            </Grid>
        </Box>
            :
            <Box sx={style}>
            {onLoading  &&
           <Grid >
               Loading...
           </Grid>
            }
             {isDoneContract &&
            <Grid style={{fontSize:14}}>
               Staff successfully deleted
               <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                   <CancelIcon fontSize='large' style={{marginRight:10}}/>
                   Close Form
               </Button>
           </Grid>
            }

            {isErrorOccured &&
            <Grid style={{fontSize:14}}>
               Error!!!
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

    
    
    
    
    
    
    
    
    
    
    
