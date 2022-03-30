import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_DRIVER_ROLE_LOADING, DriverRolesActions, FETCH_DRIVER_ROLE_FAILURE, FETCH_DRIVER_ROLE_SUCCESS} 
        from '../../types/DriverRoleTypes'

//fetch all countries
export function fetchAllDriversRolesLoading():DriverRolesActions{
    return {
        type:FETCH_DRIVER_ROLE_LOADING
    }
}

// fetch all countries success
export function fetchAllDriverRolesSuccess(driverRoles:[]):DriverRolesActions{
    return {
        type:FETCH_DRIVER_ROLE_SUCCESS,
        payload:driverRoles
    }
}

// fetch all countries failure
export function fetchAllDriverRolesFailure(error:string):DriverRolesActions{
    return {
        type:FETCH_DRIVER_ROLE_FAILURE,
        payload:error   
    }
}

// fetch countries data

export function fetchAllDriverRoles(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllDriversRolesLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/Driver/roles')
        .then((res)=>{
            const driverRoles=res.data 
            dispatch(fetchAllDriverRolesSuccess(driverRoles))
        }).catch((err)=>{
            dispatch(fetchAllDriverRolesFailure(err))
        })
    }
    
}