import React, { Component } from "react";

import Tarea from "./Tarea";
import "./lista-tareas.css";
import NewTask from "./NewTask";

export default class Tareas extends Component {
  render() {
    return (
      <div className="main">
        <h1>Este es el componente de tareas</h1>
        <div className="Tareas">
          {this.props.tasks.map((e) => (
            <Tarea
              tarea={e}
              key={e.id}
              delete={this.props.delete}
              cambiar={this.props.cambiar}
            />
          ))}
        </div>
        <h2>Añadir nuevas tareas</h2>
        <NewTask nueva={this.props.nueva} />
      </div>
    );
  }
}
