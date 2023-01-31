import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({
  field,
  validationMessage,
  error,
  sitekey,
  styledComponents,
  setTouched,
  unsetError,
  touched,
  hideField,
  ...props
}) => {
  const {
    id,
    captchaTheme,
    formId,
    captchaLanguage,
    width,
    cssClass,
    description,
    descriptionPlacement,
  } = field;

  const { Box = "div" } = styledComponents || false;

  if (!sitekey) return null;

  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field captcha error ${cssClass}`
          : `form-field captcha ${cssClass}`
      }
      style={{ display: hideField ? "none" : undefined }}
    >
      {descriptionPlacement === "above" && description && (
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <ReCAPTCHA
        sitekey={sitekey}
        theme={captchaTheme}
        hl={captchaLanguage}
        onChange={() => {
          setTouched(id);
          unsetError(id);
        }}
      />
      {descriptionPlacement !== "above" && description && (
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {((validationMessage && touched) || error) && (
        <span className="error-message" id={`error_${formId}_${id}`}>
          {validationMessage || error}
        </span>
      )}
    </Box>
  );
};

export default Captcha;
