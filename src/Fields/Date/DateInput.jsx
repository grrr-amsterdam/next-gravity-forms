import React from 'react';
import ValidationMessage from '../../FormElements/ValidationMessage';

export default ({ defaultProps }) => {
  const {
    field,
    validationMessage,
    touched,
    setTouched,
    updateForm,
    formattedInputs,
    error,
    unsetError,
    setFocusClass,
    styledComponents,
  } = defaultProps;
  const {
    id, formId, type, customName,
  } = field;

  const { Input = 'input' } = styledComponents || false;

  return (
    <>
      {formattedInputs
      && formattedInputs.map((item, index) => (
        <div className={type} key={item.id}>
          <Input
            id={`input_${formId}_${id}_${index}`}
            type="number"
            name={customName || `input_${id}[]`}
            placeholder={item.placeholder}
            step="1"
            min="1"
            max={
              item.label === 'MM'
                ? 12
                : item.label === 'DD'
                  ? 31
                  : new Date().getFullYear() + 1
            }
            maxLength={item.label === 'YYYY' ? 4 : 2}
            value={item.value}
            onBlur={(event) => {
              field.subId = index;
              field.dateLabel = item.label;
              updateForm(event, field);
              setTouched(id);
              unsetError(id);
              setFocusClass(item.value !== '');
            }}
            onFocus={() => setFocusClass(true)}
          />
          <label
            htmlFor={`input_${formId}_${id}_${index}`}
            className="hide-label"
          >
            {item.label}
          </label>
          {validationMessage &&
          touched &&
          validationMessage[index] &&
          index === validationMessage[index].index &&
          validationMessage[index].message && (
            <span
              className="error-message"
              id={`error_${formId}_${item.id}`}
            >
                        {validationMessage[index].message}
                      </span>
          )}
          {error && <span className="error-message">{error}</span>}
        </div>
      ))}
    </>
  );
};
