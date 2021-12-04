import { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import MobileNavbar from "./mobile";

type Props = {
  reportNavbar: any;
};

const Header: NextPage<Props> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    props.reportNavbar(navbarOpen);
  }, [navbarOpen]);

  const Linkie = (destination: any, text: string, passHref: boolean) => (
    <li className={styles["nav-link"]}>
      <Link href={destination} passHref={passHref}>
        <a>
          {" "}
          <div className={styles["nav-link-div"]}>{text}</div>
        </a>
      </Link>
    </li>
  );

  return (
    <header className={styles["nav-container"]}>
      <div id={styles["logo-div"]}>
        <h1 id={styles["logo-text"]}>
          <Link href="/">
            <a id={styles["logo-link"]}>
              <FontAwesomeIcon icon={faCode} /> DaveyLoper Blog
            </a>
          </Link>
        </h1>
      </div>
      <ul className={styles["nav-list"]}>
        {Linkie("https://www.daveyloper.com", "Home", true)}
        {Linkie("https://daveyloper.com/projects", "Projects", true)}
        {Linkie("https://daveyloper.com/contact", "Contact", true)}
        {Linkie("/", "Blog", false)}
      </ul>
      <div onClick={toggleNavbar} className={styles.mobileNavbarButton}>
        <div className={navbarOpen? styles.burgerOneOpen : styles.burgerOne} ></div>
        <div className={navbarOpen? styles.burgerTwoOpen : styles.burgerTwo} ></div>
        <div className={navbarOpen? styles.burgerThreeOpen : styles.burgerThree} ></div>
      </div>
      {navbarOpen && <MobileNavbar closeCallback={toggleNavbar} />}
    </header>
  );
};

export default Header;
