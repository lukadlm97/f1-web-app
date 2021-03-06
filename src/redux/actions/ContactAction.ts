import {ContractReducerState,ContractState,FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE, FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING, 
    FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS,FETCH_CURRENT_DRIVERS_CONSTRUCTOR_FAILURE,FETCH_CURRENT_DRIVERS_CONSTRUCTOR_LOADING,
    FETCH_CURRENT_DRIVERS_CONSTRUCTOR_SUCCESS,FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE,FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING,
    FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS,FETCH_HISTORY_DRIVERS_CONSTRUCTOR_FAILURE,FETCH_HISTORY_DRIVERS_CONSTRUCTOR_LOADING,
    FETCH_HISTORY_DRIVERS_CONSTRUCTOR_SUCCESS,START_CONTRACT_FAILURE,START_CONTRACT_LOADING,END_CONTRACT_FAILURE,END_CONTRACT_LOADING,
    END_CONTRACT_SUCCESS ,START_CONTRACT_SUCCESS,SELECT_CONTRACT,SELECT_CONTRACT_SUCCESS,ContractActions
} from '../../types/ContractTypes'
import {Dispatch} from 'redux'
import axios from 'axios'

export function fetchCurrentConstructorDriversLoading():ContractActions{

    return {
        type:FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING
    }
}

export function fetchCurrentConstructorDriversSuccess(contracts:[]):ContractActions{
    return {
        type:FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS,
        payload:contracts
    }
}

export function fetchCurrentConstructorDriversFailure(error:string):ContractActions{
    return {
        type:FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE,
        payload:error
        
    }
}

export function fetchCurrentConstructorDrivers(constructorId:number){

    return (dispatch:Dispatch)=>{
        dispatch(fetchCurrentConstructorDriversLoading())
        
        axios.get(`https://localhost:6001/api/v1/DriversContract/${constructorId}`)
        .then((res)=>{
            const contracts=res.data 
            console.log(contracts);
            
            dispatch(fetchCurrentConstructorDriversSuccess(contracts))
        }).catch((err)=>{
            dispatch(fetchCurrentConstructorDriversFailure(err))

        })
    }
}



export function fetchHistoryOfConstructorDriversLoading():ContractActions{

    return {
        type:FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING
    }
}

export function fetchHistoryOfConstructorDriversSuccess(contracts:[]):ContractActions{
    return {
        type:FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS,
        payload:contracts
    }
}

export function fetchHistoryOfConstructorDriversFailure(error:string):ContractActions{
    return {
        type:FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE,
        payload:error
        
    }
}

export function fetchHistoryOfConstructorDrivers(constructorId:number){

    return (dispatch:Dispatch)=>{
        dispatch(fetchHistoryOfConstructorDriversLoading())
        axios.get(`https://localhost:6001/api/v1/DriversContract/${constructorId}/history`)
        .then((res)=>{
            const contracts=res.data
            
            console.log(contracts); 
            dispatch(fetchHistoryOfConstructorDriversSuccess(contracts))
        }).catch((err)=>{
            dispatch(fetchHistoryOfConstructorDriversFailure(err))

        })
    }
}


export function startNewContractLoading():ContractActions{

    return {
        type:START_CONTRACT_LOADING
    }
}

export function startNewContractSuccess(contract:ContractState):ContractActions{
    return {
        type:START_CONTRACT_SUCCESS,
        payload:contract
    }
}

export function startNewContractFailure(error:string):ContractActions{
    return {
        type:START_CONTRACT_FAILURE,
        payload:error
        
    }
}

export function startNewContract(contract:ContractState){

    return (dispatch:Dispatch)=>{
        dispatch(startNewContractLoading())
        axios.post(`https://localhost:6001/api/v1/DriversContract/startContract`,contract)
        .then((res)=>{
            const contract=res.data
            console.log(contract); 
            dispatch(startNewContractSuccess(contract))
        }).catch((err)=>{
            dispatch(startNewContractFailure(err))

        })

    }
}


export function endContractLoading():ContractActions{

    return {
        type:END_CONTRACT_LOADING
    }
}

export function endContractSuccess(contractId:number):ContractActions{
    return {
        type:END_CONTRACT_SUCCESS,
        payload:contractId
    }
}

export function endContractFailure(error:string):ContractActions{
    return {
        type:END_CONTRACT_FAILURE,
        payload:error
        
    }
}

export function endContract(contractId:number){

    return (dispatch:Dispatch)=>{
        dispatch(endContractLoading())
        axios.post(`https://localhost:6001/api/v1/DriversContract/endContract/${contractId}`)
        .then((res)=>{
            const contract=res.data
            console.log(contract); 
            dispatch(endContractSuccess(contractId))
        }).catch((err)=>{
            dispatch(endContractFailure(err))

        })

    }
}

export function selectContractSuccess(contract:ContractState){
    return {
        type:SELECT_CONTRACT,
        payload:contract
    }
}

export function selectContract(contract:ContractState){

    return (dispatch:Dispatch)=>{
        dispatch(selectContractSuccess(contract))
    }
}





