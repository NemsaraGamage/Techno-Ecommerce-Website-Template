import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it26 from '../pics/items/it26.png'
import it27 from '../pics/items/it27.png'
import it28 from '../pics/items/it28.png'
import it29 from '../pics/items/it29.png'
import it30 from '../pics/items/it30.png'

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
            des: 'SAMSUNG TAB A9+ Tablet, 11-inch, 4GB RAM, 64GB, Wi-Fi, SM-X210NZAAMEA – Grey',
            price: 220,
            image: it26
        },
        {
            name: 'Apple',
            des: 'Apple iPad Pro M4 256GB 8GB RAM WIFI 11-inch Tablet - Space Black',
            price: 435.99,
            image: it27
        },
        {
            name: 'huawei',
            des: 'HUAWEI MATEPAD Tablet 11.5-inch 8GB RAM 128 GB HarmonyOS 3.1 BARTOK-W09C - Space Grey',
            price: 10,
            image: it28
        },
        {
            name: 'Honor',
            des: 'Honor Pad X9 Tablet, 11.5-inch, 4GB RAM, 128GB Memory, 5301AGHT – Grey',
            price: 310,
            image: it29
        },
        {
            name: 'XIAOMI',
            des: 'XIAOMI Pad 6 Tablet, 11-inch, 8GB RAM, 256GB, 23043RP34G – Blue',
            price: 30.99,
            image: it30
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
