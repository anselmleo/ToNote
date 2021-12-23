import express, { Request, Response } from 'express';
import response from '../services/response';
import validateAdminPost from '../config/db/models';
import models from '../config/db/models';
import winston from 'winston';
const router = express.Router();

// authenticate user admin, employees etc.
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

// change password
router.post('/password/change', async (req: Request, res: Response) => {
  // validate req body
  // const { error } = validateAdminPost(req.body);
  // if (error) return response.validationErrors(res, error.details[0].message);

  try {
    // TODO: complete password change logic
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

// Password forgot
router.post('/password/forgot', async (req: Request, res: Response) => {
  // validate req body
  // const { error } = validateAdminPost(req.body);
  // if (error) return response.validationErrors(res, error.details[0].message);

  try {
    // TODO: forgot password
    return response.success(res);
  } catch (error) {
    winston.error(error.message);
    return response.error(res);
  }
});

export default router;
