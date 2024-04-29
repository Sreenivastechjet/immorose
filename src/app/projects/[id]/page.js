"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

// Components
import CallToAction from "@/components/CallToAction";
import GetInTouch from "@/components/GetInTouch";
import NewsAndMedia from "@/components/NewsAndMedia";

// Third party imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";

// Images
import SecurityIcon from "../../../../public/assets/images/secruity_icon.svg";
import ElevatorsIcon from "../../../../public/assets/images/elevator_icon.svg";
import StaircasesIcon from "../../../../public/assets/images/staircases_icon.svg";
import CommonPrivateWashroomsIcon from "../../../../public/assets/images/common_private_washrooms_icon.svg";
import FireAlarmIcon from "../../../../public/assets/images/fire_alarm_icon.svg";
import CentralAirIcon from "../../../../public/assets/images/central_air_icon.svg";
import VirtualTourIcon from "../../../../public/assets/images/virtual_tour.svg";
import locationImg from "../../../../public/assets/images/location.webp";
import AddressIcon from "../../../../public/assets/images/address_icon.svg";
import NearbyPlacesIcon from "../../../../public/assets/images/nearby_places_icon.svg";
import CommunityIcon from "../../../../public/assets/images/community_icon.svg";
import SliderImg1 from "../../../../public/assets/images/property_1.webp";
import SliderImg2 from "../../../../public/assets/images/property_2.webp";
import SliderImg3 from "../../../../public/assets/images/property_3.webp";
import SliderImg4 from "../../../../public/assets/images/property_4.webp";
import SliderImg5 from "../../../../public/assets/images/property_5.webp";
import Property1 from "../../../../public/assets/images/other_property_1.webp";
import Property2 from "../../../../public/assets/images/other_property_2.webp";
import Property3 from "../../../../public/assets/images/other_property_3.webp";
import Property4 from "../../../../public/assets/images/other_property_4.webp";
import Property5 from "../../../../public/assets/images/other_property_5.webp";
import Map from "../../../../public/assets/images/map.webp";
import MapMarketIcon from "../../../../public/assets/images/map_marker_icon.svg";

// Icons
import { FaPlay, FaPause } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";

// third party imports
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetails = () => {
  // Pagination
  const paginationImages = [
    { label: "Interior", img: "/assets/images/property_1.webp" },
    { label: "Exterior", img: "/assets/images/property_2.webp" },
    { label: "Room1", img: "/assets/images/property_3.webp" },
    { label: "Room2", img: "/assets/images/property_4.webp" },
    { label: "Room3", img: "/assets/images/property_5.webp" },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><span>${paginationImages[index].label}</span><img src=${paginationImages[index].img}></span>`;
    },
  };

  // Video play & Pause
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
      {/* Property Banner */}
      <section className={styles.property_banner}>
        <div className={`cmn_heading ${styles.heading}`}>
          <div className={styles.banner_heading}>
            <h2 data-aos="fade-up">Rosons Tower</h2>
          </div>
          <p data-aos="fade-up">
            Indulge in luxury at Rosons Tower, Congo. A pinnacle of
            sophistication, it offers well-furnished residences with
            state-of-the-art amenities.
          </p>
        </div>
        <div className={styles.property_main_slider} data-aos="fade-up">
          <Swiper
            modules={[Navigation, EffectFade, Pagination]}
            pagination={pagination}
            spaceBetween={0}
            slidesPerView={1}
            className="property_main_slider_wrap"
            effect="fade"
          >
            <SwiperSlide>
              <div className={styles.property_inner_slider_wrap}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="property_inner_slider_wrap"
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg1} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg2} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.property_inner_slider_wrap}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="property_inner_slider_wrap"
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg2} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg3} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.property_inner_slider_wrap}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="property_inner_slider_wrap"
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg3} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg4} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.property_inner_slider_wrap}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="property_inner_slider_wrap"
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg4} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg5} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.property_inner_slider_wrap}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="property_inner_slider_wrap"
                  navigation={true}
                >
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg5} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.property_slider_wrap}>
                      <Image src={SliderImg1} alt="property slider inner" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* property details */}
      <section className={styles.property_details}>
        <div className={styles.property_details_tabs}>
          <ul data-aos="fade-up">
            <li
              className={`${activeTab === "tab1" ? styles.active : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              Location
            </li>
            <li
              className={`${activeTab === "tab2" ? styles.active : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Interior
            </li>
            <li
              className={`${activeTab === "tab3" ? styles.active : ""}`}
              onClick={() => handleTabClick("tab3")}
            >
              Exterior
            </li>
          </ul>
        </div>
        <div className={styles.property_details_tab_content}>
          {activeTab === "tab1" && (
            <div className={styles.tab_content_box}>
              <div className={styles.tab_cont}>
                <p className={styles.tab_cont_info} data-aos="fade-up">
                  We take great pride in ensuring the satisfaction of our
                  customers, which is why we guarantee that the products we sell
                  will bring happiness to each and every customer. Our genuine
                  care for customer satisfaction is what sets us apart.
                </p>
                <ul data-aos="fade-up">
                  <li>
                    <Image src={AddressIcon} alt="Address" />
                    <p>
                      <strong>Address:</strong> 126 Boulevard du 30 Juin, Gombe.
                      Kinshasa, DR Congo.
                    </p>
                  </li>
                  <li>
                    <Image src={CommunityIcon} alt="Community" />
                    <p>
                      <strong>Community:</strong> Business District
                    </p>
                  </li>
                  <li>
                    <Image src={NearbyPlacesIcon} alt="Nearby Places" />
                    <p>
                      <strong>Nearby Places:</strong> Kinshasa, DR Congo.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.tab_img} data-aos="fade-up">
                <Image src={locationImg} alt="" />
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div className={styles.tab_content_box}>
              <div className={styles.tab_cont}>
                <p className={styles.tab_cont_info} data-aos="fade-up">
                  We take great pride in ensuring the satisfaction of our
                  customers, which is why we guarantee that the products we sell
                  will bring happiness to each and every customer. Our genuine
                  care for customer satisfaction is what sets us apart.
                </p>
                <ul data-aos="fade-up">
                  <li>
                    <Image src={AddressIcon} alt="Address" />
                    <p>
                      <strong>Address:</strong> 126 Boulevard du 30 Juin, Gombe.
                      Kinshasa, DR Congo.
                    </p>
                  </li>
                  <li>
                    <Image src={CommunityIcon} alt="Community" />
                    <p>
                      <strong>Community:</strong> Business District
                    </p>
                  </li>
                  <li>
                    <Image src={NearbyPlacesIcon} alt="Nearby Places" />
                    <p>
                      <strong>Nearby Places:</strong> Kinshasa, DR Congo.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.tab_img} data-aos="fade-up">
                <Image src={locationImg} alt="" />
              </div>
            </div>
          )}
          {activeTab === "tab3" && (
            <div className={styles.tab_content_box}>
              <div className={styles.tab_cont}>
                <p className={styles.tab_cont_info} data-aos="fade-up">
                  We take great pride in ensuring the satisfaction of our
                  customers, which is why we guarantee that the products we sell
                  will bring happiness to each and every customer. Our genuine
                  care for customer satisfaction is what sets us apart.
                </p>
                <ul data-aos="fade-up">
                  <li>
                    <Image src={AddressIcon} alt="Address" />
                    <p>
                      <strong>Address:</strong> 126 Boulevard du 30 Juin, Gombe.
                      Kinshasa, DR Congo.
                    </p>
                  </li>
                  <li>
                    <Image src={CommunityIcon} alt="Community" />
                    <p>
                      <strong>Community:</strong> Business District
                    </p>
                  </li>
                  <li>
                    <Image src={NearbyPlacesIcon} alt="Nearby Places" />
                    <p>
                      <strong>Nearby Places:</strong> Kinshasa, DR Congo.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.tab_img} data-aos="fade-up">
                <Image src={locationImg} alt="" />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Glimpse of the Property */}
      <section className={styles.glimpse_property}>
        <div className={`cmn_heading ${styles.heading}`}>
          <h2 data-aos="fade-up">Glimpse of the Property</h2>
          <div className={styles.btn_group} data-aos="fade-up">
            <Link href={"#"} className={`cmn_btn filled_btn ${styles.btn}`}>
              <Image src={VirtualTourIcon} alt="Take A Virtual Tour" />
              Take A Virtual Tour
            </Link>
            <Link href={"#"} className={`cmn_btn outline_btn ${styles.btn}`}>
              <RxDownload />
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
      {/* Video */}
      <section className={styles.video_sec} data-aos="fade-up">
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
      {/* Amenities */}
      <section className={styles.amenities}>
        <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
          <h2>Amenities</h2>
        </div>
        <div className={styles.amenities_box}>
          <div className={styles.amenity_item_wrap} data-aos="fade-up">
            <div className={styles.amenity_item}>
              <Image src={SecurityIcon} alt="Security 24/7" />
              <h3>Security 24/7</h3>
            </div>
          </div>
          <div className={styles.amenity_item_wrap} data-aos="fade-up">
            <div className={styles.amenity_item}>
              <Image src={ElevatorsIcon} alt="Elevators" />
              <h3>Elevators</h3>
            </div>
          </div>
          <div className={styles.amenity_item_wrap} data-aos="fade-up">
            <div className={styles.amenity_item}>
              <Image src={StaircasesIcon} alt="Staircases" />
              <h3>Staircases</h3>
            </div>
          </div>
          <div className={styles.amenity_item_wrap} data-aos="fade-up">
            <div className={styles.amenity_item}>
              <Image
                src={CommonPrivateWashroomsIcon}
                alt="Common & Private Washrooms"
              />
              <h3>Common & Private Washrooms</h3>
            </div>
          </div>
          <div className={styles.amenity_item_wrap} data-aos="fade-up">
            <div className={styles.amenity_item}>
              <Image src={FireAlarmIcon} alt="Fire Alarm" />
              <h3>Fire Alarm</h3>
            </div>
          </div>
          <div className={styles.amenity_item_wrap} data-aos="fade-up">
            <div className={styles.amenity_item}>
              <Image src={CentralAirIcon} alt="Central Air (VRF)" />
              <h3>Central Air (VRF)</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Nearby Places */}
      <section className={styles.nearby_places}>
        <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
          <h2>Nearby Places</h2>
        </div>
        <div className={styles.nearby_map} data-aos="fade-up">
          <ul>
            <li>
              <div className={styles.map_marker}>
                <Image src={MapMarketIcon} alt="map" />
                <p>BOTANIC LAKE</p>
              </div>
              <div className={styles.map_marker_detail}>
                <h6>BOTANIC LAKE</h6>
                <p>
                  The project is situated in a vibrant and diverse neighborhood
                  that is known for its cultural richness and artistic
                  expression.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.map_marker}>
                <Image src={MapMarketIcon} alt="map" />
                <p>ROSON TOWER</p>
              </div>
              <div className={styles.map_marker_detail}>
                <h6>ROSON TOWER</h6>
                <p>
                  The project is situated in a vibrant and diverse neighborhood
                  that is known for its cultural richness and artistic
                  expression.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.map_marker}>
                <Image src={MapMarketIcon} alt="map" />
                <p>MUSEUM</p>
              </div>
              <div className={styles.map_marker_detail}>
                <h6>MUSEUM</h6>
                <p>
                  The project is situated in a vibrant and diverse neighborhood
                  that is known for its cultural richness and artistic
                  expression.
                </p>
              </div>
            </li>
            <li>
              <div className={styles.map_marker}>
                <Image src={MapMarketIcon} alt="map" />
                <p>Basilique St. Anne</p>
              </div>
              <div className={styles.map_marker_detail}>
                <h6>Basilique St. Anne</h6>
                <p>
                  The project is situated in a vibrant and diverse neighborhood
                  that is known for its cultural richness and artistic
                  expression.
                </p>
              </div>
            </li>
          </ul>
          <Image src={Map} alt="map" />
        </div>
      </section>
      <CallToAction />
      {/* other_properties */}
      <section className={styles.other_properties}>
        <div className={`cmn_heading ${styles.heading}`} data-aos="fade-up">
          <h2>Other properties</h2>
          <p>
            Experience opulent living at similar properties, where lavish design
            meets unparalleled amenities for the epitome of luxury living.
          </p>
        </div>
        <div className={styles.gallery_item} data-aos="fade-up">
          <h3>Waterfront Villa</h3>
          <Image src={Property1} alt="Waterfront Villa" />
        </div>
        <div className={styles.gallery_item} data-aos="fade-up">
          <h3>9 Carats</h3>
          <Image src={Property2} alt="9 Carats" />
        </div>
        <div className={styles.gallery_item} data-aos="fade-up">
          <h3>Rosons Towers</h3>
          <Image src={Property3} alt="Rosons Towers" />
        </div>
        <div className={styles.gallery_item} data-aos="fade-up">
          <h3>Le Cuivre</h3>
          <Image src={Property4} alt="Le Cuivre" />
        </div>
        <div className={styles.gallery_item} data-aos="fade-up">
          <h3>9 Carats</h3>
          <Image src={Property5} alt="9 Carats" />
        </div>
      </section>
      <NewsAndMedia />
      <GetInTouch />
    </main>
  );
};

export default ProjectDetails;
