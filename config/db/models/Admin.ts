'use strict';
import { Model } from 'sequelize';
import Joi from 'joi';

//Admin Model Interface
interface AdminAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified: boolean;
  accessToken: string;
  refreshToken: string;
  status: string;
}

// Typescript allows (ANY) in some situations especially for third party libraries
module.exports = (sequelize: any, DataTypes: any) => {
  class Admin extends Model<AdminAttributes> implements AdminAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public isVerified!: boolean;
    public accessToken!: string;
    public refreshToken!: string;
    public status!: string;
    static associate(models: any) {
      // define association here
    }
  }

  Admin.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: { type: new DataTypes.STRING(128), allowNull: false },
      lastName: { type: new DataTypes.STRING(128), allowNull: false },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true
      },
      password: { type: new DataTypes.STRING(128), allowNull: false },
      isVerified: { type: new DataTypes.BOOLEAN(), allowNull: false },
      accessToken: { type: new DataTypes.STRING(128), allowNull: false },
      refreshToken: { type: new DataTypes.STRING(128), allowNull: false },
      status: { type: new DataTypes.ENUM(['active', 'inactive', 'sacked']) }
    },
    {
      sequelize,
      modelName: 'Admin'
    }
  );
  return Admin;
};

exports.validateAdminPost = async (admin: AdminAttributes) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    firstName: Joi.string().allow(''),
    lastName: Joi.string().allow('')
  });

  try {
    const value = await schema.validateAsync(admin);
  } catch (error) {
    throw new Error('Failed to validate input ' + error.details[0].message);
  }

  // schema.validate(admin);
};
