import React from 'react';

const Submit = ({
  Button,
  Loading,
  formData,
  isDisabled,
  submitting,
  prevStep,
  Component,
  loadingSpinner,
  hideSubmitButton,
}) => {
  const SButton = Button || 'button';

  return (
    <React.Fragment>
      <div className={`footer${Component ? ' multiple' : ''}`}>
        <input type="hidden" name="nonce" value={formData.nonce} />
        {Component ? <Component submitting={submitting} /> : ''}
        {!hideSubmitButton && (
          <SButton
            type="submit"
            mr={20}
            disabled={isDisabled || submitting}
            className={submitting ? 'loading' : undefined}
          >
            {formData.button.text}
            {loadingSpinner ? <span /> : ''}
          </SButton>
        )}

        {formData.lastPageButton && (
          <SButton className="prev" onClick={prevStep}>
            {formData.lastPageButton.text}
          </SButton>
        )}
      </div>
      {Loading && !loadingSpinner && <Loading isLoading={submitting} />}
    </React.Fragment>
  );
};

export default Submit;
