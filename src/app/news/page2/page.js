"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import GetInTouch from "@/components/GetInTouch";

// Third Party
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import BlogDetailBanner from "../../../../public/assets/images/blog1.jpeg";
import BlogDetailBanner2 from "../../../../public/assets/images/blog10.jpeg";
// import ProfileImg from "../../../../public/assets/images/profile.webp";
import RelatedBlogVector from "../../../../public/assets/images/related_blog_vector.png";

// Icons
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { LuFacebook } from "react-icons/lu";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiTwitterXLine, RiVolumeUpLine } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft, FaInstagram } from "react-icons/fa";

const NewsDetail = (params) => {
  const sliderRef2 = useRef(null);

  console.log("first", params)
  const handlePrevNewsMedia = useCallback(() => {
    if (!sliderRef2.current) return;
    sliderRef2.current.swiper.slidePrev();
  }, []);

  const handleNextNewsMedia = useCallback(() => {
    if (!sliderRef2.current) return;
    sliderRef2.current.swiper.slideNext();
  }, []);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    const swiper = sliderRef2.current.swiper;

    if (swiper) {
      swiper.on("slideChange", () => {
        setIsFirstSlide(swiper.isBeginning);
        setIsLastSlide(swiper.isEnd);
      });
    }
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.blogDetails_banner}>
        <div className={styles.banner_content}>
          <span className={styles.badge} data-aos="fade-up">Blog</span>
          <div className={styles.banner_content_div}>
            <div className={styles.heading}>
              <h1 data-aos="fade-up">Design by Immorose</h1>
              <p>“ Design is not for philosophy, it’s for life “ - Issey Miyake</p>
              {/* <div className={styles.profile} data-aos="fade-up">
                <Image
                  src={ProfileImg}
                  width={40}
                  height={40}
                  alt="banner"
                  className={styles.banner}
                />
                <p>
                  Joanna Wellick <span className={styles.vector_line}></span>
                </p>
                <span>June 28, 2018</span>
              </div> */}
            </div>
            {/* <p className={styles.cont_info} data-aos="fade-up">
            In a world where luxury knows no bounds, premier property insights are your key to unlocking the pinnacle of refined living.
            </p> */}
          </div>
        </div>
        <Image
          src={"/assets/images/blog6.jpeg"}
          width={1920}
          height={746}
          alt="banner"
          className={styles.banner_img}
          data-aos="fade-up"
        />
      </section>
      {/* Article */}
      <section className={styles.article_wrapper}>
        <div className={styles.article_cont}>
          <p data-aos="fade-up">
            Design is a multifaceted discipline that involves creating solutions to problems with the aim of enhancing the functionality, aesthetics, and overall user experience of a product, system, or service.
            Design can encompass various fields such as graphic design, interior design, industrial design, fashion design, user experience (UX) design, and many more. It involves a creative process that typically incorporates elements such as research, ideation, prototyping, testing, and refinement to achieve a desired outcome. <br /> <br />
            Well-designed products and services are more intuitive, easy to use, and enjoyable for users, leading to increased customer satisfaction and loyalty. Good design can set a product or service apart from competitors by creating a unique and memorable brand identity, which can attract more customers and drive sales. <br /> <br />
            Design is inherently about finding creative solutions to problems. It helps identify issues, challenges assumptions, and generates innovative ideas to overcome obstacles and improve outcomes. Design focuses on the needs and preferences of users, which leads to products and services that are more user-friendly, intuitive, and engaging.
          </p>
          {/* <p data-aos="fade-up">
            Step inside the most prestigious residences, where every corner
            exudes elegance and refinement. From sprawling estates nestled in
            lush landscapes to sleek urban penthouses with panoramic city views,
            we bring you inside some of the most coveted addresses in the world.
          </p> */}
          {/* <p data-aos="fade-up">
            Our blog goes beyond the surface, providing you with in-depth
            analyses of architectural brilliance, innovative design concepts,
            and cutting-edge amenities that define luxury living. Discover the
            latest trends in high-end real estate, from smart home technologies
            to eco-friendly features tailored for the discerning homeowner.
          </p> */}
          <ul className={styles.article_images} data-aos="fade-up">
            <li>
              <Image
                src={"/assets/images/blog5.jpeg"}
                width={1920}
                height={546}
                alt="article"
              />
            </li>
            <li>
              <Image
                src={"/assets/images/blog4.jpeg"}
                width={1920}
                height={546}
                alt="article"
              />
            </li>
          </ul>
          {/* <p data-aos="fade-up">
            But Premier Property Insights is more than just a showcase of lavish
            homes; it's a platform for inspiration and aspiration. Whether
            you're a seasoned investor, a prospective buyer, or simply an
            enthusiast of luxury lifestyles, our blog offers valuable insights
            and insider perspectives to guide you on your journey to finding
            your dream home.
          </p> */}
          <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
            <span>
              <BiSolidQuoteAltLeft />
            </span>
            <h2>
              Bad design is smoke, while good design is a mirror.
            </h2>
          </div>
          {/* <p data-aos="fade-up">
            Join us as we uncover the secrets behind premier properties and
            explore the unparalleled experiences they offer. From exclusive
            interviews with renowned architects and interior designers to expert
            tips on luxury real estate investment, Premier Property Insights is
            your ultimate source for all things opulent and extraordinary.
            Welcome to a world where luxury knows no bounds.
          </p> */}
          {/* <ul className={styles.tags} data-aos="fade-up">
            <li>Premier Property</li>
            <li>luxury</li>
            <li>9 Carat</li>
          </ul> */}
          <div className={styles.article_info}>
            {/* <div className={styles.profile} data-aos="fade-up">
              <Image
                src={ProfileImg}
                width={50}
                height={50}
                alt="article profile"
              />
              <div className={styles.profile_info}>
                <p>Joanna Wellick</p>
                <span>Designer</span>
              </div>
            </div> */}
            <ul className={styles.social_icons} data-aos="fade-up">
              <li>
                <Link href="#">
                  <LuFacebook />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <RiTwitterXLine />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <MdOutlineWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className={styles.article_side_cont}>
          <button data-aos="fade-up">
            Listen to this article <RiVolumeUpLine />
          </button>
          <div className={styles.topic_wrapper}>
            <ul className={styles.topic_list}>
              <li data-aos="fade-up">Topic 1</li>
              <li data-aos="fade-up">Topic 2</li>
              <li data-aos="fade-up">Topic 3</li>
              <li data-aos="fade-up">Topic 4</li>
            </ul>
            <div className={styles.progress_bar} data-aos="fade-up">
              <span className={styles.progress}></span>
            </div>
            <p data-aos="fade-up">4 Mins Read</p>
          </div>
        </div> */}
      </section>
      {/* Related Blogs */}
      <section className={styles.related_blogs}>
        <div className={styles.heading}>
          <h2 data-aos="fade-up">Other Related Blogs</h2>
        </div>
        <div className={styles.blog_wrapper} data-aos="fade-up">
          <Swiper
            modules={[Navigation]}
            spaceBetween={33}
            slidesPerView={4}
            initialSlide={1}
            centeredSlides={true}
            ref={sliderRef2}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.blog_item}>
                <div className={styles.blog_img}>
                  <Image
                    src={BlogDetailBanner}
                    width={1920}
                    height={546}
                    alt="article"
                  />
                  <span>Blog</span>
                </div>
                <div className={styles.blog_content}>
                  <span>08.08.2021</span>
                  <h3>LUXURY BY IMMOROSE</h3>
                  <p>
                    Luxury refers to a state of great comfort or elegance, often involving high quality or expensive items or experiences that are not considered essential to everyday life. ..{" "}
                    {/* <strong>Read more</strong>{" "} */}
                    <Link href={`/news/page1`}><strong>Read more</strong></Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.blog_item}>
                <div className={styles.blog_img}>
                  <Image
                    src={BlogDetailBanner2}
                    width={1920}
                    height={546}
                    alt="article"
                  />
                  <span>Blog</span>
                </div>
                <div className={styles.blog_content}>
                  <span>08.08.2021</span>
                  <h3>Extraordinary Homes by Immorose</h3>
                  <p>
                    Arthur Erickson became an architect after seeing the designs of Frank Lloyd Wright. Like his predecessor, he joined man-made structures and their environment in...{" "}
                    {/* <strong>Read more</strong>{" "} */}
                    <Link href={`/news/page3`}><strong>Read more</strong></Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={styles.blog_item}>
                <div className={styles.blog_img}>
                  <Image
                    src={BlogDetailBanner}
                    width={1920}
                    height={546}
                    alt="article"
                  />
                  <span>Blog</span>
                </div>
                <div className={styles.blog_content}>
                  <span>08.08.2021</span>
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className={styles.blog_item}>
                <div className={styles.blog_img}>
                  <Image
                    src={BlogDetailBanner}
                    width={1920}
                    height={546}
                    alt="article"
                  />
                  <span>Blog</span>
                </div>
                <div className={styles.blog_content}>
                  <span>08.08.2021</span>
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className={styles.blog_item}>
                <div className={styles.blog_img}>
                  <Image
                    src={BlogDetailBanner}
                    width={1920}
                    height={546}
                    alt="article"
                  />
                  <span>Blog</span>
                </div>
                <div className={styles.blog_content}>
                  <span>08.08.2021</span>
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
          <div className={styles.navigation_btn}>
            <div
              className={`${styles.prev_arrow} ${isFirstSlide ? styles.active : ""
                }`}
              onClick={handlePrevNewsMedia}
            >
              <FaArrowLeft />
            </div>
            <div
              className={`${styles.next_arrow} ${isLastSlide ? styles.active : ""
                }`}
              onClick={handleNextNewsMedia}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <Image
          src={RelatedBlogVector}
          alt="vector"
          className={styles.related_blogs_vector}
        />
      </section>
      {/* Get In Touch */}
      <GetInTouch />
    </main>
  );
};

export default NewsDetail;
