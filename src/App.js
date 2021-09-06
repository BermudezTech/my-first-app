import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import tasks from "./sample/tareas.json";
import "./index.css";

// Importando los componentes

import Tareas from "./components/Tareas";
import Notas from "./components/notas";

class App extends Component {
  state = {
    tasks: tasks,
  };
  eliminarTarea = (id) => {
    const nuevoArray = this.state.tasks.filter((e) => e.id !== id);
    this.setState({ tasks: nuevoArray });
  };
  nuevaTarea = (titulo, descripcion) => {
    const idTarea = this.state.tasks[this.state.tasks.length - 1].id + 1;
    const tarea = [
      {
        title: titulo,
        descripcion: descripcion,
        id: idTarea,
        done: false,
      },
    ];
    const arrayTareas = [...this.state.tasks, ...tarea];
    this.setState({
      tasks: arrayTareas,
    });
  };
  cambiarTarea = (id) => {
    const arrayTareas = this.state.tasks.map((tarea) => {
      tarea.done = tarea.id === id ? !tarea.done : tarea.done;
      return tarea;
    });
    this.setState({
      tasks: arrayTareas,
    });
  };
  render() {
    return (
      <div className="App" style={{ fontFamily: "sans-serif" }}>
        <Router>
          <div className="header">
            <h2>Mis tareas</h2>
            <div>
              <Link className="enlace" to="/my-first-app/">
                Tareas
              </Link>
              <Link className="enlace" to="/my-first-app/notes">
                Notas
              </Link>
            </div>
          </div>
          <Route
            exact
            path="/my-first-app/"
            render={() => {
              return (
                <Tareas
                  tasks={this.state.tasks}
                  delete={this.eliminarTarea}
                  nueva={this.nuevaTarea}
                  cambiar={this.cambiarTarea}
                />
              );
            }}
          ></Route>
          <Route
            path="/my-first-app/notes"
            render={() => {
              return <Notas />;
            }}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default App;
