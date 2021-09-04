const { setProcessingGetSlots } = require('../actions');

// get slots by language and day
const getSlotsByDayAndLanguage = (day, language) => async (dispatch) => {
  dispatch(setProcessingGetSlots(true));

  const options = {};

  try {
  } catch (err) {
    dispatch(setProcessingGetSlots(false));
  }
};
