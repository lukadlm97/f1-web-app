import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING,  FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE,
    FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS, ConstructorsRacingRecordsActions,
    CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING, CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS, CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE,
    UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING,  UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS,  UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE,
    FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING, FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS,FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE,
    SET_TO_NULL_CONSTUCTOR_RACING_RECORD,
     ConstructorsRacingRecordState
} from '../../types/ConstructorRacingRecordTypes'



//fetch all countries
export function fetchAllConstructorsRacingRecordsLoading():ConstructorsRacingRecordsActions{

    return {
        type:FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING
    }

}

// fetch all countries success
export function fetchAllConstructorsRacingRecordsSuccess(constructors:[]):ConstructorsRacingRecordsActions{
    return {
        type:FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS,
        payload:constructors
    }

}

// fetch all countries failure
export function fetchAllConstructorsRacingRecordsFailure(error:string):ConstructorsRacingRecordsActions{
    return {
        type:FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllConstructorsRacingRecords(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllConstructorsRacingRecordsLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/Constructor')
        .then((res)=>{
            const constructors=res.data 
            dispatch(fetchAllConstructorsRacingRecordsSuccess(constructors))
        }).catch((err)=>{
            dispatch(fetchAllConstructorsRacingRecordsFailure(err))
        })
    }
}


//fetch all countries
export function createConstructorsRacingRecordsLoading():ConstructorsRacingRecordsActions{

    return {
        type:CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING
    }

}

// fetch all countries success
export function createConstructorsRacingRecordsSuccess(constructor:ConstructorsRacingRecordState):ConstructorsRacingRecordsActions{
    return {
        type:CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS,
        payload:constructor
    }

}

// fetch all countries failure
export function createConstructorsRacingRecordsFailure(error:string):ConstructorsRacingRecordsActions{
    return {
        type:CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function createConstructorsRacingRecords(constructor:ConstructorsRacingRecordState,isInit:boolean){

    return (dispatch:Dispatch)=>{
        console.log(constructor);
        
        dispatch(createConstructorsRacingRecordsLoading())
        if(isInit){
            axios.post('https://localhost:6001/api/v1/ConstructorRacingDetails/init',constructor)
            .then((res)=>{
                const constructor=res.data 
                console.log(res.data );
                dispatch(createConstructorsRacingRecordsSuccess(constructor))
            }).catch((err)=>{
                console.log(err);
                
                dispatch(createConstructorsRacingRecordsFailure(err))
    
            })
        }else{
            axios.post(`https://localhost:6001/api/v1/ConstructorRacingDetails/create/${constructor.constructorId}`,constructor)
            .then((res)=>{
                const constructor=res.data 
                console.log(res.data );
                dispatch(createConstructorsRacingRecordsSuccess(constructor))
            }).catch((err)=>{
                console.log(err);
                
                dispatch(createConstructorsRacingRecordsFailure(err))
    
            })
        }

        //axios call 
       
    }
}


//fetch all countries
export function fetchConstructorRacingRecordsLoading():ConstructorsRacingRecordsActions{

    return {
        type:FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING
    }

}

// fetch all countries success
export function fetchConstructorRacingRecordsSuccess(constructorRacingRecord:ConstructorsRacingRecordState):ConstructorsRacingRecordsActions{
    return {
        type:FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS,
        payload:constructorRacingRecord
    }

}

// fetch all countries failure
export function fetchConstructorRacingRecordsFailure(error:string,isNotCreated:boolean):ConstructorsRacingRecordsActions{
    return {
        type:FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE,
        payload:error,
        isNotCreatedYet:isNotCreated
        
    }
}

// fetch countries data

export function fetchConstructorRacingRecords(constructorId:number){
    console.log(constructorId);

    return (dispatch:Dispatch)=>{
        dispatch(fetchConstructorRacingRecordsLoading())
        //axios call `https://localhost:6001/api/v1/Constructor/${driverId}/delete`
        axios.get(`https://localhost:6001/api/v1/ConstructorRacingDetails/${constructorId}`)
        .then((res)=>{
            const constructor=res.data 
            console.log(constructor);
            dispatch(fetchConstructorRacingRecordsSuccess(constructor))
        }).catch((err)=>{
            if(err.response.status==404){
                dispatch(fetchConstructorRacingRecordsFailure(err,true))
                setConstructorRacingRecords(null)
            }

        })
    }
}




//fetch all countries
export function updateConstructorsRacingRecordsLoading():ConstructorsRacingRecordsActions{

    return {
        type:UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING
    }

}

// fetch all countries success
export function updateConstructorsRacingRecordsSuccess(constructor:ConstructorsRacingRecordState):ConstructorsRacingRecordsActions{
    return {
        type:UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS,
        payload:constructor
    }

}

// fetch all countries failure
export function updateConstructorsRacingRecordsFailure(error:string):ConstructorsRacingRecordsActions{
    return {
        type:UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function updateConstructorsRacingRecords(constructor:ConstructorsRacingRecordState){

    return (dispatch:Dispatch)=>{
        console.log(constructor);
        
        dispatch(updateConstructorsRacingRecordsLoading())
        //axios call `https://localhost:6001/api/v1/Constructor/${driverId}/delete`
        axios.post(`https://localhost:6001/api/v1/ConstructorRacingDetails/update/${constructor.constructorId}`,constructor)
        .then((res)=>{
            const constructorUpdated=res.data 
            console.log(constructorUpdated);
            
            dispatch(updateConstructorsRacingRecordsSuccess(constructorUpdated))
        }).catch((err)=>{
            dispatch(updateConstructorsRacingRecordsFailure(err))

        })
    }
}


export function setConstructorRacingRecordsSuccess(constructor:ConstructorsRacingRecordState|null):ConstructorsRacingRecordsActions{

    return {
        type:SET_TO_NULL_CONSTUCTOR_RACING_RECORD,
        payload:constructor
    }

}

export function setConstructorRacingRecords(constructor:ConstructorsRacingRecordState|null){

    return (dispatch:Dispatch)=>{
       
        dispatch(setConstructorRacingRecordsSuccess(constructor))
    }
}

