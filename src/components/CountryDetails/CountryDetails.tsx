import React from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';

import {AppState} from '../../types/AppState'


interface ICountryDetails{
    name:string 
    population:number 
    nominalGDP:number
    GDPPerCapita:number
    shareIfWorldGDP:number
    code:string
  }


  export default function CountryDetails(props:ICountryDetails) {




return(
        <Card style={{marginLeft:20,marginBottom:20,background:"#D3E4CD",padding:10}}>
                <Typography variant="body2" color="black" style={{fontSize:16,marginBottom:10}}>
                         Country details
                </Typography>
            
                <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                        Country name:{props.name}
                    </Typography>
                </Grid>
                <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                        Total population:{props.population}
                    </Typography>
                </Grid>
                <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                        Nominal GDP:{props.nominalGDP}
                    </Typography>
                </Grid>
                <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Share in world GDP: {props.shareIfWorldGDP}
                    </Typography>
                </Grid>
                <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                       GDP per capita:{props.GDPPerCapita}
                    </Typography>
                </Grid>
    </Card>
)




  }