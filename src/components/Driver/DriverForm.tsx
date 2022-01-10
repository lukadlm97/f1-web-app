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

import {useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../types/AppState'

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
    const isLoading= useSelector((state:AppState)=>state.countryReducer.isLoading)
    

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

    const [forename, setForenameValue] = React.useState<string>('');

    const onForenameChange = (e: any) => setForenameValue(e.target.value);
    const handleForenameSubmit = () => console.log(forename);
    const handleForenameReset = () => setForenameValue("");

    const [surname, setSurnameValue] = React.useState<string>('');

    const onSurnameChange = (e: any) => setSurnameValue(e.target.value);
    const handleSurnameSubmit = () => console.log(surname);
    const handleSurnameReset = () => setSurnameValue("");

    const [dateOfBirth, setDateOfBirth] = React.useState<Date | null>(
        new Date('2000-01-01'),
      );
    
      const handleDateOfBirthChange = (newValue: Date | null) => {
          setDateOfBirth(newValue);
      };
      const handleDateOfBirthSubmit = () => console.log(dateOfBirth);
      const handleDateOfBirthReset = () => setDateOfBirth(null);

    const [countryValue, setCountryValue] = React.useState<string>('');

    const handleCountryChange = (newValue: any) => {
        console.log(newValue)
        setCountryValue(newValue.target.value);
    };

    const handleCountrySubmit = () => console.log(countryValue);
      const handleCountryReset = () => setCountryValue('');


const onSubmitDriver=()=>{
    handleCodeSubmit()
    handleNumberSubmit()
    handleForenameSubmit()
    handleSurnameSubmit()
    handleDateOfBirthSubmit()

}


const onResetDriver=()=>{
    handleNumberReset()
    handleNumberReset()
    handleForenameReset()
    handleSurnameReset()
    handleDateOfBirthReset()

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
                    style={{ display: 'inline-block',  width: 200 }}
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
                    style={{ display: 'inline-block', width: 200 }}
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
                    style={{ display: 'inline-block',  width: 200 }}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    size='small'
                    value={forename}
                    onChange={onForenameChange}
                    />
            </Grid>
            <Grid >
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Enter driver surename:
                    </Typography>
                    <TextField
                        style={{ display: 'inline-block',  width: 200 }}
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        size='small'
                        value={surname}
                        onChange={onSurnameChange}
                    />
            </Grid>
            <Grid >
                
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'inline-block', width: 270,  height: 70 }} fontSize={15}>
                    Enter driver citizenship:
                </Typography>
                <Autocomplete
                    style={{ display: 'inline-block',  width: 200 }}
                    size='small'
                    disablePortal
                    options={countries}
                    getOptionLabel={option => option.name}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    onChange={handleCountryChange}
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
                <Button variant="outlined" color="error" style={{ display: 'inline-block', width: 150, height: 50,marginRight:120 }} onClick={()=>onResetDriver()} >
                    Reset
                </Button>

                <Button variant="contained" color="success" style={{ display: 'inline-flex', width: 150, height: 50  }} onClick={()=>onSubmitDriver()}>
                    Register
                </Button>

            </Grid>
           
        </Box>
           
        </LocalizationProvider>
    );
}