'use strict';
import { Model } from 'sequelize';
import Joi from 'joi';

//Employee Model Interface
interface EmployeeAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
  isConfirmed: boolean;
  status: string;
}

// Typescript allows (ANY) in some situations especially for third party libraries
module.exports = (sequelize: any, DataTypes: any) => {
  class Employee
    extends Model<EmployeeAttributes>
    implements EmployeeAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public salary!: number;
    public isConfirmed!: boolean;
    public status!: string;
    static associate(models: any) {
      // define association here
    }
  }

  Employee.init(
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
      salary: { type: new DataTypes.INTEGER(), allowNull: false },
      isConfirmed: {
        type: new DataTypes.BOOLEAN(),
        allowNull: false,
        defaultValue: false
      },
      status: {
        type: new DataTypes.ENUM(['active', 'inactive', 'sacked']),
        defaultValue: 'active'
      }
    },
    {
      sequelize,
      modelName: 'Employee'
    }
  );
  return Employee;
};

exports.validateEmployeePost = async (employee: EmployeeAttributes) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
    firstName: Joi.string().allow(''),
    lastName: Joi.string().allow('')
  });

  try {
    const value = await schema.validateAsync(employee);
  } catch (error) {
    throw new Error('Failed to validate input ' + error.details[0].message);
  }

  // schema.validate(employee);
};
