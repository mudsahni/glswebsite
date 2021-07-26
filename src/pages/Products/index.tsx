import * as React from 'react'
import { ProductGrid } from '../../components/ProductGrid';
import './style.css'

interface productsProps {

}

export const Products: React.FC<productsProps> = ({ }) => {
    return (

        <div className="products">
            <div className="pseudo-nav"></div>
            <ProductGrid />
        </div>
    );
}