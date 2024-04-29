"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo.svg";
import HeaderBg from "../../../public/assets/images/header_bg.webp";
import md_logo_white from "../../../public/assets/images/3MD_logo.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useScroll } from "@/hooks/useScroll";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState("home");
  const { y, x, scrollDirection } = useScroll();

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${
          scrollDirection === "down"
            ? styles.active
            : !menuOpen
            ? styles.hidden
            : ""
        }`}
      >
        <div className={styles.header_box}>
          <div className={styles.hamburger_menu}>
            <button onClick={() => setMenuOpen(true)}>
              <IoMenu />
            </button>
          </div>
          <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={Logo} alt="header logo" />
            </Link>
          </div>
          <div className={styles.btn_group}>
            <Link href={"tel:+243850024090"}>
              <FaPhoneAlt />
              <span>Call Now +243 895269216</span>
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className={styles.navMenuOption}>
            <div className={styles.header_bg}>
              <Image src={HeaderBg} alt="menu background" />
              <p>
                <Image src={md_logo_white} alt="Crafted by 3mindsdigital" />
                <span>Crafted by 3mindsdigital</span>
              </p>
            </div>
            <div className={styles.menu_top}>
              <div className={styles.hamburger_menu}>
                <button onClick={() => setMenuOpen(false)}>
                  <RxCross2 />
                </button>
              </div>
              <div className={styles.logo}>
              <Link href={"/"}>
                <Image src={Logo} alt="header logo" />
                </Link>
              </div>
              <div className={styles.btn_group}>
                <Link href={"tel:+243850024090"}>
                  <FaPhoneAlt />
                  <span>Call Now +243 895269216</span>
                </Link>
              </div>
            </div>
            <ul className={styles.navbar}>
              <li>
                <Link
                  href="/"
                  passHref
                  onClick={() => {
                    setCurrentTab("home");
                    handleNavigation();
                  }}
                  className={currentTab === "home" ? styles.active : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  passHref
                  onClick={() => {
                    setCurrentTab("about");
                    handleNavigation();
                  }}
                  className={currentTab === "about" ? styles.active : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  passHref
                  onClick={() => {
                    setCurrentTab("projects");
                    handleNavigation();
                  }}
                  className={currentTab === "projects" ? styles.active : ""}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  passHref
                  onClick={() => {
                    setCurrentTab("news");
                    handleNavigation();
                  }}
                  className={currentTab === "news" ? styles.active : ""}
                >
                  News & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  passHref
                  onClick={() => {
                    setCurrentTab("contact");
                    handleNavigation();
                  }}
                  className={currentTab === "contact" ? styles.active : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className={styles.menu_bottom}>
              <ul className={styles.company_info}>
                <li>
                  <SlLocationPin />
                  <p>
                    Immeuble Rosons Tower, 2e niveau Bureau 2C, 126 Blvd du 30
                    Juin, Gombe, Kinshasa, DRC
                  </p>
                </li>
                <li>
                  <Link
                    className={styles.email}
                    href="mailto:info@immorose.com"
                  >
                    <HiOutlineEnvelope />
                    <span>info@immorose.com</span>
                  </Link>
                </li>
              </ul>
              <div className={styles.social_icons}>
                <p>Follow us on social media</p>
                <ul>
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
                      <AiOutlineYoutube />
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
              <div className={styles.copyright}>
                <p>@2024Congo Immorose. All Rights Reserved.</p>
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/term-condition">Terms & Conditions</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
