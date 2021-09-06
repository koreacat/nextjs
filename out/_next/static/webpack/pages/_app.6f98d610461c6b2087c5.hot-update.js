webpackHotUpdate_N_E("pages/_app",{

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







var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;


var LOCATION_DATA = ['서울특별시', '경기도', '인천광역시', '부산광역시', '대구광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '강원도', '충청남도', '경상남도', '경상북도', '전라남도', '전라북도', '충청북도', '제주특별자치도'];
var KoreaMapUIStore = (_class = (_temp = /*#__PURE__*/function () {
  function KoreaMapUIStore() {
    var _this = this;

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, KoreaMapUIStore);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_selectedLocations", _descriptor, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentLocation", _descriptor2, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_namePosition", _descriptor3, this);

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "setCurrentLocation", _descriptor4, this);

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

    Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleLocation", _descriptor5, this);
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
    return null;
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
}), _descriptor4 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "setCurrentLocation", [mobx__WEBPACK_IMPORTED_MODULE_6__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (value, callback) {
      _this2._currentLocation = value;

      _this2.setNamePosition(value);

      callback && callback();
    };
  }
}), _descriptor5 = Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "toggleLocation", [mobx__WEBPACK_IMPORTED_MODULE_6__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3._selectedLocations.has(_this3._currentLocation) ? _this3._selectedLocations["delete"](_this3._currentLocation) : _this3._selectedLocations.add(_this3._currentLocation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZS50cyJdLCJuYW1lcyI6WyJMT0NBVElPTl9EQVRBIiwiS29yZWFNYXBVSVN0b3JlIiwidmFsdWUiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5hbWVSZWYiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWVXaWR0aCIsIndpZHRoIiwiX25hbWVQb3NpdGlvbiIsInRvcCIsInkiLCJoZWlnaHQiLCJsZWZ0IiwieCIsIm5hbWUiLCJfc2VsZWN0ZWRMb2NhdGlvbnMiLCJoYXMiLCJfY3VycmVudExvY2F0aW9uIiwib2JzZXJ2YWJsZSIsIlNldCIsImFjdGlvbiIsImNhbGxiYWNrIiwic2V0TmFtZVBvc2l0aW9uIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU08sSUFBTUEsYUFBbUMsR0FBRyxDQUNsRCxPQURrRCxFQUN6QyxLQUR5QyxFQUNsQyxPQURrQyxFQUN6QixPQUR5QixFQUVsRCxPQUZrRCxFQUV6QyxPQUZ5QyxFQUVoQyxPQUZnQyxFQUV2QixPQUZ1QixFQUdsRCxTQUhrRCxFQUd2QyxLQUh1QyxFQUdoQyxNQUhnQyxFQUd4QixNQUh3QixFQUlsRCxNQUprRCxFQUkxQyxNQUowQyxFQUlsQyxNQUprQyxFQUkxQixNQUowQixFQUtsRCxTQUxrRCxDQUE1QztJQVFjQyxlOzs7Ozs7Ozs7Ozs7OzsyS0F3QkYsVUFBQ0MsS0FBRCxFQUFXO0FBQzVCLFVBQUcsQ0FBQ0EsS0FBSixFQUFXO0FBQ1gsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsOEJBQTZDSCxLQUE3QyxPQUFmO0FBQ0EsVUFBTUksRUFBRSxHQUFHSCxNQUFNLENBQUNJLHFCQUFQLEVBQVg7QUFDQSxVQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixjQUF4QixDQUFoQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDRCxxQkFBUixHQUFnQ0ksS0FBbEQ7QUFFQSxXQUFJLENBQUNDLGFBQUwsR0FBcUI7QUFDcEJDLFdBQUcsRUFBRVAsRUFBRSxDQUFDUSxDQUFILEdBQU9SLEVBQUUsQ0FBQ1MsTUFBSCxHQUFZLENBQW5CLEdBQXVCLEVBRFI7QUFFcEJDLFlBQUksRUFBRVYsRUFBRSxDQUFDVyxDQUFILEdBQU9YLEVBQUUsQ0FBQ0ssS0FBSCxHQUFXLENBQWxCLEdBQXNCRCxTQUFTLEdBQUc7QUFGcEIsT0FBckI7QUFJQSxLOztzS0FFWSxVQUFDUSxJQUFELEVBQXlCO0FBQ3JDLGFBQU8sS0FBSSxDQUFDQyxrQkFBTCxDQUF3QkMsR0FBeEIsQ0FBNEJGLElBQTVCLENBQVA7QUFDQSxLOzs7Ozs7O3dCQWxDdUI7QUFDdkIsYUFBTyxLQUFLQyxrQkFBWjtBQUNBOzs7d0JBRXFCO0FBQ3JCLGFBQU8sS0FBS0UsZ0JBQVo7QUFDQTs7O3dCQUVrQjtBQUNsQixhQUFPLEtBQUtULGFBQVo7QUFDQTs7Ozs2TkFkQVUsK0M7Ozs7O1dBQXdDLElBQUlDLEdBQUosRTs7a05BQ3hDRCwrQzs7Ozs7V0FBc0MsSTs7K01BQ3RDQSwrQzs7Ozs7V0FBbUM7QUFBRVQsU0FBRyxFQUFFLENBQVA7QUFBVUcsVUFBSSxFQUFFO0FBQWhCLEs7O29OQWNuQ1EsMkM7Ozs7Ozs7V0FDb0IsVUFBQ3RCLEtBQUQsRUFBZ0J1QixRQUFoQixFQUE4QjtBQUNsRCxZQUFJLENBQUNKLGdCQUFMLEdBQXdCbkIsS0FBeEI7O0FBQ0EsWUFBSSxDQUFDd0IsZUFBTCxDQUFxQnhCLEtBQXJCOztBQUNBdUIsY0FBUSxJQUFJQSxRQUFRLEVBQXBCO0FBQ0EsSzs7Z05BbUJBRCwyQzs7Ozs7OztXQUNnQixZQUFNO0FBQ3RCLFlBQUksQ0FBQ0wsa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQUksQ0FBQ0MsZ0JBQWpDLElBQ0csTUFBSSxDQUFDRixrQkFBTCxXQUErQixNQUFJLENBQUNFLGdCQUFwQyxDQURILEdBRUcsTUFBSSxDQUFDRixrQkFBTCxDQUF3QlEsR0FBeEIsQ0FBNEIsTUFBSSxDQUFDTixnQkFBakMsQ0FGSDtBQUdBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42Zjk4ZDYxMDQ2MWM2YjIwODdjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuXHJcbmV4cG9ydCB0eXBlIExPQ0FUSU9OX1RZUEUgPVxyXG5cdCfshJzsmrjtirnrs4Tsi5wnIHwgJ+qyveq4sOuPhCcgfCAn7J247LKc6rSR7Jet7IucJ3wgJ+u2gOyCsOq0keyXreyLnCcgfFxyXG5cdCfrjIDqtazqtJHsl63si5wnIHwgJ+q0keyjvOq0keyXreyLnCcgfCAn64yA7KCE6rSR7Jet7IucJyB8ICfsmrjsgrDqtJHsl63si5wnIHxcclxuXHQn7IS47KKF7Yq567OE7J6Q7LmY7IucJyB8ICfqsJXsm5Drj4QnIHwgJ+y2qeyyreuCqOuPhCcgfCAn6rK97IOB64Ko64+EJyB8XHJcblx0J+qyveyDgeu2geuPhCcgfCAn7KCE652864Ko64+EJyB8ICfsoITrnbzrtoHrj4QnIHwgJ+y2qeyyreu2geuPhCcgfFxyXG5cdCfsoJzso7ztirnrs4TsnpDsuZjrj4QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0RBVEE6IEFycmF5PExPQ0FUSU9OX1RZUEU+ID0gW1xyXG5cdCfshJzsmrjtirnrs4Tsi5wnLCAn6rK96riw64+EJywgJ+yduOyynOq0keyXreyLnCcsICfrtoDsgrDqtJHsl63si5wnLFxyXG5cdCfrjIDqtazqtJHsl63si5wnLCAn6rSR7KO86rSR7Jet7IucJywgJ+uMgOyghOq0keyXreyLnCcsICfsmrjsgrDqtJHsl63si5wnLFxyXG5cdCfshLjsooXtirnrs4TsnpDsuZjsi5wnLCAn6rCV7JuQ64+EJywgJ+y2qeyyreuCqOuPhCcsICfqsr3sg4Hrgqjrj4QnLFxyXG5cdCfqsr3sg4HrtoHrj4QnLCAn7KCE652864Ko64+EJywgJ+yghOudvOu2geuPhCcsICfstqnssq3rtoHrj4QnLFxyXG5cdCfsoJzso7ztirnrs4TsnpDsuZjrj4QnXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLb3JlYU1hcFVJU3RvcmUge1xyXG5cdEBvYnNlcnZhYmxlIHByaXZhdGUgX3NlbGVjdGVkTG9jYXRpb25zID0gbmV3IFNldDxMT0NBVElPTl9UWVBFIHwgbnVsbD4oKTtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIF9jdXJyZW50TG9jYXRpb24gPSBudWxsO1xyXG5cdEBvYnNlcnZhYmxlIHByaXZhdGUgX25hbWVQb3NpdGlvbiA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcblxyXG5cdGdldCBzZWxlY3RlZExvY2F0aW9ucygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucztcclxuXHR9XHJcblxyXG5cdGdldCBjdXJyZW50TG9jYXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudExvY2F0aW9uO1xyXG5cdH1cclxuXHJcblx0Z2V0IG5hbWVQb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9uYW1lUG9zaXRpb247XHJcblx0fVxyXG5cclxuXHRAYWN0aW9uXHJcblx0c2V0Q3VycmVudExvY2F0aW9uID0gKHZhbHVlOiBzdHJpbmcsIGNhbGxiYWNrPykgPT4ge1xyXG5cdFx0dGhpcy5fY3VycmVudExvY2F0aW9uID0gdmFsdWU7XHJcblx0XHR0aGlzLnNldE5hbWVQb3NpdGlvbih2YWx1ZSk7XHJcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG5cdH07XHJcblxyXG5cdHNldE5hbWVQb3NpdGlvbiA9ICh2YWx1ZSkgPT4ge1xyXG5cdFx0aWYoIXZhbHVlKSByZXR1cm47XHJcblx0XHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBwYXRoW2RhdGEtbG9jYXRpb249JHt2YWx1ZX1dYCk7XHJcblx0XHRjb25zdCBjciA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IG5hbWVSZWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XHJcblx0XHRjb25zdCBuYW1lV2lkdGggPSBuYW1lUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuXHRcdHRoaXMuX25hbWVQb3NpdGlvbiA9IHtcclxuXHRcdFx0dG9wOiBjci55ICsgY3IuaGVpZ2h0IC8gMiAtIDQwLFxyXG5cdFx0XHRsZWZ0OiBjci54ICsgY3Iud2lkdGggLyAyIC0gbmFtZVdpZHRoIC8gMlxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRpc1NlbGVjdGVkID0gKG5hbWU6IExPQ0FUSU9OX1RZUEUpID0+IHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5oYXMobmFtZSk7XHJcblx0fTtcclxuXHJcblx0QGFjdGlvblxyXG5cdHRvZ2dsZUxvY2F0aW9uID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuaGFzKHRoaXMuX2N1cnJlbnRMb2NhdGlvbilcclxuXHRcdFx0PyB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5kZWxldGUodGhpcy5fY3VycmVudExvY2F0aW9uKVxyXG5cdFx0XHQ6IHRoaXMuX3NlbGVjdGVkTG9jYXRpb25zLmFkZCh0aGlzLl9jdXJyZW50TG9jYXRpb24pXHJcblx0fVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9