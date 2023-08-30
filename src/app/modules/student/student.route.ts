import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

router.patch('/:id', StudentController.updateIntoDB);

export const studentRoutes = router;
