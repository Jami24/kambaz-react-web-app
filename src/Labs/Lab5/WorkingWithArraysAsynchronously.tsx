import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FormControl from "react-bootstrap/FormControl";
import { FaPlusCircle, FaTrash, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };

    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const createNewTodo = async () => {
        const todos = await client.createNewTodo();
        setTodos(todos);
    };

    const postNewTodo = async () => {
        const newTodo = await client.postNewTodo({
            title: "New Posted Todo",
            completed: false,
        });

        setTodos([...todos, newTodo]);
    };

    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo);

            const newTodos = todos.filter(
                (t) => t.id !== todo.id
            );

            setTodos(newTodos);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };

    const editTodo = (todo: any) => {
        const updatedTodos = todos.map((t) => {
            if (t.id === todo.id) {
                return { ...todo, editing: true };
            }

            return t;
        });

        setTodos(updatedTodos);
    };

    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo);

            setTodos(
                todos.map((t) =>
                    t.id === todo.id ? todo : t
                )
            );

            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>

            {errorMessage && (
                <div
                    id="wd-todo-error-message"
                    className="alert alert-danger mb-2 mt-2"
                >
                    {errorMessage}
                </div>
            )}

            <h4>
                Todos

                <FaPlusCircle
                    onClick={createNewTodo}
                    className="text-success float-end fs-3"
                    id="wd-create-todo"
                />

                <FaPlusCircle
                    onClick={postNewTodo}
                    className="text-primary float-end fs-3 me-3"
                    id="wd-post-todo"
                />
            </h4>

            <button
                className="btn btn-warning mb-3"
                onClick={() => deleteTodo({ id: 123 })}
            >
                Test Delete Error
            </button>

            <ListGroup>
                {todos.map((todo) => (
                    <ListGroup.Item key={todo.id}>
                        <FaTrash
                            onClick={() => removeTodo(todo)}
                            className="text-danger float-end mt-1"
                            id="wd-remove-todo"
                        />

                        <TiDelete
                            onClick={() => deleteTodo(todo)}
                            className="text-danger float-end me-2 fs-3"
                            id="wd-delete-todo"
                        />

                        <FaPencilAlt
                            onClick={() => editTodo(todo)}
                            className="text-primary float-end me-2 mt-1"
                        />

                        <input
                            type="checkbox"
                            defaultChecked={todo.completed}
                            className="form-check-input me-2"
                            onChange={(e) =>
                                updateTodo({
                                    ...todo,
                                    completed: e.target.checked,
                                })
                            }
                        />

                        {!todo.editing && (
                            <span
                                style={{
                                    textDecoration: todo.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {todo.title}
                            </span>
                        )}

                        {todo.editing && (
                            <FormControl
                                className="w-50 d-inline-block"
                                defaultValue={todo.title}
                                onChange={(e) =>
                                    updateTodo({
                                        ...todo,
                                        title: e.target.value,
                                    })
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        updateTodo({
                                            ...todo,
                                            editing: false,
                                        });
                                    }
                                }}
                            />
                        )}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <hr />
        </div>
    );
}