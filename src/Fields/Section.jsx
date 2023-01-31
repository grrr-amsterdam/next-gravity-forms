import React from "react";

export default ({ field, hideField, styledComponents }) => {
  const { cssClass, width, label, description, descriptionPlacement } = field;

  const { Box = "div" } = styledComponents || false;

  return (
    <Box
      width={width}
      className={`form-field gsection ${cssClass}`}
      style={{ display: hideField ? "none" : undefined }}
    >
      <React.Fragment>
        {descriptionPlacement === "above" && description && description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <h2
          className="gsection_title"
          dangerouslySetInnerHTML={{ __html: label }}
        />
        {descriptionPlacement !== "above" && description && description && (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </React.Fragment>
    </Box>
  );
};
