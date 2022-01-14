import {
  programDirectorHanoi,
  programDirectorGuadalajara,
} from './programDirectors';

export const programHanoi = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  program_director: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  program_director_obj: programDirectorHanoi,
  created_date: '2021-10-05T23:41:56.794Z',
  modified_date: '2021-10-05T23:41:56.794Z',
  name: 'Dong Kinh Nghia Thuc Square',
  time_zone: 'Asia/Ho_Chi_Minh',
  latitude: '21.02',
  longitude: '-105.51',
  program_inception_date: '2021-10-05T23:41:56.794Z',
  program_renewal_date: '2021-10-05T23:41:56.794Z',
  required_languages: 'VIETNAMESE',
  secondary_languages: 'ENGLISH',
  googe_calendar_id: 'Cal ID',
  facebook_group: 'Hanoi Facebook Group',
  whatsapp_group: 'Hanoi Whatsapp Group',
  mentor_announcements: '',
  mentor_collaboration: '',
  students_group: 'Hanoi Student Group Name',
  parents_group: 'Hanoi Parent Group Name',
  notion_url: 'http://notionUrlHanoiProgram',
  googleDrive_url: 'http://googleDriveUrlHanoiProgram',
  googleClassroom_url: 'http://googleClassroomUrlHanoiProgram',
  workplace_resources: '',
  program_googlePhotos: '',
  village_info_link: '',
  village_chief: '',
  chief_contact: '',
  ministry_education_contact: '',
  notes: 'Honoi program notes input',
  headmasters: [0],
  teachers: [0],
  managers: [0],
};

export const programGuadalajara = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66af55',
  program_director: '3fa85f64-5717-4562-b3fc-2c963f66af55',
  program_director_obj: programDirectorGuadalajara,
  created_date: '2021-10-05T23:41:56.794Z',
  modified_date: '2021-10-05T23:41:56.794Z',
  name: 'Guadalajara',
  time_zone: 'US/Central',
  latitude: '21.02',
  longitude: '-105.51',
  program_inception_date: '2021-10-05T23:41:56.794Z',
  program_renewal_date: '2021-10-05T23:41:56.794Z',
  required_languages: 'SPANISH',
  secondary_languages: 'ENGLISH',
  googe_calendar_id: 'Cal ID',
  facebook_group: 'Guadalajara Facebook Group',
  whatsapp_group: 'Guadalajara Whatsapp Group',
  mentor_announcements: '',
  mentor_collaboration: '',
  students_group: 'Guadalajara Student Group Name',
  parents_group: 'Guadalajara Parent Group Name',
  notion_url: 'http://notionUrlGuadalajaraProgram',
  googleDrive_url: 'http://googleDriveUrlGuadalajaraProgram',
  googleClassroom_url: 'http://googleClassroomUrlGuadalajaraProgram',
  workplace_resources: '',
  program_googlePhotos: '',
  village_info_link: '',
  village_chief: '',
  chief_contact: '',
  ministry_education_contact: '',
  notes: 'Guadalajara program notes input',
  headmasters: [0],
  teachers: [0],
  managers: [0],
};
export const allPrograms = [programHanoi, programGuadalajara];
