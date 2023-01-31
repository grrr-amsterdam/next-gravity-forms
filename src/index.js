import React, { useEffect, useState, useCallback, useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import { FormConfirmation, FormError, RenderFields, Submit, ProgressBar } from './FormElements';

import {
  checkConditionalLogic,
  fetchForm,
  forceValidation,
  nextStep,
  prevStep,
  scrollToConfirmation,
  setTouchedHandler,
  unsetError,
  updateFieldsValuesBasedOnEntry,
  updateFormHandler,
} from './Helpers/form';

import { validateField } from './Helpers/validation';

const GravityForm = props => {
  const { initialPage, populatedEntry, onChange } = props;

  const [submitFailed, setSubmitFailed] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [touched, setTouched] = useState({});
  const [activePage, setActivePage] = useState(initialPage || 1);
  const [conditionFields, setConditionFields] = useState({});
  const [conditionalIds, setConditionalIds] = useState({});
  const [isMultipart, setIsMultiPart] = useState(false);
  const [pageClicked, setPageClicked] = useState(false);
  const [showPageValidationMsg, setShowPageValidationMsg] = useState(false);
  const [pages, setPages] = useState({});

  const wrapperRef = useRef(null);

  const updateEntryFields = useCallback(populatedEntry => {
    updateFieldsValuesBasedOnEntry(populatedEntry);
  }, []);

  /**
   * Fetch form data
   */
  useEffect(() => {
    fetchForm({
      setFormData,
      setFormValues,
      setActivePage,
      setConditionFields,
      setConditionalIds,
      setPages,
      setIsMultiPart,
      ...props,
    });
  }, []);

  /**
   * Call custom onChange handler with passed values from form
   */
  useEffect(() => {
    if (onChange) {
      onChange(formValues);
    }
  }, [formValues]);

  /**
   * Set entry to the form
   */
  useEffect(() => {
    if (populatedEntry) {
      updateEntryFields(populatedEntry);
    }
  }, [populatedEntry]);

  /**
   * Scroll page to the first not valid field
   */
  const scrollToFirstInvalidField = () => {
    if (!wrapperRef) return;

    const firstErrEl = wrapperRef.current.querySelector('.form-field.error');
    if (firstErrEl) {
      firstErrEl.scrollIntoView();
    }
  };

  const {
    title,
    formID,
    submitIcon,
    saveStateToHtmlField,
    styledComponents,
    customComponents,
    errorMessage,
    dropzoneText,
    loadingSpinner,
    onError,
    language,
    apiKeys,
  } = props;

  const {
    Button,
    Loading,
    FormError: SFormError,
    FormConfirmation: SFormConfirmation,
    GFWrapper = 'div',
  } = styledComponents || false;

  const { cssClass, button: { conditionalLogic } = {} } = formData || {};
  const hideSubmitButton =
  conditionalLogic &&
  checkConditionalLogic(
    conditionalLogic,
    Object.keys(formValues).length > 0 ? formValues : formData.fields
  );

  const handlePrevStep = e => {
    e.preventDefault();
    prevStep(formValues, pages, activePage, setActivePage, setPageClicked);
  };

  const onSubmit = async event => {
    const { onSubmit: customOnSubmit, filterFormData } = props;
    let formData = new FormData(event.target);

    if (filterFormData) formData = filterFormData(formData, formValues);

    event.preventDefault();

    const isFormValid = forceValidation(
      activePage,
      formValues,
      setShowPageValidationMsg,
      setTouched
    );

    if (!isFormValid) {
      scrollToFirstInvalidField();
      return false;
    }

    if (customOnSubmit) {
      customOnSubmit(formData);
    } else {
      setSubmitting(true);
      setSubmitSuccess(false);
      setSubmitFailed(false);
      setConfirmationMessage(false);
      setErrorMessages(false);

      const { formID, backendUrl, jumpToConfirmation, onSubmitSuccess, onError } = props;
      const gfSubmissionUrl = backendUrl.substring(0, backendUrl.indexOf('/wp-json'));

      fetch(`${gfSubmissionUrl}/wp-json/gf/v2/forms/${formID}/submissions`, {
        method: 'POST',
        body: formData,
      })
        .then(resp => resp.json())
        .then(response => {
          if (response && response.is_valid) {
            if (onSubmitSuccess) {
              const res = onSubmitSuccess(response);
              if (!res) {
                return false;
              }
            }
            const confirmationMessage = response.confirmation_message;
            const { type, link } = confirmationMessage || false;
            if (type && link && type === 'redirect') {
              if (typeof window !== 'undefined') {
                window.location.replace(link);
                return false;
              }
            }
            setSubmitting(false);
            setSubmitSuccess(true);
            setConfirmationMessage(confirmationMessage);

            if (jumpToConfirmation) {
              scrollToConfirmation(props, wrapperRef, jumpToConfirmation);
            }
          } else {
            throw {
              response,
            };
          }
        })
        .catch(error => {
          const errorMessages =
            error && error.response && error.response.validation_messages
              ? error.response.validation_messages
              : 'Something went wrong';

          if (onError) {
            onError(errorMessages);
            setSubmitting(false);
            setSubmitFailed(true);
          } else {
            setSubmitting(false);
            setSubmitFailed(true);
            setErrorMessages(errorMessages);
          }

          if (jumpToConfirmation) {
            scrollToConfirmation(props, wrapperRef);
          }
        });
    }
  };

  return (
    <GFWrapper ref={wrapperRef} className="form-wrapper" id={`gravity_form_${formID}`}>
      {formData.title ? null : Loading && <Loading isLoading />}

      {submitFailed && !submitSuccess && !onError && (
        <FormError
          SFormError={SFormError || false}
          errorMessage={errorMessage || 'There was a problem with your submission'}
        />
      )}

      {submitSuccess && confirmationMessage && (
        <FormConfirmation
          confirmation={confirmationMessage}
          SFormConfirmation={SFormConfirmation}
        />
      )}

      {!submitSuccess && formData.fields ? (
        <form
          onSubmit={event => onSubmit(event)}
          className={cssClass}
          encType={isMultipart ? 'multipart/form-data' : undefined}
          noValidate
        >
          {(formData.title || formData.description) && (
            <div>
              {formData.title && title ? <h3 className="form-title">{formData.title}</h3> : null}
              {formData.description ? (
                <p className="form-description">{formData.description}</p>
              ) : null}
            </div>
          )}
          <div className="form-wrapper">
            {formData?.pagination?.pages && (
              <ProgressBar
                pagination={formData.pagination}
                activePage={activePage}
                firstPageCssClass={formData.firstPageCssClass}
              />
            )}
            <RenderFields
              styledComponents={styledComponents}
              customComponents={customComponents}
              fields={formData.fields}
              formValues={formValues}
              submitFailed={submitFailed}
              submitSuccess={submitSuccess}
              updateForm={(event, field, inputID) =>
                updateFormHandler(
                  field,
                  event,
                  inputID,
                  formValues,
                  setFormValues,
                  conditionalIds,
                  conditionFields
                )
              }
              touched={touched}
              setTouched={id => setTouchedHandler(id, touched, setTouched)}
              setErrorMessages={setErrorMessages}
              pagination={formData.pagination}
              activePage={activePage}
              prevStep={e => handlePrevStep(e)}
              nextStep={e =>
                nextStep(
                  e,
                  props,
                  pages,
                  formValues,
                  activePage,
                  setActivePage,
                  setPageClicked,
                  setTouched,
                  setShowPageValidationMsg
                )
              }
              checkConditionalLogic={(condition, fields) =>
                checkConditionalLogic(condition, (fields = false))
              }
              saveStateToHtmlField={saveStateToHtmlField}
              enableHoneypot={formData.enableHoneypot}
              errors={errorMessages}
              unsetError={id => unsetError(id, errorMessages)}
              dropzoneText={dropzoneText}
              pageClicked={pageClicked}
              language={language}
              apiKeys={apiKeys}
              {...props}
            />
            {(!formData.pagination ||
              (formData.pagination && formData.pagination.pages.length === activePage)) && (
              <Submit
                Button={Button}
                Loading={Loading}
                formData={formData}
                submitIcon={submitIcon}
                submitting={submitting}
                prevStep={e => handlePrevStep(e)}
                loadingSpinner={loadingSpinner}
                hideSubmitButton={hideSubmitButton}
              />
            )}
          </div>
        </form>
      ) : (
        ''
      )}
    </GFWrapper>
  );
};

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false,
  jumpToConfirmation: true,
};

export { validateField, FormConfirmation, FormError, RenderFields, Submit };

export default GravityForm;

