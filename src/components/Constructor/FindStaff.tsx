import * as React from 'react';


import {useParams, useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


const GoToStaff =()=>{


    const history=useHistory()


    return(
        <Grid style={{marginTop:20,marginBottom:20,marginLeft:20}} >
            <Button onClick={()=>history.push('/technicalStuff/')} 
             style={{display: 'inline-flex',width:300,height:40,fontSize:14,background:'#7B6079',color:'white'}} size="small" variant="text"> 
             <PersonSearchIcon fontSize='large' style={{marginRight:20}}/>
             Take a look at staff
             </Button>
        </Grid>
    )
}
export default GoToStaff;