webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/index.tsx":
/*!********************************************!*\
  !*** ./src/components/imageCrop/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DimmedBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DimmedBox */ "./src/components/imageCrop/DimmedBox.tsx");
/* harmony import */ var _CropBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CropBox */ "./src/components/imageCrop/CropBox.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var ImageCrop = function ImageCrop(_ref) {
  _s();

  var src = _ref.src;
  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      imgSize = _useState[0],
      setImgSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_POINT"]),
      offset = _useState3[0],
      setOffset = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, [src]);

  var init = function init() {
    var imgEl = new Image();
    imgEl.src = src;
    imgEl.addEventListener('load', function () {
      setImgSize({
        w: imgEl.width,
        h: imgEl.height
      });
      setCropBoxSize({
        w: imgEl.width / 2,
        h: imgEl.height / 2
      });
      setOffset({
        x: imgEl.width / 4,
        y: imgEl.height / 4
      });
    });
  };

  if (!src) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: wrapRef,
    className: cx('wrap'),
    style: {
      width: "".concat(imgSize.w, "px"),
      height: "".concat(imgSize.h, "px")
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('cropArea'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('imgArea'),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('imgBox'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: cx('img'),
            src: src,
            style: {
              width: "".concat(imgSize.w, "px"),
              height: "".concat(imgSize.h, "px")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        wrapRef: wrapRef,
        src: src,
        imgSize: imgSize,
        offset: offset,
        setOffset: setOffset,
        cropBoxSize: cropBoxSize,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "rphPXB6AbJ+lt/R+BArqc94ubzk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiaW1nRWwiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQU1BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUM3QyxNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQXRCOztBQUQ2QyxrQkFFZkMsc0RBQVEsQ0FBT0MsaURBQVAsQ0FGTztBQUFBLE1BRXRDQyxPQUZzQztBQUFBLE1BRTdCQyxVQUY2Qjs7QUFBQSxtQkFHUEgsc0RBQVEsQ0FBT0MsaURBQVAsQ0FIRDtBQUFBLE1BR3RDRyxXQUhzQztBQUFBLE1BR3pCQyxjQUh5Qjs7QUFBQSxtQkFJakJMLHNEQUFRLENBQVFNLGtEQUFSLENBSlM7QUFBQSxNQUl0Q0MsTUFKc0M7QUFBQSxNQUk5QkMsU0FKOEI7O0FBTTdDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsUUFBSTtBQUNMLEdBRlEsRUFFTixDQUFDYixHQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNYSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7QUFDQUQsU0FBSyxDQUFDZCxHQUFOLEdBQVlBLEdBQVo7QUFDQWMsU0FBSyxDQUFDRSxnQkFBTixDQUF1QixNQUF2QixFQUErQixZQUFNO0FBQ25DVixnQkFBVSxDQUFDO0FBQUVXLFNBQUMsRUFBRUgsS0FBSyxDQUFDSSxLQUFYO0FBQWtCQyxTQUFDLEVBQUVMLEtBQUssQ0FBQ007QUFBM0IsT0FBRCxDQUFWO0FBQ0FaLG9CQUFjLENBQUM7QUFBRVMsU0FBQyxFQUFFSCxLQUFLLENBQUNJLEtBQU4sR0FBYyxDQUFuQjtBQUFzQkMsU0FBQyxFQUFFTCxLQUFLLENBQUNNLE1BQU4sR0FBZTtBQUF4QyxPQUFELENBQWQ7QUFDQVQsZUFBUyxDQUFDO0FBQUVVLFNBQUMsRUFBRVAsS0FBSyxDQUFDSSxLQUFOLEdBQWMsQ0FBbkI7QUFBc0JJLFNBQUMsRUFBRVIsS0FBSyxDQUFDTSxNQUFOLEdBQWU7QUFBeEMsT0FBRCxDQUFUO0FBQ0QsS0FKRDtBQUtELEdBUkQ7O0FBVUEsTUFBSSxDQUFDcEIsR0FBTCxFQUFVLE9BQU8sSUFBUDtBQUVWLHNCQUNFO0FBQ0UsT0FBRyxFQUFFQyxPQURQO0FBRUUsYUFBUyxFQUFFTixFQUFFLENBQUMsTUFBRCxDQUZmO0FBR0UsU0FBSyxFQUFFO0FBQ0x1QixXQUFLLFlBQUtiLE9BQU8sQ0FBQ1ksQ0FBYixPQURBO0FBRUxHLFlBQU0sWUFBS2YsT0FBTyxDQUFDYyxDQUFiO0FBRkQsS0FIVDtBQUFBLDJCQVFFO0FBQUssZUFBUyxFQUFFeEIsRUFBRSxDQUFDLFVBQUQsQ0FBbEI7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFELENBQWxCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQSxFQUFFLENBQUMsUUFBRCxDQUFsQjtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRUEsRUFBRSxDQUFDLEtBQUQsQ0FEZjtBQUVFLGVBQUcsRUFBRUssR0FGUDtBQUdFLGlCQUFLLEVBQUU7QUFDTGtCLG1CQUFLLFlBQUtiLE9BQU8sQ0FBQ1ksQ0FBYixPQURBO0FBRUxHLG9CQUFNLFlBQUtmLE9BQU8sQ0FBQ2MsQ0FBYjtBQUZEO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFnQkUscUVBQUMsa0RBQUQ7QUFDRSxpQkFBUyxFQUFFUixTQURiO0FBRUUsc0JBQWMsRUFBRUg7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQXFCRSxxRUFBQyxnREFBRDtBQUNFLGVBQU8sRUFBRVAsT0FEWDtBQUVFLFdBQUcsRUFBRUQsR0FGUDtBQUdFLGVBQU8sRUFBRUssT0FIWDtBQUlFLGNBQU0sRUFBRUssTUFKVjtBQUtFLGlCQUFTLEVBQUVDLFNBTGI7QUFNRSxtQkFBVyxFQUFFSixXQU5mO0FBT0Usc0JBQWMsRUFBRUM7QUFQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0FoRUQ7O0dBQU1ULFM7O0tBQUFBLFM7QUFrRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC43ZGQyMWEyZGNhNjQ3M2VlMzc1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTaXplLCBQb2ludCwgT1JJR0lOX1BPSU5ULCBPUklHSU5fU0laRSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgRGltbWVkQm94IGZyb20gJy4vRGltbWVkQm94JztcclxuaW1wb3J0IENyb3BCb3ggZnJvbSAnLi9Dcm9wQm94JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7IHNyYyB9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSwgW3NyY10pO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0VsLnNyYyA9IHNyYztcclxuICAgIGltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NpemUoeyB3OiBpbWdFbC53aWR0aCwgaDogaW1nRWwuaGVpZ2h0IH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGltZ0VsLndpZHRoIC8gMiwgaDogaW1nRWwuaGVpZ2h0IC8gMiB9KTtcclxuICAgICAgc2V0T2Zmc2V0KHsgeDogaW1nRWwud2lkdGggLyA0LCB5OiBpbWdFbC5oZWlnaHQgLyA0IH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17d3JhcFJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgey8qIOydtOuvuOyngCDsmIHsl60gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8RGltbWVkQm94XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9