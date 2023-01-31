"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass","language"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var _default=function(a){function b(){Promise.resolve().then(function(){return _interopRequireWildcard(require("i18n-iso-countries"))}).then(function(a){a.registerLocale(require("i18n-iso-countries/langs/".concat(o?o:"en",".json")));var b=Object.values(a.getNames(o?o:"en",{select:"official"})).map(function(b){return b}).sort(function(c,a){return c.localeCompare(a)});G(b)})["catch"](function(a){return console.log(a)})}var c=a.field,d=a.value,e=a.validationMessage,f=a.touched,g=a.setTouched,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.unsetError,m=a.setFocusClass,n=a.cssClass,o=a.language,p=(0,_objectWithoutProperties2["default"])(a,_excluded),q=c.id,r=c.formId,s=c.type,t=c.label,u=c.placeholder,v=c.isRequired,w=c.inputs,x=c.maxLength,y=c.description,z=c.descriptionPlacement,A=c.labelPlacement,B=c.width,C=c.customName,D=(0,_react.useState)([]),E=(0,_slicedToArray2["default"])(D,2),F=E[0],G=E[1],H=j||!1,I=H.Input,J=void 0===I?"input":I,K=H.Label,L=void 0===K?"label":K,M=H.Box,N=void 0===M?"div":M,O=H.ReactSelect,P=O||_reactSelect["default"],Q=function(a){var b=a&&a.target?a:{target:{value:a}};i(b,c)};return(0,_react.useEffect)(function(){b()},[]),_react["default"].createElement(N,{width:B,className:e&&f||k?"form-field error ".concat(n):"form-field ".concat(n),style:{display:h?"none":void 0}},null===w||void 0===w?void 0:w.map(function(a,b){return!a.isHidden&&_react["default"].createElement("div",{className:s,key:a.id},_react["default"].createElement(_InputLabel["default"],{formId:r,id:a.id,label:a.label,labelPlacement:A,isRequired:v,styledComponent:j}),"above"===z&&y&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:y}}),5===b&&F?_react["default"].createElement(P,{onChange:function onChange(b){Q(b),l(a.id)},onBlur:function onBlur(b){i(b,c),g(a.id),m(""!==d)},onFocus:function onFocus(){return m(!0)},options:F.map(function(a){return{label:a,value:a}})},F.map(function(a){return _react["default"].createElement("option",{value:a},a)})):_react["default"].createElement(J,{id:"input_".concat(r,"_").concat(a.id),key:a.id,name:C||"input_".concat(a.id),type:s,value:d?d[a.id]:"",placeholder:a.placeholder,maxLength:x,required:v,onChange:function onChange(b){i(b,c,a.id),l(a.id)},onBlur:function onBlur(b){i(b,c),g(a.id),m(""!==d)},onFocus:function onFocus(){return m(!0)},"aria-label":a.label,"aria-describedby":"error_".concat(r,"_").concat(a.id),"aria-invalid":!!e&&f||!!k}),"above"!==z&&y&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:y}}),(e&&f||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(r,"_").concat(q)},e||k))}))};exports["default"]=_default;