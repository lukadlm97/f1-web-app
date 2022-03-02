

//reducer case constants
export const FETCH_POWER_UNIT_SUPPLIERS_LOADING="FETCH_POWER_UNIT_SUPPLIERS_LOADING"
export const FETCH_POWER_UNIT_SUPPLIERS_SUCCESS="FETCH_POWER_UNIT_SUPPLIERS_SUCCESS"
export const FETCH_POWER_UNIT_SUPPLIERS_FAILURE="FETCH_POWER_UNIT_SUPPLIERS_FAILURE"
export const CREATE_POWER_UNIT_SUPPLIER_LOADING="CREATE_POWER_UNIT_SUPPLIER_LOADING"
export const CREATE_POWER_UNIT_SUPPLIER_SUCCESS="CREATE_POWER_UNIT_SUPPLIER_SUCCESS"
export const CREATE_POWER_UNIT_SUPPLIER_FAILURE="CREATE_POWER_UNIT_SUPPLIER_FAILURE"
export const DELETE_POWER_UNIT_SUPPLIER_LOADING="DELETE_POWER_UNIT_SUPPLIER_LOADING"
export const DELETE_POWER_UNIT_SUPPLIER_SUCCESS="DELETE_POWER_UNIT_SUPPLIER_SUCCESS"
export const DELETE_POWER_UNIT_SUPPLIER_FAILURE="DELETE_POWER_UNIT_SUPPLIER_FAILURE"
export const SELECT_POWER_UNIT_SUPPLIER_SUCCESS="SELECT_POWER_UNIT_SUPPLIER_SUCCESS"

//types 
export type PowerUnitSupplierReducerState={
    suppliers:PowerUnitSupplierState[],
    isLoading:boolean, 
    error:string,
    isLoadingCreation:boolean,
    isSuccessfullyDoneCreation:boolean,
    isErrorOccured:boolean,
    isLoadingDelete:boolean,
    isSuccessfullyDoneDelete:boolean,
    isErrorOccuredOnDelete:boolean,
    selectedSupplier:PowerUnitSupplierState|null,
    isNotCreatedYet:boolean,
}

export type PowerUnitSupplierState={
    id:number
    supplierName:string 
    countryId:number
}

//action types
export type FetchAllPowerUnitSupplierLoadingAction={
    type: typeof FETCH_POWER_UNIT_SUPPLIERS_LOADING
    payload?: string
}
export type FetchAllPowerUnitSupplierSuccessAction={
    type: typeof FETCH_POWER_UNIT_SUPPLIERS_SUCCESS
    payload: []
}
export type FetchAllPowerUnitSupplierFailureAction={
    type: typeof FETCH_POWER_UNIT_SUPPLIERS_FAILURE
    payload: string
}
export type AddNewPowerUnitSupplierLoadingAction={
    type: typeof CREATE_POWER_UNIT_SUPPLIER_LOADING
    payload?: string
}
export type AddNewPowerUnitSupplierSuccessAction={
    type: typeof CREATE_POWER_UNIT_SUPPLIER_SUCCESS
    payload: PowerUnitSupplierState
}
export type AddNewPowerUnitSupplierFailureAction={
    type: typeof CREATE_POWER_UNIT_SUPPLIER_FAILURE
    payload: string
}
export type DeletePowerUnitSupplierLoadingAction={
    type: typeof DELETE_POWER_UNIT_SUPPLIER_LOADING
    payload?: string
}
export type DeletePowerUnitSupplierSuccessAction={
    type: typeof DELETE_POWER_UNIT_SUPPLIER_SUCCESS
    payload: number
}
export type DeletePowerUnitSupplierFailureAction={
    type: typeof DELETE_POWER_UNIT_SUPPLIER_FAILURE
    payload: string
}
export type SelectPowerUnitSupplierAction={
    type: typeof SELECT_POWER_UNIT_SUPPLIER_SUCCESS
    payload: PowerUnitSupplierState
}

export type PowerUnitSupplierActions= 
FetchAllPowerUnitSupplierLoadingAction|
FetchAllPowerUnitSupplierSuccessAction|
FetchAllPowerUnitSupplierFailureAction|
AddNewPowerUnitSupplierLoadingAction|
AddNewPowerUnitSupplierSuccessAction|
AddNewPowerUnitSupplierFailureAction|
DeletePowerUnitSupplierLoadingAction|
DeletePowerUnitSupplierSuccessAction|
DeletePowerUnitSupplierFailureAction|
SelectPowerUnitSupplierAction