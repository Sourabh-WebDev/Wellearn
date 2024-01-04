import Link from "next/link";
import Slider from "react-slick";
import Index3Slider from "../src/components/slider/IndexSlider";
import Layout from "../src/layout/Layout";
import { coachSlider, testimonialthree } from "../src/sliderProps";
const Index = () => {
  return (
    <Layout header={3} footer={3}>
      <Index3Slider />
      {/* Feature Section Start */}
      <section className="freature-section-four rel z-1 pb-90 rpb-70">
        {/* <div className="slider-counter text-white">
          <div className="row">
            <div className="col-sm-6">
              <div className="success-item style-two wow fadeInLeft delay-0-2s">
                <i className="fas fa-graduation-cap" />
                <span
                  className="count-text plus"
                  data-speed={3000}
                  data-stop={256}
                >
                  0
                </span>
                <span>Enrolled Students</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="success-item style-two wow fadeInLeft delay-0-4s">
                <i className="fas fa-book" />
                <span
                  className="count-text plus"
                  data-speed={3000}
                  data-stop={3652}
                >
                  0
                </span>
                <span>Finished Session</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row large-gap mb-60">
            {/* <div className="col-lg-6">
              <div className="about-three-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title-three">
                    About <span>Learn Us</span>
                  </span>
                  <h2>We Are Much Experience to Learning University</h2>
                </div>
                <Link href="/about">
                  <a className="read-more color-two mt-5">
                    25 Years Of Experience In Education Services
                  </a>
                </Link>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="about-three-text pt-55 wow fadeInRight delay-0-2s">
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae abilloe inventore veritatis et quasi architecto
                  beatae vitae
                </p>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  etest quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div> */}

            <div style={{ marginTop: "35px", }} className="row" >
              <div style={{ backgroundColor: "whitesmoke", height: "500px", overflow: 'hidden' }} className="col-5">
                <div>
                  <h3 style={{ textAlign: "center", backgroundColor: "black", height: "120px", padding: "30px", color: "Highlight" }}> Latest News</h3>
                </div>

                <div className="form-box">

                  <marquee direction="up" scrollamount="10">
                    <ul>
                      <li>
                        <a href="#" target="_blank">Online International Elocution Competition for Students of Pharmacy. Read more...</a>
                      </li>
                      <hr/>
                      <li>
                        <a href="#" target="_blank">IPES Invitation form</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding Affiliation, Accreditation, Collaboration, Partnership & Associatship for different programs</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding Conduction of Events, Workshops, Seminars, Conferences, Talks & Programs</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding Invitation for Honorary Executive position</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding Invitation for Social media</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding IPES Awardees in Annual Award Ceremony</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding IPES Digital Learning Initiative</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding IPES Intro, Vision & Mission</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">Regarding IPES Membership</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#" target="_blank">IPES Roorkee Conference at motherhood university on 11th April 2020</a>
                      </li>
                      <hr />
                    </ul>
                  </marquee>
                </div>

              </div>
              <div style={{}} className="col-7">
                <div>
                  <h2 style={
                    {
                      textAlign: "center"
                    }
                  }>IPES Section</h2>
                </div>

                <div style={{ marginTop: "40px", marginLeft: "120px" }} className="d-flex justify-content-between">
                  <div style={{ marginRight: "10px", }} className=" ">
                    <span>
                      <a href="">
                        <img src="https://ipespharma.com/images/resource/services-icon-5.png" alt="icon" />
                      </a>
                    </span>
                    <p><a href="Recruiter Login.aspx">Recruiter Login</a></p>
                  </div>

                  <div style={{ textAlign: "center" }} className="">
                    <span>
                      <a href="">
                        <img src="https://ipespharma.com/images/resource/services-icon-2.png" alt="icon" />
                      </a>
                    </span>
                    <p><a href="Recruiter Login.aspx">Advisor Login</a></p>
                  </div>

                  <div style={{ marginRight: "10px", }} className=" ">
                    <span>
                      <a href="">
                        <img src="https://ipespharma.com/images/resource/services-icon-3.png" alt="icon" />
                      </a>
                    </span>
                    <p><a href="Recruiter Login.aspx">Students Login</a></p>
                  </div>
                </div>

                <div style={{ marginTop: "100px", marginLeft: "120px" }} className="d-flex justify-content-between ">
                  <div style={{ marginRight: "10px", }} className=" ">
                    <span>
                      <a href="">
                        <img src="https://ipespharma.com/images/resource/services-icon-1.png" alt="icon" />
                      </a>
                    </span>
                    <p><a href="Recruiter Login.aspx">Member Registration</a></p>
                  </div>

                  <div style={{ textAlign: "center" }} className="">
                    <span>
                      <a href="">
                        <img src="https://ipespharma.com/images/resource/services-icon-4.png" alt="icon" />
                      </a>
                    </span>
                    <p><a href="Recruiter Login.aspx">Career</a></p>
                  </div>

                  <div style={{ marginRight: "10px", }} className=" ">
                    <span>
                      <a href="">
                        <img src="https://ipespharma.com/images/resource/services-icon-6.png" alt="icon" />
                      </a>
                    </span>
                    <p><a href="Recruiter Login.aspx">Publication</a></p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className="row align-items-center">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-four-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/features/feature1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <span className="number">IPES</span>
                  <h5>Financial Assistance</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-four-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/features/feature2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <span className="number">IPES</span>
                  <h5>Professional Strength</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-four-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/features/feature3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <span className="number">IPES</span>
                  <h5>Research Fellow</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-four-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/features/feature4.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <span className="number">IPES</span>
                  <h5>Master Degree</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section End */}
      {/* About Section Start */}
      {/* <section className="about-section-three">
        <div className="container">
          <div className="row large-gap align-items-center">
            <div className="col-lg-6">
              <div className="about-three-image rmb-65 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/about-three.jpg" alt="About" />
                <div className="about-three-image-content bg-light-blue rel text-white br-10">
                  <img
                    src="assets/images/about/about-three-icon.png"
                    alt="Icon"
                  />
                  <span className="counter-number">
                    <span />
                  </span>
                  <h4>Saticfied Students and parents</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-three wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title-three mb-25">
                    How Abo<span>ut Learn</span>
                  </span>
                  <h2>Opportunity for Online Learning Study</h2>
                </div>
                <div className="feature-five-item">
                  <div className="icon">
                    <img src="assets/images/features/icon21.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4>Innovative Courses</h4>
                    <p>
                      Sed ut perspiciatis unde omnis voluptatem accusantium
                      doloremque laudantium totam aperiam eaque
                    </p>
                  </div>
                </div>
                <div className="feature-five-item">
                  <div className="icon">
                    <img src="assets/images/features/icon22.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4>Top Instructors</h4>
                    <p>
                      Quis autem vel eum iure reprehenderit quein ea luptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                </div>
                <div className="feature-five-item">
                  <div className="icon">
                    <img src="assets/images/features/icon23.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h4>ISO Cretified Courses</h4>
                    <p>
                      Quis autem vel eum iure reprehenderit quein ea luptate
                      velit esse quam nihil molestiae consequatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* About Section End */}
      {/* Call To Action Start */}
      {/* <section className="call-to-action rel z-2 mt-125 rmt-95">
        <div className="container">
          <div className="call-to-action-inner wow zoomIn delay-0-2s">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="notification rmb-25">
                  <img
                    src="assets/images/shapes/notification.png"
                    alt="Notification"
                  />
                  <div className="content">
                    <h4>Get Online Courses</h4>
                    <p>Met consectetur adipiscing sed eiustempore dolore</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/become-instructor">
                  <a className="theme-btn style-four">
                    Join with us <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Call To Action End */}
      {/* Coach Section Start */}
      <section className="coach-section-two bg-light-two rel z-1 pt-185 rpt-150 pb-130 rpb-100">
        <div className="container for-circle rpt-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center mb-50">
                <h2>IPES Services</h2>
              </div>
            </div>
          </div>
          <Slider {...coachSlider} className="coach-slider">
            <div className="coach-item-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/coachs/course11.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <Link href="/course-list">
                  <a className="category">IPES</a>
                </Link>
                <h4>
                  <Link href="course-details">
                    How to Learn Web Design by Photoshop and Figma
                  </Link>
                </h4>

              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/coachs/course12.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <Link href="/course-list">
                  <a className="category">IPES</a>
                </Link>
                <h4>
                  <Link href="course-details">
                    How to Learn Web Design by Photoshop and Figma
                  </Link>
                </h4>

              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/coachs/course13.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <Link href="/course-list">
                  <a className="category">IPES</a>
                </Link>
                <h4>
                  <Link href="course-details">
                    How to Learn Web Design by Photoshop and Figma
                  </Link>
                </h4>

              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/coachs/course11.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <Link href="/course-list">
                  <a className="category">IPES</a>
                </Link>
                <h4>
                  <Link href="course-details">
                    How to Learn Web Design by Photoshop and Figma
                  </Link>
                </h4>

              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/coachs/course12.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <Link href="/course-list">
                  <a className="category">IPES</a>
                </Link>
                <h4>
                  <Link href="course-details">
                    How to Learn Web Design by Photoshop and Figma
                  </Link>
                </h4>

              </div>
            </div>
            <div className="coach-item-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/coachs/course13.jpg" alt="Course" />
              </div>
              <div className="content">
                <div className="ratting-star">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <Link href="/course-list">
                  <a className="category">IPES</a>
                </Link>
                <h4>
                  <Link href="course-details">
                    How to Learn Web Design by Photoshop and Figma
                  </Link>
                </h4>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Coach Section End */}
      {/* Why Choose Start */}
      {/* <section className="why-choose-section pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-content rmb-80 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-three">
                    Why Ch<span>oose Us</span>
                  </span>
                  <h2>We’re The Most Diverse Universities in USA</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  santium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explica boemo enim ipsam voluptatem quia
                  voluptas
                </p>
                <ul className="list-style-four pt-5 pb-35">
                  <li>Best Instructor &amp; Best Programs</li>
                  <li>100% ISO Certified Gruentee</li>
                  <li>Best Results Awards University</li>
                </ul>
                <Link href="/about">
                  <a className="theme-btn style-four">
                    Learn more <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="why-choose-images mt-10 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/why-choose/circle.png"
                  alt="Circle"
                  className="circle"
                />
                <img
                  src="assets/images/why-choose/why-choose1.jpg"
                  alt="Why Choose"
                  className="why-choose-one"
                />
                <img
                  src="assets/images/why-choose/why-choose2.jpg"
                  alt="Why Choose"
                  className="why-choose-two"
                />
                <img
                  src="assets/images/why-choose/why-choose3.jpg"
                  alt="Why Choose"
                  className="why-choose-three"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Why Choose End */}
      {/* Event Section Start */}
      {/* <section className="event-section-three rel z-1">
        <div className="container for-circle">
          <div className="event-three-inner">
            <div className="section-title text-center mb-40">
              <span className="sub-title-three">
                Events &amp; <span>Programs</span>
              </span>
              <h2>Browser Latest Events</h2>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="event-item-three wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/events/event-three1.jpg"
                      alt="Event"
                    />
                    <span className="date">March 15</span>
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      USA
                    </span>
                    <h4>
                      <Link href="contact">
                        Useful VS Code Extensions Front-End Developers
                      </Link>
                    </h4>
                  </div>
                  <Link href="/contact">
                    <a className="details-link">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="event-item-three wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/events/event-three2.jpg"
                      alt="Event"
                    />
                    <span className="date">March 17</span>
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      USA
                    </span>
                    <h4>
                      <Link href="contact">
                        Roll New Features Without Hurting Loyal Users
                      </Link>
                    </h4>
                  </div>
                  <Link href="/contact">
                    <a className="details-link">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="event-item-three wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="assets/images/events/event-three3.jpg"
                      alt="Event"
                    />
                    <span className="date">March 19</span>
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      USA
                    </span>
                    <h4>
                      <Link href="contact">
                        Ethical Design The Practical Getting-Started Guide
                      </Link>
                    </h4>
                  </div>
                  <Link href="/contact">
                    <a className="details-link">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="event-item-three wow fadeInUp delay-0-8s">
                  <div className="image">
                    <img
                      src="assets/images/events/event-three4.jpg"
                      alt="Event"
                    />
                    <span className="date">March 23</span>
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      USA
                    </span>
                    <h4>
                      <Link href="contact">
                        Universal Principles Of User Experience Design
                      </Link>
                    </h4>
                  </div>
                  <Link href="/contact">
                    <a className="details-link">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="event-more-btn text-center pt-15">
              <Link href="/blog">
                <a className="theme-btn style-five">
                  view more events <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* Event Section End */}
      {/* Testimonial Section Start */}
      {/* <section className="testimonial-three rel py-80">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="testimonial-three-content rel z-1 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title-three">
                    Clients Tes<span>timonials</span>
                  </span>
                  <h2>People’s Say About Our University</h2>
                </div>
                <p>
                  Rem aperiam eaque ipsa quae abillo inventore veritatis
                  architecto beatae vitae dicta sunt explica
                </p>
                <Link href="/about">
                  <a className="read-more color-two mt-5">
                    View more <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Slider
                {...testimonialthree}
                className="testimonial-three-wrap rel z-1 wow fadeInUp delay-0-4s"
              >
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-three-author.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omniste natus sit voluptate
                      accusantium doloremq udantium totam aperiam eaque quae
                      abillo inventore veritatis architecto beatae
                    </p>
                    <h5>Justin C. Swanson</h5>
                    <span className="designation">Business Manager</span>
                  </div>
                </div>
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-three-author.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                      Doloremq udantium totam aperiam eaque quae abillo
                      inventore veritatis architecto beatae Sed ut perspiciatis
                      unde omniste natus sit voluptate accusantium
                    </p>
                    <h5>Robin I. Reed</h5>
                    <span className="designation">Business Manager</span>
                  </div>
                </div>
                <div className="testimonial-three-item">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/testi-three-author.png"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <div className="quality-rating">
                      <h4>Good Quality</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <p>
                      Veritatised ut perspiciatis unde omniste natus sit
                      voluptate accusantium doloremq udantium totam aperiam
                      eaque quae abillo inventore architecto
                    </p>
                    <h5>Robert G. Brown</h5>
                    <span className="designation">Business Manager</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial Section End */}
      {/* Blog Section Start */}

      {/* Blog Section End */}
      {/* Partner Section Start */}
      <section className="partner-section rel z-1 pt-105 rpt-75 pb-75 rpb-55">
        {/* <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="categories-content mb-50 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-three">
                    Global <span>Partners</span>
                  </span>
                  <h2>
                    We’ve More Then <span className="number">235+</span> Global
                    Partners
                  </h2>
                </div>
                <a href="#" className="read-more color-two mt-5">
                  View more partners <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="logo-inner style-two wow fadeInUp delay-0-4s">
                <div className="logo-item">
                  <a href="#">
                    <img
                      src=" "
                      alt="Client Logo"
                    />
                  </a>
                </div>
                <div className="logo-item">
                  <a href="#">
                    <img
                      src="assets/images/client-logos/client-logo5.png"
                      alt="Client Logo"
                    />
                  </a>
                </div>
                <div className="logo-item">
                  <a href="#">
                    <img
                      src="assets/images/client-logos/client-logo3.png"
                      alt="Client Logo"
                    />
                  </a>
                </div>
                <div className="logo-item">
                  <a href="#">
                    <img
                      src="assets/images/client-logos/client-logo4.png"
                      alt="Client Logo"
                    />
                  </a>
                </div>
                <div className="logo-item">
                  <a href="#">
                    <img
                      src="assets/images/client-logos/client-logo2.png"
                      alt="Client Logo"
                    />
                  </a>
                </div>
                <div className="logo-item">
                  <a href="#">
                    <img
                      src="assets/images/client-logos/client-logo6.png"
                      alt="Client Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}><h3>EXPLORE IPES</h3></div>
        </div>
        <div className="row ">
          <div style={{ display: "flex" }}>
            <div className="clo-6">
              <div style={{ marginLeft: "80px" }} className="">
                <img src="https://ipespharma.com/images/resource/gallery.jpg" width={"550px"} height={"380px"} alt="img" />
              </div>
              <div style={{ marginLeft: "80px", marginTop: "10px" }}>
                <button type="button" class="btn btn-danger">Visit Gallery</button>
              </div>
            </div>

            <div style={{ marginLeft: "100px" }} className="clo-6">
              <div style={{ marginTop: "40px", marginRight: "20px" }} className="d-flex justify-content-between">
                <div className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/aboutus.png" width={"80px"} height={"80px"} alt="icon1" />
                    </a>
                  </span>
                </div>

                <div style={{ textAlign: "center" }} className="">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/council.png" width={"80px"} height={"80px"} alt="icon2" />
                    </a>
                  </span>
                </div>

                <div style={{ marginRight: "0px", }} className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/collaboration.png" width={"80px"} height={"80px"} alt="icon3" />
                    </a>
                  </span>
                </div>
                <div style={{ marginRight: "0px", }} className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/career.png" width={"80px"} height={"80px"} alt="icon4" />
                    </a>
                  </span>
                </div>
              </div>

              <div style={{ marginTop: "40px", }} className="d-flex justify-content-between">
                <div className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/aboutus.png" width={"80px"} height={"80px"} alt="icon1" />
                    </a>
                  </span>
                </div>

                <div style={{ textAlign: "center" }} className="">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/council.png" width={"80px"} height={"80px"} alt="icon2" />
                    </a>
                  </span>
                </div>

                <div style={{ marginRight: "0px", }} className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/collaboration.png" width={"80px"} height={"80px"} alt="icon3" />
                    </a>
                  </span>
                </div>
                <div style={{ marginRight: "0px", }} className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/career.png" width={"80px"} height={"80px"} alt="icon4" />
                    </a>
                  </span>
                </div>
              </div>

              <div style={{ marginTop: "40px", }} className="d-flex justify-content">
                <div className=" ">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/aboutus.png" width={"80px"} height={"80px"} alt="icon1" />
                    </a>
                  </span>
                </div>

                <div style={{ textAlign: "center" }} className="">
                  <span>
                    <a href="">
                      <img src="https://ipespharma.com/images/resource/council.png" width={"80px"} height={"80px"} alt="icon2" />
                    </a>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partner Section End */}
      {/* Instagram Section Start */}
      <div className="instagram-section footer-instagram rel z-1">
        <div className="container-fluid">
          <div className="row small-gap justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-1s">
                <img
                  src="assets/images/instagram/instagram7.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram7.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/instagram/instagram8.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram8.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/instagram/instagram9.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram9.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/instagram/instagram10.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram10.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/instagram/instagram11.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram11.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/instagram/instagram12.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram12.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
