import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it36 from './pics/items/it36.png'
import it37 from './pics/items/it37.png'
import it38 from './pics/items/it38.png'
import it39 from './pics/items/it39.png'
import it40 from './pics/items/it40.png'

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
            name: 'Acer',
            des: 'Acer Nitro VG271Z Gaming Monitor, IPS, FHD,27 inch, 280HZ, 0.5ms, VG271ZBMIIPX',
            price: 120,
            image: it36
        },
        {
            name: 'LG',
            des: 'LG 27" FHD Borderless Gaming Monitor, 100Hz, 27MR400-B – Black',
            price: 235.99,
            image: it37
        },
        {
            name: 'Philips',
            des: 'Philips QD OLED Curved Gaming Monitor, 34-inch, 34M2C8600 - White',
            price: 410,
            image: it38
        },
        {
            name: 'Acer',
            des: 'Acer Nitro XV271UM3 Gaming Monitor, IPS, QHD ,27 inch ,180HZ, 0.5ms, XV271UM3BMIIPRX',
            price: 740,
            image: it39
        },
        {
            name: 'Corsair',
            des: 'Corsair XENEON 27-inch QHD OLED Gaming Monitor – Black',
            price: 30.99,
            image: it40
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
