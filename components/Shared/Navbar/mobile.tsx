import { NextPage } from "next";
import Link from "next/link";
import styles from "./MobileNavbar.module.css"

type Props = {
    closeCallback: any
}

const MobileNavbar: NextPage<Props> = (props) => {
    const Linkie = (destination: any, text: string, passHref: boolean) => (
        <li className={styles['nav-link']}>
            
            <Link href={destination} passHref={passHref}>
            <a > <div className={styles['nav-link-div']}>{text}
            </div></a></Link>
            
        </li>
    )

    
    return (
        <div className={styles.navbarContainer}>
            <button onClick={props.closeCallback}> close</button>
            <header className={styles.navbar}>
                <nav>
            
                </nav>
            </header>
            <div className={styles.overlay} onClick={props.closeCallback}>

            </div>
        </div>
    )
}

export default MobileNavbar;