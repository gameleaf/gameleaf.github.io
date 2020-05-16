webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./pages/chinese/index.tsx":
/*!*********************************!*\
  !*** ./pages/chinese/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/chinese/chineseFonts */ \"./styles/chinese/chineseFonts.ts\");\n/* harmony import */ var data_wordDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/wordDB */ \"./data/wordDB.ts\");\n\n\nvar _jsxFileName = \"/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar words = new Array();\n\nfor (var i = 0; i < 8; i++) {\n  words.push(data_wordDB__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getRandomWord());\n}\n\nvar keysPressed = new Set();\nfunction Page() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.addEventListener(\"keydown\", downHandler);\n    window.addEventListener(\"keyup\", upHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener(\"keydown\", downHandler);\n      window.removeEventListener(\"keyup\", upHandler);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n  // key     = 3,      Meta\n  // keyCode = 51,     91\n  // code    = Digit3, MetaLeft\n\n  function downHandler(e) {\n    console.log(e);\n    keysPressed.add(e.code);\n    setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n  }\n\n  function upHandler(e) {\n    keysPressed[\"delete\"](e.code);\n    setKeysPressedString(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keysPressed).join(\",\")); // Spread Operator!\n  } // Array of keys pressed\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      keysPressedString = _useState[0],\n      setKeysPressedString = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"script\", {\n    src: \"/s/j/load-font-sans.js\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"grid\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, words[0].chinese)), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, \"\\u5929\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, \"\\u4E0A\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  }, \"\\u5973\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, \"\\uD83D\\uDC1F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 21\n    }\n  }, \"\\u5C0F\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }, \"\\u5927\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }, \"\\u9C7C\")), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }, \"\\u6709\"))), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"preload\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, words[0].chinese), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"4033879458\", [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans]]]) + \" \" + \"keys-pressed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Keys Pressed: [\", keysPressedString, \"]\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"4033879458\",\n    dynamic: [styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans],\n    __self: this\n  }, \".grid.__jsx-style-dynamic-selector{display:grid;width:100vmin;height:100vmin;margin:0 auto;grid-gap:5%;gap:5%;grid-template-areas: \\\"a b c\\\" \\\"d e f\\\" \\\"g h i\\\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.item.__jsx-style-dynamic-selector{background:rgba(0,0,0,0.07);padding-top:100%;position:relative;cursor:pointer;}.text.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);\".concat(styles_chinese_chineseFonts__WEBPACK_IMPORTED_MODULE_4__[\"chineseFonts\"].cssForSans, \" font-size:20vmin;}@media only screen and (min-width:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:0;}}@media only screen and (min-height:100vmax){.grid.__jsx-style-dynamic-selector{margin-top:calc(50vmax - 50vmin);}}.keys-pressed.__jsx-style-dynamic-selector{position:absolute;top:10px;right:10px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb255ZWgvQ29kZS9HL1dlYi9nYW1lbGVhZi5naXRodWIuaW8uc3JjL3BhZ2VzL2NoaW5lc2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGd0IsQUFHa0MsQUFja0IsQUFRYixBQVdELEFBT29CLEFBS25CLGFBNUNKLEFBaUNkLEtBWFEsQUF1QkMsUUF0QkEsQ0F0Qk0sQUE2Q0osQ0EvQk0sS0F5QmpCLEVBaEJnQyxHQXVCcEMsSUE3Q2tCLEdBY0ksV0FiTixPQWNHLEtBYlIsT0FJSSxHQVVmLDBDQVRxQixvQkFpQkEsOENBQ3JCLG1CQWpCQSIsImZpbGUiOiIvVXNlcnMvcm9ueWVoL0NvZGUvRy9XZWIvZ2FtZWxlYWYuZ2l0aHViLmlvLnNyYy9wYWdlcy9jaGluZXNlL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInN0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgY2hpbmVzZUZvbnRzIH0gZnJvbSBcInN0eWxlcy9jaGluZXNlL2NoaW5lc2VGb250c1wiO1xuaW1wb3J0IFdvcmREQiBmcm9tIFwiZGF0YS93b3JkREJcIjtcblxubGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XG5mb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIHdvcmRzLnB1c2goV29yZERCLmdldFJhbmRvbVdvcmQoKSk7XG59XG5cbmxldCBrZXlzUHJlc3NlZCA9IG5ldyBTZXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICAgIC8vIGtleSAgICAgPSAzLCAgICAgIE1ldGFcbiAgICAvLyBrZXlDb2RlID0gNTEsICAgICA5MVxuICAgIC8vIGNvZGUgICAgPSBEaWdpdDMsIE1ldGFMZWZ0XG4gICAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAga2V5c1ByZXNzZWQuYWRkKGUuY29kZSk7XG4gICAgICAgIHNldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICAgICAga2V5c1ByZXNzZWQuZGVsZXRlKGUuY29kZSk7XG4gICAgICAgIHNldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG4gICAgfVxuXG4gICAgLy8gQXJyYXkgb2Yga2V5cyBwcmVzc2VkXG4gICAgY29uc3QgW2tleXNQcmVzc2VkU3RyaW5nLCBzZXRLZXlzUHJlc3NlZFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zL2ovbG9hZC1mb250LXNhbnMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57d29yZHNbMF0uY2hpbmVzZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aSpPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuS4ijwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lpbM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+8J+QnzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lsI88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aSnPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPumxvDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7mnIk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkXCI+e3dvcmRzWzBdLmNoaW5lc2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleXMtcHJlc3NlZFwiPktleXMgUHJlc3NlZDogW3trZXlzUHJlc3NlZFN0cmluZ31dPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdm1pbjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2bWluO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDUlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhIGIgY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBcImQgZSBmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZyBoIGlcIjtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgICAgICAgICAvKiBUaGUgbmV4dCB0d28gbGluZXMgbWFrZSBzdXJlIHRoZSAuaXRlbSBpcyBzcXVhcmUuICovXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICR7Y2hpbmVzZUZvbnRzLmNzc0ZvclNhbnN9XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjB2bWluO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFRoaXMgcXVlcnkgdHJpZ2dlcnMgd2hlbiB0aGUgd2VicGFnZSBpcyBXSURFLiAqL1xuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwdm1heCkge1xuICAgICAgICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogVGhpcyBxdWVyeSB0cmlnZ2VycyB3aGVuIHRoZSB3ZWJwYWdlIGlzIFRBTEwuICovXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTAwdm1heCkge1xuICAgICAgICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDUwdm1heCAtIDUwdm1pbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2V5cy1wcmVzc2VkIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcmVsb2FkIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/ronyeh/Code/G/Web/gameleaf.github.io.src/pages/chinese/index.tsx */\")));\n}\n\n_s(Page, \"XBjuasOWMWsQ6vd0NiKdVNURyIY=\");\n\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGluZXNlL2luZGV4LnRzeD8yMjIyIl0sIm5hbWVzIjpbIndvcmRzIiwiQXJyYXkiLCJpIiwicHVzaCIsIldvcmREQiIsImdldFJhbmRvbVdvcmQiLCJrZXlzUHJlc3NlZCIsIlNldCIsIlBhZ2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG93bkhhbmRsZXIiLCJ1cEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJjb2RlIiwic2V0S2V5c1ByZXNzZWRTdHJpbmciLCJqb2luIiwidXNlU3RhdGUiLCJrZXlzUHJlc3NlZFN0cmluZyIsImNoaW5lc2VGb250cyIsImNzc0ZvclNhbnMiLCJjaGluZXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQUlBLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQVo7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCRixPQUFLLENBQUNHLElBQU4sQ0FBV0MsbURBQU0sQ0FBQ0MsYUFBUCxFQUFYO0FBQ0g7O0FBRUQsSUFBSUMsV0FBVyxHQUFHLElBQUlDLEdBQUosRUFBbEI7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBRzNCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ0MsV0FBbkM7QUFDQUYsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0UsU0FBakMsRUFGWSxDQUlaOztBQUNBLFdBQU8sWUFBTTtBQUNUSCxZQUFNLENBQUNJLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDRixXQUF0QztBQUNBRixZQUFNLENBQUNJLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9D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REo7QUE4Rkg7O0dBN0h1QmpCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9jaGluZXNlL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInN0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgY2hpbmVzZUZvbnRzIH0gZnJvbSBcInN0eWxlcy9jaGluZXNlL2NoaW5lc2VGb250c1wiO1xuaW1wb3J0IFdvcmREQiBmcm9tIFwiZGF0YS93b3JkREJcIjtcblxubGV0IHdvcmRzID0gbmV3IEFycmF5KCk7XG5mb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIHdvcmRzLnB1c2goV29yZERCLmdldFJhbmRvbVdvcmQoKSk7XG59XG5cbmxldCBrZXlzUHJlc3NlZCA9IG5ldyBTZXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICAgIC8vIGtleSAgICAgPSAzLCAgICAgIE1ldGFcbiAgICAvLyBrZXlDb2RlID0gNTEsICAgICA5MVxuICAgIC8vIGNvZGUgICAgPSBEaWdpdDMsIE1ldGFMZWZ0XG4gICAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAga2V5c1ByZXNzZWQuYWRkKGUuY29kZSk7XG4gICAgICAgIHNldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICAgICAga2V5c1ByZXNzZWQuZGVsZXRlKGUuY29kZSk7XG4gICAgICAgIHNldEtleXNQcmVzc2VkU3RyaW5nKFsuLi5rZXlzUHJlc3NlZF0uam9pbihcIixcIikpOyAvLyBTcHJlYWQgT3BlcmF0b3IhXG4gICAgfVxuXG4gICAgLy8gQXJyYXkgb2Yga2V5cyBwcmVzc2VkXG4gICAgY29uc3QgW2tleXNQcmVzc2VkU3RyaW5nLCBzZXRLZXlzUHJlc3NlZFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zL2ovbG9hZC1mb250LXNhbnMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj57d29yZHNbMF0uY2hpbmVzZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aSpPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPuS4ijwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lpbM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+8J+QnzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7lsI88L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+5aSnPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPumxvDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj7mnIk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkXCI+e3dvcmRzWzBdLmNoaW5lc2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleXMtcHJlc3NlZFwiPktleXMgUHJlc3NlZDogW3trZXlzUHJlc3NlZFN0cmluZ31dPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdm1pbjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2bWluO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDUlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhIGIgY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBcImQgZSBmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZyBoIGlcIjtcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgICAgICAgICAvKiBUaGUgbmV4dCB0d28gbGluZXMgbWFrZSBzdXJlIHRoZSAuaXRlbSBpcyBzcXVhcmUuICovXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgICR7Y2hpbmVzZUZvbnRzLmNzc0ZvclNhbnN9XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjB2bWluO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIFRoaXMgcXVlcnkgdHJpZ2dlcnMgd2hlbiB0aGUgd2VicGFnZSBpcyBXSURFLiAqL1xuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwdm1heCkge1xuICAgICAgICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogVGhpcyBxdWVyeSB0cmlnZ2VycyB3aGVuIHRoZSB3ZWJwYWdlIGlzIFRBTEwuICovXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTAwdm1heCkge1xuICAgICAgICAgICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDUwdm1heCAtIDUwdm1pbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2V5cy1wcmVzc2VkIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcmVsb2FkIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chinese/index.tsx\n");

/***/ })

})