import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

import moment from 'moment';
import 'moment-timezone';
import { Checkbox, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import * as actions from '../redux/actions';
import menteeComputer from '../images/vbb-mentee-computer.png';

import { SUPPORTED_MENTORING_LANGUAGES, WEEK_DAYS } from '../util/constants';
import { SearchableTimeZoneSelection } from './TimeZoneSelect';

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

const programLocations = [].map((program) => (
  <Option key={`${program.value}-${program.display}`} value={program.value}>
    {program.display}
  </Option>
));

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
  programLocation: '',
  startTime: '',
  endTime: '',
};

// we need to track what are the Program slots available.
const BookingV2 = ({ user, getSlotsByDayAndLanguage }) => {
  const [sessionSelection, setSessionSelection] = useState(initalState);
  const timeZone = user.timeZone || '';

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
          onSelect={(e, option) => {
            setSessionSelection({ ...sessionSelection, language: e });

            if (option.value !== '' && sessionSelection.dayOfWeek !== '') {
              // setSessionSelection is async so you need to reference the option instead of the state
              getSlotsByDayAndLanguage({
                day: sessionSelection.dayOfWeek,
                language: option.value,
              });
            }
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
          onSelect={(e, option) => {
            setSessionSelection({ ...sessionSelection, dayOfWeek: e });

            if (sessionSelection.language !== '' && option.value !== '') {
              // setSessionSelection is async so you need to reference the option instead of the state
              getSlotsByDayAndLanguage({
                day: option.value,
                language: sessionSelection.language,
              });
            }
          }}
        >
          {dayOfWeekOptions}
        </Select>
      </div>
      <div>
        <label for="select-program-location">Your mentee will be at: </label>
        <Select
          id="select-program-location"
          placeholder="Select a program location"
        >
          {programLocations}
        </Select>
      </div>
      <div>
        <label for="select-start-time">
          Your mentor session will start at:{' '}
        </label>
        <p>Converted to your local time zone: {timeZone}</p>
        <Select
          id="select-start-time"
          placeholder="Select a session start time"
        >
          {startTimes}
        </Select>
      </div>
      <div>
        <label for="select-end-time">Your mentor session will end at: </label>
        <p>Converted to your local time zone: {timeZone}</p>
        <Select id="select-end-time" placeholder="Select a session end time">
          {endTimes}
        </Select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps, actions)(BookingV2);
