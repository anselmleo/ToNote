import express from 'express';
import reqLogger from '../startup/logger';
import error from '../middleware/error';
import employees from '../routes/employees';
import admin from '../routes/admin';
import auth from '../routes/auth';

export default (app: express.Application) => {
  app.use(express.json());
  app.use(reqLogger);
  app.use(error);
  app.use('/api/v1/employees', employees);
  app.use('/api/v1/admin', admin);
  app.use('/api/v1/auth', auth);
  app.get('/', (_req, res) => {
    res.json({ status: true, message: 'Welcome to ToNote API 👨‍🎤' });
  });
};
