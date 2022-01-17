
import {Switch,Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Driver from './pages/Drivers/Driver';
import Countries from './pages/Countries/Countries';
import Constructors from './pages/Constructors/Constructors';
import NotFound  from './pages/NotFound/NotFound';

const Navigator =()=>(
            <Switch >
                {/* render all routes here */}
                <Route exact  path="/" component={Home}  />
                <Route  path="/drivers/" component={Driver}/>
                <Route  path="/countries/" component={Countries}/>
                <Route  path="/constructors/" component={Constructors}/>
                <Route exact component={NotFound} />
            </Switch >

    
)

export default Navigator;