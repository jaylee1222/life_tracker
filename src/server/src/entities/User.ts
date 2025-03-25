// import { sequelize } from "../infrastructure/database";
import { Sequelize } from "sequelize";
import { DataTypes, Model } from "sequelize";
import Task from "./Task";
import Story from "./Story";
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

class User extends Model {
    declare id: number
    declare firstName: string;
    declare lastName: string;
    declare taskId: number;
    declare epicId: number;
    declare storyId: number;
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

User.hasMany(Task, {
    foreignKey: 'taskId',
    sourceKey: 'id'
});

User.hasMany(Story, {
    foreignKey: 'storyId',
    sourceKey: 'id'
});

User.hasMany(Epic, {
    foreignKey: 'epicId',
    sourceKey: 'id'
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

export default User;