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
import { missionContent } from '../../content/mission';
import { Logo } from '../../components/Logo';
interface homeProps {
    runLogoAnimation: boolean;
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

export const Home: React.FC<homeProps> = ({ runLogoAnimation }) => {
    const [t, setT] = React.useState<number>(1)

    React.useEffect(() => {
        setT(10)
    }, [])

    return (
        <React.Fragment>
            {t === 10 ?
                <div style={{ position: 'absolute', height: '100vh', width: '100vw', display: 'flex', alignItems: "center", justifyContent: "center" }}>
                    <motion.div style={{ overflow: 'hidden', y: '-300px', position: 'absolute' }}>
                        <Logo size={100} enter={false} />

                    </motion.div>
                </div> : <div></div>
            }




            <motion.div className="home" initial={t === 10 ? { opacity: 0 } : { opacity: 100 }} animate={t === 10 ? { opacity: 100, transition: { duration: 3, delay: t === 10 ? 6 : 0 } } : { opacity: 100 }}>
                <Hero runLogoAnimation={runLogoAnimation} />
                {/* <AboutPreview /> */}
                <Mission mission={missionContent} />
                {/* <div >
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

            </div> */}



            </motion.div>
        </React.Fragment>

    );
}