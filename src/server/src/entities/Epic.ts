import { sequelize } from "../infrastructure/database";
import { DataTypes, Model } from "sequelize";
import Story from "./Story";
import { Progress } from "./Progress";

class Epic extends Model {
    declare id: number;
    declare name: string;
    declare stories: Story[];
    declare description: string;
    declare owner: number;
    declare worker: number;
    declare progress: number;
    declare timeCreated: Date;
};

Epic.init(
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
    { sequelize, modelName: 'epic' }
);

export default Epic;