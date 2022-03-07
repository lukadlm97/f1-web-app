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

import {fetchCurrentConstructorDrivers,fetchHistoryOfConstructorDrivers} 
from '../../redux/actions/ContactAction'


export default function ConstructorDriversContracts(){   
    const dispatch = useDispatch();

    const selectedConstructor= useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)

    const isLoadingContructorsDriversHistory= useSelector((state:AppState)=>state.contractReducer.isLoadingConstructorContractsHistory)
    const constructorDriversHistory = useSelector((state:AppState)=>state.contractReducer.constructorContractsHistory)
    const isConstructorHaveDriversHistory = useSelector((state:AppState)=>state.contractReducer.isConstructorHaveContractHistory)

    const isLoadingCurrentContructorsDrivers= useSelector((state:AppState)=>state.contractReducer.isLoadingCurrentConstructorContracts)
    const currentConstructorDrivers = useSelector((state:AppState)=>state.contractReducer.currentConstructorContracts)
    const isConstructorHaveCurrentDriver = useSelector((state:AppState)=>state.contractReducer.isContructorHaveActiveContracts)

    React.useEffect(()=>{
        dispatch(fetchCurrentConstructorDrivers(selectedConstructor!=null?selectedConstructor.id:-1))
        dispatch(fetchHistoryOfConstructorDrivers(selectedConstructor!=null?selectedConstructor.id:-1))
    },[])


    return(
        
        <Grid style={{display:'flex'}}>
            <Grid item xs={6}>
                <h1>
                    History
                </h1>
                {isLoadingContructorsDriversHistory && 
                    <Grid>
                        LOADING HISTORY ....
                    </Grid>
                }
                {isConstructorHaveDriversHistory && constructorDriversHistory &&
                constructorDriversHistory.map(x=>
                    <div>
                        {x.id}
                    </div>)
                }
                {!isConstructorHaveDriversHistory && 
                <div>
                    Not availiable drivers history for constructor.
                </div>}

            </Grid>

            <Grid item xs={6}>
                <h1>
                    Current drivers
                </h1>
                {isLoadingCurrentContructorsDrivers && 
                    <Grid>
                        LOADING HISTORY ....
                    </Grid>
                }

                {isConstructorHaveCurrentDriver && currentConstructorDrivers &&
                    currentConstructorDrivers.map(x=>
                        <div>
                            {x.id}
                        </div>)
                    }
                    {!isConstructorHaveCurrentDriver && 
                    <div>
                        Not availiable current drivers for constructor.
                    </div>}
            </Grid>
        </Grid>
        
    )
}
