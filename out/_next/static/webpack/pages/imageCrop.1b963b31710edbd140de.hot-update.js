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



var _jsxFileName = "C:\\Users\\jgm0531\\myProject\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_4___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var ImageCrop = function ImageCrop(_ref) {
  _s();

  var imgSrc = _ref.imgSrc,
      imgName = _ref.imgName,
      width = _ref.width,
      height = _ref.height;
  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var cropAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      imgSize = _useState[0],
      setImgSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_SIZE"]),
      cropBoxSize = _useState2[0],
      setCropBoxSize = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_data__WEBPACK_IMPORTED_MODULE_2__["ORIGIN_POINT"]),
      offset = _useState3[0],
      setOffset = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      widthRatio = _useState4[0],
      setWidthRatio = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      heightRatio = _useState5[0],
      setHeightRatio = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, [imgSrc]);

  var getWidth = function getWidth(imgWidth, imgHeight) {
    if (imgWidth > width && imgHeight > height) {
      if (height > width) return width;
      return imgWidth * (height / imgHeight);
    }

    if (imgHeight > height) return Math.min(imgWidth, width) * (height / imgHeight);
    return Math.min(imgWidth, width);
  };

  var getHeight = function getHeight(imgWidth, imgHeight) {
    if (imgWidth > width && imgHeight > height) {
      if (height < width) return height;
      return imgHeight * (width / imgWidth);
    }

    if (imgWidth > width) return Math.min(imgHeight, height) * (width / imgWidth);
    return Math.min(imgHeight, height);
  };

  var init = function init() {
    var imgEl = new Image();
    imgEl.src = imgSrc;

    imgEl.onload = function () {
      var imgWidth = getWidth(imgEl.width, imgEl.height);
      var imgHeight = getHeight(imgEl.width, imgEl.height);
      setWidthRatio(imgWidth / imgEl.width);
      setHeightRatio(imgHeight / imgEl.height);
      setImgSize({
        w: imgWidth,
        h: imgHeight
      });
      setCropBoxSize({
        w: imgWidth / 2,
        h: imgHeight / 2
      });
      setOffset({
        x: imgWidth / 4,
        y: imgHeight / 4
      });
    };
  };

  var download = function download(url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = imgName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  var handleDownload = function handleDownload() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgEl = new Image();
    canvas.width = cropBoxSize.w;
    canvas.height = cropBoxSize.h;
    imgEl.src = imgSrc;

    imgEl.onload = function () {
      var oc = document.createElement('canvas');
      var octx = oc.getContext('2d');
      oc.width = imgEl.width * widthRatio;
      oc.height = imgEl.height * heightRatio;
      octx === null || octx === void 0 ? void 0 : octx.drawImage(imgEl, 0, 0, oc.width, oc.height);
      ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(oc, offset.x, offset.y, cropBoxSize.w, cropBoxSize.h, 0, 0, cropBoxSize.w, cropBoxSize.h);
      download(canvas.toDataURL());
    };
  };

  var getOffsetTop = function getOffsetTop() {
    var _cropAreaRef$current;

    return (wrapRef.current ? wrapRef.current.offsetTop : 0) + (cropAreaRef.current ? (_cropAreaRef$current = cropAreaRef.current) === null || _cropAreaRef$current === void 0 ? void 0 : _cropAreaRef$current.offsetTop : 0);
  };

  var getOffsetLeft = function getOffsetLeft() {
    var _wrapRef$current;

    return (wrapRef.current ? (_wrapRef$current = wrapRef.current) === null || _wrapRef$current === void 0 ? void 0 : _wrapRef$current.offsetLeft : 0) + (cropAreaRef.current ? cropAreaRef.current.offsetLeft : 0);
  };

  if (!imgSrc) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: wrapRef,
      className: cx('wrap'),
      style: {
        width: "".concat(width, "px"),
        height: "".concat(height, "px")
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: cropAreaRef,
        className: cx('cropArea'),
        style: {
          width: "".concat(imgSize.w, "px"),
          height: "".concat(imgSize.h, "px")
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('imgArea'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('imgBox'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: cx('img'),
              src: imgSrc,
              style: {
                width: "".concat(imgSize.w, "px"),
                height: "".concat(imgSize.h, "px")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          offsetTop: getOffsetTop(),
          offsetLeft: getOffsetLeft(),
          imgSize: imgSize,
          setOffset: setOffset,
          setCropBoxSize: setCropBoxSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          wrapRef: wrapRef,
          imgSrc: imgSrc,
          imgSize: imgSize,
          offset: offset,
          setOffset: setOffset,
          cropBoxSize: cropBoxSize,
          setCropBoxSize: setCropBoxSize
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ImageCrop, "78yR/9LCOLUKOqwM8v6Hw3rMbcg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwiaW1nU3JjIiwiaW1nTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwid3JhcFJlZiIsInVzZVJlZiIsImNyb3BBcmVhUmVmIiwidXNlU3RhdGUiLCJPUklHSU5fU0laRSIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsIk9SSUdJTl9QT0lOVCIsIm9mZnNldCIsInNldE9mZnNldCIsIndpZHRoUmF0aW8iLCJzZXRXaWR0aFJhdGlvIiwiaGVpZ2h0UmF0aW8iLCJzZXRIZWlnaHRSYXRpbyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRXaWR0aCIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImdldEhlaWdodCIsImltZ0VsIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJ3IiwiaCIsIngiLCJ5IiwiZG93bmxvYWQiLCJ1cmwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImNsaWNrIiwicmVtb3ZlIiwid2luZG93IiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRG93bmxvYWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwib2MiLCJvY3R4IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIiwiZ2V0T2Zmc2V0VG9wIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImdldE9mZnNldExlZnQiLCJvZmZzZXRMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBU0EsSUFBTUMsU0FB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QUFLLFlBQUtPLE9BQU8sQ0FBQ3VCLENBQWIsT0FEQTtBQUVMN0Isc0JBQU0sWUFBS00sT0FBTyxDQUFDd0IsQ0FBYjtBQUZEO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBcUJFLHFFQUFDLGtEQUFEO0FBQ0UsbUJBQVMsRUFBRXNCLFlBQVksRUFEekI7QUFFRSxvQkFBVSxFQUFFRyxhQUFhLEVBRjNCO0FBR0UsaUJBQU8sRUFBRWpELE9BSFg7QUFJRSxtQkFBUyxFQUFFTSxTQUpiO0FBS0Usd0JBQWMsRUFBRUg7QUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkYsZUE2QkUscUVBQUMsZ0RBQUQ7QUFDRSxpQkFBTyxFQUFFUixPQURYO0FBRUUsZ0JBQU0sRUFBRUosTUFGVjtBQUdFLGlCQUFPLEVBQUVTLE9BSFg7QUFJRSxnQkFBTSxFQUFFSyxNQUpWO0FBS0UsbUJBQVMsRUFBRUMsU0FMYjtBQU1FLHFCQUFXLEVBQUVKLFdBTmY7QUFPRSx3QkFBYyxFQUFFQztBQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFpREU7QUFBRyxlQUFTLEVBQUVqQixFQUFFLENBQUMsS0FBRCxDQUFoQjtBQUF5QixhQUFPLEVBQUVvRCxjQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpERjtBQUFBLGtCQURGO0FBcURELENBeEpEOztHQUFNaEQsUzs7S0FBQUEsUztBQTBKU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjFiOTYzYjMxNzEwZWRiZDE0MGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NpemUsIFBvaW50LCBPUklHSU5fUE9JTlQsIE9SSUdJTl9TSVpFfSBmcm9tICcuL2RhdGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IERpbW1lZEJveCBmcm9tICcuL0RpbW1lZEJveCc7XHJcbmltcG9ydCBDcm9wQm94IGZyb20gJy4vQ3JvcEJveCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlQ3JvcFByb3BzIHtcclxuICBpbWdTcmM6IHN0cmluZztcclxuICBpbWdOYW1lOiBzdHJpbmc7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKHtpbWdTcmMsIGltZ05hbWUsIHdpZHRoLCBoZWlnaHR9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGNyb3BBcmVhUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG4gIGNvbnN0IFt3aWR0aFJhdGlvLCBzZXRXaWR0aFJhdGlvXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XHJcbiAgY29uc3QgW2hlaWdodFJhdGlvLCBzZXRIZWlnaHRSYXRpb10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0sIFtpbWdTcmNdKTtcclxuXHJcblxyXG4gIGNvbnN0IGdldFdpZHRoID0gKGltZ1dpZHRoOiBudW1iZXIsIGltZ0hlaWdodDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaW1nV2lkdGggPiB3aWR0aCAmJiBpbWdIZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgICAgaWYgKGhlaWdodCA+IHdpZHRoKSByZXR1cm4gd2lkdGg7XHJcbiAgICAgIHJldHVybiBpbWdXaWR0aCAqIChoZWlnaHQgLyBpbWdIZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGltZ0hlaWdodCA+IGhlaWdodCkgcmV0dXJuIE1hdGgubWluKGltZ1dpZHRoLCB3aWR0aCkgKiAoaGVpZ2h0IC8gaW1nSGVpZ2h0KTtcclxuICAgIHJldHVybiBNYXRoLm1pbihpbWdXaWR0aCwgd2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0SGVpZ2h0ID0gKGltZ1dpZHRoOiBudW1iZXIsIGltZ0hlaWdodDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaW1nV2lkdGggPiB3aWR0aCAmJiBpbWdIZWlnaHQgPiBoZWlnaHQpIHtcclxuICAgICAgaWYgKGhlaWdodCA8IHdpZHRoKSByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICByZXR1cm4gaW1nSGVpZ2h0ICogKHdpZHRoIC8gaW1nV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGltZ1dpZHRoID4gd2lkdGgpIHJldHVybiBNYXRoLm1pbihpbWdIZWlnaHQsIGhlaWdodCkgKiAod2lkdGggLyBpbWdXaWR0aCk7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oaW1nSGVpZ2h0LCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdFbC5zcmMgPSBpbWdTcmM7XHJcbiAgICBpbWdFbC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGltZ1dpZHRoID0gZ2V0V2lkdGgoaW1nRWwud2lkdGgsIGltZ0VsLmhlaWdodCk7XHJcbiAgICAgIGNvbnN0IGltZ0hlaWdodCA9IGdldEhlaWdodChpbWdFbC53aWR0aCwgaW1nRWwuaGVpZ2h0KTtcclxuXHJcbiAgICAgIHNldFdpZHRoUmF0aW8oaW1nV2lkdGggLyBpbWdFbC53aWR0aCk7XHJcbiAgICAgIHNldEhlaWdodFJhdGlvKGltZ0hlaWdodCAvIGltZ0VsLmhlaWdodCk7XHJcbiAgICAgIHNldEltZ1NpemUoe3c6IGltZ1dpZHRoLCBoOiBpbWdIZWlnaHR9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoe3c6IGltZ1dpZHRoIC8gMiwgaDogaW1nSGVpZ2h0IC8gMn0pO1xyXG4gICAgICBzZXRPZmZzZXQoe3g6IGltZ1dpZHRoIC8gNCwgeTogaW1nSGVpZ2h0IC8gNH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZG93bmxvYWQgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIGEuZG93bmxvYWQgPSBpbWdOYW1lO1xyXG4gICAgYS5jbGljaygpO1xyXG4gICAgYS5yZW1vdmUoKTtcclxuICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3BCb3hTaXplLnc7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcEJveFNpemUuaDtcclxuICAgIGltZ0VsLnNyYyA9IGltZ1NyYztcclxuXHJcbiAgICBpbWdFbC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNvbnN0IG9jdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBvYy53aWR0aCA9IGltZ0VsLndpZHRoICogd2lkdGhSYXRpbztcclxuICAgICAgb2MuaGVpZ2h0ID0gaW1nRWwuaGVpZ2h0ICogaGVpZ2h0UmF0aW87XHJcbiAgICAgIG9jdHg/LmRyYXdJbWFnZShpbWdFbCwgMCwgMCwgb2Mud2lkdGgsIG9jLmhlaWdodCk7XHJcblxyXG4gICAgICBjdHg/LmRyYXdJbWFnZShcclxuICAgICAgICBvYyxcclxuICAgICAgICBvZmZzZXQueCxcclxuICAgICAgICBvZmZzZXQueSxcclxuICAgICAgICBjcm9wQm94U2l6ZS53LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLmgsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNyb3BCb3hTaXplLncsXHJcbiAgICAgICAgY3JvcEJveFNpemUuaCxcclxuICAgICAgKTtcclxuICAgICAgZG93bmxvYWQoY2FudmFzLnRvRGF0YVVSTCgpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRPZmZzZXRUb3AgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKHdyYXBSZWYuY3VycmVudCA/IHdyYXBSZWYuY3VycmVudC5vZmZzZXRUb3AgOiAwKVxyXG4gICAgICArIChjcm9wQXJlYVJlZi5jdXJyZW50ID8gY3JvcEFyZWFSZWYuY3VycmVudD8ub2Zmc2V0VG9wIDogMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRPZmZzZXRMZWZ0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICh3cmFwUmVmLmN1cnJlbnQgPyB3cmFwUmVmLmN1cnJlbnQ/Lm9mZnNldExlZnQgOiAwKVxyXG4gICAgICArIChjcm9wQXJlYVJlZi5jdXJyZW50ID8gY3JvcEFyZWFSZWYuY3VycmVudC5vZmZzZXRMZWZ0IDogMCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWltZ1NyYykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHJlZj17d3JhcFJlZn0gY2xhc3NOYW1lPXtjeCgnd3JhcCcpfVxyXG4gICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e2Nyb3BBcmVhUmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltZ1NyY31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPERpbW1lZEJveFxyXG4gICAgICAgICAgICBvZmZzZXRUb3A9e2dldE9mZnNldFRvcCgpfVxyXG4gICAgICAgICAgICBvZmZzZXRMZWZ0PXtnZXRPZmZzZXRMZWZ0KCl9XHJcbiAgICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICAgIHdyYXBSZWY9e3dyYXBSZWZ9XHJcbiAgICAgICAgICAgIGltZ1NyYz17aW1nU3JjfVxyXG4gICAgICAgICAgICBpbWdTaXplPXtpbWdTaXplfVxyXG4gICAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICAgIGNyb3BCb3hTaXplPXtjcm9wQm94U2l6ZX1cclxuICAgICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnYnRuJyl9IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5kb3dubG9hZDwvYT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=