import React from 'react';
import PropTypes from 'prop-types';

const ValidationMessage = ({ validationMessage, formId, id, error }) => {
  return (
    <span className="error-message" id={`error_${formId}_${id}`}>
      {validationMessage || error}
    </span>
  );
};

ValidationMessage.propTypes = {
  validationMessage: PropTypes.string.isRequired,
};

export default ValidationMessage;
