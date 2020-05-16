webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./pages/chinese/index.tsx":
/*!*********************************!*\
  !*** ./pages/chinese/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/chinese/chineseFonts */ \"./styles/chinese/chineseFonts.ts\");\n/* harmony import */ var data_wordDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/wordDB */ \"./data/wordDB.ts\");\n\n\nvar _jsxFileName = \"/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nfunction Page() {\n  _s();\n\n  var keysPressed = new Set();\n  var words = new Array();\n\n  for (var i = 0; i < 8; i++) {\n    words.push(data_wordDB__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getRandomWord());\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"keydown\", downHandler);\n    window.addEventListener(\"keyup\", upHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener(\"keydown\", downHandler);\n      window.removeEventListener(\"keyup\", upHandler);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n  // key     = 3,      Meta\n  // keyCode = 51,     91\n  // code    = Digit3, MetaLeft\n\n  function downHandler(e) {\n    console.log(e);\n    keysPressed.add(e.code);\n    setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n  }\n\n  function upHandler(e) {\n    keysPressed[\"delete\"](e.code);\n    setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n  } // Array of keys pressed\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      keysPressedString = _useState[0],\n      setKeysPressedString = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"script\", {\n    src: \"/s/j/load-font-sans.js\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"grid\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, words[0].chinese)), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }, \"\\u5929\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 21\n    }\n  }, \"\\u4E0A\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }\n  }, \"\\u5973\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }, \"\\uD83D\\uDC1F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, \"\\u5C0F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 21\n    }\n  }, \"\\u5927\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 21\n    }\n  }, \"\\u9C7C\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 21\n    }\n  }, \"\\u6709\"))), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"preload\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, words[0].chinese), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3740730607\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"keys-pressed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"Keys Pressed: [\", keysPressedString, \"]\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"3740730607\",\n    dynamic: [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans],\n    __self: this\n  }, \".grid.__jsx-style-dynamic-selector{display:grid;width:100vmin;height:100vmin;margin:0 auto;grid-gap:5%;gap:5%;grid-template-areas: \\\"a b c\\\" \\\"d e f\\\" \\\"g h i\\\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.item.__jsx-style-dynamic-selector{background:rgba(0,0,0,0.07);padding-top:100%;position:relative;cursor:pointer;}.text.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);\".concat(styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans, \" font-size:20vmin;}@media only screen and (min-width:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:0;}}@media only screen and (min-height:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:calc(50vmax - 50vmin);}}.keys-pressed.__jsx-style-dynamic-selector{position:absolute;top:10px;right:10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb255ZWgvQ29kZS9HL1dlYi9nYW1lbGVhZi5naXRodWIuaW8uc3JjL3BhZ2VzL2NoaW5lc2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFd0IsQUFHa0MsQUFja0IsQUFRYixBQVdELEFBT29CLEFBS25CLGFBNUNKLEFBaUNkLEtBWFEsQUF1QkMsUUF0QkEsQ0F0Qk0sQUE2Q0osQ0EvQk0sS0F5QmpCLEVBaEJnQyxHQXVCcEMsSUE3Q2tCLEdBY0ksV0FiTixPQWNHLEtBYlIsT0FJSSxHQVVmLDBDQVRxQixvQkFpQkEsOENBQ3JCLG1CQWpCQSIsImZpbGUiOiIvVXNlcnMvcm9ueWVoL0NvZGUvRy9XZWIvZ2FtZWxlYWYuZ2l0aHViLmlvLnNyYy9wYWdlcy9jaGluZXNlL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInN0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgY2hpbmVzZUZvbnRzIH0gZnJvbSBcInN0eWxlcy9jaGluZXNlL2NoaW5lc2VGb250c1wiO1xuaW1wb3J0IFdvcmREQiBmcm9tIFwiZGF0YS93b3JkREJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgICBsZXQga2V5c1ByZXNzZWQgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICB3b3Jkcy5wdXNoKFdvcmREQi5nZXRSYW5kb21Xb3JkKCkpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgICAvLyBrZXkgICAgID0gMywgICAgICBNZXRhXG4gICAgLy8ga2V5Q29kZSA9IDUxLCAgICAgOTFcbiAgICAvLyBjb2RlICAgID0gRGlnaXQzLCBNZXRhTGVmdFxuICAgIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGtleXNQcmVzc2VkLmFkZChlLmNvZGUpO1xuICAgICAgICBzZXRLZXlzUHJlc3NlZFN0cmluZyhbLi4ua2V5c1ByZXNzZWRdLmpvaW4oXCIsXCIpKTsgLy8gU3ByZWFkIE9wZXJhdG9yIVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgIGtleXNQcmVzc2VkLmRlbGV0ZShlLmNvZGUpO1xuICAgICAgICBzZXRLZXlzUHJlc3NlZFN0cmluZyhbLi4ua2V5c1ByZXNzZWRdLmpvaW4oXCIsXCIpKTsgLy8gU3ByZWFkIE9wZXJhdG9yIVxuICAgIH1cblxuICAgIC8vIEFycmF5IG9mIGtleXMgcHJlc3NlZFxuICAgIGNvbnN0IFtrZXlzUHJlc3NlZFN0cmluZywgc2V0S2V5c1ByZXNzZWRTdHJpbmddID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvcy9qL2xvYWQtZm9udC1zYW5zLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3dvcmRzWzBdLmNoaW5lc2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkqTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7kuIo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aWzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPvCfkJ88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5bCPPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkpzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7psbw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5pyJPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZFwiPnt3b3Jkc1swXS5jaGluZXNlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlzLXByZXNzZWRcIj5LZXlzIFByZXNzZWQ6IFt7a2V5c1ByZXNzZWRTdHJpbmd9XTwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZtaW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdm1pbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYSBiIGNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkIGUgZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBcImcgaCBpXCI7XG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICAgICAgICAgICAgICAgICAgLyogVGhlIG5leHQgdHdvIGxpbmVzIG1ha2Ugc3VyZSB0aGUgLml0ZW0gaXMgc3F1YXJlLiAqL1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAke2NoaW5lc2VGb250cy5jc3NGb3JTYW5zfVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwdm1pbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGlzIHF1ZXJ5IHRyaWdnZXJzIHdoZW4gdGhlIHdlYnBhZ2UgaXMgV0lERS4gKi9cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFRoaXMgcXVlcnkgdHJpZ2dlcnMgd2hlbiB0aGUgd2VicGFnZSBpcyBUQUxMLiAqL1xuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg1MHZtYXggLSA1MHZtaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmtleXMtcHJlc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx */\")));\n}\n\n_s(Page, \"XBjuasOWMWsQ6vd0NiKdVNURyIY=\");\n\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGluZXNlL2luZGV4LnRzeD8yMjIyIl0sIm5hbWVzIjpbIlBhZ2UiLCJrZXlzUHJlc3NlZCIsIlNldCIsIndvcmRzIiwiQXJyYXkiLCJpIiwicHVzaCIsIldvcmREQiIsImdldFJhbmRvbVdvcmQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG93bkhhbmRsZXIiLCJ1cEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJjb2RlIiwic2V0S2V5c1ByZXNzZWRTdHJpbmciLCJqb2luIiwidXNlU3RhdGUiLCJrZXlzUHJlc3NlZFN0cmluZyIsImNoaW5lc2VGb250cyIsImNzc0ZvclNhbnMiLCJjaGluZXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDM0IsTUFBSUMsV0FBVyxHQUFHLElBQUlDLEdBQUosRUFBbEI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFaOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QkYsU0FBSyxDQUFDRyxJQUFOLENBQVdDLG1EQUFNLENBQUNDLGFBQVAsRUFBWDtBQUNIOztBQUVEQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ0MsV0FBbkM7QUFDQUYsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0UsU0FBakMsRUFGWSxDQUlaOztBQUNBLFdBQU8sWUFBTTtBQUNUSCxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDRixXQUF0QztBQUNBRixZQUFNLENBQUNJLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9D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QixrZ09BREo7QUEwRkg7O0dBOUh1QnpCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9jaGluZXNlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInN0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgY2hpbmVzZUZvbnRzIH0gZnJvbSBcInN0eWxlcy9jaGluZXNlL2NoaW5lc2VGb250c1wiO1xuaW1wb3J0IFdvcmREQiBmcm9tIFwiZGF0YS93b3JkREJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgICBsZXQga2V5c1ByZXNzZWQgPSBuZXcgU2V0KCk7XG4gICAgbGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICB3b3Jkcy5wdXNoKFdvcmREQi5nZXRSYW5kb21Xb3JkKCkpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgICAvLyBrZXkgICAgID0gMywgICAgICBNZXRhXG4gICAgLy8ga2V5Q29kZSA9IDUxLCAgICAgOTFcbiAgICAvLyBjb2RlICAgID0gRGlnaXQzLCBNZXRhTGVmdFxuICAgIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIGtleXNQcmVzc2VkLmFkZChlLmNvZGUpO1xuICAgICAgICBzZXRLZXlzUHJlc3NlZFN0cmluZyhbLi4ua2V5c1ByZXNzZWRdLmpvaW4oXCIsXCIpKTsgLy8gU3ByZWFkIE9wZXJhdG9yIVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgIGtleXNQcmVzc2VkLmRlbGV0ZShlLmNvZGUpO1xuICAgICAgICBzZXRLZXlzUHJlc3NlZFN0cmluZyhbLi4ua2V5c1ByZXNzZWRdLmpvaW4oXCIsXCIpKTsgLy8gU3ByZWFkIE9wZXJhdG9yIVxuICAgIH1cblxuICAgIC8vIEFycmF5IG9mIGtleXMgcHJlc3NlZFxuICAgIGNvbnN0IFtrZXlzUHJlc3NlZFN0cmluZywgc2V0S2V5c1ByZXNzZWRTdHJpbmddID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvcy9qL2xvYWQtZm9udC1zYW5zLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3dvcmRzWzBdLmNoaW5lc2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkqTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7kuIo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aWzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPvCfkJ88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5bCPPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkpzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7psbw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5pyJPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZFwiPnt3b3Jkc1swXS5jaGluZXNlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlzLXByZXNzZWRcIj5LZXlzIFByZXNzZWQ6IFt7a2V5c1ByZXNzZWRTdHJpbmd9XTwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZtaW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdm1pbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYSBiIGNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkIGUgZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBcImcgaCBpXCI7XG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICAgICAgICAgICAgICAgICAgLyogVGhlIG5leHQgdHdvIGxpbmVzIG1ha2Ugc3VyZSB0aGUgLml0ZW0gaXMgc3F1YXJlLiAqL1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAke2NoaW5lc2VGb250cy5jc3NGb3JTYW5zfVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwdm1pbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGlzIHF1ZXJ5IHRyaWdnZXJzIHdoZW4gdGhlIHdlYnBhZ2UgaXMgV0lERS4gKi9cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFRoaXMgcXVlcnkgdHJpZ2dlcnMgd2hlbiB0aGUgd2VicGFnZSBpcyBUQUxMLiAqL1xuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg1MHZtYXggLSA1MHZtaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmtleXMtcHJlc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chinese/index.tsx\n");

/***/ })

})