export default (field, populatedFields, populatedEntry) => {
  let value;
  let hasPopulatedEntry = false;
  const hasPopulation = field.inputName && populatedFields && populatedFields[field.inputName];

  if (populatedEntry && populatedEntry[field.id]) {
    hasPopulatedEntry = true;
  } else if (populatedEntry && field.inputs) {
    field.inputs.some((input) => {
      if (populatedEntry[input.id]) {
        hasPopulatedEntry = true;
      }
    });
  }

  if (field.type === 'checkbox') {
    value = field.choices
      .filter((choice) =>
        hasPopulation
          ? choice.value === populatedFields[field.inputName]
          : choice.isSelected
      )
      .map((choice) => choice.value);

    if (hasPopulatedEntry) {
      value = field.inputs
        .filter((choice) => populatedEntry[choice.id])
        .map((choice) => choice.label);
    }
  } else if (field.type === 'radio') {
    if (hasPopulation) {
      value = populatedFields[field.inputName];
    } else {
      const preselected = field.choices.find((choice) => choice.isSelected);
      value = preselected ? preselected.value : "";
    }
  } else if (field.type === 'select') {
    const selectedOption = field.choices
      .filter((choice) =>
        hasPopulation
          ? choice.value === populatedFields[field.inputName]
          : choice.isSelected
      )
      .map((item) => ({ value: item.value, label: item.text }));
    value = selectedOption && selectedOption.length > 0 ? selectedOption[0] : "";
  } else {
    value = hasPopulation
      ? populatedFields[field.inputName]
      : hasPopulatedEntry
        ? populatedEntry[field.id]
        : field.defaultValue;
  }
  return value;
};
