import axios from 'axios';
import { allPrograms } from '../../fixtures/programs';
import { sleep } from '../../util/sleep';
import {
  clearIsError,
  PYTHON_API,
  setIsError,
  setProcessingGetPrograms,
} from '../actions';

export const SET_ALL_PROGRAMS = 'SET_ALL_PROGRAMS';

export const setAllPrograms = (programs) => ({
  type: SET_ALL_PROGRAMS,
  payload: programs,
});

export const getAllPrograms = () => async (dispatch, getState) => {
  dispatch(setProcessingGetPrograms(true));
  try {
    // // axios request. Uncomment once backend is finalized
    // const token = getState().authToken;
    // const url = PYTHON_API + 'v1/program';
    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`,
    // };
    // const responseData = await axios.get({ url, headers }).data;
    //
    // dispatch(setAllPrograms(responseData));

    dispatch(setAllPrograms(allPrograms));
    dispatch(setProcessingGetPrograms(false));
  } catch (err) {
    // dispatch(setLoadingFalse());
    dispatch(setProcessingGetPrograms(false));
    console.error('Error getting all programs', err);
    dispatch(setIsError('There was an error in getting all programs'));
    await sleep(1500);
    dispatch(clearIsError());
  }
};
