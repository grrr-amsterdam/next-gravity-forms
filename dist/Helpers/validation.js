"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateField=exports.selectValidation=exports.isUrl=exports.isRequired=exports.isEmpty=exports.isEmail=exports.checkboxValidation=void 0;var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),getMessage=function(a,b){return!!b&&(a&&"object"===(0,_typeof2["default"])(a)&&a.custom?a.custom:a&&"object"===(0,_typeof2["default"])(a)&&a[b]?a[b]:a)},isEmail=function(a,b,c){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)){var d=getMessage(c,"email");return d||"Enter a valid email"}return!1};exports.isEmail=isEmail;var isUrl=function(a,b,c){if(!/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(a)){var d=getMessage(c,"url");return d||"Enter a valid url"}return!1};exports.isUrl=isUrl;var isEmpty=function(a){return!a};exports.isEmpty=isEmpty;var isRequired=function(a,b,c){if(a&&b){var d=getMessage(c,"required");return d||"This field is required"}return!1};exports.isRequired=isRequired;var selectValidation=function(a,b,c){return!(b===c&&a)};exports.selectValidation=selectValidation;var checkboxValidation=function(a,b){return!!(1>a.length)&&(b||"This field is required")};exports.checkboxValidation=checkboxValidation;var emailValidation=function(a,b){var c=b||!1,d=c.inputs,e=c.isRequired,f=c.errorMessage,g=f||!1,h=g.required,j=g.mismatch,k=a&&a.filter(function(a){return a&&""===a.val}).length;if((a&&2>a.length||0!==k)&&e)return h||"This field is required";if(a&&0<a.length)for(var l,m=0;a.length>m;m++)if(l=isEmail(a[m].val),l)return l;return!!(a&&2===a.length&&d&&2===d.length&&a[1]&&a[0]&&""!==a[1].val&&a[1].val!==a[0].val)&&(j||"Mismatch")},passwordValidation=function(a,b){var c=b||!1,d=c.inputs,e=c.isRequired,f=c.errorMessage,g=f||!1,h=g.required,i=g.mismatch,j=d.filter(function(a){return!a.isHidden}),k=a&&a.filter(function(a){return a&&""===a.val}).length;return(a&&0===a.length||k===j.length)&&e?h||"This field is required":!!(a&&2===a.length&&j&&2===j.length&&a[1]&&a[0]&&""!==a[1].val&&a[1].val!==a[0].val)&&(i||"Mismatch")},isPostcode=function(a,b,c){if(!/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(a)){var d=getMessage(c,"email");return d||"Enter a valid postcode"}return!1},isDate=function(a,b){for(var c=[],d=0;d<a.length;d++)if(a[d]){var e=a[d],f=e.val,g=e.label;if(f)if("MM"===g){var h=b.errorMessage.month,j=12,k=1,l=2;(f.length>l||f<k||f>j)&&(c[d]={index:d,message:getMessage(h,"date")||"Enter a valid month"})}else if("DD"===g){var m=b.errorMessage.date,n=31,o=1,p=2;(f.length>p||f<o||f>n)&&(c[d]={index:d,message:getMessage(m,"date")||"Enter a valid date"})}else if("YYYY"===g){var q=b.errorMessage.year,r=new Date().getFullYear()+1,s=1920,t=4;(f.length>t||f<s||f>r)&&(c[d]={index:d,message:getMessage(q,"date")||"Enter a valid year"})}}return c},validateField=function(a,b){var c=b.type,d=b.isRequired;if(("checkbox"===c||"radio"===c)&&d)return checkboxValidation(a,b.errorMessage);if("password"===c)return passwordValidation(a,b);if("email"===c&&b.emailConfirmEnabled)return emailValidation(a,b);var e=isEmpty(a),f="",g=!!(b&&b.errorMessage)&&b.errorMessage;if(f=!!d&&isRequired(d,e,g),!f&&!e)if("email"===c)f=isEmail(a,b,g);else if("website"===c)f=isUrl(a,b,g);else if("date"===c){var h=!0;h=b.dateType&&"datepicker"===b.dateType?!!d&&isRequired(d,e,g):isDate(a,b),f=!!(0<h.length)&&h}else"postcode"===c&&(f=isPostcode(a,b,g));return f};exports.validateField=validateField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRNZXNzYWdlIiwibWVzc2FnZSIsInR5cGUiLCJjdXN0b20iLCJpc0VtYWlsIiwiZW1haWwiLCJmaWVsZCIsInRlc3QiLCJjdXN0b21NZXNzYWdlIiwiaXNVcmwiLCJzdHIiLCJpc0VtcHR5IiwidmFsdWUiLCJpc1JlcXVpcmVkIiwicmVxdWlyZWQiLCJlbXB0eSIsInNlbGVjdFZhbGlkYXRpb24iLCJwbGFjZWhvbGRlciIsImNoZWNrYm94VmFsaWRhdGlvbiIsInZhbHVlcyIsImxlbmd0aCIsImVtYWlsVmFsaWRhdGlvbiIsImlucHV0cyIsImVycm9yTWVzc2FnZSIsInJlcXVpcmVkTXNnIiwibWlzbWF0Y2giLCJpc0lucHV0c0VtcHR5IiwiZmlsdGVyIiwiaXRlbSIsInZhbCIsImlzSW5WYWxpZE1haWwiLCJpIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiZmlsdGVyZWRJbnB1dHMiLCJpc0hpZGRlbiIsImlzUG9zdGNvZGUiLCJwb3N0Y29kZSIsImlzRGF0ZSIsInZhbGlkYXRpb24iLCJsYWJlbCIsIm1heCIsIm1pbiIsIm1heExlbmd0aCIsImluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidmFsaWRhdGVGaWVsZCIsImVtYWlsQ29uZmlybUVuYWJsZWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImlzVmFsaWQiLCJkYXRlVHlwZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxwZXJzL3ZhbGlkYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TWVzc2FnZSA9IChtZXNzYWdlLCB0eXBlKSA9PiB7XG4gIGlmICghdHlwZSkgcmV0dXJuIGZhbHNlO1xuXG5cbiAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UuY3VzdG9tKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UuY3VzdG9tO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnICYmIG1lc3NhZ2VbdHlwZV0pIHtcbiAgICByZXR1cm4gbWVzc2FnZVt0eXBlXTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuY29uc3QgaXNFbWFpbCA9IChlbWFpbCwgZmllbGQsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuICBpZiAoIXJlLnRlc3QoZW1haWwpKSB7XG4gICAgY29uc3QgY3VzdG9tTWVzc2FnZSA9IGdldE1lc3NhZ2UobWVzc2FnZSwgJ2VtYWlsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgXCJFbnRlciBhIHZhbGlkIGVtYWlsXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNVcmwgPSAoc3RyLCBmaWVsZCwgbWVzc2FnZSkgPT4ge1xuICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAnXihodHRwcz86XFxcXC9cXFxcLyk/JyAvLyBwcm90b2NvbFxuICAgICsgJygoKFthLXpcXFxcZF0oW2EtelxcXFxkLV0qW2EtelxcXFxkXSkqKVxcXFwuKStbYS16XXsyLH18JyAvLyBkb21haW4gbmFtZVxuICAgICsgJygoXFxcXGR7MSwzfVxcXFwuKXszfVxcXFxkezEsM30pKScgLy8gT1IgaXAgKHY0KSBhZGRyZXNzXG4gICAgKyAnKFxcXFw6XFxcXGQrKT8oXFxcXC9bLWEtelxcXFxkJV8ufitdKikqJyAvLyBwb3J0IGFuZCBwYXRoXG4gICAgKyAnKFxcXFw/WzsmYS16XFxcXGQlXy5+Kz0tXSopPycgLy8gcXVlcnkgc3RyaW5nXG4gICAgKyAnKFxcXFwjWy1hLXpcXFxcZF9dKik/JCcsXG4gICAgJ2knLFxuICApOyAvLyBmcmFnbWVudCBsb2NhdG9yXG4gIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlID0gZ2V0TWVzc2FnZShtZXNzYWdlLCAndXJsJyk7XG4gICAgcmV0dXJuIGN1c3RvbU1lc3NhZ2UgfHwgXCJFbnRlciBhIHZhbGlkIHVybFwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSAodmFsdWUpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUmVxdWlyZWQgPSAocmVxdWlyZWQsIGVtcHR5LCBtZXNzYWdlKSA9PiB7XG4gIGlmIChyZXF1aXJlZCAmJiBlbXB0eSkge1xuICAgIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBnZXRNZXNzYWdlKG1lc3NhZ2UsICdyZXF1aXJlZCcpO1xuICAgIHJldHVybiBjdXN0b21NZXNzYWdlIHx8ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWxlY3RWYWxpZGF0aW9uID0gKHJlcXVpcmVkLCB2YWx1ZSwgcGxhY2Vob2xkZXIpID0+ICEodmFsdWUgPT09IHBsYWNlaG9sZGVyICYmIHJlcXVpcmVkKTtcblxuY29uc3QgY2hlY2tib3hWYWxpZGF0aW9uID0gKHZhbHVlcywgbWVzc2FnZSkgPT4ge1xuICBpZiAodmFsdWVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gbWVzc2FnZSB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZW1haWxWYWxpZGF0aW9uID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgeyBpbnB1dHMsIGlzUmVxdWlyZWQ6IHJlcXVpcmVkLCBlcnJvck1lc3NhZ2UgfSA9IGZpZWxkIHx8IGZhbHNlO1xuICBjb25zdCB7IHJlcXVpcmVkOiByZXF1aXJlZE1zZywgbWlzbWF0Y2ggfSA9IGVycm9yTWVzc2FnZSB8fCBmYWxzZTtcblxuICAvLyBjaGVjayBpZiBmaWVsZHMgaXMgcmVxdWlyZWQgYW5kIGlzbid0IGVtcHR5XG4gIGNvbnN0IGlzSW5wdXRzRW1wdHkgPSB2YWx1ZXMgJiYgdmFsdWVzLmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgaXRlbS52YWwgPT09ICcnKS5sZW5ndGg7XG5cbiAgaWYgKCgodmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPCAyKSB8fCBpc0lucHV0c0VtcHR5ICE9PSAwKSAmJiByZXF1aXJlZCkge1xuICAgIHJldHVybiByZXF1aXJlZE1zZyB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cblxuICBpZiAodmFsdWVzICYmIHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IHZhbHVlcy5sZW5ndGggPiBpOyBpKyspIHtcbiAgICAgIGNvbnN0IGlzSW5WYWxpZE1haWwgPSBpc0VtYWlsKHZhbHVlc1tpXS52YWwpO1xuICAgICAgaWYgKGlzSW5WYWxpZE1haWwpIHtcbiAgICAgICAgcmV0dXJuIGlzSW5WYWxpZE1haWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlcmUgaXMgcmVwZWF0IHBhc3N3b3JkIGZpZWxkID0+IGNoZWNrIGlmIG1hdGNoXG4gIGlmICh2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aCA9PT0gMiAmJiBpbnB1dHMgJiYgaW5wdXRzLmxlbmd0aCA9PT0gMikge1xuICAgIGlmIChcbiAgICAgIHZhbHVlc1sxXVxuICAgICAgJiYgdmFsdWVzWzBdXG4gICAgICAmJiB2YWx1ZXNbMV0udmFsICE9PSAnJ1xuICAgICAgJiYgdmFsdWVzWzFdLnZhbCAhPT0gdmFsdWVzWzBdLnZhbFxuICAgICkge1xuICAgICAgcmV0dXJuIG1pc21hdGNoIHx8ICdNaXNtYXRjaCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uID0gKHZhbHVlcywgZmllbGQpID0+IHtcbiAgY29uc3QgeyBpbnB1dHMsIGlzUmVxdWlyZWQ6IHJlcXVpcmVkLCBlcnJvck1lc3NhZ2UgfSA9IGZpZWxkIHx8IGZhbHNlO1xuICBjb25zdCB7IHJlcXVpcmVkOiByZXF1aXJlZE1zZywgbWlzbWF0Y2ggfSA9IGVycm9yTWVzc2FnZSB8fCBmYWxzZTtcblxuICBjb25zdCBmaWx0ZXJlZElucHV0cyA9IGlucHV0cy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5pc0hpZGRlbik7XG5cbiAgLy8gY2hlY2sgaWYgZmllbGRzIGlzIHJlcXVpcmVkIGFuZCBpc24ndCBlbXB0eVxuICBjb25zdCBpc0lucHV0c0VtcHR5ID0gdmFsdWVzICYmIHZhbHVlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICYmIGl0ZW0udmFsID09PSAnJykubGVuZ3RoO1xuXG4gIGlmIChcbiAgICAoKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID09PSAwKVxuICAgICAgfHwgaXNJbnB1dHNFbXB0eSA9PT0gZmlsdGVyZWRJbnB1dHMubGVuZ3RoKVxuICAgICYmIHJlcXVpcmVkXG4gICkge1xuICAgIHJldHVybiByZXF1aXJlZE1zZyB8fCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIH1cblxuICAvLyBpZiB0aGVyZSBpcyByZXBlYXQgcGFzc3dvcmQgZmllbGQgPT4gY2hlY2sgaWYgbWF0Y2hcbiAgaWYgKFxuICAgIHZhbHVlc1xuICAgICYmIHZhbHVlcy5sZW5ndGggPT09IDJcbiAgICAmJiBmaWx0ZXJlZElucHV0c1xuICAgICYmIGZpbHRlcmVkSW5wdXRzLmxlbmd0aCA9PT0gMlxuICApIHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZXNbMV1cbiAgICAgICYmIHZhbHVlc1swXVxuICAgICAgJiYgdmFsdWVzWzFdLnZhbCAhPT0gJydcbiAgICAgICYmIHZhbHVlc1sxXS52YWwgIT09IHZhbHVlc1swXS52YWxcbiAgICApIHtcbiAgICAgIHJldHVybiBtaXNtYXRjaCB8fCAnTWlzbWF0Y2gnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUG9zdGNvZGUgPSAocG9zdGNvZGUsIGZpZWxkLCBtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IHJlID0gL15bMS05XVswLTldezN9ID8oPyFzYXxzZHxzcylbYS16XXsyfSQvaTtcblxuICAgIGlmICghcmUudGVzdChwb3N0Y29kZSkpIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlID0gZ2V0TWVzc2FnZShtZXNzYWdlLCAnZW1haWwnKTtcbiAgICByZXR1cm4gY3VzdG9tTWVzc2FnZSB8fCBcIkVudGVyIGEgdmFsaWQgcG9zdGNvZGVcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc0RhdGUgPSAodmFsdWVzLCBmaWVsZCkgPT4ge1xuICBjb25zdCB2YWxpZGF0aW9uID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlc1tpXSkge1xuICAgICAgY29uc3QgeyB2YWwsIGxhYmVsIH0gPSB2YWx1ZXNbaV07XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGlmIChsYWJlbCA9PT0gJ01NJykge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmaWVsZC5lcnJvck1lc3NhZ2VbJ21vbnRoJ107XG4gICAgICAgICAgY29uc3QgbWF4ID0gMTI7XG4gICAgICAgICAgY29uc3QgbWluID0gMTtcbiAgICAgICAgICBjb25zdCBtYXhMZW5ndGggPSAyO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbCA8IG1pbiB8fCB2YWwgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25baV0gPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBnZXRNZXNzYWdlKG1lc3NhZ2UsICdkYXRlJykgfHwgXCJFbnRlciBhIHZhbGlkIG1vbnRoXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbCA9PT0gJ0REJykge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmaWVsZC5lcnJvck1lc3NhZ2VbJ2RhdGUnXTtcbiAgICAgICAgICBjb25zdCBtYXggPSAzMTtcbiAgICAgICAgICBjb25zdCBtaW4gPSAxO1xuICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDI7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsIDwgbWluIHx8IHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsaWRhdGlvbltpXSA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGdldE1lc3NhZ2UobWVzc2FnZSwgJ2RhdGUnKSB8fCBcIkVudGVyIGEgdmFsaWQgZGF0ZVwiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGFiZWwgPT09ICdZWVlZJykge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmaWVsZC5lcnJvck1lc3NhZ2VbJ3llYXInXTtcbiAgICAgICAgICBjb25zdCBtYXggPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAxO1xuICAgICAgICAgIGNvbnN0IG1pbiA9IDE5MjA7XG4gICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gNDtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uW2ldID0ge1xuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogZ2V0TWVzc2FnZShtZXNzYWdlLCAnZGF0ZScpIHx8IFwiRW50ZXIgYSB2YWxpZCB5ZWFyXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsaWRhdGlvbjtcbn07XG5cbmNvbnN0IHZhbGlkYXRlRmllbGQgPSAodmFsdWUsIGZpZWxkKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgaXNSZXF1aXJlZDogcmVxdWlyZWQgfSA9IGZpZWxkO1xuICAvLyBDaGVjayBmaXJzdCBpZiByZXF1cmllZCBjaGVja2JveCBvciByYWRpb1xuICBpZiAoKHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJykgJiYgcmVxdWlyZWQpIHtcbiAgICByZXR1cm4gY2hlY2tib3hWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZC5lcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZGF0aW9uKHZhbHVlLCBmaWVsZCk7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2VtYWlsJyAmJiBmaWVsZC5lbWFpbENvbmZpcm1FbmFibGVkKSB7XG4gICAgcmV0dXJuIGVtYWlsVmFsaWRhdGlvbih2YWx1ZSwgZmllbGQpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgZW1wdHlcbiAgY29uc3QgZW1wdHkgPSBpc0VtcHR5KHZhbHVlKTtcbiAgbGV0IHZhbGlkYXRpb25NZXNzYWdlID0gJyc7XG4gIGNvbnN0IG1lc3NhZ2UgPSBmaWVsZCAmJiBmaWVsZC5lcnJvck1lc3NhZ2UgPyBmaWVsZC5lcnJvck1lc3NhZ2UgOiBmYWxzZTtcbiAgLy8gU2V0IHZhbGlkYXRpb24gbWVzc2FnZSBpZiByZXF1aXJlZFxuICB2YWxpZGF0aW9uTWVzc2FnZSA9IHJlcXVpcmVkID8gaXNSZXF1aXJlZChyZXF1aXJlZCwgZW1wdHksIG1lc3NhZ2UpIDogZmFsc2U7XG4gIC8vIFNldCBvdGhlciB2YWxpZGF0aW9uIG1lc3NhZ2VzXG4gIGlmICghdmFsaWRhdGlvbk1lc3NhZ2UgJiYgIWVtcHR5KSB7XG4gICAgaWYgKHR5cGUgPT09ICdlbWFpbCcpIHtcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlID0gaXNFbWFpbCh2YWx1ZSwgZmllbGQsIG1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dlYnNpdGUnKSB7XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGlzVXJsKHZhbHVlLCBmaWVsZCwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgIGlmIChmaWVsZC5kYXRlVHlwZSAmJiBmaWVsZC5kYXRlVHlwZSA9PT0gJ2RhdGVwaWNrZXInKSB7XG4gICAgICAgIGlzVmFsaWQgPSByZXF1aXJlZCA/IGlzUmVxdWlyZWQocmVxdWlyZWQsIGVtcHR5LCBtZXNzYWdlKSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzRGF0ZSh2YWx1ZSwgZmllbGQpO1xuICAgICAgfVxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBpc1ZhbGlkLmxlbmd0aCA+IDAgPyBpc1ZhbGlkIDogZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncG9zdGNvZGUnKSB7XG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSA9IGlzUG9zdGNvZGUodmFsdWUsIGZpZWxkLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbGlkYXRpb25NZXNzYWdlO1xufTtcblxuZXhwb3J0IHtcbiAgaXNFbXB0eSxcbiAgc2VsZWN0VmFsaWRhdGlvbixcbiAgY2hlY2tib3hWYWxpZGF0aW9uLFxuICBpc1VybCxcbiAgaXNFbWFpbCxcbiAgaXNSZXF1aXJlZCxcbiAgdmFsaWRhdGVGaWVsZCxcbn07XG4iXSwibWFwcGluZ3MiOiJ1WEFBTUEsVUFBVSxDQUFHLFNBQUNDLENBQU8sQ0FBRUMsQ0FBSSxDQUFLLFNBQy9CQSxDQUFJLEdBR0xELENBQU8sRUFBdUIsUUFBUSwyQkFBcEJBLENBQU8sQ0FBYSxFQUFJQSxDQUFPLENBQUNFLE1BQU0sQ0FDbkRGLENBQU8sQ0FBQ0UsTUFBTSxDQUduQkYsQ0FBTyxFQUF1QixRQUFRLDJCQUFwQkEsQ0FBTyxDQUFhLEVBQUlBLENBQU8sQ0FBQ0MsQ0FBSSxDQUFDLENBQ2xERCxDQUFPLENBQUNDLENBQUksQ0FBQyxDQUdmRCxDQUFPLENBQ2hCLENBQUMsQ0FFS0csT0FBTyxDQUFHLFNBQUNDLENBQUssQ0FBRUMsQ0FBSyxDQUFFTCxDQUFPLENBQUssQ0FHekMsR0FBSSxDQUZPLHdKQUF3SixDQUUzSk0sSUFBSSxDQUFDRixDQUFLLENBQUMsQ0FBRSxDQUNuQixHQUFNRyxFQUFhLENBQUdSLFVBQVUsQ0FBQ0MsQ0FBTyxDQUFFLE9BQU8sQ0FBQyxDQUNsRCxNQUFPTyxFQUFhLEVBQUkscUJBQzFCLENBQ0EsUUFDRixDQUFDLHlCQUVELEdBQU1DLE1BQUssQ0FBRyxTQUFDQyxDQUFHLENBQUVKLENBQUssQ0FBRUwsQ0FBTyxDQUFLLENBVXJDLEdBQUksQ0FBQyx3SkFBUU0sSUFBSSxDQUFDRyxDQUFHLENBQUMsQ0FBRSxDQUN0QixHQUFNRixFQUFhLENBQUdSLFVBQVUsQ0FBQ0MsQ0FBTyxDQUFFLEtBQUssQ0FBQyxDQUNoRCxNQUFPTyxFQUFhLEVBQUksbUJBQzFCLENBQ0EsUUFDRixDQUFDLENBQUMsb0JBRUYsR0FBTUcsUUFBTyxDQUFHLFNBQUNDLENBQUssQ0FBSyxRQUNwQkEsQ0FJUCxDQUFDLENBQUMsd0JBRUYsR0FBTUMsV0FBVSxDQUFHLFNBQUNDLENBQVEsQ0FBRUMsQ0FBSyxDQUFFZCxDQUFPLENBQUssQ0FDL0MsR0FBSWEsQ0FBUSxFQUFJQyxDQUFLLENBQUUsQ0FDckIsR0FBTVAsRUFBYSxDQUFHUixVQUFVLENBQUNDLENBQU8sQ0FBRSxVQUFVLENBQUMsQ0FDckQsTUFBT08sRUFBYSxFQUFJLHdCQUMxQixDQUNBLFFBQ0YsQ0FBQyxDQUFDLDhCQUVGLEdBQU1RLGlCQUFnQixDQUFHLFNBQUNGLENBQVEsQ0FBRUYsQ0FBSyxDQUFFSyxDQUFXLFFBQUssRUFBRUwsQ0FBSyxHQUFLSyxDQUFXLEVBQUlILENBQVEsQ0FBQyxFQUFDLDBDQUVoRyxHQUFNSSxtQkFBa0IsQ0FBRyxTQUFDQyxDQUFNLENBQUVsQixDQUFPLENBQUssVUFDMUIsQ0FBQyxDQUFqQmtCLENBQU0sQ0FBQ0MsTUFBVSxJQUNabkIsQ0FBTyxFQUFJLHdCQUF3QixDQUc5QyxDQUFDLENBQUMsaURBRUlvQixnQkFBZSxDQUFHLFNBQUNGLENBQU0sQ0FBRWIsQ0FBSyxDQUFLLE9BQ2NBLENBQUssSUFBUyxDQUE3RGdCLENBQU0sR0FBTkEsTUFBTSxDQUFjUixDQUFRLEdBQXBCRCxVQUFVLENBQVlVLENBQVksR0FBWkEsWUFBWSxHQUNOQSxDQUFZLElBQVMsQ0FBL0NDLENBQVcsR0FBckJWLFFBQVEsQ0FBZVcsQ0FBUSxHQUFSQSxRQUFRLENBR2pDQyxDQUFhLENBQUdQLENBQU0sRUFBSUEsQ0FBTSxDQUFDUSxNQUFNLENBQUMsU0FBQUMsQ0FBSSxRQUFJQSxFQUFJLEVBQWlCLEVBQUUsR0FBZkEsQ0FBSSxDQUFDQyxHQUFVLEVBQUMsQ0FBQ1QsTUFBTSxDQUVyRixHQUFJLENBQUVELENBQU0sRUFBb0IsQ0FBQyxDQUFqQkEsQ0FBTSxDQUFDQyxNQUFVLEVBQXVCLENBQUMsR0FBbkJNLENBQW1CLEdBQUtaLENBQVEsQ0FDcEUsTUFBT1UsRUFBVyxFQUFJLHdCQUF3QixDQUdoRCxHQUFJTCxDQUFNLEVBQW9CLENBQUMsQ0FBakJBLENBQU0sQ0FBQ0MsTUFBVSxDQUM3QixJQUFLLEdBQ0dVLEVBQWEsQ0FEWkMsQ0FBQyxDQUFHLENBQUMsQ0FBRVosQ0FBTSxDQUFDQyxNQUFNLENBQUdXLENBQUMsQ0FBRUEsQ0FBQyxFQUFFLENBRXBDLEdBRE1ELENBQWEsQ0FBRzFCLE9BQU8sQ0FBQ2UsQ0FBTSxDQUFDWSxDQUFDLENBQUMsQ0FBQ0YsR0FBRyxDQUFDLENBQ3hDQyxDQUFhLENBQ2YsTUFBT0EsRUFBYSxDQUd6QixTQUdHWCxDQUFNLEVBQXNCLENBQUMsR0FBbkJBLENBQU0sQ0FBQ0MsTUFBWSxFQUFJRSxDQUFNLEVBQXNCLENBQUMsR0FBbkJBLENBQU0sQ0FBQ0YsTUFBWSxFQUU5REQsQ0FBTSxDQUFDLENBQUMsQ0FBQyxFQUNOQSxDQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ1MsRUFBRSxHQUFwQkEsQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDVSxHQUFVLEVBQ3BCVixDQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNVLEdBQUcsR0FBS1YsQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDVSxHQUFHLElBRTNCSixDQUFRLEVBQUksVUFBVSxDQUtuQyxDQUFDLENBRUtPLGtCQUFrQixDQUFHLFNBQUNiLENBQU0sQ0FBRWIsQ0FBSyxDQUFLLE9BQ1dBLENBQUssSUFBUyxDQUE3RGdCLENBQU0sR0FBTkEsTUFBTSxDQUFjUixDQUFRLEdBQXBCRCxVQUFVLENBQVlVLENBQVksR0FBWkEsWUFBWSxHQUNOQSxDQUFZLElBQVMsQ0FBL0NDLENBQVcsR0FBckJWLFFBQVEsQ0FBZVcsQ0FBUSxHQUFSQSxRQUFRLENBRWpDUSxDQUFjLENBQUdYLENBQU0sQ0FBQ0ssTUFBTSxDQUFDLFNBQUFDLENBQUksUUFBSSxDQUFDQSxDQUFJLENBQUNNLFFBQVEsRUFBQyxDQUd0RFIsQ0FBYSxDQUFHUCxDQUFNLEVBQUlBLENBQU0sQ0FBQ1EsTUFBTSxDQUFDLFNBQUFDLENBQUksUUFBSUEsRUFBSSxFQUFpQixFQUFFLEdBQWZBLENBQUksQ0FBQ0MsR0FBVSxFQUFDLENBQUNULE1BQU0sT0FHbkYsQ0FBRUQsQ0FBTSxFQUFzQixDQUFDLEdBQW5CQSxDQUFNLENBQUNDLE1BQVksRUFDMUJNLENBQWEsR0FBS08sQ0FBYyxDQUFDYixNQUFNLEdBQ3pDTixDQUFRLENBRUpVLENBQVcsRUFBSSx3QkFBd0IsSUFLOUNMLENBQU0sRUFDZSxDQUFDLEdBQW5CQSxDQUFNLENBQUNDLE1BQVksRUFDbkJhLENBQWMsRUFDWSxDQUFDLEdBQTNCQSxDQUFjLENBQUNiLE1BQVksRUFHNUJELENBQU0sQ0FBQyxDQUFDLENBQUMsRUFDTkEsQ0FBTSxDQUFDLENBQUMsQ0FBQyxFQUNTLEVBQUUsR0FBcEJBLENBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsR0FBVSxFQUNwQlYsQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDVSxHQUFHLEdBQUtWLENBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsR0FBRyxJQUUzQkosQ0FBUSxFQUFJLFVBQVUsQ0FLbkMsQ0FBQyxDQUVLVSxVQUFVLENBQUcsU0FBQ0MsQ0FBUSxDQUFFOUIsQ0FBSyxDQUFFTCxDQUFPLENBQUssQ0FHN0MsR0FBSSxDQUZLLHdDQUF3QyxDQUV6Q00sSUFBSSxDQUFDNkIsQ0FBUSxDQUFDLENBQUUsQ0FDeEIsR0FBTTVCLEVBQWEsQ0FBR1IsVUFBVSxDQUFDQyxDQUFPLENBQUUsT0FBTyxDQUFDLENBQ2xELE1BQU9PLEVBQWEsRUFBSSx3QkFDMUIsQ0FDQSxRQUNGLENBQUMsQ0FFSzZCLE1BQU0sQ0FBRyxTQUFDbEIsQ0FBTSxDQUFFYixDQUFLLENBQUssQ0FFaEMsT0FETWdDLEVBQVUsQ0FBRyxFQUFFLENBQ1pQLENBQUMsQ0FBRyxDQUFDLENBQUVBLENBQUMsQ0FBR1osQ0FBTSxDQUFDQyxNQUFNLENBQUVXLENBQUMsRUFBRSxDQUNwQyxHQUFJWixDQUFNLENBQUNZLENBQUMsQ0FBQyxDQUFFLENBQ2IsTUFBdUJaLENBQU0sQ0FBQ1ksQ0FBQyxDQUFDLENBQXhCRixDQUFHLEdBQUhBLEdBQUcsQ0FBRVUsQ0FBSyxHQUFMQSxLQUFLLENBQ2xCLEdBQUlWLENBQUcsQ0FDTCxHQUFjLElBQUksR0FBZFUsQ0FBYyxDQUFFLElBQ1p0QyxFQUFPLENBQUdLLENBQUssQ0FBQ2lCLFlBQVksTUFBUyxDQUNyQ2lCLENBQUcsQ0FBRyxFQUFFLENBQ1JDLENBQUcsQ0FBRyxDQUFDLENBQ1BDLENBQVMsQ0FBRyxDQUFDLEVBQ2ZiLENBQUcsQ0FBQ1QsTUFBTSxDQUFHc0IsQ0FBUyxFQUFJYixDQUFHLENBQUdZLENBQUcsRUFBSVosQ0FBRyxDQUFHVyxDQUFHLElBQ2xERixDQUFVLENBQUNQLENBQUMsQ0FBQyxDQUFHLENBQ2RZLEtBQUssQ0FBRVosQ0FBQyxDQUNSOUIsT0FBTyxDQUFFRCxVQUFVLENBQUNDLENBQU8sQ0FBRSxNQUFNLENBQUMsRUFBSSxxQkFDMUMsQ0FBQyxDQUVMLENBQUMsSUFBTSxJQUFjLElBQUksR0FBZHNDLENBQWMsQ0FBRSxJQUNuQnRDLEVBQU8sQ0FBR0ssQ0FBSyxDQUFDaUIsWUFBWSxLQUFRLENBQ3BDaUIsQ0FBRyxDQUFHLEVBQUUsQ0FDUkMsQ0FBRyxDQUFHLENBQUMsQ0FDUEMsQ0FBUyxDQUFHLENBQUMsRUFDZmIsQ0FBRyxDQUFDVCxNQUFNLENBQUdzQixDQUFTLEVBQUliLENBQUcsQ0FBR1ksQ0FBRyxFQUFJWixDQUFHLENBQUdXLENBQUcsSUFDbERGLENBQVUsQ0FBQ1AsQ0FBQyxDQUFDLENBQUcsQ0FDZFksS0FBSyxDQUFFWixDQUFDLENBQ1I5QixPQUFPLENBQUVELFVBQVUsQ0FBQ0MsQ0FBTyxDQUFFLE1BQU0sQ0FBQyxFQUFJLG9CQUMxQyxDQUFDLENBRUwsQ0FBQyxJQUFNLElBQWMsTUFBTSxHQUFoQnNDLENBQWdCLENBQUUsSUFDckJ0QyxFQUFPLENBQUdLLENBQUssQ0FBQ2lCLFlBQVksS0FBUSxDQUNwQ2lCLENBQUcsQ0FBRyxHQUFJSSxLQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFLENBQUcsQ0FBQyxDQUNsQ0osQ0FBRyxDQUFHLElBQUksQ0FDVkMsQ0FBUyxDQUFHLENBQUMsRUFDZmIsQ0FBRyxDQUFDVCxNQUFNLENBQUdzQixDQUFTLEVBQUliLENBQUcsQ0FBR1ksQ0FBRyxFQUFJWixDQUFHLENBQUdXLENBQUcsSUFDbERGLENBQVUsQ0FBQ1AsQ0FBQyxDQUFDLENBQUcsQ0FDZFksS0FBSyxDQUFFWixDQUFDLENBQ1I5QixPQUFPLENBQUVELFVBQVUsQ0FBQ0MsQ0FBTyxDQUFFLE1BQU0sQ0FBQyxFQUFJLG9CQUMxQyxDQUFDLENBRUwsQ0FFSixDQUVGLE1BQU9xQyxFQUNULENBQUMsQ0FFS1EsYUFBYSxDQUFHLFNBQUNsQyxDQUFLLENBQUVOLENBQUssQ0FBSyxDQUN0QyxHQUFRSixFQUFJLENBQTJCSSxDQUFLLENBQXBDSixJQUFJLENBQWNZLENBQVEsQ0FBS1IsQ0FBSyxDQUE5Qk8sVUFBVSxDQUV4QixHQUFJLENBQVUsVUFBVSxHQUFuQlgsQ0FBbUIsRUFBYSxPQUFPLEdBQWhCQSxDQUFnQixHQUFLWSxDQUFRLENBQ3ZELE1BQU9JLG1CQUFrQixDQUFDTixDQUFLLENBQUVOLENBQUssQ0FBQ2lCLFlBQVksQ0FBQyxDQUd0RCxHQUFhLFVBQVUsR0FBbkJyQixDQUFtQixDQUNyQixNQUFPOEIsbUJBQWtCLENBQUNwQixDQUFLLENBQUVOLENBQUssQ0FBQyxDQUd6QyxHQUFhLE9BQU8sR0FBaEJKLENBQWdCLEVBQUlJLENBQUssQ0FBQ3lDLG1CQUFtQixDQUMvQyxNQUFPMUIsZ0JBQWUsQ0FBQ1QsQ0FBSyxDQUFFTixDQUFLLENBQUMsQ0FDckMsR0FHS1MsRUFBSyxDQUFHSixPQUFPLENBQUNDLENBQUssQ0FBQyxDQUN4Qm9DLENBQWlCLENBQUcsRUFBRSxDQUNwQi9DLENBQU8sSUFBR0ssQ0FBSyxFQUFJQSxDQUFLLENBQUNpQixZQUFZLEdBQUdqQixDQUFLLENBQUNpQixZQUFvQixDQUl4RSxHQUZBeUIsQ0FBaUIsR0FBR2xDLENBQVEsRUFBR0QsVUFBVSxDQUFDQyxDQUFRLENBQUVDLENBQUssQ0FBRWQsQ0FBTyxDQUFTLENBRXZFLENBQUMrQyxDQUFpQixFQUFJLENBQUNqQyxDQUFLLENBQzlCLEdBQWEsT0FBTyxHQUFoQmIsQ0FBZ0IsQ0FDbEI4QyxDQUFpQixDQUFHNUMsT0FBTyxDQUFDUSxDQUFLLENBQUVOLENBQUssQ0FBRUwsQ0FBTyxDQUFDLEtBQzdDLElBQWEsU0FBUyxHQUFsQkMsQ0FBa0IsQ0FDM0I4QyxDQUFpQixDQUFHdkMsS0FBSyxDQUFDRyxDQUFLLENBQUVOLENBQUssQ0FBRUwsQ0FBTyxDQUFDLEtBQzNDLElBQWEsTUFBTSxHQUFmQyxDQUFlLENBQUUsQ0FDMUIsR0FBSStDLEVBQU8sR0FBTyxDQUVoQkEsQ0FBTyxDQURMM0MsQ0FBSyxDQUFDNEMsUUFBUSxFQUF1QixZQUFZLEdBQS9CNUMsQ0FBSyxDQUFDNEMsUUFBeUIsR0FDekNwQyxDQUFRLEVBQUdELFVBQVUsQ0FBQ0MsQ0FBUSxDQUFFQyxDQUFLLENBQUVkLENBQU8sQ0FBQyxDQUUvQ29DLE1BQU0sQ0FBQ3pCLENBQUssQ0FBRU4sQ0FBSyxDQUFDLENBRWhDMEMsQ0FBaUIsSUFBb0IsQ0FBQyxDQUFsQkMsQ0FBTyxDQUFDN0IsTUFBVSxHQUFHNkIsQ0FDM0MsQ0FBQyxJQUFtQixVQUFVLEdBQW5CL0MsQ0FBbUIsR0FDNUI4QyxDQUFpQixDQUFHYixVQUFVLENBQUN2QixDQUFLLENBQUVOLENBQUssQ0FBRUwsQ0FBTyxDQUFDLEVBR3pELE1BQU8rQyxFQUNULENBQUMifQ==