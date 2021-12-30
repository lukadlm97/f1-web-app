import React from 'react'
import DriverTable from '../../components/DriverTable/DriverTable'

import './driver.scss'


const Driver=()=> {

    
    return (
        <div className="driver">
           
            {/* Inner contents country list/result */}
           <h1>Drivers page </h1>
            <DriverTable/>
         </div>
    )
}

export default Driver