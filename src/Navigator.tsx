
import {Switch,Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Driver from './pages/Drivers/Driver';
import Countries from './pages/Countries/Countries';
import Constructors from './pages/Constructors/Constructors';
import Constructor from './pages/Constructors/Constructor';
import Staff from './pages/Staff/Staff';
import NotFound  from './pages/NotFound/NotFound';
import PowerUnitSuppliers from './pages/PowerUnitSuppliers/PowerUnitSuppliers'

const Navigator =()=>(
            <Switch >
                {/* render all routes here */}
                <Route exact  path="/" component={Home}  />
                <Route  path="/drivers/" component={Driver}/>
                <Route  path="/countries/" component={Countries}/>
                <Route  path="/constructors/" component={Constructors}/>
                <Route  path="/technicalStaff/" component={Staff}/>
                <Route path="/constructor/:shortName" component={Constructor}/>
                <Route path="/powerUnitSuppliers" component={PowerUnitSuppliers}/>
                <Route exact component={NotFound} />
            </Switch >

    
)

export default Navigator;