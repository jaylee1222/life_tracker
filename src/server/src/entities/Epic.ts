// import { sequelize } from "../infrastructure/database";
import { Sequelize } from "sequelize";
import { DataTypes, Model } from "sequelize";
import Story from "./Story";
import { Progress } from "./Progress";
import User from "./User";

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
        },
        progress: {
            type: DataTypes.STRING
        }
    },
    { sequelize, modelName: 'epic' }
);

Epic.hasMany(Story, {
    foreignKey: 'storyId',
    sourceKey: 'id'
});

Epic.hasOne(User, {
    foreignKey: {
        name: 'owner',
        allowNull: false
    }
});

Epic.hasOne(User, {
    foreignKey: 'worker'
});

Epic.belongsTo(User);

sequelize.sync().then(() => {
    console.log('Epic table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

export default Epic;