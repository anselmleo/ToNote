import express, { Request, Response } from 'express';
import response from '../services/response';
import validateAdminPost from '../config/db/models';
import models from '../config/db/models';
import winston from 'winston';
const router = express.Router();

// Create a new admin
router.post('/', async (req: Request, res: Response) => {
  // validate req body
  // const { error } = validateAdminPost(req.body);
  // if (error) return response.validationErrors(res, error.details[0].message);

  try {
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Assign leave to employee
router.patch('/:employeeId', async (req: Request, res: Response) => {
  // validate req body
  // const { error } = validateAdminPost(req.body);
  // if (error) return response.validationErrors(res, error.details[0].message);

  const { employeeId } = req.params;

  try {
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

export default router;
