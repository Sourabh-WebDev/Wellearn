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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar IndexSlider = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), active = ref[0], setActive = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setActive(function(prevState) {\n                return active == 3 ? 1 : prevState + 1;\n            });\n        }, 5000);\n        return function() {\n            return clearInterval(interval);\n        };\n    }, [\n        active\n    ]);\n    console.log(active);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"slider-section bg-dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-slider\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 1 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(https://ipespharma.com/images/main-slider/image-1.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 2 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(https://ipespharma.com/images/main-slider/image-3.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"slider-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sub-title-three\",\n                                        children: [\n                                            \"Welcome to \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Wellearn\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 28\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Build Bright Life? Learn Many Things With WellearnA\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slider-btns\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"theme-btn style-four\",\n                                                children: [\n                                                    \"Get started \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fas fa-arrow-right\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 31\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://www.youtube.com/watch?v=9Y7ma241N8k\",\n                                                className: \"mfp-iframe slider-video-play\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-play\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 3 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(https://ipespharma.com/images/main-slider/image-2.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"slider-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sub-title-three\",\n                                        children: [\n                                            \"Welcome to \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Wellearn\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 28\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Build Bright Life? Learn Many Things With Wellearn\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slider-btns\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"theme-btn style-four\",\n                                                children: [\n                                                    \"Get started \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fas fa-arrow-right\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 31\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://www.youtube.com/watch?v=9Y7ma241N8k\",\n                                                className: \"mfp-iframe slider-video-play\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-play\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"bg-text\",\n                children: \"Education\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"circle-two\",\n                src: \"assets/images/shapes/circle-one.png\",\n                alt: \"Circle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(IndexSlider, \"vJ8yrrrKycTvuzfGJd8hlgMhQLA=\");\n_c = IndexSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexSlider);\nvar _c;\n$RefreshReg$(_c, \"IndexSlider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSW5kZXhTbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBRTVDLElBQU1FLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUE0QkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFoQ0UsTUFBTSxHQUFlRixHQUFXLEdBQTFCLEVBQUVHLFNBQVMsR0FBSUgsR0FBVyxHQUFmO0lBQ3hCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNSyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1lBQ2pDRixTQUFTLENBQUMsU0FBQ0csU0FBUzt1QkFBTUosTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdJLFNBQVMsR0FBRyxDQUFDO2FBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsRUFBRSxJQUFJLENBQUM7UUFFUixPQUFPO21CQUFNQyxhQUFhLENBQUNILFFBQVEsQ0FBQztTQUFBLENBQUM7SUFDdkMsQ0FBQyxFQUFFO1FBQUNGLE1BQU07S0FBQyxDQUFDLENBQUM7SUFDYk0sT0FBTyxDQUFDQyxHQUFHLENBQUNQLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHFCQUNFLDhEQUFDUSxTQUFPO1FBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OzBCQUN6Qyw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGFBQWE7O2tDQUMxQiw4REFBQ0MsS0FBRzt3QkFDRkQsU0FBUyxFQUFFLGNBQWEsQ0FBb0MsT0FBbENULE1BQU0sSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBRTt3QkFDN0RXLEtBQUssRUFBRTs0QkFBRUMsZUFBZSxFQUFFLDREQUE0RDt5QkFBRTtrQ0FFeEYsNEVBQUNGLEtBQUc7NEJBQUNELFNBQVMsRUFBQyxXQUFXOzs7OztpQ0FrQnBCOzs7Ozs2QkFDRjtrQ0FDTiw4REFBQ0MsS0FBRzt3QkFDRkQsU0FBUyxFQUFFLGNBQWEsQ0FBb0MsT0FBbENULE1BQU0sSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBRTt3QkFDN0RXLEtBQUssRUFBRTs0QkFBRUMsZUFBZSxFQUFFLDREQUE0RDt5QkFBRTtrQ0FFeEYsNEVBQUNGLEtBQUc7NEJBQUNELFNBQVMsRUFBQyxXQUFXO3NDQUN4Qiw0RUFBQ0MsS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLGdCQUFnQjs7a0RBQzdCLDhEQUFDSSxNQUFJO3dDQUFDSixTQUFTLEVBQUMsaUJBQWlCOzs0Q0FBQyxhQUNyQjswREFBQSw4REFBQ0ksTUFBSTswREFBQyxVQUFROzs7OztxREFBTzs7Ozs7OzZDQUMzQjtrREFDUCw4REFBQ0MsSUFBRTtrREFBQyxxREFBbUQ7Ozs7OzZDQUFLO2tEQUM1RCw4REFBQ0osS0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLGFBQWE7OzBEQUMxQiw4REFBQ00sR0FBQztnREFBQ0MsSUFBSSxFQUFDLEdBQUc7Z0RBQUNQLFNBQVMsRUFBQyxzQkFBc0I7O29EQUFDLGNBQy9CO2tFQUFBLDhEQUFDUSxHQUFDO3dEQUFDUixTQUFTLEVBQUMsb0JBQW9COzs7Ozs2REFBRzs7Ozs7O3FEQUM5QzswREFDSiw4REFBQ00sR0FBQztnREFDQUMsSUFBSSxFQUFDLDZDQUE2QztnREFDbERQLFNBQVMsRUFBQyw4QkFBOEI7MERBRXhDLDRFQUFDUSxHQUFDO29EQUFDUixTQUFTLEVBQUMsYUFBYTs7Ozs7eURBQUc7Ozs7O3FEQUMzQjs7Ozs7OzZDQUNBOzs7Ozs7cUNBQ0Y7Ozs7O2lDQUNGOzs7Ozs2QkFDRjtrQ0FDTiw4REFBQ0MsS0FBRzt3QkFDRkQsU0FBUyxFQUFFLGNBQWEsQ0FBb0MsT0FBbENULE1BQU0sSUFBSSxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBRTt3QkFDN0RXLEtBQUssRUFBRTs0QkFBRUMsZUFBZSxFQUFFLDREQUE0RDt5QkFBRTtrQ0FFeEYsNEVBQUNGLEtBQUc7NEJBQUNELFNBQVMsRUFBQyxXQUFXO3NDQUN4Qiw0RUFBQ0MsS0FBRztnQ0FBQ0QsU0FBUyxFQUFDLGdCQUFnQjs7a0RBQzdCLDhEQUFDSSxNQUFJO3dDQUFDSixTQUFTLEVBQUMsaUJBQWlCOzs0Q0FBQyxhQUNyQjswREFBQSw4REFBQ0ksTUFBSTswREFBQyxVQUFROzs7OztxREFBTzs7Ozs7OzZDQUMzQjtrREFDUCw4REFBQ0MsSUFBRTtrREFBQyxvREFBa0Q7Ozs7OzZDQUFLO2tEQUMzRCw4REFBQ0osS0FBRzt3Q0FBQ0QsU0FBUyxFQUFDLGFBQWE7OzBEQUMxQiw4REFBQ00sR0FBQztnREFBQ0MsSUFBSSxFQUFDLEdBQUc7Z0RBQUNQLFNBQVMsRUFBQyxzQkFBc0I7O29EQUFDLGNBQy9CO2tFQUFBLDhEQUFDUSxHQUFDO3dEQUFDUixTQUFTLEVBQUMsb0JBQW9COzs7Ozs2REFBRzs7Ozs7O3FEQUM5QzswREFDSiw4REFBQ00sR0FBQztnREFDQUMsSUFBSSxFQUFDLDZDQUE2QztnREFDbERQLFNBQVMsRUFBQyw4QkFBOEI7MERBRXhDLDRFQUFDUSxHQUFDO29EQUFDUixTQUFTLEVBQUMsYUFBYTs7Ozs7eURBQUc7Ozs7O3FEQUMzQjs7Ozs7OzZDQUNBOzs7Ozs7cUNBQ0Y7Ozs7O2lDQUNGOzs7Ozs2QkFDRjs7Ozs7O3FCQUNGOzBCQU1OLDhEQUFDSSxNQUFJO2dCQUFDSixTQUFTLEVBQUMsU0FBUzswQkFBQyxXQUFTOzs7OztxQkFBTzswQkFDMUMsOERBQUNTLEtBQUc7Z0JBQ0ZULFNBQVMsRUFBQyxZQUFZO2dCQUN0QlUsR0FBRyxFQUFDLHFDQUFxQztnQkFDekNDLEdBQUcsRUFBQyxRQUFROzs7OztxQkFDWjs7Ozs7O2FBTU0sQ0FDVjtBQUNKLENBQUM7R0F4R0tyQixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUF5R2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL0luZGV4U2xpZGVyLmpzPzdhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW5kZXhTbGlkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0QWN0aXZlKChwcmV2U3RhdGUpID0+IChhY3RpdmUgPT0gMyA/IDEgOiBwcmV2U3RhdGUgKyAxKSk7XHJcbiAgICB9LCA1MDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2FjdGl2ZV0pO1xyXG4gIGNvbnNvbGUubG9nKGFjdGl2ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNsaWRlci1zZWN0aW9uIGJnLWRhcmtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNsaWRlclwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWRlci1pdGVtICR7YWN0aXZlID09IDEgPyBcInNsaWNrLWFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL2lwZXNwaGFybWEuY29tL2ltYWdlcy9tYWluLXNsaWRlci9pbWFnZS0xLmpwZylcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlLXRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIDxzcGFuPldlbGxlYXJuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDI+QnVpbGQgQnJpZ2h0IExpZmU/IExlYXJuIE1hbnkgVGhpbmdzIFdpdGggV2VsbGVhcm48L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGhlbWUtYnRuIHN0eWxlLWZvdXJcIj5cclxuICAgICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTlZN21hMjQxTjhrXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZwLWlmcmFtZSBzbGlkZXItdmlkZW8tcGxheVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGVyLWl0ZW0gJHthY3RpdmUgPT0gMiA/IFwic2xpY2stYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vaXBlc3BoYXJtYS5jb20vaW1hZ2VzL21haW4tc2xpZGVyL2ltYWdlLTMuanBnKVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZS10aHJlZVwiPlxyXG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byA8c3Bhbj5XZWxsZWFybjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgyPkJ1aWxkIEJyaWdodCBMaWZlPyBMZWFybiBNYW55IFRoaW5ncyBXaXRoIFdlbGxlYXJuQTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aGVtZS1idG4gc3R5bGUtZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVk3bWEyNDFOOGtcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnAtaWZyYW1lIHNsaWRlci12aWRlby1wbGF5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHNsaWRlci1pdGVtICR7YWN0aXZlID09IDMgPyBcInNsaWNrLWFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL2lwZXNwaGFybWEuY29tL2ltYWdlcy9tYWluLXNsaWRlci9pbWFnZS0yLmpwZylcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGUtdGhyZWVcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gPHNwYW4+V2VsbGVhcm48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMj5CdWlsZCBCcmlnaHQgTGlmZT8gTGVhcm4gTWFueSBUaGluZ3MgV2l0aCBXZWxsZWFybjwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aGVtZS1idG4gc3R5bGUtZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVk3bWEyNDFOOGtcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnAtaWZyYW1lIHNsaWRlci12aWRlby1wbGF5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5nSW5mb1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZ2luZ1N0YXR1c1wiPjAzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPi88L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnaW5nQ291bnRcIj4we2FjdGl2ZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdGV4dFwiPkVkdWNhdGlvbjwvc3Bhbj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS10d29cIlxyXG4gICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvc2hhcGVzL2NpcmNsZS1vbmUucG5nXCJcclxuICAgICAgICBhbHQ9XCJDaXJjbGVcIlxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1vbmVcIlxyXG4gICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvc2hhcGVzL2NpcmNsZS10aHJlZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cIkNpcmNsZVwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4U2xpZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmRleFNsaWRlciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNwYW4iLCJoMiIsImEiLCJocmVmIiwiaSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/slider/IndexSlider.js\n"));

/***/ })

});