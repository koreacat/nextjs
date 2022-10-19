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

  var getOffsetTop = function getOffsetTop() {
    var _cropAreaRef$current;

    return (wrapRef.current ? wrapRef.current.offsetTop : 0) + (cropAreaRef.current ? (_cropAreaRef$current = cropAreaRef.current) === null || _cropAreaRef$current === void 0 ? void 0 : _cropAreaRef$current.offsetTop : 0);
  };

  var getOffsetLeft = function getOffsetLeft() {
    var _wrapRef$current;

    return (wrapRef.current ? (_wrapRef$current = wrapRef.current) === null || _wrapRef$current === void 0 ? void 0 : _wrapRef$current.offsetLeft : 0) + (cropAreaRef.current ? cropAreaRef.current.offsetLeft : 0);
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
          imgSize: imgSize,
          setOffset: setOffset,
          setCropBoxSize: setCropBoxSize,
          offsetTop: getOffsetTop(),
          offsetLeft: getOffsetLeft()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CropBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          imgSrc: imgSrc,
          imgSize: imgSize,
          offset: offset,
          setOffset: setOffset,
          cropBoxSize: cropBoxSize,
          setCropBoxSize: setCropBoxSize,
          offsetTop: getOffsetTop(),
          offsetLeft: getOffsetLeft()
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
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwiaW1nU3JjIiwiaW1nTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwid3JhcFJlZiIsInVzZVJlZiIsImNyb3BBcmVhUmVmIiwidXNlU3RhdGUiLCJPUklHSU5fU0laRSIsImltZ1NpemUiLCJzZXRJbWdTaXplIiwiY3JvcEJveFNpemUiLCJzZXRDcm9wQm94U2l6ZSIsIk9SSUdJTl9QT0lOVCIsIm9mZnNldCIsInNldE9mZnNldCIsIndpZHRoUmF0aW8iLCJzZXRXaWR0aFJhdGlvIiwiaGVpZ2h0UmF0aW8iLCJzZXRIZWlnaHRSYXRpbyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRXaWR0aCIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImdldEhlaWdodCIsImdldE9mZnNldFRvcCIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJnZXRPZmZzZXRMZWZ0Iiwib2Zmc2V0TGVmdCIsImltZ0VsIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJ3IiwiaCIsIngiLCJ5IiwiZG93bmxvYWQiLCJ1cmwiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImNsaWNrIiwicmVtb3ZlIiwid2luZG93IiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiaGFuZGxlRG93bmxvYWQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwib2MiLCJvY3R4IiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBU0EsSUFBTUMsU0FB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RSxxQkFBSyxZQUFLTyxPQUFPLENBQUM0QixDQUFiLE9BREE7QUFFTGxDLHNCQUFNLFlBQUtNLE9BQU8sQ0FBQzZCLENBQWI7QUFGRDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQXFCRSxxRUFBQyxrREFBRDtBQUNFLGlCQUFPLEVBQUU3QixPQURYO0FBRUUsbUJBQVMsRUFBRU0sU0FGYjtBQUdFLHdCQUFjLEVBQUVILGNBSGxCO0FBSUUsbUJBQVMsRUFBRWdCLFlBQVksRUFKekI7QUFLRSxvQkFBVSxFQUFFRyxhQUFhO0FBTDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGLGVBNkJFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQU0sRUFBRS9CLE1BRFY7QUFFRSxpQkFBTyxFQUFFUyxPQUZYO0FBR0UsZ0JBQU0sRUFBRUssTUFIVjtBQUlFLG1CQUFTLEVBQUVDLFNBSmI7QUFLRSxxQkFBVyxFQUFFSixXQUxmO0FBTUUsd0JBQWMsRUFBRUMsY0FObEI7QUFPRSxtQkFBUyxFQUFFZ0IsWUFBWSxFQVB6QjtBQVFFLG9CQUFVLEVBQUVHLGFBQWE7QUFSM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBa0RFO0FBQUcsZUFBUyxFQUFFcEMsRUFBRSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUIsYUFBTyxFQUFFeUQsY0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsREY7QUFBQSxrQkFERjtBQXNERCxDQXpKRDs7R0FBTXJELFM7O0tBQUFBLFM7QUEySlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC4zYmNhOWM0N2RkOTA5ZTBhZTg5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTaXplLCBQb2ludCwgT1JJR0lOX1BPSU5ULCBPUklHSU5fU0laRX0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCBEaW1tZWRCb3ggZnJvbSAnLi9EaW1tZWRCb3gnO1xyXG5pbXBvcnQgQ3JvcEJveCBmcm9tICcuL0Nyb3BCb3gnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgaW1nU3JjOiBzdHJpbmc7XHJcbiAgaW1nTmFtZTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7aW1nU3JjLCBpbWdOYW1lLCB3aWR0aCwgaGVpZ2h0fTogSW1hZ2VDcm9wUHJvcHMpID0+IHtcclxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBjcm9wQXJlYVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2ltZ1NpemUsIHNldEltZ1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IFtjcm9wQm94U2l6ZSwgc2V0Q3JvcEJveFNpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuICBjb25zdCBbd2lkdGhSYXRpbywgc2V0V2lkdGhSYXRpb10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xyXG4gIGNvbnN0IFtoZWlnaHRSYXRpbywgc2V0SGVpZ2h0UmF0aW9dID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXQoKTtcclxuICB9LCBbaW1nU3JjXSk7XHJcblxyXG5cclxuICBjb25zdCBnZXRXaWR0aCA9IChpbWdXaWR0aDogbnVtYmVyLCBpbWdIZWlnaHQ6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGltZ1dpZHRoID4gd2lkdGggJiYgaW1nSGVpZ2h0ID4gaGVpZ2h0KSB7XHJcbiAgICAgIGlmIChoZWlnaHQgPiB3aWR0aCkgcmV0dXJuIHdpZHRoO1xyXG4gICAgICByZXR1cm4gaW1nV2lkdGggKiAoaGVpZ2h0IC8gaW1nSGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmIChpbWdIZWlnaHQgPiBoZWlnaHQpIHJldHVybiBNYXRoLm1pbihpbWdXaWR0aCwgd2lkdGgpICogKGhlaWdodCAvIGltZ0hlaWdodCk7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oaW1nV2lkdGgsIHdpZHRoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEhlaWdodCA9IChpbWdXaWR0aDogbnVtYmVyLCBpbWdIZWlnaHQ6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGltZ1dpZHRoID4gd2lkdGggJiYgaW1nSGVpZ2h0ID4gaGVpZ2h0KSB7XHJcbiAgICAgIGlmIChoZWlnaHQgPCB3aWR0aCkgcmV0dXJuIGhlaWdodDtcclxuICAgICAgcmV0dXJuIGltZ0hlaWdodCAqICh3aWR0aCAvIGltZ1dpZHRoKTtcclxuICAgIH1cclxuICAgIGlmIChpbWdXaWR0aCA+IHdpZHRoKSByZXR1cm4gTWF0aC5taW4oaW1nSGVpZ2h0LCBoZWlnaHQpICogKHdpZHRoIC8gaW1nV2lkdGgpO1xyXG4gICAgcmV0dXJuIE1hdGgubWluKGltZ0hlaWdodCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE9mZnNldFRvcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAod3JhcFJlZi5jdXJyZW50ID8gd3JhcFJlZi5jdXJyZW50Lm9mZnNldFRvcCA6IDApXHJcbiAgICAgICsgKGNyb3BBcmVhUmVmLmN1cnJlbnQgPyBjcm9wQXJlYVJlZi5jdXJyZW50Py5vZmZzZXRUb3AgOiAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE9mZnNldExlZnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKHdyYXBSZWYuY3VycmVudCA/IHdyYXBSZWYuY3VycmVudD8ub2Zmc2V0TGVmdCA6IDApXHJcbiAgICAgICsgKGNyb3BBcmVhUmVmLmN1cnJlbnQgPyBjcm9wQXJlYVJlZi5jdXJyZW50Lm9mZnNldExlZnQgOiAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nRWwuc3JjID0gaW1nU3JjO1xyXG4gICAgaW1nRWwub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWdXaWR0aCA9IGdldFdpZHRoKGltZ0VsLndpZHRoLCBpbWdFbC5oZWlnaHQpO1xyXG4gICAgICBjb25zdCBpbWdIZWlnaHQgPSBnZXRIZWlnaHQoaW1nRWwud2lkdGgsIGltZ0VsLmhlaWdodCk7XHJcblxyXG4gICAgICBzZXRXaWR0aFJhdGlvKGltZ1dpZHRoIC8gaW1nRWwud2lkdGgpO1xyXG4gICAgICBzZXRIZWlnaHRSYXRpbyhpbWdIZWlnaHQgLyBpbWdFbC5oZWlnaHQpO1xyXG4gICAgICBzZXRJbWdTaXplKHt3OiBpbWdXaWR0aCwgaDogaW1nSGVpZ2h0fSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHt3OiBpbWdXaWR0aCAvIDIsIGg6IGltZ0hlaWdodCAvIDJ9KTtcclxuICAgICAgc2V0T2Zmc2V0KHt4OiBpbWdXaWR0aCAvIDQsIHk6IGltZ0hlaWdodCAvIDR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRvd25sb2FkID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICBhLmRvd25sb2FkID0gaW1nTmFtZTtcclxuICAgIGEuY2xpY2soKTtcclxuICAgIGEucmVtb3ZlKCk7XHJcbiAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wQm94U2l6ZS53O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3BCb3hTaXplLmg7XHJcbiAgICBpbWdFbC5zcmMgPSBpbWdTcmM7XHJcblxyXG4gICAgaW1nRWwub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBjb25zdCBvY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgb2Mud2lkdGggPSBpbWdFbC53aWR0aCAqIHdpZHRoUmF0aW87XHJcbiAgICAgIG9jLmhlaWdodCA9IGltZ0VsLmhlaWdodCAqIGhlaWdodFJhdGlvO1xyXG4gICAgICBvY3R4Py5kcmF3SW1hZ2UoaW1nRWwsIDAsIDAsIG9jLndpZHRoLCBvYy5oZWlnaHQpO1xyXG5cclxuICAgICAgY3R4Py5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2MsXHJcbiAgICAgICAgb2Zmc2V0LngsXHJcbiAgICAgICAgb2Zmc2V0LnksXHJcbiAgICAgICAgY3JvcEJveFNpemUudyxcclxuICAgICAgICBjcm9wQm94U2l6ZS5oLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wQm94U2l6ZS53LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLmgsXHJcbiAgICAgICk7XHJcbiAgICAgIGRvd25sb2FkKGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFpbWdTcmMpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiByZWY9e3dyYXBSZWZ9IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX1cclxuICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcclxuICAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtjcm9wQXJlYVJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2Nyb3BBcmVhJyl9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0FyZWEnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2ltZycpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtpbWdTaXplLmh9cHhgLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxEaW1tZWRCb3hcclxuICAgICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAgICAgb2Zmc2V0VG9wPXtnZXRPZmZzZXRUb3AoKX1cclxuICAgICAgICAgICAgb2Zmc2V0TGVmdD17Z2V0T2Zmc2V0TGVmdCgpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q3JvcEJveFxyXG4gICAgICAgICAgICBpbWdTcmM9e2ltZ1NyY31cclxuICAgICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgICBjcm9wQm94U2l6ZT17Y3JvcEJveFNpemV9XHJcbiAgICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAgICAgb2Zmc2V0VG9wPXtnZXRPZmZzZXRUb3AoKX1cclxuICAgICAgICAgICAgb2Zmc2V0TGVmdD17Z2V0T2Zmc2V0TGVmdCgpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnYnRuJyl9IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5kb3dubG9hZDwvYT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=