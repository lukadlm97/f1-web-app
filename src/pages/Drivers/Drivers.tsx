import React from 'react'
import DriverTable from '../../components/DriverTable/DriverTable'
import CreateDriver from '../../components/Driver/CreateDriver'

import './driver.scss'


const Drivers=()=> {
 
    
    return (
        <div className="driver">
           
            {/* Inner contents country list/result */}
           <h1>Drivers page </h1>
          <DriverTable />
          <CreateDriver />
         </div>
    )
}

export default Drivers