import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const HTTP_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const API = `${HTTP_SERVER}/lab5/todos`;

    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        completed: false,
    });

    return (
        <div id="wd-working-with-arrays">
            <h3>Working With Arrays</h3>

            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>

            <hr />

            <h4>Retrieving an Item from an Array by ID</h4>
            <div className="row align-items-center mb-3">
                <div className="col-8">
                    <FormControl
                        id="wd-todo-id"
                        defaultValue={todo.id}
                        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                    />
                </div>
                <div className="col-4">
                    <a id="wd-retrieve-todo-by-id" className="btn btn-primary w-100" href={`${API}/${todo.id}`}>
                        Get Todo by ID
                    </a>
                </div>
            </div>

            <hr />

            <h4>Filtering Array Items</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <hr />

            <h4>Creating new Items in an Array</h4>
            <a id="wd-create-todo" className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>

            <hr />

            <h4>Removing from an Array</h4>
            <div className="row align-items-center mb-3">
                <div className="col-8">
                    <FormControl
                        id="wd-remove-todo"
                        defaultValue={todo.id}
                        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                    />
                </div>
                <div className="col-4">
                    <a id="wd-delete-todo" className="btn btn-primary w-100" href={`${API}/${todo.id}/delete`}>
                        Delete Todo with ID = {todo.id}
                    </a>
                </div>
            </div>

            <hr />

            <h4>Updating an Item in an Array</h4>
            <div className="row align-items-center mb-3">
                <div className="col-3">
                    <FormControl
                        defaultValue={todo.id}
                        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                    />
                </div>
                <div className="col-6">
                    <FormControl
                        defaultValue={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                    />
                </div>
                <div className="col-3">
                    <a id="wd-update-todo" className="btn btn-primary w-100" href={`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`}>
                        Update Todo
                    </a>
                </div>
            </div>

            <hr />

            <hr />

            <h4>Updating Todo Description</h4>

            <div className="row align-items-center mb-3">
                <div className="col-8">
                    <FormControl
                        defaultValue={todo.description}
                        onChange={(e) =>
                            setTodo({
                                ...todo,
                                description: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="col-4">
                    <a
                        className="btn btn-primary w-100"
                        href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
                    >
                        Describe Todo ID = {todo.id}
                    </a>
                </div>
            </div>

            <hr />

            <h4>Updating Todo Completed</h4>

            <div className="row align-items-center mb-3">
                <div className="col-8">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) =>
                            setTodo({
                                ...todo,
                                completed: e.target.checked,
                            })
                        }
                    />
                    <span className="ms-2">Completed</span>
                </div>

                <div className="col-4">
                    <a
                        className="btn btn-primary w-100"
                        href={`${API}/${todo.id}/completed/${todo.completed}`}
                    >
                        Complete Todo ID = {todo.id}
                    </a>
                </div>
            </div>
        </div>
    );
}