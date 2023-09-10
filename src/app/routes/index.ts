import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicSemesterRoutes } from '../modules/adademicSemester/academicSemester.routes';
import { buildingRoutes } from '../modules/building/building.route';
import { courseRoutes } from '../modules/course/course.route';
import { studentRoutes } from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/buildings',
    route: buildingRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
