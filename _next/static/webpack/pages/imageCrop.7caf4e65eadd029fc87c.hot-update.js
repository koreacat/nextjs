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
___CSS_LOADER_EXPORT___.push([module.i, ".imageCrop_wrap__1KkLw {\n  position: relative;\n  display: block;\n  background-color: #eee;\n}\n.imageCrop_wrap__1KkLw .imageCrop_cropArea__34F3E {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/nextjs/img/imageCrop/grid.png\");\n}\n\n.imageCrop_imgArea__3TSYh {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.imageCrop_imgArea__3TSYh .imageCrop_imgBox__1DpaO {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.imageCrop_dimmedBox__Ljad8 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n  cursor: crosshair;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.imageCrop_cropBox__32w2s {\n  position: relative;\n  display: block;\n  outline: 1px solid #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW {\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.imageCrop_cropBox__32w2s .imageCrop_viewBox__1NPLW .imageCrop_viewImg__2yNIO {\n  display: block;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe {\n  position: absolute;\n  display: block;\n  border: 0 dashed #eee;\n  opacity: 0.5;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_w__3wDdG {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: 33.33333%;\n  left: 0;\n  top: 33.33333%;\n  width: 100%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_dash__1k5qe.imageCrop_h__2SQGo {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: 33.33333%;\n  top: 0;\n  width: 33.33333%;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:before {\n  position: absolute;\n  top: 0;\n  left: -3px;\n  display: block;\n  width: 7px;\n  height: 1px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_cross__3E83l:after {\n  position: absolute;\n  top: -3px;\n  left: 0;\n  display: block;\n  width: 1px;\n  height: 7px;\n  background-color: #eee;\n  content: \" \";\n}\n.imageCrop_cropBox__32w2s .imageCrop_moveBox__1ARXf {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0.1;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: move;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  background-color: #39f;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_e__2jt7w {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_s__1S21u {\n  left: 0;\n  bottom: -3px;\n  height: 5px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_line__3pgnf.imageCrop_w__3wDdG {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv {\n  position: absolute;\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: #39f;\n  opacity: 0.75;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_nw__nccC3 {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_n__SHC68 {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_ne__2r6NJ {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_e__2jt7w {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_se__1HLvC {\n  right: -3px;\n  bottom: -3px;\n  margin-top: -3px;\n  cursor: se-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_s__1S21u {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_sw__1Y9E7 {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_point__1sRRv.imageCrop_w__3wDdG {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.imageCrop_cropBox__32w2s .imageCrop_cropBoxInfo__3dM_C {\n  position: absolute;\n  right: 0;\n  display: block;\n  min-width: 125px;\n  text-align: right;\n  color: #fff;\n  font-weight: 700;\n  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\n}\n\n.imageCrop_btn__2xzdA {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 160px;\n  height: 50px;\n  margin-left: auto;\n  margin-top: 20px;\n  border-radius: 8px;\n  background-color: #39f;\n  font-size: 18px;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://imageCrop.module.scss"],"names":[],"mappings":"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","sourcesContent":[".wrap {\r\n  position: relative;\r\n  display: block;\r\n  background-color: #eee;\r\n\r\n  .cropArea {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('/nextjs/img/imageCrop/grid.png');\r\n  }\r\n}\r\n\r\n.imgArea {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .imgBox {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.dimmedBox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  opacity: .5;\r\n  cursor: crosshair;\r\n  user-select: none;\r\n}\r\n\r\n.cropBox {\r\n  position: relative;\r\n  display: block;\r\n  outline: 1px solid #39f;\r\n\r\n  .viewBox {\r\n    overflow: hidden;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    user-select: none;\r\n\r\n    .viewImg {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .dash {\r\n    position: absolute;\r\n    display: block;\r\n    border: 0 dashed #eee;\r\n    opacity: .5;\r\n\r\n    &.w {\r\n      border-bottom-width: 1px;\r\n      border-top-width: 1px;\r\n      height: 33.33333%;\r\n      left: 0;\r\n      top: 33.33333%;\r\n      width: 100%;\r\n    }\r\n\r\n    &.h {\r\n      border-left-width: 1px;\r\n      border-right-width: 1px;\r\n      height: 100%;\r\n      left: 33.33333%;\r\n      top: 0;\r\n      width: 33.33333%;\r\n    }\r\n  }\r\n\r\n  .cross {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: .75;\r\n\r\n    &:before {\r\n      position: absolute;\r\n      top: 0;\r\n      left: -3px;\r\n      display: block;\r\n      width: 7px;\r\n      height: 1px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n\r\n    &:after {\r\n      position: absolute;\r\n      top: -3px;\r\n      left: 0;\r\n      display: block;\r\n      width: 1px;\r\n      height: 7px;\r\n      background-color: #eee;\r\n      content: \" \";\r\n    }\r\n  }\r\n\r\n  .moveBox {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: .1;\r\n    user-select: none;\r\n    cursor: move;\r\n  }\r\n\r\n  .line {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: .1;\r\n    background-color: #39f;\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 0;\r\n      height: 5px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 0;\r\n      right: -3px;\r\n      width: 5px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.s {\r\n      left: 0;\r\n      bottom: -3px;\r\n      height: 5px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 0;\r\n      left: -3px;\r\n      width: 5px;\r\n      cursor: w-resize;\r\n    }\r\n\r\n  }\r\n\r\n  .point {\r\n    position: absolute;\r\n    display: block;\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #39f;\r\n    opacity: .75;\r\n\r\n    &.nw {\r\n      top: -3px;\r\n      left: -3px;\r\n      cursor: nw-resize;\r\n    }\r\n\r\n    &.n {\r\n      top: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: n-resize;\r\n    }\r\n\r\n    &.ne {\r\n      top: -3px;\r\n      right: -3px;\r\n      cursor: ne-resize;\r\n    }\r\n\r\n    &.e {\r\n      top: 50%;\r\n      right: -3px;\r\n      margin-top: -3px;\r\n      cursor: e-resize;\r\n    }\r\n\r\n    &.se {\r\n      right: -3px;\r\n      bottom: -3px;\r\n      margin-top: -3px;\r\n      cursor: se-resize;\r\n    }\r\n\r\n    &.s {\r\n      bottom: -3px;\r\n      left: 50%;\r\n      margin-left: -3px;\r\n      cursor: s-resize;\r\n    }\r\n\r\n    &.sw {\r\n      bottom: -3px;\r\n      left: -3px;\r\n      cursor: sw-resize;\r\n    }\r\n\r\n    &.w {\r\n      top: 50%;\r\n      left: -3px;\r\n      margin-top: -3px;\r\n      cursor: w-resize;\r\n    }\r\n  }\r\n\r\n  .cropBoxInfo {\r\n    position: absolute;\r\n    right: 0;\r\n    display: block;\r\n    min-width: 125px;\r\n    text-align: right;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;\r\n  }\r\n}\r\n\r\n.btn {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 160px;\r\n  height: 50px;\r\n  margin-left: auto;\r\n  margin-top: 20px;\r\n  border-radius: 8px;\r\n  background-color: #39f;\r\n  font-size: 18px;\r\n  color: #fff;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2ltYWdlQ3JvcC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLHVCQUF1QixtQkFBbUIsMkJBQTJCLEdBQUcscURBQXFELG1CQUFtQixnQkFBZ0IsaUJBQWlCLDhEQUE4RCxHQUFHLCtCQUErQixxQkFBcUIsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixHQUFHLHNEQUFzRCxtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyx1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixpQkFBaUIsc0JBQXNCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsK0JBQStCLHVCQUF1QixtQkFBbUIsNEJBQTRCLEdBQUcsdURBQXVELHFCQUFxQixtQkFBbUIsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsOEJBQThCLDhCQUE4QixHQUFHLGlGQUFpRixtQkFBbUIsR0FBRyxvREFBb0QsdUJBQXVCLG1CQUFtQiwwQkFBMEIsaUJBQWlCLEdBQUcsdUVBQXVFLDZCQUE2QiwwQkFBMEIsc0JBQXNCLFlBQVksbUJBQW1CLGdCQUFnQixHQUFHLHVFQUF1RSwyQkFBMkIsNEJBQTRCLGlCQUFpQixvQkFBb0IsV0FBVyxxQkFBcUIsR0FBRyxxREFBcUQsdUJBQXVCLGFBQWEsY0FBYyxtQkFBbUIsYUFBYSxjQUFjLGtCQUFrQixHQUFHLDREQUE0RCx1QkFBdUIsV0FBVyxlQUFlLG1CQUFtQixlQUFlLGdCQUFnQiwyQkFBMkIsbUJBQW1CLEdBQUcsMkRBQTJELHVCQUF1QixjQUFjLFlBQVksbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixtQkFBbUIsR0FBRyx1REFBdUQsdUJBQXVCLFdBQVcsWUFBWSxtQkFBbUIsZ0JBQWdCLGlCQUFpQiwyQkFBMkIsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLGlCQUFpQixHQUFHLG9EQUFvRCx1QkFBdUIsbUJBQW1CLGdCQUFnQixpQkFBaUIsaUJBQWlCLDJCQUEyQixHQUFHLHVFQUF1RSxjQUFjLFlBQVksZ0JBQWdCLHFCQUFxQixHQUFHLHVFQUF1RSxXQUFXLGdCQUFnQixlQUFlLHFCQUFxQixHQUFHLHVFQUF1RSxZQUFZLGlCQUFpQixnQkFBZ0IscUJBQXFCLEdBQUcsdUVBQXVFLFdBQVcsZUFBZSxlQUFlLHFCQUFxQixHQUFHLHFEQUFxRCx1QkFBdUIsbUJBQW1CLGVBQWUsZ0JBQWdCLDJCQUEyQixrQkFBa0IsR0FBRyx5RUFBeUUsY0FBYyxlQUFlLHNCQUFzQixHQUFHLHdFQUF3RSxjQUFjLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLHlFQUF5RSxjQUFjLGdCQUFnQixzQkFBc0IsR0FBRyx3RUFBd0UsYUFBYSxnQkFBZ0IscUJBQXFCLHFCQUFxQixHQUFHLHlFQUF5RSxnQkFBZ0IsaUJBQWlCLHFCQUFxQixzQkFBc0IsR0FBRyx3RUFBd0UsaUJBQWlCLGNBQWMsc0JBQXNCLHFCQUFxQixHQUFHLHlFQUF5RSxpQkFBaUIsZUFBZSxzQkFBc0IsR0FBRyx3RUFBd0UsYUFBYSxlQUFlLHFCQUFxQixxQkFBcUIsR0FBRywyREFBMkQsdUJBQXVCLGFBQWEsbUJBQW1CLHFCQUFxQixzQkFBc0IsZ0JBQWdCLHFCQUFxQixrRUFBa0UsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGlCQUFpQixzQkFBc0IscUJBQXFCLHVCQUF1QiwyQkFBMkIsb0JBQW9CLGdCQUFnQixHQUFHLE9BQU8sc0ZBQXNGLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsaUNBQWlDLHlCQUF5QixxQkFBcUIsNkJBQTZCLHFCQUFxQix1QkFBdUIsb0JBQW9CLHFCQUFxQixnRUFBZ0UsT0FBTyxLQUFLLGtCQUFrQix1QkFBdUIseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxrQkFBa0IsbUJBQW1CLG1CQUFtQix1QkFBdUIsb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssb0JBQW9CLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsS0FBSyxrQkFBa0IseUJBQXlCLHFCQUFxQiw4QkFBOEIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixTQUFTLE9BQU8saUJBQWlCLDJCQUEyQix1QkFBdUIsOEJBQThCLG9CQUFvQixpQkFBaUIsbUNBQW1DLGdDQUFnQyw0QkFBNEIsa0JBQWtCLHlCQUF5QixzQkFBc0IsU0FBUyxpQkFBaUIsaUNBQWlDLGtDQUFrQyx1QkFBdUIsMEJBQTBCLGlCQUFpQiwyQkFBMkIsU0FBUyxPQUFPLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLDZCQUE2QixpQkFBaUIscUJBQXFCLHlCQUF5QixxQkFBcUIsc0JBQXNCLGlDQUFpQyx5QkFBeUIsU0FBUyxxQkFBcUIsNkJBQTZCLG9CQUFvQixrQkFBa0IseUJBQXlCLHFCQUFxQixzQkFBc0IsaUNBQWlDLHlCQUF5QixTQUFTLE9BQU8sb0JBQW9CLDJCQUEyQixlQUFlLGdCQUFnQix1QkFBdUIsb0JBQW9CLHFCQUFxQiwrQkFBK0Isb0JBQW9CLDBCQUEwQixxQkFBcUIsT0FBTyxpQkFBaUIsMkJBQTJCLHVCQUF1QixvQkFBb0IscUJBQXFCLG9CQUFvQiwrQkFBK0IsaUJBQWlCLG9CQUFvQixrQkFBa0Isc0JBQXNCLDJCQUEyQixTQUFTLGlCQUFpQixpQkFBaUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsU0FBUyxpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsMkJBQTJCLFNBQVMsaUJBQWlCLGlCQUFpQixxQkFBcUIscUJBQXFCLDJCQUEyQixTQUFTLFdBQVcsa0JBQWtCLDJCQUEyQix1QkFBdUIsbUJBQW1CLG9CQUFvQiwrQkFBK0IscUJBQXFCLGtCQUFrQixvQkFBb0IscUJBQXFCLDRCQUE0QixTQUFTLGlCQUFpQixvQkFBb0Isb0JBQW9CLDRCQUE0QiwyQkFBMkIsU0FBUyxrQkFBa0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsU0FBUyxpQkFBaUIsbUJBQW1CLHNCQUFzQiwyQkFBMkIsMkJBQTJCLFNBQVMsa0JBQWtCLHNCQUFzQix1QkFBdUIsMkJBQTJCLDRCQUE0QixTQUFTLGlCQUFpQix1QkFBdUIsb0JBQW9CLDRCQUE0QiwyQkFBMkIsU0FBUyxrQkFBa0IsdUJBQXVCLHFCQUFxQiw0QkFBNEIsU0FBUyxpQkFBaUIsbUJBQW1CLHFCQUFxQiwyQkFBMkIsMkJBQTJCLFNBQVMsT0FBTyx3QkFBd0IsMkJBQTJCLGlCQUFpQix1QkFBdUIseUJBQXlCLDBCQUEwQixvQkFBb0IseUJBQXlCLHNFQUFzRSxPQUFPLEtBQUssY0FBYyxvQkFBb0IsMEJBQTBCLDhCQUE4QixtQkFBbUIsbUJBQW1CLHdCQUF3Qix1QkFBdUIseUJBQXlCLDZCQUE2QixzQkFBc0Isa0JBQWtCLEtBQUssbUJBQW1CO0FBQzUxWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuN2NhZjRlNjVlYWRkMDI5ZmM4N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbWFnZUNyb3Bfd3JhcF9fMUtrTHcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG4uaW1hZ2VDcm9wX3dyYXBfXzFLa0x3IC5pbWFnZUNyb3BfY3JvcEFyZWFfXzM0RjNFIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9uZXh0anMvaW1nL2ltYWdlQ3JvcC9ncmlkLnBuZ1xcXCIpO1xcbn1cXG5cXG4uaW1hZ2VDcm9wX2ltZ0FyZWFfXzNUU1loIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmltYWdlQ3JvcF9pbWdBcmVhX18zVFNZaCAuaW1hZ2VDcm9wX2ltZ0JveF9fMURwYU8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmltYWdlQ3JvcF9kaW1tZWRCb3hfX0xqYWQ4IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMzOWY7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF92aWV3Qm94X18xTlBMVyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3ZpZXdCb3hfXzFOUExXIC5pbWFnZUNyb3Bfdmlld0ltZ19fMnlOSU8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9kYXNoX18xazVxZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMCBkYXNoZWQgI2VlZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Rhc2hfXzFrNXFlLmltYWdlQ3JvcF93X18zd0RkRyB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDMzLjMzMzMzJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDMzLjMzMzMzJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfZGFzaF9fMWs1cWUuaW1hZ2VDcm9wX2hfXzJTUUdvIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDMzLjMzMzMzJTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzMy4zMzMzMyU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9jcm9zc19fM0U4M2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Nyb3NzX18zRTgzbDpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogLTNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDdweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2Nyb3NzX18zRTgzbDphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbW92ZUJveF9fMUFSWGYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZi5pbWFnZUNyb3Bfbl9fU0hDNjgge1xcbiAgdG9wOiAtM3B4O1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNXB4O1xcbiAgY3Vyc29yOiBuLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX2xpbmVfXzNwZ25mLmltYWdlQ3JvcF9lX18yanQ3dyB7XFxuICB0b3A6IDA7XFxuICByaWdodDogLTNweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBjdXJzb3I6IGUtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfbGluZV9fM3BnbmYuaW1hZ2VDcm9wX3NfXzFTMjF1IHtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IC0zcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGN1cnNvcjogcy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9saW5lX18zcGduZi5pbWFnZUNyb3Bfd19fM3dEZEcge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogLTNweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBjdXJzb3I6IHctcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZjtcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX253X19uY2NDMyB7XFxuICB0b3A6IC0zcHg7XFxuICBsZWZ0OiAtM3B4O1xcbiAgY3Vyc29yOiBudy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX25fX1NIQzY4IHtcXG4gIHRvcDogLTNweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgY3Vyc29yOiBuLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3BfbmVfXzJyNk5KIHtcXG4gIHRvcDogLTNweDtcXG4gIHJpZ2h0OiAtM3B4O1xcbiAgY3Vyc29yOiBuZS1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX2VfXzJqdDd3IHtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IC0zcHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgY3Vyc29yOiBlLXJlc2l6ZTtcXG59XFxuLmltYWdlQ3JvcF9jcm9wQm94X18zMncycyAuaW1hZ2VDcm9wX3BvaW50X18xc1JSdi5pbWFnZUNyb3Bfc2VfXzFITHZDIHtcXG4gIHJpZ2h0OiAtM3B4O1xcbiAgYm90dG9tOiAtM3B4O1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIGN1cnNvcjogc2UtcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfcG9pbnRfXzFzUlJ2LmltYWdlQ3JvcF9zX18xUzIxdSB7XFxuICBib3R0b206IC0zcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTNweDtcXG4gIGN1cnNvcjogcy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX3N3X18xWTlFNyB7XFxuICBib3R0b206IC0zcHg7XFxuICBsZWZ0OiAtM3B4O1xcbiAgY3Vyc29yOiBzdy1yZXNpemU7XFxufVxcbi5pbWFnZUNyb3BfY3JvcEJveF9fMzJ3MnMgLmltYWdlQ3JvcF9wb2ludF9fMXNSUnYuaW1hZ2VDcm9wX3dfXzN3RGRHIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogLTNweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBjdXJzb3I6IHctcmVzaXplO1xcbn1cXG4uaW1hZ2VDcm9wX2Nyb3BCb3hfXzMydzJzIC5pbWFnZUNyb3BfY3JvcEJveEluZm9fXzNkTV9DIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtaW4td2lkdGg6IDEyNXB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAwICMwMDAsIDAgMXB4ICMwMDAsIDFweCAwICMwMDAsIDAgLTFweCAjMDAwO1xcbn1cXG5cXG4uaW1hZ2VDcm9wX2J0bl9fMnh6ZEEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0FBQ0o7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtBQUROO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSE47QUFNSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQUpOO0FBUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQU5KO0FBUUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTk47QUFTSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFQTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFUSjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQVlJO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFYTjtBQWNJO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFaTjtBQWVJO0VBQ0UsTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWtCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBaEJKO0FBa0JJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQWhCTjtBQW1CSTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWpCTjtBQW9CSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFsQk47QUFxQkk7RUFDRSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFuQk47QUFzQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFwQk47QUF1Qkk7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFyQk47QUF3Qkk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBdEJOO0FBeUJJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdkJOO0FBMkJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQXpCSjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQTFCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuXFxyXFxuICAuY3JvcEFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvbmV4dGpzL2ltZy9pbWFnZUNyb3AvZ3JpZC5wbmcnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltZ0FyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgLmltZ0JveCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGltbWVkQm94IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIG9wYWNpdHk6IC41O1xcclxcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3BCb3gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgIzM5ZjtcXHJcXG5cXHJcXG4gIC52aWV3Qm94IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgICAudmlld0ltZyB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kYXNoIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyOiAwIGRhc2hlZCAjZWVlO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG5cXHJcXG4gICAgJi53IHtcXHJcXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxyXFxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogMzMuMzMzMzMlO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgdG9wOiAzMy4zMzMzMyU7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5oIHtcXHJcXG4gICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xcclxcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICBsZWZ0OiAzMy4zMzMzMyU7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHdpZHRoOiAzMy4zMzMzMyU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcm9zcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IC43NTtcXHJcXG5cXHJcXG4gICAgJjpiZWZvcmUge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogN3B4O1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogMXB4O1xcclxcbiAgICAgIGhlaWdodDogN3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92ZUJveCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgb3BhY2l0eTogLjE7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjdXJzb3I6IG1vdmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGluZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IC4xO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xcclxcblxcclxcbiAgICAmLm4ge1xcclxcbiAgICAgIHRvcDogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIGhlaWdodDogNXB4O1xcclxcbiAgICAgIGN1cnNvcjogbi1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5lIHtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgcmlnaHQ6IC0zcHg7XFxyXFxuICAgICAgd2lkdGg6IDVweDtcXHJcXG4gICAgICBjdXJzb3I6IGUtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYucyB7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiBzLXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLncge1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgICAgY3Vyc29yOiB3LXJlc2l6ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLnBvaW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxyXFxuICAgIG9wYWNpdHk6IC43NTtcXHJcXG5cXHJcXG4gICAgJi5udyB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IC0zcHg7XFxyXFxuICAgICAgY3Vyc29yOiBudy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5uIHtcXHJcXG4gICAgICB0b3A6IC0zcHg7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbi1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5uZSB7XFxyXFxuICAgICAgdG9wOiAtM3B4O1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogbmUtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuZSB7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgcmlnaHQ6IC0zcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IGUtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuc2Uge1xcclxcbiAgICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogc2UtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYucyB7XFxyXFxuICAgICAgYm90dG9tOiAtM3B4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcXHJcXG4gICAgICBjdXJzb3I6IHMtcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuc3cge1xcclxcbiAgICAgIGJvdHRvbTogLTNweDtcXHJcXG4gICAgICBsZWZ0OiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogc3ctcmVzaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYudyB7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogLTNweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xcclxcbiAgICAgIGN1cnNvcjogdy1yZXNpemU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcm9wQm94SW5mbyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgIzAwMCwgMCAxcHggIzAwMCwgMXB4IDAgIzAwMCwgMCAtMXB4ICMwMDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcFwiOiBcImltYWdlQ3JvcF93cmFwX18xS2tMd1wiLFxuXHRcImNyb3BBcmVhXCI6IFwiaW1hZ2VDcm9wX2Nyb3BBcmVhX18zNEYzRVwiLFxuXHRcImltZ0FyZWFcIjogXCJpbWFnZUNyb3BfaW1nQXJlYV9fM1RTWWhcIixcblx0XCJpbWdCb3hcIjogXCJpbWFnZUNyb3BfaW1nQm94X18xRHBhT1wiLFxuXHRcImRpbW1lZEJveFwiOiBcImltYWdlQ3JvcF9kaW1tZWRCb3hfX0xqYWQ4XCIsXG5cdFwiY3JvcEJveFwiOiBcImltYWdlQ3JvcF9jcm9wQm94X18zMncyc1wiLFxuXHRcInZpZXdCb3hcIjogXCJpbWFnZUNyb3Bfdmlld0JveF9fMU5QTFdcIixcblx0XCJ2aWV3SW1nXCI6IFwiaW1hZ2VDcm9wX3ZpZXdJbWdfXzJ5TklPXCIsXG5cdFwiZGFzaFwiOiBcImltYWdlQ3JvcF9kYXNoX18xazVxZVwiLFxuXHRcIndcIjogXCJpbWFnZUNyb3Bfd19fM3dEZEdcIixcblx0XCJoXCI6IFwiaW1hZ2VDcm9wX2hfXzJTUUdvXCIsXG5cdFwiY3Jvc3NcIjogXCJpbWFnZUNyb3BfY3Jvc3NfXzNFODNsXCIsXG5cdFwibW92ZUJveFwiOiBcImltYWdlQ3JvcF9tb3ZlQm94X18xQVJYZlwiLFxuXHRcImxpbmVcIjogXCJpbWFnZUNyb3BfbGluZV9fM3BnbmZcIixcblx0XCJuXCI6IFwiaW1hZ2VDcm9wX25fX1NIQzY4XCIsXG5cdFwiZVwiOiBcImltYWdlQ3JvcF9lX18yanQ3d1wiLFxuXHRcInNcIjogXCJpbWFnZUNyb3Bfc19fMVMyMXVcIixcblx0XCJwb2ludFwiOiBcImltYWdlQ3JvcF9wb2ludF9fMXNSUnZcIixcblx0XCJud1wiOiBcImltYWdlQ3JvcF9ud19fbmNjQzNcIixcblx0XCJuZVwiOiBcImltYWdlQ3JvcF9uZV9fMnI2TkpcIixcblx0XCJzZVwiOiBcImltYWdlQ3JvcF9zZV9fMUhMdkNcIixcblx0XCJzd1wiOiBcImltYWdlQ3JvcF9zd19fMVk5RTdcIixcblx0XCJjcm9wQm94SW5mb1wiOiBcImltYWdlQ3JvcF9jcm9wQm94SW5mb19fM2RNX0NcIixcblx0XCJidG5cIjogXCJpbWFnZUNyb3BfYnRuX18yeHpkQVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=