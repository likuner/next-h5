"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products/index.tsx":
/*!**********************************!*\
  !*** ./pages/products/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@13.2.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ProductList = (props)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { products =[]  } = props;\n    const handleClick = (e)=>{\n        router.push(\"/products/\".concat(e.id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: products.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                onClick: ()=>handleClick(item),\n                children: item.title\n            }, item.id, false, {\n                fileName: \"/Users/likun/Documents/Works/next-app/pages/products/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 36\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/likun/Documents/Works/next-app/pages/products/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductList, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProductList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQU12QyxNQUFNQyxjQUFnQyxDQUFDQyxRQUFVOztJQUMvQyxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxVQUFXLEVBQUUsR0FBRSxHQUFHRjtJQUMxQixNQUFNRyxjQUFjLENBQUNDLElBQVc7UUFDOUJILE9BQU9JLElBQUksQ0FBQyxhQUFrQixPQUFMRCxFQUFFRSxFQUFFO0lBQy9CO0lBQ0EscUJBQ0UsOERBQUNDO2tCQUNFTCxTQUFTTSxHQUFHLENBQUMsQ0FBQ0MscUJBQWMsOERBQUNDO2dCQUFpQkMsU0FBUyxJQUFNUixZQUFZTTswQkFBUUEsS0FBS0csS0FBSztlQUF0REgsS0FBS0gsRUFBRTs7Ozs7Ozs7OztBQUduRDtHQVhNUDs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDOztBQXdCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9pbmRleC50c3g/NjEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT5cbn1cblxuY29uc3QgUHJvZHVjdExpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBwcm9kdWN0cyA9IFtdIH0gPSBwcm9wc1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBhbnkpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RzLyR7ZS5pZH1gKVxuICB9XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbTogYW55KSA9PiA8bGkga2V5PXtpdGVtLmlkfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtKX0+e2l0ZW0udGl0bGV9PC9saT4pfVxuICAgIDwvdWw+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xuICBjb25zb2xlLmxvZyhwYXJhbXMsICdwYXJhbXMtbGlzdCcpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMnKVxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlByb2R1Y3RMaXN0IiwicHJvcHMiLCJyb3V0ZXIiLCJwcm9kdWN0cyIsImhhbmRsZUNsaWNrIiwiZSIsInB1c2giLCJpZCIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwib25DbGljayIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/index.tsx\n"));

/***/ })

});