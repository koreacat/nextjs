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

  var imgSrc = _ref.imgSrc,
      imgName = _ref.imgName;
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
  }, [imgSrc]);

  var init = function init() {
    var imgEl = new Image();
    imgEl.src = imgSrc;

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
    a.download = imgName;
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
    imgEl.src = imgSrc;

    imgEl.onload = function () {
      console.log(offset, cropBoxSize);
      ctx.drawImage(imgEl, offset.x, offset.y, cropBoxSize.w, cropBoxSize.h, 0, 0, cropBoxSize.w, cropBoxSize.h);
      download(canvas.toDataURL());
    };
  };

  if (!imgSrc) return null;
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
            src: imgSrc,
            style: {
              width: "".concat(imgSize.w, "px"),
              height: "".concat(imgSize.h, "px")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
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
        lineNumber: 102,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwiaW1nU3JjIiwiaW1nTmFtZSIsIndyYXBSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk9SSUdJTl9TSVpFIiwiaW1nU2l6ZSIsInNldEltZ1NpemUiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwiT1JJR0lOX1BPSU5UIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNlRWZmZWN0IiwiaW5pdCIsImltZ0VsIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwieCIsInkiLCJkb3dubG9hZCIsInVybCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY2xpY2siLCJyZW1vdmUiLCJ3aW5kb3ciLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJoYW5kbGVEb3dubG9hZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZHJhd0ltYWdlIiwidG9EYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QztBQUFBOztBQUFBLE1BQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSxNQUE5QkMsT0FBOEIsUUFBOUJBLE9BQThCO0FBQ3pELE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7O0FBRHlELGtCQUUzQkMsc0RBQVEsQ0FBT0MsaURBQVAsQ0FGbUI7QUFBQSxNQUVsREMsT0FGa0Q7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QSxhQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQXRHRDs7R0FBTXJDLFM7O0tBQUFBLFM7QUF3R1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC5mOWRiYjQ3Y2YzYzkyZGQ5NDEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTaXplLCBQb2ludCwgT1JJR0lOX1BPSU5ULCBPUklHSU5fU0laRSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgRGltbWVkQm94IGZyb20gJy4vRGltbWVkQm94JztcclxuaW1wb3J0IENyb3BCb3ggZnJvbSAnLi9Dcm9wQm94JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgaW1nU3JjOiBzdHJpbmc7XHJcbiAgaW1nTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoeyBpbWdTcmMsIGltZ05hbWUgfTogSW1hZ2VDcm9wUHJvcHMpID0+IHtcclxuICBjb25zdCB3cmFwUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbaW1nU2l6ZSwgc2V0SW1nU2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPihPUklHSU5fU0laRSk7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlPFBvaW50PihPUklHSU5fUE9JTlQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0sIFtpbWdTcmNdKTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdFbC5zcmMgPSBpbWdTcmM7XHJcbiAgICBpbWdFbC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NpemUoeyB3OiBpbWdFbC53aWR0aCwgaDogaW1nRWwuaGVpZ2h0IH0pO1xyXG4gICAgICBzZXRDcm9wQm94U2l6ZSh7IHc6IGltZ0VsLndpZHRoIC8gMiwgaDogaW1nRWwuaGVpZ2h0IC8gMiB9KTtcclxuICAgICAgc2V0T2Zmc2V0KHsgeDogaW1nRWwud2lkdGggLyA0LCB5OiBpbWdFbC5oZWlnaHQgLyA0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZG93bmxvYWQgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGEuaHJlZiA9IHVybDtcclxuICAgIGEuZG93bmxvYWQgPSBpbWdOYW1lO1xyXG4gICAgYS5jbGljaygpO1xyXG4gICAgYS5yZW1vdmUoKTtcclxuICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjb25zdCBpbWdFbCA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGltZ1NpemUudztcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdTaXplLmg7XHJcbiAgICBpbWdFbC5zcmMgPSBpbWdTcmM7XHJcblxyXG4gICAgaW1nRWwub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhvZmZzZXQsIGNyb3BCb3hTaXplKTtcclxuXHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1nRWwsXHJcbiAgICAgICAgb2Zmc2V0LngsXHJcbiAgICAgICAgb2Zmc2V0LnksXHJcbiAgICAgICAgY3JvcEJveFNpemUudyxcclxuICAgICAgICBjcm9wQm94U2l6ZS5oLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBjcm9wQm94U2l6ZS53LFxyXG4gICAgICAgIGNyb3BCb3hTaXplLmgsXHJcbiAgICAgICk7XHJcbiAgICAgIGRvd25sb2FkKGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFpbWdTcmMpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3dyYXBSZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT17Y3goJ3dyYXAnKX1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e2ltZ1NyY31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8RGltbWVkQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nU3JjPXtpbWdTcmN9XHJcbiAgICAgICAgICBpbWdTaXplPXtpbWdTaXplfVxyXG4gICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIGNyb3BCb3hTaXplPXtjcm9wQm94U2l6ZX1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+ZG93bmxvYWQ8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9