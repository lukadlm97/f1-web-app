import {ConstructorsRacingRecordReducerState,FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING,  FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE,
    FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS, 
    CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING, CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS, CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE,
    UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING,  UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS,  UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE,
    FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING, FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS,FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE, SET_TO_NULL_CONSTUCTOR_RACING_RECORD
} from '../../types/ConstructorRacingRecordTypes'

const initiState:ConstructorsRacingRecordReducerState={
    constructorsRacingRecords:[],
    selectedConstructorRacingRecord:null,
    isLoading:false, 
    error:'',
    isLoadingCreation:false,
    isSuccessfullyDoneCreation:false,
    isErrorOccuredOnCreation:false,
    isLoadingUpdate:false,
    isSuccessfullyDoneUpdate:false,
    isErrorOccuredOnUpdate:false,
    isLoadingSingleFetch:false,
    isSuccessfullySingleFetch:false,
    isErrorOccuredOnSingleFetch:false,
    isNotCreatedYet:false,
}

export default function constructorRacingRecordsReducer(state:ConstructorsRacingRecordReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_COUNSTRUCTORS_RACING_RECORD_LOADING:
            return {
                ...state, 
                isLoading:true, 
                isLoadingCreation:false,
                isSuccessfullyDoneCreation:false,
                isErrorOccuredOnCreation:false,
                isLoadingUpdate:false,
                isSuccessfullyDoneUpdate:false,
                isErrorOccuredOnUpdate:false,
                isLoadingSingleFetch:false,
                isSuccessfullySingleFetch:false,
                isErrorOccuredOnSingleFetch:false
            }
        //if fetching is successful 
        case FETCH_COUNSTRUCTORS_RACING_RECORD_SUCCESS:
            return {
                ...state, 
                isLoading:false, 
                constructorsRacingRecords:action.payload,
                error:'',
            }
        //if fetching has any errors
        case FETCH_COUNSTRUCTORS_RACING_RECORD_FAILURE:
            return {
                ...state,
                isLoading:false, 
                error:action.payload
            }

            case CREATE_COUNSTRUCTOR_RACING_RECORD_LOADING:
                return {
                    ...state, 
                    isLoading:false, 
                    isLoadingCreation:true,
                    isSuccessfullyDoneCreation:false,
                    isErrorOccuredOnCreation:false,
                    isLoadingUpdate:false,
                    isSuccessfullyDoneUpdate:false,
                    isErrorOccuredOnUpdate:false,
                    isLoadingSingleFetch:false,
                    isSuccessfullySingleFetch:false,
                    isErrorOccuredOnSingleFetch:false,
                    isNotCreatedYet:false
                }
            //if fetching is successful 
            case CREATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS:
                return {
                    ...state, 
                    isLoadingCreation:false,
                    isSuccessfullyDoneCreation:true,
                    constructorsRacingRecords:[...state.constructorsRacingRecords,action.payload],
                    isNotCreatedYet:false,
                    error:'',
                }
            //if fetching has any errors
            case CREATE_COUNSTRUCTOR_RACING_RECORD_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isErrorOccuredOnCreation:true, 
                    error:action.payload
                }

                case UPDATE_COUNSTRUCTOR_RACING_RECORD_LOADING:
                    return {
                        ...state, 
                        isLoading:false, 
                        isLoadingCreation:false,
                        isSuccessfullyDoneCreation:false,
                        isErrorOccuredOnCreation:false,
                        isLoadingUpdate:true,
                        isSuccessfullyDoneUpdate:false,
                        isErrorOccuredOnUpdate:false,
                        isLoadingSingleFetch:false,
                        isSuccessfullySingleFetch:false,
                        isErrorOccuredOnSingleFetch:false
                    }
                //if fetching is successful 
                case UPDATE_COUNSTRUCTOR_RACING_RECORD_SUCCESS:
                    return {
                        ...state, 
                        isLoadingUpdate:false,
                        isSuccessfullyDoneUpdate:true,
                        isErrorOccuredOnUpdate:false,
                        constructorsRacingRecords:[...state.constructorsRacingRecords.filter(x=>x.id!==action.payload.id),action.payload],
                        error:'',
                    }
                //if fetching has any errors
                case UPDATE_COUNSTRUCTOR_RACING_RECORD_FAILURE:
                    return {
                        ...state,
                        isLoadingUpdate:false,
                        isSuccessfullyDoneUpdate:false,
                        isErrorOccuredOnUpdate:true,
                        error:action.payload
                    }

                    case FETCH_COUNSTRUCTOR_RACING_RECORD_LOADING:
                        return {
                            ...state, 
                            isLoading:false, 
                            isLoadingCreation:false,
                            isSuccessfullyDoneCreation:false,
                            isErrorOccuredOnCreation:false,
                            isLoadingUpdate:false,
                            isSuccessfullyDoneUpdate:false,
                            isErrorOccuredOnUpdate:false,
                            isLoadingSingleFetch:true,
                            isSuccessfullySingleFetch:false,
                            isErrorOccuredOnSingleFetch:false
                        }
                    //if fetching is successful 
                    case FETCH_COUNSTRUCTOR_RACING_RECORD_SUCCESS:
                        return {
                            ...state, 
                            isLoadingSingleFetch:false,
                            isSuccessfullySingleFetch:true,
                            isErrorOccuredOnSingleFetch:false,
                            isNotCreatedYet:false,
                            selectedConstructorRacingRecord:action.payload,
                            error:'',
                        }
                    //if fetching has any errors
                    case FETCH_COUNSTRUCTOR_RACING_RECORD_FAILURE:
                        return {
                            ...state,
                            isLoadingSingleFetch:false,
                            isSuccessfullySingleFetch:false,
                            isErrorOccuredOnSingleFetch:true,
                            isNotCreatedYet:action.isNotCreatedYet,
                            error:action.payload
                        }

                        case SET_TO_NULL_CONSTUCTOR_RACING_RECORD:
                            return {
                                constructorsRacingRecords:[],
                                selectedConstructorRacingRecord:null,
                                isLoading:false, 
                                error:'',
                                isLoadingCreation:false,
                                isSuccessfullyDoneCreation:false,
                                isErrorOccuredOnCreation:false,
                                isLoadingUpdate:false,
                                isSuccessfullyDoneUpdate:false,
                                isErrorOccuredOnUpdate:false,
                                isLoadingSingleFetch:false,
                                isSuccessfullySingleFetch:false,
                                isErrorOccuredOnSingleFetch:false,
                                isNotCreatedYet:false,
                            }



        default:
            return state

    }



}