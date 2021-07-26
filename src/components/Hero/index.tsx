import * as React from 'react'
import './style.css'
import { Button, Icon } from 'semantic-ui-react';
import { motion } from "framer-motion";
import { Logo } from '../Logo';
import { NavLink } from 'react-router-dom';


interface heroProps {
    runLogoAnimation: boolean;
}

export const Hero: React.FC<heroProps> = ({ runLogoAnimation }) => {


    return (
        <section className="hero-section">
            <div className="hero">

                <motion.div className="hero-content">
                    <div>
                        <motion.h3 initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 2, type: "spring", delay: runLogoAnimation ? 6 : 0 }}>Gujarat Life Sciences</motion.h3>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 2, ease: 'easeInOut', delay: runLogoAnimation ? 6 : 0 }}>We're a biotechnology firm focused on the research and development of products which help increase crop yield while being both environmentally sustainable and economical for farmers. </motion.p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut', delay: runLogoAnimation ? 6 : 0 }} className="hero-buttons"><Button color='teal'><NavLink to="/products">Products</NavLink></Button><Button basic color='teal'>Research</Button></motion.div>
                    </div>

                    <motion.div animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut', delay: runLogoAnimation ? 8 : 2 }}>
                        <motion.div animate={{ y: [-30, 0, -30] }} transition={{ duration: 2, loop: Infinity, ease: 'easeInOut' }}>
                            <Icon name="chevron down" size="big" color="teal" onClick={() => window.scrollTo(0, 1250)}></Icon>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}