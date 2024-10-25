import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it6 from '../pics/items/it6.png'
import it7 from '../pics/items/it7.png'
import it8 from '../pics/items/it8.png'
import it9 from '../pics/items/it9.png'
import it10 from '../pics/items/it10.png'

export default function BasicDemo() {
    const [products, setProducts] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    // Custom product data
    const customProducts = [
        {
            name: 'Samsung',
            des: 'Samsung Galaxy S24 Ultra Phone, 6.8-inch, 12GB RAM, 256GB, SM-S926BZKCMEA – Titanium Black',
            price: 850,
            image: it6
        },
        {
            name: 'Samsung',
            des: 'Samsung Galaxy S24 Ultra Phone, 6.8-inch, 12GB RAM, 256GB, SM-S926BZVCMEA – Titanium Violet',
            price: 800,
            image: it7
        },
        {
            name: 'Apple',
            des: 'Apple iPhone 16 Pro 6.3-inch 256GB Black Titanium',
            price: 1450,
            image: it8
        },
        {
            name: 'Apple',
            des: 'Apple iPhone 16 Plus 6.7-inch 256GB Pink',
            price: 1999,
            image: it9
        },
        {
            name: 'Samsung',
            des: 'Samsung Galaxy Z Flip 4 5G 256GB Phone - Graphite',
            price: 799,
            image: it10
        }
    ];

    useEffect(() => {
        // Set the custom products when the component is mounted
        setProducts(customProducts);
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-6 shadow-2 itemCarImg"
                        style={{ maxHeight: '200px', objectFit: 'contain' }} // Ensure images fit within the container
                    />
                </div>
                <div className='itemCarouselDescription'>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">{product.des}</h6>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <button className='addCartBtn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card" >
            <Carousel
                value={products}
                numVisible={4}
                numScroll={4}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            />
        </div>
    );
}
