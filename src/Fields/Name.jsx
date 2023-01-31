import React, { useState } from "react";
import Select from "react-select";
import InputLabel from "../FormElements/InputLabel";

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
  setFocusClass,
  cssClass,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    placeholder,
    isRequired,
    inputs,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;

  const {
    ReactSelect,
    Input = "input",
    Label = "label",
    Box = "div",
  } = styledComponents || false;

  const RSelect = ReactSelect || Select;

  const prefixField = inputs[0];

  const options = prefixField?.choices?.map(choice => ({
    value: choice.value,
    label: choice.text,
  }));
  let preselected = prefixField?.choices.filter(choice => choice.isSelected);
  if (preselected.length) {
    preselected = [
      {
        label: preselected[0].text,
        value: preselected[0].value,
      },
    ];
  } else {
    preselected = "";
  }
  // Handle State
  const [selectedOption, selectOption] = useState(value || preselected);

  // Handle change
  const selectChange = option => {
    selectOption(option);
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
      {inputs.map(
        input =>
          !input.isHidden && (
            <div className={type} key={input.id}>
              <InputLabel
                formId={formId}
                id={input.id}
                label={input.label}
                labelPlacement={labelPlacement}
                isRequired={isRequired}
                styledComponent={styledComponents}
              />
              {descriptionPlacement === "above" && description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
              {input.inputType === "radio" ? (
                <RSelect
                  name={customName || `input_${input.id}`}
                  required={isRequired}
                  value={
                    selectedOption && selectedOption.value ? selectedOption : ""
                  }
                  onChange={option => {
                    selectChange(option, field);
                    unsetError(input.id);
                  }}
                  onFocus={() => setFocusClass(true)}
                  placeholder={input.placeholder}
                  options={options}
                  className="form-select"
                  autoFocus={false}
                  // styles={customStyles}
                  inputId={`input_${formId}_${input.id}`}
                />
              ) : (
                <Input
                  id={`input_${formId}_${input.id}`}
                  key={input.id}
                  name={customName || `input_${input.id}`}
                  type={type}
                  value={!value ? "" : value[input.id]}
                  placeholder={input.placeholder}
                  maxLength={maxLength}
                  required={isRequired}
                  onChange={event => {
                    updateForm(event, field, input.id);
                    unsetError(input.id);
                  }}
                  onBlur={event => {
                    updateForm(event, field);
                    setTouched(input.id);
                    setFocusClass(value !== "");
                  }}
                  onFocus={() => setFocusClass(true)}
                  aria-label={input.label}
                  aria-describedby={`error_${formId}_${input.id}`}
                  aria-invalid={(!!validationMessage && touched) || !!error}
                />
              )}
              {descriptionPlacement !== "above" && description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
              {((validationMessage && touched) || error) && (
                <span className="error-message" id={`error_${formId}_${id}`}>
                  {validationMessage || error}
                </span>
              )}
            </div>
          )
      )}
    </Box>
  );
};
