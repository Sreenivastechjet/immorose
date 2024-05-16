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
import Parking from "../../../public/assets/images/parking.svg";
import Floors from "../../../public/assets/images/Floors.svg";
import Elevators from "../../../public/assets/images/Elevators.svg";
import Bathtub from "../../../public/assets/images/bathtub.svg";

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

  const images0 = [
    "/assets/images/slider1_1.jpg",
    "/assets/images/slider1_2.jpg",
    "/assets/images/slider1_3.jpg",
    "/assets/images/slider1_4.jpg",
  ];
  const images2 = [
    "/assets/images/slider2_1.jpg",
    "/assets/images/slider2_2.jpg",
    "/assets/images/slider2_3.jpg",
    "/assets/images/slider2_4.jpg",
  ];
  const images1 = [
    "/assets/images/slider3_1.jpg",
    "/assets/images/slider3_2.jpg",
    "/assets/images/slider3_3.jpg",
    "/assets/images/slider3_4.jpg",
  ];

  const initialActiveIndexes = [
    Array(images0.length).fill(0),
    Array(images1.length).fill(0),
    Array(images2.length).fill(0),
  ];
  const [activeIndexes, setActiveIndexes] = useState(initialActiveIndexes);

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
                  {/* First Swiper */}
                  <div className={styles.luxury_box_content} key={0}>                  
                      <div className={styles.Luxury_img_slider}>
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          autoplay={{ delay: 4000 }}
                          className={styles.swiper_images_wrap}
                          onSwiper={(swiper) =>
                            (swiperRefs.current[0] = swiper)
                          }
                          onSlideChange={handleSlideChange(0)}
                        >
                          {images0.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={image}
                                alt={`Slider ${0 + 1}`}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <ul className={styles.Luxury_img_slider_option}>
                        {images0.map((_, imageIndex) => {
                          return (
                            <li
                              key={imageIndex}
                              className={
                                activeIndexes[0] === imageIndex
                                  ? styles.active
                                  : ""
                              }
                              onClick={() =>
                                handleOptionClick(0, imageIndex)
                              }
                            >
                              <img
                                src={images0[imageIndex]}
                                alt={`Slider ${0 + 1}`}
                              />
                            </li>
                          );
                        })}
                      </ul>
                      <div className={styles.luxury_box_content_box}>
                        <div className={styles.heading}>
                          <h3>Rosons Towers</h3>
                          <p>
                          Rosons Tower, located on boulevard Du 30 Juin, is ideal for operating your business in the heart of Kinshasa. It’s where modern architecture blends with sophisticated design to create secure, smart and spacious offices behind a beautifully crafted facade.
                          </p>
                        </div>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={Floors} alt="double bed" />{" "}
                            <span>11 floors</span>
                          </li>
                          <li>
                            <Image src={Elevators} alt="bathtub" />{" "}
                            <span>3 elevators </span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>10000 sq ft area</span>
                          </li>
                        </ul>
                        <Link
                          href={`/projects/${0 + 1}`}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                    </div>
                  </div>
                  {/* Second Swiper */}
                  <div className={styles.luxury_box_content} key={1}>
                  <div className={styles.Luxury_img_slider}>
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          autoplay={{ delay: 4000 }}
                          className={styles.swiper_images_wrap}
                          onSwiper={(swiper) =>
                            (swiperRefs.current[1] = swiper)
                          }
                          onSlideChange={handleSlideChange(1)}
                        >
                          {images1.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={image}
                                alt={`Slider ${1 + 1}`}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <ul className={styles.Luxury_img_slider_option}>
                        {images1.map((_, imageIndex) => {
                          return (
                            <li
                              key={imageIndex}
                              className={
                                activeIndexes[1] === imageIndex
                                  ? styles.active
                                  : ""
                              }
                              onClick={() =>
                                handleOptionClick(1, imageIndex)
                              }
                            >
                              <img
                                src={images1[imageIndex]}
                                alt={`Slider ${1 + 1}`}
                              />
                            </li>
                          );
                        })}
                      </ul>
                      <div className={styles.luxury_box_content_box}>
                        <div className={styles.heading}>
                          <h3>9 Carats</h3>
                          <p>
                          Discover our sumptuous villas in a peaceful residence with car parks, consisting of 9 modern and luxurious villas with a clubhouse for your leisure activities and receptions. Experience luxury and comfort on your doorstep where the villas are located in a prime privileged area.
                          </p>
                        </div>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={Bathtub} alt="bathtub" />{" "}
                            <span>7 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>450 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={`/projects/${1 + 1}`}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                    </div>
                  </div>
                  {/* Third Swiper */}
                  <div className={styles.luxury_box_content} key={2}>
                  <div className={styles.Luxury_img_slider}>
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          autoplay={{ delay: 4000 }}
                          className={styles.swiper_images_wrap}
                          onSwiper={(swiper) =>
                            (swiperRefs.current[2] = swiper)
                          }
                          onSlideChange={handleSlideChange(2)}
                        >
                          {images2.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={image}
                                alt={`Slider ${2 + 1}`}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <ul className={styles.Luxury_img_slider_option}>
                        {images2.map((_, imageIndex) => {
                          return (
                            <li
                              key={imageIndex}
                              className={
                                activeIndexes[2] === imageIndex
                                  ? styles.active
                                  : ""
                              }
                              onClick={() =>
                                handleOptionClick(2, imageIndex)
                              }
                            >
                              <img
                                src={images2[imageIndex]}
                                alt={`Slider ${2 + 1}`}
                              />
                            </li>
                          );
                        })}
                      </ul>
                      <div className={styles.luxury_box_content_box}>
                        <div className={styles.heading}>
                          <h3>Le cuivre</h3>
                          <p>
                          Our new large-scale project combines administrative functionality and commercial space. An incredible 23-story tower combining offices, shops, and a restaurant elevates the urban landscape of the city of Kinshasa on Boulevard Du 30 Juin.
                          </p>
                        </div>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={Floors} alt="double bed" />{" "}
                            <span>23 floors</span>
                          </li>
                          <li>
                            <Image src={Parking} alt="bathtub" />{" "}
                            <span>4 floors of parking area</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>53,370 sqm area built</span>
                          </li>
                        </ul>
                        <Link
                          href={`/projects/${3 + 1}`}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                    </div>
                  </div>
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
