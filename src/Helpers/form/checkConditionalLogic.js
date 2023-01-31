export default (condition, fields = false) => {
  const { rules, actionType } = condition;
  if (!rules) return true;

  const formValues = fields || formValues;

  // show only if is selected "All fields" (it should be tweaked in future)
  // works only "show/hide when field is equal to"
  let hideField = actionType !== 'hide';
  const hideBasedOnRules = [];
  for (let i = 0; i < rules.length; i++) {
    const { fieldId, value, operator } = rules[i];
    const conditionFieldValue = formValues[fieldId].value && formValues[fieldId].value.value
      ? formValues[fieldId].value.value
      : formValues[fieldId].value || false;

    const stringValue = Array.isArray(conditionFieldValue)
      ? conditionFieldValue.join('')
      : conditionFieldValue;

    // Check if comparision value is empty
    if (!value) {
      if (!stringValue && !value) {
        hideBasedOnRules[i] = actionType === 'hide';
      } else {
        hideBasedOnRules[i] = actionType !== 'hide';
      }
    } else if (stringValue && value === stringValue) {
      hideBasedOnRules[i] = actionType === 'hide';
    } else if (stringValue && stringValue.includes(value)) {
      hideBasedOnRules[i] = actionType === 'hide';
    } else {
      hideBasedOnRules[i] = actionType !== 'hide';
    }

    // If operator is 'isnot' reverse value
    if (operator === 'isnot') {
      hideBasedOnRules[i] = !hideBasedOnRules[i];
    }
  }

  hideField = hideBasedOnRules.every(i => i === true);
  // formValues[id].hideField = hideField;
  // this.setState({ formValues });
  return hideField;
};
