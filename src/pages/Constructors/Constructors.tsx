import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import GoToStaff from '../../components/Constructor/FindStaff'
import ConstuctorCard from '../../components/Constructor/ConstuctorCard'
import  CreateConstructor from '../../components/Constructor/CreateConstructor'

import './constructors.scss'

import {fetchAllConstuctors} from '../../redux/actions/ConstructorAction'
import {AppState} from '../../types/AppState'

const Constructor=()=> {
    //get all constructor from redux state
    const constructors= useSelector((state:AppState)=>state.constructorReducer.constructors)
    const isLoading= useSelector((state:AppState)=>state.constructorReducer.isLoading)
    //initialize dispatch
    const dispatch=useDispatch()

    React.useEffect(()=>{
    dispatch(fetchAllConstuctors())
    },[])
 
    return (
        <div className='constructors'>
            {/* Inner contents country list/result */}
           <h2>Constructors page </h2>
           {isLoading && <h2>Loading...</h2>}
           <Box   sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
            width: 330,
            height: 300,
        },
      }}>


           {!isLoading && constructors && 
            constructors.map((constructor)=>(     
                <ConstuctorCard constructorId={constructor.id} 
                                base={constructor.base}
                                firstEntry={constructor.firstEntry}
                                lastEntry={constructor.lastEntry}
                                countryId={constructor.countryId}
                                shortName={constructor.shortName}
                                fullName={constructor.fullName}
                                />

               
                ))
            }

            </Box>
            <Grid sx={{display:'flex'}} spacing={2}>
                <Grid xs={9}>
                <CreateConstructor />
                    </Grid>
                <Grid xs={1}>
                    <GoToStaff />
                </Grid>
            </Grid>
         </div>
    )
}

export default Constructor