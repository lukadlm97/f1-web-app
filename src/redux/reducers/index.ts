import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import driverReducer from './DriverReducer'
import constructorReducer from './ConstructorReducer'
import technicalStaffReducer from './TechnicalStaffReducer'
import constructorRacingRecordsReducer from './ConstructorRacingRecordReducer'

const rootReducer = () =>
  combineReducers({
    countryReducer,
    driverReducer,
    constructorReducer,
    technicalStaffReducer,
    constructorRacingRecordsReducer
  })

export default rootReducer