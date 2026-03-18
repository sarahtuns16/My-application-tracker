import express from 'express';
import {
  createApplication,
  getApplication,
  updateApplication,
  deleteApplication
} from '../controllers/applicationController.js';

import protect from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.use(protect);

// Routes for /api/applications
router.route('/')
  .post(createApplication)
  .get(getApplication);

// Routes for /api/applications/:id
router.route('/:id')
  .put(updateApplication)
  .delete(deleteApplication);

export default router;