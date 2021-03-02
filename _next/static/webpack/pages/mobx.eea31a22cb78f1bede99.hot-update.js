webpackHotUpdate_N_E("pages/mobx",{

/***/ "./store/mobxStore.ts":
/*!****************************!*\
  !*** ./store/mobxStore.ts ***!
  \****************************/
/*! exports provided: default, getCat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobxStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCat", function() { return getCat; });
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");









var _class, _descriptor, _descriptor2, _temp;


var MobxStore = (_class = (_temp = /*#__PURE__*/function () {
  function MobxStore() {
    var _this = this;

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MobxStore);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_type", _descriptor, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_age", _descriptor2, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "init", function () {
      setTimeout(function () {
        _this.setType('코숏(init)');

        _this.setAge(1);
      }, 1000);
    });

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "load", /*#__PURE__*/Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getCat();

            case 2:
              data = _context.sent;

              _this.setAge(data.age);

              _this.setType(data.type);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "setType", function (value) {
      _this._type = value;
    });

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "setAge", function (value) {
      _this._age = value;
    });

    this.init();
    this.load();
  }

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MobxStore, [{
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "age",
    get: function get() {
      return this._age;
    }
  }]);

  return MobxStore;
}(), _temp), (_descriptor = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "_type", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__["default"])(_class.prototype, "_age", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);


var Cat = function Cat() {
  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Cat);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "type", void 0);

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "age", void 0);
};

function getCat() {
  return _getCat.apply(this, arguments);
}

function _getCat() {
  _getCat = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve({
                  type: '러시안블루(CSR)',
                  age: 2
                });
              }, 2000);
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
  return _getCat.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbW9ieFN0b3JlLnRzIl0sIm5hbWVzIjpbIk1vYnhTdG9yZSIsInNldFRpbWVvdXQiLCJzZXRUeXBlIiwic2V0QWdlIiwiZ2V0Q2F0IiwiZGF0YSIsImFnZSIsInR5cGUiLCJ2YWx1ZSIsIl90eXBlIiwiX2FnZSIsImluaXQiLCJsb2FkIiwib2JzZXJ2YWJsZSIsIkNhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFcUJBLFM7QUFJcEIsdUJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxnS0FLTixZQUFNO0FBQ2JDLGdCQUFVLENBQUMsWUFBTTtBQUNoQixhQUFJLENBQUNDLE9BQUwsQ0FBYSxVQUFiOztBQUNBLGFBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVo7QUFDQSxPQUhTLEVBR1AsSUFITyxDQUFWO0FBSUEsS0FWYTs7QUFBQSxzY0FZUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNhQyxNQUFNLEVBRG5COztBQUFBO0FBQ0FDLGtCQURBOztBQUVOLG1CQUFJLENBQUNGLE1BQUwsQ0FBWUUsSUFBSSxDQUFDQyxHQUFqQjs7QUFDQSxtQkFBSSxDQUFDSixPQUFMLENBQWFHLElBQUksQ0FBQ0UsSUFBbEI7O0FBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FaTzs7QUFBQSxtS0FzQkosVUFBQ0MsS0FBRCxFQUFtQjtBQUM1QixXQUFJLENBQUNDLEtBQUwsR0FBYUQsS0FBYjtBQUNBLEtBeEJhOztBQUFBLGtLQThCTCxVQUFDQSxLQUFELEVBQW1CO0FBQzNCLFdBQUksQ0FBQ0UsSUFBTCxHQUFZRixLQUFaO0FBQ0EsS0FoQ2E7O0FBQ2IsU0FBS0csSUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDQTs7Ozt3QkFla0I7QUFDbEIsYUFBTyxLQUFLSCxLQUFaO0FBQ0E7Ozt3QkFNaUI7QUFDakIsYUFBTyxLQUFLQyxJQUFaO0FBQ0E7Ozs7Z05BL0JBRywrQzs7Ozs7c01BQ0FBLCtDOzs7Ozs7OztJQXFDSUMsRzs7Ozs7Ozs7QUFLQyxTQUFlVixNQUF0QjtBQUFBO0FBQUE7OztxU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTyxJQUFJVyxPQUFKLENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNsRGhCLHdCQUFVLENBQUMsWUFBTTtBQUNoQmUsdUJBQU8sQ0FBQztBQUNQVCxzQkFBSSxFQUFFLFlBREM7QUFFUEQscUJBQUcsRUFBRTtBQUZFLGlCQUFELENBQVA7QUFJQSxlQUxTLEVBS1AsSUFMTyxDQUFWO0FBTUEsYUFQWSxDQURQOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb2J4LmVlYTMxYTIyY2I3OGYxYmVkZTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGV9IGZyb20gXCJtb2J4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2J4U3RvcmUge1xyXG5cdEBvYnNlcnZhYmxlIHByaXZhdGUgX3R5cGU7XHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBfYWdlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5sb2FkKCk7XHJcblx0fVxyXG5cclxuXHRpbml0ICA9ICgpID0+IHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFR5cGUoJ+y9lOyIjyhpbml0KScpO1xyXG5cdFx0XHR0aGlzLnNldEFnZSgxKTtcclxuXHRcdH0sIDEwMDApXHJcblx0fTtcclxuXHJcblx0bG9hZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXQoKTtcclxuXHRcdHRoaXMuc2V0QWdlKGRhdGEuYWdlKTtcclxuXHRcdHRoaXMuc2V0VHlwZShkYXRhLnR5cGUpO1xyXG5cdH07XHJcblxyXG5cdGdldCB0eXBlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdHlwZTtcclxuXHR9XHJcblxyXG5cdHNldFR5cGUgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG5cdFx0dGhpcy5fdHlwZSA9IHZhbHVlO1xyXG5cdH07XHJcblxyXG5cdGdldCBhZ2UoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9hZ2U7XHJcblx0fVxyXG5cclxuXHRzZXRBZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG5cdFx0dGhpcy5fYWdlID0gdmFsdWU7XHJcblx0fTtcclxufVxyXG5cclxuY2xhc3MgQ2F0IHtcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0YWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXQoKSB7XHJcblx0cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPENhdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHJlc29sdmUoe1xyXG5cdFx0XHRcdHR5cGU6ICfrn6zsi5zslYjruJTro6goQ1NSKScsXHJcblx0XHRcdFx0YWdlOiAyXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMjAwMClcclxuXHR9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9