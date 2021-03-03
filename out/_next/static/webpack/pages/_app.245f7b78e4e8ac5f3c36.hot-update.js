webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n  color: inherit;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.layout {\n  height: 100%;\n}\n\n.contents {\n  display: flex;\n  width: 100%;\n  height: 200vh;\n  padding: 10px 40px;\n}\n\nheader {\n  width: 100%;\n  height: 70px;\n  background: #0070f3;\n}\n\n.fixedHeader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  transition: top 0.3s ease-in-out;\n}\n.fixedHeader.Up {\n  top: -70px;\n}\n\nfooter {\n  width: 100%;\n  height: 70px;\n  background: pink;\n}\n\n.prevPostBtn {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  transform: rotate(45deg);\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  left: 30px;\n  top: 50vh;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n}\n.prevPostBtn:focus {\n  outline: 0;\n}\n.prevPostBtn:hover {\n  left: 20px;\n}\n\n.nextPostBtn {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  transform: rotate(45deg);\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  right: 30px;\n  top: 50vh;\n  border-right: 1px solid #000;\n  border-top: 1px solid #000;\n}\n.nextPostBtn:focus {\n  outline: 0;\n}\n.nextPostBtn:hover {\n  right: 20px;\n}", "",{"version":3,"sources":["webpack://globals.scss"],"names":[],"mappings":"AAAA;;EAEI,UAAA;EACA,SAAA;EACA,8IAAA;AACJ;;AAGA;EACI,cAAA;AAAJ;;AAIA;EACI,sBAAA;AADJ;;AAQA;EACI,YAAA;AALJ;;AAQA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;AALJ;;AASA;EACI,WAAA;EACA,YAjBW;EAkBX,mBAAA;AANJ;;AASA;EACI,eAAA;EACA,MAAA;EACA,WAAA;EACA,gCAAA;AANJ;AAQI;EACI,UAAA;AANR;;AAUA;EACI,WAAA;EACA,YAjCW;EAkCX,gBAAA;AAPJ;;AA0BA;EAdI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;EACA,gCAAA;EACA,eAAA;EASA,UAAA;EACA,SAAA;EACA,2BAAA;EACA,6BAAA;AAhBJ;AAMI;EACI,UAAA;AAJR;AAeI;EACI,UAAA;AAbR;;AAiBA;EA1BI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;EACA,gCAAA;EACA,eAAA;EAqBA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,0BAAA;AAPJ;AAfI;EACI,UAAA;AAiBR;AAMI;EACI,WAAA;AAJR","sourcesContent":["html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\r\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    //text-decoration: none;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n$headerHeight: 70px;\r\n$footerHeight: 70px;\r\n\r\n.layout {\r\n    height: 100%;\r\n}\r\n\r\n.contents {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 200vh;\r\n    padding: 10px 40px;\r\n}\r\n\r\n\r\nheader {\r\n    width: 100%;\r\n    height: $headerHeight;\r\n    background: #0070f3;\r\n}\r\n\r\n.fixedHeader {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    transition: top 0.3s ease-in-out;\r\n    \r\n    &.Up {\r\n        top: -$headerHeight;\r\n    }\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    height: $footerHeight;\r\n    background: pink;\r\n}\r\n\r\n\r\n@mixin postBtn {\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background-color: transparent;\r\n    transform: rotate(45deg);\r\n    transition: all 0.2s ease-in-out;\r\n    cursor: pointer;\r\n    \r\n    &:focus {\r\n        outline:0;\r\n    }\r\n}\r\n\r\n.prevPostBtn {\r\n    @include postBtn;\r\n    left: 30px;\r\n    top: 50vh;\r\n    border-left: 1px solid #000;\r\n    border-bottom: 1px solid #000;\r\n    \r\n    &:hover {\r\n        left: 20px;\r\n    }\r\n}\r\n\r\n.nextPostBtn {\r\n    @include postBtn;\r\n    right: 30px;\r\n    top: 50vh;\r\n    border-right: 1px solid #000;\r\n    border-top: 1px solid #000;\r\n    \r\n    &:hover {\r\n        right: 20px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixlQUFlLGNBQWMsbUpBQW1KLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxPQUFPLDJCQUEyQixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsZ0JBQWdCLGtCQUFrQix1QkFBdUIsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLG9CQUFvQixXQUFXLGdCQUFnQixxQ0FBcUMsR0FBRyxtQkFBbUIsZUFBZSxHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixxQkFBcUIsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtDQUFrQyw2QkFBNkIscUNBQXFDLG9CQUFvQixlQUFlLGNBQWMsZ0NBQWdDLGtDQUFrQyxHQUFHLHNCQUFzQixlQUFlLEdBQUcsc0JBQXNCLGVBQWUsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtDQUFrQyw2QkFBNkIscUNBQXFDLG9CQUFvQixnQkFBZ0IsY0FBYyxpQ0FBaUMsK0JBQStCLEdBQUcsc0JBQXNCLGVBQWUsR0FBRyxzQkFBc0IsZ0JBQWdCLEdBQUcsT0FBTyw4RUFBOEUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLHdDQUF3QyxtQkFBbUIsa0JBQWtCLDhKQUE4SixLQUFLLFdBQVcsdUJBQXVCLGdDQUFnQyxLQUFLLFdBQVcsK0JBQStCLEtBQUssZ0NBQWdDLHdCQUF3QixpQkFBaUIscUJBQXFCLEtBQUssbUJBQW1CLHNCQUFzQixvQkFBb0Isc0JBQXNCLDJCQUEyQixLQUFLLG9CQUFvQixvQkFBb0IsOEJBQThCLDRCQUE0QixLQUFLLHNCQUFzQix3QkFBd0IsZUFBZSxvQkFBb0IseUNBQXlDLHNCQUFzQixnQ0FBZ0MsU0FBUyxLQUFLLGdCQUFnQixvQkFBb0IsOEJBQThCLHlCQUF5QixLQUFLLDRCQUE0QiwyQkFBMkIsb0JBQW9CLHFCQUFxQixxQkFBcUIsc0NBQXNDLGlDQUFpQyx5Q0FBeUMsd0JBQXdCLHlCQUF5QixzQkFBc0IsU0FBUyxLQUFLLHNCQUFzQix5QkFBeUIsbUJBQW1CLGtCQUFrQixvQ0FBb0Msc0NBQXNDLHlCQUF5Qix1QkFBdUIsU0FBUyxLQUFLLHNCQUFzQix5QkFBeUIsb0JBQW9CLGtCQUFrQixxQ0FBcUMsbUNBQW1DLHlCQUF5Qix3QkFBd0IsU0FBUyxLQUFLLHVCQUF1QjtBQUN6NEg7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI0NWY3Yjc4ZTRlOGFjNWYzYzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmxheW91dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHZoO1xcbiAgcGFkZGluZzogMTBweCA0MHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMDA3MGYzO1xcbn1cXG5cXG4uZml4ZWRIZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmZpeGVkSGVhZGVyLlVwIHtcXG4gIHRvcDogLTcwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQ6IHBpbms7XFxufVxcblxcbi5wcmV2UG9zdEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsZWZ0OiAzMHB4O1xcbiAgdG9wOiA1MHZoO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxufVxcbi5wcmV2UG9zdEJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ucHJldlBvc3RCdG46aG92ZXIge1xcbiAgbGVmdDogMjBweDtcXG59XFxuXFxuLm5leHRQb3N0QnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgdG9wOiA1MHZoO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG4ubmV4dFBvc3RCdG46Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLm5leHRQb3N0QnRuOmhvdmVyIHtcXG4gIHJpZ2h0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vZ2xvYmFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOElBQUE7QUFDSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFJQTtFQUNJLHNCQUFBO0FBREo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNBO0VBQ0ksV0FBQTtFQUNBLFlBakJXO0VBa0JYLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQU5KO0FBUUk7RUFDSSxVQUFBO0FBTlI7O0FBVUE7RUFDSSxXQUFBO0VBQ0EsWUFqQ1c7RUFrQ1gsZ0JBQUE7QUFQSjs7QUEwQkE7RUFkSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFTQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFoQko7QUFNSTtFQUNJLFVBQUE7QUFKUjtBQWVJO0VBQ0ksVUFBQTtBQWJSOztBQWlCQTtFQTFCSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFxQkEsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBUEo7QUFmSTtFQUNJLFVBQUE7QUFpQlI7QUFNSTtFQUNJLFdBQUE7QUFKUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgLy90ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4kaGVhZGVySGVpZ2h0OiA3MHB4O1xcclxcbiRmb290ZXJIZWlnaHQ6IDcwcHg7XFxyXFxuXFxyXFxuLmxheW91dCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMjAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogJGhlYWRlckhlaWdodDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwNzBmMztcXHJcXG59XFxyXFxuXFxyXFxuLmZpeGVkSGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgXFxyXFxuICAgICYuVXAge1xcclxcbiAgICAgICAgdG9wOiAtJGhlYWRlckhlaWdodDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAkZm9vdGVySGVpZ2h0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWl4aW4gcG9zdEJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICBvdXRsaW5lOjA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnByZXZQb3N0QnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgcG9zdEJ0bjtcXHJcXG4gICAgbGVmdDogMzBweDtcXHJcXG4gICAgdG9wOiA1MHZoO1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICBcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5uZXh0UG9zdEJ0biB7XFxyXFxuICAgIEBpbmNsdWRlIHBvc3RCdG47XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICB0b3A6IDUwdmg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICBcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==