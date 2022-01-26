import {Dispatch} from 'redux'
import axios from 'axios'

    import {PowerUnitSupplierState,
        FETCH_POWER_UNIT_SUPPLIERS_LOADING, FETCH_POWER_UNIT_SUPPLIERS_SUCCESS, FETCH_POWER_UNIT_SUPPLIERS_FAILURE,
        CREATE_POWER_UNIT_SUPPLIER_LOADING,CREATE_POWER_UNIT_SUPPLIER_SUCCESS,CREATE_POWER_UNIT_SUPPLIER_FAILURE,
        DELETE_POWER_UNIT_SUPPLIER_LOADING,DELETE_POWER_UNIT_SUPPLIER_SUCCESS,DELETE_POWER_UNIT_SUPPLIER_FAILURE,
        SELECT_POWER_UNIT_SUPPLIER_SUCCESS,PowerUnitSupplierActions
    } from '../../types/PowerUnitSupplierTypes'

//fetch all countries
export function fetchAllPowerUnitSuppliersLoading():PowerUnitSupplierActions{

    return {
        type:FETCH_POWER_UNIT_SUPPLIERS_LOADING
    }

}

// fetch all countries success
export function fetchAllPowerUnitSuppliersSuccess(powerUnitSuppliers:[]):PowerUnitSupplierActions{
    return {
        type:FETCH_POWER_UNIT_SUPPLIERS_SUCCESS,
        payload:powerUnitSuppliers
    }

}

// fetch all countries failure
export function fetchAllPowerUnitSuppliersFailure(error:string):PowerUnitSupplierActions{
    return {
        type:DELETE_POWER_UNIT_SUPPLIER_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllPowerUnitSuppliers(){

    return (dispatch:Dispatch)=>{
        console.log("fetchAllPowerUnitSuppliersLoading");
        dispatch(fetchAllPowerUnitSuppliersLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/PowerUnitSupplier')
        .then((res)=>{
            console.log(res);
            
            const suppliers=res.data 
            dispatch(fetchAllPowerUnitSuppliersSuccess(suppliers))
        }).catch((err)=>{
            dispatch(fetchAllPowerUnitSuppliersFailure(err))

        })
    }

    
}



export function addNewPowerUnitSuppliersLoading():PowerUnitSupplierActions{
    return{
        type:CREATE_POWER_UNIT_SUPPLIER_LOADING
    }
}

//  add new  driver success
export function addNewPowerUnitSuppliersSuccess(supplier:PowerUnitSupplierState):PowerUnitSupplierActions{
    return {
        type:CREATE_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:supplier
    }

}

// add new driver failure
export function addNewPowerUnitSuppliersError(error:string):PowerUnitSupplierActions{
    return {
        type:CREATE_POWER_UNIT_SUPPLIER_FAILURE,
        payload:error
    }
}

// add driver data

export function addNewPowerUnitSuppliers(supplier:PowerUnitSupplierState){

    return (dispatch:Dispatch)=>{

        console.log("addNewDriver dispetched");
        
        dispatch(addNewPowerUnitSuppliersLoading())
        //axios call 
        axios.post('https://localhost:6001/api/v1/PowerUnitSupplier',supplier)
        .then((res)=>{
            console.log(res);
            const createdSupplier=res.data 
            dispatch(addNewPowerUnitSuppliersSuccess(createdSupplier))
        }).catch((err)=>{
            console.log(err);
            dispatch(addNewPowerUnitSuppliersError(err))
        })
    }
}

//  add new  driver success
export function removePowerUnitSuppliersLoading():PowerUnitSupplierActions{
    return {
        type:DELETE_POWER_UNIT_SUPPLIER_LOADING
    }
}


//  add new  driver success
export function removePowerUnitSuppliersSuccess(technicalStaffId:number):PowerUnitSupplierActions{
    return {
        type:DELETE_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:technicalStaffId
    }
}

// add new driver failure
export function removePowerUnitSuppliersError(error:string):PowerUnitSupplierActions{
    return {
        type:DELETE_POWER_UNIT_SUPPLIER_FAILURE,
        payload:error
    }
}

// add driver data

export function removePowerUnitSuppliers(technicalStaffId:number){

    return (dispatch:Dispatch)=>{

        console.log("removeDriver dispetched");
        
        dispatch(removePowerUnitSuppliersLoading())
        //axios call 
        console.log(technicalStaffId);
        
        axios.delete(`https://localhost:6001/api/v1/PowerUnitSupplier/${technicalStaffId}`)
        .then((res)=>{
            console.log(res);
            const driver=res.data 
            dispatch(removePowerUnitSuppliersSuccess(technicalStaffId))
        }).catch((err)=>{
            console.log(err);
            dispatch(removePowerUnitSuppliersError(err))
        })
    }
}


export function selectPowerUnitSuppliersSuccess(supplier:PowerUnitSupplierState):PowerUnitSupplierActions{
    return {
        type:SELECT_POWER_UNIT_SUPPLIER_SUCCESS,
        payload:supplier
    }

}

export function selectPowerUnitSuppliers(supplier:PowerUnitSupplierState){
    return (dispatch:Dispatch)=>{

        console.log("selectTechnicalStaff dispetched");
        
        dispatch(selectPowerUnitSuppliersSuccess(supplier))
      
    }
}