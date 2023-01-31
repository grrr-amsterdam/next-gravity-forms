import React, { Component } from "react";
import Dropzone from "react-dropzone";
import GFDropzone from "./GFDropzone";
import InputLabel from "../../FormElements/InputLabel";

class Fileupload extends Component {
  state = {
    imagePreviewUrl: this.props.field.preview || null,
    selectedFile: this.props.field.preview ? true : null,
    uploadFileText: "No file chosen",
    previewID: this.props.value || null,
    errorText: this.props.error || false,
  };

  inputFile = React.createRef();

  onChangeHandler = event => {
    const { hasPreview, allowedExtensions } = this.props.field;
    this.setState({
      imagePreviewUrl: null,
      selectedFile: event.target.files[0],
      uploadFileText: event.target.files[0]
        ? event.target.files[0].name
        : "No file chosen",
    });

    if (hasPreview && event.target && event.target.files[0]) {
      // check file type
      const extension = event.target.files[0].name
        .split(".")
        .pop()
        .toLowerCase(); // file extension from input file
      const isSuccess = allowedExtensions.indexOf(extension) > -1; // is extension in acceptable types
      if (isSuccess) {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result,
            previewID: false,
          });
        };

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  };

  removeFilePreview = () => {
    const { field, unsetError } = this.props;
    this.inputFile.current.value = "";
    this.setState({
      imagePreviewUrl: null,
      selectedFile: null,
      previewID: false,
    });
    unsetError(field.id);
  };

  prepareAllowedTypes = types => {
    let accept = types.split(",");
    accept = accept.map(str => `.${str.replace(/\s/g, "")}`).join(", ");
    return accept;
  };

  onButtonClickHandler = () => {
    this.inputFile.current.click();
  };

  removeFile = (e, field) => {
    e.preventDefault();
    const { updateForm } = this.props;
    updateForm({ target: { value: "" } }, field);
    this.inputFile.current.value = "";
    this.setState({
      imagePreviewUrl: false,
      selectedFile: false,
      previewID: false,
      uploadFileText: "No file chosen",
    });
  };

  render() {
    const { selectedFile, uploadFileText, imagePreviewUrl, previewID } =
      this.state;

    const {
      field,
      value,
      validationMessage,
      touched,
      setTouched,
      hideField,
      updateForm,
      formID,
      fieldError,
      styledComponents,
      error,
      unsetError,
      dropzoneText,
    } = this.props;
    const {
      id,
      type,
      label,
      cssClass,
      isRequired,
      description,
      descriptionPlacement,
      labelPlacement,
      width,
      allowedExtensions,
      buttonText,
      hasPreview,
      maxFileSize,
    } = field;
    const {
      Button = "button",
      Label = "label",
      FileWrapper = "div",
      Box = "div",
    } = styledComponents || false;

    const hasDropzone = cssClass.indexOf("dropzone") > -1;

    return (
      <Box
        width={width}
        className={
          (validationMessage && touched) || error
            ? `form-field error ${cssClass}`
            : `form-field ${cssClass}`
        }
        style={{ display: hideField ? "none" : undefined }}
      >
        <FileWrapper className={type}>
          <InputLabel
            formId={formID}
            id={id}
            label={label}
            labelPlacement={labelPlacement}
            isRequired={isRequired}
            styledComponent={styledComponents}
          />
          {descriptionPlacement === "above" && description && description && (
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {hasDropzone ? (
            <GFDropzone
              dropzoneText={dropzoneText}
              field={field}
              id={id}
              formID={formID}
              isRequired={isRequired}
              updateForm={updateForm}
              setTouched={setTouched}
              unsetError={unsetError}
            />
          ) : (
            <>
              {maxFileSize && (
                <input
                  type="hidden"
                  name="MAX_FILE_SIZE"
                  value={maxFileSize * 1048576}
                />
              )}
              <input
                id={`input_${formID}_${id}`}
                name={`input_${id}`}
                type="file"
                required={isRequired}
                ref={this.inputFile}
                onChange={event => {
                  this.onChangeHandler(event);
                  updateForm(
                    { target: { value: event?.target?.files?.[0]?.name } },
                    field
                  );
                  setTouched(id);
                  unsetError(id);
                }}
                onBlur={event => {
                  updateForm(
                    { target: { value: event?.target?.files?.[0]?.name } },
                    field
                  );
                  setTouched(id);
                }}
                accept={
                  this.prepareAllowedTypes(allowedExtensions) || undefined
                }
                aria-label={label}
                aria-describedby={`error_${formID}_${id}`}
                aria-invalid={!!validationMessage || !!error}
                hidden="hidden"
              />
              {previewID && field.preview && (
                <input
                  type="hidden"
                  name="file-upload-preview"
                  value={previewID}
                />
              )}
              {hasPreview && (
                <div
                  className="file-preview"
                  style={
                    selectedFile && imagePreviewUrl
                      ? { backgroundImage: `url(${imagePreviewUrl})` }
                      : undefined
                  }
                >
                  {selectedFile && imagePreviewUrl && (
                    <button
                      type="button"
                      className="remove-file"
                      onClick={() => this.removeFilePreview()}
                    />
                  )}
                </div>
              )}
              <div
                aria-pressed="false"
                tabIndex="0"
                role="button"
                className="fileUpload"
                onClick={this.onButtonClickHandler}
              >
                <Button color="yellow" tabIndex="-1" type="button">
                  {buttonText || "Choose a file"}
                </Button>
                {!selectedFile && (
                  <span className="no-file">{uploadFileText}</span>
                )}
              </div>
              {selectedFile && (
                <div>
                  <button
                    type="button"
                    onClick={e => this.removeFile(e, field)}
                  >
                    remove file
                  </button>
                  <span>{uploadFileText}</span>
                </div>
              )}
              {description && descriptionPlacement !== "above" && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </>
          )}
          {((validationMessage && touched) || error) && (
            <span className="error-message" id={`error_${id}`}>
              {validationMessage || error}
            </span>
          )}
          {fieldError && (
            <span className="error-message" id={`error_${formID}_${id}`}>
              {fieldError}
            </span>
          )}
        </FileWrapper>
      </Box>
    );
  }
}

export default Fileupload;
