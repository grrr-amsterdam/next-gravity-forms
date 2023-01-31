import React, { useState } from "react";
import Select from "react-select";
import InputLabel from "../FormElements/InputLabel";

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  setFocusClass,
  updateForm,
  hideField,
  styledComponents,
  error,
  unsetError,
  cssClass,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    isRequired,
    choices,
    placeholder,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;
  const [focusClass, setFocusClasses] = useState("");
  // Map options
  const options = choices.map(choice => ({
    value: choice.value,
    label: choice.text,
  }));
  let preselected = choices.filter(choice => choice.isSelected);
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
  const handleChange = option => {
    selectOption(option);
    const event = {
      target: {
        value:
          option && option.length > 0 ? option.map(item => item.value) : "",
      },
    };

    updateForm(event, field);
    unsetError(id);
  };
  // Handle Blur
  const handleBlur = () => {
    const event = {
      target: {
        value:
          selectedOption && selectedOption.length > 0
            ? selectedOption.map(item => item.value)
            : "",
      },
    };
    updateForm(event, field);
    setTouched(id);
    setFocusClasses("");
  };
  const {
    ReactSelect,
    Label = "label",
    Box = "div",
  } = styledComponents || false;

  const RSelect = ReactSelect || Select;
  const selectValues = [...selectedOption];
  if (selectedOption && selectOption.length > 0) {
    selectValues.shift();
  }
  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field error ${cssClass} ${focusClass}`
          : `form-field ${cssClass} ${focusClass}`
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
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <RSelect
          name={customName || `input_${id}`}
          required={isRequired}
          value={selectedOption}
          onChange={option => {
            handleChange(option, field);
            unsetError(id);
          }}
          onBlur={() => handleBlur()}
          onFocus={() => {
            setFocusClass(true);
            setFocusClasses("is-open");
          }}
          placeholder={placeholder}
          options={options}
          autoFocus={false}
          isMulti
          inputId={`input_${formId}_${id}`}
        />
        <input
          type="hidden"
          name={`input_${id}[]`}
          required={isRequired}
          value={
            selectedOption && selectedOption[0]?.value
              ? selectedOption[0].value
              : ""
          }
        />
        {selectValues &&
          selectValues.length > 0 &&
          selectValues.map(item => (
            <input type="hidden" name={`input_${id}[]`} value={item.value} />
          ))}

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
    </Box>
  );
};
