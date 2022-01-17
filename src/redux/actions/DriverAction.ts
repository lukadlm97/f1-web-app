import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_DRIVERS_LOADING, DriverActions, FETCH_DRIVERS_FAILURE, FETCH_DRIVERS_SUCCESS,
    ADD_DRIVER_SUCCESS,ADD_DRIVER_LOADING,ADD_DRIVER_ERROR, DriverState, REMOVE_DRIVER_SUCCESS, SELECT_DRIVER_SUCCESS,
    UPDATE_DRIVER_LOADING, UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_ERROR, CHANGE_DRIVER_CITIZENSHIP_SUCCESS, CHANGE_DRIVER_CITIZENSHIP_ERROR, CHANGE_DRIVER_CITIZENSHIP_LOADING, SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION, SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION, RETIREMENT_DRIVER_SUCCESS, RETIREMENT_DRIVER_LOADING, RETIREMENT_DRIVER_ERROR} from '../../types/DriverTypes'


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


export function retairDriverLoading():DriverActions{
    return{
        type:RETIREMENT_DRIVER_LOADING
    }
}

//  add new  driver success
export function retairDriverSuccess(driver:DriverState):DriverActions{
    return {
        type:RETIREMENT_DRIVER_SUCCESS,
        payload:driver
    }

}

// add new driver failure
export function retairDriverError(error:string):DriverActions{
    return {
        type:RETIREMENT_DRIVER_ERROR,
        payload:error
    }
}

// add driver data

export function retairDriver(driverId:number){

    return (dispatch:Dispatch)=>{

        console.log("retairDriver dispetched");
        
        dispatch(retairDriverLoading())
        //axios call 
        axios.get(`https://localhost:6001/api/v1/Driver/${driverId}/retirement`)
        .then((res)=>{
            console.log(res);
            const driver=res.data 
            dispatch(retairDriverSuccess(driver))
        }).catch((err)=>{
            console.log(err);
            dispatch(retairDriverError(err))
        })
    }
}


//  add new  driver success
export function removeDriverSuccess(driverId:number):DriverActions{
    return {
        type:REMOVE_DRIVER_SUCCESS,
        payload:driverId
    }

}

// add new driver failure
export function removeDriverError(error:string):DriverActions{
    return {
        type:ADD_DRIVER_ERROR,
        payload:error
    }
}

// add driver data

export function removeDriver(driverId:number){

    return (dispatch:Dispatch)=>{

        console.log("removeDriver dispetched");
        
        dispatch(addNewDriverLoading())
        //axios call 
        axios.get(`https://localhost:6001/api/v1/Driver/${driverId}/deactivate`)
        .then((res)=>{
            console.log(res);
            const driver=res.data 
            dispatch(removeDriverSuccess(driverId))
        }).catch((err)=>{
            console.log(err);
            dispatch(removeDriverError(err))
        })
    }
}

export function selectForRemove(remove:boolean):DriverActions{
    if(remove){
        return{
            type:SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION,
        payload:true
        }
    }
    return{
        type:SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION,
    payload:false
    }
}

export function selectDriverSuccess(driver:DriverState|null):DriverActions{
    return {
        type:SELECT_DRIVER_SUCCESS,
        payload:driver
    }

}

export function selectDriver(driver:DriverState|null){
    return (dispatch:Dispatch)=>{

        console.log("selectDriver dispetched");
        
        dispatch(selectDriverSuccess(driver))
      
    }
}


export function updateDriverLoading():DriverActions{
    return{
        type:UPDATE_DRIVER_LOADING
    }
}

//  update  driver success
export function updateDriverSuccess(driver:DriverState):DriverActions{
    return {
        type:UPDATE_DRIVER_SUCCESS,
        payload:driver
    }

}

// update driver failure
export function updateDriverError(error:string):DriverActions{
    return {
        type:UPDATE_DRIVER_ERROR,
        payload:error
    }
}

// update driver data

export function updateDriver(driver:DriverState){

    return (dispatch:Dispatch)=>{

        console.log("updateDriver dispetched");
        
        dispatch(updateDriverLoading())
        //axios call 
        axios.post(`https://localhost:6001/api/v1/Driver/${driver.id}/update`,driver)
        .then((res)=>{
            console.log(res);
            const driver=res.data 
            dispatch(updateDriverSuccess(driver))
        }).catch((err)=>{
            console.log(err);
            dispatch(updateDriverError(err))
        })
    }
}



//  citizenship change of  driver success
export function changeCitizenshipSuccess(driver:DriverState):DriverActions{
    return {
        type:CHANGE_DRIVER_CITIZENSHIP_SUCCESS,
        payload:driver
    }

}

// citizenship change of driver failure
export function changeCitizenshipError(error:string):DriverActions{
    return {
        type:CHANGE_DRIVER_CITIZENSHIP_ERROR,
        payload:error
    }
}

export function changeCitizenshipLoading():DriverActions{
    return{
        type:CHANGE_DRIVER_CITIZENSHIP_LOADING
    }
}



// citizenship change of  driver data

export function changeCitizenship(driver:DriverState){

    return (dispatch:Dispatch)=>{

        console.log("changeCitizenship dispetched");
        
        dispatch(changeCitizenshipLoading())
        //axios call 
        axios.get(`https://localhost:6001/api/v1/Driver/${driver.id}/citizenship/${driver.countryId}`)
        .then((res)=>{
            console.log(res);
            const driver=res.data 
            dispatch(changeCitizenshipSuccess(driver))
        }).catch((err)=>{
            console.log(err);
            dispatch(changeCitizenshipError(err))
        })
    }
}




