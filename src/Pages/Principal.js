import React from 'react'
import Nav from '../Components/Nav'
import Carrucel from '../Components/Carrucel'
class Principal extends React.Component{
    render(){
        return(
            <div>
                <Nav
                str1 = "Como Funciona"
                str2 = "Servicio"
                str3 = "Contacto"
                str4 = "Join"/>
                <Carrucel/>
            </div>
        )
    }
}
export default Principal