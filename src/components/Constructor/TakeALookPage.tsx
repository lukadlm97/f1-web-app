import * as React from 'react';


import {useParams, useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import {PageType} from '../../types/PageType';

interface IGoToPage{
    pageName:string,
    route:string,
    pageType:PageType,
    buttonColor:string
}


export default function GoToPage(props:IGoToPage){


    const history=useHistory()

const getComponent=(pageType:PageType)=>{

        switch(pageType){
        case PageType.PowerUnitSuppliers:
           return <PrecisionManufacturingIcon fontSize='large' style={{marginRight:20}}/>;
          
        case PageType.Staff:
            return <PersonSearchIcon fontSize='large' style={{marginRight:20}}/>;
        
            default:
                return <div></div>;
    }
}


    return(
        <Grid style={{marginTop:20,marginBottom:20,marginRight:50}} >
            <Button onClick={()=>history.push(props.route)} 
             style={{display: 'inline-flex',width:300,height:40,fontSize:14,background:props.buttonColor,color:'white'}} size="small" variant="text"> 
             {
                 getComponent(props.pageType)
             }
            
             Take a look at {props.pageName}
             </Button>
        </Grid>
    )
}