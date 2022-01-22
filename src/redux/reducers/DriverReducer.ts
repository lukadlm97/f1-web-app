import { DriveEtaSharp } from '@mui/icons-material'
import {DriverReducerState, FETCH_DRIVERS_LOADING, FETCH_DRIVERS_FAILURE, FETCH_DRIVERS_SUCCESS,
ADD_DRIVER_LOADING,ADD_DRIVER_ERROR,ADD_DRIVER_SUCCESS,
REMOVE_DRIVER_ERROR,REMOVE_DRIVER_LOADING,REMOVE_DRIVER_SUCCESS, DriverState, SELECT_DRIVER_SUCCESS, 
UPDATE_DRIVER_LOADING, UPDATE_DRIVER_SUCCESS,UPDATE_DRIVER_ERROR, 
CHANGE_DRIVER_CITIZENSHIP_LOADING, CHANGE_DRIVER_CITIZENSHIP_ERROR, CHANGE_DRIVER_CITIZENSHIP_SUCCESS,
RETIREMENT_DRIVER_LOADING, RETIREMENT_DRIVER_SUCCESS,RETIREMENT_DRIVER_ERROR,
SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION,SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION, COMEBACK_DRIVER_LOADING, COMEBACK_DRIVER_ERROR, COMEBACK_DRIVER_SUCCESS
} from '../../types/DriverTypes'

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
    isErrorOccuredOnChangeCitizenship:false,
    isLoadingDriverRetirment:false,
    isDriverRetirment:false,
    isErrorOccuredOnDriverDriver:false,
    isRemoveConfirmation:false,
    isLoadingDriverComeback:false,
    isSuccessDriverComeback:false,
    isErrorDriverComeback:false
}

export default function driverReducer(state:DriverReducerState=initiState, action:any){

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
            
            
        case RETIREMENT_DRIVER_LOADING:
            return {
                ...state,
                isLoadingDriverRetirment:true
            }

        case RETIREMENT_DRIVER_ERROR:
            return {
                ...state,
                isLoadingDriverRetirment:false,
                error:action.payload,
                isErrorOccuredOnDriverDriver:true
            }

        
        case RETIREMENT_DRIVER_SUCCESS:
            return {
                ...state,
                isLoadingDriverRetirment:false,
                isDriverRetirment:true,
                error:'',
                drivers:[...state.drivers.filter(x=>x.id!==action.payload.id),action.payload]
            }  

        case SELECT_REMOVE_DRIVER_CONFIRMATION_OPTION:
            return {
                ...state,
                isRemoveConfirmation:true,
                error:''
            }  

        case SELECT_RETAIRMENT_DRIVER_CONFIRMATION_OPTION:
            return {
                ...state,
                isRemoveConfirmation:false,
                error:'',
            }  

        case COMEBACK_DRIVER_LOADING:
            return {
                ...state,
                isLoadingDriverComeback:true
            }

        case COMEBACK_DRIVER_ERROR:
            return {
                ...state,
                isLoadingDriverComeback:false,
                error:action.payload,
                isErrorDriverComeback:true
            }

        
        case COMEBACK_DRIVER_SUCCESS:
            return {
                ...state,
                isLoadingDriverComeback:false,
                isSuccessDriverComeback:true,
                error:'',
                drivers:[...state.drivers.filter(x=>x.id!==action.payload.id),action.payload]
            }  
    

        default:
            return state

    }



}