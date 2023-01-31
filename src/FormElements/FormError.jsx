import React from 'react';
import PropTypes from 'prop-types';

const FormError = ({ errorMessage, SFormError }) => {
  const Wrapper = SFormError || 'div';
  return (
    <Wrapper>
      <div className="form-error">{errorMessage}</div>
    </Wrapper>
  );
};

FormError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default FormError;
