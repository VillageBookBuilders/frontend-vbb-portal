import { combineReducers } from 'redux';

import { user } from './User.redux/User.reducer';
import { isError } from './IsError.redux/IsError.reducer';
import { authToken } from './AuthToken.redux/AuthToken.reducer';
import { sessionSlot } from './SessionSlot.redux/SessionSlot.reducer';
import { registrationForm } from './Registration.redux/RegistrationForm.reducer';
import { processing } from './Processing.redux/Processing.reducer';
import { programs } from './Programs.redux/Programs.reducer';
import { slots } from './Slots.redux/Slots.reducer';
/**
 * Exports all reducers as a single combined reducer
 */
const rootReducer = combineReducers({
  isError,
  authToken,
  sessionSlot,
  user,
  registrationForm,
  processing,
  programs,
  slots,
});

export default rootReducer;
