webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/imageCrop/imageCrop.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/imageCrop/imageCrop.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".imageCrop_wrap__1KkLw {\n  position: relative;\n  display: flex;\n  width: 412px;\n  height: 412px;\n  background-color: #eee;\n}\n.imageCrop_wrap__1KkLw .imageCrop_cropArea__34F3E {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/nextjs/img/imageCrop/grid.png\");\n}\n\n.imageCrop_imgArea__3TSYh {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_imgArea__3TSYh .imageCrop_imgBox__1DpaO {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_dimmedBox__Ljad8 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n  cursor: crosshair;\n}\n\n.imageCrop_cropBox__32w2s {\n  position: relative;\n  display: block;\n  outline: 1px solid #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW {\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW .imageCrop_viewImg__2yNIO {\n  display: block;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe {\n  position: absolute;\n  display: block;\n  border: 0 dashed #eee;\n  opacity: 0.5;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_w__3wDdG {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_h__2SQGo {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:before {\n  position: absolute;\n  top: 0;\n  left: -3px;\n  display: block;\n  width: 7px;\n  height: 1px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:after {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  display: block;\n  width: 1px;\n  height: 7px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_moveBox__1ARXf {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.1;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: move;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  background-color: #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_e__2jt7w {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_s__1S21u {\n  left: 0;\n  bottom: -3px;\n  height: 5px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_w__3wDdG {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv {\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: #39f;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_nw__nccC3 {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_ne__2r6NJ {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_e__2jt7w {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_se__1HLvC {\n  right: -3px;\n  bottom: -3px;\n  margin-top: -3px;\n  cursor: se-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_s__1S21u {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_sw__1Y9E7 {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_w__3wDdG {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cropBoxInfo__3dM_C {\n  position: absolute;\n  right: 0;\n  display: block;\n  min-width: 125px;\n  text-align: right;\n  color: #fff;\n  font-weight: 700;\n  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\n}", "",{"version":3,"sources":["webpack://imageCrop.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AACF;AACE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,uDAAA;AACJ;;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;AAAF;AAEE;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAAJ;AAMA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;AAJF;;AAOA;EACE,kBAAA;EACA,cAAA;EACA,uBAAA;AAJF;AAME;EACE,gBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;AAJJ;AAMI;EACE,cAAA;AAJN;AAQE;EACE,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,YAAA;AANJ;AAQI;EACE,wBAAA;EACA,qBAAA;EACA,iBAAA;EACA,OAAA;EACA,cAAA;EACA,WAAA;AANN;AASI;EACE,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,gBAAA;AAPN;AAWE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;AATJ;AAWI;EACE,kBAAA;EACA,MAAA;EACA,UAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;AATN;AAYI;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;AAVN;AAcE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,YAAA;AAZJ;AAeE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;AAbJ;AAeI;EACE,SAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;AAbN;AAgBI;EACE,MAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;AAdN;AAiBI;EACE,OAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AAfN;AAkBI;EACE,MAAA;EACA,UAAA;EACA,UAAA;EACA,gBAAA;AAhBN;AAqBE;EACE,kBAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,aAAA;AAnBJ;AAqBI;EACE,SAAA;EACA,UAAA;EACA,iBAAA;AAnBN;AAsBI;EACE,SAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;AApBN;AAuBI;EACE,SAAA;EACA,WAAA;EACA,iBAAA;AArBN;AAwBI;EACE,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;AAtBN;AAyBI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;AAvBN;AA0BI;EACE,YAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;AAxBN;AA2BI;EACE,YAAA;EACA,UAAA;EACA,iBAAA;AAzBN;AA4BI;EACE,QAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;AA1BN;AA8BE;EACE,kBAAA;EACA,QAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,gBAAA;EACA,6DAAA;AA5BJ","sourcesContent":[".wrap {\r\n  position: relative;\r\n  display: flex;\r\n  width: 412px;\r\n  height: 412px;\r\n  background-color: #eee;\r\n\r\n  .cropArea {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/nextjs/img/imageCrop/grid.png');\r\n  }\r\n}\r\n\r\n.imgArea {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .imgBox {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    .img {}\r\n  }\r\n}\r\n\r\n.dimmedBox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  opacity: .5;\r\n  cursor: crosshair;\r\n}\r\n\r\n.cropBox {\r\n  position: relative;\r\n  display: block;\r\n  outline: 1px solid #39f;\r\n\r\n  .viewBox {\r\n    overflow: hidden;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    user-select: none;\r\n\r\n    .viewImg {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .dash {\r\n    position: absolute;\r\n    display: block;\r\n    border: 0 dashed #eee;\r\n    opacity: .5;\r\n\r\n    &.w {\r\n      border-bottom-width: 1px;\r\n      border-top-width: 1px;\r\n      height: 33.33333%;\r\n      left: 0;\r\n      top: 33.33333%;\r\n      width: 100%;\r\n    }\r\n\r\n    &.h {\r\n      border-left-width: 1px;\r\n      border-right-width: 1px;\r\n      height: 100%;\r\n      left: 33.33333%;\r\n      top: 0;\r\n      width: 33.33333%;\r\n    }\r\n  }\r\n\r\n  .cross {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: .75;\r\n\r\n    &:before {\r\n      position: absolute;\r\n      top: 0;\r\n      left: -3px;\r\n      display: block;\r\n      width: 7px;\r\n      height: 1px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n\r\n    &:after {\r\n      position: absolute;\r\n      top: -3px;\r\n      left: 0;\r\n      display: block;\r\n      width: 1px;\r\n      height: 7px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n  }\r\n\r\n  .moveBox {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: .1;\r\n    user-select: none;\r\n    cursor: move;\r\n  }\r\n\r\n  .line {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: .1;\r\n    background-color: #39f;\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 0;\r\n      height: 5px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 0;\r\n      right: -3px;\r\n      width: 5px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.s {\r\n      left: 0;\r\n      bottom: -3px;\r\n      height: 5px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 0;\r\n      left: -3px;\r\n      width: 5px;\r\n      cursor: w-resize;\r\n    }\r\n\r\n  }\r\n\r\n  .point {\r\n    position: absolute;\r\n    display: block;\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #39f;\r\n    opacity: .75;\r\n\r\n    &.nw {\r\n      top: -3px;\r\n      left: -3px;\r\n      cursor: nw-resize;\r\n    }\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.ne {\r\n      top: -3px;\r\n      right: -3px;\r\n      cursor: ne-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 50%;\r\n      right: -3px;\r\n      margin-top: -3px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.se {\r\n      right: -3px;\r\n      bottom: -3px;\r\n      margin-top: -3px;\r\n      cursor: se-resize;\r\n    }\r\n\r\n    &.s {\r\n      bottom: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.sw {\r\n      bottom: -3px;\r\n      left: -3px;\r\n      cursor: sw-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 50%;\r\n      left: -3px;\r\n      margin-top: -3px;\r\n      cursor: w-resize;\r\n    }\r\n  }\r\n\r\n  .cropBoxInfo {\r\n    position: absolute;\r\n    right: 0;\r\n    display: block;\r\n    min-width: 125px;\r\n    text-align: right;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrap": "imageCrop_wrap__1KkLw",
	"cropArea": "imageCrop_cropArea__34F3E",
	"imgArea": "imageCrop_imgArea__3TSYh",
	"imgBox": "imageCrop_imgBox__1DpaO",
	"dimmedBox": "imageCrop_dimmedBox__Ljad8",
	"cropBox": "imageCrop_cropBox__32w2s",
	"viewBox": "imageCrop_viewBox__1NPLW",
	"viewImg": "imageCrop_viewImg__2yNIO",
	"dash": "imageCrop_dash__1k5qe",
	"w": "imageCrop_w__3wDdG",
	"h": "imageCrop_h__2SQGo",
	"cross": "imageCrop_cross__3E83l",
	"moveBox": "imageCrop_moveBox__1ARXf",
	"line": "imageCrop_line__3pgnf",
	"n": "imageCrop_n__SHC68",
	"e": "imageCrop_e__2jt7w",
	"s": "imageCrop_s__1S21u",
	"point": "imageCrop_point__1sRRv",
	"nw": "imageCrop_nw__nccC3",
	"ne": "imageCrop_ne__2r6NJ",
	"se": "imageCrop_se__1HLvC",
	"sw": "imageCrop_sw__1Y9E7",
	"cropBoxInfo": "imageCrop_cropBoxInfo__3dM_C"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2ltYWdlQ3JvcC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLHVCQUF1QixrQkFBa0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyxxREFBcUQsbUJBQW1CLGdCQUFnQixpQkFBaUIsOERBQThELEdBQUcsK0JBQStCLHFCQUFxQix1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLEdBQUcsc0RBQXNELG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsK0JBQStCLHVCQUF1QixXQUFXLGNBQWMsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsMkJBQTJCLGlCQUFpQixzQkFBc0IsR0FBRywrQkFBK0IsdUJBQXVCLG1CQUFtQiw0QkFBNEIsR0FBRyx1REFBdUQscUJBQXFCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsaUZBQWlGLG1CQUFtQixHQUFHLG9EQUFvRCx1QkFBdUIsbUJBQW1CLDBCQUEwQixpQkFBaUIsR0FBRyx1RUFBdUUsNkJBQTZCLDBCQUEwQixzQkFBc0IsWUFBWSxtQkFBbUIsZ0JBQWdCLEdBQUcsdUVBQXVFLDJCQUEyQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixXQUFXLHFCQUFxQixHQUFHLHFEQUFxRCx1QkFBdUIsYUFBYSxjQUFjLG1CQUFtQixhQUFhLGNBQWMsa0JBQWtCLEdBQUcsNERBQTRELHVCQUF1QixXQUFXLGVBQWUsbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixtQkFBbUIsR0FBRywyREFBMkQsdUJBQXVCLGNBQWMsWUFBWSxtQkFBbUIsZUFBZSxnQkFBZ0IsMkJBQTJCLG1CQUFtQixHQUFHLHVEQUF1RCx1QkFBdUIsV0FBVyxZQUFZLG1CQUFtQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixpQkFBaUIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLEdBQUcsb0RBQW9ELHVCQUF1QixtQkFBbUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsMkJBQTJCLEdBQUcsdUVBQXVFLGNBQWMsWUFBWSxnQkFBZ0IscUJBQXFCLEdBQUcsdUVBQXVFLFdBQVcsZ0JBQWdCLGVBQWUscUJBQXFCLEdBQUcsdUVBQXVFLFlBQVksaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyx1RUFBdUUsV0FBVyxlQUFlLGVBQWUscUJBQXFCLEdBQUcscURBQXFELHVCQUF1QixtQkFBbUIsZUFBZSxnQkFBZ0IsMkJBQTJCLGtCQUFrQixHQUFHLHlFQUF5RSxjQUFjLGVBQWUsc0JBQXNCLEdBQUcsd0VBQXdFLGNBQWMsY0FBYyxzQkFBc0IscUJBQXFCLEdBQUcseUVBQXlFLGNBQWMsZ0JBQWdCLHNCQUFzQixHQUFHLHdFQUF3RSxhQUFhLGdCQUFnQixxQkFBcUIscUJBQXFCLEdBQUcseUVBQXlFLGdCQUFnQixpQkFBaUIscUJBQXFCLHNCQUFzQixHQUFHLHdFQUF3RSxpQkFBaUIsY0FBYyxzQkFBc0IscUJBQXFCLEdBQUcseUVBQXlFLGlCQUFpQixlQUFlLHNCQUFzQixHQUFHLHdFQUF3RSxhQUFhLGVBQWUscUJBQXFCLHFCQUFxQixHQUFHLDJEQUEyRCx1QkFBdUIsYUFBYSxtQkFBbUIscUJBQXFCLHNCQUFzQixnQkFBZ0IscUJBQXFCLGtFQUFrRSxHQUFHLE9BQU8sc0ZBQXNGLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxpQ0FBaUMseUJBQXlCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsZ0VBQWdFLE9BQU8sS0FBSyxrQkFBa0IsdUJBQXVCLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQixtQkFBbUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsbUJBQW1CLE9BQU8sS0FBSyxvQkFBb0IseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLDZCQUE2QixrQkFBa0Isd0JBQXdCLEtBQUssa0JBQWtCLHlCQUF5QixxQkFBcUIsOEJBQThCLG9CQUFvQix5QkFBeUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsMEJBQTBCLHNCQUFzQix5QkFBeUIsU0FBUyxPQUFPLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDhCQUE4QixvQkFBb0IsaUJBQWlCLG1DQUFtQyxnQ0FBZ0MsNEJBQTRCLGtCQUFrQix5QkFBeUIsc0JBQXNCLFNBQVMsaUJBQWlCLGlDQUFpQyxrQ0FBa0MsdUJBQXVCLDBCQUEwQixpQkFBaUIsMkJBQTJCLFNBQVMsT0FBTyxrQkFBa0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsdUJBQXVCLGlCQUFpQixrQkFBa0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsaUJBQWlCLHFCQUFxQix5QkFBeUIscUJBQXFCLHNCQUFzQixpQ0FBaUMseUJBQXlCLFNBQVMscUJBQXFCLDZCQUE2QixvQkFBb0Isa0JBQWtCLHlCQUF5QixxQkFBcUIsc0JBQXNCLGlDQUFpQyx5QkFBeUIsU0FBUyxPQUFPLG9CQUFvQiwyQkFBMkIsZUFBZSxnQkFBZ0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsK0JBQStCLG9CQUFvQiwwQkFBMEIscUJBQXFCLE9BQU8saUJBQWlCLDJCQUEyQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsK0JBQStCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHNCQUFzQiwyQkFBMkIsU0FBUyxpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLFNBQVMsaUJBQWlCLGtCQUFrQix1QkFBdUIsc0JBQXNCLDJCQUEyQixTQUFTLGlCQUFpQixpQkFBaUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsU0FBUyxXQUFXLGtCQUFrQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixvQkFBb0IsK0JBQStCLHFCQUFxQixrQkFBa0Isb0JBQW9CLHFCQUFxQiw0QkFBNEIsU0FBUyxpQkFBaUIsb0JBQW9CLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFNBQVMsa0JBQWtCLG9CQUFvQixzQkFBc0IsNEJBQTRCLFNBQVMsaUJBQWlCLG1CQUFtQixzQkFBc0IsMkJBQTJCLDJCQUEyQixTQUFTLGtCQUFrQixzQkFBc0IsdUJBQXVCLDJCQUEyQiw0QkFBNEIsU0FBUyxpQkFBaUIsdUJBQXVCLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFNBQVMsa0JBQWtCLHVCQUF1QixxQkFBcUIsNEJBQTRCLFNBQVMsaUJBQWlCLG1CQUFtQixxQkFBcUIsMkJBQTJCLDJCQUEyQixTQUFTLE9BQU8sd0JBQXdCLDJCQUEyQixpQkFBaUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsb0JBQW9CLHlCQUF5QixzRUFBc0UsT0FBTyxLQUFLLG1CQUFtQjtBQUMvcFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5hM2JiYjFiOTNjMTZhOWY2MzM0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmltYWdlQ3JvcF93cmFwX18xS2tMdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDQxMnB4O1xcbiAgaGVpZ2h0OiA0MTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcbi5pbWFnZUNyb3Bfd3JhcF9fMUtrTHcgLmltYWdlQ3JvcF9jcm9wQXJlYV9fMzRGM0Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL25leHRqcy9pbWcvaW1hZ2VDcm9wL2dyaWQucG5nXFxcIik7XFxufVxcblxcbi5pbWFnZUNyb3BfaW1nQXJlYV9fM1RTWWgge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1hZ2VDcm9wX2ltZ0FyZWFfXzNUU1loIC5pbWFnZUNyb3BfaW1nQm94X18xRHBhTyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1hZ2VDcm9wX2RpbW1lZEJveF9fTGphZDgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdXRsaW5lOiAxcHggc29saWQgIzM5ZjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3ZpZXdCb3hfXzFOUExXIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3Bfdmlld0JveF9fMU5QTFcgLmltYWdlQ3JvcF92aWV3SW1nX18yeU5JTyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Rhc2hfXzFrNXFlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAwIGRhc2hlZCAjZWVlO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfZGFzaF9fMWs1cWUuaW1hZ2VDcm9wX3dfXzN3RGRHIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMzMuMzMzMzMlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMzMuMzMzMzMlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9kYXNoX18xazVxZS5pbWFnZUNyb3BfaF9fMlNRR28ge1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMzMuMzMzMzMlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDMzLjMzMzMzJTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Nyb3NzX18zRTgzbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3Jvc3NfXzNFODNsOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtM3B4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogN3B4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3Jvc3NfXzNFODNsOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9tb3ZlQm94X18xQVJYZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF9uX19TSEM2OCB7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBjdXJzb3I6IG4tcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX2VfXzJqdDd3IHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAtM3B4O1xcbiAgd2lkdGg6IDVweDtcXG4gIGN1cnNvcjogZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZi5pbWFnZUNyb3Bfc19fMVMyMXUge1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogLTNweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgY3Vyc29yOiBzLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF93X18zd0RkRyB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtM3B4O1xcbiAgd2lkdGg6IDVweDtcXG4gIGN1cnNvcjogdy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3BfbndfX25jY0MzIHtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IG53LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfbl9fU0hDNjgge1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IG4tcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9uZV9fMnI2Tkoge1xcbiAgdG9wOiAtM3B4O1xcbiAgcmlnaHQ6IC0zcHg7XFxuICBjdXJzb3I6IG5lLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3BfZV9fMmp0N3cge1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogLTNweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBjdXJzb3I6IGUtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9zZV9fMUhMdkMge1xcbiAgcmlnaHQ6IC0zcHg7XFxuICBib3R0b206IC0zcHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX3NfXzFTMjF1IHtcXG4gIGJvdHRvbTogLTNweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgY3Vyc29yOiBzLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfc3dfXzFZOUU3IHtcXG4gIGJvdHRvbTogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IHN3LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfd19fM3dEZEcge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAtM3B4O1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGN1cnNvcjogdy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9wQm94SW5mb19fM2RNX0Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1pbi13aWR0aDogMTI1cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgIzAwMCwgMCAxcHggIzAwMCwgMXB4IDAgIzAwMCwgMCAtMXB4ICMwMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbWFnZUNyb3AubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNB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QUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQTVCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDQxMnB4O1xcclxcbiAgaGVpZ2h0OiA0MTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuXFxyXFxuICAuY3JvcEFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvbmV4dGpzL2ltZy9pbWFnZUNyb3AvZ3JpZC5wbmcnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltZ0FyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgLmltZ0JveCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAuaW1nIHt9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kaW1tZWRCb3gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgb3BhY2l0eTogLjU7XFxyXFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3BCb3gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgIzM5ZjtcXHJcXG5cXHJcXG4gIC52aWV3Qm94IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgICAudmlld0ltZyB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kYXNoIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyOiAwIGRhc2hlZCAjZWVlO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG5cXHJcXG4gICAgJi53IHtcXHJcXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogMzMuMzMzMzMlO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgdG9wOiAzMy4zMzMzMyU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5oIHtcXHJcXG4gICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcclxcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICBsZWZ0OiAzMy4zMzMzMyU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHdpZHRoOiAzMy4zMzMzMyU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcm9zcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IC43NTtcXHJcXG5cXHJcXG4gICAgJjpiZWZvcmUge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogN3B4O1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92ZUJveCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgb3BhY2l0eTogLjE7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjdXJzb3I6IG1vdmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IC4xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcclxcblxcclxcbiAgICAmLm4ge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogbi1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5lIHtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgcmlnaHQ6IC0zcHg7XFxyXFxuICAgICAgd2lkdGg6IDVweDtcXHJcXG4gICAgICBjdXJzb3I6IGUtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYucyB7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBzLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLncge1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiB3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLnBvaW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxyXFxuICAgIG9wYWNpdHk6IC43NTtcXHJcXG5cXHJcXG4gICAgJi5udyB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBudy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5uIHtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbi1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5uZSB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbmUtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuZSB7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgcmlnaHQ6IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IGUtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuc2Uge1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogc2UtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYucyB7XFxyXFxuICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHMtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuc3cge1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogc3ctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYudyB7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogdy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcm9wQm94SW5mbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgIzAwMCwgMCAxcHggIzAwMCwgMXB4IDAgIzAwMCwgMCAtMXB4ICMwMDA7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIndyYXBcIjogXCJpbWFnZUNyb3Bfd3JhcF9fMUtrTHdcIixcblx0XCJjcm9wQXJlYVwiOiBcImltYWdlQ3JvcF9jcm9wQXJlYV9fMzRGM0VcIixcblx0XCJpbWdBcmVhXCI6IFwiaW1hZ2VDcm9wX2ltZ0FyZWFfXzNUU1loXCIsXG5cdFwiaW1nQm94XCI6IFwiaW1hZ2VDcm9wX2ltZ0JveF9fMURwYU9cIixcblx0XCJkaW1tZWRCb3hcIjogXCJpbWFnZUNyb3BfZGltbWVkQm94X19MamFkOFwiLFxuXHRcImNyb3BCb3hcIjogXCJpbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnNcIixcblx0XCJ2aWV3Qm94XCI6IFwiaW1hZ2VDcm9wX3ZpZXdCb3hfXzFOUExXXCIsXG5cdFwidmlld0ltZ1wiOiBcImltYWdlQ3JvcF92aWV3SW1nX18yeU5JT1wiLFxuXHRcImRhc2hcIjogXCJpbWFnZUNyb3BfZGFzaF9fMWs1cWVcIixcblx0XCJ3XCI6IFwiaW1hZ2VDcm9wX3dfXzN3RGRHXCIsXG5cdFwiaFwiOiBcImltYWdlQ3JvcF9oX18yU1FHb1wiLFxuXHRcImNyb3NzXCI6IFwiaW1hZ2VDcm9wX2Nyb3NzX18zRTgzbFwiLFxuXHRcIm1vdmVCb3hcIjogXCJpbWFnZUNyb3BfbW92ZUJveF9fMUFSWGZcIixcblx0XCJsaW5lXCI6IFwiaW1hZ2VDcm9wX2xpbmVfXzNwZ25mXCIsXG5cdFwiblwiOiBcImltYWdlQ3JvcF9uX19TSEM2OFwiLFxuXHRcImVcIjogXCJpbWFnZUNyb3BfZV9fMmp0N3dcIixcblx0XCJzXCI6IFwiaW1hZ2VDcm9wX3NfXzFTMjF1XCIsXG5cdFwicG9pbnRcIjogXCJpbWFnZUNyb3BfcG9pbnRfXzFzUlJ2XCIsXG5cdFwibndcIjogXCJpbWFnZUNyb3BfbndfX25jY0MzXCIsXG5cdFwibmVcIjogXCJpbWFnZUNyb3BfbmVfXzJyNk5KXCIsXG5cdFwic2VcIjogXCJpbWFnZUNyb3Bfc2VfXzFITHZDXCIsXG5cdFwic3dcIjogXCJpbWFnZUNyb3Bfc3dfXzFZOUU3XCIsXG5cdFwiY3JvcEJveEluZm9cIjogXCJpbWFnZUNyb3BfY3JvcEJveEluZm9fXzNkTV9DXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==