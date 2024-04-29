import React, {useState} from 'react'
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
        className={`${styles.service_box} ${
          serviceIndex === 0 ? styles.active : ""
        }`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={ServiceImg1} alt="service 1" />
        <div className={styles.service_content}>
          <h3>Service 01</h3>
          <p>
            9 Carat - where sophistication meets comfort, creating your
            ultimate dream home. Experience opulence like never before after
            reaching this destination to .. 3
          </p>
        </div>
      </div>
      <div
        className={`${styles.service_box} ${
          serviceIndex === 1 ? styles.active : ""
        }`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={ServiceImg2} alt="service 2" />
        <div className={styles.service_content}>
          <h3>Service 02</h3>
          <p>
            9 Carat - where sophistication meets comfort, creating your
            ultimate dream home. Experience opulence like never before after
            reaching this destination to .. 3
          </p>
        </div>
      </div>
      <div
        className={`${styles.service_box} ${
          serviceIndex === 2 ? styles.active : ""
        }`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={ServiceImg3} alt="service 3" />
        <div className={styles.service_content}>
          <h3>Service 03</h3>
          <p>
            9 Carat - where sophistication meets comfort, creating your
            ultimate dream home. Experience opulence like never before after
            reaching this destination to .. 3
          </p>
        </div>
      </div>
      <div
        className={`${styles.service_box} ${
          serviceIndex === 3 ? styles.active : ""
        }`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={ServiceImg4} alt="service 4" />
        <div className={styles.service_content}>
          <h3>Service 04</h3>
          <p>
            9 Carat - where sophistication meets comfort, creating your
            ultimate dream home. Experience opulence like never before after
            reaching this destination to .. 3
          </p>
        </div>
      </div>
    </div>
    <div className={styles.service_inner_slider}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
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
                9 Carat - where sophistication meets comfort, creating your
                ultimate dream home. Experience opulence like never before
                after reaching this destination to..
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
                9 Carat - where sophistication meets comfort, creating your
                ultimate dream home. Experience opulence like never before
                after reaching this destination to..
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
                9 Carat - where sophistication meets comfort, creating your
                ultimate dream home. Experience opulence like never before
                after reaching this destination to..
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
                9 Carat - where sophistication meets comfort, creating your
                ultimate dream home. Experience opulence like never before
                after reaching this destination to..
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