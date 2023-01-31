"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","setFocusClass","hideField","updateForm","styledComponents","error","cssClass","unsetError"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.setFocusClass,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.cssClass,m=a.unsetError,n=(0,_objectWithoutProperties2["default"])(a,_excluded),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.isRequired,t=b.choices,u=b.placeholder,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=(0,_react.useState)(""),B=(0,_slicedToArray2["default"])(A,2),C=B[0],D=B[1],E="",F=t.map(function(a){var b={value:a.value,label:a.text};return a.isSelected&&(E=b),b}),G=(0,_react.useState)(c||E),H=(0,_slicedToArray2["default"])(G,2),I=H[0],J=H[1],K=function(a){J(a);i({target:{value:a}},b)},L=function(){i({target:{value:I}},b),f(o),g(I&&I.value),D("")},M=j||!1,N=M.ReactSelect,O=M.Label,P=void 0===O?"label":O,Q=M.Box,R=void 0===Q?"div":Q,S=N||_reactSelect["default"];return _react["default"].createElement(R,{width:y,className:d&&e||k?"form-field error ".concat(l," ").concat(C):"form-field ".concat(l," ").concat(C),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:s,styledComponent:j}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(S,{name:z||"input_".concat(o),required:s,value:I&&I.value?I:"",onChange:function onChange(a){K(a,b),m(o)},onBlur:function onBlur(){return L()},onFocus:function onFocus(){g(!0),D("is-open")},placeholder:u,options:F,className:"form-select",autoFocus:!1,inputId:"input_".concat(p,"_").concat(o)}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||k)))};exports["default"]=_default;