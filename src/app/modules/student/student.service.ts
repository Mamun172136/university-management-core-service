/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Student } from '@prisma/client';
import prisma from '../../../shared/prisma';

const updateIntoDB = async (
  id: string,
  payload: Partial<Student>
): Promise<Student> => {
  const result = await prisma.student.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Student> => {
  const result = await prisma.student.delete({
    where: {
      id,
    },
  });
  return result;
};

export const StudentService = {
  updateIntoDB,
  deleteFromDB,
};
