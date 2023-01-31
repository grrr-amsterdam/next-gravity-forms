"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError"]),m=b.id,n=b.formId,o=b.type,p=b.label,q=b.inputs,r=b.cssClass,s=b.isRequired,t=b.description,u=b.descriptionPlacement,v=b.labelPlacement,w=b.width,x=b.customName,y=b.checkboxLabel,z=i||!1,A=z.Consent,B=void 0===A?"div":A,C=z.Label,D=void 0===C?"label":C,E=z.Box,F=void 0===E?"div":E;return _react["default"].createElement(F,{width:w,className:d&&e||j?"form-field consent error ".concat(r):"form-field consent ".concat(r),style:{display:g?"none":void 0}},_react["default"].createElement(B,{className:"checkboxes"},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:v,isRequired:s,styledComponent:i}),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),q.filter(function(a){return!a.isHidden}).map(function(a,c){return _react["default"].createElement(_react["default"].Fragment,{key:"input_".concat(n,"_").concat(m,"_").concat(c)},0===c&&_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_1"),type:"checkbox",name:x||"input_".concat(a.id),value:1,required:s,onChange:function onChange(a){h(a,b),f(m),k(m)},"aria-invalid":!!d&&e||!!j}),_react["default"].createElement("label",{className:"gfield_consent_label",htmlFor:x||"input_".concat(n,"_").concat(m,"_1"),dangerouslySetInnerHTML:{__html:y}})),1===c&&_react["default"].createElement("input",{type:"hidden",name:"input_".concat(a.id),value:y,className:"gform_hidden"}),2===c&&_react["default"].createElement("input",{type:"hidden",name:"input_".concat(a.id),value:"1",className:"gform_hidden"}))}),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m)},d||j)))};exports["default"]=_default;