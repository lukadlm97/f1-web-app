//reducer case constants
export const FETCH_DRIVERS_LOADING="FETCH_DRIVERS_LOADING"
export const FETCH_DRIVERS_SUCCESS="FETCH_DRIVERS_SUCCESS"
export const FETCH_DRIVERS_FAILURE="FETCH_DRIVERS_FAILURE"

//types 
export type DriverReducerState={
    drivers:DriverState[],
    isLoading:boolean, 
    error:string
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

export type DriverActions= FetchAllDriversLoadingAction | FetchAllDriversSuccessAction | FetchAllDriversFailureAction