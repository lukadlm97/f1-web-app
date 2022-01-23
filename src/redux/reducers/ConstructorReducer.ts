import {ConstructorReducerState,FETCH_COUNSTRUCTORS_LOADING, FETCH_COUNSTRUCTORS_SUCCESS, FETCH_COUNSTRUCTORS_FAILURE, 
    CREATE_COUNSTRUCTOR_SUCCESS, CREATE_COUNSTRUCTOR_LOADING, CREATE_COUNSTRUCTOR_FAILURE,
    UPDATE_COUNSTRUCTOR_SUCCESS,  UPDATE_COUNSTRUCTOR_LOADING,  UPDATE_COUNSTRUCTOR_FAILURE,
    REMOVE_COUNSTRUCTOR_SUCCESS, REMOVE_COUNSTRUCTOR_LOADING, REMOVE_COUNSTRUCTOR_FAILURE,
    SELECT_COUNSTRUCTOR_SUCCESS
} from '../../types/ConstructorTypes'

const initiState:ConstructorReducerState={
    constructors:[],
    selectedConstructor:null,
    isLoading:false, 
    error:'',
    isLoadingCreation:false,
    isSuccessfullyDoneCreation:false,
    isErrorOccuredOnCreation:false,
    isLoadingUpdate:false,
    isSuccessfullyDoneUpdate:false,
    isErrorOccuredOnUpdate:false,
    isLoadingRemove:false,
    isSuccessfullyDoneRemove:false,
    isErrorOccuredOnRemove:false
}

export default function constructorReducer(state:ConstructorReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_COUNSTRUCTORS_LOADING:
            return {
                ...state, 
                isLoading:true
            }
        //if fetching is successful 
        case FETCH_COUNSTRUCTORS_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                constructors:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_COUNSTRUCTORS_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }
            case CREATE_COUNSTRUCTOR_LOADING:
                return {
                    ...state, 
                    isLoadingCreation:true, 
                    isLoadingUpdate:false,
                    isLoadingRemove:false,
                    isSuccessfullyDoneCreation:false,
                    isErrorOccuredOnCreation:false,
                    isSuccessfullyDoneUpdate:false,
                    isErrorOccuredOnUpdate:false,
                    isSuccessfullyDoneRemove:false,
                    isErrorOccuredOnRemove:false
                }
            //if fetching is successful 
            case CREATE_COUNSTRUCTOR_SUCCESS:
                return {
                    ...state, 
                    isLoadingCreation:false,
                    
                    isSuccessfullyDoneCreation:true,
                    constructors:[...state.constructors,action.payload],
                    error:'',
                }
            //if fetching has any errors
            case CREATE_COUNSTRUCTOR_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isErrorOccuredOnCreation:true, 
                    error:action.payload
                }

                case UPDATE_COUNSTRUCTOR_LOADING:
                    return {
                        ...state, 
                        isLoadingUpdate:true,
                        isLoadingCreation:false, 
                        isLoadingRemove:false,
                        isSuccessfullyDoneCreation:false,
                        isErrorOccuredOnCreation:false,
                        isSuccessfullyDoneUpdate:false,
                        isErrorOccuredOnUpdate:false,
                        isSuccessfullyDoneRemove:false,
                        isErrorOccuredOnRemove:false
                    }
                //if fetching is successful 
                case UPDATE_COUNSTRUCTOR_SUCCESS:
                    return {
                        ...state, 
                        isLoadingUpdate:false,
                        isSuccessfullyDoneUpdate:true,
                        constructors:[...state.constructors.filter(x=>x.id!==action.payload.id),action.payload],
                        error:'',
                    }
                //if fetching has any errors
                case UPDATE_COUNSTRUCTOR_FAILURE:
                    return {
                        ...state,
                        isLoadingUpdate:false,
                        isErrorOccuredOnUpdate:true, 
                        error:action.payload
                    }

                    case REMOVE_COUNSTRUCTOR_LOADING:
                        return {
                            ...state, 
                            isLoadingCreation:false,
                            isLoadingUpdate:false,
                            isLoadingRemove:true,
                            isSuccessfullyDoneCreation:false,
                            isErrorOccuredOnCreation:false,
                            isSuccessfullyDoneUpdate:false,
                            isErrorOccuredOnUpdate:false,
                            isSuccessfullyDoneRemove:false,
                            isErrorOccuredOnRemove:false
                        }
                    //if fetching is successful 
                    case REMOVE_COUNSTRUCTOR_SUCCESS:
                        return {
                            ...state, 
                            isLoadingRemove:false,
                            isSuccessfullyDoneRemove:true,
                            constructors:[...state.constructors.filter(x=>x.id!==action.payload)],
                            error:'',
                        }
                    //if fetching has any errors
                    case REMOVE_COUNSTRUCTOR_FAILURE:
                        return {
                            ...state,
                            isLoadingRemove:false,
                            isErrorOccuredOnRemove:true,
                            error:action.payload
                        }

                          //if fetching has any errors
                    case SELECT_COUNSTRUCTOR_SUCCESS:
                        return {
                            ...state,
                            isSuccessfullyDoneCreation:false,
                            isErrorOccuredOnCreation:false,
                            isSuccessfullyDoneUpdate:false,
                            isErrorOccuredOnUpdate:false,
                            isSuccessfullyDoneRemove:false,
                            isErrorOccuredOnRemove:false,
                            selectedConstructor:action.payload
                        }

        default:
            return state

    }



}