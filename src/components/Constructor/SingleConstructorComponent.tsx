import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'





import {AppState} from '../../types/AppState'



export default function SingleConstructor(){
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)


    return(
        <Box>
            {selectedConstructor!=null?selectedConstructor.fullName:'Error'}
        </Box>
    )

}












