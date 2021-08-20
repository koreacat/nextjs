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

    gl.enableVertexAttribArray(positionAttributeLocation); // 데이터를 어떻게 꺼낼지 지정합니다.

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // positionBuffer(ARRAY_BUFFER)의 데이터를 꺼내오는 방법을 attribute에 지시

    var size = 2; // 반복마다 2개의 컴포넌트

    var type = gl.FLOAT; // 데이터는 32bit float

    var normalize = false; // 데이터 정규화 안 함

    var stride = 0; // 0 = 다음 위치를 가져오기 위해 반복마다 size * sizeof(type) 만큼 앞으로 이동

    var offset = 0; // 버퍼의 처음부터 시작
    // gl.vertexAttribPointer의 숨겨진 부분은 현재 바인딩된 ARRAY_BUFFER를 attribute에 할당한다는 겁니다.
    // 이 attribute는 이제 positionBuffer에 바인딩됩니다.
    // 이건 ARRAY_BUFFER bind point에 다른 것들을 자유롭게 할당할 수 있다는 걸 의미

    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset); // draw

    /*
    * count가 3이기 때문에 vertex shader를 세 번 실행할 겁니다.
    * 먼저 vertex shader attribute의
    * a_position.x와 a_position.y가 positionBuffer의 처음 2개의 값으로 설정됩니다.
    * 두 번째로 a_position.x와 a_position.y가 그다음 2개의 값으로 설정됩니다.
    * 마지막에는 남아있는 2개의 값으로 설정됩니다.
    * primitiveType을 gl.TRIANGLES로 설정했기 때문에,
    * vertex shader가 3번 실행될 때마다,
    * WebGL은 gl_Position에 설정한 3개의 값을 기반으로 삼각형을 그리는데요.
    * 캔버스 크기에 상관없이 이 값들은 -1에서 1사이의 clip space 좌표 안에 있습니다.
    * */

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
          __html: "\n\t\t\t\t\t// Attribute\uB294 \uBC84\uD37C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC74C\n  \t\t\t\t\t// \uBAA8\uB4E0 shader\uB294 main \uD568\uC218\uB97C \uAC00\uC9D0\n\t\t\t\t\t\n\t\t\t\t\tattribute vec4 a_position;\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_Position\uC740 vertex shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\tgl_Position = a_position;\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = vec4(0, 1, 0, 1); \n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInBvc2l0aW9ucyIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJ1c2VQcm9ncmFtIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJzaXplIiwidHlwZSIsIkZMT0FUIiwibm9ybWFsaXplIiwic3RyaWRlIiwib2Zmc2V0IiwidmVydGV4QXR0cmliUG9pbnRlciIsInByaW1pdGl2ZVR5cGUiLCJUUklBTkdMRVMiLCJjb3VudCIsImRyYXdBcnJheXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1B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K0JBQXVCLEVBQUU7QUFBQ2EsZ0JBQU07QUFBUDtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFXQztBQUFTLFVBQUUsRUFBQyxvQkFBWjtBQUFpQyxZQUFJLEVBQUMsT0FBdEM7QUFBOEMsK0JBQXVCLEVBQUU7QUFBQ0EsZ0JBQU07QUFBUDtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUF5QkM7QUFBUSxRQUFFLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNkJBLENBMUtEOztJQUFNbEQsVTs7S0FBQUEsVTtBQTRLU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2ViR0wuYTY1NjI0NWIzMjhlMTZkYzIwY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9ncmFtLCBjcmVhdGVTaGFkZXJ9IGZyb20gXCIuLi9jb21tb24vdXRpbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBQcmFjdGljZTAxID0gKCkgPT4ge1xyXG5cdGxldCBjYW52YXMgPSBudWxsO1xyXG5cdGxldCBnbCA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbnVsbDtcclxuXHRsZXQgdmVydGV4U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xyXG5cdGxldCBwcm9ncmFtID0gbnVsbDtcclxuXHRsZXQgcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQnVmZmVyID0gbnVsbDtcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0KCk7XHJcblx0XHRyZW5kZXIoKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdC8vIEdMU0zripQgQyDslrjslrTrpbwg6riw7LSI66GcIO2VnCwg7IOB7JyEIOugiOuyqCDshbDsnbTrlKkg7Ja47Ja07J2064ukLlxyXG5cdFx0Ly8gUmFzdGVyaXphdGlvbijroIjsiqTthLDtmZQpLSDrsLHthLAg6re4656Y7ZS9IOydtOuvuOyngOulvCDruYTrlJTsmKQg65SU7Iqk7ZSM66CI7J2064KYIO2UhOumsO2EsCDrk7HsnZgg656Y7Iqk7YSwIOuUlOuwlOydtOyKpOyXkCDstpzroKXtlZjquLAg7JyE7ZW0IOuemOyKpO2EsCDsnbTrr7jsp4DroZwg67OA7ZmY7ZWY64qUIOqyg1xyXG5cclxuXHRcdC8vIFdlYkdM7J2AIEdQVeyXkOyEnCDsi6TtlonrkKguIOuUsOudvOyEnCBHUFXsl5DshJwg7Iuk7ZaJ65CY64qUIOy9lOuTnOulvCDsoJzqs7XtlbTslbztlanri4jri6QuXHJcblx0XHQvLyDtlbTri7kg7L2U65Oc64qUIO2VqOyImCDsjI0g7ZiV7YOc66GcIOygnOqzte2VtOyVvO2VmOuKlOuNsFxyXG5cdFx0Ly8g7J20IOuRkCDtlajsiJjripQgdmVydGV4IHNoYWRlcuyZgCBmcmFnbWVudCBzaGFkZXLroZwg67aI66as6rOgIEMvQysr7LKY65+8IOyXhOqyqe2VnCBUeXBl7J2EIOqwgOyngOuKlCBHTFNM66GcIOyekeyEseuQmOyWtCDsnojsirXri4jri6QuXHJcblx0XHQvLyDsnbQg65GQIOqwnOulvCDtlanss5DshJwgcHJvZ3JhbeydtOudvOqzoCDrtoDrpoXri4jri6QuXHJcblxyXG5cdFx0Ly8gR2V0IEEgV2ViR0wgY29udGV4dFxyXG5cdFx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xyXG5cdFx0Z2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cdFx0aWYgKCFnbCkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIEdldCB0aGUgc3RyaW5ncyBmb3Igb3VyIEdMU0wgc2hhZGVyc1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0dmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2ZXJ0ZXgtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJhZ21lbnQtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblxyXG5cclxuXHRcdC8vIGNyZWF0ZSBHTFNMIHNoYWRlcnMsIHVwbG9hZCB0aGUgR0xTTCBzb3VyY2UsIGNvbXBpbGUgdGhlIHNoYWRlcnNcclxuXHRcdC8vIHZlcnRleFNoYWRlciAtIOyijO2RnOulvCDsoJzqs7UsIOygleygkCDsnITsuZjrpbwg6rOE7IKwXHJcblx0XHQvLyBmcmFnbWVudFNoYWRlciAtIOyDieyDgeydhCDsoJzqs7UsIO2YhOyerCDqt7jroKTsp4DripQgcHJpbWl0aXZl7J2YIOqwgSDtlL3shYDsl5Ag64yA7ZWcIOyDieyDgeydhCDqs4TsgrBcclxuXHRcdC8vIOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW1cclxuXHRcdHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcclxuXHRcdGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcclxuXHRcdHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcblxyXG5cclxuXHRcdC8vIOuovOyggCDtlbTslbwg7ZWgIOydvOydgCDrsKnquIgg7IOd7ISx65CcIHByb2dyYW3sl5Ag64yA7ZWcIGF0dHJpYnV0ZeydmCBsb2NhdGlvbuulvCDssL7ripQg6rKDXHJcblx0XHQvLyBBdHRyaWJ1dGUgbG9jYXRpb24o6re466as6rOgIHVuaWZvcm0gbG9jYXRpb24p7J2EIOywvuuKlCDqsoPsnYAg66CM642U66eB7ZWgIOuVjOqwgCDslYTri4jrnbwg7LSI6riw7ZmU7ZWY64qUIOuPmeyViCDtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Ly8gQXR0cmlidXRl64qUIOuyhO2NvOuhnOu2gO2EsCDrjbDsnbTthLDrpbwg6rCA7KC47Jik66+A66GcIOuyhO2NvOulvCDsg53shLHtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuXHRcdHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcblxyXG5cdFx0Ly8gYmluZCBwb2ludOuKlCBXZWJHTCDslYjsl5Ag7J6I64qUIOuCtOu2gCDsoITsl60g67OA7IiYXHJcblx0XHQvLyDrqLzsoIAgYmluZCBwb2ludOyXkCDsnpDsm5DsnYQg7ZWg64u57ZWp7Iuc64ukLiDqt7jrn6zrqbQg66qo65OgIO2VqOyImOqwgCBiaW5kIHBvaW5066W8IO2Gte2VtCDsnpDsm5DsnYQg7LC47KGw7ZWp64uI64ukLlxyXG5cdFx0Ly8gQmluZCBpdCB0byBBUlJBWV9CVUZGRVIgKHRoaW5rIG9mIGl0IGFzIEFSUkFZX0JVRkZFUiA9IHBvc2l0aW9uQnVmZmVyKVxyXG5cdFx0Ly8g7J207KCcIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IO2VtOuLuSDrsoTtjbzrpbwg7LC47KGw7ZW07IScIOuNsOydtO2EsOulvCDrhKPsnYQg7IiYIOyeiOyKteuLiOuLpC5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cclxuXHRcdC8vIDJEIHBvaW50IDPqsJxcclxuXHJcblx0XHRcclxuXHRcdHZhciBwb3NpdGlvbnMgPSBbXHJcblx0XHRcdDAsIDAsXHJcblx0XHRcdDAsIDAuNSxcclxuXHRcdFx0MC43LCAwLFxyXG5cdFx0XTtcclxuXHJcblxyXG5cdFx0Ly8gV2ViR0zsnYAg6rCV66Cl7ZWcIHR5cGXsnYQg6rCA7KeA64qUIOuNsOydtO2EsOqwgCDtlYTsmpTtlZjrr4DroZwsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKeuKlCDsg4jroZzsmrQgMzJiaXQg67aA64+ZIOyGjOyImOygkCDrsLDsl7TsnYQg7IOd7ISxXHJcblx0XHQvLyBnbC5idWZmZXJEYXRh64qUIOuNsOydtO2EsOulvCBHUFXsnZggcG9zaXRpb25CdWZmZXLroZwg67O17IKs7ZWp64uI64ukLlxyXG5cdFx0Ly8g7JyE7JeQ7IScIEFSUkFZX0JVRkZFUiBiaW5kIHBvaW5066GcIO2VoOuLue2WiOq4sCDrlYzrrLjsl5AgcG9zaXRpb24gYnVmZmVy66W8IOyCrOyaqe2eiOqzoCDsnojsirXri4jri6QuXHJcblx0XHQvLyBnbC5TVEFUSUNfRFJBV+uKlCDrjbDsnbTthLDrpbwg7Ja065a76rKMIOyCrOyaqe2VoCDqsoPsnbjsp4AgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Ly8gV2ViR0zsnYAg7Yq57KCVIO2VreuqqeuTpOydhCDstZzsoIHtmZTtlZjquLAg7JyE7ZW0IO2VtOuLuSBoaW5066W8IOyCrOyaqe2VoCDsiJgg7J6I64qU642w7JqULlxyXG5cdFx0Ly8gZ2wuU1RBVElDX0RSQVfripQg7J20IOuNsOydtO2EsOqwgCDrp47snbQg67CU64CM7KeAIOyViuydhCDqsoMg6rCZ64uk6rOgIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdGdsLmJ1ZmZlckRhdGEoXHJcblx0XHRcdGdsLkFSUkFZX0JVRkZFUixcclxuXHRcdFx0bmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMpLFxyXG5cdFx0XHRnbC5TVEFUSUNfRFJBV1xyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHJcblx0Y29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG5cdFx0Ly8g7IKs7JqpIOqwgOuKpe2VnCDqs7XqsITsnYQg7LGE7Jqw6riwIOychO2VtCBDU1ProZwg7YGs6riw66W8IOqysOygle2VnCDri6TsnYwg7J287LmY7ZWY64+E66GdIOyhsOyglVxyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0d2ViZ2xVdGlscy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcyk7XHJcblxyXG5cdFx0Ly8gZ2xfUG9zaXRpb27snLzroZwg7ISk7KCV7ZWgIGNsaXAgc3BhY2Ug6rCS7J2EIOyWtOuWu+qyjCBzY3JlZW4gc3BhY2XroZwg67OA7ZmY7ZWY64qU7KeAIFdlYkdM7JeQIOyVjOugpOykmOyVvCDtlZjripTrjbDsmpQuXHJcblx0XHQvLyDsnbTrpbwg7JyE7ZW0IGdsLnZpZXdwb3J066W8IO2YuOy2nO2VtOyEnCDtmITsnqwg7LqU67KE7IqkIO2BrOq4sOulvCDsoITri6ztlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Ly8g7J2064qUIC0xIDwtPiArMSBjbGlwIHNwYWNl66W8LCB464qUIDAgPC0+IGdsLmNhbnZhcy53aWR0aOuhnCwgeeuKlCAwIDwtPiBnbC5jYW52YXMuaGVpZ2h066GcIOunpO2VkeyLnOy8nOykjeuLiOuLpC5cclxuXHRcdGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG5cclxuXHRcdC8vIENsZWFyIHRoZSBjYW52YXNcclxuXHRcdGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XHJcblx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcblx0XHQvLyDsi6TtlontlaAgc2hhZGVyIHByb2dyYW3snYQgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Z2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcblx0XHQvLyDsnITsl5DshJwg7ISk7KCV7ZWcIOuyhO2NvOyXkOyEnCDrjbDsnbTthLDrpbwg6rCA7KC47JmAIHNoYWRlcuydmCBhdHRyaWJ1dGXsl5Ag7KCc6rO17ZWY64qUIOuwqeuyleydhCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642wLFxyXG5cdFx0Ly8g7Jqw7ISgIGF0dHJpYnV0ZeulvCDtmZzshLHtmZTtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbik7XHJcblxyXG5cdFx0Ly8g642w7J207YSw66W8IOyWtOuWu+qyjCDqurzrgrzsp4Ag7KeA7KCV7ZWp64uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblx0XHQvLyBwb3NpdGlvbkJ1ZmZlcihBUlJBWV9CVUZGRVIp7J2YIOuNsOydtO2EsOulvCDqurzrgrTsmKTripQg67Cp67KV7J2EIGF0dHJpYnV0ZeyXkCDsp4Dsi5xcclxuXHRcdHZhciBzaXplID0gMjsgICAgICAgICAgLy8g67CY67O166eI64ukIDLqsJzsnZgg7Lu07Y+s64SM7Yq4XHJcblx0XHR2YXIgdHlwZSA9IGdsLkZMT0FUOyAgIC8vIOuNsOydtO2EsOuKlCAzMmJpdCBmbG9hdFxyXG5cdFx0dmFyIG5vcm1hbGl6ZSA9IGZhbHNlOyAvLyDrjbDsnbTthLAg7KCV6rec7ZmUIOyViCDtlahcclxuXHRcdHZhciBzdHJpZGUgPSAwOyAgICAgICAgLy8gMCA9IOuLpOydjCDsnITsuZjrpbwg6rCA7KC47Jik6riwIOychO2VtCDrsJjrs7Xrp4jri6Qgc2l6ZSAqIHNpemVvZih0eXBlKSDrp4ztgbwg7JWe7Jy866GcIOydtOuPmVxyXG5cdFx0dmFyIG9mZnNldCA9IDA7ICAgICAgICAvLyDrsoTtjbzsnZgg7LKY7J2M67aA7YSwIOyLnOyekVxyXG5cclxuXHRcdC8vIGdsLnZlcnRleEF0dHJpYlBvaW50ZXLsnZgg7Iio6rKo7KeEIOu2gOu2hOydgCDtmITsnqwg67CU7J2465Sp65CcIEFSUkFZX0JVRkZFUuulvCBhdHRyaWJ1dGXsl5Ag7ZWg64u57ZWc64uk64qUIOqygeuLiOuLpC5cclxuXHRcdC8vIOydtCBhdHRyaWJ1dGXripQg7J207KCcIHBvc2l0aW9uQnVmZmVy7JeQIOuwlOyduOuUqeuQqeuLiOuLpC5cclxuXHRcdC8vIOydtOqxtCBBUlJBWV9CVUZGRVIgYmluZCBwb2ludOyXkCDri6Trpbgg6rKD65Ok7J2EIOyekOycoOuhreqyjCDtlaDri7ntlaAg7IiYIOyeiOuLpOuKlCDqsbgg7J2Y66+4XHJcblx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG5cdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBzaXplLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcclxuXHJcblx0XHQvLyBkcmF3XHJcblx0XHQvKlxyXG5cdFx0KiBjb3VudOqwgCAz7J206riwIOuVjOusuOyXkCB2ZXJ0ZXggc2hhZGVy66W8IOyEuCDrsogg7Iuk7ZaJ7ZWgIOqygeuLiOuLpC5cclxuXHRcdCog66i87KCAIHZlcnRleCBzaGFkZXIgYXR0cmlidXRl7J2YXHJcblx0XHQqIGFfcG9zaXRpb24ueOyZgCBhX3Bvc2l0aW9uLnnqsIAgcG9zaXRpb25CdWZmZXLsnZgg7LKY7J2MIDLqsJzsnZgg6rCS7Jy866GcIOyEpOygleuQqeuLiOuLpC5cclxuXHRcdCog65GQIOuyiOynuOuhnCBhX3Bvc2l0aW9uLnjsmYAgYV9wb3NpdGlvbi556rCAIOq3uOuLpOydjCAy6rCc7J2YIOqwkuycvOuhnCDshKTsoJXrkKnri4jri6QuXHJcblx0XHQqIOuniOyngOunieyXkOuKlCDrgqjslYTsnojripQgMuqwnOydmCDqsJLsnLzroZwg7ISk7KCV65Cp64uI64ukLlxyXG5cdFx0KiBwcmltaXRpdmVUeXBl7J2EIGdsLlRSSUFOR0xFU+uhnCDshKTsoJXtlojquLAg65WM66y47JeQLFxyXG5cdFx0KiB2ZXJ0ZXggc2hhZGVy6rCAIDPrsogg7Iuk7ZaJ65CgIOuVjOuniOuLpCxcclxuXHRcdCogV2ViR0zsnYAgZ2xfUG9zaXRpb27sl5Ag7ISk7KCV7ZWcIDPqsJzsnZgg6rCS7J2EIOq4sOuwmOycvOuhnCDsgrzqsIHtmJXsnYQg6re466as64qU642w7JqULlxyXG5cdFx0KiDsupTrsoTsiqQg7YGs6riw7JeQIOyDgeq0gOyXhuydtCDsnbQg6rCS65Ok7J2AIC0x7JeQ7IScIDHsgqzsnbTsnZggY2xpcCBzcGFjZSDsooztkZwg7JWI7JeQIOyeiOyKteuLiOuLpC5cclxuXHRcdCogKi9cclxuXHRcdHZhciBwcmltaXRpdmVUeXBlID0gZ2wuVFJJQU5HTEVTO1xyXG5cdFx0dmFyIG9mZnNldCA9IDA7XHJcblx0XHR2YXIgY291bnQgPSAzO1xyXG5cdFx0Z2wuZHJhd0FycmF5cyhwcmltaXRpdmVUeXBlLCBvZmZzZXQsIGNvdW50KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHNjcmlwdCBpZD1cInZlcnRleC1zaGFkZXItMmRcIiB0eXBlPVwibm90anNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gQXR0cmlidXRl64qUIOuyhO2NvOyXkOyEnCDrjbDsnbTthLDrpbwg67Cb7J2MXHJcbiAgXHRcdFx0XHRcdC8vIOuqqOuToCBzaGFkZXLripQgbWFpbiDtlajsiJjrpbwg6rCA7KeQXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ2xfUG9zaXRpb27snYAgdmVydGV4IHNoYWRlcuqwgCDshKTsoJXsnYQg64u064u57ZWY64qUIO2KueyImCDrs4DsiJhcclxuXHRcdFx0XHRcdFx0Z2xfUG9zaXRpb24gPSBhX3Bvc2l0aW9uO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9fS8+XHJcblx0XHRcdFx0PHNjcmlwdCAgaWQ9XCJmcmFnbWVudC1zaGFkZXItMmRcIiB0eXBlPVwibm90anNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgc2hhZGVy64qUIOq4sOuzuCDsoJXrsIDrj4Trpbwg6rCA7KeA6rOgIOyeiOyngCDslYrsnLzrr4DroZwg7ZWY64KY66W8IOyEoO2Dne2VtOyVvCDtlanri4jri6QuXHJcblx0XHRcdFx0XHQvLyBtZWRpdW1w7J2AIOyii+ydgCDquLDrs7jqsJLsnLzroZwgXCLspJHqsIQg7KCV67CA64+EXCLrpbwg7J2Y66+47ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ2xfRnJhZ0NvbG9y64qUIGZyYWdtZW50IHNoYWRlcuqwgCDshKTsoJXsnYQg64u064u57ZWY64qUIO2KueyImCDrs4DsiJhcclxuXHRcdFx0XHRcdFx0Ly8gV2ViR0zsl5DshJwg7IOJ7IOB7J2AIDDsl5DshJwgMeq5jOyngOyeheuLiOuLpC5cclxuXHRcdFx0XHRcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCgwLCAxLCAwLCAxKTsgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH19Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHR7LypDbGlwIHNwYWNlIOyijO2RnOuKlCDsupTrsoTsiqQg7YGs6riw7JeQIOyDgeq0gOyXhuydtCDtla3sg4EgLTHsl5DshJwgKzHquYzsp4DsnoXri4jri6QuKi99XHJcblx0XHRcdDxjYW52YXMgaWQ9eydjJ30vPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2UwMTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==