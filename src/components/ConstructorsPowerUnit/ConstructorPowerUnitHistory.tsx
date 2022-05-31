import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';

import {AppState} from '../../types/AppState'



import {fetchConstructorsPowerUnitSupplierHistory} 
from '../../redux/actions/ConstructorsPowerUnitSupplierAction'




export default function ConstructorPowerUnitSupplierHistory(){
    const isLoading = useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.isLoadingHistory)
    const isNotCreatedYet = useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.notProvidedHistory)
    const powerUnitSuppliers = useSelector((state: AppState) => state.powerUnitSupplierReducer.suppliers)
    const historyOfSuppliers =  useSelector((state:AppState)=>state.constructorPowerUnitSupplierReducer.suppliersHistory)
    const selectedConstructor= useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const dispatch = useDispatch();
    
    React.useEffect(()=>{
        dispatch(fetchConstructorsPowerUnitSupplierHistory(selectedConstructor!=null?selectedConstructor.id:-1))
    },[])

    
  const handleSupplierConversion = (supplierId: number|undefined) => {

    if (supplierId == undefined)
      return "Not supplied";

    const findedSupplier = powerUnitSuppliers.find(x => x.id == supplierId);
    if (findedSupplier != null)
      return findedSupplier.supplierName;

    return "Not supplied";
  };


  const handlingYearAtContractCaclucalte = (start: Date,end:Date) => {
    let date1 = new Date(start);
    let date2 = new Date(end);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }


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
               NOT AVAILABLE ...
            </div>
            :
            <Grid>
                <Grid >
                {!isLoading && historyOfSuppliers && 
            historyOfSuppliers.map((item)=>(  
                <Grid style={{display:"flex"}} container spacing={6}  >
                    <Grid  item xs={4}>
                        <Typography variant="body2" color="black" style={{fontSize:14}}>
                                    Supplier name:{handleSupplierConversion(item.powerUnitSupplierId)}
                        </Typography>
                    </Grid>
                    <Grid  item xs={3}>
                        <Typography variant="body2" color="black" style={{fontSize:14}} >
                                    Duration :{handlingYearAtContractCaclucalte(item.startDate,item.endDate)}
                        </Typography>
                    </Grid>
                    <Grid  item xs={5}>
                        <Typography variant="body2" color="black" style={{fontSize:14}} >
                                    Inital estaminte years :{item.yearEstaminate}
                        </Typography>
                    </Grid>
                </Grid>   
                ))
                }   
            </Grid>
            </Grid>
    }
    </div>
    }
   
    
    </Card>
)

}
