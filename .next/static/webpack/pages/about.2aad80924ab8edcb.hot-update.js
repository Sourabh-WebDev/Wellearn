"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/layout/Register.js":
/*!********************************!*\
  !*** ./src/layout/Register.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var handleNameChange = function(e) {\n        setName(e.target.value);\n    };\n    var handleEmailChange = function(e) {\n        setEmail(e.target.value);\n    };\n    var handlePasswordChange = function(e) {\n        setPassword(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // TODO: Handle register logic here\n        console.log(\"Name:\", name);\n        console.log(\"Email:\", email);\n        console.log(\"Password:\", password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        className: \"ButtonAlign\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                        controlId: \"formBasicName\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                                type: \"text\",\n                                placeholder: \"Enter name\",\n                                value: name,\n                                onChange: handleNameChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                        controlId: \"formBasicEmail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                                type: \"email\",\n                                placeholder: \"Enter email\",\n                                value: email,\n                                onChange: handleEmailChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                        controlId: \"formBasicPassword\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                                children: \"Mobile Number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                                type: \"tel\",\n                                placeholder: \"Enter mobile number\",\n                                value: password,\n                                onChange: handlePasswordChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                variant: \"primary\",\n                type: \"submit\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(Register, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBQyxRQUFROzBCQUFDLFVBRXBDOzs7OztxQkFBUzs7Ozs7O2FBQ0wsQ0FDZjtDQUNKO0dBbkVLdkIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBcUVkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvUmVnaXN0ZXIuanM/Mjk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIHJlZ2lzdGVyIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZygnTmFtZTonLCBuYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW1haWw6JywgZW1haWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZDonLCBwYXNzd29yZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J0J1dHRvbkFsaWduJz5cclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljRW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybUJhc2ljUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk1vYmlsZSBOdW1iZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtb2JpbGUgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Register.js\n"));

/***/ })

});