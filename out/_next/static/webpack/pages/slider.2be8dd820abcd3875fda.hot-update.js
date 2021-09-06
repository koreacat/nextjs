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
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.module.scss */ "./src/components/common/slider/slider.module.scss");
/* harmony import */ var _slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\common\\slider\\index.tsx",
    _this = undefined;



var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_slider_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a);

var Slider = function Slider(_ref) {
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
  var sliderValue = value <= min ? min : value >= max ? max : value;

  var handleOnChange = function handleOnChange(e) {
    onChange(e.target.value);
    onAfterChange && onAfterChange();
  };

  var handleOnMouseDown = function handleOnMouseDown(e) {
    e.preventDefault(); // prevent selection start (browser action)

    var shiftX = e.clientX - thumb.getBoundingClientRect().left; // shiftY not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left; // the pointer is out of slider => lock the thumb within the bounaries

      if (newLeft < 0) {
        newLeft = 0;
      }

      var rightEdge = slider.offsetWidth - thumb.offsetWidth;

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('slider'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('rail')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 87,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 90,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 3
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJzbGlkZXJWYWx1ZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZU9uTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJzaGlmdFgiLCJjbGllbnRYIiwidGh1bWIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJldmVudCIsIm5ld0xlZnQiLCJzbGlkZXIiLCJyaWdodEVkZ2UiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FXTTtBQUFBLDJCQVRuQkMsUUFTbUI7QUFBQSxNQVRuQkEsUUFTbUIsOEJBVFQsS0FTUztBQUFBLE1BUm5CQyxLQVFtQixRQVJuQkEsS0FRbUI7QUFBQSxNQVBuQkMsR0FPbUIsUUFQbkJBLEdBT21CO0FBQUEsTUFObkJDLEdBTW1CLFFBTm5CQSxHQU1tQjtBQUFBLE1BTG5CQyxLQUttQixRQUxuQkEsS0FLbUI7QUFBQSxNQUpuQkMsY0FJbUIsUUFKbkJBLGNBSW1CO0FBQUEsTUFIbkJDLEtBR21CLFFBSG5CQSxLQUdtQjtBQUFBLE1BRm5CQyxh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UUFBWjtBQUFxQixlQUFTLEVBQUVBLEVBQUUsQ0FBQyxPQUFELENBQWxDO0FBQTZDLGNBQVEsRUFBRSxrQkFBQWdCLENBQUM7QUFBQSxlQUFJRCxjQUFjLENBQUNDLENBQUQsQ0FBbEI7QUFBQSxPQUF4RDtBQUErRSxXQUFLLEVBQUVGO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1QkEsQ0ExRUQ7O0tBQU1WLE07QUE0RVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci4yYmU4ZGQ4MjBhYmNkMzg3NWZkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJU2xpZGVyUHJvcHMge1xyXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHRtYXJrcz86IFJlY29yZDxudW1iZXIsIFJlYWN0Tm9kZSB8IHN0cmluZz47XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bWluOiBudW1iZXI7XHJcblx0cmFuZ2U/OiBib29sZWFuO1xyXG5cdHRvb2x0aXBWaXNpYmxlPzogYm9vbGVhbjtcclxuXHR2YWx1ZTogbnVtYmVyO1xyXG5cdG9uQWZ0ZXJDaGFuZ2U/OiAoKSA9PiB7fTtcclxuXHRvbkNoYW5nZT86ICh2YWx1ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgU2xpZGVyID0gKFxyXG5cdHtcclxuXHRcdGRpc2FibGVkPSBmYWxzZSxcclxuXHRcdG1hcmtzLFxyXG5cdFx0bWF4LFxyXG5cdFx0bWluLFxyXG5cdFx0cmFuZ2UsXHJcblx0XHR0b29sdGlwVmlzaWJsZSxcclxuXHRcdHZhbHVlLFxyXG5cdFx0b25BZnRlckNoYW5nZSxcclxuXHRcdG9uQ2hhbmdlXHJcblx0fTogSVNsaWRlclByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IHNsaWRlclZhbHVlID0gdmFsdWUgPD0gbWluID8gbWluIDogdmFsdWUgPj0gbWF4ID8gbWF4IDogdmFsdWU7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UgJiYgb25BZnRlckNoYW5nZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uTW91c2VEb3duID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBzZWxlY3Rpb24gc3RhcnQgKGJyb3dzZXIgYWN0aW9uKVxyXG5cclxuXHRcdGxldCBzaGlmdFggPSBlLmNsaWVudFggLSB0aHVtYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cdFx0Ly8gc2hpZnRZIG5vdCBuZWVkZWQsIHRoZSB0aHVtYiBtb3ZlcyBvbmx5IGhvcml6b250YWxseVxyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcblx0XHRcdGxldCBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0WCAtIHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cclxuXHRcdFx0Ly8gdGhlIHBvaW50ZXIgaXMgb3V0IG9mIHNsaWRlciA9PiBsb2NrIHRoZSB0aHVtYiB3aXRoaW4gdGhlIGJvdW5hcmllc1xyXG5cdFx0XHRpZiAobmV3TGVmdCA8IDApIHtcclxuXHRcdFx0XHRuZXdMZWZ0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmlnaHRFZGdlID0gc2xpZGVyLm9mZnNldFdpZHRoIC0gdGh1bWIub2Zmc2V0V2lkdGg7XHJcblx0XHRcdGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcblx0XHRcdFx0bmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGh1bWIuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3JhaWwnKX0vPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmFjaycpfSBzdHlsZT17e3dpZHRoOiBgJHtzbGlkZXJWYWx1ZX0lYH19Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2hhbmRsZScpfVxyXG5cdFx0XHRcdHJvbGU9J3NsaWRlcidcclxuXHRcdFx0XHRkYXRhLXZhbHVlbWluPScwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtYXg9JzEwMCdcclxuXHRcdFx0XHRkYXRhLXZhbHVlbm93PSc3NCdcclxuXHRcdFx0XHRhcmlhLWRpc2FibGVkPSdmYWxzZSdcclxuXHRcdFx0XHRzdHlsZT17e2xlZnQ6IGAke3NsaWRlclZhbHVlfSVgfX1cclxuXHRcdFx0XHRvbk1vdXNlRG93bj17ZSA9PiBoYW5kbGVPbk1vdXNlRG93bihlKX1cclxuXHRcdFx0XHRvbkRyYWdTdGFydD17KCkgPT4ge3JldHVybiBmYWxzZX19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N0ZXAnKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ21hcmsnKX0vPlxyXG5cclxuXHRcdFx0PGlucHV0IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPXtjeCgnaW5wdXQnKX0gb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25DaGFuZ2UoZSl9IHZhbHVlPXtzbGlkZXJWYWx1ZX0vPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9