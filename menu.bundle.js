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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ componentMenu)\n/* harmony export */ });\n/* harmony import */ var _data_menu_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu.csv */ \"./data/menu.csv\");\n/* harmony import */ var _data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_menu_pictures_hanyashi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu-pictures/hanyashi.png */ \"./assets/menu-pictures/hanyashi.png\");\n/* harmony import */ var _assets_menu_pictures_blackhayashi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/menu-pictures/blackhayashi.png */ \"./assets/menu-pictures/blackhayashi.png\");\n/* harmony import */ var _assets_menu_pictures_benishoga_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/menu-pictures/benishoga.png */ \"./assets/menu-pictures/benishoga.png\");\n/* harmony import */ var _assets_menu_pictures_tea_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/menu-pictures/tea.png */ \"./assets/menu-pictures/tea.png\");\n/* harmony import */ var _assets_menu_pictures_bananamilk_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/menu-pictures/bananamilk.png */ \"./assets/menu-pictures/bananamilk.png\");\n\n\n\n\n\n\n\nfunction componentMenu() {\n\n    const element = document.createElement('div');\n    element.classList.add('container-vertical');\n    element.innerHTML = '<h2 style=\"margin-top: 1em; margin-bottom: 0em;\">Everyday Menu</h2>';\n    \n    /* STATIC - webpack */\n    /*1*/\n    const menuBox1 = document.createElement('div');\n    menuBox1.setAttribute('id','menuItem1');\n    menuBox1.classList.add('menu-box');\n\n    const menuPictures1 = new Image();\n    menuPictures1.src = _assets_menu_pictures_hanyashi_png__WEBPACK_IMPORTED_MODULE_1__;\n    menuPictures1.setAttribute('id','menuItem1Picture');\n    menuPictures1.classList.add('menu-box-picture');\n\n    const menuText1 = document.createElement('div');\n    menuText1.setAttribute('id','menuItem1Text');\n    menuText1.classList.add(\"menu-box-text\");\n    menuText1.innerHTML=`<div id=\"menuItem1Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[1][0])+`</div>`\n    +`<div id=\"menuItem1Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[1][1])+`</div>`\n    +`<div id=\"menuItem1Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[1][2])+`</div>`\n    +`</div>`;\n    menuBox1.appendChild(menuPictures1);\n    menuBox1.appendChild(menuText1);\n\n    /*2*/\n    const menuBox2 = document.createElement('div');\n    menuBox2.setAttribute('id','menuItem2');\n    menuBox2.classList.add('menu-box');\n\n    const menuPictures2 = new Image();\n    menuPictures2.src = _assets_menu_pictures_blackhayashi_png__WEBPACK_IMPORTED_MODULE_2__;\n    menuPictures2.setAttribute('id','menuItem2Picture');\n    menuPictures2.classList.add('menu-box-picture');\n\n    const menuText2 = document.createElement('div');\n    menuText2.setAttribute('id','menuItem2Text');\n    menuText2.classList.add(\"menu-box-text\");\n    menuText2.innerHTML=`<div id=\"menuItem2Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[2][0])+`</div>`\n    +`<div id=\"menuItem2Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[2][1])+`</div>`\n    +`<div id=\"menuItem2Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[2][2])+`</div>`\n    +`</div>`;\n    menuBox2.appendChild(menuPictures2);\n    menuBox2.appendChild(menuText2);\n\n    /*3*/\n    const menuBox3 = document.createElement('div');\n    menuBox3.setAttribute('id','menuItem3');\n    menuBox3.classList.add('menu-box');\n\n    const menuPictures3 = new Image();\n    menuPictures3.src = _assets_menu_pictures_benishoga_png__WEBPACK_IMPORTED_MODULE_3__;\n    menuPictures3.setAttribute('id','menuItem3Picture');\n    menuPictures3.classList.add('menu-box-picture');\n\n    const menuText3 = document.createElement('div');\n    menuText3.setAttribute('id','menuItem3Text');\n    menuText3.classList.add(\"menu-box-text\");\n    menuText3.innerHTML=`<div id=\"menuItem3Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[3][0])+`</div>`\n    +`<div id=\"menuItem3Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[3][1])+`</div>`\n    +`<div id=\"menuItem3Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[3][2])+`</div>`\n    +`</div>`;\n    menuBox3.appendChild(menuPictures3);\n    menuBox3.appendChild(menuText3);\n\n    /*4*/\n    const menuBox4 = document.createElement('div');\n    menuBox4.setAttribute('id','menuItem4');\n    menuBox4.classList.add('menu-box');\n\n    const menuPictures4 = new Image();\n    menuPictures4.src = _assets_menu_pictures_tea_png__WEBPACK_IMPORTED_MODULE_4__;\n    menuPictures4.setAttribute('id','menuItem4Picture');\n    menuPictures4.classList.add('menu-box-picture');\n\n    const menuText4 = document.createElement('div');\n    menuText4.setAttribute('id','menuItem4Text');\n    menuText4.classList.add(\"menu-box-text\");\n    menuText4.innerHTML=`<div id=\"menuItem4Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[4][0])+`</div>`\n    +`<div id=\"menuItem4Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[4][1])+`</div>`\n    +`<div id=\"menuItem4Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[4][2])+`</div>`\n    +`</div>`;\n    menuBox4.appendChild(menuPictures4);\n    menuBox4.appendChild(menuText4);\n\n    /*5*/\n    const menuBox5 = document.createElement('div');\n    menuBox5.setAttribute('id','menuItem5');\n    menuBox5.classList.add('menu-box');\n\n    const menuPictures5 = new Image();\n    menuPictures5.src = _assets_menu_pictures_bananamilk_png__WEBPACK_IMPORTED_MODULE_5__;\n    menuPictures5.setAttribute('id','menuItem5Picture');\n    menuPictures5.classList.add('menu-box-picture');\n\n    const menuText5 = document.createElement('div');\n    menuText5.setAttribute('id','menuItem5Text');\n    menuText5.classList.add(\"menu-box-text\");\n    menuText5.innerHTML=`<div id=\"menuItem5Name\" class=\"menu-box-text-title\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[5][0])+`</div>`\n    +`<div id=\"menuItem5Description\" class=\"menu-box-text-description\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[5][1])+`</div>`\n    +`<div id=\"menuItem5Price\" class=\"menu-box-text-price\">`+(_data_menu_csv__WEBPACK_IMPORTED_MODULE_0___default()[5][2])+`</div>`\n    +`</div>`;\n    menuBox5.appendChild(menuPictures5);\n    menuBox5.appendChild(menuText5);\n    \n    element.appendChild(menuBox1);\n    element.appendChild(menuBox2);\n    element.appendChild(menuBox3);\n    element.appendChild(menuBox4);\n    element.appendChild(menuBox5);\n\n    \n\n\n\n    /* DYNAMIC - no webpack*/\n    /*\n    const menuItems = [];\n    const menuPictures = [];\n\n    for(let i=1; i<Menu.length;i++){\n        menuItems[i-1] = document.createElement('div');\n        menuItems[i-1].setAttribute('id','menuItem'+i);\n        menuItems[i-1].classList.add('menu-box');\n\n        menuItems[i-1].innerHTML = `<div id=\"menuItem`+i+`Picture\" class=\"menu-box-picture\" style=\"background-image: url('../assets/menu-pictures/`+Menu[i][3]+`'); background-size: cover;\"></div>\n        <div id=\"menuItem`+i+`Text\" class=\"menu-box-text\">`\n        +`<div id=\"menuItem`+i+`Name\" class=\"menu-box-text-title\">`+Menu[i][0]+`</div>`\n        +`<div id=\"menuItem`+i+`Description\" class=\"menu-box-text-description\">`+Menu[i][1]+`</div>`\n        +`<div id=\"menuItem`+i+`Price\" class=\"menu-box-text-price\">`+Menu[i][2]+`</div>`\n        +`</div>`\n    \n        element.appendChild(menuItems[i-1]);\n    }*/\n\n    return element;\n}\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./src/menu.js?");

/***/ }),

/***/ "./assets/menu-pictures/bananamilk.png":
/*!*********************************************!*\
  !*** ./assets/menu-pictures/bananamilk.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e142b5a003292055112f.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/menu-pictures/bananamilk.png?");

/***/ }),

/***/ "./assets/menu-pictures/benishoga.png":
/*!********************************************!*\
  !*** ./assets/menu-pictures/benishoga.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c7ede6fe25e1883ef006.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/menu-pictures/benishoga.png?");

/***/ }),

/***/ "./assets/menu-pictures/blackhayashi.png":
/*!***********************************************!*\
  !*** ./assets/menu-pictures/blackhayashi.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4a4ea97e7df0bb359091.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/menu-pictures/blackhayashi.png?");

/***/ }),

/***/ "./assets/menu-pictures/hanyashi.png":
/*!*******************************************!*\
  !*** ./assets/menu-pictures/hanyashi.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"afe2ffe02a656c488628.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/menu-pictures/hanyashi.png?");

/***/ }),

/***/ "./assets/menu-pictures/tea.png":
/*!**************************************!*\
  !*** ./assets/menu-pictures/tea.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2076fcf5fe6953585fae.png\";\n\n//# sourceURL=webpack://hayashi-neko-restaurant/./assets/menu-pictures/tea.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;