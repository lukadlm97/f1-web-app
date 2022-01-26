import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import './powerUnitSuppliers.scss'


import {AppState} from '../../types/AppState'

const Countries=()=> {
    //get all countries from redux state
    const suppliers= useSelector((state:AppState)=>state.powerUnitSupplierReducer.suppliers)
    const isLoading= useSelector((state:AppState)=>state.powerUnitSupplierReducer.isLoading)
    
 
    return (
        <div className="powerUnitSuppliers">
           
            {/* Inner contents country list/result */}
           <h2>Power unit suppliers page </h2>
           {isLoading && <h2>Loading...</h2>}

           {!isLoading  && 
            suppliers.map((supplier)=>(                    
               <>
                {supplier.supplierName}
               </> 
            ))
            }

         </div>
    )
}

export default Countries