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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StudentoftheYear = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), stdOfMonth = ref[0], setStdOfMonth = ref[1];\n    var FetchStdOf = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_config__WEBPACK_IMPORTED_MODULE_3__.backendUrl + \"/api/studentofmonth\");\n                    case 3:\n                        response = _ctx.sent;\n                        // Handle the successful response here\n                        setStdOfMonth.apply(void 0, (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(response.data));\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        // Handle the error here\n                        console.error(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function FetchStdOf() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: \"assets/images/teams/member1.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                        className: \"text-nowrap\",\n                                        children: \"Instructor Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: \"This is content\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: \"DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual     form of a document or a typeface without         relying on meaningful content.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 mobileTopMargin col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: \"https://smseduca.onrender.com/studentofmonth/\".concat(stdOfMonth ? stdOfMonth.img : \"\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                        children: \"Student Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: [\n                                            stdOfMonth ? stdOfMonth.name : \"\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: stdOfMonth ? stdOfMonth.course : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_s(StudentoftheYear, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = StudentoftheYear;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentoftheYear);\nvar _c;\n$RefreshReg$(_c, \"StudentoftheYear\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TdHVkZW50b2Z0aGVZZWFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUF5QjtBQUNBO0FBQ087QUFDQztBQUNFO0FBRW5DLElBQU1LLGdCQUFnQixHQUFHLFdBQU07O0lBRTNCLElBQW9DSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQTNDSSxVQUFVLEdBQW1CSixHQUFjLEdBQWpDLEVBQUVLLGFBQWEsR0FBSUwsR0FBYyxHQUFsQjtJQUNoQyxJQUFNTSxVQUFVO21CQUFHLDBRQUFZO2dCQUVqQkMsUUFBUTs7Ozs7OytCQUFTUixpREFBUyxDQUFDRywrQ0FBaUIsR0FBRyxxQkFBcUIsQ0FBQzs7d0JBQXJFSyxRQUFRLFlBQTZEO3dCQUMzRSxzQ0FBc0M7d0JBQ3RDRixhQUFhLENBQWJBLEtBQStCLENBQS9CQSxLQUFBQSxDQUFhLEVBQUMscUZBQUdFLFFBQVEsQ0FBQ0csSUFBSSxDQUFiSCxDQUFjLENBQUM7Ozs7Ozt3QkFFaEMsd0JBQXdCO3dCQUN4QkksT0FBTyxDQUFDQyxLQUFLLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7U0FFNUI7d0JBVEtOLFVBQVU7OztPQVNmO0lBRURMLGdEQUFTLENBQUMsV0FBTTtRQUNaWSxTQUFTLEVBQUUsQ0FBQztLQUNmLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHUCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSzs7MEJBRWhCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0RBQWtEOzBCQUM3RCw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs4QkFDNUIsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxjQUFjOzswQ0FDekIsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxtQkFBbUI7O2tEQUM5Qiw4REFBQ0MsS0FBRzt3Q0FBQ0MsR0FBRyxFQUFDLGlDQUFpQzs7Ozs7NkNBQUc7a0RBQzdDLDhEQUFDQyxJQUFFO3dDQUFDSCxTQUFTLEVBQUMsYUFBYTtrREFBQyxzQ0FBeUI7Ozs7OzZDQUFLOzs7Ozs7cUNBQ3hEOzBDQUNOLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsU0FBUzs7a0RBQ3BCLDhEQUFDSSxJQUFFO2tEQUFDLGlCQUFlOzs7Ozs2Q0FBSztrREFDeEIsOERBQUNDLEdBQUM7a0RBQUMsa01BQWdNOzs7Ozs2Q0FBSTs7Ozs7O3FDQUNyTTs7Ozs7OzZCQUNKOzs7Ozt5QkFDSjs7Ozs7cUJBQ0o7MEJBQ04sOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrRUFBa0U7MEJBQzdFLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzhCQUM1Qiw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGNBQWM7OzBDQUN6Qiw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7a0RBQzlCLDhEQUFDQyxLQUFHO3dDQUFDQyxHQUFHLEVBQUUsK0NBQThDLENBQW1DLE9BQWpDYixVQUFVLEdBQUdBLFVBQVUsQ0FBQ1ksR0FBRyxHQUFHLEVBQUUsQ0FBRTs7Ozs7NkNBQUk7a0RBRWhHLDhEQUFDRSxJQUFFO2tEQUFDLG1DQUFzQjs7Ozs7NkNBQUs7Ozs7OztxQ0FDN0I7MENBQ04sOERBQUNKLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxTQUFTOztrREFDcEIsOERBQUNJLElBQUU7OzRDQUFFZixVQUFVLEdBQUdBLFVBQVUsQ0FBQ2lCLElBQUksR0FBRyxFQUFFOzRDQUFDLEdBQUM7Ozs7Ozs2Q0FBSztrREFDN0MsOERBQUNELEdBQUM7a0RBQUVoQixVQUFVLEdBQUdBLFVBQVUsQ0FBQ2tCLE1BQU0sR0FBRyxFQUFFOzs7Ozs2Q0FBSzs7Ozs7O3FDQUMxQzs7Ozs7OzZCQUNKOzs7Ozt5QkFDSjs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1Q7Q0FDSjtHQXJES25CLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBdUR0QiwrREFBZUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1N0dWRlbnRvZnRoZVllYXIuanM/M2Q4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcbmNvbnN0IFN0dWRlbnRvZnRoZVllYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0ZE9mTW9udGgsIHNldFN0ZE9mTW9udGhdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IEZldGNoU3RkT2YgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoY29uZmlnLmJhY2tlbmRVcmwgKyBcIi9hcGkvc3R1ZGVudG9mbW9udGhcIik7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZSBoZXJlXHJcbiAgICAgICAgICAgIHNldFN0ZE9mTW9udGgoLi4ucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTIgY29sLWxnLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGb3JTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZFNPWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy90ZWFtcy9tZW1iZXIxLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtbm93cmFwJz5JbnN0cnVjdG9yIE9mIFRoZSBNb250aCDwn4+GPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaGlzIGlzIGNvbnRlbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+REluIHB1Ymxpc2hpbmcgYW5kIGdyYXBoaWMgZGVzaWduLCBMb3JlbSBpcHN1bSBpcyBhIHBsYWNlaG9sZGVyIHRleHQgY29tbW9ubHkgdXNlZCB0byBkZW1vbnN0cmF0ZSB0aGUgdmlzdWFsICAgICBmb3JtIG9mIGEgZG9jdW1lbnQgb3IgYSB0eXBlZmFjZSB3aXRob3V0ICAgICAgICAgcmVseWluZyBvbiBtZWFuaW5nZnVsIGNvbnRlbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBtb2JpbGVUb3BNYXJnaW4gY29sLWxnLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGb3JTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZFNPWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vc21zZWR1Y2Eub25yZW5kZXIuY29tL3N0dWRlbnRvZm1vbnRoLyR7c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguaW1nIDogXCJcIn1gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TdHVkZW50IE9mIFRoZSBNb250aCDwn4+GPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57c3RkT2ZNb250aCA/IHN0ZE9mTW9udGgubmFtZSA6IFwiXCJ9IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3RkT2ZNb250aCA/IHN0ZE9mTW9udGguY291cnNlIDogXCJcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50b2Z0aGVZZWFyIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbmZpZyIsIlN0dWRlbnRvZnRoZVllYXIiLCJzdGRPZk1vbnRoIiwic2V0U3RkT2ZNb250aCIsIkZldGNoU3RkT2YiLCJyZXNwb25zZSIsImdldCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiZmV0Y2hEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDUiLCJoMyIsInAiLCJuYW1lIiwiY291cnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/StudentoftheYear.js\n"));

/***/ })

});