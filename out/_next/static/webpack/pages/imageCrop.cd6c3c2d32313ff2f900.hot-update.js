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
          margin: '50px',
          paddingBottom: '100px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          style: {
            display: 'block',
            marginBottom: '10px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: cx('btnChoice'),
            children: "select images"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltYWdlQ3JvcC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIklNR19QQVRIIiwiSW1hZ2VDcm9wUGFnZSIsInVzZVN0YXRlIiwiaW1nU3JjIiwic2V0SW1nU3JjIiwiaW1nTmFtZSIsInNldEltZ05hbWUiLCJlbmNvZGVGaWxlVG9CYXNlNjQiLCJmaWxlQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0IiwibmFtZSIsIm1hcmdpbiIsInBhZGRpbmdCb3R0b20iLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwiZSIsInRhcmdldCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyxrRkFBaEIsQ0FBWDtBQUVBLElBQU1DLFFBQVEsR0FBRywwQ0FBakI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUNGLFFBQUQsQ0FEVjtBQUFBLE1BQ25CRyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFbkJHLE9BRm1CO0FBQUEsTUFFVkMsVUFGVTs7QUFJMUIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQW9CO0FBQzdDLFFBQUcsQ0FBQ0EsUUFBSixFQUFjO0FBQ2QsUUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjtBQUNBRCxVQUFNLENBQUNFLGFBQVAsQ0FBcUJILFFBQXJCOztBQUNBQyxVQUFNLENBQUNHLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQlIsZUFBUyxDQUFDSyxNQUFNLENBQUNJLE1BQVIsQ0FBVDtBQUNBUCxnQkFBVSxDQUFDRSxRQUFRLENBQUNNLElBQVYsQ0FBVjtBQUNELEtBSEQ7QUFJRCxHQVJEOztBQVVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLE1BQVY7QUFBa0JDLHVCQUFhLEVBQUU7QUFBakMsU0FBWjtBQUFBLGdDQUNFO0FBQU8sZUFBSyxFQUFFO0FBQUVDLG1CQUFPLEVBQUUsT0FBWDtBQUFvQkMsd0JBQVksRUFBRTtBQUFsQyxXQUFkO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFFdEIsRUFBRSxDQUFDLFdBQUQsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLGlCQUFLLEVBQUU7QUFBQ3FCLHFCQUFPLEVBQUU7QUFBVixhQURUO0FBRUUsZ0JBQUksRUFBRSxNQUZSO0FBR0Usa0JBQU0sRUFBRSxrQ0FIVjtBQUlFLG9CQUFRLEVBQUUsa0JBQUFFLENBQUM7QUFBQSxxQkFBSVosa0JBQWtCLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQXRCO0FBQUE7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFLHFFQUFDLGdFQUFEO0FBQVcsZ0JBQU0sRUFBRWxCLE1BQW5CO0FBQTJCLGlCQUFPLEVBQUVFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQWpDRDs7R0FBTUosYTs7S0FBQUEsYTtBQW1DU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1hZ2VDcm9wLmNkNmMzYzJkMzIzMTNmZjJmOTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGVudHMgZnJvbSBcIkBjb21wb25lbnRzL2NvbnRlbnRzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VDcm9wIGZyb20gXCJzcmMvY29tcG9uZW50cy9pbWFnZUNyb3BcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9jb21wb25lbnRzL2ltYWdlQ3JvcC9pbWFnZUNyb3AubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgSU1HX1BBVEggPSAnL25leHRqcy9pbWcvbWF0Y2hJbnRyb2R1Y2UvaW1nTWF0Y2g0LnBuZyc7XHJcblxyXG5jb25zdCBJbWFnZUNyb3BQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSB1c2VTdGF0ZShJTUdfUEFUSCk7XHJcbiAgY29uc3QgW2ltZ05hbWUsIHNldEltZ05hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBlbmNvZGVGaWxlVG9CYXNlNjQgPSAoZmlsZUJsb2I6IEZpbGUpID0+IHtcclxuICAgIGlmKCFmaWxlQmxvYikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVCbG9iKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHNldEltZ1NyYyhyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XHJcbiAgICAgIHNldEltZ05hbWUoZmlsZUJsb2IubmFtZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb250ZW50cz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzUwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTAwcHgnfX0+XHJcbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2J0bkNob2ljZScpfT5zZWxlY3QgaW1hZ2VzPC9hPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxyXG4gICAgICAgICAgICAgIHR5cGU9eydmaWxlJ30gXHJcbiAgICAgICAgICAgICAgYWNjZXB0PXsnaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9qcGcnfSBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBlbmNvZGVGaWxlVG9CYXNlNjQoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8SW1hZ2VDcm9wIGltZ1NyYz17aW1nU3JjfSBpbWdOYW1lPXtpbWdOYW1lfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGVudHM+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ3JvcFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==