import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, delay = 30, startDelay = 100, showCursor = true}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Reference to the element so we can track its position
  const containerRef = useRef(null);

  // 1. Observer: Only start when the user scrolls to this element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // It's on screen! Start typing.
          observer.disconnect(); // Stop observing once started
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the text is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Typing Logic: Only runs if isVisible is TRUE
  useEffect(() => {
    if (!isVisible) return;
    if (currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setCurrentText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, currentIndex === 0 ? startDelay : delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, startDelay, isVisible]);

  return (
    <span ref={containerRef} className="inline-block font-mono">
      {currentText}
      {/* Only show cursor if showCursor is true */}
      {showCursor && (
        <span 
          className="ml-1 animate-pulse inline-block"
          style={{ color: '#00ff66', fontWeight: 'bold' }}
        >
          ▋
        </span>
      )}
    </span>
  );
};

export default Typewriter;