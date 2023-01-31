import { validateField } from "../validation";
import checkConditionalLogic from "./checkConditionalLogic";

export default (
  field,
  event,
  inputID,
  formValues,
  setFormValues,
  conditionalIds,
  conditionFields,
  ...props
) => {
  const { onChange } = props;
  const { id, type, isRequired } = field;
  // Set new value
  let value;

  if (field.type === "checkbox") {
    const values = [...formValues[field.id].value];
    const index = values.indexOf(event.target.value);
    if (index > -1) {
      values.splice(index, 1);
    } else {
      values.push(event.target.value);
    }
    value = values;
  } else if (field.type == "date" && field.dateType !== "datepicker") {
    const { subId, dateLabel } = field;
    const values = [...formValues[field.id].value];
    values[subId] = {
      val: event.target.value,
      label: dateLabel,
    };
    value = values;
  } else if (field.type === "consent") {
    value = event.target ? event.target.checked : "null";
  } else if (field.type === "address") {
    let values = { ...formValues[field.id].value };
    if (inputID) {
      values[inputID] = event.target.value;
    }

    value = values;
  } else if (field.type === "postcode") {
    value = event.target ? event.target.value : null;
    Object.values(formValues).filter(
      item => item.cssClass === "field--street"
    )[0].value = event?.street;
    Object.values(formValues).filter(
      item => item.cssClass === "field--city"
    )[0].value = event?.city;
  } else if (field.type === "name") {
    let values = [...formValues[field.id].value];

    const index = values.indexOf(inputID);

    if (index > -1) {
      values.splice(index, 1);
    } else {
      values[inputID] = event.target.value;
    }

    value = event.target.value;
  } else if (
    field.type === "password" ||
    (field.type === "email" && field.emailConfirmEnabled)
  ) {
    const { subId } = field;
    const values =
      formValues[field.id] && formValues[field.id].value
        ? [...formValues[field.id].value]
        : [];
    values[subId] = {
      val: event.target.value,
    };
    value = values;
  } else {
    value = event.target ? event.target.value : "null";
  }
  // if field is IBAN
  if (type === "text" && field.cssClass.indexOf("iban") > -1) {
    type = "iban";
  }

  // Validate field
  const valid = validateField(value, field);

  // if field ID is somewhere in conditional fields
  // recalculate all conditions
  if (conditionalIds.indexOf(id) !== -1) {
    formValues[id].value = value;
    for (let i = 0; i < conditionFields.length; i++) {
      const { id } = conditionFields[i];
      const hide = checkConditionalLogic(
        conditionFields[i].conditionalLogic,
        formValues
      );
      formValues[id].hideField = hide;
      if (hide) {
        if (formValues[id].isRequired && hide) {
          formValues[id].value = "";
        }
        formValues[id].valid = !!formValues[id].isRequired;
      }
    }
  }

  const newValues = {
    ...formValues,
    [id]: {
      value,
      id,
      valid,
      label: field.label,
      pageNumber: field.pageNumber,
      cssClass: field.cssClass,
      isRequired: field.isRequired,
    },
  };

  setFormValues({
    ...newValues,
  });

  if (onChange) {
    onChange(newValues);
  }
};
