/* eslint-disable react/prop-types */
import {  useRef, useState } from 'react';

export default function InfiniteSlider({ photos, fondo }) {

     
    const wrapperRef = useRef(null);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="infiniteSlider" style={{background:`${fondo}`}}>
            <div className="photoInfiniteWrapper" ref={wrapperRef}>
                {photos.concat(photos).map((photo, index) => (
                    <>
                    
                    <img
                        
                        key={index}
                        className={`photoInfinite ${hoveredIndex !== null && hoveredIndex !== index ? 'grayscale' : ''}`}
                        src={photo}
                        onMouseOver={() => {
                            setHoveredIndex(index);
                            
                            }}
                        onMouseOut={() => setHoveredIndex(null)}
                    />
                    
                    </>
                ))}
            </div>
        </div>
    );
}
