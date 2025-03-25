// import { sequelize } from "../infrastructure/database";
import { Sequelize } from "sequelize";
import { DataTypes, Model } from "sequelize";
import Task from './Task';
import { Progress } from "./Progress";
import User from "./User";
import Epic from "./Epic";

const sequelize: Sequelize = new Sequelize({
    database: 'test.db',
    dialect: 'sqlite',
    storage: '../../database.sqlite',
    logging: console.log
});
 
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

class Story extends Model {
    declare id: number;
    declare name: string;
    declare taskId: number;
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
        },
        progress: {
            type: DataTypes.STRING
        }
    },
    { sequelize, modelName: 'story' }
);

Story.hasMany(Task, {
    foreignKey: 'taskId',
    sourceKey: 'id'
});

Story.hasOne(User, {
    foreignKey: {
        name: 'owner',
        allowNull: false
    },
    sourceKey: 'id'
});

Story.hasOne(User, {
    foreignKey: {
        name: 'worker'
    },
    sourceKey: 'id'
});

Story.belongsTo(Epic)

sequelize.sync().then(() => {
    console.log('Story table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

export default Story;