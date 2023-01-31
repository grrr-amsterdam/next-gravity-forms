import PropTypes from 'prop-types';

const unsetError = (id, errorMessages) => {
  if (!errorMessages) return;

  if (errorMessages) {
    if (typeof errorMessages === 'object' && errorMessages[id]) {
      delete errorMessages[id];
    }
  }
};

export default unsetError;

unsetError.propTypes = {
  id: PropTypes.number.isRequired,
  errorMessages: PropTypes.func,
};