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
    window.addEventListener('resize', () => setDimensions({ width: innerWidth, height: innerHeight }));
    return () => {
      debugger;
      window.removeEventListener('resize', () => setDimensions({ width: innerWidth, height: innerHeight }))
    }
  }, [innerWidth, innerHeight]);
  const { width, height } = dimensions;
    return(
      <div className="dimensions">{`${width}px ${height}px`}</div>
    )
};

export default Dimensions;