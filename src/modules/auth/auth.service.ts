import bcrypt, { compareSync } from 'bcrypt';
import { User } from '@/interfaces/user.interface';
import { MESSAGES } from '@/utils/message.utils';
import { signJwt } from '@/utils/jwt.utils';
import { ACCESS_TOKEN_TTL } from '@/config/index';
import { ROLE_CODE } from '@/utils/constant.utils';
import { CustomError } from '@/utils/custom-error';
import AuthRepository from './auth.repository';
import { validateSignIn, validateSignUp } from './auth.validator';

const register = async (user: User) => {
  const { error } = validateSignUp(user);
  if (error) {
    throw new CustomError(error.details[0].message, 400);
  }

  const findUser = await AuthRepository.findUserByEmail(user.email);
  if (findUser) {
    throw new CustomError(`Email ${user.email} already exists`, 409);
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUserData = await AuthRepository.createUser({
    ...user,
    password: hashedPassword,
    role: ROLE_CODE.USER
  });

  return { user: newUserData };
};

const login = async (user: User) => {
  const { error } = validateSignIn(user);

  if (error) {
    throw new CustomError(error.details[0].message, 400);
  }

  const findUser = await AuthRepository.findUserByEmail(user.email);
  if (!findUser) {
    throw new CustomError(MESSAGES.INVALID_PASSWORD, 401);
  }

  const validPassword = compareSync(user.password, findUser.password);
  if (!validPassword) {
    throw new CustomError(MESSAGES.INVALID_PASSWORD, 401);
  }

  const payload = { id: user.id, email: user.email, role: user.role };
  const accessToken = signJwt(payload, { expiresIn: ACCESS_TOKEN_TTL });

  return { user: findUser, accessToken };
};

const AuthService = {
  register,
  login
};

export default AuthService;
