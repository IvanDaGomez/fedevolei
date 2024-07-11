/* eslint-disable react/prop-types */
import  { useEffect, useRef } from "react";

export default function PhotoSlider({ photos }) {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const sliderScrollbarRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const sliderScrollbar = sliderScrollbarRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    let maxScrollLeft = 0;

    const initSlider = () => {
      // Set scrollbar thumb size
      const scrollbarThumbWidth = (imageList.clientWidth / imageList.scrollWidth) * sliderScrollbar.clientWidth;
      scrollbarThumb.style.width = `${scrollbarThumbWidth}px`;

      maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      // Handle scrollbar thumb drag
      const handleMouseDown = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

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
      const handleSlide = (direction) => {
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      };

      prevButton.addEventListener("click", () => handleSlide(-1));
      nextButton.addEventListener("click", () => handleSlide(1));

      // Show or hide slide buttons based on scroll position
      const handleSlideButtons = () => {
        prevButton.style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        nextButton.style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
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
    };

    if (imageList && scrollbarThumb && sliderScrollbar && prevButton && nextButton) {
      initSlider();

      const handleResize = () => {
        initSlider();
      };
      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };
      const handleMouseDown = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

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

      const debouncedResize = debounce(handleResize, 200);

      window.addEventListener("resize", debouncedResize);

      return () => {
        scrollbarThumb.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("resize", debouncedResize);
        imageList.removeEventListener("scroll", updateScrollThumbPosition);
      };
    }
  }, [photos]);

  // Debounce function to limit the rate at which a function can fire
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  return (
    <div className="container">
      <div className="slider-wrapper">
      <button ref={prevButtonRef} id="prev-slide" className="slide-button material-symbols-rounded">
        <svg style={{transform:"rotate(180deg)"}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </button>
        <ul ref={imageListRef} className="image-list">
          {photos.map((photo, index) => (
            <img key={index} className="image-item" src={photo} alt={`image-${index}`} />
          ))}
        </ul>
        <button ref={nextButtonRef} id="next-slide" className="slide-button material-symbols-rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
