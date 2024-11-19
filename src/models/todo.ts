"use strict";
import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import sequelize from ".";

class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare status: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associations: {
        // define association here
    };
}
Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        status: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },

    {
        sequelize: sequelize!,
        tableName: "todos",
        modelName: "todo",
    }
);
export default Todo;
