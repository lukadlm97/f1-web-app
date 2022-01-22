import {CountryReducerState} from './CountryTypes'
import {DriverReducerState} from './DriverTypes'
import {ConstructorReducerState} from './ConstructorTypes'
import {TechnicalStaffReducerState} from './TechnicalStuffTypes'
import {ConstructorsRacingRecordReducerState} from './ConstructorRacingRecordTypes'
export * from './CountryTypes'
export * from './DriverTypes'
export * from './ConstructorTypes'
export * from './TechnicalStuffTypes'
export * from './ConstructorRacingRecordTypes'



//global App state

export type AppState={
    countryReducer:CountryReducerState    
    driverReducer:DriverReducerState
    constructorReducer:ConstructorReducerState
    technicalStaffReducer:TechnicalStaffReducerState
    constructorRacingRecordsReducer:ConstructorsRacingRecordReducerState
}