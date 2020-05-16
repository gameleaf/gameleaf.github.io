webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./pages/chinese/index.tsx":
/*!*********************************!*\
  !*** ./pages/chinese/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/chinese/chineseFonts */ \"./styles/chinese/chineseFonts.ts\");\n/* harmony import */ var data_wordDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/wordDB */ \"./data/wordDB.ts\");\n\n\nvar _jsxFileName = \"/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar words = new Array();\n\nfor (var i = 0; i < 8; i++) {\n  words.push(data_wordDB__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getRandomWord());\n}\n\nvar keysPressed = new Set(); // key     = 3,      Meta\n// keyCode = 51,     91\n// code    = Digit3, MetaLeft\n\nfunction downHandler(e) {\n  console.log(e);\n  keysPressed.add(e.code);\n\n  _setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n\n}\n\nfunction upHandler(e) {\n  keysPressed[\"delete\"](e.code);\n\n  _setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n\n}\n\nvar _setKeysPressedString;\n\nfunction Page() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(\"MOUNT\");\n    window.addEventListener(\"keydown\", downHandler);\n    window.addEventListener(\"keyup\", upHandler); // Remove event listeners on cleanup\n\n    return function () {\n      console.log(\"UNMOUNT\");\n      window.removeEventListener(\"keydown\", downHandler);\n      window.removeEventListener(\"keyup\", upHandler);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      keysPressedString = _useState[0],\n      setKeysPressedString = _useState[1];\n\n  _setKeysPressedString = setKeysPressedString;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"script\", {\n    src: \"/s/j/load-font-sans.js\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"grid\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, words[0].chinese)), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  }, \"\\u5929\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  }, \"\\u4E0A\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, \"\\u5973\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, \"\\uD83D\\uDC1F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, \"\\u5C0F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, \"\\u5927\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 21\n    }\n  }, \"\\u9C7C\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, \"\\u6709\"))), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"preload\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, words[0].chinese), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"3685749120\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"keys-pressed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Keys Pressed: [\", keysPressedString, \"]\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"3685749120\",\n    dynamic: [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans],\n    __self: this\n  }, \".grid.__jsx-style-dynamic-selector{display:grid;width:100vmin;height:100vmin;margin:0 auto;grid-gap:5%;gap:5%;grid-template-areas: \\\"a b c\\\" \\\"d e f\\\" \\\"g h i\\\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.item.__jsx-style-dynamic-selector{background:rgba(0,0,0,0.07);padding-top:100%;position:relative;cursor:pointer;}.text.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);\".concat(styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans, \" font-size:20vmin;}@media only screen and (min-width:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:0;}}@media only screen and (min-height:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:calc(50vmax - 50vmin);}}.keys-pressed.__jsx-style-dynamic-selector{position:absolute;top:10px;right:10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb255ZWgvQ29kZS9HL1dlYi9nYW1lbGVhZi5naXRodWIuaW8uc3JjL3BhZ2VzL2NoaW5lc2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Gd0IsQUFHa0MsQUFja0IsQUFRYixBQVdELEFBT29CLEFBS25CLGFBNUNKLEFBaUNkLEtBWFEsQUF1QkMsUUF0QkEsQ0F0Qk0sQUE2Q0osQ0EvQk0sS0F5QmpCLEVBaEJnQyxHQXVCcEMsSUE3Q2tCLEdBY0ksV0FiTixPQWNHLEtBYlIsT0FJSSxHQVVmLDBDQVRxQixvQkFpQkEsOENBQ3JCLG1CQWpCQSIsImZpbGUiOiIvVXNlcnMvcm9ueWVoL0NvZGUvRy9XZWIvZ2FtZWxlYWYuZ2l0aHViLmlvLnNyYy9wYWdlcy9jaGluZXNlL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInN0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgY2hpbmVzZUZvbnRzIH0gZnJvbSBcInN0eWxlcy9jaGluZXNlL2NoaW5lc2VGb250c1wiO1xuaW1wb3J0IFdvcmREQiBmcm9tIFwiZGF0YS93b3JkREJcIjtcblxubGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XG5mb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIHdvcmRzLnB1c2goV29yZERCLmdldFJhbmRvbVdvcmQoKSk7XG59XG5cbmxldCBrZXlzUHJlc3NlZCA9IG5ldyBTZXQoKTtcblxuLy8ga2V5ICAgICA9IDMsICAgICAgTWV0YVxuLy8ga2V5Q29kZSA9IDUxLCAgICAgOTFcbi8vIGNvZGUgICAgPSBEaWdpdDMsIE1ldGFMZWZ0XG5mdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAga2V5c1ByZXNzZWQuYWRkKGUuY29kZSk7XG4gICAgX3NldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG59XG5cbmZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga2V5c1ByZXNzZWQuZGVsZXRlKGUuY29kZSk7XG4gICAgX3NldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG59XG5cbmxldCBfc2V0S2V5c1ByZXNzZWRTdHJpbmc6RnVuY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNT1VOVFwiKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVTk1PVU5UXCIpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICAgIGNvbnN0IFtrZXlzUHJlc3NlZFN0cmluZywgc2V0S2V5c1ByZXNzZWRTdHJpbmddID0gdXNlU3RhdGUoXCJcIik7XG4gICAgX3NldEtleXNQcmVzc2VkU3RyaW5nID0gc2V0S2V5c1ByZXNzZWRTdHJpbmc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvcy9qL2xvYWQtZm9udC1zYW5zLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3dvcmRzWzBdLmNoaW5lc2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkqTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7kuIo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aWzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPvCfkJ88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5bCPPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWkpzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7psbw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5pyJPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZFwiPnt3b3Jkc1swXS5jaGluZXNlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlzLXByZXNzZWRcIj5LZXlzIFByZXNzZWQ6IFt7a2V5c1ByZXNzZWRTdHJpbmd9XTwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZtaW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdm1pbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYSBiIGNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkIGUgZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBcImcgaCBpXCI7XG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICAgICAgICAgICAgICAgICAgLyogVGhlIG5leHQgdHdvIGxpbmVzIG1ha2Ugc3VyZSB0aGUgLml0ZW0gaXMgc3F1YXJlLiAqL1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAke2NoaW5lc2VGb250cy5jc3NGb3JTYW5zfVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwdm1pbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGlzIHF1ZXJ5IHRyaWdnZXJzIHdoZW4gdGhlIHdlYnBhZ2UgaXMgV0lERS4gKi9cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFRoaXMgcXVlcnkgdHJpZ2dlcnMgd2hlbiB0aGUgd2VicGFnZSBpcyBUQUxMLiAqL1xuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEwMHZtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg1MHZtYXggLSA1MHZtaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmtleXMtcHJlc3NlZCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJlbG9hZCB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl19 */\\n/*@ sourceURL=/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx */\")));\n}\n\n_s(Page, \"XBjuasOWMWsQ6vd0NiKdVNURyIY=\");\n\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGluZXNlL2luZGV4LnRzeD8yMjIyIl0sIm5hbWVzIjpbIndvcmRzIiwiQXJyYXkiLCJpIiwicHVzaCIsIldvcmREQiIsImdldFJhbmRvbVdvcmQiLCJrZXlzUHJlc3NlZCIsIlNldCIsImRvd25IYW5kbGVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJjb2RlIiwiX3NldEtleXNQcmVzc2VkU3RyaW5nIiwiam9pbiIsInVwSGFuZGxlciIsIlBhZ2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVN0YXRlIiwia2V5c1ByZXNzZWRTdHJpbmciLCJzZXRLZXlzUHJlc3NlZFN0cmluZyIsImNoaW5lc2VGb250cyIsImNzc0ZvclNhbnMiLCJjaGluZXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQVo7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCRixPQUFLLENBQUNHLElBQU4sQ0FBV0MsbURBQU0sQ0FBQ0MsYUFBUCxFQUFYO0FBQ0g7O0FBRUQsSUFBSUMsV0FBVyxHQUFHLElBQUlDLEdBQUosRUFBbEIsQyxDQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxXQUFULENBQXFCQyxDQUFyQixFQUF3QjtBQUNwQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQUgsYUFBVyxDQUFDTSxHQUFaLENBQWdCSCxDQUFDLENBQUNJLElBQWxCOztBQUNBQyx1QkFBcUIsQ0FBQyw2RkFBSVIsV0FBSixFQUFpQlMsSUFBakIsQ0FBc0IsR0FBdEIsQ0FBRCxDQUFyQixDQUhvQixDQUcrQjs7QUFDdEQ7O0FBRUQsU0FBU0MsU0FBVCxD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QTtBQUFBO0FBQUE7QUFBQSx3QkFBOENILGlCQUE5QyxNQWxDSjtBQUFBO0FBQUEsY0ErRGNFLHdFQUFZLENBQUNDLFVBL0QzQjtBQUFBO0FBQUEsdWlCQStEY0Qsd0VBQVksQ0FBQ0MsVUEvRDNCLDBwT0FESjtBQTZGSDs7R0E5R3VCVCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvY2hpbmVzZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCJzdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IGNoaW5lc2VGb250cyB9IGZyb20gXCJzdHlsZXMvY2hpbmVzZS9jaGluZXNlRm9udHNcIjtcbmltcG9ydCBXb3JkREIgZnJvbSBcImRhdGEvd29yZERCXCI7XG5cbmxldCB3b3JkcyA9IG5ldyBBcnJheSgpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICB3b3Jkcy5wdXNoKFdvcmREQi5nZXRSYW5kb21Xb3JkKCkpO1xufVxuXG5sZXQga2V5c1ByZXNzZWQgPSBuZXcgU2V0KCk7XG5cbi8vIGtleSAgICAgPSAzLCAgICAgIE1ldGFcbi8vIGtleUNvZGUgPSA1MSwgICAgIDkxXG4vLyBjb2RlICAgID0gRGlnaXQzLCBNZXRhTGVmdFxuZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGtleXNQcmVzc2VkLmFkZChlLmNvZGUpO1xuICAgIF9zZXRLZXlzUHJlc3NlZFN0cmluZyhbLi4ua2V5c1ByZXNzZWRdLmpvaW4oXCIsXCIpKTsgLy8gU3ByZWFkIE9wZXJhdG9yIVxufVxuXG5mdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGtleXNQcmVzc2VkLmRlbGV0ZShlLmNvZGUpO1xuICAgIF9zZXRLZXlzUHJlc3NlZFN0cmluZyhbLi4ua2V5c1ByZXNzZWRdLmpvaW4oXCIsXCIpKTsgLy8gU3ByZWFkIE9wZXJhdG9yIVxufVxuXG5sZXQgX3NldEtleXNQcmVzc2VkU3RyaW5nOkZ1bmN0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTU9VTlRcIik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVU5NT1VOVFwiKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgICBjb25zdCBba2V5c1ByZXNzZWRTdHJpbmcsIHNldEtleXNQcmVzc2VkU3RyaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIF9zZXRLZXlzUHJlc3NlZFN0cmluZyA9IHNldEtleXNQcmVzc2VkU3RyaW5nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL3Mvai9sb2FkLWZvbnQtc2Fucy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPnt3b3Jkc1swXS5jaGluZXNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lpKk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5LiKPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWlszwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7wn5CfPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuWwjzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lpKc8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+6bG8PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuaciTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWxvYWRcIj57d29yZHNbMF0uY2hpbmVzZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5cy1wcmVzc2VkXCI+S2V5cyBQcmVzc2VkOiBbe2tleXNQcmVzc2VkU3RyaW5nfV08L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2bWluO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZtaW47XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImEgYiBjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZCBlIGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnIGggaVwiO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgICAgICAgICAgICAgIC8qIFRoZSBuZXh0IHR3byBsaW5lcyBtYWtlIHN1cmUgdGhlIC5pdGVtIGlzIHNxdWFyZS4gKi9cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgJHtjaGluZXNlRm9udHMuY3NzRm9yU2Fuc31cbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHZtaW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogVGhpcyBxdWVyeSB0cmlnZ2VycyB3aGVuIHRoZSB3ZWJwYWdlIGlzIFdJREUuICovXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDB2bWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGlzIHF1ZXJ5IHRyaWdnZXJzIHdoZW4gdGhlIHdlYnBhZ2UgaXMgVEFMTC4gKi9cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMDB2bWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoNTB2bWF4IC0gNTB2bWluKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5rZXlzLXByZXNzZWQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByZWxvYWQge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chinese/index.tsx\n");

/***/ })

})