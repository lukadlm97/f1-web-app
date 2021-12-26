import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';


import './appbar.scss'

interface AppbarProps{
    onClick:Function
    drawerState:boolean   
}

const Appbar=(props:AppbarProps)=> {

    const {onClick,drawerState} =props

   
    //on drawer close 
    const onDrawerClick=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }

    //cart menu open related state and functions

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
  
    const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCartMenuClose = () => {
        setAnchorEl(null);
      };

    

    return (
        <div className="appbar">
            <div className="appbar__content container">
              
                <div className="appbar__content-menu">
                     {/* menu hamburger icon */}
                     <MenuIcon className="cursor-pointer" onClick={onDrawerClick}/>
                </div>
                   {/* Logo area */}                  
                    {/* Logo component */}
                <img className='appbar__content-small-icon' src={process.env.PUBLIC_URL+'/images/app-resources/f1-nice-logo.png'} alt="country api text"/>
                    
                {/* right side items */}
                <div className="appbar__content-menu">

                     {/* menu hamburger icon */}
                         {/*    <MenuIcon className="cursor-pointer" onClick={onDrawerClick}/> */}
                 

                </div>
            </div>

          
        </div>
    )
}

export default Appbar