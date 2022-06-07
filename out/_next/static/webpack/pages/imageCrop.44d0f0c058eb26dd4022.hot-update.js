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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/components/imageCrop/data.ts");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\imageCrop\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
var IMG_PATH2 = '/nextjs/img/chunSik/iconSoundPlay.png';

var ImageCrop = function ImageCrop() {
  _s();

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
    setImgPath(IMG_PATH2);
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
            lineNumber: 36,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('dimmedBox')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiSU1HX1BBVEgiLCJJTUdfUEFUSDIiLCJJbWFnZUNyb3AiLCJ3cmFwUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbWdQYXRoIiwic2V0SW1nUGF0aCIsIk9SSUdJTl9TSVpFIiwiaW1nU2l6ZSIsInNldEltZ1NpemUiLCJjcm9wQm94U2l6ZSIsInNldENyb3BCb3hTaXplIiwiT1JJR0lOX1BPSU5UIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNlRWZmZWN0IiwidyIsImgiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDZEQUFoQixDQUFYO0FBRU8sSUFBTUMsUUFBUSxHQUFHLHdDQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyx1Q0FBbEI7O0FBRVAsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQWlCLElBQWpCLENBQXRCOztBQURzQixrQkFFUUMsc0RBQVEsQ0FBUyxFQUFULENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBQUEsbUJBR1FGLHNEQUFRLENBQU9HLGlEQUFQLENBSGhCO0FBQUEsTUFHZkMsT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTCxzREFBUSxDQUFPRyxpREFBUCxDQUp4QjtBQUFBLE1BSWZHLFdBSmU7QUFBQSxNQUlGQyxjQUpFOztBQUFBLG1CQUtNUCxzREFBUSxDQUFRUSxrREFBUixDQUxkO0FBQUEsTUFLZkMsTUFMZTtBQUFBLE1BS1BDLFNBTE87O0FBT3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZFQsY0FBVSxDQUFDTixTQUFELENBQVY7QUFDQSxRQUFNUSxPQUFPLEdBQUc7QUFBRVEsT0FBQyxFQUFFLEdBQUw7QUFBVUMsT0FBQyxFQUFFO0FBQWIsS0FBaEI7QUFDQVIsY0FBVSxDQUFDRCxPQUFELENBQVY7QUFDRCxHQUpRLEVBSU4sQ0FBQ0gsT0FBRCxDQUpNLENBQVQ7QUFNQWEsK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCUCxrQkFBYyxDQUFDO0FBQUNLLE9BQUMsRUFBRVIsT0FBTyxDQUFDUSxDQUFSLEdBQVksQ0FBaEI7QUFBbUJDLE9BQUMsRUFBRVQsT0FBTyxDQUFDUyxDQUFSLEdBQVk7QUFBbEMsS0FBRCxDQUFkO0FBQ0FILGFBQVMsQ0FBQztBQUFDSyxPQUFDLEVBQUVULFdBQVcsQ0FBQ00sQ0FBWixHQUFnQixDQUFwQjtBQUF1QkksT0FBQyxFQUFFVixXQUFXLENBQUNPLENBQVosR0FBZ0I7QUFBMUMsS0FBRCxDQUFUO0FBQ0QsR0FIYyxFQUdaLENBQUNULE9BQUQsQ0FIWSxDQUFmO0FBS0Esc0JBQ0U7QUFBSyxPQUFHLEVBQUVOLE9BQVY7QUFBbUIsYUFBUyxFQUFFUCxFQUFFLENBQUMsTUFBRCxDQUFoQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsVUFBRCxDQUFsQjtBQUFBLDhCQUdFO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLFNBQUQsQ0FBbEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxRQUFELENBQWxCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFQSxFQUFFLENBQUMsS0FBRCxDQURmO0FBRUUsZUFBRyxFQUFFVSxPQUZQO0FBR0UsaUJBQUssRUFBRTtBQUNMZ0IsbUJBQUssWUFBS2IsT0FBTyxDQUFDUSxDQUFiLE9BREE7QUFFTE0sb0JBQU0sWUFBS2QsT0FBTyxDQUFDUyxDQUFiO0FBRkQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQWlCRTtBQUFLLGlCQUFTLEVBQUV0QixFQUFFLENBQUMsV0FBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBb0JFLHFFQUFDLGdEQUFEO0FBQ0UsZUFBTyxFQUFFTyxPQURYO0FBRUUsZUFBTyxFQUFFRyxPQUZYO0FBR0UsZUFBTyxFQUFFRyxPQUhYO0FBSUUsY0FBTSxFQUFFSyxNQUpWO0FBS0UsaUJBQVMsRUFBRUMsU0FMYjtBQU1FLG1CQUFXLEVBQUVKLFdBTmY7QUFPRSxzQkFBYyxFQUFFQztBQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1DRCxDQXJERDs7R0FBTVYsUzs7S0FBQUEsUztBQXVEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjQ0ZDBmMGMwNThlYjI2ZGQ0MDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VDcm9wLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDcm9wQm94IGZyb20gJy4vQ3JvcEJveCc7XHJcbmltcG9ydCB7IFNpemUsIFBvaW50LCBPUklHSU5fUE9JTlQsIE9SSUdJTl9TSVpFIH0gZnJvbSAnLi9kYXRhJztcclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBJTUdfUEFUSCA9ICcvbmV4dGpzL2ltZy9jaHVuU2lrL2ltZ0NodW5TaWtGYWNlLnBuZyc7XHJcbmV4cG9ydCBjb25zdCBJTUdfUEFUSDIgPSAnL25leHRqcy9pbWcvY2h1blNpay9pY29uU291bmRQbGF5LnBuZyc7XHJcblxyXG5jb25zdCBJbWFnZUNyb3AgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2ltZ1BhdGgsIHNldEltZ1BhdGhdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW2ltZ1NpemUsIHNldEltZ1NpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IFtjcm9wQm94U2l6ZSwgc2V0Q3JvcEJveFNpemVdID0gdXNlU3RhdGU8U2l6ZT4oT1JJR0lOX1NJWkUpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxQb2ludD4oT1JJR0lOX1BPSU5UKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltZ1BhdGgoSU1HX1BBVEgyKTtcclxuICAgIGNvbnN0IGltZ1NpemUgPSB7IHc6IDQxMiwgaDogNDEyIH07XHJcbiAgICBzZXRJbWdTaXplKGltZ1NpemUpO1xyXG4gIH0sIFtpbWdQYXRoXSk7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDcm9wQm94U2l6ZSh7dzogaW1nU2l6ZS53IC8gMiwgaDogaW1nU2l6ZS5oIC8gMn0pO1xyXG4gICAgc2V0T2Zmc2V0KHt4OiBjcm9wQm94U2l6ZS53IC8gMiwgeTogY3JvcEJveFNpemUuaCAvIDJ9KTtcclxuICB9LCBbaW1nU2l6ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3dyYXBSZWZ9IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnY3JvcEFyZWEnKX0+XHJcblxyXG4gICAgICAgIHsvKiDsnbTrr7jsp4Ag7JiB7JetICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQXJlYScpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnaW1nQm94Jyl9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnaW1nJyl9XHJcbiAgICAgICAgICAgICAgc3JjPXtpbWdQYXRofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW1nU2l6ZS53fXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aW1nU2l6ZS5ofXB4YCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBkaW1tZWQg7JiB7JetIOuwleyKpCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2RpbW1lZEJveCcpfSAvPlxyXG5cclxuICAgICAgICB7LyogY3JvcCDsmIHsl60g67CV7IqkICovfVxyXG4gICAgICAgIDxDcm9wQm94XHJcbiAgICAgICAgICB3cmFwUmVmPXt3cmFwUmVmfVxyXG4gICAgICAgICAgaW1nUGF0aD17aW1nUGF0aH1cclxuICAgICAgICAgIGltZ1NpemU9e2ltZ1NpemV9XHJcbiAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgIHNldE9mZnNldD17c2V0T2Zmc2V0fVxyXG4gICAgICAgICAgY3JvcEJveFNpemU9e2Nyb3BCb3hTaXplfVxyXG4gICAgICAgICAgc2V0Q3JvcEJveFNpemU9e3NldENyb3BCb3hTaXplfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wOyJdLCJzb3VyY2VSb290IjoiIn0=