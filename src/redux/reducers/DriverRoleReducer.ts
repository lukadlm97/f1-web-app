import { DriverRoleReducerState,FETCH_DRIVER_ROLE_LOADING,FETCH_DRIVER_ROLE_SUCCESS,FETCH_DRIVER_ROLE_FAILURE } 
from "../../types/DriverRoleTypes";


const initState:DriverRoleReducerState={ 
    driverRoles:[],
    isLoading:false, 
    error:''
}


export default function driverRoleReducer(state:DriverRoleReducerState=initState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_DRIVER_ROLE_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_DRIVER_ROLE_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                driverRoles:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_DRIVER_ROLE_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

        default:
            return state

    }



}








