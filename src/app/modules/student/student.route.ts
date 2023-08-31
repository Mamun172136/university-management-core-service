import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validation';
const router = express.Router();

router.patch(
  '/:id',
  validateRequest(StudentValidation.update),
  StudentController.updateIntoDB
);
router.delete('/:id', StudentController.deleteFromDB);

export const studentRoutes = router;
