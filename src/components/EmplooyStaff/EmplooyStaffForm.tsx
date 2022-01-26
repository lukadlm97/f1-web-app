import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import Autocomplete from '@mui/material/Autocomplete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';

import {AppState} from '../../types/AppState'
import {StaffRoleState} from '../../types/StaffRoleTypes'
import {TechnicalStaffState} from '../../types/TechnicalStuffTypes'

import {ConstructorsTechnicalStaffInsertState} from '../../types/ConstructorsTechnicalStaffTypes'

import {fetchAllTechnicalStaff} from '../../redux/actions/TechnicalStaffAction'
import {startContractForConstructor} from '../../redux/actions/ConstructorsTechnicalStaffActions'

interface IEmplooyForm{
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


export default function EmplooyStaffForm(props:IEmplooyForm){
    
    const roles= useSelector((state:AppState)=>state.staffRoleReducer.staffRoles)
    const staffs= useSelector((state:AppState)=>state.technicalStaffReducer.technicalStaffs)
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    
    const isLoading =  useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isLoadingContractStart)
    const isSuccessfullyDone =  useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isSuccessfullyContractStart)
    const isErrorOccured =  useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isErrorOccuredContractStart)
    const error= useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.error)

    const [roleValue, setRoleValue] = React.useState<StaffRoleState>(roles[0]);
    const handleRoleSubmit = () => console.log(roleValue);
    const handleRoleReset = () => setRoleValue(roles[0]);

    const [staffValue, setStaffValue] = React.useState<TechnicalStaffState>(staffs[0]);
    const handleStaffSubmit = () => console.log(staffValue);
    const handleStaffReset = () => setStaffValue(staffs[0]);

    const [submitFired,setSubmitFired] = React.useState<boolean>(false);


    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(fetchAllTechnicalStaff())
    },[])

    const onSubmitNewStaff=()=>{
        
        if(selectedConstructor!=null && roleValue!=null &&  staffValue!=null){
            const newContract:ConstructorsTechnicalStaffInsertState={
                constructorId:selectedConstructor.id,
                technicalStaffId:staffValue.id,
                technicalStaffRoleId:roleValue.id
            }
            
            setSubmitFired(true)
            dispatch(startContractForConstructor(newContract))
        }else{
            console.log("must pick all items");
            
        }

    }


    const onCloseForm=()=>{
           props.closeForm()
       }


    return (
        <>
        {!submitFired ?
            <Box sx={style}>
                <Grid>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                        <h2>Employee new staff to  constructor {selectedConstructor!=null?selectedConstructor.fullName:'not supplied'} </h2>
                    </Typography>
                </Grid>
            <Grid >
                
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Select new staff:
                </Typography>
                <Autocomplete
                    style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                    size='small'
                    disablePortal
                    options={staffs}
                    getOptionLabel={option => option.forename+" "+option.surname}
                    value={staffValue}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    onChange={(_, newValue) => {
                        setStaffValue(newValue==null?staffs[0]:newValue)
                    }}
                    />
            </Grid>
            <Grid >
                
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Slect staff role for new staff:
                </Typography>
                <Autocomplete
                    style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                    size='small'
                    disablePortal
                    options={roles}
                    getOptionLabel={option => option.roleName}
                    value={roleValue}
                    renderInput={(params) => <TextField {...params} label="Staff role" />}
                    onChange={(_, newValue) => {
                        setRoleValue(newValue==null?roles[0]:newValue)
                    }} />
            </Grid>
            <Grid>
                <Button variant="outlined" style={{ display: 'inline-flex', color:'#545454',
                 background:'red', width: 150,padding:2, height: 50,fontSize:14}} onClick={()=>onCloseForm()} >
                    <CancelIcon fontSize='large' style={{marginRight:10}}/>
                    Close
                </Button>
                <Button variant="contained" style={{display: 'inline-flex',color:'white',
                     background:'green', width: 150,padding:2,
                    height: 50,fontSize:14,float:'right',marginRight:70}} 
                 onClick={()=>onSubmitNewStaff()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Save Contract
                </Button>

            </Grid>
        </Box>
            :
            <Box sx={style}>
            {isLoading &&
           <Grid >
               Loading...
           </Grid>
            }
             {isSuccessfullyDone &&
            <Grid style={{fontSize:14}}>
               Staff successfully employee
               <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                   <CancelIcon fontSize='large' style={{marginRight:10}}/>
                   Close Form
               </Button>
           </Grid>
            }
              {isErrorOccured &&
            <Grid style={{fontSize:14}}>
               Problems occured on employee staff:{error}
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






