webpackHotUpdate_N_E("pages/components",{

/***/ "./src/components/circleProgress/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/circleProgress/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _circleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circleProgress.module.scss */ "./src/components/circleProgress/circleProgress.module.scss");
/* harmony import */ var _circleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_circleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\circleProgress\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_circleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var CircleProgress = function CircleProgress(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var r = props.r,
      title = props.title,
      percent = props.percent,
      colorType = props.colorType;
  percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
  var strokeWidth = 9;
  var d = r * 2;
  var l = Math.round(d * Math.PI);
  var strokeDashoffset = Math.round(l - l * count / 100);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (count === 0) setCount(Math.round(percent));
  }, [percent]);
  var circleStyle = {
    strokeDasharray: l,
    transform: "translate(".concat(strokeWidth / 2, "px, ").concat(strokeWidth / 2, "px)")
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('circleProgress'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      className: cx('circleWrap', colorType),
      style: {
        width: d + strokeWidth,
        height: d + strokeWidth
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: cx('circle', 'back'),
        cx: r,
        cy: r,
        r: r,
        style: _objectSpread({
          strokeWidth: strokeWidth
        }, circleStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: cx('circle', 'border'),
        cx: r,
        cy: r,
        r: r,
        style: _objectSpread({
          strokeWidth: strokeWidth,
          strokeDashoffset: strokeDashoffset
        }, circleStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: cx('circle', 'front'),
        cx: r,
        cy: r,
        r: r,
        style: _objectSpread({
          strokeWidth: strokeWidth - 2,
          strokeDashoffset: strokeDashoffset
        }, circleStyle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('text'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('title'),
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('num'),
        children: [count, "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, _this);
};

_s(CircleProgress, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");

_c = CircleProgress;
/* harmony default export */ __webpack_exports__["default"] = (CircleProgress);

var _c;

$RefreshReg$(_c, "CircleProgress");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2lyY2xlUHJvZ3Jlc3MvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJDaXJjbGVQcm9ncmVzcyIsInByb3BzIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiciIsInRpdGxlIiwicGVyY2VudCIsImNvbG9yVHlwZSIsInN0cm9rZVdpZHRoIiwiZCIsImwiLCJNYXRoIiwicm91bmQiLCJQSSIsInN0cm9rZURhc2hvZmZzZXQiLCJ1c2VFZmZlY3QiLCJjaXJjbGVTdHlsZSIsInN0cm9rZURhc2hhcnJheSIsInRyYW5zZm9ybSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyxrRUFBaEIsQ0FBWDs7QUFXQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBZ0M7QUFBQTs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUMsQ0FBRCxDQURvQjtBQUFBLE1BQy9DQyxLQUQrQztBQUFBLE1BQ3hDQyxRQUR3Qzs7QUFBQSxNQUVqREMsQ0FGaUQsR0FFakJKLEtBRmlCLENBRWpESSxDQUZpRDtBQUFBLE1BRTlDQyxLQUY4QyxHQUVqQkwsS0FGaUIsQ0FFOUNLLEtBRjhDO0FBQUEsTUFFdkNDLE9BRnVDLEdBRWpCTixLQUZpQixDQUV2Q00sT0FGdUM7QUFBQSxNQUU5QkMsU0FGOEIsR0FFakJQLEtBRmlCLENBRTlCTyxTQUY4QjtBQUd0REQsU0FBTyxHQUFHQSxPQUFPLEdBQUcsQ0FBVixHQUFjLENBQWQsR0FBa0JBLE9BQU8sR0FBRyxHQUFWLEdBQWdCLEdBQWhCLEdBQXNCQSxPQUFsRDtBQUNBLE1BQU1FLFdBQVcsR0FBRyxDQUFwQjtBQUVBLE1BQU1DLENBQUMsR0FBR0wsQ0FBQyxHQUFHLENBQWQ7QUFDQSxNQUFNTSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLEdBQUdFLElBQUksQ0FBQ0UsRUFBcEIsQ0FBVjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsQ0FBQyxHQUFJQSxDQUFDLEdBQUdSLEtBQUwsR0FBYyxHQUE3QixDQUF6QjtBQUVBYSx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFHYixLQUFLLEtBQUssQ0FBYixFQUFnQkMsUUFBUSxDQUFDUSxJQUFJLENBQUNDLEtBQUwsQ0FBV04sT0FBWCxDQUFELENBQVI7QUFDaEIsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUO0FBSUEsTUFBTVUsV0FBVyxHQUFHO0FBQ25CQyxtQkFBZSxFQUFFUCxDQURFO0FBRW5CUSxhQUFTLHNCQUFlVixXQUFXLEdBQUcsQ0FBN0IsaUJBQXFDQSxXQUFXLEdBQUcsQ0FBbkQ7QUFGVSxHQUFwQjtBQUtBLHNCQUNDO0FBQUssYUFBUyxFQUFFYixFQUFFLENBQUMsZ0JBQUQsQ0FBbEI7QUFBQSw0QkFDQztBQUNDLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFlBQUQsRUFBZVksU0FBZixDQURkO0FBRUMsV0FBSyxFQUFFO0FBQ05ZLGFBQUssRUFBRVYsQ0FBQyxHQUFHRCxXQURMO0FBRU5ZLGNBQU0sRUFBRVgsQ0FBQyxHQUFHRDtBQUZOLE9BRlI7QUFBQSw4QkFPQztBQUNDLGlCQUFTLEVBQUViLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQURkO0FBRUMsVUFBRSxFQUFFUyxDQUZMO0FBRVEsVUFBRSxFQUFFQSxDQUZaO0FBRWUsU0FBQyxFQUFFQSxDQUZsQjtBQUdDLGFBQUs7QUFDSkkscUJBQVcsRUFBRUE7QUFEVCxXQUVEUSxXQUZDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBELGVBZUM7QUFDQyxpQkFBUyxFQUFFckIsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBRGQ7QUFFQyxVQUFFLEVBQUVTLENBRkw7QUFFUSxVQUFFLEVBQUVBLENBRlo7QUFFZSxTQUFDLEVBQUVBLENBRmxCO0FBR0MsYUFBSztBQUNKSSxxQkFBVyxFQUFFQSxXQURUO0FBRUpNLDBCQUFnQixFQUFFQTtBQUZkLFdBR0RFLFdBSEM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkQsZUF3QkM7QUFDQyxpQkFBUyxFQUFFckIsRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBRGQ7QUFFQyxVQUFFLEVBQUVTLENBRkw7QUFFUSxVQUFFLEVBQUVBLENBRlo7QUFFZSxTQUFDLEVBQUVBLENBRmxCO0FBR0MsYUFBSztBQUNKSSxxQkFBVyxFQUFFQSxXQUFXLEdBQUcsQ0FEdkI7QUFFSk0sMEJBQWdCLEVBQUVBO0FBRmQsV0FHREUsV0FIQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFtQ0M7QUFBSyxlQUFTLEVBQUVyQixFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDhCQUNDO0FBQU0saUJBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbkI7QUFBQSxrQkFBK0JVO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQU0saUJBQVMsRUFBRVYsRUFBRSxDQUFDLEtBQUQsQ0FBbkI7QUFBQSxtQkFBNkJPLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTJDQSxDQTlERDs7R0FBTUgsYzs7S0FBQUEsYztBQWdFU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcG9uZW50cy4yODQzZGQ3NjQ2M2IzYWI3YzJkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NpcmNsZVByb2dyZXNzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG50eXBlIENPTE9SX1RZUEUgPSAnWUVMTE9XJyB8ICdMSU1FJyB8ICdHUkVFTicgfCAnU0tZJyB8ICdCTFVFJztcclxuXHJcbmludGVyZmFjZSBDaXJjbGVQcm9ncmVzc1Byb3BzIHtcclxuXHRyOiBudW1iZXI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0cGVyY2VudDogbnVtYmVyO1xyXG5cdGNvbG9yVHlwZT86IENPTE9SX1RZUEU7XHJcbn1cclxuXHJcbmNvbnN0IENpcmNsZVByb2dyZXNzID0gKHByb3BzOiBDaXJjbGVQcm9ncmVzc1Byb3BzKSA9PiB7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRsZXQge3IsIHRpdGxlLCBwZXJjZW50LCBjb2xvclR5cGV9ID0gcHJvcHM7XHJcblx0cGVyY2VudCA9IHBlcmNlbnQgPCAwID8gMCA6IHBlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50O1xyXG5cdGNvbnN0IHN0cm9rZVdpZHRoID0gOTtcclxuXHJcblx0Y29uc3QgZCA9IHIgKiAyO1xyXG5cdGNvbnN0IGwgPSBNYXRoLnJvdW5kKGQgKiBNYXRoLlBJKTtcclxuXHRjb25zdCBzdHJva2VEYXNob2Zmc2V0ID0gTWF0aC5yb3VuZChsIC0gKGwgKiBjb3VudCkgLyAxMDApO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoY291bnQgPT09IDApXHRzZXRDb3VudChNYXRoLnJvdW5kKHBlcmNlbnQpKTtcclxuXHR9LCBbcGVyY2VudF0pO1xyXG5cclxuXHRjb25zdCBjaXJjbGVTdHlsZSA9IHtcclxuXHRcdHN0cm9rZURhc2hhcnJheTogbCxcclxuXHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3N0cm9rZVdpZHRoIC8gMn1weCwgJHtzdHJva2VXaWR0aCAvIDJ9cHgpYFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NpcmNsZVByb2dyZXNzJyl9PlxyXG5cdFx0XHQ8c3ZnXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnY2lyY2xlV3JhcCcsIGNvbG9yVHlwZSl9XHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdHdpZHRoOiBkICsgc3Ryb2tlV2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IGQgKyBzdHJva2VXaWR0aFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8Y2lyY2xlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdjaXJjbGUnLCAnYmFjaycpfVxyXG5cdFx0XHRcdFx0Y3g9e3J9IGN5PXtyfSByPXtyfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxyXG5cdFx0XHRcdFx0XHQuLi5jaXJjbGVTdHlsZVxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxjaXJjbGVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2NpcmNsZScsICdib3JkZXInKX1cclxuXHRcdFx0XHRcdGN4PXtyfSBjeT17cn0gcj17cn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcclxuXHRcdFx0XHRcdFx0c3Ryb2tlRGFzaG9mZnNldDogc3Ryb2tlRGFzaG9mZnNldCxcclxuXHRcdFx0XHRcdFx0Li4uY2lyY2xlU3R5bGVcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Y2lyY2xlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KCdjaXJjbGUnLCAnZnJvbnQnKX1cclxuXHRcdFx0XHRcdGN4PXtyfSBjeT17cn0gcj17cn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCAtIDIsXHJcblx0XHRcdFx0XHRcdHN0cm9rZURhc2hvZmZzZXQ6IHN0cm9rZURhc2hvZmZzZXQsXHJcblx0XHRcdFx0XHRcdC4uLmNpcmNsZVN0eWxlXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3RleHQnKX0+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e3RpdGxlfTwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdudW0nKX0+e2NvdW50fSU8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpcmNsZVByb2dyZXNzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9