import 'express-async-errors';
import { Express } from 'express';
import { notFound, errorHandler } from '@/utils/error-handler';
import authRouter from '../modules/auth/auth.route';

const initRoutes = (app: Express) => {
  app.use('/api/v1/auth', authRouter);

  app.use(notFound);
  app.use(errorHandler);
};

export default initRoutes;
