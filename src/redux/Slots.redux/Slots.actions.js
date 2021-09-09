const { setProcessingGetSlots } = require('../actions');

// get slots by language and day
export const getSlotsByDayAndLanguage =
  ({ day, language }) =>
  async (dispatch) => {
    dispatch(setProcessingGetSlots(true));

    console.log('In getSlotsByDayAndLanguage', { day, language });

    const options = {};
    // make call to backend to get slots based on day and language

    try {
      dispatch(setProcessingGetSlots(false));
    } catch (err) {
      dispatch(setProcessingGetSlots(false));
    }
  };
