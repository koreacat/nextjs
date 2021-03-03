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
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n  color: inherit;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.layout {\n  height: 100%;\n}\n\n.contents {\n  display: flex;\n  width: 100%;\n  height: 200vh;\n  padding: 10px 40px;\n}\n\nheader {\n  width: 100%;\n  height: 70px;\n  background: #0070f3;\n}\n\n.fixedHeader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  transition: top 0.3s ease-in-out;\n}\n.fixedHeader.Up {\n  top: -70px;\n}\n\nfooter {\n  width: 100%;\n  height: 70px;\n  background: pink;\n}\n\n.prevPostBtn {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  transform: rotate(45deg);\n  transition: right 0.2s ease-in-out;\n  cursor: pointer;\n  left: 30px;\n  top: 50vh;\n  border-right: 1px solid #000;\n  border-top: 1px solid #000;\n}\n.prevPostBtn:focus {\n  outline: 0;\n}\n.prevPostBtn:hover {\n  right: 20px;\n}\n\n.nextPostBtn {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n  transform: rotate(45deg);\n  transition: right 0.2s ease-in-out;\n  cursor: pointer;\n  right: 30px;\n  top: 50vh;\n  border-right: 1px solid #000;\n  border-top: 1px solid #000;\n}\n.nextPostBtn:focus {\n  outline: 0;\n}\n.nextPostBtn:hover {\n  right: 20px;\n}", "",{"version":3,"sources":["webpack://globals.scss"],"names":[],"mappings":"AAAA;;EAEI,UAAA;EACA,SAAA;EACA,8IAAA;AACJ;;AAGA;EACI,cAAA;AAAJ;;AAIA;EACI,sBAAA;AADJ;;AAQA;EACI,YAAA;AALJ;;AAQA;EACI,aAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;AALJ;;AASA;EACI,WAAA;EACA,YAjBW;EAkBX,mBAAA;AANJ;;AASA;EACI,eAAA;EACA,MAAA;EACA,WAAA;EACA,gCAAA;AANJ;AAQI;EACI,UAAA;AANR;;AAUA;EACI,WAAA;EACA,YAjCW;EAkCX,gBAAA;AAPJ;;AA0BA;EAdI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;EACA,kCAAA;EACA,eAAA;EASA,UAAA;EACA,SAAA;EACA,4BAAA;EACA,0BAAA;AAhBJ;AAMI;EACI,UAAA;AAJR;AAeI;EACI,WAAA;AAbR;;AAiBA;EA1BI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,wBAAA;EACA,kCAAA;EACA,eAAA;EAqBA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,0BAAA;AAPJ;AAfI;EACI,UAAA;AAiBR;AAMI;EACI,WAAA;AAJR","sourcesContent":["html,\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\r\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    //text-decoration: none;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n$headerHeight: 70px;\r\n$footerHeight: 70px;\r\n\r\n.layout {\r\n    height: 100%;\r\n}\r\n\r\n.contents {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 200vh;\r\n    padding: 10px 40px;\r\n}\r\n\r\n\r\nheader {\r\n    width: 100%;\r\n    height: $headerHeight;\r\n    background: #0070f3;\r\n}\r\n\r\n.fixedHeader {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    transition: top 0.3s ease-in-out;\r\n    \r\n    &.Up {\r\n        top: -$headerHeight;\r\n    }\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    height: $footerHeight;\r\n    background: pink;\r\n}\r\n\r\n\r\n@mixin postBtn {\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background-color: transparent;\r\n    transform: rotate(45deg);\r\n    transition: right 0.2s ease-in-out;\r\n    cursor: pointer;\r\n    \r\n    &:focus {\r\n        outline:0;\r\n    }\r\n}\r\n\r\n.prevPostBtn {\r\n    @include postBtn;\r\n    left: 30px;\r\n    top: 50vh;\r\n    border-right: 1px solid #000;\r\n    border-top: 1px solid #000;\r\n    \r\n    &:hover {\r\n        right: 20px;\r\n    }\r\n}\r\n\r\n.nextPostBtn {\r\n    @include postBtn;\r\n    right: 30px;\r\n    top: 50vh;\r\n    border-right: 1px solid #000;\r\n    border-top: 1px solid #000;\r\n    \r\n    &:hover {\r\n        right: 20px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQixlQUFlLGNBQWMsbUpBQW1KLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxPQUFPLDJCQUEyQixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsZ0JBQWdCLGtCQUFrQix1QkFBdUIsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLG9CQUFvQixXQUFXLGdCQUFnQixxQ0FBcUMsR0FBRyxtQkFBbUIsZUFBZSxHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixxQkFBcUIsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtDQUFrQyw2QkFBNkIsdUNBQXVDLG9CQUFvQixlQUFlLGNBQWMsaUNBQWlDLCtCQUErQixHQUFHLHNCQUFzQixlQUFlLEdBQUcsc0JBQXNCLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsa0NBQWtDLDZCQUE2Qix1Q0FBdUMsb0JBQW9CLGdCQUFnQixjQUFjLGlDQUFpQywrQkFBK0IsR0FBRyxzQkFBc0IsZUFBZSxHQUFHLHNCQUFzQixnQkFBZ0IsR0FBRyxPQUFPLDhFQUE4RSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsd0NBQXdDLG1CQUFtQixrQkFBa0IsOEpBQThKLEtBQUssV0FBVyx1QkFBdUIsZ0NBQWdDLEtBQUssV0FBVywrQkFBK0IsS0FBSyxnQ0FBZ0Msd0JBQXdCLGlCQUFpQixxQkFBcUIsS0FBSyxtQkFBbUIsc0JBQXNCLG9CQUFvQixzQkFBc0IsMkJBQTJCLEtBQUssb0JBQW9CLG9CQUFvQiw4QkFBOEIsNEJBQTRCLEtBQUssc0JBQXNCLHdCQUF3QixlQUFlLG9CQUFvQix5Q0FBeUMsc0JBQXNCLGdDQUFnQyxTQUFTLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIseUJBQXlCLEtBQUssNEJBQTRCLDJCQUEyQixvQkFBb0IscUJBQXFCLHFCQUFxQixzQ0FBc0MsaUNBQWlDLDJDQUEyQyx3QkFBd0IseUJBQXlCLHNCQUFzQixTQUFTLEtBQUssc0JBQXNCLHlCQUF5QixtQkFBbUIsa0JBQWtCLHFDQUFxQyxtQ0FBbUMseUJBQXlCLHdCQUF3QixTQUFTLEtBQUssc0JBQXNCLHlCQUF5QixvQkFBb0Isa0JBQWtCLHFDQUFxQyxtQ0FBbUMseUJBQXlCLHdCQUF3QixTQUFTLEtBQUssdUJBQXVCO0FBQzc0SDtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDgwMmZmYzQwZmUxN2Q0ZDk1MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubGF5b3V0IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwdmg7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQ6ICMwMDcwZjM7XFxufVxcblxcbi5maXhlZEhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZml4ZWRIZWFkZXIuVXAge1xcbiAgdG9wOiAtNzBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuLnByZXZQb3N0QnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uOiByaWdodCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGVmdDogMzBweDtcXG4gIHRvcDogNTB2aDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcXG59XFxuLnByZXZQb3N0QnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5wcmV2UG9zdEJ0bjpob3ZlciB7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLm5leHRQb3N0QnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2l0aW9uOiByaWdodCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICB0b3A6IDUwdmg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XFxufVxcbi5uZXh0UG9zdEJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubmV4dFBvc3RCdG46aG92ZXIge1xcbiAgcmlnaHQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWxzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUksVUFBQTtFQUNBLFNBQUE7RUFDQSw4SUFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFRQTtFQUNJLFlBQUE7QUFMSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFqQlc7RUFrQlgsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBTko7QUFRSTtFQUNJLFVBQUE7QUFOUjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxZQWpDVztFQWtDWCxnQkFBQTtBQVBKOztBQTBCQTtFQWRJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQVNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQWhCSjtBQU1JO0VBQ0ksVUFBQTtBQUpSO0FBZUk7RUFDSSxXQUFBO0FBYlI7O0FBaUJBO0VBMUJJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQXFCQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUFQSjtBQWZJO0VBQ0ksVUFBQTtBQWlCUjtBQU1JO0VBQ0ksV0FBQTtBQUpSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcclxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAvL3RleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblxcclxcbiRoZWFkZXJIZWlnaHQ6IDcwcHg7XFxyXFxuJGZvb3RlckhlaWdodDogNzBweDtcXHJcXG5cXHJcXG4ubGF5b3V0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDB2aDtcXHJcXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAkaGVhZGVySGVpZ2h0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDA3MGYzO1xcclxcbn1cXHJcXG5cXHJcXG4uZml4ZWRIZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBcXHJcXG4gICAgJi5VcCB7XFxyXFxuICAgICAgICB0b3A6IC0kaGVhZGVySGVpZ2h0O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6ICRmb290ZXJIZWlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHBpbms7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtaXhpbiBwb3N0QnRuIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgb3V0bGluZTowO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wcmV2UG9zdEJ0biB7XFxyXFxuICAgIEBpbmNsdWRlIHBvc3RCdG47XFxyXFxuICAgIGxlZnQ6IDMwcHg7XFxyXFxuICAgIHRvcDogNTB2aDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIFxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5uZXh0UG9zdEJ0biB7XFxyXFxuICAgIEBpbmNsdWRlIHBvc3RCdG47XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICB0b3A6IDUwdmg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICBcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==