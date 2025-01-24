import { NextFunction, Request, Response } from 'express';
import { MESSAGES } from '@/utils/message.utils';
import AuthService from './auth.service';

export const handleRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthService.register(req.body);

    res.status(201).json({
      status: true,
      message: MESSAGES.SIGNUP_SUCCESS,
      data: {
        user
      }
    });
  } catch (error) {
    next(error);
  }
};

export const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { accessToken } = await AuthService.login(req.body);
    res.status(200).json({
      status: true,
      message: MESSAGES.LOGIN_SUCCESS,
      data: {
        access_token: accessToken
      }
    });
  } catch (error: any) {
    next(error);
  }
};
