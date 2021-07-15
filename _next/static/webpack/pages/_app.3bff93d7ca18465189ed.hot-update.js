webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/FilterSliderUIStore.ts":
/*!******************************************!*\
  !*** ./src/store/FilterSliderUIStore.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterSliderUIStore; });
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");







var _class, _descriptor, _descriptor2, _descriptor3, _temp;


var FilterSliderUIStore = (_class = (_temp = /*#__PURE__*/function () {
  function FilterSliderUIStore() {
    var _this = this;

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FilterSliderUIStore);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_itemsEls", _descriptor, this);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentIndex", _descriptor2, this);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selectedFilterList", _descriptor3, this);

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setItemsEls", function (value) {
      _this._itemsEls = value;
    });

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setCurrentIndex", function (value) {
      _this._currentIndex = value;
    });

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "hasFilter", function (filterType) {
      _this._selectedFilterList.forEach(function (filter) {
        if (filter.type === filterType.type) {
          return true;
        }
      });

      return false;
    });

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "selectFilter", function (filterType) {
      console.log(filterType);

      _this._selectedFilterList.add(filterType);

      console.log(_this._selectedFilterList);
    });

    Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "deleteFilter", function (filterType) {
      _this._selectedFilterList.forEach(function (filter) {
        if (filter.type === filterType.type) {
          _this._selectedFilterList["delete"](filter);
        }
      });
    });
  }

  Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FilterSliderUIStore, [{
    key: "itemsEls",
    get: function get() {
      return this._itemsEls;
    }
  }, {
    key: "currentIndex",
    get: function get() {
      return this._currentIndex;
    }
  }, {
    key: "selectedFilterList",
    get: function get() {
      return this._selectedFilterList;
    }
  }]);

  return FilterSliderUIStore;
}(), _temp), (_descriptor = Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_itemsEls", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_currentIndex", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor3 = Object(C_Users_kj996_project_nextjs_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_selectedFilterList", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL0ZpbHRlclNsaWRlclVJU3RvcmUudHMiXSwibmFtZXMiOlsiRmlsdGVyU2xpZGVyVUlTdG9yZSIsInZhbHVlIiwiX2l0ZW1zRWxzIiwiX2N1cnJlbnRJbmRleCIsImZpbHRlclR5cGUiLCJfc2VsZWN0ZWRGaWx0ZXJMaXN0IiwiZm9yRWFjaCIsImZpbHRlciIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiYWRkIiwib2JzZXJ2YWJsZSIsIlNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSXFCQSxtQjs7Ozs7Ozs7Ozs7OzRKQVNOLFVBQUNDLEtBQUQsRUFBdUQ7QUFDcEUsV0FBSSxDQUFDQyxTQUFMLEdBQWlCRCxLQUFqQjtBQUNBLEs7O2dLQU1pQixVQUFDQSxLQUFELEVBQW1CO0FBQ3BDLFdBQUksQ0FBQ0UsYUFBTCxHQUFxQkYsS0FBckI7QUFDQSxLOzswSkFNVyxVQUFDRyxVQUFELEVBQXlCO0FBQ3BDLFdBQUksQ0FBQ0MsbUJBQUwsQ0FBeUJDLE9BQXpCLENBQWlDLFVBQUNDLE1BQUQsRUFBWTtBQUM1QyxZQUFHQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JKLFVBQVUsQ0FBQ0ksSUFBOUIsRUFBb0M7QUFDbkMsaUJBQU8sSUFBUDtBQUNBO0FBQ0QsT0FKRDs7QUFLQSxhQUFPLEtBQVA7QUFDQSxLOzs2SkFFYyxVQUFDSixVQUFELEVBQXlCO0FBQ3ZDSyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sVUFBWjs7QUFDQSxXQUFJLENBQUNDLG1CQUFMLENBQXlCTSxHQUF6QixDQUE2QlAsVUFBN0I7O0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUksQ0FBQ0wsbUJBQWpCO0FBQ0EsSzs7NkpBRWMsVUFBQ0QsVUFBRCxFQUF5QjtBQUN2QyxXQUFJLENBQUNDLG1CQUFMLENBQXlCQyxPQUF6QixDQUFpQyxVQUFDQyxNQUFELEVBQVk7QUFDNUMsWUFBR0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCSixVQUFVLENBQUNJLElBQTlCLEVBQW9DO0FBQ25DLGVBQUksQ0FBQ0gsbUJBQUwsV0FBZ0NFLE1BQWhDO0FBQ0E7QUFDRCxPQUpEO0FBS0EsSzs7Ozs7d0JBekMwRDtBQUMxRCxhQUFPLEtBQUtMLFNBQVo7QUFDQTs7O3dCQU0wQjtBQUMxQixhQUFPLEtBQUtDLGFBQVo7QUFDQTs7O3dCQU1xQztBQUNyQyxhQUFPLEtBQUtFLG1CQUFaO0FBQ0E7Ozs7eU1BdEJBTywrQzs7Ozs7V0FBcUUsSTs7b01BQ3JFQSwrQzs7Ozs7V0FBMkMsQzs7ME1BQzNDQSwrQzs7Ozs7V0FBdUQsSUFBSUMsR0FBSixFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2JmZjkzZDdjYTE4NDY1MTg5ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7b2JzZXJ2YWJsZX0gZnJvbSBcIm1vYnhcIjtcclxuaW1wb3J0IHtSZWZPYmplY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJZmlsdGVyIH0gZnJvbSBcInNyYy9wYWdlcy9maWx0ZXJTbGlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNsaWRlclVJU3RvcmUge1xyXG5cdEBvYnNlcnZhYmxlIHByaXZhdGUgX2l0ZW1zRWxzOiBSZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PiB8IG51bGwgPSBudWxsO1xyXG5cdEBvYnNlcnZhYmxlIHByaXZhdGUgX2N1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIF9zZWxlY3RlZEZpbHRlckxpc3Q6IFNldDxJZmlsdGVyPiA9IG5ldyBTZXQ7XHJcblxyXG5cdGdldCBpdGVtc0VscygpOiBSZWFjdC5SZWZPYmplY3Q8QXJyYXk8SFRNTEVsZW1lbnQ+PiB8IG51bGwge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zRWxzO1xyXG5cdH1cclxuXHJcblx0c2V0SXRlbXNFbHMgPSAodmFsdWU6IFJlYWN0LlJlZk9iamVjdDxBcnJheTxIVE1MRWxlbWVudD4+IHwgbnVsbCkgPT4ge1xyXG5cdFx0dGhpcy5faXRlbXNFbHMgPSB2YWx1ZTtcclxuXHR9O1xyXG5cclxuXHRnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xyXG5cdH1cclxuXHJcblx0c2V0Q3VycmVudEluZGV4ID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuXHRcdHRoaXMuX2N1cnJlbnRJbmRleCA9IHZhbHVlO1xyXG5cdH07XHJcblx0XHJcblx0Z2V0IHNlbGVjdGVkRmlsdGVyTGlzdCgpOiBTZXQ8SWZpbHRlcj57XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRGaWx0ZXJMaXN0O1xyXG5cdH1cclxuXHJcblx0aGFzRmlsdGVyID0gKGZpbHRlclR5cGU6IElmaWx0ZXIpID0+IHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkRmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuXHRcdFx0aWYoZmlsdGVyLnR5cGUgPT09IGZpbHRlclR5cGUudHlwZSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0RmlsdGVyID0gKGZpbHRlclR5cGU6IElmaWx0ZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGZpbHRlclR5cGUpO1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRGaWx0ZXJMaXN0LmFkZChmaWx0ZXJUeXBlKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuX3NlbGVjdGVkRmlsdGVyTGlzdClcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUZpbHRlciA9IChmaWx0ZXJUeXBlOiBJZmlsdGVyKSA9PiB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZEZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcblx0XHRcdGlmKGZpbHRlci50eXBlID09PSBmaWx0ZXJUeXBlLnR5cGUpIHtcclxuXHRcdFx0XHR0aGlzLl9zZWxlY3RlZEZpbHRlckxpc3QuZGVsZXRlKGZpbHRlcilcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=