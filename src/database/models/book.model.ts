import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { DB } from '../';

interface Book {
  id: string;
  title: string;
  numberOfPages: number;
  authorId: string;

  created_at: string | undefined;
  updated_at: string | undefined;
}
export type BookCreationAttributes = Optional<Book, 'id'>;

export class BookModel extends Model<Book, BookCreationAttributes> implements Book {
  public id!: string;
  public title!: string;
  public numberOfPages!: number;
  public authorId!: string;

  public created_at: string | undefined;
  public updated_at: string | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof BookModel {
  BookModel.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      numberOfPages: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      authorId: {
        allowNull: true,
        type: DataTypes.UUID
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'books',
      modelName: 'Book',
      sequelize,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      timestamps: true
    }
  );

  return BookModel;
}
