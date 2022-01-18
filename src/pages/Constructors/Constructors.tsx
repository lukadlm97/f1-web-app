import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

import GoToStuff from '../../components/Constructor/FindStuff'

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

           {!isLoading && constructors && 
            constructors.map((constructor)=>(                    
                <li>
                    {constructor.id} 
                    {constructor.shortName}
                </li>
            ))
            }

<GoToStuff />
         </div>
    )
}

export default Constructor