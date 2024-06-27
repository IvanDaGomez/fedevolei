/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export default function PhotoSlider({ photos }) {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const sliderScrollbarRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const slideButtons = [prevButtonRef.current, nextButtonRef.current];
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;

    let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const initSlider = () => {
      // Set scrollbar thumb size
      const scrollbarThumbWidth = (imageList.clientWidth / imageList.scrollWidth) * sliderScrollbar.clientWidth;
      scrollbarThumb.style.width = `${scrollbarThumbWidth}px`;

      maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      // Handle scrollbar thumb drag
      const handleMouseDown = (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      };

      scrollbarThumb.addEventListener("mousedown", handleMouseDown);

      // Slide images according to the slide button clicks
      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      // Show or hide slide buttons based on scroll position
      const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
      };

      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };

      imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
      });

      handleSlideButtons(); // Initialize button visibility
      updateScrollThumbPosition(); // Initialize thumb position

      const handleResize = () => {
        initSlider();
      };

      const debounceResize = debounce(handleResize, 200);

      window.addEventListener("resize", debounceResize);
      return () => {
        scrollbarThumb.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("resize", debounceResize);
        imageList.removeEventListener("scroll", updateScrollThumbPosition);
      };
    };

    initSlider();
  }, [photos]);

  // Debounce function to limit the rate at which a function can fire
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  return (
    <div className="container">
      <div className="slider-wrapper">
        <button ref={prevButtonRef} id="prev-slide" className="slide-button material-symbols-rounded">
        <svg style={{transform:"rotate(180deg)"}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </button>
        <ul ref={imageListRef} className="image-list">
          {photos.map((photo, index) => (
            <img key={index} className="image-item" src={photo} alt={"image"} />
          ))}
        </ul>
        <button ref={nextButtonRef} id="next-slide" className="slide-button material-symbols-rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </button>
      </div>
      <div className="slider-scrollbar" ref={sliderScrollbarRef}>
        <div className="scrollbar-track">
          <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
        </div>
      </div>
    </div>
  );
}
