import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_COUNSTRUCTORS_LOADING, ConstructorActions, FETCH_COUNSTRUCTORS_FAILURE, FETCH_COUNSTRUCTORS_SUCCESS,
    CREATE_COUNSTRUCTOR_SUCCESS, CREATE_COUNSTRUCTOR_LOADING, CREATE_COUNSTRUCTOR_FAILURE,
    UPDATE_COUNSTRUCTOR_SUCCESS,  UPDATE_COUNSTRUCTOR_LOADING,  UPDATE_COUNSTRUCTOR_FAILURE,
    REMOVE_COUNSTRUCTOR_SUCCESS, REMOVE_COUNSTRUCTOR_LOADING, REMOVE_COUNSTRUCTOR_FAILURE, ConstructorState, SELECT_COUNSTRUCTOR_SUCCESS,} from '../../types/ConstructorType'
import { updateDriverLoading } from './DriverAction'


//fetch all countries
export function fetchAllConstructorsLoading():ConstructorActions{

    return {
        type:FETCH_COUNSTRUCTORS_LOADING
    }

}

// fetch all countries success
export function fetchAllConstructorsSuccess(constructors:[]):ConstructorActions{
    return {
        type:FETCH_COUNSTRUCTORS_SUCCESS,
        payload:constructors
    }

}

// fetch all countries failure
export function fetchAllConstructorsFailure(error:string):ConstructorActions{
    return {
        type:FETCH_COUNSTRUCTORS_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllConstuctors(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllConstructorsLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/Constructor')
        .then((res)=>{
            const constructors=res.data 
            dispatch(fetchAllConstructorsSuccess(constructors))
        }).catch((err)=>{
            dispatch(fetchAllConstructorsFailure(err))

        })
    }
}


//fetch all countries
export function createConstructorLoading():ConstructorActions{

    return {
        type:CREATE_COUNSTRUCTOR_LOADING
    }

}

// fetch all countries success
export function createConstructorsSuccess(constructor:ConstructorState):ConstructorActions{
    return {
        type:CREATE_COUNSTRUCTOR_SUCCESS,
        payload:constructor
    }

}

// fetch all countries failure
export function createConstructorsFailure(error:string):ConstructorActions{
    return {
        type:CREATE_COUNSTRUCTOR_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function createConstuctor(constructor:ConstructorState){

    return (dispatch:Dispatch)=>{
        console.log(constructor);
        
        dispatch(createConstructorLoading())
        //axios call 
        axios.post('https://localhost:6001/api/v1/Constructor/create',constructor)
        .then((res)=>{
            const constructor=res.data 
            console.log(res.data );
            dispatch(createConstructorsSuccess(constructor))
        }).catch((err)=>{
            console.log(err);
            
            dispatch(createConstructorsFailure(err))

        })
    }
}


//fetch all countries
export function removeConstructorLoading():ConstructorActions{

    return {
        type:REMOVE_COUNSTRUCTOR_LOADING
    }

}

// fetch all countries success
export function removeConstructorSuccess(constructorId:number):ConstructorActions{
    return {
        type:REMOVE_COUNSTRUCTOR_SUCCESS,
        payload:constructorId
    }

}

// fetch all countries failure
export function removeConstructorFailure(error:string):ConstructorActions{
    return {
        type:REMOVE_COUNSTRUCTOR_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function removeConstuctor(constructorId:number){

    return (dispatch:Dispatch)=>{
        dispatch(removeConstructorLoading())
        //axios call `https://localhost:6001/api/v1/Constructor/${driverId}/delete`
        axios.delete(`https://localhost:6001/api/v1/Constructor/${constructorId}/delete`)
        .then((res)=>{
            const constructor=res.data 
            dispatch(removeConstructorSuccess(constructorId))
        }).catch((err)=>{
            dispatch(removeConstructorFailure(err))

        })
    }
}




//fetch all countries
export function updateConstructorLoading():ConstructorActions{

    return {
        type:UPDATE_COUNSTRUCTOR_LOADING
    }

}

// fetch all countries success
export function updateConstructorSuccess(constructor:ConstructorState):ConstructorActions{
    return {
        type:UPDATE_COUNSTRUCTOR_SUCCESS,
        payload:constructor
    }

}

// fetch all countries failure
export function updateConstructorFailure(error:string):ConstructorActions{
    return {
        type:UPDATE_COUNSTRUCTOR_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function updateConstuctor(constructor:ConstructorState){

    return (dispatch:Dispatch)=>{
        console.log(constructor);
        
        dispatch(updateConstructorLoading())
        //axios call `https://localhost:6001/api/v1/Constructor/${driverId}/delete`
        axios.post(`https://localhost:6001/api/v1/Constructor/${constructor.id}/update`,constructor)
        .then((res)=>{
            const constructorUpdated=res.data 
            console.log(constructorUpdated);
            
            dispatch(updateConstructorSuccess(constructorUpdated))
        }).catch((err)=>{
            console.log(err);
            
            dispatch(updateConstructorFailure(err))

        })
    }
}



export function selectConstructorSuccess(constructor:ConstructorState|null){
    return {
        type:SELECT_COUNSTRUCTOR_SUCCESS,
        payload:constructor
        
    }
}

export function selectConstructor(constructor:ConstructorState|null){
    return (dispatch:Dispatch)=>{
    dispatch(selectConstructorSuccess(constructor))
    }
}

