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

/***/ "./src/layout/Register.js":
/*!********************************!*\
  !*** ./src/layout/Register.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var handleNameChange = function(e) {\n        setName(e.target.value);\n    };\n    var handleEmailChange = function(e) {\n        setEmail(e.target.value);\n    };\n    var handlePasswordChange = function(e) {\n        setPassword(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // TODO: Handle register logic here\n        console.log(\"Name:\", name);\n        console.log(\"Email:\", email);\n        console.log(\"Password:\", password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        className: \"t\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                    controlId: \"formBasicName\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                            type: \"text\",\n                            placeholder: \"Enter name\",\n                            value: name,\n                            onChange: handleNameChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                    controlId: \"formBasicEmail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                            type: \"email\",\n                            placeholder: \"Enter email\",\n                            value: email,\n                            onChange: handleEmailChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                    controlId: \"formBasicPassword\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                            children: \"Mobile Number\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                            type: \"tel\",\n                            placeholder: \"Enter mobile number\",\n                            value: password,\n                            onChange: handlePasswordChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"primary\",\n                    type: \"submit\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Register.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(Register, \"H0oogsi12FpBP5BGRBJJWCRHc9o=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7OEJBQUMsVUFFeEM7Ozs7O3lCQUFTOzs7Ozs7aUJBQ047Ozs7O2FBQ0MsQ0FDZjtDQUNKO0dBakVLdkIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBbUVkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvUmVnaXN0ZXIuanM/Mjk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIHJlZ2lzdGVyIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZygnTmFtZTonLCBuYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW1haWw6JywgZW1haWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZDonLCBwYXNzd29yZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J3QnPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY05hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TW9iaWxlIE51bWJlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG1vYmlsZSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwiUmVnaXN0ZXIiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTmFtZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIkdyb3VwIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/Register.js\n"));

/***/ })

});