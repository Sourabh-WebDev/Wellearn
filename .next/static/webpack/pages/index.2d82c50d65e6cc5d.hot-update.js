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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StudentoftheYear = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), stdOfMonth = ref[0], setStdOfMonth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return C_Users_Sharma_G_Pro_OneDrive_Documents_GitHub_Wellearn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_config__WEBPACK_IMPORTED_MODULE_3__.backendUrl + \"/api/studentofmonth\");\n                        case 3:\n                            response = _ctx.sent;\n                            // Handle the successful response here\n                            setStdOfMonth(response.data);\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            // Handle the error here\n                            console.error(_ctx.t0);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: \"assets/images/teams/member1.png\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                        className: \"text-nowrap\",\n                                        children: \"Instructor Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: \"This is content\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: \"DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual     form of a document or a typeface without         relying on meaningful content.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-sm-12 mobileTopMargin col-lg-6 d-flex justify-content-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"containerForSOY\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card cardSOY\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"image text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: \"https://smseduca.onrender.com/studentofmonth/\".concat(stdOfMonth[0].course)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                        children: \"Student Of The Month \\uD83C\\uDFC6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: stdOfMonth === undefined ? \"\" : stdOfMonth[0].name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: stdOfMonth === undefined ? \"\" : stdOfMonth[0].course\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sharma G Pro\\\\OneDrive\\\\Documents\\\\GitHub\\\\Wellearn\\\\pages\\\\StudentoftheYear.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(StudentoftheYear, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = StudentoftheYear;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentoftheYear);\nvar _c;\n$RefreshReg$(_c, \"StudentoftheYear\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWRlbnRvZnRoZVllYXIuanM/M2Q4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcbmNvbnN0IFN0dWRlbnRvZnRoZVllYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0ZE9mTW9udGgsIHNldFN0ZE9mTW9udGhdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoY29uZmlnLmJhY2tlbmRVcmwgKyBcIi9hcGkvc3R1ZGVudG9mbW9udGhcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgaGVyZVxyXG4gICAgICAgICAgICAgICAgc2V0U3RkT2ZNb250aChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTIgY29sLWxnLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGb3JTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZFNPWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nYXNzZXRzL2ltYWdlcy90ZWFtcy9tZW1iZXIxLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtbm93cmFwJz5JbnN0cnVjdG9yIE9mIFRoZSBNb250aCDwn4+GPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaGlzIGlzIGNvbnRlbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+REluIHB1Ymxpc2hpbmcgYW5kIGdyYXBoaWMgZGVzaWduLCBMb3JlbSBpcHN1bSBpcyBhIHBsYWNlaG9sZGVyIHRleHQgY29tbW9ubHkgdXNlZCB0byBkZW1vbnN0cmF0ZSB0aGUgdmlzdWFsICAgICBmb3JtIG9mIGEgZG9jdW1lbnQgb3IgYSB0eXBlZmFjZSB3aXRob3V0ICAgICAgICAgcmVseWluZyBvbiBtZWFuaW5nZnVsIGNvbnRlbnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBtb2JpbGVUb3BNYXJnaW4gY29sLWxnLTYgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJGb3JTT1lcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZFNPWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vc21zZWR1Y2Eub25yZW5kZXIuY29tL3N0dWRlbnRvZm1vbnRoLyR7c3RkT2ZNb250aFswXS5jb3Vyc2V9YH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3R1ZGVudCBPZiBUaGUgTW9udGgg8J+PhjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3N0ZE9mTW9udGggPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzdGRPZk1vbnRoWzBdLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdGRPZk1vbnRoID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3RkT2ZNb250aFswXS5jb3Vyc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudG9mdGhlWWVhciJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb25maWciLCJTdHVkZW50b2Z0aGVZZWFyIiwic3RkT2ZNb250aCIsInNldFN0ZE9mTW9udGgiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsImJhY2tlbmRVcmwiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDUiLCJoMyIsInAiLCJjb3Vyc2UiLCJ1bmRlZmluZWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/StudentoftheYear.js\n"));

/***/ })

});