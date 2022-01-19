import {TechnicalStaffReducerState,
    FETCH_TECHNICAL_STAFF_LOADING, FETCH_TECHNICAL_STAFF_SUCCESS, FETCH_TECHNICAL_STAFF_FAILURE,
    CREATE_TECHNICAL_STAFF_LOADING,CREATE_TECHNICAL_STAFF_SUCCESS,CREATE_TECHNICAL_STAFF_FAILURE,
    DELETE_TECHNICAL_STAFF_LOADING,DELETE_TECHNICAL_STAFF_SUCCESS,DELETE_TECHNICAL_STAFF_FAILURE,
    SELECT_TECHNICAL_STAFF_SUCCESS
} from '../../types/TechnicalStuffTypes'

const initiState:TechnicalStaffReducerState={
    technicalStaffs:[],
    isLoading:false, 
    error:'',
    isLoadingCreation:false,
    isSuccessfullyDoneCreation:false,
    isErrorOccured:false,
    isLoadingDelete:false,
    isSuccessfullyDoneDelete:false,
    isErrorOccuredOnDelete:false,
    selectedStaff:null
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

            case DELETE_TECHNICAL_STAFF_LOADING:
                return {
                    ...state,
                    isLoadingDelete:true,
                }
    
            case DELETE_TECHNICAL_STAFF_FAILURE:
                return {
                    ...state,
                    isLoadingDelete:false,
                    error:action.payload,
                    isErrorOccuredOnDelete:true
                }
    
            
            case DELETE_TECHNICAL_STAFF_SUCCESS:
                return {
                    ...state,
                    isLoadingDelete:false,
                    error:'',
                    isSuccessfullyDoneDelete:true,
                    isErrorOccuredOnDelete:false,
                    technicalStaffs:[...state.technicalStaffs.filter(x=>x.id!==action.payload)]
                }   
                case SELECT_TECHNICAL_STAFF_SUCCESS:
                    return{
                        ...state,
                        selectedStaff:action.payload
                    }

        default:
            return state

    }



}