import {TechnicalStaffReducerState,
    FETCH_TECHNICAL_STAFF_LOADING, FETCH_TECHNICAL_STAFF_SUCCESS, FETCH_TECHNICAL_STAFF_FAILURE,
    CREATE_TECHNICAL_STAFF_LOADING,CREATE_TECHNICAL_STAFF_SUCCESS,CREATE_TECHNICAL_STAFF_FAILURE
} from '../../types/TechnicalStuffTypes'

const initiState:TechnicalStaffReducerState={
    technicalStaffs:[],
    isLoading:false, 
    error:'',
    isLoadingCreation:false,
    isSuccessfullyDoneCreation:false,
    isErrorOccured:false
}

export default function technicalStaffReducer(state:TechnicalStaffReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_TECHNICAL_STAFF_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_TECHNICAL_STAFF_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                technicalStaffs:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_TECHNICAL_STAFF_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

            case CREATE_TECHNICAL_STAFF_LOADING:
            return {
                ...state,
                isLoadingCreation:true,
            }

        case CREATE_TECHNICAL_STAFF_FAILURE:
            return {
                ...state,
                isLoadingCreation:false,
                error:action.payload,
                isErrorOccured:true
            }

        
        case CREATE_TECHNICAL_STAFF_SUCCESS:
            return {
                ...state,
                isLoadingCreation:false,
                error:'',
                isSuccessfullyDoneCreation:true,
                technicalStaffs:[...state.technicalStaffs,action.payload]
            }    

        default:
            return state

    }



}