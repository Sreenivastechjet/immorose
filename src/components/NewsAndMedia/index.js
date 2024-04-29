import React, { useState } from "react";
import Image from "next/image";
import styles from "./newsAndMedia.module.scss";
import VectorBg from "../../../public/assets/images/vector_bg.webp";
import { FaArrowRight } from "react-icons/fa";

function NewsAndMedia() {

  const sliderData = [
    {
        img: "/assets/images/news_media.webp",
        heading: "Discover the Elegance of 9 Carat..",
        info: "9 Carat - where sophistication meets comfort, creating your ultimate dream home. Experience opulence like never before after reaching this destination to .."
    },
    {
        img: "/assets/images/services_img4.webp",
        heading: "Discover the Elegance of 9 Carat..",
        info: "9 Carat - where sophistication meets comfort, creating your ultimate dream home. Experience opulence like never before after reaching this destination to .."
    },
    {
      img: "/assets/images/news_media.webp",
      heading: "Discover the Elegance of 9 Carat..",
      info: "9 Carat - where sophistication meets comfort, creating your ultimate dream home. Experience opulence like never before after reaching this destination to .."
  },
  {
      img: "/assets/images/services_img4.webp",
      heading: "Discover the Elegance of 9 Carat..",
      info: "9 Carat - where sophistication meets comfort, creating your ultimate dream home. Experience opulence like never before after reaching this destination to .."
  }
]

const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.news_and_media}>
      <div className={styles.meida_banner_right}>
        <Image src={VectorBg} alt="" />
      </div>
      <div className={styles.media_inner}>
        <div className={styles.media_heading}>
          <h3 data-aos="fade-up">NEWS & MEDIA</h3>
        </div>
        <div className={styles.media_wrapper}>
          <div className={styles.media_box}>
            {
              sliderData.map((item, index) => {
                return (
                  <div className={`${index === currentIndex ? styles.active : ''} 
                  ${index === (currentIndex + 1) % sliderData.length ? styles.next : ''} 
                  ${index === (currentIndex - 1 + sliderData.length) % sliderData.length ? styles.prev : ''} 
                  ${styles.media_card}`} key={index}>
                  <div className={`media_slider_img_area ${styles.media_img_area}`}>
                    <img src={item.img} alt={item.heading} />
                  </div>
                  <div className={`media_slider_cont_area ${styles.media_cont_area}`}>
                    <h2>{item.heading}</h2>
                    <p>
                      {item.info}
                      <strong>Read more</strong>
                    </p>
                  </div>
                </div>
                )
              })
            }
            <div className={styles.next_arrow} onClick={handleNext}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsAndMedia;
