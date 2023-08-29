import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    academicFacultyId: z.string({
      required_error: 'Academic faculty id  is required',
    }),
  }),
});

export const AcademicDepartmentValidation = {
  create,
};
