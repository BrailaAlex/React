import React from "react";
import { useParams } from 'react-router-dom';


const Product = ({match}) => {
  // const { productId } = useParams();
  const productId = match.params.productId;
  return (
    <div className="product">{`Product is a ${productId}`}</div>
  )
};

export default Product;