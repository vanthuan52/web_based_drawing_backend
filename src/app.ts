import { PORT } from '@/config';
import createServer from '@/utils/server.utils';
import initRoutes from '@/routes';
import logger from '@/utils/logger.utils';
import { DB } from '@/database';

const app = createServer();

initRoutes(app);

const initServer = async () => {
  DB.sequelize
    .authenticate()
    .then(() => {
      logger.info('Database connected successfully');
      app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`);
      });
    })
    .catch((error: any) => {
      logger.error('Unable to connect to the database: ', error);
    });
};

initServer();
