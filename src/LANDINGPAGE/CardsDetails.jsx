// CardsDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cardfetch.css'

function CardsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='card-fetch-container'>
    
      <div className="card-fetch">
        <img src={product.images} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p><button className='mybutton'>Add to Cart</button>

      </div>
    </div>
  );
}

export default CardsDetails;
