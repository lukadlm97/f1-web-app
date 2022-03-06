import {ContractReducerState,ContractState,FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE, FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING, 
    FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS,FETCH_CURRENT_DRIVERS_CONSTRUCTOR_FAILURE,FETCH_CURRENT_DRIVERS_CONSTRUCTOR_LOADING,
    FETCH_CURRENT_DRIVERS_CONSTRUCTOR_SUCCESS,FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE,FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING,
    FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS,FETCH_HISTORY_DRIVERS_CONSTRUCTOR_FAILURE,FETCH_HISTORY_DRIVERS_CONSTRUCTOR_LOADING,
    FETCH_HISTORY_DRIVERS_CONSTRUCTOR_SUCCESS,START_CONTRACT_FAILURE,START_CONTRACT_LOADING,END_CONTRACT_FAILURE,END_CONTRACT_LOADING,
    END_CONTRACT_SUCCESS ,START_CONTRACT_SUCCESS,SELECT_CONTRACT,SELECT_CONTRACT_SUCCESS
} from '../../types/ContractTypes'

const initiState:ContractReducerState={
    currentDriverContract:null,
    isLoadingCurrentDriverContract:false, 
    isDriverInContract:false,
    driverContractsHistory:[],
    isLoadingDriverContractsHistory:false, 
    isDriverHaveContractsHistory:false,
    currentConstructorContracts:[],
    isLoadingCurrentConstructorContracts:false,
    isContructorHaveActiveContracts:false,
    constructorContractsHistory:[],
    isLoadingConstructorContractsHistory:false,
    isConstructorHaveContractHistory:false,
    isLoadingStartContract:false,
    isSuccessfullyStartedContract:false,
    isErrorOnContractStart:false,
    isLoadingEndContract:false,
    isSuccessfullyEndedContract:false,
    isErrorOnContractEnd:false,
    selectedContract:null
}

export default function contractReducer(state:ContractReducerState=initiState, action:any){

    switch(action.type){

        // fetch country, loading true
        case FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_LOADING:
                return {
                    ...state, 
                    isLoadingCurrentConstructorContracts:true
                }

        case FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_SUCCESS:
            return {
                ...state, 
                isLoadingCurrentConstructorContracts:false,
                currentConstructorContracts:action.payload,
                isContructorHaveActiveContracts:true
            }
        case FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE:
            return{
                ...state, 
                isLoadingCurrentConstructorContracts:false,
                isContructorHaveActiveContracts:false
            }
        case FETCH_CURRENT_DRIVERS_CONSTRUCTOR_LOADING:
            return {
                ...state, 
                isLoadingCurrentDriverContract:true
            }

        case FETCH_CURRENT_DRIVERS_CONSTRUCTOR_SUCCESS:
            return {
                ...state, 
                isLoadingCurrentDriverContract:false,
                currentDriverContract:action.payload,
                isDriverInContract:true
            }
        case FETCH_CURRENT_COUNSTRUCTORS_DRIVERS_FAILURE:
            return{
                ...state, 
                isLoadingCurrentDriverContract:false,
                isDriverInContract:false
            }
    
        case FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_LOADING:
            return {
                ...state, 
                isLoadingConstructorContractsHistory:true
            }

        case FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_SUCCESS:
            return {
                ...state, 
                isLoadingConstructorContractsHistory:false,
                constructorContractsHistory:action.payload,
                isConstructorHaveContractHistory:true
            }
        case FETCH_HISTORY_COUNSTRUCTORS_DRIVERS_FAILURE:
            return{
                ...state, 
                isLoadingConstructorContractsHistory:false,
                isConstructorHaveContractHistory:false
            }
        case FETCH_HISTORY_DRIVERS_CONSTRUCTOR_LOADING:
            return {
                ...state, 
                isLoadingDriverContractsHistory:true
            }

        case FETCH_HISTORY_DRIVERS_CONSTRUCTOR_SUCCESS:
            return {
                ...state, 
                isLoadingDriverContractsHistory:false,
                driverContractsHistory:action.payload,
                isDriverHaveContractsHistory:true
            }
        case FETCH_HISTORY_DRIVERS_CONSTRUCTOR_FAILURE:
            return{
                ...state, 
                isLoadingDriverContractsHistory:false,
                isDriverHaveContractsHistory:false
            }

        case START_CONTRACT_LOADING:
            return {
                ...state, 
                isLoadingStartContract:true, 
                isSuccessfullyStartedContract:false,
                isErrorOnContractStart:false
            }

        case START_CONTRACT_SUCCESS:
            return{
                ...state, 
                isLoadingStartContract:false, 
                isSuccessfullyStartedContract:true,
                currentConstructorContracts:[...state.currentConstructorContracts,action.payload],
            }
        //if fetching is successful 
        case START_CONTRACT_FAILURE:
            return {
                ...state, 
                isLoadingStartContract:false, 
                isErrorOnContractStart:true
            }
            //if fetching has any errors
        case END_CONTRACT_LOADING:
            return {
                ...state, 
                isLoadingEndContract:true,
                isSuccessfullyEndedContract:false,
                isErrorOnContractEnd:false,
            }

        case END_CONTRACT_SUCCESS:
            return{
                ...state, 
                isLoadingEndContract:false,
                isSuccessfullyEndedContract:true,
                currentConstructorContracts:[...state.currentConstructorContracts.filter(x=>x.id!==action.payload)],
            }
        case END_CONTRACT_FAILURE:
            return{
                ...state, 
                isLoadingEndContract:false,
                isErrorOnContractEnd:true
            }
        case SELECT_CONTRACT:
            return{
                ...state,
                selectedContract:action.payload
            }


        default:
            return state

    }



}