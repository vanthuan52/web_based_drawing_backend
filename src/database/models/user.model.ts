import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@/interfaces/user.interface';

export type UserCreationAttributes = Optional<User, 'id'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id!: string;
  public email!: string;
  public name!: string;
  public password!: string;
  public role!: string;
  public created_at: string | undefined;
  public updated_at: string | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'users',
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      timestamps: true
    }
  );

  UserModel.sync().then();

  return UserModel;
}
