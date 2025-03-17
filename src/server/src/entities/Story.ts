import { sequelize } from "../infrastructure/database";
import { DataTypes, Model } from "sequelize";
import Task from './Task';
import { Progress } from "./Progress";

class Story extends Model {
    declare id: number;
    declare parentEpic: number;
    declare name: string;
    declare tasks: Task[];
    declare description: string;
    declare owner: number;
    declare worker: number;
    declare progress: number;
};

Story.init(
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
    { sequelize, modelName: 'story' }
);

export default Story;