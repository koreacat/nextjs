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
___CSS_LOADER_EXPORT___.push([module.i, ".dotChart_hidden__uzzBx {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.dotChart_wrap__IBNIz .dotChart_dotChart__2ioul {\n  position: relative;\n  width: 600px;\n  height: 372px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-left: 1px solid #a4a4a4;\n  border-bottom: 1px solid #a4a4a4;\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4 {\n  position: absolute;\n  width: 20px;\n  border-top: 1px solid #a4a4a4;\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4.dotChart_top__1AuRv {\n  top: 8.5px;\n  left: -5.5px;\n  transform: rotate(60deg);\n}\n.dotChart_wrap__IBNIz .dotChart_arrow__ux2n4.dotChart_right__2Zbr- {\n  bottom: 4px;\n  right: -1px;\n  transform: rotate(30deg);\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx {\n  position: absolute;\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx.dotChart_horizontal__8wXDj {\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(to right, #d1d1d1 50%, rgba(255, 255, 255, 0) 20%);\n  background-size: 14.1px 1px;\n  background-repeat: repeat-x;\n}\n.dotChart_wrap__IBNIz .dotChart_line__14ojx.dotChart_vertical__1oHX_ {\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  background-image: linear-gradient(to top, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: 1px 14px;\n  background-repeat: repeat-y;\n}\n.dotChart_wrap__IBNIz .dotChart_category__3GgUv {\n  position: absolute;\n  width: 90px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n}\n.dotChart_wrap__IBNIz .dotChart_category__3GgUv.dotChart_leftTop__Y0grj {\n  transform: rotate(-90deg);\n  top: 85px;\n  left: -70px;\n}\n.dotChart_wrap__IBNIz .dotChart_category__3GgUv.dotChart_leftBottom__3xtmn {\n  transform: rotate(-90deg);\n  bottom: 85px;\n  left: -70px;\n}\n.dotChart_wrap__IBNIz .dotChart_category__3GgUv.dotChart_bottomLeft__21QWK {\n  left: 95.5px;\n  bottom: -30px;\n}\n.dotChart_wrap__IBNIz .dotChart_category__3GgUv.dotChart_bottomRight__R8zI5 {\n  right: 102px;\n  bottom: -30px;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0 {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 24px;\n  border-radius: 4px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 11px;\n  line-height: 14px;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_topLeft__Ijb2V {\n  top: 4px;\n  left: 125px;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_topRight__PICcP {\n  top: 4px;\n  right: 125px;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_bottomLeft__21QWK {\n  bottom: 8px;\n  left: 125px;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_bottomRight__R8zI5 {\n  bottom: 8px;\n  right: 125px;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_gray__2aTa8 {\n  color: #6a6a6a;\n  background: #e7e8ea;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_green__3IGDh {\n  color: #41ac4d;\n  background: #d0f5da;\n}\n.dotChart_wrap__IBNIz .dotChart_preference__3cQh0.dotChart_red__3dwFx {\n  color: #e93c3c;\n  background: #F9E0E2;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__ {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__.dotChart_inActive__2szcz {\n  opacity: 0.48;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__ .dotChart_point__325jy {\n  width: 16px;\n  height: 16px;\n  border: 5px solid #e7e8ea;\n  border-radius: 50%;\n  background: #9fa4ab;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__ .dotChart_title__1LN_v {\n  overflow: hidden;\n  position: absolute;\n  top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  margin-top: 6px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #6a6a6a;\n  cursor: pointer;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__.dotChart_gray__2aTa8 .dotChart_point__325jy {\n  border: 5px solid #e7e8ea;\n  background: #9fa4ab;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__.dotChart_green__3IGDh .dotChart_point__325jy {\n  border: 5px solid #d0f5da;\n  background: #3ed160;\n}\n.dotChart_wrap__IBNIz .dotChart_item__3_C__.dotChart_red__3dwFx .dotChart_point__325jy {\n  border: 5px solid #F9E0E2;\n  background: #ff6262;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://dotChart.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;AAHI;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,8BAAA;EACA,gCAAA;AAMR;AAHI;EACI,kBAAA;EACA,WAAA;EACA,6BAAA;AAKR;AAHQ;EACI,UAAA;EACA,YAAA;EACA,wBAAA;AAKZ;AAFQ;EACI,WAAA;EACA,WAAA;EACA,wBAAA;AAIZ;AAAI;EACI,kBAAA;AAER;AAAQ;EACI,QAAA;EACA,WAAA;EACA,WAAA;EACA,oFAAA;EACA,2BAAA;EACA,2BAAA;AAEZ;AACQ;EACI,SAAA;EACA,UAAA;EACA,YAAA;EACA,kFAAA;EACA,yBAAA;EACA,2BAAA;AACZ;AAGI;EACI,kBAAA;EACA,WAAA;EACA,mCClDS;EDmDT,eAAA;EACA,iBAAA;EACA,cE+CS;AFhDjB;AAGQ;EACI,yBAAA;EACA,SAAA;EACA,WAAA;AADZ;AAIQ;EACI,yBAAA;EACA,YAAA;EACA,WAAA;AAFZ;AAKQ;EACI,YAAA;EACA,aAAA;AAHZ;AAMQ;EACI,YAAA;EACA,aAAA;AAJZ;AAQI;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mCCtFS;EDuFT,eAAA;EACA,iBAAA;AANR;AAQQ;EACI,QAAA;EACA,WAAA;AANZ;AASQ;EACI,QAAA;EACA,YAAA;AAPZ;AAUQ;EACI,WAAA;EACA,WAAA;AARZ;AAWQ;EACI,WAAA;EACA,YAAA;AATZ;AAYQ;EACI,cEXK;EFYL,mBEvBK;AFajB;AAaQ;EACI,cEvGE;EFwGF,mBE/GC;AFoGb;AAcQ;EACI,cELM;EFMN,mBAAA;AAZZ;AAgBI;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAdR;AAgBQ;EACI,aAAA;AAdZ;AAiBQ;EACI,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBEnDK;AFoCjB;AAkBQ;EACI,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,mCC1JK;ED2JL,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,cE1DK;EF2DL,eAAA;AAhBZ;AAoBY;EACI,yBAAA;EACA,mBE1EC;AFwDjB;AAuBY;EACI,yBAAA;EACA,mBE7DE;AFwClB;AA0BY;EACI,yBAAA;EACA,mBE9DG;AFsCnB","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.wrap .dotChart {\n  position: relative;\n  width: 600px;\n  height: 372px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  border-left: 1px solid #a4a4a4;\n  border-bottom: 1px solid #a4a4a4;\n}\n.wrap .arrow {\n  position: absolute;\n  width: 20px;\n  border-top: 1px solid #a4a4a4;\n}\n.wrap .arrow.top {\n  top: 8.5px;\n  left: -5.5px;\n  transform: rotate(60deg);\n}\n.wrap .arrow.right {\n  bottom: 4px;\n  right: -1px;\n  transform: rotate(30deg);\n}\n.wrap .line {\n  position: absolute;\n}\n.wrap .line.horizontal {\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background-image: linear-gradient(to right, #d1d1d1 50%, rgba(255, 255, 255, 0) 20%);\n  background-size: 14.1px 1px;\n  background-repeat: repeat-x;\n}\n.wrap .line.vertical {\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  background-image: linear-gradient(to top, #d1d1d1 40%, rgba(255, 255, 255, 0) 20%);\n  background-size: 1px 14px;\n  background-repeat: repeat-y;\n}\n.wrap .category {\n  position: absolute;\n  width: 90px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n}\n.wrap .category.leftTop {\n  transform: rotate(-90deg);\n  top: 85px;\n  left: -70px;\n}\n.wrap .category.leftBottom {\n  transform: rotate(-90deg);\n  bottom: 85px;\n  left: -70px;\n}\n.wrap .category.bottomLeft {\n  left: 95.5px;\n  bottom: -30px;\n}\n.wrap .category.bottomRight {\n  right: 102px;\n  bottom: -30px;\n}\n.wrap .preference {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 24px;\n  border-radius: 4px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 11px;\n  line-height: 14px;\n}\n.wrap .preference.topLeft {\n  top: 4px;\n  left: 125px;\n}\n.wrap .preference.topRight {\n  top: 4px;\n  right: 125px;\n}\n.wrap .preference.bottomLeft {\n  bottom: 8px;\n  left: 125px;\n}\n.wrap .preference.bottomRight {\n  bottom: 8px;\n  right: 125px;\n}\n.wrap .preference.gray {\n  color: #6a6a6a;\n  background: #e7e8ea;\n}\n.wrap .preference.green {\n  color: #41ac4d;\n  background: #d0f5da;\n}\n.wrap .preference.red {\n  color: #e93c3c;\n  background: #F9E0E2;\n}\n.wrap .item {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.wrap .item.inActive {\n  opacity: 0.48;\n}\n.wrap .item .point {\n  width: 16px;\n  height: 16px;\n  border: 5px solid #e7e8ea;\n  border-radius: 50%;\n  background: #9fa4ab;\n}\n.wrap .item .title {\n  overflow: hidden;\n  position: absolute;\n  top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  margin-top: 6px;\n  font-family: NotoSanskr, sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #6a6a6a;\n  cursor: pointer;\n}\n.wrap .item.gray .point {\n  border: 5px solid #e7e8ea;\n  background: #9fa4ab;\n}\n.wrap .item.green .point {\n  border: 5px solid #d0f5da;\n  background: #3ed160;\n}\n.wrap .item.red .point {\n  border: 5px solid #F9E0E2;\n  background: #ff6262;\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_HEIGHT: 64px;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_HEIGHT: 300px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: NotoSanskr, sans-serif;\r\n$F_MONTSERRAT: Montserrat, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;\r\n","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;"],"sourceRoot":""}]);
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
	"category": "dotChart_category__3GgUv",
	"leftTop": "dotChart_leftTop__Y0grj",
	"leftBottom": "dotChart_leftBottom__3xtmn",
	"bottomLeft": "dotChart_bottomLeft__21QWK",
	"bottomRight": "dotChart_bottomRight__R8zI5",
	"preference": "dotChart_preference__3cQh0",
	"topLeft": "dotChart_topLeft__Ijb2V",
	"topRight": "dotChart_topRight__PICcP",
	"gray": "dotChart_gray__2aTa8",
	"green": "dotChart_green__3IGDh",
	"red": "dotChart_red__3dwFx",
	"item": "dotChart_item__3_C__",
	"inActive": "dotChart_inActive__2szcz",
	"point": "dotChart_point__325jy",
	"title": "dotChart_title__1LN_v"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/charts/dotChart/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/charts/dotChart/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dotChart_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dotChart.module.scss */ "./src/components/charts/dotChart/dotChart.module.scss");
/* harmony import */ var _dotChart_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dotChart_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\charts\\dotChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_dotChart_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var Arrow = function Arrow() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: cx('arrow', 'top')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: cx('arrow', 'right')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c = Arrow;

var Line = function Line() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: cx('line', 'horizontal')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: cx('line', 'vertical')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c2 = Line;

var Category = function Category() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('category', 'leftTop'),
      children: "\uC5ED\uB7C9\uC5D0 \uC798\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('category', 'leftBottom'),
      children: "\uC5ED\uB7C9\uC5D0 \uC548\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('category', 'bottomLeft'),
      children: "\uC720\uD615\uC5D0 \uC548\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('category', 'bottomRight'),
      children: "\uC720\uD615\uC5D0 \uC798\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c3 = Category;

var Preference = function Preference() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('preference', 'topLeft', 'gray'),
      children: "\uBCF4\uD1B5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('preference', 'topRight', 'green'),
      children: "\uCD94\uCC9C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('preference', 'bottomLeft', 'red'),
      children: "\uBE44\uCD94\uCC9C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('preference', 'bottomRight', 'gray'),
      children: "\uBCF4\uD1B5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c4 = Preference;

var Item = function Item(_ref) {
  var index = _ref.index,
      activeIndex = _ref.activeIndex,
      setActiveIndex = _ref.setActiveIndex,
      title = _ref.title,
      position = _ref.position;
  var x = position.x < 0 ? 0 : position.x > 10 ? 10 : position.x;
  var y = position.y < 0 ? 0 : position.y > 12 ? 12 : position.y;
  var alignItems = x <= 1 ? 'flex-start' : x >= 10 ? 'flex-end' : 'center';
  var color = x <= 5 && y <= 6 ? 'red' : x >= 6 && y >= 7 ? 'green' : 'gray';

  var getLeft = function getLeft(x) {
    if (x <= 6) {
      return 16 + x * 50;
    } else {
      return 16 + 6 * 50 + (x - 6) * 60;
    }
  };

  var getBottom = function getBottom(y) {
    if (y <= 6) {
      return 40 + (y - 1) * 25;
    } else {
      return 40 + 5 * 25 + (y - 6) * 30;
    }
  };

  var activeItem = function activeItem() {
    setActiveIndex(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('item', color, {
      'active': index === activeIndex
    }),
    style: {
      bottom: "".concat(getBottom(y), "px"),
      left: "".concat(getLeft(x), "px"),
      alignItems: alignItems
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: cx('point')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('title'),
      style: {
        justifyContent: alignItems
      },
      onClick: activeItem,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 3
  }, _this);
};

_c5 = Item;

var Items = function Items(_ref2) {
  var activeIndex = _ref2.activeIndex,
      setActiveIndex = _ref2.setActiveIndex;
  var data = [{
    x: 2,
    y: 11,
    title: '서비스/고객지원'
  }, {
    x: 10,
    y: 10,
    title: '홍보/마케팅'
  }, {
    x: 0,
    y: 9,
    title: '경영 기획/지원'
  }, {
    x: 5,
    y: 8,
    title: '금융/보험'
  }, {
    x: 9,
    y: 7,
    title: '영업'
  }, {
    x: 2,
    y: 6,
    title: '연구/개발'
  }, {
    x: 4,
    y: 5,
    title: '의료/보건'
  }, {
    x: 3,
    y: 4,
    title: '건설/엔지니어'
  }, {
    x: 2,
    y: 3,
    title: '생산/유통/품질'
  }, {
    x: 7,
    y: 2,
    title: '디자인'
  }, {
    x: 10,
    y: 1,
    title: 'IT 서비스'
  }];
  var items = data.map(function (data, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
      index: index,
      activeIndex: activeIndex,
      setActiveIndex: setActiveIndex,
      title: data.title,
      position: {
        x: data.x,
        y: data.y
      }
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_c6 = Items;

var DotChart = function DotChart() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(-1),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('dotChart'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Arrow, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Category, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Preference, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Items, {
        activeIndex: activeIndex,
        setActiveIndex: setActiveIndex
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 3
  }, _this);
};

_s(DotChart, "TN1Glg/gLBq1bEQVqZ+vtJ4rI70=");

_c7 = DotChart;
/* harmony default export */ __webpack_exports__["default"] = (DotChart);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Arrow");
$RefreshReg$(_c2, "Line");
$RefreshReg$(_c3, "Category");
$RefreshReg$(_c4, "Preference");
$RefreshReg$(_c5, "Item");
$RefreshReg$(_c6, "Items");
$RefreshReg$(_c7, "DotChart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2RvdENoYXJ0L2RvdENoYXJ0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvZG90Q2hhcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJBcnJvdyIsIkxpbmUiLCJDYXRlZ29yeSIsIlByZWZlcmVuY2UiLCJJdGVtIiwiaW5kZXgiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwidGl0bGUiLCJwb3NpdGlvbiIsIngiLCJ5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZ2V0TGVmdCIsImdldEJvdHRvbSIsImFjdGl2ZUl0ZW0iLCJib3R0b20iLCJsZWZ0IiwianVzdGlmeUNvbnRlbnQiLCJJdGVtcyIsImRhdGEiLCJpdGVtcyIsIm1hcCIsIkRvdENoYXJ0IiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcscURBQXFELHVCQUF1QixpQkFBaUIsa0JBQWtCLHNCQUFzQix3QkFBd0IsbUNBQW1DLHFDQUFxQyxHQUFHLGdEQUFnRCx1QkFBdUIsZ0JBQWdCLGtDQUFrQyxHQUFHLG9FQUFvRSxlQUFlLGlCQUFpQiw2QkFBNkIsR0FBRyxzRUFBc0UsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsR0FBRywrQ0FBK0MsdUJBQXVCLEdBQUcsMEVBQTBFLGFBQWEsZ0JBQWdCLGdCQUFnQix5RkFBeUYsZ0NBQWdDLGdDQUFnQyxHQUFHLHdFQUF3RSxjQUFjLGVBQWUsaUJBQWlCLHVGQUF1Riw4QkFBOEIsZ0NBQWdDLEdBQUcsbURBQW1ELHVCQUF1QixnQkFBZ0Isd0NBQXdDLG9CQUFv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QUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsQ0FBQyxDQUFGLENBRHhCO0FBQUEsTUFDZm5CLFdBRGU7QUFBQSxNQUNGQyxjQURFOztBQUd0QixzQkFDQztBQUFLLGFBQVMsRUFBRVgsRUFBRSxDQUFDLE1BQUQsQ0FBbEI7QUFBQSwyQkFFQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFVBQUQsQ0FBbEI7QUFBQSw4QkFDQyxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0MscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsZUFJQyxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRCxlQUtDLHFFQUFDLEtBQUQ7QUFBTyxtQkFBVyxFQUFFVSxXQUFwQjtBQUFpQyxzQkFBYyxFQUFFQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBWUEsQ0FmRDs7R0FBTWlCLFE7O01BQUFBLFE7QUFpQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvdENoYXJ0LmQ3NGM1OWFmYWQ5M2VjZGQ1NzkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZG90Q2hhcnRfaGlkZGVuX191enpCeCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9kb3RDaGFydF9fMmlvdWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNzJweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2E0YTRhNDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTRhNGE0O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2Fycm93X191eDJuNCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTRhNGE0O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2Fycm93X191eDJuNC5kb3RDaGFydF90b3BfXzFBdVJ2IHtcXG4gIHRvcDogOC41cHg7XFxuICBsZWZ0OiAtNS41cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfYXJyb3dfX3V4Mm40LmRvdENoYXJ0X3JpZ2h0X18yWmJyLSB7XFxuICBib3R0b206IDRweDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2xpbmVfXzE0b2p4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9saW5lX18xNG9qeC5kb3RDaGFydF9ob3Jpem9udGFsX184d1hEaiB7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMWQxZDEgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDIwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE0LjFweCAxcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfbGluZV9fMTRvanguZG90Q2hhcnRfdmVydGljYWxfXzFvSFhfIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZDFkMWQxIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAyMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxcHggMTRweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9jYXRlZ29yeV9fM0dnVXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDkwcHg7XFxuICBmb250LWZhbWlseTogTm90b1NhbnNrciwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICM2YTZhNmE7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfY2F0ZWdvcnlfXzNHZ1V2LmRvdENoYXJ0X2xlZnRUb3BfX1kwZ3JqIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0b3A6IDg1cHg7XFxuICBsZWZ0OiAtNzBweDtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9jYXRlZ29yeV9fM0dnVXYuZG90Q2hhcnRfbGVmdEJvdHRvbV9fM3h0bW4ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIGJvdHRvbTogODVweDtcXG4gIGxlZnQ6IC03MHB4O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2NhdGVnb3J5X18zR2dVdi5kb3RDaGFydF9ib3R0b21MZWZ0X18yMVFXSyB7XFxuICBsZWZ0OiA5NS41cHg7XFxuICBib3R0b206IC0zMHB4O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2NhdGVnb3J5X18zR2dVdi5kb3RDaGFydF9ib3R0b21SaWdodF9fUjh6STUge1xcbiAgcmlnaHQ6IDEwMnB4O1xcbiAgYm90dG9tOiAtMzBweDtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9wcmVmZXJlbmNlX18zY1FoMCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogTm90b1NhbnNrciwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X3ByZWZlcmVuY2VfXzNjUWgwLmRvdENoYXJ0X3RvcExlZnRfX0lqYjJWIHtcXG4gIHRvcDogNHB4O1xcbiAgbGVmdDogMTI1cHg7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfcHJlZmVyZW5jZV9fM2NRaDAuZG90Q2hhcnRfdG9wUmlnaHRfX1BJQ2NQIHtcXG4gIHRvcDogNHB4O1xcbiAgcmlnaHQ6IDEyNXB4O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X3ByZWZlcmVuY2VfXzNjUWgwLmRvdENoYXJ0X2JvdHRvbUxlZnRfXzIxUVdLIHtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbGVmdDogMTI1cHg7XFxufVxcbi5kb3RDaGFydF93cmFwX19JQk5JeiAuZG90Q2hhcnRfcHJlZmVyZW5jZV9fM2NRaDAuZG90Q2hhcnRfYm90dG9tUmlnaHRfX1I4ekk1IHtcXG4gIGJvdHRvbTogOHB4O1xcbiAgcmlnaHQ6IDEyNXB4O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X3ByZWZlcmVuY2VfXzNjUWgwLmRvdENoYXJ0X2dyYXlfXzJhVGE4IHtcXG4gIGNvbG9yOiAjNmE2YTZhO1xcbiAgYmFja2dyb3VuZDogI2U3ZThlYTtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9wcmVmZXJlbmNlX18zY1FoMC5kb3RDaGFydF9ncmVlbl9fM0lHRGgge1xcbiAgY29sb3I6ICM0MWFjNGQ7XFxuICBiYWNrZ3JvdW5kOiAjZDBmNWRhO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X3ByZWZlcmVuY2VfXzNjUWgwLmRvdENoYXJ0X3JlZF9fM2R3Rngge1xcbiAgY29sb3I6ICNlOTNjM2M7XFxuICBiYWNrZ3JvdW5kOiAjRjlFMEUyO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2l0ZW1fXzNfQ19fIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2l0ZW1fXzNfQ19fLmRvdENoYXJ0X2luQWN0aXZlX18yc3pjeiB7XFxuICBvcGFjaXR5OiAwLjQ4O1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2l0ZW1fXzNfQ19fIC5kb3RDaGFydF9wb2ludF9fMzI1ankge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjZTdlOGVhO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzlmYTRhYjtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9pdGVtX18zX0NfXyAuZG90Q2hhcnRfdGl0bGVfXzFMTl92IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5za3IsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzZhNmE2YTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdENoYXJ0X3dyYXBfX0lCTkl6IC5kb3RDaGFydF9pdGVtX18zX0NfXy5kb3RDaGFydF9ncmF5X18yYVRhOCAuZG90Q2hhcnRfcG9pbnRfXzMyNWp5IHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNlN2U4ZWE7XFxuICBiYWNrZ3JvdW5kOiAjOWZhNGFiO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2l0ZW1fXzNfQ19fLmRvdENoYXJ0X2dyZWVuX18zSUdEaCAuZG90Q2hhcnRfcG9pbnRfXzMyNWp5IHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNkMGY1ZGE7XFxuICBiYWNrZ3JvdW5kOiAjM2VkMTYwO1xcbn1cXG4uZG90Q2hhcnRfd3JhcF9fSUJOSXogLmRvdENoYXJ0X2l0ZW1fXzNfQ19fLmRvdENoYXJ0X3JlZF9fM2R3RnggLmRvdENoYXJ0X3BvaW50X18zMjVqeSB7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjRjlFMEUyO1xcbiAgYmFja2dyb3VuZDogI2ZmNjI2MjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL2RvdENoYXJ0Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNWSjs7QUFISTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQU1SO0FBSEk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQUtSO0FBSFE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBS1o7QUFGUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFJWjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFRO0VBQ0ksUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0ZBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBRVo7QUFDUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtGQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNaO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0NsRFM7RURtRFQsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0UrQ1M7QUZoRGpCO0FBR1E7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRFo7QUFJUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGWjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFIWjtBQU1RO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFKWjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0N0RlM7RUR1RlQsZUFBQTtFQUNBLGlCQUFBO0FBTlI7QUFRUTtFQUNJLFFBQUE7RUFDQSxXQUFBO0FBTlo7QUFTUTtFQUNJLFFBQUE7RUFDQSxZQUFBO0FBUFo7QUFVUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBUlo7QUFXUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBVFo7QUFZUTtFQUNJLGNFWEs7RUZZTCxtQkV2Qks7QUZhakI7QUFhUTtFQUNJLGNFdkdFO0VGd0dGLG1CRS9HQztBRm9HYjtBQWNRO0VBQ0ksY0VMTTtFRk1OLG1CQUFBO0FBWlo7QUFnQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFkUjtBQWdCUTtFQUNJLGFBQUE7QUFkWjtBQWlCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRW5ESztBRm9DakI7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0MxSks7RUQySkwsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRTFESztFRjJETCxlQUFBO0FBaEJaO0FBb0JZO0VBQ0kseUJBQUE7RUFDQSxtQkUxRUM7QUZ3RGpCO0FBdUJZO0VBQ0kseUJBQUE7RUFDQSxtQkU3REU7QUZ3Q2xCO0FBMEJZO0VBQ0kseUJBQUE7RUFDQSxtQkU5REc7QUZzQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0ICdVVEYtOCc7XFxyXFxuXFxyXFxuLy8gdmFyaWFibGVzXFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3BhdGguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi8vIG1peGluc1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi8vIGhpZGRlblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLndyYXAgLmRvdENoYXJ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMzcycHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhNGE0YTQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E0YTRhNDtcXG59XFxuLndyYXAgLmFycm93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhNGE0YTQ7XFxufVxcbi53cmFwIC5hcnJvdy50b3Age1xcbiAgdG9wOiA4LjVweDtcXG4gIGxlZnQ6IC01LjVweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcXG59XFxuLndyYXAgLmFycm93LnJpZ2h0IHtcXG4gIGJvdHRvbTogNHB4O1xcbiAgcmlnaHQ6IC0xcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XFxufVxcbi53cmFwIC5saW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLndyYXAgLmxpbmUuaG9yaXpvbnRhbCB7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMWQxZDEgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDIwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDE0LjFweCAxcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxufVxcbi53cmFwIC5saW5lLnZlcnRpY2FsIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZDFkMWQxIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAyMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxcHggMTRweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG59XFxuLndyYXAgLmNhdGVnb3J5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5za3IsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNmE2YTZhO1xcbn1cXG4ud3JhcCAuY2F0ZWdvcnkubGVmdFRvcCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgdG9wOiA4NXB4O1xcbiAgbGVmdDogLTcwcHg7XFxufVxcbi53cmFwIC5jYXRlZ29yeS5sZWZ0Qm90dG9tIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICBib3R0b206IDg1cHg7XFxuICBsZWZ0OiAtNzBweDtcXG59XFxuLndyYXAgLmNhdGVnb3J5LmJvdHRvbUxlZnQge1xcbiAgbGVmdDogOTUuNXB4O1xcbiAgYm90dG9tOiAtMzBweDtcXG59XFxuLndyYXAgLmNhdGVnb3J5LmJvdHRvbVJpZ2h0IHtcXG4gIHJpZ2h0OiAxMDJweDtcXG4gIGJvdHRvbTogLTMwcHg7XFxufVxcbi53cmFwIC5wcmVmZXJlbmNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc2tyLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi53cmFwIC5wcmVmZXJlbmNlLnRvcExlZnQge1xcbiAgdG9wOiA0cHg7XFxuICBsZWZ0OiAxMjVweDtcXG59XFxuLndyYXAgLnByZWZlcmVuY2UudG9wUmlnaHQge1xcbiAgdG9wOiA0cHg7XFxuICByaWdodDogMTI1cHg7XFxufVxcbi53cmFwIC5wcmVmZXJlbmNlLmJvdHRvbUxlZnQge1xcbiAgYm90dG9tOiA4cHg7XFxuICBsZWZ0OiAxMjVweDtcXG59XFxuLndyYXAgLnByZWZlcmVuY2UuYm90dG9tUmlnaHQge1xcbiAgYm90dG9tOiA4cHg7XFxuICByaWdodDogMTI1cHg7XFxufVxcbi53cmFwIC5wcmVmZXJlbmNlLmdyYXkge1xcbiAgY29sb3I6ICM2YTZhNmE7XFxuICBiYWNrZ3JvdW5kOiAjZTdlOGVhO1xcbn1cXG4ud3JhcCAucHJlZmVyZW5jZS5ncmVlbiB7XFxuICBjb2xvcjogIzQxYWM0ZDtcXG4gIGJhY2tncm91bmQ6ICNkMGY1ZGE7XFxufVxcbi53cmFwIC5wcmVmZXJlbmNlLnJlZCB7XFxuICBjb2xvcjogI2U5M2MzYztcXG4gIGJhY2tncm91bmQ6ICNGOUUwRTI7XFxufVxcbi53cmFwIC5pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ud3JhcCAuaXRlbS5pbkFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjQ4O1xcbn1cXG4ud3JhcCAuaXRlbSAucG9pbnQge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjZTdlOGVhO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzlmYTRhYjtcXG59XFxuLndyYXAgLml0ZW0gLnRpdGxlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5za3IsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzZhNmE2YTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLndyYXAgLml0ZW0uZ3JheSAucG9pbnQge1xcbiAgYm9yZGVyOiA1cHggc29saWQgI2U3ZThlYTtcXG4gIGJhY2tncm91bmQ6ICM5ZmE0YWI7XFxufVxcbi53cmFwIC5pdGVtLmdyZWVuIC5wb2ludCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjZDBmNWRhO1xcbiAgYmFja2dyb3VuZDogIzNlZDE2MDtcXG59XFxuLndyYXAgLml0ZW0ucmVkIC5wb2ludCB7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjRjlFMEUyO1xcbiAgYmFja2dyb3VuZDogI2ZmNjI2MjtcXG59XCIsXCIvLyBoZWFkZXIgaGVpZ2h0XFxyXFxuJE1JTl9XSURUSDogMTE2OHB4O1xcclxcbiRIRUFERVJfSEVJR0hUOiA2NHB4O1xcclxcbiRDT05URU5UU19XSURUSDogMTEyMHB4O1xcclxcbiRGT09URVJfSEVJR0hUOiAzMDBweDtcXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuJEZfTk9UT19TQU5TX0tSOiBOb3RvU2Fuc2tyLCBzYW5zLXNlcmlmO1xcclxcbiRGX01PTlRTRVJSQVQ6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gei1pbmRleFxcclxcbiRaX0lOREVYX0JBU0lDOiAxMDtcXHJcXG4kWl9JTkRFWF9GSVhFRDogMTAwO1xcclxcblwiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuXFxyXFxuLy8gUE9TSVRJVkVcXHJcXG4kQ19QT1NJVElWRTogIzZjZGQ4MztcXHJcXG4kQ19QT1NJVElWRV9EQVJLOiAjM2VkMTYwO1xcclxcbiRDX1BPU0lUSVZFX0xJR0hUOiAjOTJlNmEzO1xcclxcblxcclxcbi8vIE5FR0FUSVZFXFxyXFxuJENfTkVHQVRJVkU6ICNmYjRlNGU7XFxyXFxuJENfTkVHQVRJVkVfREFSSzogI2U5M2MzYztcXHJcXG4kQ19ORUdBVElWRV9MSUdIVDogI2ZmNjI2MjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoaWRkZW5cIjogXCJkb3RDaGFydF9oaWRkZW5fX3V6ekJ4XCIsXG5cdFwid3JhcFwiOiBcImRvdENoYXJ0X3dyYXBfX0lCTkl6XCIsXG5cdFwiZG90Q2hhcnRcIjogXCJkb3RDaGFydF9kb3RDaGFydF9fMmlvdWxcIixcblx0XCJhcnJvd1wiOiBcImRvdENoYXJ0X2Fycm93X191eDJuNFwiLFxuXHRcInRvcFwiOiBcImRvdENoYXJ0X3RvcF9fMUF1UnZcIixcblx0XCJyaWdodFwiOiBcImRvdENoYXJ0X3JpZ2h0X18yWmJyLVwiLFxuXHRcImxpbmVcIjogXCJkb3RDaGFydF9saW5lX18xNG9qeFwiLFxuXHRcImhvcml6b250YWxcIjogXCJkb3RDaGFydF9ob3Jpem9udGFsX184d1hEalwiLFxuXHRcInZlcnRpY2FsXCI6IFwiZG90Q2hhcnRfdmVydGljYWxfXzFvSFhfXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJkb3RDaGFydF9jYXRlZ29yeV9fM0dnVXZcIixcblx0XCJsZWZ0VG9wXCI6IFwiZG90Q2hhcnRfbGVmdFRvcF9fWTBncmpcIixcblx0XCJsZWZ0Qm90dG9tXCI6IFwiZG90Q2hhcnRfbGVmdEJvdHRvbV9fM3h0bW5cIixcblx0XCJib3R0b21MZWZ0XCI6IFwiZG90Q2hhcnRfYm90dG9tTGVmdF9fMjFRV0tcIixcblx0XCJib3R0b21SaWdodFwiOiBcImRvdENoYXJ0X2JvdHRvbVJpZ2h0X19SOHpJNVwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJkb3RDaGFydF9wcmVmZXJlbmNlX18zY1FoMFwiLFxuXHRcInRvcExlZnRcIjogXCJkb3RDaGFydF90b3BMZWZ0X19JamIyVlwiLFxuXHRcInRvcFJpZ2h0XCI6IFwiZG90Q2hhcnRfdG9wUmlnaHRfX1BJQ2NQXCIsXG5cdFwiZ3JheVwiOiBcImRvdENoYXJ0X2dyYXlfXzJhVGE4XCIsXG5cdFwiZ3JlZW5cIjogXCJkb3RDaGFydF9ncmVlbl9fM0lHRGhcIixcblx0XCJyZWRcIjogXCJkb3RDaGFydF9yZWRfXzNkd0Z4XCIsXG5cdFwiaXRlbVwiOiBcImRvdENoYXJ0X2l0ZW1fXzNfQ19fXCIsXG5cdFwiaW5BY3RpdmVcIjogXCJkb3RDaGFydF9pbkFjdGl2ZV9fMnN6Y3pcIixcblx0XCJwb2ludFwiOiBcImRvdENoYXJ0X3BvaW50X18zMjVqeVwiLFxuXHRcInRpdGxlXCI6IFwiZG90Q2hhcnRfdGl0bGVfXzFMTl92XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2RvdENoYXJ0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuXHJcbmNvbnN0IEFycm93ID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9e2N4KCdhcnJvdycsICd0b3AnKX0vPlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9e2N4KCdhcnJvdycsICdyaWdodCcpfS8+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBMaW5lID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9e2N4KCdsaW5lJywgJ2hvcml6b250YWwnKX0vPlxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9e2N4KCdsaW5lJywgJ3ZlcnRpY2FsJyl9Lz5cclxuXHRcdDwvPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdjYXRlZ29yeScsICdsZWZ0VG9wJyl9PuyXreufieyXkCDsnpjrp57slYTsmpQ8L3NwYW4+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ2NhdGVnb3J5JywgJ2xlZnRCb3R0b20nKX0+7Jet65+J7JeQIOyViOunnuyVhOyalDwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgnY2F0ZWdvcnknLCAnYm90dG9tTGVmdCcpfT7snKDtmJXsl5Ag7JWI66ee7JWE7JqUPC9zcGFuPlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdjYXRlZ29yeScsICdib3R0b21SaWdodCcpfT7snKDtmJXsl5Ag7J6Y66ee7JWE7JqUPC9zcGFuPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgUHJlZmVyZW5jZSA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdwcmVmZXJlbmNlJywgJ3RvcExlZnQnLCAnZ3JheScpfT7rs7TthrU8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdwcmVmZXJlbmNlJywgJ3RvcFJpZ2h0JywgJ2dyZWVuJyl9Puy2lOyynDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3ByZWZlcmVuY2UnLCAnYm90dG9tTGVmdCcsICdyZWQnKX0+67mE7LaU7LKcPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncHJlZmVyZW5jZScsICdib3R0b21SaWdodCcsICdncmF5Jyl9PuuztO2GtTwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBJdGVtIHtcclxuXHRpbmRleDogbnVtYmVyO1xyXG5cdGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcblx0c2V0QWN0aXZlSW5kZXg6IChhY3RpdmVJbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0cG9zaXRpb24/OiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XHJcbn1cclxuXHJcbmNvbnN0IEl0ZW0gPSAoe2luZGV4LCBhY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXgsIHRpdGxlLCBwb3NpdGlvbn06IEl0ZW0pID0+IHtcclxuXHRjb25zdCB4ID0gcG9zaXRpb24ueCA8IDAgPyAwIDogcG9zaXRpb24ueCA+IDEwID8gMTAgOiBwb3NpdGlvbi54O1xyXG5cdGNvbnN0IHkgPSBwb3NpdGlvbi55IDwgMCA/IDAgOiBwb3NpdGlvbi55ID4gMTIgPyAxMiA6IHBvc2l0aW9uLnk7XHJcblx0Y29uc3QgYWxpZ25JdGVtcyA9IHggPD0gMSA/ICdmbGV4LXN0YXJ0JyA6IHggPj0gMTAgPyAnZmxleC1lbmQnIDogJ2NlbnRlcic7XHJcblx0Y29uc3QgY29sb3IgPSAoeCA8PSA1ICYmIHkgPD0gNikgPyAncmVkJyA6ICh4ID49IDYgJiYgeSA+PSA3KSA/ICdncmVlbicgOiAnZ3JheSc7XHJcblxyXG5cdGNvbnN0IGdldExlZnQgPSAoeDogbnVtYmVyKSA9PiB7XHJcblx0XHRpZiAoeCA8PSA2KSB7XHJcblx0XHRcdHJldHVybiAxNiArIHggKiA1MDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAxNiArICg2ICogNTApICsgKCh4IC0gNikgKiA2MCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0Qm90dG9tID0gKHk6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYgKHkgPD0gNikge1xyXG5cdFx0XHRyZXR1cm4gNDAgKyAoeSAtIDEpICogMjU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gNDAgKyAoNSAqIDI1KSArICgoeSAtIDYpICogMzApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFjdGl2ZUl0ZW0gPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVJbmRleChpbmRleCk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdpdGVtJywgY29sb3IsIHsnYWN0aXZlJzogaW5kZXggPT09IGFjdGl2ZUluZGV4fSl9XHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0Ym90dG9tOiBgJHtnZXRCb3R0b20oeSl9cHhgLFxyXG5cdFx0XHRcdGxlZnQ6IGAke2dldExlZnQoeCl9cHhgLFxyXG5cdFx0XHRcdGFsaWduSXRlbXM6IGFsaWduSXRlbXNcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PGkgY2xhc3NOYW1lPXtjeCgncG9pbnQnKX0vPlxyXG5cdFx0XHQ8c3BhblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9XHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBhbGlnbkl0ZW1zXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0XHRvbkNsaWNrPXthY3RpdmVJdGVtfVxyXG5cdFx0XHQ+e3RpdGxlfTwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmludGVyZmFjZSBJdGVtcyB7XHJcblx0YWN0aXZlSW5kZXg6IG51bWJlcjtcclxuXHRzZXRBY3RpdmVJbmRleDogKGFjdGl2ZUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEl0ZW1zID0gKHthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXh9OiBJdGVtcykgPT4ge1xyXG5cdGNvbnN0IGRhdGEgPSBbXHJcblx0XHR7eDogMiwgeTogMTEsIHRpdGxlOiAn7ISc67mE7IqkL+qzoOqwneyngOybkCd9LFxyXG5cdFx0e3g6IDEwLCB5OiAxMCwgdGl0bGU6ICftmY3rs7Qv66eI7LyA7YyFJ30sXHJcblx0XHR7eDogMCwgeTogOSwgdGl0bGU6ICfqsr3smIEg6riw7ZqNL+yngOybkCd9LFxyXG5cdFx0e3g6IDUsIHk6IDgsIHRpdGxlOiAn6riI7Jy1L+uztO2XmCd9LFxyXG5cdFx0e3g6IDksIHk6IDcsIHRpdGxlOiAn7JiB7JeFJ30sXHJcblx0XHR7eDogMiwgeTogNiwgdGl0bGU6ICfsl7Dqtawv6rCc67CcJ30sXHJcblx0XHR7eDogNCwgeTogNSwgdGl0bGU6ICfsnZjro4wv67O06rG0J30sXHJcblx0XHR7eDogMywgeTogNCwgdGl0bGU6ICfqsbTshKQv7JeU7KeA64uI7Ja0J30sXHJcblx0XHR7eDogMiwgeTogMywgdGl0bGU6ICfsg53sgrAv7Jyg7Ya1L+2SiOyniCd9LFxyXG5cdFx0e3g6IDcsIHk6IDIsIHRpdGxlOiAn65SU7J6Q7J24J30sXHJcblx0XHR7eDogMTAsIHk6IDEsIHRpdGxlOiAnSVQg7ISc67mE7IqkJ30sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxJdGVtXHJcblx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRpbmRleD17aW5kZXh9XHJcblx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxyXG5cdFx0XHRcdHNldEFjdGl2ZUluZGV4PXtzZXRBY3RpdmVJbmRleH1cclxuXHRcdFx0XHR0aXRsZT17ZGF0YS50aXRsZX1cclxuXHRcdFx0XHRwb3NpdGlvbj17e3g6IGRhdGEueCwgeTogZGF0YS55fX1cclxuXHRcdFx0Lz5cclxuXHRcdClcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIDw+e2l0ZW1zfTwvPjtcclxufTtcclxuXHJcbmNvbnN0IERvdENoYXJ0ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkb3RDaGFydCcpfT5cclxuXHRcdFx0XHQ8QXJyb3cvPlxyXG5cdFx0XHRcdDxMaW5lLz5cclxuXHRcdFx0XHQ8Q2F0ZWdvcnkvPlxyXG5cdFx0XHRcdDxQcmVmZXJlbmNlLz5cclxuXHRcdFx0XHQ8SXRlbXMgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBzZXRBY3RpdmVJbmRleD17c2V0QWN0aXZlSW5kZXh9Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3RDaGFydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==