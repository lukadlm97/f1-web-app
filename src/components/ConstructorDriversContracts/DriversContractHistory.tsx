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

export function DriversContractHistory(){
    const drivers= useSelector((state:AppState)=>state.driverReducer.drivers)

    const isLoadingContructorsDriversHistory= useSelector((state:AppState)=>state.contractReducer.isLoadingConstructorContractsHistory)
    const constructorDriversHistory = useSelector((state:AppState)=>state.contractReducer.constructorContractsHistory)
    const isConstructorHaveDriversHistory = useSelector((state:AppState)=>state.contractReducer.isConstructorHaveContractHistory)


    const getForename=(driverId:number)=>{
        var selectedDriver = drivers.find(x=>x.id==driverId)
        if(selectedDriver==null){
            return "not supplied"
        }

        return selectedDriver.forename;
    }

    const getSurname=(driverId:number)=>{
        console.log(driverId);
        console.log(drivers);
        
        
        var selectedDriver = drivers.find(x=>x.id==driverId)
        if(selectedDriver==null){
            return "not supplied"
        }

        return selectedDriver.surname;
    }

    return(
        <Grid>
             <h1>
                History
            </h1>
            <Grid style={{display:'flex'}}> 
                <Grid xs={4}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                        Name
                    </Typography>
                </Grid>
                
                <Grid xs={4}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                    Role
                    </Typography>
                </Grid>
               
                <Grid xs={2}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                       Value
                    </Typography>
                </Grid>

                <Grid xs={2}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                       Duration
                    </Typography>
                </Grid>

            </Grid>
        {isLoadingContructorsDriversHistory && 
            <Grid>
                LOADING HISTORY ....
            </Grid>
        }
        {isConstructorHaveDriversHistory && constructorDriversHistory &&
        constructorDriversHistory.map(x=>
            <Grid style={{display:'flex'}}> 
                <Grid xs={4}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                        {getForename(x.driverId)} {getSurname(x.driverId)}
                    </Typography>
                </Grid>
                
                <Grid xs={4}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                        {x.driverRolesId}
                    </Typography>
                </Grid>
               
                <Grid xs={2}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                        {x.estaminateValue}
                    </Typography>
                </Grid>

                <Grid xs={2}>
                    <Typography gutterBottom variant="h5" component="div" style={{fontSize:16,margin:10,padding:10}}>
                        {x.estaminateYears}
                    </Typography>
                </Grid>

            </Grid>
            )
        }
        {!isConstructorHaveDriversHistory && 
        <div>
            Not availiable drivers history for constructor.
        </div>}
        </Grid>
    )
}













