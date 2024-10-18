import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it1 from './pics/items/it1.jpg'
import it2 from './pics/items/it2.png'
import it3 from './pics/items/it3.png'
import it4 from './pics/items/it4.png'
import it5 from './pics/items/it5.png'

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
            name: 'iPhone 12',
            des: 'iPhone 12 128GB 6.1-inch',
            price: 400.99,
            image: it1
        },
        {
            name: 'HONOR Magic V2 ',
            des: 'HONOR Magic V2 7.92-inch, 16GB RAM, 512GB',
            des2: ' ',
            price: 49.99,
            image: it2
        },
        {
            name: 'Apple iPad Pro 2022',
            des: 'Apple iPad Pro 2022 M2 256GB 12.9-inch WiFI',
            price: 700,
            image: it3
        },
        {
            name: 'Canon EOS R6 Mark II',
            des: 'Canon EOS R6 Mark II Full Frame RF Mirrorless Camera & 24-105mm F4 Lens IS USM',
            price: 1999,
            image: it4
        },
        {
            name: 'Sony Bravia 9',
            des: 'Sony Bravia 9 75” 4K Mini LED UHD Google TV',
            price: 1699,
            image: it5
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
                        className="w-6 shadow-2"
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
