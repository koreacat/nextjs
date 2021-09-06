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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2tvcmVhTWFwVUlTdG9yZS50cyJdLCJuYW1lcyI6WyJMT0NBVElPTl9EQVRBIiwiS29yZWFNYXBVSVN0b3JlIiwidmFsdWUiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5hbWVSZWYiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWVXaWR0aCIsIndpZHRoIiwiX25hbWVQb3NpdGlvbiIsInRvcCIsInkiLCJoZWlnaHQiLCJsZWZ0IiwieCIsIm5hbWUiLCJfc2VsZWN0ZWRMb2NhdGlvbnMiLCJoYXMiLCJfY3VycmVudExvY2F0aW9uIiwib2JzZXJ2YWJsZSIsIlNldCIsImFjdGlvbiIsImNhbGxiYWNrIiwic2V0TmFtZVBvc2l0aW9uIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU08sSUFBTUEsYUFBbUMsR0FBRyxDQUNsRCxPQURrRCxFQUN6QyxLQUR5QyxFQUNsQyxPQURrQyxFQUN6QixPQUR5QixFQUVsRCxPQUZrRCxFQUV6QyxPQUZ5QyxFQUVoQyxPQUZnQyxFQUV2QixPQUZ1QixFQUdsRCxTQUhrRCxFQUd2QyxLQUh1QyxFQUdoQyxNQUhnQyxFQUd4QixNQUh3QixFQUlsRCxNQUprRCxFQUkxQyxNQUowQyxFQUlsQyxNQUprQyxFQUkxQixNQUowQixFQUtsRCxTQUxrRCxDQUE1QztJQVFjQyxlOzs7Ozs7Ozs7Ozs7OzsyS0F3QkYsVUFBQ0MsS0FBRCxFQUFXO0FBQzVCLFVBQUcsQ0FBQ0EsS0FBSixFQUFXO0FBQ1gsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsOEJBQTZDSCxLQUE3QyxPQUFmO0FBQ0EsVUFBTUksRUFBRSxHQUFHSCxNQUFNLENBQUNJLHFCQUFQLEVBQVg7QUFDQSxVQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixjQUF4QixDQUFoQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDRCxxQkFBUixHQUFnQ0ksS0FBbEQ7QUFFQSxXQUFJLENBQUNDLGFBQUwsR0FBcUI7QUFDcEJDLFdBQUcsRUFBRVAsRUFBRSxDQUFDUSxDQUFILEdBQU9SLEVBQUUsQ0FBQ1MsTUFBSCxHQUFZLENBQW5CLEdBQXVCLEVBRFI7QUFFcEJDLFlBQUksRUFBRVYsRUFBRSxDQUFDVyxDQUFILEdBQU9YLEVBQUUsQ0FBQ0ssS0FBSCxHQUFXLENBQWxCLEdBQXNCRCxTQUFTLEdBQUc7QUFGcEIsT0FBckI7QUFJQSxLOztzS0FFWSxVQUFDUSxJQUFELEVBQXlCO0FBQ3JDLGFBQU8sS0FBSSxDQUFDQyxrQkFBTCxDQUF3QkMsR0FBeEIsQ0FBNEJGLElBQTVCLENBQVA7QUFDQSxLOzs7Ozs7O3dCQWxDdUI7QUFDdkIsYUFBTyxLQUFLQyxrQkFBWjtBQUNBOzs7d0JBRXFCO0FBQ3JCLGFBQU8sS0FBS0UsZ0JBQVo7QUFDQTs7O3dCQUVrQjtBQUNsQixhQUFPLEtBQUtULGFBQVo7QUFDQTs7Ozs2TkFkQVUsK0M7Ozs7O1dBQXdDLElBQUlDLEdBQUosRTs7a05BQ3hDRCwrQzs7Ozs7V0FBc0MsSTs7K01BQ3RDQSwrQzs7Ozs7V0FBbUM7QUFBRVQsU0FBRyxFQUFFLENBQVA7QUFBVUcsVUFBSSxFQUFFO0FBQWhCLEs7O29OQWNuQ1EsMkM7Ozs7Ozs7V0FDb0IsVUFBQ3RCLEtBQUQsRUFBZ0J1QixRQUFoQixFQUE4QjtBQUNsRCxZQUFJLENBQUNKLGdCQUFMLEdBQXdCbkIsS0FBeEI7O0FBQ0EsWUFBSSxDQUFDd0IsZUFBTCxDQUFxQnhCLEtBQXJCOztBQUNBdUIsY0FBUSxJQUFJQSxRQUFRLEVBQXBCO0FBQ0EsSzs7Z05BbUJBRCwyQzs7Ozs7OztXQUNnQixZQUFNO0FBQ3RCLFlBQUksQ0FBQ0wsa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQUksQ0FBQ0MsZ0JBQWpDLElBQ0csTUFBSSxDQUFDRixrQkFBTCxXQUErQixNQUFJLENBQUNFLGdCQUFwQyxDQURILEdBRUcsTUFBSSxDQUFDRixrQkFBTCxDQUF3QlEsR0FBeEIsQ0FBNEIsTUFBSSxDQUFDTixnQkFBakMsQ0FGSDtBQUdBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29yZWFNYXAuNmY5OGQ2MTA0NjFjNmIyMDg3YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvbiwgb2JzZXJ2YWJsZSB9IGZyb20gXCJtb2J4XCI7XHJcblxyXG5leHBvcnQgdHlwZSBMT0NBVElPTl9UWVBFID1cclxuXHQn7ISc7Jq47Yq567OE7IucJyB8ICfqsr3quLDrj4QnIHwgJ+yduOyynOq0keyXreyLnCd8ICfrtoDsgrDqtJHsl63si5wnIHxcclxuXHQn64yA6rWs6rSR7Jet7IucJyB8ICfqtJHso7zqtJHsl63si5wnIHwgJ+uMgOyghOq0keyXreyLnCcgfCAn7Jq47IKw6rSR7Jet7IucJyB8XHJcblx0J+yEuOyihe2KueuzhOyekOy5mOyLnCcgfCAn6rCV7JuQ64+EJyB8ICfstqnssq3rgqjrj4QnIHwgJ+qyveyDgeuCqOuPhCcgfFxyXG5cdCfqsr3sg4HrtoHrj4QnIHwgJ+yghOudvOuCqOuPhCcgfCAn7KCE652867aB64+EJyB8ICfstqnssq3rtoHrj4QnIHxcclxuXHQn7KCc7KO87Yq567OE7J6Q7LmY64+EJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9EQVRBOiBBcnJheTxMT0NBVElPTl9UWVBFPiA9IFtcclxuXHQn7ISc7Jq47Yq567OE7IucJywgJ+qyveq4sOuPhCcsICfsnbjsspzqtJHsl63si5wnLCAn67aA7IKw6rSR7Jet7IucJyxcclxuXHQn64yA6rWs6rSR7Jet7IucJywgJ+q0keyjvOq0keyXreyLnCcsICfrjIDsoITqtJHsl63si5wnLCAn7Jq47IKw6rSR7Jet7IucJyxcclxuXHQn7IS47KKF7Yq567OE7J6Q7LmY7IucJywgJ+qwleybkOuPhCcsICfstqnssq3rgqjrj4QnLCAn6rK97IOB64Ko64+EJyxcclxuXHQn6rK97IOB67aB64+EJywgJ+yghOudvOuCqOuPhCcsICfsoITrnbzrtoHrj4QnLCAn7Lap7LKt67aB64+EJyxcclxuXHQn7KCc7KO87Yq567OE7J6Q7LmY64+EJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS29yZWFNYXBVSVN0b3JlIHtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIF9zZWxlY3RlZExvY2F0aW9ucyA9IG5ldyBTZXQ8TE9DQVRJT05fVFlQRSB8IG51bGw+KCk7XHJcblx0QG9ic2VydmFibGUgcHJpdmF0ZSBfY3VycmVudExvY2F0aW9uID0gbnVsbDtcclxuXHRAb2JzZXJ2YWJsZSBwcml2YXRlIF9uYW1lUG9zaXRpb24gPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG5cclxuXHRnZXQgc2VsZWN0ZWRMb2NhdGlvbnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnM7XHJcblx0fVxyXG5cclxuXHRnZXQgY3VycmVudExvY2F0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldCBuYW1lUG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmFtZVBvc2l0aW9uO1xyXG5cdH1cclxuXHJcblx0QGFjdGlvblxyXG5cdHNldEN1cnJlbnRMb2NhdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCBjYWxsYmFjaz8pID0+IHtcclxuXHRcdHRoaXMuX2N1cnJlbnRMb2NhdGlvbiA9IHZhbHVlO1xyXG5cdFx0dGhpcy5zZXROYW1lUG9zaXRpb24odmFsdWUpO1xyXG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuXHR9O1xyXG5cclxuXHRzZXROYW1lUG9zaXRpb24gPSAodmFsdWUpID0+IHtcclxuXHRcdGlmKCF2YWx1ZSkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgcGF0aFtkYXRhLWxvY2F0aW9uPSR7dmFsdWV9XWApO1xyXG5cdFx0Y29uc3QgY3IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRjb25zdCBuYW1lUmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uTmFtZScpO1xyXG5cdFx0Y29uc3QgbmFtZVdpZHRoID0gbmFtZVJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuXHJcblx0XHR0aGlzLl9uYW1lUG9zaXRpb24gPSB7XHJcblx0XHRcdHRvcDogY3IueSArIGNyLmhlaWdodCAvIDIgLSA0MCxcclxuXHRcdFx0bGVmdDogY3IueCArIGNyLndpZHRoIC8gMiAtIG5hbWVXaWR0aCAvIDJcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0aXNTZWxlY3RlZCA9IChuYW1lOiBMT0NBVElPTl9UWVBFKSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuaGFzKG5hbWUpO1xyXG5cdH07XHJcblxyXG5cdEBhY3Rpb25cclxuXHR0b2dnbGVMb2NhdGlvbiA9ICgpID0+IHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkTG9jYXRpb25zLmhhcyh0aGlzLl9jdXJyZW50TG9jYXRpb24pXHJcblx0XHRcdD8gdGhpcy5fc2VsZWN0ZWRMb2NhdGlvbnMuZGVsZXRlKHRoaXMuX2N1cnJlbnRMb2NhdGlvbilcclxuXHRcdFx0OiB0aGlzLl9zZWxlY3RlZExvY2F0aW9ucy5hZGQodGhpcy5fY3VycmVudExvY2F0aW9uKVxyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==