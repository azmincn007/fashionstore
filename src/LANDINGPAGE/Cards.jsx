import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

function Cards() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));

    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    } else {
      // If no category is selected, reset to display all products
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [selectedCategory]);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container">
      <h2>Check our products</h2>
      <div className="category-products">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="mappingproducts">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className='link'>
            <div className="card">
              <div><img src={product.images} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p></div>
              <div><button className='mybutton'>Add to cart</button></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
