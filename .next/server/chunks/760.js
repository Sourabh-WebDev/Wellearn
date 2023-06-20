"use strict";
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ backendUrl)
/* harmony export */ });
const backendUrl = "https://smseduca.onrender.com";


/***/ }),

/***/ 6760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const StudentoftheYear = ()=>{
    const { 0: stdOfMonth , 1: setStdOfMonth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: instructorOfMonth , 1: setInstructorOfMonth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const FetchStdOfTheMonth = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(_config__WEBPACK_IMPORTED_MODULE_3__/* .backendUrl */ .A + "/api/studentofmonth");
            // Handle the successful response here
            setStdOfMonth(...response.data);
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    };
    const FetchInstructorOfTheMonth = async ()=>{
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(_config__WEBPACK_IMPORTED_MODULE_3__/* .backendUrl */ .A + "/api/instructorofmonth");
            // Handle the successful response here
            setInstructorOfMonth(...response.data);
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        FetchStdOfTheMonth();
        FetchInstructorOfTheMonth();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-sm-12 col-lg-6 d-flex justify-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "containerForSOY",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card cardSOY",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "image text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${_config__WEBPACK_IMPORTED_MODULE_3__/* .backendUrl */ .A}/instructorofmonth/${instructorOfMonth ? instructorOfMonth.img : ""}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-nowrap",
                                        children: "Instructor Of The Month \uD83C\uDFC6"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: instructorOfMonth ? instructorOfMonth.name : ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            " course :  ",
                                            instructorOfMonth ? instructorOfMonth.course : ""
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Description : ",
                                            instructorOfMonth ? instructorOfMonth.desc : ""
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-sm-12 mobileTopMargin col-lg-6 d-flex justify-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "containerForSOY",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card cardSOY",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "image text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `${_config__WEBPACK_IMPORTED_MODULE_3__/* .backendUrl */ .A}/studentofmonth/${stdOfMonth ? stdOfMonth.img : ""}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Student Of The Month \uD83C\uDFC6"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        children: [
                                            stdOfMonth ? stdOfMonth.name : "",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Course : ",
                                            stdOfMonth ? stdOfMonth.course : ""
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentoftheYear);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;