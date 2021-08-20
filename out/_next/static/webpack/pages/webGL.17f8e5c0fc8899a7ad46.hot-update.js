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
      gl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1); // Draw the rectangle.

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
        lineNumber: 158,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        id: "fragment-shader-2d",
        type: "notjs",
        dangerouslySetInnerHTML: {
          __html: "\n\t\t\t\t\t// fragment shader\uB294 \uAE30\uBCF8 \uC815\uBC00\uB3C4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uD558\uB098\uB97C \uC120\uD0DD\uD574\uC57C \uD569\uB2C8\uB2E4.\n\t\t\t\t\t// mediump\uC740 \uC88B\uC740 \uAE30\uBCF8\uAC12\uC73C\uB85C \"\uC911\uAC04 \uC815\uBC00\uB3C4\"\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t\tuniform vec4 u_color;\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t// gl_FragColor\uB294 fragment shader\uAC00 \uC124\uC815\uC744 \uB2F4\uB2F9\uD558\uB294 \uD2B9\uC218 \uBCC0\uC218\n\t\t\t\t\t\t// WebGL\uC5D0\uC11C \uC0C9\uC0C1\uC740 0\uC5D0\uC11C 1\uAE4C\uC9C0\uC785\uB2C8\uB2E4.\n\t\t\t\t\t\tgl_FragColor = u_color;\n\t\t\t\t\t}\n\t\t\t\t"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: 'c'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2ViR0wvcHJhY3RpY2UwMS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJhY3RpY2UwMSIsImNhbnZhcyIsImdsIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicG9zaXRpb25CdWZmZXIiLCJ1c2VFZmZlY3QiLCJpbml0IiwicmVuZGVyIiwiZHJhdyIsInJhbmRvbUludCIsInJhbmdlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0UmVjdGFuZ2xlIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIngxIiwieDIiLCJ5MSIsInkyIiwiYnVmZmVyRGF0YSIsIkFSUkFZX0JVRkZFUiIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiY3JlYXRlUHJvZ3JhbSIsImdldEF0dHJpYkxvY2F0aW9uIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsIndlYmdsVXRpbHMiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwidmlld3BvcnQiLCJjbGVhckNvbG9yIiwiY2xlYXIiLCJDT0xPUl9CVUZGRVJfQklUIiwidXNlUHJvZ3JhbSIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5Iiwic2l6ZSIsInR5cGUiLCJGTE9BVCIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJyZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybTJmIiwiaWkiLCJjb2xvclVuaWZvcm1Mb2NhdGlvbiIsInVuaWZvcm00ZiIsInByaW1pdGl2ZVR5cGUiLCJUUklBTkdMRVMiLCJjb3VudCIsImRyYXdBcnJheXMiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQ3hCLE1BQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxJQUF6QjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQyx5QkFBeUIsR0FBRyxJQUFoQztBQUNBLE1BQUlDLGNBQWMsR0FBRyxJQUFyQjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsUUFBSTtBQUNKQyxVQUFNO0FBQ05DLFFBQUk7QUFDSixHQUpRLENBQVQsQ0Fad0IsQ0FtQnpCOztBQUNDLFdBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILEtBQTNCLENBQVA7QUFDQSxHQXRCdUIsQ0F3QnpCOzs7QUFDQyxXQUFTSSxZQUFULENBQXNCakIsRUFBdEIsRUFBMEJrQixDQUExQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLEtBQWhDLEVBQXVDQyxNQUF2QyxFQUErQztBQUM5QyxRQUFJQyxFQUFFLEdBQUdKLENBQVQ7QUFDQSxRQUFJSyxFQUFFLEdBQUdMLENBQUMsR0FBR0UsS0FBYjtBQUNBLFFBQUlJLEVBQUUsR0FBR0wsQ0FBVDtBQUNBLFFBQUlNLEVBQUUsR0FBR04sQ0FBQyxHQUFHRSxNQUFiO0FBQ0FyQixNQUFFLENBQUMwQixVQUFILENBQWMxQixFQUFFLENBQUMyQixZQUFqQixFQUErQixJQUFJQyxZQUFKLENBQWlCLENBQy9DTixFQUQrQyxFQUMzQ0UsRUFEMkMsRUFFL0NELEVBRitDLEVBRTNDQyxFQUYyQyxFQUcvQ0YsRUFIK0MsRUFHM0NHLEVBSDJDLEVBSS9DSCxFQUorQyxFQUkzQ0csRUFKMkMsRUFLL0NGLEVBTCtDLEVBSzNDQyxFQUwyQyxFQU0vQ0QsRUFOK0MsRUFNM0NFLEVBTjJDLENBQWpCLENBQS9CLEVBT0l6QixFQUFFLENBQUM2QixXQVBQO0FBUUE7O0FBR0QsTUFBTXBCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQVYsVUFBTSxHQUFHK0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQS9CLE1BQUUsR0FBR0QsTUFBTSxDQUFDaUMsVUFBUCxDQUFrQixPQUFsQixDQUFMO0FBQ0EsUUFBSSxDQUFDaEMsRUFBTCxFQUFTLE9BWlMsQ0FjbEI7QUFDQTs7QUFDQUMsc0JBQWtCLEdBQUc2QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDRSxJQUFqRSxDQWhCa0IsQ0FpQmxCOztBQUNBL0Isd0JBQW9CLEdBQUc0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDRSxJQUFyRSxDQWxCa0IsQ0FxQmxCO0FBQ0E7QUFDQTtBQUNBOztBQUNBOUIsZ0JBQVksR0FBRytCLGlFQUFZLENBQUNsQyxFQUFELEVBQUtBLEVBQUUsQ0FBQ21DLGFBQVIsRUFBdUJsQyxrQkFBdkIsQ0FBM0I7QUFDQUcsa0JBQWMsR0FBRzhCLGlFQUFZLENBQUNsQyxFQUFELEVBQUtBLEVBQUUsQ0FBQ29DLGVBQVIsRUFBeUJsQyxvQkFBekIsQ0FBN0I7QUFDQUcsV0FBTyxHQUFHZ0Msa0VBQWEsQ0FBQ3JDLEVBQUQsRUFBS0csWUFBTCxFQUFtQkMsY0FBbkIsQ0FBdkIsQ0EzQmtCLENBOEJsQjtBQUNBO0FBQ0E7O0FBQ0FFLDZCQUF5QixHQUFHTixFQUFFLENBQUNzQyxpQkFBSCxDQUFxQmpDLE9BQXJCLEVBQThCLFlBQTlCLENBQTVCO0FBQ0FFLGtCQUFjLEdBQUdQLEVBQUUsQ0FBQ3VDLFlBQUgsRUFBakIsQ0FsQ2tCLENBb0NsQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQXZDLE1BQUUsQ0FBQ3dDLFVBQUgsQ0FBY3hDLEVBQUUsQ0FBQzJCLFlBQWpCLEVBQStCcEIsY0FBL0I7QUFFQSxHQTFDRDs7QUE2Q0EsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNwQjtBQUNBO0FBQ0ErQixjQUFVLENBQUNDLHlCQUFYLENBQXFDMUMsRUFBRSxDQUFDRCxNQUF4QyxFQUhvQixDQUtwQjtBQUNBO0FBQ0E7O0FBQ0FDLE1BQUUsQ0FBQzJDLFFBQUgsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjNDLEVBQUUsQ0FBQ0QsTUFBSCxDQUFVcUIsS0FBNUIsRUFBbUNwQixFQUFFLENBQUNELE1BQUgsQ0FBVXNCLE1BQTdDLEVBUm9CLENBV3BCOztBQUNBckIsTUFBRSxDQUFDNEMsVUFBSCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFDQTVDLE1BQUUsQ0FBQzZDLEtBQUgsQ0FBUzdDLEVBQUUsQ0FBQzhDLGdCQUFaLEVBYm9CLENBZXBCOztBQUNBOUMsTUFBRSxDQUFDK0MsVUFBSCxDQUFjMUMsT0FBZCxFQWhCb0IsQ0FtQnBCO0FBQ0E7O0FBQ0FMLE1BQUUsQ0FBQ2dELHVCQUFILENBQTJCMUMseUJBQTNCLEVBckJvQixDQXVCcEI7O0FBQ0FOLE1BQUUsQ0FBQ3dDLFVBQUgsQ0FBY3hDLEVBQUUsQ0FBQzJCLFlBQWpCLEVBQStCcEIsY0FBL0IsRUF4Qm9CLENBMEJwQjs7QUFDQSxRQUFJMEMsSUFBSSxHQUFHLENBQVgsQ0EzQm9CLENBMkJHOztBQUN2QixRQUFJQyxJQUFJLEdBQUdsRCxFQUFFLENBQUNtRCxLQUFkLENBNUJvQixDQTRCRzs7QUFDdkIsUUFBSUMsU0FBUyxHQUFHLEtBQWhCLENBN0JvQixDQTZCRzs7QUFDdkIsUUFBSUMsTUFBTSxHQUFHLENBQWIsQ0E5Qm9CLENBOEJHOztBQUN2QixRQUFJQyxNQUFNLEdBQUcsQ0FBYixDQS9Cb0IsQ0ErQkc7QUFFdkI7QUFDQTtBQUNBOztBQUNBdEQsTUFBRSxDQUFDdUQsbUJBQUgsQ0FDQ2pELHlCQURELEVBQzRCMkMsSUFENUIsRUFDa0NDLElBRGxDLEVBQ3dDRSxTQUR4QyxFQUNtREMsTUFEbkQsRUFDMkRDLE1BRDNEO0FBR0EsUUFBSUUseUJBQXlCLEdBQUd4RCxFQUFFLENBQUN5RCxrQkFBSCxDQUFzQnBELE9BQXRCLEVBQStCLGNBQS9CLENBQWhDO0FBQ0FMLE1BQUUsQ0FBQzBELFNBQUgsQ0FBYUYseUJBQWIsRUFBd0N4RCxFQUFFLENBQUNELE1BQUgsQ0FBVXFCLEtBQWxELEVBQXlEcEIsRUFBRSxDQUFDRCxNQUFILENBQVVzQixNQUFuRTtBQUNBLEdBekNEOztBQXRGd0IsS0FzRmxCWCxNQXRGa0I7QUFBQSxZQXNHdkJWLEVBQUUsQ0FBQytDLFVBdEdvQjtBQUFBOztBQWlJeEIsTUFBTXBDLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEIsU0FBSyxJQUFJZ0QsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxFQUF0QixFQUEwQixFQUFFQSxFQUE1QixFQUFnQztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBMUMsa0JBQVksQ0FDWGpCLEVBRFcsRUFDUFksU0FBUyxDQUFDLEdBQUQsQ0FERixFQUNTQSxTQUFTLENBQUMsR0FBRCxDQURsQixFQUN5QkEsU0FBUyxDQUFDLEdBQUQsQ0FEbEMsRUFDeUNBLFNBQVMsQ0FBQyxHQUFELENBRGxELENBQVosQ0FMK0IsQ0FRL0I7O0FBQ0EsVUFBSWdELG9CQUFvQixHQUFHNUQsRUFBRSxDQUFDeUQsa0JBQUgsQ0FBc0JwRCxPQUF0QixFQUErQixTQUEvQixDQUEzQjtBQUNBTCxRQUFFLENBQUM2RCxTQUFILENBQWFELG9CQUFiLEVBQW1DOUMsSUFBSSxDQUFDRSxNQUFMLEVBQW5DLEVBQWtERixJQUFJLENBQUNFLE1BQUwsRUFBbEQsRUFBaUVGLElBQUksQ0FBQ0UsTUFBTCxFQUFqRSxFQUFnRixDQUFoRixFQVYrQixDQVkvQjs7QUFDQSxVQUFJOEMsYUFBYSxHQUFHOUQsRUFBRSxDQUFDK0QsU0FBdkI7QUFDQSxVQUFJVCxNQUFNLEdBQUcsQ0FBYjtBQUNBLFVBQUlVLEtBQUssR0FBRyxDQUFaO0FBQ0FoRSxRQUFFLENBQUNpRSxVQUFILENBQWNILGFBQWQsRUFBNkJSLE1BQTdCLEVBQXFDVSxLQUFyQztBQUNBO0FBQ0QsR0FuQkQ7O0FBcUJBLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFRLFVBQUUsRUFBQyxrQkFBWDtBQUE4QixZQUFJLEVBQUMsT0FBbkM7QUFBMkMsK0JBQXVCLEVBQUU7QUFDbkVFLGdCQUFNO0FBRDZEO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQXNCQztBQUFRLFVBQUUsRUFBQyxvQkFBWDtBQUFnQyxZQUFJLEVBQUMsT0FBckM7QUFBNkMsK0JBQXVCLEVBQUU7QUFDckVBLGdCQUFNO0FBRCtEO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFzQ0M7QUFBUSxRQUFFLEVBQUU7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMENBLENBaE1EOztJQUFNcEUsVTs7S0FBQUEsVTtBQWtNU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2ViR0wuMTdmOGU1YzBmYzg4OTlhN2FkNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVQcm9ncmFtLCBjcmVhdGVTaGFkZXJ9IGZyb20gXCIuLi9jb21tb24vdXRpbFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBQcmFjdGljZTAxID0gKCkgPT4ge1xyXG5cdGxldCBjYW52YXMgPSBudWxsO1xyXG5cdGxldCBnbCA9IG51bGw7XHJcblx0bGV0IHZlcnRleFNoYWRlclNvdXJjZSA9IG51bGw7XHJcblx0bGV0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbnVsbDtcclxuXHRsZXQgdmVydGV4U2hhZGVyID0gbnVsbDtcclxuXHRsZXQgZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xyXG5cdGxldCBwcm9ncmFtID0gbnVsbDtcclxuXHRsZXQgcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IG51bGw7XHJcblx0bGV0IHBvc2l0aW9uQnVmZmVyID0gbnVsbDtcclxuXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0KCk7XHJcblx0XHRyZW5kZXIoKTtcclxuXHRcdGRyYXcoKTtcclxuXHR9KTtcclxuXHJcblxyXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgZnJvbSAwIHRvIHJhbmdlIC0gMS5cclxuXHRmdW5jdGlvbiByYW5kb21JbnQocmFuZ2UpIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSk7XHJcblx0fVxyXG5cclxuLy8gRmlsbCB0aGUgYnVmZmVyIHdpdGggdGhlIHZhbHVlcyB0aGF0IGRlZmluZSBhIHJlY3RhbmdsZS5cclxuXHRmdW5jdGlvbiBzZXRSZWN0YW5nbGUoZ2wsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHZhciB4MSA9IHg7XHJcblx0XHR2YXIgeDIgPSB4ICsgd2lkdGg7XHJcblx0XHR2YXIgeTEgPSB5O1xyXG5cdFx0dmFyIHkyID0geSArIGhlaWdodDtcclxuXHRcdGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFtcclxuXHRcdFx0eDEsIHkxLFxyXG5cdFx0XHR4MiwgeTEsXHJcblx0XHRcdHgxLCB5MixcclxuXHRcdFx0eDEsIHkyLFxyXG5cdFx0XHR4MiwgeTEsXHJcblx0XHRcdHgyLCB5MixcclxuXHRcdF0pLCBnbC5TVEFUSUNfRFJBVyk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdC8vIEdMU0zripQgQyDslrjslrTrpbwg6riw7LSI66GcIO2VnCwg7IOB7JyEIOugiOuyqCDshbDsnbTrlKkg7Ja47Ja07J2064ukLlxyXG5cdFx0Ly8gUmFzdGVyaXphdGlvbijroIjsiqTthLDtmZQpLSDrsLHthLAg6re4656Y7ZS9IOydtOuvuOyngOulvCDruYTrlJTsmKQg65SU7Iqk7ZSM66CI7J2064KYIO2UhOumsO2EsCDrk7HsnZgg656Y7Iqk7YSwIOuUlOuwlOydtOyKpOyXkCDstpzroKXtlZjquLAg7JyE7ZW0IOuemOyKpO2EsCDsnbTrr7jsp4DroZwg67OA7ZmY7ZWY64qUIOqyg1xyXG5cclxuXHRcdC8vIFdlYkdM7J2AIEdQVeyXkOyEnCDsi6TtlonrkKguIOuUsOudvOyEnCBHUFXsl5DshJwg7Iuk7ZaJ65CY64qUIOy9lOuTnOulvCDsoJzqs7XtlbTslbztlanri4jri6QuXHJcblx0XHQvLyDtlbTri7kg7L2U65Oc64qUIO2VqOyImCDsjI0g7ZiV7YOc66GcIOygnOqzte2VtOyVvO2VmOuKlOuNsFxyXG5cdFx0Ly8g7J20IOuRkCDtlajsiJjripQgdmVydGV4IHNoYWRlcuyZgCBmcmFnbWVudCBzaGFkZXLroZwg67aI66as6rOgIEMvQysr7LKY65+8IOyXhOqyqe2VnCBUeXBl7J2EIOqwgOyngOuKlCBHTFNM66GcIOyekeyEseuQmOyWtCDsnojsirXri4jri6QuXHJcblx0XHQvLyDsnbQg65GQIOqwnOulvCDtlanss5DshJwgcHJvZ3JhbeydtOudvOqzoCDrtoDrpoXri4jri6QuXHJcblxyXG5cdFx0Ly8gR2V0IEEgV2ViR0wgY29udGV4dFxyXG5cdFx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjXCIpO1xyXG5cdFx0Z2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cdFx0aWYgKCFnbCkgcmV0dXJuO1xyXG5cclxuXHRcdC8vIEdldCB0aGUgc3RyaW5ncyBmb3Igb3VyIEdMU0wgc2hhZGVyc1xyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0dmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2ZXJ0ZXgtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJhZ21lbnQtc2hhZGVyLTJkXCIpLnRleHQ7XHJcblxyXG5cclxuXHRcdC8vIGNyZWF0ZSBHTFNMIHNoYWRlcnMsIHVwbG9hZCB0aGUgR0xTTCBzb3VyY2UsIGNvbXBpbGUgdGhlIHNoYWRlcnNcclxuXHRcdC8vIHZlcnRleFNoYWRlciAtIOyijO2RnOulvCDsoJzqs7UsIOygleygkCDsnITsuZjrpbwg6rOE7IKwXHJcblx0XHQvLyBmcmFnbWVudFNoYWRlciAtIOyDieyDgeydhCDsoJzqs7UsIO2YhOyerCDqt7jroKTsp4DripQgcHJpbWl0aXZl7J2YIOqwgSDtlL3shYDsl5Ag64yA7ZWcIOyDieyDgeydhCDqs4TsgrBcclxuXHRcdC8vIOuRkCDqsJzrpbwg7ZWp7LOQ7IScIHByb2dyYW1cclxuXHRcdHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcclxuXHRcdGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcclxuXHRcdHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcblxyXG5cdFx0Ly8g66i87KCAIO2VtOyVvCDtlaAg7J287J2AIOuwqeq4iCDsg53shLHrkJwgcHJvZ3JhbeyXkCDrjIDtlZwgYXR0cmlidXRl7J2YIGxvY2F0aW9u66W8IOywvuuKlCDqsoNcclxuXHRcdC8vIEF0dHJpYnV0ZSBsb2NhdGlvbijqt7jrpqzqs6AgdW5pZm9ybSBsb2NhdGlvbinsnYQg7LC+64qUIOqyg+ydgCDroIzrjZTrp4HtlaAg65WM6rCAIOyVhOuLiOudvCDstIjquLDtmZTtlZjripQg64+Z7JWIIO2VtOyVvCDtlanri4jri6QuXHJcblx0XHQvLyBBdHRyaWJ1dGXripQg67KE7Y2866Gc67aA7YSwIOuNsOydtO2EsOulvCDqsIDsoLjsmKTrr4DroZwg67KE7Y2866W8IOyDneyEse2VtOyVvCDtlanri4jri6QuXHJcblx0XHRwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG5cdFx0cG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcblx0XHQvLyBiaW5kIHBvaW5064qUIFdlYkdMIOyViOyXkCDsnojripQg64K067aAIOyghOyXrSDrs4DsiJhcclxuXHRcdC8vIOuovOyggCBiaW5kIHBvaW507JeQIOyekOybkOydhCDtlaDri7ntlansi5zri6QuIOq3uOufrOuptCDrqqjrk6Ag7ZWo7IiY6rCAIGJpbmQgcG9pbnTrpbwg7Ya17ZW0IOyekOybkOydhCDssLjsobDtlanri4jri6QuXHJcblx0XHQvLyBCaW5kIGl0IHRvIEFSUkFZX0JVRkZFUiAodGhpbmsgb2YgaXQgYXMgQVJSQVlfQlVGRkVSID0gcG9zaXRpb25CdWZmZXIpXHJcblx0XHQvLyDsnbTsoJwgYmluZCBwb2ludOulvCDthrXtlbQg7ZW064u5IOuyhO2NvOulvCDssLjsobDtlbTshJwg642w7J207YSw66W8IOuEo+ydhCDsiJgg7J6I7Iq164uI64ukLlxyXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuXHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuXHRcdC8vIOyCrOyaqSDqsIDriqXtlZwg6rO16rCE7J2EIOyxhOyasOq4sCDsnITtlbQgQ1NT66GcIO2BrOq4sOulvCDqsrDsoJXtlZwg64uk7J2MIOydvOy5mO2VmOuPhOuhnSDsobDsoJVcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdHdlYmdsVXRpbHMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpO1xyXG5cclxuXHRcdC8vIGdsX1Bvc2l0aW9u7Jy866GcIOyEpOygle2VoCBjbGlwIHNwYWNlIOqwkuydhCDslrTrlrvqsowgc2NyZWVuIHNwYWNl66GcIOuzgO2ZmO2VmOuKlOyngCBXZWJHTOyXkCDslYzroKTspJjslbwg7ZWY64qU642w7JqULlxyXG5cdFx0Ly8g7J2066W8IOychO2VtCBnbC52aWV3cG9ydOulvCDtmLjstpztlbTshJwg7ZiE7J6sIOy6lOuyhOyKpCDtgazquLDrpbwg7KCE64us7ZW07JW8IO2VqeuLiOuLpC5cclxuXHRcdC8vIOydtOuKlCAtMSA8LT4gKzEgY2xpcCBzcGFjZeulvCwgeOuKlCAwIDwtPiBnbC5jYW52YXMud2lkdGjroZwsIHnripQgMCA8LT4gZ2wuY2FudmFzLmhlaWdodOuhnCDrp6TtlZHsi5zsvJzspI3ri4jri6QuXHJcblx0XHRnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuXHJcblx0XHQvLyBDbGVhciB0aGUgY2FudmFzXHJcblx0XHRnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG5cdFx0Ly8g7Iuk7ZaJ7ZWgIHNoYWRlciBwcm9ncmFt7J2EIFdlYkdM7JeQIOyVjOugpOykjeuLiOuLpC5cclxuXHRcdGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG5cclxuXHRcdC8vIOychOyXkOyEnCDshKTsoJXtlZwg67KE7Y287JeQ7IScIOuNsOydtO2EsOulvCDqsIDsoLjsmYAgc2hhZGVy7J2YIGF0dHJpYnV0ZeyXkCDsoJzqs7XtlZjripQg67Cp67KV7J2EIFdlYkdM7JeQIOyVjOugpOykmOyVvCDtlZjripTrjbAsXHJcblx0XHQvLyDsmrDshKAgYXR0cmlidXRl66W8IO2ZnOyEse2ZlO2VtOyVvCDtlanri4jri6QuXHJcblx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKTtcclxuXHJcblx0XHQvLyDrjbDsnbTthLDrpbwg7Ja065a76rKMIOq6vOuCvOyngCDsp4DsoJXtlanri4jri6QuXHJcblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xyXG5cclxuXHRcdC8vIHBvc2l0aW9uQnVmZmVyKEFSUkFZX0JVRkZFUinsnZgg642w7J207YSw66W8IOq6vOuCtOyYpOuKlCDrsKnrspXsnYQgYXR0cmlidXRl7JeQIOyngOyLnFxyXG5cdFx0dmFyIHNpemUgPSAyOyAgICAgICAgICAvLyDrsJjrs7Xrp4jri6QgMuqwnOydmCDsu7Ttj6zrhIztirhcclxuXHRcdHZhciB0eXBlID0gZ2wuRkxPQVQ7ICAgLy8g642w7J207YSw64qUIDMyYml0IGZsb2F0XHJcblx0XHR2YXIgbm9ybWFsaXplID0gZmFsc2U7IC8vIOuNsOydtO2EsCDsoJXqt5ztmZQg7JWIIO2VqFxyXG5cdFx0dmFyIHN0cmlkZSA9IDA7ICAgICAgICAvLyAwID0g64uk7J2MIOychOy5mOulvCDqsIDsoLjsmKTquLAg7JyE7ZW0IOuwmOuzteuniOuLpCBzaXplICogc2l6ZW9mKHR5cGUpIOunjO2BvCDslZ7snLzroZwg7J2064+ZXHJcblx0XHR2YXIgb2Zmc2V0ID0gMDsgICAgICAgIC8vIOuyhO2NvOydmCDsspjsnYzrtoDthLAg7Iuc7J6RXHJcblxyXG5cdFx0Ly8gZ2wudmVydGV4QXR0cmliUG9pbnRlcuydmCDsiKjqsqjsp4Qg67aA67aE7J2AIO2YhOyerCDrsJTsnbjrlKnrkJwgQVJSQVlfQlVGRkVS66W8IGF0dHJpYnV0ZeyXkCDtlaDri7ntlZzri6TripQg6rKB64uI64ukLlxyXG5cdFx0Ly8g7J20IGF0dHJpYnV0ZeuKlCDsnbTsoJwgcG9zaXRpb25CdWZmZXLsl5Ag67CU7J2465Sp65Cp64uI64ukLlxyXG5cdFx0Ly8g7J206rG0IEFSUkFZX0JVRkZFUiBiaW5kIHBvaW507JeQIOuLpOuluCDqsoPrk6TsnYQg7J6Q7Jyg66Gt6rKMIO2VoOuLue2VoCDsiJgg7J6I64uk64qUIOqxuCDsnZjrr7hcclxuXHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXHJcblx0XHRcdHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHNpemUsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xyXG5cclxuXHRcdHZhciByZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV9yZXNvbHV0aW9uXCIpO1xyXG5cdFx0Z2wudW5pZm9ybTJmKHJlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24sIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZHJhdyA9ICgpID0+IHtcclxuXHRcdGZvciAodmFyIGlpID0gMDsgaWkgPCA1MDsgKytpaSkge1xyXG5cdFx0XHQvLyBTZXR1cCBhIHJhbmRvbSByZWN0YW5nbGVcclxuXHRcdFx0Ly8gVGhpcyB3aWxsIHdyaXRlIHRvIHBvc2l0aW9uQnVmZmVyIGJlY2F1c2VcclxuXHRcdFx0Ly8gaXRzIHRoZSBsYXN0IHRoaW5nIHdlIGJvdW5kIG9uIHRoZSBBUlJBWV9CVUZGRVJcclxuXHRcdFx0Ly8gYmluZCBwb2ludFxyXG5cdFx0XHRzZXRSZWN0YW5nbGUoXHJcblx0XHRcdFx0Z2wsIHJhbmRvbUludCgzMDApLCByYW5kb21JbnQoMzAwKSwgcmFuZG9tSW50KDMwMCksIHJhbmRvbUludCgzMDApKTtcclxuXHJcblx0XHRcdC8vIFNldCBhIHJhbmRvbSBjb2xvci5cclxuXHRcdFx0dmFyIGNvbG9yVW5pZm9ybUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV9jb2xvclwiKTtcclxuXHRcdFx0Z2wudW5pZm9ybTRmKGNvbG9yVW5pZm9ybUxvY2F0aW9uLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxKTtcclxuXHJcblx0XHRcdC8vIERyYXcgdGhlIHJlY3RhbmdsZS5cclxuXHRcdFx0dmFyIHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVM7XHJcblx0XHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cdFx0XHR2YXIgY291bnQgPSA2O1xyXG5cdFx0XHRnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIG9mZnNldCwgY291bnQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwidmVydGV4LXNoYWRlci0yZFwiIHR5cGU9XCJub3Rqc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcblx0XHRcdFx0XHRfX2h0bWw6IGBcclxuXHRcdFx0XHRcdC8vIEF0dHJpYnV0ZeuKlCDrsoTtjbzsl5DshJwg642w7J207YSw66W8IOuwm+ydjFxyXG4gIFx0XHRcdFx0XHQvLyDrqqjrk6Agc2hhZGVy64qUIG1haW4g7ZWo7IiY66W8IOqwgOynkFxyXG4gIFx0XHRcdFx0XHRhdHRyaWJ1dGUgdmVjMiBhX3Bvc2l0aW9uO1xyXG4gIFx0XHRcdFx0XHR1bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG4gIFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8g7JyE7LmY66W8IO2UveyFgOyXkOyEnCAwLjDqs7wgMS4w7IKs7J2066GcIOuzgO2ZmFxyXG4gICAgXHRcdFx0XHRcdHZlYzIgemVyb1RvT25lID0gYV9wb3NpdGlvbiAvIHVfcmVzb2x1dGlvbjtcclxuIFxyXG5cdFx0XHRcdFx0XHQvLyAwLT4x7JeQ7IScIDAtPjLroZwg67OA7ZmYXHJcblx0XHRcdFx0XHRcdHZlYzIgemVyb1RvVHdvID0gemVyb1RvT25lICogMi4wO1xyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHQvLyAwLT4y7JeQ7IScIC0xLT4rMeuhnCDrs4DtmZggKGNsaXAgc3BhY2UpXHJcblx0XHRcdFx0XHRcdHZlYzIgY2xpcFNwYWNlID0gemVyb1RvVHdvIC0gMS4wO1xyXG5cdFx0XHRcdFx0IFxyXG4gIFx0XHRcdFx0XHRcdGdsX1Bvc2l0aW9uID0gdmVjNChjbGlwU3BhY2UgKiB2ZWMyKDEsIC0xKSwgMCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YFxyXG5cdFx0XHRcdH19Lz5cclxuXHRcdFx0XHQ8c2NyaXB0IGlkPVwiZnJhZ21lbnQtc2hhZGVyLTJkXCIgdHlwZT1cIm5vdGpzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuXHRcdFx0XHRcdF9faHRtbDogYFxyXG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgc2hhZGVy64qUIOq4sOuzuCDsoJXrsIDrj4Trpbwg6rCA7KeA6rOgIOyeiOyngCDslYrsnLzrr4DroZwg7ZWY64KY66W8IOyEoO2Dne2VtOyVvCDtlanri4jri6QuXHJcblx0XHRcdFx0XHQvLyBtZWRpdW1w7J2AIOyii+ydgCDquLDrs7jqsJLsnLzroZwgXCLspJHqsIQg7KCV67CA64+EXCLrpbwg7J2Y66+47ZWp64uI64ukLlxyXG5cdFx0XHRcdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcblx0XHRcdFx0XHR1bmlmb3JtIHZlYzQgdV9jb2xvcjtcclxuXHRcdFx0XHRcdHZvaWQgbWFpbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gZ2xfRnJhZ0NvbG9y64qUIGZyYWdtZW50IHNoYWRlcuqwgCDshKTsoJXsnYQg64u064u57ZWY64qUIO2KueyImCDrs4DsiJhcclxuXHRcdFx0XHRcdFx0Ly8gV2ViR0zsl5DshJwg7IOJ7IOB7J2AIDDsl5DshJwgMeq5jOyngOyeheuLiOuLpC5cclxuXHRcdFx0XHRcdFx0Z2xfRnJhZ0NvbG9yID0gdV9jb2xvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgXHJcblx0XHRcdFx0fX0vPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdHsvKkNsaXAgc3BhY2Ug7KKM7ZGc64qUIOy6lOuyhOyKpCDtgazquLDsl5Ag7IOB6rSA7JeG7J20IO2VreyDgSAtMeyXkOyEnCArMeq5jOyngOyeheuLiOuLpC4qL31cclxuXHRcdFx0PGNhbnZhcyBpZD17J2MnfS8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZTAxO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9