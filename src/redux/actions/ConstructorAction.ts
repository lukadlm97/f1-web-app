import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_COUNSTRUCTORS_LOADING, ConstructorActions, FETCH_COUNSTRUCTORS_FAILURE, FETCH_COUNSTRUCTORS_SUCCESS} from '../../types/ConstructorType'


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