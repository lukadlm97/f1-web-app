import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_DRIVERS_LOADING, DriverActions, FETCH_DRIVERS_FAILURE, FETCH_DRIVERS_SUCCESS,
    ADD_DRIVER_SUCCESS,ADD_DRIVER_LOADING,ADD_DRIVER_ERROR, DriverState} from '../../types/DriverTypes'


//fetch all countries
export function fetchAllDriversLoading():DriverActions{

    return {
        type:FETCH_DRIVERS_LOADING
    }

}

// fetch all countries success
export function fetchAllDriversSuccess(drivers:[]):DriverActions{
    return {
        type:FETCH_DRIVERS_SUCCESS,
        payload:drivers
    }

}

// fetch all countries failure
export function fetchAllDriversFailure(error:string):DriverActions{
    return {
        type:FETCH_DRIVERS_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllDrivers(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllDriversLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/Driver')
        .then((res)=>{
            console.log(res);
            const drivers=res.data 
            dispatch(fetchAllDriversSuccess(drivers))
        }).catch((err)=>{
            console.log(err);
            dispatch(fetchAllDriversFailure(err))
        })
    }
}

export function addNewDriverLoading():DriverActions{
    return{
        type:ADD_DRIVER_LOADING
    }
}

//  add new  driver success
export function addNewDriverSuccess(driver:DriverState):DriverActions{
    return {
        type:ADD_DRIVER_SUCCESS,
        payload:driver
    }

}

// add new driver failure
export function addNewDriverError(error:string):DriverActions{
    return {
        type:ADD_DRIVER_ERROR,
        payload:error
    }
}

// add driver data

export function addNewDriver(driver:DriverState){

    return (dispatch:Dispatch)=>{

        console.log("addNewDriver dispetched");
        
        dispatch(addNewDriverLoading())
        //axios call 
        axios.post('https://localhost:6001/api/v1/Driver/create',driver)
        .then((res)=>{
            console.log(res);
            const driver=res.data 
            dispatch(addNewDriverSuccess(driver))
        }).catch((err)=>{
            console.log(err);
            dispatch(addNewDriverError(err))
        })
    }
}











