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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar IndexSlider = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), active = ref[0], setActive = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n        // setActive((prevState) => (active == 3 ? 1 : prevState + 1));\n        }, 5000);\n        return function() {\n            return clearInterval(interval);\n        };\n    }, [\n        active\n    ]);\n    console.log(active);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"slider-section bg-dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-slider\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 1 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(assets/images/slider/slide1.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 2 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(assets/images/slider/slide2.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"slider-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sub-title-three\",\n                                        children: [\n                                            \"Welcome to \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Wellearn\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 28\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Build Bright Life? Learn Many Things With Wellearn\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slider-btns\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"theme-btn style-four\",\n                                                children: [\n                                                    \"Get started \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fas fa-arrow-right\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 31\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://www.youtube.com/watch?v=9Y7ma241N8k\",\n                                                className: \"mfp-iframe slider-video-play\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-play\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slider-item \".concat(active == 3 ? \"slick-active\" : \"\"),\n                        style: {\n                            backgroundImage: \"url(assets/images/slider/slide3.jpg)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"slider-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sub-title-three\",\n                                        children: [\n                                            \"Welcome to \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Wellearn\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 28\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Build Bright Life? Learn Many Things With Wellearn\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"slider-btns\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"theme-btn style-four\",\n                                                children: [\n                                                    \"Get started \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                        className: \"fas fa-arrow-right\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 31\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://www.youtube.com/watch?v=9Y7ma241N8k\",\n                                                className: \"mfp-iframe slider-video-play\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-play\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pagingInfo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"pagingStatus\",\n                        children: \"03\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"separator\",\n                        children: \"/\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"pagingCount\",\n                        children: [\n                            \"0\",\n                            active\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"bg-text\",\n                children: \"Education\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"circle-two\",\n                src: \"assets/images/shapes/circle-one.png\",\n                alt: \"Circle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"circle-one\",\n                src: \"assets/images/shapes/circle-three.png\",\n                alt: \"Circle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Documents\\\\GitHub\\\\Wellearn\\\\src\\\\components\\\\slider\\\\IndexSlider.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(IndexSlider, \"vJ8yrrrKycTvuzfGJd8hlgMhQLA=\");\n_c = IndexSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexSlider);\nvar _c;\n$RefreshReg$(_c, \"IndexSlider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSW5kZXhTbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQTRDO0FBRTVDLElBQU1FLFdBQVcsR0FBRyxXQUFNOztJQUN4QixJQUE0QkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFoQ0UsTUFBTSxHQUFlRixHQUFXLEdBQTFCLEVBQUVHLFNBQVMsR0FBSUgsR0FBVyxHQUFmO0lBQ3hCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNSyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1FBQ2pDLCtEQUErRDtRQUNqRSxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBRVIsT0FBTzttQkFBTUMsYUFBYSxDQUFDRixRQUFRLENBQUM7U0FBQSxDQUFDO0lBQ3ZDLENBQUMsRUFBRTtRQUFDRixNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBQ2JLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixNQUFNLENBQUMsQ0FBQztJQUNwQixxQkFDRSw4REFBQ08sU0FBTztRQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzswQkFDekMsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxhQUFhOztrQ0FDMUIsOERBQUNDLEtBQUc7d0JBQ0ZELFNBQVMsRUFBRSxjQUFhLENBQW9DLE9BQWxDUixNQUFNLElBQUksQ0FBQyxHQUFHLGNBQWMsR0FBRyxFQUFFLENBQUU7d0JBQzdEVSxLQUFLLEVBQUU7NEJBQUVDLGVBQWUsRUFBRSxzQ0FBc0M7eUJBQUU7a0NBRWxFLDRFQUFDRixLQUFHOzRCQUFDRCxTQUFTLEVBQUMsV0FBVzs7Ozs7aUNBa0JwQjs7Ozs7NkJBQ0Y7a0NBQ04sOERBQUNDLEtBQUc7d0JBQ0ZELFNBQVMsRUFBRSxjQUFhLENBQW9DLE9BQWxDUixNQUFNLElBQUksQ0FBQyxHQUFHLGNBQWMsR0FBRyxFQUFFLENBQUU7d0JBQzdEVSxLQUFLLEVBQUU7NEJBQUVDLGVBQWUsRUFBRSxzQ0FBc0M7eUJBQUU7a0NBRWxFLDRF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QzNDQyxHQUFHLEVBQUMsUUFBUTs7Ozs7cUJBQ1o7Ozs7OzthQUNNLENBQ1Y7QUFDSixDQUFDO0dBeEdLcEIsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBeUdqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9JbmRleFNsaWRlci5qcz83YTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEluZGV4U2xpZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIC8vIHNldEFjdGl2ZSgocHJldlN0YXRlKSA9PiAoYWN0aXZlID09IDMgPyAxIDogcHJldlN0YXRlICsgMSkpO1xyXG4gICAgfSwgNTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFthY3RpdmVdKTtcclxuICBjb25zb2xlLmxvZyhhY3RpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzbGlkZXItc2VjdGlvbiBiZy1kYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zbGlkZXJcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzbGlkZXItaXRlbSAke2FjdGl2ZSA9PSAxID8gXCJzbGljay1hY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoYXNzZXRzL2ltYWdlcy9zbGlkZXIvc2xpZGUxLmpwZylcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlLXRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIDxzcGFuPldlbGxlYXJuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDI+QnVpbGQgQnJpZ2h0IExpZmU/IExlYXJuIE1hbnkgVGhpbmdzIFdpdGggV2VsbGVhcm48L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGhlbWUtYnRuIHN0eWxlLWZvdXJcIj5cclxuICAgICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTlZN21hMjQxTjhrXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZwLWlmcmFtZSBzbGlkZXItdmlkZW8tcGxheVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgc2xpZGVyLWl0ZW0gJHthY3RpdmUgPT0gMiA/IFwic2xpY2stYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGFzc2V0cy9pbWFnZXMvc2xpZGVyL3NsaWRlMi5qcGcpXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlLXRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIDxzcGFuPldlbGxlYXJuPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDI+QnVpbGQgQnJpZ2h0IExpZmU/IExlYXJuIE1hbnkgVGhpbmdzIFdpdGggV2VsbGVhcm48L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGhlbWUtYnRuIHN0eWxlLWZvdXJcIj5cclxuICAgICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTlZN21hMjQxTjhrXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWZwLWlmcmFtZSBzbGlkZXItdmlkZW8tcGxheVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BzbGlkZXItaXRlbSAke2FjdGl2ZSA9PSAzID8gXCJzbGljay1hY3RpdmVcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoYXNzZXRzL2ltYWdlcy9zbGlkZXIvc2xpZGUzLmpwZylcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGUtdGhyZWVcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gPHNwYW4+V2VsbGVhcm48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMj5CdWlsZCBCcmlnaHQgTGlmZT8gTGVhcm4gTWFueSBUaGluZ3MgV2l0aCBXZWxsZWFybjwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0aGVtZS1idG4gc3R5bGUtZm91clwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVk3bWEyNDFOOGtcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZnAtaWZyYW1lIHNsaWRlci12aWRlby1wbGF5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmdJbmZvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnaW5nU3RhdHVzXCI+MDM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+Lzwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdpbmdDb3VudFwiPjB7YWN0aXZlfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRleHRcIj5FZHVjYXRpb248L3NwYW4+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtdHdvXCJcclxuICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL3NoYXBlcy9jaXJjbGUtb25lLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiQ2lyY2xlXCJcclxuICAgICAgLz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1vbmVcIlxyXG4gICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvc2hhcGVzL2NpcmNsZS10aHJlZS5wbmdcIlxyXG4gICAgICAgIGFsdD1cIkNpcmNsZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkluZGV4U2xpZGVyIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic3BhbiIsImgyIiwiYSIsImhyZWYiLCJpIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/slider/IndexSlider.js\n"));

/***/ })

});