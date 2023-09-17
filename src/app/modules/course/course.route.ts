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

router.post(
  '/:id/assign-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculties),

  CourseController.assignFaculies
);

router.delete(
  '/:id/remove-faculties',
  validateRequest(CourseValidation.assignOrRemoveFaculties),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.removeFaculties
);

export const courseRoutes = router;
