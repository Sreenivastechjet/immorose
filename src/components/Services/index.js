import React, { useState } from 'react'
import Image from 'next/image';
import styles from "./services.module.scss";
import ServiceImg1 from "../../../public/assets/images/services_img1.webp";
import ServiceImg2 from "../../../public/assets/images/services_img2.webp";
import ServiceImg3 from "../../../public/assets/images/services_img3.webp";
import ServiceImg4 from "../../../public/assets/images/services_img4.webp";

// third party imports
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Services() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const handleMouseEnter = (index) => {
    setServiceIndex(index);
  };

  const handleMouseLeave = () => {
    if (serviceIndex !== null) {
      return;
    }
    setServiceIndex(null);
  };

  return (
    <section className={styles.services}>
      <div className={styles.long_heading}>
        <h2>Services</h2>
      </div>
      <div className={styles.service_inner}>
        <div
          className={`${styles.service_box} ${serviceIndex === 0 ? styles.active : ""
            }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={ServiceImg1} alt="service 1" />
          <div className={styles.service_content}>
            <h3>Service 01</h3>
            <p>
              Construction of luxury villas - We use high-quality construction materials for the durability of our villas, with spaces designed for relaxation and privacy for a pleasant quality of life.
            </p>
          </div>
        </div>
        <div
          className={`${styles.service_box} ${serviceIndex === 1 ? styles.active : ""
            }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={ServiceImg2} alt="service 2" />
          <div className={styles.service_content}>
            <h3>Service 02</h3>
            <p>
              Construction of administrative buildings and commercial buildings - Our administrative and commercial buildings align with their intended functions. We also use the latest security technology to protect occupants, employees, and visitors.
            </p>
          </div>
        </div>
        <div
          className={`${styles.service_box} ${serviceIndex === 2 ? styles.active : ""
            }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={ServiceImg3} alt="service 3" />
          <div className={styles.service_content}>
            <h3>Service 03</h3>
            <p>
              Real estate management - We do regular maintenance and upkeep of the property but also build positive relationships with buyers for their satisfaction and retention.
            </p>
          </div>
        </div>
        <div
          className={`${styles.service_box} ${serviceIndex === 3 ? styles.active : ""
            }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={ServiceImg4} alt="service 4" />
          <div className={styles.service_content}>
            <h3>Service 04</h3>
            <p>
              Interior design - We oﬀer you a top-of-the-range design service that will meet your expectations in terms of lifestyle but also the latest trends.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.service_inner_slider}>
        <Swiper
          modules={[Autoplay]}
          // autoplay={{ delay: 5000 }}
          spaceBetween={7}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
        >
          <SwiperSlide>
            <div className={`${styles.service_box} `}>
              <Image src={ServiceImg1} alt="service 1" />
              <div className={styles.service_content}>
                <Image src={ServiceImg1} alt="service 1" />
                <h3 data-aos="fade-up">Service 01</h3>
                <p data-aos="fade-up">
                  Construction of luxury villas - We use high-quality construction materials for the durability of our villas, with spaces designed for relaxation and privacy for a pleasant quality of life.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.service_box} `}>
              <Image src={ServiceImg2} alt="service 2" />
              <div className={styles.service_content}>
                <Image src={ServiceImg1} alt="service 1" />
                <h3 data-aos="fade-up">Service 02</h3>
                <p data-aos="fade-up">
                  Construction of administrative buildings and commercial buildings - Our administrative and commercial buildings align with their intended functions. We also use the latest security technology to protect occupants, employees, and visitors.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.service_box} `}>
              <Image src={ServiceImg3} alt="service 3" />
              <div className={styles.service_content}>
                <Image src={ServiceImg1} alt="service 1" />
                <h3 data-aos="fade-up">Service 03</h3>
                <p data-aos="fade-up">
                  Real estate management - We do regular maintenance and upkeep of the property but also build positive relationships with buyers for their satisfaction and retention.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.service_box} `}>
              <Image src={ServiceImg4} alt="service 4" />
              <div className={styles.service_content}>
                <Image src={ServiceImg1} alt="service 1" />
                <h3 data-aos="fade-up">Service 04</h3>
                <p data-aos="fade-up">
                  Interior design - We oﬀer you a top-of-the-range design service that will meet your expectations in terms of lifestyle but also the latest trends.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Services