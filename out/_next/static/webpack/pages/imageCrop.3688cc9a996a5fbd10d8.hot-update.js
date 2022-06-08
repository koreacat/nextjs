webpackHotUpdate_N_E("pages/imageCrop",{

/***/ "./src/pages/imageCrop.tsx":
/*!*********************************!*\
  !*** ./src/pages/imageCrop.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/imageCrop */ "./src/components/imageCrop/index.tsx");


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\pages\\imageCrop.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var IMG_PATH = '/nextjs/img/chunSik/imgChunSikFace.png';
var IMG_PATH2 = '/nextjs/img/matchIntroduce/imgMatch4.png';

var ImageCropPage = function ImageCropPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imageSrc = _useState[0],
      setImageSrc = _useState[1];

  var encodeFileToBase64 = function encodeFileToBase64(fileBlob) {
    var reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise(function (resolve) {
      reader.onload = function () {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          margin: '50px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: 'file',
          accept: 'image/png, image/jpeg, image/jpg',
          onChange: function onChange(e) {
            return encodeFileToBase64(e.target.files[0]);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
          url: IMG_PATH2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(ImageCropPage, "2lhibDnWxdgh+irpU5g/g4cMlfs=");

_c = ImageCropPage;
/* harmony default export */ __webpack_exports__["default"] = (ImageCropPage);

var _c;

$RefreshReg$(_c, "ImageCropPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlQ3JvcC50c3giXSwibmFtZXMiOlsiSU1HX1BBVEgiLCJJTUdfUEFUSDIiLCJJbWFnZUNyb3BQYWdlIiwidXNlU3RhdGUiLCJpbWFnZVNyYyIsInNldEltYWdlU3JjIiwiZW5jb2RlRmlsZVRvQmFzZTY0IiwiZmlsZUJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwicmVzdWx0IiwibWFyZ2luIiwiZSIsInRhcmdldCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyx3Q0FBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsMENBQWxCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ25CQyxRQURtQjtBQUFBLE1BQ1RDLFdBRFM7O0FBSTFCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsVUFBTSxDQUFDRSxhQUFQLENBQXFCSCxRQUFyQjtBQUNBLFdBQU8sSUFBSUksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkosWUFBTSxDQUFDSyxNQUFQLEdBQWdCLFlBQU07QUFDcEJSLG1CQUFXLENBQUNHLE1BQU0sQ0FBQ00sTUFBUixDQUFYO0FBQ0FGLGVBQU87QUFDUixPQUhEO0FBSUQsS0FMTSxDQUFQO0FBTUQsR0FURDs7QUFXQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRUcsZ0JBQU0sRUFBRTtBQUFWLFNBQVo7QUFBQSxnQ0FDRTtBQUNBLGNBQUksRUFBRSxNQUROO0FBRUEsZ0JBQU0sRUFBRSxrQ0FGUjtBQUdBLGtCQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxtQkFBSVYsa0JBQWtCLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQXRCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUscUVBQUMsZ0VBQUQ7QUFBVyxhQUFHLEVBQUVqQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTdCRDs7R0FBTUMsYTs7S0FBQUEsYTtBQStCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjM2ODhjYzlhOTk2YTVmYmQxMGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDcm9wIGZyb20gXCJzcmMvY29tcG9uZW50cy9pbWFnZUNyb3BcIjtcclxuXHJcbmNvbnN0IElNR19QQVRIID0gJy9uZXh0anMvaW1nL2NodW5TaWsvaW1nQ2h1blNpa0ZhY2UucG5nJztcclxuY29uc3QgSU1HX1BBVEgyID0gJy9uZXh0anMvaW1nL21hdGNoSW50cm9kdWNlL2ltZ01hdGNoNC5wbmcnO1xyXG5cclxuY29uc3QgSW1hZ2VDcm9wUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gIGNvbnN0IGVuY29kZUZpbGVUb0Jhc2U2NCA9IChmaWxlQmxvYikgPT4ge1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVCbG9iKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlU3JjKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q29udGVudHM+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICc1MHB4J319PlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT17J2ZpbGUnfSBcclxuICAgICAgICAgIGFjY2VwdD17J2ltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvanBnJ30gXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlbmNvZGVGaWxlVG9CYXNlNjQoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbWFnZUNyb3AgdXJsPXtJTUdfUEFUSDJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGVudHM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==