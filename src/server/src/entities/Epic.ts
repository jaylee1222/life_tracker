// import { sequelize } from "../infrastructure/database";
// import { Sequelize } from "sequelize";
// import { DataTypes, Model } from "sequelize";
import { Story } from "./Story";
import { Progress } from "./Progress";
import { User } from "./User";
import { DataType, Model, Table, Column, PrimaryKey, AutoIncrement, HasMany, HasOne, BelongsTo } from "sequelize-typescript";

// const sequelize: Sequelize = new Sequelize({
//     database: 'test.db',
//     dialect: 'sqlite',
//     storage: '../../database.sqlite',
//     logging: console.log
// });
//  
//  sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });

interface EpicAttributes {
        id: number;
        name: string;
        stories: Story[];
        description: string;
        owner: User;
        worker: User;
        progress: Progress;
}

interface EpicCreationAttributes extends Omit<EpicAttributes, 'id'> {}

@Table({
        tableName: 'epics',
        timestamps: true,
})
export class Epic extends Model<EpicAttributes, EpicCreationAttributes> implements EpicAttributes {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
    
    @Column(DataType.STRING)
    name!: string;

    @HasMany(() => Story, 'id')
    stories!: Story[];

    @Column(DataType.STRING)
    description!: string;

    @HasOne(() => User, 'id')
    owner!: User;

    @HasOne(() => User, 'id')
    worker!: User;

    @Column(DataType.INTEGER)
    progress!: Progress

    // declare id: number;
    // declare name: string;
    // declare stories: Story[];
    // declare description: string;
    // declare owner: number;
    // declare worker: number;
    // declare progress: number;
    // declare timeCreated: Date;
};

// Epic.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: {
//                     msg: 'A task name can only be between 1 and 50 characters',
//                     args: [1, 50]
//                 }
//             }
//         },
//         description: {
//             type: DataTypes.STRING
//         },
//         progress: {
//             type: DataTypes.STRING
//         }
//     },
//     { sequelize, modelName: 'epic' }
// );
//
// Epic.hasMany(Story, {
//     foreignKey: 'storyId',
//     sourceKey: 'id'
// });
//
// Epic.hasOne(User, {
//     foreignKey: {
//         name: 'owner',
//         allowNull: false
//     }
// });
//
// Epic.hasOne(User, {
//     foreignKey: 'worker'
// });
//
// Epic.belongsTo(User);
//
// sequelize.sync().then(() => {
//     console.log('Epic table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
//
// export default Epic;
