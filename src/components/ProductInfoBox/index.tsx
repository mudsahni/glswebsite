import * as React from 'react'
import { Button } from 'semantic-ui-react';
import './style.css'

interface productInfoBoxProps {
    product: { name: string, description: string, benefits: JSX.Element, price: string, usage: JSX.Element, tags: string[], type: string, image: string, amazon: string };
}

export const ProductInfoBox: React.FC<productInfoBoxProps> = ({ product }) => {
    return (
        <div className="product-info-box">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>Benefits</span>
            <p>{product.benefits}</p>
            <span>Usage</span>
            {product.usage}
            <Button basic color="teal">Buy on Amazon</Button>
        </div>
    );
}