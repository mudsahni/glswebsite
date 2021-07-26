import { motion } from 'framer-motion';
import * as React from 'react'
import { Button, Grid, Icon, Image, Statistic } from 'semantic-ui-react';
import './style.css'
import Research from '../../assets/biology.svg'
import Industry from '../../assets/industry.svg'
import Sales from '../../assets/sales.svg'
import { FadeInWhenVisible } from '../FadeInWhenVisible';
import defaultSVG from '../../assets/researchPlant.svg'
import researchSVG from '../../assets/grainOverhead.svg'

interface missionProps {
    mission: { title: string, description: string };
}


export const Mission: React.FC<missionProps> = ({ mission }) => {
    const [domainBackground, setDomainBackground] = React.useState<string>(defaultSVG)

    return (
        <React.Fragment>
            <section>
                <div className="mission">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <div className="mission-text">
                                    <FadeInWhenVisible duration={2} stagger={0}>
                                        <h3>{mission.title}</h3>
                                    </FadeInWhenVisible >
                                    <FadeInWhenVisible duration={2} stagger={0}>

                                        <p>{mission.description}</p>
                                    </FadeInWhenVisible>

                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <div className="company-statistics">
                                    <div className="company-statistic">
                                        <div className="statistic-icon">
                                            {/* <Icon name="calendar alternate outline" size="huge" /> */}
                                        </div>
                                        <div className="statistic-content">
                                            <div className="statistic-number">
                                                {`>`}20
                                        </div>
                                            <div className='statistic-text'>
                                                Years of Service
                                        </div>
                                        </div>

                                    </div>
                                    <div className="company-statistic">
                                        <div className="statistic-content">
                                            <div className="statistic-number">
                                                <Icon name="trophy"></Icon>
                                                <span>1</span>
                                            </div>
                                            <div className='statistic-text'>
                                                Guiness World Record
                                        </div>
                                        </div>

                                    </div>
                                    <div className="company-statistic">
                                        <div className="statistic-icon">
                                            {/* <Icon name="calendar alternate outline" size="huge" /> */}
                                        </div>
                                        <div className="statistic-content">
                                            <div className="statistic-number">
                                                {`>`}20
                                        </div>
                                            <div className='statistic-text'>
                                                Years of Service
                                        </div>
                                        </div>

                                    </div>

                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </section>
            <section className="domain-section">
                <div className="domain">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <div>
                                    <Image src={domainBackground} width={500} />
                                </div>
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
                                <div className="domain-box" onClick={() => setDomainBackground(researchSVG)}>
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
        </React.Fragment>
    );
}