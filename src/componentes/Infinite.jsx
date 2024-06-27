/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

export default function InfiniteSlider({ photos, fondo }) {

     
    const wrapperRef = useRef(null);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        //const animationDuration = window.innerWidth / 30; // Adjust speed (50 pixels per second)
        const animationDuration= 30
        wrapper.style.animationDuration = `${animationDuration}s`;
    }, [photos]);

    return (
        <div className="infiniteSlider" style={{background:`${fondo}`}}>
            <div className="photoInfiniteWrapper" ref={wrapperRef}>
                {photos.concat(photos).map((photo, index) => (
                    <>
                    
                    <img
                        
                        key={index}
                        className={`photoInfinite ${hoveredIndex !== null && hoveredIndex !== index ? 'grayscale' : ''}`}
                        src={photo}
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                    />
                    
                    </>
                ))}
            </div>
        </div>
    );
}
