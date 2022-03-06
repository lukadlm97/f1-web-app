//reducer case constants
export const FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING="FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING"
export const FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS="FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS"
export const FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE="FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE"
export const FETCH_CURRENT_DRIVERS_CONSTRUCTOR_LOADING="FETCH_CURRENT_DRIVERS_CONSTRUCTOR_LOADING"
export const FETCH_CURRENT_DRIVERS_CONSTRUCTOR_SUCCESS="FETCH_CURRENT_DRIVERS_CONSTRUCTOR_SUCCESS"
export const FETCH_CURRENT_DRIVERS_CONSTRUCTOR_FAILURE="FETCH_CURRENT_DRIVERS_CONSTRUCTOR_FAILURE"
export const FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING="FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING"
export const FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS="FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS"
export const FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE="FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE"
export const FETCH_HISTORY_DRIVERS_CONSTRUCTOR_LOADING="FETCH_HISTORY_DRIVERS_CONSTRUCTOR_LOADING"
export const FETCH_HISTORY_DRIVERS_CONSTRUCTOR_SUCCESS="FETCH_HISTORY_DRIVERS_CONSTRUCTOR_SUCCESS"
export const FETCH_HISTORY_DRIVERS_CONSTRUCTOR_FAILURE="FETCH_HISTORY_DRIVERS_CONSTRUCTOR_FAILURE"
export const START_CONTRACT_LOADING="START_CONTRACT_LOADING"
export const START_CONTRACT_SUCCESS="START_CONTRACT_SUCCESS"
export const START_CONTRACT_FAILURE="START_CONTRACT_FAILURE"
export const END_CONTRACT_LOADING="END_CONTRACT_LOADING"
export const END_CONTRACT_SUCCESS="END_CONTRACT_SUCCESS"
export const END_CONTRACT_FAILURE="END_CONTRACT_FAILURE"
export const SELECT_CONTRACT="SELECT_CONTRACT"
export const SELECT_CONTRACT_SUCCESS="SELECT_CONTRACT_SUCCESS"

//types 
export type ContractReducerState={
    currentDriverContract:ContractState|null,
    isLoadingCurrentDriverContract:boolean, 
    isDriverInContract:boolean,
    driverContractsHistory:ContractState[],
    isLoadingDriverContractsHistory:boolean, 
    isDriverHaveContractsHistory:boolean,
    currentConstructorContracts:ContractState[],
    isLoadingCurrentConstructorContracts:boolean,
    isContructorHaveActiveContracts:boolean,
    constructorContractsHistory:ContractState[],
    isLoadingConstructorContractsHistory:boolean,
    isConstructorHaveContractHistory:boolean,
    isLoadingStartContract:boolean,
    isSuccessfullyStartedContract:boolean,
    isErrorOnContractStart:boolean,
    isLoadingEndContract:boolean,
    isSuccessfullyEndedContract:boolean,
    isErrorOnContractEnd:boolean,
    selectedContract:ContractState|null
}

export type ContractState={
    id:number
    estaminateYears:number 
    estaminateValue:number 
    constructorId:number
    driverId:number
    driverRolesId:number
}

export type ContractInsertState={
    estaminateYears:number 
    estaminateValue:number 
    constructorId:number
    driverId:number
    driverRolesId:number
}



//action types
export type FetchCurrentConstructorsContractsLoadingAction={
    type: typeof FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING
    payload?: string
}
export type FetchCurrentConstructorsContractsSuccessAction={
    type: typeof FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS
    payload: []
}
export type FetchCurrentConstructorsContractsFailureAction={
    type: typeof FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE
    payload: string
}

export type FetchHistoryOfConstructorsContractsLoadingAction={
    type: typeof FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING
    payload?: string
}
export type FetchHistoryOfConstructorsContractsSuccessAction={
    type: typeof FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS
    payload: []
}
export type FetchHistoryOfConstructorsContractsFailureAction={
    type: typeof FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE
    payload: string
}

export type FetchCurrentDriverContractLoadingAction={
    type: typeof FETCH_CURRENT_DRIVERS_CONSTRUCTOR_LOADING
    payload?: string
}
export type FetchCurrentDriverContractSuccessAction={
    type: typeof FETCH_CURRENT_DRIVERS_CONSTRUCTOR_SUCCESS
    payload: ContractState
}
export type FetchCurrentDriverContractFailureAction={
    type: typeof FETCH_CURRENT_DRIVERS_CONSTRUCTOR_FAILURE
    payload: string
}

export type FetchHistoryOfDriversContractsLoadingAction={
    type: typeof FETCH_HISTORY_DRIVERS_CONSTRUCTOR_LOADING
    payload?: string
}
export type FetchHistoryOfDriversContractsSuccessAction={
    type: typeof FETCH_HISTORY_DRIVERS_CONSTRUCTOR_SUCCESS
    payload: []
}
export type FetchHistoryOfDriversContractsFailureAction={
    type: typeof FETCH_HISTORY_DRIVERS_CONSTRUCTOR_FAILURE
    payload: string
}

export type StartContractLoadingAction={
    type: typeof START_CONTRACT_LOADING
    payload?: string
}
export type StartContractSuccessAction={
    type: typeof START_CONTRACT_SUCCESS
    payload: ContractState
}
export type StartContractFailureAction={
    type: typeof START_CONTRACT_FAILURE
    payload: string
}

export type EndContractLoadingAction={
    type: typeof END_CONTRACT_LOADING
    payload?: string
}
export type EndContractSuccessAction={
    type: typeof END_CONTRACT_SUCCESS
    payload: number
}
export type EndContractFailureAction={
    type: typeof END_CONTRACT_FAILURE
    payload: string
}

export type SelectContractAction={
    type: typeof SELECT_CONTRACT
    payload: ContractState
}
export type SelectContractSuccessAction={
    type: typeof SELECT_CONTRACT_SUCCESS
    payload: ContractState
}



export type ContractActions= FetchCurrentConstructorsContractsLoadingAction | FetchCurrentConstructorsContractsFailureAction |
 FetchCurrentConstructorsContractsSuccessAction|
FetchCurrentDriverContractFailureAction|FetchCurrentDriverContractLoadingAction|FetchCurrentDriverContractSuccessAction|
FetchHistoryOfConstructorsContractsFailureAction | FetchHistoryOfConstructorsContractsLoadingAction |
 FetchHistoryOfConstructorsContractsSuccessAction|
FetchHistoryOfDriversContractsFailureAction|FetchHistoryOfDriversContractsLoadingAction|
FetchHistoryOfDriversContractsSuccessAction|
StartContractFailureAction|StartContractLoadingAction|StartContractSuccessAction|
EndContractFailureAction|EndContractSuccessAction|EndContractLoadingAction|
SelectContractAction|SelectContractSuccessAction