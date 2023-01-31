import fetch from "isomorphic-unfetch";
import { forceValidation, scrollToConfirmation } from "./index";

async function onSubmit(
  event,
  props,
  formValues,
  activePage,
  wrapperRef,
  setSubmitting,
  submitSuccess,
  setSubmitSuccess,
  setSubmitFailed,
  setShowPageValidationMsg,
  setTouched,
  setConfirmationMessage,
  setErrorMessages
) {
  const { onSubmit: customOnSubmit } = props;
  const formData = new FormData(event.target);

  event.preventDefault();

  const isPageValid = forceValidation(
    activePage,
    formValues,
    setShowPageValidationMsg,
    setTouched
  );
  if (!isPageValid) return false;

  if (customOnSubmit) {
    customOnSubmit(formData);
  } else {
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitFailed(false);
    setConfirmationMessage(false);
    setErrorMessages(false);

    const { formID, backendUrl, jumpToConfirmation, onSubmitSuccess, onError } =
      props;
    const gfSubmissionUrl = backendUrl.substring(
      0,
      backendUrl.indexOf("/wp-json")
    );

    fetch(`${gfSubmissionUrl}/wp-json/gf/v2/forms/${formID}/submissions`, {
      method: "POST",
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
          if (type && link && type === "redirect") {
            if (typeof window !== "undefined") {
              window.location.replace(link);
              return false;
            }
          }
          setSubmitting(false);
          setSubmitSuccess(true);
          setConfirmationMessage(confirmationMessage);

          if (jumpToConfirmation) {
            scrollToConfirmation(props, wrapperRef);
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
            : "Something went wrong";

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
}

export default onSubmit;
