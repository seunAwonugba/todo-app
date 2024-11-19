import Todo from "../models/todo";

export class TodoRepository {
    async createTodo(todo: Todo) {
        const create = await Todo.create(todo);
        return create;
    }
    async getTodos() {
        const create = await Todo.findAll();
        return create;
    }
    async getTodo(id: number) {
        const create = await Todo.findByPk(id);
        return create;
    }

    async updateTodo(id: number, data: any) {
        const [affectedRowsCount, [updatedRecord]] = await Todo.update(
            { ...data },
            {
                where: { id },
                returning: true,
                validate: true,
            }
        );

        if (affectedRowsCount > 0 && updatedRecord) {
            return updatedRecord;
        }
    }
    async deleteTodo(id: number) {
        const create = await Todo.destroy({
            where: {
                id,
            },
        });
        return create;
    }
}
