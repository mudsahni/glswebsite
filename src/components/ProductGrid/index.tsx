import * as React from 'react'
import { Grid } from 'semantic-ui-react'
import { ProductInfoBox } from '../ProductInfoBox';
import './style.css'
import { products } from '../../content/products'

interface productGridProps {

}

export const ProductGrid: React.FC<productGridProps> = ({ }) => {
    return (
        <section className="product-grid">
            <div>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <ProductInfoBox product={products[0]} />
                        </Grid.Column>
                        <Grid.Column width={8}>

                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        </section>
    );
}