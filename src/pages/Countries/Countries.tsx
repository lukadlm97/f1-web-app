import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import './countries.scss'


import {fetchAllCountries} from '../../redux/actions/CountryAction'
import {AppState} from '../../types/AppState'

const Countries=()=> {
    //get all countries from redux state
    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const isLoading= useSelector((state:AppState)=>state.countryReducer.isLoading)
    
 
    return (
        <div className="countires">
           
            {/* Inner contents country list/result */}
           <h2>Countries page </h2>
           {isLoading && <h2>Loading...</h2>}

           {!isLoading && countries && 
            countries.map((country)=>(                    
                country.id
            ))
            }

         </div>
    )
}

export default Countries