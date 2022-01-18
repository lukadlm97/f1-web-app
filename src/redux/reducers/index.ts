import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import driverReducer from './DriverReducer'
import constructorReducer from './ConstructorReducer'
import technicalStaffReducer from './TechnicalStaffReducer'
const rootReducer = () =>
  combineReducers({
    countryReducer,
    driverReducer,
    constructorReducer,
    technicalStaffReducer
  })

export default rootReducer