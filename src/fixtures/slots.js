import { computerHanoi } from './computers';

// currently all 1 hour time slots
export const hanoiSlot1 = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  start_day_of_the_week: 1,
  end_day_of_the_week: 1,
  start_hour: 12,
  start_minute: 0,
  end_hour: 13,
  end_minute: 0,
  max_students: 1,
  computer: computerHanoi,
  created_date: '2021-10-05T23:41:56.794Z',
  modified_date: '2021-10-05T23:41:56.794Z',
  slot_number: 1,
  language: 'ENGLISH',
  start_date: '2021-10-05',
  end_date: '2021-10-05',
  event_id: '1',
  meeting_link: 'http://meeting_link',
  assigned_students: 0,
  is_mentor_assigned: false,
  is_student_assigned: true,
};

export const hanoiSlot2 = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  start_day_of_the_week: 2,
  end_day_of_the_week: 2,
  start_hour: 13,
  start_minute: 0,
  end_hour: 14,
  end_minute: 0,
  max_students: 1,
  computer: computerHanoi,
  created_date: '2021-10-05T23:41:56.794Z',
  modified_date: '2021-10-05T23:41:56.794Z',
  slot_number: 1,
  language: 'ENGLISH',
  start_date: '2021-10-05',
  end_date: '2021-10-05',
  event_id: '1',
  meeting_link: 'http://meeting_link',
  assigned_students: 0,
  is_mentor_assigned: false,
  is_student_assigned: true, // only show if true
};

export const hanoiSlot3 = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  start_day_of_the_week: 1,
  end_day_of_the_week: 1,
  start_hour: 14,
  start_minute: 0,
  end_hour: 15,
  end_minute: 0,
  max_students: 1,
  computer: computerHanoi,
  created_date: '2021-10-05T23:41:56.794Z',
  modified_date: '2021-10-05T23:41:56.794Z',
  slot_number: 1,
  language: 'VIETNAMSE',
  start_date: '2021-10-05',
  end_date: '2021-10-05',
  event_id: '1',
  meeting_link: 'http://meeting_link',
  assigned_students: 0,
  is_mentor_assigned: false,
  is_student_assigned: true,
};

export const allTestSlots = [hanoiSlot1, hanoiSlot2, hanoiSlot3];
