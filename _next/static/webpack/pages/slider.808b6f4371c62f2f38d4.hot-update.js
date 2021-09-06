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
      lineNumber: 89,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJoYW5kbGVFbCIsInVzZVJlZiIsInNsaWRlclZhbHVlIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0WCIsImNsaWVudFgiLCJ0aHVtYiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImV2ZW50IiwibmV3TGVmdCIsInNsaWRlciIsInJpZ2h0RWRnZSIsIm9mZnNldFdpZHRoIiwic3R5bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDBEQUFoQixDQUFYOztBQWNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BV007QUFBQTs7QUFBQSwyQkFUbkJDLFFBU21CO0FBQUEsTUFUbkJBLFFBU21CLDhCQVRULEtBU1M7QUFBQSxNQVJuQkMsS0FRbUIsUUFSbkJBLEtBUW1CO0FBQUEsTUFQbkJDLEdBT21CLFFBUG5CQSxHQU9tQjtBQUFBLE1BTm5CQyxHQU1tQixRQU5uQkEsR0FNbUI7QUFBQSxNQUxuQkMsS0FLbUIsUUFMbkJBLEtBS21CO0FBQUEsTUFKbkJDLGNBSW1CLFFBSm5CQSxjQUltQjtBQUFBLE1BSG5C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QUUsQ0FBQyxNQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkQsZUFtQkM7QUFBTyxVQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFTLEVBQUVBLEVBQUUsQ0FBQyxPQUFELENBQWxDO0FBQTZDLGNBQVEsRUFBRSxrQkFBQWtCLENBQUM7QUFBQSxlQUFJRCxjQUFjLENBQUNDLENBQUQsQ0FBbEI7QUFBQSxPQUF4RDtBQUErRSxXQUFLLEVBQUVGO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1QkEsQ0E1RUQ7O0dBQU1aLE07O0tBQUFBLE07QUE4RVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci44MDhiNmY0MzcxYzYyZjJmMzhkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJU2xpZGVyUHJvcHMge1xyXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHRtYXJrcz86IFJlY29yZDxudW1iZXIsIFJlYWN0Tm9kZSB8IHN0cmluZz47XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bWluOiBudW1iZXI7XHJcblx0cmFuZ2U/OiBib29sZWFuO1xyXG5cdHRvb2x0aXBWaXNpYmxlPzogYm9vbGVhbjtcclxuXHR2YWx1ZTogbnVtYmVyO1xyXG5cdG9uQWZ0ZXJDaGFuZ2U/OiAoKSA9PiB7fTtcclxuXHRvbkNoYW5nZT86ICh2YWx1ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgU2xpZGVyID0gKFxyXG5cdHtcclxuXHRcdGRpc2FibGVkPSBmYWxzZSxcclxuXHRcdG1hcmtzLFxyXG5cdFx0bWF4LFxyXG5cdFx0bWluLFxyXG5cdFx0cmFuZ2UsXHJcblx0XHR0b29sdGlwVmlzaWJsZSxcclxuXHRcdHZhbHVlLFxyXG5cdFx0b25BZnRlckNoYW5nZSxcclxuXHRcdG9uQ2hhbmdlXHJcblx0fTogSVNsaWRlclByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBzbGlkZXJWYWx1ZSA9IHZhbHVlIDw9IG1pbiA/IG1pbiA6IHZhbHVlID49IG1heCA/IG1heCA6IHZhbHVlO1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRvbkFmdGVyQ2hhbmdlICYmIG9uQWZ0ZXJDaGFuZ2UoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbk1vdXNlRG93biA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IHNoaWZ0WCA9IGUuY2xpZW50WCAtIHRodW1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblx0XHQvLyBzaGlmdFkgbm90IG5lZWRlZCwgdGhlIHRodW1iIG1vdmVzIG9ubHkgaG9yaXpvbnRhbGx5XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHRcdFx0bGV0IG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnRYIC0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblxyXG5cdFx0XHQvLyB0aGUgcG9pbnRlciBpcyBvdXQgb2Ygc2xpZGVyID0+IGxvY2sgdGhlIHRodW1iIHdpdGhpbiB0aGUgYm91bmFyaWVzXHJcblx0XHRcdGlmIChuZXdMZWZ0IDwgMCkge1xyXG5cdFx0XHRcdG5ld0xlZnQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCByaWdodEVkZ2UgPSBzbGlkZXIub2Zmc2V0V2lkdGggLSB0aHVtYi5vZmZzZXRXaWR0aDtcclxuXHRcdFx0aWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuXHRcdFx0XHRuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aHVtYi5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncmFpbCcpfS8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3RyYWNrJyl9IHN0eWxlPXt7d2lkdGg6IGAke3NsaWRlclZhbHVlfSVgfX0vPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaGFuZGxlJyl9XHJcblx0XHRcdFx0cm9sZT0nc2xpZGVyJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtaW49JzAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1heD0nMTAwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVub3c9Jzc0J1xyXG5cdFx0XHRcdGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7bGVmdDogYCR7c2xpZGVyVmFsdWV9JWB9fVxyXG5cdFx0XHRcdG9uTW91c2VEb3duPXtlID0+IGhhbmRsZU9uTW91c2VEb3duKGUpfVxyXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0PXsoKSA9PiB7cmV0dXJuIGZhbHNlfX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3RlcCcpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFyaycpfS8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2N4KCdpbnB1dCcpfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShlKX0gdmFsdWU9e3NsaWRlclZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=