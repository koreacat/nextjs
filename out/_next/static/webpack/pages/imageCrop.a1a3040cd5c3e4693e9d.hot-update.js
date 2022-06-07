webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/index.tsx":
/*!********************************************!*\
  !*** ./src/components/imageCrop/index.tsx ***!
  \********************************************/
/*! exports provided: IMG_PATH, IMG_PATH2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_PATH", function() { return IMG_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_PATH2", function() { return IMG_PATH2; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CropBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CropBox */ "./src/components/imageCrop/CropBox.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
var IMG_PATH2 = '/nextjs/img/chunSik/iconSoundPlay.png';

var ImageCrop = function ImageCrop() {
  _s();

  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(IMG_PATH2),
      imgPath = _useState[0],
      setImgPath = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    w: 412,
    h: 412
  }),
      imgSize = _useState2[0],
      setImgSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_POINT"]),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_SIZE"]),
      cropBoxSize = _useState4[0],
      setCropBoxSize = _useState4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: wrapRef,
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('cropArea'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('imgArea'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('imgBox'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: cx('img'),
            src: imgPath,
            style: {
              width: "".concat(imgSize.w, "px"),
              height: "".concat(imgSize.h, "px")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        wrapRef: wrapRef,
        imgPath: imgPath,
        imgSize: imgSize,
        offset: offset,
        setOffset: setOffset,
        cropBoxSize: cropBoxSize,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "nQx/4cO9fYWpLt3vgm3lg81rp28=");

_c = ImageCrop;
/* harmony default export */ __webpack_exports__["default"] = (ImageCrop);

var _c;

$RefreshReg$(_c, "ImageCrop");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJJTUdfUEFUSDIiLCJJbWFnZUNyb3AiLCJ3cmFwUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsInciLCJoIiwiaW1nU2l6ZSIsInNldEltZ1NpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJPUklHSU5fU0laRSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDtBQUdPLElBQU1DLFFBQVEsR0FBRyx3Q0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsdUNBQWxCOztBQUVQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFEc0Isa0JBRVFDLHNEQUFRLENBQVNKLFNBQVQsQ0FGaEI7QUFBQSxNQUVmSyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFBQSxtQkFHUUYsc0RBQVEsQ0FBTztBQUFFRyxLQUFDLEVBQUUsR0FBTDtBQUFVQyxLQUFDLEVBQUU7QUFBYixHQUFQLENBSGhCO0FBQUEsTUFHZkMsT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSU1OLHNEQUFRLENBQVFPLGtEQUFSLENBSmQ7QUFBQSxNQUlmQyxNQUplO0FBQUEsTUFJUEMsU0FKTzs7QUFBQSxtQkFLZ0JULHNEQUFRLENBQU9VLGlEQUFQLENBTHhCO0FBQUEsTUFLZkMsV0FMZTtBQUFBLE1BS0ZDLGNBTEU7O0FBT3RCLHNCQUNFO0FBQUssT0FBRyxFQUFFZCxPQUFWO0FBQW1CLGFBQVMsRUFBRVAsRUFBRSxDQUFDLE1BQUQsQ0FBaEM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFVBQUQsQ0FBbEI7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQWxCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQSxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRUEsRUFBRSxDQUFDLEtBQUQsQ0FEZjtBQUVFLGVBQUcsRUFBRVUsT0FGUDtBQUdFLGlCQUFLLEVBQUU7QUFDTFksbUJBQUssWUFBS1IsT0FBTyxDQUFDRixDQUFiLE9BREE7QUFFTFcsb0JBQU0sWUFBS1QsT0FBTyxDQUFDRCxDQUFiO0FBRkQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQWlCRTtBQUFLLGlCQUFTLEVBQUViLEVBQUUsQ0FBQyxXQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUFvQkUscUVBQUMsZ0RBQUQ7QUFDRSxlQUFPLEVBQUVPLE9BRFg7QUFFRSxlQUFPLEVBQUVHLE9BRlg7QUFHRSxlQUFPLEVBQUVJLE9BSFg7QUFJRSxjQUFNLEVBQUVHLE1BSlY7QUFLRSxpQkFBUyxFQUFFQyxTQUxiO0FBTUUsbUJBQVcsRUFBRUUsV0FOZjtBQU9FLHNCQUFjLEVBQUVDO0FBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBMUNEOztHQUFNZixTOztLQUFBQSxTO0FBNENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuYTFhMzA0MGNkNWMzZTQ2OTNlOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3JvcEJveCBmcm9tICcuL0Nyb3BCb3gnO1xyXG5pbXBvcnQgeyBTaXplLCBQb2ludCwgT1JJR0lOX1NJWkUsIE9SSUdJTl9QT0lOVCB9IGZyb20gJy4vZGF0YSc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElNR19QQVRIID0gJy9uZXh0anMvaW1nL2NodW5TaWsvaW1nQ2h1blNpa0ZhY2UucG5nJztcclxuZXhwb3J0IGNvbnN0IElNR19QQVRIMiA9ICcvbmV4dGpzL2ltZy9jaHVuU2lrL2ljb25Tb3VuZFBsYXkucG5nJztcclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbaW1nUGF0aCwgc2V0SW1nUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmc+KElNR19QQVRIMik7XHJcbiAgY29uc3QgW2ltZ1NpemUsIHNldEltZ1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oeyB3OiA0MTIsIGg6IDQxMiB9KTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17d3JhcFJlZn0gY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ1BhdGh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIGRpbW1lZCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnZGltbWVkQm94Jyl9IC8+XHJcblxyXG4gICAgICAgIHsvKiBjcm9wIOyYgeyXrSDrsJXsiqQgKi99XHJcbiAgICAgICAgPENyb3BCb3hcclxuICAgICAgICAgIHdyYXBSZWY9e3dyYXBSZWZ9XHJcbiAgICAgICAgICBpbWdQYXRoPXtpbWdQYXRofVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==