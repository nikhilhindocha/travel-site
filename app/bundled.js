/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./app/assets/styles/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./normalize.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./base/_variables'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./base/_mixins'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./base/_global'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_large-hero'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_btn'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_6___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_wrapper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_7___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_page-section'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_8___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_headline'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_9___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_row'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_10___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./modules/_generic-content-container.css */ \"./node_modules/css-loader/dist/cjs.js!./app/assets/styles/modules/_generic-content-container.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_11___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_section-title'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_12___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_feature-item'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_13___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_testimonial'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_14___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_site-footer'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_15___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_site-header'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar ___CSS_LOADER_AT_RULE_IMPORT_16___ = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '-!../../../node_modules/css-loader/dist/cjs.js!./modules/_primary-nav'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_6___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_7___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_8___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_9___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_10___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_11___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_12___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_13___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_14___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_15___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_16___);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./app/assets/styles/styles.css?");

/***/ }),

/***/ "./app/scripts/app.js":
/*!****************************!*\
  !*** ./app/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_nikhilhindocha_Desktop_project_travel_site_app_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/assets/styles/styles.css */ \"./app/assets/styles/styles.css\");\n/* harmony import */ var _Users_nikhilhindocha_Desktop_project_travel_site_app_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nikhilhindocha_Desktop_project_travel_site_app_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/scripts/modules/MobileMenu.js\");\n\n\n\nlet mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nif (false) {}\n\n\n\n//# sourceURL=webpack:///./app/scripts/app.js?");

/***/ }),

/***/ "./app/scripts/modules/MobileMenu.js":
/*!*******************************************!*\
  !*** ./app/scripts/modules/MobileMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MobileMenu {\n    constructor() {\n        this.menuIcon = document.querySelector(\".site-header__menu-icon\")\n        this.menuContent = document.querySelector(\".site-header__menu-content\")\n        this.siteHeader = document.querySelector(\".site-header\")\n        this.events()\n    }\n\nevents() {\n    this.menuIcon.addEventListener(\"click\", () => this.toggleTheMenu())\n}\n\ntoggleTheMenu() {\n    this.menuContent.classList.toggle(\"site-header__menu-content--is-visible\")\n    this.siteHeader.classList.toggle(\"site-header--is-expanded\")\n    this.menuIcon.classList.toggle(\"site-header__menu-icon--close-x\")\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///./app/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/assets/styles/modules/_generic-content-container.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/assets/styles/modules/_generic-content-container.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".generic-content-container {\\n\\n    p {\\n        font-weight: 300;\\n        line-height: 1.65;\\n        font-size: 1.125rem;\\n        margin: 0 0 1.8rem 0;\\n        \\n    }\\n\\n    @mixin atSmall {\\n        font-size: 1.125rem;\\n    }\\n\\n    p a {\\n        font-weight: 700;\\n    }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./app/assets/styles/modules/_generic-content-container.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ })

/******/ });