import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Divider, Row } from 'antd';

import { SubmittableToggledInput } from './SubmittableToggledInput';

const MentorProfile = ({ user, setUser, updateUserInfo }) => {
  const onChange = (key) => (value) => {
    console.log({ value, key });
    setUser({ ...user, [key]: value });
  };

  const onSubmit = () => {
    updateUserInfo();
  };

  return (
    <div>
      <h1>Personal info</h1>
      <Row style={{ fontWeight: 'bold' }}>First Name</Row>
      <SubmittableToggledInput
        onChange={onChange('firstName')}
        onSubmit={onSubmit}
        value={user.firstName}
        name="First Name"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Last Name</Row>
      <SubmittableToggledInput
        onChange={onChange('lastName')}
        onSubmit={onSubmit}
        value={user.lastName}
        name="Last Name"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Date of Birth</Row>
      <SubmittableToggledInput
        onChange={onChange('dateOfBirth')}
        onSubmit={onSubmit}
        value={user.dateOfBirth}
        name="Date of Birth"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Timezone</Row>
      <SubmittableToggledInput
        onChange={onChange('timezone')}
        onSubmit={onSubmit}
        value={user.timezone}
        name="Timezone"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Email</Row>
      <SubmittableToggledInput
        onChange={onChange('email')}
        onSubmit={onSubmit}
        value={user.email}
        name="Email"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Phone</Row>
      <SubmittableToggledInput
        onChange={onChange('phone')}
        onSubmit={onSubmit}
        value={user.phone}
        name="Phone"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>City</Row>
      <SubmittableToggledInput
        onChange={onChange('city')}
        onSubmit={onSubmit}
        value={user.city}
        name="City"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Languages</Row>
      <SubmittableToggledInput
        onChange={onChange('languages')}
        onSubmit={onSubmit}
        value={user.languages}
        name="Languages"
      />
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Password</Row>
      <SubmittableToggledInput
        onChange={onChange('password')}
        onSubmit={onSubmit}
        value={user.password}
        name="Password"
      />
      <Divider />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, actions)(MentorProfile);
