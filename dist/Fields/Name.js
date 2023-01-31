"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var _default=function(a){var b,c=a.field,d=a.value,e=a.validationMessage,f=a.touched,g=a.setTouched,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.unsetError,m=a.setFocusClass,n=a.cssClass,o=(0,_objectWithoutProperties2["default"])(a,_excluded),p=c.id,q=c.formId,r=c.type,s=c.label,t=c.placeholder,u=c.isRequired,v=c.inputs,w=c.maxLength,x=c.description,y=c.descriptionPlacement,z=c.labelPlacement,A=c.width,B=c.customName,C=j||!1,D=C.ReactSelect,E=C.Input,F=void 0===E?"input":E,G=C.Label,H=void 0===G?"label":G,I=C.Box,J=void 0===I?"div":I,K=D||_reactSelect["default"],L=v[0],M=null===L||void 0===L||null===(b=L.choices)||void 0===b?void 0:b.map(function(a){return{value:a.value,label:a.text}}),N=null===L||void 0===L?void 0:L.choices.filter(function(a){return a.isSelected});N=N.length?[{label:N[0].text,value:N[0].value}]:"";var O=(0,_react.useState)(d||N),P=(0,_slicedToArray2["default"])(O,2),Q=P[0],R=P[1],S=function(a){R(a)};return _react["default"].createElement(J,{width:A,className:e&&f||k?"form-field error ".concat(n):"form-field ".concat(n),style:{display:h?"none":void 0}},v.map(function(a){return!a.isHidden&&_react["default"].createElement("div",{className:r,key:a.id},_react["default"].createElement(_InputLabel["default"],{formId:q,id:a.id,label:a.label,labelPlacement:z,isRequired:u,styledComponent:j}),"above"===y&&x&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:x}}),"radio"===a.inputType?_react["default"].createElement(K,{name:B||"input_".concat(a.id),required:u,value:Q&&Q.value?Q:"",onChange:function onChange(b){S(b,c),l(a.id)},onFocus:function onFocus(){return m(!0)},placeholder:a.placeholder,options:M,className:"form-select",autoFocus:!1,inputId:"input_".concat(q,"_").concat(a.id)}):_react["default"].createElement(F,{id:"input_".concat(q,"_").concat(a.id),key:a.id,name:B||"input_".concat(a.id),type:r,value:d?d[a.id]:"",placeholder:a.placeholder,maxLength:w,required:u,onChange:function onChange(b){i(b,c,a.id),l(a.id)},onBlur:function onBlur(b){i(b,c),g(a.id),m(""!==d)},onFocus:function onFocus(){return m(!0)},"aria-label":a.label,"aria-describedby":"error_".concat(q,"_").concat(a.id),"aria-invalid":!!e&&f||!!k}),"above"!==y&&x&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:x}}),(e&&f||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(q,"_").concat(p)},e||k))}))};exports["default"]=_default;