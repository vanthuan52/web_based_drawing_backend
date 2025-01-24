import { NextFunction } from 'express';

// @ts-ignore
const getCurrentTimestamp = async (req: any, res: any, next: NextFunction) => {
  const currentTimestamp = Date.now().toString();
  req.currentTimestamp = currentTimestamp;
  next();
};

export default getCurrentTimestamp;
