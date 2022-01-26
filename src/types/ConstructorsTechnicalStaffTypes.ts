import {TechnicalStaffState} from './TechnicalStuffTypes'
//reducer case constants
export const FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING="FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING"
export const FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS="FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS"
export const FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE="FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE"
export const START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING="START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING"
export const START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS="START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS"
export const START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE="START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE"
export const END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING="END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING"
export const END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS="END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS"
export const END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE="END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE"
export const SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS="SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS"

//types 
export type ConstructorsTechnicalStaffReducerState={
    technicalStaffs:ConstructorsTechnicalStaffState[],
    isLoading:boolean, 
    error:string,
    isLoadingContractStart:boolean,
    isSuccessfullyContractStart:boolean,
    isErrorOccuredContractStart:boolean,
    isLoadingContractEnd:boolean,
    isSuccessfullyContractEnd:boolean,
    isErrorOccuredOnContractEnd:boolean,
    selectedStaff:ConstructorsTechnicalStaffState|null
}

export type ConstructorsTechnicalStaffState={
    id:number
    technicalStaffRoleId:number 
    constructorId:number 
    dateOfSign:Date
    title:string
    technicalStaff:TechnicalStaffState
}

export type ConstructorsTechnicalStaffInsertState={
    technicalStaffId:number
    technicalStaffRoleId:number
    constructorId:number
}

//action types
export type FetchConstructorsTechnicalStaffLoadingAction={
    type: typeof FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING
    payload?: string
}
export type FetchConstructorsTechnicalStaffSuccessAction={
    type: typeof FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS
    payload: []
}
export type FetchConstructorsTechnicalStaffFailureAction={
    type: typeof FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE
    payload: string
}
export type StartNewContractConstructorsTechnicalStaffLoadingAction={
    type: typeof START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING
    payload?: string
}
export type StartNewContractConstructorsTechnicalStaffSuccessAction={
    type: typeof START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS
    payload: ConstructorsTechnicalStaffState
}
export type StartNewContractConstructorsTechnicalStaffFailureAction={
    type: typeof START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE
    payload: string
}
export type EndContractConstructorsTechnicalStaffLoadingAction={
    type: typeof END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING
    payload?: string
}
export type EndContractConstructorsTechnicalStaffSuccessAction={
    type: typeof END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS
    payload: number
}
export type EndContractConstructorsTechnicalStaffFailureAction={
    type: typeof END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE
    payload: string
}
export type SelectConstructorsTechnicalStaffAction={
    type: typeof SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS
    payload: ConstructorsTechnicalStaffState|null
}

export type ConstructorsTechnicalStaffActions= 
FetchConstructorsTechnicalStaffLoadingAction|
FetchConstructorsTechnicalStaffSuccessAction|
FetchConstructorsTechnicalStaffFailureAction|
StartNewContractConstructorsTechnicalStaffLoadingAction|
StartNewContractConstructorsTechnicalStaffSuccessAction|
StartNewContractConstructorsTechnicalStaffFailureAction|
EndContractConstructorsTechnicalStaffLoadingAction|
EndContractConstructorsTechnicalStaffSuccessAction|
EndContractConstructorsTechnicalStaffFailureAction|
SelectConstructorsTechnicalStaffAction