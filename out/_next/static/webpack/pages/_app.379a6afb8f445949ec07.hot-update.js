webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/koreaMapUIStore.ts":
/*!**************************************!*\
  !*** ./src/store/koreaMapUIStore.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KoreaMapUIStore; });
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");







var _class, _descriptor, _temp;


var KoreaMapUIStore = (_class = (_temp = /*#__PURE__*/function () {
  function KoreaMapUIStore() {
    var _this = this;

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, KoreaMapUIStore);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selectedLocations", _descriptor, this);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "toggleLocation", function (name) {
      _this._selectedLocations.has(name) ? _this._selectedLocations["delete"](name) : _this._selectedLocations.add(name);
    });
  }

  Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(KoreaMapUIStore, [{
    key: "selectedLocations",
    get: function get() {
      return this._selectedLocations;
    }
  }]);

  return KoreaMapUIStore;
}(), _temp), (_descriptor = Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_selectedLocations", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new Set();
  }
})), _class);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZS50cyJdLCJuYW1lcyI6WyJLb3JlYU1hcFVJU3RvcmUiLCJuYW1lIiwiX3NlbGVjdGVkTG9jYXRpb25zIiwiaGFzIiwiYWRkIiwib2JzZXJ2YWJsZSIsIlNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRXFCQSxlOzs7Ozs7OzsrSkFPQSxVQUFDQyxJQUFELEVBQWtCO0FBQy9CLFdBQUksQ0FBQ0Msa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCRixJQUE1QixJQUNFLEtBQUksQ0FBQ0Msa0JBQUwsV0FBK0JELElBQS9CLENBREYsR0FFRSxLQUFJLENBQUNDLGtCQUFMLENBQXdCRSxHQUF4QixDQUE0QkgsSUFBNUIsQ0FGRjtBQUdILEs7Ozs7O3dCQVJ3QjtBQUNyQixhQUFPLEtBQUtDLGtCQUFaO0FBQ0g7Ozs7a05BSkFHLCtDOzs7OztXQUF3QyxJQUFJQyxHQUFKLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNzlhNmFmYjhmNDQ1OTQ5ZWMwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLb3JlYU1hcFVJU3RvcmUge1xyXG4gICAgQG9ic2VydmFibGUgcHJpdmF0ZSBfc2VsZWN0ZWRMb2NhdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgICBnZXQgc2VsZWN0ZWRMb2NhdGlvbnMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMb2NhdGlvbiA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5oYXMobmFtZSkgXHJcbiAgICAgICAgPyB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5kZWxldGUobmFtZSkgXHJcbiAgICAgICAgOiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5hZGQobmFtZSlcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9