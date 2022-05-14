import * as React from 'react';

import {useParams, useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ConstructionIcon from '@mui/icons-material/Construction';


const BackToConstructors =()=>{


    const history=useHistory()


    return(
        <Grid style={{marginTop:20,marginBottom:20,marginLeft:120}} >
            <Button onClick={()=>history.push('/constructors')} 
             style={{display: 'inline-flex',width:300,height:40,fontSize:14,background:'#7B6079',color:'white'}} size="small" variant="text"> 
             <ConstructionIcon fontSize='large' style={{marginRight:20}}/>
             Back to Constructors
             </Button>
        </Grid>
    )
}
export default BackToConstructors;