"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function formatMoney(a){var b=Math.abs,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:".",e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:",";try{c=b(c),c=isNaN(c)?2:c;var f=0>a?"-":"",g=parseInt(a=b(+a||0).toFixed(c)).toString(),h=3<g.length?g.length%3:0;return f+(h?g.substr(0,h)+e:"")+g.substr(h).replace(/(\d{3})(?=\d)/g,"$1".concat(e))+(c?d+b(a-g).toFixed(c).slice(2):"")}catch(a){}}var Radio=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{otherValue:!1,inputValue:!1}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onFocus",function(b){var c=b.target.value,d=a.state,e=d.otherValue,f=d.inputValue;e===c&&(c=""),a.otherRadio.click(),a.otherRadio.checked=!0,a.setState({inputValue:c})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onBlur",function(b){var c=b.target.value;""==c.replace(" ","")?(a.setState({inputValue:a.state.otherValue}),a.otherRadio.checked=!1):a.setState({inputValue:formatMoney(c)})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onChange",function(b){var c=b.target.value;a.setState({inputValue:c})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"setFocus",function(){a.otherChoise.focus()}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this,b=this.props,c=b.field,d=b.value,e=b.validationMessage,f=b.touched,g=b.setTouched,h=b.updateForm,i=b.hideField,j=b.styledComponents,k=b.error,l=b.unsetError,m=c.id,n=c.formId,o=c.type,p=c.label,q=c.cssClass,r=c.isRequired,s=c.choices,t=c.description,u=c.descriptionPlacement,v=c.labelPlacement,w=c.width,x=c.customName,y=c.otherPlaceholder,z=this.state.inputValue,A=j||!1,B=A.Radiogroup,C=void 0===B?"fieldset":B,D=A.Label,E=void 0===D?"legend":D,F=A.Box,G=void 0===F?"div":F,H=A.Input,I=void 0===H?"input":H;return _react["default"].createElement(G,{width:w,className:e&&f||k?"form-field error ".concat(q):"form-field ".concat(q),style:{display:i?"none":void 0}},_react["default"].createElement(C,{className:"radios"},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:v,isRequired:r,styledComponent:j}),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),s.map(function(a,b){return _react["default"].createElement("div",{className:o,key:a.value},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_").concat(b),type:"radio",name:x||"input_".concat(m),value:a.value,checked:d===a.value,onChange:function onChange(a){h(a,c),g(m),l(m)}}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(m,"_").concat(b)},a.text))}),c.enableOtherChoice&&_react["default"].createElement("div",{className:"".concat(o," other-choise")},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_").concat(s.length),type:"radio",name:"input_".concat(m),value:z,onChange:function onChange(a){h(a,c),g(m),l(m)},ref:function ref(b){return a.otherRadio=b},onFocus:function onFocus(b){return a.setFocus(b)}}),_react["default"].createElement(I,{id:"input_".concat(n,"_").concat(m,"_").concat(s.length,"_other"),type:"text",placeholder:y||"Other",value:z||"",onFocus:function onFocus(b){return a.onFocus(b)},onBlur:function onBlur(b){h(b,c),a.onBlur(b)},onChange:function onChange(b){a.onChange(b),l(m)},ref:function ref(b){return a.otherChoise=b}})),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}})),(e&&f||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m)},e||k))}}]),b}(_react.Component),_default=Radio;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JtYXRNb25leSIsImFtb3VudCIsIk1hdGgiLCJhYnMiLCJkZWNpbWFsQ291bnQiLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwiaXNOYU4iLCJuZWdhdGl2ZVNpZ24iLCJpIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJqIiwibGVuZ3RoIiwic3Vic3RyIiwicmVwbGFjZSIsInNsaWNlIiwiZSIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvdGhlclBsYWNlaG9sZGVyIiwiUmFkaW9ncm91cCIsIkxhYmVsIiwiQm94IiwiSW5wdXQiLCJkaXNwbGF5IiwiX19odG1sIiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xuXG5mdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQsIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSBcIi5cIiwgdGhvdXNhbmRzID0gXCIsXCIpIHtcbiAgdHJ5IHtcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpO1xuICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50O1xuXG4gICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/IFwiLVwiIDogXCJcIjtcblxuICAgIGNvbnN0IGkgPSBwYXJzZUludChcbiAgICAgIChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpXG4gICAgKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGogPSBpLmxlbmd0aCA+IDMgPyBpLmxlbmd0aCAlIDMgOiAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIG5lZ2F0aXZlU2lnbiArXG4gICAgICAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogXCJcIikgK1xuICAgICAgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIGAkMSR7dGhvdXNhbmRzfWApICtcbiAgICAgIChkZWNpbWFsQ291bnRcbiAgICAgICAgPyBkZWNpbWFsICtcbiAgICAgICAgICBNYXRoLmFicyhhbW91bnQgLSBpKVxuICAgICAgICAgICAgLnRvRml4ZWQoZGVjaW1hbENvdW50KVxuICAgICAgICAgICAgLnNsaWNlKDIpXG4gICAgICAgIDogXCJcIilcbiAgICApO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5jbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG90aGVyVmFsdWU6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6IGZhbHNlLFxuICB9O1xuXG4gIG9uRm9jdXMgPSBlID0+IHtcbiAgICBsZXQgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgeyBvdGhlclZhbHVlLCBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKG90aGVyVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMub3RoZXJSYWRpby5jbGljaygpO1xuICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25CbHVyID0gZSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgaWYgKHZhbHVlLnJlcGxhY2UoXCIgXCIsIFwiXCIpID09IFwiXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB0aGlzLnN0YXRlLm90aGVyVmFsdWUgfSk7XG4gICAgICB0aGlzLm90aGVyUmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZm9ybWF0TW9uZXkodmFsdWUpIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHNldEZvY3VzID0gZSA9PiB7XG4gICAgdGhpcy5vdGhlckNob2lzZS5mb2N1cygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICB0b3VjaGVkLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIHVwZGF0ZUZvcm0sXG4gICAgICBoaWRlRmllbGQsXG4gICAgICBzdHlsZWRDb21wb25lbnRzLFxuICAgICAgZXJyb3IsXG4gICAgICB1bnNldEVycm9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgZm9ybUlkLFxuICAgICAgdHlwZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3NzQ2xhc3MsXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgY2hvaWNlcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgY3VzdG9tTmFtZSxcbiAgICAgIG90aGVyUGxhY2Vob2xkZXIsXG4gICAgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHsgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIFJhZGlvZ3JvdXAgPSBcImZpZWxkc2V0XCIsXG4gICAgICBMYWJlbCA9IFwibGVnZW5kXCIsXG4gICAgICBCb3ggPSBcImRpdlwiLFxuICAgICAgSW5wdXQgPSBcImlucHV0XCIsXG4gICAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgICAgPlxuICAgICAgICA8UmFkaW9ncm91cCBjbGFzc05hbWU9XCJyYWRpb3NcIj5cbiAgICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgICAgZm9ybUlkPXtmb3JtSWR9XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBsYWJlbFBsYWNlbWVudD17bGFiZWxQbGFjZW1lbnR9XG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17Y2hvaWNlLnZhbHVlfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gY2hvaWNlLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aX1gfT5cbiAgICAgICAgICAgICAgICB7Y2hvaWNlLnRleHR9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7ZmllbGQuZW5hYmxlT3RoZXJDaG9pY2UgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3R5cGV9IG90aGVyLWNob2lzZWB9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyUmFkaW8gPSBlKX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMuc2V0Rm9jdXMoZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e290aGVyUGxhY2Vob2xkZXIgfHwgXCJPdGhlclwifVxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vbkJsdXIoZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIC8vIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmFkaW9ncm91cD5cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl0sIm1hcHBpbmdzIjoiNnNFQUdBLFFBQVNBLFlBQVcsQ0FBQ0MsQ0FBTSxDQUFvRCxPQUU1REMsSUFBSSxDQUFDQyxHQUFHLENBRkVDLENBQVksd0RBQUcsQ0FBQyxDQUFFQyxDQUFPLHdEQUFHLEdBQUcsQ0FBRUMsQ0FBUyx3REFBRyxHQUFHLENBQzNFLEdBQUksQ0FDRkYsQ0FBWSxDQUFHLEVBQVNBLENBQVksQ0FBQyxDQUNyQ0EsQ0FBWSxDQUFHRyxLQUFLLENBQUNILENBQVksQ0FBQyxDQUFHLENBQUMsQ0FBR0EsQ0FBWSxJQUUvQ0ksRUFBWSxDQUFZLENBQUMsQ0FBVlAsQ0FBVSxDQUFHLEdBQUcsQ0FBRyxFQUFFLENBRXBDUSxDQUFDLENBQUdDLFFBQVEsQ0FDZlQsQ0FBTSxDQUFHLEVBQVMsQ0FBT0EsQ0FBTSxFQUFLLENBQUMsQ0FBQyxDQUFDVSxPQUFPLENBQUNQLENBQVksQ0FBQyxDQUM5RCxDQUFDUSxRQUFRLEVBQUUsQ0FDTkMsQ0FBQyxDQUFjLENBQUMsQ0FBWkosQ0FBQyxDQUFDSyxNQUFVLENBQUdMLENBQUMsQ0FBQ0ssTUFBTSxDQUFHLENBQUMsQ0FBRyxDQUFDLENBRXpDLE1BQ0VOLEVBQVksRUFDWEssQ0FBQyxDQUFHSixDQUFDLENBQUNNLE1BQU0sQ0FBQyxDQUFDLENBQUVGLENBQUMsQ0FBQyxDQUFHUCxDQUFTLENBQUcsRUFBRSxDQUFDLENBQ3JDRyxDQUFDLENBQUNNLE1BQU0sQ0FBQ0YsQ0FBQyxDQUFDLENBQUNHLE9BQU8sQ0FBQyxnQkFBZ0IsYUFBT1YsQ0FBUyxFQUFHLEVBQ3RERixDQUFZLENBQ1RDLENBQU8sQ0FDUCxF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