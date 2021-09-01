webpackHotUpdate_N_E("pages/koreaMap",{

/***/ "./src/store/koreaMapUIStore.ts":
/*!**************************************!*\
  !*** ./src/store/koreaMapUIStore.ts ***!
  \**************************************/
/*! exports provided: LOCATION_DATA, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_DATA", function() { return LOCATION_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KoreaMapUIStore; });
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");







var _class, _descriptor, _descriptor2, _temp;


var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도', '제주특별자치도'];
var KoreaMapUIStore = (_class = (_temp = /*#__PURE__*/function () {
  function KoreaMapUIStore() {
    var _this = this;

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, KoreaMapUIStore);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selectedLocations", _descriptor, this);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isSelected", function (name) {
      return _this._selectedLocations.has(name);
    });

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleLocation", _descriptor2, this);
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
}), _descriptor2 = Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "toggleLocation", [mobx__WEBPACK_IMPORTED_MODULE_6__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (name) {
      console.log(name, _this2._selectedLocations);
      _this2._selectedLocations.has(name) ? _this2._selectedLocations["delete"](name) : _this2._selectedLocations.add(name);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZS50cyJdLCJuYW1lcyI6WyJMT0NBVElPTl9EQVRBIiwiS29yZWFNYXBVSVN0b3JlIiwibmFtZSIsIl9zZWxlY3RlZExvY2F0aW9ucyIsImhhcyIsIm9ic2VydmFibGUiLCJTZXQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsYUFBYSxHQUFHLENBQ3pCLE9BRHlCLEVBQ2hCLEtBRGdCLEVBQ1QsT0FEUyxFQUNBLE9BREEsRUFFekIsT0FGeUIsRUFFaEIsT0FGZ0IsRUFFUCxPQUZPLEVBRUUsT0FGRixFQUd6QixTQUh5QixFQUdkLEtBSGMsRUFHUCxNQUhPLEVBR0MsTUFIRCxFQUl6QixNQUp5QixFQUlqQixNQUppQixFQUlULE1BSlMsRUFJRCxNQUpDLEVBS3pCLFNBTHlCLENBQXRCO0lBUWNDLGU7Ozs7Ozs7OzJKQU9KLFVBQUNDLElBQUQsRUFBa0I7QUFDM0IsYUFBTyxLQUFJLENBQUNDLGtCQUFMLENBQXdCQyxHQUF4QixDQUE0QkYsSUFBNUIsQ0FBUDtBQUNILEs7Ozs7Ozs7d0JBTndCO0FBQ3JCLGFBQU8sS0FBS0Msa0JBQVo7QUFDSDs7OztrTkFKQUUsK0M7Ozs7O1dBQXdDLElBQUlDLEdBQUosRTs7cU1BVXhDQywyQzs7Ozs7OztXQUNnQixVQUFDTCxJQUFELEVBQWtCO0FBQy9CTSxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWixFQUFrQixNQUFJLENBQUNDLGtCQUF2QjtBQUNBLFlBQUksQ0FBQ0Esa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCRixJQUE1QixJQUNFLE1BQUksQ0FBQ0Msa0JBQUwsV0FBK0JELElBQS9CLENBREYsR0FFRSxNQUFJLENBQUNDLGtCQUFMLENBQXdCTyxHQUF4QixDQUE0QlIsSUFBNUIsQ0FGRjtBQUdILEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29yZWFNYXAuMTRlOTVkODQ3NzBiODI5YTQ5ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9DQVRJT05fREFUQSA9IFtcclxuICAgICfshJzsmrjtirnrs4Tsi5wnLCAn6rK96riw64+EJywgJ+yduOyynOq0keyXreyLnCcsICfrtoDsgrDqtJHsl63si5wnLCBcclxuICAgICfrjIDqtazqtJHsl63si5wnLCAn6rSR7KO86rSR7Jet7IucJywgJ+uMgOyghOq0keyXreyLnCcsICfsmrjsgrDqtJHsl63si5wnLCBcclxuICAgICfshLjsooXtirnrs4TsnpDsuZjsi5wnLCAn6rCV7JuQ64+EJywgJ+y2qeyyreuCqOuPhCcsICfqsr3sg4Hrgqjrj4QnLCBcclxuICAgICfqsr3sg4HrtoHrj4QnLCAn7KCE652864Ko64+EJywgJ+yghOudvOu2geuPhCcsICfstqnssq3rtoHrj4QnLFxyXG4gICAgJ+ygnOyjvO2KueuzhOyekOy5mOuPhCdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhTWFwVUlTdG9yZSB7XHJcbiAgICBAb2JzZXJ2YWJsZSBwcml2YXRlIF9zZWxlY3RlZExvY2F0aW9ucyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgIGdldCBzZWxlY3RlZExvY2F0aW9ucyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkTG9jYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2VsZWN0ZWQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkTG9jYXRpb25zLmhhcyhuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uXHJcbiAgICB0b2dnbGVMb2NhdGlvbiA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuaGFzKG5hbWUpIFxyXG4gICAgICAgID8gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuZGVsZXRlKG5hbWUpIFxyXG4gICAgICAgIDogdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuYWRkKG5hbWUpXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==