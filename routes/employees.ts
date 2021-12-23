import express, { Request, Response } from 'express';
import response from '../services/response';
import validateEmployeePost from '../config/db/models';
import models from '../config/db/models';
import winston from 'winston';
const router = express.Router();

// Get employee details
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const employee = await models.Employee.findByPk(id);
    return response.withData(res, employee);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Get employee list
router.get('/', async (req: Request, res: Response) => {
  try {
    const employees = await models.Employee.findAll();
    return response.withData(res, employees);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Register a new employee
router.post('/', async (req: Request, res: Response) => {
  // validate req body
  // const { error } = validateEmployeePost(req.body);
  // if (error) return response.validationErrors(res, error.details[0].message);

  const { firstName, lastName, email, salary } = req.body;

  try {
    await models.Employee.create({
      firstName,
      lastName,
      email,
      salary
    });
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Update existing employee
router.patch('/:id', async (req: Request, res: Response) => {
  // validate req body
  // const { error } = validateEmployeePost(req.body);
  // if (error) return response.validationErrors(res, error.details[0].message);

  const { id } = req.params;
  const { firstName, lastName, email, salary } = req.body;

  try {
    const result = await models.Employee.update(
      { firstName, lastName, email, salary },
      { where: { id } }
    );

    if (result) return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Delete existing employee
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const employee = await models.Employee.findByPk(id);
    if (employee) {
      const result = await models.Employee.destroy({ where: { id } });
      if (result) return response.success(res);
    } else {
      return response.error(res, 'Employee Not found');
    }
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

export default router;
