import { OfferedCourseClassSchedule } from '@prisma/client';
// import httpStatus from 'http-status';
// import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { OfferedCourseClassScheduleUtils } from './offeredCourseClassSchedule.utils';

const insertIntoDB = async (
  data: OfferedCourseClassSchedule
): Promise<OfferedCourseClassSchedule> => {
  await OfferedCourseClassScheduleUtils.checkRoomAvailavle(data);

  await OfferedCourseClassScheduleUtils.checkFacultyAvailable(data);

  const result = await prisma.offeredCourseClassSchedule.create({
    data,
    include: {
      semesterRegistration: true,
      offeredCourseSection: true,
      room: true,
      faculty: true,
    },
  });

  return result;
};

export const OfferedCourseClassScheduleService = {
  insertIntoDB,
};
