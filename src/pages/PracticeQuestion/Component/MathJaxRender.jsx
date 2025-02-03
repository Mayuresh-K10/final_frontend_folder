import React, { useEffect, useRef } from 'react';

const MathJaxRenderer = ({ mathContent }) => {
  const mathContainer = useRef(null);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typeset();
    }
  }, [mathContent]);

  return (
    <div ref={mathContainer}>
      <span>{mathContent}</span>
    </div>
  );
};

export default MathJaxRenderer;
