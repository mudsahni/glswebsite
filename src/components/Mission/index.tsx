import * as React from 'react'
import './style.css'

interface missionProps {

}

export const Mission: React.FC<missionProps> = ({ }) => {

    React.useEffect(() => {

        // const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

        // gsap.to(".text", {
        //     scrollTrigger: {
        //         trigger: ".text",
        //     },
        //     y: '0%',
        //     duration: 1.5, stagger: 0.25,

        // });
        // tl.from('.green-line-top', {
        //     scrollTrigger: {
        //         trigger: ".text"
        //     },
        //     scaleX: 0,
        //     duration: 20,
        //     transformOrigin: "left",
        //     ease: "power1.out"
        // }, 0)

        // tl.from('.green-line-bottom', {
        //     scrollTrigger: {
        //         trigger: ".text"
        //     },
        //     scaleX: 0,
        //     duration: 20,
        //     transformOrigin: "right",
        //     ease: "power1.out"
        // }, 0)

        // tl.to(".slider", { x: "-100%", duration: 1.5, delay: 3.5 })
        // tl.to('.mission-intro', { x: "-100%", duration: 0.5 }, "-=1")
        // tl.to(".slider", { x: "100%", duration: 1.5, delay: 3.5 })

        // tl.set('.mission-intro', { display: "none" })

    })
    return (
        <section>
            <div className="mission">
                <div className="mission-intro-text">
                    <h1 className="hide"><span className="text">Improving Farming Standards
                    for a Brighter Tomorrow
                    </span></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>
            </div>
            <div className="mission-intro">

                <h1 className="hide"><span className="text">Improving Farming Standards
                for a Brighter Tomorrow
                    </span></h1>
                <h1 className="hide"><span className="text">Improving Farming Standards
                for a Brighter Tomorrow
                    </span></h1>
                <h1 className="hide"><span className="text">Improving Farming Standards
                for a Brighter Tomorrow
                    </span></h1>

            </div>
            <div className="green-line-top">

            </div>

            <div className="green-line-bottom">

            </div>


            <div className="slider"></div>

        </section>
    );
}