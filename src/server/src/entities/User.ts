// import { sequelize } from "../infrastructure/database";
// import { DataTypes, Model, Association, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from "sequelize";
import { Sequelize, Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, HasMany } from 'sequelize-typescript';
import { Task } from "./Task";
import { Story } from "./Story";
import { Epic } from "./Epic";

interface UserAttributes {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        assignedTaskId: Task[];
        assignedStoryId: Story[];
        assignedEpicId: Epic[];
        createdTaskId: Task[];
        createdStoryId: Story[];
        createdEpicId: Epic[];
}

interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}

@Table({
        tableName: 'users',
        timestamps: true,
})
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
        @PrimaryKey
        @AutoIncrement
        @Column(DataType.INTEGER)
        id!: number;

        @Column(DataType.STRING)
        firstName!: string;

        @Column(DataType.STRING)
        lastName!: string;

        @Column(DataType.STRING)
        email!: string;

        @HasMany(() => Task, { foreignKey: 'assignedTaskId' })
        assignedTaskId!: Task[];

        @HasMany(() => Story, { foreignKey: 'assignedStoryId' })
        assignedStoryId!: Story[];

        @HasMany(() => Epic, { foreignKey: 'assignedEpicId' })
        assignedEpicId!: Epic[];

        @HasMany(() => Task, { foreignKey: 'createdTaskId' })
        createdTaskId!: Task[];

        @HasMany(() => Story, { foreignKey: 'createdStoryId' })
        createdStoryId!: Story[];

        @HasMany(() => Epic, { foreignKey: 'createdEpicId' })
        createdEpicId!: Epic[];

        // declare id: CreationOptional<number>;
        // declare firstName: string;
        // declare lastName: string;
        // declare taskId: ForeignKey<Task['id']>;
        // declare epicId: ForeignKey<Epic['id']>;
        // declare storyId: ForeignKey<Story['id']>;
};

// User.init(
//         {
//                 id: {
//                         type: DataTypes.INTEGER,
//                         autoIncrement: true,
//                         primaryKey: true
//                 },
//                 firstName: {
//                         type: DataTypes.STRING(50),
//                         allowNull: false
//                 },
//                 lastName: {
//                         type: DataTypes.STRING(50),
//                         allowNull: false
//                 }
//         },
//         { sequelize, tableName: 'user' }
// );

// User.hasMany(Task, {
//         foreignKey: 'taskId',
//         sourceKey: 'id',
//         as: 'tasks'
// });
//
// User.hasMany(Story, {
//         foreignKey: 'storyId',
//         sourceKey: 'id',
//         as: 'stories'
// });
//
// User.hasMany(Epic, {
//         foreignKey: 'epicId',
//         sourceKey: 'id',
//         as: 'epics'
// });

// (async () => {
//         await sequelize.sync();
// })();
// sequelize.sync().then(() => {
//     console.log('User table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });

