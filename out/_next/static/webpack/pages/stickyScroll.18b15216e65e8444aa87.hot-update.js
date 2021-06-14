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
/* harmony import */ var _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/stickyScroll/detailData */ "./src/components/stickyScroll/detailData.ts");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll/modules */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\stickyScroll.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_src_components_stickyScroll_stickyScroll_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);

var DetailList = function DetailList(props) {
  var active = props.active,
      setActive = props.setActive;

  var handleClick = function handleClick(sn) {
    setActive(sn);
  };

  var list = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: cx(d.sn === active && 'active'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        onClick: function onClick() {
          return handleClick(d.sn);
        },
        to: 'scroll' + d.sn,
        smooth: true,
        offset: -100,
        children: d.sn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this)
    }, d.sn, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: list
  }, void 0, false);
};

_c = DetailList;

var DetailItems = function DetailItems(props) {
  _s();

  var setActive = props.setActive;
  var itemsEls = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);
  var lastScrollTop = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollDir = scrollTop > lastScrollTop ? 'UP' : 'DOWN';
      var windHeight = window.innerHeight;
      itemsEls.current.map(function (itemEl, index) {
        var elTop = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().top;
        var elBottom = itemEl === null || itemEl === void 0 ? void 0 : itemEl.getBoundingClientRect().bottom;

        if (scrollDir === 'UP') {
          if (elTop <= 300 && elTop > -(itemEl.offsetHeight - 300)) {
            setActive(index);
          }
        } else if (scrollDir === 'DOWN') {
          if (elBottom >= windHeight && elBottom < windHeight + itemEl.offsetHeight) {
            setActive(index);
          }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        console.log(index, elBottom, itemEl.offsetHeight, windHeight, scrollDir);
      });
    }, false);
  }, []); //TODO 스크롤이 안보이면 스크롤 이동
  // animateScroll.scrollTo(sn * 100, {
  // 	containerId: 'listEl',
  // 	smooth: true
  // });

  var items = _src_components_stickyScroll_detailData__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (d) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: function ref(itemEl) {
        return itemsEls.current[d.sn] = itemEl;
      },
      className: cx('detailItems'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll_modules__WEBPACK_IMPORTED_MODULE_5__["Element"], {
        name: 'scroll' + d.sn,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: cx('title'),
          children: d.sn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: d.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, _this)]
      }, d.sn, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items
  }, void 0, false);
};

_s(DetailItems, "duK4hogXKruilIsv/t0refJjK2w=");

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
    lineNumber: 110,
    columnNumber: 3
  }, _this);
};

_c3 = ScrollTop;

var StickyScroll = function StickyScroll() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('banner')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: cx('wrap'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: cx('contentsWrap'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: cx('summary')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
                lineNumber: 126,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: cx('detail'),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItems, {
              setActive: setActive
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ScrollTop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 3
  }, _this);
};

_s2(StickyScroll, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RpY2t5U2Nyb2xsLnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiRGV0YWlsTGlzdCIsInByb3BzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJzbiIsImxpc3QiLCJkZXRhaWxEYXRhIiwibWFwIiwiZCIsIkRldGFpbEl0ZW1zIiwiaXRlbXNFbHMiLCJ1c2VSZWYiLCJsYXN0U2Nyb2xsVG9wIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXIiLCJ3aW5kSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdXJyZW50IiwiaXRlbUVsIiwiaW5kZXgiLCJlbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsQm90dG9tIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwiY29udGVudHMiLCJTY3JvbGxUb3AiLCJzY3JvbGxUbyIsIlN0aWNreVNjcm9sbCIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsRUFBRSxHQUFHQyxzREFBVSxDQUFDQyxJQUFYLENBQWdCQyw0RkFBaEIsQ0FBWDs7QUFPQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQTRCO0FBQUEsTUFDdkNDLE1BRHVDLEdBQ2xCRCxLQURrQixDQUN2Q0MsTUFEdUM7QUFBQSxNQUMvQkMsU0FEK0IsR0FDbEJGLEtBRGtCLENBQy9CRSxTQUQrQjs7QUFHOUMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFnQjtBQUNuQ0YsYUFBUyxDQUFDRSxFQUFELENBQVQ7QUFDQSxHQUZEOztBQUlBLE1BQU1DLElBQUksR0FBR0MsK0VBQVUsQ0FBQ0MsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBTztBQUNsQyx3QkFDQztBQUFlLGVBQVMsRUFBRWIsRUFBRSxDQUFDYSxDQUFDLENBQUNKLEVBQUYsS0FBU0gsTUFBVCxJQUFtQixRQUFwQixDQUE1QjtBQUFBLDZCQUNDLHFFQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFFO0FBQUEsaUJBQU1FLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDSixFQUFILENBQWpCO0FBQUEsU0FBckI7QUFBOEMsVUFBRSxFQUFFLFdBQVdJLENBQUMsQ0FBQ0osRUFBL0Q7QUFBbUUsY0FBTSxFQUFFLElBQTNFO0FBQWlGLGNBQU0sRUFBRSxDQUFDLEdBQTFGO0FBQUEsa0JBQ0VJLENBQUMsQ0FBQ0o7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsT0FBU0ksQ0FBQyxDQUFDSixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQU9BLEdBUlksQ0FBYjtBQVVBLHNCQUNDO0FBQUEsY0FBR0M7QUFBSCxtQkFERDtBQUdBLENBcEJEOztLQUFNTixVOztBQTJCTixJQUFNVSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDVCxLQUFELEVBQTZCO0FBQUE7O0FBQUEsTUFDekNFLFNBRHlDLEdBQzVCRixLQUQ0QixDQUN6Q0UsU0FEeUM7QUFFaEQsTUFBTVEsUUFBUSxHQUFHQyxvREFBTSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ZDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtBQUN6QyxVQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkosUUFBUSxDQUFDSyxlQUFULENBQXlCSCxTQUFqRTtBQUNBLFVBQU1JLFNBQVMsR0FBR0osU0FBUyxHQUFHSixhQUFaLEdBQTRCLElBQTVCLEdBQW1DLE1BQXJEO0FBQ0EsVUFBTVMsVUFBVSxHQUFHSixNQUFNLENBQUNLLFdBQTFCO0FBRUFaLGNBQVEsQ0FBQ2EsT0FBVCxDQUFpQmhCLEdBQWpCLENBQXFCLFVBQUNpQixNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDdkMsWUFBTUMsS0FBSyxHQUFHRixNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRUcscUJBQVIsR0FBZ0NDLEdBQTlDO0FBQ0EsWUFBTUMsUUFBUSxHQUFHTCxNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRUcscUJBQVIsR0FBZ0NHLE1BQWpEOztBQUVBLFlBQUlWLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN2QixjQUFJTSxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLEVBQUVGLE1BQU0sQ0FBQ08sWUFBUCxHQUFzQixHQUF4QixDQUE1QixFQUEwRDtBQUN6RDdCLHFCQUFTLENBQUN1QixLQUFELENBQVQ7QUFDQTtBQUNELFNBSkQsTUFLSyxJQUFJTCxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDOUIsY0FBSVMsUUFBUSxJQUFJUixVQUFaLElBQTBCUSxRQUFRLEdBQUdSLFVBQVUsR0FBR0csTUFBTSxDQUFDTyxZQUE3RCxFQUEyRTtBQUMxRTdCLHFCQUFTLENBQUN1QixLQUFELENBQVQ7QUFDQTtBQUNEOztBQUVEYixxQkFBYSxHQUFJSSxTQUFTLElBQUksQ0FBYixHQUFpQixDQUFqQixHQUFxQkEsU0FBdEM7QUFFQWdCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaLEVBQW1CSSxRQUFuQixFQUE2QkwsTUFBTSxDQUFDTyxZQUFwQyxFQUFrRFYsVUFBbEQsRUFBOERELFNBQTlEO0FBRUEsT0FuQkQ7QUFxQkEsS0ExQkQsRUEwQkcsS0ExQkg7QUE2QkEsR0E5QlEsRUE4Qk4sRUE5Qk0sQ0FBVCxDQUxnRCxDQXNDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNYyxLQUFLLEdBQUc1QiwrRUFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25DLHdCQUNDO0FBQUssU0FBRyxFQUFFLGFBQUNnQixNQUFEO0FBQUEsZUFBWWQsUUFBUSxDQUFDYSxPQUFULENBQWlCZixDQUFDLENBQUNKLEVBQW5CLElBQXlCb0IsTUFBckM7QUFBQSxPQUFWO0FBQXVELGVBQVMsRUFBRTdCLEVBQUUsQ0FBQyxhQUFELENBQXBFO0FBQUEsNkJBQ0MscUVBQUMsNERBQUQ7QUFBb0IsWUFBSSxFQUFFLFdBQVdhLENBQUMsQ0FBQ0osRUFBdkM7QUFBQSxnQ0FDQztBQUFNLG1CQUFTLEVBQUVULEVBQUUsQ0FBQyxPQUFELENBQW5CO0FBQUEsb0JBQStCYSxDQUFDLENBQUNKO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFBLG9CQUFNSSxDQUFDLENBQUMyQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQSxTQUFjM0IsQ0FBQyxDQUFDSixFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBUUEsR0FUYSxDQUFkO0FBV0Esc0JBQ0M7QUFBQSxjQUFHOEI7QUFBSCxtQkFERDtBQUdBLENBMUREOztHQUFNekIsVzs7TUFBQUEsVzs7QUE2RE4sSUFBTTJCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdkIsTUFBTWpDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJjLFVBQU0sQ0FBQ29CLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxHQUZEOztBQUlBLHNCQUNDO0FBQVEsV0FBTyxFQUFFbEMsV0FBakI7QUFBOEIsYUFBUyxFQUFFUixFQUFFLENBQUMsV0FBRDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFHQSxDQVJEOztNQUFNeUMsUzs7QUFVTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsQ0FBRCxDQURWO0FBQUEsTUFDbkJ0QyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRzFCLHNCQUNDLHFFQUFDLHFFQUFEO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVQLEVBQUUsQ0FBQyxRQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFQSxFQUFFLENBQUMsTUFBRCxDQUFsQjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBRUEsRUFBRSxDQUFDLGNBQUQsQ0FBbEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxTQUFEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUVBLEVBQUUsQ0FBQyxVQUFELENBQWxCO0FBQUEsa0NBQ0M7QUFBSyxjQUFFLEVBQUMsUUFBUjtBQUFpQixxQkFBUyxFQUFFQSxFQUFFLENBQUMsTUFBRCxDQUE5QjtBQUFBLG1DQUNDO0FBQUEscUNBQ0MscUVBQUMsVUFBRDtBQUNDLHNCQUFNLEVBQUVNLE1BRFQ7QUFFQyx5QkFBUyxFQUFFQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQVNDO0FBQUsscUJBQVMsRUFBRVAsRUFBRSxDQUFDLFFBQUQsQ0FBbEI7QUFBQSxtQ0FDQyxxRUFBQyxXQUFEO0FBQ0MsdUJBQVMsRUFBRU87QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBdUJDLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTJCQSxDQTlCRDs7SUFBTW9DLFk7O01BQUFBLFk7QUFnQ1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0aWNreVNjcm9sbC4xOGIxNTIxNmU2NWU4NDQ0YWE4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2xheW91dFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9zdGlja3lTY3JvbGwubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGRldGFpbERhdGEgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0aWNreVNjcm9sbC9kZXRhaWxEYXRhXCI7XHJcbmltcG9ydCB7RWxlbWVudCwgTGluayBhcyBTY3JvbGxMaW5rfSBmcm9tIFwicmVhY3Qtc2Nyb2xsL21vZHVsZXNcIjtcclxuaW1wb3J0IHthbmltYXRlU2Nyb2xsfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlzdFByb3BzIHtcclxuXHRhY3RpdmU6IG51bWJlcjtcclxuXHRzZXRBY3RpdmU6IChzbjogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxMaXN0UHJvcHMpID0+IHtcclxuXHRjb25zdCB7YWN0aXZlLCBzZXRBY3RpdmV9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHNuOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEFjdGl2ZShzbik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGlzdCA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8bGkga2V5PXtkLnNufSBjbGFzc05hbWU9e2N4KGQuc24gPT09IGFjdGl2ZSAmJiAnYWN0aXZlJyl9PlxyXG5cdFx0XHRcdDxTY3JvbGxMaW5rIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGQuc24pfSB0bz17J3Njcm9sbCcgKyBkLnNufSBzbW9vdGg9e3RydWV9IG9mZnNldD17LTEwMH0+XHJcblx0XHRcdFx0XHR7ZC5zbn1cclxuXHRcdFx0XHQ8L1Njcm9sbExpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQpXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PntsaXN0fTwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIERldGFpbEl0ZW1zUHJvcHMge1xyXG5cdHNldEFjdGl2ZTogKGFjdGl2ZTogbnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IERldGFpbEl0ZW1zID0gKHByb3BzOiBEZXRhaWxJdGVtc1Byb3BzKSA9PiB7XHJcblx0Y29uc3Qge3NldEFjdGl2ZX0gPSBwcm9wcztcclxuXHRjb25zdCBpdGVtc0VscyA9IHVzZVJlZihbXSk7XHJcblx0bGV0IGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsRGlyID0gc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCA/ICdVUCcgOiAnRE9XTic7XHJcblx0XHRcdGNvbnN0IHdpbmRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRpdGVtc0Vscy5jdXJyZW50Lm1hcCgoaXRlbUVsLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGVsVG9wID0gaXRlbUVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblx0XHRcdFx0Y29uc3QgZWxCb3R0b20gPSBpdGVtRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHJcblx0XHRcdFx0aWYgKHNjcm9sbERpciA9PT0gJ1VQJykge1xyXG5cdFx0XHRcdFx0aWYgKGVsVG9wIDw9IDMwMCAmJiBlbFRvcCA+IC0oaXRlbUVsLm9mZnNldEhlaWdodCAtIDMwMCkpIHtcclxuXHRcdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoc2Nyb2xsRGlyID09PSAnRE9XTicpIHtcclxuXHRcdFx0XHRcdGlmIChlbEJvdHRvbSA+PSB3aW5kSGVpZ2h0ICYmIGVsQm90dG9tIDwgd2luZEhlaWdodCArIGl0ZW1FbC5vZmZzZXRIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0c2V0QWN0aXZlKGluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxhc3RTY3JvbGxUb3AgPSAoc2Nyb2xsVG9wIDw9IDAgPyAwIDogc2Nyb2xsVG9wKTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2coaW5kZXgsIGVsQm90dG9tLCBpdGVtRWwub2Zmc2V0SGVpZ2h0LCB3aW5kSGVpZ2h0LCBzY3JvbGxEaXIpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHJcblx0fSwgW10pO1xyXG5cclxuXHJcblx0Ly9UT0RPIOyKpO2BrOuhpOydtCDslYjrs7TsnbTrqbQg7Iqk7YGs66GkIOydtOuPmVxyXG5cdC8vIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8oc24gKiAxMDAsIHtcclxuXHQvLyBcdGNvbnRhaW5lcklkOiAnbGlzdEVsJyxcclxuXHQvLyBcdHNtb290aDogdHJ1ZVxyXG5cdC8vIH0pO1xyXG5cclxuXHRjb25zdCBpdGVtcyA9IGRldGFpbERhdGEubWFwKChkKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHJlZj17KGl0ZW1FbCkgPT4gaXRlbXNFbHMuY3VycmVudFtkLnNuXSA9IGl0ZW1FbH0gY2xhc3NOYW1lPXtjeCgnZGV0YWlsSXRlbXMnKX0+XHJcblx0XHRcdFx0PEVsZW1lbnQga2V5PXtkLnNufSBuYW1lPXsnc2Nyb2xsJyArIGQuc259PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+e2Quc259PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdj57ZC5jb250ZW50c308L2Rpdj5cclxuXHRcdFx0XHQ8L0VsZW1lbnQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD57aXRlbXN9PC8+XHJcblx0KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBTY3JvbGxUb3AgPSAoKSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y3goJ3Njcm9sbFRvcCcpfS8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgU3RpY2t5U2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnYmFubmVyJyl9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHNXcmFwJyl9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdzdW1tYXJ5Jyl9Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2xpc3RFbCcgY2xhc3NOYW1lPXtjeCgnbGlzdCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsTGlzdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QWN0aXZlPXtzZXRBY3RpdmV9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RldGFpbCcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGV0YWlsSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZT17c2V0QWN0aXZlfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PFNjcm9sbFRvcC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lTY3JvbGw7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9