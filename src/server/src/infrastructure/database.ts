import { Sequelize } from "sequelize-typescript";
import * as path from 'path';
import { User } from '../entities/User';
import { Epic } from '../entities/Epic';
import { Story } from '../entities/Story';
import { Task } from '../entities/Task'

// Option 2: Passing parameters separately (sqlite)
export const sequelize: Sequelize = new Sequelize({
        database: 'test.db',
        dialect: 'sqlite',
        username: 'root',
        password: '',
        storage: 'database.sqlite',
        logging: console.log,
        // models: [path.join(__dirname, '..', 'entities')]
        models: [Epic, Story, Task, User]
});
