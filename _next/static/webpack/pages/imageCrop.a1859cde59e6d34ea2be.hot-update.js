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
___CSS_LOADER_EXPORT___.push([module.i, ".imageCrop_wrap__1KkLw {\n  position: relative;\n  display: flex;\n  width: 412px;\n  height: 412px;\n  background-color: #eee;\n}\n.imageCrop_wrap__1KkLw .imageCrop_cropArea__34F3E {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/nextjs/img/imageCrop/grid.png\");\n}\n\n.imageCrop_imgArea__3TSYh {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_imgArea__3TSYh .imageCrop_imgBox__1DpaO {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_dimmedBox__Ljad8 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n  cursor: crosshair;\n}\n\n.imageCrop_cropBox__32w2s {\n  position: relative;\n  display: block;\n  outline: 1px solid #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW {\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW .imageCrop_viewImg__2yNIO {\n  display: block;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe {\n  position: absolute;\n  display: block;\n  border: 0 dashed #eee;\n  opacity: 0.5;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_w__3wDdG {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_h__2SQGo {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:before {\n  position: absolute;\n  top: 0;\n  left: -3px;\n  display: block;\n  width: 7px;\n  height: 1px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:after {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  display: block;\n  width: 1px;\n  height: 7px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_moveBox__1ARXf {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.1;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: move;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  background-color: #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_e__2jt7w {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_s__1S21u {\n  left: 0;\n  bottom: -3px;\n  height: 5px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_w__3wDdG {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv {\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: #39f;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_nw__nccC3 {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_ne__2r6NJ {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_e__2jt7w {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_se__1HLvC {\n  right: -3px;\n  bottom: -3px;\n  margin-top: -3px;\n  cursor: se-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_s__1S21u {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_sw__1Y9E7 {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_w__3wDdG {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cropBoxInfo__3dM_C {\n  position: absolute;\n  right: 0;\n  display: block;\n  min-width: 125px;\n  text-align: right;\n  color: #fff;\n  font-weight: 1px solid #000;\n}", "",{"version":3,"sources":["webpack://imageCrop.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AACF;AACE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,uDAAA;AACJ;;AAGA;EACE,gBAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;AAAF;AAEE;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAAJ;AAMA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;AAJF;;AAOA;EACE,kBAAA;EACA,cAAA;EACA,uBAAA;AAJF;AAME;EACE,gBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;AAJJ;AAMI;EACE,cAAA;AAJN;AAQE;EACE,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,YAAA;AANJ;AAQI;EACE,wBAAA;EACA,qBAAA;EACA,iBAAA;EACA,OAAA;EACA,cAAA;EACA,WAAA;AANN;AASI;EACE,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,gBAAA;AAPN;AAWE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;AATJ;AAWI;EACE,kBAAA;EACA,MAAA;EACA,UAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;AATN;AAYI;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;AAVN;AAcE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,yBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,YAAA;AAZJ;AAeE;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;AAbJ;AAeI;EACE,SAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;AAbN;AAgBI;EACE,MAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;AAdN;AAiBI;EACE,OAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AAfN;AAkBI;EACE,MAAA;EACA,UAAA;EACA,UAAA;EACA,gBAAA;AAhBN;AAqBE;EACE,kBAAA;EACA,cAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;EACA,aAAA;AAnBJ;AAqBI;EACE,SAAA;EACA,UAAA;EACA,iBAAA;AAnBN;AAsBI;EACE,SAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;AApBN;AAuBI;EACE,SAAA;EACA,WAAA;EACA,iBAAA;AArBN;AAwBI;EACE,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;AAtBN;AAyBI;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;AAvBN;AA0BI;EACE,YAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;AAxBN;AA2BI;EACE,YAAA;EACA,UAAA;EACA,iBAAA;AAzBN;AA4BI;EACE,QAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;AA1BN;AA8BE;EACE,kBAAA;EACA,QAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,2BAAA;AA5BJ","sourcesContent":[".wrap {\r\n  position: relative;\r\n  display: flex;\r\n  width: 412px;\r\n  height: 412px;\r\n  background-color: #eee;\r\n\r\n  .cropArea {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/nextjs/img/imageCrop/grid.png');\r\n  }\r\n}\r\n\r\n.imgArea {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .imgBox {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    .img {}\r\n  }\r\n}\r\n\r\n.dimmedBox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  opacity: .5;\r\n  cursor: crosshair;\r\n}\r\n\r\n.cropBox {\r\n  position: relative;\r\n  display: block;\r\n  outline: 1px solid #39f;\r\n\r\n  .viewBox {\r\n    overflow: hidden;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    user-select: none;\r\n\r\n    .viewImg {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .dash {\r\n    position: absolute;\r\n    display: block;\r\n    border: 0 dashed #eee;\r\n    opacity: .5;\r\n\r\n    &.w {\r\n      border-bottom-width: 1px;\r\n      border-top-width: 1px;\r\n      height: 33.33333%;\r\n      left: 0;\r\n      top: 33.33333%;\r\n      width: 100%;\r\n    }\r\n\r\n    &.h {\r\n      border-left-width: 1px;\r\n      border-right-width: 1px;\r\n      height: 100%;\r\n      left: 33.33333%;\r\n      top: 0;\r\n      width: 33.33333%;\r\n    }\r\n  }\r\n\r\n  .cross {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: .75;\r\n\r\n    &:before {\r\n      position: absolute;\r\n      top: 0;\r\n      left: -3px;\r\n      display: block;\r\n      width: 7px;\r\n      height: 1px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n\r\n    &:after {\r\n      position: absolute;\r\n      top: -3px;\r\n      left: 0;\r\n      display: block;\r\n      width: 1px;\r\n      height: 7px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n  }\r\n\r\n  .moveBox {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: .1;\r\n    user-select: none;\r\n    cursor: move;\r\n  }\r\n\r\n  .line {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: .1;\r\n    background-color: #39f;\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 0;\r\n      height: 5px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 0;\r\n      right: -3px;\r\n      width: 5px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.s {\r\n      left: 0;\r\n      bottom: -3px;\r\n      height: 5px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 0;\r\n      left: -3px;\r\n      width: 5px;\r\n      cursor: w-resize;\r\n    }\r\n\r\n  }\r\n\r\n  .point {\r\n    position: absolute;\r\n    display: block;\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #39f;\r\n    opacity: .75;\r\n\r\n    &.nw {\r\n      top: -3px;\r\n      left: -3px;\r\n      cursor: nw-resize;\r\n    }\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.ne {\r\n      top: -3px;\r\n      right: -3px;\r\n      cursor: ne-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 50%;\r\n      right: -3px;\r\n      margin-top: -3px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.se {\r\n      right: -3px;\r\n      bottom: -3px;\r\n      margin-top: -3px;\r\n      cursor: se-resize;\r\n    }\r\n\r\n    &.s {\r\n      bottom: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.sw {\r\n      bottom: -3px;\r\n      left: -3px;\r\n      cursor: sw-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 50%;\r\n      left: -3px;\r\n      margin-top: -3px;\r\n      cursor: w-resize;\r\n    }\r\n  }\r\n\r\n  .cropBoxInfo {\r\n    position: absolute;\r\n    right: 0;\r\n    display: block;\r\n    min-width: 125px;\r\n    text-align: right;\r\n    color: #fff;\r\n    font-weight: 1px solid #000;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2ltYWdlQ3JvcC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLHVCQUF1QixrQkFBa0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRyxxREFBcUQsbUJBQW1CLGdCQUFnQixpQkFBaUIsOERBQThELEdBQUcsK0JBQStCLHFCQUFxQix1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLEdBQUcsc0RBQXNELG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsK0JBQStCLHVCQUF1QixXQUFXLGNBQWMsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsMkJBQTJCLGlCQUFpQixzQkFBc0IsR0FBRywrQkFBK0IsdUJBQXVCLG1CQUFtQiw0QkFBNEIsR0FBRyx1REFBdUQscUJBQXFCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsaUZBQWlGLG1CQUFtQixHQUFHLG9EQUFvRCx1QkFBdUIsbUJBQW1CLDBCQUEwQixpQkFBaUIsR0FBRyx1RUFBdUUsNkJBQTZCLDBCQUEwQixzQkFBc0IsWUFBWSxtQkFBbUIsZ0JBQWdCLEdBQUcsdUVBQXVFLDJCQUEyQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixXQUFXLHFCQUFxQixHQUFHLHFEQUFxRCx1QkFBdUIsYUFBYSxjQUFjLG1CQUFtQixhQUFhLGNBQWMsa0JBQWtCLEdBQUcsNERBQTRELHVCQUF1QixXQUFXLGVBQWUsbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixtQkFBbUIsR0FBRywyREFBMkQsdUJBQXVCLGNBQWMsWUFBWSxtQkFBbUIsZUFBZSxnQkFBZ0IsMkJBQTJCLG1CQUFtQixHQUFHLHVEQUF1RCx1QkFBdUIsV0FBVyxZQUFZLG1CQUFtQixnQkFBZ0IsaUJBQWlCLDJCQUEyQixpQkFBaUIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLEdBQUcsb0RBQW9ELHVCQUF1QixtQkFBbUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsMkJBQTJCLEdBQUcsdUVBQXVFLGNBQWMsWUFBWSxnQkFBZ0IscUJBQXFCLEdBQUcsdUVBQXVFLFdBQVcsZ0JBQWdCLGVBQWUscUJBQXFCLEdBQUcsdUVBQXVFLFlBQVksaUJBQWlCLGdCQUFnQixxQkFBcUIsR0FBRyx1RUFBdUUsV0FBVyxlQUFlLGVBQWUscUJBQXFCLEdBQUcscURBQXFELHVCQUF1QixtQkFBbUIsZUFBZSxnQkFBZ0IsMkJBQTJCLGtCQUFrQixHQUFHLHlFQUF5RSxjQUFjLGVBQWUsc0JBQXNCLEdBQUcsd0VBQXdFLGNBQWMsY0FBYyxzQkFBc0IscUJBQXFCLEdBQUcseUVBQXlFLGNBQWMsZ0JBQWdCLHNCQUFzQixHQUFHLHdFQUF3RSxhQUFhLGdCQUFnQixxQkFBcUIscUJBQXFCLEdBQUcseUVBQXlFLGdCQUFnQixpQkFBaUIscUJBQXFCLHNCQUFzQixHQUFHLHdFQUF3RSxpQkFBaUIsY0FBYyxzQkFBc0IscUJBQXFCLEdBQUcseUVBQXlFLGlCQUFpQixlQUFlLHNCQUFzQixHQUFHLHdFQUF3RSxhQUFhLGVBQWUscUJBQXFCLHFCQUFxQixHQUFHLDJEQUEyRCx1QkFBdUIsYUFBYSxtQkFBbUIscUJBQXFCLHNCQUFzQixnQkFBZ0IsZ0NBQWdDLEdBQUcsT0FBTyxzRkFBc0YsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxpQ0FBaUMseUJBQXlCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsZ0VBQWdFLE9BQU8sS0FBSyxrQkFBa0IsdUJBQXVCLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQixtQkFBbUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsbUJBQW1CLE9BQU8sS0FBSyxvQkFBb0IseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLDZCQUE2QixrQkFBa0Isd0JBQXdCLEtBQUssa0JBQWtCLHlCQUF5QixxQkFBcUIsOEJBQThCLG9CQUFvQix5QkFBeUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsMEJBQTBCLHNCQUFzQix5QkFBeUIsU0FBUyxPQUFPLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDhCQUE4QixvQkFBb0IsaUJBQWlCLG1DQUFtQyxnQ0FBZ0MsNEJBQTRCLGtCQUFrQix5QkFBeUIsc0JBQXNCLFNBQVMsaUJBQWlCLGlDQUFpQyxrQ0FBa0MsdUJBQXVCLDBCQUEwQixpQkFBaUIsMkJBQTJCLFNBQVMsT0FBTyxrQkFBa0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsdUJBQXVCLGlCQUFpQixrQkFBa0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsaUJBQWlCLHFCQUFxQix5QkFBeUIscUJBQXFCLHNCQUFzQixpQ0FBaUMseUJBQXlCLFNBQVMscUJBQXFCLDZCQUE2QixvQkFBb0Isa0JBQWtCLHlCQUF5QixxQkFBcUIsc0JBQXNCLGlDQUFpQyx5QkFBeUIsU0FBUyxPQUFPLG9CQUFvQiwyQkFBMkIsZUFBZSxnQkFBZ0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsK0JBQStCLG9CQUFvQiwwQkFBMEIscUJBQXFCLE9BQU8saUJBQWlCLDJCQUEyQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsK0JBQStCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHNCQUFzQiwyQkFBMkIsU0FBUyxpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLFNBQVMsaUJBQWlCLGtCQUFrQix1QkFBdUIsc0JBQXNCLDJCQUEyQixTQUFTLGlCQUFpQixpQkFBaUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsU0FBUyxXQUFXLGtCQUFrQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixvQkFBb0IsK0JBQStCLHFCQUFxQixrQkFBa0Isb0JBQW9CLHFCQUFxQiw0QkFBNEIsU0FBUyxpQkFBaUIsb0JBQW9CLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFNBQVMsa0JBQWtCLG9CQUFvQixzQkFBc0IsNEJBQTRCLFNBQVMsaUJBQWlCLG1CQUFtQixzQkFBc0IsMkJBQTJCLDJCQUEyQixTQUFTLGtCQUFrQixzQkFBc0IsdUJBQXVCLDJCQUEyQiw0QkFBNEIsU0FBUyxpQkFBaUIsdUJBQXVCLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFNBQVMsa0JBQWtCLHVCQUF1QixxQkFBcUIsNEJBQTRCLFNBQVMsaUJBQWlCLG1CQUFtQixxQkFBcUIsMkJBQTJCLDJCQUEyQixTQUFTLE9BQU8sd0JBQXdCLDJCQUEyQixpQkFBaUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsb0JBQW9CLG9DQUFvQyxPQUFPLEtBQUssbUJBQW1CO0FBQ2xpVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmExODU5Y2RlNTllNmQzNGVhMmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2VDcm9wX3dyYXBfXzFLa0x3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNDEycHg7XFxuICBoZWlnaHQ6IDQxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuLmltYWdlQ3JvcF93cmFwX18xS2tMdyAuaW1hZ2VDcm9wX2Nyb3BBcmVhX18zNEYzRSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvbmV4dGpzL2ltZy9pbWFnZUNyb3AvZ3JpZC5wbmdcXFwiKTtcXG59XFxuXFxuLmltYWdlQ3JvcF9pbWdBcmVhX18zVFNZaCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWFnZUNyb3BfaW1nQXJlYV9fM1RTWWggLmltYWdlQ3JvcF9pbWdCb3hfXzFEcGFPIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWFnZUNyb3BfZGltbWVkQm94X19MamFkOCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMzlmO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3Bfdmlld0JveF9fMU5QTFcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF92aWV3Qm94X18xTlBMVyAuaW1hZ2VDcm9wX3ZpZXdJbWdfXzJ5TklPIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfZGFzaF9fMWs1cWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDAgZGFzaGVkICNlZWU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9kYXNoX18xazVxZS5pbWFnZUNyb3Bfd19fM3dEZEcge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAzMy4zMzMzMyU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAzMy4zMzMzMyU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Rhc2hfXzFrNXFlLmltYWdlQ3JvcF9oX18yU1FHbyB7XFxuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAzMy4zMzMzMyU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzMuMzMzMzMlO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3Jvc3NfXzNFODNsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9zc19fM0U4M2w6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0zcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA3cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9zc19fM0U4M2w6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX21vdmVCb3hfXzFBUlhmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX25fX1NIQzY4IHtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGN1cnNvcjogbi1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZi5pbWFnZUNyb3BfZV9fMmp0N3cge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IC0zcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgY3Vyc29yOiBlLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF9zX18xUzIxdSB7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBjdXJzb3I6IHMtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX3dfXzN3RGRHIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0zcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgY3Vyc29yOiB3LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9ud19fbmNjQzMge1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogLTNweDtcXG4gIGN1cnNvcjogbnctcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9uX19TSEM2OCB7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIGN1cnNvcjogbi1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX25lX18ycjZOSiB7XFxuICB0b3A6IC0zcHg7XFxuICByaWdodDogLTNweDtcXG4gIGN1cnNvcjogbmUtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9lX18yanQ3dyB7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAtM3B4O1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGN1cnNvcjogZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX3NlX18xSEx2QyB7XFxuICByaWdodDogLTNweDtcXG4gIGJvdHRvbTogLTNweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfc19fMVMyMXUge1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IHMtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9zd19fMVk5RTcge1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgbGVmdDogLTNweDtcXG4gIGN1cnNvcjogc3ctcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF93X18zd0RkRyB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IC0zcHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgY3Vyc29yOiB3LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Nyb3BCb3hJbmZvX18zZE1fQyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWluLXdpZHRoOiAxMjVweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogMXB4IHNvbGlkICMwMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbWFnZUNyb3AubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0FBQ0o7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Es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clxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA0MTJweDtcXHJcXG4gIGhlaWdodDogNDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcblxcclxcbiAgLmNyb3BBcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL25leHRqcy9pbWcvaW1hZ2VDcm9wL2dyaWQucG5nJyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbWdBcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC5pbWdCb3gge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgLmltZyB7fVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGltbWVkQm94IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIG9wYWNpdHk6IC41O1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxufVxcclxcblxcclxcbi5jcm9wQm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICMzOWY7XFxyXFxuXFxyXFxuICAudmlld0JveCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgLnZpZXdJbWcge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGFzaCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMCBkYXNoZWQgI2VlZTtcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxuXFxyXFxuICAgICYudyB7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMzLjMzMzMzJTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMzMuMzMzMzMlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuaCB7XFxyXFxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXHJcXG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgbGVmdDogMzMuMzMzMzMlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICB3aWR0aDogMzMuMzMzMzMlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3Jvc3Mge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAuNzU7XFxyXFxuXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDdweDtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDdweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmVCb3gge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG9wYWNpdHk6IC4xO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAuMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXHJcXG5cXHJcXG4gICAgJi5uIHtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuZSB7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnMge1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi53IHtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICB3aWR0aDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogdy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2ludCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcclxcbiAgICBvcGFjaXR5OiAuNzU7XFxyXFxuXFxyXFxuICAgICYubncge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbnctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubiB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubmUge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICByaWdodDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IG5lLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmUge1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnNlIHtcXHJcXG4gICAgICByaWdodDogLTNweDtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHNlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnMge1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBzLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnN3IHtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHN3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLncge1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JvcEJveEluZm8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogMXB4IHNvbGlkICMwMDA7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIndyYXBcIjogXCJpbWFnZUNyb3Bfd3JhcF9fMUtrTHdcIixcblx0XCJjcm9wQXJlYVwiOiBcImltYWdlQ3JvcF9jcm9wQXJlYV9fMzRGM0VcIixcblx0XCJpbWdBcmVhXCI6IFwiaW1hZ2VDcm9wX2ltZ0FyZWFfXzNUU1loXCIsXG5cdFwiaW1nQm94XCI6IFwiaW1hZ2VDcm9wX2ltZ0JveF9fMURwYU9cIixcblx0XCJkaW1tZWRCb3hcIjogXCJpbWFnZUNyb3BfZGltbWVkQm94X19MamFkOFwiLFxuXHRcImNyb3BCb3hcIjogXCJpbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnNcIixcblx0XCJ2aWV3Qm94XCI6IFwiaW1hZ2VDcm9wX3ZpZXdCb3hfXzFOUExXXCIsXG5cdFwidmlld0ltZ1wiOiBcImltYWdlQ3JvcF92aWV3SW1nX18yeU5JT1wiLFxuXHRcImRhc2hcIjogXCJpbWFnZUNyb3BfZGFzaF9fMWs1cWVcIixcblx0XCJ3XCI6IFwiaW1hZ2VDcm9wX3dfXzN3RGRHXCIsXG5cdFwiaFwiOiBcImltYWdlQ3JvcF9oX18yU1FHb1wiLFxuXHRcImNyb3NzXCI6IFwiaW1hZ2VDcm9wX2Nyb3NzX18zRTgzbFwiLFxuXHRcIm1vdmVCb3hcIjogXCJpbWFnZUNyb3BfbW92ZUJveF9fMUFSWGZcIixcblx0XCJsaW5lXCI6IFwiaW1hZ2VDcm9wX2xpbmVfXzNwZ25mXCIsXG5cdFwiblwiOiBcImltYWdlQ3JvcF9uX19TSEM2OFwiLFxuXHRcImVcIjogXCJpbWFnZUNyb3BfZV9fMmp0N3dcIixcblx0XCJzXCI6IFwiaW1hZ2VDcm9wX3NfXzFTMjF1XCIsXG5cdFwicG9pbnRcIjogXCJpbWFnZUNyb3BfcG9pbnRfXzFzUlJ2XCIsXG5cdFwibndcIjogXCJpbWFnZUNyb3BfbndfX25jY0MzXCIsXG5cdFwibmVcIjogXCJpbWFnZUNyb3BfbmVfXzJyNk5KXCIsXG5cdFwic2VcIjogXCJpbWFnZUNyb3Bfc2VfXzFITHZDXCIsXG5cdFwic3dcIjogXCJpbWFnZUNyb3Bfc3dfXzFZOUU3XCIsXG5cdFwiY3JvcEJveEluZm9cIjogXCJpbWFnZUNyb3BfY3JvcEJveEluZm9fXzNkTV9DXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==