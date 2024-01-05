import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { sidebarOnclick, stickyNav } from "../utils";
import { Blog, Courses, Home, Pages, Register } from "./Menu";
import MobileHeader from "./MobileHeader";
import { ModalForLoginSingup, ModalsForLoginSingup } from "./Modals";
import AppContext from "../../Context/context";


const Header = ({ header }) => {

  useEffect(() => {
    stickyNav();
  }, []);
  const [navToggle, setNavToggle] = useState(false);
  switch (header) {
    case 1:
      return <Header1 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 3:
      return <Header3 navToggle={navToggle} setNavToggle={setNavToggle} />;
    case 4:
      return <Header4 navToggle={navToggle} setNavToggle={setNavToggle} />;

    default:
      return (
        <DefaultHeader navToggle={navToggle} setNavToggle={setNavToggle} />
      );
  }
};
export default Header;
const Header1 = ({ navToggle, setNavToggle }) => (
  <Fragment>
    <header className="main-header">
      {/* Header-Top */}
      <HeaderTop />
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer d-lg-flex align-items-center">
              <div className="logo bg-transparent">
                <Link href="/">
                  <a>
                    <img
                      // src="assets/images/logos/logo.png"
                      src="assets/images/logos/logoSms.jpg"
                      alt="Logo"
                      className="pt-1"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
              {/* <select name="select-languages" id="select-languages">
                <option value="English">Eng</option>
                <option value="Hindi">Hindi</option>
                <option value="Chinese">Chi</option>
                  <option value="Arabic">Ara</option>
              </select> */}
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo br-10 p-15 bg-transparent">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/logoSms.jpg"
                          alt="Logo"
                          title="Logo"
                          className="pt-2"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                    }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btn-sidebar d-flex align-items-center">
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <input type="search" placeholder="Search" required="" />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
              <button className="cart">
                <i className="fas fa-shopping-bag" />
              </button>
              <button>
                <i className="far fa-user-circle" />
              </button>
              {/* menu sidbar */}
              <div className="menu-sidebar" onClick={() => sidebarOnclick()}>
                <button>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*End Header Upper*/}
    </header>
  </Fragment>
),
  Header3 = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-three">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="https://ipespharma.com/images/logo.png" width={'160px'} height={'140px'}
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo">
                      <Link href="/">
                        <a>
                          <img
                            src="assets/images/logos/logo-two.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>

                    {/* Toggle Button */}

                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>

                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                      }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">
                {/* <div className="nav-search">
                  <button className="fa fa-search" />
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="hide"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="searchbox"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div> */}
                {/* <button className="cart">
                  <i className="fas fa-shopping-bag" />
                </button>
                <button>
                  <i className="far fa-user-circle" />
                </button> */}
                {/* menu sidbar */}
                <div className="menu-sidebar" onClick={() => sidebarOnclick()}>
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Header4 = ({ navToggle, setNavToggle }) => (
    <header className="main-header header-four">
      {/* Header-Top */}
      <div className="header-top bg-light-blue text-white">
        <div className="container-fluid">
          <div className="top-inner">
            <div className="top-left">
              <p>
                <i className="far fa-clock" /> <b>Working Hours</b> : Manday -
                Friday, 08am - 05pm
              </p>
              <p>
                <i className="fas fa-phone" /> <b>Hotline</b> :{" "}
                <a href="callto:+012(345)6789">+012 (345) 67 89</a>
              </p>
            </div>
            <div className="top-right d-flex align-items-center">
              <div className="social-style-two">
                <Link href="/contact">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/contact">
                  <i className="fab fa-pinterest-p" />
                </Link>
              </div>
              <ul className="top-menu">
                <li>
                  <Link href="/about">Setting &amp; Privacy</Link>
                </li>
                <li>
                  <Link href="/faqs">Faqs</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo-three.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo-three.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    onClick={() => setNavToggle(!navToggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                    }`}
                >
                  <Menus />
                  <MobileHeader />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns d-lg-flex d-none align-items-center">
              <div className="nice-select">
                <span className="">English</span>
                <ul className="list">
                  <li data-value="English" className="option selected focus">
                    English
                  </li>
                  <li data-value="Chinese" className="option">
                    Bangla
                  </li>
                  <li data-value="Arabic" className="option">
                    Arabic
                  </li>
                </ul>
              </div>

              <Link href="/contact">
                <a className="theme-btn">
                  Register <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  ),
  DefaultHeader = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-two">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="https://ipespharma.com/images/logo.png" width={'140px'} height={'140px'}
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/* <select name="select-languages" id="select-languages">
                  <option value="English">Eng</option>
                  <option value="Spanish">Spa</option>
                  <option value="Chinese">Chi</option>
                  <option value="Arabic">Ara</option>
                </select> */}
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo br-10 p-15">
                      <Link href="/">
                        <a>
                          <img
                            src="assets/images/logos/logoSms.jpg"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle(!navToggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${navToggle ? "show" : ""
                      }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">

                {/* menu sidbar */}
                <div className="menu-sidebar" onClick={() => sidebarOnclick()}>
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Menus = () => (
    <ul className="navigation clearfix d-none d-lg-flex">
      {/* <li>
        <a href="/">Home</a>
        <ul>
          <Home />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li> */}
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      {/* <li className="dropdown">
        <a href="#">Courses</a>
        <ul>
          <Courses />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li> */}

      <li>
        <Link href="/council">
          <a>Council</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Collaboration</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Publication</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>Pharmapedia</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a>Membership</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Account</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Placement</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Event</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Career</a>
        </Link>
      </li>

      {/* <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <Pages />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li> */}
      {/* <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          <Blog />
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li> */}
    </ul>
  )


const HeaderTop = () => {
  const context = useContext(AppContext)
  return (
    <div className="header-top bg-light-blue text-white">
      <div className="container-fluid">
        <div className="top-inner">
          <div className="top-left">
            <div>
              <marquee behavior="scroll" direction="left" scrollamount="10">
                <i /><img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <b>Initiative Programme Highlight</b>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <span href="#"> About Us</span>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <span>Presidents Message</span>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <span>Invitation for association of institute & colleges</span>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <span>Submission of application for conduction of seminar/conference</span>
                <span>10 vacancies for a EXECUTIVE OFFICER</span>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <span>Journal of Applied Pharmaceutical Sciences and Research</span>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
                <span>Invitation for meritorious person as honorable adviser</span>&nbsp;&nbsp;
                <img src="https://ipespharma.com/images/new2.gif" alt="icon"></img>&nbsp;&nbsp;
              </marquee>
            </div>
          </div>
          <div className="top-right d-flex align-items-center">
            {/* <div className="social-style-two">
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-instagram" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-pinterest-p" />
                </a>
              </Link>
            </div> */}
            {/* <div className="dropdown bg-transparent">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </button>
              <ul style={{ background: 'whitesmoke', color: 'black' }} className="dropdown-menu">
                <li><a className="dropdown-item text-dark" href="#">Login As Admin </a></li>
                <li><a className="dropdown-item text-dark" href="#">Login As Student</a></li>
                <li><a className="dropdown-item text-dark" href="#">Login As Instructor</a></li>
              </ul>
            </div> */}
            <ul className="top-menu">

              {/* <li>
                <Link href="/about">
                  <a>Setting &amp; Privacy</a>
                </Link>
              </li> */}
              <li className="loginSignUp_btn" style={{ position: "relative" }}>
                {/* <a onClick={() => context.setCancel(!context.cancel)}  >Login / Register
                </a> */}
                {/* <a >Login
                </a> */}
                {/* <div className="LoginOptions card" style={{ position: "absolute", right: "0%", width: "fit-content", zIndex: "999" }}>
                  <Link href={"https://smsfrontend.vercel.app/login-admin"} className=" ">Login as Admin</Link>
                  <Link href={"https://smsfrontend.vercel.app/login-student"} className=" ">Login as Student</Link>
                  <Link href={"https://smsfrontend.vercel.app/login-instructor"} className=" ">Login as Instructor</Link>
                </div> */}
                <ModalsForLoginSingup
                  show={context.cancel}
                  CancelAction={() => context.setCancel(!context.cancel)} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
