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

import {useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'
import { CountryState } from '../../types/CountryTypes';
import { DriverState } from '../../types/DriverTypes';

import {addNewDriver} from '../../redux/actions/DriverAction';

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

export default function DriverForm() {

    const countries= useSelector((state:AppState)=>state.countryReducer.countries)
    const isLoading= useSelector((state:AppState)=>state.driverReducer.isLoading)
    const isLoadingAddNewDriver= useSelector((state:AppState)=>state.driverReducer.isLoadingAddNewDriver)
    const isCreated= useSelector((state:AppState)=>state.driverReducer.isCreated)
    const isErrorOccured= useSelector((state:AppState)=>state.driverReducer.isErrorOccuredOnCreation)
    const [submitFired,setSubmitFired] = React.useState<boolean>(false);
    //initialize dispatch
    const dispatch=useDispatch()
    

    const [codeValue, setCodeValue] = React.useState<string>('');

    const onCodeChange = (e: any) => setCodeValue(e.target.value);
    const handleCodeSubmit = () => console.log(codeValue);
    const handleCodeReset = () => setCodeValue("");

    const [numberValue, setNumberValue] = React.useState<number>(0);

    const onNumberChange = (e: any) => {
        setNumberValue(parseInt(e.target.value))
    }
    const handleNumberSubmit = () => console.log(numberValue);
    const handleNumberReset = () => setNumberValue(0);

    const [forenameValue, setForenameValue] = React.useState<string>('');

    const onForenameChange = (e: any) => setForenameValue(e.target.value);
    const handleForenameSubmit = () => console.log(forenameValue);
    const handleForenameReset = () => setForenameValue("");

    const [surnameValue, setSurnameValue] = React.useState<string>('');

    const onSurnameChange = (e: any) => setSurnameValue(e.target.value);
    const handleSurnameSubmit = () => console.log(surnameValue);
    const handleSurnameReset = () => setSurnameValue("");

    const [dateOfBirth, setDateOfBirth] = React.useState<Date>(
        new Date('2000-01-01'),
      );
    
      const handleDateOfBirthChange = (newValue: Date|null) => {
          if(newValue==null){
                setDateOfBirth(new Date('2000-01-01'))
                return
          }
          setDateOfBirth(newValue);
      };
      const handleDateOfBirthSubmit = () => console.log(dateOfBirth);
      const handleDateOfBirthReset = () => setDateOfBirth(new Date('2000-01-01'));

    const [countryValue, setCountryValue] = React.useState<CountryState>();

    const handleCountrySubmit = () => console.log(countryValue);
    const handleCountryReset = () => setCountryValue(countries[0]);


    const onSubmitDriver=()=>{
        const newDriver:DriverState =  
        {
            id:0,
            code:codeValue,
            forename:forenameValue,
            surname:surnameValue,
            dateOfBirth:dateOfBirth,
            isRetired:false,
            number:numberValue,
            countryId:countryValue==null?3:countryValue.id
        };

        handleCodeSubmit()
        handleNumberSubmit()
        handleForenameSubmit()
        handleSurnameSubmit()
        handleDateOfBirthSubmit()
        handleCountrySubmit()

        dispatch(addNewDriver(newDriver))
        setSubmitFired(true)
    }


    const onResetDriver=()=>{
        handleCodeReset()
        handleNumberReset()
        handleForenameReset()
        handleSurnameReset()
        handleDateOfBirthReset()
        handleCountryReset()
    }

    /*
    forename:string
    surname:string
    dateOfBirth:Date
    isRetired:boolean
    countryId:number
    */
   
   return (
       <LocalizationProvider dateAdapter={AdapterDateFns}>
       {!submitFired? 
        <Box sx={style}>
            <Grid>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 400, height: 80 }}>
                <h2>Register new driver</h2>
                </Typography>
            </Grid>
            <Grid  >

                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                    Driver code:
                </Typography>
                <TextField
                    style={{ display: 'inline-block',  width: 200,background:'#AAAAAA'}}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={codeValue}
                    onChange={onCodeChange}
                    />
            </Grid>
            <Grid  >

                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270, height: 70 }} fontSize={15}>
                    Enter driver number:
                </Typography>
                <TextField
                    style={{ display: 'inline-block', width: 200,background:'#AAAAAA' }}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={numberValue}
                    onChange={onNumberChange}
                    />
            </Grid>
            <Grid  >

                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Enter driver forename:
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
                    Enter driver surename:
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
            <Grid >
                
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Enter driver citizenship:
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
                    Enter driver birthday:
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
                <Button variant="outlined" color="error" style={{ display: 'inline-block', width: 150, height: 50,fontSize:14,background:'#545454' }} onClick={()=>onResetDriver()} >
                    <RestartAltIcon fontSize='large' style={{marginRight:10}}/>
                    Reset
                </Button>

                <Button variant="contained" color="success" style={{ float: 'right', width: 150, height: 50,fontSize:14,marginRight:50   }} onClick={()=>onSubmitDriver()}>
                   <HowToRegIcon fontSize='large' style={{marginRight:10}} />
                    Register
                </Button>

            </Grid>
           
        </Box>
           :
             <Box sx={style}>
                 {isLoadingAddNewDriver &&
                <Grid >
                    Loading
                </Grid>
                 }
                  {isCreated &&
                <Grid >
                    Driver created
                </Grid>
                 }
                  {isErrorOccured &&
                <Grid >
                    Driver not created.
                </Grid>
                 }
             </Box>  
        }
        </LocalizationProvider>
    );
}