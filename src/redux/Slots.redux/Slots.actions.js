import axios from 'axios';

import { allTestSlots } from '../../fixtures/slots';
import { PYTHON_API, setProcessingGetSlots } from '../actions';

export const SET_SLOTS = 'SET_SLOTS';

const setSlots = (slots) => {
  return { type: SET_SLOTS, payload: slots };
};

// Slots that should return are:
// slot.computer.program.id === programLocationId
// && slot.language === language
// && slot.start_day_of_the_week < dayOfWeek && slot.end_day_of_the_week >
// dayOfWeek
export const getSlots =
  ({ dayOfWeek, language, programLocationId }) =>
  async (dispatch, getState) => {
    dispatch(setProcessingGetSlots(true));

    try {
      // make call to backend to get slots based on language, day, program
      // const token = getState().authToken;
      // const url =
      //   PYTHON_API +
      //   `v1/slot/?progarm=${programLocationId}&language=${language}&day=${dayOfWeek}`;
      // const headers = {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
      // };
      // const responseData = await axios.get({ url, headers }).data;

      const responseData = fakeSlots({
        dayOfWeek,
        language,
        programLocationId,
      });
      console.log({ responseData });
      dispatch(setSlots(responseData));
      dispatch(setProcessingGetSlots(false));
    } catch (err) {
      dispatch(setProcessingGetSlots(false));
    }
  };

const fakeSlots = ({ dayOfWeek, language, programLocationId }) => {
  return allTestSlots.filter((slot) => {
    console.log({ slot });
    debugger;
    return (
      slot.computer.program.id === programLocationId &&
      slot.language.toLowerCase() === language.toLowerCase() &&
      slot.start_day_of_the_week <= parseInt(dayOfWeek, 10) &&
      slot.end_day_of_the_week >= parseInt(dayOfWeek, 10)
    );
  });
};
