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
___CSS_LOADER_EXPORT___.push([module.i, ".lineChart_hidden__JM49L {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.lineChart_textEmphasis__2B8Le {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.lineChart_lineChartArea__1dbEW {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.lineChart_columnArea__3-xue {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: calc(100% - 29px + 18px);\n  transform: translateY(-9px);\n  text-align: right;\n}\n.lineChart_columnArea__3-xue .lineChart_columnWrap__25bZE {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.lineChart_columnArea__3-xue .lineChart_column__1Au4M {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100%;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n  white-space: nowrap;\n}\n\n.lineChart_chartWrap__10cbn {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-left: 32px;\n}\n.lineChart_chartWrap__10cbn .lineChart_tableArea__2WYS3 {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 29px);\n  z-index: 50;\n}\n.lineChart_chartWrap__10cbn .lineChart_dividerArea__2sHfy {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid #9fa4ab;\n}\n.lineChart_chartWrap__10cbn .lineChart_dividerArea__2sHfy .lineChart_divider__3CViM {\n  width: 100%;\n  height: 100%;\n  border-top: 1px solid #e7e8ea;\n}\n.lineChart_chartWrap__10cbn .lineChart_lineArea__344B6 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  animation: lineChart_slide__14rNl 1s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  animation-delay: 0.2s;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_line__30BVf {\n  position: absolute;\n  bottom: 0;\n  right: -1px;\n  display: block;\n  border-right: 2px solid;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_line__30BVf.lineChart_fadeIn__JXljJ {\n  animation: lineChart_fadeIn__JXljJ 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 {\n  position: absolute;\n  bottom: -8px;\n  right: -9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  animation: lineChart_fadeIn__JXljJ 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58::after {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  content: \"\";\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 .lineChart_tooltipArea__2-TtL {\n  position: absolute;\n  left: 100%;\n  display: none;\n  opacity: 0;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 .lineChart_tooltipArea__2-TtL::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -0.5px);\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 7px solid;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 .lineChart_tooltipArea__2-TtL.lineChart_top__2U7OK {\n  transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px));\n  animation: lineChart_moveBoxTop__2kI-k 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 .lineChart_tooltipArea__2-TtL.lineChart_left__3_MDi {\n  transform: translate(10px, 7.5px);\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf .lineChart_dataBtn__mhl58 .lineChart_tooltipArea__2-TtL.lineChart_on__LMVj2 {\n  display: block;\n  animation: lineChart_fadeIn__JXljJ 0.7s cubic-bezier(0.4, 0, 0.2, 1), lineChart_moveBoxTop__2kI-k 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation-fill-mode: forwards;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_line__30BVf {\n  border-color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_dataBtn__mhl58 {\n  background-color: #e7e8ea;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_dataBtn__mhl58::after {\n  background-color: #44474b;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP .lineChart_tooltipArea__2-TtL::after {\n  border-top-color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58 {\n  background-color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_black__176zP.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58::after {\n  background-color: #fff;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_line__30BVf {\n  border-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_dataBtn__mhl58 {\n  background-color: #e0f9e4;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_dataBtn__mhl58::after {\n  background-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb .lineChart_tooltipArea__2-TtL::after {\n  border-top-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58 {\n  background-color: #52c564;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_green__3QMcb.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58::after {\n  background-color: #fff;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_line__30BVf {\n  border-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_dataBtn__mhl58 {\n  background-color: #c3d1ef;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_dataBtn__mhl58::after {\n  background-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr .lineChart_tooltipArea__2-TtL::after {\n  border-top-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58 {\n  background-color: #2b53ae;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_blue__2mrWr.lineChart_on__LMVj2 .lineChart_dataBtn__mhl58::after {\n  background-color: #fff;\n}\n.lineChart_chartWrap__10cbn .lineChart_pointsArea__nt-Km .lineChart_dataWrap__1dYmf.lineChart_empty__7D7SI {\n  border: none;\n}\n.lineChart_chartWrap__10cbn .lineChart_rowArea__2qJMn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 18px;\n  margin-top: 12px;\n  z-index: 40;\n}\n.lineChart_chartWrap__10cbn .lineChart_rowWrap__1VCRr {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.01em;\n  color: #6a6a6a;\n  text-align: center;\n  transform: translateX(50%);\n  cursor: pointer;\n}\n.lineChart_chartWrap__10cbn .lineChart_row__TwRbB.lineChart_on__LMVj2 {\n  font-weight: 700;\n  color: #121619;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6 {\n  position: absolute;\n  bottom: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border: 1px solid #e7e8ea;\n  border-radius: 50%;\n  z-index: 100;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6::after {\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_left__3_MDi {\n  left: 14px;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_left__3_MDi::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconLeft.png\");\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_right__2DOoz {\n  right: 14px;\n}\n.lineChart_chartWrap__10cbn .lineChart_btn__13jc6.lineChart_right__2DOoz::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconRight.png\");\n}\n\n@keyframes lineChart_moveBoxTop__2kI-k {\n  0% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n  50% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px + 4px));\n  }\n  100% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n}\n@keyframes lineChart_fadeIn__JXljJ {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes lineChart_slide__14rNl {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://lineChart.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss"],"names":[],"mappings":"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","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.lineChartArea {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n}\n\n.columnArea {\n  width: fit-content;\n  height: calc(100% - 29px + 18px);\n  transform: translateY(-9px);\n  text-align: right;\n}\n.columnArea .columnWrap {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n.columnArea .column {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  width: 100%;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #6a6a6a;\n  white-space: nowrap;\n}\n\n.chartWrap {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding-left: 32px;\n}\n.chartWrap .tableArea {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 29px);\n  z-index: 50;\n}\n.chartWrap .dividerArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid #9fa4ab;\n}\n.chartWrap .dividerArea .divider {\n  width: 100%;\n  height: 100%;\n  border-top: 1px solid #e7e8ea;\n}\n.chartWrap .lineArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  animation: slide 1s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  animation-delay: 0.2s;\n}\n.chartWrap .pointsArea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.chartWrap .pointsArea .dataWrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.chartWrap .pointsArea .dataWrap .line {\n  position: absolute;\n  bottom: 0;\n  right: -1px;\n  display: block;\n  border-right: 2px solid;\n}\n.chartWrap .pointsArea .dataWrap .line.fadeIn {\n  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn {\n  position: absolute;\n  bottom: -8px;\n  right: -9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  animation: fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn::after {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  content: \"\";\n}\n.chartWrap .pointsArea .dataWrap .dataBtn .tooltipArea {\n  position: absolute;\n  left: 100%;\n  display: none;\n  opacity: 0;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn .tooltipArea::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -0.5px);\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 7px solid;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn .tooltipArea.top {\n  transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px));\n  animation: moveBoxTop 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n.chartWrap .pointsArea .dataWrap .dataBtn .tooltipArea.left {\n  transform: translate(10px, 7.5px);\n}\n.chartWrap .pointsArea .dataWrap .dataBtn .tooltipArea.on {\n  display: block;\n  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1), moveBoxTop 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation-fill-mode: forwards;\n}\n.chartWrap .pointsArea .dataWrap.black .line {\n  border-color: #121619;\n}\n.chartWrap .pointsArea .dataWrap.black .dataBtn {\n  background-color: #e7e8ea;\n}\n.chartWrap .pointsArea .dataWrap.black .dataBtn::after {\n  background-color: #44474b;\n}\n.chartWrap .pointsArea .dataWrap.black .tooltipArea::after {\n  border-top-color: #121619;\n}\n.chartWrap .pointsArea .dataWrap.black.on .dataBtn {\n  background-color: #121619;\n}\n.chartWrap .pointsArea .dataWrap.black.on .dataBtn::after {\n  background-color: #fff;\n}\n.chartWrap .pointsArea .dataWrap.green .line {\n  border-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green .dataBtn {\n  background-color: #e0f9e4;\n}\n.chartWrap .pointsArea .dataWrap.green .dataBtn::after {\n  background-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green .tooltipArea::after {\n  border-top-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green.on .dataBtn {\n  background-color: #52c564;\n}\n.chartWrap .pointsArea .dataWrap.green.on .dataBtn::after {\n  background-color: #fff;\n}\n.chartWrap .pointsArea .dataWrap.blue .line {\n  border-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue .dataBtn {\n  background-color: #c3d1ef;\n}\n.chartWrap .pointsArea .dataWrap.blue .dataBtn::after {\n  background-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue .tooltipArea::after {\n  border-top-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue.on .dataBtn {\n  background-color: #2b53ae;\n}\n.chartWrap .pointsArea .dataWrap.blue.on .dataBtn::after {\n  background-color: #fff;\n}\n.chartWrap .pointsArea .dataWrap.empty {\n  border: none;\n}\n.chartWrap .rowArea {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 18px;\n  margin-top: 12px;\n  z-index: 40;\n}\n.chartWrap .rowWrap {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.chartWrap .row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  font-family: Pretendard, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.01em;\n  color: #6a6a6a;\n  text-align: center;\n  transform: translateX(50%);\n  cursor: pointer;\n}\n.chartWrap .row.on {\n  font-weight: 700;\n  color: #121619;\n}\n.chartWrap .btn {\n  position: absolute;\n  bottom: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  border: 1px solid #e7e8ea;\n  border-radius: 50%;\n  z-index: 100;\n}\n.chartWrap .btn::after {\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}\n.chartWrap .btn.left {\n  left: 14px;\n}\n.chartWrap .btn.left::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconLeft.png\");\n}\n.chartWrap .btn.right {\n  right: 14px;\n}\n.chartWrap .btn.right::after {\n  background-image: url(\"/nextjs/img/v2/components/phs/pst/result/iconRight.png\");\n}\n\n@keyframes moveBoxTop {\n  0% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n  50% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px + 4px));\n  }\n  100% {\n    transform: translate(calc(-50% - 8px), calc(-50% - 8px - 15px - 4px));\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slide {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hidden": "lineChart_hidden__JM49L",
	"textEmphasis": "lineChart_textEmphasis__2B8Le",
	"lineChartArea": "lineChart_lineChartArea__1dbEW",
	"columnArea": "lineChart_columnArea__3-xue",
	"columnWrap": "lineChart_columnWrap__25bZE",
	"column": "lineChart_column__1Au4M",
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
	"left": "lineChart_left__3_MDi",
	"on": "lineChart_on__LMVj2",
	"black": "lineChart_black__176zP",
	"green": "lineChart_green__3QMcb",
	"blue": "lineChart_blue__2mrWr",
	"empty": "lineChart_empty__7D7SI",
	"rowArea": "lineChart_rowArea__2qJMn",
	"rowWrap": "lineChart_rowWrap__1VCRr",
	"row": "lineChart_row__TwRbB",
	"btn": "lineChart_btn__13jc6",
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
___CSS_LOADER_EXPORT___.push([module.i, ".tooltip_hidden__2dySl {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.tooltip_textEmphasis__2303u {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.tooltip_tooltipArea__3Umgu {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 16px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.tooltip_tooltipArea__3Umgu.tooltip_black__3PqfJ {\n  background-color: #121619;\n  color: #fff;\n}\n.tooltip_tooltipArea__3Umgu.tooltip_green__1ks6H {\n  background-color: #52c564;\n  color: #fff;\n}\n.tooltip_tooltipArea__3Umgu.tooltip_blue__NtvxT {\n  background-color: #2b53ae;\n  color: #fff;\n}\n.tooltip_tooltipArea__3Umgu .tooltip_text__3gE0F {\n  font-family: Pretendard, sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n.tooltip_tooltipArea__3Umgu::after {\n  position: absolute;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}", "",{"version":3,"sources":["webpack://../../../../styles/common.scss","webpack://tooltip.module.scss","webpack://../../../../styles/variables/variables.scss","webpack://../../../../styles/variables/colors.scss","webpack://../../../../styles/mixins.scss"],"names":[],"mappings":"AAWA;EACI,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;ACVJ;;ADcA;EACI,qBAAA;EACA,sCENa;EFOb,eAAA;EACA,gBAAA;EACA,cAAA;EACA,cGoBQ;EHnBR,mBAAA;ACXJ;;AAbA;EGyQE,6EAAA;EHtQA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AAeF;AAbE;EACE,yBEVY;EFWZ,WEhBM;AF+BV;AAZE;EACE,yBEDU;EFEV,WErBM;AFmCV;AAXE;EACE,yBE+DS;EF9DT,WE1BM;AFuCV;AAVE;EACE,mCCZW;EDaX,gBAAA;EACA,eAAA;EACA,iBAAA;AAYJ;AATE;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,4BAAA;EACA,WAAA;AAWJ","sourcesContent":["@charset 'UTF-8';\r\n\r\n// variables\r\n@import './variables/colors.scss';\r\n@import './variables/path.scss';\r\n@import './variables/variables.scss';\r\n\r\n// mixins\r\n@import './mixins.scss';\r\n\r\n// hidden\r\n.hidden {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    margin: -1px;\r\n    clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n// 역검 강조\r\n.textEmphasis {\r\n    display: inline-block;\r\n    font-family: $F_WEMAKE_PRICE;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: $C_SKY_200;\r\n    vertical-align: 2px;\r\n}",".hidden {\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n}\n\n.textEmphasis {\n  display: inline-block;\n  font-family: \"Wemakeprice\", sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  color: #5ec7c3;\n  vertical-align: 2px;\n}\n\n.tooltipArea {\n  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 16px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n.tooltipArea.black {\n  background-color: #121619;\n  color: #fff;\n}\n.tooltipArea.green {\n  background-color: #52c564;\n  color: #fff;\n}\n.tooltipArea.blue {\n  background-color: #2b53ae;\n  color: #fff;\n}\n.tooltipArea .text {\n  font-family: Pretendard, sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n.tooltipArea::after {\n  position: absolute;\n  display: block;\n  background-size: cover;\n  background-repeat: no-repeat;\n  content: \"\";\n}","// header height\r\n$MIN_WIDTH: 1168px;\r\n$HEADER_SEARCH_AREA_HEIGHT: 70px;\r\n$HEADER_SEARCH_AREA_MAX_HEIGHT: 82px;\r\n$HEADER_MENU_AREA_HEIGHT: 48px;\r\n$HEADER_HEIGHT: $HEADER_SEARCH_AREA_HEIGHT + $HEADER_MENU_AREA_HEIGHT;\r\n$CONTENTS_WIDTH: 1120px;\r\n$FOOTER_CONTENT_HEIGHT: 104px;\r\n$FOOTER_COPYRIGHT_HEIGHT: 46px;\r\n$FOOTER_HEIGHT: $FOOTER_CONTENT_HEIGHT + $FOOTER_COPYRIGHT_HEIGHT;\r\n\r\n// 공통 컴포넌트 사이즈\r\n$TOP_NUDGE_HEIGHT: 48px;\r\n\r\n// font\r\n$F_NOTO_SANS_KR: 'Noto Sans KR', sans-serif;\r\n$F_MONTSERRAT: 'Montserrat', sans-serif;\r\n$F_WEMAKE_PRICE: 'Wemakeprice', sans-serif;\r\n$F_PRETENDARD: Pretendard, sans-serif;\r\n\r\n// z-index\r\n$Z_INDEX_BASIC: 10;\r\n$Z_INDEX_FIXED: 100;","$C_WHITE: #fff;\r\n$C_BLACK: #000;\r\n$C_GUIDELINE: #0ff;\r\n\r\n// JOBDA BLACK\r\n$C_JOBDA_BLACK: #121619;\r\n\r\n// JOBDA WHITE\r\n$C_JOBDA_WHITE: #f9f9fa;\r\n\r\n// GREEN\r\n$C_GREEN_30: #effdf3;\r\n$C_GREEN_40: #e0f9e4;\r\n$C_GREEN_50: #d0f5da;\r\n$C_GREEN_60: #c3f2cd;\r\n$C_GREEN_70: #b3eec1;\r\n$C_GREEN_80: #a2ebb4;\r\n$C_GREEN_90: #92e6a3;\r\n$C_GREEN_100: #6cdd83;\r\n$C_GREEN_200: #52c564;\r\n$C_GREEN_300: #41ac4d;\r\n$C_GREEN_400: #3c8e42;\r\n$C_GREEN_500: #377538;\r\n\r\n// YELLOW\r\n$C_YELLOW_30: #fffef2;\r\n$C_YELLOW_40: #fffde5;\r\n$C_YELLOW_50: #fefcd8;\r\n$C_YELLOW_60: #fefccb;\r\n$C_YELLOW_70: #fef9bd;\r\n$C_YELLOW_80: #fef8b1;\r\n$C_YELLOW_90: #fdf69e;\r\n$C_YELLOW_100: #fcf16c;\r\n$C_YELLOW_200: #e7da4b;\r\n$C_YELLOW_300: #d8ca2c;\r\n$C_YELLOW_400: #b3a82a;\r\n$C_YELLOW_500: #938a29;\r\n\r\n// SKY\r\n$C_SKY_30: #f3fdfc;\r\n$C_SKY_40: #e9f9f9;\r\n$C_SKY_50: #dcf7f6;\r\n$C_SKY_60: #d1f5f3;\r\n$C_SKY_70: #c5f1ef;\r\n$C_SKY_80: #bbefed;\r\n$C_SKY_90: #afecea;\r\n$C_SKY_100: #7adeda;\r\n$C_SKY_200: #5ec7c3;\r\n$C_SKY_300: #46b2af;\r\n$C_SKY_400: #409390;\r\n$C_SKY_500: #3a7977;\r\n\r\n// LIME\r\n$C_LIME_30: #f9ffeb;\r\n$C_LIME_40: #f3fedf;\r\n$C_LIME_50: #edfdd2;\r\n$C_LIME_60: #e7fcc6;\r\n$C_LIME_70: #e2fbb9;\r\n$C_LIME_80: #dcfaad;\r\n$C_LIME_90: #d0f894;\r\n$C_LIME_100: #bfef7b;\r\n$C_LIME_200: #a4d95a;\r\n$C_LIME_300: #8ec93d;\r\n$C_LIME_400: #79a837;\r\n$C_LIME_500: #668a33;\r\n\r\n// PURPLE\r\n$C_PURPLE_30: #f5f2fd;\r\n$C_PURPLE_40: #f2edfc;\r\n$C_PURPLE_50: #eee7fc;\r\n$C_PURPLE_60: #e8e0fb;\r\n$C_PURPLE_70: #e0d5f9;\r\n$C_PURPLE_80: #d5c7f7;\r\n$C_PURPLE_90: #c7b4f4;\r\n$C_PURPLE_100: #b49bf0;\r\n$C_PURPLE_200: #9375db;\r\n$C_PURPLE_300: #7753ca;\r\n$C_PURPLE_400: #623fb3;\r\n$C_PURPLE_500: #553b94;\r\n\r\n// BLUE\r\n$C_BLUE_30: #e1e7f8;\r\n$C_BLUE_40: #c3d1ef;\r\n$C_BLUE_50: #a7b9e7;\r\n$C_BLUE_60: #8ba3df;\r\n$C_BLUE_70: #718dd7;\r\n$C_BLUE_80: #5878cf;\r\n$C_BLUE_90: #315fc7;\r\n$C_BLUE_100: #2b53ae;\r\n$C_BLUE_200: #304a89;\r\n$C_BLUE_300: #2c4170;\r\n$C_BLUE_400: #29385d;\r\n$C_BLUE_500: #25314d;\r\n\r\n// GRAY\r\n$C_COOL_GRAY_30: #f4f4f5;\r\n$C_COOL_GRAY_40: #e7e8ea;\r\n$C_COOL_GRAY_50: #cfd1d5;\r\n$C_COOL_GRAY_60: #9fa4ab;\r\n$C_COOL_GRAY_70: #656a71;\r\n$C_COOL_GRAY_80: #44474b;\r\n$C_COOL_GRAY_90: #25282b;\r\n\r\n$C_WARM_GRAY_30: #f4f4f4;\r\n$C_WARM_GRAY_40: #e8e8e8;\r\n$C_WARM_GRAY_50: #d1d1d1;\r\n$C_WARM_GRAY_60: #a4a4a4;\r\n$C_WARM_GRAY_70: #6a6a6a;\r\n$C_WARM_GRAY_80: #474747;\r\n$C_WARM_GRAY_90: #232323;\r\n\r\n// WARNING\r\n$C_WARNING: #f6a609;\r\n$C_WARNING_DARK: #e89806;\r\n$C_WARNING_LIGHT: #ffbc1f;\r\n$C_WARNING_RED: #fb4e4e;\r\n$C_WARNING_RED_DARK: #e93c3c;\r\n$C_WARNING_RED_LIGHT: #ff6262;\r\n$C_WARNING_RED_WHITE: #f9e0e2;\r\n\r\n\r\n// POSITIVE\r\n$C_POSITIVE: #6cdd83;\r\n$C_POSITIVE_DARK: #3ed160;\r\n$C_POSITIVE_LIGHT: #92e6a3;\r\n\r\n// NEGATIVE\r\n$C_NEGATIVE: #fb4e4e;\r\n$C_NEGATIVE_DARK: #e93c3c;\r\n$C_NEGATIVE_LIGHT: #ff6262;\r\n","// ellipsis\r\n// @param {number} $LINE - 줄 수\r\n// @param {px} $LINE_HEIGHT - 한줄 높이\r\n@mixin ellipsis($LINE: 1, $LINE_HEIGHT: 1.2em) {\r\n\t@if($LINE == 1) {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\ttext-overflow: ellipsis;\r\n\t\twhite-space: nowrap;\r\n\t} @else {\r\n\t\toverflow: hidden;\r\n\t\tdisplay: block;\r\n\t\tdisplay: -webkit-box;\r\n\t\t-webkit-line-clamp: $LINE;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\tmax-height: $LINE_HEIGHT * $LINE; // webkit 이외의 브라우저 대응\r\n\t\tline-height: $LINE_HEIGHT;\r\n\t\ttext-overflow: ellipsis;\r\n\t\tword-break: break-word;\r\n\t}\r\n}\r\n\r\n// 공통 버튼 스타일\r\n// @param {string} $TYPE - 버튼 타입\r\n// @param {string} $SIZE - 버튼 크기\r\n@mixin commonBtnStyle($TYPE: 'primary', $SIZE: 'large') {\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\r\n\t&:disabled {\r\n\t\tcursor: default;\r\n\t}\r\n\r\n\t// 스타일에 따른 처리\r\n\t@if($TYPE == 'primary') {\r\n\t\twidth: 228px;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_GREEN_100;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_JOBDA_WHITE;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 64px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 56px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tbackground-color: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'secondary') {\r\n\t\twidth: 228px;\r\n\t\tborder: 2px solid $C_GREEN_100;\r\n\t\tborder-radius: 4px;\r\n\t\tbackground-color: $C_WHITE;\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-weight: 700;\r\n\t\tcolor: $C_GREEN_100;\r\n\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\theight: 64px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 60px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\theight: 56px;\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 52px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\theight: 44px;\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 40px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tborder-color: $C_GREEN_200;\r\n\t\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t\t\tcolor: $C_GREEN_200;\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\topacity: 0.5;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tborder-color: $C_GREEN_100;\r\n\t\t\t\tbackground-color: $C_WHITE;\r\n\t\t\t\tcolor: $C_GREEN_100;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t// 스타일에 따른 처리\r\n\t@else if($TYPE == 'underline') {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tcolor: $C_COOL_GRAY_80;\r\n\t\t\r\n\t\t// 크기에 따른 처리\r\n\t\t@if($SIZE == 'large') {\r\n\t\t\tfont-size: 17px;\r\n\t\t\tline-height: 24px;\r\n\t\t\tletter-spacing: -0.41px;\r\n\t\t} @else if($SIZE == 'medium') {\r\n\t\t\tfont-size: 15px;\r\n\t\t\tline-height: 20px;\r\n\t\t\tletter-spacing: -0.36px;\r\n\t\t} @else if($SIZE == 'small') {\r\n\t\t\tfont-size: 13px;\r\n\t\t\tline-height: 18px;\r\n\t\t\tletter-spacing: -0.0866px;\r\n\t\t}\r\n\r\n\t\t&:after {\r\n\t\t\tposition: absolute;\r\n\t\t\tright: 0;\r\n\t\t\tbottom: -1px;\r\n\t\t\tleft: 0;\r\n\t\t\theight: 1px;\r\n\t\t\tbackground-color: $C_COOL_GRAY_80;\r\n\t\t\tcontent: '';\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\tcolor: $C_COOL_GRAY_70;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_70;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:disabled {\r\n\t\t\tcolor: $C_COOL_GRAY_60;\r\n\r\n\t\t\t&:after {\r\n\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: $C_COOL_GRAY_60;\r\n\t\r\n\t\t\t\t&:after {\r\n\t\t\t\t\tbackground-color: $C_COOL_GRAY_60;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// 공통 인풋 스타일\r\n@mixin commonInputStyle {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\theight: 56px;\r\n\tpadding: 0 16px;\r\n\tborder: 1px solid $C_COOL_GRAY_30;\r\n\tborder-radius: 4px;\r\n\tbackground-color: $C_COOL_GRAY_30;\r\n\tfont-family: $F_NOTO_SANS_KR;\r\n\tfont-size: 15px;\r\n\tline-height: 20px;\r\n\tletter-spacing: -0.36px;\r\n\tcolor: $C_COOL_GRAY_90;\r\n\toutline: 0;\r\n\tvertical-align: top;\r\n\r\n\t// 생년월일 경우\r\n\t&.type2 {\r\n\t\twidth: 212px;\r\n\t}\r\n\r\n\t// 주민등록번호 뒷자리 경우\r\n\t&.type3 {\r\n\t\twidth: 60px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t//휴대폰 번호일 경우\r\n\t&.mobile {\r\n\t\tletter-spacing: 2.6px;\r\n\t}\r\n\r\n\t// 버튼(인증요청, 중복확인, 비밀번호확인)이 있는 경우\r\n\t&.withButton {\r\n\t\tpadding-right: 100px;\r\n\t}\r\n\r\n\t// 검색이 가능한 경우(search icon)\r\n\t&.search {\r\n\t\tpadding-left: 48px;\r\n\t}\r\n\r\n\t&.error {\r\n\t\tborder-color: $C_NEGATIVE;\r\n\t}\r\n\r\n\t&:focus,\r\n\t&.success {\r\n\t\tborder-color: $C_GREEN_100;\r\n\t\tbackground-color: $C_WHITE;\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tbackground-color: $C_JOBDA_WHITE;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&:-ms-input-placeholder { //ie11\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n\r\n\t&::-ms-input-placeholder { //edge\r\n\t\tfont-family: $F_NOTO_SANS_KR;\r\n\t\tfont-size: 15px;\r\n\t\tline-height: 20px;\r\n\t\tletter-spacing: -0.36px;\r\n\t\tcolor: $C_COOL_GRAY_60;\r\n\t}\r\n}\r\n\r\n// 공통 box-shadow 스타일\r\n// @param {string} $TYPE - box-shadow 타입\r\n@mixin commonBoxShadowStyle($TYPE: 'base') {\r\n\t@if($TYPE == 'base') {\r\n\t\tbox-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'medium') {\r\n\t\tbox-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);\r\n\t}\r\n\r\n\t@else if($TYPE == 'large') {\r\n\t\tbox-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xlarge') {\r\n\t\tbox-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);\r\n\t}\r\n\r\n\t@else if($TYPE == 'xxlarge') {\r\n\t\tbox-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);\r\n\t}\r\n\r\n\t@else if($TYPE == 'inner') {\r\n\t\tbox-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);\r\n\t}\r\n}\r\n\r\n// scroll\r\n@mixin scroll($SCROLL_WIDTH: 4px, $IE_TRACK_COLOR: $C_WHITE) {\r\n\t$BASIC_SCROLL_WIDTH: 17px;\r\n\t$SCROLL_BAR_COLOR: $C_COOL_GRAY_40;\r\n\t$TRACK: transparent;\r\n\t\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tmargin-right: calc(#{$SCROLL_WIDTH} - #{$BASIC_SCROLL_WIDTH});\r\n\tpadding-right: 0;\r\n\r\n\t/*  IE scrollbar style  */\r\n\tscrollbar-face-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-shadow-color: $SCROLL_BAR_COLOR;\r\n\tscrollbar-track-color: $IE_TRACK_COLOR;\r\n\tscrollbar-arrow-color: $IE_TRACK_COLOR;\r\n\r\n\t&::-webkit-scrollbar {\r\n\t\twidth: $BASIC_SCROLL_WIDTH;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-thumb {\r\n\t\tbackground-color: $SCROLL_BAR_COLOR;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-track {\r\n\t\tbackground-color: $TRACK;\r\n\t}\r\n\r\n\t&::-webkit-scrollbar-button {\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t}\r\n}"],"sourceRoot":""}]);
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
  var columns = _ref.columns;
  var columnsEl = columns.map(function (column, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('column'),
      children: column
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this);
  }).reverse();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('columnArea'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('columnWrap'),
      children: columnsEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
      rows = _ref.rows,
      columnHeight = _ref.columnHeight,
      width = _ref.width,
      height = _ref.height;

  var getDataLineEl = function getDataLineEl() {
    var stroke = _data__WEBPACK_IMPORTED_MODULE_3__["LineColors"][type];
    var fill = _data__WEBPACK_IMPORTED_MODULE_3__["ShapeColors"][type];

    var getX = function getX(value) {
      return width / (rows.length + (1 - _data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"])) * (value + _data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"]);
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
          var shape = "L".concat(getX(i), " ").concat(height, " L").concat(width / rows.length * _data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"], " ").concat(height, " Z");
          return "".concat(prev, " ").concat(getPoint(i, column), " ").concat(shape);
        }

        return "".concat(prev, " ").concat(getPoint(i, column), " ").concat(getChar(i));
      }, 'M');
    };

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
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: getShapeData(),
        fill: fill,
        fillOpacity: 0.2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('lineArea'),
    children: getDataLineEl()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\charts\\lineChart\\Points.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default.a.bind(_lineChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
var pointsAnimationDelay = [0, 0.1, 0.2, 0.3, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75];

var Points = function Points(_ref) {
  _s();

  var data = _ref.data,
      type = _ref.type,
      onIndex = _ref.onIndex,
      handleClick = _ref.handleClick,
      columnHeight = _ref.columnHeight,
      maxRow = _ref.maxRow;
  var tiggerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(true);

  var getDataEl = function getDataEl() {
    var dataEl = data.map(function (d, index) {
      var column = d.column,
          toolTip = d.toolTip,
          _d$toolTipPosition = d.toolTipPosition,
          toolTipPosition = _d$toolTipPosition === void 0 ? 'top' : _d$toolTipPosition;
      var isOn = index === onIndex;

      var getLine = function getLine() {
        if (!isOn) return null;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: cx('line', {
            fadeIn: tiggerRef.current
          }),
          style: {
            height: "".concat(column * columnHeight, "px"),
            animationDelay: "".concat(pointsAnimationDelay[index], "s")
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this);
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dataWrap', type, {
          on: isOn
        }),
        style: {
          width: index === 0 ? "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"] * 100, "%") : '100%',
          zIndex: data.length - index
        },
        children: [getLine(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: cx('dataBtn'),
          style: {
            transform: "translateY(-".concat(column * columnHeight, "px)"),
            animationDelay: "".concat(pointsAnimationDelay[index], "s")
          },
          onClick: function onClick() {
            tiggerRef.current = false;
            handleClick(index);
          },
          role: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('tooltipArea', toolTipPosition, {
              on: isOn
            }),
            children: toolTip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this);
    });
    var emptyDataEl = new Array(maxRow - data.length).fill(null).map(function (_, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dataWrap', 'empty')
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 26
      }, _this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [dataEl, emptyDataEl, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dataWrap', 'empty'),
        style: {
          width: "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"] * 100, "%")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('pointsArea'),
    children: getDataEl()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 10
  }, _this);
};

_s(Points, "XbLqC8r+gznSbQvaAWyfZ6J+ovM=");

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
      maxRow = _ref.maxRow,
      onIndex = _ref.onIndex,
      handleClick = _ref.handleClick,
      tableWidthWhitUnit = _ref.tableWidthWhitUnit,
      translateX = _ref.translateX;

  var getRowsEl = function getRowsEl() {
    var rowEl = rows.map(function (row, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return handleClick(index);
        },
        className: cx('row', {
          on: index === onIndex
        }),
        style: {
          width: index === 0 ? "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"] * 100, "%") : '100%'
        },
        children: row
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
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
          width: "".concat(_data__WEBPACK_IMPORTED_MODULE_3__["EDGE_SPACE"] * 100, "%")
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
var EDGE_SPACE = 0.66;
var LineColors;

(function (LineColors) {
  LineColors["black"] = "#44474B";
  LineColors["green"] = "#52C564";
  LineColors["blue"] = "#2B53AE";
})(LineColors || (LineColors = {}));

var ShapeColors;

(function (ShapeColors) {
  ShapeColors["black"] = "#CFD1D5";
  ShapeColors["green"] = "#E0F9E4";
  ShapeColors["blue"] = "#C3D1EF";
})(ShapeColors || (ShapeColors = {}));

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

  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'black' : _ref$type,
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
    setTableWidth(tableRef.current.clientWidth);
  }, [tableRef.current]);
  var tableWidthWhitUnit = isOver ? "".concat((maxRow + 1) * rowWidth, "px") : '100%';
  var translateX = isOver ? "translateX(".concat(-(slideIndex * rowWidth), "px)") : 'translateX(0)';

  var handleClick = function handleClick(index) {
    return setOnIndex(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('lineChartArea'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Columns__WEBPACK_IMPORTED_MODULE_6__["default"], {
      columns: columns
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: chartRef,
      className: cx('chartWrap'),
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
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Line__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: data,
          type: type,
          rows: rows,
          columnHeight: columnHeight,
          width: tableWidth,
          height: (_tableRef$current$cli = (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.clientHeight) !== null && _tableRef$current$cli !== void 0 ? _tableRef$current$cli : 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Points__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: data,
          type: type,
          onIndex: onIndex,
          handleClick: handleClick,
          columnHeight: columnHeight,
          maxRow: maxRow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rows__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rows: rows,
        maxRow: maxRow,
        onIndex: onIndex,
        handleClick: handleClick,
        tableWidthWhitUnit: tableWidthWhitUnit,
        translateX: translateX
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        slideIndex: slideIndex,
        setSlideIndex: setSlideIndex,
        maxRow: maxRow,
        viewCount: viewCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(LineChart, "L07g0gyGKtcDpdYNY1CYobA/y7o=");

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


var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\pages\\lineChart.tsx",
    _this = undefined;







var LineChartPage = function LineChartPage() {
  var getColumns = function getColumns() {
    return ['0명', '100명', '200명', '300명', '400명', '500명'];
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
          value: "\uC9C1\uC6D0\uC218: ".concat(value, "\uBA85"),
          type: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
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
          lineNumber: 40,
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
          lineNumber: 51,
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
      lineNumber: 58,
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
            type: 'black',
            rows: getRows(),
            columns: getColumns(),
            data: getChartData('black'),
            onIndex: 11,
            viewCount: 12
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '1100px',
            height: '384px',
            marginTop: '24px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: 'green',
            rows: getRows(),
            columns: getColumns(),
            data: getChartData2('green'),
            onIndex: 5,
            viewCount: 12
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '800px',
            height: '284px',
            marginTop: '24px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
            type: 'blue',
            rows: getRows(),
            columns: getColumns(),
            data: getChartData3('blue'),
            onIndex: 0,
            viewCount: 12
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            marginTop: '48px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: '340px',
              height: '205px',
              backgroundColor: '#fefbf9'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: 'black',
              rows: getMobileRows(),
              columns: getColumns(),
              data: getChartData('black'),
              onIndex: 2,
              viewCount: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: '340px',
              height: '205px',
              marginLeft: '24px',
              backgroundColor: '#fefbf9'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: 'green',
              rows: getMobileRows(),
              columns: getColumns(),
              data: getChartData('green'),
              onIndex: 3,
              viewCount: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: '340px',
              height: '205px',
              marginLeft: '24px',
              backgroundColor: '#fefbf9'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_charts_lineChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: 'blue',
              rows: getMobileRows(),
              columns: getColumns(),
              data: getChartData('blue'),
              onIndex: 4,
              viewCount: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvYmluZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9saW5lQ2hhcnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvdG9vbHRpcC90b29sdGlwLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHMvY29udGVudHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9ncmlkL2dyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9CdXR0b25zLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9Db2x1bW5zLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9EaXZpZGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9MaW5lLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9Qb2ludHMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L1Jvd3MudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L2RhdGEudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L2xpbmVDaGFydC5tb2R1bGUuc2Nzcz8yZTBmIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L3Rvb2x0aXAvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jaGFydHMvbGluZUNoYXJ0L3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUuc2Nzcz82ZGY3Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHMvY29udGVudHMubW9kdWxlLnNjc3M/M2MwZSIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2NvbnRlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2dyaWQvZ3JpZC5tb2R1bGUuc2Nzcz85MzBhIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZ3JpZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGluZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiQnV0dG9ucyIsInNsaWRlSW5kZXgiLCJzZXRTbGlkZUluZGV4Iiwidmlld0NvdW50IiwibWF4Um93IiwiaXNPdmVyIiwicHJldkJ0blZpc2libGUiLCJuZXh0QnRuVmlzaWJsZSIsIkNvbHVtbnMiLCJjb2x1bW5zIiwiY29sdW1uc0VsIiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJyZXZlcnNlIiwiRGl2aWRlciIsInZhbHVlIiwiZGl2aWRlckVsIiwiQXJyYXkiLCJmaWxsIiwiXyIsIkxpbmUiLCJkYXRhIiwidHlwZSIsInJvd3MiLCJjb2x1bW5IZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImdldERhdGFMaW5lRWwiLCJzdHJva2UiLCJMaW5lQ29sb3JzIiwiU2hhcGVDb2xvcnMiLCJnZXRYIiwibGVuZ3RoIiwiRURHRV9TUEFDRSIsImdldFkiLCJnZXRDaGFyIiwiZ2V0UG9pbnQiLCJ4IiwieSIsImdldExpbmVEYXRhIiwicmVkdWNlIiwicHJldiIsImkiLCJnZXRTaGFwZURhdGEiLCJzaGFwZSIsInBvaW50c0FuaW1hdGlvbkRlbGF5IiwiUG9pbnRzIiwib25JbmRleCIsImhhbmRsZUNsaWNrIiwidGlnZ2VyUmVmIiwidXNlUmVmIiwiZ2V0RGF0YUVsIiwiZGF0YUVsIiwiZCIsInRvb2xUaXAiLCJ0b29sVGlwUG9zaXRpb24iLCJpc09uIiwiZ2V0TGluZSIsImZhZGVJbiIsImN1cnJlbnQiLCJhbmltYXRpb25EZWxheSIsIm9uIiwiekluZGV4IiwidHJhbnNmb3JtIiwiZW1wdHlEYXRhRWwiLCJSb3dzIiwidGFibGVXaWR0aFdoaXRVbml0IiwidHJhbnNsYXRlWCIsImdldFJvd3NFbCIsInJvd0VsIiwicm93IiwiZW1wdHlSb3dFbCIsIkxpbmVDaGFydCIsIm9uSWR4IiwidXNlU3RhdGUiLCJzZXRPbkluZGV4Iiwicm93V2lkdGgiLCJzZXRSb3dXaWR0aCIsInNldENvbHVtbkhlaWdodCIsInRhYmxlV2lkdGgiLCJzZXRUYWJsZVdpZHRoIiwiY2hhcnRSZWYiLCJ0YWJsZVJlZiIsIk1hdGgiLCJtYXgiLCJtYXhDb2x1bW5zIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiaWR4IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJUb29sdGlwIiwiQ29udGVudHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiUkFUSU8iLCJHcmlkIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJzdGF0ZSIsInNpemUiLCJjYW52YXNSZWYiLCJjdHgiLCJzZXRDdHgiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUxheW91dEVmZmVjdCIsInJlbmRlckN0eCIsImdldENvbnRleHQiLCJyZXNldCIsInN0b3JlZFRyYW5zZm9ybSIsImdldFRyYW5zZm9ybSIsImNhbnZhcyIsInNldFRyYW5zZm9ybSIsImRyYXdHcmlkIiwic2NhbGUiLCJHUklEX1NDQUxFIiwiblgiLCJmbG9vciIsIm5ZIiwicFgiLCJwWSIsInBMIiwiY2VpbCIsInBUIiwicFIiLCJwQiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZGlzcGxheSIsIkxheW91dCIsIkxpbmVDaGFydFBhZ2UiLCJnZXRDb2x1bW5zIiwiZ2V0Um93cyIsImdldE1vYmlsZVJvd3MiLCJnZXRDaGFydERhdGEiLCJnZXRDaGFydERhdGEyIiwiZ2V0Q2hhcnREYXRh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VUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0s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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FB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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFFLENBTFg7QUFNRSx1QkFBUyxFQUFFO0FBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFxQkU7QUFBSyxpQkFBSyxFQUFFO0FBQUNoSCxtQkFBSyxFQUFFLE9BQVI7QUFBaUJDLG9CQUFNLEVBQUUsT0FBekI7QUFBa0NxSCx3QkFBVSxFQUFFLE1BQTlDO0FBQXNERCw2QkFBZSxFQUFDO0FBQXRFLGFBQVo7QUFBQSxtQ0FDRSxxRUFBQyx1RUFBRDtBQUNFLGtCQUFJLEVBQUUsTUFEUjtBQUVFLGtCQUFJLEVBQUVOLGFBQWEsRUFGckI7QUFHRSxxQkFBTyxFQUFFRixVQUFVLEVBSHJCO0FBSUUsa0JBQUksRUFBRUcsWUFBWSxDQUFDLE1BQUQsQ0FKcEI7QUFLRSxxQkFBTyxFQUFFLENBTFg7QUFNRSx1QkFBUyxFQUFFO0FBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUVELENBekhEOztLQUFNSixhO0FBMkhTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2xpbmVDaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaCh0aGlzICYmIHRoaXNbYXJnXSB8fCBhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkodGhpcywgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2godGhpcyAmJiB0aGlzW2tleV0gfHwga2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgICBcIi9saW5lQ2hhcnRcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcamdtMDUzMVxcXFxteVByb2plY3RcXFxcbmV4dGpzXFxcXHNyY1xcXFxwYWdlc1xcXFxsaW5lQ2hhcnQudHN4XCIpO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1gJHtpZH0gJHtjb3VudH1gO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChrZXk9PntzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/YEBtZWRpYSAke29iai5tZWRpYX0geyR7b2JqLmNzc319YDpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPWBcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCR7YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKX0gKi9gO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPSgpPT57cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9KGxpc3Qsb3B0aW9ucyk9PntvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpbmVDaGFydF9oaWRkZW5fX0pNNDlMIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbn1cXG5cXG4ubGluZUNoYXJ0X3RleHRFbXBoYXNpc19fMkI4TGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXZW1ha2VwcmljZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzVlYzdjMztcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxufVxcblxcbi5saW5lQ2hhcnRfbGluZUNoYXJ0QXJlYV9fMWRiRVcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubGluZUNoYXJ0X2NvbHVtbkFyZWFfXzMteHVlIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5cHggKyAxOHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubGluZUNoYXJ0X2NvbHVtbkFyZWFfXzMteHVlIC5saW5lQ2hhcnRfY29sdW1uV3JhcF9fMjViWkUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5saW5lQ2hhcnRfY29sdW1uQXJlYV9fMy14dWUgLmxpbmVDaGFydF9jb2x1bW5fXzFBdTRNIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzZhNmE2YTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3RhYmxlQXJlYV9fMldZUzMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5cHgpO1xcbiAgei1pbmRleDogNTA7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2RpdmlkZXJBcmVhX18yc0hmeSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWZhNGFiO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9kaXZpZGVyQXJlYV9fMnNIZnkgLmxpbmVDaGFydF9kaXZpZGVyX18zQ1ZpTSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlOGVhO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9saW5lQXJlYV9fMzQ0QjYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYW5pbWF0aW9uOiBsaW5lQ2hhcnRfc2xpZGVfXzE0ck5sIDFzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfbGluZV9fMzBCVmYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IC0xcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2xpbmVfXzMwQlZmLmxpbmVDaGFydF9mYWRlSW5fX0pYbGpKIHtcXG4gIGFuaW1hdGlvbjogbGluZUNoYXJ0X2ZhZGVJbl9fSlhsakogMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLThweDtcXG4gIHJpZ2h0OiAtOXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBsaW5lQ2hhcnRfZmFkZUluX19KWGxqSiAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTg6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTggLmxpbmVDaGFydF90b29sdGlwQXJlYV9fMi1UdEwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IC5saW5lQ2hhcnRfdG9vbHRpcEFyZWFfXzItVHRMOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0wLjVweCk7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OCAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TC5saW5lQ2hhcnRfdG9wX18yVTdPSyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4KSk7XFxuICBhbmltYXRpb246IGxpbmVDaGFydF9tb3ZlQm94VG9wX18ya0ktayAxcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IC5saW5lQ2hhcnRfdG9vbHRpcEFyZWFfXzItVHRMLmxpbmVDaGFydF9sZWZ0X18zX01EaSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCA3LjVweCk7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTggLmxpbmVDaGFydF90b29sdGlwQXJlYV9fMi1UdEwubGluZUNoYXJ0X29uX19MTVZqMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFuaW1hdGlvbjogbGluZUNoYXJ0X2ZhZGVJbl9fSlhsakogMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBsaW5lQ2hhcnRfbW92ZUJveFRvcF9fMmtJLWsgMXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQIC5saW5lQ2hhcnRfbGluZV9fMzBCVmYge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTIxNjE5O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZThlYTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2JsYWNrX18xNzZ6UCAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzRiO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQIC5saW5lQ2hhcnRfdG9vbHRpcEFyZWFfXzItVHRMOjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMTIxNjE5O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQLmxpbmVDaGFydF9vbl9fTE1WajIgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxNjE5O1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmxhY2tfXzE3NnpQLmxpbmVDaGFydF9vbl9fTE1WajIgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1ODo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYiAubGluZUNoYXJ0X2xpbmVfXzMwQlZmIHtcXG4gIGJvcmRlci1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY5ZTQ7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ncmVlbl9fM1FNY2IgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1ODo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYiAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TDo6YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYi5saW5lQ2hhcnRfb25fX0xNVmoyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzU2NDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2dyZWVuX18zUU1jYi5saW5lQ2hhcnRfb25fX0xNVmoyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTg6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibHVlX18ybXJXciAubGluZUNoYXJ0X2xpbmVfXzMwQlZmIHtcXG4gIGJvcmRlci1jb2xvcjogIzJiNTNhZTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2JsdWVfXzJtcldyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZDFlZjtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2JsdWVfXzJtcldyIC5saW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNTg6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjUzYWU7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X3BvaW50c0FyZWFfX250LUttIC5saW5lQ2hhcnRfZGF0YVdyYXBfXzFkWW1mLmxpbmVDaGFydF9ibHVlX18ybXJXciAubGluZUNoYXJ0X3Rvb2x0aXBBcmVhX18yLVR0TDo6YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJiNTNhZTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcG9pbnRzQXJlYV9fbnQtS20gLmxpbmVDaGFydF9kYXRhV3JhcF9fMWRZbWYubGluZUNoYXJ0X2JsdWVfXzJtcldyLmxpbmVDaGFydF9vbl9fTE1WajIgLmxpbmVDaGFydF9kYXRhQnRuX19taGw1OCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1M2FlO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfYmx1ZV9fMm1yV3IubGluZUNoYXJ0X29uX19MTVZqMiAubGluZUNoYXJ0X2RhdGFCdG5fX21obDU4OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubGluZUNoYXJ0X2NoYXJ0V3JhcF9fMTBjYm4gLmxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbSAubGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZi5saW5lQ2hhcnRfZW1wdHlfXzdEN1NJIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93QXJlYV9fMnFKTW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMThweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93V3JhcF9fMVZDUnIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93X19Ud1JiQiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogUHJldGVuZGFyZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xcbiAgY29sb3I6ICM2YTZhNmE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfcm93X19Ud1JiQi5saW5lQ2hhcnRfb25fX0xNVmoyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzEyMTYxOTtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfYnRuX18xM2pjNiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDM1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZThlYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfYnRuX18xM2pjNjo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2J0bl9fMTNqYzYubGluZUNoYXJ0X2xlZnRfXzNfTURpIHtcXG4gIGxlZnQ6IDE0cHg7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2J0bl9fMTNqYzYubGluZUNoYXJ0X2xlZnRfXzNfTURpOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9uZXh0anMvaW1nL3YyL2NvbXBvbmVudHMvcGhzL3BzdC9yZXN1bHQvaWNvbkxlZnQucG5nXFxcIik7XFxufVxcbi5saW5lQ2hhcnRfY2hhcnRXcmFwX18xMGNibiAubGluZUNoYXJ0X2J0bl9fMTNqYzYubGluZUNoYXJ0X3JpZ2h0X18yRE9veiB7XFxuICByaWdodDogMTRweDtcXG59XFxuLmxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuIC5saW5lQ2hhcnRfYnRuX18xM2pjNi5saW5lQ2hhcnRfcmlnaHRfXzJET296OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9uZXh0anMvaW1nL3YyL2NvbXBvbmVudHMvcGhzL3BzdC9yZXN1bHQvaWNvblJpZ2h0LnBuZ1xcXCIpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpbmVDaGFydF9tb3ZlQm94VG9wX18ya0ktayB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDhweCksIGNhbGMoLTUwJSAtIDhweCAtIDE1cHggLSA0cHgpKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDhweCksIGNhbGMoLTUwJSAtIDhweCAtIDE1cHggKyA0cHgpKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4IC0gNHB4KSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGluZUNoYXJ0X2ZhZGVJbl9fSlhsakoge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGluZUNoYXJ0X3NsaWRlX18xNHJObCB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vbGluZUNoYXJ0Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvY29sb3JzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNWSjs7QURjQTtFQUNJLHFCQUFBO0VBQ0Esc0NFTmE7RUZPYixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0dvQlE7RUhuQlIsbUJBQUE7QUNYSjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBYUY7O0FBVkE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFhRjtBQVhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBYUo7QUFWRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQ2pCVztFRGtCWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNFb0VhO0VGbkViLG1CQUFBO0FBWUo7O0FBUkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVdGO0FBVEU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FwRFk7QUErRGhCO0FBUkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQVVKO0FBUkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBVU47QUFORTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlFQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQVFKO0FBTEU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0o7QUFMSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPTjtBQUxNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQU9SO0FBTFE7RUFDRSxvRUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQU9WO0FBRk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0VBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFJUjtBQUZRO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSVY7QUFEUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBR1Y7QUFEVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBR1o7QUFBVTtFQUVFLCtEQUFBO0VBQ0EsK0VBQUE7QUFDWjtBQUVVO0VBQ0UsaUNBQUE7QUFBWjtBQUdVO0VBQ0UsY0FBQTtFQUNBLDBJQUFBO0VBQ0EsNkJBQUE7QUFEWjtBQU9RO0VBQ0UscUJFMUtNO0FGcUtoQjtBQVFRO0VBQ0UseUJFbkZPO0FGNkVqQjtBQVFVO0VBQ0UseUJFbEZLO0FGNEVqQjtBQVdVO0VBQ0UseUJFdkxJO0FGOEtoQjtBQWNVO0VBQ0UseUJFN0xJO0FGaUxoQjtBQWNZO0VBQ0Usc0JFck1KO0FGeUxWO0FBbUJRO0VBQ0UscUJFMUxJO0FGeUtkO0FBb0JRO0VBQ0UseUJFck1HO0FGbUxiO0FBb0JVO0VBQ0UseUJFak1FO0FGK0tkO0FBdUJVO0VBQ0UseUJFdk1FO0FGa0xkO0FBMEJVO0VBQ0UseUJFN01FO0FGcUxkO0FBMEJZO0VBQ0Usc0JFbk9KO0FGMk1WO0FBK0JRO0VBQ0UscUJFbkpHO0FGc0hiO0FBZ0NRO0VBQ0UseUJFN0pFO0FGK0haO0FBZ0NVO0VBQ0UseUJFMUpDO0FGNEhiO0FBbUNVO0VBQ0UseUJFaEtDO0FGK0hiO0FBc0NVO0VBQ0UseUJFdEtDO0FGa0liO0FBc0NZO0VBQ0Usc0JFalFKO0FGNk5WO0FBMENNO0VBQ0UsWUFBQTtBQXhDUjtBQTZDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0E5UVU7QUFtT2Q7QUE4Q0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTVDSjtBQStDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0NqUlc7RURrUlgsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNFN0xhO0VGOExiLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBN0NKO0FBK0NJO0VBQ0UsZ0JBQUE7RUFDQSxjRTFTVTtBRjZQaEI7QUFpREU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JFM1RNO0VGNFROLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBL0NKO0FBaURJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUEvQ047QUFrREk7RUFDRSxVQUFBO0FBaEROO0FBa0RNO0VBQ0UsOEVBQUE7QUFoRFI7QUFvREk7RUFDRSxXQUFBO0FBbEROO0FBb0RNO0VBQ0UsK0VBQUE7QUFsRFI7O0FBd0RBO0VBQ0U7SUFDRSxxRUFBQTtFQXJERjtFQXdEQTtJQUNFLHFFQUFBO0VBdERGO0VBeURBO0lBQ0UscUVBQUE7RUF2REY7QUFDRjtBQTBEQTtFQUNFO0lBQ0UsVUFBQTtFQXhERjtFQTJEQTtJQUNFLFVBQUE7RUF6REY7QUFDRjtBQTREQTtFQUNFO0lBQ0UsUUFBQTtFQTFERjtFQTZEQTtJQUNFLFdBQUE7RUEzREY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCAnVVRGLTgnO1xcclxcblxcclxcbi8vIHZhcmlhYmxlc1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycy5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9wYXRoLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4vLyBtaXhpbnNcXHJcXG5AaW1wb3J0ICcuL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4vLyBoaWRkZW5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDsl63qsoAg6rCV7KGwXFxyXFxuLnRleHRFbXBoYXNpcyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRGX1dFTUFLRV9QUklDRTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6ICRDX1NLWV8yMDA7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiAycHg7XFxyXFxufVwiLFwiLmhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLnRleHRFbXBoYXNpcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIldlbWFrZXByaWNlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjNWVjN2MzO1xcbiAgdmVydGljYWwtYWxpZ246IDJweDtcXG59XFxuXFxuLmxpbmVDaGFydEFyZWEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5jb2x1bW5BcmVhIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjlweCArIDE4cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5jb2x1bW5BcmVhIC5jb2x1bW5XcmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY29sdW1uQXJlYSAuY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzZhNmE2YTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5jaGFydFdyYXAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbn1cXG4uY2hhcnRXcmFwIC50YWJsZUFyZWEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5cHgpO1xcbiAgei1pbmRleDogNTA7XFxufVxcbi5jaGFydFdyYXAgLmRpdmlkZXJBcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5ZmE0YWI7XFxufVxcbi5jaGFydFdyYXAgLmRpdmlkZXJBcmVhIC5kaXZpZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U4ZWE7XFxufVxcbi5jaGFydFdyYXAgLmxpbmVBcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFuaW1hdGlvbjogc2xpZGUgMXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAubGluZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogLTFweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC5saW5lLmZhZGVJbiB7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwIC5kYXRhQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLThweDtcXG4gIHJpZ2h0OiAtOXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAuZGF0YUJ0bjo6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmRhdGFCdG4gLnRvb2x0aXBBcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmRhdGFCdG4gLnRvb2x0aXBBcmVhOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0wLjVweCk7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDdweCBzb2xpZDtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmRhdGFCdG4gLnRvb2x0aXBBcmVhLnRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4KSk7XFxuICBhbmltYXRpb246IG1vdmVCb3hUb3AgMXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAgLmRhdGFCdG4gLnRvb2x0aXBBcmVhLmxlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgNy41cHgpO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcCAuZGF0YUJ0biAudG9vbHRpcEFyZWEub24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjdzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIG1vdmVCb3hUb3AgMXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibGFjayAubGluZSB7XFxuICBib3JkZXItY29sb3I6ICMxMjE2MTk7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsYWNrIC5kYXRhQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U4ZWE7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsYWNrIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NzRiO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibGFjayAudG9vbHRpcEFyZWE6OmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMxMjE2MTk7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsYWNrLm9uIC5kYXRhQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjE2MTk7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmJsYWNrLm9uIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbiAubGluZSB7XFxuICBib3JkZXItY29sb3I6ICM1MmM1NjQ7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmdyZWVuIC5kYXRhQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY5ZTQ7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmdyZWVuIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNTY0O1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ncmVlbiAudG9vbHRpcEFyZWE6OmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM1MmM1NjQ7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmdyZWVuLm9uIC5kYXRhQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NjQ7XFxufVxcbi5jaGFydFdyYXAgLnBvaW50c0FyZWEgLmRhdGFXcmFwLmdyZWVuLm9uIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlIC5saW5lIHtcXG4gIGJvcmRlci1jb2xvcjogIzJiNTNhZTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmx1ZSAuZGF0YUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNkMWVmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1M2FlO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlIC50b29sdGlwQXJlYTo6YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJiNTNhZTtcXG59XFxuLmNoYXJ0V3JhcCAucG9pbnRzQXJlYSAuZGF0YVdyYXAuYmx1ZS5vbiAuZGF0YUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1M2FlO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5ibHVlLm9uIC5kYXRhQnRuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uY2hhcnRXcmFwIC5wb2ludHNBcmVhIC5kYXRhV3JhcC5lbXB0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jaGFydFdyYXAgLnJvd0FyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMThweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICB6LWluZGV4OiA0MDtcXG59XFxuLmNoYXJ0V3JhcCAucm93V3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2hhcnRXcmFwIC5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcXG4gIGNvbG9yOiAjNmE2YTZhO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGFydFdyYXAgLnJvdy5vbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMxMjE2MTk7XFxufVxcbi5jaGFydFdyYXAgLmJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDM1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZThlYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuOjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuLmxlZnQge1xcbiAgbGVmdDogMTRweDtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuLmxlZnQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL25leHRqcy9pbWcvdjIvY29tcG9uZW50cy9waHMvcHN0L3Jlc3VsdC9pY29uTGVmdC5wbmdcXFwiKTtcXG59XFxuLmNoYXJ0V3JhcCAuYnRuLnJpZ2h0IHtcXG4gIHJpZ2h0OiAxNHB4O1xcbn1cXG4uY2hhcnRXcmFwIC5idG4ucmlnaHQ6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL25leHRqcy9pbWcvdjIvY29tcG9uZW50cy9waHMvcHN0L3Jlc3VsdC9pY29uUmlnaHQucG5nXFxcIik7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZUJveFRvcCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDhweCksIGNhbGMoLTUwJSAtIDhweCAtIDE1cHggLSA0cHgpKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSAtIDhweCksIGNhbGMoLTUwJSAtIDhweCAtIDE1cHggKyA0cHgpKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKC01MCUgLSA4cHgpLCBjYWxjKC01MCUgLSA4cHggLSAxNXB4IC0gNHB4KSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLFwiLy8gaGVhZGVyIGhlaWdodFxcclxcbiRNSU5fV0lEVEg6IDExNjhweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVDogNzBweDtcXHJcXG4kSEVBREVSX1NFQVJDSF9BUkVBX01BWF9IRUlHSFQ6IDgycHg7XFxyXFxuJEhFQURFUl9NRU5VX0FSRUFfSEVJR0hUOiA0OHB4O1xcclxcbiRIRUFERVJfSEVJR0hUOiAkSEVBREVSX1NFQVJDSF9BUkVBX0hFSUdIVCArICRIRUFERVJfTUVOVV9BUkVBX0hFSUdIVDtcXHJcXG4kQ09OVEVOVFNfV0lEVEg6IDExMjBweDtcXHJcXG4kRk9PVEVSX0NPTlRFTlRfSEVJR0hUOiAxMDRweDtcXHJcXG4kRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ6IDQ2cHg7XFxyXFxuJEZPT1RFUl9IRUlHSFQ6ICRGT09URVJfQ09OVEVOVF9IRUlHSFQgKyAkRk9PVEVSX0NPUFlSSUdIVF9IRUlHSFQ7XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOy7tO2PrOuEjO2KuCDsgqzsnbTspohcXHJcXG4kVE9QX05VREdFX0hFSUdIVDogNDhweDtcXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuJEZfTk9UT19TQU5TX0tSOiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcXHJcXG4kRl9NT05UU0VSUkFUOiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuJEZfV0VNQUtFX1BSSUNFOiAnV2VtYWtlcHJpY2UnLCBzYW5zLXNlcmlmO1xcclxcbiRGX1BSRVRFTkRBUkQ6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuLy8gei1pbmRleFxcclxcbiRaX0lOREVYX0JBU0lDOiAxMDtcXHJcXG4kWl9JTkRFWF9GSVhFRDogMTAwO1wiLFwiJENfV0hJVEU6ICNmZmY7XFxyXFxuJENfQkxBQ0s6ICMwMDA7XFxyXFxuJENfR1VJREVMSU5FOiAjMGZmO1xcclxcblxcclxcbi8vIEpPQkRBIEJMQUNLXFxyXFxuJENfSk9CREFfQkxBQ0s6ICMxMjE2MTk7XFxyXFxuXFxyXFxuLy8gSk9CREEgV0hJVEVcXHJcXG4kQ19KT0JEQV9XSElURTogI2Y5ZjlmYTtcXHJcXG5cXHJcXG4vLyBHUkVFTlxcclxcbiRDX0dSRUVOXzMwOiAjZWZmZGYzO1xcclxcbiRDX0dSRUVOXzQwOiAjZTBmOWU0O1xcclxcbiRDX0dSRUVOXzUwOiAjZDBmNWRhO1xcclxcbiRDX0dSRUVOXzYwOiAjYzNmMmNkO1xcclxcbiRDX0dSRUVOXzcwOiAjYjNlZWMxO1xcclxcbiRDX0dSRUVOXzgwOiAjYTJlYmI0O1xcclxcbiRDX0dSRUVOXzkwOiAjOTJlNmEzO1xcclxcbiRDX0dSRUVOXzEwMDogIzZjZGQ4MztcXHJcXG4kQ19HUkVFTl8yMDA6ICM1MmM1NjQ7XFxyXFxuJENfR1JFRU5fMzAwOiAjNDFhYzRkO1xcclxcbiRDX0dSRUVOXzQwMDogIzNjOGU0MjtcXHJcXG4kQ19HUkVFTl81MDA6ICMzNzc1Mzg7XFxyXFxuXFxyXFxuLy8gWUVMTE9XXFxyXFxuJENfWUVMTE9XXzMwOiAjZmZmZWYyO1xcclxcbiRDX1lFTExPV180MDogI2ZmZmRlNTtcXHJcXG4kQ19ZRUxMT1dfNTA6ICNmZWZjZDg7XFxyXFxuJENfWUVMTE9XXzYwOiAjZmVmY2NiO1xcclxcbiRDX1lFTExPV183MDogI2ZlZjliZDtcXHJcXG4kQ19ZRUxMT1dfODA6ICNmZWY4YjE7XFxyXFxuJENfWUVMTE9XXzkwOiAjZmRmNjllO1xcclxcbiRDX1lFTExPV18xMDA6ICNmY2YxNmM7XFxyXFxuJENfWUVMTE9XXzIwMDogI2U3ZGE0YjtcXHJcXG4kQ19ZRUxMT1dfMzAwOiAjZDhjYTJjO1xcclxcbiRDX1lFTExPV180MDA6ICNiM2E4MmE7XFxyXFxuJENfWUVMTE9XXzUwMDogIzkzOGEyOTtcXHJcXG5cXHJcXG4vLyBTS1lcXHJcXG4kQ19TS1lfMzA6ICNmM2ZkZmM7XFxyXFxuJENfU0tZXzQwOiAjZTlmOWY5O1xcclxcbiRDX1NLWV81MDogI2RjZjdmNjtcXHJcXG4kQ19TS1lfNjA6ICNkMWY1ZjM7XFxyXFxuJENfU0tZXzcwOiAjYzVmMWVmO1xcclxcbiRDX1NLWV84MDogI2JiZWZlZDtcXHJcXG4kQ19TS1lfOTA6ICNhZmVjZWE7XFxyXFxuJENfU0tZXzEwMDogIzdhZGVkYTtcXHJcXG4kQ19TS1lfMjAwOiAjNWVjN2MzO1xcclxcbiRDX1NLWV8zMDA6ICM0NmIyYWY7XFxyXFxuJENfU0tZXzQwMDogIzQwOTM5MDtcXHJcXG4kQ19TS1lfNTAwOiAjM2E3OTc3O1xcclxcblxcclxcbi8vIExJTUVcXHJcXG4kQ19MSU1FXzMwOiAjZjlmZmViO1xcclxcbiRDX0xJTUVfNDA6ICNmM2ZlZGY7XFxyXFxuJENfTElNRV81MDogI2VkZmRkMjtcXHJcXG4kQ19MSU1FXzYwOiAjZTdmY2M2O1xcclxcbiRDX0xJTUVfNzA6ICNlMmZiYjk7XFxyXFxuJENfTElNRV84MDogI2RjZmFhZDtcXHJcXG4kQ19MSU1FXzkwOiAjZDBmODk0O1xcclxcbiRDX0xJTUVfMTAwOiAjYmZlZjdiO1xcclxcbiRDX0xJTUVfMjAwOiAjYTRkOTVhO1xcclxcbiRDX0xJTUVfMzAwOiAjOGVjOTNkO1xcclxcbiRDX0xJTUVfNDAwOiAjNzlhODM3O1xcclxcbiRDX0xJTUVfNTAwOiAjNjY4YTMzO1xcclxcblxcclxcbi8vIFBVUlBMRVxcclxcbiRDX1BVUlBMRV8zMDogI2Y1ZjJmZDtcXHJcXG4kQ19QVVJQTEVfNDA6ICNmMmVkZmM7XFxyXFxuJENfUFVSUExFXzUwOiAjZWVlN2ZjO1xcclxcbiRDX1BVUlBMRV82MDogI2U4ZTBmYjtcXHJcXG4kQ19QVVJQTEVfNzA6ICNlMGQ1Zjk7XFxyXFxuJENfUFVSUExFXzgwOiAjZDVjN2Y3O1xcclxcbiRDX1BVUlBMRV85MDogI2M3YjRmNDtcXHJcXG4kQ19QVVJQTEVfMTAwOiAjYjQ5YmYwO1xcclxcbiRDX1BVUlBMRV8yMDA6ICM5Mzc1ZGI7XFxyXFxuJENfUFVSUExFXzMwMDogIzc3NTNjYTtcXHJcXG4kQ19QVVJQTEVfNDAwOiAjNjIzZmIzO1xcclxcbiRDX1BVUlBMRV81MDA6ICM1NTNiOTQ7XFxyXFxuXFxyXFxuLy8gQkxVRVxcclxcbiRDX0JMVUVfMzA6ICNlMWU3Zjg7XFxyXFxuJENfQkxVRV80MDogI2MzZDFlZjtcXHJcXG4kQ19CTFVFXzUwOiAjYTdiOWU3O1xcclxcbiRDX0JMVUVfNjA6ICM4YmEzZGY7XFxyXFxuJENfQkxVRV83MDogIzcxOGRkNztcXHJcXG4kQ19CTFVFXzgwOiAjNTg3OGNmO1xcclxcbiRDX0JMVUVfOTA6ICMzMTVmYzc7XFxyXFxuJENfQkxVRV8xMDA6ICMyYjUzYWU7XFxyXFxuJENfQkxVRV8yMDA6ICMzMDRhODk7XFxyXFxuJENfQkxVRV8zMDA6ICMyYzQxNzA7XFxyXFxuJENfQkxVRV80MDA6ICMyOTM4NWQ7XFxyXFxuJENfQkxVRV81MDA6ICMyNTMxNGQ7XFxyXFxuXFxyXFxuLy8gR1JBWVxcclxcbiRDX0NPT0xfR1JBWV8zMDogI2Y0ZjRmNTtcXHJcXG4kQ19DT09MX0dSQVlfNDA6ICNlN2U4ZWE7XFxyXFxuJENfQ09PTF9HUkFZXzUwOiAjY2ZkMWQ1O1xcclxcbiRDX0NPT0xfR1JBWV82MDogIzlmYTRhYjtcXHJcXG4kQ19DT09MX0dSQVlfNzA6ICM2NTZhNzE7XFxyXFxuJENfQ09PTF9HUkFZXzgwOiAjNDQ0NzRiO1xcclxcbiRDX0NPT0xfR1JBWV85MDogIzI1MjgyYjtcXHJcXG5cXHJcXG4kQ19XQVJNX0dSQVlfMzA6ICNmNGY0ZjQ7XFxyXFxuJENfV0FSTV9HUkFZXzQwOiAjZThlOGU4O1xcclxcbiRDX1dBUk1fR1JBWV81MDogI2QxZDFkMTtcXHJcXG4kQ19XQVJNX0dSQVlfNjA6ICNhNGE0YTQ7XFxyXFxuJENfV0FSTV9HUkFZXzcwOiAjNmE2YTZhO1xcclxcbiRDX1dBUk1fR1JBWV84MDogIzQ3NDc0NztcXHJcXG4kQ19XQVJNX0dSQVlfOTA6ICMyMzIzMjM7XFxyXFxuXFxyXFxuLy8gV0FSTklOR1xcclxcbiRDX1dBUk5JTkc6ICNmNmE2MDk7XFxyXFxuJENfV0FSTklOR19EQVJLOiAjZTg5ODA2O1xcclxcbiRDX1dBUk5JTkdfTElHSFQ6ICNmZmJjMWY7XFxyXFxuJENfV0FSTklOR19SRUQ6ICNmYjRlNGU7XFxyXFxuJENfV0FSTklOR19SRURfREFSSzogI2U5M2MzYztcXHJcXG4kQ19XQVJOSU5HX1JFRF9MSUdIVDogI2ZmNjI2MjtcXHJcXG4kQ19XQVJOSU5HX1JFRF9XSElURTogI2Y5ZTBlMjtcXHJcXG5cXHJcXG5cXHJcXG4vLyBQT1NJVElWRVxcclxcbiRDX1BPU0lUSVZFOiAjNmNkZDgzO1xcclxcbiRDX1BPU0lUSVZFX0RBUks6ICMzZWQxNjA7XFxyXFxuJENfUE9TSVRJVkVfTElHSFQ6ICM5MmU2YTM7XFxyXFxuXFxyXFxuLy8gTkVHQVRJVkVcXHJcXG4kQ19ORUdBVElWRTogI2ZiNGU0ZTtcXHJcXG4kQ19ORUdBVElWRV9EQVJLOiAjZTkzYzNjO1xcclxcbiRDX05FR0FUSVZFX0xJR0hUOiAjZmY2MjYyO1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhpZGRlblwiOiBcImxpbmVDaGFydF9oaWRkZW5fX0pNNDlMXCIsXG5cdFwidGV4dEVtcGhhc2lzXCI6IFwibGluZUNoYXJ0X3RleHRFbXBoYXNpc19fMkI4TGVcIixcblx0XCJsaW5lQ2hhcnRBcmVhXCI6IFwibGluZUNoYXJ0X2xpbmVDaGFydEFyZWFfXzFkYkVXXCIsXG5cdFwiY29sdW1uQXJlYVwiOiBcImxpbmVDaGFydF9jb2x1bW5BcmVhX18zLXh1ZVwiLFxuXHRcImNvbHVtbldyYXBcIjogXCJsaW5lQ2hhcnRfY29sdW1uV3JhcF9fMjViWkVcIixcblx0XCJjb2x1bW5cIjogXCJsaW5lQ2hhcnRfY29sdW1uX18xQXU0TVwiLFxuXHRcImNoYXJ0V3JhcFwiOiBcImxpbmVDaGFydF9jaGFydFdyYXBfXzEwY2JuXCIsXG5cdFwidGFibGVBcmVhXCI6IFwibGluZUNoYXJ0X3RhYmxlQXJlYV9fMldZUzNcIixcblx0XCJkaXZpZGVyQXJlYVwiOiBcImxpbmVDaGFydF9kaXZpZGVyQXJlYV9fMnNIZnlcIixcblx0XCJkaXZpZGVyXCI6IFwibGluZUNoYXJ0X2RpdmlkZXJfXzNDVmlNXCIsXG5cdFwibGluZUFyZWFcIjogXCJsaW5lQ2hhcnRfbGluZUFyZWFfXzM0NEI2XCIsXG5cdFwic2xpZGVcIjogXCJsaW5lQ2hhcnRfc2xpZGVfXzE0ck5sXCIsXG5cdFwicG9pbnRzQXJlYVwiOiBcImxpbmVDaGFydF9wb2ludHNBcmVhX19udC1LbVwiLFxuXHRcImRhdGFXcmFwXCI6IFwibGluZUNoYXJ0X2RhdGFXcmFwX18xZFltZlwiLFxuXHRcImxpbmVcIjogXCJsaW5lQ2hhcnRfbGluZV9fMzBCVmZcIixcblx0XCJmYWRlSW5cIjogXCJsaW5lQ2hhcnRfZmFkZUluX19KWGxqSlwiLFxuXHRcImRhdGFCdG5cIjogXCJsaW5lQ2hhcnRfZGF0YUJ0bl9fbWhsNThcIixcblx0XCJ0b29sdGlwQXJlYVwiOiBcImxpbmVDaGFydF90b29sdGlwQXJlYV9fMi1UdExcIixcblx0XCJ0b3BcIjogXCJsaW5lQ2hhcnRfdG9wX18yVTdPS1wiLFxuXHRcIm1vdmVCb3hUb3BcIjogXCJsaW5lQ2hhcnRfbW92ZUJveFRvcF9fMmtJLWtcIixcblx0XCJsZWZ0XCI6IFwibGluZUNoYXJ0X2xlZnRfXzNfTURpXCIsXG5cdFwib25cIjogXCJsaW5lQ2hhcnRfb25fX0xNVmoyXCIsXG5cdFwiYmxhY2tcIjogXCJsaW5lQ2hhcnRfYmxhY2tfXzE3NnpQXCIsXG5cdFwiZ3JlZW5cIjogXCJsaW5lQ2hhcnRfZ3JlZW5fXzNRTWNiXCIsXG5cdFwiYmx1ZVwiOiBcImxpbmVDaGFydF9ibHVlX18ybXJXclwiLFxuXHRcImVtcHR5XCI6IFwibGluZUNoYXJ0X2VtcHR5X183RDdTSVwiLFxuXHRcInJvd0FyZWFcIjogXCJsaW5lQ2hhcnRfcm93QXJlYV9fMnFKTW5cIixcblx0XCJyb3dXcmFwXCI6IFwibGluZUNoYXJ0X3Jvd1dyYXBfXzFWQ1JyXCIsXG5cdFwicm93XCI6IFwibGluZUNoYXJ0X3Jvd19fVHdSYkJcIixcblx0XCJidG5cIjogXCJsaW5lQ2hhcnRfYnRuX18xM2pjNlwiLFxuXHRcInJpZ2h0XCI6IFwibGluZUNoYXJ0X3JpZ2h0X18yRE9velwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b29sdGlwX2hpZGRlbl9fMmR5U2wge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi50b29sdGlwX3RleHRFbXBoYXNpc19fMjMwM3Uge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXZW1ha2VwcmljZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzVlYzdjMztcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxufVxcblxcbi50b29sdGlwX3Rvb2x0aXBBcmVhX18zVW1ndSB7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRvb2x0aXBfdG9vbHRpcEFyZWFfXzNVbWd1LnRvb2x0aXBfYmxhY2tfXzNQcWZKIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjE2MTk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBfdG9vbHRpcEFyZWFfXzNVbWd1LnRvb2x0aXBfZ3JlZW5fXzFrczZIIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NjQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBfdG9vbHRpcEFyZWFfXzNVbWd1LnRvb2x0aXBfYmx1ZV9fTnR2eFQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTNhZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcF90b29sdGlwQXJlYV9fM1VtZ3UgLnRvb2x0aXBfdGV4dF9fM2dFMEYge1xcbiAgZm9udC1mYW1pbHk6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi50b29sdGlwX3Rvb2x0aXBBcmVhX18zVW1ndTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vdG9vbHRpcC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vLi4vc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDVko7O0FEY0E7RUFDSSxxQkFBQTtFQUNBLHNDRU5hO0VGT2IsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNHb0JRO0VIbkJSLG1CQUFBO0FDWEo7O0FBYkE7RUd5UUUsNkVBQUE7RUh0UUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFlRjtBQWJFO0VBQ0UseUJFVlk7RUZXWixXRWhCTTtBRitCVjtBQVpFO0VBQ0UseUJFRFU7RUZFVixXRXJCTTtBRm1DVjtBQVhFO0VBQ0UseUJFK0RTO0VGOURULFdFMUJNO0FGdUNWO0FBVkU7RUFDRSxtQ0NaVztFRGFYLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWUo7QUFURTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FBV0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgJ1VURi04JztcXHJcXG5cXHJcXG4vLyB2YXJpYWJsZXNcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi92YXJpYWJsZXMvcGF0aC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gbWl4aW5zXFxyXFxuQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxyXFxuXFxyXFxuLy8gaGlkZGVuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIG1hcmdpbjogLTFweDtcXHJcXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g7Jet6rKAIOqwleyhsFxcclxcbi50ZXh0RW1waGFzaXMge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkRl9XRU1BS0VfUFJJQ0U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGNvbG9yOiAkQ19TS1lfMjAwO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xcclxcbn1cIixcIi5oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxufVxcblxcbi50ZXh0RW1waGFzaXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXZW1ha2VwcmljZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzVlYzdjMztcXG4gIHZlcnRpY2FsLWFsaWduOiAycHg7XFxufVxcblxcbi50b29sdGlwQXJlYSB7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRvb2x0aXBBcmVhLmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjE2MTk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBBcmVhLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM1NjQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnRvb2x0aXBBcmVhLmJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTNhZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udG9vbHRpcEFyZWEgLnRleHQge1xcbiAgZm9udC1mYW1pbHk6IFByZXRlbmRhcmQsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi50b29sdGlwQXJlYTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cIixcIi8vIGhlYWRlciBoZWlnaHRcXHJcXG4kTUlOX1dJRFRIOiAxMTY4cHg7XFxyXFxuJEhFQURFUl9TRUFSQ0hfQVJFQV9IRUlHSFQ6IDcwcHg7XFxyXFxuJEhFQURFUl9TRUFSQ0hfQVJFQV9NQVhfSEVJR0hUOiA4MnB4O1xcclxcbiRIRUFERVJfTUVOVV9BUkVBX0hFSUdIVDogNDhweDtcXHJcXG4kSEVBREVSX0hFSUdIVDogJEhFQURFUl9TRUFSQ0hfQVJFQV9IRUlHSFQgKyAkSEVBREVSX01FTlVfQVJFQV9IRUlHSFQ7XFxyXFxuJENPTlRFTlRTX1dJRFRIOiAxMTIwcHg7XFxyXFxuJEZPT1RFUl9DT05URU5UX0hFSUdIVDogMTA0cHg7XFxyXFxuJEZPT1RFUl9DT1BZUklHSFRfSEVJR0hUOiA0NnB4O1xcclxcbiRGT09URVJfSEVJR0hUOiAkRk9PVEVSX0NPTlRFTlRfSEVJR0hUICsgJEZPT1RFUl9DT1BZUklHSFRfSEVJR0hUO1xcclxcblxcclxcbi8vIOqzte2GtSDsu7Ttj6zrhIztirgg7IKs7J207KaIXFxyXFxuJFRPUF9OVURHRV9IRUlHSFQ6IDQ4cHg7XFxyXFxuXFxyXFxuLy8gZm9udFxcclxcbiRGX05PVE9fU0FOU19LUjogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XFxyXFxuJEZfTU9OVFNFUlJBVDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiRGX1dFTUFLRV9QUklDRTogJ1dlbWFrZXByaWNlJywgc2Fucy1zZXJpZjtcXHJcXG4kRl9QUkVURU5EQVJEOiBQcmV0ZW5kYXJkLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbi8vIHotaW5kZXhcXHJcXG4kWl9JTkRFWF9CQVNJQzogMTA7XFxyXFxuJFpfSU5ERVhfRklYRUQ6IDEwMDtcIixcIiRDX1dISVRFOiAjZmZmO1xcclxcbiRDX0JMQUNLOiAjMDAwO1xcclxcbiRDX0dVSURFTElORTogIzBmZjtcXHJcXG5cXHJcXG4vLyBKT0JEQSBCTEFDS1xcclxcbiRDX0pPQkRBX0JMQUNLOiAjMTIxNjE5O1xcclxcblxcclxcbi8vIEpPQkRBIFdISVRFXFxyXFxuJENfSk9CREFfV0hJVEU6ICNmOWY5ZmE7XFxyXFxuXFxyXFxuLy8gR1JFRU5cXHJcXG4kQ19HUkVFTl8zMDogI2VmZmRmMztcXHJcXG4kQ19HUkVFTl80MDogI2UwZjllNDtcXHJcXG4kQ19HUkVFTl81MDogI2QwZjVkYTtcXHJcXG4kQ19HUkVFTl82MDogI2MzZjJjZDtcXHJcXG4kQ19HUkVFTl83MDogI2IzZWVjMTtcXHJcXG4kQ19HUkVFTl84MDogI2EyZWJiNDtcXHJcXG4kQ19HUkVFTl85MDogIzkyZTZhMztcXHJcXG4kQ19HUkVFTl8xMDA6ICM2Y2RkODM7XFxyXFxuJENfR1JFRU5fMjAwOiAjNTJjNTY0O1xcclxcbiRDX0dSRUVOXzMwMDogIzQxYWM0ZDtcXHJcXG4kQ19HUkVFTl80MDA6ICMzYzhlNDI7XFxyXFxuJENfR1JFRU5fNTAwOiAjMzc3NTM4O1xcclxcblxcclxcbi8vIFlFTExPV1xcclxcbiRDX1lFTExPV18zMDogI2ZmZmVmMjtcXHJcXG4kQ19ZRUxMT1dfNDA6ICNmZmZkZTU7XFxyXFxuJENfWUVMTE9XXzUwOiAjZmVmY2Q4O1xcclxcbiRDX1lFTExPV182MDogI2ZlZmNjYjtcXHJcXG4kQ19ZRUxMT1dfNzA6ICNmZWY5YmQ7XFxyXFxuJENfWUVMTE9XXzgwOiAjZmVmOGIxO1xcclxcbiRDX1lFTExPV185MDogI2ZkZjY5ZTtcXHJcXG4kQ19ZRUxMT1dfMTAwOiAjZmNmMTZjO1xcclxcbiRDX1lFTExPV18yMDA6ICNlN2RhNGI7XFxyXFxuJENfWUVMTE9XXzMwMDogI2Q4Y2EyYztcXHJcXG4kQ19ZRUxMT1dfNDAwOiAjYjNhODJhO1xcclxcbiRDX1lFTExPV181MDA6ICM5MzhhMjk7XFxyXFxuXFxyXFxuLy8gU0tZXFxyXFxuJENfU0tZXzMwOiAjZjNmZGZjO1xcclxcbiRDX1NLWV80MDogI2U5ZjlmOTtcXHJcXG4kQ19TS1lfNTA6ICNkY2Y3ZjY7XFxyXFxuJENfU0tZXzYwOiAjZDFmNWYzO1xcclxcbiRDX1NLWV83MDogI2M1ZjFlZjtcXHJcXG4kQ19TS1lfODA6ICNiYmVmZWQ7XFxyXFxuJENfU0tZXzkwOiAjYWZlY2VhO1xcclxcbiRDX1NLWV8xMDA6ICM3YWRlZGE7XFxyXFxuJENfU0tZXzIwMDogIzVlYzdjMztcXHJcXG4kQ19TS1lfMzAwOiAjNDZiMmFmO1xcclxcbiRDX1NLWV80MDA6ICM0MDkzOTA7XFxyXFxuJENfU0tZXzUwMDogIzNhNzk3NztcXHJcXG5cXHJcXG4vLyBMSU1FXFxyXFxuJENfTElNRV8zMDogI2Y5ZmZlYjtcXHJcXG4kQ19MSU1FXzQwOiAjZjNmZWRmO1xcclxcbiRDX0xJTUVfNTA6ICNlZGZkZDI7XFxyXFxuJENfTElNRV82MDogI2U3ZmNjNjtcXHJcXG4kQ19MSU1FXzcwOiAjZTJmYmI5O1xcclxcbiRDX0xJTUVfODA6ICNkY2ZhYWQ7XFxyXFxuJENfTElNRV85MDogI2QwZjg5NDtcXHJcXG4kQ19MSU1FXzEwMDogI2JmZWY3YjtcXHJcXG4kQ19MSU1FXzIwMDogI2E0ZDk1YTtcXHJcXG4kQ19MSU1FXzMwMDogIzhlYzkzZDtcXHJcXG4kQ19MSU1FXzQwMDogIzc5YTgzNztcXHJcXG4kQ19MSU1FXzUwMDogIzY2OGEzMztcXHJcXG5cXHJcXG4vLyBQVVJQTEVcXHJcXG4kQ19QVVJQTEVfMzA6ICNmNWYyZmQ7XFxyXFxuJENfUFVSUExFXzQwOiAjZjJlZGZjO1xcclxcbiRDX1BVUlBMRV81MDogI2VlZTdmYztcXHJcXG4kQ19QVVJQTEVfNjA6ICNlOGUwZmI7XFxyXFxuJENfUFVSUExFXzcwOiAjZTBkNWY5O1xcclxcbiRDX1BVUlBMRV84MDogI2Q1YzdmNztcXHJcXG4kQ19QVVJQTEVfOTA6ICNjN2I0ZjQ7XFxyXFxuJENfUFVSUExFXzEwMDogI2I0OWJmMDtcXHJcXG4kQ19QVVJQTEVfMjAwOiAjOTM3NWRiO1xcclxcbiRDX1BVUlBMRV8zMDA6ICM3NzUzY2E7XFxyXFxuJENfUFVSUExFXzQwMDogIzYyM2ZiMztcXHJcXG4kQ19QVVJQTEVfNTAwOiAjNTUzYjk0O1xcclxcblxcclxcbi8vIEJMVUVcXHJcXG4kQ19CTFVFXzMwOiAjZTFlN2Y4O1xcclxcbiRDX0JMVUVfNDA6ICNjM2QxZWY7XFxyXFxuJENfQkxVRV81MDogI2E3YjllNztcXHJcXG4kQ19CTFVFXzYwOiAjOGJhM2RmO1xcclxcbiRDX0JMVUVfNzA6ICM3MThkZDc7XFxyXFxuJENfQkxVRV84MDogIzU4NzhjZjtcXHJcXG4kQ19CTFVFXzkwOiAjMzE1ZmM3O1xcclxcbiRDX0JMVUVfMTAwOiAjMmI1M2FlO1xcclxcbiRDX0JMVUVfMjAwOiAjMzA0YTg5O1xcclxcbiRDX0JMVUVfMzAwOiAjMmM0MTcwO1xcclxcbiRDX0JMVUVfNDAwOiAjMjkzODVkO1xcclxcbiRDX0JMVUVfNTAwOiAjMjUzMTRkO1xcclxcblxcclxcbi8vIEdSQVlcXHJcXG4kQ19DT09MX0dSQVlfMzA6ICNmNGY0ZjU7XFxyXFxuJENfQ09PTF9HUkFZXzQwOiAjZTdlOGVhO1xcclxcbiRDX0NPT0xfR1JBWV81MDogI2NmZDFkNTtcXHJcXG4kQ19DT09MX0dSQVlfNjA6ICM5ZmE0YWI7XFxyXFxuJENfQ09PTF9HUkFZXzcwOiAjNjU2YTcxO1xcclxcbiRDX0NPT0xfR1JBWV84MDogIzQ0NDc0YjtcXHJcXG4kQ19DT09MX0dSQVlfOTA6ICMyNTI4MmI7XFxyXFxuXFxyXFxuJENfV0FSTV9HUkFZXzMwOiAjZjRmNGY0O1xcclxcbiRDX1dBUk1fR1JBWV80MDogI2U4ZThlODtcXHJcXG4kQ19XQVJNX0dSQVlfNTA6ICNkMWQxZDE7XFxyXFxuJENfV0FSTV9HUkFZXzYwOiAjYTRhNGE0O1xcclxcbiRDX1dBUk1fR1JBWV83MDogIzZhNmE2YTtcXHJcXG4kQ19XQVJNX0dSQVlfODA6ICM0NzQ3NDc7XFxyXFxuJENfV0FSTV9HUkFZXzkwOiAjMjMyMzIzO1xcclxcblxcclxcbi8vIFdBUk5JTkdcXHJcXG4kQ19XQVJOSU5HOiAjZjZhNjA5O1xcclxcbiRDX1dBUk5JTkdfREFSSzogI2U4OTgwNjtcXHJcXG4kQ19XQVJOSU5HX0xJR0hUOiAjZmZiYzFmO1xcclxcbiRDX1dBUk5JTkdfUkVEOiAjZmI0ZTRlO1xcclxcbiRDX1dBUk5JTkdfUkVEX0RBUks6ICNlOTNjM2M7XFxyXFxuJENfV0FSTklOR19SRURfTElHSFQ6ICNmZjYyNjI7XFxyXFxuJENfV0FSTklOR19SRURfV0hJVEU6ICNmOWUwZTI7XFxyXFxuXFxyXFxuXFxyXFxuLy8gUE9TSVRJVkVcXHJcXG4kQ19QT1NJVElWRTogIzZjZGQ4MztcXHJcXG4kQ19QT1NJVElWRV9EQVJLOiAjM2VkMTYwO1xcclxcbiRDX1BPU0lUSVZFX0xJR0hUOiAjOTJlNmEzO1xcclxcblxcclxcbi8vIE5FR0FUSVZFXFxyXFxuJENfTkVHQVRJVkU6ICNmYjRlNGU7XFxyXFxuJENfTkVHQVRJVkVfREFSSzogI2U5M2MzYztcXHJcXG4kQ19ORUdBVElWRV9MSUdIVDogI2ZmNjI2MjtcXHJcXG5cIixcIi8vIGVsbGlwc2lzXFxyXFxuLy8gQHBhcmFtIHtudW1iZXJ9ICRMSU5FIC0g7KSEIOyImFxcclxcbi8vIEBwYXJhbSB7cHh9ICRMSU5FX0hFSUdIVCAtIO2VnOykhCDrhpLsnbRcXHJcXG5AbWl4aW4gZWxsaXBzaXMoJExJTkU6IDEsICRMSU5FX0hFSUdIVDogMS4yZW0pIHtcXHJcXG5cXHRAaWYoJExJTkUgPT0gMSkge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuXFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcblxcdFxcdC13ZWJraXQtbGluZS1jbGFtcDogJExJTkU7XFxyXFxuXFx0XFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXHJcXG5cXHRcXHRtYXgtaGVpZ2h0OiAkTElORV9IRUlHSFQgKiAkTElORTsgLy8gd2Via2l0IOydtOyZuOydmCDruIzrnbzsmrDsoIAg64yA7J2RXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6ICRMSU5FX0hFSUdIVDtcXHJcXG5cXHRcXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG5cXHRcXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g6rO17Ya1IOuyhO2KvCDsiqTtg4DsnbxcXHJcXG4vLyBAcGFyYW0ge3N0cmluZ30gJFRZUEUgLSDrsoTtirwg7YOA7J6FXFxyXFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRTSVpFIC0g67KE7Yq8IO2BrOq4sFxcclxcbkBtaXhpbiBjb21tb25CdG5TdHlsZSgkVFlQRTogJ3ByaW1hcnknLCAkU0laRTogJ2xhcmdlJykge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcblxcdCY6ZGlzYWJsZWQge1xcclxcblxcdFxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g7Iqk7YOA7J287JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRAaWYoJFRZUEUgPT0gJ3ByaW1hcnknKSB7XFxyXFxuXFx0XFx0d2lkdGg6IDIyOHB4O1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdGNvbG9yOiAkQ19KT0JEQV9XSElURTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQvLyDtgazquLDsl5Ag65Sw66W4IOyymOumrFxcclxcblxcdFxcdEBpZigkU0laRSA9PSAnbGFyZ2UnKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA2NHB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNjRweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcXHJcXG5cXHRcXHR9IEBlbHNlIGlmKCRTSVpFID09ICdtZWRpdW0nKSB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA1NnB4O1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogNTZweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcXHJcXG5cXHRcXHR9IEBlbHNlIGlmKCRTSVpFID09ICdzbWFsbCcpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDQ0cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA0NHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19HUkVFTl8yMDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6ZGlzYWJsZWQge1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0Ly8g7Iqk7YOA7J287JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAnc2Vjb25kYXJ5Jykge1xcclxcblxcdFxcdHdpZHRoOiAyMjhweDtcXHJcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX1dISVRFO1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRjb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcclxcblxcdFxcdC8vIO2BrOq4sOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0XFx0QGlmKCRTSVpFID09ICdsYXJnZScpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDY0cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA2MHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ21lZGl1bScpIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDU2cHg7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiA1MnB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ3NtYWxsJykge1xcclxcblxcdFxcdFxcdGhlaWdodDogNDRweDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuXFx0XFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGJvcmRlci1jb2xvcjogJENfR1JFRU5fMjAwO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0pPQkRBX1dISVRFO1xcclxcblxcdFxcdFxcdGNvbG9yOiAkQ19HUkVFTl8yMDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6ZGlzYWJsZWQge1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItY29sb3I6ICRDX0dSRUVOXzEwMDtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkQ19XSElURTtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJENfR1JFRU5fMTAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC8vIOyKpO2DgOydvOyXkCDrlLDrpbgg7LKY66asXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ3VuZGVybGluZScpIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfODA7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Ly8g7YGs6riw7JeQIOuUsOuluCDsspjrpqxcXHJcXG5cXHRcXHRAaWYoJFNJWkUgPT0gJ2xhcmdlJykge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTdweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMjRweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuNDFweDtcXHJcXG5cXHRcXHR9IEBlbHNlIGlmKCRTSVpFID09ICdtZWRpdW0nKSB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdFxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdFxcdH0gQGVsc2UgaWYoJFNJWkUgPT0gJ3NtYWxsJykge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTNweDtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMThweDtcXHJcXG5cXHRcXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMDg2NnB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0cmlnaHQ6IDA7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAtMXB4O1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAxcHg7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzgwO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzcwO1xcclxcblxcclxcblxcdFxcdFxcdCY6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0NPT0xfR1JBWV83MDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6ZGlzYWJsZWQge1xcclxcblxcdFxcdFxcdGNvbG9yOiAkQ19DT09MX0dSQVlfNjA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0JjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdCY6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIOqzte2GtSDsnbjtkosg7Iqk7YOA7J28XFxyXFxuQG1peGluIGNvbW1vbklucHV0U3R5bGUge1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDU2cHg7XFxyXFxuXFx0cGFkZGluZzogMCAxNnB4O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICRDX0NPT0xfR1JBWV8zMDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJENfQ09PTF9HUkFZXzMwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkRl9OT1RPX1NBTlNfS1I7XFxyXFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xcclxcblxcdGNvbG9yOiAkQ19DT09MX0dSQVlfOTA7XFxyXFxuXFx0b3V0bGluZTogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcblxcclxcblxcdC8vIOyDneuFhOyblOydvCDqsr3smrBcXHJcXG5cXHQmLnR5cGUyIHtcXHJcXG5cXHRcXHR3aWR0aDogMjEycHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vIOyjvOuvvOuTseuhneuyiO2YuCDrkrfsnpDrpqwg6rK97JqwXFxyXFxuXFx0Ji50eXBlMyB7XFxyXFxuXFx0XFx0d2lkdGg6IDYwcHg7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvL+2ctOuMgO2PsCDrsojtmLjsnbwg6rK97JqwXFxyXFxuXFx0Ji5tb2JpbGUge1xcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAyLjZweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g67KE7Yq8KOyduOymneyalOyyrSwg7KSR67O17ZmV7J24LCDruYTrsIDrsojtmLjtmZXsnbgp7J20IOyeiOuKlCDqsr3smrBcXHJcXG5cXHQmLndpdGhCdXR0b24ge1xcclxcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDqsoDsg4nsnbQg6rCA64ql7ZWcIOqyveyasChzZWFyY2ggaWNvbilcXHJcXG5cXHQmLnNlYXJjaCB7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiA0OHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmLmVycm9yIHtcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICRDX05FR0FUSVZFO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOmZvY3VzLFxcclxcblxcdCYuc3VjY2VzcyB7XFxyXFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAkQ19HUkVFTl8xMDA7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJENfV0hJVEU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCY6ZGlzYWJsZWQge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRDX0pPQkRBX1dISVRFO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRGX05PVE9fU0FOU19LUjtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE1cHg7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XFxyXFxuXFx0XFx0Y29sb3I6ICRDX0NPT0xfR1JBWV82MDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvL2llMTFcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMjBweDtcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvL2VkZ2VcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJEZfTk9UT19TQU5TX0tSO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMjBweDtcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcXHJcXG5cXHRcXHRjb2xvcjogJENfQ09PTF9HUkFZXzYwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g6rO17Ya1IGJveC1zaGFkb3cg7Iqk7YOA7J28XFxyXFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRUWVBFIC0gYm94LXNoYWRvdyDtg4DsnoVcXHJcXG5AbWl4aW4gY29tbW9uQm94U2hhZG93U3R5bGUoJFRZUEU6ICdiYXNlJykge1xcclxcblxcdEBpZigkVFlQRSA9PSAnYmFzZScpIHtcXHJcXG5cXHRcXHRib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICdtZWRpdW0nKSB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAnbGFyZ2UnKSB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBlbHNlIGlmKCRUWVBFID09ICd4bGFyZ2UnKSB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDIwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGVsc2UgaWYoJFRZUEUgPT0gJ3h4bGFyZ2UnKSB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogMHB4IDI1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAZWxzZSBpZigkVFlQRSA9PSAnaW5uZXInKSB7XFxyXFxuXFx0XFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIHNjcm9sbFxcclxcbkBtaXhpbiBzY3JvbGwoJFNDUk9MTF9XSURUSDogNHB4LCAkSUVfVFJBQ0tfQ09MT1I6ICRDX1dISVRFKSB7XFxyXFxuXFx0JEJBU0lDX1NDUk9MTF9XSURUSDogMTdweDtcXHJcXG5cXHQkU0NST0xMX0JBUl9DT0xPUjogJENfQ09PTF9HUkFZXzQwO1xcclxcblxcdCRUUkFDSzogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0XFxyXFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKCN7JFNDUk9MTF9XSURUSH0gLSAjeyRCQVNJQ19TQ1JPTExfV0lEVEh9KTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwO1xcclxcblxcclxcblxcdC8qICBJRSBzY3JvbGxiYXIgc3R5bGUgICovXFxyXFxuXFx0c2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRTQ1JPTExfQkFSX0NPTE9SO1xcclxcblxcdHNjcm9sbGJhci1zaGFkb3ctY29sb3I6ICRTQ1JPTExfQkFSX0NPTE9SO1xcclxcblxcdHNjcm9sbGJhci10cmFjay1jb2xvcjogJElFX1RSQUNLX0NPTE9SO1xcclxcblxcdHNjcm9sbGJhci1hcnJvdy1jb2xvcjogJElFX1RSQUNLX0NPTE9SO1xcclxcblxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHR3aWR0aDogJEJBU0lDX1NDUk9MTF9XSURUSDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRTQ1JPTExfQkFSX0NPTE9SO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJFRSQUNLO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcclxcblxcdFxcdHdpZHRoOiAwO1xcclxcblxcdFxcdGhlaWdodDogMDtcXHJcXG5cXHR9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhpZGRlblwiOiBcInRvb2x0aXBfaGlkZGVuX18yZHlTbFwiLFxuXHRcInRleHRFbXBoYXNpc1wiOiBcInRvb2x0aXBfdGV4dEVtcGhhc2lzX18yMzAzdVwiLFxuXHRcInRvb2x0aXBBcmVhXCI6IFwidG9vbHRpcF90b29sdGlwQXJlYV9fM1VtZ3VcIixcblx0XCJibGFja1wiOiBcInRvb2x0aXBfYmxhY2tfXzNQcWZKXCIsXG5cdFwiZ3JlZW5cIjogXCJ0b29sdGlwX2dyZWVuX18xa3M2SFwiLFxuXHRcImJsdWVcIjogXCJ0b29sdGlwX2JsdWVfX050dnhUXCIsXG5cdFwidGV4dFwiOiBcInRvb2x0aXBfdGV4dF9fM2dFMEZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudHNfY29udGVudHNfXzJSWkRBIHtcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29udGVudHMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50cyB7XFxyXFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVudHNcIjogXCJjb250ZW50c19jb250ZW50c19fMlJaREFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZF9ncmlkQXJlYV9fMlN4QUMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdyaWRfY2hlY2tib3hBcmVhX18xNk1VbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgYm90dG9tOiA0MHB4O1xcbn1cXG5cXG4uZ3JpZF9vbk9mZl9fMTlXSW4ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ncmlkLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZEFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94QXJlYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiA0MHB4O1xcclxcbiAgYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub25PZmYge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImdyaWRBcmVhXCI6IFwiZ3JpZF9ncmlkQXJlYV9fMlN4QUNcIixcblx0XCJjaGVja2JveEFyZWFcIjogXCJncmlkX2NoZWNrYm94QXJlYV9fMTZNVW1cIixcblx0XCJvbk9mZlwiOiBcImdyaWRfb25PZmZfXzE5V0luXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gOTMxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MzEpO1xuLyoqKioqKi8gfSkoKVxuOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9saW5lQ2hhcnQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uc1Byb3BzIHtcclxuICBzbGlkZUluZGV4OiBudW1iZXI7XHJcbiAgc2V0U2xpZGVJbmRleDogKHNsaWRlSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBtYXhSb3c6IG51bWJlcjtcclxuICB2aWV3Q291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQnV0dG9ucyA9ICh7IHNsaWRlSW5kZXgsIHNldFNsaWRlSW5kZXgsIHZpZXdDb3VudCwgbWF4Um93ICB9OiBCdXR0b25zUHJvcHMpID0+IHtcclxuICBjb25zdCBpc092ZXIgPSB2aWV3Q291bnQgPCBtYXhSb3c7XHJcbiAgY29uc3QgcHJldkJ0blZpc2libGUgPSBpc092ZXIgJiYgc2xpZGVJbmRleCAhPT0gMDtcclxuICBjb25zdCBuZXh0QnRuVmlzaWJsZSA9IGlzT3ZlciAmJiBzbGlkZUluZGV4IDwgbWF4Um93IC0gdmlld0NvdW50O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3ByZXZCdG5WaXNpYmxlICYmIChcclxuICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdidG4nLCAnbGVmdCcpfSBvbkNsaWNrPXsoKSA9PiBzZXRTbGlkZUluZGV4KHNsaWRlSW5kZXggLSAxKX0gcm9sZT1cImJ1dHRvblwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtuZXh0QnRuVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnYnRuJywgJ3JpZ2h0Jyl9IG9uQ2xpY2s9eygpID0+IHNldFNsaWRlSW5kZXgoc2xpZGVJbmRleCArIDEpfSByb2xlPVwiYnV0dG9uXCIgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uczsiLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGluZUNoYXJ0Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIENvbHVtbnNQcm9wcyB7XHJcbiAgY29sdW1uczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IENvbHVtbnMgPSAoe2NvbHVtbnN9OiBDb2x1bW5zUHJvcHMpID0+IHtcclxuICBjb25zdCBjb2x1bW5zRWwgPSBjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4gKFxyXG4gICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2N4KCdjb2x1bW4nKX0+XHJcbiAgICAgIHtjb2x1bW59XHJcbiAgICA8L2Rpdj5cclxuICApKS5yZXZlcnNlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbHVtbkFyZWEnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY29sdW1uV3JhcCcpfT57Y29sdW1uc0VsfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5zOyIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9saW5lQ2hhcnQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGl2aWRlclByb3BzIHtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBEaXZpZGVyID0gKHsgdmFsdWUgfTogRGl2aWRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGl2aWRlckVsID0gbmV3IEFycmF5KHZhbHVlKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjeCgnZGl2aWRlcicpfSAvPik7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGl2aWRlckFyZWEnKX0+e2RpdmlkZXJFbH08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xpbmVDaGFydC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0NoYXJ0RGF0YSwgRURHRV9TUEFDRSwgTGluZUNoYXJ0VHlwZSwgTGluZUNvbG9ycywgU2hhcGVDb2xvcnN9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IHtSZWZPYmplY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBMaW5lUHJvcHMge1xyXG4gIGRhdGE6IENoYXJ0RGF0YVtdO1xyXG4gIHR5cGU/OiBMaW5lQ2hhcnRUeXBlO1xyXG4gIHJvd3M6IHN0cmluZ1tdO1xyXG4gIGNvbHVtbkhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IExpbmUgPSAoe2RhdGEsIHR5cGUsIHJvd3MsIGNvbHVtbkhlaWdodCwgd2lkdGgsIGhlaWdodH06IExpbmVQcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IGdldERhdGFMaW5lRWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHJva2UgPSBMaW5lQ29sb3JzW3R5cGVdO1xyXG4gICAgY29uc3QgZmlsbCA9IFNoYXBlQ29sb3JzW3R5cGVdO1xyXG5cclxuICAgIGNvbnN0IGdldFggPSAodmFsdWU6IG51bWJlcikgPT4gKHdpZHRoIC8gKHJvd3MubGVuZ3RoICsgKDEgLSBFREdFX1NQQUNFKSkpICogKHZhbHVlICsgRURHRV9TUEFDRSk7XHJcbiAgICBjb25zdCBnZXRZID0gKHZhbHVlOiBudW1iZXIpID0+IGhlaWdodCAtIGNvbHVtbkhlaWdodCAqIHZhbHVlO1xyXG4gICAgY29uc3QgZ2V0Q2hhciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZSA9PT0gZGF0YS5sZW5ndGggLSAxID8gJycgOiAnTCc7XHJcbiAgICBjb25zdCBnZXRQb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gYCR7Z2V0WCh4KX0gJHtnZXRZKHkpfWA7XHJcblxyXG4gICAgY29uc3QgZ2V0TGluZURhdGEgPSAoKSA9PlxyXG4gICAgICBkYXRhLnJlZHVjZSgocHJldiwge2NvbHVtbn0sIGkpID0+XHJcbiAgICAgICAgYCR7cHJldn0gJHtnZXRQb2ludChpLCBjb2x1bW4pfSAke2dldENoYXIoaSl9YCwgJ00nKTtcclxuXHJcbiAgICBjb25zdCBnZXRTaGFwZURhdGEgPSAoKSA9PlxyXG4gICAgICBkYXRhLnJlZHVjZSgocHJldiwge2NvbHVtbn0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGFwZSA9IGBMJHtnZXRYKGkpfSAke2hlaWdodH0gTCR7d2lkdGggLyAocm93cy5sZW5ndGgpICogRURHRV9TUEFDRX0gJHtoZWlnaHR9IFpgO1xyXG4gICAgICAgICAgcmV0dXJuIGAke3ByZXZ9ICR7Z2V0UG9pbnQoaSwgY29sdW1uKX0gJHtzaGFwZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7cHJldn0gJHtnZXRQb2ludChpLCBjb2x1bW4pfSAke2dldENoYXIoaSl9YDtcclxuICAgICAgfSwgJ00nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICA8cGF0aCBkPXtnZXRMaW5lRGF0YSgpfSBzdHJva2U9e3N0cm9rZX0vPlxyXG4gICAgICAgIDxwYXRoIGQ9e2dldFNoYXBlRGF0YSgpfSBmaWxsPXtmaWxsfSBmaWxsT3BhY2l0eT17MC4yfS8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgnbGluZUFyZWEnKX0+e2dldERhdGFMaW5lRWwoKX08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmU7IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xpbmVDaGFydC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0NoYXJ0RGF0YSwgRURHRV9TUEFDRSwgTGluZUNoYXJ0VHlwZX0gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBQb2ludHNQcm9wcyB7XHJcbiAgZGF0YTogQ2hhcnREYXRhW107XHJcbiAgdHlwZT86IExpbmVDaGFydFR5cGU7XHJcbiAgb25JbmRleDogbnVtYmVyO1xyXG4gIGhhbmRsZUNsaWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICBjb2x1bW5IZWlnaHQ6IG51bWJlcjtcclxuICBtYXhSb3c6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgcG9pbnRzQW5pbWF0aW9uRGVsYXkgPSBbXHJcbiAgMCwgMC4xLCAwLjIsIDAuMywgMC40LCAwLjQ1LCAwLjUsIDAuNTUsIDAuNiwgMC42NSwgMC43LCAwLjc1XHJcbl07XHJcblxyXG5jb25zdCBQb2ludHMgPSAoe2RhdGEsIHR5cGUsIG9uSW5kZXgsIGhhbmRsZUNsaWNrLCBjb2x1bW5IZWlnaHQsIG1heFJvd306IFBvaW50c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgdGlnZ2VyUmVmID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICBjb25zdCBnZXREYXRhRWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhRWwgPSBkYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3Qge2NvbHVtbiwgdG9vbFRpcCwgdG9vbFRpcFBvc2l0aW9uID0gJ3RvcCd9ID0gZDtcclxuICAgICAgY29uc3QgaXNPbiA9IGluZGV4ID09PSBvbkluZGV4O1xyXG5cclxuICAgICAgY29uc3QgZ2V0TGluZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWlzT24pIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdsaW5lJywge2ZhZGVJbjogdGlnZ2VyUmVmLmN1cnJlbnR9KX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtjb2x1bW4gKiBjb2x1bW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtwb2ludHNBbmltYXRpb25EZWxheVtpbmRleF19c2BcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCdkYXRhV3JhcCcsIHR5cGUsIHtvbjogaXNPbn0pfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGluZGV4ID09PSAwID8gYCR7RURHRV9TUEFDRSAqIDEwMH0lYCA6ICcxMDAlJyxcclxuICAgICAgICAgICAgekluZGV4OiBkYXRhLmxlbmd0aCAtIGluZGV4XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtnZXRMaW5lKCl9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdkYXRhQnRuJyl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtjb2x1bW4gKiBjb2x1bW5IZWlnaHR9cHgpYCxcclxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7cG9pbnRzQW5pbWF0aW9uRGVsYXlbaW5kZXhdfXNgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aWdnZXJSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNsaWNrKGluZGV4KTsgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3Rvb2x0aXBBcmVhJywgdG9vbFRpcFBvc2l0aW9uLCB7b246IGlzT259KX0+XHJcbiAgICAgICAgICAgICAge3Rvb2xUaXB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZW1wdHlEYXRhRWwgPSBuZXcgQXJyYXkobWF4Um93IC0gZGF0YS5sZW5ndGgpXHJcbiAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y3goJ2RhdGFXcmFwJywgJ2VtcHR5Jyl9Lz4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge2RhdGFFbH1cclxuICAgICAgICB7ZW1wdHlEYXRhRWx9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdkYXRhV3JhcCcsICdlbXB0eScpfSBzdHlsZT17e3dpZHRoOiBgJHtFREdFX1NQQUNFICogMTAwfSVgfX0vPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeCgncG9pbnRzQXJlYScpfT57Z2V0RGF0YUVsKCl9PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludHM7IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xpbmVDaGFydC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQge0VER0VfU1BBQ0V9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgUm93c1Byb3BzIHtcclxuICByb3dzOiBzdHJpbmdbXTtcclxuICBtYXhSb3c6IG51bWJlcjtcclxuICBvbkluZGV4OiBudW1iZXI7XHJcbiAgaGFuZGxlQ2xpY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHRhYmxlV2lkdGhXaGl0VW5pdDogc3RyaW5nO1xyXG4gIHRyYW5zbGF0ZVg6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUm93cyA9ICh7IHJvd3MsIG1heFJvdywgb25JbmRleCwgaGFuZGxlQ2xpY2ssIHRhYmxlV2lkdGhXaGl0VW5pdCwgdHJhbnNsYXRlWCB9OiBSb3dzUHJvcHMpID0+IHtcclxuICBjb25zdCBnZXRSb3dzRWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3dFbCA9IHJvd3MubWFwKChyb3csIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KCdyb3cnLCB7IG9uOiBpbmRleCA9PT0gb25JbmRleCB9KX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbmRleCA9PT0gMCA/IGAke0VER0VfU1BBQ0UgKiAxMDB9JWAgOiAnMTAwJScgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cm93fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZW1wdHlSb3dFbCA9IG5ldyBBcnJheShtYXhSb3cgLSByb3dzLmxlbmd0aClcclxuICAgICAgLmZpbGwobnVsbClcclxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjeCgncm93Jyl9IC8+KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtyb3dFbH1cclxuICAgICAgICB7ZW1wdHlSb3dFbH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3JvdycpfSBzdHlsZT17eyB3aWR0aDogYCR7RURHRV9TUEFDRSAqIDEwMH0lYH19IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdyb3dBcmVhJyl9IHN0eWxlPXt7IHdpZHRoOiB0YWJsZVdpZHRoV2hpdFVuaXQsIHRyYW5zZm9ybTogdHJhbnNsYXRlWCB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdyb3dXcmFwJyl9PntnZXRSb3dzRWwoKX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm93czsiLCJpbXBvcnQge1JlYWN0RWxlbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgdHlwZSBMaW5lQ2hhcnRUeXBlID0gJ2JsYWNrJyB8ICdncmVlbicgfCAnYmx1ZSc7XHJcbmV4cG9ydCB0eXBlIFRvb2xUaXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdsZWZ0JztcclxuXHJcbmV4cG9ydCBjb25zdCBFREdFX1NQQUNFID0gMC42NjtcclxuXHJcbmV4cG9ydCBlbnVtIExpbmVDb2xvcnMge1xyXG4gIGJsYWNrID0gJyM0NDQ3NEInLFxyXG4gIGdyZWVuID0gJyM1MkM1NjQnLFxyXG4gIGJsdWUgPSAnIzJCNTNBRScsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNoYXBlQ29sb3JzIHtcclxuICBibGFjayA9ICcjQ0ZEMUQ1JyxcclxuICBncmVlbiA9ICcjRTBGOUU0JyxcclxuICBibHVlID0gJyNDM0QxRUYnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RGF0YSB7XHJcbiAgY29sdW1uOiBudW1iZXI7XHJcbiAgdG9vbFRpcD86IFJlYWN0RWxlbWVudDtcclxuICB0b29sVGlwUG9zaXRpb24/OiBUb29sVGlwUG9zaXRpb25UeXBlO1xyXG59IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xpbmVDaGFydC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDaGFydERhdGEsIExpbmVDaGFydFR5cGV9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IFJvd3MgZnJvbSBcIi4vUm93c1wiO1xyXG5pbXBvcnQgQnV0dG9ucyBmcm9tIFwiLi9CdXR0b25zXCI7XHJcbmltcG9ydCBDb2x1bW5zIGZyb20gXCIuL0NvbHVtbnNcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIi4vRGl2aWRlclwiO1xyXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9MaW5lXCI7XHJcbmltcG9ydCBQb2ludHMgZnJvbSBcIi4vUG9pbnRzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIExpbmVDaGFydFByb3BzIHtcclxuICB0eXBlPzogTGluZUNoYXJ0VHlwZTtcclxuICB2aWV3Q291bnQ6IG51bWJlcjtcclxuICByb3dzOiBzdHJpbmdbXTtcclxuICBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICBkYXRhOiBDaGFydERhdGFbXTtcclxuICBvbkluZGV4PzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMaW5lQ2hhcnQgPSAoeyB0eXBlID0gJ2JsYWNrJywgdmlld0NvdW50LCByb3dzLCBjb2x1bW5zLCBkYXRhLCBvbkluZGV4OiBvbklkeCB9OiBMaW5lQ2hhcnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtvbkluZGV4LCBzZXRPbkluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzbGlkZUluZGV4LCBzZXRTbGlkZUluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW3Jvd1dpZHRoLCBzZXRSb3dXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtjb2x1bW5IZWlnaHQsIHNldENvbHVtbkhlaWdodF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFt0YWJsZVdpZHRoLCBzZXRUYWJsZVdpZHRoXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgY2hhcnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB0YWJsZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBtYXhSb3cgPSBNYXRoLm1heChyb3dzLmxlbmd0aCwgZGF0YS5sZW5ndGgpO1xyXG4gIGNvbnN0IG1heENvbHVtbnMgPSBNYXRoLm1heChjb2x1bW5zLmxlbmd0aCwgZGF0YS5sZW5ndGggLSAxKTtcclxuICBjb25zdCBpc092ZXIgPSB2aWV3Q291bnQgPCBtYXhSb3c7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAob25JZHggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBpZHggPSBvbklkeCA+IG1heENvbHVtbnMgPyBtYXhDb2x1bW5zIDogb25JZHg7XHJcbiAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBpZHggLSB2aWV3Q291bnQgKyAxO1xyXG4gICAgICBzZXRPbkluZGV4KGlkeCA8IDAgPyAwIDogaWR4KTtcclxuICAgICAgc2V0U2xpZGVJbmRleChzbGlkZUluZGV4IDwgMCA/IDAgOiBzbGlkZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhcnRSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRSb3dXaWR0aChjaGFydFJlZi5jdXJyZW50LmNsaWVudFdpZHRoIC8gKHZpZXdDb3VudCArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRDb2x1bW5IZWlnaHQodGFibGVSZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0IC8gKGNvbHVtbnMubGVuZ3RoIC0gMSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRhYmxlV2lkdGgodGFibGVSZWYuY3VycmVudC5jbGllbnRXaWR0aCk7XHJcbiAgfSwgW3RhYmxlUmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3QgdGFibGVXaWR0aFdoaXRVbml0ID0gaXNPdmVyID8gYCR7KG1heFJvdyArIDEpICogcm93V2lkdGh9cHhgIDogJzEwMCUnO1xyXG4gIGNvbnN0IHRyYW5zbGF0ZVggPSBpc092ZXIgPyBgdHJhbnNsYXRlWCgkey0oc2xpZGVJbmRleCAqIHJvd1dpZHRoKX1weClgIDogJ3RyYW5zbGF0ZVgoMCknO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiBzZXRPbkluZGV4KGluZGV4KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnbGluZUNoYXJ0QXJlYScpfT5cclxuICAgICAgey8qIENvbHVtbnMg7JiB7JetICovfVxyXG4gICAgICA8Q29sdW1ucyBjb2x1bW5zPXtjb2x1bW5zfS8+XHJcblxyXG4gICAgICA8ZGl2IHJlZj17Y2hhcnRSZWZ9IGNsYXNzTmFtZT17Y3goJ2NoYXJ0V3JhcCcpfT5cclxuICAgICAgICA8ZGl2IHJlZj17dGFibGVSZWZ9IGNsYXNzTmFtZT17Y3goJ3RhYmxlQXJlYScpfSBzdHlsZT17eyB3aWR0aDogdGFibGVXaWR0aFdoaXRVbml0LCB0cmFuc2Zvcm06IHRyYW5zbGF0ZVggfX0+XHJcbiAgICAgICAgICB7Lyog6rCA66GcIOq1rOu2hOyEoCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8RGl2aWRlciB2YWx1ZT17Y29sdW1ucy5sZW5ndGggLSAxfS8+XHJcblxyXG4gICAgICAgICAgey8qIOq6vuydgCDshKAsIOuptCDsmIHsl60gKi99XHJcbiAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB0eXBlPXt0eXBlfSByb3dzPXtyb3dzfSBjb2x1bW5IZWlnaHQ9e2NvbHVtbkhlaWdodH0gd2lkdGg9e3RhYmxlV2lkdGh9IGhlaWdodD17dGFibGVSZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0ID8/IDB9Lz5cclxuXHJcbiAgICAgICAgICB7Lyog7KCQLCDtiLTtjIEsIOyEuOuhnCDshKAg7JiB7JetICovfVxyXG4gICAgICAgICAgPFBvaW50cyBkYXRhPXtkYXRhfSB0eXBlPXt0eXBlfSBvbkluZGV4PXtvbkluZGV4fSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IGNvbHVtbkhlaWdodD17Y29sdW1uSGVpZ2h0fSBtYXhSb3c9e21heFJvd30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFJvd3Mg7JiB7JetICovfVxyXG4gICAgICAgIDxSb3dzIHJvd3M9e3Jvd3N9IG1heFJvdz17bWF4Um93fSBvbkluZGV4PXtvbkluZGV4fSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IHRhYmxlV2lkdGhXaGl0VW5pdD17dGFibGVXaWR0aFdoaXRVbml0fSB0cmFuc2xhdGVYPXt0cmFuc2xhdGVYfS8+XHJcblxyXG4gICAgICAgIHsvKiDrsoTtirwg7JiB7JetICovfVxyXG4gICAgICAgIDxCdXR0b25zIHNsaWRlSW5kZXg9e3NsaWRlSW5kZXh9IHNldFNsaWRlSW5kZXg9e3NldFNsaWRlSW5kZXh9IG1heFJvdz17bWF4Um93fSB2aWV3Q291bnQ9e3ZpZXdDb3VudH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbGluZUNoYXJ0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9saW5lQ2hhcnQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9saW5lQ2hhcnQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Rvb2x0aXAubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbnR5cGUgVG9vbFRpcFR5cGUgPSAnYmxhY2snIHwgJ2dyZWVuJyB8ICdibHVlJztcclxuXHJcbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xyXG4gIHR5cGU/OiBUb29sVGlwVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUb29sdGlwID0gKHsgdHlwZSA9ICdibGFjaycsIHZhbHVlIH06IFRvb2x0aXBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3Rvb2x0aXBBcmVhJywgdHlwZSl9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2N4KCd0ZXh0Jyl9Pnt2YWx1ZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi90b29sdGlwLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi90b29sdGlwLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vdG9vbHRpcC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2NvbnRlbnRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9jb250ZW50cy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2NvbnRlbnRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250ZW50cy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgQ29udGVudHMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudHM7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vZ3JpZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vZ3JpZC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2dyaWQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2dyaWQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge3VzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgUkFUSU8gPSAxO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRQcm9wcyB7XHJcbiAgY2FudmFzV2lkdGg/OiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0PzogbnVtYmVyO1xyXG4gIHN0YXRlPzogYm9vbGVhbjtcclxuICBzaXplPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBHcmlkID0gKHtjYW52YXNXaWR0aCA9IDMwMDAsIGNhbnZhc0hlaWdodCA9IDIwMDAsIHN0YXRlID0gZmFsc2UsIHNpemUgPSA1MH06IEdyaWRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IHVzZVN0YXRlPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgLy8gc2V0dXAgY2FudmFzIGFuZCBzZXQgY29udGV4dFxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhc1JlZikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVuZGVyQ3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgaWYgKHJlbmRlckN0eCkgcmVzZXQocmVuZGVyQ3R4KTtcclxuICB9LCBbY2FudmFzSGVpZ2h0LCBjYW52YXNXaWR0aF0pO1xyXG5cclxuICAvLyBkcmF3XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdHgpIHtcclxuICAgICAgY29uc3Qgc3RvcmVkVHJhbnNmb3JtID0gY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybShzdG9yZWRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgZHJhd0dyaWQoKTtcclxuICAgIH1cclxuICB9LCBbXHJcbiAgICBjdHgsXHJcbiAgXSk7XHJcblxyXG4gIC8vIHJlc2V0XHJcbiAgY29uc3QgcmVzZXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICAgIGlmICghY3R4KSByZXR1cm47XHJcbiAgICBjdHguY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggKiBSQVRJTztcclxuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICogUkFUSU87XHJcbiAgICBjdHguc2NhbGUoUkFUSU8sIFJBVElPKTtcclxuXHJcbiAgICAvLyByZXNldCBzdGF0ZSBhbmQgcmVmc1xyXG4gICAgc2V0Q3R4KGN0eCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBHUklEX1NDQUxFID0gNTA7XHJcbiAgICBjb25zdCBuWCA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggKiBHUklEX1NDQUxFIC8gc2l6ZSkgLSAyO1xyXG4gICAgY29uc3QgblkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAqIEdSSURfU0NBTEUgLyBzaXplKSAtIDI7XHJcbiAgICBjb25zdCBwWCA9IGNhbnZhc1dpZHRoIC0gblggKiBzaXplO1xyXG4gICAgY29uc3QgcFkgPSBjYW52YXNIZWlnaHQgLSBuWSAqIHNpemU7XHJcblxyXG4gICAgY29uc3QgcEwgPSBNYXRoLmNlaWwocFggLyAyKSAtIDAuNTtcclxuICAgIGNvbnN0IHBUID0gTWF0aC5jZWlsKHBZIC8gMikgLSAwLjU7XHJcbiAgICBjb25zdCBwUiA9IGNhbnZhc1dpZHRoIC0gblggKiBzaXplIC0gcEw7XHJcbiAgICBjb25zdCBwQiA9IGNhbnZhc0hlaWdodCAtIG5ZICogc2l6ZSAtIHBUO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZjJmMmYyJztcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGZvciAobGV0IHggPSBwTDsgeCA8PSBjYW52YXNXaWR0aCAtIHBSOyB4ICs9IHNpemUpIHtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCBwVCk7XHJcbiAgICAgIGN0eC5saW5lVG8oeCwgY2FudmFzSGVpZ2h0IC0gcEIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHBUOyB5IDw9IGNhbnZhc0hlaWdodCAtIHBCOyB5ICs9IHNpemUpIHtcclxuICAgICAgY3R4Lm1vdmVUbyhwTCwgeSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY2FudmFzV2lkdGggLSBwUiwgeSk7XHJcbiAgICB9XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCdncmlkQXJlYScpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjaGVja2JveEFyZWEnKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjaGVja2VkPXt2aXNpYmxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0VmlzaWJsZShwcmV2ID0+ICFwcmV2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ29uT2ZmJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3Bhbj5ncmlkPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxjYW52YXNcclxuICAgICAgICByZWY9e2NhbnZhc1JlZn1cclxuICAgICAgICB3aWR0aD17Y2FudmFzV2lkdGggKiBSQVRJT31cclxuICAgICAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodCAqIFJBVElPfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiB2aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnLFxyXG4gICAgICAgICAgd2lkdGg6IGAke2NhbnZhc1dpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7Y2FudmFzSGVpZ2h0fXB4YFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWQ7IiwiY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdsYXlvdXQnPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSBcInNyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnRcIjtcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSBcInNyYy9jb21wb25lbnRzL2NoYXJ0cy9saW5lQ2hhcnQvdG9vbHRpcFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQGNvbXBvbmVudHMvZ3JpZFwiO1xyXG5pbXBvcnQge0NoYXJ0RGF0YX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRzL2xpbmVDaGFydC9kYXRhXCI7XHJcblxyXG5jb25zdCBMaW5lQ2hhcnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdldENvbHVtbnMgPSAoKSA9PiBbJzDrqoUnLCAnMTAw66qFJywgJzIwMOuqhScsICczMDDrqoUnLCAnNDAw66qFJywgJzUwMOuqhSddO1xyXG5cclxuICBjb25zdCBnZXRSb3dzID0gKCkgPT4gW1xyXG4gICAgJzIxLjAxJywgJzIxLjAyJywgJzIxLjAzJywgJzIxLjA0JyxcclxuICAgICcyMS4wNScsICcyMS4wNicsICcyMS4wNycsICcyMS4wOCcsXHJcbiAgICAnMjEuMDknLCAnMjEuMTAnLCAnMjEuMTEnLCAnMjEuMTInLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdldE1vYmlsZVJvd3MgPSAoKSA9PiBbXHJcbiAgICAnJywgJycsICcyMS4wMycsICcnLFxyXG4gICAgJycsICcyMS4wNicsICcnLCAnJyxcclxuICAgICcyMS4wOScsICcnLCAnJywgJzIxLjEyJyxcclxuICBdO1xyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGEgPSAodHlwZSk6IENoYXJ0RGF0YVtdID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIDE5MCwgMjAwLCAyMTAsIDIyMCwgMjYwLCAyODAsIDMwMCwgMzEwLCAzMjAsIDMzMCwgMzgwLCA0MDNcclxuICAgIF0ubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbHVtbjogdmFsdWUgLyAxMDAsXHJcbiAgICAgICAgdG9vbFRpcDogPFRvb2x0aXAgdmFsdWU9e2Dsp4Hsm5DsiJg6ICR7dmFsdWV966qFYH0gdHlwZT17dHlwZX0vPixcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDaGFydERhdGEyID0gKHR5cGUpOiBDaGFydERhdGFbXSA9PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICA1NSwgNjAsIDY1LCA3MCwgNzUsIDgwLCA4MCwgODAsIDgwLCA4NSwgOTAsIDk1XHJcbiAgICBdLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2x1bW46IHZhbHVlIC8gMTAwLFxyXG4gICAgICAgIHRvb2xUaXA6IDxUb29sdGlwIHZhbHVlPXtg7J6F7IKs7J6QOiAke3ZhbHVlfeuqhWB9IHR5cGU9e3R5cGV9Lz4sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhcnREYXRhMyA9ICh0eXBlKTogQ2hhcnREYXRhW10gPT4ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgNTUsIDYwLCA2NSwgNzAsIDc1LCA4MCwgODAsIDgwLCA4MCwgODUsIDkwLCA5NVxyXG4gICAgXS5tYXAoKHZhbHVlLCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29sdW1uOiB2YWx1ZSAvIDEwMCxcclxuICAgICAgICB0b29sVGlwOiA8VG9vbHRpcCB2YWx1ZT17YO2HtOyCrOyekDogJHt2YWx1ZX3rqoVgfSB0eXBlPXt0eXBlfS8+LFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8R3JpZCBzaXplPXs1MH0vPlxyXG4gICAgICA8Q29udGVudHM+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6ICcxMDBweCd9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzE0MDBweCcsIGhlaWdodDogJzQ4NHB4J319PlxyXG4gICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgdHlwZT17J2JsYWNrJ31cclxuICAgICAgICAgICAgICByb3dzPXtnZXRSb3dzKCl9XHJcbiAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2dldENoYXJ0RGF0YSgnYmxhY2snKX1cclxuICAgICAgICAgICAgICBvbkluZGV4PXsxMX1cclxuICAgICAgICAgICAgICB2aWV3Q291bnQ9ezEyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMTAwcHgnLCBoZWlnaHQ6ICczODRweCcsIG1hcmdpblRvcDogJzI0cHgnfX0+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICB0eXBlPXsnZ3JlZW4nfVxyXG4gICAgICAgICAgICAgIHJvd3M9e2dldFJvd3MoKX1cclxuICAgICAgICAgICAgICBjb2x1bW5zPXtnZXRDb2x1bW5zKCl9XHJcbiAgICAgICAgICAgICAgZGF0YT17Z2V0Q2hhcnREYXRhMignZ3JlZW4nKX1cclxuICAgICAgICAgICAgICBvbkluZGV4PXs1fVxyXG4gICAgICAgICAgICAgIHZpZXdDb3VudD17MTJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzgwMHB4JywgaGVpZ2h0OiAnMjg0cHgnLCBtYXJnaW5Ub3A6ICcyNHB4J319PlxyXG4gICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgdHlwZT17J2JsdWUnfVxyXG4gICAgICAgICAgICAgIHJvd3M9e2dldFJvd3MoKX1cclxuICAgICAgICAgICAgICBjb2x1bW5zPXtnZXRDb2x1bW5zKCl9XHJcbiAgICAgICAgICAgICAgZGF0YT17Z2V0Q2hhcnREYXRhMygnYmx1ZScpfVxyXG4gICAgICAgICAgICAgIG9uSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgdmlld0NvdW50PXsxMn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogJzQ4cHgnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzM0MHB4JywgaGVpZ2h0OiAnMjA1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6JyNmZWZiZjknfX0+XHJcbiAgICAgICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICAgICAgdHlwZT17J2JsYWNrJ31cclxuICAgICAgICAgICAgICAgIHJvd3M9e2dldE1vYmlsZVJvd3MoKX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2dldENvbHVtbnMoKX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2dldENoYXJ0RGF0YSgnYmxhY2snKX1cclxuICAgICAgICAgICAgICAgIG9uSW5kZXg9ezJ9XHJcbiAgICAgICAgICAgICAgICB2aWV3Q291bnQ9ezEyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICczNDBweCcsIGhlaWdodDogJzIwNXB4JywgbWFyZ2luTGVmdDogJzI0cHgnLCBiYWNrZ3JvdW5kQ29sb3I6JyNmZWZiZjknfX0+XHJcbiAgICAgICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICAgICAgdHlwZT17J2dyZWVuJ31cclxuICAgICAgICAgICAgICAgIHJvd3M9e2dldE1vYmlsZVJvd3MoKX1cclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2dldENvbHVtbnMoKX1cclxuICAgICAgICAgICAgICAgIGRhdGE9e2dldENoYXJ0RGF0YSgnZ3JlZW4nKX1cclxuICAgICAgICAgICAgICAgIG9uSW5kZXg9ezN9XHJcbiAgICAgICAgICAgICAgICB2aWV3Q291bnQ9ezEyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICczNDBweCcsIGhlaWdodDogJzIwNXB4JywgbWFyZ2luTGVmdDogJzI0cHgnLCBiYWNrZ3JvdW5kQ29sb3I6JyNmZWZiZjknfX0+XHJcbiAgICAgICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICAgICAgdHlwZT17J2JsdWUnfVxyXG4gICAgICAgICAgICAgICAgcm93cz17Z2V0TW9iaWxlUm93cygpfVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1ucygpfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17Z2V0Q2hhcnREYXRhKCdibHVlJyl9XHJcbiAgICAgICAgICAgICAgICBvbkluZGV4PXs0fVxyXG4gICAgICAgICAgICAgICAgdmlld0NvdW50PXsxMn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcblxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=