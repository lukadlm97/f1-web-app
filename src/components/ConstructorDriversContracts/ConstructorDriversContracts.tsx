import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'

import {AppState} from '../../types/AppState'
import {DriverContractCard} from '../Driver/DriverContractCard'
import {DriversContractHistory} from '../ConstructorDriversContracts/DriversContractHistory'

import CreateDriverContract from '../Contract/CreateContract';

import {fetchCurrentConstructorDrivers,fetchHistoryOfConstructorDrivers} 
from '../../redux/actions/ContactAction'


export default function ConstructorDriversContracts(){   
    const dispatch = useDispatch();

    const selectedConstructor= useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const drivers= useSelector((state:AppState)=>state.driverReducer.drivers)

    const isLoadingCurrentContructorsDrivers= useSelector((state:AppState)=>state.contractReducer.isLoadingCurrentConstructorContracts)
    const currentConstructorDrivers = useSelector((state:AppState)=>state.contractReducer.currentConstructorContracts)
    const isConstructorHaveCurrentDriver = useSelector((state:AppState)=>state.contractReducer.isContructorHaveActiveContracts)

    React.useEffect(()=>{
        dispatch(fetchCurrentConstructorDrivers(selectedConstructor!=null?selectedConstructor.id:-1))
        dispatch(fetchHistoryOfConstructorDrivers(selectedConstructor!=null?selectedConstructor.id:-1))
    },[])


    const getForename=(driverId:number)=>{
        const selectedDriver = drivers.find(x=>x.id==driverId)
        if(selectedDriver==null || selectedDriver==undefined){
            return "";
        }

        return selectedDriver.forename;
    }

    const getSurname=(driverId:number)=>{
        const selectedDriver = drivers.find(x=>x.id==driverId)
        if(selectedDriver==null || selectedDriver==undefined){
            return "";
        }

        return selectedDriver.surname;
    }

    
    const getCountryId=(driverId:number)=>{
        const selectedDriver = drivers.find(x=>x.id==driverId)
        if(selectedDriver==null || selectedDriver==undefined){
            return -1;
        }

        return selectedDriver.countryId;
    }


    return(
        <Grid style={{display:'flex'}}>
            <Grid  item xs={6} style={{background:'#99a799',padding:20}}>
                <Grid style={{height:50,background:'#99a799'}}>
                    <h1>
                        Current drivers
                    </h1>
                    {isLoadingCurrentContructorsDrivers && 
                        <Grid>
                            LOADING CURRENT DRIVERS ...
                        </Grid>
                    }
                </Grid>
                <Grid  container spacing={3}>
                    {isConstructorHaveCurrentDriver && currentConstructorDrivers &&
                        currentConstructorDrivers.map(x=>
                            <DriverContractCard
                                id={x.driverId}
                                forename={getForename(x.driverId)}
                                surname={getSurname(x.driverId)}
                                driverRolesId={x.driverRolesId}
                                estaminateValue={x.estaminateValue}
                                estaminateYears={x.estaminateYears}
                                driverCountryId={getCountryId(x.driverId)}
                            />)
                    }
                        </Grid>
                        {!isConstructorHaveCurrentDriver && 
                        <div>
                            Not availiable current drivers for constructor.
                        </div>
                        }
                   
                <CreateDriverContract />
            </Grid>
            <Grid item xs={6} style={{background:'#99a799',padding:20,marginLeft:20}}>
                <DriversContractHistory />

            </Grid>
        </Grid>
        
    )
}
