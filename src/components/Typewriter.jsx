import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 50, startDelay = 0 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Delay the start of typing (optional)
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, started]);

  return (
    <span>
      {currentText}
      {/* Blinking Cursor only shows while typing */}
      {currentIndex < text.length && (
        <span className="border-r-2 border-dracula-pink animate-pulse ml-1"></span>
      )}
    </span>
  );
};

export default Typewriter;