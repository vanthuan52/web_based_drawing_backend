import jwt, { SignOptions } from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export interface JwtPayload {
  email: string;
  [key: string]: any;
}
export const signJwt = (payload: JwtPayload, options: SignOptions = {}): string => {
  return jwt.sign(payload, JWT_SECRET, {
    ...(options && options),
    algorithm: 'HS256'
  });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as JwtPayload;
    return {
      valid: true,
      expired: false,
      decoded
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null
    };
  }
};
