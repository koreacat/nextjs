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
    children: [getMenuEl('page', menu.page), getMenuEl('Components', menu.components), getMenuEl('Effect', menu.effect), getMenuEl('Chracter', menu.charcter), getMenuEl('WebGL', menu.webgl)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsInRpdGxlIiwiYXJyIiwibWFwIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMseURBQWhCLENBQVg7QUFFQSxJQUFNQyxJQUFJLEdBQUc7QUFDWEMsTUFBSSxFQUFFLENBQ0o7QUFDRUMsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQURJLEVBS0o7QUFDRUQsUUFBSSxFQUFFLGNBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQUxJLEVBU0o7QUFDRUQsUUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLFFBQUQ7QUFGUixHQVRJLEVBYUo7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FiSSxDQURLO0FBbUJYQyxZQUFVLEVBQUUsQ0FDVjtBQUNFRixRQUFJLEVBQUUsT0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFEO0FBRlIsR0FEVSxFQUtWO0FBQ0VELFFBQUksRUFBRSxVQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FMVSxFQVNWO0FBQ0VELFFBQUksRUFBRSxRQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQVRVLEVBYVY7QUFDRUQsUUFBSSxFQUFFLFlBRFI7QUFF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQW5DRDs7S0FBTUMsSztBQXFDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDFlOTIxNjczNGQ3ZTM2ZjBlMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICBwYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhaUludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3RpY2t5U2Nyb2xsJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXNrSW50ZXJhY3Rpb24nLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWF0Y2hJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNvbXBvbmVudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvdW50JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2tvcmVhTWFwJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzbGlkZXInLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29tcG9uZW50cycsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFkYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbGluZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2J1YmJsZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpbWFnZUNyb3AnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBlZmZlY3Q6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dhdmUnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhcmN0ZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NodW5TaWsnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgd2ViZ2w6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dlYkdMJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3RyZWVqcycsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0TWVudUVsID0gKHRpdGxlLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IG1lbnUgPSBhcnIubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICB7dHlwZS5tYXAoKGQpID0+IDxpIGNsYXNzTmFtZT17Y3goZCl9PntkfTwvaT4pfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+UGFnZTwvaDE+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge21lbnV9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KCd3cmFwJyl9PlxyXG4gICAgICB7Z2V0TWVudUVsKCdwYWdlJywgbWVudS5wYWdlKX1cclxuICAgICAge2dldE1lbnVFbCgnQ29tcG9uZW50cycsIG1lbnUuY29tcG9uZW50cyl9XHJcbiAgICAgIHtnZXRNZW51RWwoJ0VmZmVjdCcsIG1lbnUuZWZmZWN0KX1cclxuICAgICAge2dldE1lbnVFbCgnQ2hyYWN0ZXInLCBtZW51LmNoYXJjdGVyKX1cclxuICAgICAge2dldE1lbnVFbCgnV2ViR0wnLCBtZW51LndlYmdsKX1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==