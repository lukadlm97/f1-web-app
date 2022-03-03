import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';

import ConstructorDetails from '../ConstructorDetails/ConstructorDetails'
import  CountryDetails from '../CountryDetails/CountryDetails'
import ConstructorRacingDetails from '../ConstructorRacingDetails/ConstructorRacingDetails'
import ConstructorsTechnicalStaffDetails from '../ConstructorsTechnicalStaff/ConstructorsTechnicalStaffDetails'
import ConstructorPowerUnit from '../ConstructorsPowerUnit/ConstructorPowerUnit'

import {AppState} from '../../types/AppState'
import {CountryState} from '../../types/CountryTypes'


export default function SingleConstructor(){
   const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
   const countires = useSelector((state: AppState) => state.countryReducer.countries)
   const staffRoles =  useSelector((state: AppState) => state.staffRoleReducer.staffRoles)
      
    const [countryValue, setCountryValue] = 
    React.useState<CountryState>(selectedConstructor!=null?
            countires.find(x=>x.id==selectedConstructor.countryId)||countires[0]:countires[0]);

    return(
        <Grid>
            <Grid container spacing={6} sx={{display:'flex',marginTop:2,marginBottom:4,marginLeft:0.1}}>
                    <Grid item xs={5}  style={{background:"#99a799",padding:20}}>
                        <Typography variant="body2" color="black" style={{fontSize:16,paddingLeft:20,paddingBottom:10}}>
                            Constructor main details
                        </Typography>
                        <Grid style={{display:'flex'}}>
                            <Grid xs={6}>
                                <ConstructorDetails base={selectedConstructor!=null?selectedConstructor.base:"not supplied"}
                                                firstEntry={selectedConstructor!=null?selectedConstructor.firstEntry:"not supplied"}
                                                lastEntry={selectedConstructor!=null?selectedConstructor.lastEntry:"not supplied"}
                                                countryId={selectedConstructor!=null?selectedConstructor.countryId:3}
                                                shortName={selectedConstructor!=null?selectedConstructor.shortName:"not supplied"}
                                                fullName={selectedConstructor!=null?selectedConstructor.fullName:"not supplied"}
                                                website={selectedConstructor!=null?selectedConstructor.website:"not supplied"}
                                                />
                            </Grid>
                            <Grid xs={6}>
                                <CountryDetails name={countryValue!=null?countryValue.name:"not supplied"}
                                    population={countryValue!=null?countryValue.population:0} 
                                    nominalGDP={countryValue!=null?countryValue.nominalGDP:0}
                                    GDPPerCapita={countryValue!=null?countryValue.gdpPerCapita:0}
                                    shareIfWorldGDP={countryValue!=null?countryValue.shareIfWorldGDP:0}
                                    code={countryValue!=null?countryValue.code:"not supplied"}/>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid  item xs={6}  style={{background:"#99a799",padding:20,marginLeft:50}} >
                    <Typography variant="body2" color="black" style={{fontSize:16,paddingLeft:20,paddingBottom:10}}>
                        Racing detiails
                    </Typography>
                        <Grid xs={12}>
                            <ConstructorRacingDetails />
                        </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={6} sx={{display:'flex',marginTop:2,marginBottom:4,marginLeft:0.1}}>
                
                <Grid item xs={5}  style={{background:"#99a799",padding:20}}>
                        <Typography variant="body2" color="black" style={{fontSize:16,paddingLeft:20,paddingBottom:10}}>
                            Power unit suppliers details
                        </Typography>
                        <ConstructorPowerUnit />
                </Grid>
                <Grid item xs={4}>
                   HISTORY
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{display:'flex',marginTop:4,marginLeft:1}}>
                Drivers
                <Grid item xs={4}>
                    Driver 1
                </Grid>
                <Grid item xs={4}>
                    Driver 2
                </Grid>
            </Grid>
            <Grid>
                    <ConstructorsTechnicalStaffDetails/>
            </Grid>
        </Grid>
    )

}












