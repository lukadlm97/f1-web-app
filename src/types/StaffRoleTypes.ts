//reducer case constants
export const FETCH_STAFF_ROLE_LOADING="FETCH_STAFF_ROLE_LOADING"
export const FETCH_STAFF_ROLE_SUCCESS="FETCH_STAFF_ROLE_SUCCESS"
export const FETCH_STAFF_ROLE_FAILURE="FETCH_STAFF_ROLE_FAILURE"

//types 
export type StaffRoleReducerState={
    staffRoles:StaffRoleState[],
    isLoading:boolean, 
    error:string
}

export type StaffRoleState={
    id:number
    roleName:string 
}

//action types
export type FetchStaffRolesLoadingAction={
    type: typeof FETCH_STAFF_ROLE_LOADING
    payload?: string
}
export type FetchAllStaffRolesSuccessAction={
    type: typeof FETCH_STAFF_ROLE_SUCCESS
    payload: []
}
export type FetchAllStaffRolesFailureAction={
    type: typeof FETCH_STAFF_ROLE_FAILURE
    payload: string
}

export type StaffRolesActions= FetchStaffRolesLoadingAction | FetchAllStaffRolesSuccessAction | FetchAllStaffRolesFailureAction