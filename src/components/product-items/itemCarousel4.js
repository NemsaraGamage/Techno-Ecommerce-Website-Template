import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { Carousel } from 'primereact/carousel';

import it16 from '../pics/items/it16.png'
import it17 from '../pics/items/it17.png'
import it18 from '../pics/items/it18.png'
import it19 from '../pics/items/it19.png'
import it20 from '../pics/items/it20.png'

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
            name: 'Microsoft',
            des: 'Xbox Live 15 EU Gift Card (Europe Store)',
            price: 20,
            image: it16
        },
        {
            name: 'Apple',
            des: 'Apple App Store & iTunes Gift Card $4',
            price: 4,
            image: it17
        },
        {
            name: 'Amazon',
            des: 'Amazon Gift Card $10 (U.S. Account)',
            price: 10,
            image: it18
        },
        {
            name: 'Riot',
            des: 'Valorant Gift Card $50 (for US account only)',
            price: 800,
            image: it19
        },
        {
            name: 'Steam',
            des: 'Steam Wallet Gift Card - 30 KWD',
            price: 50,
            image: it20
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
