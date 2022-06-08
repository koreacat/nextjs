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

  var handleDownload = function handleDownload() {
    var canvas = document.createElement('canvas');
    canvas.width = imgSize.w;
    canvas.height = imgSize.h;
    var ctx = canvas.getContext('2d');
    var imgEl = new Image();
    imgEl.src = src;

    imgEl.onload = function () {
      ctx.drawImage(imgEl, // 원본 이미지
      offset.x, // 잘려진 이미지 x 좌표
      offset.y, // 잘려진 이미지 y 좌표
      cropBoxSize.w, // 잘려진 이미지 가로 길이
      cropBoxSize.h, // 잘려진 이미지 세로 길이
      0, // 이미지 시작 x 좌표
      0, // 이미지 시작 y 좌표
      imgSize.w, // 이미지 가로 길이
      imgSize.h // 이미지 세로 길이
      );
    };

    return new Promise(function (resolve) {
      console.log(canvas.toDataURL());
      resolve(canvas.toDataURL());
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
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DimmedBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        wrapRef: wrapRef,
        imgSize: imgSize,
        setOffset: setOffset,
        setCropBoxSize: setCropBoxSize
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: cx('btn'),
      onClick: handleDownload,
      children: "download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSW1hZ2VDcm9wIiwic3JjIiwid3JhcFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiT1JJR0lOX1NJWkUiLCJpbWdTaXplIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJPUklHSU5fUE9JTlQiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJ1c2VFZmZlY3QiLCJpbml0IiwiaW1nRWwiLCJJbWFnZSIsIm9ubG9hZCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJ4IiwieSIsImhhbmRsZURvd25sb2FkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29uc29sZSIsImxvZyIsInRvRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNkRBQWhCLENBQVg7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQzdDLE1BQU1DLE9BQU8sR0FBR0Msb0RBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7O0FBRDZDLGtCQUVmQyxzREFBUSxDQUFPQyxpREFBUCxDQUZPO0FBQUEsTUFFdENDLE9BRnNDO0FBQUEsTUFFN0JDLFVBRjZCOztBQUFBLG1CQUdQSCxzREFBUSxDQUFPQyxpREFBUCxDQUhEO0FBQUEsTUFHdENHLFdBSHNDO0FBQUEsTUFHekJDLGNBSHlCOztBQUFBLG1CQUlqQkwsc0RBQVEs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LEVBQUU7QUFDTGtCLG1CQUFLLFlBQUtiLE9BQU8sQ0FBQ1ksQ0FBYixPQURBO0FBRUxHLG9CQUFNLFlBQUtmLE9BQU8sQ0FBQ2MsQ0FBYjtBQUZEO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFlRSxxRUFBQyxrREFBRDtBQUNFLGVBQU8sRUFBRWxCLE9BRFg7QUFFRSxlQUFPLEVBQUVJLE9BRlg7QUFHRSxpQkFBUyxFQUFFTSxTQUhiO0FBSUUsc0JBQWMsRUFBRUg7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLGVBc0JFLHFFQUFDLGdEQUFEO0FBQ0UsZUFBTyxFQUFFUCxPQURYO0FBRUUsV0FBRyxFQUFFRCxHQUZQO0FBR0UsZUFBTyxFQUFFSyxPQUhYO0FBSUUsY0FBTSxFQUFFSyxNQUpWO0FBS0UsaUJBQVMsRUFBRUMsU0FMYjtBQU1FLG1CQUFXLEVBQUVKLFdBTmY7QUFPRSxzQkFBYyxFQUFFQztBQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBeUNFO0FBQUcsZUFBUyxFQUFFYixFQUFFLENBQUMsS0FBRCxDQUFoQjtBQUF5QixhQUFPLEVBQUU0QixjQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQS9GRDs7R0FBTXhCLFM7O0tBQUFBLFM7QUFpR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltYWdlQ3JvcC41MzBhYjEwMWMwMzlhNGFkYmI2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTaXplLCBQb2ludCwgT1JJR0lOX1BPSU5ULCBPUklHSU5fU0laRSB9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgRGltbWVkQm94IGZyb20gJy4vRGltbWVkQm94JztcclxuaW1wb3J0IENyb3BCb3ggZnJvbSAnLi9Dcm9wQm94JztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJbWFnZUNyb3BQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEltYWdlQ3JvcCA9ICh7IHNyYyB9OiBJbWFnZUNyb3BQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbY3JvcEJveFNpemUsIHNldENyb3BCb3hTaXplXSA9IHVzZVN0YXRlPFNpemU+KE9SSUdJTl9TSVpFKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KE9SSUdJTl9QT0lOVCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSwgW3NyY10pO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRWwgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZ0VsLnNyYyA9IHNyYztcclxuICAgIGltZ0VsLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgc2V0SW1nU2l6ZSh7IHc6IGltZ0VsLndpZHRoLCBoOiBpbWdFbC5oZWlnaHQgfSk7XHJcbiAgICAgIHNldENyb3BCb3hTaXplKHsgdzogaW1nRWwud2lkdGggLyAyLCBoOiBpbWdFbC5oZWlnaHQgLyAyIH0pO1xyXG4gICAgICBzZXRPZmZzZXQoeyB4OiBpbWdFbC53aWR0aCAvIDQsIHk6IGltZ0VsLmhlaWdodCAvIDQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW1nU2l6ZS53O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltZ1NpemUuaDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IGltZ0VsID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWdFbC5zcmMgPSBzcmM7XHJcbiAgICBpbWdFbC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgaW1nRWwsIC8vIOybkOuzuCDsnbTrr7jsp4BcclxuICAgICAgICBvZmZzZXQueCwgLy8g7J6Y66Ck7KeEIOydtOuvuOyngCB4IOyijO2RnFxyXG4gICAgICAgIG9mZnNldC55LCAvLyDsnpjroKTsp4Qg7J2066+47KeAIHkg7KKM7ZGcXHJcbiAgICAgICAgY3JvcEJveFNpemUudywgLy8g7J6Y66Ck7KeEIOydtOuvuOyngCDqsIDroZwg6ri47J20XHJcbiAgICAgICAgY3JvcEJveFNpemUuaCwgLy8g7J6Y66Ck7KeEIOydtOuvuOyngCDshLjroZwg6ri47J20XHJcbiAgICAgICAgMCwgLy8g7J2066+47KeAIOyLnOyekSB4IOyijO2RnFxyXG4gICAgICAgIDAsIC8vIOydtOuvuOyngCDsi5zsnpEgeSDsooztkZxcclxuICAgICAgICBpbWdTaXplLncsIC8vIOydtOuvuOyngCDqsIDroZwg6ri47J20XHJcbiAgICAgICAgaW1nU2l6ZS5oIC8vIOydtOuvuOyngCDshLjroZwg6ri47J20XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhjYW52YXMudG9EYXRhVVJMKCkpO1xyXG4gICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17d3JhcFJlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBgJHtpbWdTaXplLnd9cHhgLFxyXG4gICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdjcm9wQXJlYScpfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdBcmVhJyl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdpbWdCb3gnKX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdpbWcnKX1cclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke2ltZ1NpemUud31weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2ltZ1NpemUuaH1weGAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8RGltbWVkQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nU2l6ZT17aW1nU2l6ZX1cclxuICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICBpbWdTaXplPXtpbWdTaXplfVxyXG4gICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgIGNyb3BCb3hTaXplPXtjcm9wQm94U2l6ZX1cclxuICAgICAgICAgIHNldENyb3BCb3hTaXplPXtzZXRDcm9wQm94U2l6ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2J0bicpfSBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+ZG93bmxvYWQ8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcDsiXSwic291cmNlUm9vdCI6IiJ9