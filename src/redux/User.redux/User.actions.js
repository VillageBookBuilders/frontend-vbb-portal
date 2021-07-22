import axios from 'axios';

import {
  PYTHON_API,
  // setLoading,
  // setLoadingFalse,
  setIsError,
  clearIsError,
} from '../actions';
import { sleep } from '../../util/sleep';

//Action Types
export const SET_USER = 'SET_USER';
export const GET_USER_INFO ='GET_USER_INFO';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// Basic Actions
export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

// Thunk Actions
/**
 * getUserInfo
 * Gets user info from the python api given a sessionId from the URL
 * endpoint: /auth/getcurrentuser
 * @param {string} userExternalId
 */
export const getUserInfo = (userExternalId) => async (dispatch, getState) => {
  // dispatch(setLoading());
  try {
    const token = getState().authToken;
    const url = PYTHON_API + 'v1/auth/getcurrentuser';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const responseData = await axios.get({ url, headers }).data;

    // dispatch(setLoadingFalse());
    debugger

    //TODO REMOVE logging once we're done with setup
    console.log('res : ', responseData);
    console.log('rd: ', responseData.display);

    dispatch(responseData);
  } catch (err) {
    // dispatch(setLoadingFalse());
    console.error('Error getting user info', err);
    dispatch(
      setIsError('There was an error in retrieving the user')
    );
    await sleep(1500);
    dispatch(clearIsError());
  }
};

// * updateUserInfo
// * Updates user info using the python api given a sessionId from the URL
// * endpoint: /user/ (TODO: Update as needed depending on Swagger docs provided by backend)

export const updateUserInfo = (userExternalId) => async (dispatch, getState) => {
  try {
    const token = getState().authToken;
    const url = PYTHON_API + 'v1/user/';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    //TODO: May need to be updated from a patch request to either post or put depending on Swagger docs provided by backend
    const responseData = await axios.patch({ url, headers }).data;

    //TODO REMOVE logging once we're done with setup
    console.log('res : ', responseData);
    console.log('rd: ', responseData.display);

    dispatch(responseData);
  } catch (err) {
    console.error('Error getting user info', err);
    dispatch(
      setIsError('There was an error in retrieving the user')
    );
    await sleep(1500);
    dispatch(clearIsError());
  }
};


