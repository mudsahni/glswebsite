import * as React from 'react'
import './style.css'
import { Button, Icon } from 'semantic-ui-react';
import { motion } from "framer-motion";


interface heroProps {

}

export const Hero: React.FC<heroProps> = ({ }) => {


    return (
        <section className="hero-section">
            <div className="hero">
                <div className="hero-content">
                    <div>
                        <motion.h3 initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 2, type: "spring" }}>Gujarat Life Sciences</motion.h3>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut' }}>We're a biotechnology firm focused on the research and development of products which help increase crop yield while being both environmentally sustainable and economical for farmers. </motion.p>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut' }} className="hero-buttons"><Button color='teal'>Products</Button><Button basic color='teal'>Research</Button></motion.div>
                    </div>

                    <motion.div animate={{ opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut', delay: 2 }}>
                        <motion.div animate={{ y: [-30, 0, -30] }} transition={{ duration: 2, loop: Infinity, ease: 'easeInOut' }}>
                            <Icon name="chevron down" size="big" color="teal" onClick={() => window.scrollTo(0, 1000)}></Icon>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}