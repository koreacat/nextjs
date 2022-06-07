webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/components/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\kj996\\project\\nextjs\\src\\components\\index.tsx",
    _this = undefined;




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
var titles = ['page', 'components', 'effect', 'character', 'webgl'];
var menu = {
  page: [{
    name: 'aiIntroduce',
    type: ['dom', 'svg']
  }, {
    name: 'stickyScroll',
    type: ['dom', 'svg']
  }, {
    name: 'maskInteraction',
    type: ['canvas']
  }, {
    name: 'matchIntroduce',
    type: ['dom', 'new']
  }],
  components: [{
    name: 'count',
    type: ['dom']
  }, {
    name: 'koreaMap',
    type: ['dom', 'svg']
  }, {
    name: 'slider',
    type: ['dom']
  }, {
    name: 'components',
    type: ['dom', 'svg']
  }, {
    name: 'barChart',
    type: ['dom']
  }, {
    name: 'radarChart',
    type: ['dom', 'svg']
  }, {
    name: 'lineChart',
    type: ['svg']
  }, {
    name: 'bubbleChart',
    type: ['canvas', 'new']
  }, {
    name: 'imageCrop',
    type: ['dom', 'canvas', 'new']
  }],
  effect: [{
    name: 'wave',
    type: ['canvas']
  }],
  charcter: [{
    name: 'chunSik',
    type: ['dom']
  }],
  webgl: [{
    name: 'webGL',
    type: ['canvas']
  }, {
    name: 'treejs',
    type: ['canvas']
  }]
};

var Index = function Index() {
  var getMenuEl = function getMenuEl(titles, menu) {
    console.log(titles);
    return titles.map(function (title) {
      var menuEl = menu[title].map(function (_ref) {
        var name = _ref.name,
            type = _ref.type;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/".concat(name),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: cx('contents'),
              children: [name, type.map(function (d) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: cx(d),
                  children: d
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 32
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, _this);
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: cx('title'),
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: menuEl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: getMenuEl()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJ0aXRsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ0aXRsZSIsIm1lbnVFbCIsImQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLHNEQUFVLENBQUNDLElBQVgsQ0FBZ0JDLHlEQUFoQixDQUFYO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsUUFBdkIsRUFBaUMsV0FBakMsRUFBOEMsT0FBOUMsQ0FBZjtBQUVBLElBQU1DLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUUsQ0FDSjtBQUNFQyxRQUFJLEVBQUUsYUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBREksRUFLSjtBQUNFRCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBTEksRUFTSjtBQUNFRCxRQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsUUFBRDtBQUZSLEdBVEksRUFhSjtBQUNFRCxRQUFJLEVBQUUsZ0JBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQWJJLENBREs7QUFtQlhDLFlBQVUsRUFBRSxDQUNWO0FBQ0VGLFFBQUksRUFBRSxPQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQURVLEVBS1Y7QUFDRUQsUUFBSSxFQUFFLFVBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxF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R2MsU0FBUztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBakNEOztLQUFNRCxLO0FBbUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZDcyYTlmOGM3ZWQ2MGE0OWE3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5jb25zdCB0aXRsZXMgPSBbJ3BhZ2UnLCAnY29tcG9uZW50cycsICdlZmZlY3QnLCAnY2hhcmFjdGVyJywgJ3dlYmdsJ107XHJcblxyXG5jb25zdCBtZW51ID0ge1xyXG4gIHBhZ2U6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2FpSW50cm9kdWNlJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzdGlja3lTY3JvbGwnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ21hc2tJbnRlcmFjdGlvbicsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXRjaEludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ25ldyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY29tcG9uZW50czogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY291bnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAna29yZWFNYXAnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NsaWRlcicsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjb21wb25lbnRzJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdiYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyYWRhckNoYXJ0JyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdsaW5lQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYnViYmxlQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcycsICduZXcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2ltYWdlQ3JvcCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ2NhbnZhcycsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGVmZmVjdDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnd2F2ZScsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFyY3RlcjogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY2h1blNpaycsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgXSxcclxuICB3ZWJnbDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnd2ViR0wnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAndHJlZWpzJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBnZXRNZW51RWwgPSAodGl0bGVzLCBtZW51KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZXMpO1xyXG4gICAgcmV0dXJuIHRpdGxlcy5tYXAodGl0bGUgPT4ge1xyXG4gICAgICBjb25zdCBtZW51RWwgPSBtZW51W3RpdGxlXS5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICB7dHlwZS5tYXAoKGQpID0+IDxpIGNsYXNzTmFtZT17Y3goZCl9PntkfTwvaT4pfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge21lbnVFbH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcbiAgICAgIHtnZXRNZW51RWwoKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9