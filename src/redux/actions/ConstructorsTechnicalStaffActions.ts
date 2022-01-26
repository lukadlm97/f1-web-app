import {Dispatch} from 'redux'
import axios from 'axios'

import {ConstructorsTechnicalStaffState,
    FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING, FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS, FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
    START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING,START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,
    START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE, END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING,
    END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
    SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS,ConstructorsTechnicalStaffActions,ConstructorsTechnicalStaffInsertState
} from '../../types/ConstructorsTechnicalStaffTypes'


//fetch all countries
export function fetchConstructorsTechnicalStaffLoading():ConstructorsTechnicalStaffActions{

    return {
        type:FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING
    }

}

// fetch all countries success
export function fetchConstructorsTechnicalStaffSuccess(technicalStaffs:[]):ConstructorsTechnicalStaffActions{
    return {
        type:FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,
        payload:technicalStaffs
    }

}

// fetch all countries failure
export function fetchConstructorsTechnicalStaffFailure(error:string):ConstructorsTechnicalStaffActions{
    return {
        type:FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchConstructorsTechnicalStaffStaff(constructorId:number){

    return (dispatch:Dispatch)=>{
        dispatch(fetchConstructorsTechnicalStaffLoading())
        //axios call 
        axios.get(`https://localhost:6001/api/v1/ConstructorStaff/constructor/${constructorId}`)
        .then((res)=>{
            const technicalStaffs=res.data 
            dispatch(fetchConstructorsTechnicalStaffSuccess(technicalStaffs))
        }).catch((err)=>{
            dispatch(fetchConstructorsTechnicalStaffFailure(err))

        })
    }
}



export function startContractForConstructorTechnicalStaffLoading():ConstructorsTechnicalStaffActions{
    return{
        type:START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING
    }
}

//  add new  driver success
export function startContractForConstructorSuccess(technicalStaff:ConstructorsTechnicalStaffState):ConstructorsTechnicalStaffActions{
    return {
        type:START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,
        payload:technicalStaff
    }

}

// add new driver failure
export function startContractForConstructorError(error:string):ConstructorsTechnicalStaffActions{
    return {
        type:START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
        payload:error
    }
}

// add driver data

export function startContractForConstructor(technicalStaff:ConstructorsTechnicalStaffInsertState){

    return (dispatch:Dispatch)=>{

        dispatch(startContractForConstructorTechnicalStaffLoading())
        //axios call 
        console.log(technicalStaff);
        axios.post('https://localhost:6001/api/v1/ConstructorStaff/start',technicalStaff)
        .then((res)=>{
            const createdTechnicalStaff=res.data 
            dispatch(startContractForConstructorSuccess(createdTechnicalStaff))
        }).catch((err)=>{
            console.log(err.message);
            if(err.response.status===409){
                dispatch(startContractForConstructorError("Staff is still under contract"))
                return;
            }
            dispatch(startContractForConstructorError(err.message))
        })
    }
}

//  add new  driver success
export function endContractTConstructorsechnicalStaffLoading():ConstructorsTechnicalStaffActions{
    return {
        type:END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING
    }
}


//  add new  driver success
export function endContractTConstructorsechnicalStaffSuccess(technicalStaffId:number):ConstructorsTechnicalStaffActions{
    return {
        type:END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,
        payload:technicalStaffId
    }
}

// add new driver failure
export function endContractTConstructorsechnicalStaffError(error:string):ConstructorsTechnicalStaffActions{
    return {
        type:END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
        payload:error
    }
}

// add driver data

export function removeTechnicalStaff(contractId:number){

    return (dispatch:Dispatch)=>{

        dispatch(endContractTConstructorsechnicalStaffLoading())
        axios.post(`https://localhost:6001/api/v1/ConstructorStaff/endContract/${contractId}`)
        .then((res)=>{
            const driver=res.data 
            dispatch(endContractTConstructorsechnicalStaffSuccess(contractId))
            selectConstractTechnicalStaff(null)
        }).catch((err)=>{
            console.log(err);
            dispatch(endContractTConstructorsechnicalStaffError(err))
        })
    }
}


export function selectConstractTechnicalStaffSuccess(technicalStaff:ConstructorsTechnicalStaffState|null):ConstructorsTechnicalStaffActions{
    return {
        type:SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS,
        payload:technicalStaff
    }

}

export function selectConstractTechnicalStaff(technicalStaff:ConstructorsTechnicalStaffState|null){
    return (dispatch:Dispatch)=>{

        dispatch(selectConstractTechnicalStaffSuccess(technicalStaff))
      
    }
}