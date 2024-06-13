import React from 'react';
import { Link } from 'react-router-dom';

const productList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
          <p>Company: {product.company}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability ? 'Available' : 'Not Available'}</p>
        </div>
      ))}
    </div>
  );
};

export default productList;
