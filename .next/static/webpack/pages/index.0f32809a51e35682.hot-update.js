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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StudentoftheYear = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), stdOfMonth = ref[0], setStdOfMonth = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), instructorOfMonth = ref1[0], setInstructorOfMonth = ref1[1];\n    var FetchStdOfTheMonth = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_config__WEBPACK_IMPORTED_MODULE_3__.backendUrl + \"/api/studentofmonth\");\n                    case 3:\n                        response = _ctx.sent;\n                        // Handle the successful response here\n                        setStdOfMonth.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(response.data));\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        // Handle the error here\n                        console.error(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function FetchStdOfTheMonth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var FetchInstructorOfTheMonth = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_config__WEBPACK_IMPORTED_MODULE_3__.backendUrl + \"/api/instructorofmonth\");\n                    case 3:\n                        response = _ctx.sent;\n                        // Handle the successful response here\n                        setInstructorOfMonth.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(response.data));\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        // Handle the error here\n                        console.error(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function FetchInstructorOfTheMonth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        FetchStdOfTheMonth();\n        FetchInstructorOfTheMonth();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__.backendUrl, \"instructorofmonth/\").concat(stdOfMonth ? stdOfMonth.img : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                        className: \"text-nowrap\",\n                                        children: \"Instructor Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: instructorOfMonth ? instructorOfMonth.name : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \" \",\n                                            instructorOfMonth ? instructorOfMonth.course : \"\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 mobileTopMargin col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: \"\".concat(_config__WEBPACK_IMPORTED_MODULE_3__.backendUrl, \"studentofmonth/\").concat(stdOfMonth ? stdOfMonth.img : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                        children: \"Student Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            stdOfMonth ? stdOfMonth.name : \"\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: stdOfMonth ? stdOfMonth.course : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_s(StudentoftheYear, \"TzMbx2bAjDhvCkrav3tHkEymkoI=\");\n_c = StudentoftheYear;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentoftheYear);\nvar _c;\n$RefreshReg$(_c, \"StudentoftheYear\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs4QkFDNUIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxjQUFjOzswQ0FDekIsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxtQkFBbUI7O2tEQUM5Qiw4REFBQ0MsS0FBRzt3Q0FBQ0MsR0FBRyxFQUFFLEVBQUMsQ0FBcUNmLE1BQWdDLENBQW5FRiwrQ0FBaUIsRUFBQyxpQkFBZSxDQUFtQyxRQUFqQ0UsVUFBVSxHQUFHQSxVQUFVLENBQUNjLEdBQUcsR0FBRyxFQUFFLENBQUU7Ozs7OzZDQUFJO2tEQUV0Riw4REFBQ0UsSUFBRTtrREFBQyxtQ0FBc0I7Ozs7OzZDQUFLOzs7Ozs7cUNBQzdCOzBDQUNOLDhEQUFDSixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsU0FBUzs7a0RBQ3BCLDhEQUFDSSxJQUFFOzs0Q0FBRWpCLFVBQVUsR0FBR0EsVUFBVSxDQUFDa0IsSUFBSSxHQUFHLEVBQUU7NENBQUMsR0FBQzs7Ozs7OzZDQUFLO2tEQUM3Qyw4REFBQ0MsR0FBQztrREFBRW5CLFVBQVUsR0FBR0EsVUFBVSxDQUFDb0IsTUFBTSxHQUFHLEVBQUU7Ozs7OzZDQUFLOzs7Ozs7cUNBQzFDOzs7Ozs7NkJBQ0o7Ozs7O3lCQUNKOzs7OztxQkFDSjs7Ozs7O2FBQ0osQ0FDVDtDQUNKO0dBakVLckIsZ0JBQWdCO0FBQWhCQSxLQUFBQSxnQkFBZ0I7QUFtRXRCLCtEQUFlQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3R1ZGVudG9mdGhlWWVhci5qcz8zZDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxyXG5cclxuY29uc3QgU3R1ZGVudG9mdGhlWWVhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RkT2ZNb250aCwgc2V0U3RkT2ZNb250aF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2luc3RydWN0b3JPZk1vbnRoLCBzZXRJbnN0cnVjdG9yT2ZNb250aF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgRmV0Y2hTdGRPZlRoZU1vbnRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGNvbmZpZy5iYWNrZW5kVXJsICsgXCIvYXBpL3N0dWRlbnRvZm1vbnRoXCIpO1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgaGVyZVxyXG4gICAgICAgICAgICBzZXRTdGRPZk1vbnRoKC4uLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgRmV0Y2hJbnN0cnVjdG9yT2ZUaGVNb250aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChjb25maWcuYmFja2VuZFVybCArIFwiL2FwaS9pbnN0cnVjdG9yb2Ztb250aFwiKTtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBzdWNjZXNzZnVsIHJlc3BvbnNlIGhlcmVcclxuICAgICAgICAgICAgc2V0SW5zdHJ1Y3Rvck9mTW9udGgoLi4ucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBGZXRjaFN0ZE9mVGhlTW9udGgoKTtcclxuICAgICAgICBGZXRjaEluc3RydWN0b3JPZlRoZU1vbnRoKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTEyIGNvbC1sZy02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyRm9yU09ZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmRTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2NvbmZpZy5iYWNrZW5kVXJsfWluc3RydWN0b3JvZm1vbnRoLyR7c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguaW1nIDogXCJcIn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1ub3dyYXAnPkluc3RydWN0b3IgT2YgVGhlIE1vbnRoIPCfj4Y8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpbnN0cnVjdG9yT2ZNb250aCA/IGluc3RydWN0b3JPZk1vbnRoLm5hbWUgOiBcIlwifTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IHAgPiB7aW5zdHJ1Y3Rvck9mTW9udGggPyBpbnN0cnVjdG9yT2ZNb250aC5jb3Vyc2UgOiBcIlwifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTIgbW9iaWxlVG9wTWFyZ2luIGNvbC1sZy02IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyRm9yU09ZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmRTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2NvbmZpZy5iYWNrZW5kVXJsfXN0dWRlbnRvZm1vbnRoLyR7c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguaW1nIDogXCJcIn1gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdHVkZW50IE9mIFRoZSBNb250aCDwn4+GPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57c3RkT2ZNb250aCA/IHN0ZE9mTW9udGgubmFtZSA6IFwiXCJ9IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguY291cnNlIDogXCJcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50b2Z0aGVZZWFyIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIlN0dWRlbnRvZnRoZVllYXIiLCJzdGRPZk1vbnRoIiwic2V0U3RkT2ZNb250aCIsImluc3RydWN0b3JPZk1vbnRoIiwic2V0SW5zdHJ1Y3Rvck9mTW9udGgiLCJGZXRjaFN0ZE9mVGhlTW9udGgiLCJyZXNwb25zZSIsImdldCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiRmV0Y2hJbnN0cnVjdG9yT2ZUaGVNb250aCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImg1IiwiaDMiLCJuYW1lIiwicCIsImNvdXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/StudentoftheYear.js\n"));

/***/ })

});