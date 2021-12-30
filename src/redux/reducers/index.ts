import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import driverReducer from './DriverReducer'

const rootReducer = () =>
  combineReducers({
    countryReducer,
    driverReducer
  })

export default rootReducer