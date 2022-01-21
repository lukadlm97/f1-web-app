import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import {useParams, useHistory } from 'react-router-dom'

import SingleConstructorComponent from '../../components/Constructor/SingleConstructorComponent'


const Constructor=()=> {
    const {shortName}=useParams() as any
    const history=useHistory()

return(
    <div className='constructors'>
    {/* Inner contents country list/result */}
   <h2>{shortName} page </h2>
   
        <SingleConstructorComponent/>

        <Button onClick={()=>history.push('/constructors')} className="btn btn__text" size="small" variant="text"> 
             <ArrowBackIosIcon/>
             Go back</Button>
 </div>
)




}
export default Constructor;





