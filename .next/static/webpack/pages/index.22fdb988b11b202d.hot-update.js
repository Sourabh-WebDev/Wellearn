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

/***/ "./pages/StudentoftheYear.js":
/*!***********************************!*\
  !*** ./pages/StudentoftheYear.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StudentoftheYear = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), stdOfMonth = ref[0], setStdOfMonth = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), instructorOfMonth = ref1[0], setInstructorOfMonth = ref1[1];\n    var FetchStdOfTheMonth = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_config__WEBPACK_IMPORTED_MODULE_2__.backendUrl + \"/api/studentofmonth\")\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        // Handle the successful response here\n                        setStdOfMonth.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(response.data));\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        // Handle the error here\n                        console.error(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function FetchStdOfTheMonth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var FetchInstructorOfTheMonth = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_config__WEBPACK_IMPORTED_MODULE_2__.backendUrl + \"/api/instructorofmonth\")\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        // Handle the successful response here\n                        setInstructorOfMonth.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(response.data));\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        // Handle the error here\n                        console.error(error);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function FetchInstructorOfTheMonth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        FetchStdOfTheMonth();\n        FetchInstructorOfTheMonth();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.backendUrl, \"/instructorofmonth/\").concat(instructorOfMonth ? instructorOfMonth.img : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"text-nowrap\",\n                                        children: \"Instructor Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: instructorOfMonth ? instructorOfMonth.name : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \" course :  \",\n                                            instructorOfMonth ? instructorOfMonth.course : \"NA\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Description : \",\n                                            instructorOfMonth ? instructorOfMonth.desc : \"NA\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 mobileTopMargin col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.backendUrl, \"/studentofmonth/\").concat(stdOfMonth ? stdOfMonth.img : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Student Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            stdOfMonth ? stdOfMonth.name : \"\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Course : \",\n                                            stdOfMonth ? stdOfMonth.course : \"\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(StudentoftheYear, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = StudentoftheYear;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentoftheYear);\nvar _c;\n$RefreshReg$(_c, \"StudentoftheYear\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1N0dWRlbnRvZnRoZVllYXIuanM/M2Q4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcbmNvbnN0IFN0dWRlbnRvZnRoZVllYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0ZE9mTW9udGgsIHNldFN0ZE9mTW9udGhdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtpbnN0cnVjdG9yT2ZNb250aCwgc2V0SW5zdHJ1Y3Rvck9mTW9udGhdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IEZldGNoU3RkT2ZUaGVNb250aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChjb25maWcuYmFja2VuZFVybCArIFwiL2FwaS9zdHVkZW50b2Ztb250aFwiKTtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBzdWNjZXNzZnVsIHJlc3BvbnNlIGhlcmVcclxuICAgICAgICAgICAgc2V0U3RkT2ZNb250aCguLi5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IEZldGNoSW5zdHJ1Y3Rvck9mVGhlTW9udGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoY29uZmlnLmJhY2tlbmRVcmwgKyBcIi9hcGkvaW5zdHJ1Y3Rvcm9mbW9udGhcIik7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZSBoZXJlXHJcbiAgICAgICAgICAgIHNldEluc3RydWN0b3JPZk1vbnRoKC4uLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgRmV0Y2hTdGRPZlRoZU1vbnRoKCk7XHJcbiAgICAgICAgRmV0Y2hJbnN0cnVjdG9yT2ZUaGVNb250aCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjb2wtbGctNiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckZvclNPWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkU09ZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtjb25maWcuYmFja2VuZFVybH0vaW5zdHJ1Y3Rvcm9mbW9udGgvJHtpbnN0cnVjdG9yT2ZNb250aCA/IGluc3RydWN0b3JPZk1vbnRoLmltZyA6IFwiXCJ9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtbm93cmFwJz5JbnN0cnVjdG9yIE9mIFRoZSBNb250aCDwn4+GPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aW5zdHJ1Y3Rvck9mTW9udGggPyBpbnN0cnVjdG9yT2ZNb250aC5uYW1lIDogXCJcIn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBwID4gY291cnNlIDogIHtpbnN0cnVjdG9yT2ZNb250aCA/IGluc3RydWN0b3JPZk1vbnRoLmNvdXJzZSA6IFwiTkFcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZXNjcmlwdGlvbiA6IHtpbnN0cnVjdG9yT2ZNb250aCA/IGluc3RydWN0b3JPZk1vbnRoLmRlc2MgOiBcIk5BXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBtb2JpbGVUb3BNYXJnaW4gY29sLWxnLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGb3JTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZFNPWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7Y29uZmlnLmJhY2tlbmRVcmx9L3N0dWRlbnRvZm1vbnRoLyR7c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguaW1nIDogXCJcIn1gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdHVkZW50IE9mIFRoZSBNb250aCDwn4+GPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57c3RkT2ZNb250aCA/IHN0ZE9mTW9udGgubmFtZSA6IFwiXCJ9IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Db3Vyc2UgOiB7c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguY291cnNlIDogXCJcIn08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudG9mdGhlWWVhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uZmlnIiwiU3R1ZGVudG9mdGhlWWVhciIsInN0ZE9mTW9udGgiLCJzZXRTdGRPZk1vbnRoIiwiaW5zdHJ1Y3Rvck9mTW9udGgiLCJzZXRJbnN0cnVjdG9yT2ZNb250aCIsIkZldGNoU3RkT2ZUaGVNb250aCIsInJlc3BvbnNlIiwiZXJyb3IiLCJnZXQiLCJiYWNrZW5kVXJsIiwiZGF0YSIsImNvbnNvbGUiLCJGZXRjaEluc3RydWN0b3JPZlRoZU1vbnRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDUiLCJoMyIsIm5hbWUiLCJwIiwiY291cnNlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/StudentoftheYear.js\n"));

/***/ })

});