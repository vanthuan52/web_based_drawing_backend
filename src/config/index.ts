import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const BASE_URL: string = process.env.BASE_URL || 'localhost:5002/api';
const NODE_ENV: string | string = process.env.NODE_ENV || 'development';
const PORT: string | number = process.env.PORT || 5000;
const SALT_WORK_FACTOR: number = 10;
const LANG: string = process.env.SYSTEM_LANGUAGE || 'VI';

const DB_HOST: string | string = process.env.DB_HOST || 'localhost';
const DB_PORT: number = parseInt(process.env.DB_PORT || '5432', 10) || 5432;
const DB_NAME: string | string = process.env.DB_NAME || '';
const DB_USERNAME: string | string = process.env.DB_USERNAME || '';
const DB_PASSWORD: string | string = process.env.DB_PASSWORD || '';
const DB_DIALECT: string | string = process.env.DB_DIALECT || '';

const REDIS_URI: string | string = process.env.REDIS_URI || '';

const KEY: string = process.env.KEY || '';

const ACCESS_TOKEN_TTL_IN_MINUTES = 10080;
const ACCESS_TOKEN_TTL: string | string = process.env.ACCESS_TOKEN_TTL || '7d';
const REFRESH_TOKEN_TTL: string | string = process.env.REFRESH_TOKEN_TTL || '1y';
const REFRESH_TOKEN_DAYS: string | string = process.env.REFRESH_TOKEN_DAYS || '365';

const JWT_SECRET: string = process.env.JWT_SECRET || 'whatdoyouthink';
const DEV_ORIGIN: string | string = process.env.DEV_ORIGIN || '';
const STAGING_ORIGIN: string | string = process.env.STAGING_ORIGIN || '';
const PRODUCTION_ORIGIN: string | string = process.env.PRODUCTION_ORIGIN || '';

const LENGTH_UID: number = parseInt(process.env.LENGTH_UID || '8', 10) || 8;
const IMAGE_FOLDER: string | string = process.env.IMAGE_FOLDER || 'public/images';
const UPLOAD_FOLDER: string | string = process.env.IMAGE_FOLDER || 'public/uploads';

const MAX_FILE_SIZE: number = parseInt(process.env.MAX_FILE_SIZE || '5', 10) || 5;

const PASSWORD_VALIDATION = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'
);
const EMAIL_VALIDATION = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
const PHONE_NUMBER_VALIDATION = /^\d{10}$/;

const IMAGE_WIDTH: number = parseInt(process.env.IMAGE_WIDTH || '800', 10) || 800;
const IMAGE_HEIGHT: number = parseInt(process.env.IMAGE_HEIGHT || '800', 10) || 800;
const RESIZE_MODE: string | string = process.env.RESIZE_MODE || 'cover';
const IMAGE_EXTENSION: string | string = process.env.IMAGE_EXTENSION || 'jpg';

const LOG_LEVEL: string = process.env.LOG_LEVEL || 'info';

export {
  NODE_ENV,
  BASE_URL,
  PORT,
  LANG,
  KEY,
  SALT_WORK_FACTOR,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
  REDIS_URI,
  ACCESS_TOKEN_TTL_IN_MINUTES,
  ACCESS_TOKEN_TTL,
  REFRESH_TOKEN_TTL,
  REFRESH_TOKEN_DAYS,
  DEV_ORIGIN,
  STAGING_ORIGIN,
  PRODUCTION_ORIGIN,
  JWT_SECRET,
  LENGTH_UID,
  IMAGE_FOLDER,
  UPLOAD_FOLDER,
  MAX_FILE_SIZE,
  PASSWORD_VALIDATION,
  EMAIL_VALIDATION,
  PHONE_NUMBER_VALIDATION,
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  RESIZE_MODE,
  IMAGE_EXTENSION,
  LOG_LEVEL
};
