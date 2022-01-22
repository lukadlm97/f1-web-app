import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import {useParams, useHistory } from 'react-router-dom'

import SingleConstructorComponent from '../../components/Constructor/SingleConstructorComponent'
import {fetchAllConstuctors,selectConstructor} from '../../redux/actions/ConstructorAction'
import {AppState} from '../../types/AppState'

const Constructor=()=> {
    
    const selectedConstructor= useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
    const constructors= useSelector((state:AppState)=>state.constructorReducer.constructors)
    const {shortName}=useParams() as any
    const history=useHistory()

    const dispatch = useDispatch();


  React.useEffect(()=>{
console.log(selectedConstructor);

    if(selectedConstructor==null){
        console.log("fuck");
        
        dispatch(fetchAllConstuctors())
        const constructor = constructors.find(x=>x.shortName==shortName)
    
        if(constructor == null){
          //must pick
          console.log("Must pick driver");
          
          return
        }
    
        dispatch(selectConstructor(constructor));
    }else{
        console.log("s1");
    }


},[])


return(
    <div className='constructors'>
    {/* Inner contents country list/result */}
   <h2>Constructor {shortName} page </h2>
   
        <SingleConstructorComponent/>

        <Button onClick={()=>history.push('/constructors')} className="btn btn__text" size="small" variant="text"> 
             <ArrowBackIosIcon/>
             Go back</Button>
 </div>
)




}
export default Constructor;





