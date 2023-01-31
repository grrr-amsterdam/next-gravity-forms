"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_excluded=["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError"],_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=(0,_objectWithoutProperties2["default"])(a,_excluded),m=b.id,n=b.formId,o=b.type,p=b.label,q=b.cssClass,r=b.isRequired,s=b.choices,t=b.inputs,u=b.description,v=b.descriptionPlacement,w=b.labelPlacement,x=b.width,y=b.customName,z=i||!1,A=z.Checkbox,B=void 0===A?"fieldset":A,C=z.Label,D=void 0===C?"legend":C,E=z.Box,F=void 0===E?"div":E;return _react["default"].createElement(F,{width:x,className:d&&e||j?"form-field error ".concat(q):"form-field ".concat(q),style:{display:g?"none":void 0}},_react["default"].createElement(B,{className:"checkboxes"},_react["default"].createElement(_InputLabel["default"],{formId:n,id:m,label:p,labelPlacement:w,isRequired:r,styledComponent:i}),"above"===v&&u&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:u}}),s.map(function(a,d){return _react["default"].createElement("div",{className:o,key:a.value},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(t[d].id),type:"checkbox",name:y||"input_".concat(t[d].id),value:a.value,checked:c.includes(a.value),onChange:function onChange(a){h(a,b),f(m),k(m)}}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(t[d].id)},a.text))}),"above"!==v&&u&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:u}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJ1bnNldEVycm9yIiwicHJvcHMiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJpbnB1dHMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJDaGVja2JveCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsIl9faHRtbCIsIm1hcCIsImNob2ljZSIsImkiLCJpbmNsdWRlcyIsImV2ZW50IiwidGV4dCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQ2hlY2tib3guanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICB1bnNldEVycm9yLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgY3NzQ2xhc3MsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBjaG9pY2VzLFxuICAgIGlucHV0cyxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3Qge1xuICAgIENoZWNrYm94ID0gXCJmaWVsZHNldFwiLFxuICAgIExhYmVsID0gXCJsZWdlbmRcIixcbiAgICBCb3ggPSBcImRpdlwiLFxuICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cImNoZWNrYm94ZXNcIj5cbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfSBrZXk9e2Nob2ljZS52YWx1ZX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dHNbaV0uaWR9YH1cbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpbnB1dHNbaV0uaWR9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUuaW5jbHVkZXMoY2hvaWNlLnZhbHVlKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dHNbaV0uaWR9YH0+XG4gICAgICAgICAgICAgIHtjaG9pY2UudGV4dH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9DaGVja2JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiI0aUJBR2UsV0FZVCxJQVhKQSxFQUFLLEdBQUxBLEtBQUssQ0FDTEMsQ0FBSyxHQUFMQSxLQUFLLENBQ0xDLENBQWlCLEdBQWpCQSxpQkFBaUIsQ0FDakJDLENBQU8sR0FBUEEsT0FBTyxDQUNQQyxDQUFVLEdBQVZBLFVBQVUsQ0FDVkMsQ0FBUyxHQUFUQSxTQUFTLENBQ1RDLENBQVUsR0FBVkEsVUFBVSxDQUNWQyxDQUFnQixHQUFoQkEsZ0JBQWdCLENBQ2hCQyxDQUFLLEdBQUxBLEtBQUssQ0FDTEMsQ0FBVSxHQUFWQSxVQUFVLENBQ1BDLENBQUssdURBR05DLENBQUUsQ0FhQVgsQ0FBSyxDQWJQVyxFQUFFLENBQ0ZDLENBQU0sQ0FZSlosQ0FBSyxDQVpQWSxNQUFNLENBQ05DLENBQUksQ0FXRmIsQ0FBSyxDQVhQYSxJQUFJLENBQ0pDLENBQUssQ0FVSGQsQ0FBSyxDQVZQYyxLQUFLLENBQ0xDLENBQVEsQ0FTTmYsQ0FBSyxDQVRQZSxRQUFRLENBQ1JDLENBQVUsQ0FRUmhCLENBQUssQ0FSUGdCLFVBQVUsQ0FDVkMsQ0FBTyxDQU9MakIsQ0FBSyxDQVBQaUIsT0FBTyxDQUNQQyxDQUFNLENBTUpsQixDQUFLLENBTlBrQixNQUFNLENBQ05DLENBQVcsQ0FLVG5CLENBQUssQ0FMUG1CLFdBQVcsQ0FDWEMsQ0FBb0IsQ0FJbEJwQixDQUFLLENBSlBvQixvQkFBb0IsQ0FDcEJDLENBQWMsQ0FHWnJCLENBQUssQ0FIUHFCLGNB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