webpackHotUpdate_N_E("pages/staticGeneration",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/common/contents/contents.module.scss":
false,

/***/ "./pages/staticGeneration.tsx":
/*!************************************!*\
  !*** ./pages/staticGeneration.tsx ***!
  \************************************/
/*! exports provided: __N_SSG, Employee, getData, employ, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employ", function() { return employ; });
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_common_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/common/layout */ "./src/components/common/layout/index.tsx");






var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\staticGeneration.tsx",
    _this = undefined,
    _s = $RefreshSig$();




/**
 * static generation 테스트
 * getStaticProps 메서드로 static generation 구현
 */

var __N_SSG = true;
var Employee = function Employee(id, name) {
  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Employee);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "id", void 0);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "name", void 0);

  this.id = id;
  this.name = name;
};

var EmployeeInfo = function EmployeeInfo(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: ["id: ", props.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: ["name: ", props.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, _this);
};

_c = EmployeeInfo;

function StaticGeneration(_ref) {
  _s();

  var data = _ref.data;
  var employee01 = data.employee01;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(new Employee()),
      employee02 = _useState[0],
      setEmployee02 = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var rs;
      return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getData();

            case 2:
              rs = _context.sent;
              setEmployee02(new Employee(rs.id, rs.name));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Static Generation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "Static Generation",
        content: "Static Generation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Static Generation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EmployeeInfo, {
      title: 'Static Generation',
      id: employee01.id,
      name: employee01.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(EmployeeInfo, {
      title: 'CSR',
      id: employee02.id,
      name: employee02.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, this);
} //static generation


_s(StaticGeneration, "yd1099dP55TkkkRfmpfJ6y3AnoY=");

_c2 = StaticGeneration;
function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return employ(new Employee('kj9966', '바블'), 2000);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getData.apply(this, arguments);
}

function employ(_x, _x2) {
  return _employ.apply(this, arguments);
}

function _employ() {
  _employ = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(employee, timeout) {
    return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve({
                  id: employee.id,
                  name: employee.name
                });
              }, timeout);
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _employ.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (StaticGeneration);

var _c, _c2;

$RefreshReg$(_c, "EmployeeInfo");
$RefreshReg$(_c2, "StaticGeneration");

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

/***/ "./src/components/common/contents/contents.module.scss":
false,

/***/ "./src/components/common/contents/index.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RhdGljR2VuZXJhdGlvbi50c3giXSwibmFtZXMiOlsiRW1wbG95ZWUiLCJpZCIsIm5hbWUiLCJFbXBsb3llZUluZm8iLCJwcm9wcyIsInRpdGxlIiwiU3RhdGljR2VuZXJhdGlvbiIsImRhdGEiLCJlbXBsb3llZTAxIiwidXNlU3RhdGUiLCJlbXBsb3llZTAyIiwic2V0RW1wbG95ZWUwMiIsInVzZUVmZmVjdCIsImdldERhdGEiLCJycyIsImVtcGxveSIsImVtcGxveWVlIiwidGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFTyxJQUFNQSxRQUFiLEdBSUMsa0JBQVlDLEVBQVosRUFBeUJDLElBQXpCLEVBQXdDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3ZDLE9BQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLENBUEY7O0FBZ0JBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBNEI7QUFDaEQsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFTQSxLQUFLLENBQUNDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUM7QUFBQSx5QkFBVUQsS0FBSyxDQUFDSCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQUdDO0FBQUEsMkJBQVlHLEtBQUssQ0FBQ0YsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFPQSxDQVJEOztLQUFNQyxZOztBQWdCTixTQUFTRyxnQkFBVCxPQUF5RDtBQUFBOztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUNqREMsVUFEaUQsR0FDbkNELElBRG1DLENBQ2pEQyxVQURpRDs7QUFBQSxrQkFFcEJDLHNEQUFRLENBQUMsSUFBSVQsUUFBSixFQUFELENBRlk7QUFBQSxNQUVqRFUsVUFGaUQ7QUFBQSxNQUVyQ0MsYUFGcUM7O0FBSXhEQyx5REFBUyxDQUFDLFlBQU07QUFDZiw2UkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNpQkMsT0FBTyxFQUR4Qjs7QUFBQTtBQUNNQyxnQkFETjtBQUVBSCwyQkFBYSxDQUFDLElBQUlYLFFBQUosQ0FBYWMsRUFBRSxDQUFDYixFQUFoQixFQUFvQmEsRUFBRSxDQUFDWixJQUF2QixDQUFELENBQWI7O0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUlBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDQyxxRUFBQyxxRUFBRDtBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQU0sWUFBSSxFQUFDLG1CQUFYO0FBQStCLGVBQU8sRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBTUMscUVBQUMsWUFBRDtBQUNDLFdBQUssRUFBRSxtQkFEUjtBQUVDLFFBQUUsRUFBRU0sVUFBVSxDQUFDUCxFQUZoQjtBQUdDLFVBQUksRUFBRU8sVUFBVSxDQUFDTjtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEQsZUFZQyxxRUFBQyxZQUFEO0FBQ0MsV0FBSyxFQUFFLEtBRFI7QUFFQyxRQUFFLEVBQUVRLFVBQVUsQ0FBQ1QsRUFGaEI7QUFHQyxVQUFJLEVBQUVTLFVBQVUsQ0FBQ1I7QUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBb0JBLEMsQ0FFRDs7O0dBakNTSSxnQjs7TUFBQUEsZ0I7QUE0Q0YsU0FBZU8sT0FBdEI7QUFBQTtBQUFBOzs7c1NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRU9FLE1BQU0sQ0FBQyxJQUFJZixRQUFKLENBQWEsUUFBYixFQUF1QixJQUF2QixDQUFELEVBQStCLElBQS9CLENBRmI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBS0EsU0FBZWUsTUFBdEI7QUFBQTtBQUFBOzs7cVNBQU8sa0JBQXNCQyxRQUF0QixFQUEwQ0MsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ08sSUFBSUMsT0FBSixDQUFzQixVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkRDLHdCQUFVLENBQUMsWUFBTTtBQUNoQkYsdUJBQU8sQ0FBQztBQUNQbEIsb0JBQUUsRUFBRWUsUUFBUSxDQUFDZixFQUROO0FBRVBDLHNCQUFJLEVBQUVjLFFBQVEsQ0FBQ2Q7QUFGUixpQkFBRCxDQUFQO0FBSUEsZUFMUyxFQUtQZSxPQUxPLENBQVY7QUFNQSxhQVBZLENBRFA7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBV1FYLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YXRpY0dlbmVyYXRpb24uZTA5MmU1YmJiMjczYjdiNjlhMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sYXlvdXRcIjtcclxuXHJcbi8qKlxyXG4gKiBzdGF0aWMgZ2VuZXJhdGlvbiDthYzsiqTtirhcclxuICogZ2V0U3RhdGljUHJvcHMg66mU7ISc65Oc66GcIHN0YXRpYyBnZW5lcmF0aW9uIOq1rO2YhFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZSB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVtcGxveUluZm9Qcm9wcyB7XHJcblx0dGl0bGU6IHN0cmluZyxcclxuXHRpZDogc3RyaW5nLFxyXG5cdG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBFbXBsb3llZUluZm8gPSAocHJvcHM6IEVtcGxveUluZm9Qcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8c3Ryb25nPntwcm9wcy50aXRsZX08L3N0cm9uZz5cclxuXHRcdFx0PGRpdj5pZDoge3Byb3BzLmlkfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pm5hbWU6IHtwcm9wcy5uYW1lfTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN0YXRpY0dlbmVyYXRpb25Qcm9wcyB7XHJcblx0ZGF0YToge1xyXG5cdFx0ZW1wbG95ZWUwMTogRW1wbG95ZWVcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXRpY0dlbmVyYXRpb24oe2RhdGF9OiBTdGF0aWNHZW5lcmF0aW9uUHJvcHMpIHtcclxuXHRjb25zdCB7ZW1wbG95ZWUwMX0gPSBkYXRhO1xyXG5cdGNvbnN0IFtlbXBsb3llZTAyLCBzZXRFbXBsb3llZTAyXSA9IHVzZVN0YXRlKG5ldyBFbXBsb3llZSgpKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJzID0gYXdhaXQgZ2V0RGF0YSgpO1xyXG5cdFx0XHRzZXRFbXBsb3llZTAyKG5ldyBFbXBsb3llZShycy5pZCwgcnMubmFtZSkpO1xyXG5cdFx0fSkoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+U3RhdGljIEdlbmVyYXRpb248L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJTdGF0aWMgR2VuZXJhdGlvblwiIGNvbnRlbnQ9XCJTdGF0aWMgR2VuZXJhdGlvblwiLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8aDE+U3RhdGljIEdlbmVyYXRpb248L2gxPlxyXG5cdFx0XHQ8RW1wbG95ZWVJbmZvXHJcblx0XHRcdFx0dGl0bGU9eydTdGF0aWMgR2VuZXJhdGlvbid9XHJcblx0XHRcdFx0aWQ9e2VtcGxveWVlMDEuaWR9XHJcblx0XHRcdFx0bmFtZT17ZW1wbG95ZWUwMS5uYW1lfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aHIvPlxyXG5cdFx0XHQ8RW1wbG95ZWVJbmZvXHJcblx0XHRcdFx0dGl0bGU9eydDU1InfVxyXG5cdFx0XHRcdGlkPXtlbXBsb3llZTAyLmlkfVxyXG5cdFx0XHRcdG5hbWU9e2VtcGxveWVlMDIubmFtZX1cclxuXHRcdFx0Lz5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdClcclxufVxyXG5cclxuLy9zdGF0aWMgZ2VuZXJhdGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRlbXBsb3llZTAxOiBhd2FpdCBlbXBsb3kobmV3IEVtcGxveWVlKCdqZ20wNTMxJywgJ+yngOqyveuvvCcpLCAwKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuXHQvLyByZXR1cm4gYXhpb3MuZ2V0PEVtcGxveWVlPihgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9lbXBsb3lgKTtcclxuXHRyZXR1cm4gYXdhaXQgZW1wbG95KG5ldyBFbXBsb3llZSgna2o5OTY2JywgJ+uwlOu4lCcpLCAyMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtcGxveShlbXBsb3llZTogRW1wbG95ZWUsIHRpbWVvdXQ6IG51bWJlcikge1xyXG5cdHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTxFbXBsb3llZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHJlc29sdmUoe1xyXG5cdFx0XHRcdGlkOiBlbXBsb3llZS5pZCxcclxuXHRcdFx0XHRuYW1lOiBlbXBsb3llZS5uYW1lXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgdGltZW91dClcclxuXHR9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGljR2VuZXJhdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==