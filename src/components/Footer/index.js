"use client";
import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/assets/images/logo.svg";
import EmailIcon from "../../../public/assets/images/email.svg";
import md_logo_white from "../../../public/assets/images/3MD_logo.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";


const Footer = () =>  {
  const pathname = usePathname();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className={styles.footer}>
      <button onClick={() => handleScrollToTop()} className={styles.scrollTop}>
      <FaArrowUpLong />
    </button>
      <div className={styles.footer_container}>
        <div className={styles.footer_with_logo}>
          <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={Logo} alt="footer logo" />
            </Link>
            <p>
              We take great pride in ensuring the satisfaction of our customers
            </p>
          </div>
          <ul>
            <li>
              <Link
                href="/"
                passHref
                className={pathname === "/" ? styles.active : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                passHref
                className={pathname === "/projects" ? styles.active : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                passHref
                className={pathname === "/about" ? styles.active : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                passHref
                className={pathname === "/news" ? styles.active : ""}
              >
                News & Media
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                passHref
                className={pathname === "/contact" ? styles.active : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className={styles.btn_group}>
            <Link href={"tel:+243895269216"}>
              <FaPhoneAlt />
              Call Now +243 895269216
            </Link>
          </div>
        </div>
        <div className={styles.footer_contact_info}>
          <div className={styles.footer_address}>
            <SlLocationPin />
            <p>
              Immeuble Rosons Tower, 2e niveau Bureau 2C, 126 Blvd du 30 Juin,
              Gombe, Kinshasa, DRC
            </p>
          </div>
          <div className={styles.footer_contact_info_sec2}>
            <Link className={styles.email} href="mailto:info@immorose.com">
              <Image src={EmailIcon} alt="email Icon"/>
              <span>info@immorose.com</span>
            </Link>
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
            <li>
              <Image src={md_logo_white} alt="Crafted by 3mindsdigital" />
              <span>Crafted by 3mindsdigital</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
