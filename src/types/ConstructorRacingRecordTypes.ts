//reducer case constants
export const FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING="FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING"
export const FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS="FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS"
export const FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE="FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE"
export const CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING="CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING"
export const CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS="CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS"
export const CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE="CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE"
export const UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING="UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING"
export const UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS="UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS"
export const UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE="UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE"
export const FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING="FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING"
export const FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS="FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS"
export const FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE="FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE"
export const SET_TO_NULL_CONSTUCTOR_RACING_RECORD="SET_TO_NULL_CONSTUCTOR_RACING_RECORD"

//types 
export type ConstructorsRacingRecordReducerState={
    constructorsRacingRecords:ConstructorsRacingRecordState[],
    selectedConstructorRacingRecord:ConstructorsRacingRecordState|null
    isLoading:boolean, 
    error:string,
    isLoadingCreation:boolean,
    isSuccessfullyDoneCreation:boolean,
    isErrorOccuredOnCreation:boolean,
    isLoadingUpdate:boolean,
    isSuccessfullyDoneUpdate:boolean,
    isErrorOccuredOnUpdate:boolean,
    isLoadingSingleFetch:boolean,
    isSuccessfullySingleFetch:boolean,
    isErrorOccuredOnSingleFetch:boolean,
    isNotCreatedYet:boolean
}

export type ConstructorsRacingRecordState={
    id:number
    constructorChampionships:number 
    driverChampionships:number 
    raceVictories:number
    podiums:number
    polPositions:number
    fastesLaps:number
    constructorId:number
    competitionId:number
}

//action types
export type FetchAllConstructorsRacingRecordsLoadingAction={
    type: typeof FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING
    payload?: string
}
export type FetchAllConstructorsRacingRecordsSuccessAction={
    type: typeof FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS
    payload: []
}
export type FetchAllConstructorsRacingRecordsFailureAction={
    type: typeof FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE
    payload: string
}

export type CreateConstructorsRacingRecordsLoadingAction={
    type: typeof CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING
    payload?: string
}
export type CreateConstructorsRacingRecordsSuccessAction={
    type: typeof CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS
    payload: ConstructorsRacingRecordState
}
export type CreateConstructorsRacingRecordsFailureAction={
    type: typeof CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE
    payload: string
}

export type UpdateConstructorsRacingRecordsLoadingAction={
    type: typeof UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING
    payload?: string
}
export type UpdateConstructorsRacingRecordsSuccessAction={
    type: typeof UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS
    payload: ConstructorsRacingRecordState
}
export type UpdateConstructorsRacingRecordsFailureAction={
    type: typeof UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE
    payload: string
}

export type FetchConstructorRacingRecordsLoadingAction={
    type: typeof FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING
    payload?: string
}
export type FetchConstructorRacingRecordsSuccessAction={
    type: typeof FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS
    payload: ConstructorsRacingRecordState
}
export type FetchConstructorRacingRecordsFailureAction={
    type: typeof FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE
    payload: string,
    isNotCreatedYet:boolean
}

export type SetConstructorRacingRecordsAction={
    type: typeof SET_TO_NULL_CONSTUCTOR_RACING_RECORD
    payload: ConstructorsRacingRecordState|null
}



export type ConstructorsRacingRecordsActions= FetchAllConstructorsRacingRecordsLoadingAction|
FetchAllConstructorsRacingRecordsSuccessAction|
FetchAllConstructorsRacingRecordsFailureAction|
CreateConstructorsRacingRecordsLoadingAction|
CreateConstructorsRacingRecordsSuccessAction|
CreateConstructorsRacingRecordsFailureAction|
UpdateConstructorsRacingRecordsLoadingAction|
UpdateConstructorsRacingRecordsSuccessAction|
UpdateConstructorsRacingRecordsFailureAction|
FetchConstructorRacingRecordsLoadingAction|
FetchConstructorRacingRecordsSuccessAction|
FetchConstructorRacingRecordsFailureAction|
SetConstructorRacingRecordsAction