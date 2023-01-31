import React from "react";
import queryString from "query-string";

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  updateForm,
  cssClass,
  ...props
}) => {
  const { id, type, isRequired, customName, formId } = field;
  let prePopulated = false;
  if (field.allowsPrepopulate) {
    const queries = queryString.parse(location.search);
    prePopulated = queries[field.inputName];
  }
  return (
    <div className={cssClass}>
      <input
        name={customName || `input_${id}`}
        type={type}
        value={!prePopulated ? value : prePopulated}
        required={isRequired}
        onChange={(event) => updateForm(event, field)}
        onBlur={(event) => {
          updateForm(event, field);
          setTouched(id);
        }}
        aria-describedby={`error_${formId}_${id}`}
        aria-invalid={!!validationMessage}
      />
      {validationMessage && touched && (
        <span className="error-message" id={`error_${formId}_${id}`}>
          {validationMessage}
        </span>
      )}
    </div>
  );
};
