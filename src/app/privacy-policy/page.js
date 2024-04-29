"use client";
import React, {useEffect} from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

// Images
import PrivacyPolicyBanner from "../../../public/assets/images/privacy_policy_poster.webp";

// third party imports
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
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
              <h2>Privacy Policy</h2>
              <p>
              Connect for inquiries, bookings, or assistance regarding our prestigious properties and exceptional services.
              </p>
            </div>
          </div>
          <div className={styles.banner_img} data-aos="fade-up">
            <Image
              src={PrivacyPolicyBanner}
              alt="Privacy Policy"
            />
          </div>
        </div>
      </section>
      {/* Policy content */}
      <section className={styles.content_wrapper}>
        <div className={styles.content_side}>
          <div className={styles.content_box} data-aos="fade-up">
            <p>This Privacy Policy ("Policy") describes how [Company Name] ("Company", "we", "our", or "us") collects, uses, and shares personal information when you use our website or engage with our luxury property services. By accessing or using our website or services, you agree to the terms of this Policy.</p>
          </div>
          <div className={styles.content_box} id="InformationWeCollect">
            <h2 data-aos="fade-up">Information We Collect</h2>
            <p data-aos="fade-up">We collect personal information that you provide to us when you interact with our website or services. This may include your name, email address, phone number, mailing address, and other contact details. We may also collect information about your preferences and interests related to luxury properties.</p>
          </div>
          <div className={styles.content_box} id="HowWeUseYourInformation">
            <h2 data-aos="fade-up">How We Use Your Information</h2>
            <p data-aos="fade-up">We use the personal information we collect to provide and improve our services, communicate with you about your inquiries or bookings, personalize your experience, and send you marketing communications about our luxury properties and related services. We may also use your information to comply with legal obligations or enforce our terms and policies.</p>
          </div>
          <div className={styles.content_box} id="InformationSharing">
            <h2 data-aos="fade-up">Information Sharing</h2>
            <p data-aos="fade-up">We may share your personal information with third-party service providers who assist us in operating our website or providing our services. These service providers are contractually obligated to use your information only for the purpose of providing services to us and are required to maintain the confidentiality and security of your information.
            </p>
          </div>
          <div className={styles.content_box} id="DataRetention">
            <h2 data-aos="fade-up">Data Retention</h2>
            <p data-aos="fade-up">We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law.</p>
          </div>
          <div className={styles.content_box} id="YourChoices">
            <h2 data-aos="fade-up">Your Choices</h2>
            <p data-aos="fade-up">You have the right to access, update, or delete your personal information at any time by contacting us using the contact information provided below. You may also opt-out of receiving marketing communications from us by following the unsubscribe instructions included in those communications.</p>
          </div>
          <div className={styles.content_box} id="Security">
            <h2 data-aos="fade-up">Security</h2>
            <p data-aos="fade-up">We take reasonable measures to protect the security of your personal information and to prevent unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee the absolute security of your information.</p>
          </div>
          <div className={styles.content_box} id="ChildrenPrivacy">
            <h2 data-aos="fade-up">Children's Privacy</h2>
            <p data-aos="fade-up">Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children under the age of 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us using the contact information provided below.</p>
          </div>
        </div>
        <div className={styles.tabs_side}>
          <h3 data-aos="fade-up">Table Of content</h3>
          <ul>
            <li><Link href={"#InformationWeCollect"} data-aos="fade-up">1. Information We Collect</Link></li>
            <li><Link href={"#HowWeUseYourInformation"} data-aos="fade-up">2. How We Use Your Informa...</Link></li>
            <li><Link href={"#InformationSharing"} data-aos="fade-up">3. Information Sharing</Link></li>
            <li><Link href={"#DataRetention"} data-aos="fade-up">4. Data Retention</Link></li>
            <li><Link href={"#YourChoices"} data-aos="fade-up">5. Your Choices</Link></li>
            <li><Link href={"#Security"} data-aos="fade-up">6. Security</Link></li>
            <li><Link href={"#ChildrenPrivacy"} data-aos="fade-up">7. Children's Privacy</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
