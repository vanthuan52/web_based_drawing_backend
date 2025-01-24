import { Pool } from 'pg';
import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from '@/config';
import logger from './logger.utils';

const pool = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

const connectDatabase = async () => {
  try {
    const res = await pool.query('SELECT $1::text as message', ['Database connected!']);
    logger.info(res.rows[0].message);
  } catch (error: any) {
    logger.error(error);
  } finally {
    pool.end();
  }
};
