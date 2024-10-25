import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it21 from '../pics/items/it21.png'
import it22 from '../pics/items/it22.png'
import it23 from '../pics/items/it23.png'
import it24 from '../pics/items/it24.png'
import it25 from '../pics/items/it25.png'

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
            name: 'Ayaneo',
            des: 'Ayaneo 2 Handheld Gaming Console, AMD Ryzen 7, 32GB RAM, 2TB Storage – White',
            price: 435,
            image: it21
        },
        {
            name: 'PNY',
            des: 'PNY GeForce RTX 3090 24GB XLR8 Revel Epic-X RGB Gaming Graphics Card Triple Fan',
            price: 700,
            image: it22
        },
        {
            name: 'Steelseries',
            des: 'Steelseries Arctis Nova Pro Wired Gaming Headset For PC and Playstation',
            price: 10,
            image: it23
        },
        {
            name: 'Sony',
            des: 'Sony PlayStation 5 Gaming Bundle of Slim - Disc Edition Console + Portal Remote Player',
            price: 310,
            image: it24
        },
        {
            name: 'SADES',
            des: 'Sades K13 Sickle Mechanical Gaming Keyboard',
            price: 30.99,
            image: it25
        },
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
