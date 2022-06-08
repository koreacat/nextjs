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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uC774\uBBF8\uC9C0 \uC120\uD0DD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            style: {
              marginBottom: '10px'
            },
            type: 'file',
            accept: 'image/png, image/jpeg, image/jpg',
            onChange: function onChange(e) {
              return encodeFileToBase64(e.target.files[0]);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_components_imageCrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
          imgSrc: imgSrc,
          imgName: imgName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlQ3JvcC50c3giXSwibmFtZXMiOlsiSU1HX1BBVEgiLCJJbWFnZUNyb3BQYWdlIiwidXNlU3RhdGUiLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJpbWdOYW1lIiwic2V0SW1nTmFtZSIsImVuY29kZUZpbGVUb0Jhc2U2NCIsImZpbGVCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJuYW1lIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwiZSIsInRhcmdldCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRywwQ0FBakI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUNGLFFBQUQsQ0FEVjtBQUFBLE1BQ25CRyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFbkJHLE9BRm1CO0FBQUEsTUFFVkMsVUFGVTs7QUFJMUIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQW9CO0FBQzdDLFFBQUcsQ0FBQ0EsUUFBSixFQUFjO0FBQ2QsUUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLGFBQVAsQ0FBcUJILFFBQXJCOztBQUNBQyxVQUFNLENBQUNHLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQlIsZUFBUyxDQUFDSyxNQUFNLENBQUNJLE1BQVIsQ0FBVDtBQUNBUCxnQkFBVSxDQUFDRSxRQUFRLENBQUNNLElBQVYsQ0FBVjtBQUNELEtBSEQ7QUFJRCxHQVJEOztBQVVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBWjtBQUFBLGdDQUNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGlCQUFLLEVBQUU7QUFBRUMsMEJBQVksRUFBRTtBQUFoQixhQURUO0FBRUUsZ0JBQUksRUFBRSxNQUZSO0FBR0Usa0JBQU0sRUFBRSxrQ0FIVjtBQUlFLG9CQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxxQkFBSVYsa0JBQWtCLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQXRCO0FBQUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFLHFFQUFDLGdFQUFEO0FBQVcsZ0JBQU0sRUFBRWhCLE1BQW5CO0FBQTJCLGlCQUFPLEVBQUVFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQWpDRDs7R0FBTUosYTs7S0FBQUEsYTtBQW1DU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLjljMmY0NTI2M2I4MWU1ZWM5YzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDcm9wIGZyb20gXCJzcmMvY29tcG9uZW50cy9pbWFnZUNyb3BcIjtcclxuXHJcbmNvbnN0IElNR19QQVRIID0gJy9uZXh0anMvaW1nL21hdGNoSW50cm9kdWNlL2ltZ01hdGNoNC5wbmcnO1xyXG5cclxuY29uc3QgSW1hZ2VDcm9wUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUoSU1HX1BBVEgpO1xyXG4gIGNvbnN0IFtpbWdOYW1lLCBzZXRJbWdOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgZW5jb2RlRmlsZVRvQmFzZTY0ID0gKGZpbGVCbG9iOiBGaWxlKSA9PiB7XHJcbiAgICBpZighZmlsZUJsb2IpIHJldHVybjtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlQmxvYik7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBzZXRJbWdTcmMocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xyXG4gICAgICBzZXRJbWdOYW1lKGZpbGVCbG9iLm5hbWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Q29udGVudHM+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICc1MHB4J319PlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8YT7snbTrr7jsp4Ag7ISg7YOdPC9hPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICB0eXBlPXsnZmlsZSd9IFxyXG4gICAgICAgICAgICAgIGFjY2VwdD17J2ltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvanBnJ30gXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gZW5jb2RlRmlsZVRvQmFzZTY0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPEltYWdlQ3JvcCBpbWdTcmM9e2ltZ1NyY30gaW1nTmFtZT17aW1nTmFtZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRlbnRzPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyb3BQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=