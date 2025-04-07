// import { sequelize } from "../infrastructure/database";
import { DataType, Model, Table, Column, PrimaryKey, AutoIncrement, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
// import { DataTypes, Model } from "sequelize";
import { Progress } from "./Progress";
import { User } from "./User";
import { Story } from "./Story";

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

// const sequelize: Sequelize = new Sequelize({
//         database: 'test.db',
//         dialect: 'sqlite',
//         storage: '../../database.sqlite',
//         logging: console.log
// });
//
// sequelize.authenticate().then(() => {
//         console.log('Connection has been established successfully.');
// }).catch((error) => {
//         console.error('Unable to connect to the database: ', error);
// });

interface TaskAttributes {
        id: number;
        name: string;
        /* taskId: Task[]; */
        description: string;
        owner: User;
        worker: User;
        progress: Progress;
        parentStory: Story;
}

interface TaskCreationAttributes extends Omit<TaskAttributes, 'id'> {}

@Table({
        tableName: 'tasks',
        timestamps: true,
})
export class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
        @PrimaryKey
        @AutoIncrement
        @Column(DataType.INTEGER)
        id!: number;

        @Column(DataType.STRING)
        name!: string;

        // TODO: Implement subTask class at some point so tasks can have subtasks!
        // @HasMany(() => Task, )
        // taskId: Task[];
        
        @Column(DataType.STRING)
        description!: string;

        @BelongsTo(() => User, { foreignKey: 'createdTasks' })
        owner!: User;

        @BelongsTo(() => User, { foreignKey: 'assignedTasks' })
        worker!: User;

        @Column(DataType.INTEGER)
        progress!: Progress;

        @BelongsTo(() => Story, { foreignKey: 'taskId' })
        parentStory!: Story;

        // declare id: number;
        // declare name: string;
        // declare taskId: Task[];
        // declare description: string;
        // declare owner: number;
        // declare worker: number;
        // declare progress: number;
        // declare timeCreated: Date;
}

// Task.init(
//         {
//                 id: {
//                         type: DataTypes.INTEGER,
//                         autoIncrement: true,
//                         primaryKey: true
//                 },
//                 name: {
//                         type: DataTypes.STRING,
//                         allowNull: false,
//                         validate: {
//                                 len: {
//                                         msg: 'A task name can only be between 1 and 50 characters',
//                                         args: [1, 50]
//                                 }
//                         }
//                 },
//                 description: {
//                         type: DataTypes.STRING
//                 },
//                 progress: {
//                         type: DataTypes.STRING
//                 }
//         },
//         { sequelize, modelName: 'task' }
// );
// Task.hasOne(User, {
//         foreignKey: {
//                 name: 'owner',
//                 allowNull: false
//         },
//         sourceKey: 'id'
// });
//
// Task.hasMany(Task, {
//         foreignKey: {
//                 name: 'taskId'
//         },
//         sourceKey: 'id'
// });
//
// Task.hasOne(User, {
//         foreignKey: {
//                 name: 'worker'
//         },
//         sourceKey: 'id'
// });
//
// Task.belongsTo(Story)
//
// sequelize.sync().then(() => {
//         console.log('Task table created successfully!');
// }).catch((error) => {
//         console.error('Unable to create table : ', error);
// });

// export default Task;
