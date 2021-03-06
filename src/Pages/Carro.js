import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Nav from '../Components/Nav'
class Carro extends React.Component{
    state = {
        idcar: '',
        marca: '',
        modelo: '',
        cilindraje: '',
        color: '',
        placa: '',
        puertas : '',
    }
    onChangemarca = (e) => {
        this.setState({
            marca: e.target.value
        })
    }
    onChangemodelo = (e) => {
        this.setState({
            modelo: e.target.value
        })
    }
    onChangecilindraje = (e) => {
        this.setState({
            cilindraje: e.target.value
        })
    }
    onChangecolor = (e) => {
        this.setState({
            color: e.target.value
        })
    }
    onChangeplaca = (e) => {
        this.setState({
            placa: e.target.value
        })
    }
    onChangepuertas = (e) => {
        this.setState({
            puertas: e.target.value
        })
    }
    onSubmit = e => {
        /* e.preventDefault() */
        const res = axios.post('https://rentcar-back.herokuapp.com/cars', {
            idcar: this.validar(),
            marca: this.state.marca,
            modelo: this.state.modelo,
            cilindraje: this.state.cilindraje,
            color: this.state.color,
            placa: this.state.placa,
            puertas : this.state.puertas,
        });
        console.log(res)
    }
    async componentDidMount() {
        const res = await axios.get('https://rentcar-back.herokuapp.com/cars');
        this.setState({ cars: res.data });
    }
    validar() {
        var sw = false
        var ram=Math.floor((Math.random() * 100) + 1)
        while (sw === false) {
            var entro = false;
            var i = 1;
            this.state.cars.map(cars => {
                if (cars.idcar == ram) {
                   ram = Math.floor((Math.random() * 7) + 1);
                   if(i==1){
                        entro = true;
                        i=i+1;
                   }
                }
            })
            if(entro==false){
                sw=true
            }
        }
        return ram
    }
    render(){
        return(
            <Fragment>
                <Nav
                str1 = ""
                str2 = ""
                str3 = ""
                str4 = "Log out"
                />
                <div className="container Registro-size" style={{ marginTop: "150px" }}>
                    <form
                        onSubmit={this.onSubmit}
                    >
                        <h3>Registro de Carro</h3>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Marca"
                                    name="Marca"
                                    onChange={this.onChangemarca}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Modelo"
                                    name="Modelo"
                                    onChange={this.onChangemodelo}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cilindraje"
                                    name="Cilindraje"
                                    onChange={this.onChangecilindraje}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Color"
                                    name="Color"
                                    onChange={this.onChangecolor}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Placa"
                                    name="Placa"
                                    onChange={this.onChangeplaca}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="# de puertas"
                                    name="Puertas"
                                    onChange={this.onChangepuertas}
                                />
                            </div>
                        </div>
                        <hr></hr>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Registrar
                        </button>
                    </form>
                </div>
            </Fragment>    
        )
    }
}
export default Carro