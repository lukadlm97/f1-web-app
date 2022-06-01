
import {Switch,Route,Router } from 'react-router-dom'

import Home from './pages/Home/Home';
import Drivers from './pages/Drivers/Drivers';
import DriverDetailsPage from './pages/Drivers/DriverDetailsPage';
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
                    <Route exact path="/drivers/" component={Drivers}/>
                    <Route exact path="/countries/" component={Countries}/>
                    <Route exact path="/constructors/" component={Constructors}/>
                    <Route exact path="/technicalStaff/" component={Staff}/>
                    <Route exact path="/constructor/:constructorId" component={Constructor}/>
                    <Route exact path="/drivers/details/:driverNo" component={DriverDetailsPage}/>
                    <Route exact path="/powerUnitSuppliers" component={PowerUnitSuppliers}/>
                    <Route exact component={NotFound} />
                
            </Switch >

    
)

export default Navigator;