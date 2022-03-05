import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import CancelIcon from '@mui/icons-material/Cancel';
import ConstructionIcon from '@mui/icons-material/Construction';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import CategoryIcon from '@mui/icons-material/Category';
import StartIcon from '@mui/icons-material/Start';

import {AppState} from '../../types/AppState'
import CreateContract from '../ConstructorPowerUnitSupplierForm/CreatePowerUnitSupplierContract'
import RacingDetailsForm from '../RacingRecordCreation/RacingDetailsForm'



import {fetchConstructorsPowerUnitSupplier,removeConstructorPowerUnitSupplier,fetchConstructorsPowerUnitSupplierHistory} 
from '../../redux/actions/ConstructorsPowerUnitSupplierAction'
import { wait } from '@testing-library/user-event/dist/utils';


export default function ConstructorPowerUnit(){
    const selectedConstructorPowerUnitSupplier= 
    useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.constructorsPowerUnit)
    
  const powerUnitSuppliers = useSelector((state: AppState) => state.powerUnitSupplierReducer.suppliers)
const selectedConstructor= 
    useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
const isLoading = useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isLoading)
const isNotCreatedYet = useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isNotCreatedYet)
const [openConfirmation, setOpenConfirmation] = React.useState(false);
const handleConfirmationOpen = () => setOpenConfirmation(true);
const handleConfirmationClose = () => setOpenConfirmation(false);


  const handleSupplierConversion = (supplierId: number|undefined) => {

    if (supplierId == undefined)
      return "Not supplied";

    const findedSupplier = powerUnitSuppliers.find(x => x.id == supplierId);
    if (findedSupplier != null)
      return findedSupplier.supplierName;

    return "Not supplied";
  };

const dispatch = useDispatch();

React.useEffect(()=>{

dispatch(fetchConstructorsPowerUnitSupplier(selectedConstructor!=null?selectedConstructor.id:-1))

},[])


const handleEndContractConstructorPowerUnitSupplier=async()=> 
{
    if(selectedConstructor == null || selectedConstructorPowerUnitSupplier==null){
    //must pick
    console.log("Must pick constructor");
    
    return
    }
    console.log(selectedConstructorPowerUnitSupplier.id)
    dispatch(removeConstructorPowerUnitSupplier(selectedConstructorPowerUnitSupplier.id));
    await wait(3000)
    dispatch(fetchConstructorsPowerUnitSupplierHistory(selectedConstructor.id));
};


    return(
        <Card style={{marginBottom:10,background:"#D3E4CD",padding:10}}>
        {isLoading?
        <div>
            LOADING ...
        </div>
        :
        <div>
        {isNotCreatedYet?
                <div>
                    <CreateContract />
                </div>
                :
                <Grid>
        <Grid >
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Supplier name:{handleSupplierConversion(
                        selectedConstructorPowerUnitSupplier!=null?
                    selectedConstructorPowerUnitSupplier.powerUnitSupplierId:undefined)}
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Contract started:{selectedConstructorPowerUnitSupplier!=null?selectedConstructorPowerUnitSupplier.startDate:"not supplied"}
                                    
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Years estaminated:{selectedConstructorPowerUnitSupplier!=null?selectedConstructorPowerUnitSupplier.yearEstaminate:"not supplied"}
                                
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Is fabric team:{selectedConstructorPowerUnitSupplier!=null&&selectedConstructorPowerUnitSupplier.isFabricConnection?"fabric team":"not fabric team"}
                                
                </Typography>
            </Grid>
                    </Grid>
                    <Grid style={{display:'flex',marginTop:20,marginLeft:200}} >
                        <Button variant="outlined"
                             style={{ display: 'inline-flex', color:'black', background:'#D1D9D9', width: 180,padding:2, height: 40,fontSize:14}} 
                             onClick={()=>handleEndContractConstructorPowerUnitSupplier()} >
                            <CancelIcon fontSize='large' style={{marginRight:10}}/>
                            End contract
                        </Button>
                    </Grid>
            
        </Grid>
        }
        </div>
        }
       
        
        </Card>
    )
}