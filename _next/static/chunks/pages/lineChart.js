_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/lineChart"],{

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FlineChart&absolutePagePath=C%3A%5CUsers%5Cjgm0531%5CmyProject%5Cnextjs%5Csrc%5Cpages%5ClineChart.tsx!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FlineChart&absolutePagePath=C%3A%5CUsers%5Cjgm0531%5CmyProject%5Cnextjs%5Csrc%5Cpages%5ClineChart.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/lineChart",
        function () {
          return __webpack_require__(/*! ./src/pages/lineChart.tsx */ "./src/pages/lineChart.tsx");
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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/lineChart.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/charts/lineChart/lineChart.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lineChart_hidden__JM49L {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.lineChart_textEmphasis__2B8Le {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.lineChart_lineChartArea__1dbEW {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.lineChart_columnArea__3-xue {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: calc(100% - 29px + 18px);\n  transform: translateY(-9px);\n  text-align: right;\n}\n.lineChart_columnArea__3-xue.lineChart_small__3Zbk9 .lineChart_column__1Au4M {\n  font-size: 12px;\n  line-height: 16px;\n}\n.lineChart_columnArea__3-xue .lineChart_columnWrap__25bZE {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.lineChart_columnArea__3-xue .lineChart_column__1Au4M {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100%;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n  white-space: nowrap;\n}\n\n.lineChart_chartWrap__10cbn {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-left: 32px;\n}\n.lineChart_chartWrap__10cbn.lineChart_small__3Zbk9 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.lineChart_chartWrap__10cbn .lineChart_tableArea__2WYS3 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 29px);\n  z-index: 50;\n}\n.lineChart_chartWrap__10cbn .lineChart_dividerArea__2sHfy {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid #9fa4ab;\n}\n.lineChart_chartWrap__10cbn .lineChart_dividerArea__2sHfy .lineChart_divider__3CViM {\n  width: 100%;\n  height: 100%;\n  border-top: 1px solid #e7e8ea;\n}\n.lineChart_chartWrap__10cbn .lineChart_lineArea__344B6 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  animation: lineChart_slide__14rNl 1s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  animation-delay: 0.2s;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_line__30BVf {\n  position: absolute;\n  bottom: 0;\n  right: -1px;\n  display: block;\n  border-right: 2px solid;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_line__30BVf.lineChart_small__3Zbk9 {\n  border-right: 1px solid;\n  right: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_line__30BVf.lineChart_fadeIn__JXljJ {\n  animation: lineChart_fadeIn__JXljJ 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 {\n  position: absolute;\n  bottom: -8px;\n  right: -9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  animation: lineChart_fadeIn__JXljJ 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  width: 6px;\n  height: 6px;\n  bottom: -3px;\n  right: -3px;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 .lineChart_tooltipArea__2-TtL {\n  left: 10px;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9::after {\n  content: none;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58::after {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  content: \"\";\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_tooltipArea__2-TtL {\n  position: absolute;\n  display: none;\n  left: 16px;\n  opacity: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_tooltipArea__2-TtL::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -0.5px);\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 7px solid;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_tooltipArea__2-TtL.lineChart_top__2U7OK {\n  animation: lineChart_moveBoxTop__2kI-k 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_tooltipArea__2-TtL.lineChart_on__LMVj2 {\n  display: block;\n  animation: lineChart_fadeIn__JXljJ 0.7s cubic-bezier(0.4, 0, 0.2, 1), lineChart_moveBoxTop__2kI-k 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation-fill-mode: forwards;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_line__30BVf {\n  border-color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_dataBtn__mhl58 {\n  background-color: #e7e8ea;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  background-color: #9fa4ab;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_dataBtn__mhl58::after {\n  background-color: #44474b;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_tooltipArea__2-TtL::after {\n  border-top-color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58 {\n  background-color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border: 3px solid #25282b;\n  bottom: -6px;\n  right: -6px;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58::after {\n  background-color: #fff;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_line__30BVf {\n  border-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_dataBtn__mhl58 {\n  background-color: #e0f9e4;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  background-color: #92e6a3;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_dataBtn__mhl58::after {\n  background-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_tooltipArea__2-TtL::after {\n  border-top-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58 {\n  background-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border: 3px solid #52c564;\n  bottom: -6px;\n  right: -6px;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58::after {\n  background-color: #fff;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_line__30BVf {\n  border-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_dataBtn__mhl58 {\n  background-color: #c3d1ef;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  background-color: #8ba3df;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_dataBtn__mhl58::after {\n  background-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_tooltipArea__2-TtL::after {\n  border-top-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58 {\n  background-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58.lineChart_small__3Zbk9 {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border: 3px solid #2b53ae;\n  bottom: -6px;\n  right: -6px;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58::after {\n  background-color: #fff;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_empty__7D7SI {\n  border: none;\n}\n.lineChart_chartWrap__10cbn .lineChart_rowArea__2qJMn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 18px;\n  margin-top: 12px;\n  z-index: 40;\n}\n.lineChart_chartWrap__10cbn .lineChart_rowWrap__1VCRr {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transform: translateX(50%);\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB .lineChart_rowText__3nEMj {\n  position: absolute;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.01em;\n  color: #6a6a6a;\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB.lineChart_small__3Zbk9 .lineChart_rowText__3nEMj {\n  font-size: 12px;\n  line-height: 16px;\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB.lineChart_on__LMVj2 {\n  font-weight: 700;\n  color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB.lineChart_on__LMVj2.lineChart_small__3Zbk9 {\n  font-weight: 500;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6 {\n  position: absolute;\n  bottom: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border: 1px solid #e7e8ea;\n  border-radius: 50%;\n  z-index: 100;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6::after {\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_left__3_MDi {\n  left: 14px;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_left__3_MDi::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconLeft.png\");\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_right__2DOoz {\n  right: 14px;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_right__2DOoz::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconRight.png\");\n}\n\n@keyframes lineChart_moveBoxTop__2kI-k {\n  0% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n  50% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px + 4px));\n  }\n  100% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n}\n@keyframes lineChart_fadeIn__JXljJ {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes lineChart_slide__14rNl {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://lineChart.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"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","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.lineChartArea {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n}\n\n.columnArea {\n  width: fit-content;\n  height: calc(100% - 29px + 18px);\n  transform: translateY(-9px);\n  text-align: right;\n}\n.columnArea.small .column {\n  font-size: 12px;\n  line-height: 16px;\n}\n.columnArea .columnWrap {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.columnArea .column {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100%;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n  white-space: nowrap;\n}\n\n.chartWrap {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-left: 32px;\n}\n.chartWrap.small {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.chartWrap .tableArea {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 29px);\n  z-index: 50;\n}\n.chartWrap .dividerArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid #9fa4ab;\n}\n.chartWrap .dividerArea .divider {\n  width: 100%;\n  height: 100%;\n  border-top: 1px solid #e7e8ea;\n}\n.chartWrap .lineArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  animation: slide 1s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  animation-delay: 0.2s;\n}\n.chartWrap .pointsArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.chartWrap .pointsArea .dataWrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.chartWrap .pointsArea .dataWrap .line {\n  position: absolute;\n  bottom: 0;\n  right: -1px;\n  display: block;\n  border-right: 2px solid;\n}\n.chartWrap .pointsArea .dataWrap .line.small {\n  border-right: 1px solid;\n  right: 0;\n}\n.chartWrap .pointsArea .dataWrap .line.fadeIn {\n  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn {\n  position: absolute;\n  bottom: -8px;\n  right: -9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn.small {\n  width: 6px;\n  height: 6px;\n  bottom: -3px;\n  right: -3px;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn.small .tooltipArea {\n  left: 10px;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn.small::after {\n  content: none;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn::after {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  content: \"\";\n}\n.chartWrap .pointsArea .dataWrap .tooltipArea {\n  position: absolute;\n  display: none;\n  left: 16px;\n  opacity: 0;\n}\n.chartWrap .pointsArea .dataWrap .tooltipArea::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -0.5px);\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 7px solid;\n}\n.chartWrap .pointsArea .dataWrap .tooltipArea.top {\n  animation: moveBoxTop 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n.chartWrap .pointsArea .dataWrap .tooltipArea.on {\n  display: block;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1), moveBoxTop 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation-fill-mode: forwards;\n}\n.chartWrap .pointsArea .dataWrap.black .line {\n  border-color: #121619;\n}\n.chartWrap .pointsArea .dataWrap.black .dataBtn {\n  background-color: #e7e8ea;\n}\n.chartWrap .pointsArea .dataWrap.black .dataBtn.small {\n  background-color: #9fa4ab;\n}\n.chartWrap .pointsArea .dataWrap.black .dataBtn::after {\n  background-color: #44474b;\n}\n.chartWrap .pointsArea .dataWrap.black .tooltipArea::after {\n  border-top-color: #121619;\n}\n.chartWrap .pointsArea .dataWrap.black.on .dataBtn {\n  background-color: #121619;\n}\n.chartWrap .pointsArea .dataWrap.black.on .dataBtn.small {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border: 3px solid #25282b;\n  bottom: -6px;\n  right: -6px;\n}\n.chartWrap .pointsArea .dataWrap.black.on .dataBtn::after {\n  background-color: #fff;\n}\n.chartWrap .pointsArea .dataWrap.green .line {\n  border-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green .dataBtn {\n  background-color: #e0f9e4;\n}\n.chartWrap .pointsArea .dataWrap.green .dataBtn.small {\n  background-color: #92e6a3;\n}\n.chartWrap .pointsArea .dataWrap.green .dataBtn::after {\n  background-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green .tooltipArea::after {\n  border-top-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green.on .dataBtn {\n  background-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green.on .dataBtn.small {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border: 3px solid #52c564;\n  bottom: -6px;\n  right: -6px;\n}\n.chartWrap .pointsArea .dataWrap.green.on .dataBtn::after {\n  background-color: #fff;\n}\n.chartWrap .pointsArea .dataWrap.blue .line {\n  border-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue .dataBtn {\n  background-color: #c3d1ef;\n}\n.chartWrap .pointsArea .dataWrap.blue .dataBtn.small {\n  background-color: #8ba3df;\n}\n.chartWrap .pointsArea .dataWrap.blue .dataBtn::after {\n  background-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue .tooltipArea::after {\n  border-top-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue.on .dataBtn {\n  background-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue.on .dataBtn.small {\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border: 3px solid #2b53ae;\n  bottom: -6px;\n  right: -6px;\n}\n.chartWrap .pointsArea .dataWrap.blue.on .dataBtn::after {\n  background-color: #fff;\n}\n.chartWrap .pointsArea .dataWrap.empty {\n  border: none;\n}\n.chartWrap .rowArea {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 18px;\n  margin-top: 12px;\n  z-index: 40;\n}\n.chartWrap .rowWrap {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.chartWrap .row {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transform: translateX(50%);\n}\n.chartWrap .row .rowText {\n  position: absolute;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.01em;\n  color: #6a6a6a;\n}\n.chartWrap .row.small .rowText {\n  font-size: 12px;\n  line-height: 16px;\n}\n.chartWrap .row.on {\n  font-weight: 700;\n  color: #121619;\n}\n.chartWrap .row.on.small {\n  font-weight: 500;\n}\n.chartWrap .btn {\n  position: absolute;\n  bottom: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border: 1px solid #e7e8ea;\n  border-radius: 50%;\n  z-index: 100;\n}\n.chartWrap .btn::after {\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n.chartWrap .btn.left {\n  left: 14px;\n}\n.chartWrap .btn.left::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconLeft.png\");\n}\n.chartWrap .btn.right {\n  right: 14px;\n}\n.chartWrap .btn.right::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconRight.png\");\n}\n\n@keyframes moveBoxTop {\n  0% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n  50% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px + 4px));\n  }\n  100% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slide {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "lineChart_hidden__JM49L",
	"textEmphasis": "lineChart_textEmphasis__2B8Le",
	"lineChartArea": "lineChart_lineChartArea__1dbEW",
	"columnArea": "lineChart_columnArea__3-xue",
	"small": "lineChart_small__3Zbk9",
	"column": "lineChart_column__1Au4M",
	"columnWrap": "lineChart_columnWrap__25bZE",
	"chartWrap": "lineChart_chartWrap__10cbn",
	"tableArea": "lineChart_tableArea__2WYS3",
	"dividerArea": "lineChart_dividerArea__2sHfy",
	"divider": "lineChart_divider__3CViM",
	"lineArea": "lineChart_lineArea__344B6",
	"slide": "lineChart_slide__14rNl",
	"pointsArea": "lineChart_pointsArea__nt-Km",
	"dataWrap": "lineChart_dataWrap__1dYmf",
	"line": "lineChart_line__30BVf",
	"fadeIn": "lineChart_fadeIn__JXljJ",
	"dataBtn": "lineChart_dataBtn__mhl58",
	"tooltipArea": "lineChart_tooltipArea__2-TtL",
	"top": "lineChart_top__2U7OK",
	"moveBoxTop": "lineChart_moveBoxTop__2kI-k",
	"on": "lineChart_on__LMVj2",
	"black": "lineChart_black__176zP",
	"green": "lineChart_green__3QMcb",
	"blue": "lineChart_blue__2mrWr",
	"empty": "lineChart_empty__7D7SI",
	"rowArea": "lineChart_rowArea__2qJMn",
	"rowWrap": "lineChart_rowWrap__1VCRr",
	"row": "lineChart_row__TwRbB",
	"rowText": "lineChart_rowText__3nEMj",
	"btn": "lineChart_btn__13jc6",
	"left": "lineChart_left__3_MDi",
	"right": "lineChart_right__2DOoz"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltip/tooltip.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/charts/lineChart/tooltip/tooltip.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tooltip_hidden__2dySl {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.tooltip_textEmphasis__2303u {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.tooltip_tooltipArea__3Umgu {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 16px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.tooltip_tooltipArea__3Umgu.tooltip_black__3PqfJ {\n  background-color: #121619;\n  color: #fff;\n}\n.tooltip_tooltipArea__3Umgu.tooltip_green__1ks6H {\n  background-color: #52c564;\n  color: #fff;\n}\n.tooltip_tooltipArea__3Umgu.tooltip_blue__NtvxT {\n  background-color: #2b53ae;\n  color: #fff;\n}\n.tooltip_tooltipArea__3Umgu .tooltip_text__3gE0F {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: Pretendard, sans-serif;\n}\n.tooltip_tooltipArea__3Umgu::after {\n  position: absolute;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://tooltip.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss","webpack://../../../../styles/mixins.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;ADcA;EACI,qBAAA;EACA,sCENa;EFOb,eAAA;EACA,gBAAA;EACA,cAAA;EACA,cGoBQ;EHnBR,mBAAA;ACXJ;;AAbA;EGyQE,6EAAA;EHtQA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AAeF;AAbE;EACE,yBEVY;EFWZ,WEhBM;AF+BV;AAZE;EACE,yBEDU;EFEV,WErBM;AFmCV;AAXE;EACE,yBE+DS;EF9DT,WE1BM;AFuCV;AAVE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mCCfW;AD2Bf;AATE;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,4BAAA;EACA,WAAA;AAWJ","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.tooltipArea {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 16px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.tooltipArea.black {\n  background-color: #121619;\n  color: #fff;\n}\n.tooltipArea.green {\n  background-color: #52c564;\n  color: #fff;\n}\n.tooltipArea.blue {\n  background-color: #2b53ae;\n  color: #fff;\n}\n.tooltipArea .text {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: Pretendard, sans-serif;\n}\n.tooltipArea::after {\n  position: absolute;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n","// ellipsis\r\n// @param {number} $LINE - 줄 수\r\n// @param {px} $LINE_HEIGHT - 한줄 높이\r\n@mixin ellipsis($LINE: 1, $LINE_HEIGHT: 1.2em) {\r\n\t@if($LINE == 1) {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\ttext-overflow: ellipsis;\r\n\t\twhite-space: nowrap;\r\n\t} @else {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\tdisplay: -webkit-box;\r\n\t\t-webkit-line-clamp: $LINE;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\tmax-height: $LINE_HEIGHT * $LINE; // webkit 이외의 브라우저 대응\r\n\t\tline-height: $LINE_HEIGHT;\r\n\t\ttext-overflow: ellipsis;\r\n\t\tword-break: break-word;\r\n\t}\r\n}\r\n\r\n// 공통 버튼 스타일\r\n// @param {string} $TYPE - 버튼 타입\r\n// @param {string} $SIZE - 버튼 크기\r\n@mixin commonBtnStyle($TYPE: 'primary', $SIZE: 'large') {\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\r\n\t&:disabled {\r\n\t\tcursor: default;\r\n\t}\r\n\r\n\t// 스타일에 따른 처리\r\n\t@if($TYPE == 'primary') {\r\n\t\twidth: 228px;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_GREEN_100;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_JOBDA_WHITE;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 64px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 56px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground-color: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'secondary') {\r\n\t\twidth: 228px;\r\n\t\tborder: 2px solid $C_GREEN_100;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_WHITE;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_GREEN_100;\r\n\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 60px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 52px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 40px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tborder-color: $C_GREEN_200;\r\n\t\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t\t\tcolor: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tborder-color: $C_GREEN_100;\r\n\t\t\t\tbackground-color: $C_WHITE;\r\n\t\t\t\tcolor: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'underline') {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tcolor: $C_COOL_GRAY_80;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 24px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\tfont-size: 13px;\r\n\t\t\tline-height: 18px;\r\n\t\t\tletter-spacing: -0.0866px;\r\n\t\t}\r\n\r\n\t\t&:after {\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\tbottom: -1px;\r\n\t\t\tleft: 0;\r\n\t\t\theight: 1px;\r\n\t\t\tbackground-color: $C_COOL_GRAY_80;\r\n\t\t\tcontent: '';\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tcolor: $C_COOL_GRAY_70;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_70;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\tcolor: $C_COOL_GRAY_60;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: $C_COOL_GRAY_60;\r\n\t\r\n\t\t\t\t&:after {\r\n\t\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// 공통 인풋 스타일\r\n@mixin commonInputStyle {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 56px;\r\n\tpadding: 0 16px;\r\n\tborder: 1px solid $C_COOL_GRAY_30;\r\n\tborder-radius: 4px;\r\n\tbackground-color: $C_COOL_GRAY_30;\r\n\tfont-family: $F_NOTO_SANS_KR;\r\n\tfont-size: 15px;\r\n\tline-height: 20px;\r\n\tletter-spacing: -0.36px;\r\n\tcolor: $C_COOL_GRAY_90;\r\n\toutline: 0;\r\n\tvertical-align: top;\r\n\r\n\t// 생년월일 경우\r\n\t&.type2 {\r\n\t\twidth: 212px;\r\n\t}\r\n\r\n\t// 주민등록번호 뒷자리 경우\r\n\t&.type3 {\r\n\t\twidth: 60px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t//휴대폰 번호일 경우\r\n\t&.mobile {\r\n\t\tletter-spacing: 2.6px;\r\n\t}\r\n\r\n\t// 버튼(인증요청, 중복확인, 비밀번호확인)이 있는 경우\r\n\t&.withButton {\r\n\t\tpadding-right: 100px;\r\n\t}\r\n\r\n\t// 검색이 가능한 경우(search icon)\r\n\t&.search {\r\n\t\tpadding-left: 48px;\r\n\t}\r\n\r\n\t&.error {\r\n\t\tborder-color: $C_NEGATIVE;\r\n\t}\r\n\r\n\t&:focus,\r\n\t&.success {\r\n\t\tborder-color: $C_GREEN_100;\r\n\t\tbackground-color: $C_WHITE;\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&:-ms-input-placeholder { //ie11\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&::-ms-input-placeholder { //edge\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n}\r\n\r\n// 공통 box-shadow 스타일\r\n// @param {string} $TYPE - box-shadow 타입\r\n@mixin commonBoxShadowStyle($TYPE: 'base') {\r\n\t@if($TYPE == 'base') {\r\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'medium') {\r\n\t\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'large') {\r\n\t\tbox-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xlarge') {\r\n\t\tbox-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xxlarge') {\r\n\t\tbox-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);\r\n\t}\r\n\r\n\t@else if($TYPE == 'inner') {\r\n\t\tbox-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);\r\n\t}\r\n}\r\n\r\n// scroll\r\n@mixin scroll($SCROLL_WIDTH: 4px, $IE_TRACK_COLOR: $C_WHITE) {\r\n\t$BASIC_SCROLL_WIDTH: 17px;\r\n\t$SCROLL_BAR_COLOR: $C_COOL_GRAY_40;\r\n\t$TRACK: transparent;\r\n\t\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tmargin-right: calc(#{$SCROLL_WIDTH} - #{$BASIC_SCROLL_WIDTH});\r\n\tpadding-right: 0;\r\n\r\n\t/*  IE scrollbar style  */\r\n\tscrollbar-face-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-shadow-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-track-color: $IE_TRACK_COLOR;\r\n\tscrollbar-arrow-color: $IE_TRACK_COLOR;\r\n\r\n\t&::-webkit-scrollbar {\r\n\t\twidth: $BASIC_SCROLL_WIDTH;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: $SCROLL_BAR_COLOR;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-track {\r\n\t\tbackground-color: $TRACK;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-button {\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "tooltip_hidden__2dySl",
	"textEmphasis": "tooltip_textEmphasis__2303u",
	"tooltipArea": "tooltip_tooltipArea__3Umgu",
	"black": "tooltip_black__3PqfJ",
	"green": "tooltip_green__1ks6H",
	"blue": "tooltip_blue__NtvxT",
	"text": "tooltip_text__3gE0F"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tooltipSmall_hidden__1kmRr {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.tooltipSmall_textEmphasis__19BPv {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.tooltipSmall_tooltipArea__2XKMZ {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 6px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.tooltipSmall_tooltipArea__2XKMZ.tooltipSmall_black__LAGgf {\n  background-color: #121619;\n  color: #fff;\n}\n.tooltipSmall_tooltipArea__2XKMZ.tooltipSmall_green__A66wj {\n  background-color: #52c564;\n  color: #fff;\n}\n.tooltipSmall_tooltipArea__2XKMZ.tooltipSmall_blue__1vAMQ {\n  background-color: #2b53ae;\n  color: #fff;\n}\n.tooltipSmall_tooltipArea__2XKMZ .tooltipSmall_text__3Ct4Z {\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 16px;\n  font-family: Pretendard, sans-serif;\n}\n.tooltipSmall_tooltipArea__2XKMZ::after {\n  position: absolute;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://tooltipSmall.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss","webpack://../../../../styles/mixins.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;ADcA;EACI,qBAAA;EACA,sCENa;EFOb,eAAA;EACA,gBAAA;EACA,cAAA;EACA,cGoBQ;EHnBR,mBAAA;ACXJ;;AAbA;EGyQE,6EAAA;EHtQA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AAeF;AAbE;EACE,yBEVY;EFWZ,WEhBM;AF+BV;AAZE;EACE,yBEDU;EFEV,WErBM;AFmCV;AAXE;EACE,yBE+DS;EF9DT,WE1BM;AFuCV;AAVE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mCCfW;AD2Bf;AATE;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,4BAAA;EACA,WAAA;AAWJ","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.tooltipArea {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 6px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.tooltipArea.black {\n  background-color: #121619;\n  color: #fff;\n}\n.tooltipArea.green {\n  background-color: #52c564;\n  color: #fff;\n}\n.tooltipArea.blue {\n  background-color: #2b53ae;\n  color: #fff;\n}\n.tooltipArea .text {\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 16px;\n  font-family: Pretendard, sans-serif;\n}\n.tooltipArea::after {\n  position: absolute;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n","// ellipsis\r\n// @param {number} $LINE - 줄 수\r\n// @param {px} $LINE_HEIGHT - 한줄 높이\r\n@mixin ellipsis($LINE: 1, $LINE_HEIGHT: 1.2em) {\r\n\t@if($LINE == 1) {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\ttext-overflow: ellipsis;\r\n\t\twhite-space: nowrap;\r\n\t} @else {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\tdisplay: -webkit-box;\r\n\t\t-webkit-line-clamp: $LINE;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\tmax-height: $LINE_HEIGHT * $LINE; // webkit 이외의 브라우저 대응\r\n\t\tline-height: $LINE_HEIGHT;\r\n\t\ttext-overflow: ellipsis;\r\n\t\tword-break: break-word;\r\n\t}\r\n}\r\n\r\n// 공통 버튼 스타일\r\n// @param {string} $TYPE - 버튼 타입\r\n// @param {string} $SIZE - 버튼 크기\r\n@mixin commonBtnStyle($TYPE: 'primary', $SIZE: 'large') {\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\r\n\t&:disabled {\r\n\t\tcursor: default;\r\n\t}\r\n\r\n\t// 스타일에 따른 처리\r\n\t@if($TYPE == 'primary') {\r\n\t\twidth: 228px;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_GREEN_100;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_JOBDA_WHITE;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 64px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 56px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground-color: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'secondary') {\r\n\t\twidth: 228px;\r\n\t\tborder: 2px solid $C_GREEN_100;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_WHITE;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_GREEN_100;\r\n\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 60px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 52px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 40px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tborder-color: $C_GREEN_200;\r\n\t\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t\t\tcolor: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tborder-color: $C_GREEN_100;\r\n\t\t\t\tbackground-color: $C_WHITE;\r\n\t\t\t\tcolor: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'underline') {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tcolor: $C_COOL_GRAY_80;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 24px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\tfont-size: 13px;\r\n\t\t\tline-height: 18px;\r\n\t\t\tletter-spacing: -0.0866px;\r\n\t\t}\r\n\r\n\t\t&:after {\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\tbottom: -1px;\r\n\t\t\tleft: 0;\r\n\t\t\theight: 1px;\r\n\t\t\tbackground-color: $C_COOL_GRAY_80;\r\n\t\t\tcontent: '';\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tcolor: $C_COOL_GRAY_70;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_70;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\tcolor: $C_COOL_GRAY_60;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: $C_COOL_GRAY_60;\r\n\t\r\n\t\t\t\t&:after {\r\n\t\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// 공통 인풋 스타일\r\n@mixin commonInputStyle {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 56px;\r\n\tpadding: 0 16px;\r\n\tborder: 1px solid $C_COOL_GRAY_30;\r\n\tborder-radius: 4px;\r\n\tbackground-color: $C_COOL_GRAY_30;\r\n\tfont-family: $F_NOTO_SANS_KR;\r\n\tfont-size: 15px;\r\n\tline-height: 20px;\r\n\tletter-spacing: -0.36px;\r\n\tcolor: $C_COOL_GRAY_90;\r\n\toutline: 0;\r\n\tvertical-align: top;\r\n\r\n\t// 생년월일 경우\r\n\t&.type2 {\r\n\t\twidth: 212px;\r\n\t}\r\n\r\n\t// 주민등록번호 뒷자리 경우\r\n\t&.type3 {\r\n\t\twidth: 60px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t//휴대폰 번호일 경우\r\n\t&.mobile {\r\n\t\tletter-spacing: 2.6px;\r\n\t}\r\n\r\n\t// 버튼(인증요청, 중복확인, 비밀번호확인)이 있는 경우\r\n\t&.withButton {\r\n\t\tpadding-right: 100px;\r\n\t}\r\n\r\n\t// 검색이 가능한 경우(search icon)\r\n\t&.search {\r\n\t\tpadding-left: 48px;\r\n\t}\r\n\r\n\t&.error {\r\n\t\tborder-color: $C_NEGATIVE;\r\n\t}\r\n\r\n\t&:focus,\r\n\t&.success {\r\n\t\tborder-color: $C_GREEN_100;\r\n\t\tbackground-color: $C_WHITE;\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&:-ms-input-placeholder { //ie11\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&::-ms-input-placeholder { //edge\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n}\r\n\r\n// 공통 box-shadow 스타일\r\n// @param {string} $TYPE - box-shadow 타입\r\n@mixin commonBoxShadowStyle($TYPE: 'base') {\r\n\t@if($TYPE == 'base') {\r\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'medium') {\r\n\t\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'large') {\r\n\t\tbox-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xlarge') {\r\n\t\tbox-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xxlarge') {\r\n\t\tbox-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);\r\n\t}\r\n\r\n\t@else if($TYPE == 'inner') {\r\n\t\tbox-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);\r\n\t}\r\n}\r\n\r\n// scroll\r\n@mixin scroll($SCROLL_WIDTH: 4px, $IE_TRACK_COLOR: $C_WHITE) {\r\n\t$BASIC_SCROLL_WIDTH: 17px;\r\n\t$SCROLL_BAR_COLOR: $C_COOL_GRAY_40;\r\n\t$TRACK: transparent;\r\n\t\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tmargin-right: calc(#{$SCROLL_WIDTH} - #{$BASIC_SCROLL_WIDTH});\r\n\tpadding-right: 0;\r\n\r\n\t/*  IE scrollbar style  */\r\n\tscrollbar-face-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-shadow-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-track-color: $IE_TRACK_COLOR;\r\n\tscrollbar-arrow-color: $IE_TRACK_COLOR;\r\n\r\n\t&::-webkit-scrollbar {\r\n\t\twidth: $BASIC_SCROLL_WIDTH;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: $SCROLL_BAR_COLOR;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-track {\r\n\t\tbackground-color: $TRACK;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-button {\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "tooltipSmall_hidden__1kmRr",
	"textEmphasis": "tooltipSmall_textEmphasis__19BPv",
	"tooltipArea": "tooltipSmall_tooltipArea__2XKMZ",
	"black": "tooltipSmall_black__LAGgf",
	"green": "tooltipSmall_green__A66wj",
	"blue": "tooltipSmall_blue__1vAMQ",
	"text": "tooltipSmall_text__3Ct4Z"
};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/grid/grid.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/common/grid/grid.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".grid_gridArea__2SxAC {\n  overflow: hidden;\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.grid_checkboxArea__16MUm {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: fixed;\n  right: 40px;\n  bottom: 40px;\n}\n\n.grid_onOff__19WIn {\n  width: 30px;\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://grid.module.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;AACF","sourcesContent":[".gridArea {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.checkboxArea {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  right: 40px;\r\n  bottom: 40px;\r\n}\r\n\r\n.onOff {\r\n  width: 30px;\r\n  height: 30px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"gridArea": "grid_gridArea__2SxAC",
	"checkboxArea": "grid_checkboxArea__16MUm",
	"onOff": "grid_onOff__19WIn"
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

/***/ "./src/components/charts/lineChart/Buttons.tsx":
/*!*****************************************************!*\
  !*** ./src/components/charts/lineChart/Buttons.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Buttons.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Buttons = function Buttons(_ref) {
  var slideIndex = _ref.slideIndex,
      setSlideIndex = _ref.setSlideIndex,
      viewCount = _ref.viewCount,
      maxRow = _ref.maxRow;
  var isOver = viewCount < maxRow;
  var prevBtnVisible = isOver && slideIndex !== 0;
  var nextBtnVisible = isOver && slideIndex < maxRow - viewCount;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [prevBtnVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn', 'left'),
      onClick: function onClick() {
        return setSlideIndex(slideIndex - 1);
      },
      role: "button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), nextBtnVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn', 'right'),
      onClick: function onClick() {
        return setSlideIndex(slideIndex + 1);
      },
      role: "button"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_c = Buttons;
/* harmony default export */ __webpack_exports__["default"] = (Buttons);

var _c;

$RefreshReg$(_c, "Buttons");

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

/***/ "./src/components/charts/lineChart/Columns.tsx":
/*!*****************************************************!*\
  !*** ./src/components/charts/lineChart/Columns.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Columns.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Columns = function Columns(_ref) {
  var columns = _ref.columns,
      type = _ref.type;
  var columnsEl = columns.map(function (column, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('column'),
      children: column
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  }).reverse();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('columnArea', type),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('columnWrap'),
      children: columnsEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c = Columns;
/* harmony default export */ __webpack_exports__["default"] = (Columns);

var _c;

$RefreshReg$(_c, "Columns");

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

/***/ "./src/components/charts/lineChart/Divider.tsx":
/*!*****************************************************!*\
  !*** ./src/components/charts/lineChart/Divider.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Divider.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Divider = function Divider(_ref) {
  var value = _ref.value;
  var dividerEl = new Array(value).fill(null).map(function (_, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('divider')
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 67
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('dividerArea'),
    children: dividerEl
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, _this);
};

_c = Divider;
/* harmony default export */ __webpack_exports__["default"] = (Divider);

var _c;

$RefreshReg$(_c, "Divider");

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

/***/ "./src/components/charts/lineChart/Line.tsx":
/*!**************************************************!*\
  !*** ./src/components/charts/lineChart/Line.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/components/charts/lineChart/data.ts");


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Line.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Line = function Line(_ref) {
  var data = _ref.data,
      type = _ref.type,
      colors = _ref.colors,
      rows = _ref.rows,
      columnHeight = _ref.columnHeight,
      width = _ref.width,
      height = _ref.height;
  var rowWidth = width / (rows.length - 1 + _data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type] * 2);

  var getX = function getX(value) {
    return _data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type] * rowWidth + value * rowWidth;
  };

  var getY = function getY(value) {
    return height - columnHeight * value;
  };

  var getChar = function getChar(value) {
    return value === data.length - 1 ? '' : 'L';
  };

  var getPoint = function getPoint(x, y) {
    return "".concat(getX(x), " ").concat(getY(y));
  };

  var stroke = _data__WEBPACK_IMPORTED_MODULE_3__["LineColors"][colors][type];
  var fill = _data__WEBPACK_IMPORTED_MODULE_3__["ShapeColors"][colors];

  var getLineData = function getLineData() {
    return data.reduce(function (prev, _ref2, i) {
      var column = _ref2.column;
      return "".concat(prev, " ").concat(getPoint(i, column), " ").concat(getChar(i));
    }, 'M');
  };

  var getShapeData = function getShapeData() {
    return data.reduce(function (prev, _ref3, i) {
      var column = _ref3.column;

      if (i === data.length - 1) {
        var shape = "L".concat(getX(i), " ").concat(height, " L").concat(rowWidth * _data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type], " ").concat(height, " Z");
        return "".concat(prev, " ").concat(getPoint(i, column), " ").concat(shape);
      }

      return "".concat(prev, " ").concat(getPoint(i, column), " ").concat(getChar(i));
    }, 'M');
  };

  var getDataLineEl = function getDataLineEl() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      fill: "none",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: getLineData(),
        stroke: stroke
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: getShapeData(),
        fill: fill,
        fillOpacity: 0.2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('lineArea'),
    children: getDataLineEl()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 10
  }, _this);
};

_c = Line;
/* harmony default export */ __webpack_exports__["default"] = (Line);

var _c;

$RefreshReg$(_c, "Line");

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

/***/ "./src/components/charts/lineChart/Points.tsx":
/*!****************************************************!*\
  !*** ./src/components/charts/lineChart/Points.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/components/charts/lineChart/data.ts");



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Points.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
var pointsAnimationDelay = [0, 0.1, 0.2, 0.3, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75];

var Points = function Points(_ref) {
  var data = _ref.data,
      type = _ref.type,
      colors = _ref.colors,
      onIndex = _ref.onIndex,
      handleClick = _ref.handleClick,
      columnHeight = _ref.columnHeight,
      maxRow = _ref.maxRow,
      lineTrigger = _ref.lineTrigger;

  var getDataEl = function getDataEl() {
    var dataEl = data.map(function (d, index) {
      var column = d.column,
          toolTip = d.toolTip;
      var isOn = index === onIndex;

      var getLine = function getLine() {
        if (!isOn) return null;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: cx('line', {
            fadeIn: lineTrigger
          }, type),
          style: {
            height: "".concat(column * columnHeight, "px"),
            animationDelay: "".concat(pointsAnimationDelay[index], "s")
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this);
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dataWrap', colors, {
          on: isOn
        }),
        style: {
          width: index === 0 ? "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type] * 100, "%") : '100%',
          zIndex: data.length - index
        },
        children: [getLine(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: cx('dataBtn', type),
          style: {
            transform: "translateY(-".concat(column * columnHeight, "px)"),
            animationDelay: "".concat(pointsAnimationDelay[index], "s")
          },
          onClick: function onClick() {
            return handleClick(index);
          },
          role: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('tooltipArea', {
              on: isOn
            }),
            children: toolTip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this);
    });
    var emptyDataEl = new Array(maxRow - data.length).fill(null).map(function (_, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dataWrap', 'empty')
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 26
      }, _this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [dataEl, emptyDataEl, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dataWrap', 'empty'),
        style: {
          width: "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type] * 100, "%")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('pointsArea'),
    children: getDataEl()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 10
  }, _this);
};

_c = Points;
/* harmony default export */ __webpack_exports__["default"] = (Points);

var _c;

$RefreshReg$(_c, "Points");

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

/***/ "./src/components/charts/lineChart/Rows.tsx":
/*!**************************************************!*\
  !*** ./src/components/charts/lineChart/Rows.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/components/charts/lineChart/data.ts");



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Rows.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Rows = function Rows(_ref) {
  var rows = _ref.rows,
      type = _ref.type,
      maxRow = _ref.maxRow,
      onIndex = _ref.onIndex,
      tableWidthWhitUnit = _ref.tableWidthWhitUnit,
      translateX = _ref.translateX;

  var getRowsEl = function getRowsEl() {
    var rowEl = rows.map(function (row, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('row', {
          on: index === onIndex
        }, type),
        style: {
          width: index === 0 ? "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type] * 100, "%") : '100%'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('rowText'),
          children: row
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this);
    });
    var emptyRowEl = new Array(maxRow - rows.length).fill(null).map(function (_, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('row')
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 26
      }, _this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [rowEl, emptyRowEl, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('row'),
        style: {
          width: "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"][type] * 100, "%")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('rowArea'),
    style: {
      width: tableWidthWhitUnit,
      transform: translateX
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('rowWrap'),
      children: getRowsEl()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_c = Rows;
/* harmony default export */ __webpack_exports__["default"] = (Rows);

var _c;

$RefreshReg$(_c, "Rows");

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

/***/ "./src/components/charts/lineChart/data.ts":
/*!*************************************************!*\
  !*** ./src/components/charts/lineChart/data.ts ***!
  \*************************************************/
/*! exports provided: EDGE_SPACE, LineColors, ShapeColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDGE_SPACE", function() { return EDGE_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineColors", function() { return LineColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeColors", function() { return ShapeColors; });
var EDGE_SPACE = {
  small: 1.2,
  large: 0.66
};
var LineColors = {
  black: {
    small: '#9FA4AB',
    large: '#44474B'
  },
  green: {
    small: '#92E6A3',
    large: '#52C564'
  },
  blue: {
    small: '#8BA3DF',
    large: '#2B53AE'
  }
};
var ShapeColors = {
  black: '#CFD1D5',
  green: '#E0F9E4',
  blue: '#C3D1EF'
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

/***/ "./src/components/charts/lineChart/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/charts/lineChart/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineChart.module.scss */ "./src/components/charts/lineChart/lineChart.module.scss");
/* harmony import */ var _lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Rows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rows */ "./src/components/charts/lineChart/Rows.tsx");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ "./src/components/charts/lineChart/Buttons.tsx");
/* harmony import */ var _Columns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Columns */ "./src/components/charts/lineChart/Columns.tsx");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Divider */ "./src/components/charts/lineChart/Divider.tsx");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Line */ "./src/components/charts/lineChart/Line.tsx");
/* harmony import */ var _Points__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Points */ "./src/components/charts/lineChart/Points.tsx");


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var LineChart = function LineChart(_ref) {
  _s();

  var _tableRef$current$cli, _tableRef$current2;

  var _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? 'black' : _ref$colors,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'large' : _ref$type,
      viewCount = _ref.viewCount,
      rows = _ref.rows,
      columns = _ref.columns,
      data = _ref.data,
      onIdx = _ref.onIndex;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      onIndex = _useState[0],
      setOnIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      slideIndex = _useState2[0],
      setSlideIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      rowWidth = _useState3[0],
      setRowWidth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      columnHeight = _useState4[0],
      setColumnHeight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      tableWidth = _useState5[0],
      setTableWidth = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      lineTrigger = _useState6[0],
      setLineTrigger = _useState6[1]; // 점 아래 세로선 최초 애니메이션 실행용


  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var tableRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var maxRow = Math.max(rows.length, data.length);
  var maxColumns = Math.max(columns.length, data.length - 1);
  var isOver = viewCount < maxRow;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (onIdx !== undefined) {
      var idx = onIdx > maxColumns ? maxColumns : onIdx;

      var _slideIndex = idx - viewCount + 1;

      setOnIndex(idx < 0 ? 0 : idx);
      setSlideIndex(_slideIndex < 0 ? 0 : _slideIndex);
    }

    if (chartRef.current) {
      setRowWidth(chartRef.current.clientWidth / (viewCount + 1));
    }

    if (tableRef.current) {
      var _tableRef$current;

      setColumnHeight(((_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.clientHeight) / (columns.length - 1));
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (tableRef.current) {
      setTableWidth(tableRef.current.clientWidth);
    }
  }, [tableRef.current]);
  var tableWidthWhitUnit = isOver ? "".concat((maxRow + 1) * rowWidth, "px") : '100%';
  var translateX = isOver ? "translateX(".concat(-(slideIndex * rowWidth), "px)") : 'translateX(0)';

  var handleClick = function handleClick(index) {
    setLineTrigger(false);
    setOnIndex(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('lineChartArea'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Columns__WEBPACK_IMPORTED_MODULE_6__["default"], {
      columns: columns,
      type: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: chartRef,
      className: cx('chartWrap', type),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: tableRef,
        className: cx('tableArea'),
        style: {
          width: tableWidthWhitUnit,
          transform: translateX
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Divider__WEBPACK_IMPORTED_MODULE_7__["default"], {
          value: columns.length - 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Line__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: data,
          type: type,
          colors: colors,
          rows: rows,
          columnHeight: columnHeight,
          width: tableWidth,
          height: (_tableRef$current$cli = (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.clientHeight) !== null && _tableRef$current$cli !== void 0 ? _tableRef$current$cli : 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Points__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data,
          type: type,
          colors: colors,
          onIndex: onIndex,
          handleClick: handleClick,
          columnHeight: columnHeight,
          maxRow: maxRow,
          lineTrigger: lineTrigger
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rows__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rows: rows,
        type: type,
        maxRow: maxRow,
        onIndex: onIndex,
        tableWidthWhitUnit: tableWidthWhitUnit,
        translateX: translateX
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        slideIndex: slideIndex,
        setSlideIndex: setSlideIndex,
        maxRow: maxRow,
        viewCount: viewCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, _this);
};

_s(LineChart, "ug0vItY0V1AK7RYNbB/ig2WXJUE=");

_c = LineChart;
/* harmony default export */ __webpack_exports__["default"] = (LineChart);

var _c;

$RefreshReg$(_c, "LineChart");

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

/***/ "./src/components/charts/lineChart/lineChart.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/charts/lineChart/lineChart.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./lineChart.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/lineChart.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./lineChart.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/lineChart.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./lineChart.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/lineChart.module.scss");

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

/***/ "./src/components/charts/lineChart/tooltip/index.tsx":
/*!***********************************************************!*\
  !*** ./src/components/charts/lineChart/tooltip/index.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.module.scss */ "./src/components/charts/lineChart/tooltip/tooltip.module.scss");
/* harmony import */ var _tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\tooltip\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_tooltip_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Tooltip = function Tooltip(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'black' : _ref$type,
      value = _ref.value;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('tooltipArea', type),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('text'),
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = Tooltip;
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

var _c;

$RefreshReg$(_c, "Tooltip");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/charts/lineChart/tooltip/tooltip.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/charts/lineChart/tooltip/tooltip.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./tooltip.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltip/tooltip.module.scss");

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
      /*! !../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./tooltip.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltip/tooltip.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./tooltip.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltip/tooltip.module.scss");

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

/***/ "./src/components/charts/lineChart/tooltipSmall/index.tsx":
/*!****************************************************************!*\
  !*** ./src/components/charts/lineChart/tooltipSmall/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltipSmall_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltipSmall.module.scss */ "./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss");
/* harmony import */ var _tooltipSmall_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tooltipSmall_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\tooltipSmall\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_tooltipSmall_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var TooltipSmall = function TooltipSmall(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'black' : _ref$type,
      value = _ref.value;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('tooltipArea', type),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: cx('text'),
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = TooltipSmall;
/* harmony default export */ __webpack_exports__["default"] = (TooltipSmall);

var _c;

$RefreshReg$(_c, "TooltipSmall");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./tooltipSmall.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss");

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
      /*! !../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./tooltipSmall.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./tooltipSmall.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/charts/lineChart/tooltipSmall/tooltipSmall.module.scss");

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


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\common\\contents\\index.tsx",
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

/***/ "./src/components/common/grid/grid.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/common/grid/grid.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./grid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/grid/grid.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./grid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/grid/grid.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./grid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/grid/grid.module.scss");

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

/***/ "./src/components/common/grid/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/grid/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.module.scss */ "./src/components/common/grid/grid.module.scss");
/* harmony import */ var _grid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\common\\grid\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_grid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
var RATIO = 1;

var Grid = function Grid(_ref) {
  _s();

  var _ref$canvasWidth = _ref.canvasWidth,
      canvasWidth = _ref$canvasWidth === void 0 ? 3000 : _ref$canvasWidth,
      _ref$canvasHeight = _ref.canvasHeight,
      canvasHeight = _ref$canvasHeight === void 0 ? 2000 : _ref$canvasHeight,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? false : _ref$state,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 50 : _ref$size;
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      ctx = _useState[0],
      setCtx = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(state),
      visible = _useState2[0],
      setVisible = _useState2[1]; // setup canvas and set context


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
    if (!canvasRef) return;
    var renderCtx = canvasRef.current.getContext("2d");
    if (renderCtx) reset(renderCtx);
  }, [canvasHeight, canvasWidth]); // draw

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
    if (ctx) {
      var storedTransform = ctx.getTransform();
      ctx.canvas.width = ctx.canvas.width;
      ctx.setTransform(storedTransform);
      drawGrid();
    }
  }, [ctx]); // reset

  var reset = function reset(ctx) {
    if (!ctx) return;
    ctx.canvas.width = canvasWidth * RATIO;
    ctx.canvas.height = canvasHeight * RATIO;
    ctx.scale(RATIO, RATIO); // reset state and refs

    setCtx(ctx);
  };

  var drawGrid = function drawGrid() {
    var GRID_SCALE = 50;
    var nX = Math.floor(canvasWidth * GRID_SCALE / size) - 2;
    var nY = Math.floor(canvasHeight * GRID_SCALE / size) - 2;
    var pX = canvasWidth - nX * size;
    var pY = canvasHeight - nY * size;
    var pL = Math.ceil(pX / 2) - 0.5;
    var pT = Math.ceil(pY / 2) - 0.5;
    var pR = canvasWidth - nX * size - pL;
    var pB = canvasHeight - nY * size - pT;
    ctx.strokeStyle = '#f2f2f2';
    ctx.beginPath();

    for (var x = pL; x <= canvasWidth - pR; x += size) {
      ctx.moveTo(x, pT);
      ctx.lineTo(x, canvasHeight - pB);
    }

    for (var y = pT; y <= canvasHeight - pB; y += size) {
      ctx.moveTo(pL, y);
      ctx.lineTo(canvasWidth - pR, y);
    }

    ctx.stroke();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('gridArea'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('checkboxArea'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        checked: visible,
        onChange: function onChange() {
          setVisible(function (prev) {
            return !prev;
          });
        },
        type: 'checkbox',
        className: cx('onOff')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "grid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      ref: canvasRef,
      width: canvasWidth * RATIO,
      height: canvasHeight * RATIO,
      style: {
        display: visible ? 'flex' : 'none',
        width: "".concat(canvasWidth, "px"),
        height: "".concat(canvasHeight, "px")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, _this);
};

_s(Grid, "ryWoR9/lyAPwcyq68odCzkQUdOg=");

_c = Grid;
/* harmony default export */ __webpack_exports__["default"] = (Grid);

var _c;

$RefreshReg$(_c, "Grid");

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


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\common\\layout\\index.tsx",
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

/***/ "./src/pages/lineChart.tsx":
/*!*********************************!*\
  !*** ./src/pages/lineChart.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/charts/lineChart */ "./src/components/charts/lineChart/index.tsx");
/* harmony import */ var src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/charts/lineChart/tooltip */ "./src/components/charts/lineChart/tooltip/index.tsx");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/grid */ "./src/components/common/grid/index.tsx");
/* harmony import */ var src_components_charts_lineChart_tooltipSmall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/charts/lineChart/tooltipSmall */ "./src/components/charts/lineChart/tooltipSmall/index.tsx");


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\pages\\lineChart.tsx",
    _this = undefined;








var LineChartPage = function LineChartPage() {
  var getColumns = function getColumns() {
    return ['0명', '100명', '200명', '300명', '400명', '500명', '600명'];
  };

  var getRows = function getRows() {
    return ['21.01', '21.02', '21.03', '21.04', '21.05', '21.06', '21.07', '21.08', '21.09', '21.10', '21.11', '21.12'];
  };

  var getMobileRows = function getMobileRows() {
    return ['', '', '21.03', '', '', '21.06', '', '', '21.09', '', '', '21.12'];
  };

  var getChartData = function getChartData(type) {
    return [190, 200, 210, 220, 260, 280, 300, 310, 320, 330, 380, 403].map(function (value, i) {
      return {
        column: value / 100,
        toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: "\uCD1D ".concat(value, "\uBA85"),
          type: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 18
        }, _this)
      };
    });
  };

  var getChartData2 = function getChartData2(type) {
    return [55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95].map(function (value, i) {
      return {
        column: value / 100,
        toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: "\uC785\uC0AC\uC790: ".concat(value, "\uBA85"),
          type: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 18
        }, _this)
      };
    });
  };

  var getChartData3 = function getChartData3(type) {
    return [55, 60, 65, 70, 75, 80, 80, 80, 80, 85, 90, 95].map(function (value, i) {
      return {
        column: value / 100,
        toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: "\uD1F4\uC0AC\uC790: ".concat(value, "\uBA85"),
          type: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 18
        }, _this)
      };
    });
  };

  var getChartDataSmall = function getChartDataSmall(type) {
    return [190, 200, 210, 220, 260, 280, 300, 310, 320, 330, 380, 403].map(function (value, i) {
      return {
        column: value / 100,
        toolTip: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart_tooltipSmall__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: "\uCD1D ".concat(value, "\uBA85"),
          type: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 18
        }, _this)
      };
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 50
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: '100px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '1400px',
            height: '484px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            colors: 'black',
            rows: getRows(),
            columns: getColumns(),
            data: getChartData('black'),
            onIndex: 11,
            viewCount: 12
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '1100px',
            height: '384px',
            marginTop: '24px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            colors: 'green',
            rows: getRows(),
            columns: getColumns(),
            data: getChartData2('green'),
            onIndex: 5,
            viewCount: 12
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '800px',
            height: '284px',
            marginTop: '24px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            colors: 'blue',
            rows: getRows(),
            columns: getColumns(),
            data: getChartData3('blue'),
            onIndex: 0,
            viewCount: 12
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginTop: '48px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: '340px',
              height: '205px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
              colors: 'black',
              type: 'small',
              rows: getMobileRows(),
              columns: getColumns(),
              data: getChartDataSmall('black'),
              onIndex: 0,
              viewCount: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: '340px',
              height: '205px',
              marginLeft: '24px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
              colors: 'green',
              type: 'small',
              rows: getMobileRows(),
              columns: getColumns(),
              data: getChartDataSmall('green'),
              onIndex: 3,
              viewCount: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: '340px',
              height: '205px',
              marginLeft: '24px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
              colors: 'blue',
              type: 'small',
              rows: getMobileRows(),
              columns: getColumns(),
              data: getChartDataSmall('blue'),
              onIndex: 11,
              viewCount: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_c = LineChartPage;
/* harmony default export */ __webpack_exports__["default"] = (LineChartPage);

var _c;

$RefreshReg$(_c, "LineChartPage");

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FlineChart&absolutePagePath=C%3A%5CUsers%5Cjgm0531%5CmyProject%5Cnextjs%5Csrc%5Cpages%5ClineChart.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvYmluZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9saW5lQ2hhcnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvdG9vbHRpcC90b29sdGlwLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L3Rvb2x0aXBTbWFsbC90b29sdGlwU21hbGwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250ZW50cy9jb250ZW50cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2dyaWQvZ3JpZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L0J1dHRvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L0NvbHVtbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L0RpdmlkZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L0xpbmUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L1BvaW50cy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvUm93cy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvZGF0YS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvbGluZUNoYXJ0Lm1vZHVsZS5zY3NzPzJlMGYiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvdG9vbHRpcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvdG9vbHRpcC90b29sdGlwLm1vZHVsZS5zY3NzPzZkZjciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvdG9vbHRpcFNtYWxsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC90b29sdGlwU21hbGwvdG9vbHRpcFNtYWxsLm1vZHVsZS5zY3NzP2MzMjEiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb250ZW50cy9jb250ZW50cy5tb2R1bGUuc2Nzcz8zYzBlIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZ3JpZC9ncmlkLm1vZHVsZS5zY3NzPzkzMGEiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9ncmlkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9saW5lQ2hhcnQudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJCdXR0b25zIiwic2xpZGVJbmRleCIsInNldFNsaWRlSW5kZXgiLCJ2aWV3Q291bnQiLCJtYXhSb3ciLCJpc092ZXIiLCJwcmV2QnRuVmlzaWJsZSIsIm5leHRCdG5WaXNpYmxlIiwiQ29sdW1ucyIsImNvbHVtbnMiLCJ0eXBlIiwiY29sdW1uc0VsIiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJyZXZlcnNlIiwiRGl2aWRlciIsInZhbHVlIiwiZGl2aWRlckVsIiwiQXJyYXkiLCJmaWxsIiwiXyIsIkxpbmUiLCJkYXRhIiwiY29sb3JzIiwicm93cyIsImNvbHVtbkhlaWdodCIsIndpZHRoIiwiaGVpZ2h0Iiwicm93V2lkdGgiLCJsZW5ndGgiLCJFREdFX1NQQUNFIiwiZ2V0WCIsImdldFkiLCJnZXRDaGFyIiwiZ2V0UG9pbnQiLCJ4IiwieSIsInN0cm9rZSIsIkxpbmVDb2xvcnMiLCJTaGFwZUNvbG9ycyIsImdldExpbmVEYXRhIiwicmVkdWNlIiwicHJldiIsImkiLCJnZXRTaGFwZURhdGEiLCJzaGFwZSIsImdldERhdGFMaW5lRWwiLCJwb2ludHNBbmltYXRpb25EZWxheSIsIlBvaW50cyIsIm9uSW5kZXgiLCJoYW5kbGVDbGljayIsImxpbmVUcmlnZ2VyIiwiZ2V0RGF0YUVsIiwiZGF0YUVsIiwiZCIsInRvb2xUaXAiLCJpc09uIiwiZ2V0TGluZSIsImZhZGVJbiIsImFuaW1hdGlvbkRlbGF5Iiwib24iLCJ6SW5kZXgiLCJ0cmFuc2Zvcm0iLCJlbXB0eURhdGFFbCIsIlJvd3MiLCJ0YWJsZVdpZHRoV2hpdFVuaXQiLCJ0cmFuc2xhdGVYIiwiZ2V0Um93c0VsIiwicm93RWwiLCJyb3ciLCJlbXB0eVJvd0VsIiwic21hbGwiLCJsYXJnZSIsImJsYWNrIiwiZ3JlZW4iLCJibHVlIiwiTGluZUNoYXJ0Iiwib25JZHgiLCJ1c2VTdGF0ZSIsInNldE9uSW5kZXgiLCJzZXRSb3dXaWR0aCIsInNldENvbHVtbkhlaWdodCIsInRhYmxlV2lkdGgiLCJzZXRUYWJsZVdpZHRoIiwic2V0TGluZVRyaWdnZXIiLCJjaGFydFJlZiIsInVzZVJlZiIsInRhYmxlUmVmIiwiTWF0aCIsIm1heCIsIm1heENvbHVtbnMiLCJ1c2VFZmZlY3QiLCJ1bmRlZmluZWQiLCJpZHgiLCJjdXJyZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJUb29sdGlwIiwiVG9vbHRpcFNtYWxsIiwiQ29udGVudHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiUkFUSU8iLCJHcmlkIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJzdGF0ZSIsInNpemUiLCJjYW52YXNSZWYiLCJjdHgiLCJzZXRDdHgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUxheW91dEVmZmVjdCIsInJlbmRlckN0eCIsImdldENvbnRleHQiLCJyZXNldCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsInNldFRyYW5zZm9ybSIsImRyYXdHcmlkIiwic2NhbGUiLCJHUklEX1NDQUxFIiwiblgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZGlzcGxheSIsIkxheW91dCIsIkxpbmVDaGFydFBhZ2UiLCJnZXRDb2x1bW5zIiwiZ2V0Um93cyIsImdldE1vYmlsZVJvd3MiLCJnZXRDaGFydERhdGEiLCJnZXRDaGFydERhdGEyIiwiZ2V0Q2hhcnREYXRhMyIsImdldENoYXJ0RGF0YVNtYWxsIiwicGFkZGluZyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLLEtBQTZCO0FBQ2xDO0FBQ0E7QUFDQSxFQUFFLFVBQVUsSUFBNEU7QUFDeEY7QUFDQSxFQUFFLGlDQUFxQixFQUFFLG1DQUFFO0FBQzNCO0FBQ0EsR0FBRztBQUFBLG9HQUFDO0FBQ0osRUFBRSxNQUFNLEVBRU47QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDaERZLHNDQUFzQyxzQkFBc0I7QUFDekUseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDREQUFrRTtBQUMzRjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmEsaUNBQWlDLFNBQVMsMkJBQTJCLDhCQUE4QjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtB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VUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVks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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7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QTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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LG1DQUNFLHFFQUFDLHVFQUFEO0FBQ0Usb0JBQU0sRUFBRSxPQURWO0FBRUUsa0JBQUksRUFBRSxPQUZSO0FBR0Usa0JBQUksRUFBRVAsYUFBYSxFQUhyQjtBQUlFLHFCQUFPLEVBQUVGLFVBQVUsRUFKckI7QUFLRSxrQkFBSSxFQUFFTSxpQkFBaUIsQ0FBQyxPQUFELENBTHpCO0FBTUUscUJBQU8sRUFBRSxDQU5YO0FBT0UsdUJBQVMsRUFBRTtBQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBdUJFO0FBQUssaUJBQUssRUFBRTtBQUFDekgsbUJBQUssRUFBRSxPQUFSO0FBQWlCQyxvQkFBTSxFQUFFLE9BQXpCO0FBQWtDMkgsd0JBQVUsRUFBRTtBQUE5QyxhQUFaO0FBQUEsbUNBQ0UscUVBQUMsdUVBQUQ7QUFDRSxvQkFBTSxFQUFFLE1BRFY7QUFFRSxrQkFBSSxFQUFFLE9BRlI7QUFHRSxrQkFBSSxFQUFFUCxhQUFhLEVBSHJCO0FBSUUscUJBQU8sRUFBRUYsVUFBVSxFQUpyQjtBQUtFLGtCQUFJLEVBQUVNLGlCQUFpQixDQUFDLE1BQUQsQ0FMekI7QUFNRSxxQkFBTyxFQUFFLEVBTlg7QUFPRSx1QkFBUyxFQUFFO0FBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBdElEOztLQUFNUCxhO0FBd0lTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2xpbmVDaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaCh0aGlzICYmIHRoaXNbYXJnXSB8fCBhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkodGhpcywgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2godGhpcyAmJiB0aGlzW2tleV0gfHwga2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgICBcIi9saW5lQ2hhcnRcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcamdtMDUzMVxcXFxteVByb2plY3RcXFxcbmV4dGpzXFxcXHNyY1xcXFxwYWdlc1xcXFxsaW5lQ2hhcnQudHN4XCIpO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1gJHtpZH0gJHtjb3VudH1gO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChrZXk9PntzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/YEBtZWRpYSAke29iai5tZWRpYX0geyR7b2JqLmNzc319YDpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPWBcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCR7YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKX0gKi9gO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPSgpPT57cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9KGxpc3Qsb3B0aW9ucyk9PntvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpbmVDaGFydF9oaWRkZW5fX0pNNDlMIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ubGluZUNoYXJ0X3RleHRFbXBoYXNpc19fMkI4TGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXZW1ha2VwcmljZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzVlYzdjMztcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxufVxcblxcbi5saW5lQ2hhcnRfbGluZUNoYXJ0QXJlYV9fMWRiRVcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubGluZUNoYXJ0X2NvbHVtbkFyZWFfXzMteHVlIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5cHggKyAxOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubGluZUNoYXJ0X2NvbHVtbkFyZWFfXzMteHVlLmxpbmVDaGFydF9zbWFsbF9fM1piazkgLmxpbmVDaGFydF9jb2x1bW5fXzFBdTRNIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbn1cXG4ubGluZUNoYXJ0X2NvbHVtbkFyZWFfXzMteHVlIC5saW5lQ2hhcnRfY29sdW1uV3JhcF9fMjViWkUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5saW5lQ2hhcnRfY29sdW1uQXJlYV9fMy14dWUgLmxpbmVDaGFydF9jb2x1bW5fXzFBdTRNIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzZhNmE2YTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibi5saW5lQ2hhcnRfc21hbGxfXzNaYms5IHtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3RhYmxlQXJlYV9fMldZUzMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5cHgpO1xcbiAgei1pbmRleDogNTA7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2RpdmlkZXJBcmVhX18yc0hmeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWZhNGFiO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9kaXZpZGVyQXJlYV9fMnNIZnkgLmxpbmVDaGFydF9kaXZpZGVyX18zQ1ZpTSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9saW5lQXJlYV9fMzQ0QjYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBsaW5lQ2hhcnRfc2xpZGVfXzE0ck5sIDFzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfbGluZV9fMzBCVmYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2xpbmVfXzMwQlZmLmxpbmVDaGFydF9zbWFsbF9fM1piazkge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICByaWdodDogMDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYgLmxpbmVDaGFydF9saW5lX18zMEJWZi5saW5lQ2hhcnRfZmFkZUluX19KWGxqSiB7XFxuICBhbmltYXRpb246IGxpbmVDaGFydF9mYWRlSW5fX0pYbGpKIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC04cHg7XFxuICByaWdodDogLTlweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogbGluZUNoYXJ0X2ZhZGVJbl9fSlhsakogMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4LmxpbmVDaGFydF9zbWFsbF9fM1piazkge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgcmlnaHQ6IC0zcHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgubGluZUNoYXJ0X3NtYWxsX18zWmJrOSAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TCB7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4LmxpbmVDaGFydF9zbWFsbF9fM1piazk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTg6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfdG9vbHRpcEFyZWFfXzItVHRMIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAxNnB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYgLmxpbmVDaGFydF90b29sdGlwQXJlYV9fMi1UdEw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTAuNXB4KTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TC5saW5lQ2hhcnRfdG9wX18yVTdPSyB7XFxuICBhbmltYXRpb246IGxpbmVDaGFydF9tb3ZlQm94VG9wX18ya0ktayAxcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TC5saW5lQ2hhcnRfb25fX0xNVmoyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYW5pbWF0aW9uOiBsaW5lQ2hhcnRfZmFkZUluX19KWGxqSiAwLjdzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGxpbmVDaGFydF9tb3ZlQm94VG9wX18ya0ktayAxcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibGFja19fMTc2elAgLmxpbmVDaGFydF9saW5lX18zMEJWZiB7XFxuICBib3JkZXItY29sb3I6ICMxMjE2MTk7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibGFja19fMTc2elAgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlOGVhO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgubGluZUNoYXJ0X3NtYWxsX18zWmJrOSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZhNGFiO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTg6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ3NGI7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibGFja19fMTc2elAgLmxpbmVDaGFydF90b29sdGlwQXJlYV9fMi1UdEw6OmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMxMjE2MTk7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibGFja19fMTc2elAubGluZUNoYXJ0X29uX19MTVZqMiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjE2MTk7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibGFja19fMTc2elAubGluZUNoYXJ0X29uX19MTVZqMiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4LmxpbmVDaGFydF9zbWFsbF9fM1piazkge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzI1MjgyYjtcXG4gIGJvdHRvbTogLTZweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQLmxpbmVDaGFydF9vbl9fTE1WajIgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1ODo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYiAubGluZUNoYXJ0X2xpbmVfXzMwQlZmIHtcXG4gIGJvcmRlci1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY5ZTQ7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ncmVlbl9fM1FNY2IgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OC5saW5lQ2hhcnRfc21hbGxfXzNaYms5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmU2YTM7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ncmVlbl9fM1FNY2IgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1ODo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYiAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TDo6YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYi5saW5lQ2hhcnRfb25fX0xNVmoyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYi5saW5lQ2hhcnRfb25fX0xNVmoyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgubGluZUNoYXJ0X3NtYWxsX18zWmJrOSB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTJjNTY0O1xcbiAgYm90dG9tOiAtNnB4O1xcbiAgcmlnaHQ6IC02cHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ncmVlbl9fM1FNY2IubGluZUNoYXJ0X29uX19MTVZqMiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmx1ZV9fMm1yV3IgLmxpbmVDaGFydF9saW5lX18zMEJWZiB7XFxuICBib3JkZXItY29sb3I6ICMyYjUzYWU7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibHVlX18ybXJXciAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2QxZWY7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibHVlX18ybXJXciAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4LmxpbmVDaGFydF9zbWFsbF9fM1piazkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYTNkZjtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2JsdWVfXzJtcldyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTg6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjUzYWU7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibHVlX18ybXJXciAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TDo6YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJiNTNhZTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2JsdWVfXzJtcldyLmxpbmVDaGFydF9vbl9fTE1WajIgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1M2FlO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmx1ZV9fMm1yV3IubGluZUNoYXJ0X29uX19MTVZqMiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4LmxpbmVDaGFydF9zbWFsbF9fM1piazkge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzJiNTNhZTtcXG4gIGJvdHRvbTogLTZweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmx1ZV9fMm1yV3IubGluZUNoYXJ0X29uX19MTVZqMiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfZW1wdHlfXzdEN1NJIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93QXJlYV9fMnFKTW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMThweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93V3JhcF9fMVZDUnIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93X19Ud1JiQiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93X19Ud1JiQiAubGluZUNoYXJ0X3Jvd1RleHRfXzNuRU1qIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtZmFtaWx5OiBQcmV0ZW5kYXJkLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XFxuICBjb2xvcjogIzZhNmE2YTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93X19Ud1JiQi5saW5lQ2hhcnRfc21hbGxfXzNaYms5IC5saW5lQ2hhcnRfcm93VGV4dF9fM25FTWoge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3Jvd19fVHdSYkIubGluZUNoYXJ0X29uX19MTVZqMiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMxMjE2MTk7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3Jvd19fVHdSYkIubGluZUNoYXJ0X29uX19MTVZqMi5saW5lQ2hhcnRfc21hbGxfXzNaYms5IHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2J0bl9fMTNqYzYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAzNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U4ZWE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2J0bl9fMTNqYzY6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9idG5fXzEzamM2LmxpbmVDaGFydF9sZWZ0X18zX01EaSB7XFxuICBsZWZ0OiAxNHB4O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9idG5fXzEzamM2LmxpbmVDaGFydF9sZWZ0X18zX01EaTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvbmV4dGpzL2ltZy92Mi9jb21wb25lbnRzL3Bocy9wc3QvcmVzdWx0L2ljb25MZWZ0LnBuZ1xcXCIpO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9idG5fXzEzamM2LmxpbmVDaGFydF9yaWdodF9fMkRPb3oge1xcbiAgcmlnaHQ6IDE0cHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2J0bl9fMTNqYzYubGluZUNoYXJ0X3JpZ2h0X18yRE9vejo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvbmV4dGpzL2ltZy92Mi9jb21wb25lbnRzL3Bocy9wc3QvcmVzdWx0L2ljb25SaWdodC5wbmdcXFwiKTtcXG59XFxuXFxuQGtleWZyYW1lcyBsaW5lQ2hhcnRfbW92ZUJveFRvcF9fMmtJLWsge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4IC0gNHB4KSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4ICsgNHB4KSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygtNTAlIC0gOHB4KSwgY2FsYygtNTAlIC0gOHB4IC0gMTVweCAtIDRweCkpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxpbmVDaGFydF9mYWRlSW5fX0pYbGpKIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxpbmVDaGFydF9zbGlkZV9fMTRyTmwge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL2xpbmVDaGFydC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLHNDRU5hO0VGT2IsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNHb0JRO0VIbkJSLG1CQUFBO0FDWEo7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQWFGOztBQVZBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBYUY7QUFWSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVlOO0FBUkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFVSjtBQVBFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNDeEJXO0VEeUJYLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0U2RGE7RUY1RGIsbUJBQUE7QUFTSjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUY7QUFORTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFRSjtBQUxFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JB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XFxyXFxuXFxyXFxuLy8gdmFyaWFibGVzXFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3BhdGguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi8vIG1peGluc1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi8vIGhpZGRlblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8vIOyXreqygCDqsJXsobBcXHJcXG4udGV4dEVtcGhhc2lzIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LWZhbWlseTogJEZfV0VNQUtFX1BSSUNFO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBjb2xvcjogJENfU0tZXzIwMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IDJweDtcXHJcXG59XCIsXCIuaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4udGV4dEVtcGhhc2lzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2VtYWtlcHJpY2VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1ZWM3YzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbn1cXG5cXG4ubGluZUNoYXJ0QXJlYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNvbHVtbkFyZWEge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOXB4ICsgMThweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmNvbHVtbkFyZWEuc21hbGwgLmNvbHVtbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG59XFxuLmNvbHVtbkFyZWEgLmNvbHVtbldyYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jb2x1bW5BcmVhIC5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjNmE2YTZhO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNoYXJ0V3JhcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcbi5jaGFydFdyYXAuc21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTJweDtcXG59XFxuLmNoYXJ0V3JhcCAudGFibGVBcmVhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOXB4KTtcXG4gIHotaW5kZXg6IDUwO1xcbn1cXG4uY2hhcnRXcmFwIC5kaXZpZGVyQXJlYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWZhNGFiO1xcbn1cXG4uY2hhcnRXcmFwIC5kaXZpZGVyQXJlYSAuZGl2aWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xcbn1cXG4uY2hhcnRXcmFwIC5saW5lQXJlYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbmltYXRpb246IHNsaWRlIDFzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAubGluZS5zbWFsbCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAubGluZS5mYWRlSW4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAuZGF0YUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC04cHg7XFxuICByaWdodDogLTlweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmRhdGFCdG4uc21hbGwge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgcmlnaHQ6IC0zcHg7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC5kYXRhQnRuLnNtYWxsIC50b29sdGlwQXJlYSB7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAuZGF0YUJ0bi5zbWFsbDo6YWZ0ZXIge1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmRhdGFCdG46OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC50b29sdGlwQXJlYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogMTZweDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC50b29sdGlwQXJlYTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMC41cHgpO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA3cHggc29saWQ7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC50b29sdGlwQXJlYS50b3Age1xcbiAgYW5pbWF0aW9uOiBtb3ZlQm94VG9wIDFzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGU7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC50b29sdGlwQXJlYS5vbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgbW92ZUJveFRvcCAxcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsYWNrIC5saW5lIHtcXG4gIGJvcmRlci1jb2xvcjogIzEyMTYxOTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmxhY2sgLmRhdGFCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZThlYTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmxhY2sgLmRhdGFCdG4uc21hbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmYTRhYjtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmxhY2sgLmRhdGFCdG46OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ3NGI7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsYWNrIC50b29sdGlwQXJlYTo6YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzEyMTYxOTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmxhY2sub24gLmRhdGFCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTYxOTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmxhY2sub24gLmRhdGFCdG4uc21hbGwge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzI1MjgyYjtcXG4gIGJvdHRvbTogLTZweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibGFjay5vbiAuZGF0YUJ0bjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuZ3JlZW4gLmxpbmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTJjNTY0O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbiAuZGF0YUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmOWU0O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbiAuZGF0YUJ0bi5zbWFsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJlNmEzO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbiAuZGF0YUJ0bjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuZ3JlZW4gLnRvb2x0aXBBcmVhOjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNTJjNTY0O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbi5vbiAuZGF0YUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNTY0O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbi5vbiAuZGF0YUJ0bi5zbWFsbCB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjNTJjNTY0O1xcbiAgYm90dG9tOiAtNnB4O1xcbiAgcmlnaHQ6IC02cHg7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmdyZWVuLm9uIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlIC5saW5lIHtcXG4gIGJvcmRlci1jb2xvcjogIzJiNTNhZTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmx1ZSAuZGF0YUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkMWVmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlIC5kYXRhQnRuLnNtYWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmEzZGY7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsdWUgLmRhdGFCdG46OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjUzYWU7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsdWUgLnRvb2x0aXBBcmVhOjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMmI1M2FlO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlLm9uIC5kYXRhQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjUzYWU7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsdWUub24gLmRhdGFCdG4uc21hbGwge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzJiNTNhZTtcXG4gIGJvdHRvbTogLTZweDtcXG4gIHJpZ2h0OiAtNnB4O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlLm9uIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5lbXB0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGFydFdyYXAgLnJvd0FyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMThweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuLmNoYXJ0V3JhcCAucm93V3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2hhcnRXcmFwIC5yb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxufVxcbi5jaGFydFdyYXAgLnJvdyAucm93VGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xcbiAgY29sb3I6ICM2YTZhNmE7XFxufVxcbi5jaGFydFdyYXAgLnJvdy5zbWFsbCAucm93VGV4dCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG59XFxuLmNoYXJ0V3JhcCAucm93Lm9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzEyMTYxOTtcXG59XFxuLmNoYXJ0V3JhcCAucm93Lm9uLnNtYWxsIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5jaGFydFdyYXAgLmJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDM1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZThlYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuLmxlZnQge1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuLmxlZnQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL25leHRqcy9pbWcvdjIvY29tcG9uZW50cy9waHMvcHN0L3Jlc3VsdC9pY29uTGVmdC5wbmdcXFwiKTtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuLnJpZ2h0IHtcXG4gIHJpZ2h0OiAxNHB4O1xcbn1cXG4uY2hhcnRXcmFwIC5idG4ucmlnaHQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL25leHRqcy9pbWcvdjIvY29tcG9uZW50cy9waHMvcHN0L3Jlc3VsdC9pY29uUmlnaHQucG5nXFxcIik7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZUJveFRvcCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDhweCksIGNhbGMoLTUwJSAtIDhweCAtIDE1cHggLSA0cHgpKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDhweCksIGNhbGMoLTUwJSAtIDhweCAtIDE1cHggKyA0cHgpKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4IC0gNHB4KSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLFwiLy8gaGVhZGVyIGhlaWdodFxcclxcbiRNSU5fV0lEVEg6IDExNjhweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVDogNzBweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX01BWF9IRUlHSFQ6IDgycHg7XFxyXFxuJEhFQURFUl9NRU5VX0FSRUFfSEVJR0hUOiA0OHB4O1xcclxcbiRIRUFERVJfSEVJR0hUOiAkSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVCArICRIRUFERVJfTUVOVV9BUkVBX0hFSUdIVDtcXHJcXG4kQ09OVEVOVFNfV0lEVEg6IDExMjBweDtcXHJcXG4kRk9PVEVSX0NPTlRFTlRfSEVJR0hUOiAxMDRweDtcXHJcXG4kRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ6IDQ2cHg7XFxyXFxuJEZPT1RFUl9IRUlHSFQ6ICRGT09URVJfQ09OVEVOVF9IRUlHSFQgKyAkRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ7XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOy7tO2PrOuEjO2KuCDsgqzsnbTspohcXHJcXG4kVE9QX05VREdFX0hFSUdIVDogNDhweDtcXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuJEZfTk9UT19TQU5TX0tSOiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcXHJcXG4kRl9NT05UU0VSUkFUOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuJEZfV0VNQUtFX1BSSUNFOiAnV2VtYWtlcHJpY2UnLCBzYW5zLXNlcmlmO1xcclxcbiRGX1BSRVRFTkRBUkQ6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gei1pbmRleFxcclxcbiRaX0lOREVYX0JBU0lDOiAxMDtcXHJcXG4kWl9JTkRFWF9GSVhFRDogMTAwO1wiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuJENfV0FSTklOR19SRUQ6ICNmYjRlNGU7XFxyXFxuJENfV0FSTklOR19SRURfREFSSzogI2U5M2MzYztcXHJcXG4kQ19XQVJOSU5HX1JFRF9MSUdIVDogI2ZmNjI2MjtcXHJcXG4kQ19XQVJOSU5HX1JFRF9XSElURTogI2Y5ZTBlMjtcXHJcXG5cXHJcXG5cXHJcXG4vLyBQT1NJVElWRVxcclxcbiRDX1BPU0lUSVZFOiAjNmNkZDgzO1xcclxcbiRDX1BPU0lUSVZFX0RBUks6ICMzZWQxNjA7XFxyXFxuJENfUE9TSVRJVkVfTElHSFQ6ICM5MmU2YTM7XFxyXFxuXFxyXFxuLy8gTkVHQVRJVkVcXHJcXG4kQ19ORUdBVElWRTogI2ZiNGU0ZTtcXHJcXG4kQ19ORUdBVElWRV9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX05FR0FUSVZFX0xJR0hUOiAjZmY2MjYyO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhpZGRlblwiOiBcImxpbmVDaGFydF9oaWRkZW5fX0pNNDlMXCIsXG5cdFwidGV4dEVtcGhhc2lzXCI6IFwibGluZUNoYXJ0X3RleHRFbXBoYXNpc19fMkI4TGVcIixcblx0XCJsaW5lQ2hhcnRBcmVhXCI6IFwibGluZUNoYXJ0X2xpbmVDaGFydEFyZWFfXzFkYkVXXCIsXG5cdFwiY29sdW1uQXJlYVwiOiBcImxpbmVDaGFydF9jb2x1bW5BcmVhX18zLXh1ZVwiLFxuXHRcInNtYWxsXCI6IFwibGluZUNoYXJ0X3NtYWxsX18zWmJrOVwiLFxuXHRcImNvbHVtblwiOiBcImxpbmVDaGFydF9jb2x1bW5fXzFBdTRNXCIsXG5cdFwiY29sdW1uV3JhcFwiOiBcImxpbmVDaGFydF9jb2x1bW5XcmFwX18yNWJaRVwiLFxuXHRcImNoYXJ0V3JhcFwiOiBcImxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuXCIsXG5cdFwidGFibGVBcmVhXCI6IFwibGluZUNoYXJ0X3RhYmxlQXJlYV9fMldZUzNcIixcblx0XCJkaXZpZGVyQXJlYVwiOiBcImxpbmVDaGFydF9kaXZpZGVyQXJlYV9fMnNIZnlcIixcblx0XCJkaXZpZGVyXCI6IFwibGluZUNoYXJ0X2RpdmlkZXJfXzNDVmlNXCIsXG5cdFwibGluZUFyZWFcIjogXCJsaW5lQ2hhcnRfbGluZUFyZWFfXzM0NEI2XCIsXG5cdFwic2xpZGVcIjogXCJsaW5lQ2hhcnRfc2xpZGVfXzE0ck5sXCIsXG5cdFwicG9pbnRzQXJlYVwiOiBcImxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbVwiLFxuXHRcImRhdGFXcmFwXCI6IFwibGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZlwiLFxuXHRcImxpbmVcIjogXCJsaW5lQ2hhcnRfbGluZV9fMzBCVmZcIixcblx0XCJmYWRlSW5cIjogXCJsaW5lQ2hhcnRfZmFkZUluX19KWGxqSlwiLFxuXHRcImRhdGFCdG5cIjogXCJsaW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNThcIixcblx0XCJ0b29sdGlwQXJlYVwiOiBcImxpbmVDaGFydF90b29sdGlwQXJlYV9fMi1UdExcIixcblx0XCJ0b3BcIjogXCJsaW5lQ2hhcnRfdG9wX18yVTdPS1wiLFxuXHRcIm1vdmVCb3hUb3BcIjogXCJsaW5lQ2hhcnRfbW92ZUJveFRvcF9fMmtJLWtcIixcblx0XCJvblwiOiBcImxpbmVDaGFydF9vbl9fTE1WajJcIixcblx0XCJibGFja1wiOiBcImxpbmVDaGFydF9ibGFja19fMTc2elBcIixcblx0XCJncmVlblwiOiBcImxpbmVDaGFydF9ncmVlbl9fM1FNY2JcIixcblx0XCJibHVlXCI6IFwibGluZUNoYXJ0X2JsdWVfXzJtcldyXCIsXG5cdFwiZW1wdHlcIjogXCJsaW5lQ2hhcnRfZW1wdHlfXzdEN1NJXCIsXG5cdFwicm93QXJlYVwiOiBcImxpbmVDaGFydF9yb3dBcmVhX18ycUpNblwiLFxuXHRcInJvd1dyYXBcIjogXCJsaW5lQ2hhcnRfcm93V3JhcF9fMVZDUnJcIixcblx0XCJyb3dcIjogXCJsaW5lQ2hhcnRfcm93X19Ud1JiQlwiLFxuXHRcInJvd1RleHRcIjogXCJsaW5lQ2hhcnRfcm93VGV4dF9fM25FTWpcIixcblx0XCJidG5cIjogXCJsaW5lQ2hhcnRfYnRuX18xM2pjNlwiLFxuXHRcImxlZnRcIjogXCJsaW5lQ2hhcnRfbGVmdF9fM19NRGlcIixcblx0XCJyaWdodFwiOiBcImxpbmVDaGFydF9yaWdodF9fMkRPb3pcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9vbHRpcF9oaWRkZW5fXzJkeVNsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4udG9vbHRpcF90ZXh0RW1waGFzaXNfXzIzMDN1IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2VtYWtlcHJpY2VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1ZWM3YzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbn1cXG5cXG4udG9vbHRpcF90b29sdGlwQXJlYV9fM1VtZ3Uge1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50b29sdGlwX3Rvb2x0aXBBcmVhX18zVW1ndS50b29sdGlwX2JsYWNrX18zUHFmSiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxNjE5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b29sdGlwX3Rvb2x0aXBBcmVhX18zVW1ndS50b29sdGlwX2dyZWVuX18xa3M2SCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNTY0O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b29sdGlwX3Rvb2x0aXBBcmVhX18zVW1ndS50b29sdGlwX2JsdWVfX050dnhUIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjUzYWU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBfdG9vbHRpcEFyZWFfXzNVbWd1IC50b29sdGlwX3RleHRfXzNnRTBGIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBQcmV0ZW5kYXJkLCBzYW5zLXNlcmlmO1xcbn1cXG4udG9vbHRpcF90b29sdGlwQXJlYV9fM1VtZ3U6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL3Rvb2x0aXAubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1ZKOztBRGNBO0VBQ0kscUJBQUE7RUFDQSxzQ0VOYTtFRk9iLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjR29CUTtFSG5CUixtQkFBQTtBQ1hKOztBQWJBO0VHeVFFLDZFQUFBO0VIdFFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZUY7QUFiRTtFQUNFLHlCRVZZO0VGV1osV0VoQk07QUYrQlY7QUFaRTtFQUNFLHlCRURVO0VGRVYsV0VyQk07QUZtQ1Y7QUFYRTtFQUNFLHlCRStEUztFRjlEVCxXRTFCTTtBRnVDVjtBQVZFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0NmVztBRDJCZjtBQVRFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFXSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDsl63qsoAg6rCV7KGwXFxyXFxuLnRleHRFbXBoYXNpcyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRGX1dFTUFLRV9QUklDRTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6ICRDX1NLWV8yMDA7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiAycHg7XFxyXFxufVwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLnRleHRFbXBoYXNpcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIldlbWFrZXByaWNlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjNWVjN2MzO1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG59XFxuXFxuLnRvb2x0aXBBcmVhIHtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4udG9vbHRpcEFyZWEuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTYxOTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcEFyZWEuZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcEFyZWEuYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1M2FlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b29sdGlwQXJlYSAudGV4dCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LWZhbWlseTogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXG59XFxuLnRvb2x0aXBBcmVhOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVwiLFwiLy8gaGVhZGVyIGhlaWdodFxcclxcbiRNSU5fV0lEVEg6IDExNjhweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVDogNzBweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX01BWF9IRUlHSFQ6IDgycHg7XFxyXFxuJEhFQURFUl9NRU5VX0FSRUFfSEVJR0hUOiA0OHB4O1xcclxcbiRIRUFERVJfSEVJR0hUOiAkSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVCArICRIRUFERVJfTUVOVV9BUkVBX0hFSUdIVDtcXHJcXG4kQ09OVEVOVFNfV0lEVEg6IDExMjBweDtcXHJcXG4kRk9PVEVSX0NPTlRFTlRfSEVJR0hUOiAxMDRweDtcXHJcXG4kRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ6IDQ2cHg7XFxyXFxuJEZPT1RFUl9IRUlHSFQ6ICRGT09URVJfQ09OVEVOVF9IRUlHSFQgKyAkRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ7XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOy7tO2PrOuEjO2KuCDsgqzsnbTspohcXHJcXG4kVE9QX05VREdFX0hFSUdIVDogNDhweDtcXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuJEZfTk9UT19TQU5TX0tSOiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcXHJcXG4kRl9NT05UU0VSUkFUOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuJEZfV0VNQUtFX1BSSUNFOiAnV2VtYWtlcHJpY2UnLCBzYW5zLXNlcmlmO1xcclxcbiRGX1BSRVRFTkRBUkQ6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gei1pbmRleFxcclxcbiRaX0lOREVYX0JBU0lDOiAxMDtcXHJcXG4kWl9JTkRFWF9GSVhFRDogMTAwO1wiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuJENfV0FSTklOR19SRUQ6ICNmYjRlNGU7XFxyXFxuJENfV0FSTklOR19SRURfREFSSzogI2U5M2MzYztcXHJcXG4kQ19XQVJOSU5HX1JFRF9MSUdIVDogI2ZmNjI2MjtcXHJcXG4kQ19XQVJOSU5HX1JFRF9XSElURTogI2Y5ZTBlMjtcXHJcXG5cXHJcXG5cXHJcXG4vLyBQT1NJVElWRVxcclxcbiRDX1BPU0lUSVZFOiAjNmNkZDgzO1xcclxcbiRDX1BPU0lUSVZFX0RBUks6ICMzZWQxNjA7XFxyXFxuJENfUE9TSVRJVkVfTElHSFQ6ICM5MmU2YTM7XFxyXFxuXFxyXFxuLy8gTkVHQVRJVkVcXHJcXG4kQ19ORUdBVElWRTogI2ZiNGU0ZTtcXHJcXG4kQ19ORUdBVElWRV9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX05FR0FUSVZFX0xJR0hUOiAjZmY2MjYyO1xcclxcblwiLFwiLy8gZWxsaXBzaXNcXHJcXG4vLyBAcGFyYW0ge251bWJlcn0gJExJTkUgLSDspIQg7IiYXFxyXFxuLy8gQHBhcmFtIHtweH0gJExJTkVfSEVJR0hUIC0g7ZWc7KSEIOuGkuydtFxcclxcbkBtaXhpbiBlbGxpcHNpcygkTElORTogMSwgJExJTkVfSEVJR0hUOiAxLjJlbSkge1xcclxcblxcdEBpZigkTElORSA9PSAxKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdH0gQGVsc2Uge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuXFx0XFx0LXdlYmtpdC1saW5lLWNsYW1wOiAkTElORTtcXHJcXG5cXHRcXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcblxcdFxcdG1heC1oZWlnaHQ6ICRMSU5FX0hFSUdIVCAqICRMSU5FOyAvLyB3ZWJraXQg7J207Jm47J2YIOu4jOudvOyasOyggCDrjIDsnZFcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogJExJTkVfSEVJR0hUO1xcclxcblxcdFxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcblxcdFxcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDqs7XthrUg67KE7Yq8IOyKpO2DgOydvFxcclxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkVFlQRSAtIOuyhO2KvCDtg4DsnoVcXHJcXG4vLyBAcGFyYW0ge3N0cmluZ30gJFNJWkUgLSDrsoTtirwg7YGs6riwXFxyXFxuQG1peGluIGNvbW1vbkJ0blN0eWxlKCRUWVBFOiAncHJpbWFyeScsICRTSVpFOiAnbGFyZ2UnKSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDsiqTtg4Dsnbzsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdEBpZigkVFlQRSA9PSAncHJpbWFyeScpIHtcXHJcXG5cXHRcXHR3aWR0aDogMjI4cHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0pPQkRBX1dISVRFO1xcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIO2BrOq4sOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0XFx0QGlmKCRTSVpFID09ICdsYXJnZScpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDY0cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA2NHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDU2cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA1NnB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ3NtYWxsJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNDRweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0dSRUVOXzIwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQvLyDsiqTtg4Dsnbzsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdzZWNvbmRhcnknKSB7XFxyXFxuXFx0XFx0d2lkdGg6IDIyOHB4O1xcclxcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfV0hJVEU7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdGNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFxyXFxuXFx0XFx0Ly8g7YGs6riw7JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRcXHRAaWYoJFNJWkUgPT0gJ2xhcmdlJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNjRweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnbWVkaXVtJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNTZweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnc21hbGwnKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA0NHB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNDBweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAkQ19HUkVFTl8yMDA7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfSk9CREFfV0hJVEU7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRDX0dSRUVOXzIwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1jb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX1dISVRFO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0Ly8g7Iqk7YOA7J287JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAndW5kZXJsaW5lJykge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV84MDtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyDtgazquLDsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdFxcdEBpZigkU0laRSA9PSAnbGFyZ2UnKSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnc21hbGwnKSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxM3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4wODY2cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6YWZ0ZXIge1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRyaWdodDogMDtcXHJcXG5cXHRcXHRcXHRib3R0b206IC0xcHg7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDFweDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfODA7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogJyc7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNzA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0JjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzcwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0XFxyXFxuXFx0XFx0XFx0XFx0JjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOyduO2SiyDsiqTtg4DsnbxcXHJcXG5AbWl4aW4gY29tbW9uSW5wdXRTdHlsZSB7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogNTZweDtcXHJcXG5cXHRwYWRkaW5nOiAwIDE2cHg7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgJENfQ09PTF9HUkFZXzMwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfMzA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0Y29sb3I6ICRDX0NPT0xfR1JBWV85MDtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFxyXFxuXFx0Ly8g7IOd64WE7JuU7J28IOqyveyasFxcclxcblxcdCYudHlwZTIge1xcclxcblxcdFxcdHdpZHRoOiAyMTJweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g7KO866+865Ox66Gd67KI7Zi4IOuSt+yekOumrCDqsr3smrBcXHJcXG5cXHQmLnR5cGUzIHtcXHJcXG5cXHRcXHR3aWR0aDogNjBweDtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8v7Zy064yA7Y+wIOuyiO2YuOydvCDqsr3smrBcXHJcXG5cXHQmLm1vYmlsZSB7XFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDIuNnB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDrsoTtirwo7J247Kad7JqU7LKtLCDspJHrs7XtmZXsnbgsIOu5hOuwgOuyiO2YuO2ZleyduCnsnbQg7J6I64qUIOqyveyasFxcclxcblxcdCYud2l0aEJ1dHRvbiB7XFxyXFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIOqygOyDieydtCDqsIDriqXtlZwg6rK97JqwKHNlYXJjaCBpY29uKVxcclxcblxcdCYuc2VhcmNoIHtcXHJcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDQ4cHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCYuZXJyb3Ige1xcclxcblxcdFxcdGJvcmRlci1jb2xvcjogJENfTkVHQVRJVkU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Zm9jdXMsXFxyXFxuXFx0Ji5zdWNjZXNzIHtcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19XSElURTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfSk9CREFfV0hJVEU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMjBweDtcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8vaWUxMVxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8vZWRnZVxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDqs7XthrUgYm94LXNoYWRvdyDsiqTtg4DsnbxcXHJcXG4vLyBAcGFyYW0ge3N0cmluZ30gJFRZUEUgLSBib3gtc2hhZG93IO2DgOyehVxcclxcbkBtaXhpbiBjb21tb25Cb3hTaGFkb3dTdHlsZSgkVFlQRTogJ2Jhc2UnKSB7XFxyXFxuXFx0QGlmKCRUWVBFID09ICdiYXNlJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdsYXJnZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ3hsYXJnZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMjBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAneHhsYXJnZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMjVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdpbm5lcicpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gc2Nyb2xsXFxyXFxuQG1peGluIHNjcm9sbCgkU0NST0xMX1dJRFRIOiA0cHgsICRJRV9UUkFDS19DT0xPUjogJENfV0hJVEUpIHtcXHJcXG5cXHQkQkFTSUNfU0NST0xMX1dJRFRIOiAxN3B4O1xcclxcblxcdCRTQ1JPTExfQkFSX0NPTE9SOiAkQ19DT09MX0dSQVlfNDA7XFxyXFxuXFx0JFRSQUNLOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRcXHJcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoI3skU0NST0xMX1dJRFRIfSAtICN7JEJBU0lDX1NDUk9MTF9XSURUSH0pO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuXFxyXFxuXFx0LyogIElFIHNjcm9sbGJhciBzdHlsZSAgKi9cXHJcXG5cXHRzY3JvbGxiYXItZmFjZS1jb2xvcjogJFNDUk9MTF9CQVJfQ09MT1I7XFxyXFxuXFx0c2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogJFNDUk9MTF9CQVJfQ09MT1I7XFxyXFxuXFx0c2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkSUVfVFJBQ0tfQ09MT1I7XFxyXFxuXFx0c2Nyb2xsYmFyLWFycm93LWNvbG9yOiAkSUVfVFJBQ0tfQ09MT1I7XFxyXFxuXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdHdpZHRoOiAkQkFTSUNfU0NST0xMX1dJRFRIO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFNDUk9MTF9CQVJfQ09MT1I7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkVFJBQ0s7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0aGVpZ2h0OiAwO1xcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwidG9vbHRpcF9oaWRkZW5fXzJkeVNsXCIsXG5cdFwidGV4dEVtcGhhc2lzXCI6IFwidG9vbHRpcF90ZXh0RW1waGFzaXNfXzIzMDN1XCIsXG5cdFwidG9vbHRpcEFyZWFcIjogXCJ0b29sdGlwX3Rvb2x0aXBBcmVhX18zVW1ndVwiLFxuXHRcImJsYWNrXCI6IFwidG9vbHRpcF9ibGFja19fM1BxZkpcIixcblx0XCJncmVlblwiOiBcInRvb2x0aXBfZ3JlZW5fXzFrczZIXCIsXG5cdFwiYmx1ZVwiOiBcInRvb2x0aXBfYmx1ZV9fTnR2eFRcIixcblx0XCJ0ZXh0XCI6IFwidG9vbHRpcF90ZXh0X18zZ0UwRlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b29sdGlwU21hbGxfaGlkZGVuX18xa21SciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLnRvb2x0aXBTbWFsbF90ZXh0RW1waGFzaXNfXzE5QlB2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2VtYWtlcHJpY2VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1ZWM3YzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbn1cXG5cXG4udG9vbHRpcFNtYWxsX3Rvb2x0aXBBcmVhX18yWEtNWiB7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50b29sdGlwU21hbGxfdG9vbHRpcEFyZWFfXzJYS01aLnRvb2x0aXBTbWFsbF9ibGFja19fTEFHZ2Yge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTYxOTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcFNtYWxsX3Rvb2x0aXBBcmVhX18yWEtNWi50b29sdGlwU21hbGxfZ3JlZW5fX0E2NndqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NjQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBTbWFsbF90b29sdGlwQXJlYV9fMlhLTVoudG9vbHRpcFNtYWxsX2JsdWVfXzF2QU1RIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjUzYWU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBTbWFsbF90b29sdGlwQXJlYV9fMlhLTVogLnRvb2x0aXBTbWFsbF90ZXh0X18zQ3Q0WiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LWZhbWlseTogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXG59XFxuLnRvb2x0aXBTbWFsbF90b29sdGlwQXJlYV9fMlhLTVo6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1wiLFwid2VicGFjazovL3Rvb2x0aXBTbWFsbC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLHNDRU5hO0VGT2IsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNHb0JRO0VIbkJSLG1CQUFBO0FDWEo7O0FBYkE7RUd5UUUsNkVBQUE7RUh0UUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFlRjtBQWJFO0VBQ0UseUJFVlk7RUZXWixXRWhCTTtBRitCVjtBQVpFO0VBQ0UseUJFRFU7RUZFVixXRXJCTTtBRm1DVjtBQVhFO0VBQ0UseUJFK0RTO0VGOURULFdFMUJNO0FGdUNWO0FBVkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQ2ZXO0FEMkJmO0FBVEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQVdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0ICdVVEYtOCc7XFxyXFxuXFxyXFxuLy8gdmFyaWFibGVzXFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3BhdGguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xcclxcblxcclxcbi8vIG1peGluc1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi8vIGhpZGRlblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi8vIOyXreqygCDqsJXsobBcXHJcXG4udGV4dEVtcGhhc2lzIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LWZhbWlseTogJEZfV0VNQUtFX1BSSUNFO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBjb2xvcjogJENfU0tZXzIwMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IDJweDtcXHJcXG59XCIsXCIuaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4udGV4dEVtcGhhc2lzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV2VtYWtlcHJpY2VcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICM1ZWM3YzM7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcbn1cXG5cXG4udG9vbHRpcEFyZWEge1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4udG9vbHRpcEFyZWEuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTYxOTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcEFyZWEuZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcEFyZWEuYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1M2FlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50b29sdGlwQXJlYSAudGV4dCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBmb250LWZhbWlseTogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXG59XFxuLnRvb2x0aXBBcmVhOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVwiLFwiLy8gaGVhZGVyIGhlaWdodFxcclxcbiRNSU5fV0lEVEg6IDExNjhweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVDogNzBweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX01BWF9IRUlHSFQ6IDgycHg7XFxyXFxuJEhFQURFUl9NRU5VX0FSRUFfSEVJR0hUOiA0OHB4O1xcclxcbiRIRUFERVJfSEVJR0hUOiAkSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVCArICRIRUFERVJfTUVOVV9BUkVBX0hFSUdIVDtcXHJcXG4kQ09OVEVOVFNfV0lEVEg6IDExMjBweDtcXHJcXG4kRk9PVEVSX0NPTlRFTlRfSEVJR0hUOiAxMDRweDtcXHJcXG4kRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ6IDQ2cHg7XFxyXFxuJEZPT1RFUl9IRUlHSFQ6ICRGT09URVJfQ09OVEVOVF9IRUlHSFQgKyAkRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ7XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOy7tO2PrOuEjO2KuCDsgqzsnbTspohcXHJcXG4kVE9QX05VREdFX0hFSUdIVDogNDhweDtcXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuJEZfTk9UT19TQU5TX0tSOiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcXHJcXG4kRl9NT05UU0VSUkFUOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuJEZfV0VNQUtFX1BSSUNFOiAnV2VtYWtlcHJpY2UnLCBzYW5zLXNlcmlmO1xcclxcbiRGX1BSRVRFTkRBUkQ6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gei1pbmRleFxcclxcbiRaX0lOREVYX0JBU0lDOiAxMDtcXHJcXG4kWl9JTkRFWF9GSVhFRDogMTAwO1wiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuJENfV0FSTklOR19SRUQ6ICNmYjRlNGU7XFxyXFxuJENfV0FSTklOR19SRURfREFSSzogI2U5M2MzYztcXHJcXG4kQ19XQVJOSU5HX1JFRF9MSUdIVDogI2ZmNjI2MjtcXHJcXG4kQ19XQVJOSU5HX1JFRF9XSElURTogI2Y5ZTBlMjtcXHJcXG5cXHJcXG5cXHJcXG4vLyBQT1NJVElWRVxcclxcbiRDX1BPU0lUSVZFOiAjNmNkZDgzO1xcclxcbiRDX1BPU0lUSVZFX0RBUks6ICMzZWQxNjA7XFxyXFxuJENfUE9TSVRJVkVfTElHSFQ6ICM5MmU2YTM7XFxyXFxuXFxyXFxuLy8gTkVHQVRJVkVcXHJcXG4kQ19ORUdBVElWRTogI2ZiNGU0ZTtcXHJcXG4kQ19ORUdBVElWRV9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX05FR0FUSVZFX0xJR0hUOiAjZmY2MjYyO1xcclxcblwiLFwiLy8gZWxsaXBzaXNcXHJcXG4vLyBAcGFyYW0ge251bWJlcn0gJExJTkUgLSDspIQg7IiYXFxyXFxuLy8gQHBhcmFtIHtweH0gJExJTkVfSEVJR0hUIC0g7ZWc7KSEIOuGkuydtFxcclxcbkBtaXhpbiBlbGxpcHNpcygkTElORTogMSwgJExJTkVfSEVJR0hUOiAxLjJlbSkge1xcclxcblxcdEBpZigkTElORSA9PSAxKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG5cXHRcXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcdH0gQGVsc2Uge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuXFx0XFx0LXdlYmtpdC1saW5lLWNsYW1wOiAkTElORTtcXHJcXG5cXHRcXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcblxcdFxcdG1heC1oZWlnaHQ6ICRMSU5FX0hFSUdIVCAqICRMSU5FOyAvLyB3ZWJraXQg7J207Jm47J2YIOu4jOudvOyasOyggCDrjIDsnZFcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogJExJTkVfSEVJR0hUO1xcclxcblxcdFxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcblxcdFxcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDqs7XthrUg67KE7Yq8IOyKpO2DgOydvFxcclxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkVFlQRSAtIOuyhO2KvCDtg4DsnoVcXHJcXG4vLyBAcGFyYW0ge3N0cmluZ30gJFNJWkUgLSDrsoTtirwg7YGs6riwXFxyXFxuQG1peGluIGNvbW1vbkJ0blN0eWxlKCRUWVBFOiAncHJpbWFyeScsICRTSVpFOiAnbGFyZ2UnKSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDsiqTtg4Dsnbzsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdEBpZigkVFlQRSA9PSAncHJpbWFyeScpIHtcXHJcXG5cXHRcXHR3aWR0aDogMjI4cHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0pPQkRBX1dISVRFO1xcclxcblxcdFxcdFxcclxcblxcdFxcdC8vIO2BrOq4sOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0XFx0QGlmKCRTSVpFID09ICdsYXJnZScpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDY0cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA2NHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDU2cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA1NnB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ3NtYWxsJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNDRweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDQ0cHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0dSRUVOXzIwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQvLyDsiqTtg4Dsnbzsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdzZWNvbmRhcnknKSB7XFxyXFxuXFx0XFx0d2lkdGg6IDIyOHB4O1xcclxcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfV0hJVEU7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdGNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFxyXFxuXFx0XFx0Ly8g7YGs6riw7JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRcXHRAaWYoJFNJWkUgPT0gJ2xhcmdlJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNjRweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnbWVkaXVtJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNTZweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE3cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnc21hbGwnKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA0NHB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNDBweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWNvbG9yOiAkQ19HUkVFTl8yMDA7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfSk9CREFfV0hJVEU7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRDX0dSRUVOXzIwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1jb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX1dISVRFO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0Ly8g7Iqk7YOA7J287JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAndW5kZXJsaW5lJykge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV84MDtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyDtgazquLDsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdFxcdEBpZigkU0laRSA9PSAnbGFyZ2UnKSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0fSBAZWxzZSBpZigkU0laRSA9PSAnc21hbGwnKSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxM3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4wODY2cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6YWZ0ZXIge1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRyaWdodDogMDtcXHJcXG5cXHRcXHRcXHRib3R0b206IC0xcHg7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDFweDtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfODA7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogJyc7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNzA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0JjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzcwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0XFxyXFxuXFx0XFx0XFx0XFx0JjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOyduO2SiyDsiqTtg4DsnbxcXHJcXG5AbWl4aW4gY29tbW9uSW5wdXRTdHlsZSB7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogNTZweDtcXHJcXG5cXHRwYWRkaW5nOiAwIDE2cHg7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgJENfQ09PTF9HUkFZXzMwO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19DT09MX0dSQVlfMzA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0Y29sb3I6ICRDX0NPT0xfR1JBWV85MDtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuXFxyXFxuXFx0Ly8g7IOd64WE7JuU7J28IOqyveyasFxcclxcblxcdCYudHlwZTIge1xcclxcblxcdFxcdHdpZHRoOiAyMTJweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g7KO866+865Ox66Gd67KI7Zi4IOuSt+yekOumrCDqsr3smrBcXHJcXG5cXHQmLnR5cGUzIHtcXHJcXG5cXHRcXHR3aWR0aDogNjBweDtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8v7Zy064yA7Y+wIOuyiO2YuOydvCDqsr3smrBcXHJcXG5cXHQmLm1vYmlsZSB7XFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDIuNnB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDrsoTtirwo7J247Kad7JqU7LKtLCDspJHrs7XtmZXsnbgsIOu5hOuwgOuyiO2YuO2ZleyduCnsnbQg7J6I64qUIOqyveyasFxcclxcblxcdCYud2l0aEJ1dHRvbiB7XFxyXFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIOqygOyDieydtCDqsIDriqXtlZwg6rK97JqwKHNlYXJjaCBpY29uKVxcclxcblxcdCYuc2VhcmNoIHtcXHJcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDQ4cHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCYuZXJyb3Ige1xcclxcblxcdFxcdGJvcmRlci1jb2xvcjogJENfTkVHQVRJVkU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Zm9jdXMsXFxyXFxuXFx0Ji5zdWNjZXNzIHtcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19XSElURTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JjpkaXNhYmxlZCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfSk9CREFfV0hJVEU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMjBweDtcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8vaWUxMVxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8vZWRnZVxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDqs7XthrUgYm94LXNoYWRvdyDsiqTtg4DsnbxcXHJcXG4vLyBAcGFyYW0ge3N0cmluZ30gJFRZUEUgLSBib3gtc2hhZG93IO2DgOyehVxcclxcbkBtaXhpbiBjb21tb25Cb3hTaGFkb3dTdHlsZSgkVFlQRTogJ2Jhc2UnKSB7XFxyXFxuXFx0QGlmKCRUWVBFID09ICdiYXNlJykge1xcclxcblxcdFxcdGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdsYXJnZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ3hsYXJnZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMjBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAneHhsYXJnZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMjVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdpbm5lcicpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gc2Nyb2xsXFxyXFxuQG1peGluIHNjcm9sbCgkU0NST0xMX1dJRFRIOiA0cHgsICRJRV9UUkFDS19DT0xPUjogJENfV0hJVEUpIHtcXHJcXG5cXHQkQkFTSUNfU0NST0xMX1dJRFRIOiAxN3B4O1xcclxcblxcdCRTQ1JPTExfQkFSX0NPTE9SOiAkQ19DT09MX0dSQVlfNDA7XFxyXFxuXFx0JFRSQUNLOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRcXHJcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoI3skU0NST0xMX1dJRFRIfSAtICN7JEJBU0lDX1NDUk9MTF9XSURUSH0pO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuXFxyXFxuXFx0LyogIElFIHNjcm9sbGJhciBzdHlsZSAgKi9cXHJcXG5cXHRzY3JvbGxiYXItZmFjZS1jb2xvcjogJFNDUk9MTF9CQVJfQ09MT1I7XFxyXFxuXFx0c2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogJFNDUk9MTF9CQVJfQ09MT1I7XFxyXFxuXFx0c2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkSUVfVFJBQ0tfQ09MT1I7XFxyXFxuXFx0c2Nyb2xsYmFyLWFycm93LWNvbG9yOiAkSUVfVFJBQ0tfQ09MT1I7XFxyXFxuXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdHdpZHRoOiAkQkFTSUNfU0NST0xMX1dJRFRIO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFNDUk9MTF9CQVJfQ09MT1I7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkVFJBQ0s7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XFxyXFxuXFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0aGVpZ2h0OiAwO1xcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGlkZGVuXCI6IFwidG9vbHRpcFNtYWxsX2hpZGRlbl9fMWttUnJcIixcblx0XCJ0ZXh0RW1waGFzaXNcIjogXCJ0b29sdGlwU21hbGxfdGV4dEVtcGhhc2lzX18xOUJQdlwiLFxuXHRcInRvb2x0aXBBcmVhXCI6IFwidG9vbHRpcFNtYWxsX3Rvb2x0aXBBcmVhX18yWEtNWlwiLFxuXHRcImJsYWNrXCI6IFwidG9vbHRpcFNtYWxsX2JsYWNrX19MQUdnZlwiLFxuXHRcImdyZWVuXCI6IFwidG9vbHRpcFNtYWxsX2dyZWVuX19BNjZ3alwiLFxuXHRcImJsdWVcIjogXCJ0b29sdGlwU21hbGxfYmx1ZV9fMXZBTVFcIixcblx0XCJ0ZXh0XCI6IFwidG9vbHRpcFNtYWxsX3RleHRfXzNDdDRaXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnRzX2NvbnRlbnRzX18yUlpEQSB7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbnRlbnRzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudHMge1xcclxcbiAgbWluLWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRlbnRzXCI6IFwiY29udGVudHNfY29udGVudHNfXzJSWkRBXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWRfZ3JpZEFyZWFfXzJTeEFDIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkX2NoZWNrYm94QXJlYV9fMTZNVW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIGJvdHRvbTogNDBweDtcXG59XFxuXFxuLmdyaWRfb25PZmZfXzE5V0luIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vZ3JpZC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyaWRBcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveEFyZWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogNDBweDtcXHJcXG4gIGJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9uT2ZmIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJncmlkQXJlYVwiOiBcImdyaWRfZ3JpZEFyZWFfXzJTeEFDXCIsXG5cdFwiY2hlY2tib3hBcmVhXCI6IFwiZ3JpZF9jaGVja2JveEFyZWFfXzE2TVVtXCIsXG5cdFwib25PZmZcIjogXCJncmlkX29uT2ZmX18xOVdJblwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDkzMTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdHZhciB0aHJldyA9IHRydWU7XG4vKioqKioqLyBcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fbmNjd3Bja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0ICovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRfX25jY3dwY2tfcmVxdWlyZV9fLmFiID0gX19kaXJuYW1lICsgXCIvXCI7LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oOTMxKTtcbi8qKioqKiovIH0pKClcbjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE3LjAuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gMHhlYWNjO1xuZXhwb3J0cy5Qcm9maWxlciA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xuZXhwb3J0cy5TdXNwZW5zZSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIGV4cG9ydHMuU3RyaWN0TW9kZSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgZXhwb3J0cy5Qcm9maWxlciA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIGV4cG9ydHMuU3VzcGVuc2UgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IDBcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBleHBvcnRzLlByb2ZpbGVyOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3RyaWN0TW9kZTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKCEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gX2Fzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gbnVsbCAmJiB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXJyb3IoJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICB2YXIgZGVmYXVsdEV4cG9ydCA9IG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEV4cG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cblxuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZC5fcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHJlbmRlci5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBleHBvcnRzLlByb2ZpbGVyIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IGV4cG9ydHMuU3RyaWN0TW9kZSB8fCB0eXBlID09PSBleHBvcnRzLlN1c3BlbnNlIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXcgKi9cblxuICAgIG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgbmV3IFNldChbZnJvemVuT2JqZWN0XSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXcgKi9cbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpbmVDaGFydC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmludGVyZmFjZSBCdXR0b25zUHJvcHMge1xuICBzbGlkZUluZGV4OiBudW1iZXI7XG4gIHNldFNsaWRlSW5kZXg6IChzbGlkZUluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIG1heFJvdzogbnVtYmVyO1xuICB2aWV3Q291bnQ6IG51bWJlcjtcbn1cblxuY29uc3QgQnV0dG9ucyA9ICh7IHNsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXgsIHZpZXdDb3VudCwgbWF4Um93IH06IEJ1dHRvbnNQcm9wcykgPT4ge1xuICBjb25zdCBpc092ZXIgPSB2aWV3Q291bnQgPCBtYXhSb3c7XG4gIGNvbnN0IHByZXZCdG5WaXNpYmxlID0gaXNPdmVyICYmIHNsaWRlSW5kZXggIT09IDA7XG4gIGNvbnN0IG5leHRCdG5WaXNpYmxlID0gaXNPdmVyICYmIHNsaWRlSW5kZXggPCBtYXhSb3cgLSB2aWV3Q291bnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3ByZXZCdG5WaXNpYmxlICYmIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnYnRuJywgJ2xlZnQnKX0gb25DbGljaz17KCkgPT4gc2V0U2xpZGVJbmRleChzbGlkZUluZGV4IC0gMSl9IHJvbGU9XCJidXR0b25cIiAvPlxuICAgICAgKX1cbiAgICAgIHtuZXh0QnRuVmlzaWJsZSAmJiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2J0bicsICdyaWdodCcpfSBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KHNsaWRlSW5kZXggKyAxKX0gcm9sZT1cImJ1dHRvblwiIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9ucztcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCB7IExpbmVDaGFydFNpemVUeXBlIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpbmVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIENvbHVtbnNQcm9wcyB7XHJcbiAgY29sdW1uczogc3RyaW5nW107XHJcbiAgdHlwZTogTGluZUNoYXJ0U2l6ZVR5cGU7XHJcbn1cclxuXHJcbmNvbnN0IENvbHVtbnMgPSAoeyBjb2x1bW5zLCB0eXBlIH06IENvbHVtbnNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNvbHVtbnNFbCA9IGNvbHVtbnNcclxuICAgIC5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcclxuICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2N4KCdjb2x1bW4nKX0+XHJcbiAgICAgICAge2NvbHVtbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApKVxyXG4gICAgLnJldmVyc2UoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY29sdW1uQXJlYScsIHR5cGUpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjb2x1bW5XcmFwJyl9Pntjb2x1bW5zRWx9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sdW1ucztcclxuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saW5lQ2hhcnQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xuXG5pbnRlcmZhY2UgRGl2aWRlclByb3BzIHtcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuY29uc3QgRGl2aWRlciA9ICh7IHZhbHVlIH06IERpdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBkaXZpZGVyRWwgPSBuZXcgQXJyYXkodmFsdWUpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2N4KCdkaXZpZGVyJyl9IC8+KTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGl2aWRlckFyZWEnKX0+e2RpdmlkZXJFbH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyO1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpbmVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YSwgRURHRV9TUEFDRSwgTGluZUNoYXJ0Q29sb3JzVHlwZSwgTGluZUNoYXJ0U2l6ZVR5cGUsIExpbmVDb2xvcnMsIFNoYXBlQ29sb3JzIH0gZnJvbSAnLi9kYXRhJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGluZVByb3BzIHtcclxuICBkYXRhOiBDaGFydERhdGFbXTtcclxuICB0eXBlOiBMaW5lQ2hhcnRTaXplVHlwZTtcclxuICBjb2xvcnM6IExpbmVDaGFydENvbG9yc1R5cGU7XHJcbiAgcm93czogc3RyaW5nW107XHJcbiAgY29sdW1uSGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTGluZSA9ICh7IGRhdGEsIHR5cGUsIGNvbG9ycywgcm93cywgY29sdW1uSGVpZ2h0LCB3aWR0aCwgaGVpZ2h0IH06IExpbmVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvd1dpZHRoID0gKHdpZHRoIC8gKChyb3dzLmxlbmd0aCAtIDEpICsgKEVER0VfU1BBQ0VbdHlwZV0gKiAyKSkpO1xyXG4gIGNvbnN0IGdldFggPSAodmFsdWU6IG51bWJlcikgPT4gKEVER0VfU1BBQ0VbdHlwZV0gKiByb3dXaWR0aCkgKyAodmFsdWUgKiByb3dXaWR0aCk7XHJcbiAgY29uc3QgZ2V0WSA9ICh2YWx1ZTogbnVtYmVyKSA9PiBoZWlnaHQgLSBjb2x1bW5IZWlnaHQgKiB2YWx1ZTtcclxuICBjb25zdCBnZXRDaGFyID0gKHZhbHVlOiBudW1iZXIpID0+ICh2YWx1ZSA9PT0gZGF0YS5sZW5ndGggLSAxID8gJycgOiAnTCcpO1xyXG4gIGNvbnN0IGdldFBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBgJHtnZXRYKHgpfSAke2dldFkoeSl9YDtcclxuICBjb25zdCBzdHJva2UgPSBMaW5lQ29sb3JzW2NvbG9yc11bdHlwZV07XHJcbiAgY29uc3QgZmlsbCA9IFNoYXBlQ29sb3JzW2NvbG9yc107XHJcblxyXG4gIGNvbnN0IGdldExpbmVEYXRhID0gKCkgPT4gZGF0YS5yZWR1Y2UoKHByZXYsIHsgY29sdW1uIH0sIGkpID0+IGAke3ByZXZ9ICR7Z2V0UG9pbnQoaSwgY29sdW1uKX0gJHtnZXRDaGFyKGkpfWAsICdNJyk7XHJcblxyXG4gIGNvbnN0IGdldFNoYXBlRGF0YSA9ICgpID0+XHJcbiAgICBkYXRhLnJlZHVjZSgocHJldiwgeyBjb2x1bW4gfSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhcGUgPSBgTCR7Z2V0WChpKX0gJHtoZWlnaHR9IEwke3Jvd1dpZHRoICogRURHRV9TUEFDRVt0eXBlXX0gJHtoZWlnaHR9IFpgO1xyXG4gICAgICAgIHJldHVybiBgJHtwcmV2fSAke2dldFBvaW50KGksIGNvbHVtbil9ICR7c2hhcGV9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYCR7cHJldn0gJHtnZXRQb2ludChpLCBjb2x1bW4pfSAke2dldENoYXIoaSl9YDtcclxuICAgIH0sICdNJyk7XHJcblxyXG4gIGNvbnN0IGdldERhdGFMaW5lRWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICA8cGF0aCBkPXtnZXRMaW5lRGF0YSgpfSBzdHJva2U9e3N0cm9rZX0gLz5cclxuICAgICAgICA8cGF0aCBkPXtnZXRTaGFwZURhdGEoKX0gZmlsbD17ZmlsbH0gZmlsbE9wYWNpdHk9ezAuMn0gLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goJ2xpbmVBcmVhJyl9PntnZXREYXRhTGluZUVsKCl9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZTtcclxuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpbmVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YSwgRURHRV9TUEFDRSwgTGluZUNoYXJ0Q29sb3JzVHlwZSwgTGluZUNoYXJ0U2l6ZVR5cGUgfSBmcm9tICcuL2RhdGEnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBQb2ludHNQcm9wcyB7XHJcbiAgZGF0YTogQ2hhcnREYXRhW107XHJcbiAgdHlwZTogTGluZUNoYXJ0U2l6ZVR5cGU7XHJcbiAgY29sb3JzOiBMaW5lQ2hhcnRDb2xvcnNUeXBlO1xyXG4gIG9uSW5kZXg6IG51bWJlciB8IG51bGw7XHJcbiAgaGFuZGxlQ2xpY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGNvbHVtbkhlaWdodDogbnVtYmVyO1xyXG4gIG1heFJvdzogbnVtYmVyO1xyXG4gIGxpbmVUcmlnZ2VyOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBwb2ludHNBbmltYXRpb25EZWxheSA9IFswLCAwLjEsIDAuMiwgMC4zLCAwLjQsIDAuNDUsIDAuNSwgMC41NSwgMC42LCAwLjY1LCAwLjcsIDAuNzVdO1xyXG5cclxuY29uc3QgUG9pbnRzID0gKHsgZGF0YSwgdHlwZSwgY29sb3JzLCBvbkluZGV4LCBoYW5kbGVDbGljaywgY29sdW1uSGVpZ2h0LCBtYXhSb3csIGxpbmVUcmlnZ2VyIH06IFBvaW50c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgZ2V0RGF0YUVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YUVsID0gZGF0YS5tYXAoKGQsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgY29sdW1uLCB0b29sVGlwIH0gPSBkO1xyXG4gICAgICBjb25zdCBpc09uID0gaW5kZXggPT09IG9uSW5kZXg7XHJcblxyXG4gICAgICBjb25zdCBnZXRMaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNPbikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2xpbmUnLCB7IGZhZGVJbjogbGluZVRyaWdnZXIgfSwgdHlwZSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtjb2x1bW4gKiBjb2x1bW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtwb2ludHNBbmltYXRpb25EZWxheVtpbmRleF19c2AsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCdkYXRhV3JhcCcsIGNvbG9ycywgeyBvbjogaXNPbiB9KX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbmRleCA9PT0gMCA/IGAke0VER0VfU1BBQ0VbdHlwZV0gKiAxMDB9JWAgOiAnMTAwJScsXHJcbiAgICAgICAgICAgIHpJbmRleDogZGF0YS5sZW5ndGggLSBpbmRleCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2dldExpbmUoKX1cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2RhdGFCdG4nLCB0eXBlKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke2NvbHVtbiAqIGNvbHVtbkhlaWdodH1weClgLFxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtwb2ludHNBbmltYXRpb25EZWxheVtpbmRleF19c2AsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgndG9vbHRpcEFyZWEnLCB7IG9uOiBpc09uIH0pfT57dG9vbFRpcH08L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGVtcHR5RGF0YUVsID0gbmV3IEFycmF5KG1heFJvdyAtIGRhdGEubGVuZ3RoKVxyXG4gICAgICAuZmlsbChudWxsKVxyXG4gICAgICAubWFwKChfLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2N4KCdkYXRhV3JhcCcsICdlbXB0eScpfSAvPik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7ZGF0YUVsfVxyXG4gICAgICAgIHtlbXB0eURhdGFFbH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RhdGFXcmFwJywgJ2VtcHR5Jyl9IHN0eWxlPXt7IHdpZHRoOiBgJHtFREdFX1NQQUNFW3R5cGVdICogMTAwfSVgIH19IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KCdwb2ludHNBcmVhJyl9PntnZXREYXRhRWwoKX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludHM7XHJcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saW5lQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBFREdFX1NQQUNFLCBMaW5lQ2hhcnRTaXplVHlwZSB9IGZyb20gJy4vZGF0YSc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIFJvd3NQcm9wcyB7XHJcbiAgcm93czogc3RyaW5nW107XHJcbiAgdHlwZTogTGluZUNoYXJ0U2l6ZVR5cGU7XHJcbiAgbWF4Um93OiBudW1iZXI7XHJcbiAgb25JbmRleDogbnVtYmVyIHwgbnVsbDtcclxuICB0YWJsZVdpZHRoV2hpdFVuaXQ6IHN0cmluZztcclxuICB0cmFuc2xhdGVYOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJvd3MgPSAoeyByb3dzLCB0eXBlLCBtYXhSb3csIG9uSW5kZXgsIHRhYmxlV2lkdGhXaGl0VW5pdCwgdHJhbnNsYXRlWCB9OiBSb3dzUHJvcHMpID0+IHtcclxuICBjb25zdCBnZXRSb3dzRWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3dFbCA9IHJvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ3JvdycsIHsgb246IGluZGV4ID09PSBvbkluZGV4IH0sIHR5cGUpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGluZGV4ID09PSAwID8gYCR7RURHRV9TUEFDRVt0eXBlXSAqIDEwMH0lYCA6ICcxMDAlJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3goJ3Jvd1RleHQnKX0+XHJcbiAgICAgICAgICAgIHtyb3d9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBlbXB0eVJvd0VsID0gbmV3IEFycmF5KG1heFJvdyAtIHJvd3MubGVuZ3RoKVxyXG4gICAgICAuZmlsbChudWxsKVxyXG4gICAgICAubWFwKChfLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2N4KCdyb3cnKX0gLz4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3Jvd0VsfVxyXG4gICAgICAgIHtlbXB0eVJvd0VsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgncm93Jyl9IHN0eWxlPXt7IHdpZHRoOiBgJHtFREdFX1NQQUNFW3R5cGVdICogMTAwfSVgIH19IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdyb3dBcmVhJyl9IHN0eWxlPXt7IHdpZHRoOiB0YWJsZVdpZHRoV2hpdFVuaXQsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdyb3dXcmFwJyl9PntnZXRSb3dzRWwoKX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3dzO1xyXG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBMaW5lQ2hhcnRDb2xvcnNUeXBlID0gJ2JsYWNrJyB8ICdncmVlbicgfCAnYmx1ZSc7XHJcbmV4cG9ydCB0eXBlIExpbmVDaGFydFNpemVUeXBlID0gJ3NtYWxsJyB8ICdsYXJnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRURHRV9TUEFDRSA9IHtcclxuICBzbWFsbDogMS4yLFxyXG4gIGxhcmdlOiAwLjY2LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lQ29sb3JzID0ge1xyXG4gIGJsYWNrOiB7XHJcbiAgICBzbWFsbDogJyM5RkE0QUInLFxyXG4gICAgbGFyZ2U6ICcjNDQ0NzRCJyxcclxuICB9LFxyXG4gIGdyZWVuOiB7XHJcbiAgICBzbWFsbDogJyM5MkU2QTMnLFxyXG4gICAgbGFyZ2U6ICcjNTJDNTY0JyxcclxuICB9LFxyXG4gIGJsdWU6IHtcclxuICAgIHNtYWxsOiAnIzhCQTNERicsXHJcbiAgICBsYXJnZTogJyMyQjUzQUUnLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNoYXBlQ29sb3JzID0ge1xyXG4gIGJsYWNrOiAnI0NGRDFENScsXHJcbiAgZ3JlZW46ICcjRTBGOUU0JyxcclxuICBibHVlOiAnI0MzRDFFRicsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBjb2x1bW46IG51bWJlcjtcclxuICB0b29sVGlwPzogUmVhY3RFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9saW5lQ2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYXJ0RGF0YSwgTGluZUNoYXJ0Q29sb3JzVHlwZSwgTGluZUNoYXJ0U2l6ZVR5cGUgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgUm93cyBmcm9tICcuL1Jvd3MnO1xyXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuL0J1dHRvbnMnO1xyXG5pbXBvcnQgQ29sdW1ucyBmcm9tICcuL0NvbHVtbnMnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICcuL0RpdmlkZXInO1xyXG5pbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xyXG5pbXBvcnQgUG9pbnRzIGZyb20gJy4vUG9pbnRzJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgTGluZUNoYXJ0UHJvcHMge1xyXG4gIGNvbG9ycz86IExpbmVDaGFydENvbG9yc1R5cGU7XHJcbiAgdHlwZT86IExpbmVDaGFydFNpemVUeXBlO1xyXG4gIHZpZXdDb3VudDogbnVtYmVyO1xyXG4gIHJvd3M6IHN0cmluZ1tdO1xyXG4gIGNvbHVtbnM6IHN0cmluZ1tdO1xyXG4gIGRhdGE6IENoYXJ0RGF0YVtdO1xyXG4gIG9uSW5kZXg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IExpbmVDaGFydCA9ICh7IGNvbG9ycyA9ICdibGFjaycsIHR5cGUgPSAnbGFyZ2UnLCB2aWV3Q291bnQsIHJvd3MsIGNvbHVtbnMsIGRhdGEsIG9uSW5kZXg6IG9uSWR4IH06IExpbmVDaGFydFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW29uSW5kZXgsIHNldE9uSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3NsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbcm93V2lkdGgsIHNldFJvd1dpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW2NvbHVtbkhlaWdodCwgc2V0Q29sdW1uSGVpZ2h0XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW3RhYmxlV2lkdGgsIHNldFRhYmxlV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICBjb25zdCBbbGluZVRyaWdnZXIsIHNldExpbmVUcmlnZ2VyXSA9IHVzZVN0YXRlKHRydWUpOyAvLyDsoJAg7JWE656YIOyEuOuhnOyEoCDstZzstIgg7JWg64uI66mU7J207IWYIOyLpO2WieyaqVxyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgdGFibGVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgbWF4Um93ID0gTWF0aC5tYXgocm93cy5sZW5ndGgsIGRhdGEubGVuZ3RoKTtcclxuICBjb25zdCBtYXhDb2x1bW5zID0gTWF0aC5tYXgoY29sdW1ucy5sZW5ndGgsIGRhdGEubGVuZ3RoIC0gMSk7XHJcbiAgY29uc3QgaXNPdmVyID0gdmlld0NvdW50IDwgbWF4Um93O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG9uSWR4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgaWR4ID0gb25JZHggPiBtYXhDb2x1bW5zID8gbWF4Q29sdW1ucyA6IG9uSWR4O1xyXG4gICAgICBjb25zdCBzbGlkZUluZGV4ID0gaWR4IC0gdmlld0NvdW50ICsgMTtcclxuICAgICAgc2V0T25JbmRleChpZHggPCAwID8gMCA6IGlkeCk7XHJcbiAgICAgIHNldFNsaWRlSW5kZXgoc2xpZGVJbmRleCA8IDAgPyAwIDogc2xpZGVJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYXJ0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2V0Um93V2lkdGgoY2hhcnRSZWYuY3VycmVudC5jbGllbnRXaWR0aCAvICh2aWV3Q291bnQgKyAxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhYmxlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgc2V0Q29sdW1uSGVpZ2h0KHRhYmxlUmVmLmN1cnJlbnQ/LmNsaWVudEhlaWdodCAvIChjb2x1bW5zLmxlbmd0aCAtIDEpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRUYWJsZVdpZHRoKHRhYmxlUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gIH0sIFt0YWJsZVJlZi5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IHRhYmxlV2lkdGhXaGl0VW5pdCA9IGlzT3ZlciA/IGAkeyhtYXhSb3cgKyAxKSAqIHJvd1dpZHRofXB4YCA6ICcxMDAlJztcclxuICBjb25zdCB0cmFuc2xhdGVYID0gaXNPdmVyID8gYHRyYW5zbGF0ZVgoJHstKHNsaWRlSW5kZXggKiByb3dXaWR0aCl9cHgpYCA6ICd0cmFuc2xhdGVYKDApJztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0TGluZVRyaWdnZXIoZmFsc2UpO1xyXG4gICAgc2V0T25JbmRleChpbmRleCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdsaW5lQ2hhcnRBcmVhJyl9PlxyXG4gICAgICB7LyogQ29sdW1ucyDsmIHsl60gKi99XHJcbiAgICAgIDxDb2x1bW5zIGNvbHVtbnM9e2NvbHVtbnN9IHR5cGU9e3R5cGV9Lz5cclxuXHJcbiAgICAgIDxkaXYgcmVmPXtjaGFydFJlZn0gY2xhc3NOYW1lPXtjeCgnY2hhcnRXcmFwJywgdHlwZSl9PlxyXG4gICAgICAgIDxkaXYgcmVmPXt0YWJsZVJlZn0gY2xhc3NOYW1lPXtjeCgndGFibGVBcmVhJyl9IHN0eWxlPXt7IHdpZHRoOiB0YWJsZVdpZHRoV2hpdFVuaXQsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCB9fT5cclxuICAgICAgICAgIHsvKiDqsIDroZwg6rWs67aE7ISgIOyYgeyXrSAqL31cclxuICAgICAgICAgIDxEaXZpZGVyIHZhbHVlPXtjb2x1bW5zLmxlbmd0aCAtIDF9IC8+XHJcblxyXG4gICAgICAgICAgey8qIOq6vuydgCDshKAsIOuptCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBjb2xvcnM9e2NvbG9yc31cclxuICAgICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAgICAgY29sdW1uSGVpZ2h0PXtjb2x1bW5IZWlnaHR9XHJcbiAgICAgICAgICAgIHdpZHRoPXt0YWJsZVdpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e3RhYmxlUmVmLmN1cnJlbnQ/LmNsaWVudEhlaWdodCA/PyAwfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7Lyog7KCQLCDtiLTtjIEsIOyEuOuhnCDshKAg7JiB7JetICovfVxyXG4gICAgICAgICAgPFBvaW50c1xyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBjb2xvcnM9e2NvbG9yc31cclxuICAgICAgICAgICAgb25JbmRleD17b25JbmRleH1cclxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBjb2x1bW5IZWlnaHQ9e2NvbHVtbkhlaWdodH1cclxuICAgICAgICAgICAgbWF4Um93PXttYXhSb3d9XHJcbiAgICAgICAgICAgIGxpbmVUcmlnZ2VyPXtsaW5lVHJpZ2dlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBSb3dzIOyYgeyXrSAqL31cclxuICAgICAgICA8Um93c1xyXG4gICAgICAgICAgcm93cz17cm93c31cclxuICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICBtYXhSb3c9e21heFJvd31cclxuICAgICAgICAgIG9uSW5kZXg9e29uSW5kZXh9XHJcbiAgICAgICAgICB0YWJsZVdpZHRoV2hpdFVuaXQ9e3RhYmxlV2lkdGhXaGl0VW5pdH1cclxuICAgICAgICAgIHRyYW5zbGF0ZVg9e3RyYW5zbGF0ZVh9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIOuyhO2KvCDsmIHsl60gKi99XHJcbiAgICAgICAgPEJ1dHRvbnMgc2xpZGVJbmRleD17c2xpZGVJbmRleH0gc2V0U2xpZGVJbmRleD17c2V0U2xpZGVJbmRleH0gbWF4Um93PXttYXhSb3d9IHZpZXdDb3VudD17dmlld0NvdW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbGluZUNoYXJ0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9saW5lQ2hhcnQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9saW5lQ2hhcnQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90b29sdGlwLm1vZHVsZS5zY3NzJztcblxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcblxudHlwZSBUb29sVGlwVHlwZSA9ICdibGFjaycgfCAnZ3JlZW4nIHwgJ2JsdWUnO1xuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgdHlwZT86IFRvb2xUaXBUeXBlO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5jb25zdCBUb29sdGlwID0gKHsgdHlwZSA9ICdibGFjaycsIHZhbHVlIH06IFRvb2x0aXBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgndG9vbHRpcEFyZWEnLCB0eXBlKX0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd0ZXh0Jyl9Pnt2YWx1ZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi90b29sdGlwLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi90b29sdGlwLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vdG9vbHRpcC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdG9vbHRpcFNtYWxsLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIFRvb2xUaXBUeXBlID0gJ2JsYWNrJyB8ICdncmVlbicgfCAnYmx1ZSc7XHJcblxyXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcclxuICB0eXBlPzogVG9vbFRpcFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVG9vbHRpcFNtYWxsID0gKHsgdHlwZSA9ICdibGFjaycsIHZhbHVlIH06IFRvb2x0aXBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3Rvb2x0aXBBcmVhJywgdHlwZSl9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd0ZXh0Jyl9Pnt2YWx1ZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFNtYWxsO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3Rvb2x0aXBTbWFsbC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vdG9vbHRpcFNtYWxsLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vdG9vbHRpcFNtYWxsLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vY29udGVudHMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2NvbnRlbnRzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vY29udGVudHMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRlbnRzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBDb250ZW50cyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50cztcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9ncmlkLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9ncmlkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vZ3JpZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ3JpZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7dXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBSQVRJTyA9IDE7XHJcblxyXG5pbnRlcmZhY2UgR3JpZFByb3BzIHtcclxuICBjYW52YXNXaWR0aD86IG51bWJlcjtcclxuICBjYW52YXNIZWlnaHQ/OiBudW1iZXI7XHJcbiAgc3RhdGU/OiBib29sZWFuO1xyXG4gIHNpemU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEdyaWQgPSAoe2NhbnZhc1dpZHRoID0gMzAwMCwgY2FudmFzSGVpZ2h0ID0gMjAwMCwgc3RhdGUgPSBmYWxzZSwgc2l6ZSA9IDUwfTogR3JpZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbY3R4LCBzZXRDdHhdID0gdXNlU3RhdGU8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAvLyBzZXR1cCBjYW52YXMgYW5kIHNldCBjb250ZXh0XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY2FudmFzUmVmKSByZXR1cm47XHJcbiAgICBjb25zdCByZW5kZXJDdHggPSBjYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBpZiAocmVuZGVyQ3R4KSByZXNldChyZW5kZXJDdHgpO1xyXG4gIH0sIFtjYW52YXNIZWlnaHQsIGNhbnZhc1dpZHRoXSk7XHJcblxyXG4gIC8vIGRyYXdcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGN0eCkge1xyXG4gICAgICBjb25zdCBzdG9yZWRUcmFuc2Zvcm0gPSBjdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICBjdHguc2V0VHJhbnNmb3JtKHN0b3JlZFRyYW5zZm9ybSk7XHJcblxyXG4gICAgICBkcmF3R3JpZCgpO1xyXG4gICAgfVxyXG4gIH0sIFtcclxuICAgIGN0eCxcclxuICBdKTtcclxuXHJcbiAgLy8gcmVzZXRcclxuICBjb25zdCByZXNldCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gICAgaWYgKCFjdHgpIHJldHVybjtcclxuICAgIGN0eC5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCAqIFJBVElPO1xyXG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKiBSQVRJTztcclxuICAgIGN0eC5zY2FsZShSQVRJTywgUkFUSU8pO1xyXG5cclxuICAgIC8vIHJlc2V0IHN0YXRlIGFuZCByZWZzXHJcbiAgICBzZXRDdHgoY3R4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IEdSSURfU0NBTEUgPSA1MDtcclxuICAgIGNvbnN0IG5YID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAqIEdSSURfU0NBTEUgLyBzaXplKSAtIDI7XHJcbiAgICBjb25zdCBuWSA9IE1hdGguZmxvb3IoY2FudmFzSGVpZ2h0ICogR1JJRF9TQ0FMRSAvIHNpemUpIC0gMjtcclxuICAgIGNvbnN0IHBYID0gY2FudmFzV2lkdGggLSBuWCAqIHNpemU7XHJcbiAgICBjb25zdCBwWSA9IGNhbnZhc0hlaWdodCAtIG5ZICogc2l6ZTtcclxuXHJcbiAgICBjb25zdCBwTCA9IE1hdGguY2VpbChwWCAvIDIpIC0gMC41O1xyXG4gICAgY29uc3QgcFQgPSBNYXRoLmNlaWwocFkgLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBSID0gY2FudmFzV2lkdGggLSBuWCAqIHNpemUgLSBwTDtcclxuICAgIGNvbnN0IHBCID0gY2FudmFzSGVpZ2h0IC0gblkgKiBzaXplIC0gcFQ7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmMmYyZjInO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgZm9yIChsZXQgeCA9IHBMOyB4IDw9IGNhbnZhc1dpZHRoIC0gcFI7IHggKz0gc2l6ZSkge1xyXG4gICAgICBjdHgubW92ZVRvKHgsIHBUKTtcclxuICAgICAgY3R4LmxpbmVUbyh4LCBjYW52YXNIZWlnaHQgLSBwQik7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB5ID0gcFQ7IHkgPD0gY2FudmFzSGVpZ2h0IC0gcEI7IHkgKz0gc2l6ZSkge1xyXG4gICAgICBjdHgubW92ZVRvKHBMLCB5KTtcclxuICAgICAgY3R4LmxpbmVUbyhjYW52YXNXaWR0aCAtIHBSLCB5KTtcclxuICAgIH1cclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2dyaWRBcmVhJyl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2NoZWNrYm94QXJlYScpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNoZWNrZWQ9e3Zpc2libGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRWaXNpYmxlKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgnb25PZmYnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuPmdyaWQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGNhbnZhc1xyXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxyXG4gICAgICAgIHdpZHRoPXtjYW52YXNXaWR0aCAqIFJBVElPfVxyXG4gICAgICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0ICogUkFUSU99XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IHZpc2libGUgPyAnZmxleCcgOiAnbm9uZScsXHJcbiAgICAgICAgICB3aWR0aDogYCR7Y2FudmFzV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHtjYW52YXNIZWlnaHR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZDsiLCJjb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2xheW91dCc+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IExpbmVDaGFydCBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydFwiO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC90b29sdGlwXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAY29tcG9uZW50cy9ncmlkXCI7XHJcbmltcG9ydCB7Q2hhcnREYXRhfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L2RhdGFcIjtcclxuaW1wb3J0IFRvb2x0aXBTbWFsbCBmcm9tIFwic3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC90b29sdGlwU21hbGxcIjtcclxuXHJcbmNvbnN0IExpbmVDaGFydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0Q29sdW1ucyA9ICgpID0+IFsnMOuqhScsICcxMDDrqoUnLCAnMjAw66qFJywgJzMwMOuqhScsICc0MDDrqoUnLCAnNTAw66qFJywgJzYwMOuqhSddO1xyXG5cclxuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gW1xyXG4gICAgJzIxLjAxJywgJzIxLjAyJywgJzIxLjAzJywgJzIxLjA0JyxcclxuICAgICcyMS4wNScsICcyMS4wNicsICcyMS4wNycsICcyMS4wOCcsXHJcbiAgICAnMjEuMDknLCAnMjEuMTAnLCAnMjEuMTEnLCAnMjEuMTInLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdldE1vYmlsZVJvd3MgPSAoKSA9PiBbXHJcbiAgICAnJywgJycsICcyMS4wMycsICcnLFxyXG4gICAgJycsICcyMS4wNicsICcnLCAnJyxcclxuICAgICcyMS4wOScsICcnLCAnJywgJzIxLjEyJyxcclxuICBdO1xyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGEgPSAodHlwZSk6IENoYXJ0RGF0YVtdID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIDE5MCwgMjAwLCAyMTAsIDIyMCwgMjYwLCAyODAsIDMwMCwgMzEwLCAzMjAsIDMzMCwgMzgwLCA0MDNcclxuICAgIF0ubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbHVtbjogdmFsdWUgLyAxMDAsXHJcbiAgICAgICAgdG9vbFRpcDogPFRvb2x0aXAgdmFsdWU9e2DstJ0gJHt2YWx1ZX3rqoVgfSB0eXBlPXt0eXBlfS8+LFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENoYXJ0RGF0YTIgPSAodHlwZSk6IENoYXJ0RGF0YVtdID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIDU1LCA2MCwgNjUsIDcwLCA3NSwgODAsIDgwLCA4MCwgODAsIDg1LCA5MCwgOTVcclxuICAgIF0ubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbHVtbjogdmFsdWUgLyAxMDAsXHJcbiAgICAgICAgdG9vbFRpcDogPFRvb2x0aXAgdmFsdWU9e2DsnoXsgqzsnpA6ICR7dmFsdWV966qFYH0gdHlwZT17dHlwZX0vPixcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGEzID0gKHR5cGUpOiBDaGFydERhdGFbXSA9PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICA1NSwgNjAsIDY1LCA3MCwgNzUsIDgwLCA4MCwgODAsIDgwLCA4NSwgOTAsIDk1XHJcbiAgICBdLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2x1bW46IHZhbHVlIC8gMTAwLFxyXG4gICAgICAgIHRvb2xUaXA6IDxUb29sdGlwIHZhbHVlPXtg7Ye07IKs7J6QOiAke3ZhbHVlfeuqhWB9IHR5cGU9e3R5cGV9Lz4sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhcnREYXRhU21hbGwgPSAodHlwZSk6IENoYXJ0RGF0YVtdID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIDE5MCwgMjAwLCAyMTAsIDIyMCwgMjYwLCAyODAsIDMwMCwgMzEwLCAzMjAsIDMzMCwgMzgwLCA0MDNcclxuICAgIF0ubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbHVtbjogdmFsdWUgLyAxMDAsXHJcbiAgICAgICAgdG9vbFRpcDogPFRvb2x0aXBTbWFsbCB2YWx1ZT17YOy0nSAke3ZhbHVlfeuqhWB9IHR5cGU9e3R5cGV9Lz4sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxHcmlkIHNpemU9ezUwfS8+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzEwMHB4J319PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTQwMHB4JywgaGVpZ2h0OiAnNDg0cHgnfX0+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICBjb2xvcnM9eydibGFjayd9XHJcbiAgICAgICAgICAgICAgcm93cz17Z2V0Um93cygpfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e2dldENvbHVtbnMoKX1cclxuICAgICAgICAgICAgICBkYXRhPXtnZXRDaGFydERhdGEoJ2JsYWNrJyl9XHJcbiAgICAgICAgICAgICAgb25JbmRleD17MTF9XHJcbiAgICAgICAgICAgICAgdmlld0NvdW50PXsxMn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTEwMHB4JywgaGVpZ2h0OiAnMzg0cHgnLCBtYXJnaW5Ub3A6ICcyNHB4J319PlxyXG4gICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgY29sb3JzPXsnZ3JlZW4nfVxyXG4gICAgICAgICAgICAgIHJvd3M9e2dldFJvd3MoKX1cclxuICAgICAgICAgICAgICBjb2x1bW5zPXtnZXRDb2x1bW5zKCl9XHJcbiAgICAgICAgICAgICAgZGF0YT17Z2V0Q2hhcnREYXRhMignZ3JlZW4nKX1cclxuICAgICAgICAgICAgICBvbkluZGV4PXs1fVxyXG4gICAgICAgICAgICAgIHZpZXdDb3VudD17MTJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzgwMHB4JywgaGVpZ2h0OiAnMjg0cHgnLCBtYXJnaW5Ub3A6ICcyNHB4J319PlxyXG4gICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgY29sb3JzPXsnYmx1ZSd9XHJcbiAgICAgICAgICAgICAgcm93cz17Z2V0Um93cygpfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e2dldENvbHVtbnMoKX1cclxuICAgICAgICAgICAgICBkYXRhPXtnZXRDaGFydERhdGEzKCdibHVlJyl9XHJcbiAgICAgICAgICAgICAgb25JbmRleD17MH1cclxuICAgICAgICAgICAgICB2aWV3Q291bnQ9ezEyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnNDhweCd9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMzQwcHgnLCBoZWlnaHQ6ICcyMDVweCd9fT5cclxuICAgICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICBjb2xvcnM9eydibGFjayd9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXsnc21hbGwnfVxyXG4gICAgICAgICAgICAgICAgcm93cz17Z2V0TW9iaWxlUm93cygpfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17Z2V0Q2hhcnREYXRhU21hbGwoJ2JsYWNrJyl9XHJcbiAgICAgICAgICAgICAgICBvbkluZGV4PXswfVxyXG4gICAgICAgICAgICAgICAgdmlld0NvdW50PXsxMn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMzQwcHgnLCBoZWlnaHQ6ICcyMDVweCcsIG1hcmdpbkxlZnQ6ICcyNHB4J319PlxyXG4gICAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICAgIGNvbG9ycz17J2dyZWVuJ31cclxuICAgICAgICAgICAgICAgIHR5cGU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgICByb3dzPXtnZXRNb2JpbGVSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtnZXRDb2x1bW5zKCl9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtnZXRDaGFydERhdGFTbWFsbCgnZ3JlZW4nKX1cclxuICAgICAgICAgICAgICAgIG9uSW5kZXg9ezN9XHJcbiAgICAgICAgICAgICAgICB2aWV3Q291bnQ9ezEyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICczNDBweCcsIGhlaWdodDogJzIwNXB4JywgbWFyZ2luTGVmdDogJzI0cHgnfX0+XHJcbiAgICAgICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICAgICAgY29sb3JzPXsnYmx1ZSd9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXsnc21hbGwnfVxyXG4gICAgICAgICAgICAgICAgcm93cz17Z2V0TW9iaWxlUm93cygpfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17Z2V0Q2hhcnREYXRhU21hbGwoJ2JsdWUnKX1cclxuICAgICAgICAgICAgICAgIG9uSW5kZXg9ezExfVxyXG4gICAgICAgICAgICAgICAgdmlld0NvdW50PXsxMn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcblxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=