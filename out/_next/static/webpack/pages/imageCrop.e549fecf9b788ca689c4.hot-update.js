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
/* harmony import */ var _components_imageCrop_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/imageCrop/imageCrop.module.scss */ "./src/components/imageCrop/imageCrop.module.scss");
/* harmony import */ var _components_imageCrop_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_imageCrop_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\pages\\imageCrop.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_6___default.a.bind(_components_imageCrop_imageCrop_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a);
var IMG_PATH = '/nextjs/img/matchIntroduce/imgMatch4.png';

var ImageCropPage = function ImageCropPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(IMG_PATH),
      imgSrc = _useState[0],
      setImgSrc = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      imgName = _useState2[0],
      setImgName = _useState2[1];

  var encodeFileToBase64 = function encodeFileToBase64(fileBlob) {
    if (!fileBlob) return;
    var reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    reader.onload = function () {
      setImgSrc(reader.result);
      setImgName(fileBlob.name);
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_contents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          margin: '50px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            display: 'block',
            marginBottom: '10px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: cx('btn'),
            children: "\uC774\uBBF8\uC9C0 \uC120\uD0DD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            style: {
              display: 'none'
            },
            type: 'file',
            accept: 'image/png, image/jpeg, image/jpg',
            onChange: function onChange(e) {
              return encodeFileToBase64(e.target.files[0]);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
          imgSrc: imgSrc,
          imgName: imgName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(ImageCropPage, "t7t/HMVaKYRKhUeBoi2PFtEuk5Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlQ3JvcC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIklNR19QQVRIIiwiSW1hZ2VDcm9wUGFnZSIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwiaW1nTmFtZSIsInNldEltZ05hbWUiLCJlbmNvZGVGaWxlVG9CYXNlNjQiLCJmaWxlQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0IiwibmFtZSIsIm1hcmdpbiIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJlIiwidGFyZ2V0IiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLGtGQUFoQixDQUFYO0FBRUEsSUFBTUMsUUFBUSxHQUFHLDBDQUFqQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQ0YsUUFBRCxDQURWO0FBQUEsTUFDbkJHLE1BRG1CO0FBQUEsTUFDWEMsU0FEVzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVuQkcsT0FGbUI7QUFBQSxNQUVWQyxVQUZVOztBQUkxQixNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBb0I7QUFDN0MsUUFBRyxDQUFDQSxRQUFKLEVBQWM7QUFDZCxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELFVBQU0sQ0FBQ0UsYUFBUCxDQUFxQkgsUUFBckI7O0FBQ0FDLFVBQU0sQ0FBQ0csTUFBUCxHQUFnQixZQUFNO0FBQ3BCUixlQUFTLENBQUNLLE1BQU0sQ0FBQ0ksTUFBUixDQUFUO0FBQ0FQLGdCQUFVLENBQUNFLFFBQVEsQ0FBQ00sSUFBVixDQUFWO0FBQ0QsS0FIRDtBQUlELEdBUkQ7O0FBVUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRSxxRUFBQyw0REFBRDtBQUFBLDZCQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFaO0FBQUEsZ0NBQ0U7QUFBTyxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRSxPQUFYO0FBQW9CQyx3QkFBWSxFQUFFO0FBQWxDLFdBQWQ7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUVyQixFQUFFLENBQUMsS0FBRCxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsaUJBQUssRUFBRTtBQUFDb0IscUJBQU8sRUFBRTtBQUFWLGFBRFQ7QUFFRSxnQkFBSSxFQUFFLE1BRlI7QUFHRSxrQkFBTSxFQUFFLGtDQUhWO0FBSUUsb0JBQVEsRUFBRSxrQkFBQUUsQ0FBQztBQUFBLHFCQUFJWCxrQkFBa0IsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBdEI7QUFBQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0UscUVBQUMsZ0VBQUQ7QUFBVyxnQkFBTSxFQUFFakIsTUFBbkI7QUFBMkIsaUJBQU8sRUFBRUU7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBakNEOztHQUFNSixhOztLQUFBQSxhO0FBbUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbWFnZUNyb3AuZTU0OWZlY2Y5Yjc4OGNhNjg5YzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZW50cyBmcm9tIFwiQGNvbXBvbmVudHMvY29udGVudHNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUNyb3AgZnJvbSBcInNyYy9jb21wb25lbnRzL2ltYWdlQ3JvcFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL2NvbXBvbmVudHMvaW1hZ2VDcm9wL2ltYWdlQ3JvcC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCBJTUdfUEFUSCA9ICcvbmV4dGpzL2ltZy9tYXRjaEludHJvZHVjZS9pbWdNYXRjaDQucG5nJztcclxuXHJcbmNvbnN0IEltYWdlQ3JvcFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IHVzZVN0YXRlKElNR19QQVRIKTtcclxuICBjb25zdCBbaW1nTmFtZSwgc2V0SW1nTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGVuY29kZUZpbGVUb0Jhc2U2NCA9IChmaWxlQmxvYjogRmlsZSkgPT4ge1xyXG4gICAgaWYoIWZpbGVCbG9iKSByZXR1cm47XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZUJsb2IpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgc2V0SW1nU3JjKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgICAgc2V0SW1nTmFtZShmaWxlQmxvYi5uYW1lKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbnRlbnRzPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnNTBweCd9fT5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnYnRuJyl9PuydtOuvuOyngCDshKDtg508L2E+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XHJcbiAgICAgICAgICAgICAgdHlwZT17J2ZpbGUnfSBcclxuICAgICAgICAgICAgICBhY2NlcHQ9eydpbWFnZS9wbmcsIGltYWdlL2pwZWcsIGltYWdlL2pwZyd9IFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGVuY29kZUZpbGVUb0Jhc2U2NChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxJbWFnZUNyb3AgaW1nU3JjPXtpbWdTcmN9IGltZ05hbWU9e2ltZ05hbWV9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250ZW50cz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDcm9wUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9