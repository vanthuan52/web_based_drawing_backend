import { Router } from 'express';
import { handleRegister, handleLogin } from './auth.controller';

const authRouter = Router();

authRouter.post('/signup', handleRegister);
authRouter.post('/signin', handleLogin);

export default authRouter;
