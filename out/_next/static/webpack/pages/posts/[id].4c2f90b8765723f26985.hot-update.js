webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: __N_SSG, Post, default, getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\posts\\[id].tsx";


var __N_SSG = true;
var Post = function Post() {
  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Post);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "id", void 0);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "contents", void 0);
};
function Posts(_ref) {
  var post = _ref.post,
      length = _ref.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: post.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: ["post ", post.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: post.contents
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), post.id + 1 < length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/posts/" + (post.id + 1),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: 'nextPostBtn'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, this);
}
_c = Posts;
function getPosts() {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve([{
                  id: 0,
                  contents: 'I\'m so happy\n' + '\'Cause today I found my friends\n' + 'They\'re in my head, I\'m so ugly\n' + 'That\'s okay \'cause so are you'
                }, {
                  id: 1,
                  contents: 'Broke our mirrors\n' + 'Sunday morning is everyday for all I care\n' + 'And I\'m not scared, light my candles\n' + 'In a daze \'cause I\'ve found God'
                }, {
                  id: 2,
                  contents: 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah, yeah'
                }, {
                  id: 3,
                  contents: 'I\'m so lonely\n' + 'That\'s okay, I shaved my head\n' + 'And I\'m not sad and just maybe\n' + 'I\'m to blame for all I\'ve heard'
                }, {
                  id: 4,
                  contents: 'I\'m not sure, I\'m so excited\n' + 'I can\'t wait to meet you there\n' + 'And I don\'t care, I\'m so horny\n' + 'That\'s okay, my will is good'
                }, {
                  id: 5,
                  contents: 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah\n' + 'Yeah, yeah, yeah, yeah, yeah'
                }, {
                  id: 6,
                  contents: 'I like it, I\'m not gonna crack\n' + 'I miss you, I\'m not gonna crack\n' + 'I love you, I\'m not gonna crack\n' + 'I killed you, I\'m not gonna crack'
                }, {
                  id: 7,
                  contents: 'I like it, I\'m not gonna crack\n' + 'I miss you, I\'m not gonna crack\n' + 'I love you, I\'m not gonna crack\n' + 'I killed you, I\'m not gonna crack'
                }]);
              }, 0);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPosts.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLnRzeCJdLCJuYW1lcyI6WyJQb3N0IiwiUG9zdHMiLCJwb3N0IiwibGVuZ3RoIiwiaWQiLCJjb250ZW50cyIsImdldFBvc3RzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUEsSUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFLZSxTQUFTQyxLQUFULE9BQWlDO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQyxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0M7QUFBQSxrQkFBUUQsSUFBSSxDQUFDRTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFJQztBQUFBLDBCQUFVRixJQUFJLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQsZUFLQztBQUFBLDZCQUNDO0FBQUEsa0JBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELEVBU0VILElBQUksQ0FBQ0UsRUFBTCxHQUFVLENBQVYsR0FBY0QsTUFBZCxpQkFFWSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxhQUFhRCxJQUFJLENBQUNFLEVBQUwsR0FBVSxDQUF2QixDQUFaO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7S0FwQnVCSCxLO0FBa0NqQixTQUFlSyxRQUF0QjtBQUFBO0FBQUE7Ozt1U0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTyxJQUFJQyxPQUFKLENBQW9CLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNyREMsd0JBQVUsQ0FBQyxZQUFNO0FBQ2hCRix1QkFBTyxDQUFDLENBQ1A7QUFDQ0osb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsb0JBQ1Qsb0NBRFMsR0FFVCxxQ0FGUyxHQUdUO0FBTEYsaUJBRE8sRUFRUDtBQUNDRCxvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSx3QkFDVCw2Q0FEUyxHQUVULHlDQUZTLEdBR1Q7QUFMRixpQkFSTyxFQWVQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLDZCQUNULDBCQURTLEdBRVQsMEJBRlMsR0FHVCwwQkFIUyxHQUlULDBCQUpTLEdBS1Q7QUFQRixpQkFmTyxFQXdCUDtBQUNDRCxvQkFBRSxFQUFFLENBREw7QUFFQ0MsMEJBQVEsRUFBRSxxQkFDVCxrQ0FEUyxHQUVULG1DQUZTLEdBR1Q7QUFMRixpQkF4Qk8sRUErQlA7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUscUNBQ1QsbUNBRFMsR0FFVCxvQ0FGUyxHQUdUO0FBTEYsaUJBL0JPLEVBc0NQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLDZCQUNULDBCQURTLEdBRVQsMEJBRlMsR0FHVCwwQkFIUyxHQUlULDBCQUpTLEdBS1Q7QUFQRixpQkF0Q08sRUErQ1A7QUFDQ0Qsb0JBQUUsRUFBRSxDQURMO0FBRUNDLDBCQUFRLEVBQUUsc0NBQ1Qsb0NBRFMsR0FFVCxvQ0FGUyxHQUdUO0FBTEYsaUJBL0NPLEVBc0RQO0FBQ0NELG9CQUFFLEVBQUUsQ0FETDtBQUVDQywwQkFBUSxFQUFFLHNDQUNULG9DQURTLEdBRVQsb0NBRlMsR0FHVDtBQUxGLGlCQXRETyxDQUFELENBQVA7QUE4REEsZUEvRFMsRUErRFAsQ0EvRE8sQ0FBVjtBQWdFQSxhQWpFWSxDQURQOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9baWRdLjRjMmY5MGI4NzY1NzIzZjI2OTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0IHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdGNvbnRlbnRzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdCwgbGVuZ3RoIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPntwb3N0LmlkfTwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgxPnBvc3Qge3Bvc3QuaWR9PC9oMT5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8cD57cG9zdC5jb250ZW50c308L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cG9zdC5pZCArIDEgPCBsZW5ndGhcclxuXHRcdFx0XHQmJlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9zdHMvXCIgKyAocG9zdC5pZCArIDEpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17J25leHRQb3N0QnRuJ30+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdH1cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHRjb25zdCBwb3N0czogUG9zdFtdID0gYXdhaXQgZ2V0UG9zdHMoKTtcclxuXHRjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdCkgPT4gYC9wb3N0cy8ke3Bvc3QuaWR9YCk7XHJcblx0cmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblx0Y29uc3QgcG9zdHM6IFBvc3RbXSA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblx0Y29uc3QgcG9zdDogUG9zdCA9IHBvc3RzW3BhcmFtcy5pZF07XHJcblx0cmV0dXJuIHsgcHJvcHM6IHsgcG9zdDogcG9zdCwgbGVuZ3RoOiBwb3N0cy5sZW5ndGggfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuXHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8UG9zdFtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0cmVzb2x2ZShbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDAsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ0lcXCdtIHNvIGhhcHB5XFxuJyArXHJcblx0XHRcdFx0XHRcdCdcXCdDYXVzZSB0b2RheSBJIGZvdW5kIG15IGZyaWVuZHNcXG4nICtcclxuXHRcdFx0XHRcdFx0J1RoZXlcXCdyZSBpbiBteSBoZWFkLCBJXFwnbSBzbyB1Z2x5XFxuJyArXHJcblx0XHRcdFx0XHRcdCdUaGF0XFwncyBva2F5IFxcJ2NhdXNlIHNvIGFyZSB5b3UnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnQnJva2Ugb3VyIG1pcnJvcnNcXG4nICtcclxuXHRcdFx0XHRcdFx0J1N1bmRheSBtb3JuaW5nIGlzIGV2ZXJ5ZGF5IGZvciBhbGwgSSBjYXJlXFxuJyArXHJcblx0XHRcdFx0XHRcdCdBbmQgSVxcJ20gbm90IHNjYXJlZCwgbGlnaHQgbXkgY2FuZGxlc1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSW4gYSBkYXplIFxcJ2NhdXNlIElcXCd2ZSBmb3VuZCBHb2QnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnWWVhaCwgeWVhaCwgeWVhaCwgeWVhaCwgeWVhaCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdJXFwnbSBzbyBsb25lbHlcXG4nICtcclxuXHRcdFx0XHRcdFx0J1RoYXRcXCdzIG9rYXksIEkgc2hhdmVkIG15IGhlYWRcXG4nICtcclxuXHRcdFx0XHRcdFx0J0FuZCBJXFwnbSBub3Qgc2FkIGFuZCBqdXN0IG1heWJlXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJXFwnbSB0byBibGFtZSBmb3IgYWxsIElcXCd2ZSBoZWFyZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdJXFwnbSBub3Qgc3VyZSwgSVxcJ20gc28gZXhjaXRlZFxcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBjYW5cXCd0IHdhaXQgdG8gbWVldCB5b3UgdGhlcmVcXG4nICtcclxuXHRcdFx0XHRcdFx0J0FuZCBJIGRvblxcJ3QgY2FyZSwgSVxcJ20gc28gaG9ybnlcXG4nICtcclxuXHRcdFx0XHRcdFx0J1RoYXRcXCdzIG9rYXksIG15IHdpbGwgaXMgZ29vZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoXFxuJyArXHJcblx0XHRcdFx0XHRcdCdZZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoLCB5ZWFoJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDYsXHJcblx0XHRcdFx0XHRjb250ZW50czogJ0kgbGlrZSBpdCwgSVxcJ20gbm90IGdvbm5hIGNyYWNrXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJIG1pc3MgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2tcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kgbG92ZSB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFja1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBraWxsZWQgeW91LCBJXFwnbSBub3QgZ29ubmEgY3JhY2snXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogNyxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnSSBsaWtlIGl0LCBJXFwnbSBub3QgZ29ubmEgY3JhY2tcXG4nICtcclxuXHRcdFx0XHRcdFx0J0kgbWlzcyB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFja1xcbicgK1xyXG5cdFx0XHRcdFx0XHQnSSBsb3ZlIHlvdSwgSVxcJ20gbm90IGdvbm5hIGNyYWNrXFxuJyArXHJcblx0XHRcdFx0XHRcdCdJIGtpbGxlZCB5b3UsIElcXCdtIG5vdCBnb25uYSBjcmFjaydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdKVxyXG5cdFx0fSwgMClcclxuXHR9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=