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
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./pages/products/index.module.css":
/*!*****************************************!*\
  !*** ./pages/products/index.module.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"inline\": \"products_inline__hzT4c\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5tb2R1bGUuY3NzP2IzM2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5saW5lXCI6IFwicHJvZHVjdHNfaW5saW5lX19oelQ0Y1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.module.css\n");

/***/ }),

/***/ "./pages/products/index.tsx":
/*!**********************************!*\
  !*** ./pages/products/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/products/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductList = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { products =[]  } = props;\n    const handleClick = (e)=>{\n        router.push(`/products/${e.id}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().inline),\n        children: products.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                onClick: ()=>handleClick(item),\n                children: item.title\n            }, item.id, false, {\n                fileName: \"/Users/likun/Documents/Works/next-app/pages/products/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/likun/Documents/Works/next-app/pages/products/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    const res = await fetch(\"https://dummyjson.com/products\");\n    const { products  } = await res.json();\n    return {\n        props: {\n            products\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFNdkMsTUFBTUUsY0FBZ0MsQ0FBQ0MsUUFBVTtJQUMvQyxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxVQUFXLEVBQUUsR0FBRSxHQUFHRjtJQUMxQixNQUFNRyxjQUFjLENBQUNDLElBQVc7UUFDOUJILE9BQU9JLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRUQsRUFBRUUsRUFBRSxDQUFDLENBQUM7SUFDakM7SUFDQSxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBV1YsaUVBQWE7a0JBQ3pCSSxTQUFTUSxHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUNDO2dCQUFpQkMsU0FBUyxJQUFNVixZQUFZUTswQkFBUUEsS0FBS0csS0FBSztlQUF0REgsS0FBS0wsRUFBRTs7Ozs7Ozs7OztBQUl4QjtBQUVPLE1BQU1TLHFCQUFxQixVQUFZO0lBQzVDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixNQUFNLEVBQUVmLFNBQVEsRUFBRSxHQUFHLE1BQU1jLElBQUlFLElBQUk7SUFDbkMsT0FBTztRQUNMbEIsT0FBTztZQUNMRTtRQUNGO0lBQ0Y7QUFDRixFQUFDO0FBRUQsaUVBQWVILFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LnRzeD82MTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwcm9kdWN0czogYW55W11cbn1cblxuY29uc3QgUHJvZHVjdExpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBwcm9kdWN0cyA9IFtdIH0gPSBwcm9wc1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBhbnkpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RzLyR7ZS5pZH1gKVxuICB9XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmlubGluZX0+XG4gICAgICB7cHJvZHVjdHMubWFwKChpdGVtOiBhbnkpID0+IFxuICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtKX0+e2l0ZW0udGl0bGV9PC9saT5cbiAgICAgICl9XG4gICAgPC91bD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzJylcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0c1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJQcm9kdWN0TGlzdCIsInByb3BzIiwicm91dGVyIiwicHJvZHVjdHMiLCJoYW5kbGVDbGljayIsImUiLCJwdXNoIiwiaWQiLCJ1bCIsImNsYXNzTmFtZSIsImlubGluZSIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siLCJ0aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/index.tsx"));
module.exports = __webpack_exports__;

})();