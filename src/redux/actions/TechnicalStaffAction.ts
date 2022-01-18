import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_TECHNICAL_STAFF_LOADING, TechnicalStaffActions, FETCH_TECHNICAL_STAFF_SUCCESS, FETCH_TECHNICAL_STAFF_FAILURE, 
    TechnicalStaffState,CREATE_TECHNICAL_STAFF_LOADING,CREATE_TECHNICAL_STAFF_FAILURE,CREATE_TECHNICAL_STAFF_SUCCESS} from '../../types/TechnicalStuffTypes'
import { addNewDriverLoading } from './DriverAction'


//fetch all countries
export function fetchAllTechnicalStaffLoading():TechnicalStaffActions{

    return {
        type:FETCH_TECHNICAL_STAFF_LOADING
    }

}

// fetch all countries success
export function fetchAllTechnicalStaffSuccess(technicalStaffs:[]):TechnicalStaffActions{
    return {
        type:FETCH_TECHNICAL_STAFF_SUCCESS,
        payload:technicalStaffs
    }

}

// fetch all countries failure
export function fetchAllTechnicalStaffFailure(error:string):TechnicalStaffActions{
    return {
        type:FETCH_TECHNICAL_STAFF_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllTechnicalStaff(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllTechnicalStaffLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/TechnicalStaff')
        .then((res)=>{
            console.log(res);
            
            const technicalStaffs=res.data 
            dispatch(fetchAllTechnicalStaffSuccess(technicalStaffs))
        }).catch((err)=>{
            dispatch(fetchAllTechnicalStaffFailure(err))

        })
    }

    
}



export function addNewTechnicalStaffLoading():TechnicalStaffActions{
    return{
        type:CREATE_TECHNICAL_STAFF_LOADING
    }
}

//  add new  driver success
export function addNewTechnicalStaffSuccess(technicalStaff:TechnicalStaffState):TechnicalStaffActions{
    return {
        type:CREATE_TECHNICAL_STAFF_SUCCESS,
        payload:technicalStaff
    }

}

// add new driver failure
export function addNewTechnicalStaffError(error:string):TechnicalStaffActions{
    return {
        type:CREATE_TECHNICAL_STAFF_FAILURE,
        payload:error
    }
}

// add driver data

export function addNewTechnicalStaff(technicalStaff:TechnicalStaffState){

    return (dispatch:Dispatch)=>{

        console.log("addNewDriver dispetched");
        
        dispatch(addNewDriverLoading())
        //axios call 
        axios.post('https://localhost:6001/api/v1/TechnicalStaff',technicalStaff)
        .then((res)=>{
            console.log(res);
            const createdTechnicalStaff=res.data 
            dispatch(addNewTechnicalStaffSuccess(createdTechnicalStaff))
        }).catch((err)=>{
            console.log(err);
            dispatch(addNewTechnicalStaffError(err))
        })
    }
}

