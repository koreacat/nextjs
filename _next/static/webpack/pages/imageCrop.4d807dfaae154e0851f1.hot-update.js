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

  var handleDownload = function handleDownload() {
    var canvas = document.createElement('canvas');
    canvas.width = imgSize.w;
    canvas.height = imgSize.h;
    var ctx = canvas.getContext('2d');
  };

  if (!src) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: wrapRef,
    className: cx('wrap'),
    style: {
      width: "".concat(imgSize.w, "px"),
      height: "".concat(imgSize.h, "px")
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiaW1nRWwiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwieCIsInkiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQU1BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUM3QyxNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQXRCOztBQUQ2QyxrQkFFZkMsc0RBQVEsQ0FBT0MsaURBQVAsQ0FGTztBQUFBLE1BRXRDQyxPQUZzQztBQUFBLE1BRTdCQyxVQUY2Qjs7QUFBQSxtQkFHUEgsc0RBQVEsQ0FBT0MsaURBQVAsQ0FIRDtBQUFBLE1BR3RDRyxXQUhzQztBQUFBLE1BR3pCQyxjQUh5Qjs7QUFBQSxtQkFJakJMLHNEQUFRLENBQVFNLGtEQUFSLENBSlM7QUFBQSxNQUl0Q0MsTUFKc0M7QUFBQSxNQUk5QkMsU0FK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QUFFLENBQUMsS0FBRCxDQUFoQjtBQUF5QixhQUFPLEVBQUU0QixjQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQTNFRDs7R0FBTXhCLFM7O0tBQUFBLFM7QUE2RVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC40ZDgwN2RmYWFlMTU0ZTA4NTFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTaXplLCBQb2ludCwgT1JJR0lOX1BPSU5ULCBPUklHSU5fU0laRSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgRGltbWVkQm94IGZyb20gJy4vRGltbWVkQm94JztcclxuaW1wb3J0IENyb3BCb3ggZnJvbSAnLi9Dcm9wQm94JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7IHNyYyB9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSwgW3NyY10pO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0VsLnNyYyA9IHNyYztcclxuICAgIGltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NpemUoeyB3OiBpbWdFbC53aWR0aCwgaDogaW1nRWwuaGVpZ2h0IH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGltZ0VsLndpZHRoIC8gMiwgaDogaW1nRWwuaGVpZ2h0IC8gMiB9KTtcclxuICAgICAgc2V0T2Zmc2V0KHsgeDogaW1nRWwud2lkdGggLyA0LCB5OiBpbWdFbC5oZWlnaHQgLyA0IH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW1nU2l6ZS53O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltZ1NpemUuaDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3dyYXBSZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ3dyYXAnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPERpbW1lZEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YSBjbGFzc05hbWU9e2N4KCdidG4nKX0gb25DbGljaz17aGFuZGxlRG93bmxvYWR9PmRvd25sb2FkPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==