import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import HailIcon from '@mui/icons-material/Hail';

import {AppState} from '../../types/AppState'
import {selectContract} from '../../redux/actions/ContactAction';
import EndContractForm from '../Contract/EndContractForm';

interface IDriverContract{
    id:number
    forename:string 
    surname:string
    driverRolesId:number 
    estaminateValue:number
    estaminateYears:number
    driverCountryId:number
}

export function DriverContractCard(props:IDriverContract){
    const countires = useSelector((state: AppState) => state.countryReducer.countries)
    const roles = useSelector((state: AppState) => state.driverRoleReducer.driverRoles)
    const contracts = useSelector((state: AppState) => state.contractReducer.currentConstructorContracts)

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

    const [open,setOpen]=React.useState<boolean>(false);
    const handleClose=()=>{setOpen(false)}
    const handleOpen=()=>{setOpen(true)}

    const dispatch = useDispatch();

    const handleContractEndWithConstructor = (contractId:number|undefined) => 
    {
        if(contractId==undefined){
            console.log("ERROR!!!");
         return;    
        }

        const findedContract = contracts.find(x => x.id == contractId);
        if (findedContract != null){
            dispatch(selectContract(findedContract))
            handleOpen()

        }else{
            
            console.log("ERROR!!!");
        }

    };
  

    return(
        <Card xs={4} style={{margin:10,background:'#f2ddc1',minWidth:210,maxWidth:210}}>
                <CardMedia
                style={{margin:10,background:'white'}}
                    component="img"
                    height="140"
                    src={process.env.PUBLIC_URL+`/images/app-resources/drivers/${props.id}.jpg`}
                    alt={props.id+" image"}
                />
                <CardContent style={{fontSize:12}}>
                    <Grid>
                            <Typography gutterBottom variant="h5" component="div" style={{fontSize:16}}>
                                {props.forename+" "+props.surname}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" style={{fontSize:14}}>
                                ({handleRoleConversion(props.driverRolesId)})
                            </Typography>
                    
                    </Grid>
                    <Grid >
                    <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                            Country:{handleCountyConversion(props.driverCountryId)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                            Estaminate years:{props.estaminateYears}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{fontSize:12, flex: 1}}>
                            Estaminate earnings:{props.estaminateValue}
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
            <EndContractForm closeForm={handleClose}/>
            </Modal>

        </Card>
    )
}