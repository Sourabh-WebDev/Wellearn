import React from 'react'
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { testimonialtwoSlider } from "../src/sliderProps";

const membership = () => {
  return (
    <Layout>
      <PageBanner pageName={"Membership"} />
      {/* Page Banner End */}
      {/* About Section Start */}

      <section className="about-page-section pt-120 rpt-90">
        <div style={{ backgroundImage: "url('https://ipespharma.com/images/background/1.jpg')", backgroundSize: "cover", backgroundPosition: "center", all: "imgbg", height: "22rem", }} className="container">

          <div className='d-flex justify-content-around row'>

            <div style={{ textAlign: 'center', marginTop: '15px' }} className='col-xl-4'>
              <div style={{ backgroundColor: 'red', width: '15rem', height: '15rem' }}>
                <div style={{ textAlign: 'center', marginTop: '20%' }}>
                    <h5 style={{marginTop:"25%"}}>Student Membership</h5>
                    <p style={{marginTop:"25%"}}>Registration Form</p>
                    <button style={{marginTop:"5%"}} type="button" className="btn btn-light">
                      Register Now
                    </button> 
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '15px' }} className='col-xl-4'>
              <div style={{ backgroundColor: 'red', width: '15rem', height: '15rem' }}>
                <div style={{ textAlign: 'center', marginTop: '20%' }}>
                    <h5 style={{marginTop:"15%"}}>Recruiting Board Membership</h5>
                    <p style={{marginTop:"25%"}}>Registration Form</p>
                    <button style={{marginTop:"5%",}} type="button" className="btn btn-light">
                      Register Now
                    </button> 
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '15px' }} className='col-xl-4'>
              <div style={{ backgroundColor: 'red', width: '15rem', height: '15rem' }}>
                <div style={{ textAlign: 'center', marginTop: '20%' }}>
                    <h5 style={{marginTop:"15%"}}>Advisory Membership</h5>
                    <p style={{marginTop:"25%"}}>Registration Form</p>
                    <button style={{marginTop:"5%"}} type="button" className="btn btn-light">
                      Register Now
                    </button> 
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section End */}
      {/* Features Section Start */}
      {/* <section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
      <div className="container">
        <div className="section-title text-center mb-55">
          <span className="sub-title-two">How About SMS</span>
          <h2>Opportunity for Learning</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="feature-three-item wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon-reading-book" />
              </div>
              <h4>Experts Minds</h4>
              <p>
                Sed ut persiciatis omnis natus voluptate accsantie doloreue
                laudantium
              </p>
              <Link href="/about">
                <a className="details-btn">
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-three-item wow fadeInUp delay-0-4s">
              <div className="icon">
                <img src="assets/images/features/icon7.png" alt="Icon" />
              </div>
              <h4>Multiple Courses</h4>
              <p>
                Sed ut persiciatis omnis natus voluptate accsantie doloreue
                laudantium
              </p>
              <Link href="/about">
                <a className="details-btn">
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-three-item wow fadeInUp delay-0-6s">
              <div className="icon">
                <img src="assets/images/features/icon8.png" alt="Icon" />
              </div>
              <h4>Hire Quickly</h4>
              <p>
                Sed ut persiciatis omnis natus voluptate accsantie doloreue
                laudantium
              </p>
              <Link href="/about">
                <a className="details-btn">
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-three-item wow fadeInUp delay-0-8s">
              <div className="icon">
                <img src="assets/images/features/icon9.png" alt="Icon" />
              </div>
              <h4>Video Tutorials</h4>
              <p>
                Sed ut persiciatis omnis natus voluptate accsantie doloreue
                laudantium
              </p>
              <Link href="/about">
                <a className="details-btn">
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* Features Section End */}
      {/* Team Section Start */}
      {/* <section className="team-setion-two bg-lighter rel z-1 pt-120 rpt-90 pb-70 rpb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55">
              <span className="sub-title-two">Meet Our Team</span>
              <h2>We’ve Thousands Of Experience Team Members</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/teams/team1.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>David S. Wickman</h4>
                <span>Wed Designer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/teams/team2.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Walter J. Drake</h4>
                <span>Wed Developer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/teams/team3.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Steven J. Voorhees</h4>
                <span>Wed Designer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/teams/team4.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Herman C. Kennedy</h4>
                <span>Wed Designer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/teams/team5.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Nathan A. Browning</h4>
                <span>Business Consultant</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/teams/team6.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Carmine M. Allen</h4>
                <span>Senior Manager</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/teams/team7.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Rubin R. Nelligan</h4>
                <span>Wed Designer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="team-member-two wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/teams/team8.jpg" alt="Team Member" />
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
              </div>
              <div className="member-description">
                <h4>Jimmy T. Briley</h4>
                <span>Programmer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* Team Section End */}
      {/* Advertise Area Start */}
      {/* <section className="advertise-area pt-130 rpt-100 pb-90 rpb-60">
      <div className="container">
        <Advertise />
      </div>
    </section> */}
      {/* Advertise Area End */}
      {/* Why Learn Start */}
      {/* <section className="why-learn-area pb-120 rpb-100">
      <div className="container">
        <div className="row align-items-center large-gap wow fadeInLeft delay-0-2s">
          <div className="col-lg-6">
            <div className="why-learn-content rmb-35">
              <div className="section-title mb-30">
                <span className="sub-title-two">Why SMS</span>
                <h2>Exclusive Course Provide Categories</h2>
              </div>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms
                of pleasure of the moment, so blinded by desire, that they
                cannot foresee the pain and trouble that are bound to ensue
                and equal blame belongs
              </p>
              <div className="why-learn-feature pt-30">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img
                          src="assets/images/features/icon10.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>Expert Advisors</h4>
                      <p>
                        Accutium doloremque lauda totarem aperiam eaque quaeo
                        inventore veritatis quase
                      </p>
                      <Link href="/about">
                        <a className="read-more color-two">
                          Read more <i className="fas fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img
                          src="assets/images/features/icon11.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>Popular Courses</h4>
                      <p>
                        Quis autem vel eureh enderit voluptate velit esse
                        nihlestiae consuatur veillum dolore
                      </p>
                      <Link href="/about">
                        <a className="read-more color-two">
                          Read more <i className="fas fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-learn-image wow fadeInRight delay-0-2s">
              <img src="assets/images/about/why-learn.jpg" alt="Why Learn" />
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* Why Learn End */}
      {/* Testimonials Section Start */}
      {/* <section className="testimonials-section-two my-80 rel z-1 wow fadeInUp delay-0-2s">
      <div className="container">
        <Slider {...testimonialtwoSlider} className="testimonial-two-wrap">
          <div className="testimonial-item-two">
            <div className="testimonial-author-two">
              <img
                src="assets/images/testimonials/testimonial-two2.jpg"
                alt="Author"
              />
            </div>
            <div className="testimonial-content-two">
              <div className="designation">
                <h3>Justin C. Swanson</h3>
                <span>Director</span>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremq udantium totam rem aperiam eaque quae
                abillo inventore veritatis et quasi architecto beatae
              </p>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="testimonial-item-two">
            <div className="testimonial-author-two">
              <img
                src="assets/images/testimonials/testimonial-two1.jpg"
                alt="Author"
              />
            </div>
            <div className="testimonial-content-two">
              <div className="designation">
                <h3>Cessie</h3>
                <span>Manager</span>
              </div>
              <p>
                Aperiam eaque quae abillo inventore veritatis et quasi
                architecto beatae Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremq udantium totam rem
              </p>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="testimonial-item-two">
            <div className="testimonial-author-two">
              <img
                src="assets/images/testimonials/testimonial-two3.jpg"
                alt="Author"
              />
            </div>
            <div className="testimonial-content-two">
              <div className="designation">
                <h3>Stewart R. Platt</h3>
                <span>Director</span>
              </div>
              <p>
                Voluptatem accusantium doloremq udantium totam rem Sed ut
                perspiciatis unde omnis iste natus error sit aperiam eaque
                quae abillo inventore veritatis et quasi architecto beatae
              </p>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section> */}
      {/* Testimonials Section End */}
      {/* Partner Section Start */}
      {/* <section className="partner-section rel z-1 pt-120 rpt-90 pb-75 rpb-55">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="categories-content mb-50 wow fadeInRight delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title-two">Global Partners</span>
                <h2>We’ve More Then 235+ Global Partners</h2>
              </div>
              <Link href="/about">
                <a className="read-more mt-5">
                  View more partners <i className="fas fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="logo-inner style-two wow fadeInLeft delay-0-2s">
              <div className="logo-item">
                <Link href="/about">
                  <img
                    src="assets/images/client-logos/client-logo-two1.png"
                    alt="Client Logo"
                  />
                </Link>
              </div>
              <div className="logo-item">
                <Link href="/about">
                  <img
                    src="assets/images/client-logos/client-logo-two2.png"
                    alt="Client Logo"
                  />
                </Link>
              </div>
              <div className="logo-item">
                <Link href="/about">
                  <img
                    src="assets/images/client-logos/client-logo-two3.png"
                    alt="Client Logo"
                  />
                </Link>
              </div>
              <div className="logo-item">
                <Link href="/about">
                  <img
                    src="assets/images/client-logos/client-logo-two4.png"
                    alt="Client Logo"
                  />
                </Link>
              </div>
              <div className="logo-item">
                <Link href="/about">
                  <img
                    src="assets/images/client-logos/client-logo-two5.png"
                    alt="Client Logo"
                  />
                </Link>
              </div>
              <div className="logo-item">
                <Link href="/about">
                  <img
                    src="assets/images/client-logos/client-logo-two6.png"
                    alt="Client Logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </Layout>
  )
}

export default membership