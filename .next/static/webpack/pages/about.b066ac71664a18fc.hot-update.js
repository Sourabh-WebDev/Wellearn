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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleEmailChange = function(e) {\n        setEmail(e.target.value);\n    };\n    var handlePasswordChange = function(e) {\n        setPassword(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // TODO: Handle login logic here\n        console.log(\"Email:\", email);\n        console.log(\"Password:\", password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                    controlId: \"formBasicEmail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                            children: \"Email address\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                            type: \"email\",\n                            placeholder: \"Enter email\",\n                            value: email,\n                            onChange: handleEmailChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {\n                    controlId: \"formBasicPassword\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            value: password,\n                            onChange: handlePasswordChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    className: \"text-right\",\n                    variant: \"primary\",\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\verma\\\\OneDrive\\\\Desktop\\\\Wellearn\\\\src\\\\layout\\\\Login.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(Login, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBdUM7QUFDbUI7QUFFMUQsSUFBTUssS0FBSyxHQUFHLFdBQU07O0lBRWhCLElBQTBCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CSyxLQUFLLEdBQWNMLEdBQVksR0FBMUIsRUFBRU0sUUFBUSxHQUFJTixHQUFZLEdBQWhCO0lBQ3RCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXJDTyxRQUFRLEdBQWlCUCxJQUFZLEdBQTdCLEVBQUVRLFdBQVcsR0FBSVIsSUFBWSxHQUFoQjtJQUU1QixJQUFNUyxpQkFBaUIsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDN0JKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzVCO0lBRUQsSUFBTUMsb0JBQW9CLEdBQUcsU0FBQ0gsQ0FBQyxFQUFLO1FBQ2hDRixXQUFXLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQU1FLFlBQVksR0FBRyxTQUFDSixDQUFDLEVBQUs7UUFDeEJBLENBQUMsQ0FBQ0ssY0FBYyxFQUFFLENBQUM7UUFDbkIsZ0NBQWdDO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVaLEtBQUssQ0FBQyxDQUFDO1FBQzdCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVWLFFBQVEsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQscUJBQ0ksOERBQUNMLHNEQUFTO2tCQUNOLDRFQUFDQyxpREFBSTtZQUFDZSxRQUFRLEVBQUVKLFlBQVk7OzhCQUN4Qiw4REFBQ1gsdURBQVU7b0JBQUNpQixTQUFTLEVBQUMsZ0JBQWdCOztzQ0FDbEMsOERBQUNqQix1REFBVTtzQ0FBQyxlQUFhOzs7OztpQ0FBYTtzQ0FDdEMsOERBQUNBLHlEQUFZOzRCQUNUb0IsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLFdBQVcsRUFBQyxhQUFhOzRCQUN6QlosS0FBSyxFQUFFUCxLQUFLOzRCQUNab0IsUUFBUSxFQUFFaEIsaUJBQWlCOzs7OztpQ0FDN0I7Ozs7Ozt5QkFDTzs4QkFFYiw4REFBQ04sdURBQVU7b0JBQUNpQixTQUFTLEVBQUMsbUJBQW1COztzQ0FDckMsOERBQUNqQix1REFBVTtzQ0FBQyxVQUFROzs7OztpQ0FBYTtzQ0FDakMsOERBQUNBLHlEQUFZOzRCQUNUb0IsSUFBSSxFQUFDLFVBQVU7NEJBQ2ZDLFdBQVcsRUFBQyxVQUFVOzRCQUN0QlosS0FBSyxFQUFFTCxRQUFROzRCQUNma0IsUUFBUSxFQUFFWixvQkFBb0I7Ozs7O2lDQUNoQzs7Ozs7O3lCQUNPOzhCQUViLDhEQUFDWixtREFBTTtvQkFBQ3lCLFNBQVMsRUFBQyxZQUFZO29CQUFDQyxPQUFPLEVBQUMsU0FBUztvQkFBQ0osSUFBSSxFQUFDLFFBQVE7OEJBQUMsUUFFL0Q7Ozs7O3lCQUFTOzs7Ozs7aUJBQ047Ozs7O2FBQ0MsQ0FDZjtDQUNKO0dBakRLbkIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBbURYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvTG9naW4uanM/NDMwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEZvcm0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgbG9naW4gbG9naWMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbDonLCBlbWFpbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkOicsIHBhc3N3b3JkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgYWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0ndGV4dC1yaWdodCcgdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Login.js\n"));

/***/ })

});