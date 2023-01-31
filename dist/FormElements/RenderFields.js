"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_RenderField=_interopRequireDefault(require("./RenderField")),_excluded=["fields","formValues","updateForm","submitFailed","submitSuccess","touched","setTouched","setErrorMessages","pagination","activePage","prevStep","nextStep","isNextDisabled","checkConditionalLogic","saveStateToHtmlField","enableHoneypot","styledComponents","customComponents","unsetError","errors","dropzoneText","pageClicked","language","apiKeys"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var divideFieldsIntoPages=function(a,b){for(var c,d=b.map(function(){return[]}),e=0;e<a.length;e++)c=d[a[e].pageNumber],d[a[e].pageNumber-1]&&("page"===a[e].type?d[a[e].pageNumber-2].push(a[e]):d[a[e].pageNumber-1].push(a[e]));return d},getMaxFieldId=function(a){for(var b=0,c=0;c<a.length;c++)parseInt(a[c].id)>b&&(b=parseInt(a[c].id));return b+1},fieldTypes=["checkbox","email","hidden","html","number","phone","radio","select","multiselect","text","textarea","website","page","date","fileupload","consent","password","section","scustom","name","address","buckarooideal","postcode","captcha"],honeyPotLables=["Name","Email","Phone","Comments"],honeypotLabel=honeyPotLables[Math.floor(Math.random()*Math.floor(4))],_default=function(a){function b(a,b){return _react["default"].createElement(_RenderField["default"],(0,_extends2["default"])({key:"".concat(a.formId,"-").concat(a.id),field:a,formValues:d,submitFailed:f,setTouched:i,setErrorMessages:j,submitSuccess:g,updateForm:e,touched:h,pages:k&&k.pages.length,prevStep:m,nextStep:n,isNextDisabled:o,checkConditionalLogic:p,saveStateToHtmlField:q,styledComponents:s,customComponents:t,error:!!(v&&v[a.id])&&v[a.id],unsetError:u,dropzoneText:w,language:y,apiKeys:z,fields:b,errors:v},A))}var c=a.fields,d=a.formValues,e=a.updateForm,f=a.submitFailed,g=a.submitSuccess,h=a.touched,i=a.setTouched,j=a.setErrorMessages,k=a.pagination,l=a.activePage,m=a.prevStep,n=a.nextStep,o=a.isNextDisabled,p=a.checkConditionalLogic,q=a.saveStateToHtmlField,r=a.enableHoneypot,s=a.styledComponents,t=a.customComponents,u=a.unsetError,v=a.errors,w=a.dropzoneText,x=a.pageClicked,y=a.language,z=a.apiKeys,A=(0,_objectWithoutProperties2["default"])(a,_excluded),B=k?divideFieldsIntoPages(c,k.pages):void 0,C=getMaxFieldId(c),D=(0,_react.useState)(""),E=(0,_slicedToArray2["default"])(D,2),F=E[0],G=E[1],H=(0,_react.useRef)();(0,_react.useEffect)(function(){H.current=l});var I=H.current;return _react["default"].createElement("div",{className:"form-fields".concat(k&&1<k.pages.length?" hasPages ".concat(x?"":" noPageClicked"):"")},k&&1<k.pages.length?k.pages.map(function(a,d){return _react["default"].createElement("div",{className:"page".concat(l===d+1?" active":"").concat(I&&d===I&&l!==d+1&&I!==l?" prevStep":""),key:"page-".concat(d)},a&&_react["default"].createElement("div",{className:"gf_step"},_react["default"].createElement("span",null,a)),B[d].map(function(a){return fieldTypes.includes(a.type)&&b(a,c)}))}):c.map(function(a){return fieldTypes.includes(a.type)&&b(a,c)}),r&&_react["default"].createElement("div",{className:"form-field gform_validation_container"},_react["default"].createElement("label",{htmlFor:"input_".concat(C),className:"gf-label "},honeypotLabel),_react["default"].createElement("input",{type:"text",name:"input_".concat(C),id:"input_".concat(C),value:F,onChange:function onChange(a){return G(a.target.value)},autoComplete:"off"})))};exports["default"]=_default;