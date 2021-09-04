export const SET_PROCESSING_LOGIN = 'SET_PROCESSING_LOGIN';
export const SET_PROCESSING_REGISTRATION = 'SET_PROCESSING_REGISTRATION';
export const SET_PROCESSING_NEWSLETTER_SIGNUP =
  'SET_PROCESSING_NEWSLETTER_SIGNUP';
export const SET_PROCESSING_GET_SLOTS = 'SET_PROCESSING_GET_SLOTS';

/**
 * Sets login processing state.
 *
 * @param {boolean} processingLogin boolean value
 * @returns action
 */
export const setProcessingLogin = (processingLogin) => {
  return { type: SET_PROCESSING_LOGIN, payload: processingLogin };
};

/**
 * Sets registration processing state.
 * Used in submitting registration
 *
 * @param {boolean}processingRegistration  boolean value
 * @returns action
 */
export const setProcessingRegistration = (processingRegistration) => {
  return { type: SET_PROCESSING_REGISTRATION, payload: processingRegistration };
};

/**
 * Sets newsLetterSignUp processing state.
 * Used in submitting newsLetterSignUp
 *
 * @param {boolean}processingNewsletterSignup  boolean value
 * @returns action
 */
export const setProcessingNewsletterSignup = (processingNewsletterSignup) => {
  return {
    type: SET_PROCESSING_NEWSLETTER_SIGNUP,
    payload: processingNewsletterSignup,
  };
};

/**
 * Sets getSlots processing state.
 * Used in getting Slots in booking
 *
 * @param {boolean}processingSlots boolean value
 * @returns action
 */
export const setProcessingGetSlots = (processingSlots) => {
  return { type: SET_PROCESSING_GET_SLOTS, payload: processingSlots };
};
