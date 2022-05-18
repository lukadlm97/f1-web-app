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

import HailIcon from '@mui/icons-material/Hail';

import {AppState} from '../../types/AppState'

import {selectConstractTechnicalStaff} from '../../redux/actions/ConstructorsTechnicalStaffActions'

import LeavingStaffForm from '../EmplooyStaff/LeavingStaffForm'
interface IStaff{
    id:number
    forename:string 
    surname:string 
    dateOfBirth:Date
    title:string
    educationDetails:string
    countryId:number
    staffRoleId:number
}

export default function StaffCard(props:IStaff){

    const countires = useSelector((state: AppState) => state.countryReducer.countries)
    const roles = useSelector((state: AppState) => state.staffRoleReducer.staffRoles)
    const constructorsTechnicalStaff = useSelector((state: AppState) => state.constructorsTechnicalStaffReducer.technicalStaffs)
    const handleCountyConversion = (countryId: number) => {
        
                if (countryId == undefined)
                return "Not supplied";
            
                const findedCountry = countires.find(x => x.id == countryId);
                if (findedCountry != null)
                return findedCountry.name;
            
                return "Not supplied";
            };


    const handleRoleConversion = (roleId: number) => {

        if (roleId == undefined)
        return "Not supplied";
    
        const findedRole = roles.find(x => x.id == roleId);
        if (findedRole != null)
            return findedRole.roleName;
    
        return "Not supplied";
    };


    const handlingAgeCaclucalte = (birthday: Date) => {
        let date1 = new Date(birthday);
        let date2 = new Date();
        let yearsDiff = date2.getFullYear() - date1.getFullYear();
        return yearsDiff;
      }

      const [open,setOpen]=React.useState<boolean>(false);

      const handleClose=()=>{setOpen(false)}
      const handleOpen=()=>{setOpen(true)}

      const dispatch = useDispatch();

      const handleContractEndWithConstructor = (staffId:number) => 
      {
        const staff = constructorsTechnicalStaff.find(x=>x.technicalStaff.id==staffId)
    
        if(staff == null){
          //must pick
          console.log("Must pick staff");
          
          return
        }
    
        dispatch(selectConstractTechnicalStaff(staff));
        handleOpen();
      };
        
      const handleTitle=(title:string)=>{
          
        if(title==undefined || title==="None"){
            return "";
        }

        return title;
      }


    return(
        <Card sx={{ maxWidth: 310,minWidth:310,maxHeight:490,minHeight:490 }} style={{margin:10,background:'#99a799'}}>
            <CardMedia
            style={{margin:10,background:'white'}}
                component="img"
                height="260"
                width="300"
                src={process.env.PUBLIC_URL+`/images/app-resources/staff/${props.id}.jpg`}
                alt={props.id+" image"}
            />
            <CardContent style={{fontSize:12}}>
                <Grid>
                        <Typography gutterBottom variant="h5" component="div" style={{fontSize:16}}>
                            {props.forename+" "+handleTitle(props.title)+" "+props.surname}
                        </Typography>
                    
                        <Typography gutterBottom variant="h5" component="div" style={{fontSize:14}}>
                                ({handleRoleConversion(props.staffRoleId)})
                        </Typography>
                
                </Grid>
                <Grid >
                <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                        Country:{handleCountyConversion(props.countryId)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                        Education:{props.educationDetails}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                        Ages:{handlingAgeCaclucalte(props.dateOfBirth)}
                    </Typography>
                  
                </Grid>
            </CardContent>
            <CardActions style={{fontSize:14}}>
                <Button size="medium" style={{background:'#EEC4C4',fontSize:12,color:'black',display: 'inline-flex'}} 
                onClick={()=>handleContractEndWithConstructor(props.id)} >
                <HailIcon fontSize='large' style={{marginRight:10}}/>
                End Contract
                </Button>
            
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <LeavingStaffForm closeForm={handleClose}/>
            </Modal>
            </Card>
    )
}







