import React from 'react';
import ReactSelect from 'react-select';
import ValidationMessage from '../../FormElements/ValidationMessage'

export default ({defaultProps}) => {
  const {
    field,
    value,
    validationMessage,
    touched,
    setTouched,
    updateForm,
    error,
    unsetError,
    setFocusClass,
    setDate,
    startDate,
    styledComponents,
    formattedInputs,
    ...props
  } = defaultProps;

  const { id, isRequired, formId, type, customName } = field;

  const RSelect = ReactSelect || 'select';

  const getNumberDropdown = (i) => {
    const options = [];

    const dayDropdownID = 0;
    const monthDropdownID = 1;

    const startNumber = i === dayDropdownID || i === monthDropdownID ? 1 : 1920;
    const endNumber = i === dayDropdownID ? 31 : i === monthDropdownID ? 12 : new Date().getFullYear();
    const selectedValue = i === dayDropdownID ? 1 : i === monthDropdownID ? 3 : 0;

    const increment = startNumber < endNumber ? 1 : -1;
    for (let i = startNumber; i !== endNumber + increment; i += increment) {
      options.push({
        value: i,
        label: i,
        selected: parseInt(i) === parseInt(selectedValue),
      });
    }
    return options;
  };

  const handleChange = (value, field, index) => {
    const tmp = startDate || [];
    const key = index === 0 ? 2 : index === 2 ? 0 : 1;
    tmp[key] = value.value;

    setDate(tmp);

    const event = {
      target: {
        value: value.value,
      },
    };
    updateForm(event, field);
  };

  const getValueByIndex = (index) => {
    if (!startDate) return;

    const i = index === 0 ? 2 : index === 1 ? 1 : 0;

    return startDate[i]
      ? { value: startDate[i], label: startDate[i] }
      : undefined;
  };

  return (
    <>
      {formattedInputs
      && formattedInputs.map((input, index) => (
        <div key={input.id} className="gfield_date_dropdown">
          <RSelect
            required={isRequired}
            placeholder={input.placeholder}
            options={getNumberDropdown(index)}
            value={getValueByIndex(index)}
            id={`input_${formId}_${id}_${index + 1}`}
            name={customName || `input_${id}[]`}
            onBlur={(event) => {
              const value = getValueByIndex(index);
              if (!value) {
                const tmpState = {
                  ...field,
                  subId: index,
                  dateLabel: input.label,
                };
                handleChange({ value: '' }, tmpState, index);
              }
              setTouched(id);
              unsetError(id);
              setFocusClass(input.value !== '');
            }}
            onChange={(option) => {
              const tmpState = {
                ...field,
                subId: index,
                dateLabel: input.label,
              };
              handleChange(option, tmpState, index);
              unsetError(id);
            }}
            onFocus={() => setFocusClass(true)}
          />
        </div>
      ))}
      {((validationMessage && touched) || error) && (
        <ValidationMessage validationMessage={validationMessage} error={error} id={id} />
      )}
    </>
  );
};
