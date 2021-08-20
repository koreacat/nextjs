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
    draw();
  }); // Returns a random integer from 0 to range - 1.

  function randomInt(range) {
    return Math.floor(Math.random() * range);
  } // Fill the buffer with the values that define a rectangle.


  function setRectangle(gl, x, y, width, height) {
    var x1 = x;
    var x2 = x + width;
    var y1 = y;
    var y2 = y + height;
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);
  }

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

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
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

    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
  };

  _s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
    return [gl.useProgram];
  });

  var draw = function draw() {
    for (var ii = 0; ii < 50; ++ii) {
      // Setup a random rectangle
      // This will write to positionBuffer because
      // its the last thing we bound on the ARRAY_BUFFER
      // bind point
      setRectangle(gl, randomInt(300), randomInt(300), randomInt(300), randomInt(300)); // Set a random color.

      var colorUniformLocation = gl.getUniformLocation(program, "u_color");
      gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1, 0.5); // Draw the rectangle.

      var primitiveType = gl.TRIANGLES;
      var offset = 0;
      var count = 6;
      gl.drawArrays(primitiveType, offset, count);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "vertex-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// Attribute\uB294 \uBC84\uD37C\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC74C\n  \t\t\t\t\t// \uBAA8\uB4E0 shader\uB294 main \uD568\uC218\uB97C \uAC00\uC9D0\n  \t\t\t\t\tattribute vec2 a_position;\n  \t\t\t\t\tuniform vec2 u_resolution;\n  \t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// \uC704\uCE58\uB97C \uD53D\uC140\uC5D0\uC11C 0.0\uACFC 1.0\uC0AC\uC774\uB85C \uBCC0\uD658\n    \t\t\t\t\tvec2 zeroToOne = a_position / u_resolution;\n \n\t\t\t\t\t\t// 0->1\uC5D0\uC11C 0->2\uB85C \uBCC0\uD658\n\t\t\t\t\t\tvec2 zeroToTwo = zeroToOne * 2.0;\n\t\t\t\t\t \n\t\t\t\t\t\t// 0->2\uC5D0\uC11C -1->+1\uB85C \uBCC0\uD658 (clip space)\n\t\t\t\t\t\tvec2 clipSpace = zeroToTwo - 1.0;\n\t\t\t\t\t \n  \t\t\t\t\t\tgl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\tuniform vec4 u_color;\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = u_color;\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZHJhdyIsInJhbmRvbUludCIsInJhbmdlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0UmVjdGFuZ2xlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIngxIiwieDIiLCJ5MSIsInkyIiwiYnVmZmVyRGF0YSIsIkFSUkFZX0JVRkZFUiIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwidXNlUHJvZ3JhbSIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5Iiwic2l6ZSIsInR5cGUiLCJGTE9BVCIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJyZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybTJmIiwiaWkiLCJjb2xvclVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm00ZiIsInByaW1pdGl2ZVR5cGUiLCJUUklBTkdMRVMiLCJjb3VudCIsImRyYXdBcnJheXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxJQUF6QjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQyx5QkFBeUIsR0FBRyxJQUFoQztBQUNBLE1BQUlDLGNBQWMsR0FBRyxJQUFyQjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsUUFBSTtBQUNKQyxVQUFNO0FBQ05DLFFBQUk7QUFDSixHQUpRLENBQVQsQ0Fad0IsQ0FtQnpCOztBQUNDLFdBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILEtBQTNCLENBQVA7QUFDQSxHQXRCdUIsQ0F3QnpCOzs7QUFDQyxXQUFTSSxZQUFULENBQXNCakIsRUFBdEIsRUFBMEJrQixDQUExQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUErQztBQUM5QyxRQUFJQyxFQUFFLEdBQUdKLENBQVQ7QUFDQSxRQUFJSyxFQUFFLEdBQUdMLENBQUMsR0FBR0UsS0FBYjtBQUNBLFFBQUlJLEVBQUUsR0FBR0wsQ0FBVDtBQUNBLFFBQUlNLEVBQUUsR0FBR04sQ0FBQyxHQUFHRSxNQUFiO0FBQ0FyQixNQUFFLENBQUMwQixVQUFILENBQWMxQixFQUFFLENBQUMyQixZQUFqQixF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QUFDRSxNQUFMLEVBQWxELEVBQWlFRixJQUFJLENBQUNFLE1BQUwsRUFBakUsRUFBZ0YsQ0FBaEYsRUFBbUYsR0FBbkYsRUFUK0IsQ0FXL0I7O0FBQ0EsVUFBSThDLGFBQWEsR0FBRzlELEVBQUUsQ0FBQytELFNBQXZCO0FBQ0EsVUFBSVQsTUFBTSxHQUFHLENBQWI7QUFDQSxVQUFJVSxLQUFLLEdBQUcsQ0FBWjtBQUNBaEUsUUFBRSxDQUFDaUUsVUFBSCxDQUFjSCxhQUFkLEVBQTZCUixNQUE3QixFQUFxQ1UsS0FBckM7QUFDQTtBQUNELEdBbEJEOztBQW9CQSxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBUSxVQUFFLEVBQUMsa0JBQVg7QUFBOEIsWUFBSSxFQUFDLE9BQW5DO0FBQTJDLCtCQUF1QixFQUFFO0FBQ25FRSxnQkFBTTtBQUQ2RDtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFzQkM7QUFBUSxVQUFFLEVBQUMsb0JBQVg7QUFBZ0MsWUFBSSxFQUFDLE9BQXJDO0FBQTZDLCtCQUF1QixFQUFFO0FBQ3JFQSxnQkFBTTtBQUQrRDtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBc0NDO0FBQVEsUUFBRSxFQUFFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBDQSxDQS9MRDs7SUFBTXBFLFU7O0tBQUFBLFU7QUFpTVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dlYkdMLjE1MjkzZGEyZDA1YWJlM2E0Y2E1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUHJvZ3JhbSwgY3JlYXRlU2hhZGVyfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgUHJhY3RpY2UwMSA9ICgpID0+IHtcclxuXHRsZXQgY2FudmFzID0gbnVsbDtcclxuXHRsZXQgZ2wgPSBudWxsO1xyXG5cdGxldCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBudWxsO1xyXG5cdGxldCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlciA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgcHJvZ3JhbSA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBudWxsO1xyXG5cdGxldCBwb3NpdGlvbkJ1ZmZlciA9IG51bGw7XHJcblxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdCgpO1xyXG5cdFx0cmVuZGVyKCk7XHJcblx0XHRkcmF3KCk7XHJcblx0fSk7XHJcblxyXG5cclxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGZyb20gMCB0byByYW5nZSAtIDEuXHJcblx0ZnVuY3Rpb24gcmFuZG9tSW50KHJhbmdlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xyXG5cdH1cclxuXHJcbi8vIEZpbGwgdGhlIGJ1ZmZlciB3aXRoIHRoZSB2YWx1ZXMgdGhhdCBkZWZpbmUgYSByZWN0YW5nbGUuXHJcblx0ZnVuY3Rpb24gc2V0UmVjdGFuZ2xlKGdsLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHR2YXIgeDEgPSB4O1xyXG5cdFx0dmFyIHgyID0geCArIHdpZHRoO1xyXG5cdFx0dmFyIHkxID0geTtcclxuXHRcdHZhciB5MiA9IHkgKyBoZWlnaHQ7XHJcblx0XHRnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbXHJcblx0XHRcdHgxLCB5MSxcclxuXHRcdFx0eDIsIHkxLFxyXG5cdFx0XHR4MSwgeTIsXHJcblx0XHRcdHgxLCB5MixcclxuXHRcdFx0eDIsIHkxLFxyXG5cdFx0XHR4MiwgeTIsXHJcblx0XHRdKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0XHQvLyBHTFNM64qUIEMg7Ja47Ja066W8IOq4sOy0iOuhnCDtlZwsIOyDgeychCDroIjrsqgg7IWw7J2065SpIOyWuOyWtOydtOuLpC5cclxuXHRcdC8vIFJhc3Rlcml6YXRpb24o66CI7Iqk7YSw7ZmUKS0g67Cx7YSwIOq3uOuemO2UvSDsnbTrr7jsp4Drpbwg67mE65SU7JikIOuUlOyKpO2UjOugiOydtOuCmCDtlITrprDthLAg65Ox7J2YIOuemOyKpO2EsCDrlJTrsJTsnbTsiqTsl5Ag7Lac66Cl7ZWY6riwIOychO2VtCDrnpjsiqTthLAg7J2066+47KeA66GcIOuzgO2ZmO2VmOuKlCDqsoNcclxuXHJcblx0XHQvLyBXZWJHTOydgCBHUFXsl5DshJwg7Iuk7ZaJ65CoLiDrlLDrnbzshJwgR1BV7JeQ7IScIOyLpO2WieuQmOuKlCDsvZTrk5zrpbwg7KCc6rO17ZW07JW87ZWp64uI64ukLlxyXG5cdFx0Ly8g7ZW064u5IOy9lOuTnOuKlCDtlajsiJgg7IyNIO2Yle2DnOuhnCDsoJzqs7XtlbTslbztlZjripTrjbBcclxuXHRcdC8vIOydtCDrkZAg7ZWo7IiY64qUIHZlcnRleCBzaGFkZXLsmYAgZnJhZ21lbnQgc2hhZGVy66GcIOu2iOumrOqzoCBDL0MrK+yymOufvCDsl4TqsqntlZwgVHlwZeydhCDqsIDsp4DripQgR0xTTOuhnCDsnpHshLHrkJjslrQg7J6I7Iq164uI64ukLlxyXG5cdFx0Ly8g7J20IOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW3snbTrnbzqs6Ag67aA66aF64uI64ukLlxyXG5cclxuXHRcdC8vIEdldCBBIFdlYkdMIGNvbnRleHRcclxuXHRcdGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY1wiKTtcclxuXHRcdGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHRcdGlmICghZ2wpIHJldHVybjtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHN0cmluZ3MgZm9yIG91ciBHTFNMIHNoYWRlcnNcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmVydGV4LXNoYWRlci0yZFwiKS50ZXh0O1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0ZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZyYWdtZW50LXNoYWRlci0yZFwiKS50ZXh0O1xyXG5cclxuXHJcblx0XHQvLyBjcmVhdGUgR0xTTCBzaGFkZXJzLCB1cGxvYWQgdGhlIEdMU0wgc291cmNlLCBjb21waWxlIHRoZSBzaGFkZXJzXHJcblx0XHQvLyB2ZXJ0ZXhTaGFkZXIgLSDsooztkZzrpbwg7KCc6rO1LCDsoJXsoJAg7JyE7LmY66W8IOqzhOyCsFxyXG5cdFx0Ly8gZnJhZ21lbnRTaGFkZXIgLSDsg4nsg4HsnYQg7KCc6rO1LCDtmITsnqwg6re466Ck7KeA64qUIHByaW1pdGl2ZeydmCDqsIEg7ZS97IWA7JeQIOuMgO2VnCDsg4nsg4HsnYQg6rOE7IKwXHJcblx0XHQvLyDrkZAg6rCc66W8IO2VqeyzkOyEnCBwcm9ncmFtXHJcblx0XHR2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNoYWRlclNvdXJjZSk7XHJcblx0XHRmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XHJcblx0XHRwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG5cclxuXHRcdC8vIOuovOyggCDtlbTslbwg7ZWgIOydvOydgCDrsKnquIgg7IOd7ISx65CcIHByb2dyYW3sl5Ag64yA7ZWcIGF0dHJpYnV0ZeydmCBsb2NhdGlvbuulvCDssL7ripQg6rKDXHJcblx0XHQvLyBBdHRyaWJ1dGUgbG9jYXRpb24o6re466as6rOgIHVuaWZvcm0gbG9jYXRpb24p7J2EIOywvuuKlCDqsoPsnYAg66CM642U66eB7ZWgIOuVjOqwgCDslYTri4jrnbwg7LSI6riw7ZmU7ZWY64qUIOuPmeyViCDtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Ly8gQXR0cmlidXRl64qUIOuyhO2NvOuhnOu2gO2EsCDrjbDsnbTthLDrpbwg6rCA7KC47Jik66+A66GcIOuyhO2NvOulvCDsg53shLHtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0cG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuXHRcdHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcblxyXG5cdFx0Ly8gYmluZCBwb2ludOuKlCBXZWJHTCDslYjsl5Ag7J6I64qUIOuCtOu2gCDsoITsl60g67OA7IiYXHJcblx0XHQvLyDrqLzsoIAgYmluZCBwb2ludOyXkCDsnpDsm5DsnYQg7ZWg64u57ZWp7Iuc64ukLiDqt7jrn6zrqbQg66qo65OgIO2VqOyImOqwgCBiaW5kIHBvaW5066W8IO2Gte2VtCDsnpDsm5DsnYQg7LC47KGw7ZWp64uI64ukLlxyXG5cdFx0Ly8gQmluZCBpdCB0byBBUlJBWV9CVUZGRVIgKHRoaW5rIG9mIGl0IGFzIEFSUkFZX0JVRkZFUiA9IHBvc2l0aW9uQnVmZmVyKVxyXG5cdFx0Ly8g7J207KCcIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IO2VtOuLuSDrsoTtjbzrpbwg7LC47KGw7ZW07IScIOuNsOydtO2EsOulvCDrhKPsnYQg7IiYIOyeiOyKteuLiOuLpC5cclxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcblx0XHQvLyDsgqzsmqkg6rCA64ql7ZWcIOqzteqwhOydhCDssYTsmrDquLAg7JyE7ZW0IENTU+uhnCDtgazquLDrpbwg6rKw7KCV7ZWcIOuLpOydjCDsnbzsuZjtlZjrj4TroZ0g7KGw7KCVXHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHR3ZWJnbFV0aWxzLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKTtcclxuXHJcblx0XHQvLyBnbF9Qb3NpdGlvbuycvOuhnCDshKTsoJXtlaAgY2xpcCBzcGFjZSDqsJLsnYQg7Ja065a76rKMIHNjcmVlbiBzcGFjZeuhnCDrs4DtmZjtlZjripTsp4AgV2ViR0zsl5Ag7JWM66Ck7KSY7JW8IO2VmOuKlOuNsOyalC5cclxuXHRcdC8vIOydtOulvCDsnITtlbQgZ2wudmlld3BvcnTrpbwg7Zi47Lac7ZW07IScIO2YhOyerCDsupTrsoTsiqQg7YGs6riw66W8IOyghOuLrO2VtOyVvCDtlanri4jri6QuXHJcblx0XHQvLyDsnbTripQgLTEgPC0+ICsxIGNsaXAgc3BhY2XrpbwsIHjripQgMCA8LT4gZ2wuY2FudmFzLndpZHRo66GcLCB564qUIDAgPC0+IGdsLmNhbnZhcy5oZWlnaHTroZwg66ek7ZWR7Iuc7Lyc7KSN64uI64ukLlxyXG5cdFx0Z2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcblxyXG5cdFx0Ly8gQ2xlYXIgdGhlIGNhbnZhc1xyXG5cdFx0Z2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcclxuXHRcdGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuXHRcdC8vIOyLpO2Wie2VoCBzaGFkZXIgcHJvZ3JhbeydhCBXZWJHTOyXkCDslYzroKTspI3ri4jri6QuXHJcblx0XHRnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuXHJcblx0XHQvLyDsnITsl5DshJwg7ISk7KCV7ZWcIOuyhO2NvOyXkOyEnCDrjbDsnbTthLDrpbwg6rCA7KC47JmAIHNoYWRlcuydmCBhdHRyaWJ1dGXsl5Ag7KCc6rO17ZWY64qUIOuwqeuyleydhCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642wLFxyXG5cdFx0Ly8g7Jqw7ISgIGF0dHJpYnV0ZeulvCDtmZzshLHtmZTtlbTslbwg7ZWp64uI64ukLlxyXG5cdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbik7XHJcblxyXG5cdFx0Ly8g642w7J207YSw66W8IOyWtOuWu+qyjCDqurzrgrzsp4Ag7KeA7KCV7ZWp64uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblx0XHQvLyBwb3NpdGlvbkJ1ZmZlcihBUlJBWV9CVUZGRVIp7J2YIOuNsOydtO2EsOulvCDqurzrgrTsmKTripQg67Cp67KV7J2EIGF0dHJpYnV0ZeyXkCDsp4Dsi5xcclxuXHRcdHZhciBzaXplID0gMjsgICAgICAgICAgLy8g67CY67O166eI64ukIDLqsJzsnZgg7Lu07Y+s64SM7Yq4XHJcblx0XHR2YXIgdHlwZSA9IGdsLkZMT0FUOyAgIC8vIOuNsOydtO2EsOuKlCAzMmJpdCBmbG9hdFxyXG5cdFx0dmFyIG5vcm1hbGl6ZSA9IGZhbHNlOyAvLyDrjbDsnbTthLAg7KCV6rec7ZmUIOyViCDtlahcclxuXHRcdHZhciBzdHJpZGUgPSAwOyAgICAgICAgLy8gMCA9IOuLpOydjCDsnITsuZjrpbwg6rCA7KC47Jik6riwIOychO2VtCDrsJjrs7Xrp4jri6Qgc2l6ZSAqIHNpemVvZih0eXBlKSDrp4ztgbwg7JWe7Jy866GcIOydtOuPmVxyXG5cdFx0dmFyIG9mZnNldCA9IDA7ICAgICAgICAvLyDrsoTtjbzsnZgg7LKY7J2M67aA7YSwIOyLnOyekVxyXG5cclxuXHRcdC8vIGdsLnZlcnRleEF0dHJpYlBvaW50ZXLsnZgg7Iio6rKo7KeEIOu2gOu2hOydgCDtmITsnqwg67CU7J2465Sp65CcIEFSUkFZX0JVRkZFUuulvCBhdHRyaWJ1dGXsl5Ag7ZWg64u57ZWc64uk64qUIOqygeuLiOuLpC5cclxuXHRcdC8vIOydtCBhdHRyaWJ1dGXripQg7J207KCcIHBvc2l0aW9uQnVmZmVy7JeQIOuwlOyduOuUqeuQqeuLiOuLpC5cclxuXHRcdC8vIOydtOqxtCBBUlJBWV9CVUZGRVIgYmluZCBwb2ludOyXkCDri6Trpbgg6rKD65Ok7J2EIOyekOycoOuhreqyjCDtlaDri7ntlaAg7IiYIOyeiOuLpOuKlCDqsbgg7J2Y66+4XHJcblx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG5cdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBzaXplLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcclxuXHJcblx0XHR2YXIgcmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVfcmVzb2x1dGlvblwiKTtcclxuXHRcdGdsLnVuaWZvcm0yZihyZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRyYXcgPSAoKSA9PiB7XHJcblx0XHRmb3IgKHZhciBpaSA9IDA7IGlpIDwgNTA7ICsraWkpIHtcclxuXHRcdFx0Ly8gU2V0dXAgYSByYW5kb20gcmVjdGFuZ2xlXHJcblx0XHRcdC8vIFRoaXMgd2lsbCB3cml0ZSB0byBwb3NpdGlvbkJ1ZmZlciBiZWNhdXNlXHJcblx0XHRcdC8vIGl0cyB0aGUgbGFzdCB0aGluZyB3ZSBib3VuZCBvbiB0aGUgQVJSQVlfQlVGRkVSXHJcblx0XHRcdC8vIGJpbmQgcG9pbnRcclxuXHRcdFx0c2V0UmVjdGFuZ2xlKGdsLCByYW5kb21JbnQoMzAwKSwgcmFuZG9tSW50KDMwMCksIHJhbmRvbUludCgzMDApLCByYW5kb21JbnQoMzAwKSk7XHJcblxyXG5cdFx0XHQvLyBTZXQgYSByYW5kb20gY29sb3IuXHJcblx0XHRcdHZhciBjb2xvclVuaWZvcm1Mb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVfY29sb3JcIik7XHJcblx0XHRcdGdsLnVuaWZvcm00Zihjb2xvclVuaWZvcm1Mb2NhdGlvbiwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMSwgMC41KTtcclxuXHJcblx0XHRcdC8vIERyYXcgdGhlIHJlY3RhbmdsZS5cclxuXHRcdFx0dmFyIHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVM7XHJcblx0XHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cdFx0XHR2YXIgY291bnQgPSA2O1xyXG5cdFx0XHRnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIG9mZnNldCwgY291bnQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwidmVydGV4LXNoYWRlci0yZFwiIHR5cGU9XCJub3Rqc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRfX2h0bWw6IGBcclxuXHRcdFx0XHRcdC8vIEF0dHJpYnV0ZeuKlCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOuwm+ydjFxyXG4gIFx0XHRcdFx0XHQvLyDrqqjrk6Agc2hhZGVy64qUIG1haW4g7ZWo7IiY66W8IOqwgOynkFxyXG4gIFx0XHRcdFx0XHRhdHRyaWJ1dGUgdmVjMiBhX3Bvc2l0aW9uO1xyXG4gIFx0XHRcdFx0XHR1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gIFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8g7JyE7LmY66W8IO2UveyFgOyXkOyEnCAwLjDqs7wgMS4w7IKs7J2066GcIOuzgO2ZmFxyXG4gICAgXHRcdFx0XHRcdHZlYzIgemVyb1RvT25lID0gYV9wb3NpdGlvbiAvIHVfcmVzb2x1dGlvbjtcclxuIFxyXG5cdFx0XHRcdFx0XHQvLyAwLT4x7JeQ7IScIDAtPjLroZwg67OA7ZmYXHJcblx0XHRcdFx0XHRcdHZlYzIgemVyb1RvVHdvID0gemVyb1RvT25lICogMi4wO1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHQvLyAwLT4y7JeQ7IScIC0xLT4rMeuhnCDrs4DtmZggKGNsaXAgc3BhY2UpXHJcblx0XHRcdFx0XHRcdHZlYzIgY2xpcFNwYWNlID0gemVyb1RvVHdvIC0gMS4wO1xyXG5cdFx0XHRcdFx0IFxyXG4gIFx0XHRcdFx0XHRcdGdsX1Bvc2l0aW9uID0gdmVjNChjbGlwU3BhY2UgKiB2ZWMyKDEsIC0xKSwgMCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YFxyXG5cdFx0XHRcdH19Lz5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwiZnJhZ21lbnQtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdF9faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgc2hhZGVy64qUIOq4sOuzuCDsoJXrsIDrj4Trpbwg6rCA7KeA6rOgIOyeiOyngCDslYrsnLzrr4DroZwg7ZWY64KY66W8IOyEoO2Dne2VtOyVvCDtlanri4jri6QuXHJcblx0XHRcdFx0XHQvLyBtZWRpdW1w7J2AIOyii+ydgCDquLDrs7jqsJLsnLzroZwgXCLspJHqsIQg7KCV67CA64+EXCLrpbwg7J2Y66+47ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdFx0XHR1bmlmb3JtIHZlYzQgdV9jb2xvcjtcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ2xfRnJhZ0NvbG9y64qUIGZyYWdtZW50IHNoYWRlcuqwgCDshKTsoJXsnYQg64u064u57ZWY64qUIO2KueyImCDrs4DsiJhcclxuXHRcdFx0XHRcdFx0Ly8gV2ViR0zsl5DshJwg7IOJ7IOB7J2AIDDsl5DshJwgMeq5jOyngOyeheuLiOuLpC5cclxuXHRcdFx0XHRcdFx0Z2xfRnJhZ0NvbG9yID0gdV9jb2xvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgXHJcblx0XHRcdFx0fX0vPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdHsvKkNsaXAgc3BhY2Ug7KKM7ZGc64qUIOy6lOuyhOyKpCDtgazquLDsl5Ag7IOB6rSA7JeG7J20IO2VreyDgSAtMeyXkOyEnCArMeq5jOyngOyeheuLiOuLpC4qL31cclxuXHRcdFx0PGNhbnZhcyBpZD17J2MnfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZTAxO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9