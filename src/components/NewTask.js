import React, { Component } from "react";

import "./formulario.css";

export default class NewTask extends Component {
  state = {
    titulo: "",
    descripcion: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.nueva(this.state.titulo, this.state.descripcion);
    this.setState({
      titulo: "",
      descripcion: "",
    });
  };
  cambio = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form className="formulario" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="titulo"
            placeholder="Escriba el titulo de la tarea"
            onChange={this.cambio}
            value={this.state.titulo}
          />
          <textarea
            name="descripcion"
            placeholder="Escriba la descripción"
            onChange={this.cambio}
            value={this.state.descripcion}
          ></textarea>
          <button>Añadir tarea</button>
        </form>
      </div>
    );
  }
}
