import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';

import {useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'
import {ConstructorsTechnicalStaffInsertState} from '../../types/ConstructorsTechnicalStaffTypes'

import {removeTechnicalStaff} from '../../redux/actions/ConstructorsTechnicalStaffActions'


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
    const selectedStaff= useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.selectedStaff)
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const isLoading = useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isLoadingContractEnd)
    const isDone = useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isSuccessfullyContractEnd)
    const isErrorOccured= useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isErrorOccuredOnContractEnd)
    

    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
   //initialize dispatch
   const dispatch=useDispatch()

    const onSubmitDriver=()=>{
        setSubmitFired(true)

        if(selectedStaff !=null){
            dispatch(removeTechnicalStaff(selectedStaff.id))
        }else{
            console.log("must select contract");
            
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
                   <h2>Contract end form </h2>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="p" style={{ display: 'inline-block', width: 400, height: 80 }}>
                
                   <p>Are you sure to remove {selectedStaff!=null?selectedStaff.technicalStaff.forename+" ":'not supplied'} 
                                            {selectedStaff!=null?selectedStaff.technicalStaff.surname+" ":'not supplied'} 
                                            from {selectedConstructor!=null?selectedConstructor.fullName:'not supplied'}
                                            ?
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
                 onClick={()=>onSubmitDriver()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Yes, please
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
           
            {isDone &&
                <Grid style={{fontSize:14}}>
                    Staff successfully removed from constructor employee.
                    <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                        <CancelIcon fontSize='large' style={{marginRight:10}}/>
                        Close Form
                    </Button>
                </Grid>
            }

            {isErrorOccured &&
                <Grid style={{fontSize:14}}>
                    Staff successfully removed from constructor employee.
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

    
    
    
    
    
    
    
    
    
    
    
