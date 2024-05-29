import React, { useState } from "react";
import Image from "next/image";
import styles from "./newsAndMedia.module.scss";
import VectorBg from "../../../public/assets/images/vector_bg.webp";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function NewsAndMedia() {

  const sliderData = [    
    {
      img: "/assets/images/blog7.jpeg",
      heading: "Extraordinary Homes by Immorose",
      info: "Arthur Erickson became an architect after seeing the designs of Frank Lloyd Wright. Like his predecessor, he joined man-made structures and their environment in perfect balance...",
      url:"/news/page3"
  },
    {
        img: "/assets/images/blog1.jpeg",
        heading: "LUXURY BY IMMOROSE",
        info: "Luxury refers to a state of great comfort or elegance, often involving high quality or expensive items or experiences that are not considered essential to everyday life...",
        url:"/news/page1"
    },
    {
        img: "/assets/images/blog6.jpeg",
        heading: "Design by Immorose",
        info: "Design is a multifaceted discipline that involves creating solutions to problems with the aim of enhancing the functionality, aesthetics, and overall user experience of a product, system, or service...",
        url:"/news/page2"
    },
  {
      img: "/assets/images/blog8.jpeg",
      heading: "Extraordinary Homes by Immorose",
      info: "Arthur Erickson became an architect after seeing the designs of Frank Lloyd Wright. Like his predecessor, he joined man-made structures and their environment in perfect balance...",
      url:"/news/page3"
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
                      <Link href={item.url}><strong>Read more</strong></Link>
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
