import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CourseService } from './coure.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await CourseService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successufully',
    data: result,
  });
});
const updateOneInDb = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const { id } = req.params;
  const result = await CourseService.updateOneInDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successufully',
    data: result,
  });
});

const assignFaculies = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.body.faculties);
  const result = await CourseService.assignFaculies(id, req.body.faculties);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course faculty assigned successfully',
    data: result,
  });
});

const removeFaculties = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.body.faculties);
  const result = await CourseService.removeFaculties(id, req.body.faculties);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course faculty deleted successfully',
    data: result,
  });
});

export const CourseController = {
  insertIntoDB,
  updateOneInDb,
  assignFaculies,
  removeFaculties,
};
