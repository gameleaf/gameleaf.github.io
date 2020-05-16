webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./pages/chinese/index.tsx":
/*!*********************************!*\
  !*** ./pages/chinese/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/chinese/chineseFonts */ \"./styles/chinese/chineseFonts.ts\");\n/* harmony import */ var data_wordDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/wordDB */ \"./data/wordDB.ts\");\n\n\nvar _jsxFileName = \"/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction Page() {\n  _s();\n\n  var keysPressed = new Set();\n  var words = new Array();\n\n  for (var i = 0; i < 8; i++) {\n    words.push(data_wordDB__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getRandomWord());\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"keydown\", downHandler);\n    window.addEventListener(\"keyup\", upHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener(\"keydown\", downHandler);\n      window.removeEventListener(\"keyup\", upHandler);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n  // key     = 3,      Meta\n  // keyCode = 51,     91\n  // code    = Digit3, MetaLeft\n\n  function downHandler(e) {\n    console.log(e);\n    keysPressed.add(e.code);\n    setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n  }\n\n  function upHandler(e) {\n    keysPressed[\"delete\"](e.code);\n    setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n  } // Array of keys pressed\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      keysPressedString = _useState[0],\n      setKeysPressedString = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"script\", {\n    src: \"/s/j/load-font-sans.js\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"grid\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, words[0].english)), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, \"\\u5929\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  }, \"\\u4E0A\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  }, \"\\u5973\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \"\\uD83D\\uDC1F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, \"\\u5C0F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, \"\\u5927\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, \"\\u9C7C\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 21\n    }\n  }, \"\\u6709\"))), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"preload\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1477709857\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"keys-pressed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Keys Pressed: [\", keysPressedString, \"]\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"1477709857\",\n    dynamic: [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans],\n    __self: this\n  }, \".grid.__jsx-style-dynamic-selector{display:grid;width:100vmin;height:100vmin;margin:0 auto;grid-gap:5%;gap:5%;grid-template-areas: \\\"a b c\\\" \\\"d e f\\\" \\\"g h i\\\";}.item.__jsx-style-dynamic-selector{background:rgba(0,0,0,0.07);padding-top:100%;position:relative;}.text.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);\".concat(styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans, \" font-size:20vmin;}@media only screen and (min-width:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:0;}}@media only screen and (min-height:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:calc(50vmax - 50vmin);}}.keys-pressed.__jsx-style-dynamic-selector{position:absolute;top:10px;right:10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb255ZWgvQ29kZS9HL1dlYi9nYW1lbGVhZi5naXRodWIuaW8uc3JjL3BhZ2VzL2NoaW5lc2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGd0IsQUFHa0MsQUFha0IsQUFPYixBQVdELEFBT29CLEFBS25CLGFBMUNKLEFBK0JkLEtBWFEsQUF1QkMsUUF0QkEsQ0FwQk0sQUEyQ0osQ0E5Qk0sS0F3QmpCLEVBaEJnQyxHQXVCcEMsSUEzQ2tCLEdBYUksV0FaTixPQWFoQixLQVpXLE9BSUksNkNBQ2Ysb0JBZXFCLDhDQUNyQiIsImZpbGUiOiIvVXNlcnMvcm9ueWVoL0NvZGUvRy9XZWIvZ2FtZWxlYWYuZ2l0aHViLmlvLnNyYy9wYWdlcy9jaGluZXNlL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInN0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgY2hpbmVzZUZvbnRzIH0gZnJvbSBcInN0eWxlcy9jaGluZXNlL2NoaW5lc2VGb250c1wiO1xuaW1wb3J0IFdvcmREQiBmcm9tIFwiZGF0YS93b3JkREJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgICBsZXQga2V5c1ByZXNzZWQgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8ODsgaSsrKSB7XG4gICAgICAgIHdvcmRzLnB1c2goV29yZERCLmdldFJhbmRvbVdvcmQoKSk7XG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuXG4gICAgLy8ga2V5ICAgICA9IDMsICAgICAgTWV0YVxuICAgIC8vIGtleUNvZGUgPSA1MSwgICAgIDkxXG4gICAgLy8gY29kZSAgICA9IERpZ2l0MywgTWV0YUxlZnRcbiAgICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBrZXlzUHJlc3NlZC5hZGQoZS5jb2RlKTtcbiAgICAgICAgc2V0S2V5c1ByZXNzZWRTdHJpbmcoWy4uLmtleXNQcmVzc2VkXS5qb2luKFwiLFwiKSk7IC8vIFNwcmVhZCBPcGVyYXRvciFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgICAgICBrZXlzUHJlc3NlZC5kZWxldGUoZS5jb2RlKTtcbiAgICAgICAgc2V0S2V5c1ByZXNzZWRTdHJpbmcoWy4uLmtleXNQcmVzc2VkXS5qb2luKFwiLFwiKSk7IC8vIFNwcmVhZCBPcGVyYXRvciFcbiAgICB9XG5cbiAgICAvLyBBcnJheSBvZiBrZXlzIHByZXNzZWRcbiAgICBjb25zdCBba2V5c1ByZXNzZWRTdHJpbmcsIHNldEtleXNQcmVzc2VkU3RyaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3Mvai9sb2FkLWZvbnQtc2Fucy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3dvcmRzWzBdLmVuZ2xpc2h9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkqTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7kuIo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aWzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPvCfkJ88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5bCPPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkpzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7psbw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5pyJPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlzLXByZXNzZWRcIj5LZXlzIFByZXNzZWQ6IFt7a2V5c1ByZXNzZWRTdHJpbmd9XTwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZtaW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdm1pbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYSBiIGNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkIGUgZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBcImcgaCBpXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgICAgICAgICAvKiBUaGUgbmV4dCB0d28gbGluZXMgbWFrZSBzdXJlIHRoZSAuaXRlbSBpcyBzcXVhcmUuICovXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAke2NoaW5lc2VGb250cy5jc3NGb3JTYW5zfVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwdm1pbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGlzIHF1ZXJ5IHRyaWdnZXJzIHdoZW4gdGhlIHdlYnBhZ2UgaXMgV0lERS4gKi9cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFRoaXMgcXVlcnkgdHJpZ2dlcnMgd2hlbiB0aGUgd2VicGFnZSBpcyBUQUxMLiAqL1xuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg1MHZtYXggLSA1MHZtaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmtleXMtcHJlc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx */\")));\n}\n\n_s(Page, \"XBjuasOWMWsQ6vd0NiKdVNURyIY=\");\n\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGluZXNlL2luZGV4LnRzeD8yMjIyIl0sIm5hbWVzIjpbIlBhZ2UiLCJrZXlzUHJlc3NlZCIsIlNldCIsIndvcmRzIiwiQXJyYXkiLCJpIiwicHVzaCIsIldvcmREQiIsImdldFJhbmRvbVdvcmQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG93bkhhbmRsZXIiLCJ1cEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJjb2RlIiwic2V0S2V5c1ByZXNzZWRTdHJpbmciLCJqb2luIiwidXNlU3RhdGUiLCJrZXlzUHJlc3NlZFN0cmluZyIsImNoaW5lc2VGb250cyIsImNzc0ZvclNhbnMiLCJlbmdsaXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0IsTUFBSUMsV0FBVyxHQUFHLElBQUlDLEdBQUosRUFBbEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFaOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLENBQWhCLEVBQW1CQSxDQUFDLEVBQXBCLEVBQXdCO0FBQ3BCRixTQUFLLENBQUNHLElBQU4sQ0FBV0MsbURBQU0sQ0FBQ0MsYUFBUCxFQUFYO0FBQ0g7O0FBR0RDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DQyxXQUFuQztBQUNBRixVQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDRSxTQUFqQyxFQUZZLENBSVo7O0FBQ0EsV0FBTyxZQUFNO0FBQ1RILFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NGLFdBQXRDO0FBQ0FGLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NE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ZSI6Ii4vcGFnZXMvY2hpbmVzZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJzdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IGNoaW5lc2VGb250cyB9IGZyb20gXCJzdHlsZXMvY2hpbmVzZS9jaGluZXNlRm9udHNcIjtcbmltcG9ydCBXb3JkREIgZnJvbSBcImRhdGEvd29yZERCXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgbGV0IGtleXNQcmVzc2VkID0gbmV3IFNldCgpO1xuICAgIGxldCB3b3JkcyA9IG5ldyBBcnJheSgpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPDg7IGkrKykge1xuICAgICAgICB3b3Jkcy5wdXNoKFdvcmREQi5nZXRSYW5kb21Xb3JkKCkpO1xuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICAgIC8vIGtleSAgICAgPSAzLCAgICAgIE1ldGFcbiAgICAvLyBrZXlDb2RlID0gNTEsICAgICA5MVxuICAgIC8vIGNvZGUgICAgPSBEaWdpdDMsIE1ldGFMZWZ0XG4gICAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAga2V5c1ByZXNzZWQuYWRkKGUuY29kZSk7XG4gICAgICAgIHNldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICAgICAga2V5c1ByZXNzZWQuZGVsZXRlKGUuY29kZSk7XG4gICAgICAgIHNldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG4gICAgfVxuXG4gICAgLy8gQXJyYXkgb2Yga2V5cyBwcmVzc2VkXG4gICAgY29uc3QgW2tleXNQcmVzc2VkU3RyaW5nLCBzZXRLZXlzUHJlc3NlZFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zL2ovbG9hZC1mb250LXNhbnMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPnt3b3Jkc1swXS5lbmdsaXNofTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lpKk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5LiKPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWlszwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7wn5CfPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWwjzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lpKc8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+6bG8PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuaciTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5cy1wcmVzc2VkXCI+S2V5cyBQcmVzc2VkOiBbe2tleXNQcmVzc2VkU3RyaW5nfV08L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2bWluO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZtaW47XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImEgYiBjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZCBlIGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnIGggaVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICAgICAgICAgICAgICAgICAgLyogVGhlIG5leHQgdHdvIGxpbmVzIG1ha2Ugc3VyZSB0aGUgLml0ZW0gaXMgc3F1YXJlLiAqL1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgJHtjaGluZXNlRm9udHMuY3NzRm9yU2Fuc31cbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHZtaW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogVGhpcyBxdWVyeSB0cmlnZ2VycyB3aGVuIHRoZSB3ZWJwYWdlIGlzIFdJREUuICovXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDB2bWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGlzIHF1ZXJ5IHRyaWdnZXJzIHdoZW4gdGhlIHdlYnBhZ2UgaXMgVEFMTC4gKi9cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMDB2bWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoNTB2bWF4IC0gNTB2bWluKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rZXlzLXByZXNzZWQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chinese/index.tsx\n");

/***/ })

})