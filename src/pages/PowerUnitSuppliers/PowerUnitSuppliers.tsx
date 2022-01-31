import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import PowerUnitSupplierTable from '../../components/PowerUnitSupplier/PowerUnitSupplier'
import CreatePowerUnitSupplier from '../../components/PowerUnitSupplierForm/CreatePowerUnitSupplier';

import './powerUnitSuppliers.scss'


import {AppState} from '../../types/AppState'

const Countries=()=> {
 
    return (
        <div className="powerUnitSuppliers">
           
            {/* Inner contents country list/result */}
           <h2>Power unit suppliers page </h2>
             <PowerUnitSupplierTable/>
            <CreatePowerUnitSupplier />
         </div>
    )
}

export default Countries