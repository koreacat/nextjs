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
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    var shiftX = e.clientX - handleEl.current.getBoundingClientRect().left;

    function onMouseMove(event) {
      var newLeft = event.clientX - shiftX - railEl.current.getBoundingClientRect().left;
      if (newLeft < 0) newLeft = 0;
      var rightEdge = railEl.current.offsetWidth;
      if (newLeft > rightEdge) newLeft = rightEdge;
      handleEl.current.style.left = newLeft + 'px';
      onChange(newLeft / rightEdge * 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJyYWlsRWwiLCJ1c2VSZWYiLCJoYW5kbGVFbCIsInNsaWRlclZhbHVlIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwic2hpZnRYIiwiY2xpZW50WCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiZXZlbnQiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsMERBQWhCLENBQVg7O0FBY0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FXTTtBQUFBOztBQUFBLDJCQVRuQkMsUUFTbUI7QUFBQSxNQVRuQkEsUUFTbUIsOEJBVFQsS0FTUztBQUFBLE1BUm5CQyxLQVFtQixRQVJuQkEsS0FRbUI7QUFBQSxNQVBuQkMsR0FPbUIsUUFQbkJBLEdBT21CO0FBQUEsTUFObkJDLEdBTW1CLFFBTm5CQSxHQU1tQjtBQUFBLE1BTG5CQyxLQUttQixRQUxuQkEsS0FLbUI7QUFBQSxNQUpuQkMsY0FJbUIsUUFKbkJBLGNBSW1CO0FBQUEsTUFI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QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQsZUFnQkM7QUFBSyxlQUFTLEVBQUVuQixFQUFFLENBQUMsTUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJELGVBaUJDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsTUFBRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJELGVBbUJDO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsZUFBUyxFQUFFQSxFQUFFLENBQUMsT0FBRCxDQUFsQztBQUE2QyxjQUFRLEVBQUUsa0JBQUFtQixDQUFDO0FBQUEsZUFBSUQsY0FBYyxDQUFDQyxDQUFELENBQWxCO0FBQUEsT0FBeEQ7QUFBK0UsV0FBSyxFQUFFRjtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBdUJBLENBdEVEOztHQUFNYixNOztLQUFBQSxNO0FBd0VTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuMjQ3YTE1OTI4YjQ0NjI0YTVmNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2xpZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcy9iaW5kJztcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgSVNsaWRlclByb3BzIHtcclxuXHRkaXNhYmxlZD86IGJvb2xlYW47XHJcblx0bWFya3M/OiBSZWNvcmQ8bnVtYmVyLCBSZWFjdE5vZGUgfCBzdHJpbmc+O1xyXG5cdG1heDogbnVtYmVyO1xyXG5cdG1pbjogbnVtYmVyO1xyXG5cdHJhbmdlPzogYm9vbGVhbjtcclxuXHR0b29sdGlwVmlzaWJsZT86IGJvb2xlYW47XHJcblx0dmFsdWU6IG51bWJlcjtcclxuXHRvbkFmdGVyQ2hhbmdlPzogKCkgPT4ge307XHJcblx0b25DaGFuZ2U/OiAodmFsdWUpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlciA9IChcclxuXHR7XHJcblx0XHRkaXNhYmxlZD0gZmFsc2UsXHJcblx0XHRtYXJrcyxcclxuXHRcdG1heCxcclxuXHRcdG1pbixcclxuXHRcdHJhbmdlLFxyXG5cdFx0dG9vbHRpcFZpc2libGUsXHJcblx0XHR2YWx1ZSxcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UsXHJcblx0XHRvbkNoYW5nZVxyXG5cdH06IElTbGlkZXJQcm9wcykgPT4ge1xyXG5cclxuXHRjb25zdCByYWlsRWwgPSB1c2VSZWYobnVsbCk7XHJcblx0Y29uc3QgaGFuZGxlRWwgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbnN0IHNsaWRlclZhbHVlID0gdmFsdWUgPD0gbWluID8gbWluIDogdmFsdWUgPj0gbWF4ID8gbWF4IDogdmFsdWU7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuXHRcdG9uQWZ0ZXJDaGFuZ2UgJiYgb25BZnRlckNoYW5nZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9uTW91c2VEb3duID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuXHRcdGNvbnN0IHNoaWZ0WCA9IGUuY2xpZW50WCAtIGhhbmRsZUVsLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcblx0XHRcdGxldCBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0WCAtIHJhaWxFbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblx0XHRcdGlmIChuZXdMZWZ0IDwgMCkgbmV3TGVmdCA9IDA7XHJcblxyXG5cdFx0XHRsZXQgcmlnaHRFZGdlID0gcmFpbEVsLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcblx0XHRcdGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG5cclxuXHRcdFx0aGFuZGxlRWwuY3VycmVudC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcblxyXG5cdFx0XHRvbkNoYW5nZShuZXdMZWZ0IC8gcmlnaHRFZGdlICogMTAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHQ8ZGl2IHJlZj17cmFpbEVsfSBjbGFzc05hbWU9e2N4KCdyYWlsJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmFjaycpfSBzdHlsZT17e3dpZHRoOiBgJHtzbGlkZXJWYWx1ZX0lYH19Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHJlZj17aGFuZGxlRWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaGFuZGxlJyl9XHJcblx0XHRcdFx0cm9sZT0nc2xpZGVyJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtaW49JzAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1heD0nMTAwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVub3c9Jzc0J1xyXG5cdFx0XHRcdGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7bGVmdDogYCR7c2xpZGVyVmFsdWV9JWB9fVxyXG5cdFx0XHRcdG9uTW91c2VEb3duPXtlID0+IGhhbmRsZU9uTW91c2VEb3duKGUpfVxyXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0PXsoKSA9PiB7cmV0dXJuIGZhbHNlfX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3RlcCcpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFyaycpfS8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2N4KCdpbnB1dCcpfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShlKX0gdmFsdWU9e3NsaWRlclZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=