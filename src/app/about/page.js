"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

// Components
import GetInTouch from "@/components/GetInTouch";

// Third Party
import { useSpring, animated } from "@react-spring/web";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import IntegrityIcon from "../../../public/assets/images/integrity.webp";
import QualityIcon from "../../../public/assets/images/quality.webp";
import FlexibilityIcon from "../../../public/assets/images/flexibility.webp";
import RespectTrustIcon from "../../../public/assets/images/respect-trust.webp";
import CommitmentIcon from "../../../public/assets/images/Commitment.webp";
import AboutSecPoster from "../../../public/assets/images/about_sec_poster.webp";
import VisionImg1 from "../../../public/assets/images/vision_img1.webp";
import VisionImg2 from "../../../public/assets/images/vision_img2.webp";
import ElevatedStandardImg1 from "../../../public/assets/images/elevated_standard1.webp";
import ElevatedStandardImg2 from "../../../public/assets/images/elevated_standard2.webp";
import NewsMedia from "../../../public/assets/images/news_media.webp";
import VectorBg from "../../../public/assets/images/vector_bg.webp";
import TeamMemberImg from "../../../public/assets/images/team_member.webp";
import TeamMemberImg2 from "../../../public/assets/images/team_member2.webp";
import TeamMemberImg3 from "../../../public/assets/images/team_member3.webp";
import TeamMemberImg4 from "../../../public/assets/images/team_member4.webp";
import TeamMemberImg5 from "../../../public/assets/images/team_member5.webp";
import JourneyOfExcellenceBg from "../../../public/assets/images/journey_of_excellence_bg.webp";
import KeyAchievementsBg from "../../../public/assets/images/key_achievements_bg.webp";

// Icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

// Counter
const Counter = ({ value, label, isVisible }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? value : 0 },
    config: { duration: 2000 },
    onRest: () => setAnimatedValue(value),
  });

  return (
    <>
      <h4 className={styles.counter}>
        <animated.span>
          {number.interpolate((val) => Math.floor(val))}
        </animated.span>
        {label !== "Rented Home Stay" && "+"}
      </h4>
      <span className={styles.counter_info}>{label}</span>
    </>
  );
};

const About = () => {
  const parallaxRef = useRef(null);

  const counters = [
    { label: "villas built", value: 48 },
    { label: "sqm offices built", value: 10000 },
    // { label: "Rented Home Stay", value: 598 },
  ];

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

  const sliderRef2 = useRef(null);

  const handleNextNewsMedia = useCallback(() => {
    if (!sliderRef2.current) return;
    sliderRef2.current.swiper.slidePrev();
  }, []);

  // Team Slider
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    const swiper = teamSliderRef.current.swiper;

    if (swiper) {
      swiper.on('slideChange', () => {
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
      });
    }
  }, []);

  const teamSliderRef = useRef(null);
  const teamSliderRef2 = useRef(null);
  const imgSliderRef = useRef(null);

  const handlePrev = () => {
    if (teamSliderRef.current && teamSliderRef.current.swiper) {
      teamSliderRef.current.swiper.slidePrev();
    }
    if (teamSliderRef2.current && teamSliderRef2.current.swiper) {
      teamSliderRef2.current.swiper.slidePrev();
    }
    if (imgSliderRef.current && imgSliderRef.current.swiper) {
      imgSliderRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (teamSliderRef.current && teamSliderRef.current.swiper) {
      teamSliderRef.current.swiper.slideNext();
    }
    if (teamSliderRef2.current && teamSliderRef2.current.swiper) {
      teamSliderRef2.current.swiper.slideNext();
    }
    if (imgSliderRef.current && imgSliderRef.current.swiper) {
      imgSliderRef.current.swiper.slideNext();
    }
  };

  const handleImgSliderClick = (index) => {
    if (teamSliderRef.current && teamSliderRef.current.swiper) {
      teamSliderRef.current.swiper.slideTo(index);
    }
    if (teamSliderRef2.current && teamSliderRef2.current.swiper) {
      teamSliderRef2.current.swiper.slideTo(index);
    }
    if (imgSliderRef.current && imgSliderRef.current.swiper) {
      imgSliderRef.current.swiper.slideTo(index - 1);
    }
  };
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [isPlaying, setIsPlaying] = useState(Array(5).fill(false));

  const handlePlay = (index) => {
    console.log("play", index);
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
      const updatedIsPlaying = [...isPlaying];
      updatedIsPlaying[index] = true;
      setIsPlaying(updatedIsPlaying);
    }
  };

  const handlePause = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
      const updatedIsPlaying = [...isPlaying];
      updatedIsPlaying[index] = false;
      setIsPlaying(updatedIsPlaying);
    }
  };

  const handleVideoEnd = (index) => {
    // Reset the video and set isPlaying to false when it ends
    if (videoRefs[index].current) {
      videoRefs[index].current.currentTime = 0;
      const updatedIsPlaying = [...isPlaying];
      updatedIsPlaying[index] = false;
      setIsPlaying(updatedIsPlaying);
    }
  };

  // Model
  const [isOpen, setIsOpen] = useState(false);
  const [openImage, setOpenImage] = useState("");

  const openModal = (img) => {
    setOpenImage(img);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setOpenImage("");
  };

  // Fade In animation
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.about_banner} ref={parallaxRef}>
        <div className={`cmn_heading ${styles.heading}`}>
          <ul data-aos="fade-up">
            <li>
              <Link href="/">
                <span>Home</span> <FaAngleRight />
              </Link>
            </li>
            <li>About Us</li>
          </ul>
          <h2 data-aos="fade-up">Your Invitation to a World of Unrivaled Opulence</h2>
        </div>
      </section>
      {/* About section */}
      <section className={styles.about_sec} ref={aboutSecRef}>
        <div className={styles.about_inner}>
          <div className={styles.about_cont}>
            <div className={`cmn_heading ${styles.heading}`}>
              <h2 data-aos="fade-up">A Journey of Excellence and Key Achievements</h2>
              <p data-aos="fade-up">
                Embark on our narrative of excellence, where passion meets
                precision. Explore our journey and significant achievements,
                weaving a tale of commitment and success..
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
          <div className={styles.about_img}>

            <Image
              src={AboutSecPoster}
              alt="A Journey of Excellence and Key Achievements"
            />
            <Image
              src={JourneyOfExcellenceBg}
              alt="A Journey of Excellence bg"
              className={styles.overlay_vector}
            />
          </div>
        </div>
      </section>
      {/* vision section */}
      <section className={styles.vision_sec}>
        <div className={styles.vision_inner}>
          <div className={styles.visiion_area1}>
            <Image src={VisionImg1} alt="vision 1" />
          </div>
          <div className={styles.visiion_area2}>
            <Image
              src={KeyAchievementsBg}
              alt="A Journey of Excellence bg"
              className={styles.overlay_vector}
              data-aos="fade-up"
            />
            <div className={`cmn_heading ${styles.heading}`}>
              <h2 data-aos="fade-up">Our Guiding Company Principles</h2>
              <p data-aos="fade-up">
                Dedicated to excellence, our company values integrity,
                innovation, and collaboration. We prioritize customer
                satisfaction, embrace diversity, and uphold a commitment to
                sustainability.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.vision_inner}>
          <div className={styles.visiion_area1}>
            <Image
              src={KeyAchievementsBg}
              alt="A Journey of Excellence bg"
              className={styles.overlay_vector}
            />
            <ul data-aos="fade-up">
              <li>
                <h3>Our Vision</h3>
                <p>
                  With the ambition of building 1,000,000m by 2025, we intend to position ourselfves as undisputed leader in the high end property sector, off ering exclusive and exceptional properties to a discerning clientele.
                  IMMOROSE stands out for its in-depth expertise ot the luxury market, understanding current trends the specifi c needs of its client. it is also recogsnised for its ability to off er unique, high-quality properties, combining cutting-edge technology, innovative dsign and the highest quality materials.
                </p>
              </li>
              <li>
                <h3>Our Mission</h3>
                <p>
                  To provide high-end real estate by meeting the needs and requiremment for exlusive and luxurious properties.
To provide an impeccable amd personalised level of service to our clients by off ering developping investment strategies tailored to our clients needs and objectives.
Guaranteeing confi dentiality information and discretion for our privileged clients, by respecting their privacy treating all confi dential information with utmost importance.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.visiion_area2}>
            <Image src={VisionImg2} alt="vision 2" data-aos="fade-up" />
          </div>
        </div>
      </section>
      {/* Logo slider */}
      <section className={styles.logo_slider} data-aos="fade-up">
        <div className={styles.logo_slider_wrap}>
          <div className={styles.logos_slide}>
            <div className={styles.logo_slide_item}>
              <Image src={IntegrityIcon} alt="Integrity" />
              <div className={styles.logo_slide_content}>
                <strong>Trust</strong>
                <p>Ethics</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={QualityIcon} alt="Quality" />
              <div className={styles.logo_slide_content}>
                <strong>Confidentiality</strong>
                <p>Craftsmanship</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={FlexibilityIcon} alt="Flexibility" />
              <div className={styles.logo_slide_content}>
                <strong>Expertise </strong>
                <p>Service</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={CommitmentIcon} alt="Commitment" />
              <div className={styles.logo_slide_content}>
                <strong>Security </strong>
                <p>Dedication</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={RespectTrustIcon} alt="Respect & Trust" />
              <div className={styles.logo_slide_content}>
                <strong>Transparency</strong>
                <p>Mutual Honor</p>
              </div>
            </div>
          </div>
          <div className={styles.logos_slide}>
            <div className={styles.logo_slide_item}>
              <Image src={IntegrityIcon} alt="Integrity" />
              <div className={styles.logo_slide_content}>
                <strong>Trust</strong>
                <p>Ethics</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={QualityIcon} alt="Quality" />
              <div className={styles.logo_slide_content}>
                <strong>Confidentiality</strong>
                <p>Craftsmanship</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={FlexibilityIcon} alt="Flexibility" />
              <div className={styles.logo_slide_content}>
                <strong>Expertise</strong>
                <p>Service</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={CommitmentIcon} alt="Commitment" />
              <div className={styles.logo_slide_content}>
                <strong>Security</strong>
                <p>Dedication</p>
              </div>
            </div>
            <div className={styles.logo_slide_item}>
              <Image src={RespectTrustIcon} alt="Respect & Trust" />
              <div className={styles.logo_slide_content}>
                <strong>Transparency</strong>
                <p>Mutual Honor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Elevate living standard */}
      <section className={styles.elevated_standard} data-aos="fade-up">
        <div className={styles.elevated_standard_inner}>
          <BiSolidQuoteAltLeft />
          <div className={`cmn_heading ${styles.heading}`}>
            <h2>
              Elevating Living Standards: <br /> Unmatched Luxury in Every
              Detail.
            </h2>
          </div>
          <Image
            src={ElevatedStandardImg1}
            alt="elevated_standard1"
            className={`${styles.overlay_img} ${styles.overlay_img1}`}
          />
          <Image
            src={ElevatedStandardImg2}
            alt="elevated_standard2"
            className={`${styles.overlay_img} ${styles.overlay_img2}`}
          />
        </div>
      </section>
      {/* Unique selling option */}
      <section className={styles.unique_selling_option}>
        <div className={styles.meida_banner_right}>
          <Image src={VectorBg} alt="" />
        </div>
        <div className={styles.media_inner}>
          <div className={styles.media_heading} data-aos="fade-up">
            <h3>Unique Selling points</h3>
          </div>
          <div className={styles.media_wrapper}>
            <div className={styles.media_box}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                ref={sliderRef2}
                noSwiping={true}
                allowTouchMove={false}
                className="unique_selling_slider"
                breakpoints={{
                  0: {
                    slidesPerView: 1.8,
                    centeredSlides: false,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={`unique_media_card ${styles.media_card}`}>
                    <div
                      className={`unique_media_img_area ${styles.media_img_area}`}
                    >
                      <Image src={NewsMedia} alt="" />
                      <h2>Interior Design</h2>
                    </div>
                    <div
                      className={`unique_media_cont_area ${styles.media_cont_area}`}
                    >
                      <h2>Interior Design</h2>
                      <p>
                        Transform your space into a sanctuary of elegance and
                        style with our expert interior design consultation. Our
                        team of professionals will collaborate with you to
                        create a personalized aesthetic that reflects your
                        unique taste and lifestyle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`unique_media_card ${styles.media_card}`}>
                    <div
                      className={`unique_media_img_area ${styles.media_img_area}`}
                    >
                      <Image src={NewsMedia} alt="" />
                      <h2>Service 2</h2>
                    </div>
                    <div
                      className={`unique_media_cont_area ${styles.media_cont_area}`}
                    >
                      <h2>Service 2</h2>
                      <p>
                        Transform your space into a sanctuary of elegance and
                        style with our expert interior design consultation. Our
                        team of professionals will collaborate with you to
                        create a personalized aesthetic that reflects your
                        unique taste and lifestyle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`unique_media_card ${styles.media_card}`}>
                    <div
                      className={`unique_media_img_area ${styles.media_img_area}`}
                    >
                      <Image src={NewsMedia} alt="" />
                      <h2>Interior Design</h2>
                    </div>
                    <div
                      className={`unique_media_cont_area ${styles.media_cont_area}`}
                    >
                      <h2>Interior Design</h2>
                      <p>
                        Transform your space into a sanctuary of elegance and
                        style with our expert interior design consultation. Our
                        team of professionals will collaborate with you to
                        create a personalized aesthetic that reflects your
                        unique taste and lifestyle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`unique_media_card ${styles.media_card}`}>
                    <div
                      className={`unique_media_img_area ${styles.media_img_area}`}
                    >
                      <Image src={NewsMedia} alt="" />
                      <h2>Interior Design</h2>
                    </div>
                    <div
                      className={`unique_media_cont_area ${styles.media_cont_area}`}
                    >
                      <h2>Interior Design</h2>
                      <p>
                        Transform your space into a sanctuary of elegance and
                        style with our expert interior design consultation. Our
                        team of professionals will collaborate with you to
                        create a personalized aesthetic that reflects your
                        unique taste and lifestyle.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={styles.next_arrow} onClick={handleNextNewsMedia}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team section */}
      <section className={styles.team}>
        <div className={styles.team_inner}>
          <div className={styles.main_heading}>
            <h3 data-aos="fade-up">People Behind This</h3>
          </div>
          <div className={styles.team_slider}>
            <div className={styles.desktop_slider}>
              <Swiper
                modules={[Navigation, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                ref={teamSliderRef}
                className="team_slider"
                effect="fade"
              >
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        ref={videoRefs[0]}
                        poster={"/assets/images/team_member.webp"}
                        controls={false}
                        onEnded={() => handleVideoEnd(0)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[0]) {
                            handlePause(0);
                          } else {
                            handlePlay(0);
                          }
                        }}
                      >
                        {isPlaying[0] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        poster={"/assets/images/team_member2.webp"}
                        controls={false}
                        ref={videoRefs[1]}
                        onEnded={() => handleVideoEnd(1)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[1]) {
                            handlePause(1);
                          } else {
                            handlePlay(1);
                          }
                        }}
                      >
                        {isPlaying[1] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        poster={"/assets/images/team_member3.webp"}
                        controls={false}
                        ref={videoRefs[2]}
                        onEnded={() => handleVideoEnd(2)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[2]) {
                            handlePause(2);
                          } else {
                            handlePlay(2);
                          }
                        }}
                      >
                        {isPlaying[2] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        poster={"/assets/images/team_member4.webp"}
                        controls={false}
                        ref={videoRefs[3]}
                        onEnded={() => handleVideoEnd(3)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[3]) {
                            handlePause(3);
                          } else {
                            handlePlay(3);
                          }
                        }}
                      >
                        {isPlaying[3] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        ref={videoRefs[4]}
                        poster={"/assets/images/team_member5.webp"}
                        controls={false}
                        onEnded={() => handleVideoEnd(4)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[4]) {
                            handlePause(4);
                          } else {
                            handlePlay(4);
                          }
                        }}
                      >
                        {isPlaying[4] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.mobile_slider}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={7}
                slidesPerView={1.07}
                centeredSlides={true}
                className="team_slider"
              >
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        ref={videoRefs[0]}
                        poster={"/assets/images/team_member.webp"}
                        controls={false}
                        onEnded={() => handleVideoEnd(0)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[0]) {
                            handlePause(0);
                          } else {
                            handlePlay(0);
                          }
                        }}
                      >
                        {isPlaying[0] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        poster={"/assets/images/team_member2.webp"}
                        controls={false}
                        ref={videoRefs[1]}
                        onEnded={() => handleVideoEnd(1)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[1]) {
                            handlePause(1);
                          } else {
                            handlePlay(1);
                          }
                        }}
                      >
                        {isPlaying[1] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        poster={"/assets/images/team_member3.webp"}
                        controls={false}
                        ref={videoRefs[2]}
                        onEnded={() => handleVideoEnd(2)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[2]) {
                            handlePause(2);
                          } else {
                            handlePlay(2);
                          }
                        }}
                      >
                        {isPlaying[2] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        poster={"/assets/images/team_member4.webp"}
                        controls={false}
                        ref={videoRefs[3]}
                        onEnded={() => handleVideoEnd(3)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[3]) {
                            handlePause(3);
                          } else {
                            handlePlay(3);
                          }
                        }}
                      >
                        {isPlaying[3] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.team_item}>
                    <div className={styles.team_img}>
                      <video
                        ref={videoRefs[4]}
                        poster={"/assets/images/team_member5.webp"}
                        controls={false}
                        onEnded={() => handleVideoEnd(4)}
                      >
                        <source src="/assets/videos/video.mp4" type="video/mp4" />
                      </video>
                      <button
                        className={styles.play}
                        onClick={() => {
                          if (isPlaying[4]) {
                            handlePause(4);
                          } else {
                            handlePlay(4);
                          }
                        }}
                      >
                        {isPlaying[4] ? <>Pause</> : <>Play Now</>}
                      </button>
                    </div>
                    <div className={`team_slider_team_cont ${styles.team_cont}`}>
                      <BiSolidQuoteAltLeft />
                      <div className={`cmn_heading ${styles.heading}`}>
                        <h2>Our team fuels our remarkable journey</h2>
                        <p>- Robert Cohen</p>
                        <span>Founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <ul className={styles.slider_navigation}>
              <li className={` ${isFirstSlide ? styles.active : ''}`} onClick={handlePrev}>
                <FaArrowLeft />
              </li>
              <li className={`${isLastSlide ? styles.active : ''}`} onClick={handleNext}>
                <FaArrowRight />
              </li>
            </ul>
            <div className={styles.img_slider}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                ref={teamSliderRef2}
                className={styles.team_slider_cont}
              >
                <SwiperSlide>
                  <div className={`team_slider_team_cont ${styles.team_cont}`}>
                    <BiSolidQuoteAltLeft />
                    <div className={`cmn_heading ${styles.heading}`}>
                      <h2>Our team fuels our remarkable journey</h2>
                      <p>- Robert Cohen</p>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`team_slider_team_cont ${styles.team_cont}`}>
                    <BiSolidQuoteAltLeft />
                    <div className={`cmn_heading ${styles.heading}`}>
                      <h2>Our team fuels our remarkable journey</h2>
                      <p>- Robert Cohen</p>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`team_slider_team_cont ${styles.team_cont}`}>
                    <BiSolidQuoteAltLeft />
                    <div className={`cmn_heading ${styles.heading}`}>
                      <h2>Our team fuels our remarkable journey</h2>
                      <p>- Robert Cohen</p>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`team_slider_team_cont ${styles.team_cont}`}>
                    <BiSolidQuoteAltLeft />
                    <div className={`cmn_heading ${styles.heading}`}>
                      <h2>Our team fuels our remarkable journey</h2>
                      <p>- Robert Cohen</p>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`team_slider_team_cont ${styles.team_cont}`}>
                    <BiSolidQuoteAltLeft />
                    <div className={`cmn_heading ${styles.heading}`}>
                      <h2>Our team fuels our remarkable journey</h2>
                      <p>- Robert Cohen</p>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3.5}
                ref={imgSliderRef}
              >
                <SwiperSlide>
                  <div className={styles.img_slider_item} onClick={() => handleImgSliderClick(1)}>
                    <Image src={TeamMemberImg2} alt="team_member" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.img_slider_item} onClick={() => handleImgSliderClick(2)}>
                    <Image src={TeamMemberImg3} alt="team_member" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.img_slider_item} onClick={() => handleImgSliderClick(3)}>
                    <Image src={TeamMemberImg4} alt="team_member" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.img_slider_item} onClick={() => handleImgSliderClick(4)}>
                    <Image src={TeamMemberImg5} alt="team_member" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.img_slider_item} onClick={() => handleImgSliderClick(0)}>
                    <Image src={TeamMemberImg} alt="team_member" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={`cmn_heading ${styles.heading}`}>
          <p data-aos="fade-up">Gallery</p>
          <h2 data-aos="fade-up">#Flauntoffyourproperty</h2>
        </div>
        <div className={styles.gallery_box_wrap} data-aos="fade-up">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className={styles.gallery_box}>
              <div className={styles.gallery_item}>
                <div className={styles.long_img}>
                  <Image
                    src={"/assets/images/gallery_1.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_1.webp")}
                  />
                </div>
                <div className={styles.small_img}>
                  <Image
                    src={"/assets/images/gallery_2.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_2.webp")}
                  />
                  <Image
                    src={"/assets/images/gallery_3.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_3.webp")}
                  />
                </div>
              </div>
              <div className={styles.gallery_item}>
                <div className={styles.long_img}>
                  <Image
                    src={"/assets/images/gallery_4.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_4.webp")}
                  />
                </div>
                <div className={styles.small_img}>
                  <Image
                    src={"/assets/images/gallery_5.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_5.webp")}
                  />
                  <Image
                    src={"/assets/images/gallery_6.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_6.webp")}
                  />
                </div>
              </div>
              <div className={styles.gallery_item}>
                <div className={styles.long_img}>
                  <Image
                    src={"/assets/images/gallery_1.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_1.webp")}
                  />
                </div>
                <div className={styles.small_img}>
                  <Image
                    src={"/assets/images/gallery_2.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_2.webp")}
                  />
                  <Image
                    src={"/assets/images/gallery_3.webp"}
                    alt={"Rosons Towers"}
                    width={1920}
                    height={700}
                    onClick={() => openModal("/assets/images/gallery_3.webp")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Get In Touch */}
      <GetInTouch />

      {/* Model */}
      {isOpen && (
        <>
          <div className={styles.modal_overlay} onClick={closeModal}></div>
          <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
              <button
                type="button"
                className={styles.modal_close}
                onClick={closeModal}
              >
                &times;
              </button>
              <div className={styles.modal_content}>
                <Image src={openImage} alt="Modal" width={1920} height={700} />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default About;
