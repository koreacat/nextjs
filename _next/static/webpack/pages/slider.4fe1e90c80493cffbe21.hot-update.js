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
      className: cx('rail')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('track'),
      style: {
        width: "".concat(sliderValue, "%")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('step')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('mark')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 86,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJyYWlsRWwiLCJ1c2VSZWYiLCJoYW5kbGVFbCIsInNsaWRlclZhbHVlIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInNoaWZ0WCIsImNsaWVudFgiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIm9uTW91c2VVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsIk1hdGgiLCJyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FXTTtBQUFBOztBQUFBLDJCQVRuQkMsUUFTbUI7QUFBQSxNQVRuQkEsUUFTbUIsOEJBVFQsS0FTUztBQUFBLE1BUm5CQyxLQVFtQixRQVJuQkEsS0FRbUI7QUFBQSxNQVBuQkMsR0FPbUIsUUFQbkJBLEdBT21CO0FBQUEsTUFObkJDLEdBTW1CLFFBTm5CQSxHQU1tQjtBQUFBLE1BTG5CQyxLQUttQixRQUxuQkEsS0FLbUI7QUFBQSxNQUpuQkMsY0FJbUIsUUFKbkJB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LGlCQUFpQixDQUFDRixDQUFELENBQXJCO0FBQUEsT0FUZjtBQVVDLGlCQUFXLEVBQUUsdUJBQU07QUFBQyxlQUFPLEtBQVA7QUFBYTtBQVZsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQsZUFnQkM7QUFBSyxlQUFTLEVBQUVuQixFQUFFLENBQUMsTUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJELGVBaUJDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsTUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJELGVBbUJDO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBUyxFQUFFQSxFQUFFLENBQUMsT0FBRCxDQUFsQztBQUE2QyxjQUFRLEVBQUUsa0JBQUFtQixDQUFDO0FBQUEsZUFBSUQsY0FBYyxDQUFDQyxDQUFELENBQWxCO0FBQUEsT0FBeEQ7QUFBK0UsV0FBSyxFQUFFRjtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBdUJBLENBdEVEOztHQUFNYixNOztLQUFBQSxNO0FBd0VTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuNGZlMWU5MGM4MDQ5M2NmZmJlMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSVNsaWRlclByb3BzIHtcclxuXHRkaXNhYmxlZD86IGJvb2xlYW47XHJcblx0bWFya3M/OiBSZWNvcmQ8bnVtYmVyLCBSZWFjdE5vZGUgfCBzdHJpbmc+O1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHJhbmdlPzogYm9vbGVhbjtcclxuXHR0b29sdGlwVmlzaWJsZT86IGJvb2xlYW47XHJcblx0dmFsdWU6IG51bWJlcjtcclxuXHRvbkFmdGVyQ2hhbmdlPzogKCkgPT4ge307XHJcblx0b25DaGFuZ2U/OiAodmFsdWUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlciA9IChcclxuXHR7XHJcblx0XHRkaXNhYmxlZD0gZmFsc2UsXHJcblx0XHRtYXJrcyxcclxuXHRcdG1heCxcclxuXHRcdG1pbixcclxuXHRcdHJhbmdlLFxyXG5cdFx0dG9vbHRpcFZpc2libGUsXHJcblx0XHR2YWx1ZSxcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UsXHJcblx0XHRvbkNoYW5nZVxyXG5cdH06IElTbGlkZXJQcm9wcykgPT4ge1xyXG5cclxuXHRjb25zdCByYWlsRWwgPSB1c2VSZWYobnVsbCk7XHJcblx0Y29uc3QgaGFuZGxlRWwgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbnN0IHNsaWRlclZhbHVlID0gdmFsdWUgPD0gbWluID8gbWluIDogdmFsdWUgPj0gbWF4ID8gbWF4IDogdmFsdWU7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UgJiYgb25BZnRlckNoYW5nZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uTW91c2VEb3duID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHNoaWZ0WCA9IGUuY2xpZW50WCAtIGhhbmRsZUVsLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuXHJcblx0XHRjb25zdCBvbk1vdXNlVXAgPSAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0WCAtIHJhaWxFbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblx0XHRcdGlmIChuZXdMZWZ0IDwgMCkgbmV3TGVmdCA9IDA7XHJcblxyXG5cdFx0XHRsZXQgcmlnaHRFZGdlID0gcmFpbEVsLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcblx0XHRcdGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG5cclxuXHRcdFx0aGFuZGxlRWwuY3VycmVudC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcblx0XHRcdG9uQ2hhbmdlKE1hdGgucm91bmQobmV3TGVmdCAvIHJpZ2h0RWRnZSAqIDEwMCkpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzbGlkZXInKX0+XHJcblx0XHRcdDxkaXYgcmVmPXtyYWlsRWx9IGNsYXNzTmFtZT17Y3goJ3JhaWwnKX0vPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3RyYWNrJyl9IHN0eWxlPXt7d2lkdGg6IGAke3NsaWRlclZhbHVlfSVgfX0vPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0cmVmPXtoYW5kbGVFbH1cclxuXHRcdFx0XHRjbGFzc05hbWU9e2N4KCdoYW5kbGUnKX1cclxuXHRcdFx0XHRyb2xlPSdzbGlkZXInXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1pbj0nMCdcclxuXHRcdFx0XHRkYXRhLXZhbHVlbWF4PScxMDAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW5vdz0nNzQnXHJcblx0XHRcdFx0YXJpYS1kaXNhYmxlZD0nZmFsc2UnXHJcblx0XHRcdFx0c3R5bGU9e3tsZWZ0OiBgJHtzbGlkZXJWYWx1ZX0lYH19XHJcblx0XHRcdFx0b25Nb3VzZURvd249e2UgPT4gaGFuZGxlT25Nb3VzZURvd24oZSl9XHJcblx0XHRcdFx0b25EcmFnU3RhcnQ9eygpID0+IHtyZXR1cm4gZmFsc2V9fVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdGVwJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdtYXJrJyl9Lz5cclxuXHJcblx0XHRcdDxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT17Y3goJ2lucHV0Jyl9IG9uQ2hhbmdlPXtlID0+IGhhbmRsZU9uQ2hhbmdlKGUpfSB2YWx1ZT17c2xpZGVyVmFsdWV9Lz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==