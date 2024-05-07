import React, { useRef, useEffect, useState } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';
import styles from "./callToAction.module.scss";
// import scheduleBg from "../../../public/assets/images/schedule_bg.webp";

function ContactCallToAction() {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      const currentScrollPos = window.pageYOffset;
      const offset = currentScrollPos - prevScrollPos;
      
      if (parallaxRef.current && isVisible) {
        const backgroundPos = parseInt(parallaxRef.current.style.backgroundPositionY) || 0;
        parallaxRef.current.style.backgroundPositionY = `${Math.max(-200, backgroundPos - offset * 0.2)}px`;
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, [isVisible, prevScrollPos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (parallaxRef.current) {
      observer.observe(parallaxRef.current);
    }

    return () => {
      if (parallaxRef.current) {
        observer.unobserve(parallaxRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.schedule_call} ref={parallaxRef} >
        {/* <div className={styles.schedule_call_inner}>
          <div className={`cmn_heading ${styles.heading}`}>
            <h2 data-aos="fade-up">Schedule A Call</h2>
            <p data-aos="fade-up">
              Take the first step toward your dream property—call now for expert
              advice on listings, pricing, and more
            </p>
          </div>
          <div className={styles.btn_group} data-aos="fade-up">
            <Link
              href={"#"}
              className={`cmn_btn filled_btn ${styles.btn}`}
            >
              EXPLORE LUXURY
            </Link>
            <Link
              href={"#"}
              className={`cmn_btn outline_btn ${styles.btn}`}
            >
              BOOK A SITE VISIT
            </Link>
          </div>
        </div> */}
      </section>
  )
}

export default ContactCallToAction;