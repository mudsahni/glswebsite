import * as React from "react";
import { useLayoutEffect, useRef, useState } from "react";

import { Button, Image } from 'semantic-ui-react';
import './style.css'
import Hamburger from '../../assets/hamburger.svg'
import { motion, useTransform, useViewportScroll, useSpring } from "framer-motion";
import Wheat from '../../assets/wheat.svg'
interface navProps {

}

export const Nav: React.FC<navProps> = ({ }) => {
    const [navState, setNavState] = React.useState(0)

    React.useEffect(() => {
        const changeNavState = () => {
            if (window.scrollY >= 100) {
                setNavState(1)
            } else {
                setNavState(-1)
            }
        }
        console.log(navState)
        window.addEventListener("scroll", changeNavState)
        return () => window.removeEventListener("scroll", changeNavState)
    }, [navState])

    const navVariants = {
        top: { opacity: [0, .5, 1] },
        bottom: { backgroundColor: ["rgba(246,248,231,0)", "rgba(246,248,231,1)"], opacity: 1 },
        backToTop: { backgroundColor: ["rgba(246,248,231,1)", "rgba(246,248,231, 0)"], opacity: 1 }
    }


    return (
        <section className="nav" >
            <motion.nav animate={navState === 0 ? "top" : navState === 1 ? "bottom" : "backToTop"} variants={navVariants} transition={{
                duration: 2,
                ease: 'easeInOut',
            }}>
                <div className="nav-left">
                    <div><Image src={Wheat} width={30}></Image>
                        <h3 id='logo'>gls.</h3>
                    </div>
                    <ul className="nav-links">
                        <li><span>About</span></li>
                        <li><span>Products</span></li>
                        <li><span>Services</span></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-links">
                        <li><Button basic color="teal" onClick={() => window.location.href = "#contact"}>Contact</Button></li>

                    </ul>
                </div>

                <div className="hamburger">
                    <Image src={Hamburger} size="mini" />
                </div>

            </motion.nav>
        </section>
    );
}