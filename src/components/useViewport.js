import { createContext, React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const viewportContext = createContext({});

export default function ViewportProvider({children}) {
  const [width, setWidth] = useState(window.innerWidth);

  // Listen to window resize events
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Wrap child elements with context provider 
  return (
    <viewportContext.Provider value={width}>
      {children}
    </viewportContext.Provider>
  );
}

ViewportProvider.propTypes = {
  children: PropTypes.element.isRequired
}
