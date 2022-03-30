import {combineReducers} from 'redux'

import countryReducer from './CountryReducer'
import driverReducer from './DriverReducer'
import constructorReducer from './ConstructorReducer'
import technicalStaffReducer from './TechnicalStaffReducer'
import constructorRacingRecordsReducer from './ConstructorRacingRecordReducer'
import competitionReducer from './CompetitionReducer'
import staffRoleReducer from './StaffRoleReducer'
import constructorsTechnicalStaffReducer from './ConstructorsTechincalStaffReducer'
import powerUnitSupplierReducer from './PowerUnitSupplierReducer'
import constructorPowerUnitSupplierReducer from './ConstructorPowerUnitSupplierReducer'
import contractReducer from './ContractReducer'
import driverRoleReducer from './DriverRoleReducer'

const rootReducer = () =>
  combineReducers({
    countryReducer,
    driverReducer,
    constructorReducer,
    technicalStaffReducer,
    constructorRacingRecordsReducer,
    competitionReducer,
    staffRoleReducer,
    constructorsTechnicalStaffReducer,
    powerUnitSupplierReducer,
    constructorPowerUnitSupplierReducer,
    contractReducer,
    driverRoleReducer
  })

export default rootReducer