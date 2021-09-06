webpackHotUpdate_N_E("pages/slider",{

/***/ "./src/components/common/slider/index.tsx":
/*!************************************************!*\
  !*** ./src/components/common/slider/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.module.scss */ "./src/components/common/slider/slider.module.scss");
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\common\\slider\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_slider_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Slider = function Slider(_ref) {
  _s();

  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      marks = _ref.marks,
      max = _ref.max,
      min = _ref.min,
      range = _ref.range,
      tooltipVisible = _ref.tooltipVisible,
      value = _ref.value,
      onAfterChange = _ref.onAfterChange,
      onChange = _ref.onChange;
  var railEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var handleEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var sliderValue = value <= min ? min : value >= max ? max : value;

  var handleRailOnMouseDown = function handleRailOnMouseDown(e) {};

  var handleOnChange = function handleOnChange(e) {
    onChange(e.target.value);
    onAfterChange && onAfterChange();
  };

  var handleOnMouseDown = function handleOnMouseDown(e) {
    e.preventDefault();
    var shiftX = e.clientX - handleEl.current.getBoundingClientRect().left;

    var onMouseUp = function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };

    var onMouseMove = function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - railEl.current.getBoundingClientRect().left;
      if (newLeft < 0) newLeft = 0;
      var rightEdge = railEl.current.offsetWidth;
      if (newLeft > rightEdge) newLeft = rightEdge;
      handleEl.current.style.left = newLeft + 'px';
      onChange(Math.round(newLeft / rightEdge * 100));
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('slider'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: railEl,
      className: cx('rail'),
      onMouseDown: function onMouseDown(e) {
        return handleRailOnMouseDown(e);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('track'),
      style: {
        width: "".concat(sliderValue, "%")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: handleEl,
      className: cx('handle'),
      role: "slider",
      "data-valuemin": "0",
      "data-valuemax": "100",
      "data-valuenow": "74",
      "aria-disabled": "false",
      style: {
        left: "".concat(sliderValue, "%")
      },
      onMouseDown: function onMouseDown(e) {
        return handleOnMouseDown(e);
      },
      onDragStart: function onDragStart() {
        return false;
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('step')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "number",
      className: cx('input'),
      onChange: function onChange(e) {
        return handleOnChange(e);
      },
      value: sliderValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 3
  }, _this);
};

_s(Slider, "qzey1l3X2+JBlfwno32tMR+Qg1A=");

_c = Slider;
/* harmony default export */ __webpack_exports__["default"] = (Slider);

var _c;

$RefreshReg$(_c, "Slider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJyYWlsRWwiLCJ1c2VSZWYiLCJoYW5kbGVFbCIsInNsaWRlclZhbHVlIiwiaGFuZGxlUmFpbE9uTW91c2VEb3duIiwiZSIsImhhbmRsZU9uQ2hhbmdlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0WCIsImNsaWVudFgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIm9uTW91c2VVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsIk1hdGgiLCJyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FXTTtBQUFBOztBQUFBLDJCQVRuQkMsUUFTbUI7QUFBQSxNQVRuQkEsUUFTbUIsOEJBVFQsS0FTUztBQUFBLE1BUm5CQyxLQVFtQixRQVJuQkEsS0FRbUI7QUFBQSxNQVBuQkMsR0FPbUIsUUFQbkJBLEdBT21CO0FBQUEsTUFObkJDLEdBTW1CLFFBTm5CQSxHQU1tQjtBQUFBLE1BTG5CQyxLQUttQixRQUxuQkEsS0FLbUI7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LFVBQUksRUFBQyxRQUhOO0FBSUMsdUJBQWMsR0FKZjtBQUtDLHVCQUFjLEtBTGY7QUFNQyx1QkFBYyxJQU5mO0FBT0MsdUJBQWMsT0FQZjtBQVFDLFdBQUssRUFBRTtBQUFDNEIsWUFBSSxZQUFLWCxXQUFMO0FBQUwsT0FSUjtBQVNDLGlCQUFXLEVBQUUscUJBQUFFLENBQUM7QUFBQSxlQUFJRyxpQkFBaUIsQ0FBQ0gsQ0FBRCxDQUFyQjtBQUFBLE9BVGY7QUFVQyxpQkFBVyxFQUFFLHVCQUFNO0FBQUMsZUFBTyxLQUFQO0FBQWE7QUFWbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELGVBZ0JDO0FBQUssZUFBUyxFQUFFbkIsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRCxlQWlCQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRCxlQW1CQztBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBNkMsY0FBUSxFQUFFLGtCQUFBbUIsQ0FBQztBQUFBLGVBQUlDLGNBQWMsQ0FBQ0QsQ0FBRCxDQUFsQjtBQUFBLE9BQXhEO0FBQStFLFdBQUssRUFBRUY7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQTNFRDs7R0FBTWIsTTs7S0FBQUEsTTtBQTZFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLjUyYzIxZWQwYmE1ZTc3Mzk3MDA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIElTbGlkZXJQcm9wcyB7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdG1hcmtzPzogUmVjb3JkPG51bWJlciwgUmVhY3ROb2RlIHwgc3RyaW5nPjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtaW46IG51bWJlcjtcclxuXHRyYW5nZT86IGJvb2xlYW47XHJcblx0dG9vbHRpcFZpc2libGU/OiBib29sZWFuO1xyXG5cdHZhbHVlOiBudW1iZXI7XHJcblx0b25BZnRlckNoYW5nZT86ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlPzogKHZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoXHJcblx0e1xyXG5cdFx0ZGlzYWJsZWQ9IGZhbHNlLFxyXG5cdFx0bWFya3MsXHJcblx0XHRtYXgsXHJcblx0XHRtaW4sXHJcblx0XHRyYW5nZSxcclxuXHRcdHRvb2x0aXBWaXNpYmxlLFxyXG5cdFx0dmFsdWUsXHJcblx0XHRvbkFmdGVyQ2hhbmdlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgcmFpbEVsID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGhhbmRsZUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBzbGlkZXJWYWx1ZSA9IHZhbHVlIDw9IG1pbiA/IG1pbiA6IHZhbHVlID49IG1heCA/IG1heCA6IHZhbHVlO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSYWlsT25Nb3VzZURvd24gPSAoZSkgPT4ge1xyXG5cclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0b25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0b25BZnRlckNoYW5nZSAmJiBvbkFmdGVyQ2hhbmdlKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT25Nb3VzZURvd24gPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3Qgc2hpZnRYID0gZS5jbGllbnRYIC0gaGFuZGxlRWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cclxuXHRcdGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnRYIC0gcmFpbEVsLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuXHRcdFx0aWYgKG5ld0xlZnQgPCAwKSBuZXdMZWZ0ID0gMDtcclxuXHJcblx0XHRcdGxldCByaWdodEVkZ2UgPSByYWlsRWwuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuXHRcdFx0aWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcblxyXG5cdFx0XHRoYW5kbGVFbC5jdXJyZW50LnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuXHRcdFx0b25DaGFuZ2UoTWF0aC5yb3VuZChuZXdMZWZ0IC8gcmlnaHRFZGdlICogMTAwKSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcicpfT5cclxuXHRcdFx0PGRpdiByZWY9e3JhaWxFbH0gY2xhc3NOYW1lPXtjeCgncmFpbCcpfSBvbk1vdXNlRG93bj17ZSA9PiBoYW5kbGVSYWlsT25Nb3VzZURvd24oZSl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmFjaycpfSBzdHlsZT17e3dpZHRoOiBgJHtzbGlkZXJWYWx1ZX0lYH19Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHJlZj17aGFuZGxlRWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaGFuZGxlJyl9XHJcblx0XHRcdFx0cm9sZT0nc2xpZGVyJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtaW49JzAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1heD0nMTAwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVub3c9Jzc0J1xyXG5cdFx0XHRcdGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7bGVmdDogYCR7c2xpZGVyVmFsdWV9JWB9fVxyXG5cdFx0XHRcdG9uTW91c2VEb3duPXtlID0+IGhhbmRsZU9uTW91c2VEb3duKGUpfVxyXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0PXsoKSA9PiB7cmV0dXJuIGZhbHNlfX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3RlcCcpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFyaycpfS8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2N4KCdpbnB1dCcpfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShlKX0gdmFsdWU9e3NsaWRlclZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=