import { motion, useAnimation } from 'framer-motion';
import * as React from 'react'
import { useInView } from 'react-intersection-observer';

interface FadeInWhenVisibleProps {
    duration: number;
    stagger: number;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ duration, stagger, children }) => {
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
            transition={{ duration: duration, staggerChildren: stagger }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

