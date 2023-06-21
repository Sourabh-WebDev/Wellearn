import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactUs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />
      <section className="contact-info-area rel z-1 py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-info-wrap rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title-two">Need Any Helps ?</span>
                  <h2>Contact For Information</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="row no-gap mt-50">
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-map-marker-alt" />
                      <h4>Locations</h4>
                      <small>A/1412, Sector- I Ashiyana LDA Colony Near Pakripool Lucknow – 226012, UP, India</small>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="far fa-envelope" />
                      <h4>Email Us</h4>
                      <span>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                        <br />
                        <a href="mailto:infocoach.net">infocoach.net</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="contact-info-box">
                      <i className="fas fa-phone-volume" />
                      <h4>Hotlines</h4>
                      <span>
                        <a href="callto:+896(321)4600">+896 (321) 46 00</a>
                        <br />
                        <a href="callto:+012(345)678">+012 (345) 678</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-page-image wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/contact/contact-page.png"
                  alt="Contact Page"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">coach</span>
      </section>
      {/* Contact Info End */}
      {/* Contact Form Start */}
      <section className="contact-form-area wow fadeInUp delay-0-2s">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="contact-form"
            className="contact-form p-50 z-1 rel"
            name="contact-form"
            action="#"
            method="post"
          >
            <div className="section-title text-center mb-50">
              <span className="sub-title-two">Send Us Message</span>
              <h2>Have Any Questions! Say Hello</h2>
            </div>
            <div className="row mt-25">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center mb-0">
                  <button type="submit" className="theme-btn">
                    send Message <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Form End */}
      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28490.96276239499!2d80.913365!3d26.796334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc0e597dde7b%3A0xe9038b0a08d88c2b!2sa%20a%2C%20A%2F1417%2C%20Aashiyana%20Chauraha%2C%20Sector%20I%2C%20Sector%20L%2C%20Ashiyana%2C%20Lucknow%2C%20Uttar%20Pradesh%20226012%2C%20India!5e0!3m2!1sen!2sus!4v1687339000674!5m2!1sen!2sus"
            height={975}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
