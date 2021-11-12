import { LOG_OUT } from '../actions';
import { SET_SLOTS } from './Slots.actions';

export const slots = (state = [], action) => {
  switch (action.type) {
    case SET_SLOTS:
      console.log('hereererererere');
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};
