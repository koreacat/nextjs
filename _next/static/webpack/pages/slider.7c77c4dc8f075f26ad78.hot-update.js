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
  var handleEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
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
      lineNumber: 74,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('track'),
      style: {
        width: "".concat(sliderValue, "%")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('step')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 93,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 3
  }, _this);
};

_s(Slider, "aBHYpv1vd/an91Wgg9odA/6zzpo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJoYW5kbGVFbCIsInVzZVJlZiIsInNsaWRlclZhbHVlIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0WCIsImNsaWVudFgiLCJ0aHVtYiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImV2ZW50IiwibmV3TGVmdCIsInNsaWRlciIsInJpZ2h0RWRnZSIsIm9mZnNldFdpZHRoIiwic3R5bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYOztBQWNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BV007QUFBQTs7QUFBQSwyQkFUbkJDLFFBU21CO0FBQUEsTUFUbkJBLFFBU21CLDhCQVRULEtBU1M7QUFBQSxNQVJuQkMsS0FRbUIsUUFSbkJBLEtBUW1CO0FBQUEsTUFQbkJDLEdBT21CLFFBUG5CQSxHQU9tQjtBQUFBLE1BTm5CQyxHQU1tQixRQU5uQkEsR0FNbUI7QUFBQSxNQUxuQkMsS0FLbUIsUUFMbkJBLEtBS21CO0FBQUEsTUFKbkJDLGNBSW1CLFFBSm5CQSxjQUltQjtBQUFBLE1BSG5C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QztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRCxlQW9CQztBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBNkMsY0FBUSxFQUFFLGtCQUFBa0IsQ0FBQztBQUFBLGVBQUlELGNBQWMsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLE9BQXhEO0FBQStFLFdBQUssRUFBRUY7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXdCQSxDQTdFRDs7R0FBTVosTTs7S0FBQUEsTTtBQStFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLjdjNzdjNGRjOGYwNzVmMjZhZDc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIElTbGlkZXJQcm9wcyB7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdG1hcmtzPzogUmVjb3JkPG51bWJlciwgUmVhY3ROb2RlIHwgc3RyaW5nPjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtaW46IG51bWJlcjtcclxuXHRyYW5nZT86IGJvb2xlYW47XHJcblx0dG9vbHRpcFZpc2libGU/OiBib29sZWFuO1xyXG5cdHZhbHVlOiBudW1iZXI7XHJcblx0b25BZnRlckNoYW5nZT86ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlPzogKHZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoXHJcblx0e1xyXG5cdFx0ZGlzYWJsZWQ9IGZhbHNlLFxyXG5cdFx0bWFya3MsXHJcblx0XHRtYXgsXHJcblx0XHRtaW4sXHJcblx0XHRyYW5nZSxcclxuXHRcdHRvb2x0aXBWaXNpYmxlLFxyXG5cdFx0dmFsdWUsXHJcblx0XHRvbkFmdGVyQ2hhbmdlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgaGFuZGxlRWwgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbnN0IHNsaWRlclZhbHVlID0gdmFsdWUgPD0gbWluID8gbWluIDogdmFsdWUgPj0gbWF4ID8gbWF4IDogdmFsdWU7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UgJiYgb25BZnRlckNoYW5nZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uTW91c2VEb3duID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRsZXQgc2hpZnRYID0gZS5jbGllbnRYIC0gdGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuXHRcdC8vIHNoaWZ0WSBub3QgbmVlZGVkLCB0aGUgdGh1bWIgbW92ZXMgb25seSBob3Jpem9udGFsbHlcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHJcblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG5cdFx0XHRsZXQgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdFggLSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuXHJcblx0XHRcdC8vIHRoZSBwb2ludGVyIGlzIG91dCBvZiBzbGlkZXIgPT4gbG9jayB0aGUgdGh1bWIgd2l0aGluIHRoZSBib3VuYXJpZXNcclxuXHRcdFx0aWYgKG5ld0xlZnQgPCAwKSB7XHJcblx0XHRcdFx0bmV3TGVmdCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHJpZ2h0RWRnZSA9IHNsaWRlci5vZmZzZXRXaWR0aCAtIHRodW1iLm9mZnNldFdpZHRoO1xyXG5cdFx0XHRpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG5cdFx0XHRcdG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRodW1iLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3NsaWRlcicpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdyYWlsJyl9Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgndHJhY2snKX0gc3R5bGU9e3t3aWR0aDogYCR7c2xpZGVyVmFsdWV9JWB9fS8+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRyZWY9e2hhbmRsZUVsfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goJ2hhbmRsZScpfVxyXG5cdFx0XHRcdHJvbGU9J3NsaWRlcidcclxuXHRcdFx0XHRkYXRhLXZhbHVlbWluPScwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtYXg9JzEwMCdcclxuXHRcdFx0XHRkYXRhLXZhbHVlbm93PSc3NCdcclxuXHRcdFx0XHRhcmlhLWRpc2FibGVkPSdmYWxzZSdcclxuXHRcdFx0XHRzdHlsZT17e2xlZnQ6IGAke3NsaWRlclZhbHVlfSVgfX1cclxuXHRcdFx0XHRvbk1vdXNlRG93bj17ZSA9PiBoYW5kbGVPbk1vdXNlRG93bihlKX1cclxuXHRcdFx0XHRvbkRyYWdTdGFydD17KCkgPT4ge3JldHVybiBmYWxzZX19XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3N0ZXAnKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ21hcmsnKX0vPlxyXG5cclxuXHRcdFx0PGlucHV0IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPXtjeCgnaW5wdXQnKX0gb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25DaGFuZ2UoZSl9IHZhbHVlPXtzbGlkZXJWYWx1ZX0vPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9