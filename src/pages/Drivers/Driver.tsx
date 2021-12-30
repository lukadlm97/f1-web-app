import React from 'react'
import DriverTable from '../../components/DriverTable/DriverTable'

import {useDispatch, useSelector } from 'react-redux'
import {fetchAllDrivers} from '../../redux/actions/DriverAction'
import {AppState} from '../../types/AppState'
import './driver.scss'


const Driver=()=> {
 
    
    return (
        <div className="driver">
           
            {/* Inner contents country list/result */}
           <h1>Drivers page </h1>
          <DriverTable />
         </div>
    )
}

export default Driver