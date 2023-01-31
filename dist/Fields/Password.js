"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=(0,_objectWithoutProperties2["default"])(a,_excluded),m=b.id,n=b.formId,o=b.type,p=b.label,q=b.placeholder,r=b.isRequired,s=b.maxLength,t=b.description,u=b.descriptionPlacement,v=b.labelPlacement,w=b.width,x=b.customName,y=b.inputs,z=b.cssClass,A=b.passwordStrengthEnabled,B=b.minPasswordStrength,C=i||!1,D=C.Input,E=void 0===D?"input":D,F=C.Label,G=void 0===F?"label":F,H=C.Box,I=void 0===H?"div":H,J=(0,_react.useState)(y),K=(0,_slicedToArray2["default"])(J,2),L=K[0],M=K[1],N=(0,_react.useState)("blank"),O=(0,_slicedToArray2["default"])(N,2),P=O[0],Q=O[1],R=function(a,b){var c=_objectSpread({},L);c[b].cssClass=a?"filled":"",M(c)},S=function(a){var e,f,b=Math.LN2,c=Math.log,d=Math.pow,g=0;return 0>=a.length?"blank":4>a.length?"short":(a.match(/[0-9]/)&&(g+=10),a.match(/[a-z]/)&&(g+=26),a.match(/[A-Z]/)&&(g+=26),a.match(/[^a-zA-Z0-9]/)&&(g+=31),e=c(d(g,a.length)),f=e/b,40>f?"bad":56>f?"good":"strong")},T=function(a){var b=S(a);Q(b)};return _react["default"].createElement(I,{width:w,className:d&&e||j?"form-field error ".concat(z):"form-field ".concat(z),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:o},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:v,isRequired:r,styledComponent:i}),"above"===u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br />")}}),_react["default"].createElement("div",{className:"ginput_container ginput_container_password"},y&&y.length&&y.map(function(a,g){return!a.isHidden&&_react["default"].createElement("span",{key:"input_".concat(n,"_").concat(a.id),className:"".concat(1<y.length?"ginput_".concat(0===g?"left":"right"):"medim"," ").concat(L[g].cssClass?L[g].cssClass:"")},_react["default"].createElement(E,{id:"input_".concat(n,"_").concat(a.id,"_").concat(g),name:x||"input_".concat(m).concat(1===g?"_".concat(g+1):""),type:o,value:c&&c[g]&&c[g].val?c[g].val:"",placeholder:a.placeholder?a.placeholder:q,required:r,autoComplete:"off",onChange:function onChange(a){b.subId=g,h(a,b),k(m),A&&0===g&&T(a.target.value)},onBlur:function onBlur(a){b.subId=g,h(a,b),f(m),R(c&&c[g]&&c[g].val&&""!==c[g].val,g)},onFocus:function onFocus(){return R(!0,g)},"aria-label":p,"aria-describedby":"error_".concat(n,"_").concat(a.id,"_").concat(g),"aria-invalid":!!d&&e}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(a.id,"_").concat(g)},a.placeholder||a.label))})),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m),dangerouslySetInnerHTML:{__html:d||j}}),"above"!==u&&t&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br />")}}),!(d&&e||j)&&A&&_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement("div",{id:"input_".concat(n,"_").concat(m,"_strength_indicator"),className:"gfield_password_strength ".concat(P)},P&&"blank"!==P?P:"Strength indicator"),_react["default"].createElement("input",{type:"hidden",className:"gform_hidden",id:"input_".concat(n,"_").concat(m,"_strength"),name:"input_".concat(m,"_strength"),value:P}))))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaXNSZXF1aXJlZCIsIm1heExlbmd0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsImlucHV0cyIsImNzc0NsYXNzIiwicGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQiLCJtaW5QYXNzd29yZFN0cmVuZ3RoIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsInVzZVN0YXRlIiwicGFzc3dvcmRzIiwic2V0UGFzc3dvcmRzIiwicGFzc3dvcmRTdHJlbmd0aCIsInNldFBhc3N3b3JkU3RyZW5ndGgiLCJzZXRGb2N1c0NsYXNzIiwiYWN0aW9uIiwiaSIsInBhc3MiLCJnZm9ybVBhc3N3b3JkU3RyZW5ndGgiLCJwYXNzd29yZDEiLCJuYXRMb2ciLCJzY29yZSIsIk1hdGgiLCJMTjIiLCJsb2ciLCJwb3ciLCJzeW1ib2xTaXplIiwibGVuZ3RoIiwibWF0Y2giLCJzZXRHRlB3ZFN0cmVuZ3RoIiwicGFzc3dvcmQiLCJyZXN1bHQiLCJkaXNwbGF5IiwiX19odG1sIiwicmVwbGFjZSIsIm1hcCIsImlucHV0IiwiaXNIaWRkZW4iLCJ2YWwiLCJldmVudCIsInN1YklkIiwidGFyZ2V0Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0ZpZWxkcy9QYXNzd29yZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICcuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbCdcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gICAgaW5wdXRzLFxuICAgIGNzc0NsYXNzLFxuICAgIHBhc3N3b3JkU3RyZW5ndGhFbmFibGVkLFxuICAgIG1pblBhc3N3b3JkU3RyZW5ndGgsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCB7IElucHV0ID0gXCJpbnB1dFwiLCBMYWJlbCA9IFwibGFiZWxcIiwgQm94ID0gXCJkaXZcIiB9ID1cbiAgICBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIGNvbnN0IFtwYXNzd29yZHMsIHNldFBhc3N3b3Jkc10gPSB1c2VTdGF0ZShpbnB1dHMpO1xuICBjb25zdCBbcGFzc3dvcmRTdHJlbmd0aCwgc2V0UGFzc3dvcmRTdHJlbmd0aF0gPSB1c2VTdGF0ZShcImJsYW5rXCIpO1xuXG4gIGNvbnN0IHNldEZvY3VzQ2xhc3MgPSAoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgcGFzcyA9IHsgLi4ucGFzc3dvcmRzIH07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgcGFzc1tpXS5jc3NDbGFzcyA9IFwiZmlsbGVkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3NbaV0uY3NzQ2xhc3MgPSBcIlwiO1xuICAgIH1cbiAgICBzZXRQYXNzd29yZHMocGFzcyk7XG4gIH07XG5cbiAgY29uc3QgZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoID0gKHBhc3N3b3JkMSkgPT4ge1xuICAgIGNvbnN0IHNob3J0UGFzcyA9IDE7XG4gICAgY29uc3QgYmFkUGFzcyA9IDI7XG4gICAgY29uc3QgZ29vZFBhc3MgPSAzO1xuICAgIGNvbnN0IHN0cm9uZ1Bhc3MgPSA0O1xuICAgIGNvbnN0IG1pc21hdGNoID0gNTtcbiAgICBsZXQgc3ltYm9sU2l6ZSA9IDA7XG4gICAgbGV0IG5hdExvZztcbiAgICBsZXQgc2NvcmU7XG5cbiAgICBpZiAocGFzc3dvcmQxLmxlbmd0aCA8PSAwKSByZXR1cm4gXCJibGFua1wiO1xuXG4gICAgLy8gcGFzc3dvcmQgPCA0XG4gICAgaWYgKHBhc3N3b3JkMS5sZW5ndGggPCA0KSByZXR1cm4gXCJzaG9ydFwiO1xuXG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvWzAtOV0vKSkgc3ltYm9sU2l6ZSArPSAxMDtcbiAgICBpZiAocGFzc3dvcmQxLm1hdGNoKC9bYS16XS8pKSBzeW1ib2xTaXplICs9IDI2O1xuICAgIGlmIChwYXNzd29yZDEubWF0Y2goL1tBLVpdLykpIHN5bWJvbFNpemUgKz0gMjY7XG4gICAgaWYgKHBhc3N3b3JkMS5tYXRjaCgvW15hLXpBLVowLTldLykpIHN5bWJvbFNpemUgKz0gMzE7XG5cbiAgICBuYXRMb2cgPSBNYXRoLmxvZyhNYXRoLnBvdyhzeW1ib2xTaXplLCBwYXNzd29yZDEubGVuZ3RoKSk7XG4gICAgc2NvcmUgPSBuYXRMb2cgLyBNYXRoLkxOMjtcblxuICAgIGlmIChzY29yZSA8IDQwKSByZXR1cm4gXCJiYWRcIjtcblxuICAgIGlmIChzY29yZSA8IDU2KSByZXR1cm4gXCJnb29kXCI7XG5cbiAgICByZXR1cm4gXCJzdHJvbmdcIjtcbiAgfTtcblxuICBjb25zdCBzZXRHRlB3ZFN0cmVuZ3RoID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2Zvcm1QYXNzd29yZFN0cmVuZ3RoKHBhc3N3b3JkKTtcbiAgICBzZXRQYXNzd29yZFN0cmVuZ3RoKHJlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogZGVzY3JpcHRpb24ucmVwbGFjZSgvXFxuL2csIFwiPGJyIC8+XCIpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpbnB1dF9jb250YWluZXIgZ2lucHV0X2NvbnRhaW5lcl9wYXNzd29yZFwiPlxuICAgICAgICAgIHtpbnB1dHMgJiZcbiAgICAgICAgICAgIGlucHV0cy5sZW5ndGggJiZcbiAgICAgICAgICAgIGlucHV0cy5tYXAoXG4gICAgICAgICAgICAgIChpbnB1dCwgaSkgPT5cbiAgICAgICAgICAgICAgICAhaW5wdXQuaXNIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgZ2lucHV0XyR7aSA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwifWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJtZWRpbVwiXG4gICAgICAgICAgICAgICAgICAgIH0gJHtwYXNzd29yZHNbaV0uY3NzQ2xhc3MgPyBwYXNzd29yZHNbaV0uY3NzQ2xhc3MgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH0ke2kgPT09IDEgPyBgXyR7aSArIDF9YCA6IFwiXCJ9YFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICYmIHZhbHVlW2ldICYmIHZhbHVlW2ldLnZhbCA/IHZhbHVlW2ldLnZhbCA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPyBpbnB1dC5wbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQgJiYgaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHRlB3ZFN0cmVuZ3RoKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3ViSWQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0udmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0udmFsICE9PSBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSWR9XyR7aW5wdXQuaWR9XyR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17ISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGlucHV0XyR7Zm9ybUlkfV8ke2lucHV0LmlkfV8ke2l9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge2lucHV0LnBsYWNlaG9sZGVyIHx8IGlucHV0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCJcbiAgICAgICAgICAgIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3IgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBkZXNjcmlwdGlvbi5yZXBsYWNlKC9cXG4vZywgXCI8YnIgLz5cIiksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshKCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgcGFzc3dvcmRTdHJlbmd0aEVuYWJsZWQgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhfaW5kaWNhdG9yYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ2ZpZWxkX3Bhc3N3b3JkX3N0cmVuZ3RoICR7cGFzc3dvcmRTdHJlbmd0aH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFzc3dvcmRTdHJlbmd0aCAmJiBwYXNzd29yZFN0cmVuZ3RoICE9PSBcImJsYW5rXCJcbiAgICAgICAgICAgICAgICA/IHBhc3N3b3JkU3RyZW5ndGhcbiAgICAgICAgICAgICAgICA6IFwiU3RyZW5ndGggaW5kaWNhdG9yXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2Zvcm1faGlkZGVuXCJcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1fc3RyZW5ndGhgfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRTdHJlbmd0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6Im1pRUFHZSxXQVlULElBWEpBLEVBQUssR0FBTEEsS0FBSyxDQUNMQyxDQUFLLEdBQUxBLEtBQUssQ0FDTEMsQ0FBaUIsR0FBakJBLGlCQUFpQixDQUNqQkMsQ0FBTyxHQUFQQSxPQUFPLENBQ1BDLENBQVUsR0FBVkEsVUFBVSxDQUNWQyxDQUFTLEdBQVRBLFNBQVMsQ0FDVEMsQ0FBVSxHQUFWQSxVQUFVLENBQ1ZDLENBQWdCLEdBQWhCQSxnQkFBZ0IsQ0FDaEJDLENBQUssR0FBTEEsS0FBSyxDQUNMQyxDQUFVLEdBQVZBLFVBQVUsQ0FDUEMsQ0FBSyx1REFHTkMsQ0FBRSxDQWdCQVgsQ0FBSyxDQWhCUFcsRUFBRSxDQUNGQyxDQUFNLENBZUpaLENBQUssQ0FmUFksTUFBTSxDQUNOQyxDQUFJLENBY0ZiLENBQUssQ0FkUGEsSUFBSSxDQUNKQyxDQUFLLENBYUhkLENBQUssQ0FiUGMsS0FBSyxDQUNMQyxDQUFXLENBWVRmLENBQUssQ0FaUGUsV0FBVyxDQUNYQyxDQUFVLENBV1JoQixDQUFLLENBWFBnQixVQUFVLENBQ1ZDLENBQVMsQ0FVUGpCLENBQUssQ0FWUGlCLFNBQVMsQ0FDVEMsQ0FBVyxDQVNUbEIsQ0FBSyxDQVRQa0IsV0FBVyxDQUNYQyxDQUFvQixDQVFsQm5CLENBQUssQ0FSUG1CLG9CQUFvQixDQUNwQkMsQ0FBYyxDQU9acEIsQ0FBSyxDQVBQb0IsY0FBYyxDQUNkQyxDQUFLLENBTUhyQixDQUFLLENBTlBxQixLQUFLLENBQ0xDLENBQVUsQ0FLUnRCLENBQUss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