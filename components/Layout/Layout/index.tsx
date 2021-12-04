import { NextPage } from "next";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer"
import styles from "./Layout.module.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */



const Layout: NextPage = ({ children }) => {
    const [reportNavbarOpen, setReportNavbarOpen] = useState(false);

    const toggleReportNavbar = (navbar: boolean) => {
        setReportNavbarOpen(navbar);
    }

    useEffect(() => {
        console.log(reportNavbarOpen)
       
    }, [reportNavbarOpen])

    return (
        <div className={styles.layoutContainer} style={reportNavbarOpen ? {overflow: 'hidden'} : {}}>
            <Navbar reportNavbar={toggleReportNavbar}/>
            <main className={styles.layoutBody} >
                {children}
            </main>
            <Footer />
        </div>

    )
}

export default Layout;