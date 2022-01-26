import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import AddReactionIcon from '@mui/icons-material/AddReaction';

import {AppState} from '../../types/AppState'
import {ConstructorsTechnicalStaffState} from '../../types/ConstructorsTechnicalStaffTypes'


import {fetchConstructorsTechnicalStaffStaff}from '../../redux/actions/ConstructorsTechnicalStaffActions'
import StaffCard from '../StaffTable/StaffCard'
import EmplooyStaffForm from '../EmplooyStaff/EmplooyStaffForm'




export default function ConstructorsTechnicalStaffDetails(){
    const selectedConstructor = useSelector((state:AppState)=>state.constructorReducer.selectedConstructor)
   

    const isLoading = useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.isLoading)
    const technicalStaffs= 
                    useSelector((state:AppState)=>state.constructorsTechnicalStaffReducer.technicalStaffs)
    
    

    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(fetchConstructorsTechnicalStaffStaff(selectedConstructor!=null?selectedConstructor.id:17))
    },[])

    

    const handleEmplooyNewStaff = () => 
    {
        handleOpen()
      
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{
        setOpen(true);
      } 
    
    
      const handleClose = () => setOpen(false);
    

return(
    <Grid container spacing={4} sx={{marginTop:4,marginLeft:1,marginBottom:4}} >
    {isLoading?
        <div>
            LOADING ...
        </div>
    :
    <Grid>
                <Typography variant="body2" color="black" style={{fontSize:16,paddingBottom:10}}>
                    Staffs details
                </Typography>
            {technicalStaffs.length !=0 && 
                <Box   sx={{display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                            width: 340,
                            height: 340,
                        },
                }}>
                { technicalStaffs.map((staffItem)=>(
                    
                    <StaffCard id={staffItem.technicalStaff.id} 
                                forename={staffItem.technicalStaff.forename}
                                surname={staffItem.technicalStaff.surname}
                                educationDetails={staffItem.technicalStaff.educationDetails}
                                title={staffItem.technicalStaff.title}
                                dateOfBirth={staffItem.technicalStaff.dateOfBirth} 
                                countryId={staffItem.technicalStaff.countryId}
                                staffRoleId={staffItem.technicalStaffRoleId}/>
                    
                    ))}
                </Box>
            }
            {!technicalStaffs.length &&
            <div>
                No availiable staff
            </div>
            }
            <Grid>
                <Grid style={{display:'flex',marginTop:20}} >
                        <Button variant="outlined"
                             style={{ display: 'inline-flex', color:'black', background:'#94D0CC', width: 280,padding:2,
                              height: 40,fontSize:14}} 
                             onClick={()=>handleEmplooyNewStaff()} >
                            <AddReactionIcon fontSize='large' style={{marginRight:10}}/>
                            Emplooy new staff
                        </Button>
                </Grid>
            </Grid>
        </Grid>
    }
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    
      >
        <EmplooyStaffForm closeForm={handleClose}/>
      </Modal>
    </Grid>
)






}