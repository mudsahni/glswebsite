import * as React from 'react'
import { Grid, Icon } from 'semantic-ui-react';
import './style.css'

interface footerProps {

}

export const Footer: React.FC<footerProps> = ({ }) => {
    return (
        <section className='footer-section'>
            <footer>
                <div className="footer-contact-section">
                    <div className="contact-us-footer">
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <div className="contact-info-footer">
                                        <h3>Submit a query</h3>
                                        <p>Please drop us a message for any business or sales related queries. Someone from our team will get back to you soon.</p>
                                        <div>
                                            <span><Icon name="mail" color="teal" /><a href="mailto:info@glsbiotech.com">info@glsbiotech.com</a>; <a href="mailto:sales@glsbiotech.com">sales@glsbiotech.com</a></span>
                                            <span><Icon name="phone" color="teal" />+91-265-2285611 / +91-265-2290053</span>
                                            <span><Icon name="mobile" color="teal" />+91 - 93279 20708</span>

                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <h3>Shit on a brick</h3>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </div>
                </div>
                <div className="footer"></div>
            </footer>
        </section>
    );
}