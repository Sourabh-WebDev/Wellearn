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

/***/ "./src/layout/Login.js":
/*!*****************************!*\
  !*** ./src/layout/Login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleEmailChange = function(e) {\n        setEmail(e.target.value);\n    };\n    var handlePasswordChange = function(e) {\n        setPassword(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // TODO: Handle login logic here\n        console.log(\"Email:\", email);\n        console.log(\"Password:\", password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Mobile Number Verification\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                        controlId: \"formMobileNumber\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                                children: \"Mobile Number\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                                type: \"tel\",\n                                placeholder: \"Enter mobile number\",\n                                value: mobileNumber,\n                                onChange: handleMobileNumberChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    showOTPField && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                        controlId: \"formOTP\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                                children: \"OTP\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                                type: \"text\",\n                                placeholder: \"Enter OTP\",\n                                value: otp,\n                                onChange: handleOTPChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: showOTPField ? \"Verify OTP\" : \"Send OTP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(Login, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBdUM7QUFDbUI7QUFFMUQsSUFBTUssS0FBSyxHQUFHLFdBQU07O0lBRWhCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CSyxLQUFLLEdBQWNMLEdBQVksR0FBMUIsRUFBRU0sUUFBUSxHQUFJTixHQUFZLEdBQWhCO0lBQ3RCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDTyxRQUFRLEdBQWlCUCxJQUFZLEdBQTdCLEVBQUVRLFdBQVcsR0FBSVIsSUFBWSxHQUFoQjtJQUU1QixJQUFNUyxpQkFBaUIsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDN0JKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzVCO0lBRUQsSUFBTUMsb0JBQW9CLEdBQUcsU0FBQ0gsQ0FBQyxFQUFLO1FBQ2hDRixXQUFXLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQU1FLFlBQVksR0FBRyxTQUFDSixDQUFDLEVBQUs7UUFDeEJBLENBQUMsQ0FBQ0ssY0FBYyxFQUFFLENBQUM7UUFDbkIsZ0NBQWdDO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVaLEtBQUssQ0FBQyxDQUFDO1FBQzdCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVWLFFBQVEsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQscUJBQ0ksOERBQUNMLHNEQUFTOzswQkFDWiw4REFBQ2dCLElBQUU7MEJBQUMsNEJBQTBCOzs7OztxQkFBSzswQkFDbkMsOERBQUNmLGlEQUFJO2dCQUFDZ0IsUUFBUSxFQUFFTCxZQUFZOztrQ0FDMUIsOERBQUNYLHVEQUFVO3dCQUFDa0IsU0FBUyxFQUFDLGtCQUFrQjs7MENBQ3RDLDhEQUFDbEIsdURBQVU7MENBQUMsZUFBYTs7Ozs7cUNBQWE7MENBQ3RDLDhEQUFDQSx5REFBWTtnQ0FDWHFCLElBQUksRUFBQyxLQUFLO2dDQUNWQyxXQUFXLEVBQUMscUJBQXFCO2dDQUNqQ2IsS0FBSyxFQUFFYyxZQUFZO2dDQUNuQkMsUUFBUSxFQUFFQyx3QkFBd0I7Ozs7O3FDQUNsQzs7Ozs7OzZCQUNTO29CQUVaQyxZQUFZLGtCQUNYLDhEQUFDMUIsdURBQVU7d0JBQUNrQixTQUFTLEVBQUMsU0FBUzs7MENBQzdCLDhEQUFDbEIsdURBQVU7MENBQUMsS0FBRzs7Ozs7cUNBQWE7MENBQzVCLDhEQUFDQSx5REFBWTtnQ0FDWHFCLElBQUksRUFBQyxNQUFNO2dDQUNYQyxXQUFXLEVBQUMsV0FBVztnQ0FDdkJiLEtBQUssRUFBRWtCLEdBQUc7Z0NBQ1ZILFFBQVEsRUFBRUksZUFBZTs7Ozs7cUNBQ3pCOzs7Ozs7NkJBQ1M7a0NBR2YsOERBQUM5QixtREFBTTt3QkFBQytCLE9BQU8sRUFBQyxTQUFTO3dCQUFDUixJQUFJLEVBQUMsUUFBUTtrQ0FDcENLLFlBQVksR0FBRyxZQUFZLEdBQUcsVUFBVTs7Ozs7NkJBQ2xDOzs7Ozs7cUJBQ0o7Ozs7OzthQUNHLENBQ1g7Q0FDSjtHQXBES3pCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQXNEWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L0xvZ2luLmpzPzQzMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIGxvZ2luIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZygnRW1haWw6JywgZW1haWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZDonLCBwYXNzd29yZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPGgxPk1vYmlsZSBOdW1iZXIgVmVyaWZpY2F0aW9uPC9oMT5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiZm9ybU1vYmlsZU51bWJlclwiPlxyXG4gICAgICAgICAgPEZvcm0uTGFiZWw+TW9iaWxlIE51bWJlcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbW9iaWxlIG51bWJlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttb2JpbGVOdW1iZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNb2JpbGVOdW1iZXJDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICBcclxuICAgICAgICB7c2hvd09UUEZpZWxkICYmIChcclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1PVFBcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWw+T1RQPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgT1RQXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17b3RwfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPVFBDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIHtzaG93T1RQRmllbGQgPyAnVmVyaWZ5IE9UUCcgOiAnU2VuZCBPVFAnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkZvcm0iLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImgxIiwib25TdWJtaXQiLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1vYmlsZU51bWJlciIsIm9uQ2hhbmdlIiwiaGFuZGxlTW9iaWxlTnVtYmVyQ2hhbmdlIiwic2hvd09UUEZpZWxkIiwib3RwIiwiaGFuZGxlT1RQQ2hhbmdlIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Login.js\n"));

/***/ })

});