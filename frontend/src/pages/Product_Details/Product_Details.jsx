import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Product_Details.css';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    // Find the product with the matching id
    if (products) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/products'); // Redirect if product not found
      }
    }
  }, [id, products, navigate]);

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  // Create a thumbnail array (for demo purposes, using the same image 3 times)
  const thumbnails = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    // Add to cart functionality can be implemented here
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-images">
          <div className="main-image">
            <img src={thumbnails[selectedImage]} alt={product.name} />
          </div>
          <div className="image-thumbnails">
            {thumbnails.map((thumb, index) => (
              <div 
                key={index} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={thumb} alt={`${product.name} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          
          <div className="product-specs">
            <table>
              <tbody>
                <tr>
                  <td className="spec-label">Type</td>
                  <td>{product.type || 'Concrete Product'}</td>
                </tr>
                <tr>
                  <td className="spec-label">Color</td>
                  <td>{product.color || 'Standard'}</td>
                </tr>
                <tr>
                  <td className="spec-label">Price</td>
                  <td>${product.price}</td>
                </tr>
                {product.shape && (
                  <tr>
                    <td className="spec-label">Shape</td>
                    <td>{product.shape}</td>
                  </tr>
                )}
                {product.condition && (
                  <tr>
                    <td className="spec-label">Condition</td>
                    <td>{product.condition}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;