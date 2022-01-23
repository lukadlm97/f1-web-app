import {CompetitionReducerState, 
    FETCH_COMPETITIONS_LOADING, FETCH_COMPETITIONS_SUCCESS, FETCH_COMPETITIONS_FAILURE} from '../../types/CompetitionTypes'

const initiState:CompetitionReducerState={
    competitions:[],
    isLoading:false, 
    error:''
}

export default function competitionReducer(state:CompetitionReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_COMPETITIONS_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_COMPETITIONS_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                competitions:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_COMPETITIONS_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

        default:
            return state

    }



}