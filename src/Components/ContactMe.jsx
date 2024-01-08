import React from "react";

export default function ContactMe() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=918809294736"
            className="contact__information"
            target="_blank"
          >
            <i className="uil uil-whatsapp contact__icon" />
            <div>
              <h3 className="contact__title">Whatsapp me</h3>
              <span className="contact__subtitle">8809294736</span>
            </div>
          </a>
          <a href="mailto:rk634107@gmail.com" className="contact__information">
            <i className="uil uil-envelope contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">rk634107@gmail.com</span>
            </div>
          </a>
          <a
            href="https://www.google.co.in/maps/place/Bengaluru,+Karnataka/@12.9539456,77.4661261,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu"
            target="_blank"
            className="contact__information"
          >
            <i className="uil uil-map-marker contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Bengaluru Karnataka India
              </span>
            </div>
          </a>
        </div>
        <form
          action="https://formspree.io/f/mzbnblyp"
          method="POST"
          className="contact__form grid"
        >
          <div className="contact__content">
            <label className="contact__label">Name</label>
            <input
              type="text"
              name="name"
              className="contact__input"
              required=""
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Email</label>
            <input
              type="email"
              name="email"
              className="contact__input"
              required=""
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input
              type="text"
              name="project"
              className="contact__input"
              required=""
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name=""
              id=""
              required=""
              cols={0}
              rows={7}
              className="contact__input"
              defaultValue={""}
            />
          </div>
          <div>
            <button
              type="submit"
              // onClick={onSubmitForm()}
              className="button button--flex"
            >
              Send Message <i className="uil uil-message button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
