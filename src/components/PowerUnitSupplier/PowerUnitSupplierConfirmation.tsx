import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';

import {useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'

import {removePowerUnitSuppliers} from '../../redux/actions/PowerUnitSupplierAction'



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



export default function StaffConfirmation(props:IDriverForm){
    const selectedSupplier= useSelector((state:AppState)=>state.powerUnitSupplierReducer.selectedSupplier)
    const onLoading= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isLoadingDelete)
    const isSuccessfullyDoneDelete = useSelector((state:AppState)=>state.powerUnitSupplierReducer.isSuccessfullyDoneDelete)
    const isErrorOccured = useSelector((state:AppState)=>state.powerUnitSupplierReducer.isErrorOccuredOnDelete)
    const error = useSelector((state:AppState)=>state.powerUnitSupplierReducer.error)

    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
   //initialize dispatch
   const dispatch=useDispatch()

    const onSubmitRemove=()=>{
            setSubmitFired(true)
            dispatch(removePowerUnitSuppliers(selectedSupplier!=null?selectedSupplier.id:-1))
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
                  
                   <h2>Remove power unit supplier confirmation form </h2>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="p" style={{ display: 'inline-block', width: 400, height: 80 }}>
                
                   <p>Are you sure to remove power unit supplier {selectedSupplier!=null?selectedSupplier.supplierName:'not supplied'}?
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
             {isSuccessfullyDoneDelete &&
            <Grid style={{fontSize:14}}>
               Power Unit Supplier successfully deleted
               <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                   <CancelIcon fontSize='large' style={{marginRight:10}}/>
                   Close Form
               </Button>
           </Grid>
            }

            {isErrorOccured &&
            <Grid style={{fontSize:14}}>
               Error: {error}
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

    
    
    
    
    
    
    
    
    
    
    
