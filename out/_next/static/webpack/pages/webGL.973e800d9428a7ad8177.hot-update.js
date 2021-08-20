webpackHotUpdate_N_E("pages/webGL",{

/***/ "./src/components/webGL/practice01/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/webGL/practice01/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ "./src/components/webGL/common/util.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\webGL\\practice01\\index.tsx",
    _this = undefined,
    _s2 = $RefreshSig$();





var Practice01 = function Practice01() {
  _s2();

  var _s = $RefreshSig$();

  var canvas = null;
  var gl = null;
  var vertexShaderSource = null;
  var fragmentShaderSource = null;
  var vertexShader = null;
  var fragmentShader = null;
  var program = null;
  var positionAttributeLocation = null;
  var positionBuffer = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
    render();
  });

  var init = function init() {
    // GLSL는 C 언어를 기초로 한, 상위 레벨 셰이딩 언어이다.
    // Rasterization(레스터화)- 백터 그래픽 이미지를 비디오 디스플레이나 프린터 등의 래스터 디바이스에 출력하기 위해 래스터 이미지로 변환하는 것
    // WebGL은 GPU에서 실행됨. 따라서 GPU에서 실행되는 코드를 제공해야합니다.
    // 해당 코드는 함수 쌍 형태로 제공해야하는데
    // 이 두 함수는 vertex shader와 fragment shader로 불리고 C/C++처럼 엄격한 Type을 가지는 GLSL로 작성되어 있습니다.
    // 이 두 개를 합쳐서 program이라고 부릅니다.
    // Get A WebGL context
    canvas = document.querySelector("#c");
    gl = canvas.getContext("webgl");
    if (!gl) return; // Get the strings for our GLSL shaders
    // @ts-ignore

    vertexShaderSource = document.querySelector("#vertex-shader-2d").text; // @ts-ignore

    fragmentShaderSource = document.querySelector("#fragment-shader-2d").text; // create GLSL shaders, upload the GLSL source, compile the shaders
    // vertexShader - 좌표를 제공, 정점 위치를 계산
    // fragmentShader - 색상을 제공, 현재 그려지는 primitive의 각 픽셀에 대한 색상을 계산
    // 두 개를 합쳐서 program

    vertexShader = Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["createShader"])(gl, gl.VERTEX_SHADER, vertexShaderSource);
    fragmentShader = Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["createShader"])(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    program = Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["createProgram"])(gl, vertexShader, fragmentShader); // 먼저 해야 할 일은 방금 생성된 program에 대한 attribute의 location를 찾는 것
    // Attribute location(그리고 uniform location)을 찾는 것은 렌더링할 때가 아니라 초기화하는 동안 해야 합니다.
    // Attribute는 버퍼로부터 데이터를 가져오므로 버퍼를 생성해야 합니다.

    positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    positionBuffer = gl.createBuffer(); // bind point는 WebGL 안에 있는 내부 전역 변수
    // 먼저 bind point에 자원을 할당합시다. 그러면 모든 함수가 bind point를 통해 자원을 참조합니다.
    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
    // 이제 bind point를 통해 해당 버퍼를 참조해서 데이터를 넣을 수 있습니다.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 2D point 3개

    var positions = [0, 0, 0, 0.5, 0.7, 0]; // WebGL은 강력한 type을 가지는 데이터가 필요하므로, new Float32Array(positions)는 새로운 32bit 부동 소수점 배열을 생성
    // gl.bufferData는 데이터를 GPU의 positionBuffer로 복사합니다.
    // 위에서 ARRAY_BUFFER bind point로 할당했기 때문에 position buffer를 사용히고 있습니다.
    // gl.STATIC_DRAW는 데이터를 어떻게 사용할 것인지 WebGL에 알려줍니다.
    // WebGL은 특정 항목들을 최적화하기 위해 해당 hint를 사용할 수 있는데요.
    // gl.STATIC_DRAW는 이 데이터가 많이 바뀌지 않을 것 같다고 WebGL에 알려줍니다.

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  };

  var render = function render() {
    _s();

    // 사용 가능한 공간을 채우기 위해 CSS로 크기를 결정한 다음 일치하도록 조정
    // @ts-ignore
    webglUtils.resizeCanvasToDisplaySize(gl.canvas); // gl_Position으로 설정할 clip space 값을 어떻게 screen space로 변환하는지 WebGL에 알려줘야 하는데요.
    // 이를 위해 gl.viewport를 호출해서 현재 캔버스 크기를 전달해야 합니다.
    // 이는 -1 <-> +1 clip space를, x는 0 <-> gl.canvas.width로, y는 0 <-> gl.canvas.height로 매핑시켜줍니다.

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // Clear the canvas

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT); // 실행할 shader program을 WebGL에 알려줍니다.

    gl.useProgram(program); // 위에서 설정한 버퍼에서 데이터를 가져와 shader의 attribute에 제공하는 방법을 WebGL에 알려줘야 하는데,
    // 우선 attribute를 활성화해야 합니다.

    gl.enableVertexAttribArray(positionAttributeLocation); // Bind the position buffer.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)

    var size = 2; // 2 components per iteration

    var type = gl.FLOAT; // the data is 32bit floats

    var normalize = false; // don't normalize the data

    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position

    var offset = 0; // start at the beginning of the buffer

    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset); // draw

    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 3;
    gl.drawArrays(primitiveType, offset, count);
  };

  _s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
    return [gl.useProgram];
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "vertex-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// Attribute\uB294 \uBC84\uD37C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC74C\n  \t\t\t\t\t// \uBAA8\uB4E0 shader\uB294 main \uD568\uC218\uB97C \uAC00\uC9D0\n\n\t\t\t\t\tattribute vec4 a_position;\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_Position\uC740 vertex shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\tgl_Position = a_position;\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = vec4(0, 1, 0, 1); \n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 3
  }, _this);
};

_s2(Practice01, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Practice01;
/* harmony default export */ __webpack_exports__["default"] = (Practice01);

var _c;

$RefreshReg$(_c, "Practice01");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInBvc2l0aW9ucyIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJ1c2VQcm9ncmFtIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJzaXplIiwidHlwZSIsIkZMT0FUIiwibm9ybWFsaXplIiwic3RyaWRlIiwib2Zmc2V0IiwidmVydGV4QXR0cmliUG9pbnRlciIsInByaW1pdGl2ZVR5cGUiLCJUUklBTkdMRVMiLCJjb3VudCIsImRyYXdBcnJheXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1B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QUFFLEVBQUMsb0JBQVo7QUFBaUMsWUFBSSxFQUFDLE9BQXRDO0FBQThDLCtCQUF1QixFQUFFO0FBQUNBLGdCQUFNO0FBQVA7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBeUJDO0FBQVEsUUFBRSxFQUFFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTZCQSxDQXpKRDs7SUFBTWxELFU7O0tBQUFBLFU7QUEySlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dlYkdMLjk3M2U4MDBkOTQyOGE3YWQ4MTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUHJvZ3JhbSwgY3JlYXRlU2hhZGVyfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgUHJhY3RpY2UwMSA9ICgpID0+IHtcclxuXHRsZXQgY2FudmFzID0gbnVsbDtcclxuXHRsZXQgZ2wgPSBudWxsO1xyXG5cdGxldCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBudWxsO1xyXG5cdGxldCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlciA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgcHJvZ3JhbSA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBudWxsO1xyXG5cdGxldCBwb3NpdGlvbkJ1ZmZlciA9IG51bGw7XHJcblxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdCgpO1xyXG5cdFx0cmVuZGVyKCk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0XHQvLyBHTFNM64qUIEMg7Ja47Ja066W8IOq4sOy0iOuhnCDtlZwsIOyDgeychCDroIjrsqgg7IWw7J2065SpIOyWuOyWtOydtOuLpC5cclxuXHRcdC8vIFJhc3Rlcml6YXRpb24o66CI7Iqk7YSw7ZmUKS0g67Cx7YSwIOq3uOuemO2UvSDsnbTrr7jsp4Drpbwg67mE65SU7JikIOuUlOyKpO2UjOugiOydtOuCmCDtlITrprDthLAg65Ox7J2YIOuemOyKpO2EsCDrlJTrsJTsnbTsiqTsl5Ag7Lac66Cl7ZWY6riwIOychO2VtCDrnpjsiqTthLAg7J2066+47KeA66GcIOuzgO2ZmO2VmOuKlCDqsoNcclxuXHJcblx0XHQvLyBXZWJHTOydgCBHUFXsl5DshJwg7Iuk7ZaJ65CoLiDrlLDrnbzshJwgR1BV7JeQ7IScIOyLpO2WieuQmOuKlCDsvZTrk5zrpbwg7KCc6rO17ZW07JW87ZWp64uI64ukLlxyXG5cdFx0Ly8g7ZW064u5IOy9lOuTnOuKlCDtlajsiJgg7IyNIO2Yle2DnOuhnCDsoJzqs7XtlbTslbztlZjripTrjbBcclxuXHRcdC8vIOydtCDrkZAg7ZWo7IiY64qUIHZlcnRleCBzaGFkZXLsmYAgZnJhZ21lbnQgc2hhZGVy66GcIOu2iOumrOqzoCBDL0MrK+yymOufvCDsl4TqsqntlZwgVHlwZeydhCDqsIDsp4DripQgR0xTTOuhnCDsnpHshLHrkJjslrQg7J6I7Iq164uI64ukLlxyXG5cdFx0Ly8g7J20IOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW3snbTrnbzqs6Ag67aA66aF64uI64ukLlxyXG5cclxuXHRcdC8vIEdldCBBIFdlYkdMIGNvbnRleHRcclxuXHRcdGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY1wiKTtcclxuXHRcdGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHRcdGlmICghZ2wpIHJldHVybjtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHN0cmluZ3MgZm9yIG91ciBHTFNMIHNoYWRlcnNcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmVydGV4LXNoYWRlci0yZFwiKS50ZXh0O1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0ZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZyYWdtZW50LXNoYWRlci0yZFwiKS50ZXh0O1xyXG5cclxuXHJcblx0XHQvLyBjcmVhdGUgR0xTTCBzaGFkZXJzLCB1cGxvYWQgdGhlIEdMU0wgc291cmNlLCBjb21waWxlIHRoZSBzaGFkZXJzXHJcblx0XHQvLyB2ZXJ0ZXhTaGFkZXIgLSDsooztkZzrpbwg7KCc6rO1LCDsoJXsoJAg7JyE7LmY66W8IOqzhOyCsFxyXG5cdFx0Ly8gZnJhZ21lbnRTaGFkZXIgLSDsg4nsg4HsnYQg7KCc6rO1LCDtmITsnqwg6re466Ck7KeA64qUIHByaW1pdGl2ZeydmCDqsIEg7ZS97IWA7JeQIOuMgO2VnCDsg4nsg4HsnYQg6rOE7IKwXHJcblx0XHQvLyDrkZAg6rCc66W8IO2VqeyzkOyEnCBwcm9ncmFtXHJcblx0XHR2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNoYWRlclNvdXJjZSk7XHJcblx0XHRmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XHJcblx0XHRwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG5cclxuXHJcblx0XHQvLyDrqLzsoIAg7ZW07JW8IO2VoCDsnbzsnYAg67Cp6riIIOyDneyEseuQnCBwcm9ncmFt7JeQIOuMgO2VnCBhdHRyaWJ1dGXsnZggbG9jYXRpb27rpbwg7LC+64qUIOqyg1xyXG5cdFx0Ly8gQXR0cmlidXRlIGxvY2F0aW9uKOq3uOumrOqzoCB1bmlmb3JtIGxvY2F0aW9uKeydhCDssL7ripQg6rKD7J2AIOugjOuNlOunge2VoCDrlYzqsIAg7JWE64uI6528IOy0iOq4sO2ZlO2VmOuKlCDrj5nslYgg7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdC8vIEF0dHJpYnV0ZeuKlCDrsoTtjbzroZzrtoDthLAg642w7J207YSw66W8IOqwgOyguOyYpOuvgOuhnCDrsoTtjbzrpbwg7IOd7ISx7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XHJcblx0XHRwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuXHRcdC8vIGJpbmQgcG9pbnTripQgV2ViR0wg7JWI7JeQIOyeiOuKlCDrgrTrtoAg7KCE7JetIOuzgOyImFxyXG5cdFx0Ly8g66i87KCAIGJpbmQgcG9pbnTsl5Ag7J6Q7JuQ7J2EIO2VoOuLue2VqeyLnOuLpC4g6re465+s66m0IOuqqOuToCDtlajsiJjqsIAgYmluZCBwb2ludOulvCDthrXtlbQg7J6Q7JuQ7J2EIOywuOyhsO2VqeuLiOuLpC5cclxuXHRcdC8vIEJpbmQgaXQgdG8gQVJSQVlfQlVGRkVSICh0aGluayBvZiBpdCBhcyBBUlJBWV9CVUZGRVIgPSBwb3NpdGlvbkJ1ZmZlcilcclxuXHRcdC8vIOydtOygnCBiaW5kIHBvaW5066W8IO2Gte2VtCDtlbTri7kg67KE7Y2866W8IOywuOyhsO2VtOyEnCDrjbDsnbTthLDrpbwg64Sj7J2EIOyImCDsnojsirXri4jri6QuXHJcblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xyXG5cclxuXHJcblx0XHQvLyAyRCBwb2ludCAz6rCcXHJcblx0XHR2YXIgcG9zaXRpb25zID0gW1xyXG5cdFx0XHQwLCAwLFxyXG5cdFx0XHQwLCAwLjUsXHJcblx0XHRcdDAuNywgMCxcclxuXHRcdF07XHJcblxyXG5cclxuXHRcdC8vIFdlYkdM7J2AIOqwleugpe2VnCB0eXBl7J2EIOqwgOyngOuKlCDrjbDsnbTthLDqsIAg7ZWE7JqU7ZWY66+A66GcLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucynripQg7IOI66Gc7Jq0IDMyYml0IOu2gOuPmSDshozsiJjsoJAg67Cw7Je07J2EIOyDneyEsVxyXG5cdFx0Ly8gZ2wuYnVmZmVyRGF0YeuKlCDrjbDsnbTthLDrpbwgR1BV7J2YIHBvc2l0aW9uQnVmZmVy66GcIOuzteyCrO2VqeuLiOuLpC5cclxuXHRcdC8vIOychOyXkOyEnCBBUlJBWV9CVUZGRVIgYmluZCBwb2ludOuhnCDtlaDri7ntlojquLAg65WM66y47JeQIHBvc2l0aW9uIGJ1ZmZlcuulvCDsgqzsmqntnojqs6Ag7J6I7Iq164uI64ukLlxyXG5cdFx0Ly8gZ2wuU1RBVElDX0RSQVfripQg642w7J207YSw66W8IOyWtOuWu+qyjCDsgqzsmqntlaAg6rKD7J247KeAIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdC8vIFdlYkdM7J2AIO2KueyglSDtla3rqqnrk6TsnYQg7LWc7KCB7ZmU7ZWY6riwIOychO2VtCDtlbTri7kgaGludOulvCDsgqzsmqntlaAg7IiYIOyeiOuKlOuNsOyalC5cclxuXHRcdC8vIGdsLlNUQVRJQ19EUkFX64qUIOydtCDrjbDsnbTthLDqsIAg66eO7J20IOuwlOuAjOyngCDslYrsnYQg6rKDIOqwmeuLpOqzoCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHRnbC5idWZmZXJEYXRhKFxyXG5cdFx0XHRnbC5BUlJBWV9CVUZGRVIsXHJcblx0XHRcdG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSxcclxuXHRcdFx0Z2wuU1RBVElDX0RSQVdcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuXHRcdC8vIOyCrOyaqSDqsIDriqXtlZwg6rO16rCE7J2EIOyxhOyasOq4sCDsnITtlbQgQ1NT66GcIO2BrOq4sOulvCDqsrDsoJXtlZwg64uk7J2MIOydvOy5mO2VmOuPhOuhnSDsobDsoJVcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHdlYmdsVXRpbHMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpO1xyXG5cclxuXHRcdC8vIGdsX1Bvc2l0aW9u7Jy866GcIOyEpOygle2VoCBjbGlwIHNwYWNlIOqwkuydhCDslrTrlrvqsowgc2NyZWVuIHNwYWNl66GcIOuzgO2ZmO2VmOuKlOyngCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642w7JqULlxyXG5cdFx0Ly8g7J2066W8IOychO2VtCBnbC52aWV3cG9ydOulvCDtmLjstpztlbTshJwg7ZiE7J6sIOy6lOuyhOyKpCDtgazquLDrpbwg7KCE64us7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdC8vIOydtOuKlCAtMSA8LT4gKzEgY2xpcCBzcGFjZeulvCwgeOuKlCAwIDwtPiBnbC5jYW52YXMud2lkdGjroZwsIHnripQgMCA8LT4gZ2wuY2FudmFzLmhlaWdodOuhnCDrp6TtlZHsi5zsvJzspI3ri4jri6QuXHJcblx0XHRnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHJcblx0XHQvLyBDbGVhciB0aGUgY2FudmFzXHJcblx0XHRnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG5cdFx0Ly8g7Iuk7ZaJ7ZWgIHNoYWRlciBwcm9ncmFt7J2EIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG5cdFx0Ly8g7JyE7JeQ7IScIOyEpOygle2VnCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOqwgOyguOyZgCBzaGFkZXLsnZggYXR0cmlidXRl7JeQIOygnOqzte2VmOuKlCDrsKnrspXsnYQgV2ViR0zsl5Ag7JWM66Ck7KSY7JW8IO2VmOuKlOuNsCxcclxuXHRcdC8vIOyasOyEoCBhdHRyaWJ1dGXrpbwg7Zmc7ISx7ZmU7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuXHRcdC8vIEJpbmQgdGhlIHBvc2l0aW9uIGJ1ZmZlci5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cdFx0Ly8gVGVsbCB0aGUgYXR0cmlidXRlIGhvdyB0byBnZXQgZGF0YSBvdXQgb2YgcG9zaXRpb25CdWZmZXIgKEFSUkFZX0JVRkZFUilcclxuXHRcdHZhciBzaXplID0gMjsgICAgICAgICAgLy8gMiBjb21wb25lbnRzIHBlciBpdGVyYXRpb25cclxuXHRcdHZhciB0eXBlID0gZ2wuRkxPQVQ7ICAgLy8gdGhlIGRhdGEgaXMgMzJiaXQgZmxvYXRzXHJcblx0XHR2YXIgbm9ybWFsaXplID0gZmFsc2U7IC8vIGRvbid0IG5vcm1hbGl6ZSB0aGUgZGF0YVxyXG5cdFx0dmFyIHN0cmlkZSA9IDA7ICAgICAgICAvLyAwID0gbW92ZSBmb3J3YXJkIHNpemUgKiBzaXplb2YodHlwZSkgZWFjaCBpdGVyYXRpb24gdG8gZ2V0IHRoZSBuZXh0IHBvc2l0aW9uXHJcblx0XHR2YXIgb2Zmc2V0ID0gMDsgICAgICAgIC8vIHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlclxyXG5cdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuXHRcdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XHJcblxyXG5cdFx0Ly8gZHJhd1xyXG5cdFx0dmFyIHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVM7XHJcblx0XHR2YXIgb2Zmc2V0ID0gMDtcclxuXHRcdHZhciBjb3VudCA9IDM7XHJcblx0XHRnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIG9mZnNldCwgY291bnQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwidmVydGV4LXNoYWRlci0yZFwiIHR5cGU9XCJub3Rqc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBgXHJcblx0XHRcdFx0XHQvLyBBdHRyaWJ1dGXripQg67KE7Y287JeQ7IScIOuNsOydtO2EsOulvCDrsJvsnYxcclxuICBcdFx0XHRcdFx0Ly8g66qo65OgIHNoYWRlcuuKlCBtYWluIO2VqOyImOulvCDqsIDsp5BcclxuXHJcblx0XHRcdFx0XHRhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1x0XHRcdFx0XHJcblx0XHRcdFx0XHR2b2lkIG1haW4oKSB7XHJcblx0XHRcdFx0XHRcdC8vIGdsX1Bvc2l0aW9u7J2AIHZlcnRleCBzaGFkZXLqsIAg7ISk7KCV7J2EIOuLtOuLue2VmOuKlCDtirnsiJgg67OA7IiYXHJcblx0XHRcdFx0XHRcdGdsX1Bvc2l0aW9uID0gYV9wb3NpdGlvbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfX0vPlxyXG5cdFx0XHRcdDxzY3JpcHQgIGlkPVwiZnJhZ21lbnQtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcclxuXHRcdFx0XHRcdC8vIGZyYWdtZW50IHNoYWRlcuuKlCDquLDrs7gg7KCV67CA64+E66W8IOqwgOyngOqzoCDsnojsp4Ag7JWK7Jy866+A66GcIO2VmOuCmOulvCDshKDtg53tlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0Ly8gbWVkaXVtcOydgCDsoovsnYAg6riw67O46rCS7Jy866GcIFwi7KSR6rCEIOygleuwgOuPhFwi66W8IOydmOuvuO2VqeuLiOuLpC5cclxuXHRcdFx0XHRcdHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2b2lkIG1haW4oKSB7XHJcblx0XHRcdFx0XHRcdC8vIGdsX0ZyYWdDb2xvcuuKlCBmcmFnbWVudCBzaGFkZXLqsIAg7ISk7KCV7J2EIOuLtOuLue2VmOuKlCDtirnsiJgg67OA7IiYXHJcblx0XHRcdFx0XHRcdC8vIFdlYkdM7JeQ7IScIOyDieyDgeydgCAw7JeQ7IScIDHquYzsp4DsnoXri4jri6QuXHJcblx0XHRcdFx0XHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoMCwgMSwgMCwgMSk7IFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9fS8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0ey8qQ2xpcCBzcGFjZSDsooztkZzripQg7LqU67KE7IqkIO2BrOq4sOyXkCDsg4HqtIDsl4bsnbQg7ZWt7IOBIC0x7JeQ7IScICsx6rmM7KeA7J6F64uI64ukLiovfVxyXG5cdFx0XHQ8Y2FudmFzIGlkPXsnYyd9Lz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNlMDE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=