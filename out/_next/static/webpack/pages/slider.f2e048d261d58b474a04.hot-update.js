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
      onChange = _ref.onChange;
  var railEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var handleEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var sliderValue = value <= min ? min : value >= max ? max : value;

  var handleRailOnMouseDown = function handleRailOnMouseDown(e) {
    var newLeft = e.clientX - railEl.current.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    var rightEdge = railEl.current.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;
    onChange(Math.round(newLeft / rightEdge * 100));
  };

  var handleOnChange = function handleOnChange(e) {
    onChange(e.target.value);
  };

  var handleOnMouseDown = function handleOnMouseDown(e) {
    e.preventDefault();
    var shiftX = e.clientX - handleEl.current.getBoundingClientRect().left;

    var onMouseUp = function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };

    var onMouseMove = function onMouseMove(e) {
      var newLeft = e.clientX - shiftX - railEl.current.getBoundingClientRect().left;
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
      lineNumber: 76,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('track'),
      style: {
        width: "".concat(sliderValue, "%")
      },
      onMouseDown: function onMouseDown(e) {
        return handleRailOnMouseDown(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkNoYW5nZSIsInJhaWxFbCIsInVzZVJlZiIsImhhbmRsZUVsIiwic2xpZGVyVmFsdWUiLCJoYW5kbGVSYWlsT25Nb3VzZURvd24iLCJlIiwibmV3TGVmdCIsImNsaWVudFgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInJpZ2h0RWRnZSIsIm9mZnNldFdpZHRoIiwiTWF0aCIsInJvdW5kIiwiaGFuZGxlT25DaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVPbk1vdXNlRG93biIsInByZXZlbnREZWZhdWx0Iiwic2hpZnRYIiwib25Nb3VzZVVwIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FVTTtBQUFBOztBQUFBLDJCQVJuQkMsUUFRbUI7QUFBQSxNQVJuQkEsUUFRbUIsOEJBUlQsS0FRUztBQUFBLE1BUG5CQyxLQU9tQixRQVBuQkEsS0FPbUI7QUFBQSxNQU5uQkMsR0FNbUIsUUFObkJBLEdBTW1CO0FBQUEsTUFMbkJDLEdBS21CLFFBTG5CQSxHQUttQjtBQUFBLE1BSm5CQyxLQUltQixRQUpuQkEsS0FJbUI7QUFBQSxNQUhuQkMsY0FHbUIsUUFIbkJB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1QkEsQ0E5RUQ7O0dBQU1aLE07O0tBQUFBLE07QUFnRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci5mMmUwNDhkMjYxZDU4YjQ3NGEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmludGVyZmFjZSBJU2xpZGVyUHJvcHMge1xyXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHRtYXJrcz86IFJlY29yZDxudW1iZXIsIFJlYWN0Tm9kZSB8IHN0cmluZz47XHJcblx0bWF4OiBudW1iZXI7XHJcblx0bWluOiBudW1iZXI7XHJcblx0cmFuZ2U/OiBib29sZWFuO1xyXG5cdHRvb2x0aXBWaXNpYmxlPzogYm9vbGVhbjtcclxuXHR2YWx1ZTogbnVtYmVyO1xyXG5cdG9uQWZ0ZXJDaGFuZ2U/OiAoKSA9PiB7fTtcclxuXHRvbkNoYW5nZT86ICh2YWx1ZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgU2xpZGVyID0gKFxyXG5cdHtcclxuXHRcdGRpc2FibGVkPSBmYWxzZSxcclxuXHRcdG1hcmtzLFxyXG5cdFx0bWF4LFxyXG5cdFx0bWluLFxyXG5cdFx0cmFuZ2UsXHJcblx0XHR0b29sdGlwVmlzaWJsZSxcclxuXHRcdHZhbHVlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgcmFpbEVsID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGhhbmRsZUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBzbGlkZXJWYWx1ZSA9IHZhbHVlIDw9IG1pbiA/IG1pbiA6IHZhbHVlID49IG1heCA/IG1heCA6IHZhbHVlO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSYWlsT25Nb3VzZURvd24gPSAoZSkgPT4ge1xyXG5cdFx0bGV0IG5ld0xlZnQgPSBlLmNsaWVudFggLSByYWlsRWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cdFx0aWYgKG5ld0xlZnQgPCAwKSBuZXdMZWZ0ID0gMDtcclxuXHJcblx0XHRsZXQgcmlnaHRFZGdlID0gcmFpbEVsLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcblx0XHRpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuXHJcblx0XHRvbkNoYW5nZShNYXRoLnJvdW5kKG5ld0xlZnQgLyByaWdodEVkZ2UgKiAxMDApKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT25Nb3VzZURvd24gPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3Qgc2hpZnRYID0gZS5jbGllbnRYIC0gaGFuZGxlRWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cclxuXHRcdGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xyXG5cdFx0XHRsZXQgbmV3TGVmdCA9IGUuY2xpZW50WCAtIHNoaWZ0WCAtIHJhaWxFbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblx0XHRcdGlmIChuZXdMZWZ0IDwgMCkgbmV3TGVmdCA9IDA7XHJcblxyXG5cdFx0XHRsZXQgcmlnaHRFZGdlID0gcmFpbEVsLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcblx0XHRcdGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG5cclxuXHRcdFx0aGFuZGxlRWwuY3VycmVudC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcblx0XHRcdG9uQ2hhbmdlKE1hdGgucm91bmQobmV3TGVmdCAvIHJpZ2h0RWRnZSAqIDEwMCkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdDxkaXYgcmVmPXtyYWlsRWx9IGNsYXNzTmFtZT17Y3goJ3JhaWwnKX0gb25Nb3VzZURvd249e2UgPT4gaGFuZGxlUmFpbE9uTW91c2VEb3duKGUpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgndHJhY2snKX0gc3R5bGU9e3t3aWR0aDogYCR7c2xpZGVyVmFsdWV9JWB9fSBvbk1vdXNlRG93bj17ZSA9PiBoYW5kbGVSYWlsT25Nb3VzZURvd24oZSl9Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHJlZj17aGFuZGxlRWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaGFuZGxlJyl9XHJcblx0XHRcdFx0cm9sZT0nc2xpZGVyJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtaW49JzAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1heD0nMTAwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVub3c9Jzc0J1xyXG5cdFx0XHRcdGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7bGVmdDogYCR7c2xpZGVyVmFsdWV9JWB9fVxyXG5cdFx0XHRcdG9uTW91c2VEb3duPXtlID0+IGhhbmRsZU9uTW91c2VEb3duKGUpfVxyXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0PXsoKSA9PiB7cmV0dXJuIGZhbHNlfX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3RlcCcpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFyaycpfS8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2N4KCdpbnB1dCcpfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShlKX0gdmFsdWU9e3NsaWRlclZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=