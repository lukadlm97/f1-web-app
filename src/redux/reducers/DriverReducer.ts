import { DriveEtaSharp } from '@mui/icons-material'
import {DriverReducerState, FETCH_DRIVERS_LOADING, FETCH_DRIVERS_FAILURE, FETCH_DRIVERS_SUCCESS
,ADD_DRIVER_LOADING,ADD_DRIVER_ERROR,ADD_DRIVER_SUCCESS
,REMOVE_DRIVER_ERROR,REMOVE_DRIVER_LOADING,REMOVE_DRIVER_SUCCESS} from '../../types/DriverTypes'

const initiState:DriverReducerState={
    drivers:[],
    isLoading:false, 
    error:'',
    isLoadingAddNewDriver:false,
    isCreated:false,
    isErrorOccuredOnCreation:false,
    isLoadingRemoveDriver:false
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
                isLoadingAddNewDriver:true
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
            console.log(action.payload);
            console.log(state.drivers);
            console.log([...state.drivers.filter(x=>x.id!==action.payload)]);
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

        default:
            return state

    }



}