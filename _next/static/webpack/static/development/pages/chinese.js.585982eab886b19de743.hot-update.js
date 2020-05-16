webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./data/wordDB.ts":
/*!************************!*\
  !*** ./data/wordDB.ts ***!
  \************************/
/*! exports provided: wordDB, getRandomWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordDB\", function() { return wordDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomWord\", function() { return getRandomWord; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar Word = /*#__PURE__*/function () {\n  function Word(chineseWord, englishWord, pinyinWithoutTone, tone) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Word);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"chineseWord\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"englishWord\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"pinyinWithoutTone\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"tone\", void 0);\n\n    this.chineseWord = chineseWord;\n    this.englishWord = englishWord;\n    this.pinyinWithoutTone = pinyinWithoutTone;\n    this.tone = tone;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Word, [{\n    key: \"pinyinWithToneMarks\",\n    get: function get() {\n      // TODO: Find the vowel in the pinyin and replace it with the correct diacritic!\n      return \"\";\n    }\n  }]);\n\n  return Word;\n}(); // When a syllable contains two or more vowels, the tone mark is usually placed above vowels in the order of a，o，e，i，u，ü. Example: hǎo，xiè，ɡuān\n\n\nvar vowels = [\"\\u0101\", \"\\u0101\", \"\\u0101\", \"\\u0101\"\n/* */\n, \"e\", \"e\", \"e\", \"e\"\n/* */\n, \"\\u012B\", \"\\xED\", \"\\u01D0\", \"\\xEC\"\n/* */\n, \"o\", \"o\", \"o\", \"o\"\n/* */\n, \"\\xF9\", \"\\xF9\", \"\\xF9\", \"\\xF9\"\n/* */\n, \"\\u01DA\", \"\\u01DA\", \"\\u01DA\", \"\\u01DA\"\n/* */\n];\nvar wordDB = {\n  0: [new Word(\"\\u4E00\", \"one\", \"yi\", 1), new Word(\"\\u4E8C\", \"two\", \"er\", 4), new Word(\"\\u4E09\", \"three\", \"san\", 1), new Word(\"\\u56DB\", \"four\", \"si\", 4), new Word(\"\\u4E94\", \"five\", \"wu\", 3), new Word(\"\\u516D\", \"six\", \"liu\", 4), new Word(\"\\u4E03\", \"seven\", \"qi\", 1), new Word(\"\\u516B\", \"eight\", \"ba\", 1), new Word(\"\\u4E5D\", \"nine\", \"jiu\", 3), new Word(\"\\u5341\", \"ten\", \"shi\", 2)],\n  1: [new Word(\"\\u5E74\", \"year\", \"nian\", 2)]\n};\n\nfunction getRandomWord(level) {\n  var words = wordDB[level];\n  var randomIndex = Math.floor(Math.random() * words.length);\n  return words[randomIndex];\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3dvcmREQi50cz9kYjViIl0sIm5hbWVzIjpbIldvcmQiLCJjaGluZXNlV29yZCIsImVuZ2xpc2hXb3JkIiwicGlueWluV2l0aG91dFRvbmUiLCJ0b25lIiwidm93ZWxzIiwid29yZERCIiwiZ2V0UmFuZG9tV29yZCIsImxldmVsIiwid29yZHMiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJO0FBTUYsZ0JBQVlDLFdBQVosRUFBaUNDLFdBQWpDLEVBQXNEQyxpQkFBdEQsRUFBaUZDLElBQWpGLEVBQStGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzNGLFNBQUtILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7d0JBRWlDO0FBQzlCO0FBQ0EsYUFBTyxFQUFQO0FBQ0g7Ozs7S0FHTDs7O0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBSVA7QUFKTztBQVFQO0FBUk87QUFZUDtBQVpPO0FBZ0JQO0FBaEJPO0FBb0JQO0FBcEJPO0FBd0JQO0FBeEJPLENBQWY7QUEyQkEsSUFBTUMsTUFBTSxHQUFHO0FBQ1gsS0FBRyxDQUNDLElBQUlOLElBQUosd0JBQTJCLENBQTNCLENBREQsRUFFQyxJQUFJQSxJQUFKLHdCQUEyQixDQUEzQixDQUZELEVBR0MsSUFBSUEsSUFBSiwyQkFBOEIsQ0FBOUIsQ0FIRCxFQUlDLElBQUlBLElBQUoseUJBQTRCLENBQTVCLENBSkQsRUFLQyxJQUFJQSxJQUFKLHlCQUE0QixDQUE1QixDQUxELEVBTUMsSUFBSUEsSUFBSix5QkFBNEIsQ0FBNUIsQ0FORCxFQU9DLElBQUlBLElBQUosMEJBQTZCLENBQTdCLENBUEQsRUFRQyxJQUFJQSxJQUFKLDBCQUE2QixDQUE3QixDQVJELEVBU0MsSUFBSUEsSUFBSiwwQkFBNkIsQ0FBN0IsQ0FURCxFQVVDLElBQUlBLElBQUoseUJBQTRCLENBQTVCLENBVkQsQ0FEUTtBQWFYLEtBQUcsQ0FBQyxJQUFJQSxJQUFKLDJCQUE4QixDQUE5QixDQUFEO0FBYlEsQ0FBZjs7QUFnQkEsU0FBU08sYUFBVCxDQUF1QkMsS0FBdkIsRUFBc0M7QUFDbEMsTUFBSUMsS0FBYSxHQUFHSCxNQUFNLENBQUNFLEtBQUQsQ0FBMUI7QUFDQSxNQUFJRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLEtBQUssQ0FBQ0ssTUFBakMsQ0FBbEI7QUFDQSxTQUFPTCxLQUFLLENBQUNDLFdBQUQsQ0FBWjtBQUNIOztBQUVEIiwiZmlsZSI6Ii4vZGF0YS93b3JkREIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXb3JkIHtcbiAgICBjaGluZXNlV29yZDogc3RyaW5nO1xuICAgIGVuZ2xpc2hXb3JkOiBzdHJpbmc7XG4gICAgcGlueWluV2l0aG91dFRvbmU6IHN0cmluZztcbiAgICB0b25lOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjaGluZXNlV29yZDogc3RyaW5nLCBlbmdsaXNoV29yZDogc3RyaW5nLCBwaW55aW5XaXRob3V0VG9uZTogc3RyaW5nLCB0b25lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jaGluZXNlV29yZCA9IGNoaW5lc2VXb3JkO1xuICAgICAgICB0aGlzLmVuZ2xpc2hXb3JkID0gZW5nbGlzaFdvcmQ7XG4gICAgICAgIHRoaXMucGlueWluV2l0aG91dFRvbmUgPSBwaW55aW5XaXRob3V0VG9uZTtcbiAgICAgICAgdGhpcy50b25lID0gdG9uZTtcbiAgICB9XG5cbiAgICBnZXQgcGlueWluV2l0aFRvbmVNYXJrcygpOiBzdHJpbmcge1xuICAgICAgICAvLyBUT0RPOiBGaW5kIHRoZSB2b3dlbCBpbiB0aGUgcGlueWluIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIGNvcnJlY3QgZGlhY3JpdGljIVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5cbi8vIFdoZW4gYSBzeWxsYWJsZSBjb250YWlucyB0d28gb3IgbW9yZSB2b3dlbHMsIHRoZSB0b25lIG1hcmsgaXMgdXN1YWxseSBwbGFjZWQgYWJvdmUgdm93ZWxzIGluIHRoZSBvcmRlciBvZiBh77yMb++8jGXvvIxp77yMde+8jMO8LiBFeGFtcGxlOiBox45v77yMeGnDqO+8jMmhdcSBblxuXG5jb25zdCB2b3dlbHMgPSBbXG4gICAgYMSBYCxcbiAgICBgxIFgLFxuICAgIGDEgWAsXG4gICAgYMSBYCAvKiAqLyxcbiAgICBgZWAsXG4gICAgYGVgLFxuICAgIGBlYCxcbiAgICBgZWAgLyogKi8sXG4gICAgYMSrYCxcbiAgICBgw61gLFxuICAgIGDHkGAsXG4gICAgYMOsYCAvKiAqLyxcbiAgICBgb2AsXG4gICAgYG9gLFxuICAgIGBvYCxcbiAgICBgb2AgLyogKi8sXG4gICAgYMO5YCxcbiAgICBgw7lgLFxuICAgIGDDuWAsXG4gICAgYMO5YCAvKiAqLyxcbiAgICBgx5pgLFxuICAgIGDHmmAsXG4gICAgYMeaYCxcbiAgICBgx5pgIC8qICovLFxuXTtcblxuY29uc3Qgd29yZERCID0ge1xuICAgIDA6IFtcbiAgICAgICAgbmV3IFdvcmQoYOS4gGAsIGBvbmVgLCBgeWlgLCAxKSxcbiAgICAgICAgbmV3IFdvcmQoYOS6jGAsIGB0d29gLCBgZXJgLCA0KSxcbiAgICAgICAgbmV3IFdvcmQoYOS4iWAsIGB0aHJlZWAsIGBzYW5gLCAxKSxcbiAgICAgICAgbmV3IFdvcmQoYOWbm2AsIGBmb3VyYCwgYHNpYCwgNCksXG4gICAgICAgIG5ldyBXb3JkKGDkupRgLCBgZml2ZWAsIGB3dWAsIDMpLFxuICAgICAgICBuZXcgV29yZChg5YWtYCwgYHNpeGAsIGBsaXVgLCA0KSxcbiAgICAgICAgbmV3IFdvcmQoYOS4g2AsIGBzZXZlbmAsIGBxaWAsIDEpLFxuICAgICAgICBuZXcgV29yZChg5YWrYCwgYGVpZ2h0YCwgYGJhYCwgMSksXG4gICAgICAgIG5ldyBXb3JkKGDkuZ1gLCBgbmluZWAsIGBqaXVgLCAzKSxcbiAgICAgICAgbmV3IFdvcmQoYOWNgWAsIGB0ZW5gLCBgc2hpYCwgMiksXG4gICAgXSxcbiAgICAxOiBbbmV3IFdvcmQoYOW5tGAsIGB5ZWFyYCwgYG5pYW5gLCAyKV0sXG59O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21Xb3JkKGxldmVsOiBudW1iZXIpIHtcbiAgICBsZXQgd29yZHM6IFtXb3JkXSA9IHdvcmREQltsZXZlbF07XG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKTtcbiAgICByZXR1cm4gd29yZHNbcmFuZG9tSW5kZXhdO1xufVxuXG5leHBvcnQgeyB3b3JkREIsIGdldFJhbmRvbVdvcmQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/wordDB.ts\n");

/***/ })

})