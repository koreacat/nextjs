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
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");







var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;


var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도', '제주특별자치도'];
var KoreaMapUIStore = (_class = (_temp = /*#__PURE__*/function () {
  function KoreaMapUIStore() {
    var _this = this;

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, KoreaMapUIStore);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selectedLocations", _descriptor, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentLocation", _descriptor2, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_namePosition", _descriptor3, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setCurrentLocation", function (value, callback) {
      _this._currentLocation = value;
      callback && callback();

      _this.setNamePosition(value);
    });

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setNamePosition", function (value) {
      if (!value) return;
      var target = document.querySelector("path[data-location=".concat(value, "]"));
      var cr = target.getBoundingClientRect();
      var nameRef = document.getElementById('locationName');
      var nameWidth = nameRef.getBoundingClientRect().width;
      _this._namePosition = {
        top: cr.y + cr.height / 2 - 40,
        left: cr.x + cr.width / 2 - nameWidth / 2
      };
    });

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isSelected", function (name) {
      return _this._selectedLocations.has(name);
    });

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleLocation", _descriptor4, this);
  }

  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(KoreaMapUIStore, [{
    key: "selectedLocations",
    get: function get() {
      return this._selectedLocations;
    }
  }, {
    key: "currentLocation",
    get: function get() {
      return this._currentLocation;
    }
  }, {
    key: "namePosition",
    get: function get() {
      return this._namePosition;
    }
  }]);

  return KoreaMapUIStore;
}(), _temp), (_descriptor = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_selectedLocations", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return new Set();
  }
}), _descriptor2 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_currentLocation", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "_namePosition", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      top: 0,
      left: 0
    };
  }
}), _descriptor4 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "toggleLocation", [mobx__WEBPACK_IMPORTED_MODULE_6__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2._selectedLocations.has(_this2._currentLocation) ? _this2._selectedLocations["delete"](_this2._currentLocation) : _this2._selectedLocations.add(_this2._currentLocation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZS50cyJdLCJuYW1lcyI6WyJMT0NBVElPTl9EQVRBIiwiS29yZWFNYXBVSVN0b3JlIiwidmFsdWUiLCJjYWxsYmFjayIsIl9jdXJyZW50TG9jYXRpb24iLCJzZXROYW1lUG9zaXRpb24iLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5hbWVSZWYiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWVXaWR0aCIsIndpZHRoIiwiX25hbWVQb3NpdGlvbiIsInRvcCIsInkiLCJoZWlnaHQiLCJsZWZ0IiwieCIsIm5hbWUiLCJfc2VsZWN0ZWRMb2NhdGlvbnMiLCJoYXMiLCJvYnNlcnZhYmxlIiwiU2V0IiwiYWN0aW9uIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsYUFBYSxHQUFHLENBQzVCLE9BRDRCLEVBQ25CLEtBRG1CLEVBQ1osT0FEWSxFQUNILE9BREcsRUFFNUIsT0FGNEIsRUFFbkIsT0FGbUIsRUFFVixPQUZVLEVBRUQsT0FGQyxFQUc1QixTQUg0QixFQUdqQixLQUhpQixFQUdWLE1BSFUsRUFHRixNQUhFLEVBSTVCLE1BSjRCLEVBSXBCLE1BSm9CLEVBSVosTUFKWSxFQUlKLE1BSkksRUFLNUIsU0FMNEIsQ0FBdEI7SUFRY0MsZTs7Ozs7Ozs7Ozs7OzhLQWlCQyxVQUFDQyxLQUFELEVBQWdCQyxRQUFoQixFQUE4QjtBQUNsRCxXQUFJLENBQUNDLGdCQUFMLEdBQXdCRixLQUF4QjtBQUNBQyxjQUFRLElBQUlBLFFBQVEsRUFBcEI7O0FBQ0EsV0FBSSxDQUFDRSxlQUFMLENBQXFCSCxLQUFyQjtBQUNBLEs7OzJLQUVpQixVQUFDQSxLQUFELEVBQVc7QUFDNUIsVUFBRyxDQUFDQSxLQUFKLEVBQVc7QUFDWCxVQUFNSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCw4QkFBNkNOLEtBQTdDLE9BQWY7QUFDQSxVQUFNTyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0kscUJBQVAsRUFBWDtBQUNBLFVBQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLGNBQXhCLENBQWhCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixPQUFPLENBQUNELHFCQUFSLEdBQWdDSSxLQUFsRDtBQUVBLFdBQUksQ0FBQ0MsYUFBTCxHQUFxQjtBQUNwQkMsV0FBRyxFQUFFUCxFQUFFLENBQUNRLENBQUgsR0FBT1IsRUFBRSxDQUFDUyxNQUFILEdBQVksQ0FBbkIsR0FBdUIsRUFEUjtBQUVwQkMsWUFBSSxFQUFFVixFQUFFLENBQUNXLENBQUgsR0FBT1gsRUFBRSxDQUFDSyxLQUFILEdBQVcsQ0FBbEIsR0FBc0JELFNBQVMsR0FBRztBQUZwQixPQUFyQjtBQUlBLEs7O3NLQUVZLFVBQUNRLElBQUQsRUFBa0I7QUFDOUIsYUFBTyxLQUFJLENBQUNDLGtCQUFMLENBQXdCQyxHQUF4QixDQUE0QkYsSUFBNUIsQ0FBUDtBQUNBLEs7Ozs7Ozs7d0JBakN1QjtBQUN2QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0E7Ozt3QkFFcUI7QUFDckIsYUFBTyxLQUFLbEIsZ0JBQVo7QUFDQTs7O3dCQUVrQjtBQUNsQixhQUFPLEtBQUtXLGFBQVo7QUFDQTs7Ozs2TkFkQVMsK0M7Ozs7O1dBQXdDLElBQUlDLEdBQUosRTs7a05BQ3hDRCwrQzs7Ozs7V0FBc0MsRTs7K01BQ3RDQSwrQzs7Ozs7V0FBbUM7QUFBRVIsU0FBRyxFQUFFLENBQVA7QUFBVUcsVUFBSSxFQUFFO0FBQWhCLEs7O2dOQXFDbkNPLDJDOzs7Ozs7O1dBQ2dCLFlBQU07QUFDdEIsWUFBSSxDQUFDSixrQkFBTCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBSSxDQUFDbkIsZ0JBQWpDLElBQ0csTUFBSSxDQUFDa0Isa0JBQUwsV0FBK0IsTUFBSSxDQUFDbEIsZ0JBQXBDLENBREgsR0FFRyxNQUFJLENBQUNrQixrQkFBTCxDQUF3QkssR0FBeEIsQ0FBNEIsTUFBSSxDQUFDdkIsZ0JBQWpDLENBRkg7QUFHQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2tvcmVhTWFwLmUzNmE0OTg0YTViNmQzNDdmZjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tIFwibW9ieFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0RBVEEgPSBbXHJcblx0J+yEnOyauO2KueuzhOyLnCcsICfqsr3quLDrj4QnLCAn7J247LKc6rSR7Jet7IucJywgJ+u2gOyCsOq0keyXreyLnCcsXHJcblx0J+uMgOq1rOq0keyXreyLnCcsICfqtJHso7zqtJHsl63si5wnLCAn64yA7KCE6rSR7Jet7IucJywgJ+yauOyCsOq0keyXreyLnCcsXHJcblx0J+yEuOyihe2KueuzhOyekOy5mOyLnCcsICfqsJXsm5Drj4QnLCAn7Lap7LKt64Ko64+EJywgJ+qyveyDgeuCqOuPhCcsXHJcblx0J+qyveyDgeu2geuPhCcsICfsoITrnbzrgqjrj4QnLCAn7KCE652867aB64+EJywgJ+y2qeyyreu2geuPhCcsXHJcblx0J+ygnOyjvO2KueuzhOyekOy5mOuPhCdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhTWFwVUlTdG9yZSB7XHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBfc2VsZWN0ZWRMb2NhdGlvbnMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIF9jdXJyZW50TG9jYXRpb24gPSAnJztcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIF9uYW1lUG9zaXRpb24gPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG5cclxuXHRnZXQgc2VsZWN0ZWRMb2NhdGlvbnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnM7XHJcblx0fVxyXG5cclxuXHRnZXQgY3VycmVudExvY2F0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldCBuYW1lUG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmFtZVBvc2l0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0Q3VycmVudExvY2F0aW9uID0gKHZhbHVlOiBzdHJpbmcsIGNhbGxiYWNrPykgPT4ge1xyXG5cdFx0dGhpcy5fY3VycmVudExvY2F0aW9uID0gdmFsdWU7XHJcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG5cdFx0dGhpcy5zZXROYW1lUG9zaXRpb24odmFsdWUpO1xyXG5cdH07XHJcblxyXG5cdHNldE5hbWVQb3NpdGlvbiA9ICh2YWx1ZSkgPT4ge1xyXG5cdFx0aWYoIXZhbHVlKSByZXR1cm47XHJcblx0XHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBwYXRoW2RhdGEtbG9jYXRpb249JHt2YWx1ZX1dYCk7XHJcblx0XHRjb25zdCBjciA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IG5hbWVSZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XHJcblx0XHRjb25zdCBuYW1lV2lkdGggPSBuYW1lUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuXHRcdHRoaXMuX25hbWVQb3NpdGlvbiA9IHtcclxuXHRcdFx0dG9wOiBjci55ICsgY3IuaGVpZ2h0IC8gMiAtIDQwLFxyXG5cdFx0XHRsZWZ0OiBjci54ICsgY3Iud2lkdGggLyAyIC0gbmFtZVdpZHRoIC8gMlxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRpc1NlbGVjdGVkID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkTG9jYXRpb25zLmhhcyhuYW1lKTtcclxuXHR9XHJcblxyXG5cdEBhY3Rpb25cclxuXHR0b2dnbGVMb2NhdGlvbiA9ICgpID0+IHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkTG9jYXRpb25zLmhhcyh0aGlzLl9jdXJyZW50TG9jYXRpb24pXHJcblx0XHRcdD8gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuZGVsZXRlKHRoaXMuX2N1cnJlbnRMb2NhdGlvbilcclxuXHRcdFx0OiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5hZGQodGhpcy5fY3VycmVudExvY2F0aW9uKVxyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==