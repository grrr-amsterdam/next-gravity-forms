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
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    customName,
  } = field;

  const {
    Textarea = "textarea",
    Label = "label",
    Box = "div",
  } = styledComponents || false;
  const { i18n } = props || {};

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
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <Textarea
          id={`input_${formId}_${id}`}
          name={customName || `input_${id}`}
          type={type}
          value={!value ? "" : value}
          placeholder={placeholder}
          maxLength={maxLength}
          required={isRequired}
          onChange={event => {
            updateForm(event, field);
            unsetError(id);
          }}
          onBlur={event => {
            updateForm(event, field);
            setTouched(id);
            setFocusClass(value !== "");
          }}
          onFocus={() => setFocusClass(true)}
          aria-describedby={`error_${formId}_${id}`}
          aria-invalid={(!!validationMessage && touched) || !!error}
        />
        {maxLength && maxLength > 0 && (
          <div className="charleft">
            {i18n
              ? `${i18n.t("maxCharachters", {
                  length: value.length || 0,
                  maxLength: maxLength,
                })}`
              : `${value.length || 0} of ${maxLength} max charachters`}
          </div>
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
    </Box>
  );
};
