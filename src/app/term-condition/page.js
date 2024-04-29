"use client";
import React, {useEffect} from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

// Images
import TermConditionBanner from "../../../public/assets/images/term_condition_poster.webp";

// third party imports
import AOS from "aos";
import "aos/dist/aos.css";

const TermAndCondition = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <main className={styles.main}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.banner_inner}>
          <div className={styles.banner_cont}>
            <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
              <h2>Terms & Conditions</h2>
              <p>
              Connect for inquiries, bookings, or assistance regarding our prestigious properties and exceptional services.
              </p>
            </div>
          </div>
          <div className={styles.banner_img} data-aos="fade-up">
            <Image
              src={TermConditionBanner}
              alt="Privacy Policy"
            />
          </div>
        </div>
      </section>
      {/* Policy content */}
      <section className={styles.content_wrapper}>
        <div className={styles.content_side}>
          <div className={styles.content_box} data-aos="fade-up">
            <p>These Terms and Conditions ("Terms") govern your use of [Company/Service/Platform] ("Service") provided by [Company Name] ("Company", "we", "our", or "us"). Please read these Terms carefully before accessing or using the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.</p>
          </div>
          <div className={styles.content_box} id="Eligibility">
            <h2 data-aos="fade-up">Eligibility</h2>
            <p data-aos="fade-up">You must be at least 18 years old and legally capable of entering into binding contracts to use the Service. By using the Service, you represent and warrant that you meet these eligibility requirements.</p>
          </div>
          <div className={styles.content_box} id="Accounts">
            <h2 data-aos="fade-up">Accounts</h2>
            <p data-aos="fade-up">When you create an account with us, you must provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.</p>
          </div>
          <div className={styles.content_box} id="UserContent">
            <h2 data-aos="fade-up">User Content</h2>
            <p data-aos="fade-up">You may contribute content, including text, images, and other materials, to the Service ("User Content"). You retain ownership of your User Content, but by providing it, you grant the Company a worldwide, perpetual, irrevocable, transferable, sublicensable, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display your User Content.</p>
          </div>
          <div className={styles.content_box} id="IntellectualProperty">
            <h2 data-aos="fade-up">Intellectual Property</h2>
            <p data-aos="fade-up">The Service and its original content, features, and functionality are owned by the Company and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          </div>
          <div className={styles.content_box} id="Termination">
            <h2 data-aos="fade-up">Termination</h2>
            <p data-aos="fade-up">We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          </div>
          <div className={styles.content_box} id="LimitationOfLiability">
            <h2 data-aos="fade-up">Limitation of Liability</h2>
            <p data-aos="fade-up">To the fullest extent permitted by applicable law, in no event shall the Company, its affiliates, or their respective officers, directors, employees, or agents, be liable for any indirect, consequential, incidental, special, punitive, or exemplary damages arising out of or in connection with your use of the Service.</p>
          </div>
          <div className={styles.content_box} id="GoverningLaw">
            <h2 data-aos="fade-up">Governing Law</h2>
            <p data-aos="fade-up">hese Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>
          </div>
        </div>
        <div className={styles.tabs_side}>
          <h3 data-aos="fade-up">Table Of content</h3>
          <ul>
            <li><Link data-aos="fade-up" href={"#Eligibility"}>1. Eligibility</Link></li>
            <li><Link data-aos="fade-up" href={"#Accounts"}>2. Accounts</Link></li>
            <li><Link data-aos="fade-up" href={"#UserContent"}>3. User Content</Link></li>
            <li><Link data-aos="fade-up" href={"#IntellectualProperty"}>4. Intellectual Property</Link></li>
            <li><Link data-aos="fade-up" href={"#Termination"}>5. Termination</Link></li>
            <li><Link data-aos="fade-up" href={"#LimitationOfLiability"}>6. Limitation of Liability</Link></li>
            <li><Link data-aos="fade-up" href={"#GoverningLaw"}>7. Governing Law</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TermAndCondition;
