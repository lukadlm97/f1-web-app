import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';

import {AppState} from '../../types/AppState'


  export default function ConstructorRacingDetails() {
    const selectedConstructorRacingRecords= useSelector((state:AppState)=>state.constructorRacingRecordsReducer.selectedConstructorRacingRecord)
    const isLoading = useSelector((state:AppState)=>state.constructorRacingRecordsReducer.isLoadingSingleFetch)
   
   

    return(
        
        <Card style={{marginLeft:20,marginBottom:20,background:"#D3E4CD",padding:10}}>
        {isLoading?
        <div>
            LOADING ...
        </div>
        :
        <div>
        {selectedConstructorRacingRecords==null?
                <div>
                    Error
                </div>
                :
        <Grid style={{display:'flex'}}>

                <Grid xs={6}>
                <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                       Constructor championships:
                       {selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.constructorChampionships:"not supplied"}
                        </Typography>
                    </Grid>
                    <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                        Driver championships:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.driverChampionships:"not supplied"}
                        </Typography>
                    </Grid>
                 
                    </Grid>
                    <Grid xs={6}>
                        
                    <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                        Fastes laps: {selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.fastesLaps:"not supplied"}
                        </Typography>
                    </Grid>
                    <Grid style={{display:'flex'}}>
                    <Typography variant="body2" color="black" style={{fontSize:14}}>
                        Race victories:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.raceVictories:"not supplied"}
                        </Typography>
                    </Grid>
                    <Grid style={{display:'flex'}}>
                        <Typography variant="body2" color="black" style={{fontSize:14}}>
                            Total podiums:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.podiums:"not supplied"}
                        </Typography>
                    </Grid>
                    <Grid style={{display:'flex'}}>
                        <Typography variant="body2" color="black" style={{fontSize:14}}>
                            Pol positions:{selectedConstructorRacingRecords!=null?selectedConstructorRacingRecords.polPositions:"not supplied"}
                        </Typography>
                    </Grid>
                  
                </Grid>
        </Grid>
        }
        </div>
        }
       
        
        </Card>
    )




  }