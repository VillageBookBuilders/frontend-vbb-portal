export const getStudentsResponse = {
  count: 3,
  next: 'none',
  previous: 'none',
  results: [coteDIvoireStudent, newYorkStudent, turkishStudent],
};

export const coteDIvoireStudent = {
  id: 'student1',
  user: {
    first_name: 'Koffi',
    last_name: 'Ouattara',
    date_of_birth: '2000-06-03',
    time_zone: 'Africa/Abidjan',
    initials: 'KO',
    personal_email: 'koffi.ouattara@villageBookBuilders.com',
    phone: '+22524563616',
    city: "Cote d'Ivoire",
    notes: 'Speaks French and Dioula',
  },
  created_date: '2021-06-03T00:36:05.498Z',
  modified_date: '2021-06-03T00:36:05.498Z',
};

export const newYorkStudent = {
  id: 'student2',
  user: {
    first_name: 'Bob',
    last_name: 'Patt',
    date_of_birth: '2005-01-03',
    time_zone: 'America/New_York',
    initials: 'BP',
    personal_email: 'bob.patt@villageBookBuilders.com',
    phone: '+13152458675',
    city: 'New Yorkj',
    notes: 'Speaks English, loves computers',
  },
  created_date: '2021-06-03T00:36:05.498Z',
  modified_date: '2021-06-03T00:36:05.498Z',
};

export const turkishStudent = {
  id: 'student3',
  user: {
    first_name: 'Ayberk',
    last_name: 'Fraserli',
    date_of_birth: '2004-05-23',
    time_zone: 'Turkey',
    initials: 'AF',
    personal_email: 'ayberk.fraserli@villageBookBuilders.com',
    phone: '+902124636162',
    city: 'Istanbul',
    notes: 'Speaks English and Arabic, loves pottery',
  },
  created_date: '2021-06-03T00:36:05.498Z',
  modified_date: '2021-06-03T00:36:05.498Z',
};
