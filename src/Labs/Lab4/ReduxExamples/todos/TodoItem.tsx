"use client";

import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button } from "react-bootstrap";

export default function TodoItem({ todo }: any) {
    const dispatch = useDispatch();

    return (
        <ListGroupItem>
            <Button
                id="wd-delete-todo-click"
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="me-2"
                variant="danger"
            >
                Delete
            </Button>

            <Button
                id="wd-set-todo-click"
                onClick={() => dispatch(setTodo(todo))}
                className="me-2"
            >
                Edit
            </Button>

            {todo.title}
        </ListGroupItem>
    );
}
