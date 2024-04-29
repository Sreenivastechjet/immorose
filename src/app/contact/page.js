"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";

// Images
import ContactBanner from "../../../public/assets/images/contact_banner.webp";

// Icons
import { FaAngleRight, FaAngleUp, FaAngleDown } from "react-icons/fa6";

// third party imports
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [activeAccordian, setActiveAccordian] = useState(null);

  const onItemClick = (index) => {
    setActiveAccordian(index === activeAccordian ? null : index);
  };
  const items = [
    {
      title: "1. What types of properties can we find on Immo Rose?",
      content:
        "Immo Rose builds luxury villas, administrative buildings, and commercial buildings.",
    },
    { title: "2. Are our villas available for holiday rental?", content: "No, our villas are not available for holiday rentals, but we do offer long-term rentals. For more information, please contact our sales representatives." },
    { title: "3. Does Immo Rose have an interior design service?", content: "Yes, we offer the services of our interior designer to help you make the most of your property." },
    { title: "4. What are the benefits of investing in Immo Rose?", content: "It means investing in a property with solid construction and quality materials. Our modern, timeless design guarantees that your property will be attractive for years to come." },
  ];
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
            <ul data-aos="fade-up">
              <li>
                <Link href={"/"}>
                  <span>Home</span> <FaAngleRight />
                </Link>
              </li>
              <li>Contact Us</li>
            </ul>
            <div className={`cmn_heading ${styles.heading}`}>
              <h2 data-aos="fade-up">Reach Out for Luxury Living Solutions</h2>
              <p data-aos="fade-up">
                Connect for inquiries, bookings, or assistance regarding our
                prestigious properties and exceptional services.
              </p>
            </div>
          </div>
          <div className={styles.banner_img} data-aos="fade-up">
            <Image
              src={ContactBanner}
              alt="Reach Out for Luxury Living Solutions"
            />
          </div>
        </div>
      </section>
      {/* Get In Touch */}
      <GetInTouch />
      {/* Schedule a call */}
      <CallToAction />
      {/* Frequently Asked questions */}
      <section className={styles.faq}>
        <div className={styles.faq_inner}>
          <div className={`cmn_heading ${styles.heading}`}>
            <h2 data-aos="fade-up">Frequently Asked Questions</h2>
          </div>
          <div className={styles.project_tabs}>
            <ul data-aos="fade-up">
              <li
                className={`${activeTab === "tab1" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                General
              </li>
              <li
                className={`${activeTab === "tab2" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                Payments
              </li>
              <li
                className={`${activeTab === "tab3" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                Services
              </li>
              <li
                className={`${activeTab === "tab4" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab4")}
              >
                Lorem
              </li>
            </ul>
          </div>
          <div className={styles.accordion}>
            {items.map((item, index) => (
              <div key={index} className={styles.accordion_item} data-aos="fade-up">
                <div
                  className={styles.accordion_title}
                  onClick={() => onItemClick(index)}
                >
                  <span className={styles.title}>{item.title}</span>
                  {activeAccordian === index ? (
                    <span className={`arrow arrow_up`}>
                      <FaAngleUp />
                    </span>
                  ) : (
                    <span className={`arrow arrow_down`}>
                      <FaAngleDown />
                    </span>
                  )}
                </div>
                {activeAccordian === index && (
                  <div className={styles.accordion_content}>
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
