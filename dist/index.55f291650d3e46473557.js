"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

// import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
component();
// const btn = document.createElement("button");

// btn.innerHTML = "Click me dynamic import!";

// document.body.appendChild(btn);

// btn.onclick = async function getComponent() {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// };

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTVmMjkxNjUwZDNlNDY0NzM1NTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isa0RBQU07O0FBRTVCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsYUFBYTs7QUFFMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG4vLyBpbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuXG4gIGJ0bi5pbm5lckhUTUwgPSBcIkNsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcbiAgLy8gYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbmNvbXBvbmVudCgpO1xuLy8gY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgZHluYW1pYyBpbXBvcnQhXCI7XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcblxuLy8gYnRuLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydChcImxvZGFzaFwiKTtcblxuLy8gICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcblxuLy8gICByZXR1cm4gZWxlbWVudDtcbi8vIH07XG5cbi8vIGdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==