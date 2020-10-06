import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            alt=""
            />
            {/* Product(id,title,price,rating,image)*/}
            <div className="home__row">
                <Product
                id="1234561"
                title="Cracking the Coding Interview"
                price={409}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
                />

                <Product
                id="1234562"
                title="OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)"
                price={59999}
                rating={4}
                image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY218_.jpg"
            />
            
            </div>

            <div className="home__row">
                <Product
                id="1234563"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Gray (4th Generation)"
                price={95999}
                rating={5}
                image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
                />

                <Product
                id="1234564"
                title="Echo Dot (3rd Gen) Charcoal with Echo Auto"
                price={6499}
                rating={5}
                image="https://m.media-amazon.com/images/I/61nCzkCteAL._AC_UY218_.jpg"
                />
            
                <Product
                id="1234565"
                title="Samsung Galaxy Watch Active 2 (44mm, GPS, Bluetooth, Unlocked LTE)"
                price={32999}
                rating={4}
                image="https://m.media-amazon.com/images/I/81L6Pq20UKL._AC_UY218_.jpg"
                />
            
            </div>

            <div className="home__row">
                <Product
                id="1234566"
                title="LG QHD (2560 x 1440) 32 Inch IPS Display 3 Side Borderless - HDR 10, sRGB 99%, AMD Free sync - Dual HDMI"
                price={20999}
                rating={4}
                image="https://m.media-amazon.com/images/I/61rJzaYpycL._AC_UY218_.jpg"
                />

            
            </div>
            
        </div>
    )
}

export default Home
