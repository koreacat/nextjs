_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/koreaMap"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/classnames/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FkoreaMap&absolutePagePath=C%3A%5CUsers%5Ckj996%5Cproject%5Cnextjs%5Csrc%5Cpages%5CkoreaMap.tsx!./":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FkoreaMap&absolutePagePath=C%3A%5CUsers%5Ckj996%5Cproject%5Cnextjs%5Csrc%5Cpages%5CkoreaMap.tsx ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/koreaMap",
        function () {
          return __webpack_require__(/*! ./src/pages/koreaMap.tsx */ "./src/pages/koreaMap.tsx");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/contents/contents.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/common/contents/contents.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contents_contents__2RZDA {\n  min-height: 600px;\n}", "",{"version":3,"sources":["webpack://contents.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;AACF","sourcesContent":[".contents {\r\n  min-height: 600px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contents": "contents_contents__2RZDA"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/koreaMap.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/koreaMap.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".koreaMap_hidden__1a3VO {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.koreaMap_textEmphasis__3txqr {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.koreaMap_wrap__1iHSA {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://../../../styles/common.scss","webpack://koreaMap.module.scss","webpack://../../../styles/variables/variables.scss","webpack://../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;ADcA;EACI,qBAAA;EACA,sCENa;EFOb,eAAA;EACA,gBAAA;EACA,cAAA;EACA,cGoBQ;EHnBR,mBAAA;ACXJ;;AAfA;EACE,aAAA;AAkBF","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.wrap {\n  display: flex;\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "koreaMap_hidden__1a3VO",
	"textEmphasis": "koreaMap_textEmphasis__3txqr",
	"wrap": "koreaMap_wrap__1iHSA"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/locationList/locationList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".locationList_hidden__39aWG {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.locationList_textEmphasis__3m13l {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.locationList_wrap__3Xb2c {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 378px;\n}\n\n.locationList_locationList__3S5GD {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 24px;\n  gap: 24px;\n  width: 736px;\n  padding: 61px 32px;\n}\n.locationList_locationList__3S5GD .locationList_location__1M_mW {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 46px;\n  background: #FFFFFF;\n  border: 1px solid #e7e8ea;\n  border-radius: 24px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #656a71;\n  cursor: pointer;\n}\n.locationList_locationList__3S5GD .locationList_location__1M_mW.locationList_selected__2qNQ6 {\n  background: #6cdd83 !important;\n  border: 1px solid #52c564;\n  color: #fff;\n}\n.locationList_locationList__3S5GD .locationList_location__1M_mW.locationList_hovered__3fE2g {\n  background: #f4f4f5;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://locationList.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;ADcA;EACI,qBAAA;EACA,sCENa;EFOb,eAAA;EACA,gBAAA;EACA,cAAA;EACA,cGoBQ;EHnBR,mBAAA;ACXJ;;AAfA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AAkBF;;AAfA;EACE,aAAA;EACA,eAAA;EACA,cAAA;EAAA,SAAA;EACA,YAAA;EACA,kBAAA;AAkBF;AAhBE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cEuEa;EFtEb,eAAA;AAkBJ;AAhBI;EACE,8BAAA;EACA,yBAAA;EACA,WElCI;AFoDV;AAfI;EACE,mBEyDW;AFxCjB","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 378px;\n}\n\n.locationList {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  width: 736px;\n  padding: 61px 32px;\n}\n.locationList .location {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 150px;\n  height: 46px;\n  background: #FFFFFF;\n  border: 1px solid #e7e8ea;\n  border-radius: 24px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #656a71;\n  cursor: pointer;\n}\n.locationList .location.selected {\n  background: #6cdd83 !important;\n  border: 1px solid #52c564;\n  color: #fff;\n}\n.locationList .location.hovered {\n  background: #f4f4f5;\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "locationList_hidden__39aWG",
	"textEmphasis": "locationList_textEmphasis__3m13l",
	"wrap": "locationList_wrap__3Xb2c",
	"locationList": "locationList_locationList__3S5GD",
	"location": "locationList_location__1M_mW",
	"selected": "locationList_selected__2qNQ6",
	"hovered": "locationList_hovered__3fE2g"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/koreaMap/map/map.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".map_hidden__1kBKO {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.map_textEmphasis__394c5 {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.map_mapArea__3z3Uc {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 383px;\n  height: 378px;\n}\n.map_mapArea__3z3Uc .map_mapContents__1hyKX {\n  position: relative;\n}\n.map_mapArea__3z3Uc .map_name__AUsiA {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: absolute;\n  height: 26px;\n  padding: 3px 12px 5px;\n  background: #6cdd83;\n  border: 1px solid #52c564;\n  border-radius: 13px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #fff;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.map_mapArea__3z3Uc .map_name__AUsiA::after {\n  position: absolute;\n  left: calc(50% - 2px);\n  bottom: -3px;\n  width: 4px;\n  height: 4px;\n  background: #6cdd83;\n  border-top: 1px solid #52c564;\n  border-left: 1px solid #52c564;\n  text-align: center;\n  transform: rotate(-135deg);\n  content: \"\";\n}\n\n.map_mapWrap__1bYw5 .map_em__3o9zo {\n  fill: #E7E8EA;\n}\n.map_mapWrap__1bYw5 .map_selected__qhOFn {\n  fill: #92e6a3 !important;\n}\n.map_mapWrap__1bYw5 .map_selected__qhOFn.map_em__3o9zo {\n  fill: #52c564 !important;\n}\n.map_mapWrap__1bYw5 path {\n  fill: #F4F4F5;\n  cursor: pointer;\n}\n.map_mapWrap__1bYw5 path.map_noCursor__1FNnU {\n  cursor: default;\n}\n.map_mapWrap__1bYw5 .map_hovered__rdWkn {\n  fill: #cfd1d5;\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://map.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss","webpack://../../../../styles/mixins.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;ADcA;EACI,qBAAA;EACA,sCENa;EFOb,eAAA;EACA,gBAAA;EACA,cAAA;EACA,cGoBQ;EHnBR,mBAAA;ACXJ;;AAfA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;AAkBF;AAhBE;EACE,kBAAA;AAkBJ;AAfE;EGgQA,6EAAA;EH7PE,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,mBEDU;EFEV,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,WEzBM;EF0BN,mBAAA;EACA,eAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;AAgBJ;AAdI;EACE,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,mBElBQ;EFmBR,6BAAA;EACA,8BAAA;EAEA,kBAAA;EACA,0BAAA;EACA,WAAA;AAeN;;AATE;EACE,aAAA;AAYJ;AATE;EACE,wBAAA;AAWJ;AATI;EACE,wBAAA;AAWN;AAPE;EACE,aAAA;EACA,eAAA;AASJ;AAPI;EACE,eAAA;AASN;AALE;EACE,aE2Ba;AFpBjB","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.mapArea {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 383px;\n  height: 378px;\n}\n.mapArea .mapContents {\n  position: relative;\n}\n.mapArea .name {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: absolute;\n  height: 26px;\n  padding: 3px 12px 5px;\n  background: #6cdd83;\n  border: 1px solid #52c564;\n  border-radius: 13px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #fff;\n  white-space: nowrap;\n  cursor: pointer;\n  user-select: none;\n}\n.mapArea .name::after {\n  position: absolute;\n  left: calc(50% - 2px);\n  bottom: -3px;\n  width: 4px;\n  height: 4px;\n  background: #6cdd83;\n  border-top: 1px solid #52c564;\n  border-left: 1px solid #52c564;\n  text-align: center;\n  transform: rotate(-135deg);\n  content: \"\";\n}\n\n.mapWrap .em {\n  fill: #E7E8EA;\n}\n.mapWrap .selected {\n  fill: #92e6a3 !important;\n}\n.mapWrap .selected.em {\n  fill: #52c564 !important;\n}\n.mapWrap path {\n  fill: #F4F4F5;\n  cursor: pointer;\n}\n.mapWrap path.noCursor {\n  cursor: default;\n}\n.mapWrap .hovered {\n  fill: #cfd1d5;\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n","// ellipsis\r\n// @param {number} $LINE - 줄 수\r\n// @param {px} $LINE_HEIGHT - 한줄 높이\r\n@mixin ellipsis($LINE: 1, $LINE_HEIGHT: 1.2em) {\r\n\t@if($LINE == 1) {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\ttext-overflow: ellipsis;\r\n\t\twhite-space: nowrap;\r\n\t} @else {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\tdisplay: -webkit-box;\r\n\t\t-webkit-line-clamp: $LINE;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\tmax-height: $LINE_HEIGHT * $LINE; // webkit 이외의 브라우저 대응\r\n\t\tline-height: $LINE_HEIGHT;\r\n\t\ttext-overflow: ellipsis;\r\n\t\tword-break: break-word;\r\n\t}\r\n}\r\n\r\n// 공통 버튼 스타일\r\n// @param {string} $TYPE - 버튼 타입\r\n// @param {string} $SIZE - 버튼 크기\r\n@mixin commonBtnStyle($TYPE: 'primary', $SIZE: 'large') {\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\r\n\t&:disabled {\r\n\t\tcursor: default;\r\n\t}\r\n\r\n\t// 스타일에 따른 처리\r\n\t@if($TYPE == 'primary') {\r\n\t\twidth: 228px;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_GREEN_100;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_JOBDA_WHITE;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 64px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 56px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground-color: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'secondary') {\r\n\t\twidth: 228px;\r\n\t\tborder: 2px solid $C_GREEN_100;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_WHITE;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_GREEN_100;\r\n\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 60px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 52px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 40px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tborder-color: $C_GREEN_200;\r\n\t\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t\t\tcolor: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tborder-color: $C_GREEN_100;\r\n\t\t\t\tbackground-color: $C_WHITE;\r\n\t\t\t\tcolor: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'underline') {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tcolor: $C_COOL_GRAY_80;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 24px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\tfont-size: 13px;\r\n\t\t\tline-height: 18px;\r\n\t\t\tletter-spacing: -0.0866px;\r\n\t\t}\r\n\r\n\t\t&:after {\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\tbottom: -1px;\r\n\t\t\tleft: 0;\r\n\t\t\theight: 1px;\r\n\t\t\tbackground-color: $C_COOL_GRAY_80;\r\n\t\t\tcontent: '';\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tcolor: $C_COOL_GRAY_70;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_70;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\tcolor: $C_COOL_GRAY_60;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: $C_COOL_GRAY_60;\r\n\t\r\n\t\t\t\t&:after {\r\n\t\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// 공통 인풋 스타일\r\n@mixin commonInputStyle {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 56px;\r\n\tpadding: 0 16px;\r\n\tborder: 1px solid $C_COOL_GRAY_30;\r\n\tborder-radius: 4px;\r\n\tbackground-color: $C_COOL_GRAY_30;\r\n\tfont-family: $F_NOTO_SANS_KR;\r\n\tfont-size: 15px;\r\n\tline-height: 20px;\r\n\tletter-spacing: -0.36px;\r\n\tcolor: $C_COOL_GRAY_90;\r\n\toutline: 0;\r\n\tvertical-align: top;\r\n\r\n\t// 생년월일 경우\r\n\t&.type2 {\r\n\t\twidth: 212px;\r\n\t}\r\n\r\n\t// 주민등록번호 뒷자리 경우\r\n\t&.type3 {\r\n\t\twidth: 60px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t//휴대폰 번호일 경우\r\n\t&.mobile {\r\n\t\tletter-spacing: 2.6px;\r\n\t}\r\n\r\n\t// 버튼(인증요청, 중복확인, 비밀번호확인)이 있는 경우\r\n\t&.withButton {\r\n\t\tpadding-right: 100px;\r\n\t}\r\n\r\n\t// 검색이 가능한 경우(search icon)\r\n\t&.search {\r\n\t\tpadding-left: 48px;\r\n\t}\r\n\r\n\t&.error {\r\n\t\tborder-color: $C_NEGATIVE;\r\n\t}\r\n\r\n\t&:focus,\r\n\t&.success {\r\n\t\tborder-color: $C_GREEN_100;\r\n\t\tbackground-color: $C_WHITE;\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&:-ms-input-placeholder { //ie11\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&::-ms-input-placeholder { //edge\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n}\r\n\r\n// 공통 box-shadow 스타일\r\n// @param {string} $TYPE - box-shadow 타입\r\n@mixin commonBoxShadowStyle($TYPE: 'base') {\r\n\t@if($TYPE == 'base') {\r\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'medium') {\r\n\t\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'large') {\r\n\t\tbox-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xlarge') {\r\n\t\tbox-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xxlarge') {\r\n\t\tbox-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);\r\n\t}\r\n\r\n\t@else if($TYPE == 'inner') {\r\n\t\tbox-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);\r\n\t}\r\n}\r\n\r\n// scroll\r\n@mixin scroll($SCROLL_WIDTH: 4px, $IE_TRACK_COLOR: $C_WHITE) {\r\n\t$BASIC_SCROLL_WIDTH: 17px;\r\n\t$SCROLL_BAR_COLOR: $C_COOL_GRAY_40;\r\n\t$TRACK: transparent;\r\n\t\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tmargin-right: calc(#{$SCROLL_WIDTH} - #{$BASIC_SCROLL_WIDTH});\r\n\tpadding-right: 0;\r\n\r\n\t/*  IE scrollbar style  */\r\n\tscrollbar-face-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-shadow-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-track-color: $IE_TRACK_COLOR;\r\n\tscrollbar-arrow-color: $IE_TRACK_COLOR;\r\n\r\n\t&::-webkit-scrollbar {\r\n\t\twidth: $BASIC_SCROLL_WIDTH;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: $SCROLL_BAR_COLOR;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-track {\r\n\t\tbackground-color: $TRACK;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-button {\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "map_hidden__1kBKO",
	"textEmphasis": "map_textEmphasis__394c5",
	"mapArea": "map_mapArea__3z3Uc",
	"mapContents": "map_mapContents__1hyKX",
	"name": "map_name__AUsiA",
	"mapWrap": "map_mapWrap__1bYw5",
	"em": "map_em__3o9zo",
	"selected": "map_selected__qhOFn",
	"noCursor": "map_noCursor__1FNnU",
	"hovered": "map_hovered__rdWkn"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./src/components/common/contents/contents.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/common/contents/contents.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./contents.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/contents/contents.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./contents.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/contents/contents.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./contents.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/contents/contents.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/common/contents/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/contents/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contents_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents.module.scss */ "./src/components/common/contents/contents.module.scss");
/* harmony import */ var _contents_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contents_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\common\\contents\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_contents_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var Contents = function Contents(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('contents'),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Contents;
/* harmony default export */ __webpack_exports__["default"] = (Contents);

var _c;

$RefreshReg$(_c, "Contents");

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

/***/ }),

/***/ "./src/components/common/layout/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/layout/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\common\\layout\\index.tsx",
    _this = undefined;

var Layout = function Layout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "layout",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, _this);
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ }),

/***/ "./src/components/koreaMap/data/index.tsx":
/*!************************************************!*\
  !*** ./src/components/koreaMap/data/index.tsx ***!
  \************************************************/
/*! exports provided: PATH_DATA, jejuRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH_DATA", function() { return PATH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jejuRect", function() { return jejuRect; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domain_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/location */ "./src/domain/location.ts");

var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\data\\index.tsx";

var PATH_DATA = [{
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].SO,
  specialCity: true,
  path: "M58.5451 75.3795C58.5236 75.2366 58.4711 75.1 58.3912 74.9795C58.3113 74.859 58.206 74.7575 58.0827 74.682C57.9594 74.6066 57.821 74.5591 57.6773 74.5429C57.5337 74.5266 57.3882 74.5421 57.2511 74.5881L55.0428 75.2803C54.7581 75.3795 54.6589 75.3407 54.3958 75.1747L54.3052 75.1164C54.1782 75.0324 54.0715 74.921 53.9932 74.7904C53.9148 74.6598 53.8667 74.5133 53.8523 74.3616L52.7999 66.214C52.5282 63.2681 49.1617 64.4564 47.4084 64.9459C46.9771 65.0667 45.8794 65.2026 45.502 65.457C44.9823 65.8086 44.6868 66.6691 44.5402 67.2707C44.3935 67.8724 44.7062 68.3016 44.0506 68.5798C43.5253 68.8164 42.9349 68.8667 42.3771 68.7221C42.1582 68.6362 41.9218 68.6036 41.6878 68.6273C41.4538 68.6509 41.2287 68.73 41.0314 68.858C40.7862 69.0187 40.5007 69.1069 40.2076 69.1125C40.0382 69.1096 39.8726 69.1623 39.7359 69.2623C39.5992 69.3624 39.499 69.5044 39.4506 69.6667C39.3385 70.0355 39.2738 70.7105 39.0624 71.0297C38.8144 71.3542 38.5243 71.6443 38.1998 71.8923C37.5528 72.4336 36.839 72.7722 36.1208 73.1863C35.5127 73.54 34.6112 73.5249 33.947 73.348C33.7396 73.2793 33.5149 73.2848 33.3111 73.3635C33.1073 73.4421 32.9372 73.5891 32.8299 73.7793C32.6315 74.1071 32.6293 74.5104 32.4568 74.8576C32.2605 75.2523 31.2987 75.5779 31.055 75.9359C30.38 76.956 31.5575 77.7734 32.2411 78.6166L32.2907 78.677C32.5629 78.9648 32.8852 79.2009 33.2418 79.3735C33.6558 79.6194 34.1993 79.7768 34.3826 80.2081C34.5983 80.7279 34.484 80.8551 34.5314 81.4223C34.5302 81.7031 34.4843 81.9819 34.3956 82.2483C34.3538 82.3973 34.33 82.5508 34.3244 82.7055C34.3493 83.2281 34.4488 83.7444 34.6198 84.2388C34.7686 84.517 34.9218 84.7952 35.077 85.0713C35.4652 85.7571 35.9979 85.8067 36.701 85.5802C37.404 85.3538 38.1588 85.5802 38.836 85.8584C39.8302 86.2574 40.6065 88.1854 41.7409 87.7519C42.6855 87.3896 44.0743 87.2365 45.0923 87.1955C46.3862 87.1416 47.7535 87.2106 48.9439 87.8058C49.5758 88.1229 50.2789 88.9618 50.9431 88.3018L56.8284 82.2397C57.1239 81.9464 57.6415 81.4978 57.4754 81.1139L56.8996 79.7768C56.8 79.545 56.79 79.2845 56.8716 79.0457L56.919 78.9013C56.9996 78.6649 57.1647 78.4667 57.3827 78.3449L57.8765 78.0688C58.0585 77.9678 58.2049 77.8132 58.296 77.6261C58.3871 77.439 58.4183 77.2284 58.3855 77.0229L58.5451 75.3795Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GG,
  specialCity: false,
  path: "M35.3617 88.179C35.3444 88.207 35.3272 88.4486 35.3121 88.4723L34.7966 89.1947C34.6198 89.4406 34.3826 89.6023 34.581 89.8741C34.8743 90.2752 35.6852 90.8186 35.9396 91.25C36.9597 92.9903 37.2336 92.1493 37.0826 94.2369C36.9793 95.5618 36.508 96.8316 35.7218 97.9031C35.0748 98.7916 34.072 99.1215 33.4833 100.019C32.7889 101.078 32.5452 102.551 32.6207 103.793C32.7565 105.772 33.8025 107.082 34.9325 108.589C36.0108 110.014 36.9015 111.567 38.7173 112.13C40.5828 112.706 42.4073 113.189 42.7329 115.492C42.9486 116.974 42.8235 117.692 43.5438 119.027C44.2499 120.396 45.0423 121.718 45.916 122.986C46.9814 124.479 47.1043 128.637 48.6894 127.556C50.9905 125.988 54.3634 124.878 56.3216 124.854C60.8289 124.798 65.4936 122.749 70.0828 125.089C71.2215 125.669 73.4946 126.316 74.6419 125.753C75.0732 125.538 75.4226 125.173 75.8043 124.871C76.4513 124.369 77.191 124.037 77.8724 123.597C78.6143 123.12 79.2009 122.275 79.9816 121.861C80.8636 121.395 81.97 121.104 82.8995 120.642C84.4565 119.866 86.1344 118.716 87.7755 118.19C89.3283 117.696 90.6179 117.392 92.0671 116.534C93.5164 115.676 94.5537 114.328 95.9641 113.383C97.4392 112.395 96.4537 113.004 97.7347 111.774C98.1444 111.382 98.542 110.977 98.9273 110.56C98.9531 110.534 98.2544 109.316 98.194 109.169C97.5212 107.53 96.7534 105.378 98.5067 98.1705C99.0955 95.7508 99.8568 93.536 100.029 91.0537C100.18 88.8713 100.18 86.0634 100.18 83.8593C100.18 82.6171 99.3435 82.0198 98.3234 81.5518C97.0568 80.9604 95.8262 80.2951 94.6378 79.5591C92.0369 77.9718 89.7208 76.3652 87.8855 73.8916C86.8266 72.4639 87.1544 71.5905 86.5915 69.9644C86.2443 68.4828 85.3882 66.0308 85.5564 64.8015C85.7354 63.5076 86.2034 63.1086 86.6519 61.834C87.1695 60.3352 87.879 59.2591 88.2306 57.7624C88.608 56.1622 88.1421 54.4887 86.6908 53.7749C85.4184 53.1494 83.7319 53.2379 83.0375 51.849C82.6428 51.0619 82.6709 49.8434 82.3452 48.9786C81.9721 47.9909 81.2454 45.9723 80.456 45.2563C78.9874 43.9214 77.3031 44.2255 75.4743 43.8265C73.8475 43.5123 72.2917 42.9043 70.8829 42.0322C68.2217 40.4126 66.4986 38.2991 64.5663 35.9183C64.1522 35.4071 63.7209 34.8831 63.1321 34.5898C61.7541 33.9018 59.8821 34.4194 58.4264 34.5208C56.8176 34.6308 54.0335 33.298 52.6921 32.416C52.4141 32.2498 52.1722 32.0298 51.9804 31.769C51.9565 31.7333 51.9356 31.6958 51.9178 31.6568C46.8499 32.045 44.2512 33.1923 39.7353 35.804C38.798 36.3137 37.9037 36.8986 37.0611 37.553C36.2847 38.1999 35.8706 39.0367 35.1913 39.7096C33.6817 41.2192 32.0405 42.112 30.8781 44.0227C29.4548 46.354 27.4276 48.1203 25.4349 49.9728C24.4925 50.8527 24.9151 52.1984 24.9497 53.3155C24.9906 54.5534 24.5787 55.5648 24.0352 56.6712C23.4141 57.9263 23.0217 59.1534 22.3617 60.2446C21.8772 61.0632 21.2136 61.7614 20.4208 62.2869C19.3554 62.9943 17.9041 63.4364 16.6554 63.6671C15.5879 63.8634 14.5333 63.6197 13.483 64.0553C12.3638 64.519 12.1697 65.3644 12.1309 66.4427C12.0554 68.3987 13.9489 68.1895 14.9603 69.2614C16.0149 70.3828 16.4484 71.6509 17.7186 72.6213C19.5733 74.036 21.3029 73.1713 23.4659 73.2014L27.1839 72.8284C27.5548 72.7917 28.7819 71.6465 29.0191 71.9334L30.3325 73.8225C30.4067 73.9237 30.514 73.9957 30.6357 74.026C30.7574 74.0564 30.8859 74.0431 30.9989 73.9886L31.2146 73.8829C31.4564 73.7614 31.6601 73.5756 31.8033 73.3459C31.8961 73.1971 31.9454 73.0253 31.9456 72.8499C31.9456 72.1275 31.6523 70.827 32.8643 71.1397C33.4013 71.2778 33.9771 72.2827 34.5702 72.2525C35.1465 72.2421 35.7131 72.1028 36.2286 71.8449L36.3904 71.7501C36.9253 71.3661 37.3675 70.8673 37.6843 70.29C37.9841 69.8027 38.0272 69.3972 38.0768 68.8581C38.1264 68.3189 38.4305 67.8294 39.2263 67.8725L40.0889 67.5986C40.5202 67.2988 40.9041 67.5425 41.3139 67.5555C41.7127 67.5634 42.1089 67.49 42.4784 67.3398C43.1038 67.081 43.2117 66.6928 43.3562 66.117C43.5007 65.5412 43.7745 64.9525 44.2684 64.6247C44.6392 64.4021 45.0433 64.2405 45.4653 64.1459C46.494 63.8634 53.876 62.0152 54.0442 63.8656L55.0557 72.4919C55.0837 72.7788 55.2412 73.471 55.487 73.6263L55.5733 73.6824C55.6927 73.7588 55.8279 73.8072 55.9687 73.824C56.1095 73.8408 56.2522 73.8256 56.3863 73.7794L58.2776 73.1324C58.4071 73.088 58.5447 73.0723 58.6808 73.0865C58.8169 73.1007 58.9483 73.1444 59.0658 73.2146C59.1832 73.2849 59.284 73.3799 59.3609 73.4931C59.4378 73.6063 59.4891 73.7349 59.5112 73.87L59.5651 74.1956C59.6298 74.5903 60.7318 75.4141 60.3803 75.606L60.3415 75.8627C60.1366 75.977 59.9792 77.4564 59.9102 77.6785L59.8627 77.8122C59.7872 78.0279 58.5019 78.7115 58.5968 78.9272L59.1424 80.825C59.2977 81.183 59.0023 82.2484 58.7111 82.5222L51.5944 89.7382C50.9646 90.355 49.6685 89.57 49.069 89.2745C47.9368 88.7181 46.4315 88.6556 45.1871 88.7052C44.0161 88.7938 42.8617 89.0359 41.7538 89.4255C40.6755 89.8309 39.7439 88.0431 38.7993 87.6722C36.8325 86.898 37.4018 86.9174 36.5651 87.1805C36.0752 87.389 35.657 87.736 35.3617 88.179V88.179Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].IC,
  specialCity: true,
  path: "M33.7658 85.6018L32.722 83.8226C32.6137 83.638 32.5605 83.4262 32.5689 83.2123V83.0872C32.5822 82.8949 32.6511 82.7105 32.7673 82.5567C32.8649 82.42 32.9312 82.2635 32.9614 82.0983C32.9915 81.9331 32.9849 81.7632 32.9418 81.6009C32.8987 81.4386 32.8204 81.2878 32.7123 81.1592C32.6042 81.0307 32.4691 80.9276 32.3166 80.8573L31.3202 80.3979L31.2836 80.426L31.165 80.2793L31.0614 80.1995L29.5475 78.1011L29.0234 75.6491C28.8713 75.2667 28.6064 74.9395 28.264 74.7111C27.9216 74.4827 27.5178 74.3638 27.1062 74.3702H27.0286L22.3639 75.3989L21.5746 75.4787C21.3475 75.5006 21.1325 75.5909 20.9578 75.7375L20.423 76.1861C20.2881 76.298 20.181 76.4395 20.1099 76.5996C20.0388 76.7597 20.0057 76.9341 20.0132 77.1091L20.0779 78.636C20.09 78.9162 20.2048 79.1822 20.4005 79.3831C20.5963 79.5839 20.8591 79.7057 21.1389 79.7251C22.0296 79.7811 23.1058 79.4814 23.5479 80.4497C23.99 81.418 23.8541 82.7163 23.3322 83.6199C23.2077 83.8368 23.0586 84.0387 22.888 84.2216C22.3534 84.805 21.6101 85.1538 20.8198 85.192C19.9032 85.2179 19.6854 84.9332 19.0945 84.4243C18.7149 84.0986 18.2815 84.1547 17.82 84.172C17.6234 84.1827 17.4329 84.2436 17.2666 84.3488C17.1002 84.454 16.9635 84.5999 16.8695 84.7728C16.7755 84.9458 16.7273 85.1398 16.7294 85.3366C16.7316 85.5334 16.784 85.7264 16.8818 85.8972C17.1428 86.3393 17.5655 86.3501 17.9364 86.6154C18.4195 86.9561 18.564 87.6333 18.633 88.1919C18.7236 88.9251 18.3634 89.6648 18.4885 90.4024C18.6438 91.3124 19.5668 91.4958 20.3108 91.8128C20.8207 92.0475 21.367 92.1934 21.9261 92.2441C24.2293 92.4403 25.808 91.4591 27.5634 90.191L29.2283 88.9768C29.8214 88.5455 30.3648 88.0754 31.1002 87.8986C31.2369 87.8531 31.3838 87.8482 31.5231 87.8846C31.6625 87.921 31.7883 87.997 31.8853 88.1034C32.088 88.2997 32.3166 88.0775 32.5948 87.8317L32.7134 87.7282L33.5221 87.023C33.7202 86.8504 33.8525 86.6147 33.8969 86.3558C33.9413 86.0968 33.895 85.8305 33.7658 85.6018V85.6018Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].BS,
  specialCity: true,
  path: "M184.352 241.687C184.443 241.558 184.533 241.431 184.63 241.304C184.921 240.918 185.251 240.454 185.1 239.995C184.975 239.617 184.572 239.417 184.205 239.257C183.694 239.041 183.17 238.826 182.679 238.556C181.6 237.972 178.76 236.947 177.602 236.516C176.765 236.205 176.092 236.619 175.7 237.394C175.633 237.534 175.573 237.678 175.521 237.825C175.232 238.567 174.798 239.6 174.138 240.083C173.584 240.486 172.832 240.786 172.23 241.144C170.802 242.007 169.799 242.837 168.415 243.758C166.77 244.815 165.251 246.055 163.886 247.454C163.088 248.3 162.547 249.352 161.757 250.204C161.485 250.521 161.164 250.791 160.806 251.006C160.22 251.325 159.333 251.006 158.939 251.629C158.029 253.094 158.963 254.841 159.666 256.031C160.341 257.176 162.191 258.483 162.715 259.697C163.058 260.489 163.25 261.248 163.877 261.873C164.505 262.499 166.015 262.54 166.897 262.596C167.897 262.66 168.928 261.709 169.75 261.215C170.085 260.992 170.447 260.812 170.828 260.681C171.23 260.577 171.645 260.533 172.06 260.549C174.02 260.549 175.769 261.181 177.677 261.435C178.348 261.526 179.118 261.67 179.759 261.373C180.276 261.133 180.837 260.394 180.593 259.799C180.516 259.635 180.407 259.489 180.274 259.367C179.935 259.056 179.542 258.809 179.114 258.64C178.381 258.346 177.673 257.993 176.998 257.584C176.511 257.277 175.793 256.853 175.655 256.242C175.417 255.199 177.015 255.138 177.531 254.856C178.002 254.623 178.444 254.334 178.844 253.993C179.707 253.193 179.998 251.563 180.425 250.493L182.234 245.964C182.827 244.474 183.446 243.001 184.352 241.687Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].DG,
  specialCity: true,
  path: "M158.32 189.621C157.772 187.885 156.856 187.145 155.663 186.895C154.884 186.733 153.989 186.513 153.004 186.63C151.479 186.848 150.02 187.397 148.729 188.238C146.722 189.66 147.241 191.368 146.06 193.274C145.335 194.443 144.334 195.463 143.094 195.92C142.094 196.262 141.076 196.55 140.045 196.783C138.016 197.283 137.701 198.575 138.611 200.488C139.655 202.679 140.782 204.467 139.926 207.037C139.525 208.247 138.859 209.343 138.481 210.563C138.148 211.666 138.056 212.827 138.212 213.968C138.367 215.109 138.767 216.203 139.383 217.175C140.013 218.142 140.908 218.968 141.986 219.203C144.837 219.822 145.734 216.83 146.868 214.842C147.985 212.886 149.715 211.98 151.438 210.779C152.84 209.802 154.77 208.217 155.892 206.897C159.064 203.151 159.687 198.105 159.146 193.166C158.986 191.96 158.71 190.773 158.32 189.621V189.621Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GJ,
  specialCity: true,
  path: "M60.6046 256.132C59.7613 255.476 59.0118 254.708 58.3769 253.848C57.6911 252.96 57.0225 251.347 55.789 251.163C55.0579 251.056 54.3246 251.295 53.6324 251.565C52.3384 252.071 51.3874 252.792 49.9662 252.938C48.624 253.075 47.2691 252.868 46.0282 252.339C45.8077 252.232 45.5791 252.144 45.3446 252.074C44.4992 251.858 43.6646 252.289 43.1168 252.904C42.6645 253.417 42.248 253.961 41.8703 254.532C41.7105 254.808 41.5123 255.06 41.2816 255.28C41.053 255.474 40.7748 255.595 40.5289 255.768C39.373 256.568 39.4636 258.621 39.2695 259.902L38.8058 262.988C38.4996 265.035 42.2456 264.332 43.2786 264.452C44.717 264.623 45.9765 265.425 47.072 266.326C47.9476 267.045 48.4371 268.42 49.7268 268.453C52.994 268.535 55.3512 263.745 58.7715 265.328C58.9117 265.393 59.0476 265.466 59.1899 265.524C59.633 265.718 60.1288 265.755 60.5956 265.629C61.0625 265.503 61.4726 265.222 61.7584 264.832C62.651 263.713 63.2659 262.399 63.5527 260.998C63.7684 259.954 63.9646 258.379 63.0869 257.562C62.7138 257.215 62.2242 257.047 61.7563 256.829C61.3503 256.635 60.9645 256.402 60.6046 256.132V256.132Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].DJ,
  specialCity: true,
  path: "M85.3753 165.614C85.3334 165.506 85.2851 165.401 85.2308 165.299C85.1617 165.163 85.082 165.036 85.0022 164.906C84.4177 163.955 83.7966 162.991 83.3028 161.986C83.1108 161.596 82.4897 160.356 82.1015 160.119C81.364 159.666 80.0571 159.28 79.3389 159.599C78.7933 159.84 77.5943 161.208 77.2039 161.654C76.3003 162.696 74.2257 163.017 73.4385 163.021C72.9124 162.995 72.3912 162.907 71.8858 162.758C71.5148 162.67 70.8549 162.42 70.5012 162.644C70.1476 162.868 70.0936 163.269 70.0354 163.623C69.9664 164.054 69.7507 164.891 69.6623 165.318C69.4833 166.166 69.4467 167.043 69.3086 167.893C69.1404 169.015 68.9248 170.138 69.5243 171.264C69.7033 171.592 69.4402 173.42 69.5049 173.796C69.589 174.296 69.9513 175.642 70.4128 176.168C71.3164 177.223 72.2589 177.822 73.4622 178.642C74.3119 179.22 75.3363 179.828 76.3284 179.871C77.6827 179.931 79.0845 179.871 80.3655 179.317C81.3295 178.885 82.0304 178.484 82.9534 177.984C83.9239 177.462 83.9497 175.29 84.1007 174.318C84.2797 173.168 83.8851 171.773 83.9325 170.356C83.9584 169.618 84.4824 168.583 84.9418 168.01C85.2278 167.689 85.4197 167.295 85.4962 166.873C85.5727 166.45 85.5308 166.014 85.3753 165.614V165.614Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].US,
  specialCity: true,
  path: "M194.341 216.938C194.077 216.559 193.744 216.232 193.36 215.974C192.188 215.245 190.796 214.952 189.429 215.146C187.348 215.42 185.357 214.56 183.433 213.9C182.463 213.566 181.472 213.296 180.466 213.091C179.532 212.903 178.635 213.438 177.824 213.885C176.806 214.443 176.314 216.212 175.536 217.012C174.757 217.812 172.062 219.36 171.076 219.977C170.213 220.51 167.541 220.042 167.481 221.215C167.421 222.388 169.873 225.118 170.578 226.018L173.813 230.156C174.414 230.928 175.016 231.699 175.62 232.468C176.112 233.098 176.683 234.247 177.47 234.521C178.518 234.883 179.95 234.612 180.843 235.351C181.238 235.677 181.52 236.022 181.973 236.315C182.62 236.723 184.969 237.131 185.605 237.54C185.987 237.805 186.4 238.022 186.834 238.187C188.316 238.694 189.703 237.732 189.623 236.11C189.595 235.535 189.37 234.978 189.358 234.385C189.34 233.421 189.358 232.444 189.435 231.491C189.496 230.667 189.588 229.843 189.713 229.026C189.8 228.472 189.664 227.495 190.382 227.322C191.245 227.107 191.596 228.588 192.519 228.634C193.597 228.683 194.344 228.03 194.406 226.971C194.479 225.726 194.406 224.45 194.792 223.268C194.956 222.776 195.2 222.31 195.338 221.808C195.698 220.514 195.301 218.439 194.587 217.279C194.51 217.173 194.428 217.059 194.341 216.938Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].SJ,
  specialCity: true,
  path: "M69.5027 144.688C68.7005 144.725 67.4712 144.619 66.7876 145.022C66.1039 145.426 64.8833 146.45 64.6892 147.267C64.4541 148.262 64.728 149.59 65.3987 150.349C66.6323 151.745 68.3835 153.323 69.3151 155.482C69.8392 156.7 70.691 159.228 70.5638 160.543C70.4624 161.576 73.0395 162.226 74.9309 161.622C75.9358 161.296 77.3161 160.013 77.7344 159.068C77.9501 158.566 78.6424 157.58 78.6682 157.035C78.9335 151.24 75.4528 146.252 70.8183 144.826C70.3904 144.708 69.9458 144.661 69.5027 144.688V144.688Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GW,
  specialCity: false,
  path: "M185.821 102.324C185.741 102.139 185.646 101.962 185.536 101.794C185.141 101.188 184.458 100.821 183.966 100.284C182.672 98.8735 181.674 97.1676 180.757 95.4898C178.969 92.2204 177.41 88.7159 174.555 86.2057C173.287 85.0907 172.892 82.6969 172.368 81.1463C171.76 79.3369 171.175 77.5211 170.533 75.7246C170.303 75.0396 170.031 74.3698 169.717 73.719C167.686 69.7465 163.914 67.4217 160.591 64.6246C160.563 64.5997 160.536 64.573 160.511 64.5448C145.503 46.7594 130.071 4.66704 129.202 2.27753C129.176 2.20661 129.138 2.14085 129.089 2.08344L127.526 0.230925C127.461 0.15419 127.38 0.093559 127.287 0.0538273C127.195 0.0140956 127.095 -0.00364642 126.995 0.00200207C126.895 0.00765055 126.797 0.0365362 126.71 0.086374C126.623 0.136212 126.549 0.205635 126.493 0.289153L122.113 6.82794L122.093 6.86029C120.817 9.01689 119.708 11.6695 118.041 13.5457C115.917 15.918 114.269 18.8186 111.558 20.6517C109.618 21.9586 107.651 21.9996 105.589 22.7458C103.965 23.3302 103.182 24.0397 101.317 24.1173C99.199 24.2015 97.0748 24.1885 94.957 24.1173C93.2102 24.0634 91.8558 23.3194 90.1306 23.1188C87.1415 22.7716 84.1223 22.8126 81.1225 22.9614C79.1772 23.0385 77.2399 23.2547 75.3255 23.6084C74.4629 23.7745 73.0115 24.374 72.1403 24.2252L72.0432 24.2101L67.1197 23.3647C64.8165 22.9679 62.0754 22.3338 59.7873 23.052C58.6853 23.397 58.034 24.4171 57.2899 25.2603L53.4728 29.5735C53.1471 29.9272 53.2571 30.7769 53.5137 31.1371C53.7056 31.3979 53.9475 31.6179 54.2254 31.784C55.6033 32.6833 57.2322 33.1192 58.8751 33.0284C60.3308 32.927 62.2027 32.4095 63.5807 33.0974C64.1695 33.3907 64.6008 33.9148 65.0149 34.4259C66.9558 36.7981 68.6811 38.9202 71.3315 40.5398C72.8828 41.4836 74.5801 42.1629 76.3542 42.5497C78.183 42.9487 79.8673 42.6446 81.336 43.9796C82.0947 44.713 82.6683 45.6163 83.0095 46.6149C83.3351 47.4776 83.3071 48.6982 83.7018 49.4854C84.3962 50.8742 86.074 51.4263 87.355 52.0582C88.053 52.3876 88.6469 52.9027 89.0718 53.547C89.4966 54.1913 89.7361 54.9401 89.7639 55.7114C89.8696 57.2922 89.3477 58.8407 88.8301 60.3395C88.3988 61.614 87.8446 62.7549 87.3033 63.9539C86.6347 65.4355 87.1286 66.7726 87.4758 68.2542C88.0279 69.8803 88.1228 71.4007 89.2011 72.8283C91.0363 75.3019 93.5682 77.1243 96.169 78.7115C97.3574 79.4475 98.588 80.1129 99.8546 80.7042C100.875 81.1722 101.714 81.7696 101.714 83.0117C101.714 85.2158 101.714 87.3767 101.561 89.5592C101.389 91.9569 101.024 94.3369 100.469 96.6759C99.8383 99.281 99.3915 101.927 99.1322 104.595C98.9815 106.319 99.3842 108.047 100.282 109.527C100.885 110.569 102.32 111.037 103.46 111.17C104.694 111.321 105.809 110.696 106.982 110.36C110.047 109.484 113.042 108.371 116.152 107.653C119.818 106.803 124.032 107.301 127.582 108.423C129.657 109.07 131.464 110.096 133.375 111.106C135.1 112.02 136.452 113.54 138.225 114.423C139.042 114.807 139.882 115.141 140.739 115.423L146.843 117.567C148.305 118.08 149.719 118.99 151.311 118.671C153.869 118.158 155.6 115.561 158.329 115.561C160.302 115.561 162.426 115.346 164.309 115.898C166.368 116.504 168.559 116.665 170.69 116.957C173.125 117.291 175.618 117.623 178.023 117.118C181.98 116.284 183.612 112.374 187.496 111.25C187.579 111.224 187.656 111.181 187.722 111.125C187.788 111.068 187.842 110.999 187.881 110.921C187.919 110.843 187.942 110.758 187.947 110.671C187.952 110.584 187.94 110.497 187.91 110.416C187.341 108.826 187.08 107.181 186.629 105.572C186.338 104.558 186.25 103.318 185.821 102.324Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].CN,
  specialCity: false,
  path: "M90.3225 190.244C90.5575 190.002 90.9695 189.731 91.1657 189.448C92.492 187.434 90.4195 184.755 89.4965 182.901C88.6921 181.288 87.7281 180.337 86.1797 179.715C84.8296 179.174 83.6953 178.877 82.3107 179.612C80.5855 180.529 79.5201 181.122 77.3635 181.178C74.2257 181.253 68.8881 178.064 68.2519 174.63C68.0988 173.806 68.4676 172.53 68.2368 171.727C67.8874 170.567 67.909 169.694 67.9737 168.48C68.0667 167.171 68.2672 165.873 68.5732 164.598C69.2914 161.348 69.6968 157.628 67.0636 154.425C65.9853 153.116 64.3528 151.76 63.6972 150.155C62.6189 147.518 63.7252 145.016 65.3836 144.173C65.7737 144 66.1759 143.855 66.587 143.741C67.3246 143.498 68.4632 143.817 69.1749 143.491C69.6688 143.265 71.4566 143.683 71.9505 143.455C72.798 143.064 75.2565 142.376 75.6641 141.533C76.1105 140.616 76.4944 140.698 77.3657 140.211C77.5716 140.109 77.7637 139.982 77.9371 139.831C79.6883 138.154 76.8287 136.368 75.6059 134.884C74.9201 134.052 74.0833 132.68 73.4752 131.774C72.4637 130.265 72.0302 128.755 70.8398 127.36C69.7289 126.109 68.1719 125.343 66.5029 125.227C64.1306 125.048 61.0877 125.874 58.778 126.178C58.4776 126.216 58.1751 126.237 57.8722 126.238C57.4172 126.238 56.9621 126.223 56.5071 126.215C56.3561 126.215 56.203 126.215 56.052 126.215C55.7491 126.217 55.4467 126.238 55.1463 126.277C52.9185 126.583 50.9711 127.686 49.1402 128.665C48.4501 129.033 47.8786 129.838 46.9836 129.654C46.7494 129.594 46.5296 129.488 46.3366 129.342C45.9053 129.051 45.4891 128.695 45.2885 128.229C44.7968 127.049 44.3957 125.736 43.7314 124.649C43.1621 123.713 42.7178 122.641 41.7711 122.003C40.6453 121.244 38.8467 121.14 37.5291 120.953C36.8821 120.862 36.2351 121.442 35.5881 121.311C33.259 120.832 31.193 119.549 29.0601 118.507C27.5505 117.769 26.7353 118.915 25.4414 119.385C23.8994 119.945 22.1159 119.993 20.5135 120.329C18.454 120.761 16.0084 121.751 14.9064 123.638C14.7187 123.987 14.569 124.356 14.46 124.737C14.4384 124.8 14.419 124.863 14.3996 124.925C14.2141 125.49 14.0049 126.034 13.5219 126.417C13.0995 126.74 12.6449 127.017 12.1654 127.246C11.6888 127.485 11.1992 127.701 10.7334 127.938C10.6585 127.975 10.5864 128.017 10.5177 128.065C9.70469 128.65 10.0454 129.687 9.84271 130.636C9.81227 130.784 9.76601 130.929 9.7047 131.067C9.41571 131.714 8.84205 132.115 8.28134 132.527C8.09372 132.665 7.91041 132.803 7.74004 132.958C5.47777 134.899 4.62376 137.735 4.5871 140.642C4.5501 141.18 4.63716 141.72 4.84158 142.219C5.69343 143.989 8.76873 143.377 10.3344 143.48C11.5205 143.56 12.7455 143.825 13.6685 144.574C15.4865 146.047 15.2126 148.395 15.0315 150.448C14.9862 150.957 15.4736 151.095 15.7518 151.419C16.0972 151.818 16.3032 152.318 16.3384 152.844C16.5037 154.23 16.6015 155.623 16.6317 157.022C16.6727 158.835 17.6194 160.246 18.2772 161.863C19.0708 163.817 19.6703 165.937 20.6494 167.807C21.4215 169.293 23.6686 169.004 24.3803 167.591C24.7534 166.836 24.5032 165.89 24.4105 165.135C24.0922 162.531 23.9373 159.91 23.9468 157.287C23.9335 156.908 23.9705 156.528 24.0568 156.159C24.225 155.559 24.9195 154.347 25.6829 154.475C26.3601 154.585 26.6749 155.486 26.7914 156.051C26.9639 156.897 27.2615 157.714 27.4621 158.557C27.7877 159.924 27.9948 161.318 28.3851 162.655C28.6719 163.645 28.7755 164.54 29.1636 165.501C29.4656 166.245 29.6877 167.513 29.2801 168.253C28.8725 168.993 28.3333 169.616 28.2341 170.503C28.1349 171.389 28.4261 172.422 28.4865 173.354C28.5619 174.481 28.7021 175.812 28.4606 176.918C28.163 178.329 27.8675 179.662 27.8805 181.117C27.8805 181.926 28.1975 182.342 28.7431 182.901C29.6963 183.889 31.0485 184.654 32.1484 185.489C32.5593 185.766 32.9282 186.101 33.2439 186.483C33.6256 186.99 33.8068 187.615 34.0677 188.195C34.7147 189.629 35.4717 191.495 37.0438 191.984C37.4234 192.103 37.8192 192.162 38.217 192.159C38.6076 192.157 38.9963 192.103 39.373 191.999C39.849 191.867 40.3057 191.672 40.7316 191.421C40.988 191.271 41.2343 191.104 41.4692 190.921C42.0234 190.49 42.9788 189.933 43.5028 189.491C43.5934 189.416 43.6861 189.347 43.7832 189.276C44.4582 188.818 45.2001 188.478 45.7241 187.831C46.8369 186.42 46.9404 185.903 47.7535 184.712C48.008 184.341 48.1977 183.91 48.5514 183.619C48.743 183.47 48.9551 183.349 49.1811 183.261C51.7173 182.183 54.702 182.463 57.2123 183.477C58.2794 183.929 59.311 184.461 60.2984 185.068C61.4586 185.758 62.455 186.267 63.805 186.53C65.0688 186.781 66.3713 186.358 67.6459 186.207C69.686 185.967 71.6895 185.241 73.6844 186.183C74.4209 186.558 75.0876 187.056 75.6555 187.656C75.9344 187.927 76.1898 188.222 76.4189 188.536C77.0659 189.47 77.3139 191.023 78.1657 191.771C78.9249 192.437 79.9148 192.564 80.8874 192.784C82.287 193.099 84.0295 193.667 85.2006 192.784C85.5594 192.508 85.9354 192.254 86.3263 192.025C86.5183 191.916 86.718 191.821 86.9237 191.741C87.8747 191.374 88.9444 191.283 89.8092 190.675C89.9929 190.547 90.1647 190.403 90.3225 190.244Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GN,
  specialCity: false,
  path: "M166.556 223.833C166.2 223.21 166.028 222.768 165.441 222.323C165.285 222.19 165.104 222.089 164.908 222.028C164.74 221.998 164.568 221.998 164.399 222.028C162.264 222.028 162.148 222.349 160.302 223.264C157.039 224.877 150.237 224.629 146.5 223.078C143.543 221.851 140.435 218.081 137.78 219.809C137.03 220.296 136.836 221.355 136.1 221.719C135.365 222.084 134.408 222.3 133.666 222.088C132.569 221.753 131.493 221.353 130.444 220.891C128.427 220.061 125.119 219.707 123.044 219.037C122.593 218.896 122.186 218.64 121.865 218.293C120.946 217.286 120.787 217.117 120.948 216.203C121.205 214.67 121.531 212.537 121.149 211.655C120.286 209.668 118.891 208.771 116.997 207.792C115.455 206.994 115.272 206.794 113.633 206.188C111.886 205.541 109.79 205.325 108.259 204.247C107.234 203.537 105.473 201.491 104.254 201.314C102.529 201.066 101.3 203.205 99.8654 204.02C97.7304 205.234 98.5521 206.263 96.6305 207.797C94.709 209.33 93.5056 211.189 92.8263 213.738C92.492 215.002 92.3669 216.309 92.1664 217.598C91.9097 219.248 92.2548 220.199 91.61 221.747C90.6697 224.005 90.0357 225.478 91.3145 227.799C91.6553 228.42 92.1772 228.918 92.5222 229.539C94.0491 232.321 94.2302 235.146 92.5653 237.853C92.3949 238.157 92.1672 238.425 91.8946 238.642C92.3418 240.173 92.8177 241.694 93.3223 243.203C94.5667 246.939 93.7817 250.635 95.2266 254.297C95.7528 255.63 96.3049 257.023 97.5514 257.84C98.5822 258.524 99.8244 258.873 100.691 259.745C101.558 260.616 101.198 261.957 100.983 263.007C100.409 265.811 100.965 268.183 101.315 270.909C101.655 273.583 101.438 276.191 102.572 278.725C103.036 279.762 103.553 280.799 104.338 281.619C104.932 282.23 105.655 282.702 106.454 282.999C108.088 283.596 109.882 283.582 111.507 282.96C114.291 281.882 116.074 279.525 116.967 276.807C117.744 274.448 119.555 273.435 121.983 273.788C123.342 273.982 124.658 274.42 126.016 274.606C128.455 274.94 130.998 274.457 133.349 275.151C134.427 275.466 135.415 276.014 136.482 276.339C138.423 276.937 140.532 276.771 142.555 276.493C145.395 276.102 148.41 275.401 150.349 273.286C152.639 270.788 152.937 266.098 150.31 263.698C149.385 262.85 148.197 261.886 147.901 260.603C147.709 259.77 148.391 258.852 148.419 257.993C148.453 257.021 148.106 256.072 148.203 255.093C148.363 253.432 149.713 253.279 151.035 253.915C152.452 254.605 153.97 256.85 155.717 255.304C156.702 254.441 156.364 253.182 156.413 252.002C156.416 251.81 156.435 251.619 156.472 251.431C156.6 250.962 156.896 250.556 157.304 250.292C157.653 250.052 158.037 249.87 158.443 249.751C158.747 249.665 159.09 249.684 159.366 249.535C159.709 249.328 160.016 249.068 160.278 248.765C161.035 247.948 161.553 246.939 162.318 246.13C163.612 244.767 163.595 244.698 165.152 243.663C166.48 242.781 167.856 241.972 169.226 241.157C169.802 240.814 170.951 240.096 171.486 239.708C174.684 237.37 175.491 234.747 173.642 232.375C173.039 231.605 172.249 231.135 171.648 230.363C170.569 228.985 169.707 228.036 168.628 226.656C168.257 226.181 167.684 225.761 167.371 225.263C167.061 224.809 166.789 224.331 166.556 223.833V223.833Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GB,
  specialCity: false,
  path: "M200.442 187.262C200.327 187.04 200.169 186.843 199.979 186.681C198.793 185.715 196.947 187.302 196 188.148C194.837 189.183 189.53 192.748 190.315 188.364C190.686 186.298 191.939 185.051 191.557 182.782C190.859 178.616 191.879 173.94 191.879 169.722C192.027 165.624 192.978 160.699 192.336 156.679C191.618 152.178 192.726 147.06 193.093 142.577C193.457 138.154 192.853 136.426 192.068 132.152C191.387 128.445 191.286 124.617 191.139 120.871C191.025 117.903 190.546 114.36 188.12 112.35C188.088 112.446 188.033 112.533 187.961 112.603C187.888 112.674 187.8 112.726 187.703 112.755C183.822 113.888 182.187 117.573 178.229 118.408C175.823 118.913 173.33 118.58 170.897 118.246C168.741 117.98 166.608 117.554 164.516 116.972C162.622 116.415 160.509 116.851 158.536 116.851C156.562 116.851 154.94 118.455 153.342 119.424C151.52 120.528 149.583 121.112 147.554 121.727C146.351 122.091 145.13 122.462 144.067 123.135C143.454 123.523 142.836 124.088 142.232 124.533C141.564 125.013 140.948 125.563 140.396 126.174C139.806 126.832 139.37 127.614 139.122 128.462C138.906 129.234 139.057 129.57 139.195 130.33C139.312 130.977 139.715 131.498 139.771 132.154C139.852 133.203 139.713 134.258 139.366 135.251C139.005 136.297 138.274 137.772 137.336 138.423C136.258 139.163 134.237 139.07 133.023 138.896C131.583 138.661 130.202 138.148 128.958 137.386C128.207 136.955 127.151 135.846 126.187 136.092C125.729 136.206 125.585 136.666 125.108 136.791C124.595 136.927 124.006 136.707 123.508 136.592C122.561 136.377 121.136 135.963 120.211 136.245C119.798 136.353 119.414 136.548 119.083 136.817C118.708 137.149 117.916 137.99 117.754 138.464C117.323 139.728 117.323 141.052 117.304 142.396C117.289 144.432 115.175 144.253 113.704 144.984C112.641 145.512 112.309 146.819 111.733 147.839C111.405 148.415 111.483 149.07 111.19 149.661C110.78 150.479 109.557 150.371 108.936 150.992C107.925 152.003 108.214 153.524 108.117 154.822C107.981 156.625 107.457 158.057 107.661 159.896C107.892 161.958 107.342 164.361 107.342 166.444C107.357 167.777 107.209 169.178 107.787 170.401C108.16 171.188 109.04 171.911 109.797 172.342C112.169 173.658 116.122 172.786 117.409 175.685C118.127 177.305 118.214 179.166 117.841 180.895C117.444 182.707 116.547 184.441 115.468 185.933C115.08 186.47 114.821 187.173 114.519 187.762C114.371 188.066 114.2 188.359 114.006 188.637C113.818 188.88 113.613 189.108 113.392 189.321C112.583 190.138 112.098 190.865 110.888 190.921C110.357 190.947 109.98 191.137 109.484 191.26C108.912 191.409 108.272 191.337 107.687 191.404C106.158 191.579 106.305 193.818 106.219 194.9C106.139 195.922 106.068 196.945 105.975 197.965C105.79 200.035 106.242 200.93 108.255 202.323C109.788 203.389 111.448 204.258 113.197 204.911C114.826 205.517 116.529 205.933 118.071 206.731C119.965 207.71 121.783 209.254 122.654 211.241C123.12 212.258 123.275 213.39 123.101 214.495C122.947 215.409 122.022 215.789 122.939 216.8C123.26 217.148 123.667 217.404 124.118 217.544C126.193 218.215 127.569 218.353 129.577 219.183C130.655 219.63 131.669 220.273 132.799 220.596C133.709 220.855 134.093 220.682 134.893 220.38C135.289 220.237 135.66 220.03 135.99 219.768L136.077 219.699C137.761 218.364 138.041 216.369 136.745 214.652C136.167 213.887 136.799 212.024 136.745 211.254C136.614 209.414 138.039 207.669 138.376 206.699C139.087 204.633 137.729 202.12 136.853 200.361C136.098 198.823 136.791 196.06 138.475 195.659C139.312 195.459 141.494 194.82 142.301 194.529C143.327 194.163 143.728 193.343 144.33 192.405C145.309 190.874 145.093 189.287 146.761 188.146C147.684 187.514 151.367 185.256 152.465 185.126C153.282 185.032 154.024 185.211 154.671 185.342C155.661 185.541 157.716 185.057 158.169 186.451C158.471 187.38 160.47 189.403 160.58 190.378C161.029 194.344 160.729 204.003 158.096 207.012C157.164 208.077 156.211 209.349 155.046 210.134C155.001 210.165 152.57 211.691 152.521 211.726C150.351 213.223 142.456 219.798 148.576 222.757C151.063 223.958 154.015 222.677 156.713 222.668C157.134 222.679 157.556 222.653 157.973 222.591C158.405 222.499 158.829 222.366 159.236 222.194C160.91 221.547 162.355 220.533 163.949 219.742C165.971 218.739 167.207 219.507 169.267 219.032C170.884 218.662 172.64 217.208 173.959 216.246C174.921 215.547 175.163 214.737 175.9 213.816C176.879 212.576 178.704 211.43 180.283 211.471C182.918 211.54 184.404 212.168 186.608 213.397C189.875 215.222 195.234 212.013 196.614 208.884C198.249 205.174 198.34 202.198 198.702 198.226C198.827 196.837 199.241 196.099 199.78 194.775C200.639 192.584 201.674 189.515 200.442 187.262Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].JN,
  specialCity: false,
  path: "M99.0372 264.312C99.2529 263.262 99.6044 261.916 98.7461 261.049C97.8878 260.182 96.637 258.966 95.6061 258.282C94.3704 257.465 93.8075 256.072 93.2813 254.737C92.1491 251.867 93.1368 240.37 89.4361 240.478C86.322 240.568 84.504 240.355 81.3446 240.195C79.1599 240.087 76.9408 241.825 74.8748 242.205C73.4217 242.479 71.9324 242.504 70.471 242.278C68.7975 242.063 67.2361 242.973 65.5108 242.947C63.695 242.919 61.8986 242.44 60.2207 241.772C57.1497 240.547 54.7538 238.321 52.2823 236.177C51.0768 235.129 49.2156 232.727 47.6025 232.425C46.4056 232.209 45.0146 232.897 43.9104 233.238C43.6357 233.312 43.3691 233.414 43.1146 233.542C42.2865 234.001 41.5813 235.174 41.0831 235.962C40.4361 236.986 40.117 238.211 39.6253 239.311C38.8791 240.978 37.0762 242.186 35.2819 242.874C34.5372 243.12 33.7566 243.241 32.9722 243.232C31.5294 243.279 30.0026 243.232 28.7776 242.464C28.0185 241.989 26.7935 241.278 26.2415 240.572C25.0251 239.018 23.9166 237.316 22.6917 235.796C21.6522 234.502 21.277 234.528 20.6688 235.968C19.2368 239.36 19.7717 241.084 17.6496 244.284C16.9659 245.317 15.8402 245.957 15.2169 246.995C14.0589 248.925 16.5562 251.903 14.3543 253.249C12.5169 254.366 9.35749 252.96 7.68828 252.093C5.33975 250.877 2.93299 252.539 1.23144 254.25C0.0560997 255.429 -0.847512 257.359 1.21203 258.211C2.25798 258.643 2.45854 257.853 3.31902 258.83C4.51809 260.197 3.26511 263.654 4.84589 264.198C7.4187 265.084 10.5609 261.179 12.2214 264.974C13.1294 267.051 10.8542 267.937 10.6385 269.868C10.3215 272.712 11.9325 274.036 13.3364 276.111C14.7101 278.125 13.2501 280.741 12.5298 282.917C11.5184 285.977 12.0489 289.368 10.9965 292.35C10.2417 294.489 8.62424 296.978 6.51725 298.011C3.80857 299.337 1.03519 301.08 2.65911 304.6C3.68133 306.817 5.96516 308.9 8.50132 308.697C10.6859 308.529 13.6448 307.466 15.3852 306.144C17.2204 304.748 18.784 302.404 21.443 302.926C23.4983 303.329 24.2768 304.832 24.4623 306.776C24.6973 309.204 24.3286 310.468 26.0366 312.566C27.2249 314.026 28.7733 314.235 30.6021 313.808C32.2993 313.414 33.9513 312.823 35.6658 312.514C37.3026 312.208 38.7475 313.058 40.255 312.814C44.387 312.141 49.2803 311.928 51.1911 307.91C52.953 304.207 53.4965 300.032 55.4719 296.42C57.2403 293.185 62.938 289.204 62.3859 295.93C62.2436 297.655 60.7987 299.275 61.6311 300.966C62.2781 302.305 63.4815 303.368 64.9976 303.536C66.16 303.664 67.1995 303.014 68.4071 303.176C71.7865 303.629 73.7641 305.234 76.5181 301.947C78.1312 300.021 79.2182 298.712 81.4783 297.306C83.2273 296.228 84.739 295.365 85.1768 295.149C92.1146 291.421 92.1706 284.998 95.2352 278.173C96.1366 276.163 97.0424 275.667 98.1444 273.773C98.6326 272.95 98.9898 272.056 99.2033 271.123C98.8928 268.824 98.5498 266.719 99.0372 264.312ZM65.1033 261.015C64.8207 262.391 63.0955 265.38 62.2156 266.477C61.9335 266.863 61.5285 267.14 61.0675 267.265C60.6065 267.389 60.1169 267.352 59.6794 267.161C59.5392 267.103 59.4034 267.03 59.2654 266.967C55.886 265.403 53.0112 270.133 49.7764 270.053C48.504 270.021 46.9038 268.662 46.039 267.953C44.9132 267.034 43.5529 266.448 42.1118 266.262C41.0917 266.141 36.7354 265.281 37.0395 263.258C37.1905 262.244 37.6239 260.948 37.7771 259.932C37.9668 258.666 37.3177 256.361 38.4585 255.569C38.7022 255.401 38.9783 255.28 39.2026 255.091C39.4305 254.873 39.6265 254.624 39.7849 254.351C40.1579 253.788 42.2455 251.854 42.6919 251.347C43.2311 250.73 44.0571 250.036 44.8917 250.247C45.1233 250.316 45.349 250.403 45.5667 250.508C46.783 251.036 48.6959 251.513 50.0136 251.37C51.4197 251.228 52.3578 250.236 53.6366 249.736C54.316 249.471 55.0427 249.231 55.7652 249.339C56.9772 249.52 57.6371 250.553 58.3143 251.431C58.9613 252.263 61.3465 255.017 62.1962 255.643C62.5532 255.909 62.9353 256.139 63.337 256.331C63.7899 256.546 64.2816 256.712 64.6504 257.053C65.5173 257.868 65.3232 259.984 65.1097 261.015H65.1033Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].JB,
  specialCity: false,
  path: "M104.276 195.109C104.319 194.566 104.293 194.014 104.371 193.472C104.427 193.063 104.64 192.61 104.614 192.178C104.554 191.236 103.519 191.659 102.852 191.702C101.222 191.805 99.6713 191.337 98.0862 191.029C97.2991 190.874 96.2531 190.684 95.4789 190.464C94.7047 190.244 94.0771 189.908 93.2749 189.968C92.3518 190.041 92.0887 191.072 91.2843 191.441C90.3138 191.885 89.3779 192.366 88.3406 192.653C87.3033 192.94 86.5226 193.434 85.6405 194.087C84.4609 194.963 82.7183 194.611 81.3273 194.303C80.3547 194.087 78.0709 193.738 77.3118 193.073C76.4491 192.325 76.4362 190.988 75.7806 190.054C75.5508 189.74 75.2955 189.446 75.0171 189.174C74.3184 188.476 73.5075 187.594 72.8303 187.27C70.8355 186.328 69.6947 187.486 67.6545 187.725C66.38 187.876 64.8509 188.299 63.598 188.049C62.2587 187.785 61.2516 187.277 60.0913 186.586C59.0799 185.987 58.7068 185.407 57.6156 184.967C54.1284 183.559 50.4665 182.896 48.146 186.554C47.4494 187.65 46.921 188.926 45.8341 189.69C44.6307 190.533 43.3777 191.314 42.101 192.038C41.1025 192.605 40.0437 193.365 38.9007 193.559C38.2709 193.667 37.624 193.449 36.9942 193.444C36.1575 193.444 35.7865 193.785 35.2841 194.411C34.6371 195.228 33.0628 197.158 33.6946 198.329C34.4279 199.683 36.4012 199.077 37.514 199.72C40.9429 201.702 36.4076 204.986 34.9735 206.289C33.41 207.71 33.0498 210.171 32.5883 212.131L28.7064 214.743C26.9143 215.948 23.6147 217.255 23.77 219.804C23.9253 222.354 28.6245 221.411 30.2614 221.899C30.9083 222.093 31.702 222.461 31.689 223.143C31.6782 223.727 31.0722 224.087 30.5503 224.348C28.0444 225.601 26.5477 227.152 24.3997 228.948C20.6559 232.084 24.6758 235.778 26.91 238.636C27.4621 239.341 28.0401 240.053 28.7992 240.527C30.0241 241.291 31.551 241.342 32.9938 241.295C33.7782 241.305 34.5588 241.184 35.3035 240.937C37.0977 240.249 38.038 238.61 38.7842 236.943C39.3535 235.671 39.9552 232.794 41.4756 232.373C41.728 232.304 41.9954 232.306 42.2477 232.244C42.7265 232.125 43.1103 231.793 43.5416 231.536C44.3612 231.036 45.3165 230.818 46.2546 230.609C46.7008 230.478 47.1684 230.437 47.6306 230.488C49.2437 230.782 51.1048 233.193 52.3104 234.241C54.7818 236.397 57.3935 238.826 60.4644 240.051C62.1423 240.719 63.9387 241.198 65.7546 241.226C67.4798 241.252 69.0412 240.337 70.7147 240.557C72.1762 240.783 73.6654 240.759 75.1185 240.484C77.1737 240.104 78.3146 238.798 80.51 238.905C83.0749 239.035 85.6412 239.076 88.209 239.028C88.7029 239.028 89.2226 238.998 89.6475 238.744C89.9746 238.518 90.2436 238.218 90.4325 237.868C92.0973 235.159 92.3475 232.336 90.8207 229.554C90.4821 228.933 89.958 228.435 89.613 227.814C88.3341 225.494 88.966 222.942 89.9084 220.684C90.5554 219.136 90.8552 217.322 91.1118 215.672C91.3124 214.378 91.4374 213.085 91.7717 211.812C92.451 209.263 94.062 208.293 96.0073 206.733C97.9525 205.174 97.5298 203.309 99.6735 202.094C101.114 201.275 102.647 200.471 103.987 199.459C103.987 199.082 104.015 198.663 104.058 198.178C104.125 197.145 104.196 196.131 104.276 195.109Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].CB,
  specialCity: false,
  path: "M78.6553 150.459C79.092 151.759 79.4252 153.092 79.6516 154.445C79.7875 155.163 79.8242 155.68 79.8953 156.405C79.9428 156.877 79.5783 157.796 79.8004 158.178C80.0226 158.559 80.5833 158.497 81.0275 158.462C82.2848 158.359 83.1841 158.738 83.6457 159.862C84.1395 161.057 85.0323 162.318 85.6491 163.451C86.1106 164.296 87.2644 166.064 86.2638 167.68C85.2631 169.295 84.6506 170.052 85.1121 172.06C85.4119 173.354 85.0733 175.665 84.9504 176.964C84.9236 177.242 84.9863 177.522 85.1294 177.763C85.2725 178.003 85.4886 178.192 85.7462 178.301C86.8318 178.77 87.8915 179.297 88.9207 179.879C89.8976 180.69 90.2685 181.499 90.7991 182.657C91.1157 183.241 91.4762 183.801 91.8774 184.331C92.3777 185.051 92.5373 186.056 92.8608 186.873C93.0613 187.374 93.1627 188.087 93.5832 188.45C94.5019 189.241 96.555 189.312 97.6657 189.528C100.612 190.104 103.866 190.91 106.859 190.438C108.203 190.222 110.525 189.89 111.712 189.064C112.129 188.733 112.477 188.322 112.734 187.855C113.223 187.087 113.931 186.319 114.422 185.551C115.557 183.779 116.715 181.303 116.825 179.129C116.874 178.354 116.738 177.579 116.428 176.867C114.918 173.505 111.116 175.433 109.083 173.847C107.72 172.782 106.689 171.447 106.249 169.75C105.91 168.439 106.145 167.496 106.165 166.144C106.186 164.835 106.639 163.617 106.544 162.333C106.421 160.671 106.296 159.495 106.506 157.373C106.57 156.726 106.542 156.163 106.695 155.536C106.974 154.406 106.982 153.437 107.002 152.275C107.002 151.533 107.127 150.403 107.687 149.847C108.248 149.29 108.651 149.517 109.318 149.135C110.709 148.337 110.28 147.841 110.886 146.763C111.461 145.743 111.578 144.436 112.641 143.907C114.112 143.176 115.794 143.355 115.809 141.32C115.821 139.982 116.046 138.655 116.475 137.388C116.637 136.914 117.429 136.288 117.804 135.956C118.179 135.624 118.393 135.26 118.837 135.134C119.984 134.807 121.88 134.798 123.042 135.072C123.993 135.288 124.787 135.38 125.699 134.986C126.45 134.66 126.961 134.986 127.754 135.247C130.127 136.053 132.001 137.8 134.593 137.878C135.115 137.91 135.638 137.825 136.122 137.627C137.2 137.142 138.628 135.087 138.723 133.981C138.85 132.452 137.959 131.393 137.645 130.054C137.429 129.072 137.845 127.41 138.212 126.504C138.281 126.333 138.574 126.167 138.66 126.008C140.625 122.326 145.451 120.903 148.85 119.698C147.086 119.079 143.569 118.188 141.805 117.571C140.942 117.271 139.236 116.756 138.427 116.355C136.655 115.473 135.305 113.737 133.577 112.822C131.671 111.813 129.644 110.362 127.569 109.708C124.017 108.587 119.805 108.089 116.139 108.938C113.029 109.656 110.034 110.985 106.969 111.86C105.796 112.197 104.681 113.038 103.447 112.887C102.54 112.777 101.586 112.671 100.929 112.024C100.853 111.946 100.762 111.884 100.661 111.844C100.56 111.803 100.451 111.783 100.343 111.787C100.234 111.79 100.127 111.816 100.029 111.864C99.9304 111.911 99.8432 111.978 99.7727 112.061L99.5829 112.277C99.1969 112.693 98.8 112.883 98.3903 113.275C97.1093 114.504 98.0948 113.896 96.6197 114.884C95.2093 115.829 94.1849 117.168 92.7227 118.035C91.2606 118.902 89.9839 118.982 88.4311 119.475C86.7835 120.002 85.3278 120.935 83.7707 121.712C82.8412 122.173 81.7349 122.464 80.8529 122.93C80.0722 123.344 79.4856 124.19 78.7437 124.666C78.0622 125.098 77.3117 125.654 76.6755 126.157C76.2938 126.458 75.9509 126.823 75.5131 127.039C74.5405 127.515 72.9899 126.957 73.0072 127.99C73.1538 128.225 73.3005 128.462 73.4536 128.695C74.1502 129.773 74.2731 130.705 74.9848 131.766C75.5929 132.672 76.6453 133.828 77.3311 134.66C78.0471 135.523 81.2022 138.973 80.0937 140.039C79.9277 140.198 79.7228 140.737 79.5222 140.849C78.6596 141.337 77.6201 141.255 77.1737 142.171C76.7661 143.017 76.4642 142.84 75.6167 143.23C74.9956 143.517 72.082 143.797 73.404 144.589C75.2134 145.678 77.9026 148.374 78.6553 150.459Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].JJ,
  specialCity: false,
  path: "M241.945 277.018L235.907 277.617C235.833 277.617 235.76 277.635 235.691 277.648C234.065 277.928 215.274 281.314 208.539 288.329C207.157 289.83 206.034 291.552 205.218 293.423C205.029 293.894 204.961 294.405 205.021 294.909C205.082 295.413 205.268 295.894 205.563 296.306L208.928 301.027C209.169 301.372 209.481 301.663 209.843 301.88C210.204 302.096 210.607 302.235 211.026 302.286C211.444 302.336 211.868 302.299 212.271 302.175C212.674 302.051 213.046 301.844 213.364 301.566L213.439 301.497C213.747 301.208 214.112 300.986 214.511 300.846C214.91 300.706 215.334 300.651 215.755 300.684L221.337 301.137C221.584 301.159 221.833 301.148 222.078 301.107C223.269 300.909 227.138 300.307 229.775 300.398C230.261 300.412 230.743 300.309 231.18 300.096C231.617 299.883 231.995 299.568 232.283 299.177L232.885 298.364C233.215 297.919 233.66 297.573 234.173 297.364C234.685 297.156 235.246 297.092 235.792 297.18L237.086 297.385C237.593 297.467 238.113 297.419 238.596 297.245L243.424 295.519C243.808 295.382 244.16 295.169 244.459 294.892C244.758 294.615 244.998 294.28 245.165 293.908C245.79 292.504 246.981 290.16 248.462 288.773C248.77 288.491 249.017 288.148 249.187 287.766C249.357 287.383 249.447 286.97 249.45 286.552V284.915C249.45 284.352 249.293 283.801 248.997 283.322L247.44 280.809C247.267 280.527 247.048 280.276 246.793 280.065C245.695 279.166 242.676 276.77 241.945 277.018Z"
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GB,
  specialCity: false,
  path: 'M245.483 78.2909L244.748 78.4721C244.415 78.5548 244.098 78.6918 243.809 78.8775C242.759 79.5569 239.712 80.7624 239.563 82.1124C239.384 83.7795 242.252 84.5903 243.326 85.261C243.723 85.5138 244.172 85.6712 244.639 85.721C245.107 85.7707 245.579 85.7115 246.02 85.5479C247.461 84.9936 248.392 83.7622 248.931 82.7982C249.226 82.2709 249.36 81.669 249.317 81.0666C249.274 80.4641 249.055 79.8874 248.689 79.4075C248.322 78.9276 247.823 78.5653 247.253 78.3654C246.683 78.1655 246.067 78.1366 245.481 78.2823L245.483 78.2909Z'
}, {
  locationName: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LOCATION"].GB,
  specialCity: false,
  path: 'M259.788 85.1316L259.261 85.261C259.023 85.3207 258.797 85.419 258.591 85.5522C257.918 85.9835 257.206 86.3889 256.563 86.8634C255.429 87.698 255.826 88.4204 256.85 89.2507C257.713 89.943 259.007 90.7604 260.128 90.3484C261.207 89.9538 261.884 89.0351 262.272 88.3299C262.411 88.0741 262.497 87.7931 262.526 87.5036C262.555 87.214 262.526 86.9216 262.44 86.6434C262.276 86.0995 261.909 85.6394 261.416 85.3581C260.922 85.0768 260.339 84.9957 259.788 85.1316V85.1316Z'
}];
var jejuRect = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
  x: "189.5",
  y: "261.5",
  width: "75.4499",
  height: "56.3076",
  rx: "7.5",
  stroke: "#E7E8EA"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 107,
  columnNumber: 25
}, undefined);

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

/***/ }),

/***/ "./src/components/koreaMap/hooks/index.ts":
/*!************************************************!*\
  !*** ./src/components/koreaMap/hooks/index.ts ***!
  \************************************************/
/*! exports provided: useMouseOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouseOver", function() { return useMouseOver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var useMouseOver = function useMouseOver(_ref) {
  _s();

  var ref = _ref.ref,
      handleSetCurrentLocation = _ref.handleSetCurrentLocation;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!ref.current) return;

    var handleMouseover = function handleMouseover(e) {
      if (!e.target.dataset.location) return;
      handleSetCurrentLocation(e.target.dataset.location);
    };

    ref.current.addEventListener('mouseover', handleMouseover);
    return function () {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.removeEventListener('mouseover', handleMouseover);
    };
  }, []);
};

_s(useMouseOver, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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

/***/ }),

/***/ "./src/components/koreaMap/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/koreaMap/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./koreaMap.module.scss */ "./src/components/koreaMap/koreaMap.module.scss");
/* harmony import */ var _koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locationList */ "./src/components/koreaMap/locationList/index.tsx");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map */ "./src/components/koreaMap/map/index.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./src/components/koreaMap/util/index.tsx");



var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_koreaMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a);

var KoreaMap = function KoreaMap(_ref) {
  _s();

  var selectedLocations = _ref.selectedLocations,
      setSelectedLocations = _ref.setSelectedLocations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      currentLocation = _useState[0],
      setCurrentLocation = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    top: 0,
    left: 0
  }),
      namePosition = _useState2[0],
      setNamePosition = _useState2[1];

  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var isSelected = function isSelected(name) {
    return selectedLocations.includes(name);
  };

  var toggleLocation = function toggleLocation() {
    if (!currentLocation) return;

    if (selectedLocations.includes(currentLocation)) {
      setSelectedLocations(selectedLocations.filter(function (location) {
        return location !== currentLocation;
      }));
    } else {
      setSelectedLocations(function (prev) {
        return [].concat(Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [currentLocation]);
      });
    }
  };

  var handleSetCurrentLocation = function handleSetCurrentLocation(value) {
    setCurrentLocation(value);
    handleSetNamePosition(value);
  };

  var handleSetNamePosition = function handleSetNamePosition(value) {
    var _nameRef$current;

    if (!value || !nameRef) return;
    var target = document.querySelector("path[data-location=".concat(value, "]"));
    var cr = target === null || target === void 0 ? void 0 : target.getBoundingClientRect();
    var nameWidth = (_nameRef$current = nameRef.current) === null || _nameRef$current === void 0 ? void 0 : _nameRef$current.getBoundingClientRect().width; // SVG Element는 offsetTop과 같은 상대적 위치를 제공하는 API가 존재하지 않기 때문에,
    // SVG에서의 상대적 위치값을 따로 계산해줘야함

    if (!target) return;
    var newPosition = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getViewPortPosition"])(target);
    if (!cr || !nameWidth || !newPosition) return;
    setNamePosition({
      top: newPosition.top + cr.height / 2 - 40,
      left: newPosition.left + cr.width / 2 - nameWidth / 2
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    onMouseOut: function onMouseOut() {
      return setCurrentLocation(null);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_locationList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isSelected: isSelected,
      toggleLocation: toggleLocation,
      currentLocation: currentLocation,
      handleSetCurrentLocation: handleSetCurrentLocation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_map__WEBPACK_IMPORTED_MODULE_6__["default"], {
      toggleLocation: toggleLocation,
      setCurrentLocation: setCurrentLocation,
      currentLocation: currentLocation,
      namePosition: namePosition,
      handleSetCurrentLocation: handleSetCurrentLocation,
      isSelected: isSelected,
      nameRef: nameRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, _this);
};

_s(KoreaMap, "tAHZ5sgxWfbE7AoRiE6rqBcPtFI=");

_c = KoreaMap;
/* harmony default export */ __webpack_exports__["default"] = (KoreaMap);

var _c;

$RefreshReg$(_c, "KoreaMap");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/koreaMap/koreaMap.module.scss":
/*!******************************************************!*\
  !*** ./src/components/koreaMap/koreaMap.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./koreaMap.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/koreaMap.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./koreaMap.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/koreaMap.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./koreaMap.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/koreaMap.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/koreaMap/locationList/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/koreaMap/locationList/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domain_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @domain/location */ "./src/domain/location.ts");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./src/components/koreaMap/hooks/index.ts");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locationList.module.scss */ "./src/components/koreaMap/locationList/locationList.module.scss");
/* harmony import */ var _locationList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\locationList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_locationList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a);

var Location = function Location(_ref) {
  var isSelected = _ref.isSelected,
      toggleLocation = _ref.toggleLocation,
      currentLocation = _ref.currentLocation,
      locationName = _ref.locationName;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    onClick: function onClick() {
      return toggleLocation();
    },
    className: cx('location', {
      'hovered': currentLocation === locationName
    }, {
      'selected': isSelected(locationName)
    }),
    "data-location": locationName,
    children: _domain_location__WEBPACK_IMPORTED_MODULE_1__["LocationNameMap"][locationName]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_c = Location;

var LocationList = function LocationList(_ref2) {
  _s();

  var isSelected = _ref2.isSelected,
      toggleLocation = _ref2.toggleLocation,
      currentLocation = _ref2.currentLocation,
      handleSetCurrentLocation = _ref2.handleSetCurrentLocation;
  var locationListRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useMouseOver"])({
    ref: locationListRef,
    handleSetCurrentLocation: handleSetCurrentLocation
  });
  var list = _domain_location__WEBPACK_IMPORTED_MODULE_1__["ALL_LOCATIONS"].map(function (locationName) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Location, {
      isSelected: isSelected,
      toggleLocation: toggleLocation,
      currentLocation: currentLocation,
      locationName: locationName
    }, locationName, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: locationListRef,
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: cx('locationList'),
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s(LocationList, "RVJpJXSbZVwHhp96HjEh9adp8+I=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_4__["useMouseOver"]];
});

_c2 = LocationList;
/* harmony default export */ __webpack_exports__["default"] = (LocationList);

var _c, _c2;

$RefreshReg$(_c, "Location");
$RefreshReg$(_c2, "LocationList");

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

/***/ }),

/***/ "./src/components/koreaMap/locationList/locationList.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/koreaMap/locationList/locationList.module.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./locationList.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./locationList.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./locationList.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/locationList/locationList.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/koreaMap/map/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/koreaMap/map/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.module.scss */ "./src/components/koreaMap/map/map.module.scss");
/* harmony import */ var _map_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks */ "./src/components/koreaMap/hooks/index.ts");
/* harmony import */ var _domain_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @domain/location */ "./src/domain/location.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data */ "./src/components/koreaMap/data/index.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\koreaMap\\map\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_map_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var LocationMap = function LocationMap(_ref) {
  _s();

  var isSelected = _ref.isSelected,
      toggleLocation = _ref.toggleLocation,
      currentLocation = _ref.currentLocation,
      handleSetCurrentLocation = _ref.handleSetCurrentLocation;
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useMouseOver"])({
    ref: mapRef,
    handleSetCurrentLocation: handleSetCurrentLocation
  });

  var handleClick = function handleClick(e) {
    var _target$dataset;

    var target = e.target;
    if (!target || !((_target$dataset = target.dataset) !== null && _target$dataset !== void 0 && _target$dataset.location)) return;
    toggleLocation();
  };

  var pathList = _data__WEBPACK_IMPORTED_MODULE_6__["PATH_DATA"].map(function (pathData) {
    var locationName = pathData.locationName,
        specialCity = pathData.specialCity,
        path = pathData.path;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      className: cx({
        'em': specialCity
      }, {
        'hovered': currentLocation === locationName
      }, {
        'selected': isSelected(locationName)
      }),
      "data-location": locationName,
      d: path
    }, path, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    ref: mapRef,
    className: cx('mapWrap'),
    onClick: function onClick(e) {
      return handleClick(e);
    },
    width: "265",
    height: "320",
    viewBox: "0 0 265 320",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [pathList, _data__WEBPACK_IMPORTED_MODULE_6__["jejuRect"]]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(LocationMap, "hpKFSd+HyBiNSTJd1i42dwvpg+Q=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_4__["useMouseOver"]];
});

_c = LocationMap;

var LocationName = function LocationName(_ref2) {
  var toggleLocation = _ref2.toggleLocation,
      setCurrentLocation = _ref2.setCurrentLocation,
      currentLocation = _ref2.currentLocation,
      namePosition = _ref2.namePosition,
      nameRef = _ref2.nameRef;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: nameRef,
    onClick: function onClick() {
      return toggleLocation();
    },
    onMouseEnter: function onMouseEnter() {
      return setCurrentLocation(currentLocation);
    },
    onMouseLeave: function onMouseLeave() {
      return setCurrentLocation(null);
    },
    className: cx('name'),
    style: {
      display: currentLocation ? 'block' : 'none',
      top: "".concat(namePosition.top, "px"),
      left: "".concat(namePosition.left, "px")
    },
    children: _domain_location__WEBPACK_IMPORTED_MODULE_5__["LocationNameMap"][currentLocation]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
};

_c2 = LocationName;

var Map = function Map(_ref3) {
  var toggleLocation = _ref3.toggleLocation,
      setCurrentLocation = _ref3.setCurrentLocation,
      currentLocation = _ref3.currentLocation,
      namePosition = _ref3.namePosition,
      handleSetCurrentLocation = _ref3.handleSetCurrentLocation,
      isSelected = _ref3.isSelected,
      nameRef = _ref3.nameRef;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('mapArea'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mapContents'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LocationMap, {
        isSelected: isSelected,
        toggleLocation: toggleLocation,
        currentLocation: currentLocation,
        handleSetCurrentLocation: handleSetCurrentLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LocationName, {
        toggleLocation: toggleLocation,
        setCurrentLocation: setCurrentLocation,
        currentLocation: currentLocation,
        namePosition: namePosition,
        nameRef: nameRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, _this);
};

_c3 = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c, _c2, _c3;

$RefreshReg$(_c, "LocationMap");
$RefreshReg$(_c2, "LocationName");
$RefreshReg$(_c3, "Map");

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

/***/ }),

/***/ "./src/components/koreaMap/map/map.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/koreaMap/map/map.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./map.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./map.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./map.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/koreaMap/map/map.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/koreaMap/util/index.tsx":
/*!************************************************!*\
  !*** ./src/components/koreaMap/util/index.tsx ***!
  \************************************************/
/*! exports provided: getViewPortPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewPortPosition", function() { return getViewPortPosition; });
var getViewPortPosition = function getViewPortPosition(el) {
  if (!el) return;

  var getVpPos = function getVpPos(el) {
    var _el$parentElement;

    if (!el || !el.parentElement) return;

    if ((el === null || el === void 0 ? void 0 : (_el$parentElement = el.parentElement) === null || _el$parentElement === void 0 ? void 0 : _el$parentElement.tagName) === 'svg') {
      return el.parentElement.getBoundingClientRect();
    }

    return getVpPos(el.parentElement);
  };

  var elPos = el.getBoundingClientRect();
  var vpPos = getVpPos(el);
  return {
    top: elPos.top - vpPos.top,
    left: elPos.left - vpPos.left,
    width: elPos.width,
    bottom: elPos.bottom - vpPos.top,
    height: elPos.height,
    right: elPos.right - vpPos.left
  };
};

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

/***/ }),

/***/ "./src/domain/location.ts":
/*!********************************!*\
  !*** ./src/domain/location.ts ***!
  \********************************/
/*! exports provided: LOCATION, LocationNameMap, ALL_LOCATIONS, getIsAllLocations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION", function() { return LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationNameMap", function() { return LocationNameMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_LOCATIONS", function() { return ALL_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAllLocations", function() { return getIsAllLocations; });
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _LocationNameMap;

var LOCATION;

(function (LOCATION) {
  LOCATION["SO"] = "SEOUL";
  LOCATION["GG"] = "GYEONGGI";
  LOCATION["IC"] = "INCHEON";
  LOCATION["BS"] = "BUSAN";
  LOCATION["DG"] = "DAEGU";
  LOCATION["GJ"] = "GWANGJU";
  LOCATION["DJ"] = "DAEJEON";
  LOCATION["US"] = "ULSAN";
  LOCATION["SJ"] = "SEJONG";
  LOCATION["GW"] = "GANGWON";
  LOCATION["CN"] = "CHUNGNAM";
  LOCATION["GN"] = "GYEONGNAM";
  LOCATION["GB"] = "GYEONGBUK";
  LOCATION["JN"] = "JEONNAM";
  LOCATION["JB"] = "JEONBUK";
  LOCATION["CB"] = "CHUNGBUK";
  LOCATION["JJ"] = "JEJU";
})(LOCATION || (LOCATION = {}));

var LocationNameMap = (_LocationNameMap = {}, Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.SO, '서울특별시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.GG, '경기도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.IC, '인천광역시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.BS, '부산광역시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.DG, '대구광역시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.GJ, '광주광역시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.DJ, '대전광역시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.US, '울산광역시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.SJ, '세종특별자치시'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.GW, '강원도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.CN, '충청남도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.GN, '경상남도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.GB, '경상북도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.JN, '전라남도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.JB, '전라북도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.CB, '충청북도'), Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_LocationNameMap, LOCATION.JJ, '제주특별자치도'), _LocationNameMap);
var ALL_LOCATIONS = Object.values(LOCATION);
_c = ALL_LOCATIONS;
var getIsAllLocations = function getIsAllLocations(locations) {
  var locationSet = new Set(locations);
  return ALL_LOCATIONS.length === locationSet.size;
};

var _c;

$RefreshReg$(_c, "ALL_LOCATIONS");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/koreaMap.tsx":
/*!********************************!*\
  !*** ./src/pages/koreaMap.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var src_components_koreaMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/koreaMap */ "./src/components/koreaMap/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\pages\\koreaMap.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var KoreaMapPage = function KoreaMapPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      selectedLocations = _useState[0],
      setSelectedLocations = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_koreaMap__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selectedLocations: selectedLocations,
        setSelectedLocations: setSelectedLocations
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(KoreaMapPage, "MyA403Dy2TZFVbuACwjFH4m/9i4=");

_c = KoreaMapPage;
/* harmony default export */ __webpack_exports__["default"] = (KoreaMapPage);

var _c;

$RefreshReg$(_c, "KoreaMapPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FkoreaMap&absolutePagePath=C%3A%5CUsers%5Ckj996%5Cproject%5Cnextjs%5Csrc%5Cpages%5CkoreaMap.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9iaW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHMvY29udGVudHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL2tvcmVhTWFwLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9sb2NhdGlvbkxpc3QvbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9tYXAvbWFwLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250ZW50cy9jb250ZW50cy5tb2R1bGUuc2Nzcz8zYzBlIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vbGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvZGF0YS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL2hvb2tzL2luZGV4LnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL2tvcmVhTWFwLm1vZHVsZS5zY3NzP2VhZTEiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL2xvY2F0aW9uTGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2tvcmVhTWFwL2xvY2F0aW9uTGlzdC9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3M/M2UyOCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbWFwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMva29yZWFNYXAvbWFwL21hcC5tb2R1bGUuc2Nzcz9iYjhmIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9rb3JlYU1hcC91dGlsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbi9sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2tvcmVhTWFwLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiQ29udGVudHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiTGF5b3V0IiwiUEFUSF9EQVRBIiwibG9jYXRpb25OYW1lIiwiTE9DQVRJT04iLCJTTyIsInNwZWNpYWxDaXR5IiwicGF0aCIsIkdHIiwiSUMiLCJCUyIsIkRHIiwiR0oiLCJESiIsIlVTIiwiU0oiLCJHVyIsIkNOIiwiR04iLCJHQiIsIkpOIiwiSkIiLCJDQiIsIkpKIiwiamVqdVJlY3QiLCJ1c2VNb3VzZU92ZXIiLCJyZWYiLCJoYW5kbGVTZXRDdXJyZW50TG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VvdmVyIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJsb2NhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiS29yZWFNYXAiLCJzZWxlY3RlZExvY2F0aW9ucyIsInNldFNlbGVjdGVkTG9jYXRpb25zIiwidXNlU3RhdGUiLCJjdXJyZW50TG9jYXRpb24iLCJzZXRDdXJyZW50TG9jYXRpb24iLCJ0b3AiLCJsZWZ0IiwibmFtZVBvc2l0aW9uIiwic2V0TmFtZVBvc2l0aW9uIiwibmFtZVJlZiIsInVzZVJlZiIsImlzU2VsZWN0ZWQiLCJuYW1lIiwiaW5jbHVkZXMiLCJ0b2dnbGVMb2NhdGlvbiIsImZpbHRlciIsInByZXYiLCJ2YWx1ZSIsImhhbmRsZVNldE5hbWVQb3NpdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibmFtZVdpZHRoIiwid2lkdGgiLCJuZXdQb3NpdGlvbiIsImdldFZpZXdQb3J0UG9zaXRpb24iLCJoZWlnaHQiLCJMb2NhdGlvbiIsIkxvY2F0aW9uTmFtZU1hcCIsIkxvY2F0aW9uTGlzdCIsImxvY2F0aW9uTGlzdFJlZiIsImxpc3QiLCJBTExfTE9DQVRJT05TIiwibWFwIiwiTG9jYXRpb25NYXAiLCJtYXBSZWYiLCJoYW5kbGVDbGljayIsInBhdGhMaXN0IiwicGF0aERhdGEiLCJMb2NhdGlvbk5hbWUiLCJkaXNwbGF5IiwiTWFwIiwiZWwiLCJnZXRWcFBvcyIsInBhcmVudEVsZW1lbnQiLCJ0YWdOYW1lIiwiZWxQb3MiLCJ2cFBvcyIsImJvdHRvbSIsInJpZ2h0IiwiT2JqZWN0IiwidmFsdWVzIiwiZ2V0SXNBbGxMb2NhdGlvbnMiLCJsb2NhdGlvbnMiLCJsb2NhdGlvblNldCIsIlNldCIsImxlbmd0aCIsInNpemUiLCJLb3JlYU1hcFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNB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Q0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQiwyREFBMkQsU0FBUztBQUNwRSx5QkFBeUIsU0FBUztBQUNsQztBQUNBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNI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Y2h1bmtzL3BhZ2VzL2tvcmVhTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2godGhpcyAmJiB0aGlzW2FyZ10gfHwgYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KHRoaXMsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHRoaXMgJiYgdGhpc1trZXldIHx8IGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgICAgXCIva29yZWFNYXBcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxca2o5OTZcXFxccHJvamVjdFxcXFxuZXh0anNcXFxcc3JjXFxcXHBhZ2VzXFxcXGtvcmVhTWFwLnRzeFwiKTtcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250ZW50c19jb250ZW50c19fMlJaREEge1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb250ZW50cy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnRzIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250ZW50c1wiOiBcImNvbnRlbnRzX2NvbnRlbnRzX18yUlpEQVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5rb3JlYU1hcF9oaWRkZW5fXzFhM1ZPIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ua29yZWFNYXBfdGV4dEVtcGhhc2lzX18zdHhxciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIldlbWFrZXByaWNlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjNWVjN2MzO1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG59XFxuXFxuLmtvcmVhTWFwX3dyYXBfXzFpSFNBIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcIixcIndlYnBhY2s6Ly9rb3JlYU1hcC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLHNDRU5hO0VGT2IsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNHb0JRO0VIbkJSLG1CQUFBO0FDWEo7O0FBZkE7RUFDRSxhQUFBO0FBa0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0ICdVVEYtOCc7XFxyXFxuXFxyXFxuLy8gdmFyaWFibGVzXFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3BhdGguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi8vIG1peGluc1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi8vIGhpZGRlblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8vIOyXreqygCDqsJXsobBcXHJcXG4udGV4dEVtcGhhc2lzIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LWZhbWlseTogJEZfV0VNQUtFX1BSSUNFO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBjb2xvcjogJENfU0tZXzIwMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IDJweDtcXHJcXG59XCIsXCIuaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4udGV4dEVtcGhhc2lzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2VtYWtlcHJpY2VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1ZWM3YzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbn1cXG5cXG4ud3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cIixcIi8vIGhlYWRlciBoZWlnaHRcXHJcXG4kTUlOX1dJRFRIOiAxMTY4cHg7XFxyXFxuJEhFQURFUl9TRUFSQ0hfQVJFQV9IRUlHSFQ6IDcwcHg7XFxyXFxuJEhFQURFUl9TRUFSQ0hfQVJFQV9NQVhfSEVJR0hUOiA4MnB4O1xcclxcbiRIRUFERVJfTUVOVV9BUkVBX0hFSUdIVDogNDhweDtcXHJcXG4kSEVBREVSX0hFSUdIVDogJEhFQURFUl9TRUFSQ0hfQVJFQV9IRUlHSFQgKyAkSEVBREVSX01FTlVfQVJFQV9IRUlHSFQ7XFxyXFxuJENPTlRFTlRTX1dJRFRIOiAxMTIwcHg7XFxyXFxuJEZPT1RFUl9DT05URU5UX0hFSUdIVDogMTA0cHg7XFxyXFxuJEZPT1RFUl9DT1BZUklHSFRfSEVJR0hUOiA0NnB4O1xcclxcbiRGT09URVJfSEVJR0hUOiAkRk9PVEVSX0NPTlRFTlRfSEVJR0hUICsgJEZPT1RFUl9DT1BZUklHSFRfSEVJR0hUO1xcclxcblxcclxcbi8vIOqzte2GtSDsu7Ttj6zrhIztirgg7IKs7J207KaIXFxyXFxuJFRPUF9OVURHRV9IRUlHSFQ6IDQ4cHg7XFxyXFxuXFxyXFxuLy8gZm9udFxcclxcbiRGX05PVE9fU0FOU19LUjogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XFxyXFxuJEZfTU9OVFNFUlJBVDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiRGX1dFTUFLRV9QUklDRTogJ1dlbWFrZXByaWNlJywgc2Fucy1zZXJpZjtcXHJcXG4kRl9QUkVURU5EQVJEOiBQcmV0ZW5kYXJkLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbi8vIHotaW5kZXhcXHJcXG4kWl9JTkRFWF9CQVNJQzogMTA7XFxyXFxuJFpfSU5ERVhfRklYRUQ6IDEwMDtcIixcIiRDX1dISVRFOiAjZmZmO1xcclxcbiRDX0JMQUNLOiAjMDAwO1xcclxcbiRDX0dVSURFTElORTogIzBmZjtcXHJcXG5cXHJcXG4vLyBKT0JEQSBCTEFDS1xcclxcbiRDX0pPQkRBX0JMQUNLOiAjMTIxNjE5O1xcclxcblxcclxcbi8vIEpPQkRBIFdISVRFXFxyXFxuJENfSk9CREFfV0hJVEU6ICNmOWY5ZmE7XFxyXFxuXFxyXFxuLy8gR1JFRU5cXHJcXG4kQ19HUkVFTl8zMDogI2VmZmRmMztcXHJcXG4kQ19HUkVFTl80MDogI2UwZjllNDtcXHJcXG4kQ19HUkVFTl81MDogI2QwZjVkYTtcXHJcXG4kQ19HUkVFTl82MDogI2MzZjJjZDtcXHJcXG4kQ19HUkVFTl83MDogI2IzZWVjMTtcXHJcXG4kQ19HUkVFTl84MDogI2EyZWJiNDtcXHJcXG4kQ19HUkVFTl85MDogIzkyZTZhMztcXHJcXG4kQ19HUkVFTl8xMDA6ICM2Y2RkODM7XFxyXFxuJENfR1JFRU5fMjAwOiAjNTJjNTY0O1xcclxcbiRDX0dSRUVOXzMwMDogIzQxYWM0ZDtcXHJcXG4kQ19HUkVFTl80MDA6ICMzYzhlNDI7XFxyXFxuJENfR1JFRU5fNTAwOiAjMzc3NTM4O1xcclxcblxcclxcbi8vIFlFTExPV1xcclxcbiRDX1lFTExPV18zMDogI2ZmZmVmMjtcXHJcXG4kQ19ZRUxMT1dfNDA6ICNmZmZkZTU7XFxyXFxuJENfWUVMTE9XXzUwOiAjZmVmY2Q4O1xcclxcbiRDX1lFTExPV182MDogI2ZlZmNjYjtcXHJcXG4kQ19ZRUxMT1dfNzA6ICNmZWY5YmQ7XFxyXFxuJENfWUVMTE9XXzgwOiAjZmVmOGIxO1xcclxcbiRDX1lFTExPV185MDogI2ZkZjY5ZTtcXHJcXG4kQ19ZRUxMT1dfMTAwOiAjZmNmMTZjO1xcclxcbiRDX1lFTExPV18yMDA6ICNlN2RhNGI7XFxyXFxuJENfWUVMTE9XXzMwMDogI2Q4Y2EyYztcXHJcXG4kQ19ZRUxMT1dfNDAwOiAjYjNhODJhO1xcclxcbiRDX1lFTExPV181MDA6ICM5MzhhMjk7XFxyXFxuXFxyXFxuLy8gU0tZXFxyXFxuJENfU0tZXzMwOiAjZjNmZGZjO1xcclxcbiRDX1NLWV80MDogI2U5ZjlmOTtcXHJcXG4kQ19TS1lfNTA6ICNkY2Y3ZjY7XFxyXFxuJENfU0tZXzYwOiAjZDFmNWYzO1xcclxcbiRDX1NLWV83MDogI2M1ZjFlZjtcXHJcXG4kQ19TS1lfODA6ICNiYmVmZWQ7XFxyXFxuJENfU0tZXzkwOiAjYWZlY2VhO1xcclxcbiRDX1NLWV8xMDA6ICM3YWRlZGE7XFxyXFxuJENfU0tZXzIwMDogIzVlYzdjMztcXHJcXG4kQ19TS1lfMzAwOiAjNDZiMmFmO1xcclxcbiRDX1NLWV80MDA6ICM0MDkzOTA7XFxyXFxuJENfU0tZXzUwMDogIzNhNzk3NztcXHJcXG5cXHJcXG4vLyBMSU1FXFxyXFxuJENfTElNRV8zMDogI2Y5ZmZlYjtcXHJcXG4kQ19MSU1FXzQwOiAjZjNmZWRmO1xcclxcbiRDX0xJTUVfNTA6ICNlZGZkZDI7XFxyXFxuJENfTElNRV82MDogI2U3ZmNjNjtcXHJcXG4kQ19MSU1FXzcwOiAjZTJmYmI5O1xcclxcbiRDX0xJTUVfODA6ICNkY2ZhYWQ7XFxyXFxuJENfTElNRV85MDogI2QwZjg5NDtcXHJcXG4kQ19MSU1FXzEwMDogI2JmZWY3YjtcXHJcXG4kQ19MSU1FXzIwMDogI2E0ZDk1YTtcXHJcXG4kQ19MSU1FXzMwMDogIzhlYzkzZDtcXHJcXG4kQ19MSU1FXzQwMDogIzc5YTgzNztcXHJcXG4kQ19MSU1FXzUwMDogIzY2OGEzMztcXHJcXG5cXHJcXG4vLyBQVVJQTEVcXHJcXG4kQ19QVVJQTEVfMzA6ICNmNWYyZmQ7XFxyXFxuJENfUFVSUExFXzQwOiAjZjJlZGZjO1xcclxcbiRDX1BVUlBMRV81MDogI2VlZTdmYztcXHJcXG4kQ19QVVJQTEVfNjA6ICNlOGUwZmI7XFxyXFxuJENfUFVSUExFXzcwOiAjZTBkNWY5O1xcclxcbiRDX1BVUlBMRV84MDogI2Q1YzdmNztcXHJcXG4kQ19QVVJQTEVfOTA6ICNjN2I0ZjQ7XFxyXFxuJENfUFVSUExFXzEwMDogI2I0OWJmMDtcXHJcXG4kQ19QVVJQTEVfMjAwOiAjOTM3NWRiO1xcclxcbiRDX1BVUlBMRV8zMDA6ICM3NzUzY2E7XFxyXFxuJENfUFVSUExFXzQwMDogIzYyM2ZiMztcXHJcXG4kQ19QVVJQTEVfNTAwOiAjNTUzYjk0O1xcclxcblxcclxcbi8vIEJMVUVcXHJcXG4kQ19CTFVFXzMwOiAjZTFlN2Y4O1xcclxcbiRDX0JMVUVfNDA6ICNjM2QxZWY7XFxyXFxuJENfQkxVRV81MDogI2E3YjllNztcXHJcXG4kQ19CTFVFXzYwOiAjOGJhM2RmO1xcclxcbiRDX0JMVUVfNzA6ICM3MThkZDc7XFxyXFxuJENfQkxVRV84MDogIzU4NzhjZjtcXHJcXG4kQ19CTFVFXzkwOiAjMzE1ZmM3O1xcclxcbiRDX0JMVUVfMTAwOiAjMmI1M2FlO1xcclxcbiRDX0JMVUVfMjAwOiAjMzA0YTg5O1xcclxcbiRDX0JMVUVfMzAwOiAjMmM0MTcwO1xcclxcbiRDX0JMVUVfNDAwOiAjMjkzODVkO1xcclxcbiRDX0JMVUVfNTAwOiAjMjUzMTRkO1xcclxcblxcclxcbi8vIEdSQVlcXHJcXG4kQ19DT09MX0dSQVlfMzA6ICNmNGY0ZjU7XFxyXFxuJENfQ09PTF9HUkFZXzQwOiAjZTdlOGVhO1xcclxcbiRDX0NPT0xfR1JBWV81MDogI2NmZDFkNTtcXHJcXG4kQ19DT09MX0dSQVlfNjA6ICM5ZmE0YWI7XFxyXFxuJENfQ09PTF9HUkFZXzcwOiAjNjU2YTcxO1xcclxcbiRDX0NPT0xfR1JBWV84MDogIzQ0NDc0YjtcXHJcXG4kQ19DT09MX0dSQVlfOTA6ICMyNTI4MmI7XFxyXFxuXFxyXFxuJENfV0FSTV9HUkFZXzMwOiAjZjRmNGY0O1xcclxcbiRDX1dBUk1fR1JBWV80MDogI2U4ZThlODtcXHJcXG4kQ19XQVJNX0dSQVlfNTA6ICNkMWQxZDE7XFxyXFxuJENfV0FSTV9HUkFZXzYwOiAjYTRhNGE0O1xcclxcbiRDX1dBUk1fR1JBWV83MDogIzZhNmE2YTtcXHJcXG4kQ19XQVJNX0dSQVlfODA6ICM0NzQ3NDc7XFxyXFxuJENfV0FSTV9HUkFZXzkwOiAjMjMyMzIzO1xcclxcblxcclxcbi8vIFdBUk5JTkdcXHJcXG4kQ19XQVJOSU5HOiAjZjZhNjA5O1xcclxcbiRDX1dBUk5JTkdfREFSSzogI2U4OTgwNjtcXHJcXG4kQ19XQVJOSU5HX0xJR0hUOiAjZmZiYzFmO1xcclxcbiRDX1dBUk5JTkdfUkVEOiAjZmI0ZTRlO1xcclxcbiRDX1dBUk5JTkdfUkVEX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfV0FSTklOR19SRURfTElHSFQ6ICNmZjYyNjI7XFxyXFxuJENfV0FSTklOR19SRURfV0hJVEU6ICNmOWUwZTI7XFxyXFxuXFxyXFxuXFxyXFxuLy8gUE9TSVRJVkVcXHJcXG4kQ19QT1NJVElWRTogIzZjZGQ4MztcXHJcXG4kQ19QT1NJVElWRV9EQVJLOiAjM2VkMTYwO1xcclxcbiRDX1BPU0lUSVZFX0xJR0hUOiAjOTJlNmEzO1xcclxcblxcclxcbi8vIE5FR0FUSVZFXFxyXFxuJENfTkVHQVRJVkU6ICNmYjRlNGU7XFxyXFxuJENfTkVHQVRJVkVfREFSSzogI2U5M2MzYztcXHJcXG4kQ19ORUdBVElWRV9MSUdIVDogI2ZmNjI2MjtcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoaWRkZW5cIjogXCJrb3JlYU1hcF9oaWRkZW5fXzFhM1ZPXCIsXG5cdFwidGV4dEVtcGhhc2lzXCI6IFwia29yZWFNYXBfdGV4dEVtcGhhc2lzX18zdHhxclwiLFxuXHRcIndyYXBcIjogXCJrb3JlYU1hcF93cmFwX18xaUhTQVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2NhdGlvbkxpc3RfaGlkZGVuX18zOWFXRyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLmxvY2F0aW9uTGlzdF90ZXh0RW1waGFzaXNfXzNtMTNsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2VtYWtlcHJpY2VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1ZWM3YzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbn1cXG5cXG4ubG9jYXRpb25MaXN0X3dyYXBfXzNYYjJjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDM3OHB4O1xcbn1cXG5cXG4ubG9jYXRpb25MaXN0X2xvY2F0aW9uTGlzdF9fM1M1R0Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdyaWQtZ2FwOiAyNHB4O1xcbiAgZ2FwOiAyNHB4O1xcbiAgd2lkdGg6IDczNnB4O1xcbiAgcGFkZGluZzogNjFweCAzMnB4O1xcbn1cXG4ubG9jYXRpb25MaXN0X2xvY2F0aW9uTGlzdF9fM1M1R0QgLmxvY2F0aW9uTGlzdF9sb2NhdGlvbl9fMU1fbVcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNDZweDtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOGVhO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNjU2YTcxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubG9jYXRpb25MaXN0X2xvY2F0aW9uTGlzdF9fM1M1R0QgLmxvY2F0aW9uTGlzdF9sb2NhdGlvbl9fMU1fbVcubG9jYXRpb25MaXN0X3NlbGVjdGVkX18ycU5RNiB7XFxuICBiYWNrZ3JvdW5kOiAjNmNkZDgzICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTJjNTY0O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5sb2NhdGlvbkxpc3RfbG9jYXRpb25MaXN0X18zUzVHRCAubG9jYXRpb25MaXN0X2xvY2F0aW9uX18xTV9tVy5sb2NhdGlvbkxpc3RfaG92ZXJlZF9fM2ZFMmcge1xcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL2xvY2F0aW9uTGlzdC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLHNDRU5hO0VGT2IsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNHb0JRO0VIbkJSLG1CQUFBO0FDWEo7O0FBZkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFrQkY7O0FBZkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBa0JGO0FBaEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0V1RWE7RUZ0RWIsZUFBQTtBQWtCSjtBQWhCSTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXRWxDSTtBRm9EVjtBQWZJO0VBQ0UsbUJFeURXO0FGeENqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDsl63qsoAg6rCV7KGwXFxyXFxuLnRleHRFbXBoYXNpcyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRGX1dFTUFLRV9QUklDRTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6ICRDX1NLWV8yMDA7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiAycHg7XFxyXFxufVwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLnRleHRFbXBoYXNpcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIldlbWFrZXByaWNlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjNWVjN2MzO1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG59XFxuXFxuLndyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzc4cHg7XFxufVxcblxcbi5sb2NhdGlvbkxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMjRweDtcXG4gIHdpZHRoOiA3MzZweDtcXG4gIHBhZGRpbmc6IDYxcHggMzJweDtcXG59XFxuLmxvY2F0aW9uTGlzdCAubG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNDZweDtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlOGVhO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNjU2YTcxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubG9jYXRpb25MaXN0IC5sb2NhdGlvbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjNmNkZDgzICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTJjNTY0O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5sb2NhdGlvbkxpc3QgLmxvY2F0aW9uLmhvdmVyZWQge1xcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNTtcXG59XCIsXCIvLyBoZWFkZXIgaGVpZ2h0XFxyXFxuJE1JTl9XSURUSDogMTE2OHB4O1xcclxcbiRIRUFERVJfU0VBUkNIX0FSRUFfSEVJR0hUOiA3MHB4O1xcclxcbiRIRUFERVJfU0VBUkNIX0FSRUFfTUFYX0hFSUdIVDogODJweDtcXHJcXG4kSEVBREVSX01FTlVfQVJFQV9IRUlHSFQ6IDQ4cHg7XFxyXFxuJEhFQURFUl9IRUlHSFQ6ICRIRUFERVJfU0VBUkNIX0FSRUFfSEVJR0hUICsgJEhFQURFUl9NRU5VX0FSRUFfSEVJR0hUO1xcclxcbiRDT05URU5UU19XSURUSDogMTEyMHB4O1xcclxcbiRGT09URVJfQ09OVEVOVF9IRUlHSFQ6IDEwNHB4O1xcclxcbiRGT09URVJfQ09QWVJJR0hUX0hFSUdIVDogNDZweDtcXHJcXG4kRk9PVEVSX0hFSUdIVDogJEZPT1RFUl9DT05URU5UX0hFSUdIVCArICRGT09URVJfQ09QWVJJR0hUX0hFSUdIVDtcXHJcXG5cXHJcXG4vLyDqs7XthrUg7Lu07Y+s64SM7Yq4IOyCrOydtOymiFxcclxcbiRUT1BfTlVER0VfSEVJR0hUOiA0OHB4O1xcclxcblxcclxcbi8vIGZvbnRcXHJcXG4kRl9OT1RPX1NBTlNfS1I6ICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xcclxcbiRGX01PTlRTRVJSQVQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4kRl9XRU1BS0VfUFJJQ0U6ICdXZW1ha2VwcmljZScsIHNhbnMtc2VyaWY7XFxyXFxuJEZfUFJFVEVOREFSRDogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyB6LWluZGV4XFxyXFxuJFpfSU5ERVhfQkFTSUM6IDEwO1xcclxcbiRaX0lOREVYX0ZJWEVEOiAxMDA7XCIsXCIkQ19XSElURTogI2ZmZjtcXHJcXG4kQ19CTEFDSzogIzAwMDtcXHJcXG4kQ19HVUlERUxJTkU6ICMwZmY7XFxyXFxuXFxyXFxuLy8gSk9CREEgQkxBQ0tcXHJcXG4kQ19KT0JEQV9CTEFDSzogIzEyMTYxOTtcXHJcXG5cXHJcXG4vLyBKT0JEQSBXSElURVxcclxcbiRDX0pPQkRBX1dISVRFOiAjZjlmOWZhO1xcclxcblxcclxcbi8vIEdSRUVOXFxyXFxuJENfR1JFRU5fMzA6ICNlZmZkZjM7XFxyXFxuJENfR1JFRU5fNDA6ICNlMGY5ZTQ7XFxyXFxuJENfR1JFRU5fNTA6ICNkMGY1ZGE7XFxyXFxuJENfR1JFRU5fNjA6ICNjM2YyY2Q7XFxyXFxuJENfR1JFRU5fNzA6ICNiM2VlYzE7XFxyXFxuJENfR1JFRU5fODA6ICNhMmViYjQ7XFxyXFxuJENfR1JFRU5fOTA6ICM5MmU2YTM7XFxyXFxuJENfR1JFRU5fMTAwOiAjNmNkZDgzO1xcclxcbiRDX0dSRUVOXzIwMDogIzUyYzU2NDtcXHJcXG4kQ19HUkVFTl8zMDA6ICM0MWFjNGQ7XFxyXFxuJENfR1JFRU5fNDAwOiAjM2M4ZTQyO1xcclxcbiRDX0dSRUVOXzUwMDogIzM3NzUzODtcXHJcXG5cXHJcXG4vLyBZRUxMT1dcXHJcXG4kQ19ZRUxMT1dfMzA6ICNmZmZlZjI7XFxyXFxuJENfWUVMTE9XXzQwOiAjZmZmZGU1O1xcclxcbiRDX1lFTExPV181MDogI2ZlZmNkODtcXHJcXG4kQ19ZRUxMT1dfNjA6ICNmZWZjY2I7XFxyXFxuJENfWUVMTE9XXzcwOiAjZmVmOWJkO1xcclxcbiRDX1lFTExPV184MDogI2ZlZjhiMTtcXHJcXG4kQ19ZRUxMT1dfOTA6ICNmZGY2OWU7XFxyXFxuJENfWUVMTE9XXzEwMDogI2ZjZjE2YztcXHJcXG4kQ19ZRUxMT1dfMjAwOiAjZTdkYTRiO1xcclxcbiRDX1lFTExPV18zMDA6ICNkOGNhMmM7XFxyXFxuJENfWUVMTE9XXzQwMDogI2IzYTgyYTtcXHJcXG4kQ19ZRUxMT1dfNTAwOiAjOTM4YTI5O1xcclxcblxcclxcbi8vIFNLWVxcclxcbiRDX1NLWV8zMDogI2YzZmRmYztcXHJcXG4kQ19TS1lfNDA6ICNlOWY5Zjk7XFxyXFxuJENfU0tZXzUwOiAjZGNmN2Y2O1xcclxcbiRDX1NLWV82MDogI2QxZjVmMztcXHJcXG4kQ19TS1lfNzA6ICNjNWYxZWY7XFxyXFxuJENfU0tZXzgwOiAjYmJlZmVkO1xcclxcbiRDX1NLWV85MDogI2FmZWNlYTtcXHJcXG4kQ19TS1lfMTAwOiAjN2FkZWRhO1xcclxcbiRDX1NLWV8yMDA6ICM1ZWM3YzM7XFxyXFxuJENfU0tZXzMwMDogIzQ2YjJhZjtcXHJcXG4kQ19TS1lfNDAwOiAjNDA5MzkwO1xcclxcbiRDX1NLWV81MDA6ICMzYTc5Nzc7XFxyXFxuXFxyXFxuLy8gTElNRVxcclxcbiRDX0xJTUVfMzA6ICNmOWZmZWI7XFxyXFxuJENfTElNRV80MDogI2YzZmVkZjtcXHJcXG4kQ19MSU1FXzUwOiAjZWRmZGQyO1xcclxcbiRDX0xJTUVfNjA6ICNlN2ZjYzY7XFxyXFxuJENfTElNRV83MDogI2UyZmJiOTtcXHJcXG4kQ19MSU1FXzgwOiAjZGNmYWFkO1xcclxcbiRDX0xJTUVfOTA6ICNkMGY4OTQ7XFxyXFxuJENfTElNRV8xMDA6ICNiZmVmN2I7XFxyXFxuJENfTElNRV8yMDA6ICNhNGQ5NWE7XFxyXFxuJENfTElNRV8zMDA6ICM4ZWM5M2Q7XFxyXFxuJENfTElNRV80MDA6ICM3OWE4Mzc7XFxyXFxuJENfTElNRV81MDA6ICM2NjhhMzM7XFxyXFxuXFxyXFxuLy8gUFVSUExFXFxyXFxuJENfUFVSUExFXzMwOiAjZjVmMmZkO1xcclxcbiRDX1BVUlBMRV80MDogI2YyZWRmYztcXHJcXG4kQ19QVVJQTEVfNTA6ICNlZWU3ZmM7XFxyXFxuJENfUFVSUExFXzYwOiAjZThlMGZiO1xcclxcbiRDX1BVUlBMRV83MDogI2UwZDVmOTtcXHJcXG4kQ19QVVJQTEVfODA6ICNkNWM3Zjc7XFxyXFxuJENfUFVSUExFXzkwOiAjYzdiNGY0O1xcclxcbiRDX1BVUlBMRV8xMDA6ICNiNDliZjA7XFxyXFxuJENfUFVSUExFXzIwMDogIzkzNzVkYjtcXHJcXG4kQ19QVVJQTEVfMzAwOiAjNzc1M2NhO1xcclxcbiRDX1BVUlBMRV80MDA6ICM2MjNmYjM7XFxyXFxuJENfUFVSUExFXzUwMDogIzU1M2I5NDtcXHJcXG5cXHJcXG4vLyBCTFVFXFxyXFxuJENfQkxVRV8zMDogI2UxZTdmODtcXHJcXG4kQ19CTFVFXzQwOiAjYzNkMWVmO1xcclxcbiRDX0JMVUVfNTA6ICNhN2I5ZTc7XFxyXFxuJENfQkxVRV82MDogIzhiYTNkZjtcXHJcXG4kQ19CTFVFXzcwOiAjNzE4ZGQ3O1xcclxcbiRDX0JMVUVfODA6ICM1ODc4Y2Y7XFxyXFxuJENfQkxVRV85MDogIzMxNWZjNztcXHJcXG4kQ19CTFVFXzEwMDogIzJiNTNhZTtcXHJcXG4kQ19CTFVFXzIwMDogIzMwNGE4OTtcXHJcXG4kQ19CTFVFXzMwMDogIzJjNDE3MDtcXHJcXG4kQ19CTFVFXzQwMDogIzI5Mzg1ZDtcXHJcXG4kQ19CTFVFXzUwMDogIzI1MzE0ZDtcXHJcXG5cXHJcXG4vLyBHUkFZXFxyXFxuJENfQ09PTF9HUkFZXzMwOiAjZjRmNGY1O1xcclxcbiRDX0NPT0xfR1JBWV80MDogI2U3ZThlYTtcXHJcXG4kQ19DT09MX0dSQVlfNTA6ICNjZmQxZDU7XFxyXFxuJENfQ09PTF9HUkFZXzYwOiAjOWZhNGFiO1xcclxcbiRDX0NPT0xfR1JBWV83MDogIzY1NmE3MTtcXHJcXG4kQ19DT09MX0dSQVlfODA6ICM0NDQ3NGI7XFxyXFxuJENfQ09PTF9HUkFZXzkwOiAjMjUyODJiO1xcclxcblxcclxcbiRDX1dBUk1fR1JBWV8zMDogI2Y0ZjRmNDtcXHJcXG4kQ19XQVJNX0dSQVlfNDA6ICNlOGU4ZTg7XFxyXFxuJENfV0FSTV9HUkFZXzUwOiAjZDFkMWQxO1xcclxcbiRDX1dBUk1fR1JBWV82MDogI2E0YTRhNDtcXHJcXG4kQ19XQVJNX0dSQVlfNzA6ICM2YTZhNmE7XFxyXFxuJENfV0FSTV9HUkFZXzgwOiAjNDc0NzQ3O1xcclxcbiRDX1dBUk1fR1JBWV85MDogIzIzMjMyMztcXHJcXG5cXHJcXG4vLyBXQVJOSU5HXFxyXFxuJENfV0FSTklORzogI2Y2YTYwOTtcXHJcXG4kQ19XQVJOSU5HX0RBUks6ICNlODk4MDY7XFxyXFxuJENfV0FSTklOR19MSUdIVDogI2ZmYmMxZjtcXHJcXG4kQ19XQVJOSU5HX1JFRDogI2ZiNGU0ZTtcXHJcXG4kQ19XQVJOSU5HX1JFRF9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX1dBUk5JTkdfUkVEX0xJR0hUOiAjZmY2MjYyO1xcclxcbiRDX1dBUk5JTkdfUkVEX1dISVRFOiAjZjllMGUyO1xcclxcblxcclxcblxcclxcbi8vIFBPU0lUSVZFXFxyXFxuJENfUE9TSVRJVkU6ICM2Y2RkODM7XFxyXFxuJENfUE9TSVRJVkVfREFSSzogIzNlZDE2MDtcXHJcXG4kQ19QT1NJVElWRV9MSUdIVDogIzkyZTZhMztcXHJcXG5cXHJcXG4vLyBORUdBVElWRVxcclxcbiRDX05FR0FUSVZFOiAjZmI0ZTRlO1xcclxcbiRDX05FR0FUSVZFX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfTkVHQVRJVkVfTElHSFQ6ICNmZjYyNjI7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwibG9jYXRpb25MaXN0X2hpZGRlbl9fMzlhV0dcIixcblx0XCJ0ZXh0RW1waGFzaXNcIjogXCJsb2NhdGlvbkxpc3RfdGV4dEVtcGhhc2lzX18zbTEzbFwiLFxuXHRcIndyYXBcIjogXCJsb2NhdGlvbkxpc3Rfd3JhcF9fM1hiMmNcIixcblx0XCJsb2NhdGlvbkxpc3RcIjogXCJsb2NhdGlvbkxpc3RfbG9jYXRpb25MaXN0X18zUzVHRFwiLFxuXHRcImxvY2F0aW9uXCI6IFwibG9jYXRpb25MaXN0X2xvY2F0aW9uX18xTV9tV1wiLFxuXHRcInNlbGVjdGVkXCI6IFwibG9jYXRpb25MaXN0X3NlbGVjdGVkX18ycU5RNlwiLFxuXHRcImhvdmVyZWRcIjogXCJsb2NhdGlvbkxpc3RfaG92ZXJlZF9fM2ZFMmdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFwX2hpZGRlbl9fMWtCS08ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi5tYXBfdGV4dEVtcGhhc2lzX18zOTRjNSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIldlbWFrZXByaWNlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjNWVjN2MzO1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG59XFxuXFxuLm1hcF9tYXBBcmVhX18zejNVYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM4M3B4O1xcbiAgaGVpZ2h0OiAzNzhweDtcXG59XFxuLm1hcF9tYXBBcmVhX18zejNVYyAubWFwX21hcENvbnRlbnRzX18xaHlLWCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXBfbWFwQXJlYV9fM3ozVWMgLm1hcF9uYW1lX19BVXNpQSB7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMjZweDtcXG4gIHBhZGRpbmc6IDNweCAxMnB4IDVweDtcXG4gIGJhY2tncm91bmQ6ICM2Y2RkODM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTJjNTY0O1xcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLm1hcF9tYXBBcmVhX18zejNVYyAubWFwX25hbWVfX0FVc2lBOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XFxuICBib3R0b206IC0zcHg7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjNmNkZDgzO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWFwX21hcFdyYXBfXzFiWXc1IC5tYXBfZW1fXzNvOXpvIHtcXG4gIGZpbGw6ICNFN0U4RUE7XFxufVxcbi5tYXBfbWFwV3JhcF9fMWJZdzUgLm1hcF9zZWxlY3RlZF9fcWhPRm4ge1xcbiAgZmlsbDogIzkyZTZhMyAhaW1wb3J0YW50O1xcbn1cXG4ubWFwX21hcFdyYXBfXzFiWXc1IC5tYXBfc2VsZWN0ZWRfX3FoT0ZuLm1hcF9lbV9fM285em8ge1xcbiAgZmlsbDogIzUyYzU2NCAhaW1wb3J0YW50O1xcbn1cXG4ubWFwX21hcFdyYXBfXzFiWXc1IHBhdGgge1xcbiAgZmlsbDogI0Y0RjRGNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hcF9tYXBXcmFwX18xYll3NSBwYXRoLm1hcF9ub0N1cnNvcl9fMUZOblUge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ubWFwX21hcFdyYXBfXzFiWXc1IC5tYXBfaG92ZXJlZF9fcmRXa24ge1xcbiAgZmlsbDogI2NmZDFkNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL21hcC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLHNDRU5hO0VGT2IsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNHb0JRO0VIbkJSLG1CQUFBO0FDWEo7O0FBZkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBa0JGO0FBaEJFO0VBQ0Usa0JBQUE7QUFrQko7QUFmRTtFR2dRQSw2RUFBQTtFSDdQRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRURVO0VGRVYseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0V6Qk07RUYwQk4sbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBZ0JKO0FBZEk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFbEJRO0VGbUJSLDZCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQWVOOztBQVRFO0VBQ0UsYUFBQTtBQVlKO0FBVEU7RUFDRSx3QkFBQTtBQVdKO0FBVEk7RUFDRSx3QkFBQTtBQVdOO0FBUEU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVNKO0FBUEk7RUFDRSxlQUFBO0FBU047QUFMRTtFQUNFLGFFMkJhO0FGcEJqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDsl63qsoAg6rCV7KGwXFxyXFxuLnRleHRFbXBoYXNpcyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRGX1dFTUFLRV9QUklDRTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6ICRDX1NLWV8yMDA7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiAycHg7XFxyXFxufVwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLnRleHRFbXBoYXNpcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIldlbWFrZXByaWNlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjNWVjN2MzO1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG59XFxuXFxuLm1hcEFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzODNweDtcXG4gIGhlaWdodDogMzc4cHg7XFxufVxcbi5tYXBBcmVhIC5tYXBDb250ZW50cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYXBBcmVhIC5uYW1lIHtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgcGFkZGluZzogM3B4IDEycHggNXB4O1xcbiAgYmFja2dyb3VuZDogIzZjZGQ4MztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5tYXBBcmVhIC5uYW1lOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XFxuICBib3R0b206IC0zcHg7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjNmNkZDgzO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1MmM1NjQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ubWFwV3JhcCAuZW0ge1xcbiAgZmlsbDogI0U3RThFQTtcXG59XFxuLm1hcFdyYXAgLnNlbGVjdGVkIHtcXG4gIGZpbGw6ICM5MmU2YTMgIWltcG9ydGFudDtcXG59XFxuLm1hcFdyYXAgLnNlbGVjdGVkLmVtIHtcXG4gIGZpbGw6ICM1MmM1NjQgIWltcG9ydGFudDtcXG59XFxuLm1hcFdyYXAgcGF0aCB7XFxuICBmaWxsOiAjRjRGNEY1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFwV3JhcCBwYXRoLm5vQ3Vyc29yIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLm1hcFdyYXAgLmhvdmVyZWQge1xcbiAgZmlsbDogI2NmZDFkNTtcXG59XCIsXCIvLyBoZWFkZXIgaGVpZ2h0XFxyXFxuJE1JTl9XSURUSDogMTE2OHB4O1xcclxcbiRIRUFERVJfU0VBUkNIX0FSRUFfSEVJR0hUOiA3MHB4O1xcclxcbiRIRUFERVJfU0VBUkNIX0FSRUFfTUFYX0hFSUdIVDogODJweDtcXHJcXG4kSEVBREVSX01FTlVfQVJFQV9IRUlHSFQ6IDQ4cHg7XFxyXFxuJEhFQURFUl9IRUlHSFQ6ICRIRUFERVJfU0VBUkNIX0FSRUFfSEVJR0hUICsgJEhFQURFUl9NRU5VX0FSRUFfSEVJR0hUO1xcclxcbiRDT05URU5UU19XSURUSDogMTEyMHB4O1xcclxcbiRGT09URVJfQ09OVEVOVF9IRUlHSFQ6IDEwNHB4O1xcclxcbiRGT09URVJfQ09QWVJJR0hUX0hFSUdIVDogNDZweDtcXHJcXG4kRk9PVEVSX0hFSUdIVDogJEZPT1RFUl9DT05URU5UX0hFSUdIVCArICRGT09URVJfQ09QWVJJR0hUX0hFSUdIVDtcXHJcXG5cXHJcXG4vLyDqs7XthrUg7Lu07Y+s64SM7Yq4IOyCrOydtOymiFxcclxcbiRUT1BfTlVER0VfSEVJR0hUOiA0OHB4O1xcclxcblxcclxcbi8vIGZvbnRcXHJcXG4kRl9OT1RPX1NBTlNfS1I6ICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xcclxcbiRGX01PTlRTRVJSQVQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4kRl9XRU1BS0VfUFJJQ0U6ICdXZW1ha2VwcmljZScsIHNhbnMtc2VyaWY7XFxyXFxuJEZfUFJFVEVOREFSRDogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4vLyB6LWluZGV4XFxyXFxuJFpfSU5ERVhfQkFTSUM6IDEwO1xcclxcbiRaX0lOREVYX0ZJWEVEOiAxMDA7XCIsXCIkQ19XSElURTogI2ZmZjtcXHJcXG4kQ19CTEFDSzogIzAwMDtcXHJcXG4kQ19HVUlERUxJTkU6ICMwZmY7XFxyXFxuXFxyXFxuLy8gSk9CREEgQkxBQ0tcXHJcXG4kQ19KT0JEQV9CTEFDSzogIzEyMTYxOTtcXHJcXG5cXHJcXG4vLyBKT0JEQSBXSElURVxcclxcbiRDX0pPQkRBX1dISVRFOiAjZjlmOWZhO1xcclxcblxcclxcbi8vIEdSRUVOXFxyXFxuJENfR1JFRU5fMzA6ICNlZmZkZjM7XFxyXFxuJENfR1JFRU5fNDA6ICNlMGY5ZTQ7XFxyXFxuJENfR1JFRU5fNTA6ICNkMGY1ZGE7XFxyXFxuJENfR1JFRU5fNjA6ICNjM2YyY2Q7XFxyXFxuJENfR1JFRU5fNzA6ICNiM2VlYzE7XFxyXFxuJENfR1JFRU5fODA6ICNhMmViYjQ7XFxyXFxuJENfR1JFRU5fOTA6ICM5MmU2YTM7XFxyXFxuJENfR1JFRU5fMTAwOiAjNmNkZDgzO1xcclxcbiRDX0dSRUVOXzIwMDogIzUyYzU2NDtcXHJcXG4kQ19HUkVFTl8zMDA6ICM0MWFjNGQ7XFxyXFxuJENfR1JFRU5fNDAwOiAjM2M4ZTQyO1xcclxcbiRDX0dSRUVOXzUwMDogIzM3NzUzODtcXHJcXG5cXHJcXG4vLyBZRUxMT1dcXHJcXG4kQ19ZRUxMT1dfMzA6ICNmZmZlZjI7XFxyXFxuJENfWUVMTE9XXzQwOiAjZmZmZGU1O1xcclxcbiRDX1lFTExPV181MDogI2ZlZmNkODtcXHJcXG4kQ19ZRUxMT1dfNjA6ICNmZWZjY2I7XFxyXFxuJENfWUVMTE9XXzcwOiAjZmVmOWJkO1xcclxcbiRDX1lFTExPV184MDogI2ZlZjhiMTtcXHJcXG4kQ19ZRUxMT1dfOTA6ICNmZGY2OWU7XFxyXFxuJENfWUVMTE9XXzEwMDogI2ZjZjE2YztcXHJcXG4kQ19ZRUxMT1dfMjAwOiAjZTdkYTRiO1xcclxcbiRDX1lFTExPV18zMDA6ICNkOGNhMmM7XFxyXFxuJENfWUVMTE9XXzQwMDogI2IzYTgyYTtcXHJcXG4kQ19ZRUxMT1dfNTAwOiAjOTM4YTI5O1xcclxcblxcclxcbi8vIFNLWVxcclxcbiRDX1NLWV8zMDogI2YzZmRmYztcXHJcXG4kQ19TS1lfNDA6ICNlOWY5Zjk7XFxyXFxuJENfU0tZXzUwOiAjZGNmN2Y2O1xcclxcbiRDX1NLWV82MDogI2QxZjVmMztcXHJcXG4kQ19TS1lfNzA6ICNjNWYxZWY7XFxyXFxuJENfU0tZXzgwOiAjYmJlZmVkO1xcclxcbiRDX1NLWV85MDogI2FmZWNlYTtcXHJcXG4kQ19TS1lfMTAwOiAjN2FkZWRhO1xcclxcbiRDX1NLWV8yMDA6ICM1ZWM3YzM7XFxyXFxuJENfU0tZXzMwMDogIzQ2YjJhZjtcXHJcXG4kQ19TS1lfNDAwOiAjNDA5MzkwO1xcclxcbiRDX1NLWV81MDA6ICMzYTc5Nzc7XFxyXFxuXFxyXFxuLy8gTElNRVxcclxcbiRDX0xJTUVfMzA6ICNmOWZmZWI7XFxyXFxuJENfTElNRV80MDogI2YzZmVkZjtcXHJcXG4kQ19MSU1FXzUwOiAjZWRmZGQyO1xcclxcbiRDX0xJTUVfNjA6ICNlN2ZjYzY7XFxyXFxuJENfTElNRV83MDogI2UyZmJiOTtcXHJcXG4kQ19MSU1FXzgwOiAjZGNmYWFkO1xcclxcbiRDX0xJTUVfOTA6ICNkMGY4OTQ7XFxyXFxuJENfTElNRV8xMDA6ICNiZmVmN2I7XFxyXFxuJENfTElNRV8yMDA6ICNhNGQ5NWE7XFxyXFxuJENfTElNRV8zMDA6ICM4ZWM5M2Q7XFxyXFxuJENfTElNRV80MDA6ICM3OWE4Mzc7XFxyXFxuJENfTElNRV81MDA6ICM2NjhhMzM7XFxyXFxuXFxyXFxuLy8gUFVSUExFXFxyXFxuJENfUFVSUExFXzMwOiAjZjVmMmZkO1xcclxcbiRDX1BVUlBMRV80MDogI2YyZWRmYztcXHJcXG4kQ19QVVJQTEVfNTA6ICNlZWU3ZmM7XFxyXFxuJENfUFVSUExFXzYwOiAjZThlMGZiO1xcclxcbiRDX1BVUlBMRV83MDogI2UwZDVmOTtcXHJcXG4kQ19QVVJQTEVfODA6ICNkNWM3Zjc7XFxyXFxuJENfUFVSUExFXzkwOiAjYzdiNGY0O1xcclxcbiRDX1BVUlBMRV8xMDA6ICNiNDliZjA7XFxyXFxuJENfUFVSUExFXzIwMDogIzkzNzVkYjtcXHJcXG4kQ19QVVJQTEVfMzAwOiAjNzc1M2NhO1xcclxcbiRDX1BVUlBMRV80MDA6ICM2MjNmYjM7XFxyXFxuJENfUFVSUExFXzUwMDogIzU1M2I5NDtcXHJcXG5cXHJcXG4vLyBCTFVFXFxyXFxuJENfQkxVRV8zMDogI2UxZTdmODtcXHJcXG4kQ19CTFVFXzQwOiAjYzNkMWVmO1xcclxcbiRDX0JMVUVfNTA6ICNhN2I5ZTc7XFxyXFxuJENfQkxVRV82MDogIzhiYTNkZjtcXHJcXG4kQ19CTFVFXzcwOiAjNzE4ZGQ3O1xcclxcbiRDX0JMVUVfODA6ICM1ODc4Y2Y7XFxyXFxuJENfQkxVRV85MDogIzMxNWZjNztcXHJcXG4kQ19CTFVFXzEwMDogIzJiNTNhZTtcXHJcXG4kQ19CTFVFXzIwMDogIzMwNGE4OTtcXHJcXG4kQ19CTFVFXzMwMDogIzJjNDE3MDtcXHJcXG4kQ19CTFVFXzQwMDogIzI5Mzg1ZDtcXHJcXG4kQ19CTFVFXzUwMDogIzI1MzE0ZDtcXHJcXG5cXHJcXG4vLyBHUkFZXFxyXFxuJENfQ09PTF9HUkFZXzMwOiAjZjRmNGY1O1xcclxcbiRDX0NPT0xfR1JBWV80MDogI2U3ZThlYTtcXHJcXG4kQ19DT09MX0dSQVlfNTA6ICNjZmQxZDU7XFxyXFxuJENfQ09PTF9HUkFZXzYwOiAjOWZhNGFiO1xcclxcbiRDX0NPT0xfR1JBWV83MDogIzY1NmE3MTtcXHJcXG4kQ19DT09MX0dSQVlfODA6ICM0NDQ3NGI7XFxyXFxuJENfQ09PTF9HUkFZXzkwOiAjMjUyODJiO1xcclxcblxcclxcbiRDX1dBUk1fR1JBWV8zMDogI2Y0ZjRmNDtcXHJcXG4kQ19XQVJNX0dSQVlfNDA6ICNlOGU4ZTg7XFxyXFxuJENfV0FSTV9HUkFZXzUwOiAjZDFkMWQxO1xcclxcbiRDX1dBUk1fR1JBWV82MDogI2E0YTRhNDtcXHJcXG4kQ19XQVJNX0dSQVlfNzA6ICM2YTZhNmE7XFxyXFxuJENfV0FSTV9HUkFZXzgwOiAjNDc0NzQ3O1xcclxcbiRDX1dBUk1fR1JBWV85MDogIzIzMjMyMztcXHJcXG5cXHJcXG4vLyBXQVJOSU5HXFxyXFxuJENfV0FSTklORzogI2Y2YTYwOTtcXHJcXG4kQ19XQVJOSU5HX0RBUks6ICNlODk4MDY7XFxyXFxuJENfV0FSTklOR19MSUdIVDogI2ZmYmMxZjtcXHJcXG4kQ19XQVJOSU5HX1JFRDogI2ZiNGU0ZTtcXHJcXG4kQ19XQVJOSU5HX1JFRF9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX1dBUk5JTkdfUkVEX0xJR0hUOiAjZmY2MjYyO1xcclxcbiRDX1dBUk5JTkdfUkVEX1dISVRFOiAjZjllMGUyO1xcclxcblxcclxcblxcclxcbi8vIFBPU0lUSVZFXFxyXFxuJENfUE9TSVRJVkU6ICM2Y2RkODM7XFxyXFxuJENfUE9TSVRJVkVfREFSSzogIzNlZDE2MDtcXHJcXG4kQ19QT1NJVElWRV9MSUdIVDogIzkyZTZhMztcXHJcXG5cXHJcXG4vLyBORUdBVElWRVxcclxcbiRDX05FR0FUSVZFOiAjZmI0ZTRlO1xcclxcbiRDX05FR0FUSVZFX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfTkVHQVRJVkVfTElHSFQ6ICNmZjYyNjI7XFxyXFxuXCIsXCIvLyBlbGxpcHNpc1xcclxcbi8vIEBwYXJhbSB7bnVtYmVyfSAkTElORSAtIOykhCDsiJhcXHJcXG4vLyBAcGFyYW0ge3B4fSAkTElORV9IRUlHSFQgLSDtlZzspIQg64aS7J20XFxyXFxuQG1peGluIGVsbGlwc2lzKCRMSU5FOiAxLCAkTElORV9IRUlHSFQ6IDEuMmVtKSB7XFxyXFxuXFx0QGlmKCRMSU5FID09IDEpIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG5cXHRcXHQtd2Via2l0LWxpbmUtY2xhbXA6ICRMSU5FO1xcclxcblxcdFxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuXFx0XFx0bWF4LWhlaWdodDogJExJTkVfSEVJR0hUICogJExJTkU7IC8vIHdlYmtpdCDsnbTsmbjsnZgg67iM65287Jqw7KCAIOuMgOydkVxcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAkTElORV9IRUlHSFQ7XFxyXFxuXFx0XFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuXFx0XFx0d29yZC1icmVhazogYnJlYWstd29yZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIOqzte2GtSDrsoTtirwg7Iqk7YOA7J28XFxyXFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRUWVBFIC0g67KE7Yq8IO2DgOyehVxcclxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkU0laRSAtIOuyhO2KvCDtgazquLBcXHJcXG5AbWl4aW4gY29tbW9uQnRuU3R5bGUoJFRZUEU6ICdwcmltYXJ5JywgJFNJWkU6ICdsYXJnZScpIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHQmOmRpc2FibGVkIHtcXHJcXG5cXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIOyKpO2DgOydvOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0QGlmKCRUWVBFID09ICdwcmltYXJ5Jykge1xcclxcblxcdFxcdHdpZHRoOiAyMjhweDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRjb2xvcjogJENfSk9CREFfV0hJVEU7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8g7YGs6riw7JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRcXHRAaWYoJFNJWkUgPT0gJ2xhcmdlJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNjRweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDY0cHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnbWVkaXVtJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNTZweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDU2cHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnc21hbGwnKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA0NHB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNDRweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfR1JFRU5fMjAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmRpc2FibGVkIHtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC8vIOyKpO2DgOydvOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ3NlY29uZGFyeScpIHtcXHJcXG5cXHRcXHR3aWR0aDogMjI4cHg7XFxyXFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19XSElURTtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHJcXG5cXHRcXHQvLyDtgazquLDsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdFxcdEBpZigkU0laRSA9PSAnbGFyZ2UnKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA2NHB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNjBweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcXHJcXG5cXHRcXHR9IEBlbHNlIGlmKCRTSVpFID09ICdtZWRpdW0nKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA1NnB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNTJweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcXHJcXG5cXHRcXHR9IEBlbHNlIGlmKCRTSVpFID09ICdzbWFsbCcpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDQ0cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRib3JkZXItY29sb3I6ICRDX0dSRUVOXzIwMDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19KT0JEQV9XSElURTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJENfR1JFRU5fMjAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmRpc2FibGVkIHtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfV0hJVEU7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQvLyDsiqTtg4Dsnbzsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICd1bmRlcmxpbmUnKSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzgwO1xcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIO2BrOq4sOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0XFx0QGlmKCRTSVpFID09ICdsYXJnZScpIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnbWVkaXVtJykge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMjBweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHR9IEBlbHNlIGlmKCRTSVpFID09ICdzbWFsbCcpIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDEzcHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjA4NjZweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjphZnRlciB7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdGJvdHRvbTogLTFweDtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdGhlaWdodDogMXB4O1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0NPT0xfR1JBWV84MDtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiAnJztcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV83MDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfNzA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmRpc2FibGVkIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcclxcblxcdFxcdFxcdCY6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHQmOmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDqs7XthrUg7J247ZKLIOyKpO2DgOydvFxcclxcbkBtaXhpbiBjb21tb25JbnB1dFN0eWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiA1NnB4O1xcclxcblxcdHBhZGRpbmc6IDAgMTZweDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAkQ19DT09MX0dSQVlfMzA7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRDX0NPT0xfR1JBWV8zMDtcXHJcXG5cXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjBweDtcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRjb2xvcjogJENfQ09PTF9HUkFZXzkwO1xcclxcblxcdG91dGxpbmU6IDA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG5cXHJcXG5cXHQvLyDsg53rhYTsm5Tsnbwg6rK97JqwXFxyXFxuXFx0Ji50eXBlMiB7XFxyXFxuXFx0XFx0d2lkdGg6IDIxMnB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDso7zrr7zrk7HroZ3rsojtmLgg65K37J6Q66asIOqyveyasFxcclxcblxcdCYudHlwZTMge1xcclxcblxcdFxcdHdpZHRoOiA2MHB4O1xcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly/tnLTrjIDtj7Ag67KI7Zi47J28IOqyveyasFxcclxcblxcdCYubW9iaWxlIHtcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMi42cHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIOuyhO2KvCjsnbjspp3smpTssq0sIOykkeuzte2ZleyduCwg67mE67CA67KI7Zi47ZmV7J24KeydtCDsnojripQg6rK97JqwXFxyXFxuXFx0Ji53aXRoQnV0dG9uIHtcXHJcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g6rKA7IOJ7J20IOqwgOuKpe2VnCDqsr3smrAoc2VhcmNoIGljb24pXFxyXFxuXFx0Ji5zZWFyY2gge1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogNDhweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ji5lcnJvciB7XFxyXFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAkQ19ORUdBVElWRTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjpmb2N1cyxcXHJcXG5cXHQmLnN1Y2Nlc3Mge1xcclxcblxcdFxcdGJvcmRlci1jb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX1dISVRFO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOmRpc2FibGVkIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19KT0JEQV9XSElURTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjo6cGxhY2Vob2xkZXIge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLy9pZTExXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLy9lZGdlXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIOqzte2GtSBib3gtc2hhZG93IOyKpO2DgOydvFxcclxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkVFlQRSAtIGJveC1zaGFkb3cg7YOA7J6FXFxyXFxuQG1peGluIGNvbW1vbkJveFNoYWRvd1N0eWxlKCRUWVBFOiAnYmFzZScpIHtcXHJcXG5cXHRAaWYoJFRZUEUgPT0gJ2Jhc2UnKSB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAnbWVkaXVtJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ2xhcmdlJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAneGxhcmdlJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAyMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICd4eGxhcmdlJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAyNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ2lubmVyJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBzY3JvbGxcXHJcXG5AbWl4aW4gc2Nyb2xsKCRTQ1JPTExfV0lEVEg6IDRweCwgJElFX1RSQUNLX0NPTE9SOiAkQ19XSElURSkge1xcclxcblxcdCRCQVNJQ19TQ1JPTExfV0lEVEg6IDE3cHg7XFxyXFxuXFx0JFNDUk9MTF9CQVJfQ09MT1I6ICRDX0NPT0xfR1JBWV80MDtcXHJcXG5cXHQkVFJBQ0s6IHRyYW5zcGFyZW50O1xcclxcblxcdFxcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHRvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogY2FsYygjeyRTQ1JPTExfV0lEVEh9IC0gI3skQkFTSUNfU0NST0xMX1dJRFRIfSk7XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMDtcXHJcXG5cXHJcXG5cXHQvKiAgSUUgc2Nyb2xsYmFyIHN0eWxlICAqL1xcclxcblxcdHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkU0NST0xMX0JBUl9DT0xPUjtcXHJcXG5cXHRzY3JvbGxiYXItc2hhZG93LWNvbG9yOiAkU0NST0xMX0JBUl9DT0xPUjtcXHJcXG5cXHRzY3JvbGxiYXItdHJhY2stY29sb3I6ICRJRV9UUkFDS19DT0xPUjtcXHJcXG5cXHRzY3JvbGxiYXItYXJyb3ctY29sb3I6ICRJRV9UUkFDS19DT0xPUjtcXHJcXG5cXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0d2lkdGg6ICRCQVNJQ19TQ1JPTExfV0lEVEg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkU0NST0xMX0JBUl9DT0xPUjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRUUkFDSztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcXHJcXG5cXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDA7XFxyXFxuXFx0fVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoaWRkZW5cIjogXCJtYXBfaGlkZGVuX18xa0JLT1wiLFxuXHRcInRleHRFbXBoYXNpc1wiOiBcIm1hcF90ZXh0RW1waGFzaXNfXzM5NGM1XCIsXG5cdFwibWFwQXJlYVwiOiBcIm1hcF9tYXBBcmVhX18zejNVY1wiLFxuXHRcIm1hcENvbnRlbnRzXCI6IFwibWFwX21hcENvbnRlbnRzX18xaHlLWFwiLFxuXHRcIm5hbWVcIjogXCJtYXBfbmFtZV9fQVVzaUFcIixcblx0XCJtYXBXcmFwXCI6IFwibWFwX21hcFdyYXBfXzFiWXc1XCIsXG5cdFwiZW1cIjogXCJtYXBfZW1fXzNvOXpvXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJtYXBfc2VsZWN0ZWRfX3FoT0ZuXCIsXG5cdFwibm9DdXJzb3JcIjogXCJtYXBfbm9DdXJzb3JfXzFGTm5VXCIsXG5cdFwiaG92ZXJlZFwiOiBcIm1hcF9ob3ZlcmVkX19yZFdrblwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDkzMTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcbi8qKioqKiovIH0pKClcbjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2NvbnRlbnRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9jb250ZW50cy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2NvbnRlbnRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250ZW50cy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgQ29udGVudHMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHM7XHJcbiIsImNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQge0xPQ0FUSU9OfSBmcm9tIFwiQGRvbWFpbi9sb2NhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIElQYXRoRGF0YSB7XHJcbiAgbG9jYXRpb25OYW1lOiBMT0NBVElPTjtcclxuICBzcGVjaWFsQ2l0eTogYm9vbGVhbjtcclxuICBwYXRoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQQVRIX0RBVEE6IEFycmF5PElQYXRoRGF0YT4gPSBbXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5TTyxcclxuICAgIHNwZWNpYWxDaXR5OiB0cnVlLFxyXG4gICAgcGF0aDogXCJNNTguNTQ1MSA3NS4zNzk1QzU4LjUyMzYgNzUuMjM2NiA1OC40NzExIDc1LjEgNTguMzkxMiA3NC45Nzk1QzU4LjMxMTMgNzQuODU5IDU4LjIwNiA3NC43NTc1IDU4LjA4MjcgNzQuNjgyQzU3Ljk1OTQgNzQuNjA2NiA1Ny44MjEgNzQuNTU5MSA1Ny42NzczIDc0LjU0MjlDNTcuNTMzNyA3NC41MjY2IDU3LjM4ODIgNzQuNTQyMSA1Ny4yNTExIDc0LjU4ODFMNTUuMDQyOCA3NS4yODAzQzU0Ljc1ODEgNzUuMzc5NSA1NC42NTg5IDc1LjM0MDcgNTQuMzk1OCA3NS4xNzQ3TDU0LjMwNTIgNzUuMTE2NEM1NC4xNzgyIDc1LjAzMjQgNTQuMDcxNSA3NC45MjEgNTMuOTkzMiA3NC43OTA0QzUzLjkxNDggNzQuNjU5OCA1My44NjY3IDc0LjUxMzMgNTMuODUyMyA3NC4zNjE2TDUyLjc5OTkgNjYuMjE0QzUyLjUyODIgNjMuMjY4MSA0OS4xNjE3IDY0LjQ1NjQgNDcuNDA4NCA2NC45NDU5QzQ2Ljk3NzEgNjUuMDY2NyA0NS44Nzk0IDY1LjIwMjYgNDUuNTAyIDY1LjQ1N0M0NC45ODIzIDY1LjgwODYgNDQuNjg2OCA2Ni42NjkxIDQ0LjU0MDIgNjcuMjcwN0M0NC4zOTM1IDY3Ljg3MjQgNDQuNzA2MiA2OC4zMDE2IDQ0LjA1MDYgNjguNTc5OEM0My41MjUzIDY4LjgxNjQgNDIuOTM0OSA2OC44NjY3IDQyLjM3NzEgNjguNzIyMUM0Mi4xNTgyIDY4LjYzNjIgNDEuOTIxOCA2OC42MDM2IDQxLjY4NzggNjguNjI3M0M0MS40NTM4IDY4LjY1MDkgNDEuMjI4NyA2OC43MyA0MS4wMzE0IDY4Ljg1OEM0MC43ODYyIDY5LjAxODcgNDAuNTAwNyA2OS4xMDY5IDQwLjIwNzYgNjkuMTEyNUM0MC4wMzgyIDY5LjEwOTYgMzkuODcyNiA2OS4xNjIzIDM5LjczNTkgNjkuMjYyM0MzOS41OTkyIDY5LjM2MjQgMzkuNDk5IDY5LjUwNDQgMzkuNDUwNiA2OS42NjY3QzM5LjMzODUgNzAuMDM1NSAzOS4yNzM4IDcwLjcxMDUgMzkuMDYyNCA3MS4wMjk3QzM4LjgxNDQgNzEuMzU0MiAzOC41MjQzIDcxLjY0NDMgMzguMTk5OCA3MS44OTIzQzM3LjU1MjggNzIuNDMzNiAzNi44MzkgNzIuNzcyMiAzNi4xMjA4IDczLjE4NjNDMzUuNTEyNyA3My41NCAzNC42MTEyIDczLjUyNDkgMzMuOTQ3IDczLjM0OEMzMy43Mzk2IDczLjI3OTMgMzMuNTE0OSA3My4yODQ4IDMzLjMxMTEgNzMuMzYzNUMzMy4xMDczIDczLjQ0MjEgMzIuOTM3MiA3My41ODkxIDMyLjgyOTkgNzMuNzc5M0MzMi42MzE1IDc0LjEwNzEgMzIuNjI5MyA3NC41MTA0IDMyLjQ1NjggNzQuODU3NkMzMi4yNjA1IDc1LjI1MjMgMzEuMjk4NyA3NS41Nzc5IDMxLjA1NSA3NS45MzU5QzMwLjM4IDc2Ljk1NiAzMS41NTc1IDc3Ljc3MzQgMzIuMjQxMSA3OC42MTY2TDMyLjI5MDcgNzguNjc3QzMyLjU2MjkgNzguOTY0OCAzMi44ODUyIDc5LjIwMDkgMzMuMjQxOCA3OS4zNzM1QzMzLjY1NTggNzkuNjE5NCAzNC4xOTkzIDc5Ljc3NjggMzQuMzgyNiA4MC4yMDgxQzM0LjU5ODMgODAuNzI3OSAzNC40ODQgODAuODU1MSAzNC41MzE0IDgxLjQyMjNDMzQuNTMwMiA4MS43MDMxIDM0LjQ4NDMgODEuOTgxOSAzNC4zOTU2IDgyLjI0ODNDMzQuMzUzOCA4Mi4zOTczIDM0LjMzIDgyLjU1MDggMzQuMzI0NCA4Mi43MDU1QzM0LjM0OTMgODMuMjI4MSAzNC40NDg4IDgzLjc0NDQgMzQuNjE5OCA4NC4yMzg4QzM0Ljc2ODYgODQuNTE3IDM0LjkyMTggODQuNzk1MiAzNS4wNzcgODUuMDcxM0MzNS40NjUyIDg1Ljc1NzEgMzUuOTk3OSA4NS44MDY3IDM2LjcwMSA4NS41ODAyQzM3LjQwNCA4NS4zNTM4IDM4LjE1ODggODUuNTgwMiAzOC44MzYgODUuODU4NEMzOS44MzAyIDg2LjI1NzQgNDAuNjA2NSA4OC4xODU0IDQxLjc0MDkgODcuNzUxOUM0Mi42ODU1IDg3LjM4OTYgNDQuMDc0MyA4Ny4yMzY1IDQ1LjA5MjMgODcuMTk1NUM0Ni4zODYyIDg3LjE0MTYgNDcuNzUzNSA4Ny4yMTA2IDQ4Ljk0MzkgODcuODA1OEM0OS41NzU4IDg4LjEyMjkgNTAuMjc4OSA4OC45NjE4IDUwLjk0MzEgODguMzAxOEw1Ni44Mjg0IDgyLjIzOTdDNTcuMTIzOSA4MS45NDY0IDU3LjY0MTUgODEuNDk3OCA1Ny40NzU0IDgxLjExMzlMNTYuODk5NiA3OS43NzY4QzU2LjggNzkuNTQ1IDU2Ljc5IDc5LjI4NDUgNTYuODcxNiA3OS4wNDU3TDU2LjkxOSA3OC45MDEzQzU2Ljk5OTYgNzguNjY0OSA1Ny4xNjQ3IDc4LjQ2NjcgNTcuMzgyNyA3OC4zNDQ5TDU3Ljg3NjUgNzguMDY4OEM1OC4wNTg1IDc3Ljk2NzggNTguMjA0OSA3Ny44MTMyIDU4LjI5NiA3Ny42MjYxQzU4LjM4NzEgNzcuNDM5IDU4LjQxODMgNzcuMjI4NCA1OC4zODU1IDc3LjAyMjlMNTguNTQ1MSA3NS4zNzk1WlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2NhdGlvbk5hbWU6IExPQ0FUSU9OLkdHLFxyXG4gICAgc3BlY2lhbENpdHk6IGZhbHNlLFxyXG4gICAgcGF0aDogXCJNMzUuMzYxNyA4OC4xNzlDMzUuMzQ0NCA4OC4yMDcgMzUuMzI3MiA4OC40NDg2IDM1LjMxMjEgODguNDcyM0wzNC43OTY2IDg5LjE5NDdDMzQuNjE5OCA4OS40NDA2IDM0LjM4MjYgODkuNjAyMyAzNC41ODEgODkuODc0MUMzNC44NzQzIDkwLjI3NTIgMzUuNjg1MiA5MC44MTg2IDM1LjkzOTYgOTEuMjVDMzYuOTU5NyA5Mi45OTAzIDM3LjIzMzYgOTIuMTQ5MyAzNy4wODI2IDk0LjIzNjlDMzYuOTc5MyA5NS41NjE4IDM2LjUwOCA5Ni44MzE2IDM1LjcyMTggOTcuOTAzMUMzNS4wNzQ4IDk4Ljc5MTYgMzQuMDcyIDk5LjEyMTUgMzMuNDgzMyAxMDAuMDE5QzMyLjc4ODkgMTAxLjA3OCAzMi41NDUyIDEwMi41NTEgMzIuNjIwNyAxMDMuNzkzQzMyLjc1NjUgMTA1Ljc3MiAzMy44MDI1IDEwNy4wODIgMzQuOTMyNSAxMDguNTg5QzM2LjAxMDggMTEwLjAxNCAzNi45MDE1IDExMS41NjcgMzguNzE3MyAxMTIuMTNDNDAuNTgyOCAxMTIuNzA2IDQyLjQwNzMgMTEzLjE4OSA0Mi43MzI5IDExNS40OTJDNDIuOTQ4NiAxMTYuOTc0IDQyLjgyMzUgMTE3LjY5MiA0My41NDM4IDExOS4wMjdDNDQuMjQ5OSAxMjAuMzk2IDQ1LjA0MjMgMTIxLjcxOCA0NS45MTYgMTIyLjk4NkM0Ni45ODE0IDEyNC40NzkgNDcuMTA0MyAxMjguNjM3IDQ4LjY4OTQgMTI3LjU1NkM1MC45OTA1IDEyNS45ODggNTQuMzYzNCAxMjQuODc4IDU2LjMyMTYgMTI0Ljg1NEM2MC44Mjg5IDEyNC43OTggNjUuNDkzNiAxMjIuNzQ5IDcwLjA4MjggMTI1LjA4OUM3MS4yMjE1IDEyNS42NjkgNzMuNDk0NiAxMjYuMzE2IDc0LjY0MTkgMTI1Ljc1M0M3NS4wNzMyIDEyNS41MzggNzUuNDIyNiAxMjUuMTczIDc1LjgwNDMgMTI0Ljg3MUM3Ni40NTEzIDEyNC4zNjkgNzcuMTkxIDEyNC4wMzcgNzcuODcyNCAxMjMuNTk3Qzc4LjYxNDMgMTIzLjEyIDc5LjIwMDkgMTIyLjI3NSA3OS45ODE2IDEyMS44NjFDODAuODYzNiAxMjEuMzk1IDgxLjk3IDEyMS4xMDQgODIuODk5NSAxMjAuNjQyQzg0LjQ1NjUgMTE5Ljg2NiA4Ni4xMzQ0IDExOC43MTYgODcuNzc1NSAxMTguMTlDODkuMzI4MyAxMTcuNjk2IDkwLjYxNzkgMTE3LjM5MiA5Mi4wNjcxIDExNi41MzRDOTMuNTE2NCAxMTUuNjc2IDk0LjU1MzcgMTE0LjMyOCA5NS45NjQxIDExMy4zODNDOTcuNDM5MiAxMTIuMzk1IDk2LjQ1MzcgMTEzLjAwNCA5Ny43MzQ3IDExMS43NzRDOTguMTQ0NCAxMTEuMzgyIDk4LjU0MiAxMTAuOTc3IDk4LjkyNzMgMTEwLjU2Qzk4Ljk1MzEgMTEwLjUzNCA5OC4yNTQ0IDEwOS4zMTYgOTguMTk0IDEwOS4xNjlDOTcuNTIxMiAxMDcuNTMgOTYuNzUzNCAxMDUuMzc4IDk4LjUwNjcgOTguMTcwNUM5OS4wOTU1IDk1Ljc1MDggOTkuODU2OCA5My41MzYgMTAwLjAyOSA5MS4wNTM3QzEwMC4xOCA4OC44NzEzIDEwMC4xOCA4Ni4wNjM0IDEwMC4xOCA4My44NTkzQzEwMC4xOCA4Mi42MTcxIDk5LjM0MzUgODIuMDE5OCA5OC4zMjM0IDgxLjU1MThDOTcuMDU2OCA4MC45NjA0IDk1LjgyNjIgODAuMjk1MSA5NC42Mzc4IDc5LjU1OTFDOTIuMDM2OSA3Ny45NzE4IDg5LjcyMDggNzYuMzY1MiA4Ny44ODU1IDczLjg5MTZDODYuODI2NiA3Mi40NjM5IDg3LjE1NDQgNzEuNTkwNSA4Ni41OTE1IDY5Ljk2NDRDODYuMjQ0MyA2OC40ODI4IDg1LjM4ODIgNjYuMDMwOCA4NS41NTY0IDY0LjgwMTVDODUuNzM1NCA2My41MDc2IDg2LjIwMzQgNjMuMTA4NiA4Ni42NTE5IDYxLjgzNEM4Ny4xNjk1IDYwLjMzNTIgODcuODc5IDU5LjI1OTEgODguMjMwNiA1Ny43NjI0Qzg4LjYwOCA1Ni4xNjIyIDg4LjE0MjEgNTQuNDg4NyA4Ni42OTA4IDUzLjc3NDlDODUuNDE4NCA1My4xNDk0IDgzLjczMTkgNTMuMjM3OSA4My4wMzc1IDUxLjg0OUM4Mi42NDI4IDUxLjA2MTkgODIuNjcwOSA0OS44NDM0IDgyLjM0NTIgNDguOTc4NkM4MS45NzIxIDQ3Ljk5MDkgODEuMjQ1NCA0NS45NzIzIDgwLjQ1NiA0NS4yNTYzQzc4Ljk4NzQgNDMuOTIxNCA3Ny4zMDMxIDQ0LjIyNTUgNzUuNDc0MyA0My44MjY1QzczLjg0NzUgNDMuNTEyMyA3Mi4yOTE3IDQyLjkwNDMgNzAuODgyOSA0Mi4wMzIyQzY4LjIyMTcgNDAuNDEyNiA2Ni40OTg2IDM4LjI5OTEgNjQuNTY2MyAzNS45MTgzQzY0LjE1MjIgMzUuNDA3MSA2My43MjA5IDM0Ljg4MzEgNjMuMTMyMSAzNC41ODk4QzYxLjc1NDEgMzMuOTAxOCA1OS44ODIxIDM0LjQxOTQgNTguNDI2NCAzNC41MjA4QzU2LjgxNzYgMzQuNjMwOCA1NC4wMzM1IDMzLjI5OCA1Mi42OTIxIDMyLjQxNkM1Mi40MTQxIDMyLjI0OTggNTIuMTcyMiAzMi4wMjk4IDUxLjk4MDQgMzEuNzY5QzUxLjk1NjUgMzEuNzMzMyA1MS45MzU2IDMxLjY5NTggNTEuOTE3OCAzMS42NTY4QzQ2Ljg0OTkgMzIuMDQ1IDQ0LjI1MTIgMzMuMTkyMyAzOS43MzUzIDM1LjgwNEMzOC43OTggMzYuMzEzNyAzNy45MDM3IDM2Ljg5ODYgMzcuMDYxMSAzNy41NTNDMzYuMjg0NyAzOC4xOTk5IDM1Ljg3MDYgMzkuMDM2NyAzNS4xOTEzIDM5LjcwOTZDMzMuNjgxNyA0MS4yMTkyIDMyLjA0MDUgNDIuMTEyIDMwLjg3ODEgNDQuMDIyN0MyOS40NTQ4IDQ2LjM1NCAyNy40Mjc2IDQ4LjEyMDMgMjUuNDM0OSA0OS45NzI4QzI0LjQ5MjUgNTAuODUyNyAyNC45MTUxIDUyLjE5ODQgMjQuOTQ5NyA1My4zMTU1QzI0Ljk5MDYgNTQuNTUzNCAyNC41Nzg3IDU1LjU2NDggMjQuMDM1MiA1Ni42NzEyQzIzLjQxNDEgNTcuOTI2MyAyMy4wMjE3IDU5LjE1MzQgMjIuMzYxNyA2MC4yNDQ2QzIxLjg3NzIgNjEuMDYzMiAyMS4yMTM2IDYxLjc2MTQgMjAuNDIwOCA2Mi4yODY5QzE5LjM1NTQgNjIuOTk0MyAxNy45MDQxIDYzLjQzNjQgMTYuNjU1NCA2My42NjcxQzE1LjU4NzkgNjMuODYzNCAxNC41MzMzIDYzLjYxOTcgMTMuNDgzIDY0LjA1NTNDMTIuMzYzOCA2NC41MTkgMTIuMTY5NyA2NS4zNjQ0IDEyLjEzMDkgNjYuNDQyN0MxMi4wNTU0IDY4LjM5ODcgMTMuOTQ4OSA2OC4xODk1IDE0Ljk2MDMgNjkuMjYxNEMxNi4wMTQ5IDcwLjM4MjggMTYuNDQ4NCA3MS42NTA5IDE3LjcxODYgNzIuNjIxM0MxOS41NzMzIDc0LjAzNiAyMS4zMDI5IDczLjE3MTMgMjMuNDY1OSA3My4yMDE0TDI3LjE4MzkgNzIuODI4NEMyNy41NTQ4IDcyLjc5MTcgMjguNzgxOSA3MS42NDY1IDI5LjAxOTEgNzEuOTMzNEwzMC4zMzI1IDczLjgyMjVDMzAuNDA2NyA3My45MjM3IDMwLjUxNCA3My45OTU3IDMwLjYzNTcgNzQuMDI2QzMwLjc1NzQgNzQuMDU2NCAzMC44ODU5IDc0LjA0MzEgMzAuOTk4OSA3My45ODg2TDMxLjIxNDYgNzMuODgyOUMzMS40NTY0IDczLjc2MTQgMzEuNjYwMSA3My41NzU2IDMxLjgwMzMgNzMuMzQ1OUMzMS44OTYxIDczLjE5NzEgMzEuOTQ1NCA3My4wMjUzIDMxLjk0NTYgNzIuODQ5OUMzMS45NDU2IDcyLjEyNzUgMzEuNjUyMyA3MC44MjcgMzIuODY0MyA3MS4xMzk3QzMzLjQwMTMgNzEuMjc3OCAzMy45NzcxIDcyLjI4MjcgMzQuNTcwMiA3Mi4yNTI1QzM1LjE0NjUgNzIuMjQyMSAzNS43MTMxIDcyLjEwMjggMzYuMjI4NiA3MS44NDQ5TDM2LjM5MDQgNzEuNzUwMUMzNi45MjUzIDcxLjM2NjEgMzcuMzY3NSA3MC44NjczIDM3LjY4NDMgNzAuMjlDMzcuOTg0MSA2OS44MDI3IDM4LjAyNzIgNjkuMzk3MiAzOC4wNzY4IDY4Ljg1ODFDMzguMTI2NCA2OC4zMTg5IDM4LjQzMDUgNjcuODI5NCAzOS4yMjYzIDY3Ljg3MjVMNDAuMDg4OSA2Ny41OTg2QzQwLjUyMDIgNjcuMjk4OCA0MC45MDQxIDY3LjU0MjUgNDEuMzEzOSA2Ny41NTU1QzQxLjcxMjcgNjcuNTYzNCA0Mi4xMDg5IDY3LjQ5IDQyLjQ3ODQgNjcuMzM5OEM0My4xMDM4IDY3LjA4MSA0My4yMTE3IDY2LjY5MjggNDMuMzU2MiA2Ni4xMTdDNDMuNTAwNyA2NS41NDEyIDQzLjc3NDUgNjQuOTUyNSA0NC4yNjg0IDY0LjYyNDdDNDQuNjM5MiA2NC40MDIxIDQ1LjA0MzMgNjQuMjQwNSA0NS40NjUzIDY0LjE0NTlDNDYuNDk0IDYzLjg2MzQgNTMuODc2IDYyLjAxNTIgNTQuMDQ0MiA2My44NjU2TDU1LjA1NTcgNzIuNDkxOUM1NS4wODM3IDcyLjc3ODggNTUuMjQxMiA3My40NzEgNTUuNDg3IDczLjYyNjNMNTUuNTczMyA3My42ODI0QzU1LjY5MjcgNzMuNzU4OCA1NS44Mjc5IDczLjgwNzIgNTUuOTY4NyA3My44MjRDNTYuMTA5NSA3My44NDA4IDU2LjI1MjIgNzMuODI1NiA1Ni4zODYzIDczLjc3OTRMNTguMjc3NiA3My4xMzI0QzU4LjQwNzEgNzMuMDg4IDU4LjU0NDcgNzMuMDcyMyA1OC42ODA4IDczLjA4NjVDNTguODE2OSA3My4xMDA3IDU4Ljk0ODMgNzMuMTQ0NCA1OS4wNjU4IDczLjIxNDZDNTkuMTgzMiA3My4yODQ5IDU5LjI4NCA3My4zNzk5IDU5LjM2MDkgNzMuNDkzMUM1OS40Mzc4IDczLjYwNjMgNTkuNDg5MSA3My43MzQ5IDU5LjUxMTIgNzMuODdMNTkuNTY1MSA3NC4xOTU2QzU5LjYyOTggNzQuNTkwMyA2MC43MzE4IDc1LjQxNDEgNjAuMzgwMyA3NS42MDZMNjAuMzQxNSA3NS44NjI3QzYwLjEzNjYgNzUuOTc3IDU5Ljk3OTIgNzcuNDU2NCA1OS45MTAyIDc3LjY3ODVMNTkuODYyNyA3Ny44MTIyQzU5Ljc4NzIgNzguMDI3OSA1OC41MDE5IDc4LjcxMTUgNTguNTk2OCA3OC45MjcyTDU5LjE0MjQgODAuODI1QzU5LjI5NzcgODEuMTgzIDU5LjAwMjMgODIuMjQ4NCA1OC43MTExIDgyLjUyMjJMNTEuNTk0NCA4OS43MzgyQzUwLjk2NDYgOTAuMzU1IDQ5LjY2ODUgODkuNTcgNDkuMDY5IDg5LjI3NDVDNDcuOTM2OCA4OC43MTgxIDQ2LjQzMTUgODguNjU1NiA0NS4xODcxIDg4LjcwNTJDNDQuMDE2MSA4OC43OTM4IDQyLjg2MTcgODkuMDM1OSA0MS43NTM4IDg5LjQyNTVDNDAuNjc1NSA4OS44MzA5IDM5Ljc0MzkgODguMDQzMSAzOC43OTkzIDg3LjY3MjJDMzYuODMyNSA4Ni44OTggMzcuNDAxOCA4Ni45MTc0IDM2LjU2NTEgODcuMTgwNUMzNi4wNzUyIDg3LjM4OSAzNS42NTcgODcuNzM2IDM1LjM2MTcgODguMTc5Vjg4LjE3OVpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5JQyxcclxuICAgIHNwZWNpYWxDaXR5OiB0cnVlLFxyXG4gICAgcGF0aDogXCJNMzMuNzY1OCA4NS42MDE4TDMyLjcyMiA4My44MjI2QzMyLjYxMzcgODMuNjM4IDMyLjU2MDUgODMuNDI2MiAzMi41Njg5IDgzLjIxMjNWODMuMDg3MkMzMi41ODIyIDgyLjg5NDkgMzIuNjUxMSA4Mi43MTA1IDMyLjc2NzMgODIuNTU2N0MzMi44NjQ5IDgyLjQyIDMyLjkzMTIgODIuMjYzNSAzMi45NjE0IDgyLjA5ODNDMzIuOTkxNSA4MS45MzMxIDMyLjk4NDkgODEuNzYzMiAzMi45NDE4IDgxLjYwMDlDMzIuODk4NyA4MS40Mzg2IDMyLjgyMDQgODEuMjg3OCAzMi43MTIzIDgxLjE1OTJDMzIuNjA0MiA4MS4wMzA3IDMyLjQ2OTEgODAuOTI3NiAzMi4zMTY2IDgwLjg1NzNMMzEuMzIwMiA4MC4zOTc5TDMxLjI4MzYgODAuNDI2TDMxLjE2NSA4MC4yNzkzTDMxLjA2MTQgODAuMTk5NUwyOS41NDc1IDc4LjEwMTFMMjkuMDIzNCA3NS42NDkxQzI4Ljg3MTMgNzUuMjY2NyAyOC42MDY0IDc0LjkzOTUgMjguMjY0IDc0LjcxMTFDMjcuOTIxNiA3NC40ODI3IDI3LjUxNzggNzQuMzYzOCAyNy4xMDYyIDc0LjM3MDJIMjcuMDI4NkwyMi4zNjM5IDc1LjM5ODlMMjEuNTc0NiA3NS40Nzg3QzIxLjM0NzUgNzUuNTAwNiAyMS4xMzI1IDc1LjU5MDkgMjAuOTU3OCA3NS43Mzc1TDIwLjQyMyA3Ni4xODYxQzIwLjI4ODEgNzYuMjk4IDIwLjE4MSA3Ni40Mzk1IDIwLjEwOTkgNzYuNTk5NkMyMC4wMzg4IDc2Ljc1OTcgMjAuMDA1NyA3Ni45MzQxIDIwLjAxMzIgNzcuMTA5MUwyMC4wNzc5IDc4LjYzNkMyMC4wOSA3OC45MTYyIDIwLjIwNDggNzkuMTgyMiAyMC40MDA1IDc5LjM4MzFDMjAuNTk2MyA3OS41ODM5IDIwLjg1OTEgNzkuNzA1NyAyMS4xMzg5IDc5LjcyNTFDMjIuMDI5NiA3OS43ODExIDIzLjEwNTggNzkuNDgxNCAyMy41NDc5IDgwLjQ0OTdDMjMuOTkgODEuNDE4IDIzLjg1NDEgODIuNzE2MyAyMy4zMzIyIDgzLjYxOTlDMjMuMjA3NyA4My44MzY4IDIzLjA1ODYgODQuMDM4NyAyMi44ODggODQuMjIxNkMyMi4zNTM0IDg0LjgwNSAyMS42MTAxIDg1LjE1MzggMjAuODE5OCA4NS4xOTJDMTkuOTAzMiA4NS4yMTc5IDE5LjY4NTQgODQuOTMzMiAxOS4wOTQ1IDg0LjQyNDNDMTguNzE0OSA4NC4wOTg2IDE4LjI4MTUgODQuMTU0NyAxNy44MiA4NC4xNzJDMTcuNjIzNCA4NC4xODI3IDE3LjQzMjkgODQuMjQzNiAxNy4yNjY2IDg0LjM0ODhDMTcuMTAwMiA4NC40NTQgMTYuOTYzNSA4NC41OTk5IDE2Ljg2OTUgODQuNzcyOEMxNi43NzU1IDg0Ljk0NTggMTYuNzI3MyA4NS4xMzk4IDE2LjcyOTQgODUuMzM2NkMxNi43MzE2IDg1LjUzMzQgMTYuNzg0IDg1LjcyNjQgMTYuODgxOCA4NS44OTcyQzE3LjE0MjggODYuMzM5MyAxNy41NjU1IDg2LjM1MDEgMTcuOTM2NCA4Ni42MTU0QzE4LjQxOTUgODYuOTU2MSAxOC41NjQgODcuNjMzMyAxOC42MzMgODguMTkxOUMxOC43MjM2IDg4LjkyNTEgMTguMzYzNCA4OS42NjQ4IDE4LjQ4ODUgOTAuNDAyNEMxOC42NDM4IDkxLjMxMjQgMTkuNTY2OCA5MS40OTU4IDIwLjMxMDggOTEuODEyOEMyMC44MjA3IDkyLjA0NzUgMjEuMzY3IDkyLjE5MzQgMjEuOTI2MSA5Mi4yNDQxQzI0LjIyOTMgOTIuNDQwMyAyNS44MDggOTEuNDU5MSAyNy41NjM0IDkwLjE5MUwyOS4yMjgzIDg4Ljk3NjhDMjkuODIxNCA4OC41NDU1IDMwLjM2NDggODguMDc1NCAzMS4xMDAyIDg3Ljg5ODZDMzEuMjM2OSA4Ny44NTMxIDMxLjM4MzggODcuODQ4MiAzMS41MjMxIDg3Ljg4NDZDMzEuNjYyNSA4Ny45MjEgMzEuNzg4MyA4Ny45OTcgMzEuODg1MyA4OC4xMDM0QzMyLjA4OCA4OC4yOTk3IDMyLjMxNjYgODguMDc3NSAzMi41OTQ4IDg3LjgzMTdMMzIuNzEzNCA4Ny43MjgyTDMzLjUyMjEgODcuMDIzQzMzLjcyMDIgODYuODUwNCAzMy44NTI1IDg2LjYxNDcgMzMuODk2OSA4Ni4zNTU4QzMzLjk0MTMgODYuMDk2OCAzMy44OTUgODUuODMwNSAzMy43NjU4IDg1LjYwMThWODUuNjAxOFpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5CUyxcclxuICAgIHNwZWNpYWxDaXR5OiB0cnVlLFxyXG4gICAgcGF0aDogXCJNMTg0LjM1MiAyNDEuNjg3QzE4NC40NDMgMjQxLjU1OCAxODQuNTMzIDI0MS40MzEgMTg0LjYzIDI0MS4zMDRDMTg0LjkyMSAyNDAuOTE4IDE4NS4yNTEgMjQwLjQ1NCAxODUuMSAyMzkuOTk1QzE4NC45NzUgMjM5LjYxNyAxODQuNTcyIDIzOS40MTcgMTg0LjIwNSAyMzkuMjU3QzE4My42OTQgMjM5LjA0MSAxODMuMTcgMjM4LjgyNiAxODIuNjc5IDIzOC41NTZDMTgxLjYgMjM3Ljk3MiAxNzguNzYgMjM2Ljk0NyAxNzcuNjAyIDIzNi41MTZDMTc2Ljc2NSAyMzYuMjA1IDE3Ni4wOTIgMjM2LjYxOSAxNzUuNyAyMzcuMzk0QzE3NS42MzMgMjM3LjUzNCAxNzUuNTczIDIzNy42NzggMTc1LjUyMSAyMzcuODI1QzE3NS4yMzIgMjM4LjU2NyAxNzQuNzk4IDIzOS42IDE3NC4xMzggMjQwLjA4M0MxNzMuNTg0IDI0MC40ODYgMTcyLjgzMiAyNDAuNzg2IDE3Mi4yMyAyNDEuMTQ0QzE3MC44MDIgMjQyLjAwNyAxNjkuNzk5IDI0Mi44MzcgMTY4LjQxNSAyNDMuNzU4QzE2Ni43NyAyNDQuODE1IDE2NS4yNTEgMjQ2LjA1NSAxNjMuODg2IDI0Ny40NTRDMTYzLjA4OCAyNDguMyAxNjIuNTQ3IDI0OS4zNTIgMTYxLjc1NyAyNTAuMjA0QzE2MS40ODUgMjUwLjUyMSAxNjEuMTY0IDI1MC43OTEgMTYwLjgwNiAyNTEuMDA2QzE2MC4yMiAyNTEuMzI1IDE1OS4zMzMgMjUxLjAwNiAxNTguOTM5IDI1MS42MjlDMTU4LjAyOSAyNTMuMDk0IDE1OC45NjMgMjU0Ljg0MSAxNTkuNjY2IDI1Ni4wMzFDMTYwLjM0MSAyNTcuMTc2IDE2Mi4xOTEgMjU4LjQ4MyAxNjIuNzE1IDI1OS42OTdDMTYzLjA1OCAyNjAuNDg5IDE2My4yNSAyNjEuMjQ4IDE2My44NzcgMjYxLjg3M0MxNjQuNTA1IDI2Mi40OTkgMTY2LjAxNSAyNjIuNTQgMTY2Ljg5NyAyNjIuNTk2QzE2Ny44OTcgMjYyLjY2IDE2OC45MjggMjYxLjcwOSAxNjkuNzUgMjYxLjIxNUMxNzAuMDg1IDI2MC45OTIgMTcwLjQ0NyAyNjAuODEyIDE3MC44MjggMjYwLjY4MUMxNzEuMjMgMjYwLjU3NyAxNzEuNjQ1IDI2MC41MzMgMTcyLjA2IDI2MC41NDlDMTc0LjAyIDI2MC41NDkgMTc1Ljc2OSAyNjEuMTgxIDE3Ny42NzcgMjYxLjQzNUMxNzguMzQ4IDI2MS41MjYgMTc5LjExOCAyNjEuNjcgMTc5Ljc1OSAyNjEuMzczQzE4MC4yNzYgMjYxLjEzMyAxODAuODM3IDI2MC4zOTQgMTgwLjU5MyAyNTkuNzk5QzE4MC41MTYgMjU5LjYzNSAxODAuNDA3IDI1OS40ODkgMTgwLjI3NCAyNTkuMzY3QzE3OS45MzUgMjU5LjA1NiAxNzkuNTQyIDI1OC44MDkgMTc5LjExNCAyNTguNjRDMTc4LjM4MSAyNTguMzQ2IDE3Ny42NzMgMjU3Ljk5MyAxNzYuOTk4IDI1Ny41ODRDMTc2LjUxMSAyNTcuMjc3IDE3NS43OTMgMjU2Ljg1MyAxNzUuNjU1IDI1Ni4yNDJDMTc1LjQxNyAyNTUuMTk5IDE3Ny4wMTUgMjU1LjEzOCAxNzcuNTMxIDI1NC44NTZDMTc4LjAwMiAyNTQuNjIzIDE3OC40NDQgMjU0LjMzNCAxNzguODQ0IDI1My45OTNDMTc5LjcwNyAyNTMuMTkzIDE3OS45OTggMjUxLjU2MyAxODAuNDI1IDI1MC40OTNMMTgyLjIzNCAyNDUuOTY0QzE4Mi44MjcgMjQ0LjQ3NCAxODMuNDQ2IDI0My4wMDEgMTg0LjM1MiAyNDEuNjg3WlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2NhdGlvbk5hbWU6IExPQ0FUSU9OLkRHLFxyXG4gICAgc3BlY2lhbENpdHk6IHRydWUsXHJcbiAgICBwYXRoOiBcIk0xNTguMzIgMTg5LjYyMUMxNTcuNzcyIDE4Ny44ODUgMTU2Ljg1NiAxODcuMTQ1IDE1NS42NjMgMTg2Ljg5NUMxNTQuODg0IDE4Ni43MzMgMTUzLjk4OSAxODYuNTEzIDE1My4wMDQgMTg2LjYzQzE1MS40NzkgMTg2Ljg0OCAxNTAuMDIgMTg3LjM5NyAxNDguNzI5IDE4OC4yMzhDMTQ2LjcyMiAxODkuNjYgMTQ3LjI0MSAxOTEuMzY4IDE0Ni4wNiAxOTMuMjc0QzE0NS4zMzUgMTk0LjQ0MyAxNDQuMzM0IDE5NS40NjMgMTQzLjA5NCAxOTUuOTJDMTQyLjA5NCAxOTYuMjYyIDE0MS4wNzYgMTk2LjU1IDE0MC4wNDUgMTk2Ljc4M0MxMzguMDE2IDE5Ny4yODMgMTM3LjcwMSAxOTguNTc1IDEzOC42MTEgMjAwLjQ4OEMxMzkuNjU1IDIwMi42NzkgMTQwLjc4MiAyMDQuNDY3IDEzOS45MjYgMjA3LjAzN0MxMzkuNTI1IDIwOC4yNDcgMTM4Ljg1OSAyMDkuMzQzIDEzOC40ODEgMjEwLjU2M0MxMzguMTQ4IDIxMS42NjYgMTM4LjA1NiAyMTIuODI3IDEzOC4yMTIgMjEzLjk2OEMxMzguMzY3IDIxNS4xMDkgMTM4Ljc2NyAyMTYuMjAzIDEzOS4zODMgMjE3LjE3NUMxNDAuMDEzIDIxOC4xNDIgMTQwLjkwOCAyMTguOTY4IDE0MS45ODYgMjE5LjIwM0MxNDQuODM3IDIxOS44MjIgMTQ1LjczNCAyMTYuODMgMTQ2Ljg2OCAyMTQuODQyQzE0Ny45ODUgMjEyLjg4NiAxNDkuNzE1IDIxMS45OCAxNTEuNDM4IDIxMC43NzlDMTUyLjg0IDIwOS44MDIgMTU0Ljc3IDIwOC4yMTcgMTU1Ljg5MiAyMDYuODk3QzE1OS4wNjQgMjAzLjE1MSAxNTkuNjg3IDE5OC4xMDUgMTU5LjE0NiAxOTMuMTY2QzE1OC45ODYgMTkxLjk2IDE1OC43MSAxOTAuNzczIDE1OC4zMiAxODkuNjIxVjE4OS42MjFaXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGxvY2F0aW9uTmFtZTogTE9DQVRJT04uR0osXHJcbiAgICBzcGVjaWFsQ2l0eTogdHJ1ZSxcclxuICAgIHBhdGg6IFwiTTYwLjYwNDYgMjU2LjEzMkM1OS43NjEzIDI1NS40NzYgNTkuMDExOCAyNTQuNzA4IDU4LjM3NjkgMjUzLjg0OEM1Ny42OTExIDI1Mi45NiA1Ny4wMjI1IDI1MS4zNDcgNTUuNzg5IDI1MS4xNjNDNTUuMDU3OSAyNTEuMDU2IDU0LjMyNDYgMjUxLjI5NSA1My42MzI0IDI1MS41NjVDNTIuMzM4NCAyNTIuMDcxIDUxLjM4NzQgMjUyLjc5MiA0OS45NjYyIDI1Mi45MzhDNDguNjI0IDI1My4wNzUgNDcuMjY5MSAyNTIuODY4IDQ2LjAyODIgMjUyLjMzOUM0NS44MDc3IDI1Mi4yMzIgNDUuNTc5MSAyNTIuMTQ0IDQ1LjM0NDYgMjUyLjA3NEM0NC40OTkyIDI1MS44NTggNDMuNjY0NiAyNTIuMjg5IDQzLjExNjggMjUyLjkwNEM0Mi42NjQ1IDI1My40MTcgNDIuMjQ4IDI1My45NjEgNDEuODcwMyAyNTQuNTMyQzQxLjcxMDUgMjU0LjgwOCA0MS41MTIzIDI1NS4wNiA0MS4yODE2IDI1NS4yOEM0MS4wNTMgMjU1LjQ3NCA0MC43NzQ4IDI1NS41OTUgNDAuNTI4OSAyNTUuNzY4QzM5LjM3MyAyNTYuNTY4IDM5LjQ2MzYgMjU4LjYyMSAzOS4yNjk1IDI1OS45MDJMMzguODA1OCAyNjIuOTg4QzM4LjQ5OTYgMjY1LjAzNSA0Mi4yNDU2IDI2NC4zMzIgNDMuMjc4NiAyNjQuNDUyQzQ0LjcxNyAyNjQuNjIzIDQ1Ljk3NjUgMjY1LjQyNSA0Ny4wNzIgMjY2LjMyNkM0Ny45NDc2IDI2Ny4wNDUgNDguNDM3MSAyNjguNDIgNDkuNzI2OCAyNjguNDUzQzUyLjk5NCAyNjguNTM1IDU1LjM1MTIgMjYzLjc0NSA1OC43NzE1IDI2NS4zMjhDNTguOTExNyAyNjUuMzkzIDU5LjA0NzYgMjY1LjQ2NiA1OS4xODk5IDI2NS41MjRDNTkuNjMzIDI2NS43MTggNjAuMTI4OCAyNjUuNzU1IDYwLjU5NTYgMjY1LjYyOUM2MS4wNjI1IDI2NS41MDMgNjEuNDcyNiAyNjUuMjIyIDYxLjc1ODQgMjY0LjgzMkM2Mi42NTEgMjYzLjcxMyA2My4yNjU5IDI2Mi4zOTkgNjMuNTUyNyAyNjAuOTk4QzYzLjc2ODQgMjU5Ljk1NCA2My45NjQ2IDI1OC4zNzkgNjMuMDg2OSAyNTcuNTYyQzYyLjcxMzggMjU3LjIxNSA2Mi4yMjQyIDI1Ny4wNDcgNjEuNzU2MyAyNTYuODI5QzYxLjM1MDMgMjU2LjYzNSA2MC45NjQ1IDI1Ni40MDIgNjAuNjA0NiAyNTYuMTMyVjI1Ni4xMzJaXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGxvY2F0aW9uTmFtZTogTE9DQVRJT04uREosXHJcbiAgICBzcGVjaWFsQ2l0eTogdHJ1ZSxcclxuICAgIHBhdGg6IFwiTTg1LjM3NTMgMTY1LjYxNEM4NS4zMzM0IDE2NS41MDYgODUuMjg1MSAxNjUuNDAxIDg1LjIzMDggMTY1LjI5OUM4NS4xNjE3IDE2NS4xNjMgODUuMDgyIDE2NS4wMzYgODUuMDAyMiAxNjQuOTA2Qzg0LjQxNzcgMTYzLjk1NSA4My43OTY2IDE2Mi45OTEgODMuMzAyOCAxNjEuOTg2QzgzLjExMDggMTYxLjU5NiA4Mi40ODk3IDE2MC4zNTYgODIuMTAxNSAxNjAuMTE5QzgxLjM2NCAxNTkuNjY2IDgwLjA1NzEgMTU5LjI4IDc5LjMzODkgMTU5LjU5OUM3OC43OTMzIDE1OS44NCA3Ny41OTQzIDE2MS4yMDggNzcuMjAzOSAxNjEuNjU0Qzc2LjMwMDMgMTYyLjY5NiA3NC4yMjU3IDE2My4wMTcgNzMuNDM4NSAxNjMuMDIxQzcyLjkxMjQgMTYyLjk5NSA3Mi4zOTEyIDE2Mi45MDcgNzEuODg1OCAxNjIuNzU4QzcxLjUxNDggMTYyLjY3IDcwLjg1NDkgMTYyLjQyIDcwLjUwMTIgMTYyLjY0NEM3MC4xNDc2IDE2Mi44NjggNzAuMDkzNiAxNjMuMjY5IDcwLjAzNTQgMTYzLjYyM0M2OS45NjY0IDE2NC4wNTQgNjkuNzUwNyAxNjQuODkxIDY5LjY2MjMgMTY1LjMxOEM2OS40ODMzIDE2Ni4xNjYgNjkuNDQ2NyAxNjcuMDQzIDY5LjMwODYgMTY3Ljg5M0M2OS4xNDA0IDE2OS4wMTUgNjguOTI0OCAxNzAuMTM4IDY5LjUyNDMgMTcxLjI2NEM2OS43MDMzIDE3MS41OTIgNjkuNDQwMiAxNzMuNDIgNjkuNTA0OSAxNzMuNzk2QzY5LjU4OSAxNzQuMjk2IDY5Ljk1MTMgMTc1LjY0MiA3MC40MTI4IDE3Ni4xNjhDNzEuMzE2NCAxNzcuMjIzIDcyLjI1ODkgMTc3LjgyMiA3My40NjIyIDE3OC42NDJDNzQuMzExOSAxNzkuMjIgNzUuMzM2MyAxNzkuODI4IDc2LjMyODQgMTc5Ljg3MUM3Ny42ODI3IDE3OS45MzEgNzkuMDg0NSAxNzkuODcxIDgwLjM2NTUgMTc5LjMxN0M4MS4zMjk1IDE3OC44ODUgODIuMDMwNCAxNzguNDg0IDgyLjk1MzQgMTc3Ljk4NEM4My45MjM5IDE3Ny40NjIgODMuOTQ5NyAxNzUuMjkgODQuMTAwNyAxNzQuMzE4Qzg0LjI3OTcgMTczLjE2OCA4My44ODUxIDE3MS43NzMgODMuOTMyNSAxNzAuMzU2QzgzLjk1ODQgMTY5LjYxOCA4NC40ODI0IDE2OC41ODMgODQuOTQxOCAxNjguMDFDODUuMjI3OCAxNjcuNjg5IDg1LjQxOTcgMTY3LjI5NSA4NS40OTYyIDE2Ni44NzNDODUuNTcyNyAxNjYuNDUgODUuNTMwOCAxNjYuMDE0IDg1LjM3NTMgMTY1LjYxNFYxNjUuNjE0WlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2NhdGlvbk5hbWU6IExPQ0FUSU9OLlVTLFxyXG4gICAgc3BlY2lhbENpdHk6IHRydWUsXHJcbiAgICBwYXRoOiBcIk0xOTQuMzQxIDIxNi45MzhDMTk0LjA3NyAyMTYuNTU5IDE5My43NDQgMjE2LjIzMiAxOTMuMzYgMjE1Ljk3NEMxOTIuMTg4IDIxNS4yNDUgMTkwLjc5NiAyMTQuOTUyIDE4OS40MjkgMjE1LjE0NkMxODcuMzQ4IDIxNS40MiAxODUuMzU3IDIxNC41NiAxODMuNDMzIDIxMy45QzE4Mi40NjMgMjEzLjU2NiAxODEuNDcyIDIxMy4yOTYgMTgwLjQ2NiAyMTMuMDkxQzE3OS41MzIgMjEyLjkwMyAxNzguNjM1IDIxMy40MzggMTc3LjgyNCAyMTMuODg1QzE3Ni44MDYgMjE0LjQ0MyAxNzYuMzE0IDIxNi4yMTIgMTc1LjUzNiAyMTcuMDEyQzE3NC43NTcgMjE3LjgxMiAxNzIuMDYyIDIxOS4zNiAxNzEuMDc2IDIxOS45NzdDMTcwLjIxMyAyMjAuNTEgMTY3LjU0MSAyMjAuMDQyIDE2Ny40ODEgMjIxLjIxNUMxNjcuNDIxIDIyMi4zODggMTY5Ljg3MyAyMjUuMTE4IDE3MC41NzggMjI2LjAxOEwxNzMuODEzIDIzMC4xNTZDMTc0LjQxNCAyMzAuOTI4IDE3NS4wMTYgMjMxLjY5OSAxNzUuNjIgMjMyLjQ2OEMxNzYuMTEyIDIzMy4wOTggMTc2LjY4MyAyMzQuMjQ3IDE3Ny40NyAyMzQuNTIxQzE3OC41MTggMjM0Ljg4MyAxNzkuOTUgMjM0LjYxMiAxODAuODQzIDIzNS4zNTFDMTgxLjIzOCAyMzUuNjc3IDE4MS41MiAyMzYuMDIyIDE4MS45NzMgMjM2LjMxNUMxODIuNjIgMjM2LjcyMyAxODQuOTY5IDIzNy4xMzEgMTg1LjYwNSAyMzcuNTRDMTg1Ljk4NyAyMzcuODA1IDE4Ni40IDIzOC4wMjIgMTg2LjgzNCAyMzguMTg3QzE4OC4zMTYgMjM4LjY5NCAxODkuNzAzIDIzNy43MzIgMTg5LjYyMyAyMzYuMTFDMTg5LjU5NSAyMzUuNTM1IDE4OS4zNyAyMzQuOTc4IDE4OS4zNTggMjM0LjM4NUMxODkuMzQgMjMzLjQyMSAxODkuMzU4IDIzMi40NDQgMTg5LjQzNSAyMzEuNDkxQzE4OS40OTYgMjMwLjY2NyAxODkuNTg4IDIyOS44NDMgMTg5LjcxMyAyMjkuMDI2QzE4OS44IDIyOC40NzIgMTg5LjY2NCAyMjcuNDk1IDE5MC4zODIgMjI3LjMyMkMxOTEuMjQ1IDIyNy4xMDcgMTkxLjU5NiAyMjguNTg4IDE5Mi41MTkgMjI4LjYzNEMxOTMuNTk3IDIyOC42ODMgMTk0LjM0NCAyMjguMDMgMTk0LjQwNiAyMjYuOTcxQzE5NC40NzkgMjI1LjcyNiAxOTQuNDA2IDIyNC40NSAxOTQuNzkyIDIyMy4yNjhDMTk0Ljk1NiAyMjIuNzc2IDE5NS4yIDIyMi4zMSAxOTUuMzM4IDIyMS44MDhDMTk1LjY5OCAyMjAuNTE0IDE5NS4zMDEgMjE4LjQzOSAxOTQuNTg3IDIxNy4yNzlDMTk0LjUxIDIxNy4xNzMgMTk0LjQyOCAyMTcuMDU5IDE5NC4zNDEgMjE2LjkzOFpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5TSixcclxuICAgIHNwZWNpYWxDaXR5OiB0cnVlLFxyXG4gICAgcGF0aDogXCJNNjkuNTAyNyAxNDQuNjg4QzY4LjcwMDUgMTQ0LjcyNSA2Ny40NzEyIDE0NC42MTkgNjYuNzg3NiAxNDUuMDIyQzY2LjEwMzkgMTQ1LjQyNiA2NC44ODMzIDE0Ni40NSA2NC42ODkyIDE0Ny4yNjdDNjQuNDU0MSAxNDguMjYyIDY0LjcyOCAxNDkuNTkgNjUuMzk4NyAxNTAuMzQ5QzY2LjYzMjMgMTUxLjc0NSA2OC4zODM1IDE1My4zMjMgNjkuMzE1MSAxNTUuNDgyQzY5LjgzOTIgMTU2LjcgNzAuNjkxIDE1OS4yMjggNzAuNTYzOCAxNjAuNTQzQzcwLjQ2MjQgMTYxLjU3NiA3My4wMzk1IDE2Mi4yMjYgNzQuOTMwOSAxNjEuNjIyQzc1LjkzNTggMTYxLjI5NiA3Ny4zMTYxIDE2MC4wMTMgNzcuNzM0NCAxNTkuMDY4Qzc3Ljk1MDEgMTU4LjU2NiA3OC42NDI0IDE1Ny41OCA3OC42NjgyIDE1Ny4wMzVDNzguOTMzNSAxNTEuMjQgNzUuNDUyOCAxNDYuMjUyIDcwLjgxODMgMTQ0LjgyNkM3MC4zOTA0IDE0NC43MDggNjkuOTQ1OCAxNDQuNjYxIDY5LjUwMjcgMTQ0LjY4OFYxNDQuNjg4WlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2NhdGlvbk5hbWU6IExPQ0FUSU9OLkdXLFxyXG4gICAgc3BlY2lhbENpdHk6IGZhbHNlLFxyXG4gICAgcGF0aDogXCJNMTg1LjgyMSAxMDIuMzI0QzE4NS43NDEgMTAyLjEzOSAxODUuNjQ2IDEwMS45NjIgMTg1LjUzNiAxMDEuNzk0QzE4NS4xNDEgMTAxLjE4OCAxODQuNDU4IDEwMC44MjEgMTgzLjk2NiAxMDAuMjg0QzE4Mi42NzIgOTguODczNSAxODEuNjc0IDk3LjE2NzYgMTgwLjc1NyA5NS40ODk4QzE3OC45NjkgOTIuMjIwNCAxNzcuNDEgODguNzE1OSAxNzQuNTU1IDg2LjIwNTdDMTczLjI4NyA4NS4wOTA3IDE3Mi44OTIgODIuNjk2OSAxNzIuMzY4IDgxLjE0NjNDMTcxLjc2IDc5LjMzNjkgMTcxLjE3NSA3Ny41MjExIDE3MC41MzMgNzUuNzI0NkMxNzAuMzAzIDc1LjAzOTYgMTcwLjAzMSA3NC4zNjk4IDE2OS43MTcgNzMuNzE5QzE2Ny42ODYgNjkuNzQ2NSAxNjMuOTE0IDY3LjQyMTcgMTYwLjU5MSA2NC42MjQ2QzE2MC41NjMgNjQuNTk5NyAxNjAuNTM2IDY0LjU3MyAxNjAuNTExIDY0LjU0NDhDMTQ1LjUwMyA0Ni43NTk0IDEzMC4wNzEgNC42NjcwNCAxMjkuMjAyIDIuMjc3NTNDMTI5LjE3NiAyLjIwNjYxIDEyOS4xMzggMi4xNDA4NSAxMjkuMDg5IDIuMDgzNDRMMTI3LjUyNiAwLjIzMDkyNUMxMjcuNDYxIDAuMTU0MTkgMTI3LjM4IDAuMDkzNTU5IDEyNy4yODcgMC4wNTM4MjczQzEyNy4xOTUgMC4wMTQwOTU2IDEyNy4wOTUgLTAuMDAzNjQ2NDIgMTI2Ljk5NSAwLjAwMjAwMjA3QzEyNi44OTUgMC4wMDc2NTA1NSAxMjYuNzk3IDAuMDM2NTM2MiAxMjYuNzEgMC4wODYzNzRDMTI2LjYyMyAwLjEzNjIxMiAxMjYuNTQ5IDAuMjA1NjM1IDEyNi40OTMgMC4yODkxNTNMMTIyLjExMyA2LjgyNzk0TDEyMi4wOTMgNi44NjAyOUMxMjAuODE3IDkuMDE2ODkgMTE5LjcwOCAxMS42Njk1IDExOC4wNDEgMTMuNTQ1N0MxMTUuOTE3IDE1LjkxOCAxMTQuMjY5IDE4LjgxODYgMTExLjU1OCAyMC42NTE3QzEwOS42MTggMjEuOTU4NiAxMDcuNjUxIDIxLjk5OTYgMTA1LjU4OSAyMi43NDU4QzEwMy45NjUgMjMuMzMwMiAxMDMuMTgyIDI0LjAzOTcgMTAxLjMxNyAyNC4xMTczQzk5LjE5OSAyNC4yMDE1IDk3LjA3NDggMjQuMTg4NSA5NC45NTcgMjQuMTE3M0M5My4yMTAyIDI0LjA2MzQgOTEuODU1OCAyMy4zMTk0IDkwLjEzMDYgMjMuMTE4OEM4Ny4xNDE1IDIyLjc3MTYgODQuMTIyMyAyMi44MTI2IDgxLjEyMjUgMjIuOTYxNEM3OS4xNzcyIDIzLjAzODUgNzcuMjM5OSAyMy4yNTQ3IDc1LjMyNTUgMjMuNjA4NEM3NC40NjI5IDIzLjc3NDUgNzMuMDExNSAyNC4zNzQgNzIuMTQwMyAyNC4yMjUyTDcyLjA0MzIgMjQuMjEwMUw2Ny4xMTk3IDIzLjM2NDdDNjQuODE2NSAyMi45Njc5IDYyLjA3NTQgMjIuMzMzOCA1OS43ODczIDIzLjA1MkM1OC42ODUzIDIzLjM5NyA1OC4wMzQgMjQuNDE3MSA1Ny4yODk5IDI1LjI2MDNMNTMuNDcyOCAyOS41NzM1QzUzLjE0NzEgMjkuOTI3MiA1My4yNTcxIDMwLjc3NjkgNTMuNTEzNyAzMS4xMzcxQzUzLjcwNTYgMzEuMzk3OSA1My45NDc1IDMxLjYxNzkgNTQuMjI1NCAzMS43ODRDNTUuNjAzMyAzMi42ODMzIDU3LjIzMjIgMzMuMTE5MiA1OC44NzUxIDMzLjAyODRDNjAuMzMwOCAzMi45MjcgNjIuMjAyNyAzMi40MDk1IDYzLjU4MDcgMzMuMDk3NEM2NC4xNjk1IDMzLjM5MDcgNjQuNjAwOCAzMy45MTQ4IDY1LjAxNDkgMzQuNDI1OUM2Ni45NTU4IDM2Ljc5ODEgNjguNjgxMSAzOC45MjAyIDcxLjMzMTUgNDAuNTM5OEM3Mi44ODI4IDQxLjQ4MzYgNzQuNTgwMSA0Mi4xNjI5IDc2LjM1NDIgNDIuNTQ5N0M3OC4xODMgNDIuOTQ4NyA3OS44NjczIDQyLjY0NDYgODEuMzM2IDQzLjk3OTZDODIuMDk0NyA0NC43MTMgODIuNjY4MyA0NS42MTYzIDgzLjAwOTUgNDYuNjE0OUM4My4zMzUxIDQ3LjQ3NzYgODMuMzA3MSA0OC42OTgyIDgzLjcwMTggNDkuNDg1NEM4NC4zOTYyIDUwLjg3NDIgODYuMDc0IDUxLjQyNjMgODcuMzU1IDUyLjA1ODJDODguMDUzIDUyLjM4NzYgODguNjQ2OSA1Mi45MDI3IDg5LjA3MTggNTMuNTQ3Qzg5LjQ5NjYgNTQuMTkxMyA4OS43MzYxIDU0Ljk0MDEgODkuNzYzOSA1NS43MTE0Qzg5Ljg2OTYgNTcuMjkyMiA4OS4zNDc3IDU4Ljg0MDcgODguODMwMSA2MC4zMzk1Qzg4LjM5ODggNjEuNjE0IDg3Ljg0NDYgNjIuNzU0OSA4Ny4zMDMzIDYzLjk1MzlDODYuNjM0NyA2NS40MzU1IDg3LjEyODYgNjYuNzcyNiA4Ny40NzU4IDY4LjI1NDJDODguMDI3OSA2OS44ODAzIDg4LjEyMjggNzEuNDAwNyA4OS4yMDExIDcyLjgyODNDOTEuMDM2MyA3NS4zMDE5IDkzLjU2ODIgNzcuMTI0MyA5Ni4xNjkgNzguNzExNUM5Ny4zNTc0IDc5LjQ0NzUgOTguNTg4IDgwLjExMjkgOTkuODU0NiA4MC43MDQyQzEwMC44NzUgODEuMTcyMiAxMDEuNzE0IDgxLjc2OTYgMTAxLjcxNCA4My4wMTE3QzEwMS43MTQgODUuMjE1OCAxMDEuNzE0IDg3LjM3NjcgMTAxLjU2MSA4OS41NTkyQzEwMS4zODkgOTEuOTU2OSAxMDEuMDI0IDk0LjMzNjkgMTAwLjQ2OSA5Ni42NzU5Qzk5LjgzODMgOTkuMjgxIDk5LjM5MTUgMTAxLjkyNyA5OS4xMzIyIDEwNC41OTVDOTguOTgxNSAxMDYuMzE5IDk5LjM4NDIgMTA4LjA0NyAxMDAuMjgyIDEwOS41MjdDMTAwLjg4NSAxMTAuNTY5IDEwMi4zMiAxMTEuMDM3IDEwMy40NiAxMTEuMTdDMTA0LjY5NCAxMTEuMzIxIDEwNS44MDkgMTEwLjY5NiAxMDYuOTgyIDExMC4zNkMxMTAuMDQ3IDEwOS40ODQgMTEzLjA0MiAxMDguMzcxIDExNi4xNTIgMTA3LjY1M0MxMTkuODE4IDEwNi44MDMgMTI0LjAzMiAxMDcuMzAxIDEyNy41ODIgMTA4LjQyM0MxMjkuNjU3IDEwOS4wNyAxMzEuNDY0IDExMC4wOTYgMTMzLjM3NSAxMTEuMTA2QzEzNS4xIDExMi4wMiAxMzYuNDUyIDExMy41NCAxMzguMjI1IDExNC40MjNDMTM5LjA0MiAxMTQuODA3IDEzOS44ODIgMTE1LjE0MSAxNDAuNzM5IDExNS40MjNMMTQ2Ljg0MyAxMTcuNTY3QzE0OC4zMDUgMTE4LjA4IDE0OS43MTkgMTE4Ljk5IDE1MS4zMTEgMTE4LjY3MUMxNTMuODY5IDExOC4xNTggMTU1LjYgMTE1LjU2MSAxNTguMzI5IDExNS41NjFDMTYwLjMwMiAxMTUuNTYxIDE2Mi40MjYgMTE1LjM0NiAxNjQuMzA5IDExNS44OThDMTY2LjM2OCAxMTYuNTA0IDE2OC41NTkgMTE2LjY2NSAxNzAuNjkgMTE2Ljk1N0MxNzMuMTI1IDExNy4yOTEgMTc1LjYxOCAxMTcuNjIzIDE3OC4wMjMgMTE3LjExOEMxODEuOTggMTE2LjI4NCAxODMuNjEyIDExMi4zNzQgMTg3LjQ5NiAxMTEuMjVDMTg3LjU3OSAxMTEuMjI0IDE4Ny42NTYgMTExLjE4MSAxODcuNzIyIDExMS4xMjVDMTg3Ljc4OCAxMTEuMDY4IDE4Ny44NDIgMTEwLjk5OSAxODcuODgxIDExMC45MjFDMTg3LjkxOSAxMTAuODQzIDE4Ny45NDIgMTEwLjc1OCAxODcuOTQ3IDExMC42NzFDMTg3Ljk1MiAxMTAuNTg0IDE4Ny45NCAxMTAuNDk3IDE4Ny45MSAxMTAuNDE2QzE4Ny4zNDEgMTA4LjgyNiAxODcuMDggMTA3LjE4MSAxODYuNjI5IDEwNS41NzJDMTg2LjMzOCAxMDQuNTU4IDE4Ni4yNSAxMDMuMzE4IDE4NS44MjEgMTAyLjMyNFpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5DTixcclxuICAgIHNwZWNpYWxDaXR5OiBmYWxzZSxcclxuICAgIHBhdGg6IFwiTTkwLjMyMjUgMTkwLjI0NEM5MC41NTc1IDE5MC4wMDIgOTAuOTY5NSAxODkuNzMxIDkxLjE2NTcgMTg5LjQ0OEM5Mi40OTIgMTg3LjQzNCA5MC40MTk1IDE4NC43NTUgODkuNDk2NSAxODIuOTAxQzg4LjY5MjEgMTgxLjI4OCA4Ny43MjgxIDE4MC4zMzcgODYuMTc5NyAxNzkuNzE1Qzg0LjgyOTYgMTc5LjE3NCA4My42OTUzIDE3OC44NzcgODIuMzEwNyAxNzkuNjEyQzgwLjU4NTUgMTgwLjUyOSA3OS41MjAxIDE4MS4xMjIgNzcuMzYzNSAxODEuMTc4Qzc0LjIyNTcgMTgxLjI1MyA2OC44ODgxIDE3OC4wNjQgNjguMjUxOSAxNzQuNjNDNjguMDk4OCAxNzMuODA2IDY4LjQ2NzYgMTcyLjUzIDY4LjIzNjggMTcxLjcyN0M2Ny44ODc0IDE3MC41NjcgNjcuOTA5IDE2OS42OTQgNjcuOTczNyAxNjguNDhDNjguMDY2NyAxNjcuMTcxIDY4LjI2NzIgMTY1Ljg3MyA2OC41NzMyIDE2NC41OThDNjkuMjkxNCAxNjEuMzQ4IDY5LjY5NjggMTU3LjYyOCA2Ny4wNjM2IDE1NC40MjVDNjUuOTg1MyAxNTMuMTE2IDY0LjM1MjggMTUxLjc2IDYzLjY5NzIgMTUwLjE1NUM2Mi42MTg5IDE0Ny41MTggNjMuNzI1MiAxNDUuMDE2IDY1LjM4MzYgMTQ0LjE3M0M2NS43NzM3IDE0NCA2Ni4xNzU5IDE0My44NTUgNjYuNTg3IDE0My43NDFDNjcuMzI0NiAxNDMuNDk4IDY4LjQ2MzIgMTQzLjgxNyA2OS4xNzQ5IDE0My40OTFDNjkuNjY4OCAxNDMuMjY1IDcxLjQ1NjYgMTQzLjY4MyA3MS45NTA1IDE0My40NTVDNzIuNzk4IDE0My4wNjQgNzUuMjU2NSAxNDIuMzc2IDc1LjY2NDEgMTQxLjUzM0M3Ni4xMTA1IDE0MC42MTYgNzYuNDk0NCAxNDAuNjk4IDc3LjM2NTcgMTQwLjIxMUM3Ny41NzE2IDE0MC4xMDkgNzcuNzYzNyAxMzkuOTgyIDc3LjkzNzEgMTM5LjgzMUM3OS42ODgzIDEzOC4xNTQgNzYuODI4NyAxMzYuMzY4IDc1LjYwNTkgMTM0Ljg4NEM3NC45MjAxIDEzNC4wNTIgNzQuMDgzMyAxMzIuNjggNzMuNDc1MiAxMzEuNzc0QzcyLjQ2MzcgMTMwLjI2NSA3Mi4wMzAyIDEyOC43NTUgNzAuODM5OCAxMjcuMzZDNjkuNzI4OSAxMjYuMTA5IDY4LjE3MTkgMTI1LjM0MyA2Ni41MDI5IDEyNS4yMjdDNjQuMTMwNiAxMjUuMDQ4IDYxLjA4NzcgMTI1Ljg3NCA1OC43NzggMTI2LjE3OEM1OC40Nzc2IDEyNi4yMTYgNTguMTc1MSAxMjYuMjM3IDU3Ljg3MjIgMTI2LjIzOEM1Ny40MTcyIDEyNi4yMzggNTYuOTYyMSAxMjYuMjIzIDU2LjUwNzEgMTI2LjIxNUM1Ni4zNTYxIDEyNi4yMTUgNTYuMjAzIDEyNi4yMTUgNTYuMDUyIDEyNi4yMTVDNTUuNzQ5MSAxMjYuMjE3IDU1LjQ0NjcgMTI2LjIzOCA1NS4xNDYzIDEyNi4yNzdDNTIuOTE4NSAxMjYuNTgzIDUwLjk3MTEgMTI3LjY4NiA0OS4xNDAyIDEyOC42NjVDNDguNDUwMSAxMjkuMDMzIDQ3Ljg3ODYgMTI5LjgzOCA0Ni45ODM2IDEyOS42NTRDNDYuNzQ5NCAxMjkuNTk0IDQ2LjUyOTYgMTI5LjQ4OCA0Ni4zMzY2IDEyOS4zNDJDNDUuOTA1MyAxMjkuMDUxIDQ1LjQ4OTEgMTI4LjY5NSA0NS4yODg1IDEyOC4yMjlDNDQuNzk2OCAxMjcuMDQ5IDQ0LjM5NTcgMTI1LjczNiA0My43MzE0IDEyNC42NDlDNDMuMTYyMSAxMjMuNzEzIDQyLjcxNzggMTIyLjY0MSA0MS43NzExIDEyMi4wMDNDNDAuNjQ1MyAxMjEuMjQ0IDM4Ljg0NjcgMTIxLjE0IDM3LjUyOTEgMTIwLjk1M0MzNi44ODIxIDEyMC44NjIgMzYuMjM1MSAxMjEuNDQyIDM1LjU4ODEgMTIxLjMxMUMzMy4yNTkgMTIwLjgzMiAzMS4xOTMgMTE5LjU0OSAyOS4wNjAxIDExOC41MDdDMjcuNTUwNSAxMTcuNzY5IDI2LjczNTMgMTE4LjkxNSAyNS40NDE0IDExOS4zODVDMjMuODk5NCAxMTkuOTQ1IDIyLjExNTkgMTE5Ljk5MyAyMC41MTM1IDEyMC4zMjlDMTguNDU0IDEyMC43NjEgMTYuMDA4NCAxMjEuNzUxIDE0LjkwNjQgMTIzLjYzOEMxNC43MTg3IDEyMy45ODcgMTQuNTY5IDEyNC4zNTYgMTQuNDYgMTI0LjczN0MxNC40Mzg0IDEyNC44IDE0LjQxOSAxMjQuODYzIDE0LjM5OTYgMTI0LjkyNUMxNC4yMTQxIDEyNS40OSAxNC4wMDQ5IDEyNi4wMzQgMTMuNTIxOSAxMjYuNDE3QzEzLjA5OTUgMTI2Ljc0IDEyLjY0NDkgMTI3LjAxNyAxMi4xNjU0IDEyNy4yNDZDMTEuNjg4OCAxMjcuNDg1IDExLjE5OTIgMTI3LjcwMSAxMC43MzM0IDEyNy45MzhDMTAuNjU4NSAxMjcuOTc1IDEwLjU4NjQgMTI4LjAxNyAxMC41MTc3IDEyOC4wNjVDOS43MDQ2OSAxMjguNjUgMTAuMDQ1NCAxMjkuNjg3IDkuODQyNzEgMTMwLjYzNkM5LjgxMjI3IDEzMC43ODQgOS43NjYwMSAxMzAuOTI5IDkuNzA0NyAxMzEuMDY3QzkuNDE1NzEgMTMxLjcxNCA4Ljg0MjA1IDEzMi4xMTUgOC4yODEzNCAxMzIuNTI3QzguMDkzNzIgMTMyLjY2NSA3LjkxMDQxIDEzMi44MDMgNy43NDAwNCAxMzIuOTU4QzUuNDc3NzcgMTM0Ljg5OSA0LjYyMzc2IDEzNy43MzUgNC41ODcxIDE0MC42NDJDNC41NTAxIDE0MS4xOCA0LjYzNzE2IDE0MS43MiA0Ljg0MTU4IDE0Mi4yMTlDNS42OTM0MyAxNDMuOTg5IDguNzY4NzMgMTQzLjM3NyAxMC4zMzQ0IDE0My40OEMxMS41MjA1IDE0My41NiAxMi43NDU1IDE0My44MjUgMTMuNjY4NSAxNDQuNTc0QzE1LjQ4NjUgMTQ2LjA0NyAxNS4yMTI2IDE0OC4zOTUgMTUuMDMxNSAxNTAuNDQ4QzE0Ljk4NjIgMTUwLjk1NyAxNS40NzM2IDE1MS4wOTUgMTUuNzUxOCAxNTEuNDE5QzE2LjA5NzIgMTUxLjgxOCAxNi4zMDMyIDE1Mi4zMTggMTYuMzM4NCAxNTIuODQ0QzE2LjUwMzcgMTU0LjIzIDE2LjYwMTUgMTU1LjYyMyAxNi42MzE3IDE1Ny4wMjJDMTYuNjcyNyAxNTguODM1IDE3LjYxOTQgMTYwLjI0NiAxOC4yNzcyIDE2MS44NjNDMTkuMDcwOCAxNjMuODE3IDE5LjY3MDMgMTY1LjkzNyAyMC42NDk0IDE2Ny44MDdDMjEuNDIxNSAxNjkuMjkzIDIzLjY2ODYgMTY5LjAwNCAyNC4zODAzIDE2Ny41OTFDMjQuNzUzNCAxNjYuODM2IDI0LjUwMzIgMTY1Ljg5IDI0LjQxMDUgMTY1LjEzNUMyNC4wOTIyIDE2Mi41MzEgMjMuOTM3MyAxNTkuOTEgMjMuOTQ2OCAxNTcuMjg3QzIzLjkzMzUgMTU2LjkwOCAyMy45NzA1IDE1Ni41MjggMjQuMDU2OCAxNTYuMTU5QzI0LjIyNSAxNTUuNTU5IDI0LjkxOTUgMTU0LjM0NyAyNS42ODI5IDE1NC40NzVDMjYuMzYwMSAxNTQuNTg1IDI2LjY3NDkgMTU1LjQ4NiAyNi43OTE0IDE1Ni4wNTFDMjYuOTYzOSAxNTYuODk3IDI3LjI2MTUgMTU3LjcxNCAyNy40NjIxIDE1OC41NTdDMjcuNzg3NyAxNTkuOTI0IDI3Ljk5NDggMTYxLjMxOCAyOC4zODUxIDE2Mi42NTVDMjguNjcxOSAxNjMuNjQ1IDI4Ljc3NTUgMTY0LjU0IDI5LjE2MzYgMTY1LjUwMUMyOS40NjU2IDE2Ni4yNDUgMjkuNjg3NyAxNjcuNTEzIDI5LjI4MDEgMTY4LjI1M0MyOC44NzI1IDE2OC45OTMgMjguMzMzMyAxNjkuNjE2IDI4LjIzNDEgMTcwLjUwM0MyOC4xMzQ5IDE3MS4zODkgMjguNDI2MSAxNzIuNDIyIDI4LjQ4NjUgMTczLjM1NEMyOC41NjE5IDE3NC40ODEgMjguNzAyMSAxNzUuODEyIDI4LjQ2MDYgMTc2LjkxOEMyOC4xNjMgMTc4LjMyOSAyNy44Njc1IDE3OS42NjIgMjcuODgwNSAxODEuMTE3QzI3Ljg4MDUgMTgxLjkyNiAyOC4xOTc1IDE4Mi4zNDIgMjguNzQzMSAxODIuOTAxQzI5LjY5NjMgMTgzLjg4OSAzMS4wNDg1IDE4NC42NTQgMzIuMTQ4NCAxODUuNDg5QzMyLjU1OTMgMTg1Ljc2NiAzMi45MjgyIDE4Ni4xMDEgMzMuMjQzOSAxODYuNDgzQzMzLjYyNTYgMTg2Ljk5IDMzLjgwNjggMTg3LjYxNSAzNC4wNjc3IDE4OC4xOTVDMzQuNzE0NyAxODkuNjI5IDM1LjQ3MTcgMTkxLjQ5NSAzNy4wNDM4IDE5MS45ODRDMzcuNDIzNCAxOTIuMTAzIDM3LjgxOTIgMTkyLjE2MiAzOC4yMTcgMTkyLjE1OUMzOC42MDc2IDE5Mi4xNTcgMzguOTk2MyAxOTIuMTAzIDM5LjM3MyAxOTEuOTk5QzM5Ljg0OSAxOTEuODY3IDQwLjMwNTcgMTkxLjY3MiA0MC43MzE2IDE5MS40MjFDNDAuOTg4IDE5MS4yNzEgNDEuMjM0MyAxOTEuMTA0IDQxLjQ2OTIgMTkwLjkyMUM0Mi4wMjM0IDE5MC40OSA0Mi45Nzg4IDE4OS45MzMgNDMuNTAyOCAxODkuNDkxQzQzLjU5MzQgMTg5LjQxNiA0My42ODYxIDE4OS4zNDcgNDMuNzgzMiAxODkuMjc2QzQ0LjQ1ODIgMTg4LjgxOCA0NS4yMDAxIDE4OC40NzggNDUuNzI0MSAxODcuODMxQzQ2LjgzNjkgMTg2LjQyIDQ2Ljk0MDQgMTg1LjkwMyA0Ny43NTM1IDE4NC43MTJDNDguMDA4IDE4NC4zNDEgNDguMTk3NyAxODMuOTEgNDguNTUxNCAxODMuNjE5QzQ4Ljc0MyAxODMuNDcgNDguOTU1MSAxODMuMzQ5IDQ5LjE4MTEgMTgzLjI2MUM1MS43MTczIDE4Mi4xODMgNTQuNzAyIDE4Mi40NjMgNTcuMjEyMyAxODMuNDc3QzU4LjI3OTQgMTgzLjkyOSA1OS4zMTEgMTg0LjQ2MSA2MC4yOTg0IDE4NS4wNjhDNjEuNDU4NiAxODUuNzU4IDYyLjQ1NSAxODYuMjY3IDYzLjgwNSAxODYuNTNDNjUuMDY4OCAxODYuNzgxIDY2LjM3MTMgMTg2LjM1OCA2Ny42NDU5IDE4Ni4yMDdDNjkuNjg2IDE4NS45NjcgNzEuNjg5NSAxODUuMjQxIDczLjY4NDQgMTg2LjE4M0M3NC40MjA5IDE4Ni41NTggNzUuMDg3NiAxODcuMDU2IDc1LjY1NTUgMTg3LjY1NkM3NS45MzQ0IDE4Ny45MjcgNzYuMTg5OCAxODguMjIyIDc2LjQxODkgMTg4LjUzNkM3Ny4wNjU5IDE4OS40NyA3Ny4zMTM5IDE5MS4wMjMgNzguMTY1NyAxOTEuNzcxQzc4LjkyNDkgMTkyLjQzNyA3OS45MTQ4IDE5Mi41NjQgODAuODg3NCAxOTIuNzg0QzgyLjI4NyAxOTMuMDk5IDg0LjAyOTUgMTkzLjY2NyA4NS4yMDA2IDE5Mi43ODRDODUuNTU5NCAxOTIuNTA4IDg1LjkzNTQgMTkyLjI1NCA4Ni4zMjYzIDE5Mi4wMjVDODYuNTE4MyAxOTEuOTE2IDg2LjcxOCAxOTEuODIxIDg2LjkyMzcgMTkxLjc0MUM4Ny44NzQ3IDE5MS4zNzQgODguOTQ0NCAxOTEuMjgzIDg5LjgwOTIgMTkwLjY3NUM4OS45OTI5IDE5MC41NDcgOTAuMTY0NyAxOTAuNDAzIDkwLjMyMjUgMTkwLjI0NFpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5HTixcclxuICAgIHNwZWNpYWxDaXR5OiBmYWxzZSxcclxuICAgIHBhdGg6IFwiTTE2Ni41NTYgMjIzLjgzM0MxNjYuMiAyMjMuMjEgMTY2LjAyOCAyMjIuNzY4IDE2NS40NDEgMjIyLjMyM0MxNjUuMjg1IDIyMi4xOSAxNjUuMTA0IDIyMi4wODkgMTY0LjkwOCAyMjIuMDI4QzE2NC43NCAyMjEuOTk4IDE2NC41NjggMjIxLjk5OCAxNjQuMzk5IDIyMi4wMjhDMTYyLjI2NCAyMjIuMDI4IDE2Mi4xNDggMjIyLjM0OSAxNjAuMzAyIDIyMy4yNjRDMTU3LjAzOSAyMjQuODc3IDE1MC4yMzcgMjI0LjYyOSAxNDYuNSAyMjMuMDc4QzE0My41NDMgMjIxLjg1MSAxNDAuNDM1IDIxOC4wODEgMTM3Ljc4IDIxOS44MDlDMTM3LjAzIDIyMC4yOTYgMTM2LjgzNiAyMjEuMzU1IDEzNi4xIDIyMS43MTlDMTM1LjM2NSAyMjIuMDg0IDEzNC40MDggMjIyLjMgMTMzLjY2NiAyMjIuMDg4QzEzMi41NjkgMjIxLjc1MyAxMzEuNDkzIDIyMS4zNTMgMTMwLjQ0NCAyMjAuODkxQzEyOC40MjcgMjIwLjA2MSAxMjUuMTE5IDIxOS43MDcgMTIzLjA0NCAyMTkuMDM3QzEyMi41OTMgMjE4Ljg5NiAxMjIuMTg2IDIxOC42NCAxMjEuODY1IDIxOC4yOTNDMTIwLjk0NiAyMTcuMjg2IDEyMC43ODcgMjE3LjExNyAxMjAuOTQ4IDIxNi4yMDNDMTIxLjIwNSAyMTQuNjcgMTIxLjUzMSAyMTIuNTM3IDEyMS4xNDkgMjExLjY1NUMxMjAuMjg2IDIwOS42NjggMTE4Ljg5MSAyMDguNzcxIDExNi45OTcgMjA3Ljc5MkMxMTUuNDU1IDIwNi45OTQgMTE1LjI3MiAyMDYuNzk0IDExMy42MzMgMjA2LjE4OEMxMTEuODg2IDIwNS41NDEgMTA5Ljc5IDIwNS4zMjUgMTA4LjI1OSAyMDQuMjQ3QzEwNy4yMzQgMjAzLjUzNyAxMDUuNDczIDIwMS40OTEgMTA0LjI1NCAyMDEuMzE0QzEwMi41MjkgMjAxLjA2NiAxMDEuMyAyMDMuMjA1IDk5Ljg2NTQgMjA0LjAyQzk3LjczMDQgMjA1LjIzNCA5OC41NTIxIDIwNi4yNjMgOTYuNjMwNSAyMDcuNzk3Qzk0LjcwOSAyMDkuMzMgOTMuNTA1NiAyMTEuMTg5IDkyLjgyNjMgMjEzLjczOEM5Mi40OTIgMjE1LjAwMiA5Mi4zNjY5IDIxNi4zMDkgOTIuMTY2NCAyMTcuNTk4QzkxLjkwOTcgMjE5LjI0OCA5Mi4yNTQ4IDIyMC4xOTkgOTEuNjEgMjIxLjc0N0M5MC42Njk3IDIyNC4wMDUgOTAuMDM1NyAyMjUuNDc4IDkxLjMxNDUgMjI3Ljc5OUM5MS42NTUzIDIyOC40MiA5Mi4xNzcyIDIyOC45MTggOTIuNTIyMiAyMjkuNTM5Qzk0LjA0OTEgMjMyLjMyMSA5NC4yMzAyIDIzNS4xNDYgOTIuNTY1MyAyMzcuODUzQzkyLjM5NDkgMjM4LjE1NyA5Mi4xNjcyIDIzOC40MjUgOTEuODk0NiAyMzguNjQyQzkyLjM0MTggMjQwLjE3MyA5Mi44MTc3IDI0MS42OTQgOTMuMzIyMyAyNDMuMjAzQzk0LjU2NjcgMjQ2LjkzOSA5My43ODE3IDI1MC42MzUgOTUuMjI2NiAyNTQuMjk3Qzk1Ljc1MjggMjU1LjYzIDk2LjMwNDkgMjU3LjAyMyA5Ny41NTE0IDI1Ny44NEM5OC41ODIyIDI1OC41MjQgOTkuODI0NCAyNTguODczIDEwMC42OTEgMjU5Ljc0NUMxMDEuNTU4IDI2MC42MTYgMTAxLjE5OCAyNjEuOTU3IDEwMC45ODMgMjYzLjAwN0MxMDAuNDA5IDI2NS44MTEgMTAwLjk2NSAyNjguMTgzIDEwMS4zMTUgMjcwLjkwOUMxMDEuNjU1IDI3My41ODMgMTAxLjQzOCAyNzYuMTkxIDEwMi41NzIgMjc4LjcyNUMxMDMuMDM2IDI3OS43NjIgMTAzLjU1MyAyODAuNzk5IDEwNC4zMzggMjgxLjYxOUMxMDQuOTMyIDI4Mi4yMyAxMDUuNjU1IDI4Mi43MDIgMTA2LjQ1NCAyODIuOTk5QzEwOC4wODggMjgzLjU5NiAxMDkuODgyIDI4My41ODIgMTExLjUwNyAyODIuOTZDMTE0LjI5MSAyODEuODgyIDExNi4wNzQgMjc5LjUyNSAxMTYuOTY3IDI3Ni44MDdDMTE3Ljc0NCAyNzQuNDQ4IDExOS41NTUgMjczLjQzNSAxMjEuOTgzIDI3My43ODhDMTIzLjM0MiAyNzMuOTgyIDEyNC42NTggMjc0LjQyIDEyNi4wMTYgMjc0LjYwNkMxMjguNDU1IDI3NC45NCAxMzAuOTk4IDI3NC40NTcgMTMzLjM0OSAyNzUuMTUxQzEzNC40MjcgMjc1LjQ2NiAxMzUuNDE1IDI3Ni4wMTQgMTM2LjQ4MiAyNzYuMzM5QzEzOC40MjMgMjc2LjkzNyAxNDAuNTMyIDI3Ni43NzEgMTQyLjU1NSAyNzYuNDkzQzE0NS4zOTUgMjc2LjEwMiAxNDguNDEgMjc1LjQwMSAxNTAuMzQ5IDI3My4yODZDMTUyLjYzOSAyNzAuNzg4IDE1Mi45MzcgMjY2LjA5OCAxNTAuMzEgMjYzLjY5OEMxNDkuMzg1IDI2Mi44NSAxNDguMTk3IDI2MS44ODYgMTQ3LjkwMSAyNjAuNjAzQzE0Ny43MDkgMjU5Ljc3IDE0OC4zOTEgMjU4Ljg1MiAxNDguNDE5IDI1Ny45OTNDMTQ4LjQ1MyAyNTcuMDIxIDE0OC4xMDYgMjU2LjA3MiAxNDguMjAzIDI1NS4wOTNDMTQ4LjM2MyAyNTMuNDMyIDE0OS43MTMgMjUzLjI3OSAxNTEuMDM1IDI1My45MTVDMTUyLjQ1MiAyNTQuNjA1IDE1My45NyAyNTYuODUgMTU1LjcxNyAyNTUuMzA0QzE1Ni43MDIgMjU0LjQ0MSAxNTYuMzY0IDI1My4xODIgMTU2LjQxMyAyNTIuMDAyQzE1Ni40MTYgMjUxLjgxIDE1Ni40MzUgMjUxLjYxOSAxNTYuNDcyIDI1MS40MzFDMTU2LjYgMjUwLjk2MiAxNTYuODk2IDI1MC41NTYgMTU3LjMwNCAyNTAuMjkyQzE1Ny42NTMgMjUwLjA1MiAxNTguMDM3IDI0OS44NyAxNTguNDQzIDI0OS43NTFDMTU4Ljc0NyAyNDkuNjY1IDE1OS4wOSAyNDkuNjg0IDE1OS4zNjYgMjQ5LjUzNUMxNTkuNzA5IDI0OS4zMjggMTYwLjAxNiAyNDkuMDY4IDE2MC4yNzggMjQ4Ljc2NUMxNjEuMDM1IDI0Ny45NDggMTYxLjU1MyAyNDYuOTM5IDE2Mi4zMTggMjQ2LjEzQzE2My42MTIgMjQ0Ljc2NyAxNjMuNTk1IDI0NC42OTggMTY1LjE1MiAyNDMuNjYzQzE2Ni40OCAyNDIuNzgxIDE2Ny44NTYgMjQxLjk3MiAxNjkuMjI2IDI0MS4xNTdDMTY5LjgwMiAyNDAuODE0IDE3MC45NTEgMjQwLjA5NiAxNzEuNDg2IDIzOS43MDhDMTc0LjY4NCAyMzcuMzcgMTc1LjQ5MSAyMzQuNzQ3IDE3My42NDIgMjMyLjM3NUMxNzMuMDM5IDIzMS42MDUgMTcyLjI0OSAyMzEuMTM1IDE3MS42NDggMjMwLjM2M0MxNzAuNTY5IDIyOC45ODUgMTY5LjcwNyAyMjguMDM2IDE2OC42MjggMjI2LjY1NkMxNjguMjU3IDIyNi4xODEgMTY3LjY4NCAyMjUuNzYxIDE2Ny4zNzEgMjI1LjI2M0MxNjcuMDYxIDIyNC44MDkgMTY2Ljc4OSAyMjQuMzMxIDE2Ni41NTYgMjIzLjgzM1YyMjMuODMzWlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2NhdGlvbk5hbWU6IExPQ0FUSU9OLkdCLFxyXG4gICAgc3BlY2lhbENpdHk6IGZhbHNlLFxyXG4gICAgcGF0aDogXCJNMjAwLjQ0MiAxODcuMjYyQzIwMC4zMjcgMTg3LjA0IDIwMC4xNjkgMTg2Ljg0MyAxOTkuOTc5IDE4Ni42ODFDMTk4Ljc5MyAxODUuNzE1IDE5Ni45NDcgMTg3LjMwMiAxOTYgMTg4LjE0OEMxOTQuODM3IDE4OS4xODMgMTg5LjUzIDE5Mi43NDggMTkwLjMxNSAxODguMzY0QzE5MC42ODYgMTg2LjI5OCAxOTEuOTM5IDE4NS4wNTEgMTkxLjU1NyAxODIuNzgyQzE5MC44NTkgMTc4LjYxNiAxOTEuODc5IDE3My45NCAxOTEuODc5IDE2OS43MjJDMTkyLjAyNyAxNjUuNjI0IDE5Mi45NzggMTYwLjY5OSAxOTIuMzM2IDE1Ni42NzlDMTkxLjYxOCAxNTIuMTc4IDE5Mi43MjYgMTQ3LjA2IDE5My4wOTMgMTQyLjU3N0MxOTMuNDU3IDEzOC4xNTQgMTkyLjg1MyAxMzYuNDI2IDE5Mi4wNjggMTMyLjE1MkMxOTEuMzg3IDEyOC40NDUgMTkxLjI4NiAxMjQuNjE3IDE5MS4xMzkgMTIwLjg3MUMxOTEuMDI1IDExNy45MDMgMTkwLjU0NiAxMTQuMzYgMTg4LjEyIDExMi4zNUMxODguMDg4IDExMi40NDYgMTg4LjAzMyAxMTIuNTMzIDE4Ny45NjEgMTEyLjYwM0MxODcuODg4IDExMi42NzQgMTg3LjggMTEyLjcyNiAxODcuNzAzIDExMi43NTVDMTgzLjgyMiAxMTMuODg4IDE4Mi4xODcgMTE3LjU3MyAxNzguMjI5IDExOC40MDhDMTc1LjgyMyAxMTguOTEzIDE3My4zMyAxMTguNTggMTcwLjg5NyAxMTguMjQ2QzE2OC43NDEgMTE3Ljk4IDE2Ni42MDggMTE3LjU1NCAxNjQuNTE2IDExNi45NzJDMTYyLjYyMiAxMTYuNDE1IDE2MC41MDkgMTE2Ljg1MSAxNTguNTM2IDExNi44NTFDMTU2LjU2MiAxMTYuODUxIDE1NC45NCAxMTguNDU1IDE1My4zNDIgMTE5LjQyNEMxNTEuNTIgMTIwLjUyOCAxNDkuNTgzIDEyMS4xMTIgMTQ3LjU1NCAxMjEuNzI3QzE0Ni4zNTEgMTIyLjA5MSAxNDUuMTMgMTIyLjQ2MiAxNDQuMDY3IDEyMy4xMzVDMTQzLjQ1NCAxMjMuNTIzIDE0Mi44MzYgMTI0LjA4OCAxNDIuMjMyIDEyNC41MzNDMTQxLjU2NCAxMjUuMDEzIDE0MC45NDggMTI1LjU2MyAxNDAuMzk2IDEyNi4xNzRDMTM5LjgwNiAxMjYuODMyIDEzOS4zNyAxMjcuNjE0IDEzOS4xMjIgMTI4LjQ2MkMxMzguOTA2IDEyOS4yMzQgMTM5LjA1NyAxMjkuNTcgMTM5LjE5NSAxMzAuMzNDMTM5LjMxMiAxMzAuOTc3IDEzOS43MTUgMTMxLjQ5OCAxMzkuNzcxIDEzMi4xNTRDMTM5Ljg1MiAxMzMuMjAzIDEzOS43MTMgMTM0LjI1OCAxMzkuMzY2IDEzNS4yNTFDMTM5LjAwNSAxMzYuMjk3IDEzOC4yNzQgMTM3Ljc3MiAxMzcuMzM2IDEzOC40MjNDMTM2LjI1OCAxMzkuMTYzIDEzNC4yMzcgMTM5LjA3IDEzMy4wMjMgMTM4Ljg5NkMxMzEuNTgzIDEzOC42NjEgMTMwLjIwMiAxMzguMTQ4IDEyOC45NTggMTM3LjM4NkMxMjguMjA3IDEzNi45NTUgMTI3LjE1MSAxMzUuODQ2IDEyNi4xODcgMTM2LjA5MkMxMjUuNzI5IDEzNi4yMDYgMTI1LjU4NSAxMzYuNjY2IDEyNS4xMDggMTM2Ljc5MUMxMjQuNTk1IDEzNi45MjcgMTI0LjAwNiAxMzYuNzA3IDEyMy41MDggMTM2LjU5MkMxMjIuNTYxIDEzNi4zNzcgMTIxLjEzNiAxMzUuOTYzIDEyMC4yMTEgMTM2LjI0NUMxMTkuNzk4IDEzNi4zNTMgMTE5LjQxNCAxMzYuNTQ4IDExOS4wODMgMTM2LjgxN0MxMTguNzA4IDEzNy4xNDkgMTE3LjkxNiAxMzcuOTkgMTE3Ljc1NCAxMzguNDY0QzExNy4zMjMgMTM5LjcyOCAxMTcuMzIzIDE0MS4wNTIgMTE3LjMwNCAxNDIuMzk2QzExNy4yODkgMTQ0LjQzMiAxMTUuMTc1IDE0NC4yNTMgMTEzLjcwNCAxNDQuOTg0QzExMi42NDEgMTQ1LjUxMiAxMTIuMzA5IDE0Ni44MTkgMTExLjczMyAxNDcuODM5QzExMS40MDUgMTQ4LjQxNSAxMTEuNDgzIDE0OS4wNyAxMTEuMTkgMTQ5LjY2MUMxMTAuNzggMTUwLjQ3OSAxMDkuNTU3IDE1MC4zNzEgMTA4LjkzNiAxNTAuOTkyQzEwNy45MjUgMTUyLjAwMyAxMDguMjE0IDE1My41MjQgMTA4LjExNyAxNTQuODIyQzEwNy45ODEgMTU2LjYyNSAxMDcuNDU3IDE1OC4wNTcgMTA3LjY2MSAxNTkuODk2QzEwNy44OTIgMTYxLjk1OCAxMDcuMzQyIDE2NC4zNjEgMTA3LjM0MiAxNjYuNDQ0QzEwNy4zNTcgMTY3Ljc3NyAxMDcuMjA5IDE2OS4xNzggMTA3Ljc4NyAxNzAuNDAxQzEwOC4xNiAxNzEuMTg4IDEwOS4wNCAxNzEuOTExIDEwOS43OTcgMTcyLjM0MkMxMTIuMTY5IDE3My42NTggMTE2LjEyMiAxNzIuNzg2IDExNy40MDkgMTc1LjY4NUMxMTguMTI3IDE3Ny4zMDUgMTE4LjIxNCAxNzkuMTY2IDExNy44NDEgMTgwLjg5NUMxMTcuNDQ0IDE4Mi43MDcgMTE2LjU0NyAxODQuNDQxIDExNS40NjggMTg1LjkzM0MxMTUuMDggMTg2LjQ3IDExNC44MjEgMTg3LjE3MyAxMTQuNTE5IDE4Ny43NjJDMTE0LjM3MSAxODguMDY2IDExNC4yIDE4OC4zNTkgMTE0LjAwNiAxODguNjM3QzExMy44MTggMTg4Ljg4IDExMy42MTMgMTg5LjEwOCAxMTMuMzkyIDE4OS4zMjFDMTEyLjU4MyAxOTAuMTM4IDExMi4wOTggMTkwLjg2NSAxMTAuODg4IDE5MC45MjFDMTEwLjM1NyAxOTAuOTQ3IDEwOS45OCAxOTEuMTM3IDEwOS40ODQgMTkxLjI2QzEwOC45MTIgMTkxLjQwOSAxMDguMjcyIDE5MS4zMzcgMTA3LjY4NyAxOTEuNDA0QzEwNi4xNTggMTkxLjU3OSAxMDYuMzA1IDE5My44MTggMTA2LjIxOSAxOTQuOUMxMDYuMTM5IDE5NS45MjIgMTA2LjA2OCAxOTYuOTQ1IDEwNS45NzUgMTk3Ljk2NUMxMDUuNzkgMjAwLjAzNSAxMDYuMjQyIDIwMC45MyAxMDguMjU1IDIwMi4zMjNDMTA5Ljc4OCAyMDMuMzg5IDExMS40NDggMjA0LjI1OCAxMTMuMTk3IDIwNC45MTFDMTE0LjgyNiAyMDUuNTE3IDExNi41MjkgMjA1LjkzMyAxMTguMDcxIDIwNi43MzFDMTE5Ljk2NSAyMDcuNzEgMTIxLjc4MyAyMDkuMjU0IDEyMi42NTQgMjExLjI0MUMxMjMuMTIgMjEyLjI1OCAxMjMuMjc1IDIxMy4zOSAxMjMuMTAxIDIxNC40OTVDMTIyLjk0NyAyMTUuNDA5IDEyMi4wMjIgMjE1Ljc4OSAxMjIuOTM5IDIxNi44QzEyMy4yNiAyMTcuMTQ4IDEyMy42NjcgMjE3LjQwNCAxMjQuMTE4IDIxNy41NDRDMTI2LjE5MyAyMTguMjE1IDEyNy41NjkgMjE4LjM1MyAxMjkuNTc3IDIxOS4xODNDMTMwLjY1NSAyMTkuNjMgMTMxLjY2OSAyMjAuMjczIDEzMi43OTkgMjIwLjU5NkMxMzMuNzA5IDIyMC44NTUgMTM0LjA5MyAyMjAuNjgyIDEzNC44OTMgMjIwLjM4QzEzNS4yODkgMjIwLjIzNyAxMzUuNjYgMjIwLjAzIDEzNS45OSAyMTkuNzY4TDEzNi4wNzcgMjE5LjY5OUMxMzcuNzYxIDIxOC4zNjQgMTM4LjA0MSAyMTYuMzY5IDEzNi43NDUgMjE0LjY1MkMxMzYuMTY3IDIxMy44ODcgMTM2Ljc5OSAyMTIuMDI0IDEzNi43NDUgMjExLjI1NEMxMzYuNjE0IDIwOS40MTQgMTM4LjAzOSAyMDcuNjY5IDEzOC4zNzYgMjA2LjY5OUMxMzkuMDg3IDIwNC42MzMgMTM3LjcyOSAyMDIuMTIgMTM2Ljg1MyAyMDAuMzYxQzEzNi4wOTggMTk4LjgyMyAxMzYuNzkxIDE5Ni4wNiAxMzguNDc1IDE5NS42NTlDMTM5LjMxMiAxOTUuNDU5IDE0MS40OTQgMTk0LjgyIDE0Mi4zMDEgMTk0LjUyOUMxNDMuMzI3IDE5NC4xNjMgMTQzLjcyOCAxOTMuMzQzIDE0NC4zMyAxOTIuNDA1QzE0NS4zMDkgMTkwLjg3NCAxNDUuMDkzIDE4OS4yODcgMTQ2Ljc2MSAxODguMTQ2QzE0Ny42ODQgMTg3LjUxNCAxNTEuMzY3IDE4NS4yNTYgMTUyLjQ2NSAxODUuMTI2QzE1My4yODIgMTg1LjAzMiAxNTQuMDI0IDE4NS4yMTEgMTU0LjY3MSAxODUuMzQyQzE1NS42NjEgMTg1LjU0MSAxNTcuNzE2IDE4NS4wNTcgMTU4LjE2OSAxODYuNDUxQzE1OC40NzEgMTg3LjM4IDE2MC40NyAxODkuNDAzIDE2MC41OCAxOTAuMzc4QzE2MS4wMjkgMTk0LjM0NCAxNjAuNzI5IDIwNC4wMDMgMTU4LjA5NiAyMDcuMDEyQzE1Ny4xNjQgMjA4LjA3NyAxNTYuMjExIDIwOS4zNDkgMTU1LjA0NiAyMTAuMTM0QzE1NS4wMDEgMjEwLjE2NSAxNTIuNTcgMjExLjY5MSAxNTIuNTIxIDIxMS43MjZDMTUwLjM1MSAyMTMuMjIzIDE0Mi40NTYgMjE5Ljc5OCAxNDguNTc2IDIyMi43NTdDMTUxLjA2MyAyMjMuOTU4IDE1NC4wMTUgMjIyLjY3NyAxNTYuNzEzIDIyMi42NjhDMTU3LjEzNCAyMjIuNjc5IDE1Ny41NTYgMjIyLjY1MyAxNTcuOTczIDIyMi41OTFDMTU4LjQwNSAyMjIuNDk5IDE1OC44MjkgMjIyLjM2NiAxNTkuMjM2IDIyMi4xOTRDMTYwLjkxIDIyMS41NDcgMTYyLjM1NSAyMjAuNTMzIDE2My45NDkgMjE5Ljc0MkMxNjUuOTcxIDIxOC43MzkgMTY3LjIwNyAyMTkuNTA3IDE2OS4yNjcgMjE5LjAzMkMxNzAuODg0IDIxOC42NjIgMTcyLjY0IDIxNy4yMDggMTczLjk1OSAyMTYuMjQ2QzE3NC45MjEgMjE1LjU0NyAxNzUuMTYzIDIxNC43MzcgMTc1LjkgMjEzLjgxNkMxNzYuODc5IDIxMi41NzYgMTc4LjcwNCAyMTEuNDMgMTgwLjI4MyAyMTEuNDcxQzE4Mi45MTggMjExLjU0IDE4NC40MDQgMjEyLjE2OCAxODYuNjA4IDIxMy4zOTdDMTg5Ljg3NSAyMTUuMjIyIDE5NS4yMzQgMjEyLjAxMyAxOTYuNjE0IDIwOC44ODRDMTk4LjI0OSAyMDUuMTc0IDE5OC4zNCAyMDIuMTk4IDE5OC43MDIgMTk4LjIyNkMxOTguODI3IDE5Ni44MzcgMTk5LjI0MSAxOTYuMDk5IDE5OS43OCAxOTQuNzc1QzIwMC42MzkgMTkyLjU4NCAyMDEuNjc0IDE4OS41MTUgMjAwLjQ0MiAxODcuMjYyWlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2NhdGlvbk5hbWU6IExPQ0FUSU9OLkpOLFxyXG4gICAgc3BlY2lhbENpdHk6IGZhbHNlLFxyXG4gICAgcGF0aDogXCJNOTkuMDM3MiAyNjQuMzEyQzk5LjI1MjkgMjYzLjI2MiA5OS42MDQ0IDI2MS45MTYgOTguNzQ2MSAyNjEuMDQ5Qzk3Ljg4NzggMjYwLjE4MiA5Ni42MzcgMjU4Ljk2NiA5NS42MDYxIDI1OC4yODJDOTQuMzcwNCAyNTcuNDY1IDkzLjgwNzUgMjU2LjA3MiA5My4yODEzIDI1NC43MzdDOTIuMTQ5MSAyNTEuODY3IDkzLjEzNjggMjQwLjM3IDg5LjQzNjEgMjQwLjQ3OEM4Ni4zMjIgMjQwLjU2OCA4NC41MDQgMjQwLjM1NSA4MS4zNDQ2IDI0MC4xOTVDNzkuMTU5OSAyNDAuMDg3IDc2Ljk0MDggMjQxLjgyNSA3NC44NzQ4IDI0Mi4yMDVDNzMuNDIxNyAyNDIuNDc5IDcxLjkzMjQgMjQyLjUwNCA3MC40NzEgMjQyLjI3OEM2OC43OTc1IDI0Mi4wNjMgNjcuMjM2MSAyNDIuOTczIDY1LjUxMDggMjQyLjk0N0M2My42OTUgMjQyLjkxOSA2MS44OTg2IDI0Mi40NCA2MC4yMjA3IDI0MS43NzJDNTcuMTQ5NyAyNDAuNTQ3IDU0Ljc1MzggMjM4LjMyMSA1Mi4yODIzIDIzNi4xNzdDNTEuMDc2OCAyMzUuMTI5IDQ5LjIxNTYgMjMyLjcyNyA0Ny42MDI1IDIzMi40MjVDNDYuNDA1NiAyMzIuMjA5IDQ1LjAxNDYgMjMyLjg5NyA0My45MTA0IDIzMy4yMzhDNDMuNjM1NyAyMzMuMzEyIDQzLjM2OTEgMjMzLjQxNCA0My4xMTQ2IDIzMy41NDJDNDIuMjg2NSAyMzQuMDAxIDQxLjU4MTMgMjM1LjE3NCA0MS4wODMxIDIzNS45NjJDNDAuNDM2MSAyMzYuOTg2IDQwLjExNyAyMzguMjExIDM5LjYyNTMgMjM5LjMxMUMzOC44NzkxIDI0MC45NzggMzcuMDc2MiAyNDIuMTg2IDM1LjI4MTkgMjQyLjg3NEMzNC41MzcyIDI0My4xMiAzMy43NTY2IDI0My4yNDEgMzIuOTcyMiAyNDMuMjMyQzMxLjUyOTQgMjQzLjI3OSAzMC4wMDI2IDI0My4yMzIgMjguNzc3NiAyNDIuNDY0QzI4LjAxODUgMjQxLjk4OSAyNi43OTM1IDI0MS4yNzggMjYuMjQxNSAyNDAuNTcyQzI1LjAyNTEgMjM5LjAxOCAyMy45MTY2IDIzNy4zMTYgMjIuNjkxNyAyMzUuNzk2QzIxLjY1MjIgMjM0LjUwMiAyMS4yNzcgMjM0LjUyOCAyMC42Njg4IDIzNS45NjhDMTkuMjM2OCAyMzkuMzYgMTkuNzcxNyAyNDEuMDg0IDE3LjY0OTYgMjQ0LjI4NEMxNi45NjU5IDI0NS4zMTcgMTUuODQwMiAyNDUuOTU3IDE1LjIxNjkgMjQ2Ljk5NUMxNC4wNTg5IDI0OC45MjUgMTYuNTU2MiAyNTEuOTAzIDE0LjM1NDMgMjUzLjI0OUMxMi41MTY5IDI1NC4zNjYgOS4zNTc0OSAyNTIuOTYgNy42ODgyOCAyNTIuMDkzQzUuMzM5NzUgMjUwLjg3NyAyLjkzMjk5IDI1Mi41MzkgMS4yMzE0NCAyNTQuMjVDMC4wNTYwOTk3IDI1NS40MjkgLTAuODQ3NTEyIDI1Ny4zNTkgMS4yMTIwMyAyNTguMjExQzIuMjU3OTggMjU4LjY0MyAyLjQ1ODU0IDI1Ny44NTMgMy4zMTkwMiAyNTguODNDNC41MTgwOSAyNjAuMTk3IDMuMjY1MTEgMjYzLjY1NCA0Ljg0NTg5IDI2NC4xOThDNy40MTg3IDI2NS4wODQgMTAuNTYwOSAyNjEuMTc5IDEyLjIyMTQgMjY0Ljk3NEMxMy4xMjk0IDI2Ny4wNTEgMTAuODU0MiAyNjcuOTM3IDEwLjYzODUgMjY5Ljg2OEMxMC4zMjE1IDI3Mi43MTIgMTEuOTMyNSAyNzQuMDM2IDEzLjMzNjQgMjc2LjExMUMxNC43MTAxIDI3OC4xMjUgMTMuMjUwMSAyODAuNzQxIDEyLjUyOTggMjgyLjkxN0MxMS41MTg0IDI4NS45NzcgMTIuMDQ4OSAyODkuMzY4IDEwLjk5NjUgMjkyLjM1QzEwLjI0MTcgMjk0LjQ4OSA4LjYyNDI0IDI5Ni45NzggNi41MTcyNSAyOTguMDExQzMuODA4NTcgMjk5LjMzNyAxLjAzNTE5IDMwMS4wOCAyLjY1OTExIDMwNC42QzMuNjgxMzMgMzA2LjgxNyA1Ljk2NTE2IDMwOC45IDguNTAxMzIgMzA4LjY5N0MxMC42ODU5IDMwOC41MjkgMTMuNjQ0OCAzMDcuNDY2IDE1LjM4NTIgMzA2LjE0NEMxNy4yMjA0IDMwNC43NDggMTguNzg0IDMwMi40MDQgMjEuNDQzIDMwMi45MjZDMjMuNDk4MyAzMDMuMzI5IDI0LjI3NjggMzA0LjgzMiAyNC40NjIzIDMwNi43NzZDMjQuNjk3MyAzMDkuMjA0IDI0LjMyODYgMzEwLjQ2OCAyNi4wMzY2IDMxMi41NjZDMjcuMjI0OSAzMTQuMDI2IDI4Ljc3MzMgMzE0LjIzNSAzMC42MDIxIDMxMy44MDhDMzIuMjk5MyAzMTMuNDE0IDMzLjk1MTMgMzEyLjgyMyAzNS42NjU4IDMxMi41MTRDMzcuMzAyNiAzMTIuMjA4IDM4Ljc0NzUgMzEzLjA1OCA0MC4yNTUgMzEyLjgxNEM0NC4zODcgMzEyLjE0MSA0OS4yODAzIDMxMS45MjggNTEuMTkxMSAzMDcuOTFDNTIuOTUzIDMwNC4yMDcgNTMuNDk2NSAzMDAuMDMyIDU1LjQ3MTkgMjk2LjQyQzU3LjI0MDMgMjkzLjE4NSA2Mi45MzggMjg5LjIwNCA2Mi4zODU5IDI5NS45M0M2Mi4yNDM2IDI5Ny42NTUgNjAuNzk4NyAyOTkuMjc1IDYxLjYzMTEgMzAwLjk2NkM2Mi4yNzgxIDMwMi4zMDUgNjMuNDgxNSAzMDMuMzY4IDY0Ljk5NzYgMzAzLjUzNkM2Ni4xNiAzMDMuNjY0IDY3LjE5OTUgMzAzLjAxNCA2OC40MDcxIDMwMy4xNzZDNzEuNzg2NSAzMDMuNjI5IDczLjc2NDEgMzA1LjIzNCA3Ni41MTgxIDMwMS45NDdDNzguMTMxMiAzMDAuMDIxIDc5LjIxODIgMjk4LjcxMiA4MS40NzgzIDI5Ny4zMDZDODMuMjI3MyAyOTYuMjI4IDg0LjczOSAyOTUuMzY1IDg1LjE3NjggMjk1LjE0OUM5Mi4xMTQ2IDI5MS40MjEgOTIuMTcwNiAyODQuOTk4IDk1LjIzNTIgMjc4LjE3M0M5Ni4xMzY2IDI3Ni4xNjMgOTcuMDQyNCAyNzUuNjY3IDk4LjE0NDQgMjczLjc3M0M5OC42MzI2IDI3Mi45NSA5OC45ODk4IDI3Mi4wNTYgOTkuMjAzMyAyNzEuMTIzQzk4Ljg5MjggMjY4LjgyNCA5OC41NDk4IDI2Ni43MTkgOTkuMDM3MiAyNjQuMzEyWk02NS4xMDMzIDI2MS4wMTVDNjQuODIwNyAyNjIuMzkxIDYzLjA5NTUgMjY1LjM4IDYyLjIxNTYgMjY2LjQ3N0M2MS45MzM1IDI2Ni44NjMgNjEuNTI4NSAyNjcuMTQgNjEuMDY3NSAyNjcuMjY1QzYwLjYwNjUgMjY3LjM4OSA2MC4xMTY5IDI2Ny4zNTIgNTkuNjc5NCAyNjcuMTYxQzU5LjUzOTIgMjY3LjEwMyA1OS40MDM0IDI2Ny4wMyA1OS4yNjU0IDI2Ni45NjdDNTUuODg2IDI2NS40MDMgNTMuMDExMiAyNzAuMTMzIDQ5Ljc3NjQgMjcwLjA1M0M0OC41MDQgMjcwLjAyMSA0Ni45MDM4IDI2OC42NjIgNDYuMDM5IDI2Ny45NTNDNDQuOTEzMiAyNjcuMDM0IDQzLjU1MjkgMjY2LjQ0OCA0Mi4xMTE4IDI2Ni4yNjJDNDEuMDkxNyAyNjYuMTQxIDM2LjczNTQgMjY1LjI4MSAzNy4wMzk1IDI2My4yNThDMzcuMTkwNSAyNjIuMjQ0IDM3LjYyMzkgMjYwLjk0OCAzNy43NzcxIDI1OS45MzJDMzcuOTY2OCAyNTguNjY2IDM3LjMxNzcgMjU2LjM2MSAzOC40NTg1IDI1NS41NjlDMzguNzAyMiAyNTUuNDAxIDM4Ljk3ODMgMjU1LjI4IDM5LjIwMjYgMjU1LjA5MUMzOS40MzA1IDI1NC44NzMgMzkuNjI2NSAyNTQuNjI0IDM5Ljc4NDkgMjU0LjM1MUM0MC4xNTc5IDI1My43ODggNDIuMjQ1NSAyNTEuODU0IDQyLjY5MTkgMjUxLjM0N0M0My4yMzExIDI1MC43MyA0NC4wNTcxIDI1MC4wMzYgNDQuODkxNyAyNTAuMjQ3QzQ1LjEyMzMgMjUwLjMxNiA0NS4zNDkgMjUwLjQwMyA0NS41NjY3IDI1MC41MDhDNDYuNzgzIDI1MS4wMzYgNDguNjk1OSAyNTEuNTEzIDUwLjAxMzYgMjUxLjM3QzUxLjQxOTcgMjUxLjIyOCA1Mi4zNTc4IDI1MC4yMzYgNTMuNjM2NiAyNDkuNzM2QzU0LjMxNiAyNDkuNDcxIDU1LjA0MjcgMjQ5LjIzMSA1NS43NjUyIDI0OS4zMzlDNTYuOTc3MiAyNDkuNTIgNTcuNjM3MSAyNTAuNTUzIDU4LjMxNDMgMjUxLjQzMUM1OC45NjEzIDI1Mi4yNjMgNjEuMzQ2NSAyNTUuMDE3IDYyLjE5NjIgMjU1LjY0M0M2Mi41NTMyIDI1NS45MDkgNjIuOTM1MyAyNTYuMTM5IDYzLjMzNyAyNTYuMzMxQzYzLjc4OTkgMjU2LjU0NiA2NC4yODE2IDI1Ni43MTIgNjQuNjUwNCAyNTcuMDUzQzY1LjUxNzMgMjU3Ljg2OCA2NS4zMjMyIDI1OS45ODQgNjUuMTA5NyAyNjEuMDE1SDY1LjEwMzNaXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGxvY2F0aW9uTmFtZTogTE9DQVRJT04uSkIsXHJcbiAgICBzcGVjaWFsQ2l0eTogZmFsc2UsXHJcbiAgICBwYXRoOiBcIk0xMDQuMjc2IDE5NS4xMDlDMTA0LjMxOSAxOTQuNTY2IDEwNC4yOTMgMTk0LjAxNCAxMDQuMzcxIDE5My40NzJDMTA0LjQyNyAxOTMuMDYzIDEwNC42NCAxOTIuNjEgMTA0LjYxNCAxOTIuMTc4QzEwNC41NTQgMTkxLjIzNiAxMDMuNTE5IDE5MS42NTkgMTAyLjg1MiAxOTEuNzAyQzEwMS4yMjIgMTkxLjgwNSA5OS42NzEzIDE5MS4zMzcgOTguMDg2MiAxOTEuMDI5Qzk3LjI5OTEgMTkwLjg3NCA5Ni4yNTMxIDE5MC42ODQgOTUuNDc4OSAxOTAuNDY0Qzk0LjcwNDcgMTkwLjI0NCA5NC4wNzcxIDE4OS45MDggOTMuMjc0OSAxODkuOTY4QzkyLjM1MTggMTkwLjA0MSA5Mi4wODg3IDE5MS4wNzIgOTEuMjg0MyAxOTEuNDQxQzkwLjMxMzggMTkxLjg4NSA4OS4zNzc5IDE5Mi4zNjYgODguMzQwNiAxOTIuNjUzQzg3LjMwMzMgMTkyLjk0IDg2LjUyMjYgMTkzLjQzNCA4NS42NDA1IDE5NC4wODdDODQuNDYwOSAxOTQuOTYzIDgyLjcxODMgMTk0LjYxMSA4MS4zMjczIDE5NC4zMDNDODAuMzU0NyAxOTQuMDg3IDc4LjA3MDkgMTkzLjczOCA3Ny4zMTE4IDE5My4wNzNDNzYuNDQ5MSAxOTIuMzI1IDc2LjQzNjIgMTkwLjk4OCA3NS43ODA2IDE5MC4wNTRDNzUuNTUwOCAxODkuNzQgNzUuMjk1NSAxODkuNDQ2IDc1LjAxNzEgMTg5LjE3NEM3NC4zMTg0IDE4OC40NzYgNzMuNTA3NSAxODcuNTk0IDcyLjgzMDMgMTg3LjI3QzcwLjgzNTUgMTg2LjMyOCA2OS42OTQ3IDE4Ny40ODYgNjcuNjU0NSAxODcuNzI1QzY2LjM4IDE4Ny44NzYgNjQuODUwOSAxODguMjk5IDYzLjU5OCAxODguMDQ5QzYyLjI1ODcgMTg3Ljc4NSA2MS4yNTE2IDE4Ny4yNzcgNjAuMDkxMyAxODYuNTg2QzU5LjA3OTkgMTg1Ljk4NyA1OC43MDY4IDE4NS40MDcgNTcuNjE1NiAxODQuOTY3QzU0LjEyODQgMTgzLjU1OSA1MC40NjY1IDE4Mi44OTYgNDguMTQ2IDE4Ni41NTRDNDcuNDQ5NCAxODcuNjUgNDYuOTIxIDE4OC45MjYgNDUuODM0MSAxODkuNjlDNDQuNjMwNyAxOTAuNTMzIDQzLjM3NzcgMTkxLjMxNCA0Mi4xMDEgMTkyLjAzOEM0MS4xMDI1IDE5Mi42MDUgNDAuMDQzNyAxOTMuMzY1IDM4LjkwMDcgMTkzLjU1OUMzOC4yNzA5IDE5My42NjcgMzcuNjI0IDE5My40NDkgMzYuOTk0MiAxOTMuNDQ0QzM2LjE1NzUgMTkzLjQ0NCAzNS43ODY1IDE5My43ODUgMzUuMjg0MSAxOTQuNDExQzM0LjYzNzEgMTk1LjIyOCAzMy4wNjI4IDE5Ny4xNTggMzMuNjk0NiAxOTguMzI5QzM0LjQyNzkgMTk5LjY4MyAzNi40MDEyIDE5OS4wNzcgMzcuNTE0IDE5OS43MkM0MC45NDI5IDIwMS43MDIgMzYuNDA3NiAyMDQuOTg2IDM0Ljk3MzUgMjA2LjI4OUMzMy40MSAyMDcuNzEgMzMuMDQ5OCAyMTAuMTcxIDMyLjU4ODMgMjEyLjEzMUwyOC43MDY0IDIxNC43NDNDMjYuOTE0MyAyMTUuOTQ4IDIzLjYxNDcgMjE3LjI1NSAyMy43NyAyMTkuODA0QzIzLjkyNTMgMjIyLjM1NCAyOC42MjQ1IDIyMS40MTEgMzAuMjYxNCAyMjEuODk5QzMwLjkwODMgMjIyLjA5MyAzMS43MDIgMjIyLjQ2MSAzMS42ODkgMjIzLjE0M0MzMS42NzgyIDIyMy43MjcgMzEuMDcyMiAyMjQuMDg3IDMwLjU1MDMgMjI0LjM0OEMyOC4wNDQ0IDIyNS42MDEgMjYuNTQ3NyAyMjcuMTUyIDI0LjM5OTcgMjI4Ljk0OEMyMC42NTU5IDIzMi4wODQgMjQuNjc1OCAyMzUuNzc4IDI2LjkxIDIzOC42MzZDMjcuNDYyMSAyMzkuMzQxIDI4LjA0MDEgMjQwLjA1MyAyOC43OTkyIDI0MC41MjdDMzAuMDI0MSAyNDEuMjkxIDMxLjU1MSAyNDEuMzQyIDMyLjk5MzggMjQxLjI5NUMzMy43NzgyIDI0MS4zMDUgMzQuNTU4OCAyNDEuMTg0IDM1LjMwMzUgMjQwLjkzN0MzNy4wOTc3IDI0MC4yNDkgMzguMDM4IDIzOC42MSAzOC43ODQyIDIzNi45NDNDMzkuMzUzNSAyMzUuNjcxIDM5Ljk1NTIgMjMyLjc5NCA0MS40NzU2IDIzMi4zNzNDNDEuNzI4IDIzMi4zMDQgNDEuOTk1NCAyMzIuMzA2IDQyLjI0NzcgMjMyLjI0NEM0Mi43MjY1IDIzMi4xMjUgNDMuMTEwMyAyMzEuNzkzIDQzLjU0MTYgMjMxLjUzNkM0NC4zNjEyIDIzMS4wMzYgNDUuMzE2NSAyMzAuODE4IDQ2LjI1NDYgMjMwLjYwOUM0Ni43MDA4IDIzMC40NzggNDcuMTY4NCAyMzAuNDM3IDQ3LjYzMDYgMjMwLjQ4OEM0OS4yNDM3IDIzMC43ODIgNTEuMTA0OCAyMzMuMTkzIDUyLjMxMDQgMjM0LjI0MUM1NC43ODE4IDIzNi4zOTcgNTcuMzkzNSAyMzguODI2IDYwLjQ2NDQgMjQwLjA1MUM2Mi4xNDIzIDI0MC43MTkgNjMuOTM4NyAyNDEuMTk4IDY1Ljc1NDYgMjQxLjIyNkM2Ny40Nzk4IDI0MS4yNTIgNjkuMDQxMiAyNDAuMzM3IDcwLjcxNDcgMjQwLjU1N0M3Mi4xNzYyIDI0MC43ODMgNzMuNjY1NCAyNDAuNzU5IDc1LjExODUgMjQwLjQ4NEM3Ny4xNzM3IDI0MC4xMDQgNzguMzE0NiAyMzguNzk4IDgwLjUxIDIzOC45MDVDODMuMDc0OSAyMzkuMDM1IDg1LjY0MTIgMjM5LjA3NiA4OC4yMDkgMjM5LjAyOEM4OC43MDI5IDIzOS4wMjggODkuMjIyNiAyMzguOTk4IDg5LjY0NzUgMjM4Ljc0NEM4OS45NzQ2IDIzOC41MTggOTAuMjQzNiAyMzguMjE4IDkwLjQzMjUgMjM3Ljg2OEM5Mi4wOTczIDIzNS4xNTkgOTIuMzQ3NSAyMzIuMzM2IDkwLjgyMDcgMjI5LjU1NEM5MC40ODIxIDIyOC45MzMgODkuOTU4IDIyOC40MzUgODkuNjEzIDIyNy44MTRDODguMzM0MSAyMjUuNDk0IDg4Ljk2NiAyMjIuOTQyIDg5LjkwODQgMjIwLjY4NEM5MC41NTU0IDIxOS4xMzYgOTAuODU1MiAyMTcuMzIyIDkxLjExMTggMjE1LjY3MkM5MS4zMTI0IDIxNC4zNzggOTEuNDM3NCAyMTMuMDg1IDkxLjc3MTcgMjExLjgxMkM5Mi40NTEgMjA5LjI2MyA5NC4wNjIgMjA4LjI5MyA5Ni4wMDczIDIwNi43MzNDOTcuOTUyNSAyMDUuMTc0IDk3LjUyOTggMjAzLjMwOSA5OS42NzM1IDIwMi4wOTRDMTAxLjExNCAyMDEuMjc1IDEwMi42NDcgMjAwLjQ3MSAxMDMuOTg3IDE5OS40NTlDMTAzLjk4NyAxOTkuMDgyIDEwNC4wMTUgMTk4LjY2MyAxMDQuMDU4IDE5OC4xNzhDMTA0LjEyNSAxOTcuMTQ1IDEwNC4xOTYgMTk2LjEzMSAxMDQuMjc2IDE5NS4xMDlaXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGxvY2F0aW9uTmFtZTogTE9DQVRJT04uQ0IsXHJcbiAgICBzcGVjaWFsQ2l0eTogZmFsc2UsXHJcbiAgICBwYXRoOiBcIk03OC42NTUzIDE1MC40NTlDNzkuMDkyIDE1MS43NTkgNzkuNDI1MiAxNTMuMDkyIDc5LjY1MTYgMTU0LjQ0NUM3OS43ODc1IDE1NS4xNjMgNzkuODI0MiAxNTUuNjggNzkuODk1MyAxNTYuNDA1Qzc5Ljk0MjggMTU2Ljg3NyA3OS41NzgzIDE1Ny43OTYgNzkuODAwNCAxNTguMTc4QzgwLjAyMjYgMTU4LjU1OSA4MC41ODMzIDE1OC40OTcgODEuMDI3NSAxNTguNDYyQzgyLjI4NDggMTU4LjM1OSA4My4xODQxIDE1OC43MzggODMuNjQ1NyAxNTkuODYyQzg0LjEzOTUgMTYxLjA1NyA4NS4wMzIzIDE2Mi4zMTggODUuNjQ5MSAxNjMuNDUxQzg2LjExMDYgMTY0LjI5NiA4Ny4yNjQ0IDE2Ni4wNjQgODYuMjYzOCAxNjcuNjhDODUuMjYzMSAxNjkuMjk1IDg0LjY1MDYgMTcwLjA1MiA4NS4xMTIxIDE3Mi4wNkM4NS40MTE5IDE3My4zNTQgODUuMDczMyAxNzUuNjY1IDg0Ljk1MDQgMTc2Ljk2NEM4NC45MjM2IDE3Ny4yNDIgODQuOTg2MyAxNzcuNTIyIDg1LjEyOTQgMTc3Ljc2M0M4NS4yNzI1IDE3OC4wMDMgODUuNDg4NiAxNzguMTkyIDg1Ljc0NjIgMTc4LjMwMUM4Ni44MzE4IDE3OC43NyA4Ny44OTE1IDE3OS4yOTcgODguOTIwNyAxNzkuODc5Qzg5Ljg5NzYgMTgwLjY5IDkwLjI2ODUgMTgxLjQ5OSA5MC43OTkxIDE4Mi42NTdDOTEuMTE1NyAxODMuMjQxIDkxLjQ3NjIgMTgzLjgwMSA5MS44Nzc0IDE4NC4zMzFDOTIuMzc3NyAxODUuMDUxIDkyLjUzNzMgMTg2LjA1NiA5Mi44NjA4IDE4Ni44NzNDOTMuMDYxMyAxODcuMzc0IDkzLjE2MjcgMTg4LjA4NyA5My41ODMyIDE4OC40NUM5NC41MDE5IDE4OS4yNDEgOTYuNTU1IDE4OS4zMTIgOTcuNjY1NyAxODkuNTI4QzEwMC42MTIgMTkwLjEwNCAxMDMuODY2IDE5MC45MSAxMDYuODU5IDE5MC40MzhDMTA4LjIwMyAxOTAuMjIyIDExMC41MjUgMTg5Ljg5IDExMS43MTIgMTg5LjA2NEMxMTIuMTI5IDE4OC43MzMgMTEyLjQ3NyAxODguMzIyIDExMi43MzQgMTg3Ljg1NUMxMTMuMjIzIDE4Ny4wODcgMTEzLjkzMSAxODYuMzE5IDExNC40MjIgMTg1LjU1MUMxMTUuNTU3IDE4My43NzkgMTE2LjcxNSAxODEuMzAzIDExNi44MjUgMTc5LjEyOUMxMTYuODc0IDE3OC4zNTQgMTE2LjczOCAxNzcuNTc5IDExNi40MjggMTc2Ljg2N0MxMTQuOTE4IDE3My41MDUgMTExLjExNiAxNzUuNDMzIDEwOS4wODMgMTczLjg0N0MxMDcuNzIgMTcyLjc4MiAxMDYuNjg5IDE3MS40NDcgMTA2LjI0OSAxNjkuNzVDMTA1LjkxIDE2OC40MzkgMTA2LjE0NSAxNjcuNDk2IDEwNi4xNjUgMTY2LjE0NEMxMDYuMTg2IDE2NC44MzUgMTA2LjYzOSAxNjMuNjE3IDEwNi41NDQgMTYyLjMzM0MxMDYuNDIxIDE2MC42NzEgMTA2LjI5NiAxNTkuNDk1IDEwNi41MDYgMTU3LjM3M0MxMDYuNTcgMTU2LjcyNiAxMDYuNTQyIDE1Ni4xNjMgMTA2LjY5NSAxNTUuNTM2QzEwNi45NzQgMTU0LjQwNiAxMDYuOTgyIDE1My40MzcgMTA3LjAwMiAxNTIuMjc1QzEwNy4wMDIgMTUxLjUzMyAxMDcuMTI3IDE1MC40MDMgMTA3LjY4NyAxNDkuODQ3QzEwOC4yNDggMTQ5LjI5IDEwOC42NTEgMTQ5LjUxNyAxMDkuMzE4IDE0OS4xMzVDMTEwLjcwOSAxNDguMzM3IDExMC4yOCAxNDcuODQxIDExMC44ODYgMTQ2Ljc2M0MxMTEuNDYxIDE0NS43NDMgMTExLjU3OCAxNDQuNDM2IDExMi42NDEgMTQzLjkwN0MxMTQuMTEyIDE0My4xNzYgMTE1Ljc5NCAxNDMuMzU1IDExNS44MDkgMTQxLjMyQzExNS44MjEgMTM5Ljk4MiAxMTYuMDQ2IDEzOC42NTUgMTE2LjQ3NSAxMzcuMzg4QzExNi42MzcgMTM2LjkxNCAxMTcuNDI5IDEzNi4yODggMTE3LjgwNCAxMzUuOTU2QzExOC4xNzkgMTM1LjYyNCAxMTguMzkzIDEzNS4yNiAxMTguODM3IDEzNS4xMzRDMTE5Ljk4NCAxMzQuODA3IDEyMS44OCAxMzQuNzk4IDEyMy4wNDIgMTM1LjA3MkMxMjMuOTkzIDEzNS4yODggMTI0Ljc4NyAxMzUuMzggMTI1LjY5OSAxMzQuOTg2QzEyNi40NSAxMzQuNjYgMTI2Ljk2MSAxMzQuOTg2IDEyNy43NTQgMTM1LjI0N0MxMzAuMTI3IDEzNi4wNTMgMTMyLjAwMSAxMzcuOCAxMzQuNTkzIDEzNy44NzhDMTM1LjExNSAxMzcuOTEgMTM1LjYzOCAxMzcuODI1IDEzNi4xMjIgMTM3LjYyN0MxMzcuMiAxMzcuMTQyIDEzOC42MjggMTM1LjA4NyAxMzguNzIzIDEzMy45ODFDMTM4Ljg1IDEzMi40NTIgMTM3Ljk1OSAxMzEuMzkzIDEzNy42NDUgMTMwLjA1NEMxMzcuNDI5IDEyOS4wNzIgMTM3Ljg0NSAxMjcuNDEgMTM4LjIxMiAxMjYuNTA0QzEzOC4yODEgMTI2LjMzMyAxMzguNTc0IDEyNi4xNjcgMTM4LjY2IDEyNi4wMDhDMTQwLjYyNSAxMjIuMzI2IDE0NS40NTEgMTIwLjkwMyAxNDguODUgMTE5LjY5OEMxNDcuMDg2IDExOS4wNzkgMTQzLjU2OSAxMTguMTg4IDE0MS44MDUgMTE3LjU3MUMxNDAuOTQyIDExNy4yNzEgMTM5LjIzNiAxMTYuNzU2IDEzOC40MjcgMTE2LjM1NUMxMzYuNjU1IDExNS40NzMgMTM1LjMwNSAxMTMuNzM3IDEzMy41NzcgMTEyLjgyMkMxMzEuNjcxIDExMS44MTMgMTI5LjY0NCAxMTAuMzYyIDEyNy41NjkgMTA5LjcwOEMxMjQuMDE3IDEwOC41ODcgMTE5LjgwNSAxMDguMDg5IDExNi4xMzkgMTA4LjkzOEMxMTMuMDI5IDEwOS42NTYgMTEwLjAzNCAxMTAuOTg1IDEwNi45NjkgMTExLjg2QzEwNS43OTYgMTEyLjE5NyAxMDQuNjgxIDExMy4wMzggMTAzLjQ0NyAxMTIuODg3QzEwMi41NCAxMTIuNzc3IDEwMS41ODYgMTEyLjY3MSAxMDAuOTI5IDExMi4wMjRDMTAwLjg1MyAxMTEuOTQ2IDEwMC43NjIgMTExLjg4NCAxMDAuNjYxIDExMS44NDRDMTAwLjU2IDExMS44MDMgMTAwLjQ1MSAxMTEuNzgzIDEwMC4zNDMgMTExLjc4N0MxMDAuMjM0IDExMS43OSAxMDAuMTI3IDExMS44MTYgMTAwLjAyOSAxMTEuODY0Qzk5LjkzMDQgMTExLjkxMSA5OS44NDMyIDExMS45NzggOTkuNzcyNyAxMTIuMDYxTDk5LjU4MjkgMTEyLjI3N0M5OS4xOTY5IDExMi42OTMgOTguOCAxMTIuODgzIDk4LjM5MDMgMTEzLjI3NUM5Ny4xMDkzIDExNC41MDQgOTguMDk0OCAxMTMuODk2IDk2LjYxOTcgMTE0Ljg4NEM5NS4yMDkzIDExNS44MjkgOTQuMTg0OSAxMTcuMTY4IDkyLjcyMjcgMTE4LjAzNUM5MS4yNjA2IDExOC45MDIgODkuOTgzOSAxMTguOTgyIDg4LjQzMTEgMTE5LjQ3NUM4Ni43ODM1IDEyMC4wMDIgODUuMzI3OCAxMjAuOTM1IDgzLjc3MDcgMTIxLjcxMkM4Mi44NDEyIDEyMi4xNzMgODEuNzM0OSAxMjIuNDY0IDgwLjg1MjkgMTIyLjkzQzgwLjA3MjIgMTIzLjM0NCA3OS40ODU2IDEyNC4xOSA3OC43NDM3IDEyNC42NjZDNzguMDYyMiAxMjUuMDk4IDc3LjMxMTcgMTI1LjY1NCA3Ni42NzU1IDEyNi4xNTdDNzYuMjkzOCAxMjYuNDU4IDc1Ljk1MDkgMTI2LjgyMyA3NS41MTMxIDEyNy4wMzlDNzQuNTQwNSAxMjcuNTE1IDcyLjk4OTkgMTI2Ljk1NyA3My4wMDcyIDEyNy45OUM3My4xNTM4IDEyOC4yMjUgNzMuMzAwNSAxMjguNDYyIDczLjQ1MzYgMTI4LjY5NUM3NC4xNTAyIDEyOS43NzMgNzQuMjczMSAxMzAuNzA1IDc0Ljk4NDggMTMxLjc2NkM3NS41OTI5IDEzMi42NzIgNzYuNjQ1MyAxMzMuODI4IDc3LjMzMTEgMTM0LjY2Qzc4LjA0NzEgMTM1LjUyMyA4MS4yMDIyIDEzOC45NzMgODAuMDkzNyAxNDAuMDM5Qzc5LjkyNzcgMTQwLjE5OCA3OS43MjI4IDE0MC43MzcgNzkuNTIyMiAxNDAuODQ5Qzc4LjY1OTYgMTQxLjMzNyA3Ny42MjAxIDE0MS4yNTUgNzcuMTczNyAxNDIuMTcxQzc2Ljc2NjEgMTQzLjAxNyA3Ni40NjQyIDE0Mi44NCA3NS42MTY3IDE0My4yM0M3NC45OTU2IDE0My41MTcgNzIuMDgyIDE0My43OTcgNzMuNDA0IDE0NC41ODlDNzUuMjEzNCAxNDUuNjc4IDc3LjkwMjYgMTQ4LjM3NCA3OC42NTUzIDE1MC40NTlaXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGxvY2F0aW9uTmFtZTogTE9DQVRJT04uSkosXHJcbiAgICBzcGVjaWFsQ2l0eTogZmFsc2UsXHJcbiAgICBwYXRoOiBcIk0yNDEuOTQ1IDI3Ny4wMThMMjM1LjkwNyAyNzcuNjE3QzIzNS44MzMgMjc3LjYxNyAyMzUuNzYgMjc3LjYzNSAyMzUuNjkxIDI3Ny42NDhDMjM0LjA2NSAyNzcuOTI4IDIxNS4yNzQgMjgxLjMxNCAyMDguNTM5IDI4OC4zMjlDMjA3LjE1NyAyODkuODMgMjA2LjAzNCAyOTEuNTUyIDIwNS4yMTggMjkzLjQyM0MyMDUuMDI5IDI5My44OTQgMjA0Ljk2MSAyOTQuNDA1IDIwNS4wMjEgMjk0LjkwOUMyMDUuMDgyIDI5NS40MTMgMjA1LjI2OCAyOTUuODk0IDIwNS41NjMgMjk2LjMwNkwyMDguOTI4IDMwMS4wMjdDMjA5LjE2OSAzMDEuMzcyIDIwOS40ODEgMzAxLjY2MyAyMDkuODQzIDMwMS44OEMyMTAuMjA0IDMwMi4wOTYgMjEwLjYwNyAzMDIuMjM1IDIxMS4wMjYgMzAyLjI4NkMyMTEuNDQ0IDMwMi4zMzYgMjExLjg2OCAzMDIuMjk5IDIxMi4yNzEgMzAyLjE3NUMyMTIuNjc0IDMwMi4wNTEgMjEzLjA0NiAzMDEuODQ0IDIxMy4zNjQgMzAxLjU2NkwyMTMuNDM5IDMwMS40OTdDMjEzLjc0NyAzMDEuMjA4IDIxNC4xMTIgMzAwLjk4NiAyMTQuNTExIDMwMC44NDZDMjE0LjkxIDMwMC43MDYgMjE1LjMzNCAzMDAuNjUxIDIxNS43NTUgMzAwLjY4NEwyMjEuMzM3IDMwMS4xMzdDMjIxLjU4NCAzMDEuMTU5IDIyMS44MzMgMzAxLjE0OCAyMjIuMDc4IDMwMS4xMDdDMjIzLjI2OSAzMDAuOTA5IDIyNy4xMzggMzAwLjMwNyAyMjkuNzc1IDMwMC4zOThDMjMwLjI2MSAzMDAuNDEyIDIzMC43NDMgMzAwLjMwOSAyMzEuMTggMzAwLjA5NkMyMzEuNjE3IDI5OS44ODMgMjMxLjk5NSAyOTkuNTY4IDIzMi4yODMgMjk5LjE3N0wyMzIuODg1IDI5OC4zNjRDMjMzLjIxNSAyOTcuOTE5IDIzMy42NiAyOTcuNTczIDIzNC4xNzMgMjk3LjM2NEMyMzQuNjg1IDI5Ny4xNTYgMjM1LjI0NiAyOTcuMDkyIDIzNS43OTIgMjk3LjE4TDIzNy4wODYgMjk3LjM4NUMyMzcuNTkzIDI5Ny40NjcgMjM4LjExMyAyOTcuNDE5IDIzOC41OTYgMjk3LjI0NUwyNDMuNDI0IDI5NS41MTlDMjQzLjgwOCAyOTUuMzgyIDI0NC4xNiAyOTUuMTY5IDI0NC40NTkgMjk0Ljg5MkMyNDQuNzU4IDI5NC42MTUgMjQ0Ljk5OCAyOTQuMjggMjQ1LjE2NSAyOTMuOTA4QzI0NS43OSAyOTIuNTA0IDI0Ni45ODEgMjkwLjE2IDI0OC40NjIgMjg4Ljc3M0MyNDguNzcgMjg4LjQ5MSAyNDkuMDE3IDI4OC4xNDggMjQ5LjE4NyAyODcuNzY2QzI0OS4zNTcgMjg3LjM4MyAyNDkuNDQ3IDI4Ni45NyAyNDkuNDUgMjg2LjU1MlYyODQuOTE1QzI0OS40NSAyODQuMzUyIDI0OS4yOTMgMjgzLjgwMSAyNDguOTk3IDI4My4zMjJMMjQ3LjQ0IDI4MC44MDlDMjQ3LjI2NyAyODAuNTI3IDI0Ny4wNDggMjgwLjI3NiAyNDYuNzkzIDI4MC4wNjVDMjQ1LjY5NSAyNzkuMTY2IDI0Mi42NzYgMjc2Ljc3IDI0MS45NDUgMjc3LjAxOFpcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9jYXRpb25OYW1lOiBMT0NBVElPTi5HQixcclxuICAgIHNwZWNpYWxDaXR5OiBmYWxzZSxcclxuICAgIHBhdGg6ICdNMjQ1LjQ4MyA3OC4yOTA5TDI0NC43NDggNzguNDcyMUMyNDQuNDE1IDc4LjU1NDggMjQ0LjA5OCA3OC42OTE4IDI0My44MDkgNzguODc3NUMyNDIuNzU5IDc5LjU1NjkgMjM5LjcxMiA4MC43NjI0IDIzOS41NjMgODIuMTEyNEMyMzkuMzg0IDgzLjc3OTUgMjQyLjI1MiA4NC41OTAzIDI0My4zMjYgODUuMjYxQzI0My43MjMgODUuNTEzOCAyNDQuMTcyIDg1LjY3MTIgMjQ0LjYzOSA4NS43MjFDMjQ1LjEwNyA4NS43NzA3IDI0NS41NzkgODUuNzExNSAyNDYuMDIgODUuNTQ3OUMyNDcuNDYxIDg0Ljk5MzYgMjQ4LjM5MiA4My43NjIyIDI0OC45MzEgODIuNzk4MkMyNDkuMjI2IDgyLjI3MDkgMjQ5LjM2IDgxLjY2OSAyNDkuMzE3IDgxLjA2NjZDMjQ5LjI3NCA4MC40NjQxIDI0OS4wNTUgNzkuODg3NCAyNDguNjg5IDc5LjQwNzVDMjQ4LjMyMiA3OC45Mjc2IDI0Ny44MjMgNzguNTY1MyAyNDcuMjUzIDc4LjM2NTRDMjQ2LjY4MyA3OC4xNjU1IDI0Ni4wNjcgNzguMTM2NiAyNDUuNDgxIDc4LjI4MjNMMjQ1LjQ4MyA3OC4yOTA5WidcclxuICB9LFxyXG4gIHtcclxuICAgIGxvY2F0aW9uTmFtZTogTE9DQVRJT04uR0IsXHJcbiAgICBzcGVjaWFsQ2l0eTogZmFsc2UsXHJcbiAgICBwYXRoOiAnTTI1OS43ODggODUuMTMxNkwyNTkuMjYxIDg1LjI2MUMyNTkuMDIzIDg1LjMyMDcgMjU4Ljc5NyA4NS40MTkgMjU4LjU5MSA4NS41NTIyQzI1Ny45MTggODUuOTgzNSAyNTcuMjA2IDg2LjM4ODkgMjU2LjU2MyA4Ni44NjM0QzI1NS40MjkgODcuNjk4IDI1NS44MjYgODguNDIwNCAyNTYuODUgODkuMjUwN0MyNTcuNzEzIDg5Ljk0MyAyNTkuMDA3IDkwLjc2MDQgMjYwLjEyOCA5MC4zNDg0QzI2MS4yMDcgODkuOTUzOCAyNjEuODg0IDg5LjAzNTEgMjYyLjI3MiA4OC4zMjk5QzI2Mi40MTEgODguMDc0MSAyNjIuNDk3IDg3Ljc5MzEgMjYyLjUyNiA4Ny41MDM2QzI2Mi41NTUgODcuMjE0IDI2Mi41MjYgODYuOTIxNiAyNjIuNDQgODYuNjQzNEMyNjIuMjc2IDg2LjA5OTUgMjYxLjkwOSA4NS42Mzk0IDI2MS40MTYgODUuMzU4MUMyNjAuOTIyIDg1LjA3NjggMjYwLjMzOSA4NC45OTU3IDI1OS43ODggODUuMTMxNlY4NS4xMzE2WidcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgamVqdVJlY3QgPSA8cmVjdCB4PVwiMTg5LjVcIiB5PVwiMjYxLjVcIiB3aWR0aD1cIjc1LjQ0OTlcIiBoZWlnaHQ9XCI1Ni4zMDc2XCIgcng9XCI3LjVcIiBzdHJva2U9XCIjRTdFOEVBXCIvPjtcclxuIiwiaW1wb3J0IHtSZWZPYmplY3QsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TE9DQVRJT05fVFlQRX0gZnJvbSBcIkBkb21haW4vbG9jYXRpb25cIjtcclxuXHJcbmludGVyZmFjZSBJVXNlTW91c2VPdmVyUHJvcHMge1xyXG4gIHJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50IHwgU1ZHRWxlbWVudD47XHJcbiAgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uOiAodmFsdWU6IExPQ0FUSU9OX1RZUEUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNb3VzZU92ZXIgPSAoXHJcbiAge1xyXG4gICAgcmVmLFxyXG4gICAgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uXHJcbiAgfTogSVVzZU1vdXNlT3ZlclByb3BzKSA9PiB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VvdmVyID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIWUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24pIHJldHVybjtcclxuICAgICAgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uKGUudGFyZ2V0LmRhdGFzZXQubG9jYXRpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVNb3VzZW92ZXIpO1xyXG5cclxuICAgIHJldHVybiAoKCkgPT4ge1xyXG4gICAgICByZWYuY3VycmVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTW91c2VvdmVyKTtcclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG59O1xyXG4iLCJpbXBvcnQge0xPQ0FUSU9OX1RZUEV9IGZyb20gXCJAZG9tYWluL2xvY2F0aW9uXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9rb3JlYU1hcC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25MaXN0IGZyb20gXCIuL2xvY2F0aW9uTGlzdFwiO1xyXG5pbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5pbXBvcnQge2dldFZpZXdQb3J0UG9zaXRpb259IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSUtvcmVhTWFwUHJvcHMge1xyXG4gIHNlbGVjdGVkTG9jYXRpb25zOiBMT0NBVElPTl9UWVBFW107XHJcbiAgc2V0U2VsZWN0ZWRMb2NhdGlvbnM6IChzZWxlY3RlZExvY2F0aW9uOiAoKHByZXY6IExPQ0FUSU9OX1RZUEVbXSkgPT4gTE9DQVRJT05fVFlQRVtdKSB8IExPQ0FUSU9OX1RZUEVbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgS29yZWFNYXAgPSAoXHJcbiAge1xyXG4gICAgc2VsZWN0ZWRMb2NhdGlvbnMsXHJcbiAgICBzZXRTZWxlY3RlZExvY2F0aW9uc1xyXG4gIH06IElLb3JlYU1hcFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlPExPQ0FUSU9OX1RZUEUgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbmFtZVBvc2l0aW9uLCBzZXROYW1lUG9zaXRpb25dID0gdXNlU3RhdGUoe3RvcDogMCwgbGVmdDogMH0pO1xyXG4gIGNvbnN0IG5hbWVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBpc1NlbGVjdGVkID0gKG5hbWU6IExPQ0FUSU9OX1RZUEUpID0+IHtcclxuICAgIHJldHVybiBzZWxlY3RlZExvY2F0aW9ucy5pbmNsdWRlcyhuYW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVMb2NhdGlvbiA9ICgpID0+IHtcclxuICAgIGlmICghY3VycmVudExvY2F0aW9uKSByZXR1cm47XHJcbiAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbnMuaW5jbHVkZXMoY3VycmVudExvY2F0aW9uKSkge1xyXG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9ucyhzZWxlY3RlZExvY2F0aW9ucy5maWx0ZXIoKGxvY2F0aW9uKSA9PiBsb2NhdGlvbiAhPT0gY3VycmVudExvY2F0aW9uKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb25zKChwcmV2KSA9PiBbLi4ucHJldiwgY3VycmVudExvY2F0aW9uXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uID0gKHZhbHVlOiBMT0NBVElPTl9UWVBFKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50TG9jYXRpb24odmFsdWUpO1xyXG4gICAgaGFuZGxlU2V0TmFtZVBvc2l0aW9uKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXROYW1lUG9zaXRpb24gPSAodmFsdWU6IExPQ0FUSU9OX1RZUEUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgIW5hbWVSZWYpIHJldHVybjtcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHBhdGhbZGF0YS1sb2NhdGlvbj0ke3ZhbHVlfV1gKTtcclxuICAgIGNvbnN0IGNyID0gdGFyZ2V0Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IG5hbWVXaWR0aCA9IG5hbWVSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcblxyXG4gICAgLy8gU1ZHIEVsZW1lbnTripQgb2Zmc2V0VG9w6rO8IOqwmeydgCDsg4HrjIDsoIEg7JyE7LmY66W8IOygnOqzte2VmOuKlCBBUEnqsIAg7KG07J6s7ZWY7KeAIOyViuq4sCDrlYzrrLjsl5AsXHJcbiAgICAvLyBTVkfsl5DshJzsnZgg7IOB64yA7KCBIOychOy5mOqwkuydhCDrlLDroZwg6rOE7IKw7ZW07KSY7JW87ZWoXHJcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBnZXRWaWV3UG9ydFBvc2l0aW9uKHRhcmdldCk7XHJcblxyXG4gICAgaWYgKCFjciB8fCAhbmFtZVdpZHRoIHx8ICFuZXdQb3NpdGlvbikgcmV0dXJuO1xyXG4gICAgc2V0TmFtZVBvc2l0aW9uKHtcclxuICAgICAgdG9wOiBuZXdQb3NpdGlvbi50b3AgKyBjci5oZWlnaHQgLyAyIC0gNDAsXHJcbiAgICAgIGxlZnQ6IG5ld1Bvc2l0aW9uLmxlZnQgKyBjci53aWR0aCAvIDIgLSBuYW1lV2lkdGggLyAyXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9IG9uTW91c2VPdXQ9eygpID0+IHNldEN1cnJlbnRMb2NhdGlvbihudWxsKX0+XHJcbiAgICAgIDxMb2NhdGlvbkxpc3RcclxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgIHRvZ2dsZUxvY2F0aW9uPXt0b2dnbGVMb2NhdGlvbn1cclxuICAgICAgICBjdXJyZW50TG9jYXRpb249e2N1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICBoYW5kbGVTZXRDdXJyZW50TG9jYXRpb249e2hhbmRsZVNldEN1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgLz5cclxuICAgICAgPE1hcFxyXG4gICAgICAgIHRvZ2dsZUxvY2F0aW9uPXt0b2dnbGVMb2NhdGlvbn1cclxuICAgICAgICBzZXRDdXJyZW50TG9jYXRpb249e3NldEN1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICBjdXJyZW50TG9jYXRpb249e2N1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICBuYW1lUG9zaXRpb249e25hbWVQb3NpdGlvbn1cclxuICAgICAgICBoYW5kbGVTZXRDdXJyZW50TG9jYXRpb249e2hhbmRsZVNldEN1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgIG5hbWVSZWY9e25hbWVSZWZ9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLb3JlYU1hcDtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9rb3JlYU1hcC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4va29yZWFNYXAubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9rb3JlYU1hcC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQge0FMTF9MT0NBVElPTlMsIExvY2F0aW9uTmFtZU1hcCwgTE9DQVRJT05fVFlQRX0gZnJvbSBcIkBkb21haW4vbG9jYXRpb25cIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlTW91c2VPdmVyfSBmcm9tIFwiLi4vaG9va3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2NhdGlvbkxpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSUxvY2F0aW9uUHJvcHMge1xyXG4gIGlzU2VsZWN0ZWQ6IChuYW1lOiBMT0NBVElPTl9UWVBFKSA9PiBib29sZWFuO1xyXG4gIHRvZ2dsZUxvY2F0aW9uOiAoKSA9PiB2b2lkO1xyXG4gIGN1cnJlbnRMb2NhdGlvbjogTE9DQVRJT05fVFlQRSB8IG51bGw7XHJcbiAgbG9jYXRpb25OYW1lOiBMT0NBVElPTl9UWVBFO1xyXG59XHJcblxyXG5jb25zdCBMb2NhdGlvbiA9IChcclxuICB7XHJcbiAgICBpc1NlbGVjdGVkLFxyXG4gICAgdG9nZ2xlTG9jYXRpb24sXHJcbiAgICBjdXJyZW50TG9jYXRpb24sXHJcbiAgICBsb2NhdGlvbk5hbWVcclxuICB9OiBJTG9jYXRpb25Qcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUxvY2F0aW9uKCl9XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goXHJcbiAgICAgICAgJ2xvY2F0aW9uJyxcclxuICAgICAgICB7J2hvdmVyZWQnOiBjdXJyZW50TG9jYXRpb24gPT09IGxvY2F0aW9uTmFtZX0sXHJcbiAgICAgICAgeydzZWxlY3RlZCc6IGlzU2VsZWN0ZWQobG9jYXRpb25OYW1lKX1cclxuICAgICAgKX1cclxuICAgICAgZGF0YS1sb2NhdGlvbj17bG9jYXRpb25OYW1lfVxyXG4gICAgPlxyXG4gICAgICB7TG9jYXRpb25OYW1lTWFwW2xvY2F0aW9uTmFtZV19XHJcbiAgICA8L2xpPlxyXG4gIClcclxufTtcclxuXHJcbmludGVyZmFjZSBJTG9jYXRpb25MaXN0UHJvcHMge1xyXG4gIGlzU2VsZWN0ZWQ6IChuYW1lOiBMT0NBVElPTl9UWVBFKSA9PiBib29sZWFuO1xyXG4gIHRvZ2dsZUxvY2F0aW9uOiAoKSA9PiB2b2lkO1xyXG4gIGN1cnJlbnRMb2NhdGlvbjogTE9DQVRJT05fVFlQRSB8IG51bGw7XHJcbiAgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uOiAodmFsdWU6IExPQ0FUSU9OX1RZUEUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uTGlzdCA9IChcclxuICB7XHJcbiAgICBpc1NlbGVjdGVkLFxyXG4gICAgdG9nZ2xlTG9jYXRpb24sXHJcbiAgICBjdXJyZW50TG9jYXRpb24sXHJcbiAgICBoYW5kbGVTZXRDdXJyZW50TG9jYXRpb25cclxuICB9OiBJTG9jYXRpb25MaXN0UHJvcHMpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbkxpc3RSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZU1vdXNlT3Zlcih7cmVmOiBsb2NhdGlvbkxpc3RSZWYsIGhhbmRsZVNldEN1cnJlbnRMb2NhdGlvbn0pO1xyXG5cclxuICBjb25zdCBsaXN0ID0gQUxMX0xPQ0FUSU9OUy5tYXAobG9jYXRpb25OYW1lID0+XHJcbiAgICA8TG9jYXRpb25cclxuICAgICAga2V5PXtsb2NhdGlvbk5hbWV9XHJcbiAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgIHRvZ2dsZUxvY2F0aW9uPXt0b2dnbGVMb2NhdGlvbn1cclxuICAgICAgY3VycmVudExvY2F0aW9uPXtjdXJyZW50TG9jYXRpb259XHJcbiAgICAgIGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfVxyXG4gICAgLz4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e2xvY2F0aW9uTGlzdFJlZn0gY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y3goJ2xvY2F0aW9uTGlzdCcpfT57bGlzdH08L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25MaXN0O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2xvY2F0aW9uTGlzdC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbG9jYXRpb25MaXN0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tYXAubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtSZWZPYmplY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlTW91c2VPdmVyfSBmcm9tIFwiLi4vaG9va3NcIjtcclxuaW1wb3J0IHtMb2NhdGlvbk5hbWVNYXAsIExPQ0FUSU9OX1RZUEV9IGZyb20gXCJAZG9tYWluL2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7amVqdVJlY3QsIFBBVEhfREFUQX0gZnJvbSBcIi4uL2RhdGFcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSUxvY2F0aW9uTWFwUHJvcHMge1xyXG4gIGlzU2VsZWN0ZWQ6IChuYW1lOiBMT0NBVElPTl9UWVBFKSA9PiBib29sZWFuO1xyXG4gIHRvZ2dsZUxvY2F0aW9uOiAoKSA9PiB2b2lkO1xyXG4gIGN1cnJlbnRMb2NhdGlvbjogTE9DQVRJT05fVFlQRSB8IG51bGw7XHJcbiAgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uOiAodmFsdWU6IExPQ0FUSU9OX1RZUEUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uTWFwID0gKFxyXG4gIHtcclxuICAgIGlzU2VsZWN0ZWQsXHJcbiAgICB0b2dnbGVMb2NhdGlvbixcclxuICAgIGN1cnJlbnRMb2NhdGlvbixcclxuICAgIGhhbmRsZVNldEN1cnJlbnRMb2NhdGlvbixcclxuICB9OiBJTG9jYXRpb25NYXBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlTW91c2VPdmVyKHtyZWY6IG1hcFJlZiwgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9ufSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHRWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIFNWR0VsZW1lbnQ7XHJcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmRhdGFzZXQ/LmxvY2F0aW9uKSByZXR1cm47XHJcbiAgICB0b2dnbGVMb2NhdGlvbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhdGhMaXN0ID0gUEFUSF9EQVRBLm1hcCgocGF0aERhdGEpID0+IHtcclxuICAgIGNvbnN0IHtsb2NhdGlvbk5hbWUsIHNwZWNpYWxDaXR5LCBwYXRofSA9IHBhdGhEYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHBhdGhcclxuICAgICAgICBrZXk9e3BhdGh9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjeChcclxuICAgICAgICAgIHsnZW0nOiBzcGVjaWFsQ2l0eX0sXHJcbiAgICAgICAgICB7J2hvdmVyZWQnOiBjdXJyZW50TG9jYXRpb24gPT09IGxvY2F0aW9uTmFtZX0sXHJcbiAgICAgICAgICB7J3NlbGVjdGVkJzogaXNTZWxlY3RlZChsb2NhdGlvbk5hbWUpfVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgZGF0YS1sb2NhdGlvbj17bG9jYXRpb25OYW1lfSBkPXtwYXRofVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyByZWY9e21hcFJlZn0gY2xhc3NOYW1lPXtjeCgnbWFwV3JhcCcpfSBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUpfSB3aWR0aD1cIjI2NVwiIGhlaWdodD1cIjMyMFwiXHJcbiAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjY1IDMyMFwiXHJcbiAgICAgICAgIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICB7cGF0aExpc3R9XHJcbiAgICAgIHtqZWp1UmVjdH1cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufTtcclxuXHJcbmludGVyZmFjZSBJTG9jYXRpb25OYW1lUHJvcHMge1xyXG4gIHRvZ2dsZUxvY2F0aW9uOiAoKSA9PiB2b2lkO1xyXG4gIHNldEN1cnJlbnRMb2NhdGlvbjogKGN1cnJlbnRMb2NhdGlvbjogTE9DQVRJT05fVFlQRSB8IG51bGwpID0+IHZvaWQ7XHJcbiAgY3VycmVudExvY2F0aW9uOiBMT0NBVElPTl9UWVBFIHwgbnVsbDtcclxuICBuYW1lUG9zaXRpb246IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9O1xyXG4gIG5hbWVSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbn1cclxuXHJcbmNvbnN0IExvY2F0aW9uTmFtZSA9IChcclxuICB7XHJcbiAgICB0b2dnbGVMb2NhdGlvbixcclxuICAgIHNldEN1cnJlbnRMb2NhdGlvbixcclxuICAgIGN1cnJlbnRMb2NhdGlvbixcclxuICAgIG5hbWVQb3NpdGlvbixcclxuICAgIG5hbWVSZWZcclxuICB9OiBJTG9jYXRpb25OYW1lUHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtuYW1lUmVmfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVMb2NhdGlvbigpfVxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEN1cnJlbnRMb2NhdGlvbihjdXJyZW50TG9jYXRpb24pfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEN1cnJlbnRMb2NhdGlvbihudWxsKX1cclxuICAgICAgY2xhc3NOYW1lPXtjeCgnbmFtZScpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IGN1cnJlbnRMb2NhdGlvbiA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICAgdG9wOiBgJHtuYW1lUG9zaXRpb24udG9wfXB4YCxcclxuICAgICAgICBsZWZ0OiBgJHtuYW1lUG9zaXRpb24ubGVmdH1weGBcclxuICAgICAgfX0+XHJcbiAgICAgIHtMb2NhdGlvbk5hbWVNYXBbY3VycmVudExvY2F0aW9uXX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmludGVyZmFjZSBJTWFwUHJvcHMge1xyXG4gIHRvZ2dsZUxvY2F0aW9uOiAoKSA9PiB2b2lkO1xyXG4gIHNldEN1cnJlbnRMb2NhdGlvbjogKGN1cnJlbnRMb2NhdGlvbjogTE9DQVRJT05fVFlQRSB8IG51bGwpID0+IHZvaWQ7XHJcbiAgY3VycmVudExvY2F0aW9uOiBMT0NBVElPTl9UWVBFIHwgbnVsbDtcclxuICBuYW1lUG9zaXRpb246IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9O1xyXG4gIGhhbmRsZVNldEN1cnJlbnRMb2NhdGlvbjogKHZhbHVlOiBMT0NBVElPTl9UWVBFKSA9PiB2b2lkO1xyXG4gIGlzU2VsZWN0ZWQ6IChuYW1lOiBMT0NBVElPTl9UWVBFKSA9PiBib29sZWFuO1xyXG4gIG5hbWVSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD5cclxufVxyXG5cclxuY29uc3QgTWFwID0gKFxyXG4gIHtcclxuICAgIHRvZ2dsZUxvY2F0aW9uLFxyXG4gICAgc2V0Q3VycmVudExvY2F0aW9uLFxyXG4gICAgY3VycmVudExvY2F0aW9uLFxyXG4gICAgbmFtZVBvc2l0aW9uLFxyXG4gICAgaGFuZGxlU2V0Q3VycmVudExvY2F0aW9uLFxyXG4gICAgaXNTZWxlY3RlZCxcclxuICAgIG5hbWVSZWYsXHJcbiAgfTogSU1hcFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFwQXJlYScpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdtYXBDb250ZW50cycpfT5cclxuICAgICAgICA8TG9jYXRpb25NYXBcclxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XHJcbiAgICAgICAgICB0b2dnbGVMb2NhdGlvbj17dG9nZ2xlTG9jYXRpb259XHJcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb249e2N1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICAgIGhhbmRsZVNldEN1cnJlbnRMb2NhdGlvbj17aGFuZGxlU2V0Q3VycmVudExvY2F0aW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExvY2F0aW9uTmFtZVxyXG4gICAgICAgICAgdG9nZ2xlTG9jYXRpb249e3RvZ2dsZUxvY2F0aW9ufVxyXG4gICAgICAgICAgc2V0Q3VycmVudExvY2F0aW9uPXtzZXRDdXJyZW50TG9jYXRpb259XHJcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb249e2N1cnJlbnRMb2NhdGlvbn1cclxuICAgICAgICAgIG5hbWVQb3NpdGlvbj17bmFtZVBvc2l0aW9ufVxyXG4gICAgICAgICAgbmFtZVJlZj17bmFtZVJlZn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9tYXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL21hcC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL21hcC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY29uc3QgZ2V0Vmlld1BvcnRQb3NpdGlvbiA9IChlbDogRWxlbWVudCkgPT4ge1xyXG4gIGlmICghZWwpIHJldHVybjtcclxuXHJcbiAgY29uc3QgZ2V0VnBQb3M6IGFueSA9IChlbDogRWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFlbCB8fCAhZWwucGFyZW50RWxlbWVudCkgcmV0dXJuO1xyXG4gICAgaWYgKGVsPy5wYXJlbnRFbGVtZW50Py50YWdOYW1lID09PSAnc3ZnJykge1xyXG4gICAgICByZXR1cm4gZWwucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRWcFBvcyhlbC5wYXJlbnRFbGVtZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbFBvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGNvbnN0IHZwUG9zID0gZ2V0VnBQb3MoZWwpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBlbFBvcy50b3AgLSB2cFBvcy50b3AsXHJcbiAgICBsZWZ0OiBlbFBvcy5sZWZ0IC0gdnBQb3MubGVmdCxcclxuICAgIHdpZHRoOiBlbFBvcy53aWR0aCxcclxuICAgIGJvdHRvbTogZWxQb3MuYm90dG9tIC0gdnBQb3MudG9wLFxyXG4gICAgaGVpZ2h0OiBlbFBvcy5oZWlnaHQsXHJcbiAgICByaWdodDogZWxQb3MucmlnaHQgLSB2cFBvcy5sZWZ0XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGVudW0gTE9DQVRJT04ge1xyXG4gIFNPID0gJ1NFT1VMJyxcclxuICBHRyA9ICdHWUVPTkdHSScsXHJcbiAgSUMgPSAnSU5DSEVPTicsXHJcbiAgQlMgPSAnQlVTQU4nLFxyXG4gIERHID0gJ0RBRUdVJyxcclxuICBHSiA9ICdHV0FOR0pVJyxcclxuICBESiA9ICdEQUVKRU9OJyxcclxuICBVUyA9ICdVTFNBTicsXHJcbiAgU0ogPSAnU0VKT05HJyxcclxuICBHVyA9ICdHQU5HV09OJyxcclxuICBDTiA9ICdDSFVOR05BTScsXHJcbiAgR04gPSAnR1lFT05HTkFNJyxcclxuICBHQiA9ICdHWUVPTkdCVUsnLFxyXG4gIEpOID0gJ0pFT05OQU0nLFxyXG4gIEpCID0gJ0pFT05CVUsnLFxyXG4gIENCID0gJ0NIVU5HQlVLJyxcclxuICBKSiA9ICdKRUpVJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvY2F0aW9uTmFtZU1hcDogUmVjb3JkPExPQ0FUSU9OLCBzdHJpbmc+ID0ge1xyXG4gIFtMT0NBVElPTi5TT106ICfshJzsmrjtirnrs4Tsi5wnLFxyXG4gIFtMT0NBVElPTi5HR106ICfqsr3quLDrj4QnLFxyXG4gIFtMT0NBVElPTi5JQ106ICfsnbjsspzqtJHsl63si5wnLFxyXG4gIFtMT0NBVElPTi5CU106ICfrtoDsgrDqtJHsl63si5wnLFxyXG4gIFtMT0NBVElPTi5ER106ICfrjIDqtazqtJHsl63si5wnLFxyXG4gIFtMT0NBVElPTi5HSl06ICfqtJHso7zqtJHsl63si5wnLFxyXG4gIFtMT0NBVElPTi5ESl06ICfrjIDsoITqtJHsl63si5wnLFxyXG4gIFtMT0NBVElPTi5VU106ICfsmrjsgrDqtJHsl63si5wnLFxyXG4gIFtMT0NBVElPTi5TSl06ICfshLjsooXtirnrs4TsnpDsuZjsi5wnLFxyXG4gIFtMT0NBVElPTi5HV106ICfqsJXsm5Drj4QnLFxyXG4gIFtMT0NBVElPTi5DTl06ICfstqnssq3rgqjrj4QnLFxyXG4gIFtMT0NBVElPTi5HTl06ICfqsr3sg4Hrgqjrj4QnLFxyXG4gIFtMT0NBVElPTi5HQl06ICfqsr3sg4HrtoHrj4QnLFxyXG4gIFtMT0NBVElPTi5KTl06ICfsoITrnbzrgqjrj4QnLFxyXG4gIFtMT0NBVElPTi5KQl06ICfsoITrnbzrtoHrj4QnLFxyXG4gIFtMT0NBVElPTi5DQl06ICfstqnssq3rtoHrj4QnLFxyXG4gIFtMT0NBVElPTi5KSl06ICfsoJzso7ztirnrs4TsnpDsuZjrj4QnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgTE9DQVRJT05fVFlQRSA9XHJcbiAgfCBMT0NBVElPTi5TT1xyXG4gIHwgTE9DQVRJT04uR0dcclxuICB8IExPQ0FUSU9OLklDXHJcbiAgfCBMT0NBVElPTi5CU1xyXG4gIHwgTE9DQVRJT04uREdcclxuICB8IExPQ0FUSU9OLkdKXHJcbiAgfCBMT0NBVElPTi5ESlxyXG4gIHwgTE9DQVRJT04uVVNcclxuICB8IExPQ0FUSU9OLlNKXHJcbiAgfCBMT0NBVElPTi5HV1xyXG4gIHwgTE9DQVRJT04uQ05cclxuICB8IExPQ0FUSU9OLkdOXHJcbiAgfCBMT0NBVElPTi5HQlxyXG4gIHwgTE9DQVRJT04uSk5cclxuICB8IExPQ0FUSU9OLkpCXHJcbiAgfCBMT0NBVElPTi5DQlxyXG4gIHwgTE9DQVRJT04uSko7XHJcblxyXG5leHBvcnQgY29uc3QgQUxMX0xPQ0FUSU9OUzogQXJyYXk8TE9DQVRJT05fVFlQRT4gPSBPYmplY3QudmFsdWVzKExPQ0FUSU9OKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJc0FsbExvY2F0aW9ucyA9IChsb2NhdGlvbnM6IExPQ0FUSU9OX1RZUEVbXSkgPT4ge1xyXG4gIGNvbnN0IGxvY2F0aW9uU2V0ID0gbmV3IFNldChsb2NhdGlvbnMpO1xyXG4gIHJldHVybiBBTExfTE9DQVRJT05TLmxlbmd0aCA9PT0gbG9jYXRpb25TZXQuc2l6ZTtcclxufTtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IEtvcmVhTWFwIGZyb20gXCJzcmMvY29tcG9uZW50cy9rb3JlYU1hcFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEtvcmVhTWFwUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRMb2NhdGlvbnMsIHNldFNlbGVjdGVkTG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8S29yZWFNYXBcclxuICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb25zPXtzZWxlY3RlZExvY2F0aW9uc31cclxuICAgICAgICAgIHNldFNlbGVjdGVkTG9jYXRpb25zPXtzZXRTZWxlY3RlZExvY2F0aW9uc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS29yZWFNYXBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9