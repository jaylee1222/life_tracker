import { sequelize } from "../infrastructure/database";
import { DataTypes, Model } from "sequelize";
import Task from "./Task";

class User extends Model {
    declare id: number
    declare firstName: string;
    declare lastName: string;
    declare assignedTasks: Task[];
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    },
    { sequelize, modelName: 'user' }
);

export default User;