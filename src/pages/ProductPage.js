import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/productDetails';
import ApiService from '../services/ApiService';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (id) => {
    try {
      const fetchedProduct = await ApiService.getProductById(id);
      setProduct(fetchedProduct);
    } catch (error) {
      console.error('Error fetching product:', error.message);
      // Handle error
    }
  };

  return (
    <div className="product-page">
      <h2>Product Details</h2>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
