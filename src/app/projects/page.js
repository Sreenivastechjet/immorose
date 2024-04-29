"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

// Components
import CallToAction from "@/components/CallToAction";
import GetInTouch from "@/components/GetInTouch";
import NewsAndMedia from "@/components/NewsAndMedia";
import Services from "@/components/Services";
import DoubleBedIcon from "../../../public/assets/images/double-bed.svg";
import LocationIcon from "../../../public/assets/images/location_icon.svg";
import WideIcon from "../../../public/assets/images/wide.svg";

// Images
import BannerVector from "../../../public/assets/images/project_banner_vector.webp";
import { FaPlay, FaPause } from "react-icons/fa";

// Third Party Import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const images = [
    "/assets/images/slider1_1.webp",
    "/assets/images/slider1_2.webp",
    "/assets/images/slider1_3.webp",
    "/assets/images/slider1_4.webp",
  ];

  const [activeIndexes, setActiveIndexes] = useState(
    Array(images.length).fill(0)
  );
  const swiperRefs = useRef([]);

  const handleSlideChange = (sliderIndex) => (swiper) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, index) =>
        index === sliderIndex ? swiper.realIndex : prevIndex
      )
    );
  };

  const handleOptionClick = (sliderIndex, imageIndex) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, index) =>
        index === sliderIndex ? imageIndex : prevIndex
      )
    );
    if (swiperRefs.current[sliderIndex]) {
      swiperRefs.current[sliderIndex].slideTo(imageIndex);
    }
  };

  // Scrolling tabs
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > projectRef.current.offsetTop &&
        window.scrollY <
          projectRef.current.offsetTop + projectRef.current.offsetHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Image
            src={BannerVector}
            alt="banner vector"
            className={styles.banner_vector}
          />
          <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
            <h2>A Visual Journey Through Our Prestigious Properties</h2>
          </div>
          <div className={styles.video_wrapper} data-aos="fade-up">
            <video
              ref={videoRef}
              poster={"/assets/images/project_banner_poster.webp"}
              controls={false}
            >
              <source src="/assets/videos/video.mp4" type="video/mp4" />
            </video>
            {!isPlaying ? (
              <div className={styles.play_btn} onClick={handlePlay}>
                <FaPlay />
              </div>
            ) : (
              <div
                className={`${styles.play_btn} ${styles.pause_btn}`}
                onClick={handlePause}
              >
                <FaPause />
              </div>
            )}
          </div>
        </div>
      </section>
      {/* projects */}
      <section
        className={`${styles.projects} ${isVisible ? styles.active : ""}`}
        ref={projectRef}
      >
        <div className={styles.projects_inner}>
          <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
            <h2>Our Projects</h2>
          </div>
          <div
            className={`${styles.project_tabs} ${
              isVisible ? styles.active : ""
            }`}
          >
            <ul>
              <li
                className={`${activeTab === "tab1" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab1")}
              >
                All
              </li>
              <li
                className={`${activeTab === "tab2" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab2")}
              >
                Residentials
              </li>
              <li
                className={`${activeTab === "tab3" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab3")}
              >
                Commercials
              </li>
              <li
                className={`${activeTab === "tab4" ? styles.active : ""}`}
                onClick={() => handleTabClick("tab4")}
              >
                Upcoming
              </li>
            </ul>
          </div>
          <div className={styles.project_list_wrapper}>
            {activeTab === "tab1" && (
              <div className={styles.project_item}>
                <div className={styles.luxury_box}>
                  {[...Array(4)].map((_, sliderIndex) => (
                    <div
                      className={styles.luxury_box_content}
                      key={sliderIndex}
                    >
                      <div className={styles.Luxury_img_slider}>
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          autoplay={{ delay: 4000 }}
                          className={styles.swiper_images_wrap}
                          onSwiper={(swiper) =>
                            (swiperRefs.current[sliderIndex] = swiper)
                          }
                          onSlideChange={handleSlideChange(sliderIndex)}
                        >
                          {images.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={image}
                                alt={`Slider ${sliderIndex + 1}`}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <ul className={styles.Luxury_img_slider_option}>
                        {images.map((_, imageIndex) => {
                          return (
                            <li
                              key={imageIndex}
                              className={
                                activeIndexes[sliderIndex] === imageIndex
                                  ? styles.active
                                  : ""
                              }
                              onClick={() =>
                                handleOptionClick(sliderIndex, imageIndex)
                              }
                            >
                              <img
                                src={images[imageIndex]}
                                alt={`Slider ${sliderIndex + 1}`}
                              />
                            </li>
                          );
                        })}
                      </ul>
                      <div className={styles.luxury_box_content_box}>
                        <div className={styles.heading}>
                          <h3>Rosons Towers</h3>
                          <p>
                            We take great pride in ensuring the satisfaction of
                            our customers. That's why we proudly guarantee the
                            quality and reliability of our products.
                          </p>
                        </div>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>10+ amenities, floor plans, etc</span>
                          </li>
                          <li>
                            <Image src={LocationIcon} alt="bathtub" />{" "}
                            <span>126 Boulevard du 30 Juin, Gombe. </span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={`/projects/${sliderIndex + 1}`}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Schedule a call */}
      <CallToAction />
      {/* Services */}
      <Services />
      {/* News & Media */}
      <NewsAndMedia />
      {/* Get In Touch */}
      <GetInTouch />
    </main>
  );
};

export default Projects;
