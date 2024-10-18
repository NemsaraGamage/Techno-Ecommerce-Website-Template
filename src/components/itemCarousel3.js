import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it11 from './pics/items/it11.png'
import it12 from './pics/items/it12.png'
import it13 from './pics/items/it13.png'
import it14 from './pics/items/it14.png'
import it15 from './pics/items/it15.png'

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
            name: 'LENOVO',
            des: 'Lenovo Yogabook 9i Intel Core i7 13th Gen, 16GB RAM, 1TB SSD, Two 13.3-inch Displays, Intel Iris Xe Graphics, Windows 11 Laptop',
            price: 1450,
            image: it12
        },
        {
            name: 'ASUS',
            des: 'Asus ROG Strix SCAR 18 Gaming Laptop, Intel Core i9, 64GB RAM, 2TB SSD, 18-inch, nVidia GeForce – Black',
            price: 2499,
            image: it14
        },
        {
            name: 'HUAWEI',
            des: 'Huawei MateBook X Pro 2023 Laptop, Intel Core i7 Processor, 16 GB RAM, 1 TB SSD, 14.2-inch, Intel Iris Xe Graphics - White',
            price: 745,
            image: it15
        },
        {
            name: 'Apple',
            des: 'Apple MacBook Air M2, 8GB RAM, 512GB SSD, 13.6-inch (2022) - Midnight',
            price: 1150,
            image: it11
        },
        {
            name: 'Apple',
            des: 'Apple MacBook Air M2, 8GB RAM, 256GB SSD, 13.6-inch (2022) - Silver',
            price: 800,
            image: it13
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
