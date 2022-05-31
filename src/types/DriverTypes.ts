//reducer case constants
export const FETCH_DRIVERS_LOADING="FETCH_DRIVERS_LOADING"
export const FETCH_DRIVERS_SUCCESS="FETCH_DRIVERS_SUCCESS"
export const FETCH_DRIVERS_FAILURE="FETCH_DRIVERS_FAILURE"
export const ADD_DRIVER_LOADING="ADD_DRIVER_LOADING"
export const ADD_DRIVER_SUCCESS="ADD_DRIVER_SUCCESS"
export const ADD_DRIVER_ERROR="ADD_DRIVER_ERROR"
export const REMOVE_DRIVER_LOADING="REMOVE_DRIVER_LOADING"
export const REMOVE_DRIVER_SUCCESS="REMOVE_DRIVER_SUCCESS"
export const REMOVE_DRIVER_ERROR="REMOVE_DRIVER_ERROR"
export const SELECT_DRIVER_SUCCESS="SELECT_DRIVER_SUCCESS"
export const SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION="SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION"
export const SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION="SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION"
export const UPDATE_DRIVER_LOADING="UPDATE_DRIVER_LOADING"
export const UPDATE_DRIVER_SUCCESS="UPDATE_DRIVER_SUCCESS"
export const UPDATE_DRIVER_ERROR="UPDATE_DRIVER_ERROR"
export const CHANGE_DRIVER_CITIZENSHIP_LOADING="CHANGE_DRIVER_CITIZENSHIP_LOADING"
export const CHANGE_DRIVER_CITIZENSHIP_SUCCESS="CHANGE_DRIVER_CITIZENSHIP_SUCCESS"
export const CHANGE_DRIVER_CITIZENSHIP_ERROR="CHANGE_DRIVER_CITIZENSHIP_ERROR"
export const RETIREMENT_DRIVER_LOADING="RETIREMENT_DRIVER_LOADING"
export const RETIREMENT_DRIVER_SUCCESS="RETIREMENT_DRIVER_SUCCESS"
export const RETIREMENT_DRIVER_ERROR="RETIREMENT_DRIVER_ERROR"
export const COMEBACK_DRIVER_LOADING="COMEBACK_DRIVER_LOADING"
export const COMEBACK_DRIVER_SUCCESS="COMEBACK_DRIVER_SUCCESS"
export const COMEBACK_DRIVER_ERROR="COMEBACK_DRIVER_ERROR"
export const FETCH_DRIVER_LOADING="FETCH_DRIVER_LOADING"
export const FETCH_DRIVER_SUCCESS="FETCH_DRIVER_SUCCESS"
export const FETCH_DRIVER_FAILURE="FETCH_DRIVER_FAILURE"



//types 
export type DriverReducerState={
    drivers:DriverState[],
    selectedDriver:DriverState|null,
    isLoading:boolean, 
    error:string
    isLoadingAddNewDriver:boolean
    isCreated:boolean
    isErrorOccuredOnCreation:boolean
    isLoadingRemoveDriver:boolean
    isLoadingUpdateDriver:boolean
    isUpdated:boolean
    isErrorOccuredOnUpdate:boolean
    isLoadingChangeCitizenshipDriver:boolean
    isCitizenshipChanged:boolean
    isErrorOccuredOnChangeCitizenship:boolean
    isLoadingDriverRetirment:boolean
    isDriverRetirment:boolean
    isErrorOccuredOnDriverDriver:boolean
    isRemoveConfirmation:boolean
    isLoadingDriverComeback:boolean
    isSuccessDriverComeback:boolean
    isErrorDriverComeback:boolean
    driver:DriverState|null
    isLoadingDriver:boolean 
    errorDriver:string
}

export type DriverState={
    id:number
    number:number 
    code:string 
    forename:string
    surname:string
    dateOfBirth:Date
    isRetired:boolean
    countryId:number
}


//action types
export type FetchAllDriversLoadingAction={
    type: typeof FETCH_DRIVERS_LOADING
    payload?: string
}
export type FetchAllDriversSuccessAction={
    type: typeof FETCH_DRIVERS_SUCCESS
    payload: []
}
export type FetchAllDriversFailureAction={
    type: typeof FETCH_DRIVERS_FAILURE
    payload: string
}

export type AddNewDriverLoadingAction={
    type:typeof ADD_DRIVER_LOADING
    payload?:string
}

export type AddNewDriverSuccessAction={
    type:typeof ADD_DRIVER_SUCCESS
    payload:DriverState
}

export type AddNewDriverErrorAction={
    type:typeof ADD_DRIVER_ERROR
    payload:string
}

export type RemoveDriverLoadingAction={
    type:typeof REMOVE_DRIVER_LOADING
    payload?:string
}

export type RemoveDriverSuccessAction={
    type:typeof REMOVE_DRIVER_SUCCESS
    payload:number
}

export type RemoveDriverErrorAction={
    type:typeof REMOVE_DRIVER_ERROR
    payload:string
}

export type SelectDriverSuccessAction={
    type:typeof SELECT_DRIVER_SUCCESS
    payload:DriverState|null
}

export type UpdateDriverLoadingAction={
    type:typeof UPDATE_DRIVER_LOADING
    payload?:string
}

export type UpdateDriverSuccessAction={
    type:typeof UPDATE_DRIVER_SUCCESS
    payload:DriverState
}

export type UpdateDriverErrorAction={
    type:typeof UPDATE_DRIVER_ERROR
    payload:string
}


export type ChangeDriverCitizenshipLoadingAction={
    type:typeof CHANGE_DRIVER_CITIZENSHIP_LOADING
    payload?:string
}

export type ChangeDriverCitizenshipSuccessAction={
    type:typeof CHANGE_DRIVER_CITIZENSHIP_SUCCESS
    payload:DriverState
}

export type ChangeDriverCitizenshipErrorAction={
    type:typeof CHANGE_DRIVER_CITIZENSHIP_ERROR
    payload:string
}

export type DriverRetirmentLoadingAction={
    type:typeof RETIREMENT_DRIVER_LOADING
    payload?:string
}

export type DriverRetirmentSuccessAction={
    type:typeof RETIREMENT_DRIVER_SUCCESS
    payload:DriverState
}

export type DriverRetirmentErrorAction={
    type:typeof RETIREMENT_DRIVER_ERROR
    payload:string
}

export type RemoveConfirmationSelectionOptionAction={
    type:typeof SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION
    payload:boolean
}
export type RetirmentConfirmationSelectionOptionAction={
    type:typeof SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION
    payload:boolean
}

export type DriverComebackLoadingAction={
    type:typeof COMEBACK_DRIVER_LOADING
    payload?:string
}

export type DriverComebackSuccessAction={
    type:typeof COMEBACK_DRIVER_SUCCESS
    payload:DriverState
}

export type DriverComebackErrorAction={
    type:typeof COMEBACK_DRIVER_ERROR
    payload:string
}

export type FetchDriverLoadingAction={
    type:typeof FETCH_DRIVER_LOADING
    payload?:string
}

export type FetchDriverSuccessAction={
    type:typeof FETCH_DRIVER_SUCCESS
    payload:DriverState
}

export type FetchDriverErrorAction={
    type:typeof FETCH_DRIVER_FAILURE
    payload:string
}

export type DriverActions= FetchAllDriversLoadingAction | FetchAllDriversSuccessAction | FetchAllDriversFailureAction
| AddNewDriverLoadingAction | AddNewDriverSuccessAction | AddNewDriverErrorAction
|RemoveDriverLoadingAction|RemoveDriverErrorAction|RemoveDriverSuccessAction
|SelectDriverSuccessAction|RemoveConfirmationSelectionOptionAction|RetirmentConfirmationSelectionOptionAction
|UpdateDriverLoadingAction|UpdateDriverSuccessAction|UpdateDriverErrorAction
|ChangeDriverCitizenshipLoadingAction|ChangeDriverCitizenshipSuccessAction|ChangeDriverCitizenshipErrorAction
|DriverRetirmentLoadingAction|DriverRetirmentSuccessAction|DriverRetirmentErrorAction
|DriverComebackLoadingAction|DriverComebackSuccessAction|DriverComebackErrorAction|FetchDriverLoadingAction
|FetchDriverErrorAction|FetchDriverSuccessAction