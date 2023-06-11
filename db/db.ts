import { Sequelize } from "sequelize";


export const db = new Sequelize('',
    'postgres', 'Dagonnet123',
    {
      host: 'localhost', dialect: 'postgres'
    });
