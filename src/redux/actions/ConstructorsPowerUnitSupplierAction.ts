import {Dispatch} from 'redux'
import axios from 'axios'

import {ConstructorPowerUnitSupplierState,
    FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING, FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE, 
    FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
    START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING,
    START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS, END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
    END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING,END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
    CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING,
    CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_FAILURE,FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_LOADING,
    FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_SUCCESS,ConstructorsPowerUnitSupplierActions, SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS
} from '../../types/ConstructorPowerUnitSupplier'


//fetch all countries
export function fetchConstructorsPowerUnitSupplierLoading():ConstructorsPowerUnitSupplierActions{

    return {
        type:FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    }

}

// fetch all countries success
export function fetchConstructorsPowerUnitSupplierSuccess(powerUnitSupplier:ConstructorPowerUnitSupplierState):ConstructorsPowerUnitSupplierActions{
    return {
        type:FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:powerUnitSupplier
    }

}

// fetch all countries failure
export function fetchConstructorsPowerUnitSupplierFailure(error:string,status:boolean):ConstructorsPowerUnitSupplierActions{
    return {
        type:FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
        payload:error,
        isNotCreatedYet:status
    }
}

// fetch countries data

export function fetchConstructorsPowerUnitSupplierStaff(constructorId:number){

    return (dispatch:Dispatch)=>{
        dispatch(fetchConstructorsPowerUnitSupplierLoading())
        //axios call 
        axios.get(`https://localhost:6001/api/v1/ConstructorPowerUnit/${constructorId}`)
        .then((res)=>{
            const powerUnitSupplier=res.data 
            dispatch(fetchConstructorsPowerUnitSupplierSuccess(powerUnitSupplier))
        }).catch((err)=>{
            dispatch(fetchConstructorsPowerUnitSupplierFailure(err,true))

        })
    }
}



export function startContractForConstructorPowerUnitSupplierLoading():ConstructorsPowerUnitSupplierActions{
    return{
        type:START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    }
}

//  add new  driver success
export function startContractForConstructorPowerUnitSupplierLSuccess(technicalStaff:ConstructorPowerUnitSupplierState):ConstructorsPowerUnitSupplierActions{
    return {
        type:START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:technicalStaff
    }

}

// add new driver failure
export function startContractForConstructorPowerUnitSupplierLError(error:string):ConstructorsPowerUnitSupplierActions{
    return {
        type:START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
        payload:error
    }
}

// add driver data

export function startContractForPowerUnitSupplierLConstructor(powerUnitSupplierContract:ConstructorPowerUnitSupplierState){

    return (dispatch:Dispatch)=>{

        dispatch(startContractForConstructorPowerUnitSupplierLoading())
        //axios call 
        console.log(powerUnitSupplierContract);
        axios.post('https://localhost:6001/api/v1/ConstructorPowerUnit/start',powerUnitSupplierContract)
        .then((res)=>{
            const createdTechnicalStaff=res.data 
            dispatch(startContractForConstructorPowerUnitSupplierLSuccess(createdTechnicalStaff))
        }).catch((err)=>{
            console.log(err.message);
            if(err.response.status===409){
                dispatch(startContractForConstructorPowerUnitSupplierLError("Staff is still under contract"))
                return;
            }
            dispatch(startContractForConstructorPowerUnitSupplierLError(err.message))
        })
    }
}

//  add new  driver success
export function endContractConstructorPowerUnitSupplierLoading():ConstructorsPowerUnitSupplierActions{
    return {
        type:END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    }
}


//  add new  driver success
export function endContractConstructorPowerUnitSupplierSuccess(technicalStaffId:number):ConstructorsPowerUnitSupplierActions{
    return {
        type:END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:technicalStaffId
    }
}

// add new driver failure
export function endContractConstructorPowerUnitSupplierError(error:string):ConstructorsPowerUnitSupplierActions{
    return {
        type:END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
        payload:error
    }
}

// add driver data

export function removeConstructorPowerUnitSupplier(contractId:number){

    return (dispatch:Dispatch)=>{

        dispatch(endContractConstructorPowerUnitSupplierLoading())
        axios.post(`https://localhost:6001/api/v1/ConstructorPowerUnit/endContract/${contractId}`)
        .then((res)=>{
            const driver=res.data 
            dispatch(endContractConstructorPowerUnitSupplierSuccess(contractId))
            selectConstractConstructorPowerUnit(null)
        }).catch((err)=>{
            console.log(err);
            dispatch(endContractConstructorPowerUnitSupplierError(err))
        })
    }
}


export function selectConstractTechnicalStaffSuccess(powerUnitSupplierContract:ConstructorPowerUnitSupplierState|null):ConstructorsPowerUnitSupplierActions{
    return {
        type:SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:powerUnitSupplierContract
    }

}

export function selectConstractConstructorPowerUnit(powerUnitSupplier:ConstructorPowerUnitSupplierState|null){
    return (dispatch:Dispatch)=>{

        dispatch(selectConstractTechnicalStaffSuccess(powerUnitSupplier))
      
    }
}



//fetch all countries
export function fetchConstructorsPowerUnitSupplierHistoryLoading():ConstructorsPowerUnitSupplierActions{

    return {
        type:FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_LOADING
    }

}

// fetch all countries success
export function fetchConstructorsPowerUnitSupplierHistorySuccess(powerUnitSuppliers:ConstructorPowerUnitSupplierState[]):ConstructorsPowerUnitSupplierActions{
    return {
        type:FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_SUCCESS,
        payload:powerUnitSuppliers
    }

}

// fetch all countries failure
export function fetchConstructorsPowerUnitSupplierHistoryFailure(error:string):ConstructorsPowerUnitSupplierActions{
    return {
        type:FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchConstructorsPowerUnitSupplierHistory(constructorId:number){

    return (dispatch:Dispatch)=>{
        dispatch(fetchConstructorsPowerUnitSupplierHistoryLoading())
        //axios call 
        axios.get(`https://localhost:6001/api/v1/ConstructorPowerUnit/${constructorId}`)
        .then((res)=>{
            const powerUnitSupplier=res.data 
            dispatch(fetchConstructorsPowerUnitSupplierHistorySuccess(powerUnitSupplier))
        }).catch((err)=>{
            dispatch(fetchConstructorsPowerUnitSupplierHistoryFailure(err))

        })
    }
}
