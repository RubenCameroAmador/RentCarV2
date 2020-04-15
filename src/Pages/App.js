import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './Principal'
import Registro from './Registro'
import NotFound from './NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/RentCar" component={Principal}/>
            <Route exact path="/RentCar/Registro" component={Registro}/>
            <Route component={NotFound}/>
        </Switch>       
    </BrowserRouter>
)
export default App