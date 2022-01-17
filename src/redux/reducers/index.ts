import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import driverReducer from './DriverReducer'
import constructorReducer from './ConstructorReducer'
const rootReducer = () =>
  combineReducers({
    countryReducer,
    driverReducer,
    constructorReducer
  })

export default rootReducer