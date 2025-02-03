import React, { useLayoutEffect } from "react";
import "../pages/contactUs.css";

import location from "../Assets/contact_loc.webp";
import mobile from "../Assets/contact_mobi.webp";
import mail from "../Assets/contact_mail.webp";

const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="contact-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box text-center mb-30">
                <div className="contact-box-icon">
                  <img
                    src={mobile}
                    style={{ position: "relative", left: "6.5rem" }}
                    alt="img"
                  />
                </div>
                <div className="contact-content">
                  <h5>Contact Number</h5>
                  <span>(+91) 5124050467</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box text-center mb-30">
                <div className="contact-box-icon">
                  <img
                    src={location}
                    style={{ position: "relative", left: "6.5rem" }}
                    alt="img"
                  />
                </div>
                <div className="contact-content">
                  <h5>Office Location</h5>
                  <span>
                    BharatTech TechEcosystem Pvt. Ltd. 67/68 Daulat Ganj,
                    Kanpur, Uttar Pradesh, 208001, Near Canal Road
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box text-center mb-30">
                <div className="contact-box-icon">
                  <img
                    src={mail}
                    style={{ position: "relative", left: "6.5rem" }}
                    alt="img"
                  />
                </div>
                <div className="contact-content">
                  <h5>Mail Support</h5>
                  <span>contact@collegecue.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-60">
              <span>Get in touch with us</span>
              <h2>
                Got a query? Do You Need Assistance? or simply wish to greet
                someone? We hope to hear from you soon.
              </h2>
            </div>
            <div className="contact-form text-center">
              <form action="#">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your Name*" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Your Email*" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Subject*" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Website" />
                  </div>
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Massage"
                ></textarea>
                <button className="btn">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
