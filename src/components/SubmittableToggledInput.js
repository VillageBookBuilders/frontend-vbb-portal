import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';

export const SubmittableToggledInput = ({
  onChange,
  onSubmit,
  value,
  name,
}) => {
  const [editInput, setEditInput] = useState(false);

  return (
    <Row>
      <Col span={12}>
        {editInput ? (
          <Input
            name={name}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        ) : (
          value || name
        )}
      </Col>
      {editInput ? (
        <Col span={12}>
          <Button
            type="text"
            onClick={() => {
              onSubmit();
              setEditInput(false);
            }}
          >
            Save
          </Button>
        </Col>
      ) : (
        <Col span={12}>
          <Button
            type="text"
            onClick={() => {
              setEditInput(true);
            }}
          >
            Edit
          </Button>
        </Col>
      )}
    </Row>
  );
};
