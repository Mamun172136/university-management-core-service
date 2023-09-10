import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validation';

const router = express.Router();
router.post(
  '/',
  validateRequest(CourseValidation.create),

  CourseController.insertIntoDB
);
router.patch(
  '/',
  validateRequest(CourseValidation.create),

  CourseController.updateOneInDb
);

export const courseRoutes = router;
