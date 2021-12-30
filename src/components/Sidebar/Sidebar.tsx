import React from 'react'
import {useHistory } from 'react-router-dom';

import Drawer  from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PagesIcon from '@mui/icons-material/Pages';
import BuildIcon from '@mui/icons-material/Build';
import RouteIcon from '@mui/icons-material/Route';
import FlagIcon from '@mui/icons-material/Flag';



import './sidebar.scss'

interface SidebarProps{

    onClick:Function
    drawerState:boolean

}

const Sidebar=(props:SidebarProps) =>{

    const {onClick, drawerState}=props
    const history=useHistory();


    //on drawer close 
    const onDrawerClose=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }

    //switch primary color

    const switchPrimaryColor=(primary:string, primaryHover:string)=>{
        document.documentElement.style.setProperty('--primary-color', primary)
        document.documentElement.style.setProperty('--primary-color-hover', primaryHover)

    }

    const onMenuItemClick=(selectedItem:string)=>{
        history.push(selectedItem);
        onClick(!drawerState)
    }

    return (
        <div className="sidebar">
            {/* Drawer */}

            <Drawer anchor="left" open={drawerState} onClose={onDrawerClose} className="sidebar__drawer">
                <div className="sidebar__drawer-content">
                    <CloseIcon onClick={onDrawerClose} className="sidebar__close-menu"/>
                    {/* themes and other stuffs */}

                    <div className="sidebar__navigation">
                        <h2>F1 Menu</h2>
                        <ul>
                            <li className="cursor-pointer" onClick={()=>onMenuItemClick('/')}>
                                    <span><PagesIcon/></span>
                                    <h2>Home</h2>
                            </li>
                            <li className="cursor-pointer" onClick={()=>onMenuItemClick('/drivers')}>
                                    <span ><GroupsIcon/></span>
                                    <h2>Drivers</h2>
                            </li>
                            <li className="cursor-pointer" onClick={()=>onMenuItemClick('/countries')}>
                                    <span ><FlagIcon/></span>
                                    <h2>Countries</h2>
                            </li>
                            <li className="cursor-pointer" onClick={()=>switchPrimaryColor("#23F0DC", "#18D4C2")}>
                                <span> <EmojiEventsIcon/> </span>
                                <h2>Championships</h2>
                            </li>
                            <li className="cursor-pointer" onClick={()=>switchPrimaryColor("#F1622F", "#EA4E16")}>
                                <span><RouteIcon/></span>
                                <h2>Races</h2>
                            </li>
                        </ul>
                    </div>


                </div>
            </Drawer>
            
        </div>
    )
}

export default Sidebar