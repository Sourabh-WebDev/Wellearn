"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({\r\n    value: true\r\n}));\r\nexports[\"default\"] = _interopRequireDefault;\r\nfunction _interopRequireDefault(obj) {\r\n    return obj && obj.__esModule ? obj : {\r\n        default: obj\r\n    };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWxsZXJuLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"0 23px 0 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"49px\",\n        margin: 0,\n        padding: 0\n    }\n};\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\r\n                body { margin: 0; color: #000; background: #fff; }\r\n                .next-error-h1 {\r\n                  border-right: 1px solid rgba(0, 0, 0, .3);\r\n                }\r\n\r\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\r\n                  body { color: #fff; background: #000; }\r\n                  .next-error-h1 {\r\n                    border-right: 1px solid rgba(255, 255, 255, .3);\r\n                  }\r\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSUcsd0JBQXdCLEdBQUdDLG1KQUErRDtBQUM5RixJQUFJQyxNQUFNLEdBQUdGLHdCQUF3QixDQUFDQyxtQkFBTyxDQUFDLG9CQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFJRSxLQUFLLEdBQUdILHdCQUF3QixDQUFDQyxtQkFBTyxDQUFDLDhDQUFvQixDQUFDLENBQUM7QUFDbkUsTUFBTUcsV0FBVyxHQUFHO0FBQ2hCLE9BQUcsRUFBRSxhQUFhO0FBQ2xCLE9BQUcsRUFBRSw4QkFBOEI7QUFDbkMsT0FBRyxFQUFFLG9CQUFvQjtBQUN6QixPQUFHLEVBQUUsdUJBQXVCO0NBQy9CO0FBQ0QsU0FBU0MsZ0JBQWdCLENBQUMsRUFBRUMsR0FBRyxHQUFHQyxHQUFHLEdBQUcsRUFBRTtJQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFVLEdBQUdGLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7SUFDdEYsT0FBTztRQUNIQSxVQUFVO0tBQ2IsQ0FBQztDQUNMO0FBQ0QsTUFBTUMsTUFBTSxHQUFHO0lBQ1hDLEtBQUssRUFBRTtRQUNIQyxVQUFVLEVBQUUsMkhBQTJIO1FBQ3ZJQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxTQUFTLEVBQUUsUUFBUTtRQUNuQkMsT0FBTyxFQUFFLE1BQU07UUFDZkMsYUFBYSxFQUFFLFFBQVE7UUFDdkJDLFVBQVUsRUFBRSxRQUFRO1FBQ3BCQyxjQUFjLEVBQUUsUUFBUTtLQUMzQjtJQUNEQyxJQUFJLEVBQUU7UUFDRkosT0FBTyxFQUFFLGNBQWM7UUFDdkJELFNBQVMsRUFBRSxNQUFNO1FBQ2pCTSxVQUFVLEVBQUUsTUFBTTtRQUNsQlAsTUFBTSxFQUFFLE1BQU07UUFDZFEsYUFBYSxFQUFFLFFBQVE7S0FDMUI7SUFDREMsRUFBRSxFQUFFO1FBQ0FQLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCUSxNQUFNLEVBQUUsQ0FBQztRQUNUQyxXQUFXLEVBQUUsTUFBTTtRQUNuQkMsT0FBTyxFQUFFLFlBQVk7UUFDckJDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCQyxVQUFVLEVBQUUsR0FBRztRQUNmTixhQUFhLEVBQUUsS0FBSztRQUNwQkQsVUFBVSxFQUFFLE1BQU07S0FDckI7SUFDRFEsRUFBRSxFQUFFO1FBQ0FGLFFBQVEsRUFBRSxNQUFNO1FBQ2hCQyxVQUFVLEVBQUUsUUFBUTtRQUNwQlAsVUFBVSxFQUFFLE1BQU07UUFDbEJHLE1BQU0sRUFBRSxDQUFDO1FBQ1RFLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSjtBQUNELElBQUlJLFVBQVU7QUFDZCxNQUFNQyxLQUFLLFNBQVMsQ0FBQ0QsVUFBVSxHQUFHMUIsTUFBTSxDQUFDSCxPQUFPLENBQUMrQixTQUFTLENBQUM7SUFDdkRDLE1BQU0sR0FBRztRQUNMLE1BQU0sRUFBRXZCLFVBQVUsR0FBR3dCLFlBQVksRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFDdkQsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLElBQUk5QixXQUFXLENBQUNJLFVBQVUsQ0FBQyxJQUFJLGtDQUFrQztRQUMvRixPQUFPLFdBQVcsR0FBR04sTUFBTSxDQUFDSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ3JEQyxLQUFLLEVBQUUzQixNQUFNLENBQUNDLEtBQUs7U0FDdEIsRUFBRSxXQUFXLEdBQUdSLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDaEMsS0FBSyxDQUFDSixPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsR0FBR0csTUFBTSxDQUFDSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTNCLFVBQVUsR0FBRyxDQUFDLEVBQUVBLFVBQVUsQ0FBQyxFQUFFLEVBQUUwQixLQUFLLENBQUMsQ0FBQyxHQUFHLHlEQUF5RCxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUdoQyxNQUFNLENBQUNILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsR0FBR2pDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUMzVUUsdUJBQXVCLEVBQUU7Z0JBQ3JCQyxNQUFNLEVBQUUsQ0FBQzthQVlaO1NBQ0osQ0FBQyxFQUFFOUIsVUFBVSxHQUFHO1lBQ2IrQixTQUFTLEVBQUUsZUFBZTtZQUMxQkgsS0FBSzs7WUFFTEEsS0FBSyxFQUFFM0IsTUFBTSxDQUFDUyxJQUFJO1NBQ3JCLEVBQUUsV0FBVyxHQUFHaEIsTUFBTSxDQUFDSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsSUFBSTtZQUM5Q0MsS0FBSyxFQUFFM0IsTUFBTSxDQUFDa0IsRUFBRTtTQUNuQixFQUFFLElBQUksQ0FBQ00sS0FBSyxDQUFDQyxLQUFLLElBQUkxQixVQUFVLEdBQUcwQixLQUFLLEdBQUcsV0FBVyxHQUFHaEM7S0FDN0Q7Q0FDSjtBQUNEMkIsS0FBSyxDQUFDWTtBQUNOWixLQUFLLENBQUNhLGVBQWUsR0FBR3JDLGdCQUFnQixDQUFDO0FBQ3pDd0IsS0FBSyxDQUFDYyxtQkFBbUIsR0FBR3RDO0FBQzVCUixPQUFPLENBQUNFLE9BQU8sR0FBRzhCLEtBQUssQ0FBQyxDQUV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlbGxlcm4tcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz8xOGYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanNcIikuZGVmYXVsdDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX2hlYWQgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XHJcbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xyXG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxyXG4gICAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXHJcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxyXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xyXG59O1xyXG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XHJcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBlcnJvcjoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICBkZXNjOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXHJcbiAgICB9LFxyXG4gICAgaDE6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMCAyM3B4IDAgMCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMFxyXG4gICAgfVxyXG59O1xyXG52YXIgX0NvbXBvbmVudDtcclxuY2xhc3MgRXJyb3IgZXh0ZW5kcyAoX0NvbXBvbmVudCA9IF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCkge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAsIHdpdGhEYXJrTW9kZSA9dHJ1ZSAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XHJcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcclxuICAgICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgY29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmY7IH1cclxuICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHt3aXRoRGFya01vZGUgPyBgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgICAgICAgICAgICAgICBib2R5IHsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDA7IH1cclxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9YCA6ICcnfWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwibmV4dC1lcnJvci1oMVwiLFxyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXHJcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcclxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKTtcclxuICAgIH1cclxufVxyXG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xyXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xyXG5FcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcclxuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfaGVhZCIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJzdHlsZXMiLCJlcnJvciIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiaDIiLCJfQ29tcG9uZW50IiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ3aXRoRGFya01vZGUiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();