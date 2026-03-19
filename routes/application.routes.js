import express from 'express';
import protect from '../middleware/auth.middleware.js';
import {
  createApplication,
  getApplications,
  updateApplication,
  deleteApplication,
} from '../controllers/application.controller.js';

const router = express.Router();

router.route('/')
  .post(protect, createApplication)
  .get(protect, getApplications);

router.route('/:id')
  .put(protect, updateApplication)
  .delete(protect, deleteApplication);

export default router;