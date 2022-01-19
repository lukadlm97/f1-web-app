import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Autocomplete from '@mui/material/Autocomplete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';


import { useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'
import {CountryState} from '../../types/CountryTypes'
import {TechnicalStaffState} from '../../types/TechnicalStuffTypes'
import {addNewTechnicalStaff} from '../../redux/actions/TechnicalStaffAction'

interface IStaffForm{
    closeForm:()=>void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#999999',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function StaffForm(props:IStaffForm){
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()

    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const isLoadingCreation= useSelector((state:AppState)=>state.technicalStaffReducer.isLoadingCreation)
    const isLoadingRemove= useSelector((state:AppState)=>state.technicalStaffReducer.isLoadingDelete)
    const isCreated= useSelector((state:AppState)=>state.technicalStaffReducer.isSuccessfullyDoneCreation)
    const isRemoved= useSelector((state:AppState)=>state.technicalStaffReducer.isSuccessfullyDoneDelete)
    const isErrorOccuredOnCreation= useSelector((state:AppState)=>state.technicalStaffReducer.isErrorOccured)
    const isErrorOccuredOnDelete= useSelector((state:AppState)=>state.technicalStaffReducer.isErrorOccuredOnDelete)



    const [forenameValue, setForenameValue] = React.useState<string>('');
    const onForenameChange = (e: any) => setForenameValue(e.target.value);
    const handleForenameSubmit = () => console.log(forenameValue);
    const handleForenameReset = () => setForenameValue("");

    const [surnameValue, setSurnameValue] = React.useState<string>('');
    const onSurnameChange = (e: any) => setSurnameValue(e.target.value);
    const handleSurnameSubmit = () => console.log(surnameValue);
    const handleSurnameReset = () => setSurnameValue("");

    const [dateOfBirth, setDateOfBirth] = React.useState<Date>(new Date('2000-01-01')
      );
      const handleDateOfBirthChange = (newValue: Date|null) => {
          if(newValue==null){
                setDateOfBirth(new Date('1990-01-01'))
                return
          }
          setDateOfBirth(newValue);
      };
      const handleDateOfBirthSubmit = () => console.log(dateOfBirth);
      const handleDateOfBirthReset = () => setDateOfBirth(new Date('1990-01-01'));

      const [titleValue, setTitleValue] = React.useState<string>('');
      const onTitleValueChange = (e: any) => setTitleValue(e.target.value);
      const handleTitleValueSubmit = () => console.log(titleValue);
      const handleTitleValueReset = () => setTitleValue("");

        const [educationValue, setEducationValue] = React.useState<string>('');
        const onEducationValueChange = (e: any) => setEducationValue(e.target.value);
        const handleEducationValueSubmit = () => console.log(educationValue);
        const handleEducationValueReset = () => setEducationValue("");


      const [countryValue, setCountryValue] = React.useState<CountryState>(countries[0]);
      const handleCountrySubmit = () => console.log(countryValue);
      const handleCountryReset = () => setCountryValue(countries[0]);


      const onSubmitDriver=()=>{
            const newTechnicalStaff:TechnicalStaffState =  
            {
                id:0,
                forename:forenameValue,
                surname:surnameValue,
                dateOfBirth:dateOfBirth,
                educationDetails:educationValue,
                title:titleValue,
                countryId:countryValue==null?3:countryValue.id
            };
            dispatch(addNewTechnicalStaff(newTechnicalStaff))         
        setSubmitFired(true)
        handleEducationValueSubmit()
        handleTitleValueSubmit()
        handleForenameSubmit()
        handleSurnameSubmit()
        handleDateOfBirthSubmit()
        handleCountrySubmit()

    }

      
    const onResetDriver=()=>{
        handleTitleValueReset()
        handleEducationValueReset()
        handleForenameReset()
        handleSurnameReset()
        handleDateOfBirthReset()
        handleCountryReset()
    }

    const onCloseForm=()=>{
        onResetDriver()
        props.closeForm()
    }


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        {!submitFired? 
         <Box sx={style}>
          <Grid>
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                 <h2>Register new staff</h2>
                 </Typography>
             </Grid>
             <Grid  >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter staff forename:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={forenameValue}
                     onChange={onForenameChange}
                     />
             </Grid>
             <Grid >
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter staff surename:
                     </Typography>
                     <TextField
                         style={{ display: 'inline-block',  width: 200 ,background:'#AAAAAA'}}
                         required
                         id="outlined-required"
                         label="Required"
                         defaultValue="Hello World"
                         size='small'
                         value={surnameValue}
                         onChange={onSurnameChange}
                         />
             </Grid>
           
             <Grid  >
 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                 Staff title:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={titleValue}
                     onChange={onTitleValueChange}
                     />
             </Grid>
    
             <Grid  >
 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                     Staff education:
                 </Typography>
                 <TextField
                     style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                     required
                     id="outlined-required"
                     label="Required"
                     defaultValue="Hello World"
                     size='small'
                     value={educationValue}
                     onChange={onEducationValueChange}
                     />
             </Grid>
             <Grid >
                 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                     Enter staff citizenship:
                 </Typography>
                 <Autocomplete
                     style={{ display: 'inline-block',  width: 200,fontSize:14,background:'#AAAAAA' }}
                     size='small'
                     disablePortal
                     options={countries}
                     getOptionLabel={option => option.name}
                     value={countryValue}
                     sx={{ width: 200 }}
                     renderInput={(params) => <TextField {...params} label="Country" />}
                     onChange={(_, newValue) => {
                         setCountryValue(newValue==null?countries[0]:newValue)
                     }}
                     />
             </Grid>
             <Grid >
                 
                 <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                     Enter staff birthday:
                     </Typography>
                 <DesktopDatePicker
                     label="Date desktop"
                     inputFormat="MM/dd/yyyy"
                     value={dateOfBirth}
                     onChange={handleDateOfBirthChange}
                     renderInput={(params) => <TextField {...params} />}
                     />
             </Grid>
             <Grid >
                 <Button variant="outlined" style={{ display: 'inline-flex', color:'#545454', background:'red', width: 150,padding:2, height: 50,fontSize:14}} onClick={()=>onCloseForm()} >
                     <CancelIcon fontSize='large' style={{marginRight:10}}/>
                     Close Form
                 </Button>
 
                 <Button variant="outlined" style={{ display: 'inline-flex',color:'red', background:'#545454',padding:2, width: 150, height: 50,fontSize:14,marginLeft:20 }} onClick={()=>onResetDriver()} >
                     <RestartAltIcon fontSize='large' style={{marginRight:10}} />
                     Reset Form
                 </Button>
 
                 <Button variant="contained" style={{ display: 'inline-flex',color:'white', background:'green', width: 150,padding:2, height: 50,fontSize:14,marginLeft:20}} onClick={()=>onSubmitDriver()}>
                    <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                     Save Staff
                 </Button>
 
             </Grid>
            
         </Box>
            :
              <Box sx={style}>
                  {isLoadingCreation &&
                 <Grid >
                     Loading
                 </Grid>
                  }
                   {isCreated &&
                  <Grid style={{fontSize:14}}>
                     Technical staff created
                     <Button variant="outlined" style={{display: 'inline-flex',float: 'right' ,color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                         <CancelIcon fontSize='large' style={{marginRight:10}}/>
                         Close Form
                     </Button>
                 </Grid>
                  }
                 
                   {isErrorOccuredOnCreation &&
                 <Grid style={{fontSize:14}}>
                     Technical staff not created.
                     <Button variant="outlined" style={{float: 'right',display: 'inline-flex',color:'#545454', background:'red', padding:2, width: 200, height: 25,fontSize:14,marginLeft:20}} onClick={()=>onCloseForm()} >
                         <CancelIcon fontSize='large' style={{marginRight:10}}/>
                         Close Form
                     </Button>
                 </Grid>
                  }
              </Box>  
         }
         </LocalizationProvider>
    );
}