import React, { useEffect, useState } from "react";

const Dimensions = () => {
  const [dimetions, setDimensions] = useState({
    width: null,
    height: null
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = event => {
      const { innerHeight, innerWidth } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(dimetions);
  const { width, height } = dimetions;

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;