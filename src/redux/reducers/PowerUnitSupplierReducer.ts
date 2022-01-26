import {PowerUnitSupplierReducerState,
    FETCH_POWER_UNIT_SUPPLIERS_LOADING, FETCH_POWER_UNIT_SUPPLIERS_SUCCESS, FETCH_POWER_UNIT_SUPPLIERS_FAILURE,
    CREATE_POWER_UNIT_SUPPLIER_LOADING,CREATE_POWER_UNIT_SUPPLIER_SUCCESS,CREATE_POWER_UNIT_SUPPLIER_FAILURE,
    DELETE_POWER_UNIT_SUPPLIER_LOADING,DELETE_POWER_UNIT_SUPPLIER_SUCCESS,DELETE_POWER_UNIT_SUPPLIER_FAILURE,
    SELECT_POWER_UNIT_SUPPLIER_SUCCESS
} from '../../types/PowerUnitSupplierTypes'

const initiState:PowerUnitSupplierReducerState={
    suppliers:[],
    isLoading:false, 
    error:'',
    isLoadingCreation:false,
    isSuccessfullyDoneCreation:false,
    isErrorOccured:false,
    isLoadingDelete:false,
    isSuccessfullyDoneDelete:false,
    isErrorOccuredOnDelete:false,
    selectedSupplier:null
}

export default function powerUnitSupplierReducer(state:PowerUnitSupplierReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_POWER_UNIT_SUPPLIERS_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_POWER_UNIT_SUPPLIERS_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                suppliers:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_POWER_UNIT_SUPPLIERS_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

            case CREATE_POWER_UNIT_SUPPLIER_LOADING:
            return {
                ...state,
                isLoadingCreation:true,
            }

        case CREATE_POWER_UNIT_SUPPLIER_FAILURE:
            return {
                ...state,
                isLoadingCreation:false,
                error:action.payload,
                isErrorOccured:true
            }

        
        case CREATE_POWER_UNIT_SUPPLIER_SUCCESS:
            return {
                ...state,
                isLoadingCreation:false,
                error:'',
                isSuccessfullyDoneCreation:true,
                suppliers:[...state.suppliers,action.payload]
            }    

            case DELETE_POWER_UNIT_SUPPLIER_LOADING:
                return {
                    ...state,
                    isLoadingDelete:true,
                }
    
            case DELETE_POWER_UNIT_SUPPLIER_FAILURE:
                return {
                    ...state,
                    isLoadingDelete:false,
                    error:action.payload,
                    isErrorOccuredOnDelete:true
                }
    
            
            case DELETE_POWER_UNIT_SUPPLIER_SUCCESS:
                return {
                    ...state,
                    isLoadingDelete:false,
                    error:'',
                    isSuccessfullyDoneDelete:true,
                    isErrorOccuredOnDelete:false,
                    suppliers:[...state.suppliers.filter(x=>x.id!==action.payload)]
                }   
                case SELECT_POWER_UNIT_SUPPLIER_SUCCESS:
                    return{
                        ...state,
                        selectedSupplier:action.payload
                    }

        default:
            return state

    }



}