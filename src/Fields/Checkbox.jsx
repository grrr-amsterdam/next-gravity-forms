import React from "react";
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
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    cssClass,
    isRequired,
    choices,
    inputs,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;

  const {
    Checkbox = "fieldset",
    Label = "legend",
    Box = "div",
  } = styledComponents || false;

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
      <Checkbox className="checkboxes">
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
        {choices.map((choice, i) => (
          <div className={type} key={choice.value}>
            <input
              id={`input_${formId}_${inputs[i].id}`}
              type="checkbox"
              name={customName || `input_${inputs[i].id}`}
              value={choice.value}
              checked={value.includes(choice.value)}
              onChange={event => {
                updateForm(event, field);
                setTouched(id);
                unsetError(id);
              }}
            />
            <label htmlFor={`input_${formId}_${inputs[i].id}`}>
              {choice.text}
            </label>
          </div>
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
      </Checkbox>
    </Box>
  );
};
