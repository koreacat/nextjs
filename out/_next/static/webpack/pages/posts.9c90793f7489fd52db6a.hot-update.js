webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/[id].tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default, getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\[id].tsx",
    _s = $RefreshSig$();


var __N_SSG = true;
function Post() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var rs;
      return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getPosts();

            case 2:
              rs = _context.sent;
              console.log(rs);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "post"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, this);
} // export async function getStaticPaths() {
// 	const posts = await getPosts();
// 	// const paths = posts.map((post) => `/posts/${post.id}`);
// 	// return { paths, fallback: false }
// }

_s(Post, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Post;
function getPosts() {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve([{
                  id: '0',
                  contents: 'I\'m so happy'
                }, {
                  id: '1',
                  contents: 'cause today found my friends'
                }, {
                  id: '2',
                  contents: 'They\'re in my head,'
                }, {
                  id: '3',
                  contents: 'I\'m so ugly'
                }]);
              }, 1000);
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPosts.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMudHN4Il0sIm5hbWVzIjpbIlBvc3QiLCJ1c2VFZmZlY3QiLCJnZXRQb3N0cyIsInJzIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImlkIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTlCQyx5REFBUyxDQUFDLFlBQU07QUFDZiw2UkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNpQkMsUUFBUSxFQUR6Qjs7QUFBQTtBQUNNQyxnQkFETjtBQUVBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEVBQVo7O0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUlBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDQztBQUFBLDJCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0EsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBcEJ3QkgsSTs7S0FBQUEsSTtBQTZCakIsU0FBZUUsUUFBdEI7QUFBQTtBQUFBOzs7dVNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ08sSUFBSUksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3Q0Msd0JBQVUsQ0FBQyxZQUFNO0FBQ2hCRix1QkFBTyxDQUFDLENBQ1A7QUFDQ0csb0JBQUUsRUFBRSxHQURMO0FBRUNDLDBCQUFRLEVBQUU7QUFGWCxpQkFETyxFQUtQO0FBQ0NELG9CQUFFLEVBQUUsR0FETDtBQUVDQywwQkFBUSxFQUFFO0FBRlgsaUJBTE8sRUFTUDtBQUNDRCxvQkFBRSxFQUFFLEdBREw7QUFFQ0MsMEJBQVEsRUFBRTtBQUZYLGlCQVRPLEVBYVA7QUFDQ0Qsb0JBQUUsRUFBRSxHQURMO0FBRUNDLDBCQUFRLEVBQUU7QUFGWCxpQkFiTyxDQUFELENBQVA7QUFrQkEsZUFuQlMsRUFtQlAsSUFuQk8sQ0FBVjtBQW9CQSxhQXJCWSxDQURQOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy45YzkwNzkzZjc0ODlmZDUyZGI2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoKSB7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBycyA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJzKTtcclxuXHRcdH0pKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgxPnBvc3Q8L2gxPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vIFx0Y29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xyXG4vLyBcdC8vIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiBgL3Bvc3RzLyR7cG9zdC5pZH1gKTtcclxuLy8gXHQvLyByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuXHQvLyBjb25zdCBwb3N0ID1cclxuXHJcblx0cmV0dXJuIHsgcHJvcHM6IHsgIH0gfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xyXG5cdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0cmVzb2x2ZShbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICcwJyxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnSVxcJ20gc28gaGFwcHknXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJzEnLFxyXG5cdFx0XHRcdFx0Y29udGVudHM6ICdjYXVzZSB0b2RheSBmb3VuZCBteSBmcmllbmRzJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICcyJyxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnVGhleVxcJ3JlIGluIG15IGhlYWQsJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICczJyxcclxuXHRcdFx0XHRcdGNvbnRlbnRzOiAnSVxcJ20gc28gdWdseSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdKVxyXG5cdFx0fSwgMTAwMClcclxuXHR9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
