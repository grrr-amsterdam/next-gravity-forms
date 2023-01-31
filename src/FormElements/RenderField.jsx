import React, { useState } from "react";
import * as FormFields from "../Fields";

const frac2dec = fraction => {
  /* assumes fraction is in the form  1-1/2 or 1 1/2 */
  /* doesn't work on negative numbers */
  let fractionParts = fraction.split("-");
  if (fractionParts.length === 1) {
    /* try space as divider */
    fractionParts = fraction.split(" ");
  }

  if (fractionParts.length > 1 && fraction.indexOf("/") !== -1) {
    const integer = parseInt(fractionParts[0]);
    const decimalParts = fractionParts[1].split("/");
    const decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);

    return integer + decimal;
  }
  if (fraction.indexOf("/") !== -1) {
    const decimalParts = fraction.split("/");
    const decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);
    return decimal;
  }
  return parseInt(fraction);
};

const formatComponentName = string =>
  string.charAt(0).toUpperCase() + string.slice(1);
const formatWidthFromCss = cssClass => {
  if (!cssClass) return {};
  const widthStarts = cssClass.indexOf("[");
  const widthEnds = cssClass.indexOf("]");

  if (widthStarts === -1 || widthEnds === -1) {
    return {};
  }

  const width = cssClass
    .substring(widthStarts + 1, widthEnds)
    .split(",")
    .map(item => frac2dec(item.replace(/\s/g, "")));

  const cleanedCssClass = `${cssClass.replace(
    cssClass.substring(widthStarts, widthEnds + 1),
    ""
  )} custom-width`;

  return {
    width,
    cleanedCssClass,
  };
};

const RenderField = ({
  field,
  formValues,
  submitFailed,
  submitSuccess,
  setTouched,
  setErrorMessages,
  touched,
  updateForm,
  pages,
  prevStep,
  nextStep,
  isNextDisabled,
  saveStateToHtmlField,
  styledComponents,
  customComponents,
  error,
  unsetError,
  dropzoneText,
  language,
  apiKeys,
  errors,
  ...props
}) => {
  let FormComponent = FormFields[formatComponentName(field.type)];

  if (
    customComponents &&
    (customComponents[field.id] ||
      customComponents[field.cssClass] ||
      customComponents[field.inputName])
  ) {
    FormComponent = FormFields[formatComponentName("custom")];
  }

  const { cleanedCssClass, width } = formatWidthFromCss(field.cssClass);
  if (width) {
    field.cssClass = cleanedCssClass;
    field.width = width;
  }
  const value = formValues[field.id]
    ? formValues[field.id].value
    : field.defaultValue;
  const [fieldClassName, setFieldClassName] = useState(
    `${field.cssClass}${
      field.type === "select"
        ? value.value && value.value !== ""
          ? " filled"
          : ""
        : value && value !== ""
        ? " filled"
        : ""
    }`
  );

  const setFocusClass = action => {
    if (action) {
      if (fieldClassName.indexOf(" filled") === -1) {
        setFieldClassName(`${fieldClassName} filled`);
      }
    } else {
      setFieldClassName(fieldClassName.replace(" filled", ""));
    }
  };

  return (
    <FormComponent
      key={`el-${field.formId}-${field.id}`}
      field={field}
      value={value}
      updateForm={(event, field, inputID) => updateForm(event, field, inputID)}
      validationMessage={
        formValues[field.id] ? formValues[field.id].valid : false
      }
      formValues={formValues}
      submitFailed={submitFailed}
      submitSuccess={submitSuccess}
      touched={touched[field.id]}
      setTouched={setTouched}
      setErrorMessages={setErrorMessages}
      unsetError={unsetError}
      error={error}
      pages={pages}
      prevStep={prevStep}
      nextStep={nextStep}
      isNextDisabled={isNextDisabled}
      hideField={formValues[field.id] ? formValues[field.id].hideField : false}
      saveStateToHtmlField={
        field.type === "html" && field.cssClass.indexOf("set-state") !== -1
          ? { formValues, saveStateToHtmlField }
          : false
      }
      styledComponents={styledComponents}
      cssClass={fieldClassName}
      setFocusClass={setFocusClass}
      component={
        customComponents &&
        (customComponents[field.id] ||
          customComponents[field.cssClass] ||
          customComponents[field.inputName])
      }
      dropzoneText={dropzoneText}
      language={language}
      apiKeys={apiKeys}
      errors={errors}
      {...props}
    />
  );
};

export default RenderField;
