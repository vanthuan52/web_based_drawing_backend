import { NextFunction, Request, Response } from 'express';
import { CustomError } from './custom-error';

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  res.status(404).json({
    status: false,
    message: `Route ${req.originalUrl} not found!`,
    data: {}
  });
  return;
};

const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err instanceof CustomError ? err.statusCode : 500;
  res.status(statusCode).json({
    status: false,
    message: err.message
  });
  return;
};

export { notFound, errorHandler };
