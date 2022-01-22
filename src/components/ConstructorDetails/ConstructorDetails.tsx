import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

import {AppState} from '../../types/AppState'


interface IConstructorDetails{
countryId:number,
    shortName:string,
    fullName:string,
    firstEntry:string,
    lastEntry:string,
    base:string,
    website:string
  }


  export default function ConstructorDetails(props:IConstructorDetails) {

    

return(
        <Card  style={{marginLeft:20,marginBottom:20,background:"#D3E4CD",padding:10}}>
            <Typography variant="body2" color="black" style={{fontSize:16,marginBottom:10}}>
                    Core details
            </Typography>
        
        
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Full name:{props.fullName}
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Short name:{props.shortName}
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
                <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Base:{props.base}
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
            <Typography variant="body2" color="black" style={{fontSize:14}}>
                First entry: {props.firstEntry}
                </Typography>
            </Grid>
            <Grid style={{display:'flex'}}>
            <Typography variant="body2" color="black" style={{fontSize:14}}>
                    Last entry:{props.lastEntry}
                </Typography>
            </Grid>
        </Card>
)




  }