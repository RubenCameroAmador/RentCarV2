import React from 'react'

class Carrucel extends React.Component{
    render(){
        return(
            /*<div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://ibb.co/PDw0PPH" alt="First slide" style={{ marginTop: "72px"}}/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://ibb.co/sP6zFpf" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="https://ibb.co/F5hZVLg" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>*/
            <div className = "container" style={{ marginTop: "100px" }}>
                <div class = "row">
                    <div className = "col s12"> 
                        <h1>Que hay de nuevo viejo?</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Carrucel