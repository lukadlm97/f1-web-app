import {Dispatch} from 'redux'
import axios from 'axios'

import {CompetitionActions, 
    FETCH_COMPETITIONS_LOADING, FETCH_COMPETITIONS_SUCCESS, FETCH_COMPETITIONS_FAILURE} from '../../types/CompetitionTypes'


//fetch all countries
export function fetchAllCompetitionsLoading():CompetitionActions{

    return {
        type:FETCH_COMPETITIONS_LOADING
    }

}

// fetch all countries success
export function fetchAllCompetitionsSuccess(competitions:[]):CompetitionActions{
    return {
        type:FETCH_COMPETITIONS_SUCCESS,
        payload:competitions
    }

}

// fetch all countries failure
export function fetchAllCompetitionsFailure(error:string):CompetitionActions{
    return {
        type:FETCH_COMPETITIONS_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllCompetitions(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllCompetitionsLoading())
        console.log('fired fetchAllCompetitions');
        
        //axios call 
        axios.get('https://localhost:6001/api/v1/Competition')
        .then((res)=>{
            const competitions=res.data 
            console.log(competitions);
            dispatch(fetchAllCompetitionsSuccess(competitions))
        }).catch((err)=>{
            console.log(err);
            
            dispatch(fetchAllCompetitionsFailure(err))

        })
    }

    
}