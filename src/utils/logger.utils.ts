import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const outputMessageFormat = winston.format.printf(
  (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
);

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  winston.format.prettyPrint({
    depth: 5
  }),
  outputMessageFormat
);

const consoleTransport = new winston.transports.Console({
  format: consoleFormat
});

const fileFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.uncolorize(),
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  winston.format.prettyPrint({
    depth: 5
  }),
  outputMessageFormat
);

const combinedFileTransport = new DailyRotateFile({
  filename: '%DATE%_combined_.log',
  dirname: './logs/combined',
  datePattern: 'YYYY-MM-DD-HH-MM-DD',
  maxSize: '20m',
  maxFiles: '7d',
  zippedArchive: true,
  format: fileFormat,
  options: { encoding: 'utf8' }
});

const errorFileTransport = new DailyRotateFile({
  filename: '%DATE%_error.log',
  dirname: './logs/errors',
  level: 'error',
  format: fileFormat,
  datePattern: 'YYYY-MM-DD-HH-MM-DD',
  maxSize: '2m',
  maxFiles: '14d'
});

const httpTransport = new winston.transports.Http({
  format: winston.format.json(),
  host: 'localhost',
  port: 4000,
  path: '/logs',
  ssl: false,
  batch: true,
  batchCount: 10,
  batchInterval: 10000
});

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [errorFileTransport, combinedFileTransport, consoleTransport, httpTransport]
});

export default logger;
