import { sequelize } from './database';

export const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log(sequelize.models);
        console.log(__dirname + '../entities');
        console.log('Database synced successfully!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();
