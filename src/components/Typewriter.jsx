import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, delay = 30, startDelay = 100, showCursor = true}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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