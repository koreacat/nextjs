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

var DetailItems = function DetailItems(props) {
  var _s2 = $RefreshSig$();

  var setActive = props.setActive;
  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_5__["default"].map(_s2(function (d) {
    _s2();

    //TODO top이 닿으면 active sn 시키고 scroll 조절
    if (d.sn) {
      Object(_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"])({
        scrollUpTop: 0,
        onScrollUp: function onScrollUp() {
          return setActive(d.sn);
        }
      });
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_6__["Element"], {
      name: 'scroll' + d.sn,
      className: cx('detailItems'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: cx('title'),
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: d.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this)]
    }, d.sn, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, _this);
  }, "M3trOI3Oxp6jL1ARzzupiBlmUg0=", false, function () {
    return [_src_util_hooks_useScroll__WEBPACK_IMPORTED_MODULE_8__["useScrollDir"]];
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

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
    lineNumber: 87,
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
      lineNumber: 96,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_contents__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('wrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
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
                lineNumber: 103,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibGlFbCIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwic24iLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsVG8iLCJjb250YWluZXJJZCIsInNtb290aCIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsIkRldGFpbEl0ZW1zIiwiaXRlbXMiLCJ1c2VTY3JvbGxEaXIiLCJzY3JvbGxVcFRvcCIsIm9uU2Nyb2xsVXAiLCJjb250ZW50cyIsIlNjcm9sbFRvcCIsIndpbmRvdyIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLDRGQUFoQixDQUFYOztBQVFBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBNEI7QUFBQTs7QUFBQSxNQUN2Q0MsTUFEdUMsR0FDbEJELEtBRGtCLENBQ3ZDQyxNQUR1QztBQUFBLE1BQy9CQyxTQUQrQixHQUNsQkYsS0FEa0IsQ0FDL0JFLFNBRCtCO0FBRTlDLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBZ0I7QUFDbkNKLGFBQVMsQ0FBQ0ksRUFBRCxDQUFULENBRG1DLENBR25DOztBQUNBQyxzRUFBYSxDQUFDQyxRQUFkLENBQXVCRixFQUFFLEdBQUcsR0FBNUIsRUFBaUM7QUFDaENHLGlCQUFXLEVBQUUsUUFEbUI7QUFFaEND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aUJBQVMsRUFBRUEsRUFBRSxDQUFDLE1BQUQsQ0FBbEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxVQUFELENBQWxCO0FBQUEsa0NBQ0M7QUFBSyxjQUFFLEVBQUMsUUFBUjtBQUFpQixxQkFBUyxFQUFFQSxFQUFFLENBQUMsTUFBRCxDQUE5QjtBQUFBLG1DQUNDO0FBQUEscUNBQ0MscUVBQUMsVUFBRDtBQUNDLHNCQUFNLEVBQUVNLE1BRFQ7QUFFQyx5QkFBUyxFQUFFQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQVNDO0FBQUsscUJBQVMsRUFBRVAsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBQSxtQ0FDQyxxRUFBQyxXQUFEO0FBQ0MsdUJBQVMsRUFBRU87QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBc0JDLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBCQSxDQTdCRDs7SUFBTXFCLFk7O01BQUFBLFk7QUErQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0aWNreVNjcm9sbC5lMDMzMDAyZmIyMTMyNzc1MDc1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9zdGlja3lTY3JvbGwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IENvbnRlbnRzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb24vY29udGVudHNcIjtcclxuaW1wb3J0IGRldGFpbERhdGEgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9kZXRhaWxEYXRhXCI7XHJcbmltcG9ydCB7RWxlbWVudCwgTGluayBhcyBTY3JvbGxMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsL21vZHVsZXNcIjtcclxuaW1wb3J0IHthbmltYXRlU2Nyb2xsfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlU2Nyb2xsRGlyfSBmcm9tIFwiLi4vc3JjL3V0aWwvaG9va3MvdXNlU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaXN0UHJvcHMge1xyXG5cdGFjdGl2ZTogbnVtYmVyO1xyXG5cdHNldEFjdGl2ZTogKHNuOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbExpc3RQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHthY3RpdmUsIHNldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRjb25zdCBsaUVsID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChzbjogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRBY3RpdmUoc24pO1xyXG5cclxuXHRcdC8vVE9ETyB0b1kg7JW866ek7J6EXHJcblx0XHRhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKHNuICogMTAwLCB7XHJcblx0XHRcdGNvbnRhaW5lcklkOiAnbGlzdEVsJyxcclxuXHRcdFx0c21vb3RoOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBsaXN0ID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxsaSByZWY9e2xpRWx9IGtleT17ZC5zbn0gY2xhc3NOYW1lPXtjeChkLnNuID09PSBhY3RpdmUgJiYgJ2FjdGl2ZScpfT5cclxuXHRcdFx0XHQ8U2Nyb2xsTGluayBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhkLnNuKX0gdG89eydzY3JvbGwnICsgZC5zbn0gc21vb3RoPXt0cnVlfSBvZmZzZXQ9ey0xMDB9PlxyXG5cdFx0XHRcdFx0e2Quc259XHJcblx0XHRcdFx0PC9TY3JvbGxMaW5rPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57bGlzdH08Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmludGVyZmFjZSBEZXRhaWxJdGVtc1Byb3BzIHtcclxuXHRzZXRBY3RpdmU6IChhY3RpdmU6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBEZXRhaWxJdGVtcyA9IChwcm9wczogRGV0YWlsSXRlbXNQcm9wcykgPT4ge1xyXG5cdGNvbnN0IHtzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGV0YWlsRGF0YS5tYXAoKGQpID0+IHtcclxuXHRcdC8vVE9ETyB0b3DsnbQg64u/7Jy866m0IGFjdGl2ZSBzbiDsi5ztgqTqs6Agc2Nyb2xsIOyhsOygiFxyXG5cclxuXHRcdGlmKGQuc24gKXtcclxuXHRcdFx0dXNlU2Nyb2xsRGlyKHtcclxuXHRcdFx0XHRzY3JvbGxVcFRvcDogMCxcclxuXHRcdFx0XHRvblNjcm9sbFVwOiAoKSA9PiBzZXRBY3RpdmUoZC5zbilcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxFbGVtZW50IGtleT17ZC5zbn0gbmFtZT17J3Njcm9sbCcgKyBkLnNufSBjbGFzc05hbWU9e2N4KCdkZXRhaWxJdGVtcycpfT5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57ZC5zbn08L3NwYW4+XHJcblx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0PC9FbGVtZW50PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y3goJ3Njcm9sbFRvcCcpfS8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgU3RpY2t5U2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PENvbnRlbnRzPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnc3VtbWFyeScpfS8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdsaXN0RWwnIGNsYXNzTmFtZT17Y3goJ2xpc3QnKX0+XHJcblx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PERldGFpbExpc3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlPXthY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdkZXRhaWwnKX0+XHJcblx0XHRcdFx0XHRcdFx0PERldGFpbEl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3RpdmU9e3NldEFjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0NvbnRlbnRzPlxyXG5cdFx0XHQ8U2Nyb2xsVG9wLz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreVNjcm9sbDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=