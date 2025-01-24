import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {
  NODE_ENV,
  DEV_ORIGIN,
  STAGING_ORIGIN,
  PRODUCTION_ORIGIN,
  UPLOAD_FOLDER,
  IMAGE_FOLDER
} from '../config';
import rateLimiter from './ratelimit.utils';
import { helper } from './helper.utils';
import { swaggerSpec, swaggerUi } from './swagger';

let whiteList: any = [];
if (NODE_ENV === 'production' || NODE_ENV === 'PRODUCTION') {
  whiteList = helper.extractOrigin(PRODUCTION_ORIGIN);
} else if (NODE_ENV === 'staging' || NODE_ENV === 'STAGING') {
  whiteList = helper.extractOrigin(STAGING_ORIGIN);
} else {
  whiteList = helper.extractOrigin(DEV_ORIGIN);
}

const corsOptions: Object = {
  credentials: true,
  methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
  origin: (origin: string, callback: any) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const createServer = () => {
  const app = express();
  // set the view engine to ejs
  app.set('view engine', 'ejs');

  app.use(cookieParser());

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use(rateLimiter);
  app.use(express.static('public'));
  app.use('/static/images', express.static(IMAGE_FOLDER));
  app.use('/static/uploads', express.static(UPLOAD_FOLDER));
  app.use(express.json());

  return app;
};

export default createServer;
