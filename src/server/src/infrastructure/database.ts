import { Sequelize } from "sequelize";

// Option 2: Passing parameters separately (sqlite)
export const sequelize: Sequelize = new Sequelize({
    database: 'test.db',
    dialect: 'sqlite',
    storage: '../../database.sqlite'
});

    // try {
    //     const connection = await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    //     console.log(connection);
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
    // return sequelize;