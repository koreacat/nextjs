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

    /*
    * clip space       screen space
    * 0, 0       ->   200, 150
    * 0, 0.5     ->   200, 225
    * 0.7, 0       ->   340, 150
    * */

    var positions = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30]; // WebGL은 강력한 type을 가지는 데이터가 필요하므로, new Float32Array(positions)는 새로운 32bit 부동 소수점 배열을 생성
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

    gl.useProgram(program);
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height); // 위에서 설정한 버퍼에서 데이터를 가져와 shader의 attribute에 제공하는 방법을 WebGL에 알려줘야 하는데,
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
    /*
    * 그리려는 모든 픽셀에 대해 WebGL은 fragment shader를 호출하는데요.
    * Fragment shader는 gl_FragColor를 1, 0, 0.5, 1로 설정
    * */
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
          __html: "\n\t\t\t\t\t// Attribute\uB294 \uBC84\uD37C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC74C\n  \t\t\t\t\t// \uBAA8\uB4E0 shader\uB294 main \uD568\uC218\uB97C \uAC00\uC9D0\n  \t\t\t\t\tattribute vec2 a_position;\n  \t\t\t\t\tuniform vec2 u_resolution;\n  \t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// \uC704\uCE58\uB97C \uD53D\uC140\uC5D0\uC11C 0.0\uACFC 1.0\uC0AC\uC774\uB85C \uBCC0\uD658\n    \t\t\t\t\tvec2 zeroToOne = a_position / u_resolution;\n \n\t\t\t\t\t\t// 0->1\uC5D0\uC11C 0->2\uB85C \uBCC0\uD658\n\t\t\t\t\t\tvec2 zeroToTwo = zeroToOne * 2.0;\n\t\t\t\t\t \n\t\t\t\t\t\t// 0->2\uC5D0\uC11C -1->+1\uB85C \uBCC0\uD658 (clip space)\n\t\t\t\t\t\tvec2 clipSpace = zeroToTwo - 1.0;\n\t\t\t\t\t \n\t\t\t\t\t\tgl_Position = vec4(clipSpace, 0, 1);\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = vec4(0, 1, 0, 1); \n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsInBvc2l0aW9ucyIsImJ1ZmZlckRhdGEiLCJGbG9hdDMyQXJyYXkiLCJTVEFUSUNfRFJBVyIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJ3aWR0aCIsImhlaWdodCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJ1c2VQcm9ncmFtIiwicmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiIsImdldFVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm0yZiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5Iiwic2l6ZSIsInR5cGUiLCJGTE9BVCIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJwcmltaXRpdmVUeXBlIiwiVFJJQU5HTEVTIiwiY291bnQiLCJkcmF3QXJyYXlzIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsUUFBSUUsYUFBYSxHQUFHL0MsRUFBRSxDQUFDZ0QsU0FBdkI7QUFDQSxRQUFJSCxNQUFNLEdBQUcsQ0FBYjtBQUNBLFFBQUlJLEtBQUssR0FBRyxDQUFaO0FBQ0FqRCxNQUFFLENBQUNrRCxVQUFILENBQWNILGFBQWQsRUFBNkJGLE1BQTdCLEVBQXFDSSxLQUFyQztBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0UsR0E5REQ7O0FBMUZ3QixLQTBGbEJ2QyxNQTFGa0I7QUFBQSxZQTBHdkJWLEVBQUUsQ0FBQ21DLFVBMUdvQjtBQUFBOztBQTBKeEIsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQVEsVUFBRSxFQUFDLGtCQUFYO0FBQThCLFlBQUksRUFBQyxPQUFuQztBQUEyQywrQkFBdUIsRUFBRTtBQUNuRWdCLGdCQUFNO0FBRDZEO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQXNCQztBQUFRLFVBQUUsRUFBQyxvQkFBWDtBQUFnQyxZQUFJLEVBQUMsT0FBckM7QUFBNkMsK0JBQXVCLEVBQUU7QUFDckVBLGdCQUFNO0FBRCtEO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFzQ0M7QUFBUSxRQUFFLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMENBLENBcE1EOztJQUFNckQsVTs7S0FBQUEsVTtBQXNNU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2ViR0wuYTUzMjBkZWQxODRiNDRhNTJjMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9ncmFtLCBjcmVhdGVTaGFkZXJ9IGZyb20gXCIuLi9jb21tb24vdXRpbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBQcmFjdGljZTAxID0gKCkgPT4ge1xyXG5cdGxldCBjYW52YXMgPSBudWxsO1xyXG5cdGxldCBnbCA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbnVsbDtcclxuXHRsZXQgdmVydGV4U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xyXG5cdGxldCBwcm9ncmFtID0gbnVsbDtcclxuXHRsZXQgcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQnVmZmVyID0gbnVsbDtcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0KCk7XHJcblx0XHRyZW5kZXIoKTtcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdC8vIEdMU0zripQgQyDslrjslrTrpbwg6riw7LSI66GcIO2VnCwg7IOB7JyEIOugiOuyqCDshbDsnbTrlKkg7Ja47Ja07J2064ukLlxyXG5cdFx0Ly8gUmFzdGVyaXphdGlvbijroIjsiqTthLDtmZQpLSDrsLHthLAg6re4656Y7ZS9IOydtOuvuOyngOulvCDruYTrlJTsmKQg65SU7Iqk7ZSM66CI7J2064KYIO2UhOumsO2EsCDrk7HsnZgg656Y7Iqk7YSwIOuUlOuwlOydtOyKpOyXkCDstpzroKXtlZjquLAg7JyE7ZW0IOuemOyKpO2EsCDsnbTrr7jsp4DroZwg67OA7ZmY7ZWY64qUIOqyg1xyXG5cclxuXHRcdC8vIFdlYkdM7J2AIEdQVeyXkOyEnCDsi6TtlonrkKguIOuUsOudvOyEnCBHUFXsl5DshJwg7Iuk7ZaJ65CY64qUIOy9lOuTnOulvCDsoJzqs7XtlbTslbztlanri4jri6QuXHJcblx0XHQvLyDtlbTri7kg7L2U65Oc64qUIO2VqOyImCDsjI0g7ZiV7YOc66GcIOygnOqzte2VtOyVvO2VmOuKlOuNsFxyXG5cdFx0Ly8g7J20IOuRkCDtlajsiJjripQgdmVydGV4IHNoYWRlcuyZgCBmcmFnbWVudCBzaGFkZXLroZwg67aI66as6rOgIEMvQysr7LKY65+8IOyXhOqyqe2VnCBUeXBl7J2EIOqwgOyngOuKlCBHTFNM66GcIOyekeyEseuQmOyWtCDsnojsirXri4jri6QuXHJcblx0XHQvLyDsnbQg65GQIOqwnOulvCDtlanss5DshJwgcHJvZ3JhbeydtOudvOqzoCDrtoDrpoXri4jri6QuXHJcblxyXG5cdFx0Ly8gR2V0IEEgV2ViR0wgY29udGV4dFxyXG5cdFx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xyXG5cdFx0Z2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cdFx0aWYgKCFnbCkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIEdldCB0aGUgc3RyaW5ncyBmb3Igb3VyIEdMU0wgc2hhZGVyc1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0dmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2ZXJ0ZXgtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJhZ21lbnQtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblxyXG5cclxuXHRcdC8vIGNyZWF0ZSBHTFNMIHNoYWRlcnMsIHVwbG9hZCB0aGUgR0xTTCBzb3VyY2UsIGNvbXBpbGUgdGhlIHNoYWRlcnNcclxuXHRcdC8vIHZlcnRleFNoYWRlciAtIOyijO2RnOulvCDsoJzqs7UsIOygleygkCDsnITsuZjrpbwg6rOE7IKwXHJcblx0XHQvLyBmcmFnbWVudFNoYWRlciAtIOyDieyDgeydhCDsoJzqs7UsIO2YhOyerCDqt7jroKTsp4DripQgcHJpbWl0aXZl7J2YIOqwgSDtlL3shYDsl5Ag64yA7ZWcIOyDieyDgeydhCDqs4TsgrBcclxuXHRcdC8vIOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW1cclxuXHRcdHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcclxuXHRcdGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcclxuXHRcdHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcblxyXG5cdFx0Ly8g66i87KCAIO2VtOyVvCDtlaAg7J287J2AIOuwqeq4iCDsg53shLHrkJwgcHJvZ3JhbeyXkCDrjIDtlZwgYXR0cmlidXRl7J2YIGxvY2F0aW9u66W8IOywvuuKlCDqsoNcclxuXHRcdC8vIEF0dHJpYnV0ZSBsb2NhdGlvbijqt7jrpqzqs6AgdW5pZm9ybSBsb2NhdGlvbinsnYQg7LC+64qUIOqyg+ydgCDroIzrjZTrp4HtlaAg65WM6rCAIOyVhOuLiOudvCDstIjquLDtmZTtlZjripQg64+Z7JWIIO2VtOyVvCDtlanri4jri6QuXHJcblx0XHQvLyBBdHRyaWJ1dGXripQg67KE7Y2866Gc67aA7YSwIOuNsOydtO2EsOulvCDqsIDsoLjsmKTrr4DroZwg67KE7Y2866W8IOyDneyEse2VtOyVvCDtlanri4jri6QuXHJcblx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG5cdFx0cG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcblx0XHQvLyBiaW5kIHBvaW5064qUIFdlYkdMIOyViOyXkCDsnojripQg64K067aAIOyghOyXrSDrs4DsiJhcclxuXHRcdC8vIOuovOyggCBiaW5kIHBvaW507JeQIOyekOybkOydhCDtlaDri7ntlansi5zri6QuIOq3uOufrOuptCDrqqjrk6Ag7ZWo7IiY6rCAIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IOyekOybkOydhCDssLjsobDtlanri4jri6QuXHJcblx0XHQvLyBCaW5kIGl0IHRvIEFSUkFZX0JVRkZFUiAodGhpbmsgb2YgaXQgYXMgQVJSQVlfQlVGRkVSID0gcG9zaXRpb25CdWZmZXIpXHJcblx0XHQvLyDsnbTsoJwgYmluZCBwb2ludOulvCDthrXtlbQg7ZW064u5IOuyhO2NvOulvCDssLjsobDtlbTshJwg642w7J207YSw66W8IOuEo+ydhCDsiJgg7J6I7Iq164uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblxyXG5cdFx0Ly8gMkQgcG9pbnQgM+qwnFxyXG5cdFx0Ly8g7LqU67KE7IqkIO2BrOq4sOqwgCA0MDB4MzAw7J20652866m0IOydtOufsCDsi53snLzroZwgY2xpcCBzcGFjZeulvCBzY3JlZW4gc3BhY2XroZwg67OA7ZmY7ZWp64uI64ukLlxyXG5cdFx0LypcclxuXHRcdCogY2xpcCBzcGFjZSAgICAgICBzY3JlZW4gc3BhY2VcclxuXHRcdCogMCwgMCAgICAgICAtPiAgIDIwMCwgMTUwXHJcblx0XHQqIDAsIDAuNSAgICAgLT4gICAyMDAsIDIyNVxyXG5cdFx0KiAwLjcsIDAgICAgICAgLT4gICAzNDAsIDE1MFxyXG5cdFx0KiAqL1xyXG5cclxuXHRcdHZhciBwb3NpdGlvbnMgPSBbXHJcblx0XHRcdDEwLCAyMCxcclxuXHRcdFx0ODAsIDIwLFxyXG5cdFx0XHQxMCwgMzAsXHJcblx0XHRcdDEwLCAzMCxcclxuXHRcdFx0ODAsIDIwLFxyXG5cdFx0XHQ4MCwgMzAsXHJcblx0XHRdO1xyXG5cclxuXHJcblx0XHQvLyBXZWJHTOydgCDqsJXroKXtlZwgdHlwZeydhCDqsIDsp4DripQg642w7J207YSw6rCAIO2VhOyalO2VmOuvgOuhnCwgbmV3IEZsb2F0MzJBcnJheShwb3NpdGlvbnMp64qUIOyDiOuhnOyatCAzMmJpdCDrtoDrj5kg7IaM7IiY7KCQIOuwsOyXtOydhCDsg53shLFcclxuXHRcdC8vIGdsLmJ1ZmZlckRhdGHripQg642w7J207YSw66W8IEdQVeydmCBwb3NpdGlvbkJ1ZmZlcuuhnCDrs7Xsgqztlanri4jri6QuXHJcblx0XHQvLyDsnITsl5DshJwgQVJSQVlfQlVGRkVSIGJpbmQgcG9pbnTroZwg7ZWg64u57ZaI6riwIOuVjOusuOyXkCBwb3NpdGlvbiBidWZmZXLrpbwg7IKs7Jqp7Z6I6rOgIOyeiOyKteuLiOuLpC5cclxuXHRcdC8vIGdsLlNUQVRJQ19EUkFX64qUIOuNsOydtO2EsOulvCDslrTrlrvqsowg7IKs7Jqp7ZWgIOqyg+yduOyngCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHQvLyBXZWJHTOydgCDtirnsoJUg7ZWt66qp65Ok7J2EIOy1nOygge2ZlO2VmOq4sCDsnITtlbQg7ZW064u5IGhpbnTrpbwg7IKs7Jqp7ZWgIOyImCDsnojripTrjbDsmpQuXHJcblx0XHQvLyBnbC5TVEFUSUNfRFJBV+uKlCDsnbQg642w7J207YSw6rCAIOunjuydtCDrsJTrgIzsp4Ag7JWK7J2EIOqygyDqsJnri6Tqs6AgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb25zKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0Y29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG5cdFx0Ly8g7IKs7JqpIOqwgOuKpe2VnCDqs7XqsITsnYQg7LGE7Jqw6riwIOychO2VtCBDU1ProZwg7YGs6riw66W8IOqysOygle2VnCDri6TsnYwg7J287LmY7ZWY64+E66GdIOyhsOyglVxyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0d2ViZ2xVdGlscy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcyk7XHJcblxyXG5cdFx0Ly8gZ2xfUG9zaXRpb27snLzroZwg7ISk7KCV7ZWgIGNsaXAgc3BhY2Ug6rCS7J2EIOyWtOuWu+qyjCBzY3JlZW4gc3BhY2XroZwg67OA7ZmY7ZWY64qU7KeAIFdlYkdM7JeQIOyVjOugpOykmOyVvCDtlZjripTrjbDsmpQuXHJcblx0XHQvLyDsnbTrpbwg7JyE7ZW0IGdsLnZpZXdwb3J066W8IO2YuOy2nO2VtOyEnCDtmITsnqwg7LqU67KE7IqkIO2BrOq4sOulvCDsoITri6ztlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Ly8g7J2064qUIC0xIDwtPiArMSBjbGlwIHNwYWNl66W8LCB464qUIDAgPC0+IGdsLmNhbnZhcy53aWR0aOuhnCwgeeuKlCAwIDwtPiBnbC5jYW52YXMuaGVpZ2h066GcIOunpO2VkeyLnOy8nOykjeuLiOuLpC5cclxuXHRcdGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG5cclxuXHRcdC8vIENsZWFyIHRoZSBjYW52YXNcclxuXHRcdGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XHJcblx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcblx0XHQvLyDsi6TtlontlaAgc2hhZGVyIHByb2dyYW3snYQgV2ViR0zsl5Ag7JWM66Ck7KSN64uI64ukLlxyXG5cdFx0Z2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHRcdHZhciByZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV9yZXNvbHV0aW9uXCIpO1xyXG5cclxuXHRcdGdsLnVuaWZvcm0yZihyZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHRcdC8vIOychOyXkOyEnCDshKTsoJXtlZwg67KE7Y287JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmYAgc2hhZGVy7J2YIGF0dHJpYnV0ZeyXkCDsoJzqs7XtlZjripQg67Cp67KV7J2EIFdlYkdM7JeQIOyVjOugpOykmOyVvCDtlZjripTrjbAsXHJcblx0XHQvLyDsmrDshKAgYXR0cmlidXRl66W8IO2ZnOyEse2ZlO2VtOyVvCDtlanri4jri6QuXHJcblx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKTtcclxuXHJcblx0XHQvLyDrjbDsnbTthLDrpbwg7Ja065a76rKMIOq6vOuCvOyngCDsp4DsoJXtlanri4jri6QuXHJcblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xyXG5cclxuXHRcdC8vIHBvc2l0aW9uQnVmZmVyKEFSUkFZX0JVRkZFUinsnZgg642w7J207YSw66W8IOq6vOuCtOyYpOuKlCDrsKnrspXsnYQgYXR0cmlidXRl7JeQIOyngOyLnFxyXG5cdFx0dmFyIHNpemUgPSAyOyAgICAgICAgICAvLyDrsJjrs7Xrp4jri6QgMuqwnOydmCDsu7Ttj6zrhIztirhcclxuXHRcdHZhciB0eXBlID0gZ2wuRkxPQVQ7ICAgLy8g642w7J207YSw64qUIDMyYml0IGZsb2F0XHJcblx0XHR2YXIgbm9ybWFsaXplID0gZmFsc2U7IC8vIOuNsOydtO2EsCDsoJXqt5ztmZQg7JWIIO2VqFxyXG5cdFx0dmFyIHN0cmlkZSA9IDA7ICAgICAgICAvLyAwID0g64uk7J2MIOychOy5mOulvCDqsIDsoLjsmKTquLAg7JyE7ZW0IOuwmOuzteuniOuLpCBzaXplICogc2l6ZW9mKHR5cGUpIOunjO2BvCDslZ7snLzroZwg7J2064+ZXHJcblx0XHR2YXIgb2Zmc2V0ID0gMDsgICAgICAgIC8vIOuyhO2NvOydmCDsspjsnYzrtoDthLAg7Iuc7J6RXHJcblxyXG5cdFx0Ly8gZ2wudmVydGV4QXR0cmliUG9pbnRlcuydmCDsiKjqsqjsp4Qg67aA67aE7J2AIO2YhOyerCDrsJTsnbjrlKnrkJwgQVJSQVlfQlVGRkVS66W8IGF0dHJpYnV0ZeyXkCDtlaDri7ntlZzri6TripQg6rKB64uI64ukLlxyXG5cdFx0Ly8g7J20IGF0dHJpYnV0ZeuKlCDsnbTsoJwgcG9zaXRpb25CdWZmZXLsl5Ag67CU7J2465Sp65Cp64uI64ukLlxyXG5cdFx0Ly8g7J206rG0IEFSUkFZX0JVRkZFUiBiaW5kIHBvaW507JeQIOuLpOuluCDqsoPrk6TsnYQg7J6Q7Jyg66Gt6rKMIO2VoOuLue2VoCDsiJgg7J6I64uk64qUIOqxuCDsnZjrr7hcclxuXHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcblx0XHRcdHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHNpemUsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xyXG5cclxuXHRcdC8vIGRyYXdcclxuXHRcdC8qXHJcblx0XHQqIGNvdW506rCAIDPsnbTquLAg65WM66y47JeQIHZlcnRleCBzaGFkZXLrpbwg7IS4IOuyiCDsi6TtlontlaAg6rKB64uI64ukLlxyXG5cdFx0KiDrqLzsoIAgdmVydGV4IHNoYWRlciBhdHRyaWJ1dGXsnZhcclxuXHRcdCogYV9wb3NpdGlvbi547JmAIGFfcG9zaXRpb24ueeqwgCBwb3NpdGlvbkJ1ZmZlcuydmCDsspjsnYwgMuqwnOydmCDqsJLsnLzroZwg7ISk7KCV65Cp64uI64ukLlxyXG5cdFx0KiDrkZAg67KI7Ke466GcIGFfcG9zaXRpb24ueOyZgCBhX3Bvc2l0aW9uLnnqsIAg6re464uk7J2MIDLqsJzsnZgg6rCS7Jy866GcIOyEpOygleuQqeuLiOuLpC5cclxuXHRcdCog66eI7KeA66eJ7JeQ64qUIOuCqOyVhOyeiOuKlCAy6rCc7J2YIOqwkuycvOuhnCDshKTsoJXrkKnri4jri6QuXHJcblx0XHQqIHByaW1pdGl2ZVR5cGXsnYQgZ2wuVFJJQU5HTEVT66GcIOyEpOygle2WiOq4sCDrlYzrrLjsl5AsXHJcblx0XHQqIHZlcnRleCBzaGFkZXLqsIAgM+uyiCDsi6TtlonrkKAg65WM66eI64ukLFxyXG5cdFx0KiBXZWJHTOydgCBnbF9Qb3NpdGlvbuyXkCDshKTsoJXtlZwgM+qwnOydmCDqsJLsnYQg6riw67CY7Jy866GcIOyCvOqwge2YleydhCDqt7jrpqzripTrjbDsmpQuXHJcblx0XHQqIOy6lOuyhOyKpCDtgazquLDsl5Ag7IOB6rSA7JeG7J20IOydtCDqsJLrk6TsnYAgLTHsl5DshJwgMeyCrOydtOydmCBjbGlwIHNwYWNlIOyijO2RnCDslYjsl5Ag7J6I7Iq164uI64ukLlxyXG5cdFx0KiAqL1xyXG5cdFx0dmFyIHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVM7XHJcblx0XHR2YXIgb2Zmc2V0ID0gMDtcclxuXHRcdHZhciBjb3VudCA9IDM7XHJcblx0XHRnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIG9mZnNldCwgY291bnQpO1xyXG5cclxuXHRcdC8qXHJcblx0XHQqIOq3uOumrOugpOuKlCDrqqjrk6Ag7ZS97IWA7JeQIOuMgO2VtCBXZWJHTOydgCBmcmFnbWVudCBzaGFkZXLrpbwg7Zi47Lac7ZWY64qU642w7JqULlxyXG5cdFx0KiBGcmFnbWVudCBzaGFkZXLripQgZ2xfRnJhZ0NvbG9y66W8IDEsIDAsIDAuNSwgMeuhnCDshKTsoJVcclxuXHRcdCogKi9cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHNjcmlwdCBpZD1cInZlcnRleC1zaGFkZXItMmRcIiB0eXBlPVwibm90anNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG5cdFx0XHRcdFx0X19odG1sOiBgXHJcblx0XHRcdFx0XHQvLyBBdHRyaWJ1dGXripQg67KE7Y287JeQ7IScIOuNsOydtO2EsOulvCDrsJvsnYxcclxuICBcdFx0XHRcdFx0Ly8g66qo65OgIHNoYWRlcuuKlCBtYWluIO2VqOyImOulvCDqsIDsp5BcclxuICBcdFx0XHRcdFx0YXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcclxuICBcdFx0XHRcdFx0dW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcclxuICBcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2b2lkIG1haW4oKSB7XHJcblx0XHRcdFx0XHRcdC8vIOychOy5mOulvCDtlL3shYDsl5DshJwgMC4w6rO8IDEuMOyCrOydtOuhnCDrs4DtmZhcclxuICAgIFx0XHRcdFx0XHR2ZWMyIHplcm9Ub09uZSA9IGFfcG9zaXRpb24gLyB1X3Jlc29sdXRpb247XHJcbiBcclxuXHRcdFx0XHRcdFx0Ly8gMC0+MeyXkOyEnCAwLT4y66GcIOuzgO2ZmFxyXG5cdFx0XHRcdFx0XHR2ZWMyIHplcm9Ub1R3byA9IHplcm9Ub09uZSAqIDIuMDtcclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0Ly8gMC0+MuyXkOyEnCAtMS0+KzHroZwg67OA7ZmYIChjbGlwIHNwYWNlKVxyXG5cdFx0XHRcdFx0XHR2ZWMyIGNsaXBTcGFjZSA9IHplcm9Ub1R3byAtIDEuMDtcclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0Z2xfUG9zaXRpb24gPSB2ZWM0KGNsaXBTcGFjZSwgMCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YFxyXG5cdFx0XHRcdH19Lz5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwiZnJhZ21lbnQtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdF9faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgc2hhZGVy64qUIOq4sOuzuCDsoJXrsIDrj4Trpbwg6rCA7KeA6rOgIOyeiOyngCDslYrsnLzrr4DroZwg7ZWY64KY66W8IOyEoO2Dne2VtOyVvCDtlanri4jri6QuXHJcblx0XHRcdFx0XHQvLyBtZWRpdW1w7J2AIOyii+ydgCDquLDrs7jqsJLsnLzroZwgXCLspJHqsIQg7KCV67CA64+EXCLrpbwg7J2Y66+47ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ2xfRnJhZ0NvbG9y64qUIGZyYWdtZW50IHNoYWRlcuqwgCDshKTsoJXsnYQg64u064u57ZWY64qUIO2KueyImCDrs4DsiJhcclxuXHRcdFx0XHRcdFx0Ly8gV2ViR0zsl5DshJwg7IOJ7IOB7J2AIDDsl5DshJwgMeq5jOyngOyeheuLiOuLpC5cclxuXHRcdFx0XHRcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCgwLCAxLCAwLCAxKTsgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YFxyXG5cdFx0XHRcdH19Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHR7LypDbGlwIHNwYWNlIOyijO2RnOuKlCDsupTrsoTsiqQg7YGs6riw7JeQIOyDgeq0gOyXhuydtCDtla3sg4EgLTHsl5DshJwgKzHquYzsp4DsnoXri4jri6QuKi99XHJcblx0XHRcdDxjYW52YXMgaWQ9eydjJ30vPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2UwMTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==