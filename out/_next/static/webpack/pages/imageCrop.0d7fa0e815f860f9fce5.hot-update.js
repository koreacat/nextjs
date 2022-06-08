webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/pages/imageCrop.tsx":
/*!*********************************!*\
  !*** ./src/pages/imageCrop.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/imageCrop */ "./src/components/imageCrop/index.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\pages\\imageCrop.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
var IMG_PATH2 = '/nextjs/img/matchIntroduce/imgMatch4.png';

var ImageCropPage = function ImageCropPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imageSrc = _useState[0],
      setImageSrc = _useState[1];

  var handleChangeFile = function handleChangeFile(e) {
    var reader = new FileReader();

    reader.onloadend = function () {
      var base64 = reader.result;

      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.

      setImgFile(e.target.files[0]); // 파일 상태 업데이트
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          margin: '50px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'file',
          accept: 'image/png, image/jpeg, image/jpg',
          onChange: handleChangeFile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
          url: IMG_PATH2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(ImageCropPage, "2lhibDnWxdgh+irpU5g/g4cMlfs=");

_c = ImageCropPage;
/* harmony default export */ __webpack_exports__["default"] = (ImageCropPage);

var _c;

$RefreshReg$(_c, "ImageCropPage");

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlQ3JvcC50c3giXSwibmFtZXMiOlsiSU1HX1BBVEgiLCJJTUdfUEFUSDIiLCJJbWFnZUNyb3BQYWdlIiwidXNlU3RhdGUiLCJpbWFnZVNyYyIsInNldEltYWdlU3JjIiwiaGFuZGxlQ2hhbmdlRmlsZSIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFzZTY0IiwicmVzdWx0Iiwic2V0SW1nQmFzZTY0IiwidG9TdHJpbmciLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJzZXRJbWdGaWxlIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyx3Q0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsMENBQWxCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ25CQyxRQURtQjtBQUFBLE1BQ1RDLFdBRFM7O0FBRzFCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFVBQU0sQ0FBQ0UsU0FBUCxHQUFtQixZQUFNO0FBQ3ZCLFVBQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxNQUF0Qjs7QUFDQSxVQUFJRCxNQUFKLEVBQVk7QUFDVkUsb0JBQVksQ0FBQ0YsTUFBTSxDQUFDRyxRQUFQLEVBQUQsQ0FBWixDQURVLENBQ3VCO0FBQ2xDO0FBQ0YsS0FMRDs7QUFNQSxRQUFJUCxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBSixFQUF1QjtBQUNyQlIsWUFBTSxDQUFDUyxhQUFQLENBQXFCVixDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBckIsRUFEcUIsQ0FDb0I7O0FBQ3pDRSxnQkFBVSxDQUFDWCxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBRCxDQUFWLENBRnFCLENBRVU7QUFDaEM7QUFDRixHQVpEOztBQWNBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFRyxnQkFBTSxFQUFFO0FBQVYsU0FBWjtBQUFBLGdDQUNFO0FBQ0EsY0FBSSxFQUFFLE1BRE47QUFFQSxnQkFBTSxFQUFFLGtDQUZSO0FBR0Esa0JBQVEsRUFBRWI7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUscUVBQUMsZ0VBQUQ7QUFBVyxhQUFHLEVBQUVMO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBL0JEOztHQUFNQyxhOztLQUFBQSxhO0FBaUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuMGQ3ZmEwZTgxNWY4NjBmOWZjZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUNyb3AgZnJvbSBcInNyYy9jb21wb25lbnRzL2ltYWdlQ3JvcFwiO1xyXG5cclxuY29uc3QgSU1HX1BBVEggPSAnL25leHRqcy9pbWcvY2h1blNpay9pbWdDaHVuU2lrRmFjZS5wbmcnO1xyXG5jb25zdCBJTUdfUEFUSDIgPSAnL25leHRqcy9pbWcvbWF0Y2hJbnRyb2R1Y2UvaW1nTWF0Y2g0LnBuZyc7XHJcblxyXG5jb25zdCBJbWFnZUNyb3BQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VGaWxlID0gKGUpID0+IHtcclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgYmFzZTY0ID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgaWYgKGJhc2U2NCkge1xyXG4gICAgICAgIHNldEltZ0Jhc2U2NChiYXNlNjQudG9TdHJpbmcoKSk7IC8vIO2MjOydvCBiYXNlNjQg7IOB7YOcIOyXheuNsOydtO2KuFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0pIHtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pOyAvLyAxLiDtjIzsnbzsnYQg7J297Ja0IOuyhO2NvOyXkCDsoIDsnqXtlanri4jri6QuXHJcbiAgICAgIHNldEltZ0ZpbGUoZS50YXJnZXQuZmlsZXNbMF0pOyAvLyDtjIzsnbwg7IOB7YOcIOyXheuNsOydtO2KuFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzUwcHgnfX0+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICB0eXBlPXsnZmlsZSd9IFxyXG4gICAgICAgICAgYWNjZXB0PXsnaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9qcGcnfSBcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VGaWxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbWFnZUNyb3AgdXJsPXtJTUdfUEFUSDJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGVudHM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==