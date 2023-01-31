"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function formatMoney(a){var b=Math.abs,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:".",e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:",";try{c=b(c),c=isNaN(c)?2:c;var f=0>a?"-":"",g=parseInt(a=b(+a||0).toFixed(c)).toString(),h=3<g.length?g.length%3:0;return f+(h?g.substr(0,h)+e:"")+g.substr(h).replace(/(\d{3})(?=\d)/g,"$1".concat(e))+(c?d+b(a-g).toFixed(c).slice(2):"")}catch(a){}}var Radio=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{otherValue:!1,inputValue:!1}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onFocus",function(b){var c=b.target.value,d=a.state,e=d.otherValue,f=d.inputValue;e===c&&(c=""),a.otherRadio.click(),a.otherRadio.checked=!0,a.setState({inputValue:c})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onBlur",function(b){var c=b.target.value;""==c.replace(" ","")?(a.setState({inputValue:a.state.otherValue}),a.otherRadio.checked=!1):a.setState({inputValue:formatMoney(c)})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onChange",function(b){var c=b.target.value;a.setState({inputValue:c})}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"setFocus",function(){a.otherChoise.focus()}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this,b=this.props,c=b.field,d=b.value,e=b.validationMessage,f=b.touched,g=b.setTouched,h=b.updateForm,i=b.hideField,j=b.styledComponents,k=b.error,l=b.unsetError,m=c.id,n=c.formId,o=c.type,p=c.label,q=c.cssClass,r=c.isRequired,s=c.choices,t=c.description,u=c.descriptionPlacement,v=c.labelPlacement,w=c.width,x=c.customName,y=c.otherPlaceholder,z=this.state.inputValue,A=j||!1,B=A.Radiogroup,C=void 0===B?"fieldset":B,D=A.Label,E=void 0===D?"legend":D,F=A.Box,G=void 0===F?"div":F,H=A.Input,I=void 0===H?"input":H;return _react["default"].createElement(G,{width:w,className:e&&f||k?"form-field error ".concat(q):"form-field ".concat(q),style:{display:i?"none":void 0}},_react["default"].createElement(C,{className:"radios"},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:v,isRequired:r,styledComponent:j}),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),s.map(function(a,b){return _react["default"].createElement("div",{className:o,key:a.value},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_").concat(b),type:"radio",name:x||"input_".concat(m),value:a.value,checked:d===a.value,onChange:function onChange(a){h(a,c),g(m),l(m)}}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(m,"_").concat(b)},a.text))}),c.enableOtherChoice&&_react["default"].createElement("div",{className:"".concat(o," other-choise")},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_").concat(s.length),type:"radio",name:"input_".concat(m),value:z,onChange:function onChange(a){h(a,c),g(m),l(m)},ref:function ref(b){return a.otherRadio=b},onFocus:function onFocus(b){return a.setFocus(b)}}),_react["default"].createElement(I,{id:"input_".concat(n,"_").concat(m,"_").concat(s.length,"_other"),type:"text",placeholder:y||"Other",value:z||"",onFocus:function onFocus(b){return a.onFocus(b)},onBlur:function onBlur(b){h(b,c),a.onBlur(b)},onChange:function onChange(b){a.onChange(b),l(m)},ref:function ref(b){return a.otherChoise=b}})),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}})),(e&&f||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m)},e||k))}}]),b}(_react.Component),_default=Radio;exports["default"]=_default;