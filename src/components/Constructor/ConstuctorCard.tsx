import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';


import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import {useParams, useHistory } from 'react-router-dom'


import ConstructorForm from './ConstructorForm'
import ConstructorConfirmation from '../ConstructorConfirmation/ConstructorConfirmation'

import {selectConstructor} from '../../redux/actions/ConstructorAction'
import {AppState} from '../../types/AppState'

interface IConstructorCard{
  constructorId:number,
  countryId:number,
  shortName:string,
  fullName:string,
  firstEntry:string,
  lastEntry:string,
  base:string,
  website:string
}


export default function ConstuctorCard(props:IConstructorCard) {

  const countires = useSelector((state: AppState) => state.countryReducer.countries)
  const constructors = useSelector((state: AppState) => state.constructorReducer.constructors)
  const isLoadingCountries = useSelector((state: AppState) => state.countryReducer.isLoading)
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openConfirmation, setOpenConfirmation] = React.useState(false);
  const handleConfirmationOpen = () => setOpenConfirmation(true);
  const handleConfirmationClose = () => setOpenConfirmation(false);

  const dispatch = useDispatch();
  const history=useHistory()
  
    const handleCountyConversion = (countryId: number) => {

        if (countryId == undefined)
          return "Not supplied";
    
        const findedCountry = countires.find(x => x.id == countryId);
        if (findedCountry != null)
          return findedCountry.name;
    
        return "Not supplied";
      };

      const handleEditConstructor = (constructorId:number) => 
      {
          
        const constructor = constructors.find(x=>x.id==constructorId)
    
        if(constructor == null){
          //must pick
          console.log("Must pick driver");
          
          return
        }
    
        dispatch(selectConstructor(constructor));
        handleOpen();
      };

      const handleRemoveConstructor = (constructorId:number) => 
      {
          
        const constructor = constructors.find(x=>x.id==constructorId)
    
        if(constructor == null){
          //must pick
          console.log("Must pick driver");
          
          return
        }
    
        dispatch(selectConstructor(constructor));
        handleConfirmationOpen();
      };

      const handleDetailsConstructor = (constructorId:number) => 
      {
          
        const constructor = constructors.find(x=>x.id==constructorId)
    
        if(constructor == null){
          //must pick
          console.log("Must pick driver");
          
          return
        }
    
        dispatch(selectConstructor(constructor));
       
        history.push(`/constructor/${constructor.shortName}`)

      };





  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:10,background:'#99a799'}}>
      <CardMedia
      style={{margin:10,background:'white'}}
        component="img"
        height="140"
        src={process.env.PUBLIC_URL+`/images/app-resources/constructors/${props.website}`}
        alt={props.website}
      />
      <CardContent style={{fontSize:12}}>

        <Typography gutterBottom variant="h5" component="div" style={{fontSize:16}}>
            {props.shortName}
        </Typography>
        <Grid style={{display:'flex'}}>
            <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                Full name:{props.fullName}
            </Typography>
        </Grid>
        <Grid style={{display:'flex'}}>
            <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                Base:{props.base}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontSize:12}}>
                Country: {handleCountyConversion(props.countryId)}
            </Typography>
        </Grid>
        <Grid style={{display:'flex'}}>

            <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
            First entry: {props.firstEntry}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{fontSize:12}}>
                
                Last entry:{props.lastEntry}
            </Typography>
        </Grid>
      </CardContent>
      <CardActions style={{fontSize:14}}>
        <Button size="medium" style={{background:'#EEC4C4',fontSize:12,color:'black',display: 'inline-flex'}} 
        onClick={()=>handleRemoveConstructor(props.constructorId)} >
        <CancelIcon fontSize='large' style={{marginRight:10}}/>
          Remove
          </Button>
        <Button size="medium"  style={{background:'#D1D9D9',fontSize:12,color:'black'}} 
                onClick={()=>handleEditConstructor(props.constructorId)} >
                   <EditIcon fontSize='large' style={{marginRight:10}}/>
                  Edit
        </Button>
        <Button size="medium" style={{background:'#94D0CC',fontSize:12,color:'black'}}
                 onClick={()=>handleDetailsConstructor(props.constructorId)}>
                    <InfoIcon fontSize='large' style={{marginRight:10}}/>
                   Learn More
        </Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConstructorForm closeForm={handleClose}/>
      </Modal>

      <Modal
        open={openConfirmation}
        onClose={handleConfirmationClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConstructorConfirmation closeForm={handleConfirmationClose}/>
      </Modal>
    </Card>
  );
}