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
    e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJzbGlkZXJWYWx1ZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZU9uTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJzaGlmdFgiLCJjbGllbnRYIiwidGh1bWIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJldmVudCIsIm5ld0xlZnQiLCJzbGlkZXIiLCJyaWdodEVkZ2UiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FXTTtBQUFBLDJCQVRuQkMsUUFTbUI7QUFBQSxNQVRuQkEsUUFTbUIsOEJBVFQsS0FTUztBQUFBLE1BUm5CQyxLQVFtQixRQVJuQkEsS0FRbUI7QUFBQSxNQVBuQkMsR0FPbUIsUUFQbkJBLEdBT21CO0FBQUEsTUFObkJDLEdBTW1CLFFBTm5CQSxHQU1tQjtBQUFBLE1BTG5CQyxLQUttQixRQUxuQkEsS0FLbUI7QUFBQSxNQUpuQkMsY0FJbUIsUUFKbkJBLGNBSW1CO0FBQUEsTUFIbkJDLEtBR21CLFFBSG5CQSxLQUdtQjtBQUFBLE1BRm5CQyxh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QVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBNkMsY0FBUSxFQUFFLGtCQUFBZ0IsQ0FBQztBQUFBLGVBQUlELGNBQWMsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLE9BQXhEO0FBQStFLFdBQUssRUFBRUY7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQTFFRDs7S0FBTVYsTTtBQTRFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmExOTk3MjAxNTE4Njg1YzcxZjhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIElTbGlkZXJQcm9wcyB7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdG1hcmtzPzogUmVjb3JkPG51bWJlciwgUmVhY3ROb2RlIHwgc3RyaW5nPjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtaW46IG51bWJlcjtcclxuXHRyYW5nZT86IGJvb2xlYW47XHJcblx0dG9vbHRpcFZpc2libGU/OiBib29sZWFuO1xyXG5cdHZhbHVlOiBudW1iZXI7XHJcblx0b25BZnRlckNoYW5nZT86ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlPzogKHZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoXHJcblx0e1xyXG5cdFx0ZGlzYWJsZWQ9IGZhbHNlLFxyXG5cdFx0bWFya3MsXHJcblx0XHRtYXgsXHJcblx0XHRtaW4sXHJcblx0XHRyYW5nZSxcclxuXHRcdHRvb2x0aXBWaXNpYmxlLFxyXG5cdFx0dmFsdWUsXHJcblx0XHRvbkFmdGVyQ2hhbmdlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3Qgc2xpZGVyVmFsdWUgPSB2YWx1ZSA8PSBtaW4gPyBtaW4gOiB2YWx1ZSA+PSBtYXggPyBtYXggOiB2YWx1ZTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0b25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0b25BZnRlckNoYW5nZSAmJiBvbkFmdGVyQ2hhbmdlKCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT25Nb3VzZURvd24gPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGxldCBzaGlmdFggPSBlLmNsaWVudFggLSB0aHVtYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cdFx0Ly8gc2hpZnRZIG5vdCBuZWVkZWQsIHRoZSB0aHVtYiBtb3ZlcyBvbmx5IGhvcml6b250YWxseVxyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcblx0XHRcdGxldCBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0WCAtIHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cclxuXHRcdFx0Ly8gdGhlIHBvaW50ZXIgaXMgb3V0IG9mIHNsaWRlciA9PiBsb2NrIHRoZSB0aHVtYiB3aXRoaW4gdGhlIGJvdW5hcmllc1xyXG5cdFx0XHRpZiAobmV3TGVmdCA8IDApIHtcclxuXHRcdFx0XHRuZXdMZWZ0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgcmlnaHRFZGdlID0gc2xpZGVyLm9mZnNldFdpZHRoIC0gdGh1bWIub2Zmc2V0V2lkdGg7XHJcblx0XHRcdGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcblx0XHRcdFx0bmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGh1bWIuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3JhaWwnKX0vPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmFjaycpfSBzdHlsZT17e3dpZHRoOiBgJHtzbGlkZXJWYWx1ZX0lYH19Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2hhbmRsZScpfVxyXG5cdFx0XHRcdHJvbGU9J3NsaWRlcidcclxuXHRcdFx0XHRkYXRhLXZhbHVlbWluPScwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtYXg9JzEwMCdcclxuXHRcdFx0XHRkYXRhLXZhbHVlbm93PSc3NCdcclxuXHRcdFx0XHRhcmlhLWRpc2FibGVkPSdmYWxzZSdcclxuXHRcdFx0XHRzdHlsZT17e2xlZnQ6IGAke3NsaWRlclZhbHVlfSVgfX1cclxuXHRcdFx0XHRvbk1vdXNlRG93bj17ZSA9PiBoYW5kbGVPbk1vdXNlRG93bihlKX1cclxuXHRcdFx0XHRvbkRyYWdTdGFydD17KCkgPT4ge3JldHVybiBmYWxzZX19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N0ZXAnKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ21hcmsnKX0vPlxyXG5cclxuXHRcdFx0PGlucHV0IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPXtjeCgnaW5wdXQnKX0gb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25DaGFuZ2UoZSl9IHZhbHVlPXtzbGlkZXJWYWx1ZX0vPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9