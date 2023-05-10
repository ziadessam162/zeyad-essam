"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkButton from "@/components/UI/LinkButton";

import PcNavigation from "./navigation/PcNavigation";
import MobileNavigation from "./navigation/MobileNavigation";

import Logo from "../../../../public/logo.svg";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./Header.module.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  // mobile navigation state
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigationHandler = () => {
    setOpenNavigation((prevValue) => !prevValue);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // disable scroll when mobile navigation is open
  useEffect(() => {
    if (openNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openNavigation]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="container">
        <div className={styles.header_inner}>
          <div className={styles.logo_wrapper}>
            <Link href="/">
              <Image src={Logo} alt="Zeyad Logp" />
            </Link>
          </div>
          <PcNavigation />
          <MobileNavigation isOpen={openNavigation} />
          <div className={styles.hire_me}>
            <LinkButton href="mailto:zeyadessam162@gmail.com">
              Hire Me <KeyboardDoubleArrowRightIcon />
            </LinkButton>
          </div>
          <button
            onClick={toggleNavigationHandler}
            className={`${styles.mobile_menu_button} ${
              openNavigation ? styles.active : ""
            }`}
          >
            <span className={styles.toggle_bar}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
