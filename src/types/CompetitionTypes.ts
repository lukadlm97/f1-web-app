//reducer case constants
export const FETCH_COMPETITIONS_LOADING="FETCH_COMPETITIONS_LOADING"
export const FETCH_COMPETITIONS_SUCCESS="FETCH_COMPETITIONS_SUCCESS"
export const FETCH_COMPETITIONS_FAILURE="FETCH_COMPETITIONS_FAILURE"

//types 
export type CompetitionReducerState={
    competitions:CompetitionState[],
    isLoading:boolean, 
    error:string
}

export type CompetitionState={
    id:number
    championshipNameShort:string 
    championshipNameFull:string 
    organisedBy:string
    firstEntry:string
    lastEntry:string
    totalCompetitions:string
}

//action types
export type FetchAllCompetitionsLoadingAction={
    type: typeof FETCH_COMPETITIONS_LOADING
    payload?: string
}
export type FetchAllCompetitionsSuccessAction={
    type: typeof FETCH_COMPETITIONS_SUCCESS
    payload: []
}
export type FetchAllCompetitionFailureAction={
    type: typeof FETCH_COMPETITIONS_FAILURE
    payload: string
}

export type CompetitionActions= FetchAllCompetitionsLoadingAction | FetchAllCompetitionsSuccessAction | FetchAllCompetitionFailureAction