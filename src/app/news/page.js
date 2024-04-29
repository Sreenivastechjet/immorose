"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import GetInTouch from "@/components/GetInTouch";

// Images
import BlogDetailBanner from "../../../public/assets/images/blog_details.webp";
import BlogDetailBanner2 from "../../../public/assets/images/blog_slider_2.webp";
import ProfileImg from "../../../public/assets/images/profile.webp";
import BannerVector from "../../../public/assets/images/news_vector.webp";

// Icons
import { IoSearch } from "react-icons/io5";
import searchIcon from "../../../public/assets/images/search.webp";
// Third Party
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  // Tabs
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <main className={styles.main}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.tabs} data-aos="fade-up">
          <button
            className={`${activeTab === "tab1" ? styles.active : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            News
          </button>
          <button
            className={`${activeTab === "tab2" ? styles.active : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            PR
          </button>
        </div>
        {activeTab === "tab1" && (
          <>
            <Image
              src={BannerVector}
              alt="Banner vector"
              className={styles.news_vector}
            />
            <div className={`cmn_heading ${styles.heading}`}>
              <h2 data-aos="fade-up">Trending News & Blogs</h2>
              <div className={styles.search_box} data-aos="fade-up">
                <input type="text" placeholder="Search your topic" />
                <button>
                  <Image src={searchIcon} alt="search" />
                </button>
              </div>
            </div>
            <div className={styles.banner_slider_wrapper} data-aos="fade-up">
              <Swiper
                spaceBetween={35}
                slidesPerView={1.4}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                    centeredSlides: true,
                    spaceBetween: 7,
                    loop: true,
                  },
                  992: {
                    slidesPerView: 1.3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 1.4,
                    spaceBetween: 35,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.banner_slide}>
                    <div className={styles.article_img}>
                      <Image
                        src={BlogDetailBanner}
                        width={1920}
                        height={546}
                        alt="article"
                      />
                      <span>Blog</span>
                    </div>
                    <div className={styles.banner_cont}>
                      <h2>
                        Discover the Elegance of 9 Carat: Exquisite Living ..
                      </h2>
                      <p>
                        9 Carat - where sophistication meets comfort, creating
                        your ultimate dream home. Experience opulence like never
                        before after reaching this destination to ..
                      </p>
                      <Link href={"/news/1"}>Read More</Link>
                      <div className={styles.profile}>
                        <Image
                          src={ProfileImg}
                          width={40}
                          height={40}
                          alt="profile"
                        />
                        <p>
                          Joanna Wellick{" "}
                          <span className={styles.vector_line}></span>
                        </p>
                        <span>June 28, 2018</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.banner_slide}>
                    <div className={styles.article_img}>
                      <Image
                        src={BlogDetailBanner2}
                        width={1920}
                        height={546}
                        alt="article"
                      />
                      <span>Blog</span>
                    </div>
                    <div className={styles.banner_cont}>
                      <h2>
                        Discover the Elegance of 9 Carat: Exquisite Living ..
                      </h2>
                      <p>
                        9 Carat - where sophistication meets comfort, creating
                        your ultimate dream home. Experience opulence like never
                        before after reaching this destination to ..
                      </p>
                      <Link href={"/news/1"}>Read More</Link>
                      <div className={styles.profile}>
                        <Image
                          src={ProfileImg}
                          width={40}
                          height={40}
                          alt="profile"
                        />
                        <p>
                          Joanna Wellick{" "}
                          <span className={styles.vector_line}></span>
                        </p>
                        <span>June 28, 2018</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.banner_slide}>
                    <div className={styles.article_img}>
                      <Image
                        src={BlogDetailBanner}
                        width={1920}
                        height={546}
                        alt="article"
                      />
                      <span>Blog</span>
                    </div>
                    <div className={styles.banner_cont}>
                      <h2>
                        Discover the Elegance of 9 Carat: Exquisite Living ..
                      </h2>
                      <p>
                        9 Carat - where sophistication meets comfort, creating
                        your ultimate dream home. Experience opulence like never
                        before after reaching this destination to ..
                      </p>
                      <Link href={"/news/1"}>Read More</Link>
                      <div className={styles.profile}>
                        <Image
                          src={ProfileImg}
                          width={40}
                          height={40}
                          alt="profile"
                        />
                        <p>
                          Joanna Wellick{" "}
                          <span className={styles.vector_line}></span>
                        </p>
                        <span>June 28, 2018</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </>
        )}
        {activeTab === "tab2" && (
          <>
            <Image
              src={BannerVector}
              alt="Banner vector"
              className={styles.pr_vector}
            />
            <div className={styles.pr_banner_inner}>
              <div className={styles.pr_banner_content}>
                <span data-aos="fade-up">Latest PR Release</span>
                <div className={`cmn_heading ${styles.heading}`}>
                  <h2 data-aos="fade-up">Announcing Unparalleled Luxury</h2>
                  <p data-aos="fade-up">
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..
                  </p>
                </div>
                <Link href={"/pr/1"} data-aos="fade-up">
                  Read More
                </Link>
              </div>
              <div className={styles.pr_banner_img} data-aos="fade-up">
                <Image
                  src={BlogDetailBanner}
                  width={1920}
                  height={546}
                  alt="article"
                />
              </div>
            </div>
          </>
        )}
      </section>
      {/* Article List */}
      {activeTab === "tab1" && (
        <section className={styles.article_List}>
          <div className={`cmn_heading ${styles.heading}`}>
            <h2 data-aos="fade-up">News, Blogs & Media</h2>
          </div>
          <div className={styles.article_list_wrap}>
            <div className={styles.article_item} data-aos="fade-up">
              <div className={styles.article_img}>
                <Image
                  src={"/assets/images/news_1.webp"}
                  width={1920}
                  height={546}
                  alt="article"
                />
                <span>Blog</span>
              </div>
              <div className={styles.article_cont}>
                <div className={styles.article_cont_head}>
                  <h3>Premier Property Insights</h3>
                  <div className={styles.profile}>
                    <Image
                      src={"/assets/images/profile_1.webp"}
                      width={50}
                      height={50}
                      alt="article profile"
                    />
                    <p>Joanna Wellick</p>
                    <span>June 28, 2024</span>
                  </div>
                </div>
                <div className={styles.article_cont_info}>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..
                  </p>
                  <Link href={`/news/1`}>Read More</Link>
                </div>
              </div>
            </div>
            <div className={styles.article_item} data-aos="fade-up">
              <div className={styles.article_img}>
                <Image
                  src={"/assets/images/news_2.webp"}
                  width={1920}
                  height={546}
                  alt="article"
                />
                <span>Blog</span>
              </div>
              <div className={styles.article_cont}>
                <div className={styles.article_cont_head}>
                  <h3>Discover the Elegance</h3>
                  <div className={styles.profile}>
                    <Image
                      src={"/assets/images/profile_2.webp"}
                      width={50}
                      height={50}
                      alt="article profile"
                    />
                    <p>Joanna Wellick</p>
                    <span>June 28, 2024</span>
                  </div>
                </div>
                <div className={styles.article_cont_info}>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..
                  </p>
                  <Link href={`/news/1`}>Read More</Link>
                </div>
              </div>
            </div>
            <div className={styles.article_item} data-aos="fade-up">
              <div className={styles.article_img}>
                <Image
                  src={"/assets/images/news_3.webp"}
                  width={1920}
                  height={546}
                  alt="article"
                />
                <span>Blog</span>
              </div>
              <div className={styles.article_cont}>
                <div className={styles.article_cont_head}>
                  <h3>Premier Property Insights</h3>
                  <div className={styles.profile}>
                    <Image
                      src={"/assets/images/profile_3.webp"}
                      width={50}
                      height={50}
                      alt="article profile"
                    />
                    <p>Joanna Wellick</p>
                    <span>June 28, 2024</span>
                  </div>
                </div>
                <div className={styles.article_cont_info}>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..
                  </p>
                  <Link href={`/news/1`}>Read More</Link>
                </div>
              </div>
            </div>
            <div className={styles.article_item} data-aos="fade-up">
              <div className={styles.article_img}>
                <Image
                  src={"/assets/images/news_4.webp"}
                  width={1920}
                  height={546}
                  alt="article"
                />
                <span>Blog</span>
              </div>
              <div className={styles.article_cont}>
                <div className={styles.article_cont_head}>
                  <h3>Rosons Towers</h3>
                  <div className={styles.profile}>
                    <Image
                      src={"/assets/images/profile_4.webp"}
                      width={50}
                      height={50}
                      alt="article profile"
                    />
                    <p>Joanna Wellick</p>
                    <span>June 28, 2024</span>
                  </div>
                </div>
                <div className={styles.article_cont_info}>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..
                  </p>
                  <Link href={`/news/1`}>Read More</Link>
                </div>
              </div>
            </div>
            <div className={styles.article_item} data-aos="fade-up">
              <div className={styles.article_img}>
                <Image
                  src={"/assets/images/news_5.webp"}
                  width={1920}
                  height={546}
                  alt="article"
                />
                <span>Blog</span>
              </div>
              <div className={styles.article_cont}>
                <div className={styles.article_cont_head}>
                  <h3>Premier Property Insights</h3>
                  <div className={styles.profile}>
                    <Image
                      src={"/assets/images/profile_5.webp"}
                      width={50}
                      height={50}
                      alt="article profile"
                    />
                    <p>Joanna Wellick</p>
                    <span>June 28, 2024</span>
                  </div>
                </div>
                <div className={styles.article_cont_info}>
                  <p>
                    9 Carat - where sophistication meets comfort, creating your
                    ultimate dream home. Experience opulence like never before
                    after reaching this destination to ..
                  </p>
                  <Link href={`/news/1`}>Read More</Link>
                </div>
              </div>
            </div>
            <button
              className={`cmn_btn filled_btn ${styles.btn}`}
              data-aos="fade-up"
            >
              Load More
            </button>
          </div>
        </section>
      )}
      {/* PR List */}
      {activeTab === "tab2" && (
        <section className={`${styles.article_List} ${styles.pr_list}`}>
          <div className={`cmn_heading ${styles.heading}`}>
            <h2 data-aos="fade-up">Latest Press Release</h2>
          </div>
          <div className={styles.article_list_wrap}>
            {[...Array(4)].map((_, sliderIndex) => (
              <div
                className={styles.article_item}
                key={sliderIndex}
                data-aos="fade-up"
              >
                <div className={styles.article_cont}>
                  <div className={styles.article_cont_head}>
                    <h3>
                      Press Release Introduces Exquisite Property Offerings
                    </h3>
                  </div>
                  <div className={styles.article_cont_info}>
                    <p>
                      9 Carat - where sophistication meets comfort, creating
                      your ultimate dream home. Experience opulence like never
                      before after reaching this destination to ..
                    </p>
                    <Link href={`/pr/${sliderIndex + 1}`}>Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Get In Touch */}
      <GetInTouch />
    </main>
  );
};

export default News;
