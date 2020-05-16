webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./data/wordDB.ts":
/*!************************!*\
  !*** ./data/wordDB.ts ***!
  \************************/
/*! exports provided: wordDB, getRandomWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordDB\", function() { return wordDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomWord\", function() { return getRandomWord; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar Word = /*#__PURE__*/function () {\n  function Word(chineseWord, englishWord, pinyinWithoutTone, tone) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Word);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"chineseWord\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"englishWord\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"pinyinWithoutTone\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"tone\", void 0);\n\n    this.chineseWord = chineseWord;\n    this.englishWord = englishWord;\n    this.pinyinWithoutTone = pinyinWithoutTone;\n    this.tone = tone;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Word, [{\n    key: \"pinyinWithToneMarks\",\n    get: function get() {\n      // TODO: Find the vowel in the pinyin and replace it with the correct diacritic!\n      return \"\";\n    }\n  }]);\n\n  return Word;\n}(); // When a syllable contains two or more vowels, the tone mark is usually placed above vowels in the order of a，o，e，i，u，ü. Example: hǎo，xiè，ɡuān\n// https://en.wikipedia.org/wiki/Pinyin_table\n\n\nvar vowels = [\"\\u0101\", \"\\u0101\", \"\\u0101\", \"\\u0101\"\n/* */\n, \"e\", \"e\", \"e\", \"e\"\n/* */\n, \"\\u012B\", \"\\xED\", \"\\u01D0\", \"\\xEC\"\n/* */\n, \"o\", \"o\", \"o\", \"o\"\n/* */\n, \"\\xF9\", \"\\xF9\", \"\\xF9\", \"\\xF9\"\n/* */\n, \"\\u01DA\", \"\\u01DA\", \"\\u01DA\", \"\\u01DA\"\n/* */\n];\nvar wordDB = {\n  0: [new Word(\"\\u4E00\", \"one\", \"yi\", 1), new Word(\"\\u4E8C\", \"two\", \"er\", 4), new Word(\"\\u4E09\", \"three\", \"san\", 1), new Word(\"\\u56DB\", \"four\", \"si\", 4), new Word(\"\\u4E94\", \"five\", \"wu\", 3), new Word(\"\\u516D\", \"six\", \"liu\", 4), new Word(\"\\u4E03\", \"seven\", \"qi\", 1), new Word(\"\\u516B\", \"eight\", \"ba\", 1), new Word(\"\\u4E5D\", \"nine\", \"jiu\", 3), new Word(\"\\u5341\", \"ten\", \"shi\", 2)],\n  1: [new Word(\"\\u5E74\", \"year\", \"nian\", 2)]\n};\n\nfunction getRandomWord(level) {\n  var words = wordDB[level];\n  var randomIndex = Math.floor(Math.random() * words.length);\n  return words[randomIndex];\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3dvcmREQi50cz9kYjViIl0sIm5hbWVzIjpbIldvcmQiLCJjaGluZXNlV29yZCIsImVuZ2xpc2hXb3JkIiwicGlueWluV2l0aG91dFRvbmUiLCJ0b25lIiwidm93ZWxzIiwid29yZERCIiwiZ2V0UmFuZG9tV29yZCIsImxldmVsIiwid29yZHMiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJO0FBTUYsZ0JBQVlDLFdBQVosRUFBaUNDLFdBQWpDLEVBQXNEQyxpQkFBdEQsRUFBaUZDLElBQWpGLEVBQStGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQzNGLFNBQUtILFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7d0JBRWlDO0FBQzlCO0FBQ0EsYUFBTyxFQUFQO0FBQ0g7Ozs7S0FHTDtBQUNBOzs7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFJUDtBQUpPO0FBUVA7QUFSTztBQVlQO0FBWk87QUFnQlA7QUFoQk87QUFvQlA7QUFwQk87QUF3QlA7QUF4Qk8sQ0FBZjtBQTJCQSxJQUFNQyxNQUFNLEdBQUc7QUFDWCxLQUFHLENBQ0MsSUFBSU4sSUFBSix3QkFBMkIsQ0FBM0IsQ0FERCxFQUVDLElBQUlBLElBQUosd0JBQTJCLENBQTNCLENBRkQsRUFHQyxJQUFJQSxJQUFKLDJCQUE4QixDQUE5QixDQUhELEVBSUMsSUFBSUEsSUFBSix5QkFBNEIsQ0FBNUIsQ0FKRCxFQUtDLElBQUlBLElBQUoseUJBQTRCLENBQTVCLENBTEQsRUFNQyxJQUFJQSxJQUFKLHlCQUE0QixDQUE1QixDQU5ELEVBT0MsSUFBSUEsSUFBSiwwQkFBNkIsQ0FBN0IsQ0FQRCxFQVFDLElBQUlBLElBQUosMEJBQTZCLENBQTdCLENBUkQsRUFTQyxJQUFJQSxJQUFKLDBCQUE2QixDQUE3QixDQVRELEVBVUMsSUFBSUEsSUFBSix5QkFBNEIsQ0FBNUIsQ0FWRCxDQURRO0FBYVgsS0FBRyxDQUFDLElBQUlBLElBQUosMkJBQThCLENBQTlCLENBQUQ7QUFiUSxDQUFmOztBQWdCQSxTQUFTTyxhQUFULENBQXVCQyxLQUF2QixFQUFzQztBQUNsQyxNQUFJQyxLQUFhLEdBQUdILE1BQU0sQ0FBQ0UsS0FBRCxDQUExQjtBQUNBLE1BQUlFLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosS0FBSyxDQUFDSyxNQUFqQyxDQUFsQjtBQUNBLFNBQU9MLEtBQUssQ0FBQ0MsV0FBRCxDQUFaO0FBQ0g7O0FBRUQiLCJmaWxlIjoiLi9kYXRhL3dvcmREQi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdvcmQge1xuICAgIGNoaW5lc2VXb3JkOiBzdHJpbmc7XG4gICAgZW5nbGlzaFdvcmQ6IHN0cmluZztcbiAgICBwaW55aW5XaXRob3V0VG9uZTogc3RyaW5nO1xuICAgIHRvbmU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNoaW5lc2VXb3JkOiBzdHJpbmcsIGVuZ2xpc2hXb3JkOiBzdHJpbmcsIHBpbnlpbldpdGhvdXRUb25lOiBzdHJpbmcsIHRvbmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNoaW5lc2VXb3JkID0gY2hpbmVzZVdvcmQ7XG4gICAgICAgIHRoaXMuZW5nbGlzaFdvcmQgPSBlbmdsaXNoV29yZDtcbiAgICAgICAgdGhpcy5waW55aW5XaXRob3V0VG9uZSA9IHBpbnlpbldpdGhvdXRUb25lO1xuICAgICAgICB0aGlzLnRvbmUgPSB0b25lO1xuICAgIH1cblxuICAgIGdldCBwaW55aW5XaXRoVG9uZU1hcmtzKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIFRPRE86IEZpbmQgdGhlIHZvd2VsIGluIHRoZSBwaW55aW4gYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgY29ycmVjdCBkaWFjcml0aWMhXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuLy8gV2hlbiBhIHN5bGxhYmxlIGNvbnRhaW5zIHR3byBvciBtb3JlIHZvd2VscywgdGhlIHRvbmUgbWFyayBpcyB1c3VhbGx5IHBsYWNlZCBhYm92ZSB2b3dlbHMgaW4gdGhlIG9yZGVyIG9mIGHvvIxv77yMZe+8jGnvvIx177yMw7wuIEV4YW1wbGU6IGjHjm/vvIx4acOo77yMyaF1xIFuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QaW55aW5fdGFibGVcblxuY29uc3Qgdm93ZWxzID0gW1xuICAgIGDEgWAsXG4gICAgYMSBYCxcbiAgICBgxIFgLFxuICAgIGDEgWAgLyogKi8sXG4gICAgYGVgLFxuICAgIGBlYCxcbiAgICBgZWAsXG4gICAgYGVgIC8qICovLFxuICAgIGDEq2AsXG4gICAgYMOtYCxcbiAgICBgx5BgLFxuICAgIGDDrGAgLyogKi8sXG4gICAgYG9gLFxuICAgIGBvYCxcbiAgICBgb2AsXG4gICAgYG9gIC8qICovLFxuICAgIGDDuWAsXG4gICAgYMO5YCxcbiAgICBgw7lgLFxuICAgIGDDuWAgLyogKi8sXG4gICAgYMeaYCxcbiAgICBgx5pgLFxuICAgIGDHmmAsXG4gICAgYMeaYCAvKiAqLyxcbl07XG5cbmNvbnN0IHdvcmREQiA9IHtcbiAgICAwOiBbXG4gICAgICAgIG5ldyBXb3JkKGDkuIBgLCBgb25lYCwgYHlpYCwgMSksXG4gICAgICAgIG5ldyBXb3JkKGDkuoxgLCBgdHdvYCwgYGVyYCwgNCksXG4gICAgICAgIG5ldyBXb3JkKGDkuIlgLCBgdGhyZWVgLCBgc2FuYCwgMSksXG4gICAgICAgIG5ldyBXb3JkKGDlm5tgLCBgZm91cmAsIGBzaWAsIDQpLFxuICAgICAgICBuZXcgV29yZChg5LqUYCwgYGZpdmVgLCBgd3VgLCAzKSxcbiAgICAgICAgbmV3IFdvcmQoYOWFrWAsIGBzaXhgLCBgbGl1YCwgNCksXG4gICAgICAgIG5ldyBXb3JkKGDkuINgLCBgc2V2ZW5gLCBgcWlgLCAxKSxcbiAgICAgICAgbmV3IFdvcmQoYOWFq2AsIGBlaWdodGAsIGBiYWAsIDEpLFxuICAgICAgICBuZXcgV29yZChg5LmdYCwgYG5pbmVgLCBgaml1YCwgMyksXG4gICAgICAgIG5ldyBXb3JkKGDljYFgLCBgdGVuYCwgYHNoaWAsIDIpLFxuICAgIF0sXG4gICAgMTogW25ldyBXb3JkKGDlubRgLCBgeWVhcmAsIGBuaWFuYCwgMildLFxufTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tV29yZChsZXZlbDogbnVtYmVyKSB7XG4gICAgbGV0IHdvcmRzOiBbV29yZF0gPSB3b3JkREJbbGV2ZWxdO1xuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHdvcmRzW3JhbmRvbUluZGV4XTtcbn1cblxuZXhwb3J0IHsgd29yZERCLCBnZXRSYW5kb21Xb3JkIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/wordDB.ts\n");

/***/ })

})