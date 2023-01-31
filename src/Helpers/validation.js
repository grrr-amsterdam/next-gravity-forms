const getMessage = (message, type) => {
  if (!type) return false;


  if (message && typeof message === 'object' && message.custom) {
    return message.custom;
  }

  if (message && typeof message === 'object' && message[type]) {
    return message[type];
  }

  return message;
};

const isEmail = (email, field, message) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    const customMessage = getMessage(message, 'email');
    return customMessage || "Enter a valid email";
  }
  return false;
};

const isUrl = (str, field, message) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  if (!pattern.test(str)) {
    const customMessage = getMessage(message, 'url');
    return customMessage || "Enter a valid url";
  }
  return false;
};

const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  return false;
};

const isRequired = (required, empty, message) => {
  if (required && empty) {
    const customMessage = getMessage(message, 'required');
    return customMessage || 'This field is required';
  }
  return false;
};

const selectValidation = (required, value, placeholder) => !(value === placeholder && required);

const checkboxValidation = (values, message) => {
  if (values.length < 1) {
    return message || 'This field is required';
  }
  return false;
};

const emailValidation = (values, field) => {
  const { inputs, isRequired: required, errorMessage } = field || false;
  const { required: requiredMsg, mismatch } = errorMessage || false;

  // check if fields is required and isn't empty
  const isInputsEmpty = values && values.filter(item => item && item.val === '').length;

  if (((values && values.length < 2) || isInputsEmpty !== 0) && required) {
    return requiredMsg || 'This field is required';
  }

  if (values && values.length > 0) {
    for (let i = 0; values.length > i; i++) {
      const isInValidMail = isEmail(values[i].val);
      if (isInValidMail) {
        return isInValidMail;
      }
    }
  }

  // if there is repeat password field => check if match
  if (values && values.length === 2 && inputs && inputs.length === 2) {
    if (
      values[1]
      && values[0]
      && values[1].val !== ''
      && values[1].val !== values[0].val
    ) {
      return mismatch || 'Mismatch';
    }
  }

  return false;
};

const passwordValidation = (values, field) => {
  const { inputs, isRequired: required, errorMessage } = field || false;
  const { required: requiredMsg, mismatch } = errorMessage || false;

  const filteredInputs = inputs.filter(item => !item.isHidden);

  // check if fields is required and isn't empty
  const isInputsEmpty = values && values.filter(item => item && item.val === '').length;

  if (
    ((values && values.length === 0)
      || isInputsEmpty === filteredInputs.length)
    && required
  ) {
    return requiredMsg || 'This field is required';
  }

  // if there is repeat password field => check if match
  if (
    values
    && values.length === 2
    && filteredInputs
    && filteredInputs.length === 2
  ) {
    if (
      values[1]
      && values[0]
      && values[1].val !== ''
      && values[1].val !== values[0].val
    ) {
      return mismatch || 'Mismatch';
    }
  }

  return false;
};

const isPostcode = (postcode, field, message) => {
  const re = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;

    if (!re.test(postcode)) {
    const customMessage = getMessage(message, 'email');
    return customMessage || "Enter a valid postcode";
  }
  return false;
};

const isDate = (values, field) => {
  const validation = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      const { val, label } = values[i];
      if (val) {
        if (label === 'MM') {
          const message = field.errorMessage['month'];
          const max = 12;
          const min = 1;
          const maxLength = 2;
          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: getMessage(message, 'date') || "Enter a valid month",
            };
          }
        } else if (label === 'DD') {
          const message = field.errorMessage['date'];
          const max = 31;
          const min = 1;
          const maxLength = 2;
          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: getMessage(message, 'date') || "Enter a valid date",
            };
          }
        } else if (label === 'YYYY') {
          const message = field.errorMessage['year'];
          const max = new Date().getFullYear() + 1;
          const min = 1920;
          const maxLength = 4;
          if (val.length > maxLength || val < min || val > max) {
            validation[i] = {
              index: i,
              message: getMessage(message, 'date') || "Enter a valid year",
            };
          }
        }
      }
    }
  }
  return validation;
};

const validateField = (value, field) => {
  const { type, isRequired: required } = field;
  // Check first if requried checkbox or radio
  if ((type === 'checkbox' || type === 'radio') && required) {
    return checkboxValidation(value, field.errorMessage);
  }

  if (type === 'password') {
    return passwordValidation(value, field);
  }

  if (type === 'email' && field.emailConfirmEnabled) {
    return emailValidation(value, field);
  }

  // Check if empty
  const empty = isEmpty(value);
  let validationMessage = '';
  const message = field && field.errorMessage ? field.errorMessage : false;
  // Set validation message if required
  validationMessage = required ? isRequired(required, empty, message) : false;
  // Set other validation messages
  if (!validationMessage && !empty) {
    if (type === 'email') {
      validationMessage = isEmail(value, field, message);
    } else if (type === 'website') {
      validationMessage = isUrl(value, field, message);
    } else if (type === 'date') {
      let isValid = true;
      if (field.dateType && field.dateType === 'datepicker') {
        isValid = required ? isRequired(required, empty, message) : false;
      } else {
        isValid = isDate(value, field);
      }
      validationMessage = isValid.length > 0 ? isValid : false;
    } else if (type === 'postcode') {
      validationMessage = isPostcode(value, field, message);
    }
  }
  return validationMessage;
};

export {
  isEmpty,
  selectValidation,
  checkboxValidation,
  isUrl,
  isEmail,
  isRequired,
  validateField,
};
