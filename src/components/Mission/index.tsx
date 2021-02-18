import { motion } from 'framer-motion';
import * as React from 'react'
import { Button, Grid, Image } from 'semantic-ui-react';
import './style.css'
import Research from '../../assets/biology.svg'
import Industry from '../../assets/industry.svg'
import Sales from '../../assets/sales.svg'

interface missionProps {

}

export const Mission: React.FC<missionProps> = ({ }) => {


    return (
        <section>
            <div className="mission">
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div className="mission-text">
                                <h3>Improving farming for a better tomorrow</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut reprehenderit repellat aliquid sapiente consequuntur. Voluptatum aut nulla numquam dolor quidem dolore laudantium porro temporibus nihil, dicta voluptatibus impedit eius atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur facilis. Cumque doloribus sequi nesciunt provident cupiditate animi fuga magnam quia. Consectetur ipsum molestias fugit, hic nemo officiis sint quisquam.</p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <motion.div className="domain-svg"
                            // animate={{
                            //     scale: [0.1, 0.3, 0.5, 0.7, 1, 1, 1.2, 1.4, 1, 1],
                            //     rotate: [0, 0, 0, 270, 270, 270, 0, 0, 0, 0]
                            // }}
                            // transition={{
                            //     duration: 5,
                            //     ease: 'easeInOut',
                            //     times: [0, 0, 0.2, 0.2, 0.5, 0.5, 0.8, 0.8, 1, 1],
                            //     loop: Infinity,
                            //     repeatDelay: 1
                            // }}
                            >

                            </motion.div>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <div className="domain-text">
                                <h3>Get ahead of the curve</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi architecto praesentium nemo necessitatibus unde minima hic optio pariatur numquam, veritatis ipsa quibusdam quisquam placeat aspernatur quo, aut vel dolores a?
                            </p>
                                <div>
                                    <Button color='teal'>Read more</Button>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <div className="domain-box domain-box-active">
                                <Image src={Research} width={60}></Image>
                                <span>Research</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus quae quo ad! Illo, cupiditate voluptates esse impedit amet adipisci eligendi eveniet porro velit similique perspiciatis non molestias, corrupti ipsum!</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="domain-box">
                                <Image src={Industry} width={60}></Image>

                                <span>Manufacturing</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus quae quo ad! Illo, cupiditate voluptates esse impedit amet adipisci eligendi eveniet porro velit similique perspiciatis non molestias, corrupti ipsum!</p>

                            </div>

                        </Grid.Column>
                        <Grid.Column>
                            <div className="domain-box">
                                <Image src={Sales} width={60}></Image>

                                <span>Sales & Marketing</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit temporibus quae quo ad! Illo, cupiditate voluptates esse impedit amet adipisci eligendi eveniet porro velit similique perspiciatis non molestias, corrupti ipsum!</p>

                            </div>

                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        </section>
    );
}