webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/components/imageCrop/index.tsx":
/*!********************************************!*\
  !*** ./src/components/imageCrop/index.tsx ***!
  \********************************************/
/*! exports provided: IMG_PATH, IMG_PATH2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_PATH", function() { return IMG_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_PATH2", function() { return IMG_PATH2; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CropBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CropBox */ "./src/components/imageCrop/CropBox.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
var IMG_PATH2 = '/nextjs/img/chunSik/iconSoundPlay.png';

var ImageCrop = function ImageCrop() {
  _s();

  var wrapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(IMG_PATH2),
      imgPath = _useState[0],
      setImgPath = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    x: imgSize.w / 2,
    y: 10
  }),
      offset = _useState2[0],
      setOffset = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    w: 412,
    h: 412
  }),
      imgSize = _useState3[0],
      setImgSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    w: imgSize.w / 2,
    h: imgSize.h / 2
  }),
      cropBoxSize = _useState4[0],
      setCropBoxSize = _useState4[1];

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
            lineNumber: 25,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(ImageCrop, "y9TMeVQnbqOc6xW3SI+D+AdyEOY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJJTUdfUEFUSDIiLCJJbWFnZUNyb3AiLCJ3cmFwUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsIngiLCJpbWdTaXplIiwidyIsInkiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJoIiwic2V0SW1nU2l6ZSIsImNyb3BCb3hTaXplIiwic2V0Q3JvcEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw2REFBaEIsQ0FBWDtBQUVPLElBQU1DLFFBQVEsR0FBRyx3Q0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsdUNBQWxCOztBQUVQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHQyxvREFBTSxDQUFpQixJQUFqQixDQUF0Qjs7QUFEc0Isa0JBRVFDLHNEQUFRLENBQVNKLFNBQVQsQ0FGaEI7QUFBQSxNQUVmSyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBUTtBQUFDRyxLQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsQ0FBUixHQUFZLENBQWhCO0FBQW1CQyxLQUFDLEVBQUU7QUFBdEIsR0FBUixDQUhkO0FBQUEsTUFHZkMsTUFIZTtBQUFBLE1BR1BDLFNBSE87O0FBQUEsbUJBSVFSLHNEQUFRLENBQU87QUFBRUssS0FBQyxFQUFFLEdBQUw7QUFBVUksS0FBQyxFQUFFO0FBQWIsR0FBUCxDQUpoQjtBQUFBLE1BSWZMLE9BSmU7QUFBQSxNQUlOTSxVQUpNOztBQUFBLG1CQUtnQlYsc0RBQVEsQ0FBTztBQUFDSyxLQUFDLEVBQUVELE9BQU8sQ0FBQ0MsQ0FBUixHQUFZLENBQWhCO0FBQW1CSSxLQUFDLEVBQUVMLE9BQU8sQ0FBQ0ssQ0FBUixHQUFZO0FBQWxDLEdBQVAsQ0FMeEI7QUFBQSxNQUtmRSxXQUxlO0FBQUEsTUFLRkMsY0FMRTs7QUFPdEIsc0JBQ0U7QUFBSyxPQUFHLEVBQUVkLE9BQVY7QUFBbUIsYUFBUyxFQUFFUCxFQUFFLENBQUMsTUFBRCxDQUFoQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLDhCQUdFO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFQSxFQUFFLENBQUMsS0FBRCxDQURmO0FBRUUsZUFBRyxFQUFFVSxPQUZQO0FBR0UsaUJBQUssRUFBRTtBQUNMWSxtQkFBSyxZQUFLVCxPQUFPLENBQUNDLENBQWIsT0FEQTtBQUVMUyxvQkFBTSxZQUFLVixPQUFPLENBQUNLLENBQWI7QUFGRDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBaUJFO0FBQUssaUJBQVMsRUFBRWxCLEVBQUUsQ0FBQyxXQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUFvQkUscUVBQUMsZ0RBQUQ7QUFDRSxlQUFPLEVBQUVPLE9BRFg7QUFFRSxlQUFPLEVBQUVHLE9BRlg7QUFHRSxlQUFPLEVBQUVHLE9BSFg7QUFJRSxjQUFNLEVBQUVHLE1BSlY7QUFLRSxpQkFBUyxFQUFFQyxTQUxiO0FBTUUsbUJBQVcsRUFBRUcsV0FOZjtBQU9FLHNCQUFjLEVBQUVDO0FBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBMUNEOztHQUFNZixTOztLQUFBQSxTO0FBNENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuYzQzYmQwYzczOTNjNWE5YWI4OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3JvcEJveCBmcm9tICcuL0Nyb3BCb3gnO1xyXG5pbXBvcnQgeyBTaXplLCBQb2ludCB9IGZyb20gJy4vZGF0YSc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5leHBvcnQgY29uc3QgSU1HX1BBVEggPSAnL25leHRqcy9pbWcvY2h1blNpay9pbWdDaHVuU2lrRmFjZS5wbmcnO1xyXG5leHBvcnQgY29uc3QgSU1HX1BBVEgyID0gJy9uZXh0anMvaW1nL2NodW5TaWsvaWNvblNvdW5kUGxheS5wbmcnO1xyXG5cclxuY29uc3QgSW1hZ2VDcm9wID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtpbWdQYXRoLCBzZXRJbWdQYXRoXSA9IHVzZVN0YXRlPHN0cmluZz4oSU1HX1BBVEgyKTtcclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8UG9pbnQ+KHt4OiBpbWdTaXplLncgLyAyLCB5OiAxMH0pO1xyXG4gIGNvbnN0IFtpbWdTaXplLCBzZXRJbWdTaXplXSA9IHVzZVN0YXRlPFNpemU+KHsgdzogNDEyLCBoOiA0MTIgfSk7XHJcbiAgY29uc3QgW2Nyb3BCb3hTaXplLCBzZXRDcm9wQm94U2l6ZV0gPSB1c2VTdGF0ZTxTaXplPih7dzogaW1nU2l6ZS53IC8gMiwgaDogaW1nU2l6ZS5oIC8gMn0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3dyYXBSZWZ9IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nUGF0aD17aW1nUGF0aH1cclxuICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgY3JvcEJveFNpemU9e2Nyb3BCb3hTaXplfVxyXG4gICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=