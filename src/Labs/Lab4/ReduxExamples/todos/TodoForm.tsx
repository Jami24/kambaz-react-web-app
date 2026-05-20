"use client";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import type { RootState } from "../../store";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";

export default function TodoForm() {
    const { todo } = useSelector(
        (state: RootState) => state.todosReducer
    );
    const dispatch = useDispatch();

    return (
        <ListGroupItem>
            <Button
                id="wd-add-todo-click"
                onClick={() => dispatch(addTodo(todo))}
                className="me-2"
            >
                Add
            </Button>

            <Button
                id="wd-update-todo-click"
                onClick={() => dispatch(updateTodo(todo))}
                className="me-2"
                variant="warning"
            >
                Update
            </Button>

            <FormControl
                value={todo.title}
                onChange={(e) =>
                    dispatch(setTodo({ ...todo, title: e.target.value }))
                }
            />
        </ListGroupItem>
    );
}
