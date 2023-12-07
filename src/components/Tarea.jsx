import React, { Component } from "react";
import "./Tarea.css";

export default class Tarea extends Component {
  state = {
    id: this.props.tarea.id,
    title: this.props.tarea.title,
    descripcion: this.props.tarea.descripcion,
    done: this.props.tarea.done,
  };

  cambiarDone = (e) => {
    this.setState({
      done: !this.state.done,
    });
    this.props.cambiar(this.state.id);
  };

  completado() {
    return {
      color: this.state.done ? "gray" : "black",
      textDecoration: this.state.done ? "line-through" : "none",
    };
  }

  estado() {
    return {
      opacity: this.state.done ? "0.5" : "1",
    };
  }

  render() {
    return (
      <div className="tarea" style={this.estado()}>
        <h2 style={this.completado()}>{this.state.title}</h2>
        <p>{this.state.descripcion}</p>
        <input
          type="checkbox"
          onChange={this.cambiarDone}
          checked={this.state.done}
        />
        <br />
        <button onClick={this.props.delete.bind(this, this.state.id)}>
          Eliminar
        </button>
      </div>
    );
  }
}
