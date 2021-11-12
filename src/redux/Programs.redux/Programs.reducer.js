import { LOG_OUT, SET_ALL_PROGRAMS } from '../actions';

export const programs = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_PROGRAMS:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};
