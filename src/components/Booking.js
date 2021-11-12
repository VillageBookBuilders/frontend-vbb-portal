import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import * as actions from '../redux/actions';

import { SUPPORTED_MENTORING_LANGUAGES, WEEK_DAYS } from '../util/constants';
import { SearchableTimeZoneSelection } from './TimeZoneSelect';
import { getLocalTime } from '../util/timezoneHelpers';

const languageOptions = SUPPORTED_MENTORING_LANGUAGES.map((language, index) => (
  <Option key={`${language}-${index}`} value={language}>
    {language}
  </Option>
));
const dayOfWeekOptions = WEEK_DAYS.map((day) => (
  <Option key={`${day.value}-${day.display}`} value={day.value}>
    {day.display}
  </Option>
));

const programLocations = (programs) => {
  return programs.map((program) => (
    <Option key={`${program.id}`} value={program.id}>
      {program.name}
    </Option>
  ));
};

const startTimes = [].map((startTime) => (
  <Option
    key={`${startTime.value}-${startTime.display}`}
    value={startTime.value}
  >
    {startTime.display}
  </Option>
));

const endTimes = [].map((endTime) => (
  <Option key={`${endTime.value}-${endTime.display}`} value={endTime.value}>
    {endTime.display}
  </Option>
));

const initalState = {
  language: '',
  dayOfWeek: '',
  programLocationId: '',
  startTime: '',
  endTime: '',
};

// we need to track what are the Program slots available.
// TODO:
// * return slot choices where the program and day of the week match the selected values
// Slots that should show = slot.computer.program.id === programLocationId slot.language === language && slot.start_day_of_the_week < dayOfWeek && slot.end_day_of_the_week > dayOfWeek
const BookingV2 = ({ user, getSlots, slots, programs, getAllPrograms }) => {
  const [sessionSelection, setSessionSelection] = useState(initalState);
  const timeZone = user.timeZone || 'America/New_York';
  const filteredPrograms = !sessionSelection.language
    ? programs
    : programs.filter((program) => {
        const language = sessionSelection.language;
        return (
          program.required_languages.toLowerCase() === language.toLowerCase() ||
          program.secondary_languages.toLowerCase() === language.toLowerCase()
        );
      });
  useEffect(() => {
    getAllPrograms();
  }, []);

  const getAllSlots = ({ programLocationId, language, dayOfWeek }) => {
    // day of week can be 0-6 so !!0 will be false
    if (!!language && !!programLocationId && (!!dayOfWeek || dayOfWeek === 0)) {
      getSlots({ programLocationId, language, dayOfWeek });
    }
  };

  return (
    <div className="twocol-container">
      <h1 id="booking-header">Book Your Weekly Mentoring Session Below!</h1>
      <p>
        Please select your mentoring session time with care. You are committing
        to your mentee for a minimum of 3 weeks before it can be changed.
      </p>
      <div>
        <label for="select-language">Mentoring in what language?</label>
        <Select
          id="select-language"
          value={sessionSelection.language || 'Select a language'}
          onSelect={(e) => {
            const updatedSessionSelection = {
              ...sessionSelection,
              language: e,
              programLocationId: '',
            };
            setSessionSelection(updatedSessionSelection);
            getAllSlots(updatedSessionSelection);
          }}
        >
          {languageOptions}
        </Select>
      </div>
      <div>
        <label for="select-day">Mentoring on which day?</label>
        <Select
          id="select-day"
          value={sessionSelection.dayOfWeek || 'Select a day'}
          onSelect={(e) => {
            const updatedSessionSelection = {
              ...sessionSelection,
              dayOfWeek: e,
            };
            setSessionSelection(updatedSessionSelection);
            getAllSlots(updatedSessionSelection);
          }}
        >
          {dayOfWeekOptions}
        </Select>
      </div>
      <div>
        <label for="select-program-location">Your mentee will be at: </label>
        <Select
          id="select-program-location"
          value={
            (!!filteredPrograms.length
              ? sessionSelection.programLocationId
              : 'No programs match your language selection') ||
            'Select a program location'
          }
          onSelect={(e) => {
            //e will be the programId
            const updatedSessionSelection = {
              ...sessionSelection,
              programLocationId: e,
            };
            setSessionSelection(updatedSessionSelection);
            getAllSlots(updatedSessionSelection);
          }}
        >
          {programLocations(filteredPrograms)}
        </Select>
      </div>
      <div>
        <label for="select-start-time">
          Your mentor session is 1 hour long and will start at:{' '}
        </label>
        <p>Converted to your local time zone: {timeZone}</p>
        <Select
          id="select-start-time"
          placeholder="Select a session start time"
        >
          {startTimes}
        </Select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, programs: state.programs, slots: state.slots };
};
export default connect(mapStateToProps, actions)(BookingV2);
