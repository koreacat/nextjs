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
___CSS_LOADER_EXPORT___.push([module.i, ".imageCrop_wrap__1KkLw {\n  position: relative;\n  display: block;\n  background-color: #eee;\n}\n.imageCrop_wrap__1KkLw .imageCrop_cropArea__34F3E {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/nextjs/img/imageCrop/grid.png\");\n}\n\n.imageCrop_imgArea__3TSYh {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_imgArea__3TSYh .imageCrop_imgBox__1DpaO {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.imageCrop_dimmedBox__Ljad8 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n  cursor: crosshair;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.imageCrop_cropBox__32w2s {\n  position: relative;\n  display: block;\n  outline: 1px solid #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW {\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW .imageCrop_viewImg__2yNIO {\n  display: block;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe {\n  position: absolute;\n  display: block;\n  border: 0 dashed #eee;\n  opacity: 0.5;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_w__3wDdG {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_h__2SQGo {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:before {\n  position: absolute;\n  top: 0;\n  left: -3px;\n  display: block;\n  width: 7px;\n  height: 1px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:after {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  display: block;\n  width: 1px;\n  height: 7px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_moveBox__1ARXf {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.1;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: move;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  background-color: #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_e__2jt7w {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_s__1S21u {\n  left: 0;\n  bottom: -3px;\n  height: 5px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_w__3wDdG {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv {\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: #39f;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_nw__nccC3 {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_ne__2r6NJ {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_e__2jt7w {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_se__1HLvC {\n  right: -3px;\n  bottom: -3px;\n  margin-top: -3px;\n  cursor: se-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_s__1S21u {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_sw__1Y9E7 {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_w__3wDdG {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cropBoxInfo__3dM_C {\n  position: absolute;\n  right: 0;\n  display: block;\n  min-width: 125px;\n  text-align: right;\n  color: #fff;\n  font-weight: 700;\n  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\n}\n\n.imageCrop_btn__2xzdA {\n  position: fixed;\n  width: 80px;\n  padding: 5px;\n  right: 20px;\n  bottom: 20;\n  border-radius: 5px;\n  background-color: #39f;\n  color: #fff;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://imageCrop.module.scss"],"names":[],"mappings":"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","sourcesContent":[".wrap {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #eee;\r\n\r\n  .cropArea {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/nextjs/img/imageCrop/grid.png');\r\n  }\r\n}\r\n\r\n.imgArea {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .imgBox {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.dimmedBox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  opacity: .5;\r\n  cursor: crosshair;\r\n  user-select: none;\r\n}\r\n\r\n.cropBox {\r\n  position: relative;\r\n  display: block;\r\n  outline: 1px solid #39f;\r\n\r\n  .viewBox {\r\n    overflow: hidden;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    user-select: none;\r\n\r\n    .viewImg {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .dash {\r\n    position: absolute;\r\n    display: block;\r\n    border: 0 dashed #eee;\r\n    opacity: .5;\r\n\r\n    &.w {\r\n      border-bottom-width: 1px;\r\n      border-top-width: 1px;\r\n      height: 33.33333%;\r\n      left: 0;\r\n      top: 33.33333%;\r\n      width: 100%;\r\n    }\r\n\r\n    &.h {\r\n      border-left-width: 1px;\r\n      border-right-width: 1px;\r\n      height: 100%;\r\n      left: 33.33333%;\r\n      top: 0;\r\n      width: 33.33333%;\r\n    }\r\n  }\r\n\r\n  .cross {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: .75;\r\n\r\n    &:before {\r\n      position: absolute;\r\n      top: 0;\r\n      left: -3px;\r\n      display: block;\r\n      width: 7px;\r\n      height: 1px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n\r\n    &:after {\r\n      position: absolute;\r\n      top: -3px;\r\n      left: 0;\r\n      display: block;\r\n      width: 1px;\r\n      height: 7px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n  }\r\n\r\n  .moveBox {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: .1;\r\n    user-select: none;\r\n    cursor: move;\r\n  }\r\n\r\n  .line {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: .1;\r\n    background-color: #39f;\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 0;\r\n      height: 5px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 0;\r\n      right: -3px;\r\n      width: 5px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.s {\r\n      left: 0;\r\n      bottom: -3px;\r\n      height: 5px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 0;\r\n      left: -3px;\r\n      width: 5px;\r\n      cursor: w-resize;\r\n    }\r\n\r\n  }\r\n\r\n  .point {\r\n    position: absolute;\r\n    display: block;\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #39f;\r\n    opacity: .75;\r\n\r\n    &.nw {\r\n      top: -3px;\r\n      left: -3px;\r\n      cursor: nw-resize;\r\n    }\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.ne {\r\n      top: -3px;\r\n      right: -3px;\r\n      cursor: ne-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 50%;\r\n      right: -3px;\r\n      margin-top: -3px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.se {\r\n      right: -3px;\r\n      bottom: -3px;\r\n      margin-top: -3px;\r\n      cursor: se-resize;\r\n    }\r\n\r\n    &.s {\r\n      bottom: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.sw {\r\n      bottom: -3px;\r\n      left: -3px;\r\n      cursor: sw-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 50%;\r\n      left: -3px;\r\n      margin-top: -3px;\r\n      cursor: w-resize;\r\n    }\r\n  }\r\n\r\n  .cropBoxInfo {\r\n    position: absolute;\r\n    right: 0;\r\n    display: block;\r\n    min-width: 125px;\r\n    text-align: right;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\r\n  }\r\n}\r\n\r\n.btn {\r\n  position: fixed;\r\n  width: 80px;\r\n  padding: 5px;\r\n  right: 20px;\r\n  bottom: 20;\r\n  border-radius: 5px;\r\n  background-color: #39f;\r\n  color: #fff;\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2ltYWdlQ3JvcC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLHVCQUF1QixtQkFBbUIsMkJBQTJCLEdBQUcscURBQXFELG1CQUFtQixnQkFBZ0IsaUJBQWlCLDhEQUE4RCxHQUFHLCtCQUErQixxQkFBcUIsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixHQUFHLHNEQUFzRCxtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyx1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixpQkFBaUIsc0JBQXNCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsK0JBQStCLHVCQUF1QixtQkFBbUIsNEJBQTRCLEdBQUcsdURBQXVELHFCQUFxQixtQkFBbUIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsOEJBQThCLDhCQUE4QixHQUFHLGlGQUFpRixtQkFBbUIsR0FBRyxvREFBb0QsdUJBQXVCLG1CQUFtQiwwQkFBMEIsaUJBQWlCLEdBQUcsdUVBQXVFLDZCQUE2QiwwQkFBMEIsc0JBQXNCLFlBQVksbUJBQW1CLGdCQUFnQixHQUFHLHVFQUF1RSwyQkFBMkIsNEJBQTRCLGlCQUFpQixvQkFBb0IsV0FBVyxxQkFBcUIsR0FBRyxxREFBcUQsdUJBQXVCLGFBQWEsY0FBYyxtQkFBbUIsYUFBYSxjQUFjLGtCQUFrQixHQUFHLDREQUE0RCx1QkFBdUIsV0FBVyxlQUFlLG1CQUFtQixlQUFlLGdCQUFnQiwyQkFBMkIsbUJBQW1CLEdBQUcsMkRBQTJELHVCQUF1QixjQUFjLFlBQVksbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixtQkFBbUIsR0FBRyx1REFBdUQsdUJBQXVCLFdBQVcsWUFBWSxtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLGlCQUFpQixHQUFHLG9EQUFvRCx1QkFBdUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsaUJBQWlCLDJCQUEyQixHQUFHLHVFQUF1RSxjQUFjLFlBQVksZ0JBQWdCLHFCQUFxQixHQUFHLHVFQUF1RSxXQUFXLGdCQUFnQixlQUFlLHFCQUFxQixHQUFHLHVFQUF1RSxZQUFZLGlCQUFpQixnQkFBZ0IscUJBQXFCLEdBQUcsdUVBQXVFLFdBQVcsZUFBZSxlQUFlLHFCQUFxQixHQUFHLHFEQUFxRCx1QkFBdUIsbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixrQkFBa0IsR0FBRyx5RUFBeUUsY0FBYyxlQUFlLHNCQUFzQixHQUFHLHdFQUF3RSxjQUFjLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLHlFQUF5RSxjQUFjLGdCQUFnQixzQkFBc0IsR0FBRyx3RUFBd0UsYUFBYSxnQkFBZ0IscUJBQXFCLHFCQUFxQixHQUFHLHlFQUF5RSxnQkFBZ0IsaUJBQWlCLHFCQUFxQixzQkFBc0IsR0FBRyx3RUFBd0UsaUJBQWlCLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLHlFQUF5RSxpQkFBaUIsZUFBZSxzQkFBc0IsR0FBRyx3RUFBd0UsYUFBYSxlQUFlLHFCQUFxQixxQkFBcUIsR0FBRywyREFBMkQsdUJBQXVCLGFBQWEsbUJBQW1CLHFCQUFxQixzQkFBc0IsZ0JBQWdCLHFCQUFxQixrRUFBa0UsR0FBRywyQkFBMkIsb0JBQW9CLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGVBQWUsdUJBQXVCLDJCQUEyQixnQkFBZ0IsdUJBQXVCLEdBQUcsT0FBTyxzRkFBc0YsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLGlDQUFpQyx5QkFBeUIscUJBQXFCLDZCQUE2QixxQkFBcUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsZ0VBQWdFLE9BQU8sS0FBSyxrQkFBa0IsdUJBQXVCLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQixtQkFBbUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLG9CQUFvQix5QkFBeUIsYUFBYSxnQkFBZ0IsY0FBYyxlQUFlLGtCQUFrQixtQkFBbUIsNkJBQTZCLGtCQUFrQix3QkFBd0Isd0JBQXdCLEtBQUssa0JBQWtCLHlCQUF5QixxQkFBcUIsOEJBQThCLG9CQUFvQix5QkFBeUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsMEJBQTBCLHNCQUFzQix5QkFBeUIsU0FBUyxPQUFPLGlCQUFpQiwyQkFBMkIsdUJBQXVCLDhCQUE4QixvQkFBb0IsaUJBQWlCLG1DQUFtQyxnQ0FBZ0MsNEJBQTRCLGtCQUFrQix5QkFBeUIsc0JBQXNCLFNBQVMsaUJBQWlCLGlDQUFpQyxrQ0FBa0MsdUJBQXVCLDBCQUEwQixpQkFBaUIsMkJBQTJCLFNBQVMsT0FBTyxrQkFBa0IsMkJBQTJCLGlCQUFpQixrQkFBa0IsdUJBQXVCLGlCQUFpQixrQkFBa0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsaUJBQWlCLHFCQUFxQix5QkFBeUIscUJBQXFCLHNCQUFzQixpQ0FBaUMseUJBQXlCLFNBQVMscUJBQXFCLDZCQUE2QixvQkFBb0Isa0JBQWtCLHlCQUF5QixxQkFBcUIsc0JBQXNCLGlDQUFpQyx5QkFBeUIsU0FBUyxPQUFPLG9CQUFvQiwyQkFBMkIsZUFBZSxnQkFBZ0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsK0JBQStCLG9CQUFvQiwwQkFBMEIscUJBQXFCLE9BQU8saUJBQWlCLDJCQUEyQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsK0JBQStCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHNCQUFzQiwyQkFBMkIsU0FBUyxpQkFBaUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLFNBQVMsaUJBQWlCLGtCQUFrQix1QkFBdUIsc0JBQXNCLDJCQUEyQixTQUFTLGlCQUFpQixpQkFBaUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsU0FBUyxXQUFXLGtCQUFrQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixvQkFBb0IsK0JBQStCLHFCQUFxQixrQkFBa0Isb0JBQW9CLHFCQUFxQiw0QkFBNEIsU0FBUyxpQkFBaUIsb0JBQW9CLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFNBQVMsa0JBQWtCLG9CQUFvQixzQkFBc0IsNEJBQTRCLFNBQVMsaUJBQWlCLG1CQUFtQixzQkFBc0IsMkJBQTJCLDJCQUEyQixTQUFTLGtCQUFrQixzQkFBc0IsdUJBQXVCLDJCQUEyQiw0QkFBNEIsU0FBUyxpQkFBaUIsdUJBQXVCLG9CQUFvQiw0QkFBNEIsMkJBQTJCLFNBQVMsa0JBQWtCLHVCQUF1QixxQkFBcUIsNEJBQTRCLFNBQVMsaUJBQWlCLG1CQUFtQixxQkFBcUIsMkJBQTJCLDJCQUEyQixTQUFTLE9BQU8sd0JBQXdCLDJCQUEyQixpQkFBaUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsb0JBQW9CLHlCQUF5QixzRUFBc0UsT0FBTyxLQUFLLGNBQWMsc0JBQXNCLGtCQUFrQixtQkFBbUIsa0JBQWtCLGlCQUFpQix5QkFBeUIsNkJBQTZCLGtCQUFrQix5QkFBeUIsS0FBSyxtQkFBbUI7QUFDenNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC41MTA3Y2RmZDIyY2ZhNTA5NTBhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmltYWdlQ3JvcF93cmFwX18xS2tMdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcbi5pbWFnZUNyb3Bfd3JhcF9fMUtrTHcgLmltYWdlQ3JvcF9jcm9wQXJlYV9fMzRGM0Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL25leHRqcy9pbWcvaW1hZ2VDcm9wL2dyaWQucG5nXFxcIik7XFxufVxcblxcbi5pbWFnZUNyb3BfaW1nQXJlYV9fM1RTWWgge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1hZ2VDcm9wX2ltZ0FyZWFfXzNUU1loIC5pbWFnZUNyb3BfaW1nQm94X18xRHBhTyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2VDcm9wX2RpbW1lZEJveF9fTGphZDgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdXRsaW5lOiAxcHggc29saWQgIzM5ZjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3ZpZXdCb3hfXzFOUExXIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3Bfdmlld0JveF9fMU5QTFcgLmltYWdlQ3JvcF92aWV3SW1nX18yeU5JTyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Rhc2hfXzFrNXFlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAwIGRhc2hlZCAjZWVlO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfZGFzaF9fMWs1cWUuaW1hZ2VDcm9wX3dfXzN3RGRHIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMzMuMzMzMzMlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMzMuMzMzMzMlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9kYXNoX18xazVxZS5pbWFnZUNyb3BfaF9fMlNRR28ge1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMzMuMzMzMzMlO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDMzLjMzMzMzJTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Nyb3NzX18zRTgzbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3Jvc3NfXzNFODNsOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtM3B4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogN3B4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3Jvc3NfXzNFODNsOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9tb3ZlQm94X18xQVJYZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjE7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF9uX19TSEM2OCB7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBjdXJzb3I6IG4tcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX2VfXzJqdDd3IHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAtM3B4O1xcbiAgd2lkdGg6IDVweDtcXG4gIGN1cnNvcjogZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZi5pbWFnZUNyb3Bfc19fMVMyMXUge1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogLTNweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgY3Vyc29yOiBzLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF93X18zd0RkRyB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtM3B4O1xcbiAgd2lkdGg6IDVweDtcXG4gIGN1cnNvcjogdy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3BfbndfX25jY0MzIHtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IG53LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfbl9fU0hDNjgge1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IG4tcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9uZV9fMnI2Tkoge1xcbiAgdG9wOiAtM3B4O1xcbiAgcmlnaHQ6IC0zcHg7XFxuICBjdXJzb3I6IG5lLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3BfZV9fMmp0N3cge1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogLTNweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBjdXJzb3I6IGUtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9zZV9fMUhMdkMge1xcbiAgcmlnaHQ6IC0zcHg7XFxuICBib3R0b206IC0zcHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX3NfXzFTMjF1IHtcXG4gIGJvdHRvbTogLTNweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgY3Vyc29yOiBzLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfc3dfXzFZOUU3IHtcXG4gIGJvdHRvbTogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICBjdXJzb3I6IHN3LXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfd19fM3dEZEcge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAtM3B4O1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGN1cnNvcjogdy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9wQm94SW5mb19fM2RNX0Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1pbi13aWR0aDogMTI1cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgIzAwMCwgMCAxcHggIzAwMCwgMXB4IDAgIzAwMCwgMCAtMXB4ICMwMDA7XFxufVxcblxcbi5pbWFnZUNyb3BfYnRuX18yeHpkQSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogODBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAyMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0FBQ0o7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtBQUROO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSE47QUFNSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQUpOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQU5KO0FBUUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTk47QUFTSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFUSjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQVlJO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFYTjtBQWNJO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFaTjtBQWVJO0VBQ0UsTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWtCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBaEJKO0FBa0JJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQWhCTjtBQW1CSTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWpCTjtBQW9CSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFsQk47QUFxQkk7RUFDRSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuQk47QUFzQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFwQk47QUF1Qkk7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFyQk47QUF3Qkk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBdEJOO0FBeUJJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdkJOO0FBMkJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQXpCSjs7QUE2QkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUExQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXAge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcblxcclxcbiAgLmNyb3BBcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL25leHRqcy9pbWcvaW1hZ2VDcm9wL2dyaWQucG5nJyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbWdBcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC5pbWdCb3gge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRpbW1lZEJveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAuNTtcXHJcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcm9wQm94IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICMzOWY7XFxyXFxuXFxyXFxuICAudmlld0JveCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgLnZpZXdJbWcge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGFzaCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMCBkYXNoZWQgI2VlZTtcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxuXFxyXFxuICAgICYudyB7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcclxcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMzLjMzMzMzJTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHRvcDogMzMuMzMzMzMlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuaCB7XFxyXFxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXHJcXG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgbGVmdDogMzMuMzMzMzMlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICB3aWR0aDogMzMuMzMzMzMlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3Jvc3Mge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAuNzU7XFxyXFxuXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDdweDtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDdweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmVCb3gge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIG9wYWNpdHk6IC4xO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAuMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXHJcXG5cXHJcXG4gICAgJi5uIHtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuZSB7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnMge1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogcy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi53IHtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICB3aWR0aDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogdy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2ludCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcclxcbiAgICBvcGFjaXR5OiAuNzU7XFxyXFxuXFxyXFxuICAgICYubncge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbnctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubiB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IG4tcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYubmUge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICByaWdodDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IG5lLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmUge1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnNlIHtcXHJcXG4gICAgICByaWdodDogLTNweDtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHNlLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnMge1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBzLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnN3IHtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHN3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLncge1xcclxcbiAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JvcEJveEluZm8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAwICMwMDAsIDAgMXB4ICMwMDAsIDFweCAwICMwMDAsIDAgLTFweCAjMDAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICBib3R0b206IDIwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ3cmFwXCI6IFwiaW1hZ2VDcm9wX3dyYXBfXzFLa0x3XCIsXG5cdFwiY3JvcEFyZWFcIjogXCJpbWFnZUNyb3BfY3JvcEFyZWFfXzM0RjNFXCIsXG5cdFwiaW1nQXJlYVwiOiBcImltYWdlQ3JvcF9pbWdBcmVhX18zVFNZaFwiLFxuXHRcImltZ0JveFwiOiBcImltYWdlQ3JvcF9pbWdCb3hfXzFEcGFPXCIsXG5cdFwiZGltbWVkQm94XCI6IFwiaW1hZ2VDcm9wX2RpbW1lZEJveF9fTGphZDhcIixcblx0XCJjcm9wQm94XCI6IFwiaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzXCIsXG5cdFwidmlld0JveFwiOiBcImltYWdlQ3JvcF92aWV3Qm94X18xTlBMV1wiLFxuXHRcInZpZXdJbWdcIjogXCJpbWFnZUNyb3Bfdmlld0ltZ19fMnlOSU9cIixcblx0XCJkYXNoXCI6IFwiaW1hZ2VDcm9wX2Rhc2hfXzFrNXFlXCIsXG5cdFwid1wiOiBcImltYWdlQ3JvcF93X18zd0RkR1wiLFxuXHRcImhcIjogXCJpbWFnZUNyb3BfaF9fMlNRR29cIixcblx0XCJjcm9zc1wiOiBcImltYWdlQ3JvcF9jcm9zc19fM0U4M2xcIixcblx0XCJtb3ZlQm94XCI6IFwiaW1hZ2VDcm9wX21vdmVCb3hfXzFBUlhmXCIsXG5cdFwibGluZVwiOiBcImltYWdlQ3JvcF9saW5lX18zcGduZlwiLFxuXHRcIm5cIjogXCJpbWFnZUNyb3Bfbl9fU0hDNjhcIixcblx0XCJlXCI6IFwiaW1hZ2VDcm9wX2VfXzJqdDd3XCIsXG5cdFwic1wiOiBcImltYWdlQ3JvcF9zX18xUzIxdVwiLFxuXHRcInBvaW50XCI6IFwiaW1hZ2VDcm9wX3BvaW50X18xc1JSdlwiLFxuXHRcIm53XCI6IFwiaW1hZ2VDcm9wX253X19uY2NDM1wiLFxuXHRcIm5lXCI6IFwiaW1hZ2VDcm9wX25lX18ycjZOSlwiLFxuXHRcInNlXCI6IFwiaW1hZ2VDcm9wX3NlX18xSEx2Q1wiLFxuXHRcInN3XCI6IFwiaW1hZ2VDcm9wX3N3X18xWTlFN1wiLFxuXHRcImNyb3BCb3hJbmZvXCI6IFwiaW1hZ2VDcm9wX2Nyb3BCb3hJbmZvX18zZE1fQ1wiLFxuXHRcImJ0blwiOiBcImltYWdlQ3JvcF9idG5fXzJ4emRBXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==