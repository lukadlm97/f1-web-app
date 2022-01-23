import React from 'react';
import {ClipLoader} from 'react-spinners'
import { css } from "@emotion/react";

import {createTheme} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles'

import Appbar from './components/Appbar/Appbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

//base style
import './_base.scss'

import Navigator from './Navigator';
import {useDispatch, useSelector } from 'react-redux'

import {fetchAllCountries} from './redux/actions/CountryAction'
import {fetchAllCompetitions} from './redux/actions/CompetitionAction'
import {AppState} from './types/AppState';


//create material UI theme 
const theme = createTheme({
  palette: {
    primary: {
      main: '#D3E4CD',
      dark: '#f09c01',
    },
    secondary: {
      main: '#11cb5f',
    },
    text: {
      primary: '#373585',
      secondary: '#a4a6b3',
    },
    background: {
      default: '#f7f8fc',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans- serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 8,
  },
})

function App() {

  const isLoading= useSelector((state:AppState)=>state.countryReducer.isLoading)

//initialize dispatch
const dispatch=useDispatch()

  React.useEffect(()=>{
    dispatch(fetchAllCountries())
    dispatch(fetchAllCompetitions())
},[])

  const [drawerState, setDrawerState] = React.useState(false)

  
  //handle drawer state
    const handleDrawerState=(state:boolean)=>{
        setDrawerState(state)
    }


const override = css`
    display: block;
    margin-top:200px;
    margin-left:auto;
    margin-right:auto;
  `;

  return (
    <div>

      {isLoading && 
        <div>
          <ClipLoader speedMultiplier={2}  css={override} size={150} color='#99a799'/>
        </div>
      }
         
      {!isLoading &&
        <ThemeProvider theme={theme}>
          <div className="App">
            {/* appbar component  */}
            <Appbar onClick={handleDrawerState} drawerState={drawerState}/>

            {/* Sidebar  */}             
            <Sidebar onClick={handleDrawerState} drawerState={drawerState}/>
            <Navigator />
            <Footer />
          </div>
        </ThemeProvider>
      }
      </div>
    
  );
}

export default App;
