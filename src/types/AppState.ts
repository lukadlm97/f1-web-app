import {CountryReducerState} from './CountryTypes'
import {DriverReducerState} from './DriverTypes'
import {ConstructorReducerState} from './ConstructorTypes'
import {TechnicalStaffReducerState} from './TechnicalStuffTypes'
import {ConstructorsRacingRecordReducerState} from './ConstructorRacingRecordTypes'
import {CompetitionReducerState} from './CompetitionTypes'
import {StaffRoleReducerState} from './StaffRoleTypes'
import {ConstructorsTechnicalStaffReducerState} from './ConstructorsTechnicalStaffTypes'
import {PowerUnitSupplierReducerState} from './PowerUnitSupplierTypes'
export * from './CountryTypes'
export * from './DriverTypes'
export * from './ConstructorTypes'
export * from './TechnicalStuffTypes'
export * from './ConstructorRacingRecordTypes'
export * from './CompetitionTypes'
export *  from './StaffRoleTypes'
export *  from './ConstructorsTechnicalStaffTypes'
export * from './PowerUnitSupplierTypes'

//global App state

export type AppState={
    countryReducer:CountryReducerState    
    driverReducer:DriverReducerState
    constructorReducer:ConstructorReducerState
    technicalStaffReducer:TechnicalStaffReducerState
    constructorRacingRecordsReducer:ConstructorsRacingRecordReducerState
    competitionReducer:CompetitionReducerState
    staffRoleReducer:StaffRoleReducerState
    constructorsTechnicalStaffReducer:ConstructorsTechnicalStaffReducerState
    powerUnitSupplierReducer:PowerUnitSupplierReducerState
}