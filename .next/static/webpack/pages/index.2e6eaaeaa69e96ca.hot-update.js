"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/slider/IndexSlider.js":
/*!**********************************************!*\
  !*** ./src/components/slider/IndexSlider.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar IndexSlider = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), active = ref[0], setActive = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setActive(function(prevState) {\n                return active == 3 ? 1 : prevState + 1;\n            });\n        }, 5000);\n        return function() {\n            return clearInterval(interval);\n        };\n    }, [\n        active\n    ]);\n    console.log(active);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"slider-section bg-dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-slider\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 1 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(https://ipespharma.com/images/main-slider/image-1.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 2 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(https://ipespharma.com/images/main-slider/image-3.jpg)\",\n                            display: display\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 3 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(https://ipespharma.com/images/main-slider/image-2.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"bg-text\",\n                children: \"Education\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"circle-two\",\n                src: \"assets/images/shapes/circle-one.png\",\n                alt: \"Circle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(IndexSlider, \"vJ8yrrrKycTvuzfGJd8hlgMhQLA=\");\n_c = IndexSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexSlider);\nvar _c;\n$RefreshReg$(_c, \"IndexSlider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSW5kZXhTbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBRTVDLElBQU1FLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUE0QkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFoQ0UsTUFBTSxHQUFlRixHQUFXLEdBQTFCLEVBQUVHLFNBQVMsR0FBSUgsR0FBVyxHQUFmO0lBQ3hCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNSyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1lBQ2pDRixTQUFTLENBQUMsU0FBQ0csU0FBUzt1QkFBTUosTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdJLFNBQVMsR0FBRyxDQUFDO2FBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFBRSxJQUFJLENBQUM7UUFFUixPQUFPO21CQUFNQyxhQUFhLENBQUNILFFBQVEsQ0FBQztTQUFBLENBQUM7SUFDdkMsQ0FBQyxFQUFFO1FBQUNGLE1BQU07S0FBQyxDQUFDLENBQUM7SUFDYk0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHFCQUNFLDhEQUFDUSxTQUFPO1FBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OzBCQUN6Qyw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGFBQWE7O2tDQUMxQiw4REFBQ0MsS0FBRzt3QkFDRkQsU0FBUyxFQUFFLGNBQWEsQ0FBb0MsT0FBbENULE1BQU0sSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBRTt3QkFDN0RXLEtBQUssRUFBRTs0QkFBRUMsZUFBZSxFQUFFLDREQUE0RDt5QkFBRTtrQ0FFeEYsNEVBQUNGLEtBQUc7NEJBQUNELFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FrQnBCOzs7Ozs2QkFDRjtrQ0FDTiw4REFBQ0MsS0FBRzt3QkFDRkQsU0FBUyxFQUFFLGNBQWEsQ0FBb0MsT0FBbENULE1BQU0sSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBRTt3QkFDN0RXLEtBQUssRUFBRTs0QkFBRUMsZUFBZSxFQUFFLDREQUE0RDs0QkFBRUMsT0FBTyxFQUFQQSxPQUFPO3lCQUFFO2tDQUVqRyw0RUFBQ0gsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLFdBQVc7Ozs7O2lDQWtCcEI7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDQyxLQUFHO3dCQUNGRCxTQUFTLEVBQUUsY0FBYSxDQUFvQyxPQUFsQ1QsTUFBTSxJQUFJLENBQUMsR0FBRyxjQUFjLEdBQUcsRUFBRSxDQUFFO3dCQUM3RFcsS0FBSyxFQUFFOzRCQUFFQyxlQUFlLEVBQUUsNERBQTREO3lCQUFFO2tDQUV4Riw0RUFBQ0YsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLFdBQVc7Ozs7O2lDQWtCcEI7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7MEJBTU4sOERBQUNLLE1BQUk7Z0JBQUNMLFNBQVMsRUFBQyxTQUFTOzBCQUFDLFdBQVM7Ozs7O3FCQUFPOzBCQUMxQyw4REFBQ00sS0FBRztnQkFDRk4sU0FBUyxFQUFDLFlBQVk7Z0JBQ3RCTyxHQUFHLEVBQUMscUNBQXFDO2dCQUN6Q0MsR0FBRyxFQUFDLFFBQVE7Ozs7O3FCQUNaOzs7Ozs7YUFNTSxDQUNWO0FBQ0osQ0FBQztHQXhHS2xCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXlHakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSW5kZXhTbGlkZXIuanM/N2E1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmRleFNsaWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRBY3RpdmUoKHByZXZTdGF0ZSkgPT4gKGFjdGl2ZSA9PSAzID8gMSA6IHByZXZTdGF0ZSArIDEpKTtcclxuICAgIH0sIDUwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbYWN0aXZlXSk7XHJcbiAgY29uc29sZS5sb2coYWN0aXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xpZGVyLXNlY3Rpb24gYmctZGFya1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGVyLWl0ZW0gJHthY3RpdmUgPT0gMSA/IFwic2xpY2stYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vaXBlc3BoYXJtYS5jb20vaW1hZ2VzL21haW4tc2xpZGVyL2ltYWdlLTEuanBnKVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGUtdGhyZWVcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gPHNwYW4+V2VsbGVhcm48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMj5CdWlsZCBCcmlnaHQgTGlmZT8gTGVhcm4gTWFueSBUaGluZ3MgV2l0aCBXZWxsZWFybjwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aGVtZS1idG4gc3R5bGUtZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVk3bWEyNDFOOGtcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnAtaWZyYW1lIHNsaWRlci12aWRlby1wbGF5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzbGlkZXItaXRlbSAke2FjdGl2ZSA9PSAyID8gXCJzbGljay1hY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9pcGVzcGhhcm1hLmNvbS9pbWFnZXMvbWFpbi1zbGlkZXIvaW1hZ2UtMy5qcGcpXCIsIGRpc3BsYXkgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZS10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byA8c3Bhbj5XZWxsZWFybjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgyPkJ1aWxkIEJyaWdodCBMaWZlPyBMZWFybiBNYW55IFRoaW5ncyBXaXRoIFdlbGxlYXJuQTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aGVtZS1idG4gc3R5bGUtZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVk3bWEyNDFOOGtcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnAtaWZyYW1lIHNsaWRlci12aWRlby1wbGF5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzbGlkZXItaXRlbSAke2FjdGl2ZSA9PSAzID8gXCJzbGljay1hY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9pcGVzcGhhcm1hLmNvbS9pbWFnZXMvbWFpbi1zbGlkZXIvaW1hZ2UtMi5qcGcpXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZS10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byA8c3Bhbj5XZWxsZWFybjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgyPkJ1aWxkIEJyaWdodCBMaWZlPyBMZWFybiBNYW55IFRoaW5ncyBXaXRoIFdlbGxlYXJuPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1idG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRoZW1lLWJ0biBzdHlsZS1mb3VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj05WTdtYTI0MU44a1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1mcC1pZnJhbWUgc2xpZGVyLXZpZGVvLXBsYXlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5nSW5mb1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZ2luZ1N0YXR1c1wiPjAzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPi88L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnaW5nQ291bnRcIj4we2FjdGl2ZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdGV4dFwiPkVkdWNhdGlvbjwvc3Bhbj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS10d29cIlxyXG4gICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvc2hhcGVzL2NpcmNsZS1vbmUucG5nXCJcclxuICAgICAgICBhbHQ9XCJDaXJjbGVcIlxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1vbmVcIlxyXG4gICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvc2hhcGVzL2NpcmNsZS10aHJlZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cIkNpcmNsZVwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4U2xpZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmRleFNsaWRlciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImRpc3BsYXkiLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/slider/IndexSlider.js\n"));

/***/ })

});