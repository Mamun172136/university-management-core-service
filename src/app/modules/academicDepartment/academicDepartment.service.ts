import { AcademicDepartment } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data,
    include: {
      academicFaculty: true,
    },
  });

  return result;
};

const getAllFromDB = async (): Promise<
  IGenericResponse<AcademicDepartment[]>
> => {
  const result = await prisma.academicDepartment.findMany({
    include: {
      academicFaculty: true,
    },
  });

  const total = await prisma.academicDepartment.count();

  return {
    meta: {
      total,
      page: 1,
      limit: 10,
    },
    data: result,
  };
};

export const AcademicDepartmentService = {
  insertIntoDB,
  getAllFromDB,
};
