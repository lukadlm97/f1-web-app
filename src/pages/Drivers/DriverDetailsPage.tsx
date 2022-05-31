import React, { FC, FormEvent, ReactElement, useEffect, useState } from "react";

import { Route, useHistory, useParams,useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchDriver} from '../../redux/actions/DriverAction'
import { AppState } from '../../types/AppState'

import Grid from '@mui/material/Grid';

const DriverDetailsPage:React.FC=()=>{
    const [driverName,setDriverName] =useState(''); 
    const driver = useSelector((state: AppState) => state.driverReducer.driver);
    const isLoading = useSelector((state: AppState) => state.driverReducer.isLoadingDriver);
    const error = useSelector((state: AppState) => state.driverReducer.errorDriver);
    const dispatch = useDispatch();
    const match = useRouteMatch<{driverNo:string}>(
        'drivers/details/:driverNo',
    );

    useEffect(()=>{
        if(match){
            console.log('enter driver details page true')
            dispatch(fetchDriver(parseInt(match.params.driverNo)))
        }else{
            console.log('enter driver details page false ')
        }
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
