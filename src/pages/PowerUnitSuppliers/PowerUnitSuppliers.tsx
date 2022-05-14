import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import PowerUnitSupplierTable from '../../components/PowerUnitSupplier/PowerUnitSupplier'
import CreatePowerUnitSupplier from '../../components/PowerUnitSupplierForm/CreatePowerUnitSupplier';
import  BackToConstructors from '../../components/Constructor/BackToConstructors'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import './powerUnitSuppliers.scss'


import {AppState} from '../../types/AppState'

const PowerUnitSupplier=()=> {
 
    return (
        <div className="powerUnitSuppliers">
           
            {/* Inner contents country list/result */}
           <h2>Power unit suppliers page </h2>
             <PowerUnitSupplierTable/> 
             <Grid display={'flex'}
                justifyContent="space-between" >
                <CreatePowerUnitSupplier />
                <BackToConstructors />  
            </Grid>
         </div>
    )
}

export default PowerUnitSupplier