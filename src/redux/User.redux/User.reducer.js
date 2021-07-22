import { LOG_OUT, SET_USER, GET_USER_INFO, UPDATE_USER_INFO } from '../actions';

/**
 * User Types are:
 * STUDENT, MENTOR, TEACHER, DIRECTOR, ADVISOR, HEADMASTER
 */

const userInitialState = {
  userType: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  timezone: '',
  phone: '',
  city: '',
  languages: '',
  password: '',
  email: '',
  id: '',
  externalId: '',
};

export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case GET_USER_INFO:
      return action.payload;
    case UPDATE_USER_INFO:
      return action.payload;
    case LOG_OUT:
      return userInitialState;
    default:
      return state;
  }
};
