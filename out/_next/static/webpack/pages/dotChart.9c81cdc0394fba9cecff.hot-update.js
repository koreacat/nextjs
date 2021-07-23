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
___CSS_LOADER_EXPORT___.push([module.i, ".dotChart_hidden__uzzBx {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.dotChart_wrap__IBNIz .dotChart_dotChart__2ioul {\n  position: relative;\n  width: 600px;\n  height: 372px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-left: 1px solid #a4a4a4;\n  border-bottom: 1px solid #a4a4a4;\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4 {\n  position: absolute;\n  width: 20px;\n  border-top: 1px solid #a4a4a4;\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4.dotChart_top__1AuRv {\n  top: 8.5px;\n  left: -5.5px;\n  transform: rotate(60deg);\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4.dotChart_right__2Zbr- {\n  bottom: 4px;\n  right: -1px;\n  transform: rotate(30deg);\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx {\n  position: absolute;\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx.dotChart_horizontal__8wXDj {\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(to right, #d1d1d1 50%, rgba(255, 255, 255, 0) 20%);\n  background-size: 14.1px 1px;\n  background-repeat: repeat-x;\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx.dotChart_vertical__1oHX_ {\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  background-image: linear-gradient(to top, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: 1px 14px;\n  background-repeat: repeat-y;\n}\n.dotChart_wrap__IBNIz .dotChart_category__3GgUv {\n  position: absolute;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://dotChart.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AAHI;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,gCAAA;AAMR;AADI;EACI,kBAAA;EACA,WAAA;EACA,6BAAA;AAGR;AADQ;EACI,UAAA;EACA,YAAA;EACA,wBAAA;AAGZ;AAAQ;EACI,WAAA;EACA,WAAA;EACA,wBAAA;AAEZ;AAEI;EACI,kBAAA;AAAR;AAEQ;EACI,QAAA;EACA,WAAA;EACA,WAAA;EACA,oFAAA;EACA,2BAAA;EACA,2BAAA;AAAZ;AAGQ;EACI,SAAA;EACA,UAAA;EACA,YAAA;EACA,kFAAA;EACA,yBAAA;EACA,2BAAA;AADZ;AAKI;EACI,kBAAA;EACA,mCCnDS;EDoDT,eAAA;EACA,iBAAA;EACA,cE8CS;AFjDjB","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap .dotChart {\n  position: relative;\n  width: 600px;\n  height: 372px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-left: 1px solid #a4a4a4;\n  border-bottom: 1px solid #a4a4a4;\n}\n.wrap .arrow {\n  position: absolute;\n  width: 20px;\n  border-top: 1px solid #a4a4a4;\n}\n.wrap .arrow.top {\n  top: 8.5px;\n  left: -5.5px;\n  transform: rotate(60deg);\n}\n.wrap .arrow.right {\n  bottom: 4px;\n  right: -1px;\n  transform: rotate(30deg);\n}\n.wrap .line {\n  position: absolute;\n}\n.wrap .line.horizontal {\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(to right, #d1d1d1 50%, rgba(255, 255, 255, 0) 20%);\n  background-size: 14.1px 1px;\n  background-repeat: repeat-x;\n}\n.wrap .line.vertical {\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  background-image: linear-gradient(to top, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: 1px 14px;\n  background-repeat: repeat-y;\n}\n.wrap .category {\n  position: absolute;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_HEIGHT: 64px;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_HEIGHT: 300px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: NotoSanskr, sans-serif;\r\n$F_MONTSERRAT: Montserrat, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;\r\n","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "dotChart_hidden__uzzBx",
	"wrap": "dotChart_wrap__IBNIz",
	"dotChart": "dotChart_dotChart__2ioul",
	"arrow": "dotChart_arrow__ux2n4",
	"top": "dotChart_top__1AuRv",
	"right": "dotChart_right__2Zbr-",
	"line": "dotChart_line__14ojx",
	"horizontal": "dotChart_horizontal__8wXDj",
	"vertical": "dotChart_vertical__1oHX_",
	"category": "dotChart_category__3GgUv"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2RvdENoYXJ0L2RvdENoYXJ0Lm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcscURBQXFELHVCQUF1QixpQkFBaUIsa0JBQWtCLHNCQUFzQix3QkFBd0IsbUNBQW1DLHFDQUFxQyxHQUFHLGdEQUFnRCx1QkFBdUIsZ0JBQWdCLGtDQUFrQyxHQUFHLG9FQUFvRSxlQUFlLGlCQUFpQiw2QkFBNkIsR0FBRyxzRUFBc0UsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsR0FBRywrQ0FBK0MsdUJBQXVCLEdBQUcsMEVBQTBFLGFBQWEsZ0JBQWdCLGdCQUFnQix5RkFBeUYsZ0NBQWdDLGdDQUFnQyxHQUFHLHdFQUF3RSxjQUFjLGVBQWUsaUJBQWlCLHVGQUF1Riw4QkFBOEIsZ0NBQWdDLEdBQUcsbURBQW1ELHVCQUF1Qix3Q0FBd0Msb0JBQW9CLHNCQUFzQixtQkFBbUIsR0FBRyxPQUFPLDZPQUE2TyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsNENBQTRDLDBEQUEwRCxvQ0FBb0MseUNBQXlDLDZDQUE2Qyw4QkFBOEIseUJBQXlCLDJCQUEyQixtQkFBbUIsb0JBQW9CLHFCQUFxQiwrQkFBK0IsS0FBSyxnQkFBZ0IscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcscUJBQXFCLHVCQUF1QixpQkFBaUIsa0JBQWtCLHNCQUFzQix3QkFBd0IsbUNBQW1DLHFDQUFxQyxHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGtDQUFrQyxHQUFHLG9CQUFvQixlQUFlLGlCQUFpQiw2QkFBNkIsR0FBRyxzQkFBc0IsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsR0FBRyxlQUFlLHVCQUF1QixHQUFHLDBCQUEwQixhQUFhLGdCQUFnQixnQkFBZ0IseUZBQXlGLGdDQUFnQyxnQ0FBZ0MsR0FBRyx3QkFBd0IsY0FBYyxlQUFlLGlCQUFpQix1RkFBdUYsOEJBQThCLGdDQUFnQyxHQUFHLG1CQUFtQix1QkFBdUIsd0NBQXdDLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcsMENBQTBDLHlCQUF5Qiw0QkFBNEIsMEJBQTBCLDJEQUEyRCwwQ0FBMEMseUNBQXlDLHdCQUF3QixzQkFBc0IsbUJBQW1CLHVCQUF1QixrREFBa0Qsa0RBQWtELHlDQUF5Qyx5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDJDQUEyQywwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLHFDQUFxQyx1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHVDQUF1Qyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDJDQUEyQywwQkFBMEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLHVDQUF1Qyx3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDRDQUE0Qyw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QixpQ0FBaUMsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsMENBQTBDLDZCQUE2Qiw4QkFBOEIsNENBQTRDLDhCQUE4QiwrQkFBK0IsNENBQTRDLDhCQUE4QiwrQkFBK0IsbUJBQW1CO0FBQzc3TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvdENoYXJ0LjljODFjZGMwMzk0ZmJhOWNlY2ZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZG90Q2hhcnRfaGlkZGVuX191enpCeCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9kb3RDaGFydF9fMmlvdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNzJweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2E0YTRhNDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTRhNGE0O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2Fycm93X191eDJuNCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTRhNGE0O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2Fycm93X191eDJuNC5kb3RDaGFydF90b3BfXzFBdVJ2IHtcXG4gIHRvcDogOC41cHg7XFxuICBsZWZ0OiAtNS41cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfYXJyb3dfX3V4Mm40LmRvdENoYXJ0X3JpZ2h0X18yWmJyLSB7XFxuICBib3R0b206IDRweDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2xpbmVfXzE0b2p4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9saW5lX18xNG9qeC5kb3RDaGFydF9ob3Jpem9udGFsX184d1hEaiB7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMWQxZDEgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDIwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE0LjFweCAxcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfbGluZV9fMTRvanguZG90Q2hhcnRfdmVydGljYWxfXzFvSFhfIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZDFkMWQxIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAyMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxcHggMTRweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9jYXRlZ29yeV9fM0dnVXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5za3IsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNmE2YTZhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vZG90Q2hhcnQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1ZKOztBQUhJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBTVI7QUFESTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBR1I7QUFEUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFHWjtBQUFRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQUVaO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBRVE7RUFDSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvRkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFBWjtBQUdRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0ZBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBRFo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsbUNDbkRTO0VEb0RULGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNFOENTO0FGakRqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cIixcIi5oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi53cmFwIC5kb3RDaGFydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDM3MnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYTRhNGE0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNGE0YTQ7XFxufVxcbi53cmFwIC5hcnJvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTRhNGE0O1xcbn1cXG4ud3JhcCAuYXJyb3cudG9wIHtcXG4gIHRvcDogOC41cHg7XFxuICBsZWZ0OiAtNS41cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XFxufVxcbi53cmFwIC5hcnJvdy5yaWdodCB7XFxuICBib3R0b206IDRweDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xcbn1cXG4ud3JhcCAubGluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi53cmFwIC5saW5lLmhvcml6b250YWwge1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZDFkMWQxIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAyMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNC4xcHggMXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcbn1cXG4ud3JhcCAubGluZS52ZXJ0aWNhbCB7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2QxZDFkMSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMXB4IDE0cHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxufVxcbi53cmFwIC5jYXRlZ29yeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogTm90b1NhbnNrciwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICM2YTZhNmE7XFxufVwiLFwiLy8gaGVhZGVyIGhlaWdodFxcclxcbiRNSU5fV0lEVEg6IDExNjhweDtcXHJcXG4kSEVBREVSX0hFSUdIVDogNjRweDtcXHJcXG4kQ09OVEVOVFNfV0lEVEg6IDExMjBweDtcXHJcXG4kRk9PVEVSX0hFSUdIVDogMzAwcHg7XFxyXFxuXFxyXFxuLy8gZm9udFxcclxcbiRGX05PVE9fU0FOU19LUjogTm90b1NhbnNrciwgc2Fucy1zZXJpZjtcXHJcXG4kRl9NT05UU0VSUkFUOiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcclxcblxcclxcbi8vIHotaW5kZXhcXHJcXG4kWl9JTkRFWF9CQVNJQzogMTA7XFxyXFxuJFpfSU5ERVhfRklYRUQ6IDEwMDtcXHJcXG5cIixcIiRDX1dISVRFOiAjZmZmO1xcclxcbiRDX0JMQUNLOiAjMDAwO1xcclxcbiRDX0dVSURFTElORTogIzBmZjtcXHJcXG5cXHJcXG4vLyBKT0JEQSBCTEFDS1xcclxcbiRDX0pPQkRBX0JMQUNLOiAjMTIxNjE5O1xcclxcblxcclxcbi8vIEpPQkRBIFdISVRFXFxyXFxuJENfSk9CREFfV0hJVEU6ICNmOWY5ZmE7XFxyXFxuXFxyXFxuLy8gR1JFRU5cXHJcXG4kQ19HUkVFTl8zMDogI2VmZmRmMztcXHJcXG4kQ19HUkVFTl80MDogI2UwZjllNDtcXHJcXG4kQ19HUkVFTl81MDogI2QwZjVkYTtcXHJcXG4kQ19HUkVFTl82MDogI2MzZjJjZDtcXHJcXG4kQ19HUkVFTl83MDogI2IzZWVjMTtcXHJcXG4kQ19HUkVFTl84MDogI2EyZWJiNDtcXHJcXG4kQ19HUkVFTl85MDogIzkyZTZhMztcXHJcXG4kQ19HUkVFTl8xMDA6ICM2Y2RkODM7XFxyXFxuJENfR1JFRU5fMjAwOiAjNTJjNTY0O1xcclxcbiRDX0dSRUVOXzMwMDogIzQxYWM0ZDtcXHJcXG4kQ19HUkVFTl80MDA6ICMzYzhlNDI7XFxyXFxuJENfR1JFRU5fNTAwOiAjMzc3NTM4O1xcclxcblxcclxcbi8vIFlFTExPV1xcclxcbiRDX1lFTExPV18zMDogI2ZmZmVmMjtcXHJcXG4kQ19ZRUxMT1dfNDA6ICNmZmZkZTU7XFxyXFxuJENfWUVMTE9XXzUwOiAjZmVmY2Q4O1xcclxcbiRDX1lFTExPV182MDogI2ZlZmNjYjtcXHJcXG4kQ19ZRUxMT1dfNzA6ICNmZWY5YmQ7XFxyXFxuJENfWUVMTE9XXzgwOiAjZmVmOGIxO1xcclxcbiRDX1lFTExPV185MDogI2ZkZjY5ZTtcXHJcXG4kQ19ZRUxMT1dfMTAwOiAjZmNmMTZjO1xcclxcbiRDX1lFTExPV18yMDA6ICNlN2RhNGI7XFxyXFxuJENfWUVMTE9XXzMwMDogI2Q4Y2EyYztcXHJcXG4kQ19ZRUxMT1dfNDAwOiAjYjNhODJhO1xcclxcbiRDX1lFTExPV181MDA6ICM5MzhhMjk7XFxyXFxuXFxyXFxuLy8gU0tZXFxyXFxuJENfU0tZXzMwOiAjZjNmZGZjO1xcclxcbiRDX1NLWV80MDogI2U5ZjlmOTtcXHJcXG4kQ19TS1lfNTA6ICNkY2Y3ZjY7XFxyXFxuJENfU0tZXzYwOiAjZDFmNWYzO1xcclxcbiRDX1NLWV83MDogI2M1ZjFlZjtcXHJcXG4kQ19TS1lfODA6ICNiYmVmZWQ7XFxyXFxuJENfU0tZXzkwOiAjYWZlY2VhO1xcclxcbiRDX1NLWV8xMDA6ICM3YWRlZGE7XFxyXFxuJENfU0tZXzIwMDogIzVlYzdjMztcXHJcXG4kQ19TS1lfMzAwOiAjNDZiMmFmO1xcclxcbiRDX1NLWV80MDA6ICM0MDkzOTA7XFxyXFxuJENfU0tZXzUwMDogIzNhNzk3NztcXHJcXG5cXHJcXG4vLyBMSU1FXFxyXFxuJENfTElNRV8zMDogI2Y5ZmZlYjtcXHJcXG4kQ19MSU1FXzQwOiAjZjNmZWRmO1xcclxcbiRDX0xJTUVfNTA6ICNlZGZkZDI7XFxyXFxuJENfTElNRV82MDogI2U3ZmNjNjtcXHJcXG4kQ19MSU1FXzcwOiAjZTJmYmI5O1xcclxcbiRDX0xJTUVfODA6ICNkY2ZhYWQ7XFxyXFxuJENfTElNRV85MDogI2QwZjg5NDtcXHJcXG4kQ19MSU1FXzEwMDogI2JmZWY3YjtcXHJcXG4kQ19MSU1FXzIwMDogI2E0ZDk1YTtcXHJcXG4kQ19MSU1FXzMwMDogIzhlYzkzZDtcXHJcXG4kQ19MSU1FXzQwMDogIzc5YTgzNztcXHJcXG4kQ19MSU1FXzUwMDogIzY2OGEzMztcXHJcXG5cXHJcXG4vLyBQVVJQTEVcXHJcXG4kQ19QVVJQTEVfMzA6ICNmNWYyZmQ7XFxyXFxuJENfUFVSUExFXzQwOiAjZjJlZGZjO1xcclxcbiRDX1BVUlBMRV81MDogI2VlZTdmYztcXHJcXG4kQ19QVVJQTEVfNjA6ICNlOGUwZmI7XFxyXFxuJENfUFVSUExFXzcwOiAjZTBkNWY5O1xcclxcbiRDX1BVUlBMRV84MDogI2Q1YzdmNztcXHJcXG4kQ19QVVJQTEVfOTA6ICNjN2I0ZjQ7XFxyXFxuJENfUFVSUExFXzEwMDogI2I0OWJmMDtcXHJcXG4kQ19QVVJQTEVfMjAwOiAjOTM3NWRiO1xcclxcbiRDX1BVUlBMRV8zMDA6ICM3NzUzY2E7XFxyXFxuJENfUFVSUExFXzQwMDogIzYyM2ZiMztcXHJcXG4kQ19QVVJQTEVfNTAwOiAjNTUzYjk0O1xcclxcblxcclxcbi8vIEJMVUVcXHJcXG4kQ19CTFVFXzMwOiAjZTFlN2Y4O1xcclxcbiRDX0JMVUVfNDA6ICNjM2QxZWY7XFxyXFxuJENfQkxVRV81MDogI2E3YjllNztcXHJcXG4kQ19CTFVFXzYwOiAjOGJhM2RmO1xcclxcbiRDX0JMVUVfNzA6ICM3MThkZDc7XFxyXFxuJENfQkxVRV84MDogIzU4NzhjZjtcXHJcXG4kQ19CTFVFXzkwOiAjMzE1ZmM3O1xcclxcbiRDX0JMVUVfMTAwOiAjMmI1M2FlO1xcclxcbiRDX0JMVUVfMjAwOiAjMzA0YTg5O1xcclxcbiRDX0JMVUVfMzAwOiAjMmM0MTcwO1xcclxcbiRDX0JMVUVfNDAwOiAjMjkzODVkO1xcclxcbiRDX0JMVUVfNTAwOiAjMjUzMTRkO1xcclxcblxcclxcbi8vIEdSQVlcXHJcXG4kQ19DT09MX0dSQVlfMzA6ICNmNGY0ZjU7XFxyXFxuJENfQ09PTF9HUkFZXzQwOiAjZTdlOGVhO1xcclxcbiRDX0NPT0xfR1JBWV81MDogI2NmZDFkNTtcXHJcXG4kQ19DT09MX0dSQVlfNjA6ICM5ZmE0YWI7XFxyXFxuJENfQ09PTF9HUkFZXzcwOiAjNjU2YTcxO1xcclxcbiRDX0NPT0xfR1JBWV84MDogIzQ0NDc0YjtcXHJcXG4kQ19DT09MX0dSQVlfOTA6ICMyNTI4MmI7XFxyXFxuXFxyXFxuJENfV0FSTV9HUkFZXzMwOiAjZjRmNGY0O1xcclxcbiRDX1dBUk1fR1JBWV80MDogI2U4ZThlODtcXHJcXG4kQ19XQVJNX0dSQVlfNTA6ICNkMWQxZDE7XFxyXFxuJENfV0FSTV9HUkFZXzYwOiAjYTRhNGE0O1xcclxcbiRDX1dBUk1fR1JBWV83MDogIzZhNmE2YTtcXHJcXG4kQ19XQVJNX0dSQVlfODA6ICM0NzQ3NDc7XFxyXFxuJENfV0FSTV9HUkFZXzkwOiAjMjMyMzIzO1xcclxcblxcclxcbi8vIFdBUk5JTkdcXHJcXG4kQ19XQVJOSU5HOiAjZjZhNjA5O1xcclxcbiRDX1dBUk5JTkdfREFSSzogI2U4OTgwNjtcXHJcXG4kQ19XQVJOSU5HX0xJR0hUOiAjZmZiYzFmO1xcclxcblxcclxcbi8vIFBPU0lUSVZFXFxyXFxuJENfUE9TSVRJVkU6ICM2Y2RkODM7XFxyXFxuJENfUE9TSVRJVkVfREFSSzogIzNlZDE2MDtcXHJcXG4kQ19QT1NJVElWRV9MSUdIVDogIzkyZTZhMztcXHJcXG5cXHJcXG4vLyBORUdBVElWRVxcclxcbiRDX05FR0FUSVZFOiAjZmI0ZTRlO1xcclxcbiRDX05FR0FUSVZFX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfTkVHQVRJVkVfTElHSFQ6ICNmZjYyNjI7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwiZG90Q2hhcnRfaGlkZGVuX191enpCeFwiLFxuXHRcIndyYXBcIjogXCJkb3RDaGFydF93cmFwX19JQk5JelwiLFxuXHRcImRvdENoYXJ0XCI6IFwiZG90Q2hhcnRfZG90Q2hhcnRfXzJpb3VsXCIsXG5cdFwiYXJyb3dcIjogXCJkb3RDaGFydF9hcnJvd19fdXgybjRcIixcblx0XCJ0b3BcIjogXCJkb3RDaGFydF90b3BfXzFBdVJ2XCIsXG5cdFwicmlnaHRcIjogXCJkb3RDaGFydF9yaWdodF9fMlpici1cIixcblx0XCJsaW5lXCI6IFwiZG90Q2hhcnRfbGluZV9fMTRvanhcIixcblx0XCJob3Jpem9udGFsXCI6IFwiZG90Q2hhcnRfaG9yaXpvbnRhbF9fOHdYRGpcIixcblx0XCJ2ZXJ0aWNhbFwiOiBcImRvdENoYXJ0X3ZlcnRpY2FsX18xb0hYX1wiLFxuXHRcImNhdGVnb3J5XCI6IFwiZG90Q2hhcnRfY2F0ZWdvcnlfXzNHZ1V2XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==