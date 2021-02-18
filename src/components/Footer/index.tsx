import * as React from 'react'
import { Divider, Form, Grid, Icon } from 'semantic-ui-react';
import './style.css'

interface footerProps {
    footerContent: any;
}

export const Footer: React.FC<footerProps> = ({ footerContent }) => {
    return (
        <section className='footer-section'>
            <footer>
                <div className="footer-contact-section" id="contact">
                    <div className="contact-us-footer">
                        <Grid stackable>

                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <div className="contact-info-footer">
                                        <h3>{footerContent.contactSection.left.title}</h3>

                                        <p>{footerContent.contactSection.left.description}</p>
                                        {footerContent.contactSection.left.extras}
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <div className="contact-form-footer">
                                        {footerContent.contactSection.right.extras}

                                    </div>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
                <div className="footer">
                    <div className='footer-section'>
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <div className="footer-links">
                                        <span>Company</span>
                                        <span>About</span>
                                        <span>Research</span>
                                        <span>Team</span>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div className="footer-links">
                                        <span>Products & Services</span>
                                        <span>Agriculture</span>
                                        <span>Environment</span>
                                        <span>Healthcare</span>
                                    </div>

                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div className="footer-links">
                                        <span>Quick Links</span>
                                        <span>Sitemap</span>
                                        <span>Contact</span>
                                        <span>Shop</span>

                                    </div>

                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <div className="footer-links">

                                        <span>Location</span>
                                        <span>9, Krishna Estate, Gorwa, Baroda - 390 016. Gujarat - India</span>
                                        <div className="social-media-links">
                                            <Icon name='facebook' color="grey" />
                                            <Icon name='linkedin' color="grey" />
                                            <Icon name='amazon' color="grey" />

                                        </div>
                                    </div>

                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <div className="company-name-footer">
                                        <span>GLS <em>Biotech</em></span>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                    <Divider />
                    <div className='credits'>
                        <span>Copyright <Icon name="copyright outline"></Icon> {new Date().getFullYear()} Gujarat Life Sciences Pvt. Ltd.</span>
                        <span>Website by <a href="https://muditsahni.com" target="_blank"> Mudit Sahni</a></span>

                    </div>
                </div>
            </footer>
        </section>
    );
}