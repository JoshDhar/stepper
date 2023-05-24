import React from "react";

import { TextValidator } from "react-material-ui-form-validator";

const FirstStep = ({ handleChange, formData, validatorListener }) => {
  return (
    <>
      <TextValidator
        label="First Name"
        name="firstName"
        onChange={handleChange}
        fullWidth
        margin="normal"
        value={formData?.firstName}
        validators={["required", "isString"]}
        errorMessages={[
          "This field is required",
          "Name must be only characters",
        ]}
        validatorListener={validatorListener}
      />

      <TextValidator
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        fullWidth
        margin="normal"
        value={formData?.lastName}
        validators={["required", "isString"]}
        errorMessages={[
          "This field is required",
          "Name must be only characters",
        ]}
        validatorListener={validatorListener}
      />

      <TextValidator
        label="Phone"
        name="phone"
        onChange={handleChange}
        fullWidth
        margin="normal"
        value={formData?.phone}
        validators={["required", "isNumber", "matchRegexp:^[0-9]{0,14}$"]}
        errorMessages={[
          "This field is required",
          "Phone must contain only numbers",
          "Please provide valid phone number",
        ]}
        validatorListener={validatorListener}
      />

      <TextValidator
        label="Email"
        name="email"
        onChange={handleChange}
        fullWidth
        margin="normal"
        value={formData?.email}
        validators={["required", "isEmail"]}
        errorMessages={["This field is required", "Please enter correct email"]}
        validatorListener={validatorListener}
      />
    </>
  );
};

export default FirstStep;
