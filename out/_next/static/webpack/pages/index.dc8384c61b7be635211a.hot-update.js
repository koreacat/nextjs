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
  var getMenuEl = function getMenuEl(title, arr) {
    var menu = arr.map(function (_ref) {
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
                lineNumber: 97,
                columnNumber: 30
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, _this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: cx('title'),
        children: "Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: [getMenuEl('page', menu.page), getMenuEl('Components', menu.components), getMenuEl('Effect', menu.effect), getMenuEl('Chracter', menu.charcter), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: cx('title'),
      children: "WebGL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: getMenuEl(menu.webgl)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsInRpdGxlIiwiYXJyIiwibWFwIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMseURBQWhCLENBQVg7QUFFQSxJQUFNQyxJQUFJLEdBQUc7QUFDWEMsTUFBSSxFQUFFLENBQ0o7QUFDRUMsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQURJLEVBS0o7QUFDRUQsUUFBSSxFQUFFLGNBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQUxJLEVBU0o7QUFDRUQsUUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLFFBQUQ7QUFGUixHQVRJLEVBYUo7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FiSSxDQURLO0FBbUJYQyxZQUFVLEVBQUUsQ0FDVjtBQUNFRixRQUFJLEVBQUUsT0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFEO0FBRlIsR0FEVSxFQUtWO0FBQ0VELFFBQUksRUFBRSxVQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FMVSxFQVNWO0FBQ0VELFFBQUksRUFBRSxRQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQVRVLEVBYVY7QUFDRUQsUUFBSSxFQUFFLFlBRFI7QUFF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O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFO0FBQUEsZ0JBQ0dhLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDTyxLQUFOO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0F4Q0Q7O0tBQU1DLEs7QUEwQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjODM4NGM2MWI3YmU2MzUyMTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IG1lbnUgPSB7XHJcbiAgcGFnZTogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYWlJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3N0aWNreVNjcm9sbCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWFza0ludGVyYWN0aW9uJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ21hdGNoSW50cm9kdWNlJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBjb21wb25lbnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjb3VudCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdrb3JlYU1hcCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2xpZGVyJyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvbXBvbmVudHMnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2JhckNoYXJ0JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JhZGFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2xpbmVDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdidWJibGVDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJywgJ25ldyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnaW1hZ2VDcm9wJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnY2FudmFzJywgJ25ldyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZWZmZWN0OiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd3YXZlJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNoYXJjdGVyOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjaHVuU2lrJyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIHdlYmdsOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd3ZWJHTCcsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd0cmVlanMnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGdldE1lbnVFbCA9ICh0aXRsZSwgYXJyKSA9PiB7XHJcbiAgICBjb25zdCBtZW51ID0gYXJyLm1hcCgoeyBuYW1lLCB0eXBlIH0pID0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3goJ2NvbnRlbnRzJyl9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAge3R5cGUubWFwKChkKSA9PiA8aSBjbGFzc05hbWU9e2N4KGQpfT57ZH08L2k+KX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9PlBhZ2U8L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHttZW51fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAge2dldE1lbnVFbCgncGFnZScsIG1lbnUucGFnZSl9XHJcbiAgICAgIHtnZXRNZW51RWwoJ0NvbXBvbmVudHMnLCBtZW51LmNvbXBvbmVudHMpfVxyXG4gICAgICB7Z2V0TWVudUVsKCdFZmZlY3QnLCBtZW51LmVmZmVjdCl9XHJcbiAgICAgIHtnZXRNZW51RWwoJ0NocmFjdGVyJywgbWVudS5jaGFyY3Rlcil9XHJcblxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9PldlYkdMPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtnZXRNZW51RWwobWVudS53ZWJnbCl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxociAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=