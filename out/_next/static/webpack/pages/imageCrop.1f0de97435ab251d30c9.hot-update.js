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
      console.log(imgEl);
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
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiaW1nRWwiLCJJbWFnZSIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwieCIsInkiLCJkb3dubG9hZCIsInVybCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY2xpY2siLCJyZW1vdmUiLCJ3aW5kb3ciLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYOztBQU1BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLEdBQTBCLFFBQTFCQSxHQUEwQjtBQUM3QyxNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQXRCOztBQUQ2QyxrQkFFZkMsc0RBQVEsQ0FBT0MsaURBQVAsQ0FGTztBQUFBLE1BRXRDQyxPQUZzQztBQUFBLE1BRTdCQyxVQUY2Qjs7QUFBQSxtQkFHUEgsc0RBQVEsQ0FBT0MsaURBQVAsQ0FI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QXVHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjFmMGRlOTc0MzVhYjI1MWQzMGM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNpemUsIFBvaW50LCBPUklHSU5fUE9JTlQsIE9SSUdJTl9TSVpFIH0gZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmltcG9ydCBEaW1tZWRCb3ggZnJvbSAnLi9EaW1tZWRCb3gnO1xyXG5pbXBvcnQgQ3JvcEJveCBmcm9tICcuL0Nyb3BCb3gnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlQ3JvcFByb3BzIHtcclxuICBzcmM6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKHsgc3JjIH06IEltYWdlQ3JvcFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgd3JhcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2ltZ1NpemUsIHNldEltZ1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IFtjcm9wQm94U2l6ZSwgc2V0Q3JvcEJveFNpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXQoKTtcclxuICB9LCBbc3JjXSk7XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nRWwuc3JjID0gc3JjO1xyXG4gICAgaW1nRWwub25sb2FkID0gKCkgPT4ge1xyXG5cclxuICAgICAgY29uc29sZS5sb2coaW1nRWwpO1xyXG4gICAgICBzZXRJbWdTaXplKHsgdzogaW1nRWwud2lkdGgsIGg6IGltZ0VsLmhlaWdodCB9KTtcclxuICAgICAgc2V0Q3JvcEJveFNpemUoeyB3OiBpbWdFbC53aWR0aCAvIDIsIGg6IGltZ0VsLmhlaWdodCAvIDIgfSk7XHJcbiAgICAgIHNldE9mZnNldCh7IHg6IGltZ0VsLndpZHRoIC8gNCwgeTogaW1nRWwuaGVpZ2h0IC8gNCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRvd25sb2FkID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBhLmhyZWYgPSB1cmw7XHJcbiAgICBhLmRvd25sb2FkID0gJyc7XHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBhLnJlbW92ZSgpO1xyXG4gICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gaW1nU2l6ZS53O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltZ1NpemUuaDtcclxuICAgIGltZ0VsLnNyYyA9IHNyYztcclxuICAgIGltZ0VsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWdFbCxcclxuICAgICAgICBvZmZzZXQueCxcclxuICAgICAgICBvZmZzZXQueSxcclxuICAgICAgICBjcm9wQm94U2l6ZS53LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLmgsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGltZ1NpemUudyxcclxuICAgICAgICBpbWdTaXplLmhcclxuICAgICAgKTtcclxuICAgICAgZG93bmxvYWQoY2FudmFzLnRvRGF0YVVSTCgpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17d3JhcFJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0FyZWEnKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2ltZ0JveCcpfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goJ2ltZycpfVxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxEaW1tZWRCb3hcclxuICAgICAgICAgIHdyYXBSZWY9e3dyYXBSZWZ9XHJcbiAgICAgICAgICBpbWdTaXplPXtpbWdTaXplfVxyXG4gICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICBzZXRDcm9wQm94U2l6ZT17c2V0Q3JvcEJveFNpemV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENyb3BCb3hcclxuICAgICAgICAgIHdyYXBSZWY9e3dyYXBSZWZ9XHJcbiAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgY3JvcEJveFNpemU9e2Nyb3BCb3hTaXplfVxyXG4gICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnYnRuJyl9IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5kb3dubG9hZDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=