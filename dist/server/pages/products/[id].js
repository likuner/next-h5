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
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].tsx":
/*!*********************************!*\
  !*** ./pages/products/[id].tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductDetail = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query: { id  } = {}  } = router;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"detail-\",\n            id\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/likun/Documents/Works/next-app/pages/products/[id].tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (params)=>{\n    console.log(params, \"params\");\n    const res = await fetch(\"https://dummyjson.com/product/1\");\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBRXZDLE1BQU1DLGdCQUEwQixJQUFNO0lBQ3BDLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLE9BQU8sRUFBRUMsR0FBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUUsR0FBR0Y7SUFDL0IscUJBQ0UsOERBQUNHOztZQUFJO1lBQVFEOzs7Ozs7O0FBRWpCO0FBRU8sTUFBTUUscUJBQXFCLE9BQU9DLFNBQWdCO0lBQ3ZEQyxRQUFRQyxHQUFHLENBQUNGLFFBQVE7SUFDcEIsTUFBTUcsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPO1FBQ0xDLE9BQU87WUFDTEY7UUFDRjtJQUNGO0FBQ0YsRUFBQztBQUVELGlFQUFlWCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9wcm9kdWN0cy9baWRdLnRzeD84ZjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBQcm9kdWN0RGV0YWlsOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBxdWVyeTogeyBpZCB9ID0ge30gfSA9IHJvdXRlclxuICByZXR1cm4gKFxuICAgIDxkaXY+ZGV0YWlsLXtpZH08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHBhcmFtczogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKHBhcmFtcywgJ3BhcmFtcycpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdC8xJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlByb2R1Y3REZXRhaWwiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwiZGl2IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].tsx"));
module.exports = __webpack_exports__;

})();