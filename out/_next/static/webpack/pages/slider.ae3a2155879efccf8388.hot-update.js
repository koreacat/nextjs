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

  var handleOnMouseMove = function handleOnMouseMove(e) {
    var shiftX = e.clientX - handleEl.current.getBoundingClientRect().left;
    var newLeft = e.clientX - shiftX - railEl.current.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    var rightEdge = railEl.current.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;
    handleEl.current.style.left = newLeft + 'px';
    console.log(shiftX, newLeft, rightEdge);
    onChange(Math.round(newLeft / rightEdge * 100));
  };

  var handleOnMouseUp = function handleOnMouseUp() {
    document.removeEventListener('mouseup', handleOnMouseUp);
    document.removeEventListener('mousemove', function (e) {
      return handleOnMouseMove(e);
    });
  };

  var handleOnMouseDown = function handleOnMouseDown(e) {
    e.preventDefault();
    document.addEventListener('mousemove', function (e) {
      return handleOnMouseMove(e);
    });
    document.addEventListener('mouseup', handleOnMouseUp);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('slider'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: railEl,
      className: cx('rail')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiY3giLCJjbGFzc25hbWVzIiwiYmluZCIsInN0eWxlcyIsIlNsaWRlciIsImRpc2FibGVkIiwibWFya3MiLCJtYXgiLCJtaW4iLCJyYW5nZSIsInRvb2x0aXBWaXNpYmxlIiwidmFsdWUiLCJvbkFmdGVyQ2hhbmdlIiwib25DaGFuZ2UiLCJyYWlsRWwiLCJ1c2VSZWYiLCJoYW5kbGVFbCIsInNsaWRlclZhbHVlIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlT25Nb3VzZU1vdmUiLCJzaGlmdFgiLCJjbGllbnRYIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwib2Zmc2V0V2lkdGgiLCJzdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicm91bmQiLCJoYW5kbGVPbk1vdXNlVXAiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVPbk1vdXNlRG93biIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQywwREFBaEIsQ0FBWDs7QUFjQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQVdNO0FBQUE7O0FBQUEsMkJBVG5CQyxRQVNtQjtBQUFBLE1BVG5CQSxRQVNtQiw4QkFUVCxLQVNTO0FBQUEsTUFSbkJDLEtBUW1CLFFBUm5CQSxLQVFtQjtBQUFBLE1BUG5CQyxHQU9tQixRQVBuQkEsR0FPbUI7QUFBQSxNQU5uQkMsR0FNbUIsUUFObkJBLEdBTW1CO0FBQUEsTUFMbkJDLEtBS21CLFFBTG5CQSxLQUttQjtBQUFB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Q0FBQyxRQUFELENBRmQ7QUFHQyxVQUFJLEVBQUMsUUFITjtBQUlDLHVCQUFjLEdBSmY7QUFLQyx1QkFBYyxLQUxmO0FBTUMsdUJBQWMsSUFOZjtBQU9DLHVCQUFjLE9BUGY7QUFRQyxXQUFLLEVBQUU7QUFBQzBCLFlBQUksWUFBS1QsV0FBTDtBQUFMLE9BUlI7QUFTQyxpQkFBVyxFQUFFLHFCQUFBRSxDQUFDO0FBQUEsZUFBSW1CLGlCQUFpQixDQUFDbkIsQ0FBRCxDQUFyQjtBQUFBLE9BVGY7QUFVQyxpQkFBVyxFQUFFLHVCQUFNO0FBQUMsZUFBTyxLQUFQO0FBQWE7QUFWbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELGVBZ0JDO0FBQUssZUFBUyxFQUFFbkIsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRCxlQWlCQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE1BQUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRCxlQW1CQztBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBRUEsRUFBRSxDQUFDLE9BQUQsQ0FBbEM7QUFBNkMsY0FBUSxFQUFFLGtCQUFBbUIsQ0FBQztBQUFBLGVBQUlELGNBQWMsQ0FBQ0MsQ0FBRCxDQUFsQjtBQUFBLE9BQXhEO0FBQStFLFdBQUssRUFBRUY7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVCQSxDQTNFRDs7R0FBTWIsTTs7S0FBQUEsTTtBQTZFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmFlM2EyMTU1ODc5ZWZjY2Y4Mzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuaW50ZXJmYWNlIElTbGlkZXJQcm9wcyB7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdG1hcmtzPzogUmVjb3JkPG51bWJlciwgUmVhY3ROb2RlIHwgc3RyaW5nPjtcclxuXHRtYXg6IG51bWJlcjtcclxuXHRtaW46IG51bWJlcjtcclxuXHRyYW5nZT86IGJvb2xlYW47XHJcblx0dG9vbHRpcFZpc2libGU/OiBib29sZWFuO1xyXG5cdHZhbHVlOiBudW1iZXI7XHJcblx0b25BZnRlckNoYW5nZT86ICgpID0+IHt9O1xyXG5cdG9uQ2hhbmdlPzogKHZhbHVlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoXHJcblx0e1xyXG5cdFx0ZGlzYWJsZWQ9IGZhbHNlLFxyXG5cdFx0bWFya3MsXHJcblx0XHRtYXgsXHJcblx0XHRtaW4sXHJcblx0XHRyYW5nZSxcclxuXHRcdHRvb2x0aXBWaXNpYmxlLFxyXG5cdFx0dmFsdWUsXHJcblx0XHRvbkFmdGVyQ2hhbmdlLFxyXG5cdFx0b25DaGFuZ2VcclxuXHR9OiBJU2xpZGVyUHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3QgcmFpbEVsID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGhhbmRsZUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBzbGlkZXJWYWx1ZSA9IHZhbHVlIDw9IG1pbiA/IG1pbiA6IHZhbHVlID49IG1heCA/IG1heCA6IHZhbHVlO1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRvbkFmdGVyQ2hhbmdlICYmIG9uQWZ0ZXJDaGFuZ2UoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbk1vdXNlTW92ZSA9IChlKSA9PiB7XHJcblx0XHRjb25zdCBzaGlmdFggPSBlLmNsaWVudFggLSBoYW5kbGVFbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcblxyXG5cdFx0bGV0IG5ld0xlZnQgPSBlLmNsaWVudFggLSBzaGlmdFggLSByYWlsRWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG5cdFx0aWYgKG5ld0xlZnQgPCAwKSBuZXdMZWZ0ID0gMDtcclxuXHJcblx0XHRsZXQgcmlnaHRFZGdlID0gcmFpbEVsLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcblx0XHRpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuXHJcblx0XHRoYW5kbGVFbC5jdXJyZW50LnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuXHJcblx0XHRjb25zb2xlLmxvZyhzaGlmdFgsIG5ld0xlZnQsIHJpZ2h0RWRnZSk7XHJcblxyXG5cdFx0b25DaGFuZ2UoTWF0aC5yb3VuZChuZXdMZWZ0IC8gcmlnaHRFZGdlICogMTAwKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT25Nb3VzZVVwID0gKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU9uTW91c2VVcCk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVPbk1vdXNlRG93biA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUpKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVPbk1vdXNlVXApO1xyXG5cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc2xpZGVyJyl9PlxyXG5cdFx0XHQ8ZGl2IHJlZj17cmFpbEVsfSBjbGFzc05hbWU9e2N4KCdyYWlsJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd0cmFjaycpfSBzdHlsZT17e3dpZHRoOiBgJHtzbGlkZXJWYWx1ZX0lYH19Lz5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHJlZj17aGFuZGxlRWx9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjeCgnaGFuZGxlJyl9XHJcblx0XHRcdFx0cm9sZT0nc2xpZGVyJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVtaW49JzAnXHJcblx0XHRcdFx0ZGF0YS12YWx1ZW1heD0nMTAwJ1xyXG5cdFx0XHRcdGRhdGEtdmFsdWVub3c9Jzc0J1xyXG5cdFx0XHRcdGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJ1xyXG5cdFx0XHRcdHN0eWxlPXt7bGVmdDogYCR7c2xpZGVyVmFsdWV9JWB9fVxyXG5cdFx0XHRcdG9uTW91c2VEb3duPXtlID0+IGhhbmRsZU9uTW91c2VEb3duKGUpfVxyXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0PXsoKSA9PiB7cmV0dXJuIGZhbHNlfX1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3RlcCcpfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnbWFyaycpfS8+XHJcblxyXG5cdFx0XHQ8aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2N4KCdpbnB1dCcpfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbkNoYW5nZShlKX0gdmFsdWU9e3NsaWRlclZhbHVlfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=