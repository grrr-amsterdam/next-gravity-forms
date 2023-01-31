import React, { useState } from "react";
import InputLabel from '../FormElements/InputLabel'

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  hideField,
  updateForm,
  styledComponents,
  error,
  unsetError,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    placeholder,
    isRequired,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
    inputs,
    cssClass,
    passwordStrengthEnabled,
    minPasswordStrength,
  } = field;

  const { Input = "input", Label = "label", Box = "div" } =
    styledComponents || false;

  const [passwords, setPasswords] = useState(inputs);
  const [passwordStrength, setPasswordStrength] = useState("blank");

  const setFocusClass = (action, i) => {
    const pass = { ...passwords };
    if (action) {
      pass[i].cssClass = "filled";
    } else {
      pass[i].cssClass = "";
    }
    setPasswords(pass);
  };

  const gformPasswordStrength = (password1) => {
    const shortPass = 1;
    const badPass = 2;
    const goodPass = 3;
    const strongPass = 4;
    const mismatch = 5;
    let symbolSize = 0;
    let natLog;
    let score;

    if (password1.length <= 0) return "blank";

    // password < 4
    if (password1.length < 4) return "short";

    if (password1.match(/[0-9]/)) symbolSize += 10;
    if (password1.match(/[a-z]/)) symbolSize += 26;
    if (password1.match(/[A-Z]/)) symbolSize += 26;
    if (password1.match(/[^a-zA-Z0-9]/)) symbolSize += 31;

    natLog = Math.log(Math.pow(symbolSize, password1.length));
    score = natLog / Math.LN2;

    if (score < 40) return "bad";

    if (score < 56) return "good";

    return "strong";
  };

  const setGFPwdStrength = (password) => {
    const result = gformPasswordStrength(password);
    setPasswordStrength(result);
  };

  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field error ${cssClass}`
          : `form-field ${cssClass}`
      }
      style={{ display: hideField ? "none" : undefined }}
    >
      <div className={type}>
        <InputLabel
          formId={formId}
          id={id}
          label={label}
          labelPlacement={labelPlacement}
          isRequired={isRequired}
          styledComponent={styledComponents}
        />
        {descriptionPlacement === "above" && description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          />
        )}
        <div className="ginput_container ginput_container_password">
          {inputs &&
            inputs.length &&
            inputs.map(
              (input, i) =>
                !input.isHidden && (
                  <span
                    key={`input_${formId}_${input.id}`}
                    className={`${
                      inputs.length > 1
                        ? `ginput_${i === 0 ? "left" : "right"}`
                        : "medim"
                    } ${passwords[i].cssClass ? passwords[i].cssClass : ""}`}
                  >
                    <Input
                      id={`input_${formId}_${input.id}_${i}`}
                      name={
                        customName || `input_${id}${i === 1 ? `_${i + 1}` : ""}`
                      }
                      type={type}
                      value={
                        value && value[i] && value[i].val ? value[i].val : ""
                      }
                      placeholder={
                        input.placeholder ? input.placeholder : placeholder
                      }
                      required={isRequired}
                      autoComplete="off"
                      onChange={(event) => {
                        field.subId = i;
                        updateForm(event, field);
                        unsetError(id);
                        if (passwordStrengthEnabled && i === 0) {
                          setGFPwdStrength(event.target.value);
                        }
                      }}
                      onBlur={(event) => {
                        field.subId = i;
                        updateForm(event, field);
                        setTouched(id);
                        setFocusClass(
                          value &&
                            value[i] &&
                            value[i].val &&
                            value[i].val !== "",
                          i
                        );
                      }}
                      onFocus={() => setFocusClass(true, i)}
                      aria-label={label}
                      aria-describedby={`error_${formId}_${input.id}_${i}`}
                      aria-invalid={!!validationMessage && touched}
                    />
                    <label htmlFor={`input_${formId}_${input.id}_${i}`}>
                      {input.placeholder || input.label}
                    </label>
                  </span>
                )
            )}
        </div>
        {((validationMessage && touched) || error) && (
          <span
            className="error-message"
            id={`error_${formId}_${id}`}
            dangerouslySetInnerHTML={{ __html: validationMessage || error }}
          />
        )}
        {descriptionPlacement !== "above" && description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          />
        )}
        {!((validationMessage && touched) || error) && passwordStrengthEnabled && (
          <React.Fragment>
            <div
              id={`input_${formId}_${id}_strength_indicator`}
              className={`gfield_password_strength ${passwordStrength}`}
            >
              {passwordStrength && passwordStrength !== "blank"
                ? passwordStrength
                : "Strength indicator"}
            </div>
            <input
              type="hidden"
              className="gform_hidden"
              id={`input_${formId}_${id}_strength`}
              name={`input_${id}_strength`}
              value={passwordStrength}
            />
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
