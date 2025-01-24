import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface Author {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  created_at: string | undefined;
  updated_at: string | undefined;
}

export type AuthorCreationAttributes = Optional<Author, 'id'>;

export class AuthorModel extends Model<Author, AuthorCreationAttributes> implements Author {
  public id!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  public created_at: string | undefined;
  public updated_at: string | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof AuthorModel {
  AuthorModel.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
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
      tableName: 'authors',
      modelName: 'Author',
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      timestamps: true
    }
  );

  return AuthorModel;
}
