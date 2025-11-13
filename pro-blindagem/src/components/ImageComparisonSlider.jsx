import React, { useState, useRef, useEffect, useCallback } from 'react';
// Assuming your images are imported/available as variables
import "../assets/css/ImageComparisonSlider.css";
import BrokenGlass from '../assets/imagens/Iphones/antesDepois/TESTE.jpg';
import TelaNova from '../assets/imagens/Iphones/antesDepois/TelaNova.png';

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position (50% width)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Function to calculate the new slider position based on mouse/touch x-coordinate
  const handleDrag = useCallback((clientX) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;

      // Clamp the position between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    }
  }, []);

  // Mouse event handlers for dragging
  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleDrag(e.clientX);
    }
  }, [isDragging, handleDrag]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch event handlers for mobile
  const handleTouchMove = useCallback((e) => {
    if (isDragging && e.touches.length > 0) {
      handleDrag(e.touches[0].clientX);
    }
  }, [isDragging, handleDrag]);

  // Add and clean up global event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp); // touchend also stops dragging
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="comparison-container" ref={containerRef}>
      {/* 1. Background Image (The "New Screen" - visible on the left) */}
      <img src={TelaNova} alt="New Screen" className="comparison-image background" />

      {/* 2. Foreground Image Container (The "Broken Glass" - controls visibility with width) */}
      <div 
        className="comparison-image foreground-container" 
        style={{ width: `${sliderPosition}%` }} // Key CSS change via state
      >
        <img src={BrokenGlass} alt="Broken Glass" className="comparison-image foreground-image" />
      </div>

      {/* 3. The Drag Handle */}
      <div
        className="comparison-handle"
        style={{ left: `${sliderPosition}%` }} // Handle position matches foreground width
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="handle-line"></div>
        <div className="handle-circle"></div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;