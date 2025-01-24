import Sequelize from 'sequelize';
import logger from '@/utils/logger.utils';
import userModel from './models/user.model';
import authorModel from './models/author.model';
import bookModel from './models/book.model';

import {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  NODE_ENV
} from '@/config';

const sequelize = new Sequelize.Sequelize(
  DB_NAME as string,
  DB_USERNAME as string,
  DB_PASSWORD as string,
  {
    dialect: (DB_DIALECT as Sequelize.Dialect) || 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    timezone: '+07:00',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      underscored: true,
      freezeTableName: true
    },
    pool: {
      min: 0,
      max: 10
    },
    logQueryParameters: NODE_ENV === 'development',
    logging: (query, time) => {
      logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true
  }
);

// Test the connection
sequelize.authenticate();

export const DB = {
  Users: userModel(sequelize),
  Authors: authorModel(sequelize),
  Books: bookModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize // library
};

// Define relationships
DB.Authors.hasMany(DB.Books, {
  sourceKey: 'id',
  foreignKey: 'authorId',
  as: 'books'
});

DB.Books.belongsTo(DB.Authors, {
  foreignKey: 'authorId',
  as: 'author'
});

// Sync all models at once
sequelize
  .sync({ alter: true }) // Use { force: true } if you want to drop and recreate all tables
  .then(() => {
    logger.info('All models were synchronized successfully.');
  })
  .catch((err) => {
    logger.error('Error synchronizing models:', err);
  });
