import { DB } from '@/database';
import { User } from '@/interfaces/user.interface';

const AuthRepository = {
  findUserByEmail: async (email: string): Promise<User | null> => {
    return await DB.Users.findOne({ where: { email } });
  },
  createUser: async (userData: User): Promise<User> => {
    return await DB.Users.create(userData);
  }
};

export default AuthRepository;
