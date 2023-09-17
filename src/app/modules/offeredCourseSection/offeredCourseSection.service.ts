import { OfferedCourseSection } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: OfferedCourseSection
): Promise<OfferedCourseSection | null> => {
  const isExistOfferedCourse = await prisma.offeredCourse.findFirst({
    where: {
      id: data.offeredCourseId,
    },
  });

  if (!isExistOfferedCourse) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Offered Course does not exist!'
    );
  }

  const result = await prisma.offeredCourseSection.create({
    data,
  });

  return result;
};

export const OfferedCourseSectionService = {
  insertIntoDB,
  // getAllFromDB,
  // getByIdFromDB,
  // updateOneInDB,
  // deleteByIdFromDB
};
