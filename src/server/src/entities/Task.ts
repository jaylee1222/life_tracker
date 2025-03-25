// import { sequelize } from "../infrastructure/database";
import { Sequelize } from "sequelize";
import { DataTypes, Model } from "sequelize";
import { Progress } from "./Progress";
import User from "./User";
import Story from "./Story";

// let conn: Sequelize;
// getConnection().then((value) => {
//     conn = value;
// });

// class Task extends Model {
//     declare id: number;
//     declare name: string;
//     declare taskId: Task[];
//     declare description: string;
//     declare owner: number;
//     declare worker: number;
//     declare progress: number;
//     declare timeCreated: Date;
// }

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

const Task = sequelize.define(
    'Task',
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
    }
    // { sequelize, modelName: 'task' }
);
Task.hasOne(User, {
    foreignKey: {
        name: 'owner',
        allowNull: false
    },
    sourceKey: 'id'
});

Task.hasMany(Task, {
    foreignKey: {
        name: 'taskId'
    },
    sourceKey: 'id'
});

Task.hasOne(User, {
    foreignKey: {
        name: 'worker'
    },
    sourceKey: 'id'
});

Task.belongsTo(Story)

sequelize.sync().then(() => {
    console.log('Task table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

export default Task;