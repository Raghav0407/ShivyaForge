import React from 'react'
import Hotforging from './Hotforging';
import Gallery from './Gallery';
import HotDie_1 from '../Assets/img/Hot-Die-Forging.jpg';
import HotDie_2 from "../Assets/img/Hardware-Tools-300x200.jpeg";
import data from '../Assets/data/Carousel.json';

export const MiddleComponent = () => {
    const images = [HotDie_1, HotDie_2];
    return (
        <div>
            {data && data.map((item, index) => (
                <Hotforging
                    key={index}
                    btn_name={item.btn_name}
                    img={images[item.img]}
                    title={item.title}
                    description={item.description}
                    flag={item.flag}
                />
            ))}
            <Gallery />
        </div>
    )
}
