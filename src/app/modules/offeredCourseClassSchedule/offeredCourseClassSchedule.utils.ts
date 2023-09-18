import { OfferedCourseClassSchedule } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const checkRoomAvailavle = async (data: OfferedCourseClassSchedule) => {
  const alreadyBookedRoomDay = await prisma.offeredCourseClassSchedule.findMany(
    {
      where: {
        dayOfWeek: data.dayOfWeek,
        room: {
          id: data.roomId,
        },
      },
    }
  );

  const existingSlots = alreadyBookedRoomDay.map(schedule => ({
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    dayOfWeek: schedule.dayOfWeek,
  }));

  // console kore dekhbo () chara existingslot

  const newSlot = {
    startTime: data.startTime,
    endTime: data.endTime,
    dayOfWeek: data.dayOfWeek,
  };

  for (const slot of existingSlots) {
    const existingStart = new Date(`1970-01-01T${slot.startTime}:00`);
    const existingEnd = new Date(`1970-01-01T${slot.startTime}:00`);
    const newStart = new Date(`1970-01-01T${newSlot.startTime}:00`);
    const newEnd = new Date(`1970-01-01T${newSlot.startTime}:00`);

    if (newStart < existingEnd && newEnd > existingStart) {
      throw new ApiError(httpStatus.CONFLICT, 'room is already booked');
    }
    console.log('existing start', existingStart);
    console.log('existing end', existingEnd);
    console.log('new start', newStart);
    console.log('newEnd end', newEnd);
  }
};
const checkFacultyAvailable = async (data: OfferedCourseClassSchedule) => {
  const alreadyFcultyAssigned =
    await prisma.offeredCourseClassSchedule.findMany({
      where: {
        dayOfWeek: data.dayOfWeek,
        faculty: {
          id: data.facultyId,
        },
      },
    });

  const existingSlots = alreadyFcultyAssigned.map(schedule => ({
    startTime: schedule.startTime,
    endTime: schedule.endTime,
    dayOfWeek: schedule.dayOfWeek,
  }));

  // console kore dekhbo () chara existingslot

  const newSlot = {
    startTime: data.startTime,
    endTime: data.endTime,
    dayOfWeek: data.dayOfWeek,
  };

  for (const slot of existingSlots) {
    const existingStart = new Date(`1970-01-01T${slot.startTime}:00`);
    const existingEnd = new Date(`1970-01-01T${slot.startTime}:00`);
    const newStart = new Date(`1970-01-01T${newSlot.startTime}:00`);
    const newEnd = new Date(`1970-01-01T${newSlot.startTime}:00`);

    if (newStart < existingEnd && newEnd > existingStart) {
      throw new ApiError(httpStatus.CONFLICT, 'faculty is already booked');
    }
    console.log('existing start', existingStart);
    console.log('existing end', existingEnd);
    console.log('new start', newStart);
    console.log('newEnd end', newEnd);
  }
};

export const OfferedCourseClassScheduleUtils = {
  checkRoomAvailavle,
  checkFacultyAvailable,
};
