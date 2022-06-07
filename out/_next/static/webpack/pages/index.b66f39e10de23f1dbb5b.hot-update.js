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
                lineNumber: 99,
                columnNumber: 30
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }, _this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: cx('title'),
        children: "Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: [getMenuEl('page', menu.page), getMenuEl('Components', menu.components), getMenuEl('Effect', menu.effect), getMenuEl('Chracter', menu.charcter), getMenuEl('WebGL', menu.webgl)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJ0aXRsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsInRpdGxlIiwiYXJyIiwibWFwIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMseURBQWhCLENBQVg7QUFFQSxJQUFNQyxNQUFNLEdBQUcsQ0FBRSxNQUFGLEVBQVUsWUFBVixFQUF3QixRQUF4QixFQUFrQyxXQUFsQyxFQUErQyxPQUEvQyxDQUFmO0FBRUEsSUFBTUMsSUFBSSxHQUFHO0FBQ1hDLE1BQUksRUFBRSxDQUNKO0FBQ0VDLFFBQUksRUFBRSxhQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FESSxFQUtKO0FBQ0VELFFBQUksRUFBRSxjQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FMSSxFQVNKO0FBQ0VELFFBQUksRUFBRSxpQkFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxRQUFEO0FBRlIsR0FUSSxFQWFKO0FBQ0VELFFBQUksRUFBRSxnQkFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBYkksQ0FESztBQW1CWEMsWUFBVSxFQUFFLENBQ1Y7QUFDRUYsUUFBSSxFQUFFLE9BRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRDtBQUZSLEdBRFUsRUFLVjtBQUNFRCxRQUFJLEVBQUUsVUFEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZSLEdBTFUs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UyxDQUFDLFVBQUQsRUFBYVQsSUFBSSxDQUFDTSxRQUFsQixDQUpaLEVBS0dHLFNBQVMsQ0FBQyxPQUFELEVBQVVULElBQUksQ0FBQ08sS0FBZixDQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FsQ0Q7O0tBQU1DLEs7QUFvQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2NmYzOWUxMGRlMjNmMWRiYjViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzL2JpbmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY3ggPSBjbGFzc25hbWVzLmJpbmQoc3R5bGVzKTtcclxuXHJcbmNvbnN0IHRpdGxlcyA9IFsgJ3BhZ2UnLCAnY29tcG9uZW50cycsICdlZmZlY3QnLCAnY2hhcmFjdGVyJywgJ3dlYmdsJyBdO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICBwYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhaUludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3RpY2t5U2Nyb2xsJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXNrSW50ZXJhY3Rpb24nLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWF0Y2hJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNvbXBvbmVudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvdW50JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2tvcmVhTWFwJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzbGlkZXInLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29tcG9uZW50cycsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFkYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbGluZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2J1YmJsZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpbWFnZUNyb3AnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBlZmZlY3Q6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dhdmUnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhcmN0ZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NodW5TaWsnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgd2ViZ2w6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dlYkdMJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3RyZWVqcycsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0TWVudUVsID0gKHRpdGxlLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IG1lbnUgPSBhcnIubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICB7dHlwZS5tYXAoKGQpID0+IDxpIGNsYXNzTmFtZT17Y3goZCl9PntkfTwvaT4pfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+UGFnZTwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21lbnV9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICB7Z2V0TWVudUVsKCdwYWdlJywgbWVudS5wYWdlKX1cclxuICAgICAge2dldE1lbnVFbCgnQ29tcG9uZW50cycsIG1lbnUuY29tcG9uZW50cyl9XHJcbiAgICAgIHtnZXRNZW51RWwoJ0VmZmVjdCcsIG1lbnUuZWZmZWN0KX1cclxuICAgICAge2dldE1lbnVFbCgnQ2hyYWN0ZXInLCBtZW51LmNoYXJjdGVyKX1cclxuICAgICAge2dldE1lbnVFbCgnV2ViR0wnLCBtZW51LndlYmdsKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9