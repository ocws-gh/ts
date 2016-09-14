/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	///<reference path="../../typings/index.d.ts" />
	"use strict";
	var sub = __webpack_require__(1);
	console.log(sub.Sub());
	// const j = $('body');
	// $(function(){
	//   $('body').html('TypeScript');
	// });
	// let dname:string = 'Hayashi';
	// const b ='My name is';
	// // バッククオートで全部囲んでもいいし、下のように分けてもいい。
	// const text:string = 'My name is'+`${dname}`;
	// console.log(text);
	// console.log(name);
	// for (var i =0; i < 5; i++) {
	//   setTimeout(function() {console.log(i), i * 100});
	// }
	// for (let i =0; i < 5; i++) {
	//   setTimeout(function() {console.log(i), i * 100});
	// }
	// function sum(a:number, b:number):number {
	//   console.log(a + b);
	// }
	// sum(1, 2); 


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	// module.exports = let funcA = () => true;
	// module.exports = "This is content.js!";
	function Sub(word) {
	    if (word === void 0) { word = "Typescript"; }
	    return "Hello, " + word;
	}
	exports.Sub = Sub;
	// let dndame:string = 'Hayashi';
	// const c ='My name is dd';
	// バッククオートで全部囲んでもいいし、下のように分けてもいい。
	// const textd:string = `${c} ${dndame}`;
	// console.log(textd);
	// function sum(a:number, b:number):number {
	//   console.log(a + b);
	// }
	// sum(1, 2); 


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map