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
    // 캔버스 크기가 400x300이라면 이런 식으로 clip space를 screen space로 변환합니다.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInBvc2l0aW9ucyIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJ1c2VQcm9ncmFtIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJzaXplIiwidHlwZSIsIkZMT0FUIiwibm9ybWFsaXplIiwic3RyaWRlIiwib2Zmc2V0IiwidmVydGV4QXR0cmliUG9pbnRlciIsInByaW1pdGl2ZVR5cGUiLCJUUklBTkdMRVMiLCJjb3VudCIsImRyYXdBcnJheXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1B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QUEyQywrQkFBdUIsRUFBRTtBQUFDYSxnQkFBTTtBQUFQO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVdDO0FBQVMsVUFBRSxFQUFDLG9CQUFaO0FBQWlDLFlBQUksRUFBQyxPQUF0QztBQUE4QywrQkFBdUIsRUFBRTtBQUFDQSxnQkFBTTtBQUFQO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQXlCQztBQUFRLFFBQUUsRUFBRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE2QkEsQ0ExS0Q7O0lBQU1sRCxVOztLQUFBQSxVO0FBNEtTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93ZWJHTC5lNzdkNWQ4MjY5YmJjNDliODlkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVByb2dyYW0sIGNyZWF0ZVNoYWRlcn0gZnJvbSBcIi4uL2NvbW1vbi91dGlsXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IFByYWN0aWNlMDEgPSAoKSA9PiB7XHJcblx0bGV0IGNhbnZhcyA9IG51bGw7XHJcblx0bGV0IGdsID0gbnVsbDtcclxuXHRsZXQgdmVydGV4U2hhZGVyU291cmNlID0gbnVsbDtcclxuXHRsZXQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBudWxsO1xyXG5cdGxldCB2ZXJ0ZXhTaGFkZXIgPSBudWxsO1xyXG5cdGxldCBmcmFnbWVudFNoYWRlciA9IG51bGw7XHJcblx0bGV0IHByb2dyYW0gPSBudWxsO1xyXG5cdGxldCBwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gbnVsbDtcclxuXHRsZXQgcG9zaXRpb25CdWZmZXIgPSBudWxsO1xyXG5cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGluaXQoKTtcclxuXHRcdHJlbmRlcigpO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xyXG5cdFx0Ly8gR0xTTOuKlCBDIOyWuOyWtOulvCDquLDstIjroZwg7ZWcLCDsg4HsnIQg66CI67KoIOyFsOydtOuUqSDslrjslrTsnbTri6QuXHJcblx0XHQvLyBSYXN0ZXJpemF0aW9uKOugiOyKpO2EsO2ZlCktIOuwse2EsCDqt7jrnpjtlL0g7J2066+47KeA66W8IOu5hOuUlOyYpCDrlJTsiqTtlIzroIjsnbTrgpgg7ZSE66aw7YSwIOuTseydmCDrnpjsiqTthLAg65SU67CU7J207Iqk7JeQIOy2nOugpe2VmOq4sCDsnITtlbQg656Y7Iqk7YSwIOydtOuvuOyngOuhnCDrs4DtmZjtlZjripQg6rKDXHJcblxyXG5cdFx0Ly8gV2ViR0zsnYAgR1BV7JeQ7IScIOyLpO2WieuQqC4g65Sw65287IScIEdQVeyXkOyEnCDsi6TtlonrkJjripQg7L2U65Oc66W8IOygnOqzte2VtOyVvO2VqeuLiOuLpC5cclxuXHRcdC8vIO2VtOuLuSDsvZTrk5zripQg7ZWo7IiYIOyMjSDtmJXtg5zroZwg7KCc6rO17ZW07JW87ZWY64qU642wXHJcblx0XHQvLyDsnbQg65GQIO2VqOyImOuKlCB2ZXJ0ZXggc2hhZGVy7JmAIGZyYWdtZW50IHNoYWRlcuuhnCDrtojrpqzqs6AgQy9DKyvsspjrn7wg7JeE6rKp7ZWcIFR5cGXsnYQg6rCA7KeA64qUIEdMU0zroZwg7J6R7ISx65CY7Ja0IOyeiOyKteuLiOuLpC5cclxuXHRcdC8vIOydtCDrkZAg6rCc66W8IO2VqeyzkOyEnCBwcm9ncmFt7J2065286rOgIOu2gOumheuLiOuLpC5cclxuXHJcblx0XHQvLyBHZXQgQSBXZWJHTCBjb250ZXh0XHJcblx0XHRjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NcIik7XHJcblx0XHRnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcblx0XHRpZiAoIWdsKSByZXR1cm47XHJcblxyXG5cdFx0Ly8gR2V0IHRoZSBzdHJpbmdzIGZvciBvdXIgR0xTTCBzaGFkZXJzXHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHR2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZlcnRleC1zaGFkZXItMmRcIikudGV4dDtcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcmFnbWVudC1zaGFkZXItMmRcIikudGV4dDtcclxuXHJcblxyXG5cdFx0Ly8gY3JlYXRlIEdMU0wgc2hhZGVycywgdXBsb2FkIHRoZSBHTFNMIHNvdXJjZSwgY29tcGlsZSB0aGUgc2hhZGVyc1xyXG5cdFx0Ly8gdmVydGV4U2hhZGVyIC0g7KKM7ZGc66W8IOygnOqztSwg7KCV7KCQIOychOy5mOulvCDqs4TsgrBcclxuXHRcdC8vIGZyYWdtZW50U2hhZGVyIC0g7IOJ7IOB7J2EIOygnOqztSwg7ZiE7J6sIOq3uOugpOyngOuKlCBwcmltaXRpdmXsnZgg6rCBIO2UveyFgOyXkCDrjIDtlZwg7IOJ7IOB7J2EIOqzhOyCsFxyXG5cdFx0Ly8g65GQIOqwnOulvCDtlanss5DshJwgcHJvZ3JhbVxyXG5cdFx0dmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xyXG5cdFx0ZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG5cdFx0cHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuXHJcblxyXG5cdFx0Ly8g66i87KCAIO2VtOyVvCDtlaAg7J287J2AIOuwqeq4iCDsg53shLHrkJwgcHJvZ3JhbeyXkCDrjIDtlZwgYXR0cmlidXRl7J2YIGxvY2F0aW9u66W8IOywvuuKlCDqsoNcclxuXHRcdC8vIEF0dHJpYnV0ZSBsb2NhdGlvbijqt7jrpqzqs6AgdW5pZm9ybSBsb2NhdGlvbinsnYQg7LC+64qUIOqyg+ydgCDroIzrjZTrp4HtlaAg65WM6rCAIOyVhOuLiOudvCDstIjquLDtmZTtlZjripQg64+Z7JWIIO2VtOyVvCDtlanri4jri6QuXHJcblx0XHQvLyBBdHRyaWJ1dGXripQg67KE7Y2866Gc67aA7YSwIOuNsOydtO2EsOulvCDqsIDsoLjsmKTrr4DroZwg67KE7Y2866W8IOyDneyEse2VtOyVvCDtlanri4jri6QuXHJcblx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG5cdFx0cG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcblx0XHQvLyBiaW5kIHBvaW5064qUIFdlYkdMIOyViOyXkCDsnojripQg64K067aAIOyghOyXrSDrs4DsiJhcclxuXHRcdC8vIOuovOyggCBiaW5kIHBvaW507JeQIOyekOybkOydhCDtlaDri7ntlansi5zri6QuIOq3uOufrOuptCDrqqjrk6Ag7ZWo7IiY6rCAIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IOyekOybkOydhCDssLjsobDtlanri4jri6QuXHJcblx0XHQvLyBCaW5kIGl0IHRvIEFSUkFZX0JVRkZFUiAodGhpbmsgb2YgaXQgYXMgQVJSQVlfQlVGRkVSID0gcG9zaXRpb25CdWZmZXIpXHJcblx0XHQvLyDsnbTsoJwgYmluZCBwb2ludOulvCDthrXtlbQg7ZW064u5IOuyhO2NvOulvCDssLjsobDtlbTshJwg642w7J207YSw66W8IOuEo+ydhCDsiJgg7J6I7Iq164uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblxyXG5cdFx0Ly8gMkQgcG9pbnQgM+qwnFxyXG5cdFx0Ly8g7LqU67KE7IqkIO2BrOq4sOqwgCA0MDB4MzAw7J20652866m0IOydtOufsCDsi53snLzroZwgY2xpcCBzcGFjZeulvCBzY3JlZW4gc3BhY2XroZwg67OA7ZmY7ZWp64uI64ukLlxyXG5cdFx0XHJcblx0XHR2YXIgcG9zaXRpb25zID0gW1xyXG5cdFx0XHQwLCAwLFxyXG5cdFx0XHQwLCAwLjUsXHJcblx0XHRcdDAuNywgMCxcclxuXHRcdF07XHJcblxyXG5cclxuXHRcdC8vIFdlYkdM7J2AIOqwleugpe2VnCB0eXBl7J2EIOqwgOyngOuKlCDrjbDsnbTthLDqsIAg7ZWE7JqU7ZWY66+A66GcLCBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucynripQg7IOI66Gc7Jq0IDMyYml0IOu2gOuPmSDshozsiJjsoJAg67Cw7Je07J2EIOyDneyEsVxyXG5cdFx0Ly8gZ2wuYnVmZmVyRGF0YeuKlCDrjbDsnbTthLDrpbwgR1BV7J2YIHBvc2l0aW9uQnVmZmVy66GcIOuzteyCrO2VqeuLiOuLpC5cclxuXHRcdC8vIOychOyXkOyEnCBBUlJBWV9CVUZGRVIgYmluZCBwb2ludOuhnCDtlaDri7ntlojquLAg65WM66y47JeQIHBvc2l0aW9uIGJ1ZmZlcuulvCDsgqzsmqntnojqs6Ag7J6I7Iq164uI64ukLlxyXG5cdFx0Ly8gZ2wuU1RBVElDX0RSQVfripQg642w7J207YSw66W8IOyWtOuWu+qyjCDsgqzsmqntlaAg6rKD7J247KeAIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdC8vIFdlYkdM7J2AIO2KueyglSDtla3rqqnrk6TsnYQg7LWc7KCB7ZmU7ZWY6riwIOychO2VtCDtlbTri7kgaGludOulvCDsgqzsmqntlaAg7IiYIOyeiOuKlOuNsOyalC5cclxuXHRcdC8vIGdsLlNUQVRJQ19EUkFX64qUIOydtCDrjbDsnbTthLDqsIAg66eO7J20IOuwlOuAjOyngCDslYrsnYQg6rKDIOqwmeuLpOqzoCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHRnbC5idWZmZXJEYXRhKFxyXG5cdFx0XHRnbC5BUlJBWV9CVUZGRVIsXHJcblx0XHRcdG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSxcclxuXHRcdFx0Z2wuU1RBVElDX0RSQVdcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuXHRcdC8vIOyCrOyaqSDqsIDriqXtlZwg6rO16rCE7J2EIOyxhOyasOq4sCDsnITtlbQgQ1NT66GcIO2BrOq4sOulvCDqsrDsoJXtlZwg64uk7J2MIOydvOy5mO2VmOuPhOuhnSDsobDsoJVcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHdlYmdsVXRpbHMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpO1xyXG5cclxuXHRcdC8vIGdsX1Bvc2l0aW9u7Jy866GcIOyEpOygle2VoCBjbGlwIHNwYWNlIOqwkuydhCDslrTrlrvqsowgc2NyZWVuIHNwYWNl66GcIOuzgO2ZmO2VmOuKlOyngCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642w7JqULlxyXG5cdFx0Ly8g7J2066W8IOychO2VtCBnbC52aWV3cG9ydOulvCDtmLjstpztlbTshJwg7ZiE7J6sIOy6lOuyhOyKpCDtgazquLDrpbwg7KCE64us7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdC8vIOydtOuKlCAtMSA8LT4gKzEgY2xpcCBzcGFjZeulvCwgeOuKlCAwIDwtPiBnbC5jYW52YXMud2lkdGjroZwsIHnripQgMCA8LT4gZ2wuY2FudmFzLmhlaWdodOuhnCDrp6TtlZHsi5zsvJzspI3ri4jri6QuXHJcblx0XHRnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHJcblx0XHQvLyBDbGVhciB0aGUgY2FudmFzXHJcblx0XHRnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG5cdFx0Ly8g7Iuk7ZaJ7ZWgIHNoYWRlciBwcm9ncmFt7J2EIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG5cdFx0Ly8g7JyE7JeQ7IScIOyEpOygle2VnCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOqwgOyguOyZgCBzaGFkZXLsnZggYXR0cmlidXRl7JeQIOygnOqzte2VmOuKlCDrsKnrspXsnYQgV2ViR0zsl5Ag7JWM66Ck7KSY7JW8IO2VmOuKlOuNsCxcclxuXHRcdC8vIOyasOyEoCBhdHRyaWJ1dGXrpbwg7Zmc7ISx7ZmU7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuXHRcdC8vIOuNsOydtO2EsOulvCDslrTrlrvqsowg6rq864K87KeAIOyngOygle2VqeuLiOuLpC5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cdFx0Ly8gcG9zaXRpb25CdWZmZXIoQVJSQVlfQlVGRkVSKeydmCDrjbDsnbTthLDrpbwg6rq864K07Jik64qUIOuwqeuyleydhCBhdHRyaWJ1dGXsl5Ag7KeA7IucXHJcblx0XHR2YXIgc2l6ZSA9IDI7ICAgICAgICAgIC8vIOuwmOuzteuniOuLpCAy6rCc7J2YIOy7tO2PrOuEjO2KuFxyXG5cdFx0dmFyIHR5cGUgPSBnbC5GTE9BVDsgICAvLyDrjbDsnbTthLDripQgMzJiaXQgZmxvYXRcclxuXHRcdHZhciBub3JtYWxpemUgPSBmYWxzZTsgLy8g642w7J207YSwIOygleq3nO2ZlCDslYgg7ZWoXHJcblx0XHR2YXIgc3RyaWRlID0gMDsgICAgICAgIC8vIDAgPSDri6TsnYwg7JyE7LmY66W8IOqwgOyguOyYpOq4sCDsnITtlbQg67CY67O166eI64ukIHNpemUgKiBzaXplb2YodHlwZSkg66eM7YG8IOyVnuycvOuhnCDsnbTrj5lcclxuXHRcdHZhciBvZmZzZXQgPSAwOyAgICAgICAgLy8g67KE7Y287J2YIOyymOydjOu2gO2EsCDsi5zsnpFcclxuXHJcblx0XHQvLyBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVy7J2YIOyIqOqyqOynhCDrtoDrtoTsnYAg7ZiE7J6sIOuwlOyduOuUqeuQnCBBUlJBWV9CVUZGRVLrpbwgYXR0cmlidXRl7JeQIO2VoOuLue2VnOuLpOuKlCDqsoHri4jri6QuXHJcblx0XHQvLyDsnbQgYXR0cmlidXRl64qUIOydtOygnCBwb3NpdGlvbkJ1ZmZlcuyXkCDrsJTsnbjrlKnrkKnri4jri6QuXHJcblx0XHQvLyDsnbTqsbQgQVJSQVlfQlVGRkVSIGJpbmQgcG9pbnTsl5Ag64uk66W4IOqyg+uTpOydhCDsnpDsnKDroa3qsowg7ZWg64u57ZWgIOyImCDsnojri6TripQg6rG4IOydmOuvuFxyXG5cdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuXHRcdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XHJcblxyXG5cdFx0Ly8gZHJhd1xyXG5cdFx0LypcclxuXHRcdCogY291bnTqsIAgM+ydtOq4sCDrlYzrrLjsl5AgdmVydGV4IHNoYWRlcuulvCDshLgg67KIIOyLpO2Wie2VoCDqsoHri4jri6QuXHJcblx0XHQqIOuovOyggCB2ZXJ0ZXggc2hhZGVyIGF0dHJpYnV0ZeydmFxyXG5cdFx0KiBhX3Bvc2l0aW9uLnjsmYAgYV9wb3NpdGlvbi556rCAIHBvc2l0aW9uQnVmZmVy7J2YIOyymOydjCAy6rCc7J2YIOqwkuycvOuhnCDshKTsoJXrkKnri4jri6QuXHJcblx0XHQqIOuRkCDrsojsp7jroZwgYV9wb3NpdGlvbi547JmAIGFfcG9zaXRpb24ueeqwgCDqt7jri6TsnYwgMuqwnOydmCDqsJLsnLzroZwg7ISk7KCV65Cp64uI64ukLlxyXG5cdFx0KiDrp4jsp4Drp4nsl5DripQg64Ko7JWE7J6I64qUIDLqsJzsnZgg6rCS7Jy866GcIOyEpOygleuQqeuLiOuLpC5cclxuXHRcdCogcHJpbWl0aXZlVHlwZeydhCBnbC5UUklBTkdMRVProZwg7ISk7KCV7ZaI6riwIOuVjOusuOyXkCxcclxuXHRcdCogdmVydGV4IHNoYWRlcuqwgCAz67KIIOyLpO2WieuQoCDrlYzrp4jri6QsXHJcblx0XHQqIFdlYkdM7J2AIGdsX1Bvc2l0aW9u7JeQIOyEpOygle2VnCAz6rCc7J2YIOqwkuydhCDquLDrsJjsnLzroZwg7IK86rCB7ZiV7J2EIOq3uOumrOuKlOuNsOyalC5cclxuXHRcdCog7LqU67KE7IqkIO2BrOq4sOyXkCDsg4HqtIDsl4bsnbQg7J20IOqwkuuTpOydgCAtMeyXkOyEnCAx7IKs7J207J2YIGNsaXAgc3BhY2Ug7KKM7ZGcIOyViOyXkCDsnojsirXri4jri6QuXHJcblx0XHQqICovXHJcblx0XHR2YXIgcHJpbWl0aXZlVHlwZSA9IGdsLlRSSUFOR0xFUztcclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cdFx0dmFyIGNvdW50ID0gMztcclxuXHRcdGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgb2Zmc2V0LCBjb3VudCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDxzY3JpcHQgaWQ9XCJ2ZXJ0ZXgtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcclxuXHRcdFx0XHRcdC8vIEF0dHJpYnV0ZeuKlCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOuwm+ydjFxyXG4gIFx0XHRcdFx0XHQvLyDrqqjrk6Agc2hhZGVy64qUIG1haW4g7ZWo7IiY66W8IOqwgOynkFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1x0XHRcdFx0XHJcblx0XHRcdFx0XHR2b2lkIG1haW4oKSB7XHJcblx0XHRcdFx0XHRcdC8vIGdsX1Bvc2l0aW9u7J2AIHZlcnRleCBzaGFkZXLqsIAg7ISk7KCV7J2EIOuLtOuLue2VmOuKlCDtirnsiJgg67OA7IiYXHJcblx0XHRcdFx0XHRcdGdsX1Bvc2l0aW9uID0gYV9wb3NpdGlvbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfX0vPlxyXG5cdFx0XHRcdDxzY3JpcHQgIGlkPVwiZnJhZ21lbnQtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcclxuXHRcdFx0XHRcdC8vIGZyYWdtZW50IHNoYWRlcuuKlCDquLDrs7gg7KCV67CA64+E66W8IOqwgOyngOqzoCDsnojsp4Ag7JWK7Jy866+A66GcIO2VmOuCmOulvCDshKDtg53tlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0Ly8gbWVkaXVtcOydgCDsoovsnYAg6riw67O46rCS7Jy866GcIFwi7KSR6rCEIOygleuwgOuPhFwi66W8IOydmOuvuO2VqeuLiOuLpC5cclxuXHRcdFx0XHRcdHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2b2lkIG1haW4oKSB7XHJcblx0XHRcdFx0XHRcdC8vIGdsX0ZyYWdDb2xvcuuKlCBmcmFnbWVudCBzaGFkZXLqsIAg7ISk7KCV7J2EIOuLtOuLue2VmOuKlCDtirnsiJgg67OA7IiYXHJcblx0XHRcdFx0XHRcdC8vIFdlYkdM7JeQ7IScIOyDieyDgeydgCAw7JeQ7IScIDHquYzsp4DsnoXri4jri6QuXHJcblx0XHRcdFx0XHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoMCwgMSwgMCwgMSk7IFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9fS8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0ey8qQ2xpcCBzcGFjZSDsooztkZzripQg7LqU67KE7IqkIO2BrOq4sOyXkCDsg4HqtIDsl4bsnbQg7ZWt7IOBIC0x7JeQ7IScICsx6rmM7KeA7J6F64uI64ukLiovfVxyXG5cdFx0XHQ8Y2FudmFzIGlkPXsnYyd9Lz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNlMDE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=