import * as React from 'react';
import {useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import {AppState} from '../../types/AppState'

interface IContractForm{
    closeForm:()=>void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#999999',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function ContractForm(props:IContractForm) {
    const selectedConstructor= 
    useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
   
   return (
    <Box sx={style}>
        <Grid>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
            <h2>Register new contract for constructor {selectedConstructor!=null?selectedConstructor.id:17}</h2>
            </Typography>
        </Grid>
    </Box>
    );
}