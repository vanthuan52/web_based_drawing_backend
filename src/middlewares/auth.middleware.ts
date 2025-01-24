import { NextFunction, Response } from 'express';
import { verifyJwt } from '@/utils/jwt.utils';

const deserializeUser = async (req: any, res: any, next: NextFunction) => {
  const accessToken = req?.headers?.authorization;
  if (accessToken?.startsWith('Bearer')) {
    const token = accessToken.split(' ')[1];

    const { decoded, expired } = verifyJwt(token);
    if (decoded) {
      req.user = decoded;
      return next();
    }

    const refresh_token: string = req.cookies.refresh_token;
    if (!refresh_token) {
      return res.status(401).json({
        status: false,
        message: 'Authorization denied!'
      });
    }

    if (expired) {
      const refreshTokenVerification = verifyJwt(refresh_token);
      if (refreshTokenVerification.valid) {
        return res.status(401).json({
          status: false,
          message: 'You access token has expired!',
          data: {
            token_expired: expired
          }
        });
      }
      res.clearCookie('refresh_token', {
        httpOnly: true,
        secure: true
      });
    }
  }
  return res.status(401).json({
    status: false,
    message: 'Authorization denied!',
    data: {}
  });
};

const restrictTo = (allowedRoles: string[]) => (req: any, res: Response, next: NextFunction) => {
  const { role } = req.user;
  if (!allowedRoles.includes(role)) {
    res.status(403).json({
      status: false,
      message: 'You are not allowed to perform this action',
      data: {}
    });
  }
  next();
};

const authMiddleware = {
  deserializeUser,
  restrictTo
};
export default authMiddleware;
