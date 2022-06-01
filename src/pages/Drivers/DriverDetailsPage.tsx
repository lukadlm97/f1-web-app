import React, { FC, FormEvent, ReactElement, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchDriver} from '../../redux/actions/DriverAction'
import { AppState } from '../../types/AppState'

import Grid from '@mui/material/Grid';

interface ParamTypes {
    driverNo: string;
}

const DriverDetailsPage:React.FC=()=>{
    const [driverName,setDriverName] =useState(''); 
    const driver = useSelector((state: AppState) => state.driverReducer.driver);
    const isLoading = useSelector((state: AppState) => state.driverReducer.isLoadingDriver);
    const dispatch = useDispatch();
    const params = useParams<ParamTypes>();

    useEffect(()=>{
        dispatch(fetchDriver(parseInt(params.driverNo)))
        console.log(params.driverNo)
    },[]);

    useEffect(()=>{
        if(driver&&driver.forename&&driver.surname){
            setDriverName(`${driver.forename} ${driver.surname}`)
        }
    },[driver])

    if(isLoading) return(
        <Grid>
            Loading...
        </Grid>
    )


    return(
        <Grid>
            {driverName}
        </Grid>
    )
}


export default DriverDetailsPage;
