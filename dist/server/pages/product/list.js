"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/product/list";
exports.ids = ["pages/product/list"];
exports.modules = {

/***/ "./pages/product/list.tsx":
/*!********************************!*\
  !*** ./pages/product/list.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductList = (props)=>{\n    console.log(props, \"list-props\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"list\"\n    }, void 0, false, {\n        fileName: \"/Users/likun/Documents/Works/next-app/pages/product/list.tsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://dummyjson.com/products\");\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L2xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsY0FBd0IsQ0FBQ0MsUUFBVTtJQUN2Q0MsUUFBUUMsR0FBRyxDQUFDRixPQUFPO0lBQ25CLHFCQUNFLDhEQUFDRztrQkFBSTs7Ozs7O0FBRVQ7QUFFTyxNQUFNQyxpQkFBaUIsVUFBWTtJQUN4QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU87UUFDTFIsT0FBTztZQUNMTztRQUNGO0lBQ0Y7QUFDRixFQUFDO0FBRUQsaUVBQWVSLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3Byb2R1Y3QvbGlzdC50c3g/YWEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcm9kdWN0TGlzdDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMsICdsaXN0LXByb3BzJylcbiAgcmV0dXJuIChcbiAgICA8ZGl2Pmxpc3Q8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0Il0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/list.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/list.tsx"));
module.exports = __webpack_exports__;

})();