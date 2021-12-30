import {DriverReducerState, FETCH_DRIVERS_LOADING, FETCH_DRIVERS_FAILURE, FETCH_DRIVERS_SUCCESS} from '../../types/DriverTypes'

const initiState:DriverReducerState={
    drivers:[],
    isLoading:false, 
    error:''
}

export default function countryReducer(state:DriverReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_DRIVERS_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_DRIVERS_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                drivers:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_DRIVERS_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

        default:
            return state

    }



}