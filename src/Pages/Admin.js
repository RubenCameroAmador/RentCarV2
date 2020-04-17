import React, { Component, Fragment } from 'react'
import Nav from '../Components/Nav'
import '../Styles/Admin.css'
import { Link } from 'react-router-dom'
class Admin extends React.Component{
    render(){
        return (
        <Fragment>
        <Nav
        str1 = ""
        str2 = ""
        str3 = ""
        str4 = "Log out"
        />
        <div className = "container" style={{ marginTop: "100px" }}>
        <h1>Bienvenido Administrador</h1>
            <div className = "row">
                <div className = "col - 4">
                    
                </div>
                <div className = "col - 4">
                    <hr></hr>
                 <div className = "row">
                    <Link className="navbar-brand" style={{ color: 'black' }} to="/RentCar/Carro">
                                                Agregar Carros 
                    </Link>
                </div>
                    <hr></hr>
                <div className = "row">
                    <Link className="navbar-brand" style={{ color: 'black' }} to="/RentCar/Registro">
                                                Verificar Reservas
                    </Link>
                </div>
                </div>
                <div className = "col - 4">
                    
                </div>

            </div>
        </div>
        </Fragment>
        )
    }
}
export default Admin