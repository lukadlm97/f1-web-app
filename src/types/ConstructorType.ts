//reducer case constants
export const FETCH_COUNSTRUCTORS_LOADING="FETCH_COUNSTRUCTORS_LOADING"
export const FETCH_COUNSTRUCTORS_SUCCESS="FETCH_COUNSTRUCTORS_SUCCESS"
export const FETCH_COUNSTRUCTORS_FAILURE="FETCH_COUNSTRUCTORS_FAILURE"
export const CREATE_COUNSTRUCTOR_LOADING="CREATE_COUNSTRUCTOR_LOADING"
export const CREATE_COUNSTRUCTOR_SUCCESS="CREATE_COUNSTRUCTOR_SUCCESS"
export const CREATE_COUNSTRUCTOR_FAILURE="CREATE_COUNSTRUCTOR_FAILURE"
export const UPDATE_COUNSTRUCTOR_LOADING="UPDATE_COUNSTRUCTOR_LOADING"
export const UPDATE_COUNSTRUCTOR_SUCCESS="UPDATE_COUNSTRUCTOR_SUCCESS"
export const UPDATE_COUNSTRUCTOR_FAILURE="UPDATE_COUNSTRUCTOR_FAILURE"
export const REMOVE_COUNSTRUCTOR_LOADING="REMOVE_COUNSTRUCTOR_LOADING"
export const REMOVE_COUNSTRUCTOR_SUCCESS="REMOVE_COUNSTRUCTOR_SUCCESS"
export const REMOVE_COUNSTRUCTOR_FAILURE="REMOVE_COUNSTRUCTOR_FAILURE"
export const SELECT_COUNSTRUCTOR_SUCCESS="SELECT_COUNSTRUCTOR_SUCCESS"

//types 
export type ConstructorReducerState={
    constructors:ConstructorState[],
    selectedConstructor:ConstructorState|null
    isLoading:boolean, 
    error:string,
    isLoadingCreation:boolean,
    isSuccessfullyDoneCreation:boolean,
    isErrorOccuredOnCreation:boolean,
    isLoadingUpdate:boolean,
    isSuccessfullyDoneUpdate:boolean,
    isErrorOccuredOnUpdate:boolean,
    isLoadingRemove:boolean,
    isSuccessfullyDoneRemove:boolean,
    isErrorOccuredOnRemove:boolean
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

export type CreateConstructorLoadingAction={
    type: typeof CREATE_COUNSTRUCTOR_LOADING
    payload?: string
}
export type CreateConstructorSuccessAction={
    type: typeof CREATE_COUNSTRUCTOR_SUCCESS
    payload: ConstructorState
}
export type CreateConstructorFailureAction={
    type: typeof CREATE_COUNSTRUCTOR_FAILURE
    payload: string
}

export type UpdateConstructorLoadingAction={
    type: typeof UPDATE_COUNSTRUCTOR_LOADING
    payload?: string
}
export type UpdateConstructorSuccessAction={
    type: typeof UPDATE_COUNSTRUCTOR_SUCCESS
    payload: ConstructorState
}
export type UpdateConstructorFailureAction={
    type: typeof UPDATE_COUNSTRUCTOR_FAILURE
    payload: string
}

export type DeleteConstructorLoadingAction={
    type: typeof REMOVE_COUNSTRUCTOR_LOADING
    payload?: string
}
export type DeleteConstructorSuccessAction={
    type: typeof REMOVE_COUNSTRUCTOR_SUCCESS
    payload: number
}
export type DeleteConstructorFailureAction={
    type: typeof REMOVE_COUNSTRUCTOR_FAILURE
    payload: string
}
export type SelectConstructorAction={
    type: typeof SELECT_COUNSTRUCTOR_SUCCESS
    payload: ConstructorState
}



export type ConstructorActions= FetchAllConstructorsLoadingAction | FetchAllConstructorsSuccessAction | FetchAllConstructorsFailureAction|
CreateConstructorLoadingAction|CreateConstructorSuccessAction|CreateConstructorFailureAction|
DeleteConstructorLoadingAction|DeleteConstructorSuccessAction|DeleteConstructorFailureAction|
UpdateConstructorSuccessAction|UpdateConstructorLoadingAction|UpdateConstructorFailureAction|
SelectConstructorAction