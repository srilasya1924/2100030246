import React from 'react';

const productDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'Available' : 'Not Available'}</p>
      <p>Description: {product.description}</p>
      <p>Features: {product.features.join(', ')}</p>
    </div>
  );
};

export default productDetails;
