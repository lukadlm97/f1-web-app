import {ConstructorsTechnicalStaffReducerState,
    FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING, FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS, FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
    START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING,START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,
    START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE, END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING,
    END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS,END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE,
    SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS
} from '../../types/ConstructorsTechnicalStaffTypes'

const initiState:ConstructorsTechnicalStaffReducerState={
    technicalStaffs:[],
    isLoading:false, 
    error:'',
    isLoadingContractStart:false,
    isSuccessfullyContractStart:false,
    isErrorOccuredContractStart:false,
    isLoadingContractEnd:false,
    isSuccessfullyContractEnd:false,
    isErrorOccuredOnContractEnd:false,
    selectedStaff:null
}

export default function constructorsTechnicalStaffReducer(state:ConstructorsTechnicalStaffReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_CONSTUCTORS_TECHNICAL_STAFF_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                technicalStaffs:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_CONSTUCTORS_TECHNICAL_STAFF_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

            case START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING:
            return {
                ...state, 
                isLoadingContractStart:true,
                isSuccessfullyContractStart:false,
                isErrorOccuredContractStart:false,
            }

        case START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE:
            return {
                ...state,
                isLoadingContractStart:false,
                error:action.payload,
                isErrorOccuredContractStart:true
            }

        
        case START_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS:
            return {
                ...state,
                isLoadingContractStart:false,
                error:'',
                isSuccessfullyContractStart:true,
                technicalStaffs:[...state.technicalStaffs,action.payload]
            }    

            case END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_LOADING:
                return {
                    ...state,
                    isLoadingContractEnd:true,
                    isSuccessfullyContractEnd:false,
                    isErrorOccuredOnContractEnd:false,
                }
    
            case END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_FAILURE:
                return {
                    ...state,
                    isLoadingContractEnd:false,
                    error:action.payload,
                    isErrorOccuredOnDelete:true
                }
    
            
            case END_CONTRACT_CONSTUCTORS_TECHNICAL_STAFF_SUCCESS:
                return {
                    ...state,
                    isLoadingContractEnd:false,
                    error:'',
                    isSuccessfullyContractEnd:true,
                    technicalStaffs:[...state.technicalStaffs.filter(x=>x.id!==action.payload)]
                }
                
                
                case SELECT_CONTRACT_FOR_TECHNICAL_STAFF_SUCCESS:
                    return{
                        ...state,
                        selectedStaff:action.payload
                    }

        default:
            return state

    }



}