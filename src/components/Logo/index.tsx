import { motion, useAnimation } from 'framer-motion';
import * as React from 'react'
import './style.css'
interface logoProps {
    size: number;
    enter: boolean;
}


export const Logo: React.FC<logoProps> = ({ size, enter }) => {
    const animationOne = useAnimation()
    const animationTwo = useAnimation()



    React.useEffect(() => {
        const run = async () => {
            // await animationOne.start({ strokeDashoffset: [3322, 0], transition: { duration: 3, ease: "easeInOut" } })
            // await animationOne.start({ fillOpacity: [0, 100], transition: { duration: 3, ease: "easeInOut" } })

            enter ? await animationTwo.start({ opacity: 100, transition: { duration: 0, ease: 'easeInOut', delay: 0 } }) :
                await animationTwo.start({ opacity: 0, transition: { duration: 3, ease: 'easeInOut', delay: 4 } })
        }
        run()
    })
    return (
        <motion.div
            style={{ width: `${size}px`, height: `${size}px`, display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", overflow: "hidden" }}
            animate={animationTwo}>
            {
                enter === true ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1067 1067" width="100%" height="100%" id="logo1" fill="none">
                        <path
                            d="M590.5,77C298.62,77,62,313.62,62,605.5S298.62,1134,590.5,1134,1119,897.38,1119,605.5,882.38,77,590.5,77Z"
                            transform="translate(-57 -72)" stroke="#3D405B" strokeWidth="10" fill="#3D405B"
                        // initial={{ strokeDasharray: 3322, strokeDashoffset: 3322 }}
                        // animate={animationOne}
                        />
                        <path
                            d="M589.86,130.24c-262.69,0-475.65,213-475.65,475.65s213,475.65,475.65,475.65,475.65-213,475.65-475.65-213-475.65-475.65-475.65Z"
                            transform="translate(-57 -72)" fill="rgba(246, 248, 231,1)" stroke="#3D405B" strokeWidth="10" z="99"
                        // initial={{ strokeDasharray: 2989, strokeDashoffset: 2989 }}
                        // animate={animationOne}
                        />
                        <path
                            d="M440.42,1000.81C439,897.61,457.31,674.22,552.26,428A1661.56,1661.56,0,0,1,691,149.46,2380.24,2380.24,0,0,0,509.24,924.84,712.12,712.12,0,0,1,585.6,765.67C677.3,623.32,799,547.22,869.51,510.8A1208.09,1208.09,0,0,0,746.91,642c-125.32,156-189.4,315.45-223.68,380.4"
                            transform="translate(-62 -17)" fill="#3D405B" stroke="#3D405B" strokeWidth="10" z="999"
                        // initial={{ strokeDasharray: 2984, strokeDashoffset: 2984, }}
                        // animate={animationOne}
                        />

                    </svg>

                    :


                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1067 1067" width="100%" height="100%" id="logo" fill="none">
                        <motion.path
                            d="M590.5,77C298.62,77,62,313.62,62,605.5S298.62,1134,590.5,1134,1119,897.38,1119,605.5,882.38,77,590.5,77Z"
                            transform="translate(-57 -72)" stroke="#3D405B" strokeWidth="10" fill="#3D405B" fillOpacity={0}
                        // initial={{ strokeDasharray: 3322, strokeDashoffset: 3322 }}
                        // animate={animationOne}
                        />
                        <motion.path
                            d="M589.86,130.24c-262.69,0-475.65,213-475.65,475.65s213,475.65,475.65,475.65,475.65-213,475.65-475.65-213-475.65-475.65-475.65Z"
                            transform="translate(-57 -72)" fill="rgba(246, 248, 231,1)" fillOpacity={0} stroke="#3D405B" strokeWidth="10" z="99"
                        // initial={{ strokeDasharray: 2989, strokeDashoffset: 2989 }}
                        // animate={animationOne}
                        />
                        <motion.path
                            d="M440.42,1000.81C439,897.61,457.31,674.22,552.26,428A1661.56,1661.56,0,0,1,691,149.46,2380.24,2380.24,0,0,0,509.24,924.84,712.12,712.12,0,0,1,585.6,765.67C677.3,623.32,799,547.22,869.51,510.8A1208.09,1208.09,0,0,0,746.91,642c-125.32,156-189.4,315.45-223.68,380.4"
                            transform="translate(-62 -17)" fill="#3D405B" fillOpacity={0} stroke="#3D405B" strokeWidth="10" z="999"
                        // initial={{ strokeDasharray: 2984, strokeDashoffset: 2984, }}
                        // animate={animationOne}
                        />

                    </motion.svg>

            }
        </motion.div>


    );
}