/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/meows-vgwjy.woff */ \"./assets/meows-vgwjy.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/meows-vgwjy.woff2 */ \"./assets/meows-vgwjy.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'MeowsFont';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff'),\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff2');\\n    font-weight: 600;\\n    font-style: normal;\\n  }\\n\\nhtml{\\n    height:100%;\\n    width:100%;\\n}\\n\\n.body{\\n    background-color: #423022;\\n    color: white;\\n    min-height: 100%;\\n    min-width:100%;\\n    margin: 0em;\\n    padding: 0em;\\n\\n    display:flex;\\n    flex-direction: column;\\n}\\n\\n.meows{\\n    color: white;\\n    font-family: 'MeowsFont';\\n    font-size: xx-large;\\n  }\\n\\n.container-vertical{\\n    display:flex;\\n    justify-content: center;\\n    justify-self:center;\\n\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.container-horizontal{\\n    display:flex;\\n    justify-content: center;\\n    justify-self:center;\\n\\n    flex-direction: row;\\n    align-items: center;\\n}\\n\\n.header{\\n    flex-shrink: 0;\\n    width: 100%;\\n    background-color: #30241a;\\n    padding-bottom: 1em;\\n}\\n\\n.logo-left {\\n    width: 70px;\\n    height: 70px;\\n    transform: scaleX(-1);\\n    margin-right: 1em;\\n}\\n.logo-right {\\n    width: 70px;\\n    height: 70px;\\n    transform: scaleX(1);\\n    margin-left: 1em;\\n}\\n\\n.home-picture {\\n    width: 60%;\\n    height: 60%;\\n}\\n\\n.contact-picture {\\n    width: 60%;\\n    height: 60%;\\n    border-radius: 4em;\\n}\\n\\n.top-button{\\n    width: 20%;\\n    height: 3em;\\n    margin-left: 0.1em;\\n    margin-right: 0.1em;\\n    border-radius: 2em;\\n    background-color: black;\\n    color: white;\\n    font-weight: bold;\\n}\\n\\n.main{\\n    flex-grow: 1;\\n    width: 100%;\\n    align-items: center;\\n}\\n\\n.footer{\\n    flex-shrink: 0;\\n    width: 100%;\\n    font-style: italic;\\n    background-color: #30241a;\\n}\\n\\n.footer > div {\\n    margin-top: 1em;\\n    width: 40%;\\n  }\\n\\n.core-text{\\n    text-align: center;\\n    margin-top: 1em;\\n    margin-bottom: 1em;\\n    margin-left: 3em;\\n    margin-right: 3em;\\n}\\n\\n.menu-box {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    border: 0.5em solid #30241a;\\n    border-radius: 2em;\\n    width: 46em;\\n    height: 20em;\\n    margin-top: 1.5em;\\n    margin-bottom: 1.5em;  \\n}\\n\\n\\n.menu-box-picture{\\n    display: flex;\\n    height: 18em;\\n    width: 24em;\\n    border-radius: 2em;\\n    margin: 0.6em;\\n}\\n\\n.menu-box-text{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    height: 18em;\\n    width: 20em;\\n    border-radius: 2em;\\n}\\n\\n.menu-box-text-title {\\n    width: 100%;\\n    flex-grow: 1;\\n    font-size: large;\\n    font-weight: bolder;\\n    text-align: center;\\n    margin-top: 0.5em;\\n    margin-bottom: 0.2em;\\n}\\n\\n.menu-box-text-description {\\n    width: 100%;\\n    flex-grow: 2;\\n    font-size: medium;\\n    text-align: center;\\n    margin-top: 0.2em;\\n    margin-bottom: 0.2em;\\n}\\n\\n.menu-box-text-price {\\n    width: 100%;\\n    flex-shrink: 0;\\n    font-size: large;\\n    font-weight: bold;\\n    text-align: center;\\n    margin-top: 0.2em;\\n    margin-bottom: 1em;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./data/menu.csv":
/*!***********************!*\
  !*** ./data/menu.csv ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = [[\"name\",\"description\",\"price\",\"picture\"],[\"Signature HaNYAshi Rice<br>看板 ハニャシライス\",\"Western style beef stew served with rice - our signature hayashi sauce is inspired from the French boeuf bourguignon\",\"11 meows\",\"hanyashi.png\"],[\"Black Hayashi Rice<br>黒 ハヤシライス\",\"Dark beef stew with black beans and black garlic served with rice\",\"13 meows\",\"blackhayashi.png\"],[\"Pickled Ginger Side<br>紅生姜\",\"Serving of red pickled ginger - beni shoga\",\"1 meow\",\"benishoga.png\"],[\"Green Tea<br>お茶\",\"Unlimited refills of hot green tea\",\"1 meow\",\"tea.png\"],[\"Banana Milk<br>バナナミルク\",\"Home-mode banana flavoured sweet milk\",\"2 meows\",\"bananamilk.png\"]]\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./data/menu.csv?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentContact)\n/* harmony export */ });\n/* harmony import */ var _assets_emiromu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/emiromu.png */ \"./assets/emiromu.png\");\n\n\nfunction componentContact() {\n\n    const element = document.createElement('div');\n    element.classList.add('container-vertical');\n    element.innerHTML = `<h2 style=\"margin-top: 1em; margin-bottom: 1em;\">Contact</h2>`;\n\n    const contactPicture = new Image();\n    contactPicture.src = _assets_emiromu_png__WEBPACK_IMPORTED_MODULE_0__;\n    contactPicture.classList.add('contact-picture');\n    element.appendChild(contactPicture);\n\n    const introduction = document.createElement('div');\n    introduction.classList.add('core-text');\n    introduction.innerHTML =`<h3 style=\"margin-top: 0em; margin-bottom: 0em;\">Emilien Romulus</h3><br>github : <a href=\"https://github.com/emiromu\">https://github.com/emiromu</a><br><br>email : emilien.romulus@tuta.io<br>`;\n\n    element.appendChild(introduction);\n\n    return element;\n}\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentHome)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/restaurant.png */ \"./assets/restaurant.png\");\n\n\nfunction componentHome() {\n    \n    const element = document.createElement('div');\n    element.classList.add('container-vertical');\n    element.innerHTML = `<h2 style=\"margin-top: 1em; margin-bottom: 1em;\">Hayashi Neko Restaurant</h2>`;\n\n    const homePicture = new Image();\n    homePicture.src = _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_0__;\n    homePicture.classList.add('home-picture');\n    element.appendChild(homePicture);\n\n    const introduction = document.createElement('div');\n    introduction.classList.add('core-text');\n    introduction.innerHTML =`Hayashi Neko (established since 2006) is a maNYAficient restaurant specialised in hayashi rice (ハヤシライス). This is a family-owned business, the family being emiromu and his black cats.\n    Our secret recipe is very tasty, much delicious. Please check out our menu page for the full list of delicacies offered.`;\n\n    element.appendChild(introduction);\n\n    return element;\n}\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _assets_cat_chef_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/cat-chef.png */ \"./assets/cat-chef.png\");\n\n\n\n\n\n\nconsole.log('いらっしゃいませにゃ！');\n\nfunction componentHeader(){\n    /***\n    Top section of the website, contains banner and navigation\n    ***/\n    const header = document.createElement('div');\n    header.setAttribute(\"id\", \"header\");\n    header.classList.add('container','header');\n\n    return header;\n}\n\n\n\nfunction componentBanner() {\n    /***\n    Graphic Design part of the header\n    ***/\n    const banner = document.createElement('div');\n    banner.classList.add('meows','container-horizontal');\n\n    const leftLogo = new Image();\n    leftLogo.src = _assets_cat_chef_png__WEBPACK_IMPORTED_MODULE_4__;\n    leftLogo.classList.add('logo-left');\n    banner.appendChild(leftLogo);\n\n    const name = document.createElement('h1');\n    name.innerHTML='Hayashi Neko';\n    banner.appendChild(name);\n\n    const rightLogo = new Image();\n    rightLogo.src = _assets_cat_chef_png__WEBPACK_IMPORTED_MODULE_4__;\n    rightLogo.classList.add('logo-right');\n    banner.appendChild(rightLogo);\n\n    return banner;\n}\n\nfunction componentNavigation(){\n    /***\n    Utility part of the header\n    ***/\n\n    const navigation = document.createElement('div');\n    navigation.classList.add('container-horizontal');\n\n    const homeButton = document.createElement('button');\n    homeButton.setAttribute(\"id\",\"homeButton\");\n    homeButton.classList.add('top-button');\n    homeButton.innerHTML='Home';\n\n    const menuButton = document.createElement('button');\n    menuButton.setAttribute(\"id\",\"menuButton\");\n    menuButton.classList.add('top-button');\n    menuButton.innerHTML='Menu';\n\n    const contactButton = document.createElement('button');\n    contactButton.setAttribute(\"id\",\"contactButton\");\n    contactButton.classList.add('top-button');\n    contactButton.innerHTML='Contact';\n\n    navigation.appendChild(homeButton);\n    navigation.appendChild(menuButton);\n    navigation.appendChild(contactButton);\n\n    return navigation;\n}\n\nfunction componentMainPannel(){\n    /***\n    Main central area, dynamic\n    ***/\n\n    const mainPannel = document.createElement('div');\n    mainPannel.setAttribute(\"id\", \"mainPannel\");\n    mainPannel.classList.add('container-vertical','main');\n\n    return mainPannel;\n}\n\nfunction componentFooter(){\n    /***\n    Footer at the bottom of the page\n    ***/\n\n    const footer = document.createElement('div');\n    footer.setAttribute(\"id\", \"footer\");\n    footer.classList.add('container-horizontal','footer');\n\n    const emiromuDisclaimer = document.createElement('div');\n    emiromuDisclaimer.innerHTML = 'Demo website by emiromu (Emilien Romulus) : <a href=\"https://github.com/emiromu/hayashi-neko-restaurant\">github</a>';\n    footer.appendChild(emiromuDisclaimer);\n\n    const fontDisclaimer = document.createElement('div');\n    fontDisclaimer.innerHTML = 'Font by nuraisyahamalia, free for non-commercial use: <a href=\"https://www.creativefabrica.com/designer/nuraisyahamalia/ref/369973\">link</a>';\n    footer.appendChild(fontDisclaimer);\n\n    return footer;\n}\n\n\ndocument.body.classList.add('body');\n\ndocument.body.appendChild(componentHeader());\ndocument.querySelector(\"#header\").appendChild(componentBanner());\ndocument.querySelector(\"#header\").appendChild(componentNavigation());\ndocument.body.appendChild(componentMainPannel());\ndocument.body.appendChild(componentFooter());\n\n\n\nconst mainPannel= document.querySelector(\"#mainPannel\");\n\nmainPannel.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n//mainPannel.appendChild(componentMenu());\n//mainPannel.appendChild(componentContact());\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentMenu)\n/* harmony export */ });\n/* harmony import */ var _data_menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu.csv */ \"./data/menu.csv\");\n/* harmony import */ var _data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nfunction componentMenu() {\n\n    const element = document.createElement('div');\n    element.classList.add('container-vertical');\n    element.innerHTML = '<h2 style=\"margin-top: 1em; margin-bottom: 0em;\">Everyday Menu</h2>';\n    \n    //console.log(Menu);\n    const menuItems = [];\n    for(let i=1; i<(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default().length);i++){\n        menuItems[i-1] = document.createElement('div');\n        menuItems[i-1].setAttribute('id','menuItem'+i);\n        menuItems[i-1].classList.add('menu-box');\n\n        menuItems[i-1].innerHTML = `<div id=\"menuItem`+i+`Picture\" class=\"menu-box-picture\" style=\"background-image: url('../assets/`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][3]+`'); background-size: cover;\"></div>\n        <div id=\"menuItem`+i+`Text\" class=\"menu-box-text\">`\n        +`<div id=\"menuItem`+i+`Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][0]+`</div>`\n        +`<div id=\"menuItem`+i+`Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][1]+`</div>`\n        +`<div id=\"menuItem`+i+`Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][2]+`</div>`\n        +`</div>`\n        \n\n        element.appendChild(menuItems[i-1]);\n    }\n\n    return element;\n}\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/menu.js?");

/***/ }),

/***/ "./assets/cat-chef.png":
/*!*****************************!*\
  !*** ./assets/cat-chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"385a3276e6bc5908cab6.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/cat-chef.png?");

/***/ }),

/***/ "./assets/emiromu.png":
/*!****************************!*\
  !*** ./assets/emiromu.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1a6735d480e65cd50ccf.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/emiromu.png?");

/***/ }),

/***/ "./assets/meows-vgwjy.woff":
/*!*********************************!*\
  !*** ./assets/meows-vgwjy.woff ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ef3f1669c31878a49512.woff\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/meows-vgwjy.woff?");

/***/ }),

/***/ "./assets/meows-vgwjy.woff2":
/*!**********************************!*\
  !*** ./assets/meows-vgwjy.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"58d1e0e9e3a3492d2f67.woff2\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/meows-vgwjy.woff2?");

/***/ }),

/***/ "./assets/restaurant.png":
/*!*******************************!*\
  !*** ./assets/restaurant.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f25b959afd8d7eaade3a.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/restaurant.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;