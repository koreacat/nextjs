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
    var a = document.createElement('a');
    a.href = url;
    a.download = '';
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
            lineNumber: 81,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiaW1nRWwiLCJJbWFnZSIsIm9ubG9hZCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJ4IiwieSIsImRvd25sb2FkIiwidXJsIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJjbGljayIsInJlbW92ZSIsIndpbmRvdyIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImhhbmRsZURvd25sb2FkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInRvRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQzdDLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7O0FBRDZDLGtCQUVmQyxzREFBUSxDQUFPQyxpREFBUCxDQUZPO0FBQUEsTUFFdENDLE9BRnNDO0FBQUEsTUFFN0JDLFVBRjZCOztBQUFBLG1CQUdQSCxzREFBUSxDQUFPQyxpREFBUCxDQUhEO0FBQUEsTUFHdENHLFdB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NDE2MDI4ODgzZTNkOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2l6ZSwgUG9pbnQsIE9SSUdJTl9QT0lOVCwgT1JJR0lOX1NJWkUgfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IERpbW1lZEJveCBmcm9tICcuL0RpbW1lZEJveCc7XHJcbmltcG9ydCBDcm9wQm94IGZyb20gJy4vQ3JvcEJveCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VDcm9wUHJvcHMge1xyXG4gIHNyYzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoeyBzcmMgfTogSW1hZ2VDcm9wUHJvcHMpID0+IHtcclxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0sIFtzcmNdKTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdFbC5zcmMgPSBzcmM7XHJcbiAgICBpbWdFbC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NpemUoeyB3OiBpbWdFbC53aWR0aCwgaDogaW1nRWwuaGVpZ2h0IH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGltZ0VsLndpZHRoIC8gMiwgaDogaW1nRWwuaGVpZ2h0IC8gMiB9KTtcclxuICAgICAgc2V0T2Zmc2V0KHsgeDogaW1nRWwud2lkdGggLyA0LCB5OiBpbWdFbC5oZWlnaHQgLyA0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZG93bmxvYWQgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIGEuZG93bmxvYWQgPSAnJztcclxuICAgIGEuY2xpY2soKTtcclxuICAgIGEucmVtb3ZlKCk7XHJcbiAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuICAgIFxyXG4gICAgY2FudmFzLndpZHRoID0gaW1nU2l6ZS53O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltZ1NpemUuaDtcclxuICAgIGltZ0VsLnNyYyA9IHNyYztcclxuICAgIGltZ0VsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWdFbCxcclxuICAgICAgICBvZmZzZXQueCxcclxuICAgICAgICBvZmZzZXQueSxcclxuICAgICAgICBjcm9wQm94U2l6ZS53LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLmgsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGltZ1NpemUudyxcclxuICAgICAgICBpbWdTaXplLmhcclxuICAgICAgKTtcclxuICAgICAgZG93bmxvYWQoY2FudmFzLnRvRGF0YVVSTCgpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17d3JhcFJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8RGltbWVkQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICBpbWdTaXplPXtpbWdTaXplfVxyXG4gICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIGNyb3BCb3hTaXplPXtjcm9wQm94U2l6ZX1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+ZG93bmxvYWQ8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9