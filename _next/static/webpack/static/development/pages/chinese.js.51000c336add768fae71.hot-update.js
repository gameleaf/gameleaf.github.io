webpackHotUpdate("static/development/pages/chinese.js",{

/***/ "./data/wordDB.ts":
/*!************************!*\
  !*** ./data/wordDB.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar Word = /*#__PURE__*/function () {\n  // 0, 1, 2, 3, 4\n  function Word(chineseWord, englishWord, pinyinWithoutTone, tone) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Word);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"chinese\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"english\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"pinyin\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"tone\", void 0);\n\n    this.chinese = chineseWord;\n    this.english = englishWord;\n    this.pinyin = pinyinWithoutTone;\n    this.tone = tone;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Word, [{\n    key: \"pinyinWithToneMarks\",\n    get: function get() {\n      // TODO: Find the vowel in the pinyin and replace it with the correct diacritic!\n      // TODO: Alternatively, we should just bake it in! (Easier, for sure!)\n      return this.pinyin;\n    }\n  }]);\n\n  return Word;\n}(); // When a syllable contains two or more vowels, the tone mark is usually placed above vowels in the order of a，o，e，i，u，ü. Example: hǎo，xiè，ɡuān\n// https://en.wikipedia.org/wiki/Pinyin_table\n\n\nvar vowels = [\"\\u0101\", \"\\u0101\", \"\\u0101\", \"\\u0101\"\n/* */\n, \"e\", \"e\", \"e\", \"e\"\n/* */\n, \"\\u012B\", \"\\xED\", \"\\u01D0\", \"\\xEC\"\n/* */\n, \"o\", \"o\", \"o\", \"o\"\n/* */\n, \"\\xF9\", \"\\xF9\", \"\\xF9\", \"\\xF9\"\n/* */\n, \"\\u01DA\", \"\\u01DA\", \"\\u01DA\", \"\\u01DA\"\n/* */\n];\nvar wordsByLevel = {\n  0: [new Word(\"\\u4E00\", \"one\", \"yi\", 1), new Word(\"\\u4E8C\", \"two\", \"er\", 4), new Word(\"\\u4E09\", \"three\", \"san\", 1), new Word(\"\\u56DB\", \"four\", \"si\", 4), new Word(\"\\u4E94\", \"five\", \"wu\", 3), new Word(\"\\u516D\", \"six\", \"liu\", 4), new Word(\"\\u4E03\", \"seven\", \"qi\", 1), new Word(\"\\u516B\", \"eight\", \"ba\", 1), new Word(\"\\u4E5D\", \"nine\", \"jiu\", 3), new Word(\"\\u5341\", \"ten\", \"shi\", 2)],\n  1: [new Word(\"\\u5E74\", \"year\", \"nian\", 2)]\n};\n\nvar WordDB = /*#__PURE__*/function () {\n  function WordDB() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WordDB);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"level\", 0);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WordDB, [{\n    key: \"setLevel\",\n    value: function setLevel(level) {\n      this.level = level;\n    }\n  }, {\n    key: \"getRandomWord\",\n    value: function getRandomWord() {\n      var words = wordsByLevel[this.level];\n      var randomIndex = Math.floor(Math.random() * words.length);\n      return words[randomIndex];\n    }\n  }]);\n\n  return WordDB;\n}();\n\nvar singleton = new WordDB();\n/* harmony default export */ __webpack_exports__[\"default\"] = (singleton);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL3dvcmREQi50cz9kYjViIl0sIm5hbWVzIjpbIldvcmQiLCJjaGluZXNlV29yZCIsImVuZ2xpc2hXb3JkIiwicGlueWluV2l0aG91dFRvbmUiLCJ0b25lIiwiY2hpbmVzZSIsImVuZ2xpc2giLCJwaW55aW4iLCJ2b3dlbHMiLCJ3b3Jkc0J5TGV2ZWwiLCJXb3JkREIiLCJsZXZlbCIsIndvcmRzIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzaW5nbGV0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLEk7QUFJWTtBQUVkLGdCQUFZQyxXQUFaLEVBQWlDQyxXQUFqQyxFQUFzREMsaUJBQXRELEVBQWlGQyxJQUFqRixFQUErRjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUMzRixTQUFLQyxPQUFMLEdBQWVKLFdBQWY7QUFDQSxTQUFLSyxPQUFMLEdBQWVKLFdBQWY7QUFDQSxTQUFLSyxNQUFMLEdBQWNKLGlCQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7d0JBRWlDO0FBQzlCO0FBQ0E7QUFDQSxhQUFPLEtBQUtHLE1BQVo7QUFDSDs7OztLQUdMO0FBQ0E7OztBQUVBLElBQU1DLE1BQU0sR0FBRztBQUlQO0FBSk87QUFRUDtBQVJPO0FBWVA7QUFaTztBQWdCUDtBQWhCTztBQW9CUDtBQXBCTztBQXdCUDtBQXhCTyxDQUFmO0FBMkJBLElBQU1DLFlBQVksR0FBRztBQUNqQixLQUFHLENBQ0MsSUFBSVQsSUFBSix3QkFBMkIsQ0FBM0IsQ0FERCxFQUVDLElBQUlBLElBQUosd0JBQTJCLENBQTNCLENBRkQsRUFHQyxJQUFJQSxJQUFKLDJCQUE4QixDQUE5QixDQUhELEVBSUMsSUFBSUEsSUFBSix5QkFBNEIsQ0FBNUIsQ0FKRCxFQUtDLElBQUlBLElBQUoseUJBQTRCLENBQTVCLENBTEQsRUFNQyxJQUFJQSxJQUFKLHlCQUE0QixDQUE1QixDQU5ELEVBT0MsSUFBSUEsSUFBSiwwQkFBNkIsQ0FBN0IsQ0FQRCxFQVFDLElBQUlBLElBQUosMEJBQTZCLENBQTdCLENBUkQsRUFTQyxJQUFJQSxJQUFKLDBCQUE2QixDQUE3QixDQVRELEVBVUMsSUFBSUEsSUFBSix5QkFBNEIsQ0FBNUIsQ0FWRCxDQURjO0FBYWpCLEtBQUcsQ0FBQyxJQUFJQSxJQUFKLDJCQUE4QixDQUE5QixDQUFEO0FBYmMsQ0FBckI7O0lBZ0JNVSxNOzs7OzZHQUNjLEM7Ozs7OzZCQUVQQyxLLEVBQWU7QUFDcEIsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7OztvQ0FFZTtBQUNaLFVBQUlDLEtBQWEsR0FBR0gsWUFBWSxDQUFDLEtBQUtFLEtBQU4sQ0FBaEM7QUFDQSxVQUFJRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLEtBQUssQ0FBQ0ssTUFBakMsQ0FBbEI7QUFDQSxhQUFPTCxLQUFLLENBQUNDLFdBQUQsQ0FBWjtBQUNIOzs7Ozs7QUFHTCxJQUFNSyxTQUFTLEdBQUcsSUFBSVIsTUFBSixFQUFsQjtBQUVlUSx3RUFBZiIsImZpbGUiOiIuL2RhdGEvd29yZERCLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV29yZCB7XG4gICAgY2hpbmVzZTogc3RyaW5nO1xuICAgIGVuZ2xpc2g6IHN0cmluZztcbiAgICBwaW55aW46IHN0cmluZztcbiAgICB0b25lOiBudW1iZXI7IC8vIDAsIDEsIDIsIDMsIDRcblxuICAgIGNvbnN0cnVjdG9yKGNoaW5lc2VXb3JkOiBzdHJpbmcsIGVuZ2xpc2hXb3JkOiBzdHJpbmcsIHBpbnlpbldpdGhvdXRUb25lOiBzdHJpbmcsIHRvbmU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNoaW5lc2UgPSBjaGluZXNlV29yZDtcbiAgICAgICAgdGhpcy5lbmdsaXNoID0gZW5nbGlzaFdvcmQ7XG4gICAgICAgIHRoaXMucGlueWluID0gcGlueWluV2l0aG91dFRvbmU7XG4gICAgICAgIHRoaXMudG9uZSA9IHRvbmU7XG4gICAgfVxuXG4gICAgZ2V0IHBpbnlpbldpdGhUb25lTWFya3MoKTogc3RyaW5nIHtcbiAgICAgICAgLy8gVE9ETzogRmluZCB0aGUgdm93ZWwgaW4gdGhlIHBpbnlpbiBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBjb3JyZWN0IGRpYWNyaXRpYyFcbiAgICAgICAgLy8gVE9ETzogQWx0ZXJuYXRpdmVseSwgd2Ugc2hvdWxkIGp1c3QgYmFrZSBpdCBpbiEgKEVhc2llciwgZm9yIHN1cmUhKVxuICAgICAgICByZXR1cm4gdGhpcy5waW55aW47XG4gICAgfVxufVxuXG4vLyBXaGVuIGEgc3lsbGFibGUgY29udGFpbnMgdHdvIG9yIG1vcmUgdm93ZWxzLCB0aGUgdG9uZSBtYXJrIGlzIHVzdWFsbHkgcGxhY2VkIGFib3ZlIHZvd2VscyBpbiB0aGUgb3JkZXIgb2YgYe+8jG/vvIxl77yMae+8jHXvvIzDvC4gRXhhbXBsZTogaMeOb++8jHhpw6jvvIzJoXXEgW5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Bpbnlpbl90YWJsZVxuXG5jb25zdCB2b3dlbHMgPSBbXG4gICAgYMSBYCxcbiAgICBgxIFgLFxuICAgIGDEgWAsXG4gICAgYMSBYCAvKiAqLyxcbiAgICBgZWAsXG4gICAgYGVgLFxuICAgIGBlYCxcbiAgICBgZWAgLyogKi8sXG4gICAgYMSrYCxcbiAgICBgw61gLFxuICAgIGDHkGAsXG4gICAgYMOsYCAvKiAqLyxcbiAgICBgb2AsXG4gICAgYG9gLFxuICAgIGBvYCxcbiAgICBgb2AgLyogKi8sXG4gICAgYMO5YCxcbiAgICBgw7lgLFxuICAgIGDDuWAsXG4gICAgYMO5YCAvKiAqLyxcbiAgICBgx5pgLFxuICAgIGDHmmAsXG4gICAgYMeaYCxcbiAgICBgx5pgIC8qICovLFxuXTtcblxuY29uc3Qgd29yZHNCeUxldmVsID0ge1xuICAgIDA6IFtcbiAgICAgICAgbmV3IFdvcmQoYOS4gGAsIGBvbmVgLCBgeWlgLCAxKSxcbiAgICAgICAgbmV3IFdvcmQoYOS6jGAsIGB0d29gLCBgZXJgLCA0KSxcbiAgICAgICAgbmV3IFdvcmQoYOS4iWAsIGB0aHJlZWAsIGBzYW5gLCAxKSxcbiAgICAgICAgbmV3IFdvcmQoYOWbm2AsIGBmb3VyYCwgYHNpYCwgNCksXG4gICAgICAgIG5ldyBXb3JkKGDkupRgLCBgZml2ZWAsIGB3dWAsIDMpLFxuICAgICAgICBuZXcgV29yZChg5YWtYCwgYHNpeGAsIGBsaXVgLCA0KSxcbiAgICAgICAgbmV3IFdvcmQoYOS4g2AsIGBzZXZlbmAsIGBxaWAsIDEpLFxuICAgICAgICBuZXcgV29yZChg5YWrYCwgYGVpZ2h0YCwgYGJhYCwgMSksXG4gICAgICAgIG5ldyBXb3JkKGDkuZ1gLCBgbmluZWAsIGBqaXVgLCAzKSxcbiAgICAgICAgbmV3IFdvcmQoYOWNgWAsIGB0ZW5gLCBgc2hpYCwgMiksXG4gICAgXSxcbiAgICAxOiBbbmV3IFdvcmQoYOW5tGAsIGB5ZWFyYCwgYG5pYW5gLCAyKV0sXG59O1xuXG5jbGFzcyBXb3JkREIge1xuICAgIGxldmVsOiBudW1iZXIgPSAwO1xuXG4gICAgc2V0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tV29yZCgpIHtcbiAgICAgICAgbGV0IHdvcmRzOiBbV29yZF0gPSB3b3Jkc0J5TGV2ZWxbdGhpcy5sZXZlbF07XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvcmRzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB3b3Jkc1tyYW5kb21JbmRleF07XG4gICAgfVxufVxuXG5jb25zdCBzaW5nbGV0b24gPSBuZXcgV29yZERCKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/wordDB.ts\n");

/***/ })

})