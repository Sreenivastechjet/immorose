"use client";
// React Imports
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./page.module.scss";

// Components
import GetInTouch from "@/components/GetInTouch";
import NewsAndMedia from "@/components/NewsAndMedia";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";

// third party imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay, FaPause, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import AboutBg from "../../public/assets/images/about_bg.webp";
import HeroBgVector from "../../public/assets/images/hero_bg_tree.webp";
import DoubleBedIcon from "../../public/assets/images/double-bed.svg";
import BathtubIcon from "../../public/assets/images/bathtub.svg";
import WideIcon from "../../public/assets/images/wide.svg";
import Parking from "../../public/assets/images/parking.svg";
import Floors from "../../public/assets/images/Floors.svg";
import Elevators from "../../public/assets/images/Elevators.svg";

const Counter = ({ value, label, isVisible }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? value : 0 },
    config: { duration: 2000 },
    onRest: () => setAnimatedValue(value),
  });
  // Function to format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <>
      <h4 className={styles.counter}>
        <animated.span>
          {number.interpolate((val) => formatNumber(Math.floor(val)))}
        </animated.span>
        {label !== "Rented Home Stay" && "+"}
      </h4>
      <span className={styles.counter_info}>{label}</span>
    </>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

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

  const [outerSwiper, setOuterSwiper] = useState(null);
  const [innerSwiper1, setInnerSwiper1] = useState(null);
  const [innerSwiper2, setInnerSwiper2] = useState(null);
  const [innerSwiper3, setInnerSwiper3] = useState(null);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);

  const handleOptionClick1 = (index) => {
    if (innerSwiper1) {
      innerSwiper1.slideTo(index);
      setActiveIndex1(index);
    }
  };

  const handleOptionClick2 = (index) => {
    if (innerSwiper2) {
      innerSwiper2.slideTo(index);
      setActiveIndex2(index);
    }
  };
  const handleOptionClick3 = (index) => {
    if (innerSwiper3) {
      innerSwiper3.slideTo(index);
      setActiveIndex3(index);
    }
  };

  // UseEffect to set initial active indexes
  useEffect(() => {
    setActiveIndex1(innerSwiper1?.activeIndex || 0);
    setActiveIndex2(innerSwiper2?.activeIndex || 0);
    setActiveIndex3(innerSwiper3?.activeIndex || 0);
  }, [innerSwiper1, innerSwiper2, innerSwiper3]);

  // Handle inner slider 1 slide change
  const handleInnerSlideChange1 = (swiper) => {
    setActiveIndex1(swiper.activeIndex);
  };

  // Handle inner slider 2 slide change
  const handleInnerSlideChange2 = (swiper) => {
    setActiveIndex2(swiper.activeIndex);
  };
  // Handle inner slider 3 slide change
  const handleInnerSlideChange3 = (swiper) => {
    setActiveIndex3(swiper.activeIndex);
  };

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const counters = [
    { label: "villas built", value: 48 },
    { label: "sqm offices built", value: 10000 },
    // { label: "Rented Home Stay", value: 598 }, ff
  ];

  // Hero Parallex
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxScroll = () => {
      const parallax = parallaxRef.current;
      if (parallax) {
        const speed = 0.5;
        parallax.style.backgroundPositionY = `${window.pageYOffset * speed}px`;
      }
    };

    window.addEventListener("scroll", parallaxScroll);

    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  // Counter
  const aboutSecRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutSecRef.current) {
      observer.observe(aboutSecRef.current);
    }

    return () => {
      if (aboutSecRef.current) {
        observer.unobserve(aboutSecRef.current);
      }
    };
  }, []);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero} ref={parallaxRef}>
        <div className={styles.hero_inner}>
          <h1 data-aos="fade-up">Find your next <br /> best luxury place</h1>
          <p data-aos="fade-up">
            Explore nearby opulent estates at surprisingly accessible rates,
            showcasing unrivaled luxury.
          </p>
          <Link
            href={"#"}
            className={` cmn_btn ${styles.btn}`}
            data-aos="fade-up"
          >
            EXPLORE LUXURY
          </Link>
        </div>
        <div className={styles.hero_vector}>
          <Image src={HeroBgVector} alt="hero vector" />
        </div>
      </section>
      {/* About Us */}
      <section className={styles.about_us} ref={aboutSecRef}>
        <div className={styles.about_sec}>
          <h3 data-aos="fade-up">ABOUT US</h3>
          <p data-aos="fade-up">
            We take great pride in ensuring the satisfaction of our customers.
            That's why we proudly guarantee the quality and reliability of our
            products.
          </p>
          <Link
            href="#"
            className={` cmn_btn ${styles.btn}`}
            data-aos="fade-up"
          >
            EXPLORE LUXURY
          </Link>
          <Image src={AboutBg} alt="About Us" data-aos="fade-left" />
        </div>
        <div className={styles.about_counter}>
          <div className={`cmn_heading ${styles.heading}`}>
            <h2 data-aos="fade-up">
              We've found luxury homes for clients for a decade.
            </h2>
            <p data-aos="fade-up">
              We take great pride in ensuring the satisfaction of our customers,
              which is why we guarantee that the products we sell will bring
              happiness to each and every customer. Our genuine care for
              customer satisfaction is what sets us apart.
            </p>
          </div>
          <ul data-aos="fade-up">
            {counters.map((counter, index) => (
              <li key={index}>
                <Counter
                  value={counter.value}
                  label={counter.label}
                  isVisible={isVisible}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Video */}
      <section className={styles.video_sec}>
        <video
          ref={videoRef}
          poster="/assets/images/media_bg.webp"
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
      </section>
      {/* explore Luxury */}
      <section className={styles.explore_luxury}>
        <div className={styles.explore_heading}>
          {Array.from({ length: 3 }).map((_, index) => (
            <h2 data-aos="fade-up">The future of Living</h2>
          ))}
        </div>
        <div className={styles.explore_tabs} data-aos="fade-up">
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
        <div className={styles.luxury_inner}>
          {activeTab === "tab1" && (
            <>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.07}
                centeredSlides={true}
                loop={true}
                onSwiper={setOuterSwiper}
                // navigation={true}
                ref={sliderRef}
                className={"luxury_swiper_slider"}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 7,
                    loop: true,
                  },
                  767: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 0,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper1}
                          onSlideChange={handleInnerSlideChange1}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_1.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_2.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_3.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_4.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Tower</h3>
                        <p>
                          Rosons Tower, located on boulevard Du 30 Juin, is ideal for operating your business in the heart of Kinshasa. It’s where modern architecture blends with sophisticated design to create secure, smart and spacious offices behind a beautifully crafted facade.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={Floors} alt="double bed" />{" "}
                            <span>11 floors</span>
                          </li>
                          <li>
                            <Image src={Elevators} alt="bathtub" />{" "}
                            <span>3 elevators</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>10000 sq ft area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex1 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick1(0)}
                          >
                            <Image
                              src={"/assets/images/slider1_1.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick1(1)}
                          >
                            <Image
                              src={"/assets/images/slider1_2.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick1(2)}
                          >
                            <Image
                              src={"/assets/images/slider1_3.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick1(3)}
                          >
                            <Image
                              src={"/assets/images/slider1_4.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper2}
                          onSlideChange={handleInnerSlideChange2}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_1.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_2.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_3.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_4.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>9 Carats</h3>
                        <p>
                          Discover our sumptuous villas in a peaceful residence with car parks, consisting of 9 modern and luxurious villas with a clubhouse for your leisure activities and receptions. Experience luxury and comfort on your doorstep where the villas are located in a prime privileged area.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>7 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>450 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex2 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick2(0)}
                          >
                            <Image
                              src={"/assets/images/slider2_1.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick2(1)}
                          >
                            <Image
                              src={"/assets/images/slider2_2.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick2(2)}
                          >
                            <Image
                              src={"/assets/images/slider2_3.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick2(3)}
                          >
                            <Image
                              src={"/assets/images/slider2_4.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper3}
                          onSlideChange={handleInnerSlideChange3}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider3_1.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider3_2.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider3_3.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider3_4.jpg"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Le cuivre</h3>
                        <p>
                        Our new large-scale project combines administrative functionality and commercial space. An incredible 23-story tower combining offices, shops, and a restaurant elevates the urban landscape of the city of Kinshasa on Boulevard Du 30 Juin.
                        </p>
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
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex1 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick3(0)}
                          >
                            <Image
                              src={"/assets/images/slider3_1.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick3(1)}
                          >
                            <Image
                              src={"/assets/images/slider3_2.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick3(2)}
                          >
                            <Image
                              src={"/assets/images/slider3_3.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick3(3)}
                          >
                            <Image
                              src={"/assets/images/slider3_4.jpg"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <ul className={styles.slider_navigation}>
                <li className="prev-arrow" onClick={handlePrev}>
                  <FaArrowLeft />
                </li>
                <li className="next-arrow" onClick={handleNext}>
                  <FaArrowRight />
                </li>
              </ul>
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.07}
                centeredSlides={true}
                loop={true}
                onSwiper={setOuterSwiper}
                // navigation={true}
                ref={sliderRef}
                className={"luxury_swiper_slider"}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 7,
                    loop: true,
                  },
                  767: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 0,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper1}
                          onSlideChange={handleInnerSlideChange1}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_1.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_2.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_3.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_4.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Towers</h3>
                        <p>
                          We take great pride in ensuring the satisfaction of
                          our customers. That's why we proudly guarantee the
                          quality and reliability of our products.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>3 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex1 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick1(0)}
                          >
                            <Image
                              src={"/assets/images/slider1_1.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick1(1)}
                          >
                            <Image
                              src={"/assets/images/slider1_2.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick1(2)}
                          >
                            <Image
                              src={"/assets/images/slider1_3.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick1(3)}
                          >
                            <Image
                              src={"/assets/images/slider1_4.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper2}
                          onSlideChange={handleInnerSlideChange2}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_1.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_2.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_3.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_4.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Towers</h3>
                        <p>
                          We take great pride in ensuring the satisfaction of
                          our customers. That's why we proudly guarantee the
                          quality and reliability of our products.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>3 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex2 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick2(0)}
                          >
                            <Image
                              src={"/assets/images/slider2_1.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick2(1)}
                          >
                            <Image
                              src={"/assets/images/slider2_2.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick2(2)}
                          >
                            <Image
                              src={"/assets/images/slider2_3.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick2(3)}
                          >
                            <Image
                              src={"/assets/images/slider2_4.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <ul className={styles.slider_navigation}>
                <li className="prev-arrow" onClick={handlePrev}>
                  <FaArrowLeft />
                </li>
                <li className="next-arrow" onClick={handleNext}>
                  <FaArrowRight />
                </li>
              </ul>
            </>
          )}
          {activeTab === "tab3" && (
            <>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.07}
                centeredSlides={true}
                loop={true}
                onSwiper={setOuterSwiper}
                // navigation={true}
                ref={sliderRef}
                className={"luxury_swiper_slider"}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 7,
                    loop: true,
                  },
                  767: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 0,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper1}
                          onSlideChange={handleInnerSlideChange1}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_1.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_2.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_3.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_4.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Towers</h3>
                        <p>
                          We take great pride in ensuring the satisfaction of
                          our customers. That's why we proudly guarantee the
                          quality and reliability of our products.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>3 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex1 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick1(0)}
                          >
                            <Image
                              src={"/assets/images/slider1_1.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick1(1)}
                          >
                            <Image
                              src={"/assets/images/slider1_2.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick1(2)}
                          >
                            <Image
                              src={"/assets/images/slider1_3.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick1(3)}
                          >
                            <Image
                              src={"/assets/images/slider1_4.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}

                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper2}
                          onSlideChange={handleInnerSlideChange2}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_1.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_2.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_3.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_4.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Towers</h3>
                        <p>
                          We take great pride in ensuring the satisfaction of
                          our customers. That's why we proudly guarantee the
                          quality and reliability of our products.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>3 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex2 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick2(0)}
                          >
                            <Image
                              src={"/assets/images/slider2_1.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick2(1)}
                          >
                            <Image
                              src={"/assets/images/slider2_2.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick2(2)}
                          >
                            <Image
                              src={"/assets/images/slider2_3.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick2(3)}
                          >
                            <Image
                              src={"/assets/images/slider2_4.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <ul className={styles.slider_navigation}>
                <li className="prev-arrow" onClick={handlePrev}>
                  <FaArrowLeft />
                </li>
                <li className="next-arrow" onClick={handleNext}>
                  <FaArrowRight />
                </li>
              </ul>
            </>
          )}
          {activeTab === "tab4" && (
            <>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.07}
                centeredSlides={true}
                loop={true}
                onSwiper={setOuterSwiper}
                // navigation={true}
                ref={sliderRef}
                className={"luxury_swiper_slider"}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    centeredSlides: true,
                    spaceBetween: 7,
                    loop: true,
                  },
                  767: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 0,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper1}
                          onSlideChange={handleInnerSlideChange1}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_1.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_2.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_3.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider1_4.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Towers</h3>
                        <p>
                          We take great pride in ensuring the satisfaction of
                          our customers. That's why we proudly guarantee the
                          quality and reliability of our products.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>3 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex1 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick1(0)}
                          >
                            <Image
                              src={"/assets/images/slider1_1.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick1(1)}
                          >
                            <Image
                              src={"/assets/images/slider1_2.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick1(2)}
                          >
                            <Image
                              src={"/assets/images/slider1_3.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex1 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick1(3)}
                          >
                            <Image
                              src={"/assets/images/slider1_4.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.luxury_box}>
                    <div className={styles.luxury_box_content}>
                      <div
                        className={styles.Luxury_img_slider}
                      >
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={0}
                          slidesPerView={1}
                          onSwiper={setInnerSwiper2}
                          onSlideChange={handleInnerSlideChange2}
                          autoplay={{ delay: 5000 }}
                        >
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_1.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_2.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_3.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              src={"/assets/images/slider2_4.webp"}
                              alt={"Rosons Towers"}
                              width={1920}
                              height={700}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className={`luxury_content_box ${styles.luxury_box_content_box}`}
                      >
                        <h3>Rosons Towers</h3>
                        <p>
                          We take great pride in ensuring the satisfaction of
                          our customers. That's why we proudly guarantee the
                          quality and reliability of our products.
                        </p>
                        <ul className={styles.luxury_services}>
                          <li>
                            <Image src={DoubleBedIcon} alt="double bed" />{" "}
                            <span>4 Bedrooms</span>
                          </li>
                          <li>
                            <Image src={BathtubIcon} alt="bathtub" />{" "}
                            <span>3 Bathrooms</span>
                          </li>
                          <li>
                            <Image src={WideIcon} alt="wide " />{" "}
                            <span>2500 sq. ft Area</span>
                          </li>
                        </ul>
                        <Link
                          href={"#"}
                          className={`cmn_btn filled_btn ${styles.btn}`}
                        >
                          EXPLORE LUXURY
                        </Link>
                        <ul className={styles.Luxury_img_slider_option}>
                          <li
                            className={activeIndex2 === 0 ? styles.active : ""}
                            onClick={() => handleOptionClick2(0)}
                          >
                            <Image
                              src={"/assets/images/slider2_1.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 1 ? styles.active : ""}
                            onClick={() => handleOptionClick2(1)}
                          >
                            <Image
                              src={"/assets/images/slider2_2.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 2 ? styles.active : ""}
                            onClick={() => handleOptionClick2(2)}
                          >
                            <Image
                              src={"/assets/images/slider2_3.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                          <li
                            className={activeIndex2 === 3 ? styles.active : ""}
                            onClick={() => handleOptionClick2(3)}
                          >
                            <Image
                              src={"/assets/images/slider2_4.webp"}
                              alt={"Rosons Towers"}
                              width={100}
                              height={100}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <ul className={styles.slider_navigation}>
                <li className="prev-arrow" onClick={handlePrev}>
                  <FaArrowLeft />
                </li>
                <li className="next-arrow" onClick={handleNext}>
                  <FaArrowRight />
                </li>
              </ul>
            </>
          )}
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
}
