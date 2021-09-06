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

  var handleOnChange = function handleOnChange(e) {
    onChange(e.target.value);
    onAfterChange && onAfterChange();
  };

  var handleOnMouseDown = function handleOnMouseDown(e) {
    e.preventDefault();
    var shiftX = e.clientX - handleEl.current.getBoundingClientRect().left; // shiftY not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left; // the pointer is out of slider => lock the thumb within the bounaries

      if (newLeft < 0) {
        newLeft = 0;
      }

      var rightEdge = slider.offsetWidth - handleEl.current.offsetWidth;

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      handleEl.current.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('slider'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: railEl,
      className: cx('rail')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('track'),
      style: {
        width: "".concat(sliderValue, "%")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('step')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 94,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJyYWlsRWwiLCJ1c2VSZWYiLCJoYW5kbGVFbCIsInNsaWRlclZhbHVlIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0WCIsImNsaWVudFgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiZXZlbnQiLCJuZXdMZWZ0Iiwic2xpZGVyIiwicmlnaHRFZGdlIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FXTTtBQUFBOztBQUFBLDJCQVRuQkMsUUFTbUI7QUFBQSxNQVRuQkEsUUFTbUIsOEJBVFQsS0FTUztBQUFBLE1BUm5CQyxLQVFtQixRQVJuQkEsS0FRbUI7QUFBQSxNQVBuQkMsR0FPbUIsUUFQbkJBLEdBT21CO0FBQUEsTUFObkJDLEdBTW1CLFFBTm5CQSxHQU1tQjtBQUFBLE1BTG5CQyxLQUttQixRQUxuQkEsS0FLbUI7QUFBQSxNQUpuQkMsY0FJbUIsUUFKbkJBLGNBSW1C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ZUFBTyxLQUFQO0FBQWE7QUFWbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELGVBZ0JDO0FBQUssZUFBUyxFQUFFbkIsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRCxlQWlCQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRCxlQW1CQztBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBNkMsY0FBUSxFQUFFLGtCQUFBbUIsQ0FBQztBQUFBLGVBQUlELGNBQWMsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLE9BQXhEO0FBQStFLFdBQUssRUFBRUY7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQTlFRDs7R0FBTWIsTTs7S0FBQUEsTTtBQWdGU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmY5NjA1ZjlkYzU1ODc0NWU1OGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIElTbGlkZXJQcm9wcyB7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdG1hcmtzPzogUmVjb3JkPG51bWJlciwgUmVhY3ROb2RlIHwgc3RyaW5nPjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtaW46IG51bWJlcjtcclxuXHRyYW5nZT86IGJvb2xlYW47XHJcblx0dG9vbHRpcFZpc2libGU/OiBib29sZWFuO1xyXG5cdHZhbHVlOiBudW1iZXI7XHJcblx0b25BZnRlckNoYW5nZT86ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlPzogKHZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoXHJcblx0e1xyXG5cdFx0ZGlzYWJsZWQ9IGZhbHNlLFxyXG5cdFx0bWFya3MsXHJcblx0XHRtYXgsXHJcblx0XHRtaW4sXHJcblx0XHRyYW5nZSxcclxuXHRcdHRvb2x0aXBWaXNpYmxlLFxyXG5cdFx0dmFsdWUsXHJcblx0XHRvbkFmdGVyQ2hhbmdlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgcmFpbEVsID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGhhbmRsZUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBzbGlkZXJWYWx1ZSA9IHZhbHVlIDw9IG1pbiA/IG1pbiA6IHZhbHVlID49IG1heCA/IG1heCA6IHZhbHVlO1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRvbkFmdGVyQ2hhbmdlICYmIG9uQWZ0ZXJDaGFuZ2UoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbk1vdXNlRG93biA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuXHRcdGxldCBzaGlmdFggPSBlLmNsaWVudFggLSBoYW5kbGVFbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblx0XHQvLyBzaGlmdFkgbm90IG5lZWRlZCwgdGhlIHRodW1iIG1vdmVzIG9ubHkgaG9yaXpvbnRhbGx5XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHRcdFx0bGV0IG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnRYIC0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblxyXG5cdFx0XHQvLyB0aGUgcG9pbnRlciBpcyBvdXQgb2Ygc2xpZGVyID0+IGxvY2sgdGhlIHRodW1iIHdpdGhpbiB0aGUgYm91bmFyaWVzXHJcblx0XHRcdGlmIChuZXdMZWZ0IDwgMCkge1xyXG5cdFx0XHRcdG5ld0xlZnQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCByaWdodEVkZ2UgPSBzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kbGVFbC5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG5cdFx0XHRpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG5cdFx0XHRcdG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGhhbmRsZUVsLmN1cnJlbnQuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHQ8ZGl2IHJlZj17cmFpbEVsfSBjbGFzc05hbWU9e2N4KCdyYWlsJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmFjaycpfSBzdHlsZT17e3dpZHRoOiBgJHtzbGlkZXJWYWx1ZX0lYH19Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHJlZj17aGFuZGxlRWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaGFuZGxlJyl9XHJcblx0XHRcdFx0cm9sZT0nc2xpZGVyJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtaW49JzAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1heD0nMTAwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVub3c9Jzc0J1xyXG5cdFx0XHRcdGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7bGVmdDogYCR7c2xpZGVyVmFsdWV9JWB9fVxyXG5cdFx0XHRcdG9uTW91c2VEb3duPXtlID0+IGhhbmRsZU9uTW91c2VEb3duKGUpfVxyXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0PXsoKSA9PiB7cmV0dXJuIGZhbHNlfX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3RlcCcpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFyaycpfS8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2N4KCdpbnB1dCcpfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShlKX0gdmFsdWU9e3NsaWRlclZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=