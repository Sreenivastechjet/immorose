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
import BlogDetailBanner from "../../../../public/assets/images/blog_details.webp";
import RelatedBlogVector from "../../../../public/assets/images/related_blog_vector.png";
import EmailIcon from "../../../../public/assets/images/email.svg";

// Icons
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { LuFacebook } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiTwitterXLine, RiVolumeUpLine } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const PRDetail = () => {
  const sliderRef2 = useRef(null);

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
          <div className={styles.banner_content_div}>
            <div className={styles.heading}>
              <h1 data-aos="fade-up">Announcing Unparalleled Luxury</h1>
              <div className={styles.profile} data-aos="fade-up">
                <p>
                  Joanna Wellick <span className={styles.vector_line}></span>
                </p>
                <span>June 28, 2018</span>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={BlogDetailBanner}
          width={1920}
          height={546}
          alt="banner"
          className={styles.banner_img}
          data-aos="fade-up"
        />
      </section>
      {/* Article */}
      <section className={styles.article_wrapper}>
        <div className={styles.article_cont}>
          <p data-aos="fade-up">
          Immorose, a leading name in luxury real estate, is thrilled to announce the unveiling of unparalleled luxury in the realm of prestigious properties. With an unwavering commitment to excellence and a dedication to crafting extraordinary living experiences, Immorose is setting a new standard in luxury living.
          </p>
          <p data-aos="fade-up">
          This groundbreaking announcement comes as Immorose introduces a portfolio of exclusive properties that redefine opulence and sophistication. From breathtaking waterfront estates to lavish penthouses boasting panoramic skyline views, each residence epitomizes the pinnacle of refined living.
          </p>
          <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
            <span>
              <BiSolidQuoteAltLeft />
            </span>
            <h2>
            Our mission at Immorose has always been to redefine luxury living and create spaces that surpass even the highest expectations
            </h2>
          </div>
          <p data-aos="fade-up">
          Featuring meticulously curated designs, unparalleled craftsmanship, and an array of bespoke amenities, these properties offer a lifestyle of unparalleled comfort and indulgence. From private spas and infinity pools to state-of-the-art smart home technologies, every detail has been carefully considered to elevate the living experience to new heights.
          </p>
          <p data-aos="fade-up">In addition to the exquisite residences themselves, Immorose offers a range of personalized concierge services to cater to the needs of discerning homeowners. From private chefs and personal trainers to chauffeur services and event planning, residents can enjoy a seamless and luxurious lifestyle tailored to their desires.</p>
          <p data-aos="fade-up">As part of the announcement, Immorose will be hosting exclusive preview events for select properties, offering potential buyers the opportunity to experience firsthand the unmatched luxury and elegance that awaits.</p>
          <p data-aos="fade-up">For more information about these unparalleled properties or to schedule a private viewing, please visit www.immorose.com or contact +243 850 024 090</p>
          <p data-aos="fade-up"><strong> About Immorose:</strong>
            Immorose is a Congo-based luxury real estate firm specializing in the marketing and sale of exclusive properties worldwide. With a commitment to excellence and a passion for creating extraordinary living experiences, Immorose is renowned for setting new standards in luxury living.</p>
            <div className={styles.contact_info}>
              <h6 data-aos="fade-up">Contact:</h6>
              <ul>
                <li data-aos="fade-up">
                <div>
                    <FiUser />
                    <p><strong>Joanna Wellick</strong><br/> Public Relations Manager Immorose</p>
                  </div>
                </li>
                <li data-aos="fade-up">
                  <Link href={"tel:+243850024090"}>
                    <FaPhoneAlt />
                    Call Now +243 895269216
                  </Link>
                </li>
                <li data-aos="fade-up">
                <Link className={styles.email} href="mailto:info@immorose.com">
                  <Image src={EmailIcon} alt="email Icon"/>
                  <span>info@immorose.com</span>
                </Link>
                </li>
              </ul>
            </div>
          <div className={styles.article_info}>
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
        <div className={styles.article_side_cont}>
        <h3 data-aos="fade-up">Other Press Release</h3>
          <div className={styles.topic_wrapper}>
            <ul className={styles.topic_list}>
              <li data-aos="fade-up">Firm specializes Press Release..</li>
              <li data-aos="fade-up">Premier Real estate Press Rel..</li>
              <li data-aos="fade-up">Spectacular house Press Rele..</li>
              <li data-aos="fade-up">Cost-efficient and pragmatic...</li>
              <li data-aos="fade-up">Immo Rose launched Press Re..</li>
            </ul>
          </div>
        </div>
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
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
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
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
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
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
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
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
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
                  <h3>Premier Property Insights In Congo</h3>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..{" "}
                    <strong>Read more</strong>{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.navigation_btn}>
            <div
              className={`${styles.prev_arrow} ${
                isFirstSlide ? styles.active : ""
              }`}
              onClick={handlePrevNewsMedia}
            >
              <FaArrowLeft />
            </div>
            <div
              className={`${styles.next_arrow} ${
                isLastSlide ? styles.active : ""
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

export default PRDetail;
