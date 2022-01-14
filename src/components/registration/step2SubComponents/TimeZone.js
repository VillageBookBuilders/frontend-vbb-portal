import { Form, Select } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';
import { SearchableTimeZoneSelection } from '../../TimeZoneSelect';

const TimeZone = ({ registrationForm, setRegistrationForm }) => {
  const handleSelect = (e) => {
    const updatedRegForm = {
      ...registrationForm,
      timeZone: e,
    };
    setRegistrationForm(updatedRegForm);
  };
  return (
    <Form.Item label="What timezone are you in">
      <SearchableTimeZoneSelection handleSelect={handleSelect} />
    </Form.Item>
  );
};

const mapStateToProps = (state) => {
  return { registrationForm: state.registrationForm };
};

export default connect(mapStateToProps, actions)(TimeZone);
