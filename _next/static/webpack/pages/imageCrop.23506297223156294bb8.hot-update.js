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

  var src = _ref.src,
      name = _ref.name;
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

    imgEl.onload = function () {
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
    };
  };

  var download = function download(url) {
    var fileName = src.replace(/^.*[\\\/]/, '');
    var a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  var handleDownload = function handleDownload() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgEl = new Image();
    canvas.width = imgSize.w;
    canvas.height = imgSize.h;
    imgEl.src = src;

    imgEl.onload = function () {
      ctx.drawImage(imgEl, offset.x, offset.y, cropBoxSize.w, cropBoxSize.h, 0, 0, imgSize.w, imgSize.h);
      download(canvas.toDataURL());
    };
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
            lineNumber: 83,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
        lineNumber: 101,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwibmFtZSIsIndyYXBSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk9SSUdJTl9TSVpFIiwiaW1nU2l6ZSIsInNldEltZ1NpemUiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwiT1JJR0lOX1BPSU5UIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNlRWZmZWN0IiwiaW5pdCIsImltZ0VsIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwieCIsInkiLCJkb3dubG9hZCIsInVybCIsImZpbGVOYW1lIiwicmVwbGFjZSIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY2xpY2siLCJyZW1vdmUiLCJ3aW5kb3ciLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLEdBQWdDLFFBQWhDQSxHQUFnQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFEbUQsa0JBRXJCQyxzREFBUSxDQUFPQyxpREFBUCxDQUZhO0FBQUEsTUFFNUNDLE9BRjRDO0FBQUEsTUFF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QUFBLGFBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBckdEOztHQUFNdEMsUzs7S0FBQUEsUztBQXVHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjIzNTA2Mjk3MjIzMTU2Mjk0YmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNpemUsIFBvaW50LCBPUklHSU5fUE9JTlQsIE9SSUdJTl9TSVpFIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCBEaW1tZWRCb3ggZnJvbSAnLi9EaW1tZWRCb3gnO1xyXG5pbXBvcnQgQ3JvcEJveCBmcm9tICcuL0Nyb3BCb3gnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlQ3JvcFByb3BzIHtcclxuICBzcmM6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7IHNyYywgbmFtZSB9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSwgW3NyY10pO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0VsLnNyYyA9IHNyYztcclxuICAgIGltZ0VsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgc2V0SW1nU2l6ZSh7IHc6IGltZ0VsLndpZHRoLCBoOiBpbWdFbC5oZWlnaHQgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogaW1nRWwud2lkdGggLyAyLCBoOiBpbWdFbC5oZWlnaHQgLyAyIH0pO1xyXG4gICAgICBzZXRPZmZzZXQoeyB4OiBpbWdFbC53aWR0aCAvIDQsIHk6IGltZ0VsLmhlaWdodCAvIDQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkb3dubG9hZCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSBzcmMucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgYS5ocmVmID0gdXJsO1xyXG4gICAgYS5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgYS5jbGljaygpO1xyXG4gICAgYS5yZW1vdmUoKTtcclxuICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGltZ1NpemUudztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdTaXplLmg7XHJcbiAgICBpbWdFbC5zcmMgPSBzcmM7XHJcblxyXG4gICAgaW1nRWwub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltZ0VsLFxyXG4gICAgICAgIG9mZnNldC54LFxyXG4gICAgICAgIG9mZnNldC55LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLncsXHJcbiAgICAgICAgY3JvcEJveFNpemUuaCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgaW1nU2l6ZS53LFxyXG4gICAgICAgIGltZ1NpemUuaFxyXG4gICAgICApO1xyXG4gICAgICBkb3dubG9hZChjYW52YXMudG9EYXRhVVJMKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmICghc3JjKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXt3cmFwUmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2N4KCd3cmFwJyl9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2Nyb3BBcmVhJyl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPERpbW1lZEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgd3JhcFJlZj17d3JhcFJlZn1cclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YSBjbGFzc05hbWU9e2N4KCdidG4nKX0gb25DbGljaz17aGFuZGxlRG93bmxvYWR9PmRvd25sb2FkPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3A7Il0sInNvdXJjZVJvb3QiOiIifQ==