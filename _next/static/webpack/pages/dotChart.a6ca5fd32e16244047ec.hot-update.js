webpackHotUpdate_N_E("pages/dotChart",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/dotChart/dotChart.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/charts/dotChart/dotChart.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dotChart_hidden__uzzBx {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.dotChart_wrap__IBNIz .dotChart_dotChart__2ioul {\n  position: relative;\n  width: 600px;\n  height: 372px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-left: 1px solid #a4a4a4;\n  border-bottom: 1px solid #a4a4a4;\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4 {\n  position: absolute;\n  width: 20px;\n  border-top: 1px solid #a4a4a4;\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4.dotChart_up__3MC-p {\n  top: 8.5px;\n  left: -5.5px;\n  transform: rotate(60deg);\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4.dotChart_right__2Zbr- {\n  bottom: 4px;\n  right: -1px;\n  transform: rotate(30deg);\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx {\n  position: absolute;\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx.dotChart_horizontal__8wXDj {\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(to right, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: 15px 1px;\n  background-repeat: repeat-x;\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx.dotChart_vertical__1oHX_ {\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  background-image: linear-gradient(to bottom, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: px 15px;\n  background-repeat: repeat-y;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://dotChart.module.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AAHI;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,gCAAA;AAMR;AADI;EACI,kBAAA;EACA,WAAA;EACA,6BAAA;AAGR;AADQ;EACI,UAAA;EACA,YAAA;EACA,wBAAA;AAGZ;AAAQ;EACI,WAAA;EACA,WAAA;EACA,wBAAA;AAEZ;AAEI;EACI,kBAAA;AAAR;AAEQ;EACI,QAAA;EACA,WAAA;EACA,WAAA;EACA,oFAAA;EACA,yBAAA;EACA,2BAAA;AAAZ;AAGQ;EACI,SAAA;EACA,UAAA;EACA,YAAA;EACA,qFAAA;EACA,wBAAA;EACA,2BAAA;AADZ","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap .dotChart {\n  position: relative;\n  width: 600px;\n  height: 372px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-left: 1px solid #a4a4a4;\n  border-bottom: 1px solid #a4a4a4;\n}\n.wrap .arrow {\n  position: absolute;\n  width: 20px;\n  border-top: 1px solid #a4a4a4;\n}\n.wrap .arrow.up {\n  top: 8.5px;\n  left: -5.5px;\n  transform: rotate(60deg);\n}\n.wrap .arrow.right {\n  bottom: 4px;\n  right: -1px;\n  transform: rotate(30deg);\n}\n.wrap .line {\n  position: absolute;\n}\n.wrap .line.horizontal {\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(to right, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: 15px 1px;\n  background-repeat: repeat-x;\n}\n.wrap .line.vertical {\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  background-image: linear-gradient(to bottom, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: px 15px;\n  background-repeat: repeat-y;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "dotChart_hidden__uzzBx",
	"wrap": "dotChart_wrap__IBNIz",
	"dotChart": "dotChart_dotChart__2ioul",
	"arrow": "dotChart_arrow__ux2n4",
	"up": "dotChart_up__3MC-p",
	"right": "dotChart_right__2Zbr-",
	"line": "dotChart_line__14ojx",
	"horizontal": "dotChart_horizontal__8wXDj",
	"vertical": "dotChart_vertical__1oHX_"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2RvdENoYXJ0L2RvdENoYXJ0Lm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcscURBQXFELHVCQUF1QixpQkFBaUIsa0JBQWtCLHNCQUFzQix3QkFBd0IsbUNBQW1DLHFDQUFxQyxHQUFHLGdEQUFnRCx1QkFBdUIsZ0JBQWdCLGtDQUFrQyxHQUFHLG1FQUFtRSxlQUFlLGlCQUFpQiw2QkFBNkIsR0FBRyxzRUFBc0UsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsR0FBRywrQ0FBK0MsdUJBQXVCLEdBQUcsMEVBQTBFLGFBQWEsZ0JBQWdCLGdCQUFnQix5RkFBeUYsOEJBQThCLGdDQUFnQyxHQUFHLHdFQUF3RSxjQUFjLGVBQWUsaUJBQWlCLDBGQUEwRiw2QkFBNkIsZ0NBQWdDLEdBQUcsT0FBTyxnSUFBZ0ksV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVywwQ0FBMEMsMERBQTBELG9DQUFvQyx5Q0FBeUMsNkNBQTZDLDhCQUE4Qix5QkFBeUIsMkJBQTJCLG1CQUFtQixvQkFBb0IscUJBQXFCLCtCQUErQixLQUFLLGdCQUFnQixxQkFBcUIsdUJBQXVCLGVBQWUsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsR0FBRyxxQkFBcUIsdUJBQXVCLGlCQUFpQixrQkFBa0Isc0JBQXNCLHdCQUF3QixtQ0FBbUMscUNBQXFDLEdBQUcsZ0JBQWdCLHVCQUF1QixnQkFBZ0Isa0NBQWtDLEdBQUcsbUJBQW1CLGVBQWUsaUJBQWlCLDZCQUE2QixHQUFHLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLDZCQUE2QixHQUFHLGVBQWUsdUJBQXVCLEdBQUcsMEJBQTBCLGFBQWEsZ0JBQWdCLGdCQUFnQix5RkFBeUYsOEJBQThCLGdDQUFnQyxHQUFHLHdCQUF3QixjQUFjLGVBQWUsaUJBQWlCLDBGQUEwRiw2QkFBNkIsZ0NBQWdDLEdBQUcsbUJBQW1CO0FBQ3Y3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb3RDaGFydC5hNmNhNWZkMzJlMTYyNDQwNDdlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRvdENoYXJ0X2hpZGRlbl9fdXp6Qngge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfZG90Q2hhcnRfXzJpb3VsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMzcycHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhNGE0YTQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E0YTRhNDtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9hcnJvd19fdXgybjQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2E0YTRhNDtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9hcnJvd19fdXgybjQuZG90Q2hhcnRfdXBfXzNNQy1wIHtcXG4gIHRvcDogOC41cHg7XFxuICBsZWZ0OiAtNS41cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfYXJyb3dfX3V4Mm40LmRvdENoYXJ0X3JpZ2h0X18yWmJyLSB7XFxuICBib3R0b206IDRweDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2xpbmVfXzE0b2p4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9saW5lX18xNG9qeC5kb3RDaGFydF9ob3Jpem9udGFsX184d1hEaiB7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMWQxZDEgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDIwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2xpbmVfXzE0b2p4LmRvdENoYXJ0X3ZlcnRpY2FsX18xb0hYXyB7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2QxZDFkMSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogcHggMTVweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL2RvdENoYXJ0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FBSEk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFNUjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFHUjtBQURRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUdaO0FBQVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBRVo7QUFFSTtFQUNJLGtCQUFBO0FBQVI7QUFFUTtFQUNJLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9GQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUFaO0FBR1E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFEWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cIixcIi5oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi53cmFwIC5kb3RDaGFydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDM3MnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYTRhNGE0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNGE0YTQ7XFxufVxcbi53cmFwIC5hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTRhNGE0O1xcbn1cXG4ud3JhcCAuYXJyb3cudXAge1xcbiAgdG9wOiA4LjVweDtcXG4gIGxlZnQ6IC01LjVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcXG59XFxuLndyYXAgLmFycm93LnJpZ2h0IHtcXG4gIGJvdHRvbTogNHB4O1xcbiAgcmlnaHQ6IC0xcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XFxufVxcbi53cmFwIC5saW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLndyYXAgLmxpbmUuaG9yaXpvbnRhbCB7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMWQxZDEgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDIwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbn1cXG4ud3JhcCAubGluZS52ZXJ0aWNhbCB7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2QxZDFkMSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogcHggMTVweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwiZG90Q2hhcnRfaGlkZGVuX191enpCeFwiLFxuXHRcIndyYXBcIjogXCJkb3RDaGFydF93cmFwX19JQk5JelwiLFxuXHRcImRvdENoYXJ0XCI6IFwiZG90Q2hhcnRfZG90Q2hhcnRfXzJpb3VsXCIsXG5cdFwiYXJyb3dcIjogXCJkb3RDaGFydF9hcnJvd19fdXgybjRcIixcblx0XCJ1cFwiOiBcImRvdENoYXJ0X3VwX18zTUMtcFwiLFxuXHRcInJpZ2h0XCI6IFwiZG90Q2hhcnRfcmlnaHRfXzJaYnItXCIsXG5cdFwibGluZVwiOiBcImRvdENoYXJ0X2xpbmVfXzE0b2p4XCIsXG5cdFwiaG9yaXpvbnRhbFwiOiBcImRvdENoYXJ0X2hvcml6b250YWxfXzh3WERqXCIsXG5cdFwidmVydGljYWxcIjogXCJkb3RDaGFydF92ZXJ0aWNhbF9fMW9IWF9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9