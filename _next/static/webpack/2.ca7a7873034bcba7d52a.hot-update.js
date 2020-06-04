webpackHotUpdate(2,{

/***/ "./components/phaser/DrawPolygon.tsx":
/*!*******************************************!*\
  !*** ./components/phaser/DrawPolygon.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction preload() {\n  console.log(\"PRELOAD\");\n}\n\nfunction create() {\n  var data = [0, 20, //\n  84, 20, 84, 0, 120, 50, 84, 100, 84, 80, 0, 80];\n  var p1 = this.add.polygon(200, 200, data, 0xffffff);\n  console.log(\"Create\");\n}\n\nfunction update() {// NOTHING\n}\n\nvar game = null;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var config = {\n      type: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.AUTO,\n      parent: \"__next\",\n      mode: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Scale.FIT,\n      autoCenter: phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Scale.CENTER_BOTH,\n      width: 1000,\n      height: 1000,\n      scene: {\n        preload: preload,\n        create: create,\n        update: update\n      },\n      pixelArt: false\n    };\n    game = new phaser__WEBPACK_IMPORTED_MODULE_2___default.a.Game(config);\n    game.scene.scen;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(\"useEffect\");\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3032397965\",\n    __self: this\n  }, \"html,body{background-color:#101010;margin:0;padding:0;height:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb255ZWgvQ29kZS9HL1dlYi9nYW1lbGVhZi5naXRodWIuaW8uc3JjL2NvbXBvbmVudHMvcGhhc2VyL0RyYXdQb2x5Z29uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RCtCLEFBSThDLHlCQUNoQixTQUNDLFVBQ0UsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL3JvbnllaC9Db2RlL0cvV2ViL2dhbWVsZWFmLmdpdGh1Yi5pby5zcmMvY29tcG9uZW50cy9waGFzZXIvRHJhd1BvbHlnb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5cbmZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJQUkVMT0FEXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgbGV0IGRhdGEgPSBbXG4gICAgICAgIDAsXG4gICAgICAgIDIwLCAvL1xuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgIF07XG4gICAgbGV0IHAxID0gdGhpcy5hZGQucG9seWdvbigyMDAsIDIwMCwgZGF0YSwgMHhmZmZmZmYpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlXCIpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gTk9USElOR1xufVxuXG5sZXQgZ2FtZSA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXG4gICAgICAgICAgICBwYXJlbnQ6IFwiX19uZXh0XCIsXG4gICAgICAgICAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxuICAgICAgICAgICAgYXV0b0NlbnRlcjogUGhhc2VyLlNjYWxlLkNFTlRFUl9CT1RILFxuICAgICAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMDAsXG4gICAgICAgICAgICBzY2VuZToge1xuICAgICAgICAgICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXG4gICAgICAgICAgICAgICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGl4ZWxBcnQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XG4gICAgICAgIGdhbWUuc2NlbmUuc2NlbjtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdFwiKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/components/phaser/DrawPolygon.tsx */\"));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BoYXNlci9EcmF3UG9seWdvbi50c3g/ZWQyZCJdLCJuYW1lcyI6WyJwcmVsb2FkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImRhdGEiLCJwMSIsImFkZCIsInBvbHlnb24iLCJ1cGRhdGUiLCJnYW1lIiwidXNlRWZmZWN0IiwiY29uZmlnIiwidHlwZSIsIlBoYXNlciIsIkFVVE8iLCJwYXJlbnQiLCJtb2RlIiwiU2NhbGUiLCJGSVQiLCJhdXRvQ2VudGVyIiwiQ0VOVEVSX0JPVEgiLCJ3aWR0aCIsImhlaWdodCIsInNjZW5lIiwicGl4ZWxBcnQiLCJHYW1lIiwic2NlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2ZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDSDs7QUFFRCxTQUFTQyxNQUFULEdBQWtCO0FBQ2QsTUFBSUMsSUFBSSxHQUFHLENBQ1AsQ0FETyxFQUVQLEVBRk8sRUFFSDtBQUNKLElBSE8sRUFJUCxFQUpPLEVBS1AsRUFMTyxFQU1QLENBTk8sRUFPUCxHQVBPLEVBUVAsRUFSTyxFQVNQLEVBVE8sRUFVUCxHQVZPLEVBV1AsRUFYTyxFQVlQLEVBWk8sRUFhUCxDQWJPLEVBY1AsRUFkTyxDQUFYO0FBZ0JBLE1BQUlDLEVBQUUsR0FBRyxLQUFLQyxHQUFMLENBQVNDLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkJILElBQTNCLEVBQWlDLFFBQWpDLENBQVQ7QUFDQUgsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNIOztBQUVELFNBQVNNLE1BQVQsR0FBa0IsQ0FDZDtBQUNIOztBQUVELElBQUlDLElBQUksR0FBRyxJQUFYO0FBRWUsMkVBQVk7QUFDdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE1BQU0sR0FBRztBQUNUQyxVQUFJLEVBQUVDLDZDQUFNLENBQUNDLElBREo7QUFFVEMsWUFBTSxFQUFFLFFBRkM7QUFHVEMsVUFBSSxFQUFFSCw2Q0FBTSxDQUFDSSxLQUFQLENBQWFDLEdBSFY7QUFJVEMsZ0JBQVUsRUFBRU4sNkNBQU0sQ0FBQ0ksS0FBUCxDQUFhRyxXQUpoQjtBQUtUQyxXQUFLLEVBQUUsSUFMRTtBQU1UQyxZQUFNLEVBQUUsSUFOQztBQU9UQyxXQUFLLEVBQUU7QUFDSHZCLGVBQU8sRUFBRUEsT0FETjtBQUVIRyxjQUFNLEVBQUVBLE1BRkw7QUFHSEssY0FBTSxFQUFFQTtBQUhMLE9BUEU7QUFZVGdCLGNBQVEsRUFBRTtBQVpELEtBQWI7QUFjQWYsUUFBSSxHQUFHLElBQUlJLDZDQUFNLENBQUNZLElBQVgsQ0FBZ0JkLE1BQWhCLENBQVA7QUFDQUYsUUFBSSxDQUFDYyxLQUFMLENBQVdHLElBQVg7QUFDSCxHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBaEIseURBQVMsQ0FBQyxZQUFNO0FBQ1pULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSCxHQUZRLENBQVQ7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBLHlrRkFESjtBQWVIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9waGFzZXIvRHJhd1BvbHlnb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5cbmZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJQUkVMT0FEXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgbGV0IGRhdGEgPSBbXG4gICAgICAgIDAsXG4gICAgICAgIDIwLCAvL1xuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgIF07XG4gICAgbGV0IHAxID0gdGhpcy5hZGQucG9seWdvbigyMDAsIDIwMCwgZGF0YSwgMHhmZmZmZmYpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlXCIpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gTk9USElOR1xufVxuXG5sZXQgZ2FtZSA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgdHlwZTogUGhhc2VyLkFVVE8sXG4gICAgICAgICAgICBwYXJlbnQ6IFwiX19uZXh0XCIsXG4gICAgICAgICAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxuICAgICAgICAgICAgYXV0b0NlbnRlcjogUGhhc2VyLlNjYWxlLkNFTlRFUl9CT1RILFxuICAgICAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMDAsXG4gICAgICAgICAgICBzY2VuZToge1xuICAgICAgICAgICAgICAgIHByZWxvYWQ6IHByZWxvYWQsXG4gICAgICAgICAgICAgICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGl4ZWxBcnQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7XG4gICAgICAgIGdhbWUuc2NlbmUuc2NlbjtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdFwiKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/phaser/DrawPolygon.tsx\n");

/***/ })

})