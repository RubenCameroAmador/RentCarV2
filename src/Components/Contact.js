import React, { Component } from 'react'
import '../Styles/styles.css' 
export default class Contact extends Component{
    render(){
        return (
         <section class="page-section bg-primary text-white mb-0" id="contact">  
         <div id="contacto">
            <center>
                <h1> Contáctate con nosotros</h1>
            </center>
            <div class="row">
                <div class="col-md-4">
                    <p>
                        Universidad del Norte <br/>
                        Diseño de Software <br/>
                        Rubén Camero Amador <br/>
                        José Rodriguez Gonzales</p>
                </div>
                <div class="col-md-8">
                    <img src="https://i.ibb.co/q9KtDN7/Contactanos.png" alt="Imagen de contacto"/>
                </div>
            </div>
         </div>
         </section> 
    )
}
}