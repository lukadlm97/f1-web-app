import {ConstructorPowerUnitSupplierReducerState,
    FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING, FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS, 
    FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
    START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING,START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
    START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS, END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING,
    END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
    CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING,CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE,
    CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS,
    SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS
} from '../../types/ConstructorPowerUnitSupplier'

const initiState:ConstructorPowerUnitSupplierReducerState={
    constructorsPowerUnit:null,
    isLoading:false, 
    error:'',
    isLoadingContractStart:false,
    isSuccessfullyContractStarted:false,
    isErrorOccuredContractStart:false,
    isLoadingContractEnd:false,
    isSuccessfullyContractEnded:false,
    isErrorOccuredOnContractEnd:false,
    selectedContract:null,
    isNotCreatedYet:false
}

export default function constructorsPowerUnitSupplierReducer(state:ConstructorPowerUnitSupplierReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING:
            return {
                ...state, 
                isLoading:true,
                isNotCreatedYet:false
            }
        //if fetching is successful 
        case FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                constructorsPowerUnit:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload,
                isNotCreatedYet:action.creationStatus
            }

            case START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING:
            return {
                ...state, 
                isLoadingContractStart:true,
                isSuccessfullyContractStart:false,
                isErrorOccuredContractStart:false,
            }

        case START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE:
            return {
                ...state,
                isLoadingContractStart:false,
                error:action.payload,
                isErrorOccuredContractStart:true
            }

        
        case START_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS:
            return {
                ...state,
                isLoadingContractStart:false,
                error:'',
                isSuccessfullyContractStart:true,
                constructorsPowerUnit:action.payload
            }    

            case CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING:
                return {
                    ...state, 
                    isLoadingContractStart:true,
                    isSuccessfullyContractStart:false,
                    isErrorOccuredContractStart:false,
                }
    
            case CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE:
                return {
                    ...state,
                    isLoadingContractStart:false,
                    error:action.payload,
                    isErrorOccuredContractStart:true
                }
    
            
            case CHANGE_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS:
                return {
                    ...state,
                    isLoadingContractStart:false,
                    error:'',
                    isSuccessfullyContractStart:true,
                    constructorsPowerUnit:action.payload
                }

            case END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_LOADING:
                return {
                    ...state,
                    isLoadingContractEnd:true,
                    isSuccessfullyContractEnd:false,
                    isErrorOccuredOnContractEnd:false,
                }
    
            case END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_FAILURE:
                return {
                    ...state,
                    isLoadingContractEnd:false,
                    error:action.payload,
                    isErrorOccuredOnDelete:true
                }
    
            
            case END_CONTRACT_CONSTUCTORS_POWER_UNIT_SUPPLIER_SUCCESS:
                return {
                    ...state,
                    isLoadingContractEnd:false,
                    error:'',
                    isSuccessfullyContractEnd:true,
                    constructorsPowerUnit:null
                }
                
                
                case SELECT_CONTRACT_FOR_POWER_UNIT_SUPPLIER_SUCCESS:
                    return{
                        ...state,
                        selectedStaff:action.payload
                    }

        default:
            return state

    }



}