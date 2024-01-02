"use strict";
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 4947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ }),

/***/ 2598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-nice-select"
var external_react_nice_select_ = __webpack_require__(9051);
var external_react_nice_select_default = /*#__PURE__*/__webpack_require__.n(external_react_nice_select_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Newsletters.js

const Newsletters = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer-newsletter br-10 bg-lighter",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s",
                        style: {
                            backgroundImage: "url(assets/images/video/footer-video-bg.jpg)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.youtube.com/watch?v=9Y7ma241N8k",
                            className: "mfp-iframe video-play",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-play"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6 align-self-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "newsletter-content wow fadeInRight delay-0-2s",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-title mb-20",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sub-title-two",
                                        children: "Newsletters"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Get Our Every Single Notifications"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                className: "newsletter-form mt-25",
                                action: "#",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "newsletter-radios mb-25",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "custom-control custom-radio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "radio",
                                                        className: "custom-control-input",
                                                        id: "hero-wekly",
                                                        name: "example1",
                                                        defaultChecked: true
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        className: "custom-control-label",
                                                        htmlFor: "hero-wekly",
                                                        children: "Regular Updates"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "custom-control custom-radio",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "radio",
                                                        className: "custom-control-input",
                                                        id: "hero-monthly",
                                                        name: "example1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        className: "custom-control-label",
                                                        htmlFor: "hero-monthly",
                                                        children: "Weekly Updates"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "newsletter-email",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-envelope"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                id: "email",
                                                type: "email",
                                                placeholder: "Enter Email",
                                                required: ""
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                type: "submit",
                                                className: "theme-btn style-two",
                                                children: [
                                                    "sign up ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-arrow-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Newsletters = (Newsletters);

;// CONCATENATED MODULE: ./src/layout/Footer.js




const Footer = ({ footer  })=>{
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {
                scrollTop: scrollTop
            });
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {
                scrollTop: scrollTop
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer4, {
                scrollTop: scrollTop
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {
                scrollTop: scrollTop
            });
    }
};
/* harmony default export */ const layout_Footer = (Footer);
const FollowIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fab fa-facebook-f"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fab fa-twitter"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fab fa-linkedin-in"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fab fa-youtube"
                    })
                })
            })
        ]
    }), Courses = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "CCC"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "C, C++"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "HTML"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Development"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Web Design"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "O Level"
                })
            })
        ]
    }), Resources = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Community"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Support"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Video Guides"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Documentation"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Security"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Template"
                })
            })
        ]
    }), FooterBottom = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/faqs",
                    children: "FAQs"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Links"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "Payments"
                })
            })
        ]
    }), CopyRight = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            ". ",
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: "Sms Education"
            }),
            " All rights reserved."
        ]
    }), DefaultFooter = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-blue",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Newsletters, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between text-white pt-75",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget about-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "SMS Education is a well-diversified an autonomous institute in the field of computer literacy, governed by distinctive and highly qualified professionals."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "pt-5",
                                            children: "Follow Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "social-style-one",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Courses"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Resources, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget contact-info-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-map-marker-alt"
                                                                }),
                                                                " A/1412, Sector- I Ashiyana LDA Colony Near Pakripool Lucknow – 226012, UP, India"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:support@gmail.com",
                                                                    children: "smseducationlko@gmail.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-phone"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "callto:+0123456789",
                                                                    children: "8090004415"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-clock"
                                                                }),
                                                                " Sunday - Friday,",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " 08 am - 05 pm"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area bg-dark-blue text-white rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    }), Footer1 = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-blue text-white pt-75",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget about-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu asusp disse ultrices gravida commodo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "pt-5",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social-style-one",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Courses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Resources, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget contact-info-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-map-marker-alt"
                                                                }),
                                                                " 55 Main Street, 2nd Block, New York"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:support@gmail.com",
                                                                    children: "support@gmail.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-phone"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "callto:+0123456789",
                                                                    children: "+012 (345) 67 89"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-clock"
                                                                }),
                                                                " Sunday - Friday,",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " 08 am - 05 pm"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget video-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Quis autem vel eum iure repre enderit voluptate"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "video-widget overlay my-20",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/footer/video.jpg",
                                                            alt: "Video"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "https://www.youtube.com/watch?v=9Y7ma241N8k",
                                                            className: "mfp-iframe video-play",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-play"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "read-more",
                                                        children: [
                                                            "view more ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fas fa-arrow-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area bg-dark-blue rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    }), Footer3 = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between text-white pt-65",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget about-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu asusp disse ultrices gravida commodo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "pt-5",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social-style-one",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Courses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Resources, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget contact-info-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-map-marker-alt"
                                                                }),
                                                                " 55 Main Street, 2nd Block, New York"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:support@gmail.com",
                                                                    children: "support@gmail.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-phone"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "callto:+0123456789",
                                                                    children: "+012 (345) 67 89"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-clock"
                                                                }),
                                                                " Sunday - Friday,",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " 08 am - 05 pm"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget newsletter-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Newsletter"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    action: "#",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Every Single Updates and Notifications"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "email-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "footer-newsletter",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-envelope"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "email",
                                                                    id: "footer-newsletter",
                                                                    placeholder: "Enter Email",
                                                                    required: ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "theme-btn style-two",
                                                            type: "submit",
                                                            children: [
                                                                "sign up ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-arrow-right"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area bg-light-blue text-white rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    }), Footer4 = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer footer-two bg-blue-two text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo-inner style-two pt-85 pb-35",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two1.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two5.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two3.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two4.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two2.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two6.png",
                                        alt: "Client Logo"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row large-gap justify-content-between pt-85",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget about-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-logo mb-25",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logos/logo-four.png",
                                                        alt: "Logo"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu asusp",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "social-style-one pt-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Courses"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget contact-info-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Get In Touch"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-map-marker-alt"
                                                        }),
                                                        " 55 Main Street, 2nd Block, New York"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "support@gmail.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-phone"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "callto:+0123456789",
                                                            children: "+012 (345) 67 89"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-clock"
                                                        }),
                                                        " Sunday - Friday,",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " 08 am - 05 pm"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget gallery-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Gallery"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "gallery-widget-wrap",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery1.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery1.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery2.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery2.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery3.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery3.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery4.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery4.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery5.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery5.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery6.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery6.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    });

;// CONCATENATED MODULE: ./src/layout/Menu.js



const Home = ()=>/*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: "Home One"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/index2",
                    children: "Home Two"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/index3",
                    children: "Home Three"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/index4",
                    children: "Home Four"
                })
            })
        ]
    });
const Register = ()=>/*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: "Student"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/index2",
                    children: "Instructors"
                })
            })
        ]
    });
const Menu_Courses = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-grid",
                    children: "course grid"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-list",
                    children: "course list"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-timeline",
                    children: "course timeline"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "course details"
                })
            })
        ]
    });
const Pages = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/faqs",
                    children: `FAQ's`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/shop",
                    children: "Shop Page"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/product-details",
                    children: "product details"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/checkout",
                    children: "checkout"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/cart",
                    children: "cart page"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/instructors",
                    children: "all instructors"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/become-instructor",
                    children: "become instructor"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/gallery",
                    children: "gallery"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/pricing",
                    children: "pricing plan"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: "contact us"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/404",
                    children: "error Page"
                })
            })
        ]
    });
const Blog = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog",
                    children: "Blog Page"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details",
                    children: "Blog Details"
                })
            })
        ]
    });

;// CONCATENATED MODULE: ./src/layout/MobileHeader.js




const MobileHeader = ()=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-block d-lg-none mobile-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: "About"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Courses"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("Courses"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Menu_Courses, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Courses"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "pages"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("Pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Pages, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("Blog"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Blog, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Blog"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_MobileHeader = (MobileHeader);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/layout/Login.js



const Login = ()=>{
    const { 0: mobileNumber , 1: setMobileNumber  } = (0,external_react_.useState)("");
    const { 0: otp , 1: setOTP  } = (0,external_react_.useState)("");
    const { 0: showOTPField , 1: setShowOTPField  } = (0,external_react_.useState)(false);
    const handleMobileNumberChange = (event)=>{
        setMobileNumber(event.target.value);
    };
    const handleOTPChange = (event)=>{
        setOTP(event.target.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        // Perform verification or API call with mobileNumber and otp here
        // Example: Showing OTP field after submitting mobile number
        setShowOTPField(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                    controlId: "formMobileNumber",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                            children: "Mobile Number"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                            type: "tel",
                            placeholder: "Enter mobile number",
                            value: mobileNumber,
                            onChange: handleMobileNumberChange
                        })
                    ]
                }),
                showOTPField && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                    controlId: "formOTP",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                            children: "OTP"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                            type: "text",
                            placeholder: "Enter OTP",
                            value: otp,
                            onChange: handleOTPChange
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                    variant: "primary",
                    type: "submit",
                    children: showOTPField ? "Verify OTP" : "Send OTP"
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Login = (Login);

;// CONCATENATED MODULE: ./src/layout/Register.js



const Register_Register = ()=>{
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const handleNameChange = (e)=>{
        setName(e.target.value);
    };
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // TODO: Handle register logic here
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        controlId: "formBasicName",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                children: "Name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "text",
                                placeholder: "Enter name",
                                value: name,
                                onChange: handleNameChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        controlId: "formBasicEmail",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                children: "Email address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "email",
                                placeholder: "Enter email",
                                value: email,
                                onChange: handleEmailChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        controlId: "formBasicPassword",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                children: "Mobile Number"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "tel",
                                placeholder: "Enter mobile number",
                                value: password,
                                onChange: handlePasswordChange
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "primary",
                type: "submit",
                children: "Register"
            })
        ]
    });
};
/* harmony default export */ const layout_Register = (Register_Register);

;// CONCATENATED MODULE: ./src/layout/Modals.js







const ModalsForLoginSingup = (props)=>{
    const { 0: active , 1: setActive  } = (0,external_react_.useState)("1");
    const toggle = (tab)=>{
        setActive(tab);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
        show: props.show,
        onHide: props.CancelAction,
        size: "md",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                    variant: "pills",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                active: active === "1",
                                onClick: ()=>{
                                    toggle("1");
                                },
                                children: "Login"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                active: active === "2",
                                onClick: ()=>{
                                    toggle("2");
                                },
                                children: "Register"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: active === "1" ? /*#__PURE__*/ jsx_runtime_.jsx(layout_Login, {}) : /*#__PURE__*/ jsx_runtime_.jsx(layout_Register, {})
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./Context/context.js
var Context_context = __webpack_require__(4947);
;// CONCATENATED MODULE: ./src/layout/Header.js








const Header = ({ header  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* stickyNav */.h4)();
    }, []);
    const { 0: navToggle , 1: setNavToggle  } = (0,external_react_.useState)(false);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header4, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultHeader, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
    }
};
/* harmony default export */ const layout_Header = (Header);
const Header1 = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-inner d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-outer d-lg-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo bg-transparent",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    // src="assets/images/logos/logo.png"
                                                    src: "assets/images/logos/logoSms.jpg",
                                                    alt: "Logo",
                                                    className: "pt-1",
                                                    title: "Logo"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-outer clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "main-menu navbar-expand-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo br-10 p-15 bg-transparent",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logos/logoSms.jpg",
                                                                    alt: "Logo",
                                                                    title: "Logo",
                                                                    className: "pt-2"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "navbar-toggle",
                                                        "data-toggle": "collapse",
                                                        "data-target": ".navbar-collapse",
                                                        onClick: ()=>setNavToggle(!navToggle),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-btn-sidebar d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            onSubmit: (e)=>e.preventDefault(),
                                            action: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "search",
                                                    placeholder: "Search",
                                                    required: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-search"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "cart",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-shopping-bag"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-user-circle"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-sidebar",
                                            onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }), Header3 = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header header-three",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-inner d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-outer d-lg-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "https://ipespharma.com/images/logo.png",
                                                    alt: "Logo",
                                                    title: "Logo"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-outer clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "main-menu navbar-expand-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logos/logo-two.png",
                                                                    alt: "Logo",
                                                                    title: "Logo"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "navbar-toggle",
                                                        "data-toggle": "collapse",
                                                        "data-target": ".navbar-collapse",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-btn-sidebar d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-search",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "fa fa-search"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    action: "#",
                                                    className: "hide",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Search",
                                                            className: "searchbox",
                                                            required: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            className: "searchbutton fa fa-search"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "cart",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-shopping-bag"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-user-circle"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-sidebar",
                                            onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }), Header4 = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header header-four",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top bg-light-blue text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-left",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-clock"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "Working Hours"
                                            }),
                                            " : Manday - Friday, 08am - 05pm"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-phone"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "Hotline"
                                            }),
                                            " :",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "callto:+012(345)6789",
                                                children: "+012 (345) 67 89"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-right d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "social-style-two",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "top-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "Setting & Privacy"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/faqs",
                                                    children: "Faqs"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "About"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner d-flex align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logos/logo-three.png",
                                                alt: "Logo",
                                                title: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer clearfix",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "main-menu navbar-expand-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "navbar-header",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/logos/logo-three.png",
                                                                alt: "Logo",
                                                                title: "Logo"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    type: "button",
                                                    className: "navbar-toggle",
                                                    "data-toggle": "collapse",
                                                    "data-target": ".navbar-collapse",
                                                    onClick: ()=>setNavToggle(!navToggle),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-bar"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-bar"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-bar"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "menu-btns d-lg-flex d-none align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "nice-select",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "",
                                                children: "English"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        "data-value": "English",
                                                        className: "option selected focus",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        "data-value": "Chinese",
                                                        className: "option",
                                                        children: "Bangla"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        "data-value": "Arabic",
                                                        className: "option",
                                                        children: "Arabic"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "theme-btn",
                                            children: [
                                                "Register ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-arrow-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }), DefaultHeader = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header header-two",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-inner d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-outer d-lg-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logos/logoSms.jpg",
                                                    alt: "Logo",
                                                    title: "Logo"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-outer clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "main-menu navbar-expand-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo br-10 p-15",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logos/logoSms.jpg",
                                                                    alt: "Logo",
                                                                    title: "Logo"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "navbar-toggle",
                                                        "data-toggle": "collapse",
                                                        "data-target": ".navbar-collapse",
                                                        onClick: ()=>setNavToggle(!navToggle),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-btn-sidebar d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            onSubmit: (e)=>e.preventDefault(),
                                            action: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "search",
                                                    placeholder: "Search",
                                                    required: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-search"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "cart",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-shopping-bag"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-user-circle"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-sidebar",
                                            onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }), Menus = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-none d-lg-flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "dropdown-btn",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "About Us"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-timeline",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Courses"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Contact Us"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Council"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Collaboration"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Publication"
                    })
                })
            })
        ]
    });
const HeaderTop = ()=>{
    const context = (0,external_react_.useContext)(Context_context/* default */.Z);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header-top bg-light-blue text-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "top-inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("marquee", {
                                    behavior: "scroll",
                                    direction: "left",
                                    scrollamount: "5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Initiative Programme Highlight"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            href: "#",
                                            children: " About Us"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Presidents Message"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Invitation for association of institute & colleges"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Submission of application for conduction of seminar/conference"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "10 vacancies for a EXECUTIVE OFFICER"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Journal of Applied Pharmaceutical Sciences and Research"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Invitation for meritorious person as honorable adviser"
                                        }),
                                        "\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://ipespharma.com/images/new2.gif",
                                            alt: "icon"
                                        }),
                                        "\xa0\xa0"
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-right d-flex align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "top-menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "loginSignUp_btn",
                                style: {
                                    position: "relative"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ModalsForLoginSingup, {
                                    show: context.cancel,
                                    CancelAction: ()=>context.setCancel(!context.cancel)
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/layout/Sidebar.js



const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-back-drop",
                onClick: ()=>(0,utils/* sidebarOnclick */.fH)()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hidden-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner-box text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cross-icon",
                            onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Get Appointment"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "appointment-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    (0,utils/* sidebarOnclick */.fH)();
                                },
                                method: "post",
                                action: "#",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "text",
                                            defaultValue: "",
                                            placeholder: "Name",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            defaultValue: "",
                                            placeholder: "Enter Mobile No.",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Message",
                                            rows: 5,
                                            defaultValue: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "theme-btn",
                                            children: "Submit now"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social-style-one",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook-f"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-pinterest-p"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ children , header , footer  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* animation */.oQ)();
        external_react_nice_select_default()();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                        header: header
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Sidebar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                        footer: footer
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fH": () => (/* binding */ sidebarOnclick),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
/* unused harmony export scrollTopFun */
// Animation with wowjs
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sidebar
const sidebarOnclick = ()=>{
    const body = document.querySelector("body");
    body.classList.toggle("side-content-visible");
};
// Sticky nav
const stickyNav_ = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".main-header");
    for(let i = 0; i < stickys.length; i++){
        const sticky = stickys[i];
        if (sticky) {
            if (offset > 10) {
                sticky.classList.add("fixed-header");
            } else {
                sticky.classList.remove("fixed-header");
            }
        }
    }
};
const stickyNav = (stickyClass)=>window.addEventListener("scroll", stickyNav_);
// Scroll top
const scrollTopFun = ()=>{
    let scrollUp = document.getElementById("scroll-top"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st > 110) {
            scrollUp.classList.add("d-block");
        } else {
            scrollUp.classList.remove("d-block");
        }
    });
};
// Paggination
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
// change pagination and update pagination and content
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};


/***/ })

};
;