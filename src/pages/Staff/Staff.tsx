import React from 'react'
import StaffTable from '../../components/StaffTable/StaffTable'
import CreateDriver from '../../components/Driver/CreateDriver'

import {useDispatch, useSelector } from 'react-redux'
import {fetchAllDrivers} from '../../redux/actions/DriverAction'
import {AppState} from '../../types/AppState'
import './staff.scss'


const Driver=()=> {
 
    
    return (
        <div className="staff">
           
            {/* Inner contents country list/result */}
           <h1>Staff page </h1>
          <StaffTable />
         </div>
    )
}

export default Driver