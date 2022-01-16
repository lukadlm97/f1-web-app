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

//types 
export type DriverReducerState={
    drivers:DriverState[],
    isLoading:boolean, 
    error:string
    isLoadingAddNewDriver:boolean
    isCreated:boolean
    isErrorOccuredOnCreation:boolean
    isLoadingRemoveDriver:boolean
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





export type DriverActions= FetchAllDriversLoadingAction | FetchAllDriversSuccessAction | FetchAllDriversFailureAction
| AddNewDriverLoadingAction | AddNewDriverSuccessAction | AddNewDriverErrorAction
|RemoveDriverLoadingAction|RemoveDriverErrorAction|RemoveDriverSuccessAction