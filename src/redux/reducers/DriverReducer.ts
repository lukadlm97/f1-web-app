import { DriveEtaSharp } from '@mui/icons-material'
import {DriverReducerState, FETCH_DRIVERS_LOADING, FETCH_DRIVERS_FAILURE, FETCH_DRIVERS_SUCCESS
,ADD_DRIVER_LOADING,ADD_DRIVER_ERROR,ADD_DRIVER_SUCCESS
,REMOVE_DRIVER_ERROR,REMOVE_DRIVER_LOADING,REMOVE_DRIVER_SUCCESS, DriverState, SELECT_DRIVER_SUCCESS, 
UPDATE_DRIVER_LOADING, UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_ERROR, CHANGE_DRIVER_CITIZENSHIP_LOADING, CHANGE_DRIVER_CITIZENSHIP_ERROR, CHANGE_DRIVER_CITIZENSHIP_SUCCESS} from '../../types/DriverTypes'

const initiState:DriverReducerState={
    drivers:[],
    selectedDriver:null,
    isLoading:false, 
    error:'',
    isLoadingAddNewDriver:false,
    isCreated:false,
    isErrorOccuredOnCreation:false,
    isLoadingRemoveDriver:false,
    isLoadingUpdateDriver:false,
    isUpdated:false,
    isErrorOccuredOnUpdate:false,
    isLoadingChangeCitizenshipDriver:false,
    isCitizenshipChanged:false,
    isErrorOccuredOnChangeCitizenship:false
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

        case ADD_DRIVER_LOADING:
            return {
                ...state,
                isLoadingAddNewDriver:true,
                isUpdated:false,
            }

        case ADD_DRIVER_ERROR:
            return {
                ...state,
                isLoadingAddNewDriver:false,
                error:action.payload,
                isErrorOccuredOnCreation:true
            }

        
        case ADD_DRIVER_SUCCESS:
            return {
                ...state,
                isLoadingAddNewDriver:false,
                error:'',
                isCreated:true,
                drivers:[...state.drivers,action.payload]
            }    

            
        case REMOVE_DRIVER_LOADING:
            return {
                ...state,
                isLoadingRemoveDriver:true
            }

        case REMOVE_DRIVER_SUCCESS:
            return {
                ...state,
                isLoadingRemoveDriver:false,
                error:'',
                drivers:[...state.drivers.filter(x=>x.id!==action.payload)]
            }

        
        case REMOVE_DRIVER_ERROR:
            return {
                ...state,
                isLoadingRemoveDriver:false,
                error:action.payload
            }  

        case SELECT_DRIVER_SUCCESS:
            return{
                ...state,
                selectedDriver:action.payload
            }

            case UPDATE_DRIVER_LOADING:
                return {
                    ...state,
                    isLoadingUpdateDriver:true,
                    isCreated:false
                }
    
            case UPDATE_DRIVER_ERROR:
                return {
                    ...state,
                    isLoadingUpdateDriver:false,
                    error:action.payload,
                    isErrorOccuredOnUpdate:true
                }
    
            
            case UPDATE_DRIVER_SUCCESS:
                return {
                    ...state,
                    isLoadingUpdateDriver:false,
                    error:'',
                    isUpdated:true,
                    drivers:[...state.drivers.filter(x=>x.id!==action.payload.id),action.payload]
                }    

                case CHANGE_DRIVER_CITIZENSHIP_LOADING:
                    return {
                        ...state,
                        isLoadingChangeCitizenshipDriver:true
                    }
        
                case CHANGE_DRIVER_CITIZENSHIP_ERROR:
                    return {
                        ...state,
                        isLoadingChangeCitizenshipDriver:false,
                        error:action.payload,
                        isErrorOccuredOnChangeCitizenship:true
                    }
        
                
                case CHANGE_DRIVER_CITIZENSHIP_SUCCESS:
                    return {
                        ...state,
                        isLoadingChangeCitizenshipDriver:false,
                        isCitizenshipChanged:true,
                        error:'',
                        drivers:[...state.drivers.filter(x=>x.id!==action.payload.id),action.payload]
                    }  


        default:
            return state

    }



}