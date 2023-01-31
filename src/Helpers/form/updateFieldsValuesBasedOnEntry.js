import { getFieldPrepopulatedValue } from './index'

/**
 * Update field values based on new props coming
 */

export default (populatedEntry, formValues, formData, setFormValues) => {
  const keys = Object.keys(formValues);

  let changed = false;
  const tmpValues = { ...formValues };

  for (let i = 0; i < keys.length; i++) {
    const id = keys[i];
    if (populatedEntry[id]) {
      const field = formData.fields.filter((item) => item.id == id);
      if (!field[0]) {
        continue;
      }
      const value = getFieldPrepopulatedValue(
        field[0],
        [],
        populatedEntry
      );
      if (
        value &&
        formValues[id] &&
        formValues[id].value &&
        formValues[id].value != value
      ) {
        tmpValues[id].value = value;
        changed = true;
      }
    }
  }
  if (changed) {
    setFormValues(tmpValues);
  }
};
