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
___CSS_LOADER_EXPORT___.push([module.i, ".imageCrop_wrap__1KkLw {\n  position: relative;\n  display: block;\n  background-color: #eee;\n}\n.imageCrop_wrap__1KkLw .imageCrop_cropArea__34F3E {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/nextjs/img/imageCrop/grid.png\");\n}\n\n.imageCrop_imgArea__3TSYh {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_imgArea__3TSYh .imageCrop_imgBox__1DpaO {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.imageCrop_dimmedBox__Ljad8 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n  cursor: crosshair;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.imageCrop_cropBox__32w2s {\n  position: relative;\n  display: block;\n  outline: 1px solid #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW {\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW .imageCrop_viewImg__2yNIO {\n  display: block;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe {\n  position: absolute;\n  display: block;\n  border: 0 dashed #eee;\n  opacity: 0.5;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_w__3wDdG {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_h__2SQGo {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:before {\n  position: absolute;\n  top: 0;\n  left: -3px;\n  display: block;\n  width: 7px;\n  height: 1px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:after {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  display: block;\n  width: 1px;\n  height: 7px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_moveBox__1ARXf {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.1;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: move;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  background-color: #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_e__2jt7w {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_s__1S21u {\n  left: 0;\n  bottom: -3px;\n  height: 5px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_w__3wDdG {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv {\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: #39f;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_nw__nccC3 {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_ne__2r6NJ {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_e__2jt7w {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_se__1HLvC {\n  right: -3px;\n  bottom: -3px;\n  margin-top: -3px;\n  cursor: se-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_s__1S21u {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_sw__1Y9E7 {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_w__3wDdG {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cropBoxInfo__3dM_C {\n  position: absolute;\n  right: 0;\n  display: block;\n  min-width: 125px;\n  text-align: right;\n  color: #fff;\n  font-weight: 700;\n  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\n}\n\n.imageCrop_btn__2xzdA {\n  display: block;\n  width: 80px;\n  padding: 5px;\n  margin-left: auto;\n  margin-top: 10px;\n  border-radius: 5px;\n  background-color: #39f;\n  color: #fff;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://imageCrop.module.scss"],"names":[],"mappings":"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","sourcesContent":[".wrap {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #eee;\r\n\r\n  .cropArea {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/nextjs/img/imageCrop/grid.png');\r\n  }\r\n}\r\n\r\n.imgArea {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .imgBox {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.dimmedBox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  opacity: .5;\r\n  cursor: crosshair;\r\n  user-select: none;\r\n}\r\n\r\n.cropBox {\r\n  position: relative;\r\n  display: block;\r\n  outline: 1px solid #39f;\r\n\r\n  .viewBox {\r\n    overflow: hidden;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    user-select: none;\r\n\r\n    .viewImg {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .dash {\r\n    position: absolute;\r\n    display: block;\r\n    border: 0 dashed #eee;\r\n    opacity: .5;\r\n\r\n    &.w {\r\n      border-bottom-width: 1px;\r\n      border-top-width: 1px;\r\n      height: 33.33333%;\r\n      left: 0;\r\n      top: 33.33333%;\r\n      width: 100%;\r\n    }\r\n\r\n    &.h {\r\n      border-left-width: 1px;\r\n      border-right-width: 1px;\r\n      height: 100%;\r\n      left: 33.33333%;\r\n      top: 0;\r\n      width: 33.33333%;\r\n    }\r\n  }\r\n\r\n  .cross {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: .75;\r\n\r\n    &:before {\r\n      position: absolute;\r\n      top: 0;\r\n      left: -3px;\r\n      display: block;\r\n      width: 7px;\r\n      height: 1px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n\r\n    &:after {\r\n      position: absolute;\r\n      top: -3px;\r\n      left: 0;\r\n      display: block;\r\n      width: 1px;\r\n      height: 7px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n  }\r\n\r\n  .moveBox {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: .1;\r\n    user-select: none;\r\n    cursor: move;\r\n  }\r\n\r\n  .line {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: .1;\r\n    background-color: #39f;\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 0;\r\n      height: 5px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 0;\r\n      right: -3px;\r\n      width: 5px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.s {\r\n      left: 0;\r\n      bottom: -3px;\r\n      height: 5px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 0;\r\n      left: -3px;\r\n      width: 5px;\r\n      cursor: w-resize;\r\n    }\r\n\r\n  }\r\n\r\n  .point {\r\n    position: absolute;\r\n    display: block;\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #39f;\r\n    opacity: .75;\r\n\r\n    &.nw {\r\n      top: -3px;\r\n      left: -3px;\r\n      cursor: nw-resize;\r\n    }\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.ne {\r\n      top: -3px;\r\n      right: -3px;\r\n      cursor: ne-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 50%;\r\n      right: -3px;\r\n      margin-top: -3px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.se {\r\n      right: -3px;\r\n      bottom: -3px;\r\n      margin-top: -3px;\r\n      cursor: se-resize;\r\n    }\r\n\r\n    &.s {\r\n      bottom: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.sw {\r\n      bottom: -3px;\r\n      left: -3px;\r\n      cursor: sw-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 50%;\r\n      left: -3px;\r\n      margin-top: -3px;\r\n      cursor: w-resize;\r\n    }\r\n  }\r\n\r\n  .cropBoxInfo {\r\n    position: absolute;\r\n    right: 0;\r\n    display: block;\r\n    min-width: 125px;\r\n    text-align: right;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\r\n  }\r\n}\r\n\r\n.btn {\r\n  display: block;\r\n  width: 80px;\r\n  padding: 5px;\r\n  margin-left:auto;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n  background-color: #39f;\r\n  color: #fff;\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
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
	"cropBoxInfo": "imageCrop_cropBoxInfo__3dM_C",
	"btn": "imageCrop_btn__2xzdA"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2ltYWdlQ3JvcC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLHVCQUF1QixtQkFBbUIsMkJBQTJCLEdBQUcscURBQXFELG1CQUFtQixnQkFBZ0IsaUJBQWlCLDhEQUE4RCxHQUFHLCtCQUErQixxQkFBcUIsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixHQUFHLHNEQUFzRCxtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyx1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixpQkFBaUIsc0JBQXNCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsK0JBQStCLHVCQUF1QixtQkFBbUIsNEJBQTRCLEdBQUcsdURBQXVELHFCQUFxQixtQkFBbUIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsOEJBQThCLDhCQUE4QixHQUFHLGlGQUFpRixtQkFBbUIsR0FBRyxvREFBb0QsdUJBQXVCLG1CQUFtQiwwQkFBMEIsaUJBQWlCLEdBQUcsdUVBQXVFLDZCQUE2QiwwQkFBMEIsc0JBQXNCLFlBQVksbUJBQW1CLGdCQUFnQixHQUFHLHVFQUF1RSwyQkFBMkIsNEJBQTRCLGlCQUFpQixvQkFBb0IsV0FBVyxxQkFBcUIsR0FBRyxxREFBcUQsdUJBQXVCLGFBQWEsY0FBYyxtQkFBbUIsYUFBYSxjQUFjLGtCQUFrQixHQUFHLDREQUE0RCx1QkFBdUIsV0FBVyxlQUFlLG1CQUFtQixlQUFlLGdCQUFnQiwyQkFBMkIsbUJBQW1CLEdBQUcsMkRBQTJELHVCQUF1QixjQUFjLFlBQVksbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixtQkFBbUIsR0FBRyx1REFBdUQsdUJBQXVCLFdBQVcsWUFBWSxtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLGlCQUFpQixHQUFHLG9EQUFvRCx1QkFBdUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsaUJBQWlCLDJCQUEyQixHQUFHLHVFQUF1RSxjQUFjLFlBQVksZ0JBQWdCLHFCQUFxQixHQUFHLHVFQUF1RSxXQUFXLGdCQUFnQixlQUFlLHFCQUFxQixHQUFHLHVFQUF1RSxZQUFZLGlCQUFpQixnQkFBZ0IscUJBQXFCLEdBQUcsdUVBQXVFLFdBQVcsZUFBZSxlQUFlLHFCQUFxQixHQUFHLHFEQUFxRCx1QkFBdUIsbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixrQkFBa0IsR0FBRyx5RUFBeUUsY0FBYyxlQUFlLHNCQUFzQixHQUFHLHdFQUF3RSxjQUFjLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLHlFQUF5RSxjQUFjLGdCQUFnQixzQkFBc0IsR0FBRyx3RUFBd0UsYUFBYSxnQkFBZ0IscUJBQXFCLHFCQUFxQixHQUFHLHlFQUF5RSxnQkFBZ0IsaUJBQWlCLHFCQUFxQixzQkFBc0IsR0FBRyx3RUFBd0UsaUJBQWlCLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLHlFQUF5RSxpQkFBaUIsZUFBZSxzQkFBc0IsR0FBRyx3RUFBd0UsYUFBYSxlQUFlLHFCQUFxQixxQkFBcUIsR0FBRywyREFBMkQsdUJBQXVCLGFBQWEsbUJBQW1CLHFCQUFxQixzQkFBc0IsZ0JBQWdCLHFCQUFxQixrRUFBa0UsR0FBRywyQkFBMkIsbUJBQW1CLGdCQUFnQixpQkFBaUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsMkJBQTJCLGdCQUFnQix1QkFBdUIsR0FBRyxPQUFPLHNGQUFzRixXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsaUNBQWlDLHlCQUF5QixxQkFBcUIsNkJBQTZCLHFCQUFxQix1QkFBdUIsb0JBQW9CLHFCQUFxQixnRUFBZ0UsT0FBTyxLQUFLLGtCQUFrQix1QkFBdUIseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssb0JBQW9CLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsS0FBSyxrQkFBa0IseUJBQXlCLHFCQUFxQiw4QkFBOEIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixTQUFTLE9BQU8saUJBQWlCLDJCQUEyQix1QkFBdUIsOEJBQThCLG9CQUFvQixpQkFBaUIsbUNBQW1DLGdDQUFnQyw0QkFBNEIsa0JBQWtCLHlCQUF5QixzQkFBc0IsU0FBUyxpQkFBaUIsaUNBQWlDLGtDQUFrQyx1QkFBdUIsMEJBQTBCLGlCQUFpQiwyQkFBMkIsU0FBUyxPQUFPLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLDZCQUE2QixpQkFBaUIscUJBQXFCLHlCQUF5QixxQkFBcUIsc0JBQXNCLGlDQUFpQyx5QkFBeUIsU0FBUyxxQkFBcUIsNkJBQTZCLG9CQUFvQixrQkFBa0IseUJBQXlCLHFCQUFxQixzQkFBc0IsaUNBQWlDLHlCQUF5QixTQUFTLE9BQU8sb0JBQW9CLDJCQUEyQixlQUFlLGdCQUFnQix1QkFBdUIsb0JBQW9CLHFCQUFxQiwrQkFBK0Isb0JBQW9CLDBCQUEwQixxQkFBcUIsT0FBTyxpQkFBaUIsMkJBQTJCLHVCQUF1QixvQkFBb0IscUJBQXFCLG9CQUFvQiwrQkFBK0IsaUJBQWlCLG9CQUFvQixrQkFBa0Isc0JBQXNCLDJCQUEyQixTQUFTLGlCQUFpQixpQkFBaUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsU0FBUyxpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsMkJBQTJCLFNBQVMsaUJBQWlCLGlCQUFpQixxQkFBcUIscUJBQXFCLDJCQUEyQixTQUFTLFdBQVcsa0JBQWtCLDJCQUEyQix1QkFBdUIsbUJBQW1CLG9CQUFvQiwrQkFBK0IscUJBQXFCLGtCQUFrQixvQkFBb0IscUJBQXFCLDRCQUE0QixTQUFTLGlCQUFpQixvQkFBb0Isb0JBQW9CLDRCQUE0QiwyQkFBMkIsU0FBUyxrQkFBa0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsU0FBUyxpQkFBaUIsbUJBQW1CLHNCQUFzQiwyQkFBMkIsMkJBQTJCLFNBQVMsa0JBQWtCLHNCQUFzQix1QkFBdUIsMkJBQTJCLDRCQUE0QixTQUFTLGlCQUFpQix1QkFBdUIsb0JBQW9CLDRCQUE0QiwyQkFBMkIsU0FBUyxrQkFBa0IsdUJBQXVCLHFCQUFxQiw0QkFBNEIsU0FBUyxpQkFBaUIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsMkJBQTJCLFNBQVMsT0FBTyx3QkFBd0IsMkJBQTJCLGlCQUFpQix1QkFBdUIseUJBQXlCLDBCQUEwQixvQkFBb0IseUJBQXlCLHNFQUFzRSxPQUFPLEtBQUssY0FBYyxxQkFBcUIsa0JBQWtCLG1CQUFtQix1QkFBdUIsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsa0JBQWtCLHlCQUF5QixLQUFLLG1CQUFtQjtBQUNodVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjZmZmZhZWIwZDk0OTRmMmMxYTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2VDcm9wX3dyYXBfXzFLa0x3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuLmltYWdlQ3JvcF93cmFwX18xS2tMdyAuaW1hZ2VDcm9wX2Nyb3BBcmVhX18zNEYzRSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvbmV4dGpzL2ltZy9pbWFnZUNyb3AvZ3JpZC5wbmdcXFwiKTtcXG59XFxuXFxuLmltYWdlQ3JvcF9pbWdBcmVhX18zVFNZaCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5pbWFnZUNyb3BfaW1nQXJlYV9fM1RTWWggLmltYWdlQ3JvcF9pbWdCb3hfXzFEcGFPIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pbWFnZUNyb3BfZGltbWVkQm94X19MamFkOCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMzlmO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3Bfdmlld0JveF9fMU5QTFcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF92aWV3Qm94X18xTlBMVyAuaW1hZ2VDcm9wX3ZpZXdJbWdfXzJ5TklPIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfZGFzaF9fMWs1cWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDAgZGFzaGVkICNlZWU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9kYXNoX18xazVxZS5pbWFnZUNyb3Bfd19fM3dEZEcge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAzMy4zMzMzMyU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAzMy4zMzMzMyU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Rhc2hfXzFrNXFlLmltYWdlQ3JvcF9oX18yU1FHbyB7XFxuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAzMy4zMzMzMyU7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzMuMzMzMzMlO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3Jvc3NfXzNFODNsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9zc19fM0U4M2w6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0zcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA3cHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9zc19fM0U4M2w6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX21vdmVCb3hfXzFBUlhmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX25fX1NIQzY4IHtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGN1cnNvcjogbi1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZi5pbWFnZUNyb3BfZV9fMmp0N3cge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IC0zcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgY3Vyc29yOiBlLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF9zX18xUzIxdSB7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBjdXJzb3I6IHMtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX3dfXzN3RGRHIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0zcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgY3Vyc29yOiB3LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9ud19fbmNjQzMge1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogLTNweDtcXG4gIGN1cnNvcjogbnctcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9uX19TSEM2OCB7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIGN1cnNvcjogbi1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX25lX18ycjZOSiB7XFxuICB0b3A6IC0zcHg7XFxuICByaWdodDogLTNweDtcXG4gIGN1cnNvcjogbmUtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9lX18yanQ3dyB7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAtM3B4O1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGN1cnNvcjogZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX3NlX18xSEx2QyB7XFxuICByaWdodDogLTNweDtcXG4gIGJvdHRvbTogLTNweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfc19fMVMyMXUge1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IHMtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9zd19fMVk5RTcge1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgbGVmdDogLTNweDtcXG4gIGN1cnNvcjogc3ctcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF93X18zd0RkRyB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IC0zcHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgY3Vyc29yOiB3LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Nyb3BCb3hJbmZvX18zZE1fQyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWluLXdpZHRoOiAxMjVweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCAjMDAwLCAwIDFweCAjMDAwLCAxcHggMCAjMDAwLCAwIC0xcHggIzAwMDtcXG59XFxuXFxuLmltYWdlQ3JvcF9idG5fXzJ4emRBIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pbWFnZUNyb3AubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtBQUNKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBREo7QUFHSTtFQUNFLGNBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBSEo7QUFLSTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhOO0FBTUk7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFOSjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQU5OO0FBU0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBUE47QUFXRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FBVEo7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBVko7QUFZSTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVk47QUFhSTtFQUNFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBWE47QUFjSTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBWk47QUFlSTtFQUNFLE1BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBYk47QUFrQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQWhCSjtBQWtCSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFoQk47QUFtQkk7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFqQk47QUFvQkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBbEJOO0FBcUJJO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBcEJOO0FBdUJJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBckJOO0FBd0JJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQXRCTjtBQXlCSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQTJCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkRBQUE7QUF6Qko7O0FBNkJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUExQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXAge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcblxcclxcbiAgLmNyb3BBcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL25leHRqcy9pbWcvaW1hZ2VDcm9wL2dyaWQucG5nJyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbWdBcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC5pbWdCb3gge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRpbW1lZEJveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAuNTtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcm9wQm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICMzOWY7XFxyXFxuXFxyXFxuICAudmlld0JveCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgLnZpZXdJbWcge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGFzaCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMCBkYXNoZWQgI2VlZTtcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxuXFxyXFxuICAgICYudyB7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMzLjMzMzMzJTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMzMuMzMzMzMlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuaCB7XFxyXFxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXHJcXG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgbGVmdDogMzMuMzMzMzMlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICB3aWR0aDogMzMuMzMzMzMlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3Jvc3Mge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAuNzU7XFxyXFxuXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDdweDtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDdweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmVCb3gge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG9wYWNpdHk6IC4xO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAuMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXHJcXG5cXHJcXG4gICAgJi5uIHtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuZSB7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnMge1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi53IHtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICB3aWR0aDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogdy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2ludCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcclxcbiAgICBvcGFjaXR5OiAuNzU7XFxyXFxuXFxyXFxuICAgICYubncge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbnctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubiB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubmUge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICByaWdodDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IG5lLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmUge1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnNlIHtcXHJcXG4gICAgICByaWdodDogLTNweDtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHNlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnMge1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBzLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnN3IHtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHN3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLncge1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JvcEJveEluZm8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwICMwMDAsIDAgMXB4ICMwMDAsIDFweCAwICMwMDAsIDAgLTFweCAjMDAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDphdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcFwiOiBcImltYWdlQ3JvcF93cmFwX18xS2tMd1wiLFxuXHRcImNyb3BBcmVhXCI6IFwiaW1hZ2VDcm9wX2Nyb3BBcmVhX18zNEYzRVwiLFxuXHRcImltZ0FyZWFcIjogXCJpbWFnZUNyb3BfaW1nQXJlYV9fM1RTWWhcIixcblx0XCJpbWdCb3hcIjogXCJpbWFnZUNyb3BfaW1nQm94X18xRHBhT1wiLFxuXHRcImRpbW1lZEJveFwiOiBcImltYWdlQ3JvcF9kaW1tZWRCb3hfX0xqYWQ4XCIsXG5cdFwiY3JvcEJveFwiOiBcImltYWdlQ3JvcF9jcm9wQm94X18zMncyc1wiLFxuXHRcInZpZXdCb3hcIjogXCJpbWFnZUNyb3Bfdmlld0JveF9fMU5QTFdcIixcblx0XCJ2aWV3SW1nXCI6IFwiaW1hZ2VDcm9wX3ZpZXdJbWdfXzJ5TklPXCIsXG5cdFwiZGFzaFwiOiBcImltYWdlQ3JvcF9kYXNoX18xazVxZVwiLFxuXHRcIndcIjogXCJpbWFnZUNyb3Bfd19fM3dEZEdcIixcblx0XCJoXCI6IFwiaW1hZ2VDcm9wX2hfXzJTUUdvXCIsXG5cdFwiY3Jvc3NcIjogXCJpbWFnZUNyb3BfY3Jvc3NfXzNFODNsXCIsXG5cdFwibW92ZUJveFwiOiBcImltYWdlQ3JvcF9tb3ZlQm94X18xQVJYZlwiLFxuXHRcImxpbmVcIjogXCJpbWFnZUNyb3BfbGluZV9fM3BnbmZcIixcblx0XCJuXCI6IFwiaW1hZ2VDcm9wX25fX1NIQzY4XCIsXG5cdFwiZVwiOiBcImltYWdlQ3JvcF9lX18yanQ3d1wiLFxuXHRcInNcIjogXCJpbWFnZUNyb3Bfc19fMVMyMXVcIixcblx0XCJwb2ludFwiOiBcImltYWdlQ3JvcF9wb2ludF9fMXNSUnZcIixcblx0XCJud1wiOiBcImltYWdlQ3JvcF9ud19fbmNjQzNcIixcblx0XCJuZVwiOiBcImltYWdlQ3JvcF9uZV9fMnI2TkpcIixcblx0XCJzZVwiOiBcImltYWdlQ3JvcF9zZV9fMUhMdkNcIixcblx0XCJzd1wiOiBcImltYWdlQ3JvcF9zd19fMVk5RTdcIixcblx0XCJjcm9wQm94SW5mb1wiOiBcImltYWdlQ3JvcF9jcm9wQm94SW5mb19fM2RNX0NcIixcblx0XCJidG5cIjogXCJpbWFnZUNyb3BfYnRuX18yeHpkQVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=