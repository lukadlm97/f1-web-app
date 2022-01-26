import { StaffRoleReducerState,FETCH_STAFF_ROLE_LOADING,FETCH_STAFF_ROLE_FAILURE,FETCH_STAFF_ROLE_SUCCESS } from "../../types/StaffRoleTypes";


const initState:StaffRoleReducerState={ 
    staffRoles:[],
    isLoading:false, 
    error:''
}


export default function staffRoleReducer(state:StaffRoleReducerState=initState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_STAFF_ROLE_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_STAFF_ROLE_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                staffRoles:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_STAFF_ROLE_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

        default:
            return state

    }



}








