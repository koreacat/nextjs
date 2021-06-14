webpackHotUpdate_N_E("pages/stickyScroll",{

/***/ "./pages/stickyScroll.tsx":
/*!********************************!*\
  !*** ./pages/stickyScroll.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/common/layout */ "./src/components/common/layout/index.tsx");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/stickyScroll/stickyScroll.module.scss */ "./src/components/stickyScroll/stickyScroll.module.scss");
/* harmony import */ var _src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_common_contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/common/contents */ "./src/components/common/contents/index.tsx");
/* harmony import */ var _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/stickyScroll/detailData */ "./src/components/stickyScroll/detailData.ts");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/util/hooks/useScroll */ "./src/util/hooks/useScroll.ts");



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\stickyScroll.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();










var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var DetailList = function DetailList(props) {
  _s();

  var active = props.active,
      setActive = props.setActive;
  var liEl = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);

  var handleClick = function handleClick(sn) {
    setActive(sn); //TODO toY 야매임

    react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["animateScroll"].scrollTo(sn * 100, {
      containerId: 'listEl',
      smooth: true
    });
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      ref: liEl,
      className: cx(d.sn === active && 'active'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        onClick: function onClick() {
          return handleClick(d.sn);
        },
        to: 'scroll' + d.sn,
        smooth: true,
        offset: -100,
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: list
  }, void 0, false);
};

_s(DetailList, "hNurUXKn8huy7OMLe8gB5r2Kta0=");

_c = DetailList;

var DetailItems = function DetailItems() {
  _s2();

  //TODO top이 닿으면 active sn 시키고 scroll 조절
  Object(_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"])({
    scrollUpTop: 0,
    onScrollUp: function onScrollUp() {}
  });
  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["Element"], {
      name: 'scroll' + d.sn,
      className: cx('detailItems'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('title'),
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: d.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this)]
    }, d.sn, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s2(DetailItems, "M3trOI3Oxp6jL1ARzzupiBlmUg0=", false, function () {
  return [_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"]];
});

_c2 = DetailItems;

var ScrollTop = function ScrollTop() {
  var handleClick = function handleClick() {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    onClick: handleClick,
    className: cx('scrollTop')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s3();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_contents__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('wrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('contents'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "listEl",
            className: cx('list'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailList, {
                active: active,
                setActive: setActive
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 3
  }, _this);
};

_s3(StickyScroll, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");

_c4 = StickyScroll;
/* harmony default export */ __webpack_exports__["default"] = (StickyScroll);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DetailList");
$RefreshReg$(_c2, "DetailItems");
$RefreshReg$(_c3, "ScrollTop");
$RefreshReg$(_c4, "StickyScroll");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/util/hooks/useScroll.ts":
/*!*************************************!*\
  !*** ./src/util/hooks/useScroll.ts ***!
  \*************************************/
/*! exports provided: useScrollDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollDir", function() { return useScrollDir; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../throttle */ "./src/util/throttle.ts");
var _s = $RefreshSig$();



function useScrollDir(props) {
  _s();

  var lastScrollTop = 0;
  var el = props.el,
      onScrollUp = props.onScrollUp,
      scrollUpTop = props.scrollUpTop,
      onScrollDown = props.onScrollDown,
      scrollDownTop = props.scrollDownTop;

  var scrollEvent = function scrollEvent() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
    var elTop = el === null || el === void 0 ? void 0 : el.current.getBoundingClientRect().top;
    var windHeight = window.innerHeight; // const absoluteTop = scrollTop + elTop;

    if (onScrollUp && scrollDir === 'UP') {
      if (scrollUpTop) elTop - windHeight <= scrollUpTop && onScrollUp();else onScrollUp();
    }

    if (onScrollDown && scrollDir === 'DOWN') {
      if (scrollDownTop) elTop - windHeight > scrollDownTop && onScrollDown();else onScrollDown();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  var onScroll = Object(_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollEvent, props.wait || 50);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('scroll', onScroll, false);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
}

_s(useScrollDir, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/util/throttle.ts":
/*!******************************!*\
  !*** ./src/util/throttle.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
// from underscore.js
function throttle(func, wait) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var previous;
  var args;
  var result;
  var context;

  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var _now = Date.now();

    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    args = _args;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    if (timeout === null) return;
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWwvaG9va3MvdXNlU2Nyb2xsLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvdXRpbC90aHJvdHRsZS50cyJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibGlFbCIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwic24iLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsVG8iLCJjb250YWluZXJJZCIsInNtb290aCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsIkRldGFpbEl0ZW1zIiwidXNlU2Nyb2xsRGlyIiwic2Nyb2xsVXBUb3AiLCJvblNjcm9sbFVwIiwiaXRlbXMiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIndpbmRvdyIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIiwibGFzdFNjcm9sbFRvcCIsImVsIiwib25TY3JvbGxEb3duIiwic2Nyb2xsRG93blRvcCIsInNjcm9sbEV2ZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbERpciIsImVsVG9wIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRIZWlnaHQiLCJpbm5lckhlaWdodCIsIm9uU2Nyb2xsIiwidGhyb3R0bGUiLCJ3YWl0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmdW5jIiwib3B0aW9ucyIsInRpbWVvdXQiLCJwcmV2aW91cyIsImFyZ3MiLCJyZXN1bHQiLCJjb250ZXh0IiwibGF0ZXIiLCJsZWFkaW5nIiwiRGF0ZSIsIm5vdyIsImFwcGx5IiwidGhyb3R0bGVkIiwiX25vdyIsInJlbWFpbmluZyIs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QztBQUNsRGYsYUFBTyxHQUFHZ0IsVUFBVSxDQUFDWCxLQUFELEVBQVFPLFNBQVIsQ0FBcEI7QUFDQTs7QUFDRCxXQUFPVCxNQUFQO0FBQ0EsR0FsQkQ7O0FBb0JBTyxXQUFTLENBQUNPLE1BQVYsR0FBbUIsWUFBWTtBQUM5QixRQUFJakIsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3RCYyxnQkFBWSxDQUFDZCxPQUFELENBQVo7QUFDQUMsWUFBUSxHQUFHLENBQVg7QUFDQUQsV0FBTyxHQUFHSSxPQUFPLEdBQUdGLElBQUksR0FBRyxJQUEzQjtBQUNBLEdBTEQ7O0FBT0EsU0FBT1EsU0FBUDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0aWNreVNjcm9sbC43OWIyNTZjM2IyZDdjYjBlMmQ2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9zdGlja3lTY3JvbGwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IENvbnRlbnRzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHNcIjtcclxuaW1wb3J0IGRldGFpbERhdGEgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9kZXRhaWxEYXRhXCI7XHJcbmltcG9ydCB7RWxlbWVudCwgTGluayBhcyBTY3JvbGxMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsL21vZHVsZXNcIjtcclxuaW1wb3J0IHthbmltYXRlU2Nyb2xsfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU2Nyb2xsRGlyfSBmcm9tIFwiLi4vc3JjL3V0aWwvaG9va3MvdXNlU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHthY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRjb25zdCBsaUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChzbjogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8vVE9ETyB0b1kg7JW866ek7J6EXHJcblx0XHRhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKHNuICogMTAwLCB7XHJcblx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdEVsJyxcclxuXHRcdFx0c21vb3RoOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSByZWY9e2xpRWx9IGtleT17ZC5zbn0gY2xhc3NOYW1lPXtjeChkLnNuID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfT5cclxuXHRcdFx0XHQ8U2Nyb2xsTGluayBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhkLnNuKX0gdG89eydzY3JvbGwnICsgZC5zbn0gc21vb3RoPXt0cnVlfSBvZmZzZXQ9ey0xMDB9PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgRGV0YWlsSXRlbXMgPSAoKSA9PiB7XHJcblx0Ly9UT0RPIHRvcOydtCDri7/snLzrqbQgYWN0aXZlIHNuIOyLnO2CpOqzoCBzY3JvbGwg7KGw7KCIXHJcblx0dXNlU2Nyb2xsRGlyKHtcclxuXHRcdHNjcm9sbFVwVG9wOiAwLFxyXG5cdFx0b25TY3JvbGxVcDogKCkgPT4ge31cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaXRlbXMgPSBkZXRhaWxEYXRhLm1hcCgoZCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEVsZW1lbnQga2V5PXtkLnNufSBuYW1lPXsnc2Nyb2xsJyArIGQuc259IGNsYXNzTmFtZT17Y3goJ2RldGFpbEl0ZW1zJyl9PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9PntkLnNufTwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2PntkLmNvbnRlbnRzfTwvZGl2PlxyXG5cdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntpdGVtc308Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjeCgnc2Nyb2xsVG9wJyl9Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBTdGlja3lTY3JvbGwgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdiYW5uZXInKX0vPlxyXG5cdFx0XHQ8Q29udGVudHM+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2xpc3RFbCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXMvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0NvbnRlbnRzPlxyXG5cdFx0XHQ8U2Nyb2xsVG9wLz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVNjcm9sbDtcclxuXHJcbiIsImltcG9ydCB7IE11dGFibGVSZWZPYmplY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRocm90dGxlIGZyb20gXCIuLi90aHJvdHRsZVwiO1xyXG5cclxudHlwZSBTY3JvbGxEaXIgPSAnVVAnIHwgJ0RPV04nO1xyXG5pbnRlcmZhY2UgdXNlU2Nyb2xsRGlyUHJvcHMge1xyXG5cdGVsPzogTXV0YWJsZVJlZk9iamVjdDxhbnk+O1xyXG5cdG9uU2Nyb2xsVXA/OiAoKSA9PiB2b2lkO1xyXG5cdHNjcm9sbFVwVG9wPzogbnVtYmVyO1xyXG5cdG9uU2Nyb2xsRG93bj86ICgpID0+IHZvaWQ7XHJcblx0c2Nyb2xsRG93blRvcD86IG51bWJlcjtcclxuXHR3YWl0PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2Nyb2xsRGlyKHByb3BzOiB1c2VTY3JvbGxEaXJQcm9wcykge1xyXG5cdGxldCBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHRjb25zdCB7IGVsLCBvblNjcm9sbFVwLCBzY3JvbGxVcFRvcCwgb25TY3JvbGxEb3duLCBzY3JvbGxEb3duVG9wIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3Qgc2Nyb2xsRXZlbnQgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdGNvbnN0IHNjcm9sbERpcjogU2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRjb25zdCBlbFRvcCA9IGVsPy5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHQvLyBjb25zdCBhYnNvbHV0ZVRvcCA9IHNjcm9sbFRvcCArIGVsVG9wO1xyXG5cclxuXHRcdGlmIChvblNjcm9sbFVwICYmIHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRpZiAoc2Nyb2xsVXBUb3ApIGVsVG9wIC0gd2luZEhlaWdodCA8PSBzY3JvbGxVcFRvcCAmJiBvblNjcm9sbFVwKCk7XHJcblx0XHRcdGVsc2Ugb25TY3JvbGxVcCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvblNjcm9sbERvd24gJiYgc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0aWYgKHNjcm9sbERvd25Ub3ApIGVsVG9wIC0gd2luZEhlaWdodCA+IHNjcm9sbERvd25Ub3AgJiYgb25TY3JvbGxEb3duKCk7XHJcblx0XHRcdGVsc2Ugb25TY3JvbGxEb3duKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGFzdFNjcm9sbFRvcCA9IChzY3JvbGxUb3AgPD0gMCA/IDAgOiBzY3JvbGxUb3ApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU2Nyb2xsID0gdGhyb3R0bGUoc2Nyb2xsRXZlbnQsIHByb3BzLndhaXQgfHwgNTApO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwsIGZhbHNlKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cdFx0fSk7XHJcblx0fSwgW10pXHJcbn1cclxuIiwiLy8gZnJvbSB1bmRlcnNjb3JlLmpzXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhyb3R0bGVPcHRpb25zIHtcclxuXHRsZWFkaW5nPzogYm9vbGVhbjtcclxuXHR0cmFpbGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmM6IEZ1bmN0aW9uLCB3YWl0OiBudW1iZXIsIG9wdGlvbnM6IFRocm90dGxlT3B0aW9ucyA9IHt9KSB7XHJcblx0bGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbDtcclxuXHRsZXQgcHJldmlvdXM6IG51bWJlcjtcclxuXHRsZXQgYXJnczogYW55O1xyXG5cdGxldCByZXN1bHQ6IGFueTtcclxuXHRsZXQgY29udGV4dDogYW55O1xyXG5cclxuXHRjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBEYXRlLm5vdygpO1xyXG5cdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRyZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0aWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdGhyb3R0bGVkID0gZnVuY3Rpb24gKHRoaXM6IGFueSwgLi4uX2FyZ3M6IGFueVtdKSB7XHJcblx0XHRjb25zdCBfbm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBfbm93O1xyXG5cdFx0dmFyIHJlbWFpbmluZyA9IHdhaXQgLSAoX25vdyAtIHByZXZpb3VzKTtcclxuXHRcdGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0YXJncyA9IF9hcmdzO1xyXG5cdFx0aWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcclxuXHRcdFx0aWYgKHRpbWVvdXQpIHtcclxuXHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJldmlvdXMgPSBfbm93O1xyXG5cdFx0XHRyZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuXHRcdH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcclxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdHRocm90dGxlZC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGltZW91dCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0cHJldmlvdXMgPSAwO1xyXG5cdFx0dGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gdGhyb3R0bGVkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==