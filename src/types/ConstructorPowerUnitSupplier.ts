export const FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING="FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING"
export const FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS="FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS"
export const FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE="FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE"
export const FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_LOADING="FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_LOADING"
export const FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_SUCCESS="FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_SUCCESS"
export const FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_FAILURE="FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_FAILURE"
export const START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING="START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING"
export const START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS="START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS"
export const START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE="START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE"
export const END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING="END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING"
export const END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS="END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS"
export const END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE="END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE"
export const CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING="CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING"
export const CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS="CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS"
export const CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE="CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE"
export const SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS="SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS"

//types 
export type ConstructorPowerUnitSupplierReducerState={
    constructorsPowerUnit:ConstructorPowerUnitSupplierState|null,
    isLoading:boolean, 
    error:string,
    isLoadingContractStart:boolean,
    isSuccessfullyContractStarted:boolean,
    isErrorOccuredContractStart:boolean,
    isLoadingContractEnd:boolean,
    isSuccessfullyContractEnded:boolean,
    isErrorOccuredOnContractEnd:boolean,
    selectedContract:ConstructorPowerUnitSupplierState|null,
    isNotCreatedYet:boolean,
    isLoadingHistory:boolean,
    suppliersHistory:ConstructorPowerUnitSupplierState[]|null,
    notProvidedHistory:boolean
}

export type ConstructorPowerUnitSupplierState={
    id:number
    constructorId:number 
    powerUnitSupplierId:number 
    yearEstaminate:number
    startDate:Date
    endDate:Date
    isFabricConnection:boolean
}

export type ConstructorPowerUnitSupplierStateInsertState={
    constructorId:number
    powerUnitSupplierId:number
    yearEstaminate:number
    isFabricConnection:boolean
}

//action types
export type FetchConstructorsPowerUnitSupplierLoadingAction={
    type: typeof FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    payload?: string
}
export type FetchConstructorsPowerUnitSupplierSuccessAction={
    type: typeof FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS
    payload: ConstructorPowerUnitSupplierState
}
export type FetchConstructorsPowerUnitSupplierFailureAction={
    type: typeof FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE
    payload: string
    isNotCreatedYet:boolean
}
export type StartNewContractConstructorsPowerUnitSupplierLoadingAction={
    type: typeof START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    payload?: string
}
export type StartNewContractConstructorsPowerUnitSupplierSuccessAction={
    type: typeof START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS
    payload: ConstructorPowerUnitSupplierState
}
export type StartNewContractConstructorsPowerUnitSupplierFailureAction={
    type: typeof START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE
    payload: string
}
export type ChangeConstructorsPowerUnitSupplierLoadingAction={
    type: typeof CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    payload?: string
}
export type ChangeConstructorsPowerUnitSupplierSuccessAction={
    type: typeof CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS
    payload: ConstructorPowerUnitSupplierState
    idForRemove:number
}
export type ChangeConstructorsPowerUnitSupplierFailureAction={
    type: typeof CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE
    payload: string
}
export type EndContractConstructorsPowerUnitSupplierLoadingAction={
    type: typeof END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING
    payload?: string
}
export type EndContractConstructorsPowerUnitSupplierSuccessAction={
    type: typeof END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS
    payload: number
}
export type EndContractConstructorsPowerUnitSupplierFailureAction={
    type: typeof END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE
    payload: string
}
export type SelectConstructorsPowerUnitSupplierAction={
    type: typeof SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS
    payload: ConstructorPowerUnitSupplierState|null
}

export type FetchConstructorsPowerUnitSupplierHistoryLoadingAction={
    type: typeof FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_LOADING
    payload?: string
}
export type FetchConstructorsPowerUnitSupplierHistorySuccessAction={
    type: typeof FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_SUCCESS
    payload: ConstructorPowerUnitSupplierState[]
}
export type FetchConstructorsPowerUnitSupplierHistoryFailureAction={
    type: typeof FETCH_CONSTUCTORS_POWER_UNIT_HISTORY_SUPPLIER_FAILURE
    payload: string
}

export type ConstructorsPowerUnitSupplierActions= 
FetchConstructorsPowerUnitSupplierLoadingAction|
FetchConstructorsPowerUnitSupplierSuccessAction|
FetchConstructorsPowerUnitSupplierFailureAction|
StartNewContractConstructorsPowerUnitSupplierLoadingAction|
StartNewContractConstructorsPowerUnitSupplierSuccessAction|
StartNewContractConstructorsPowerUnitSupplierFailureAction|
EndContractConstructorsPowerUnitSupplierLoadingAction|
EndContractConstructorsPowerUnitSupplierSuccessAction|
EndContractConstructorsPowerUnitSupplierFailureAction|
ChangeConstructorsPowerUnitSupplierFailureAction|
ChangeConstructorsPowerUnitSupplierLoadingAction|
ChangeConstructorsPowerUnitSupplierSuccessAction|
SelectConstructorsPowerUnitSupplierAction|
FetchConstructorsPowerUnitSupplierHistoryLoadingAction|
FetchConstructorsPowerUnitSupplierHistorySuccessAction|
FetchConstructorsPowerUnitSupplierHistoryFailureAction