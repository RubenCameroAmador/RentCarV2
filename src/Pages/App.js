import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './Principal'
import Registro from './Registro'
import NotFound from './NotFound'
import Nav from '../Components/Nav'
import Login from '../Components/Login'

const App = () => (
    <BrowserRouter>
            <Route path="/RentCar" exact component={Principal}/>
            <Route path="/RentCar/Login" component={Login}/>
            <Route path="/RentCar/Registro" component={Registro}/>
            {/* <Route component={NotFound}/> */}
    </BrowserRouter>
)
export default App