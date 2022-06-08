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






var ImageCropPage = function ImageCropPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imageSrc = _useState[0],
      setImageSrc = _useState[1];

  var encodeFileToBase64 = function encodeFileToBase64(fileBlob) {
    if (!fileBlob) return;
    ;
    var reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = function () {
      return setImageSrc(reader.result);
    };
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
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
          src: imageSrc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlQ3JvcC50c3giXSwibmFtZXMiOlsiSW1hZ2VDcm9wUGFnZSIsInVzZVN0YXRlIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImVuY29kZUZpbGVUb0Jhc2U2NCIsImZpbGVCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJtYXJnaW4iLCJlIiwidGFyZ2V0IiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ25CQyxRQURtQjtBQUFBLE1BQ1RDLFdBRFM7O0FBRzFCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFvQjtBQUM3QyxRQUFHLENBQUNBLFFBQUosRUFBYztBQUFPO0FBQ3JCLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsVUFBTSxDQUFDRSxhQUFQLENBQXFCSCxRQUFyQjs7QUFDQUMsVUFBTSxDQUFDRyxNQUFQLEdBQWdCO0FBQUEsYUFBTU4sV0FBVyxDQUFDRyxNQUFNLENBQUNJLE1BQVIsQ0FBakI7QUFBQSxLQUFoQjtBQUNELEdBTEQ7O0FBT0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRSxxRUFBQyw0REFBRDtBQUFBLDZCQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFaO0FBQUEsZ0NBQ0U7QUFDQSxjQUFJLEVBQUUsTUFETjtBQUVBLGdCQUFNLEVBQUUsa0NBRlI7QUFHQSxrQkFBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEsbUJBQUlSLGtCQUFrQixDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBRCxDQUF0QjtBQUFBO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FLHFFQUFDLGdFQUFEO0FBQVcsYUFBRyxFQUFFWjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXhCRDs7R0FBTUYsYTs7S0FBQUEsYTtBQTBCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjRmNzUyZjgzZGIzNTEyY2Q3YzdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDcm9wIGZyb20gXCJzcmMvY29tcG9uZW50cy9pbWFnZUNyb3BcIjtcclxuXHJcbmNvbnN0IEltYWdlQ3JvcFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGVuY29kZUZpbGVUb0Jhc2U2NCA9IChmaWxlQmxvYjogRmlsZSkgPT4ge1xyXG4gICAgaWYoIWZpbGVCbG9iKSByZXR1cm47O1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVCbG9iKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiBzZXRJbWFnZVNyYyhyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzUwcHgnfX0+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICB0eXBlPXsnZmlsZSd9IFxyXG4gICAgICAgICAgYWNjZXB0PXsnaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9qcGcnfSBcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGVuY29kZUZpbGVUb0Jhc2U2NChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlQ3JvcCBzcmM9e2ltYWdlU3JjfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3BQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=