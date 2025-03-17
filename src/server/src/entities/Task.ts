import { sequelize } from "../infrastructure/database";
import { DataTypes, Model } from "sequelize";
import { Progress } from "./Progress";
import User from "./User";

// let conn: Sequelize;
// getConnection().then((value) => {
//     conn = value;
// });

class Task extends Model {
    declare id: number;
    declare parentStory: number;
    declare name: string;
    declare subtasks: Task[];
    declare description: string;
    declare owner: number;
    declare worker: number;
    declare progress: number;
    declare timeCreated: Date;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    msg: 'A task name can only be between 1 and 50 characters',
                    args: [1, 50]
                }
            }
        },
        description: {
            type: DataTypes.STRING
        }
    },
    { sequelize, modelName: 'task' }
);
Task.owner = Task.hasOne(User);

export default Task