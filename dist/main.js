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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.insert = (num) => {\r\n    document.form.textview.value = document.form.textview.value + num;\r\n}\r\n\r\ndocument.clean = () => {\r\n    document.form.textview.value =\"\";\r\n}\r\n\r\ndocument.back = () => {\r\n    const string = document.form.textview.value;\r\n    document.form.textview.value = string.substring(0, string.length -1);\r\n}\r\n\r\ndocument.equal = () => {\r\n    const string = document.form.textview.value;\r\n    document.form.textview.value = eval(string);\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;