import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TodoRepository } from "../repository/todo";

const todoRepository = new TodoRepository();

export const createTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const body = req.body;

        const todo = await todoRepository.createTodo(body);
        return res.status(StatusCodes.OK).json({
            success: true,
            data: todo,
        });
    } catch (error) {
        next(error);
    }
};

export const getTodos = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const todos = await todoRepository.getTodos();
        return res.status(StatusCodes.OK).json({
            success: true,
            data: todos,
        });
    } catch (error) {
        next(error);
    }
};

export const getTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;

    try {
        const todo = await todoRepository.getTodo(Number(id));
        if (!todo) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                data: "Todo not found",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            data: todo,
        });
    } catch (error) {
        next(error);
    }
};

export const updateTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const todo = await todoRepository.getTodo(Number(id));
        if (!todo) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                data: "Todo not found",
            });
        }
        const updateTodo = await todoRepository.updateTodo(todo.id, body);
        return res.status(StatusCodes.OK).json({
            success: true,
            data: updateTodo,
        });
    } catch (error) {
        next(error);
    }
};
export const deleteTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    try {
        const todo = await todoRepository.getTodo(Number(id));
        if (!todo) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                data: "Todo not found",
            });
        }
        const deleteTodo = await todoRepository.deleteTodo(todo.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            data: "Todo deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
