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



import {fetchConstructorsPowerUnitSupplier,selectConstractConstructorPowerUnit} 
from '../../redux/actions/ConstructorsPowerUnitSupplierAction'


export default function ConstructorPowerUnit(){
    const selectedConstructorPowerUnitSupplier= 
    useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.constructorsPowerUnit)
    
  const countires = useSelector((state: AppState) => state.countryReducer.countries)
  const powerUnitSuppliers = useSelector((state: AppState) => state.powerUnitSupplierReducer.suppliers)
const selectedConstructor= 
    useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
const isLoading = useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isLoading)
const isNotCreatedYet = useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isNotCreatedYet)
const [openConfirmation, setOpenConfirmation] = React.useState(false);
const handleConfirmationOpen = () => setOpenConfirmation(true);
const handleConfirmationClose = () => setOpenConfirmation(false);

const handleCountyConversion = (countryId: number) => {

    if (countryId == undefined)
      return "Not supplied";

    const findedCountry = countires.find(x => x.id == countryId);
    if (findedCountry != null)
      return findedCountry.name;

    return "Not supplied";
  };

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


const handleUpdateConstructorRacingDetails = () => 
{

if(selectedConstructor == null){
//must pick
console.log("Must pick constructor");

return
}


dispatch(selectConstractConstructorPowerUnit(selectedConstructorPowerUnitSupplier));
handleConfirmationOpen();
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
                    Contrract started:{selectedConstructorPowerUnitSupplier!=null?selectedConstructorPowerUnitSupplier.startDate:"not supplied"}
                                    
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Years estaminated:{selectedConstructorPowerUnitSupplier!=null?selectedConstructorPowerUnitSupplier.yearEstaminate:"not supplied"}
                                
                </Typography>
            </Grid>
                    </Grid>
                    <Grid style={{display:'flex',marginTop:20,marginLeft:200}} >
                        <Button variant="outlined"
                             style={{ display: 'inline-flex', color:'black', background:'#D1D9D9', width: 180,padding:2, height: 40,fontSize:14}} 
                             onClick={()=>handleUpdateConstructorRacingDetails()} >
                            <CancelIcon fontSize='large' style={{marginRight:10}}/>
                            Update Form
                        </Button>
                    </Grid>
                <Modal
                    open={openConfirmation}
                    onClose={handleConfirmationClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <RacingDetailsForm closeForm={handleConfirmationClose}/>
                </Modal>
        </Grid>
        }
        </div>
        }
       
        
        </Card>
    )
}