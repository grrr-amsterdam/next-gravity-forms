"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),Submit=function(a){var b=a.Button,c=a.Loading,d=a.formData,e=a.isDisabled,f=a.submitting,g=a.prevStep,h=a.Component,i=a.loadingSpinner,j=a.hideSubmitButton,k=b||"button";return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement("div",{className:"footer".concat(h?" multiple":"")},_react["default"].createElement("input",{type:"hidden",name:"nonce",value:d.nonce}),h?_react["default"].createElement(h,{submitting:f}):"",!j&&_react["default"].createElement(k,{type:"submit",mr:20,disabled:e||f,className:f?"loading":void 0},d.button.text,i?_react["default"].createElement("span",null):""),d.lastPageButton&&_react["default"].createElement(k,{className:"prev",onClick:g},d.lastPageButton.text)),c&&!i&&_react["default"].createElement(c,{isLoading:f}))},_default=Submit;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdWJtaXQiLCJCdXR0b24iLCJMb2FkaW5nIiwiZm9ybURhdGEiLCJpc0Rpc2FibGVkIiwic3VibWl0dGluZyIsInByZXZTdGVwIiwiQ29tcG9uZW50IiwibG9hZGluZ1NwaW5uZXIiLCJoaWRlU3VibWl0QnV0dG9uIiwiU0J1dHRvbiIsIm5vbmNlIiwiYnV0dG9uIiwidGV4dCIsImxhc3RQYWdlQnV0dG9uIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Zvcm1FbGVtZW50cy9TdWJtaXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN1Ym1pdCA9ICh7XG4gIEJ1dHRvbixcbiAgTG9hZGluZyxcbiAgZm9ybURhdGEsXG4gIGlzRGlzYWJsZWQsXG4gIHN1Ym1pdHRpbmcsXG4gIHByZXZTdGVwLFxuICBDb21wb25lbnQsXG4gIGxvYWRpbmdTcGlubmVyLFxuICBoaWRlU3VibWl0QnV0dG9uLFxufSkgPT4ge1xuICBjb25zdCBTQnV0dG9uID0gQnV0dG9uIHx8ICdidXR0b24nO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb290ZXIke0NvbXBvbmVudCA/ICcgbXVsdGlwbGUnIDogJyd9YH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm5vbmNlXCIgdmFsdWU9e2Zvcm1EYXRhLm5vbmNlfSAvPlxuICAgICAgICB7Q29tcG9uZW50ID8gPENvbXBvbmVudCBzdWJtaXR0aW5nPXtzdWJtaXR0aW5nfSAvPiA6ICcnfVxuICAgICAgICB7IWhpZGVTdWJtaXRCdXR0b24gJiYgKFxuICAgICAgICAgIDxTQnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIG1yPXsyMH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkIHx8IHN1Ym1pdHRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N1Ym1pdHRpbmcgPyAnbG9hZGluZycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Zvcm1EYXRhLmJ1dHRvbi50ZXh0fVxuICAgICAgICAgICAge2xvYWRpbmdTcGlubmVyID8gPHNwYW4gLz4gOiAnJ31cbiAgICAgICAgICA8L1NCdXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAge2Zvcm1EYXRhLmxhc3RQYWdlQnV0dG9uICYmIChcbiAgICAgICAgICA8U0J1dHRvbiBjbGFzc05hbWU9XCJwcmV2XCIgb25DbGljaz17cHJldlN0ZXB9PlxuICAgICAgICAgICAge2Zvcm1EYXRhLmxhc3RQYWdlQnV0dG9uLnRleHR9XG4gICAgICAgICAgPC9TQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7TG9hZGluZyAmJiAhbG9hZGluZ1NwaW5uZXIgJiYgPExvYWRpbmcgaXNMb2FkaW5nPXtzdWJtaXR0aW5nfSAvPn1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VibWl0O1xuIl0sIm1hcHBpbmdzIjoicU9BRU1BLE1BQU0sQ0FBRyxXQVVULElBVEpDLEVBQU0sR0FBTkEsTUFBTSxDQUNOQyxDQUFPLEdBQVBBLE9BQU8sQ0FDUEMsQ0FBUSxHQUFSQSxRQUFRLENBQ1JDLENBQVUsR0FBVkEsVUFBVSxDQUNWQyxDQUFVLEdBQVZBLFVBQVUsQ0FDVkMsQ0FBUSxHQUFSQSxRQUFRLENBQ1JDLENBQVMsR0FBVEEsU0FBUyxDQUNUQyxDQUFjLEdBQWRBLGNBQWMsQ0FDZEMsQ0FBZ0IsR0FBaEJBLGdCQUFnQixDQUVWQyxDQUFPLENBQUdULENBQU0sRUFBSSxRQUFRLENBRWxDLE1BQ0UsaUNBQUMsaUJBQUssQ0FBQyxRQUFRLE1BQ2IsdUNBQUssU0FBUyxpQkFBV00sQ0FBUyxDQUFHLFdBQVcsQ0FBRyxFQUFFLENBQUcsRUFDdEQseUNBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRUosQ0FBUSxDQUFDUSxLQUFNLEVBQUcsQ0FDMURKLENBQVMsQ0FBRyxnQ0FBQyxDQUFTLEVBQUMsVUFBVSxDQUFFRixDQUFXLEVBQUcsQ0FBRyxFQUFFLENBQ3RELENBQUNJLENBQWdCLEVBQ2hCLGdDQUFDLENBQU8sRUFDTixJQUFJLENBQUMsUUFBUSxDQUNiLEVBQUUsQ0FBRSxFQUFHLENBQ1AsUUFBUSxDQUFFTCxDQUFVLEVBQUlDLENBQVcsQ0FDbkMsU0FBUyxDQUFFQSxDQUFVLENBQUcsU0FBUyxPQUFhLEVBRTdDRixDQUFRLENBQUNTLE1BQU0sQ0FBQ0MsSUFBSSxDQUNwQkwsQ0FBYyxDQUFHLDRDQUFRLENBQUcsRUFBRSxDQUVsQyxDQUVBTCxDQUFRLENBQUNXLGNBQWMsRUFDdEIsZ0NBQUMsQ0FBTyxFQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFUixDQUFTLEVBQ3pDSCxDQUFRLENBQUNXLGNBQWMsQ0FBQ0QsSUFBSSxDQUVoQyxDQUNHLENBQ0xYLENBQU8sRUFBSSxDQUFDTSxDQUFjLEVBQUksZ0NBQUMsQ0FBTyxFQUFDLFNBQVMsQ0FBRUgsQ0FBVyxFQUFHLENBR3ZFLENBQUMsVUFFY0wsTUFBTSJ9