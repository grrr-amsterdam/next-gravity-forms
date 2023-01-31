"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_reactDropzone=_interopRequireDefault(require("react-dropzone")),_GFDropzone=_interopRequireDefault(require("./GFDropzone")),_InputLabel=_interopRequireDefault(require("../../FormElements/InputLabel"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var Fileupload=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{imagePreviewUrl:a.props.field.preview||null,selectedFile:!!a.props.field.preview||null,uploadFileText:"No file chosen",previewID:a.props.value||null,errorText:a.props.error||!1}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"inputFile",_react["default"].createRef()),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onChangeHandler",function(b){var c=a.props.field,d=c.hasPreview,e=c.allowedExtensions;if(a.setState({imagePreviewUrl:null,selectedFile:b.target.files[0],uploadFileText:b.target.files[0]?b.target.files[0].name:"No file chosen"}),d&&b.target&&b.target.files[0]){var f=b.target.files[0].name.split(".").pop().toLowerCase(),g=-1<e.indexOf(f);if(g){var h=new FileReader;h.onloadend=function(){a.setState({imagePreviewUrl:h.result,previewID:!1})},h.readAsDataURL(b.target.files[0])}}}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"removeFilePreview",function(){var b=a.props,c=b.field,d=b.unsetError;a.inputFile.current.value="",a.setState({imagePreviewUrl:null,selectedFile:null,previewID:!1}),d(c.id)}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"prepareAllowedTypes",function(a){var b=a.split(",");return b=b.map(function(a){return".".concat(a.replace(/\s/g,""))}).join(", "),b}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onButtonClickHandler",function(){a.inputFile.current.click()}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"removeFile",function(b,c){b.preventDefault();var d=a.props.updateForm;d({target:{value:""}},c),a.inputFile.current.value="",a.setState({imagePreviewUrl:!1,selectedFile:!1,previewID:!1,uploadFileText:"No file chosen"})}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this,b=this.state,c=b.selectedFile,d=b.uploadFileText,e=b.imagePreviewUrl,f=b.previewID,g=this.props,h=g.field,i=g.value,j=g.validationMessage,k=g.touched,l=g.setTouched,m=g.hideField,n=g.updateForm,o=g.formID,p=g.fieldError,q=g.styledComponents,r=g.error,s=g.unsetError,t=g.dropzoneText,u=h.id,v=h.type,w=h.label,x=h.cssClass,y=h.isRequired,z=h.description,A=h.descriptionPlacement,B=h.labelPlacement,C=h.width,D=h.allowedExtensions,E=h.buttonText,F=h.hasPreview,G=h.maxFileSize,H=q||!1,I=H.Button,J=void 0===I?"button":I,K=H.Label,L=void 0===K?"label":K,M=H.FileWrapper,N=void 0===M?"div":M,O=H.Box,P=void 0===O?"div":O,Q=-1<x.indexOf("dropzone");return _react["default"].createElement(P,{width:C,className:j&&k||r?"form-field error ".concat(x):"form-field ".concat(x),style:{display:m?"none":void 0}},_react["default"].createElement(N,{className:v},_react["default"].createElement(_InputLabel["default"],{formId:o,id:u,label:w,labelPlacement:B,isRequired:y,styledComponent:q}),"above"===A&&z&&z&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:z}}),Q?_react["default"].createElement(_GFDropzone["default"],{dropzoneText:t,field:h,id:u,formID:o,isRequired:y,updateForm:n,setTouched:l,unsetError:s}):_react["default"].createElement(_react["default"].Fragment,null,G&&_react["default"].createElement("input",{type:"hidden",name:"MAX_FILE_SIZE",value:1048576*G}),_react["default"].createElement("input",{id:"input_".concat(o,"_").concat(u),name:"input_".concat(u),type:"file",required:y,ref:this.inputFile,onChange:function onChange(b){var c,d,e;a.onChangeHandler(b),n({target:{value:null===b||void 0===b||null===(c=b.target)||void 0===c||null===(d=c.files)||void 0===d||null===(e=d[0])||void 0===e?void 0:e.name}},h),l(u),s(u)},onBlur:function onBlur(a){var b,c,d;n({target:{value:null===a||void 0===a||null===(b=a.target)||void 0===b||null===(c=b.files)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.name}},h),l(u)},accept:this.prepareAllowedTypes(D)||void 0,"aria-label":w,"aria-describedby":"error_".concat(o,"_").concat(u),"aria-invalid":!!j||!!r,hidden:"hidden"}),f&&h.preview&&_react["default"].createElement("input",{type:"hidden",name:"file-upload-preview",value:f}),F&&_react["default"].createElement("div",{className:"file-preview",style:c&&e?{backgroundImage:"url(".concat(e,")")}:void 0},c&&e&&_react["default"].createElement("button",{type:"button",className:"remove-file",onClick:function onClick(){return a.removeFilePreview()}})),_react["default"].createElement("div",{"aria-pressed":"false",tabIndex:"0",role:"button",className:"fileUpload",onClick:this.onButtonClickHandler},_react["default"].createElement(J,{color:"yellow",tabIndex:"-1",type:"button"},E||"Choose a file"),!c&&_react["default"].createElement("span",{className:"no-file"},d)),c&&_react["default"].createElement("div",null,_react["default"].createElement("button",{type:"button",onClick:function onClick(b){return a.removeFile(b,h)}},"remove file"),_react["default"].createElement("span",null,d)),z&&"above"!==A&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:z}})),(j&&k||r)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(u)},j||r),p&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(o,"_").concat(u)},p)))}}]),b}(_react.Component),_default=Fileupload;exports["default"]=_default;