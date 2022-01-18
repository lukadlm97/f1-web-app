import {CountryReducerState} from './CountryTypes'
import {DriverReducerState} from './DriverTypes'
import {ConstructorReducerState} from './ConstructorType'
import {TechnicalStaffReducerState} from './TechnicalStuffTypes'
export * from './CountryTypes'
export * from './DriverTypes'
export * from './ConstructorType'
export * from './TechnicalStuffTypes'


//global App state

export type AppState={
    countryReducer:CountryReducerState    
    driverReducer:DriverReducerState
    constructorReducer:ConstructorReducerState
    technicalStaffReducer:TechnicalStaffReducerState
}