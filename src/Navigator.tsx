import React from 'react'
import {Switch,Route,BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home';
import Driver from './pages/Drivers/Driver';
import NotFound  from './pages/NotFound/NotFound';

const Navigator =()=>(
<BrowserRouter>

            <Switch >
                {/* render all routes here */}
                <Route exact  path="/" component={Home}  />
                <Route  path="/drivers/" component={Driver}/>
                <Route exact component={NotFound} />
            </Switch >
</BrowserRouter>

    
)

export default Navigator;