import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import driverReducer from './DriverReducer'
import constructorReducer from './ConstructorReducer'
import technicalStaffReducer from './TechnicalStaffReducer'
import constructorRacingRecordsReducer from './ConstructorRacingRecordReducer'
import competitionReducer from './CompetitionReducer'


const rootReducer = () =>
  combineReducers({
    countryReducer,
    driverReducer,
    constructorReducer,
    technicalStaffReducer,
    constructorRacingRecordsReducer,
    competitionReducer
  })

export default rootReducer