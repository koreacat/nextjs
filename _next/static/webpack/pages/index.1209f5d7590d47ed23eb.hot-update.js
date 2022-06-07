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
  var getMenuEl = function getMenuEl(arr) {
    return arr.map(function (_ref) {
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
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: cx('title'),
      children: "Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: getMenuEl(menu.page)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: cx('title'),
      children: "Components"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: menu.components.map(function (_ref2) {
        var name = _ref2.name,
            type = _ref2.type;
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
                  lineNumber: 120,
                  columnNumber: 36
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: cx('title'),
      children: "Effect"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: menu.effect.map(function (_ref3) {
        var name = _ref3.name,
            type = _ref3.type;
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
                  lineNumber: 138,
                  columnNumber: 36
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: cx('title'),
      children: "Chracter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: menu.charcter.map(function (_ref4) {
        var name = _ref4.name,
            type = _ref4.type;
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
                  lineNumber: 156,
                  columnNumber: 36
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: cx('title'),
      children: "WebGL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: menu.webgl.map(function (_ref5) {
        var name = _ref5.name,
            type = _ref5.type;
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
                  lineNumber: 174,
                  columnNumber: 36
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImN4IiwiY2xhc3NuYW1lcyIsImJpbmQiLCJzdHlsZXMiLCJtZW51IiwicGFnZSIsIm5hbWUiLCJ0eXBlIiwiY29tcG9uZW50cyIsImVmZmVjdCIsImNoYXJjdGVyIiwid2ViZ2wiLCJJbmRleCIsImdldE1lbnVFbCIsImFyciIsIm1hcCIsImQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMseURBQWhCLENBQVg7QUFFQSxJQUFNQyxJQUFJLEdBQUc7QUFDWEMsTUFBSSxFQUFFLENBQ0o7QUFDRUMsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQURJLEVBS0o7QUFDRUQsUUFBSSxFQUFFLGNBRFI7QUFFRUMsUUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGUixHQUxJLEVBU0o7QUFDRUQsUUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLFFBQUQ7QUFGUixHQVRJLEVBYUo7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FiSSxDQURLO0FBbUJYQyxZQUFVLEVBQUUsQ0FDVjtBQUNFRixRQUFJLEVBQUUsT0FEUjtBQUVFQyxRQUFJLEVBQUUsQ0FBQyxLQUFEO0FBRlIsR0FEVSxFQUtWO0FBQ0VELFFBQUksRUFBRSxVQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRlIsR0FMVSxFQVNWO0FBQ0VELFFBQUksRUFBRSxRQURSO0FBRUVDLFFBQUksRUFBRSxDQUFDLEtBQUQ7QUFGUixHQVRVLEVBYVY7QUFDRUQsUUFBSSxFQUFFLFlBRFI7QUFFRUMsUUFBSSxF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RTtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksYUFBTUQsSUFBTixDQUFWO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFFTixFQUFFLENBQUMsVUFBRCxDQUFoQjtBQUFBLHlCQUNHTSxJQURILEVBRUdDLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxvQ0FBTztBQUFHLDJCQUFTLEVBQUVoQixFQUFFLENBQUNnQixDQUFELENBQWhCO0FBQUEsNEJBQXNCQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBQUEsZUFBVCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBVUQsT0FYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5REYsZUE2RUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlGRCxDQWhHRDs7S0FBTUosSztBQWtHU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTIwOWY1ZDc1OTBkNDdlZDIzZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjeCA9IGNsYXNzbmFtZXMuYmluZChzdHlsZXMpO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICBwYWdlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhaUludHJvZHVjZScsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3RpY2t5U2Nyb2xsJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdtYXNrSW50ZXJhY3Rpb24nLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbWF0Y2hJbnRyb2R1Y2UnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICduZXcnXVxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNvbXBvbmVudHM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NvdW50JyxcclxuICAgICAgdHlwZTogWydkb20nXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2tvcmVhTWFwJyxcclxuICAgICAgdHlwZTogWydkb20nLCAnc3ZnJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzbGlkZXInLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29tcG9uZW50cycsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmFyQ2hhcnQnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFkYXJDaGFydCcsXHJcbiAgICAgIHR5cGU6IFsnZG9tJywgJ3N2ZyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbGluZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydzdmcnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2J1YmJsZUNoYXJ0JyxcclxuICAgICAgdHlwZTogWydjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpbWFnZUNyb3AnLFxyXG4gICAgICB0eXBlOiBbJ2RvbScsICdjYW52YXMnLCAnbmV3J11cclxuICAgIH0sXHJcbiAgXSxcclxuICBlZmZlY3Q6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dhdmUnLFxyXG4gICAgICB0eXBlOiBbJ2NhbnZhcyddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhcmN0ZXI6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2NodW5TaWsnLFxyXG4gICAgICB0eXBlOiBbJ2RvbSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgd2ViZ2w6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3dlYkdMJyxcclxuICAgICAgdHlwZTogWydjYW52YXMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3RyZWVqcycsXHJcbiAgICAgIHR5cGU6IFsnY2FudmFzJ11cclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZ2V0TWVudUVsID0gKGFycikgPT5cclxuICAgIGFyci5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIHt0eXBlLm1hcCgoZCkgPT4gPGkgY2xhc3NOYW1lPXtjeChkKX0+e2R9PC9pPil9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeCgnd3JhcCcpfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17Y3goJ3RpdGxlJyl9PlBhZ2U8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2dldE1lbnVFbChtZW51LnBhZ2UpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8aHIgLz5cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT5Db21wb25lbnRzPC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHttZW51LmNvbXBvbmVudHMubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCgnY29udGVudHMnKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICB7dHlwZS5tYXAoKGQpID0+IDxpIGNsYXNzTmFtZT17Y3goZCl9PntkfTwvaT4pfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGhyIC8+XHJcblxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtjeCgndGl0bGUnKX0+RWZmZWN0PC9oMT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHttZW51LmVmZmVjdC5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlLm1hcCgoZCkgPT4gPGkgY2xhc3NOYW1lPXtjeChkKX0+e2R9PC9pPil9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8aHIgLz5cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT5DaHJhY3RlcjwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWVudS5jaGFyY3Rlci5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlLm1hcCgoZCkgPT4gPGkgY2xhc3NOYW1lPXtjeChkKX0+e2R9PC9pPil9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8aHIgLz5cclxuXHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e2N4KCd0aXRsZScpfT5XZWJHTDwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWVudS53ZWJnbC5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KCdjb250ZW50cycpfT5cclxuICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlLm1hcCgoZCkgPT4gPGkgY2xhc3NOYW1lPXtjeChkKX0+e2R9PC9pPil9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8aHIgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9