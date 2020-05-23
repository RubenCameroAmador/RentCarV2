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
                <div class="col-md-6">
                    <p style={{color: 'black', marginTop: '100px', marginLeft: '250px', fontSize: '1rem'}}>
                        Universidad del Norte <br/>
                        Diseño de Software <br/>
                        Rubén Camero Amador <br/>
                        José Rodriguez Gonzales</p>
                </div>
                <div class="col-md-6">
                    <img src="https://i.ibb.co/hFcdnMm/undraw-contact-us-15o2.png" alt="Imagen de contacto" style = {{width: '400px', marginLeft: '10px', marginTop: '50px'}}/>
                </div>
            </div>
         </div>
         </section> 
    )
}
}