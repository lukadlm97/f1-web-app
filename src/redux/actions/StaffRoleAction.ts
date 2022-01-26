import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_STAFF_ROLE_LOADING, StaffRolesActions, FETCH_STAFF_ROLE_SUCCESS, FETCH_STAFF_ROLE_FAILURE} 
        from '../../types/StaffRoleTypes'

//fetch all countries
export function fetchAllStaffRolesLoading():StaffRolesActions{

    return {
        type:FETCH_STAFF_ROLE_LOADING
    }

}

// fetch all countries success
export function fetchAllStaffRolesSuccess(staffRoles:[]):StaffRolesActions{
    return {
        type:FETCH_STAFF_ROLE_SUCCESS,
        payload:staffRoles
    }

}

// fetch all countries failure
export function fetchAllStaffRolesFailure(error:string):StaffRolesActions{
    return {
        type:FETCH_STAFF_ROLE_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllStaffRoles(){

    return (dispatch:Dispatch)=>{
        dispatch(fetchAllStaffRolesLoading())
        //axios call 
        axios.get('https://localhost:6001/api/v1/TechnicalStaffRole')
        .then((res)=>{
            const staffRoles=res.data 
            dispatch(fetchAllStaffRolesSuccess(staffRoles))
        }).catch((err)=>{
            dispatch(fetchAllStaffRolesFailure(err))

        })
    }

    
}