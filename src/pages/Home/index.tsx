import * as React from 'react'
import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';

import { AboutPreview } from '../../components/AboutPreview';
import { Hero } from '../../components/Hero';
import { Mission } from '../../components/Mission';
import { Image } from 'semantic-ui-react'
import LogoSVG from '../../logo.svg'
import { useInView } from "react-intersection-observer"; // 1.9K gzipped

import './style.css'
import { Footer } from '../../components/Footer';
import { footerContent } from '../../content/footer';
interface homeProps {

}
interface FadeInWhenVisibleProps {

}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

const Box = () => {
    return (
        <div
            style={{
                padding: 40,
                background: "black",
                display: "inline-block",
                borderRadius: 5,
                marginBottom: '500px'
            }}
        />
    );
}

export const Home: React.FC<homeProps> = ({ }) => {

    return (
        <div className="home">
            <Hero />
            {/* <AboutPreview /> */}
            <Mission />
            <div >
                <FadeInWhenVisible>
                    <Box />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Box />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Box />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Box />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Box />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <Box />
                </FadeInWhenVisible>

            </div>

            <Footer footerContent={footerContent} />
        </div>
    );
}