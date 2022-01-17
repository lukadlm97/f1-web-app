import {ConstructorReducerState,FETCH_COUNSTRUCTORS_LOADING, FETCH_COUNSTRUCTORS_SUCCESS, FETCH_COUNSTRUCTORS_FAILURE} from '../../types/ConstructorType'

const initiState:ConstructorReducerState={
    constructors:[],
    isLoading:false, 
    error:'',
    isLoadingCreation:false,
    isSuccessfullyDoneCreation:false,
    isErrorOccured:false,
    isLoadingUpdate:false,
    isSuccessfullyDoneUpdate:false
}

export default function countryReducer(state:ConstructorReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_COUNSTRUCTORS_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_COUNSTRUCTORS_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                constructors:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_COUNSTRUCTORS_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

        default:
            return state

    }



}