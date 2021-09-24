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

/***/ "./data/menu.csv":
/*!***********************!*\
  !*** ./data/menu.csv ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = [[\"name\",\"description\",\"price\",\"picture\"],[\"Signature HaNYAshi Rice<br>看板 ハニャシライス\",\"Western style beef stew served with rice - our signature hayashi sauce is inspired from the French boeuf bourguignon\",\"11 meows\",\"hanyashi.png\"],[\"Black Hayashi Rice<br>黒 ハヤシライス\",\"Dark beef stew with black beans and black garlic served with rice\",\"13 meows\",\"blackhayashi.png\"],[\"Pickled Ginger Side<br>紅生姜\",\"Serving of red pickled ginger - beni shoga\",\"1 meow\",\"benishoga.png\"],[\"Green Tea<br>お茶\",\"Unlimited refills of hot green tea\",\"1 meow\",\"tea.png\"],[\"Banana Milk<br>バナナミルク\",\"Home-mode banana flavoured sweet milk\",\"2 meows\",\"bananamilk.png\"]]\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./data/menu.csv?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentMenu)\n/* harmony export */ });\n/* harmony import */ var _data_menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu.csv */ \"./data/menu.csv\");\n/* harmony import */ var _data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nfunction componentMenu() {\n\n    const element = document.createElement('div');\n    element.classList.add('container-vertical');\n    element.innerHTML = '<h2 style=\"margin-top: 1em; margin-bottom: 0em;\">Everyday Menu</h2>';\n    \n    //console.log(Menu);\n    const menuItems = [];\n    for(let i=1; i<(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default().length);i++){\n        menuItems[i-1] = document.createElement('div');\n        menuItems[i-1].setAttribute('id','menuItem'+i);\n        menuItems[i-1].classList.add('menu-box');\n\n        menuItems[i-1].innerHTML = `<div id=\"menuItem`+i+`Picture\" class=\"menu-box-picture\" style=\"background-image: url('../assets/`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][3]+`'); background-size: cover;\"></div>\n        <div id=\"menuItem`+i+`Text\" class=\"menu-box-text\">`\n        +`<div id=\"menuItem`+i+`Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][0]+`</div>`\n        +`<div id=\"menuItem`+i+`Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][1]+`</div>`\n        +`<div id=\"menuItem`+i+`Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default())[i][2]+`</div>`\n        +`</div>`\n        \n\n        element.appendChild(menuItems[i-1]);\n    }\n\n    return element;\n}\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;