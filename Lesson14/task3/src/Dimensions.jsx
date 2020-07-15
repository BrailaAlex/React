import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });

    const handleResize = event => {
      const { innerHeight, innerWidth } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    }
      window.addEventListener('resize', handleResize);
      
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [innerWidth, innerHeight]);
  const { width, height } = dimensions;
    return(
      <div className="dimensions">{`${width}px ${height}px`}</div>
    )
};

export default Dimensions;