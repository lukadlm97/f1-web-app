import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_DRIVERS_LOADING, DriverActions, FETCH_DRIVERS_FAILURE, FetchAllDriversSuccessAction, DriverState, FETCH_DRIVERS_SUCCESS} from '../../types/DriverTypes'


//fetch all countries
export function fetchAllDriversLoading():DriverActions{

    return {
        type:FETCH_DRIVERS_LOADING
    }

}

// fetch all countries success
export function fetchAllDriversSuccess(drivers:[]):DriverActions{
    console.log(drivers);
    
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