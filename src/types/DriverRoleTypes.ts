//reducer case constants
export const FETCH_DRIVER_ROLE_LOADING="FETCH_DRIVER_ROLE_LOADING"
export const FETCH_DRIVER_ROLE_SUCCESS="FETCH_DRIVER_ROLE_SUCCESS"
export const FETCH_DRIVER_ROLE_FAILURE="FETCH_DRIVER_ROLE_FAILURE"

//types 
export type DriverRoleReducerState={
    driverRoles:DriverRoleState[],
    isLoading:boolean, 
    error:string
}

export type DriverRoleState={
    id:number
    roleName:string 
}

//action types
export type FetchDriverRolesLoadingAction={
    type: typeof FETCH_DRIVER_ROLE_LOADING
    payload?: string
}
export type FetchAllDriverRolesSuccessAction={
    type: typeof FETCH_DRIVER_ROLE_SUCCESS
    payload: []
}
export type FetchAllDriverRolesFailureAction={
    type: typeof FETCH_DRIVER_ROLE_FAILURE
    payload: string
}

export type DriverRolesActions= FetchDriverRolesLoadingAction | FetchAllDriverRolesSuccessAction | FetchAllDriverRolesFailureAction