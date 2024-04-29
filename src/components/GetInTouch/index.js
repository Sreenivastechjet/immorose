import React from 'react'
import styles from "./getInTouch.module.scss";

function GetInTouch() {
  return (
    <section className={styles.get_in_touch}>
        <div className={`cmn_heading ${styles.heading}`}>
          <h2 data-aos="fade-up">Get In Touch</h2>
          <p data-aos="fade-up">
            Take the first step toward your dream property—call now for expert
            advice on listings, pricing, and more
          </p>
        </div>
        <div className={styles.get_in_touch_form}>
          <form data-aos="zoom-in">
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className={styles.form_control}
                />
              </div>
              <div className={styles.form_group}>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className={styles.form_control}
                />
              </div>
            </div>
            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className={styles.form_control}
                />
              </div>
              <div className={styles.form_group}>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  className={styles.form_control}
                />
              </div>
            </div>
            <div className={styles.form_group}>
              <textarea
                className={styles.form_control}
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className={styles.form_group_checkbox}>
              <label className={styles.form_checkbox_container}>
                <input type="checkbox" />
                <span className={styles.form_checkbox_checkmark}></span>
                Tick to receive updates via WhatsApp and email.
              </label>
            </div>
            <input
              type="submit"
              value="SUBMIT"
              className={styles.form_submit}
            />
          </form>
        </div>
      </section>
  )
}

export default GetInTouch