import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it31 from '../pics/items/it31.png'
import it32 from '../pics/items/it32.png'
import it33 from '../pics/items/it33.png'
import it34 from '../pics/items/it34.png'
import it35 from '../pics/items/it35.png'

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
            name: 'Canon',
            des: 'Canon EOS R100 Mirrorless Camera + RF-S 18-45mm Lens (6052C013AA)',
            price: 120,
            image: it31
        },
        {
            name: 'Canon',
            des: 'Canon EOS R50 Mirrorless Camera + RF-S 18-45mm f4.5-6.3 IS STM Lens, 5811C013AA – Black',
            price: 235.99,
            image: it32
        },
        {
            name: 'Nikon',
            des: 'Nikon Z30 4K Mirrorless Digital Camera Kit, with16-50mm Lens - Black',
            price: 410,
            image: it33
        },
        {
            name: 'Nikon',
            des: 'Nikon D850 DSLR Camera',
            price: 740,
            image: it34
        },
        {
            name: 'Sony',
            des: 'Sony Alpha 7C Compact Full-Frame Mirrorless Camera - Silver',
            price: 30.99,
            image: it35
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
