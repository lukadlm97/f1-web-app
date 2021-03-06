import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import GoToStaff from '../../components/Constructor/FindStaff'
import ConstuctorCard from '../../components/Constructor/ConstuctorCard'
import  CreateConstructor from '../../components/Constructor/CreateConstructor'
import GoToPage from '../../components/Constructor/TakeALookPage'

import './constructors.scss'

import {fetchAllConstuctors,selectConstructor} from '../../redux/actions/ConstructorAction'
import {fetchAllDrivers} from '../../redux/actions/DriverAction'
import {setConstructorRacingRecords} from '../../redux/actions/ConstructorRacingRecordAction'
import {selectConstractConstructorPowerUnit} from '../../redux/actions/ConstructorsPowerUnitSupplierAction'
import {fetchAllDriverRoles} from '../../redux/actions/DriverRoleAction'
import {AppState} from '../../types/AppState'
import {PageType} from '../../types/PageType';

const Constructor=()=> {
    //get all constructor from redux state
    const constructors= useSelector((state:AppState)=>state.constructorReducer.constructors)
    const isLoading= useSelector((state:AppState)=>state.constructorReducer.isLoading)
    //initialize dispatch
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(fetchAllConstuctors())
        dispatch(fetchAllDrivers())
        dispatch(fetchAllDriverRoles())
        dispatch(selectConstructor(null));
        dispatch(setConstructorRacingRecords(null))
        dispatch(selectConstractConstructorPowerUnit(null));
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
            height: 320,
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
                                website={constructor.website}
                                />

               
                ))
            }

            </Box>
            <Grid container  style={{marginLeft:10,marginRight:30}} 
             display={'flex'}
             justifyContent="space-between" >
                    <CreateConstructor />
                    <GoToPage pageName={"Manufacturer"} route={"/powerUnitSuppliers/"} pageType={PageType.PowerUnitSuppliers} buttonColor='#D885A3'/>
                    <GoToPage pageName={"Staff"} route={"/technicalStaff/"} pageType={PageType.Staff} buttonColor='#7B6079'/>
            </Grid>
         </div>
    )
}

export default Constructor