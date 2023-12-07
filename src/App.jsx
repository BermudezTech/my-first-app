import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import tasks from "./sample/tareas.json";
import Tareas from "./components/Tareas";
import Notas from "./components/notas";
import "../src/App.css";

function App() {
    const [state, setState] = React.useState({
        tasks: tasks,
    });

    const eliminarTarea = (id) => {
        const nuevoArray = state.tasks.filter((e) => e.id !== id);
        setState({ tasks: nuevoArray });
    };

    const nuevaTarea = (titulo, descripcion) => {
        const idTarea = state.tasks[state.tasks.length - 1].id + 1;
        const tarea = [
            {
                title: titulo,
                descripcion: descripcion,
                id: idTarea,
                done: false,
            },
        ];
        const arrayTareas = [...state.tasks, ...tarea];
        setState({
            tasks: arrayTareas,
        });
    };

    const cambiarTarea = (id) => {
        const arrayTareas = state.tasks.map((tarea) => {
            tarea.done = tarea.id === id ? !tarea.done : tarea.done;
            return tarea;
        });
        setState({
            tasks: arrayTareas,
        });
    };

    return (
        <div className="App" style={{ fontFamily: "sans-serif" }}>
            <Router>
                <div className="header">
                    <h2>Mis tareas</h2>
                    <div>
                        <Link className="enlace" to="/proyectos/my-first-app/">
                            Tareas
                        </Link>
                        <Link
                            className="enlace"
                            to="/proyectos/my-first-app/notes"
                        >
                            Notas
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route
                        path="/proyectos/my-first-app/"
                        element={
                            <Tareas
                                tasks={state.tasks}
                                delete={eliminarTarea}
                                nueva={nuevaTarea}
                                cambiar={cambiarTarea}
                            />
                        }
                    />
                    <Route
                        path="/proyectos/my-first-app/notes"
                        element={<Notas />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
