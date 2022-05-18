import React from 'react'
import StaffTable from '../../components/StaffTable/StaffTable'
import CreateStaff from '../../components/StaffForm/CreateStaff'
import  BackToConstructors from '../../components/Constructor/BackToConstructors'
import Grid from '@mui/material/Grid';

import {useDispatch, useSelector } from 'react-redux'
import {fetchAllDrivers} from '../../redux/actions/DriverAction'
import {AppState} from '../../types/AppState'
import './staff.scss'


const Staff=()=> {
 
    
    return (
        <div className="staff">
           
            {/* Inner contents country list/result */}
           <h1>Staff page </h1>
          <StaffTable />
           
            <Grid display={'flex'}
                justifyContent="space-between" >
                <CreateStaff />
                <BackToConstructors />  
            </Grid>
         </div>
    )
}

export default Staff