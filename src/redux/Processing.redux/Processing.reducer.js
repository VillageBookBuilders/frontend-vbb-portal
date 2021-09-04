import {
  SET_PROCESSING_GET_SLOTS,
  SET_PROCESSING_LOGIN,
  SET_PROCESSING_NEWSLETTER_SIGNUP,
  SET_PROCESSING_REGISTRATION,
} from './Processing.actions';

const processingInitialState = {
  login: false,
  registration: false,
  newsletterSignup: false,
  getSlots: false,
};

/**
 * Processing state of the application
 * An object with boolean values so that the application can be in
 * multiple loading states at once. The goals it to allow for deliberate
 * managing of state should the user be able to perform multiple
 * async actions at once.
 * @param {obj} state current processing state of boolean values
 * @param {obj} action reduxAction
 * @returns
 */
export const processing = (state = processingInitialState, action) => {
  switch (action.type) {
    case SET_PROCESSING_LOGIN:
      return { ...state, login: action.payload };
    case SET_PROCESSING_REGISTRATION:
      return { ...state, registration: action.payload };
    case SET_PROCESSING_NEWSLETTER_SIGNUP:
      return { ...state, newsletterSignup: action.payload };
    case SET_PROCESSING_GET_SLOTS:
      return { ...state, getSlots: action.payload };

    default:
      return state;
  }
};
