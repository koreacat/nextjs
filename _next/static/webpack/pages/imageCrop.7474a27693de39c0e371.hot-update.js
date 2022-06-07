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

var ImageCrop = function ImageCrop(_ref) {
  _s();

  var url = _ref.url;
  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imgPath = _useState[0],
      setImgPath = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_SIZE"]),
      imgSize = _useState2[0],
      setImgSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_SIZE"]),
      cropBoxSize = _useState3[0],
      setCropBoxSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data__WEBPACK_IMPORTED_MODULE_5__["ORIGIN_POINT"]),
      offset = _useState4[0],
      setOffset = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setImgPath(url);
    var imgSize = {
      w: 412,
      h: 412
    };
    setImgSize(imgSize);
  }, [imgPath]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
    setCropBoxSize({
      w: imgSize.w / 2,
      h: imgSize.h / 2
    });
    setOffset({
      x: cropBoxSize.w / 2,
      y: cropBoxSize.h / 2
    });
  }, [imgSize]);
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
            lineNumber: 37,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "DIseb9BuPqHw/RVju4pmZcdEUjE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwidXJsIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW1nUGF0aCIsInNldEltZ1BhdGgiLCJPUklHSU5fU0laRSIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsIk9SSUdJTl9QT0lOVCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzZUVmZmVjdCIsInciLCJoIiwidXNlTGF5b3V0RWZmZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBMkI7QUFBQTs7QUFBQSxNQUF6QkMsR0FBeUIsUUFBekJBLEdBQXlCO0FBQzNDLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7O0FBRDJDLGtCQUViQyxzREFBUSxDQUFTLEVBQVQsQ0FGSztBQUFBLE1BRXBDQyxPQUZvQztBQUFBLE1BRTNCQyxVQUYyQjs7QUFBQSxtQkFHYkYsc0RBQVEsQ0FBT0csaURBQVAsQ0FISztBQUFBLE1BR3BDQyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFBQSxtQkFJTEwsc0RBQVEsQ0FBT0csaURBQVAsQ0FKSDtBQUFBLE1BSXBDRyxXQUpvQztBQUFBLE1BSXZCQyxjQUp1Qjs7QUFBQSxtQkFLZlAsc0RBQVEsQ0FBUVEsa0RBQVIsQ0FMTztBQUFBLE1BS3BDQyxNQUxvQztBQUFBLE1BSzVCQyxTQUw0Qjs7QUFPM0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkVCxjQUFVLENBQUNMLEdBQUQsQ0FBVjtBQUNBLFFBQU1PLE9BQU8sR0FBRztBQUFFUSxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUU7QUFBYixLQUFoQjtBQUNBUixjQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNELEdBSlEsRUFJTixDQUFDSCxPQUFELENBSk0sQ0FBVDtBQU1BYSwrREFBZSxDQUFDLFlBQU07QUFDcEJQLGtCQUFjLENBQUM7QUFBQ0ssT0FBQyxFQUFFUixPQUFPLENBQUNRLENBQVIsR0FBWSxDQUFoQjtBQUFtQkMsT0FBQyxFQUFFVCxPQUFPLENBQUNTLENBQVIsR0FBWTtBQUFsQyxLQUFELENBQWQ7QUFDQUgsYUFBUyxDQUFDO0FBQUNLLE9BQUMsRUFBRVQsV0FBVyxDQUFDTSxDQUFaLEdBQWdCLENBQXBCO0FBQXVCSSxPQUFDLEVBQUVWLFdBQVcsQ0FBQ08sQ0FBWixHQUFnQjtBQUExQyxLQUFELENBQVQ7QUFDRCxHQUhjLEVBR1osQ0FBQ1QsT0FBRCxDQUhZLENBQWY7QUFLQSxzQkFDRTtBQUFLLE9BQUcsRUFBRU4sT0FBVjtBQUFtQixhQUFTLEVBQUVOLEVBQUUsQ0FBQyxNQUFELENBQWhDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxVQUFELENBQWxCO0FBQUEsOEJBR0U7QUFBSyxpQkFBUyxFQUFFQSxFQUFFLENBQUMsU0FBRCxDQUFsQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUEsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUVBLEVBQUUsQ0FBQyxLQUFELENBRGY7QUFFRSxlQUFHLEVBQUVTLE9BRlA7QUFHRSxpQkFBSyxFQUFFO0FBQ0xnQixtQkFBSyxZQUFLYixPQUFPLENBQUNRLENBQWIsT0FEQTtBQUVMTSxvQkFBTSxZQUFLZCxPQUFPLENBQUNTLENBQWI7QUFGRDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBaUJFO0FBQUssaUJBQVMsRUFBRXJCLEVBQUUsQ0FBQyxXQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUFvQkUscUVBQUMsZ0RBQUQ7QUFDRSxlQUFPLEVBQUVNLE9BRFg7QUFFRSxlQUFPLEVBQUVHLE9BRlg7QUFHRSxlQUFPLEVBQUVHLE9BSFg7QUFJRSxjQUFNLEVBQUVLLE1BSlY7QUFLRSxpQkFBUyxFQUFFQyxTQUxiO0FBTUUsbUJBQVcsRUFBRUosV0FOZjtBQU9FLHNCQUFjLEVBQUVDO0FBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBckREOztHQUFNWCxTOztLQUFBQSxTO0FBdURTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuNzQ3NGEyNzY5M2RlMzljMGUzNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENyb3BCb3ggZnJvbSAnLi9Dcm9wQm94JztcclxuaW1wb3J0IHsgU2l6ZSwgUG9pbnQsIE9SSUdJTl9QT0lOVCwgT1JJR0lOX1NJWkUgfSBmcm9tICcuL2RhdGEnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlQ3JvcFByb3BzIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKHt1cmx9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdQYXRoLCBzZXRJbWdQYXRoXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbWdQYXRoKHVybCk7XHJcbiAgICBjb25zdCBpbWdTaXplID0geyB3OiA0MTIsIGg6IDQxMiB9O1xyXG4gICAgc2V0SW1nU2l6ZShpbWdTaXplKTtcclxuICB9LCBbaW1nUGF0aF0pO1xyXG5cclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q3JvcEJveFNpemUoe3c6IGltZ1NpemUudyAvIDIsIGg6IGltZ1NpemUuaCAvIDJ9KTtcclxuICAgIHNldE9mZnNldCh7eDogY3JvcEJveFNpemUudyAvIDIsIHk6IGNyb3BCb3hTaXplLmggLyAyfSk7XHJcbiAgfSwgW2ltZ1NpemVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXt3cmFwUmVmfSBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2Nyb3BBcmVhJyl9PlxyXG5cclxuICAgICAgICB7Lyog7J2066+47KeAIOyYgeyXrSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0FyZWEnKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0JveCcpfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17aW1nUGF0aH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogZGltbWVkIOyYgeyXrSDrsJXsiqQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdkaW1tZWRCb3gnKX0gLz5cclxuXHJcbiAgICAgICAgey8qIGNyb3Ag7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIGltZ1BhdGg9e2ltZ1BhdGh9XHJcbiAgICAgICAgICBpbWdTaXplPXtpbWdTaXplfVxyXG4gICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIGNyb3BCb3hTaXplPXtjcm9wQm94U2l6ZX1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9