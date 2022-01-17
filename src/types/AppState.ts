import {CountryReducerState} from './CountryTypes'
import {DriverReducerState} from './DriverTypes'
import {ConstructorReducerState} from './ConstructorType'
export * from './CountryTypes'
export * from './DriverTypes'
export * from './ConstructorType'


//global App state

export type AppState={
    countryReducer:CountryReducerState    
    driverReducer:DriverReducerState
    constructorReducer:ConstructorReducerState
}