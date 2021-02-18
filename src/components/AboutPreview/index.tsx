import * as React from 'react'
import { Grid } from 'semantic-ui-react'
import './style.css'

interface aboutPreviewProps {

}

export const AboutPreview: React.FC<aboutPreviewProps> = ({ }) => {
    return (
        <section>
            <div className="about-preview-section">
                <Grid stackable>
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column width={10}>
                            <div className="picture-box">

                            </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <h3>
                                Get ahead of the curve
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised
                                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </p>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="domain-boxes">
                                <div className="domain-box">

                                </div>
                                <div className="domain-box">

                                </div>
                                <div className="domain-box">

                                </div>

                            </div>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        </section>
    );
}