import React from "react";
import { useParams, useRouteMatch } from 'react-router-dom';


const Product = ({match}) => {
  return (
    <div className="product">{match.params.productId}</div>
  )
};

export default Product;