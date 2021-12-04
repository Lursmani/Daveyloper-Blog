import { NextPage } from "next";
import Link from "next/link";
import styles from "./MobileNavbar.module.css";

type Props = {
  closeCallback: any;
};

const MobileNavbar: NextPage<Props> = (props) => {
  const Linkie = (destination: any, text: string, passHref: boolean) => (
    <li className={styles["navLink"]}>
      <Link href={destination} passHref={passHref}>
        <a>
          {" "}
          <div className={styles["navLinkDiv"]}>{text}</div>
        </a>
      </Link>
    </li>
  );

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {Linkie("https://www.daveyloper.com", "Home", true)}
          {Linkie("https://daveyloper.com/projects", "Projects", true)}
          {Linkie("https://daveyloper.com/contact", "Contact", true)}
          {Linkie("/", "Blog", false)}
        </ul>
      </nav>
      <div className={styles.overlay} onClick={props.closeCallback}></div>
    </div>
  );
};

export default MobileNavbar;
