//reducer case constants
export const FETCH_COUNSTRUCTORS_LOADING="FETCH_COUNSTRUCTORS_LOADING"
export const FETCH_COUNSTRUCTORS_SUCCESS="FETCH_COUNSTRUCTORS_SUCCESS"
export const FETCH_COUNSTRUCTORS_FAILURE="FETCH_COUNSTRUCTORS_FAILURE"

//types 
export type ConstructorReducerState={
    constructors:ConstructorState[],
    isLoading:boolean, 
    error:string,
    isLoadingCreation:boolean,
    isSuccessfullyDoneCreation:boolean,
    isErrorOccured:boolean,
    isLoadingUpdate:boolean,
    isSuccessfullyDoneUpdate:boolean
}

export type ConstructorState={
    id:number
    shortName:string 
    fullName:string 
    base:string
    website:string
    firstEntry:string
    lastEntry:string
    isActive:boolean
    countryId:number
}

//action types
export type FetchAllConstructorsLoadingAction={
    type: typeof FETCH_COUNSTRUCTORS_LOADING
    payload?: string
}
export type FetchAllConstructorsSuccessAction={
    type: typeof FETCH_COUNSTRUCTORS_SUCCESS
    payload: []
}
export type FetchAllConstructorsFailureAction={
    type: typeof FETCH_COUNSTRUCTORS_FAILURE
    payload: string
}

export type ConstructorActions= FetchAllConstructorsLoadingAction | FetchAllConstructorsSuccessAction | FetchAllConstructorsFailureAction