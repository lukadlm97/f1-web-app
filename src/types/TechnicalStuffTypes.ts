

//reducer case constants
export const FETCH_TECHNICAL_STAFF_LOADING="FETCH_TECHNICAL_STAFF_LOADING"
export const FETCH_TECHNICAL_STAFF_SUCCESS="FETCH_TECHNICAL_STAFF_SUCCESS"
export const FETCH_TECHNICAL_STAFF_FAILURE="FETCH_TECHNICAL_STAFF_FAILURE"
export const CREATE_TECHNICAL_STAFF_LOADING="CREATE_TECHNICAL_STAFF_LOADING"
export const CREATE_TECHNICAL_STAFF_SUCCESS="CREATE_TECHNICAL_STAFF_SUCCESS"
export const CREATE_TECHNICAL_STAFF_FAILURE="CREATE_TECHNICAL_STAFF_FAILURE"
export const DELETE_TECHNICAL_STAFF_LOADING="DELETE_TECHNICAL_STAFF_LOADING"
export const DELETE_TECHNICAL_STAFF_SUCCESS="DELETE_TECHNICAL_STAFF_SUCCESS"
export const DELETE_TECHNICAL_STAFF_FAILURE="DELETE_TECHNICAL_STAFF_FAILURE"
export const SELECT_TECHNICAL_STAFF_SUCCESS="SELECT_TECHNICAL_STAFF_SUCCESS"

//types 
export type TechnicalStaffReducerState={
    technicalStaffs:TechnicalStaffState[],
    isLoading:boolean, 
    error:string,
    isLoadingCreation:boolean,
    isSuccessfullyDoneCreation:boolean,
    isErrorOccured:boolean,
    isLoadingDelete:boolean,
    isSuccessfullyDoneDelete:boolean,
    isErrorOccuredOnDelete:boolean,
    selectedStaff:TechnicalStaffState|null
}

export type TechnicalStaffState={
    id:number
    forename:string 
    surname:string 
    dateOfBirth:Date
    title:string
    educationDetails:string
    countryId:number
}

//action types
export type FetchAllTechnicalStaffLoadingAction={
    type: typeof FETCH_TECHNICAL_STAFF_LOADING
    payload?: string
}
export type FetchAllTechnicalStaffSuccessAction={
    type: typeof FETCH_TECHNICAL_STAFF_SUCCESS
    payload: []
}
export type FetchAllTechnicalStaffFailureAction={
    type: typeof FETCH_TECHNICAL_STAFF_FAILURE
    payload: string
}
export type AddNewTechnicalStaffLoadingAction={
    type: typeof CREATE_TECHNICAL_STAFF_LOADING
    payload?: string
}
export type AddNewTechnicalStaffSuccessAction={
    type: typeof CREATE_TECHNICAL_STAFF_SUCCESS
    payload: TechnicalStaffState
}
export type AddNewTechnicalStaffFailureAction={
    type: typeof CREATE_TECHNICAL_STAFF_FAILURE
    payload: string
}
export type DeleteTechnicalStaffLoadingAction={
    type: typeof DELETE_TECHNICAL_STAFF_LOADING
    payload?: string
}
export type DeleteTechnicalStaffSuccessAction={
    type: typeof DELETE_TECHNICAL_STAFF_SUCCESS
    payload: number
}
export type DeleteTechnicalStaffFailureAction={
    type: typeof DELETE_TECHNICAL_STAFF_FAILURE
    payload: string
}
export type SelectTechnicalStaffAction={
    type: typeof SELECT_TECHNICAL_STAFF_SUCCESS
    payload: TechnicalStaffState
}

export type TechnicalStaffActions= 
FetchAllTechnicalStaffLoadingAction | FetchAllTechnicalStaffSuccessAction | FetchAllTechnicalStaffFailureAction|
AddNewTechnicalStaffLoadingAction|AddNewTechnicalStaffSuccessAction|AddNewTechnicalStaffFailureAction|
DeleteTechnicalStaffLoadingAction|DeleteTechnicalStaffSuccessAction|DeleteTechnicalStaffFailureAction|
SelectTechnicalStaffAction