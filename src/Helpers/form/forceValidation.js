/**
 * Force validate current page fields
 * @param {number} page
 */

const forceValidation = (page, formValues, setShowPageValidationMsg, setTouched) => {
  // check if current oage has required fields
  const notValid = page
    ? Object.keys(formValues).some(
        (x) => formValues[x].pageNumber === page && !formValues[x].hideField && formValues[x].valid
      )
    : Object.keys(formValues).some((x) => !formValues[x].hideField && formValues[x].valid);

  if (notValid) {
    // make all fields of current page to be touched to trigger field validation
    const fields = page
      ? Object.keys(formValues).filter((x) => formValues[x].pageNumber === page)
      : Object.keys(formValues);
    setTouchedFields(fields, setShowPageValidationMsg, setTouched);

    return false;
  }

  return true;
};

/**
 * Make fields of current page touched
 * if non multipages form - make all fields touched
 * @param {array} fields
 * @param {fn} setShowPageValidationMsg
 * @param {fn} setTouched
 */
function setTouchedFields(fields, setShowPageValidationMsg, setTouched) {
  const currentPageTouched = fields.reduce((currentTouched, x) => {
    currentTouched = { ...currentTouched, [x]: true };
    return currentTouched;
  }, {});

  setShowPageValidationMsg(true);
  setTouched(currentPageTouched);
}

export default forceValidation;
