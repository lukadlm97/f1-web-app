import {CountryReducerState} from './CountryTypes'
import {DriverReducerState} from './DriverTypes'
export * from './CountryTypes'
export * from './DriverTypes'


//global App state

export type AppState={
    countryReducer:CountryReducerState    
    driverReducer:DriverReducerState
}