import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import ApiService from '../services/ApiService';
import ProductList from '../components/productList';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    category: '',
    company: '',
    minRating: '',
    minPrice: '',
    maxPrice: '',
    availability: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await ApiService.getProducts(filterOptions);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error.message);
      // Handle error
    }
  };

  const applyFilters = () => {
    fetchProducts();
  };

  return (
    <div className="all-products-page">
      <h2>All Products</h2>
      <Filters filterOptions={filterOptions} applyFilters={applyFilters} />
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default AllProductsPage;
