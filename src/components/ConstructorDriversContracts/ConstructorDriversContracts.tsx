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
            <Grid item xs={6} style={{background:'#99a799',padding:20}}>
                    <h1>
                        Current drivers
                    </h1>
                    {isLoadingCurrentContructorsDrivers && 
                        <Grid>
                            LOADING CURRENT DRIVERS ...
                        </Grid>
                    }
                    <Grid style={{display:'flex'}}>
                        {isConstructorHaveCurrentDriver && currentConstructorDrivers &&
                            currentConstructorDrivers.map(x=>
                                <DriverContractCard
                                    id={x.id}
                                    forename={getForename(x.driverId)}
                                    surname={getSurname(x.driverId)}
                                    driverRolesId={x.driverRolesId}
                                    estaminateValue={x.estaminateValue}
                                    estaminateYears={x.estaminateYears}
                                    driverCountryId={getCountryId(x.driverId)}
                                />)
                        }
                        {!isConstructorHaveCurrentDriver && 
                        <div>
                            Not availiable current drivers for constructor.
                        </div>
                        }
                    </Grid>
                <CreateDriverContract />
            </Grid>
            <Grid item xs={6} style={{background:'#99a799',padding:20,marginLeft:20}}>
                <DriversContractHistory />

            </Grid>
        </Grid>
        
    )
}
