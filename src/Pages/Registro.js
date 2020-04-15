import React from 'react'
import Nav from '../Components/Nav'
class Registro extends React.Component{
    state = {}

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            /*<button onClick={this.handleClick}>
                Send
            </button>*/
            <div className="container">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nombre" 
                            name="Nombre"
                            onChange={this.handleChange}
                            value={this.state.Nombre}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Apellido" 
                            name="Apellido"
                            onChange={this.handleChange}
                            value={this.state.Apellido}
                        />    
                    </div>
                </div>
                <hr></hr>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Correo @uninorte.edu.co" 
                        name="Correo"
                        onChange={this.handleChange}
                        value={this.state.Correo}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Contraseña" 
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
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
        )
    }
}
export default Registro