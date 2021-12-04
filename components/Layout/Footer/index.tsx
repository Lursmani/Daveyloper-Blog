import { NextPage } from "next";
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"



const Footer : NextPage = () => {

    return (
        <footer className={styles["footer-div"]}>
            
            <div id={styles["footer-name"]}>
            <p className={styles["footer-text-big"]}>Davit Lursmanashvili</p>

            </div>
            <div id={styles["footer-contact"]}>
                <a target= "_blank" className={styles["contact-icon"]} rel="noreferrer" id={styles["contact-icon-1"]} href="https://www.linkedin.com/in/davit-lursmanashvili/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a target= "_blank" className={styles["contact-icon"]} rel="noreferrer" id={styles["contact-icon-2"]} href="https://github.com/Lursmani"><FontAwesomeIcon icon={faGithubSquare} /> </a>
                <a className={styles["contact-icon"]} id={styles["contact-icon-3"]} href="mailto: lursmanashvilidavit@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
            </div>
        </footer>
    )
}

export default Footer;