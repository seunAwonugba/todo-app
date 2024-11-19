import express from "express";
import {
    createTodo,
    deleteTodo,
    getTodo,
    getTodos,
    updateTodo,
} from "../controller/todo";

const todo = express.Router();

todo.post("/", createTodo);
todo.get("/", getTodos);
todo.get("/:id", getTodo);
todo.delete("/:id", deleteTodo);
todo.patch("/:id", updateTodo);

export { todo };
