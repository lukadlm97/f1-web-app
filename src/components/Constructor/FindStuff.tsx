import * as React from 'react';


import {useParams, useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const GoToStuff =()=>{


    const history=useHistory()


    return(
        <Grid style={{display:"inline"}}>
            <Button onClick={()=>history.push('/technicalStuff/')} className="btn btn__text" size="small" variant="text"> 
             Take a look at stuff
             <ArrowForwardIosIcon/>
             </Button>
        </Grid>
    )
}
export default GoToStuff;