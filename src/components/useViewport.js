import { createContext, React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ViewportContext = createContext({});

function ViewportProvider({children}) {
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
    <ViewportContext.Provider value={width}>
      {children}
    </ViewportContext.Provider>
  );
}

ViewportProvider.propTypes = {
  children: PropTypes.array.isRequired
}

export { ViewportContext, ViewportProvider };